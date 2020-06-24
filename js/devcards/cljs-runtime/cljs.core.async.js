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
var val_36838 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36838) : fn1.call(null,val_36838));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36838) : fn1.call(null,val_36838));
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
var n__4666__auto___36843 = n;
var x_36844 = (0);
while(true){
if((x_36844 < n__4666__auto___36843)){
(a[x_36844] = x_36844);

var G__36845 = (x_36844 + (1));
x_36844 = G__36845;
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
var G__36854 = (i + (1));
i = G__36854;
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
var len__4789__auto___36856 = arguments.length;
var i__4790__auto___36857 = (0);
while(true){
if((i__4790__auto___36857 < len__4789__auto___36856)){
args__4795__auto__.push((arguments[i__4790__auto___36857]));

var G__36858 = (i__4790__auto___36857 + (1));
i__4790__auto___36857 = G__36858;
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
var c__34267__auto___36863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34416){
var state_val_34417 = (state_34416[(1)]);
if((state_val_34417 === (7))){
var inst_34412 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34418_36865 = state_34416__$1;
(statearr_34418_36865[(2)] = inst_34412);

(statearr_34418_36865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (1))){
var state_34416__$1 = state_34416;
var statearr_34419_36866 = state_34416__$1;
(statearr_34419_36866[(2)] = null);

(statearr_34419_36866[(1)] = (2));


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
var statearr_34421_36868 = state_34416__$1;
(statearr_34421_36868[(1)] = (5));

} else {
var statearr_34422_36869 = state_34416__$1;
(statearr_34422_36869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (13))){
var state_34416__$1 = state_34416;
var statearr_34423_36870 = state_34416__$1;
(statearr_34423_36870[(2)] = null);

(statearr_34423_36870[(1)] = (14));


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
var statearr_34424_36872 = state_34416__$1;
(statearr_34424_36872[(2)] = null);

(statearr_34424_36872[(1)] = (2));


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
var statearr_34425_36873 = state_34416__$1;
(statearr_34425_36873[(1)] = (12));

} else {
var statearr_34426_36874 = state_34416__$1;
(statearr_34426_36874[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (9))){
var state_34416__$1 = state_34416;
var statearr_34427_36876 = state_34416__$1;
(statearr_34427_36876[(2)] = null);

(statearr_34427_36876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (5))){
var state_34416__$1 = state_34416;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34428_36877 = state_34416__$1;
(statearr_34428_36877[(1)] = (8));

} else {
var statearr_34429_36878 = state_34416__$1;
(statearr_34429_36878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (14))){
var inst_34410 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34430_36880 = state_34416__$1;
(statearr_34430_36880[(2)] = inst_34410);

(statearr_34430_36880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (10))){
var inst_34402 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34431_36881 = state_34416__$1;
(statearr_34431_36881[(2)] = inst_34402);

(statearr_34431_36881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (8))){
var inst_34399 = cljs.core.async.close_BANG_(to);
var state_34416__$1 = state_34416;
var statearr_34436_36882 = state_34416__$1;
(statearr_34436_36882[(2)] = inst_34399);

(statearr_34436_36882[(1)] = (10));


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
var statearr_34437 = [null,null,null,null,null,null,null,null];
(statearr_34437[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34437[(1)] = (1));

return statearr_34437;
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
}catch (e34438){if((e34438 instanceof Object)){
var ex__34203__auto__ = e34438;
var statearr_34439_36884 = state_34416;
(statearr_34439_36884[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34438;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36886 = state_34416;
state_34416 = G__36886;
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
var state__34269__auto__ = (function (){var statearr_34440 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34440[(6)] = c__34267__auto___36863);

return statearr_34440;
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
var process = (function (p__34442){
var vec__34444 = p__34442;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34444,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34444,(1),null);
var job = vec__34444;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34267__auto___36888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34451){
var state_val_34452 = (state_34451[(1)]);
if((state_val_34452 === (1))){
var state_34451__$1 = state_34451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34451__$1,(2),res,v);
} else {
if((state_val_34452 === (2))){
var inst_34448 = (state_34451[(2)]);
var inst_34449 = cljs.core.async.close_BANG_(res);
var state_34451__$1 = (function (){var statearr_34454 = state_34451;
(statearr_34454[(7)] = inst_34448);

return statearr_34454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34451__$1,inst_34449);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34451){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34451);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34457){if((e34457 instanceof Object)){
var ex__34203__auto__ = e34457;
var statearr_34458_36891 = state_34451;
(statearr_34458_36891[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36893 = state_34451;
state_34451 = G__36893;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34451){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34459 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34459[(6)] = c__34267__auto___36888);

return statearr_34459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34462){
var vec__34463 = p__34462;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34463,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34463,(1),null);
var job = vec__34463;
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
var n__4666__auto___36895 = n;
var __36896 = (0);
while(true){
if((__36896 < n__4666__auto___36895)){
var G__34471_36897 = type;
var G__34471_36898__$1 = (((G__34471_36897 instanceof cljs.core.Keyword))?G__34471_36897.fqn:null);
switch (G__34471_36898__$1) {
case "compute":
var c__34267__auto___36901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36896,c__34267__auto___36901,G__34471_36897,G__34471_36898__$1,n__4666__auto___36895,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36896,c__34267__auto___36901,G__34471_36897,G__34471_36898__$1,n__4666__auto___36895,jobs,results,process,async){
return (function (state_34484){
var state_val_34485 = (state_34484[(1)]);
if((state_val_34485 === (1))){
var state_34484__$1 = state_34484;
var statearr_34486_36902 = state_34484__$1;
(statearr_34486_36902[(2)] = null);

(statearr_34486_36902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (2))){
var state_34484__$1 = state_34484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34484__$1,(4),jobs);
} else {
if((state_val_34485 === (3))){
var inst_34482 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34484__$1,inst_34482);
} else {
if((state_val_34485 === (4))){
var inst_34474 = (state_34484[(2)]);
var inst_34475 = process(inst_34474);
var state_34484__$1 = state_34484;
if(cljs.core.truth_(inst_34475)){
var statearr_34488_36904 = state_34484__$1;
(statearr_34488_36904[(1)] = (5));

} else {
var statearr_34489_36905 = state_34484__$1;
(statearr_34489_36905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (5))){
var state_34484__$1 = state_34484;
var statearr_34490_36907 = state_34484__$1;
(statearr_34490_36907[(2)] = null);

(statearr_34490_36907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (6))){
var state_34484__$1 = state_34484;
var statearr_34491_36908 = state_34484__$1;
(statearr_34491_36908[(2)] = null);

(statearr_34491_36908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (7))){
var inst_34480 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
var statearr_34492_36909 = state_34484__$1;
(statearr_34492_36909[(2)] = inst_34480);

(statearr_34492_36909[(1)] = (3));


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
});})(__36896,c__34267__auto___36901,G__34471_36897,G__34471_36898__$1,n__4666__auto___36895,jobs,results,process,async))
;
return ((function (__36896,switch__34199__auto__,c__34267__auto___36901,G__34471_36897,G__34471_36898__$1,n__4666__auto___36895,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34493 = [null,null,null,null,null,null,null];
(statearr_34493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34493[(1)] = (1));

return statearr_34493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34484){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34484);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34495){if((e34495 instanceof Object)){
var ex__34203__auto__ = e34495;
var statearr_34496_36912 = state_34484;
(statearr_34496_36912[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36913 = state_34484;
state_34484 = G__36913;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34484){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36896,switch__34199__auto__,c__34267__auto___36901,G__34471_36897,G__34471_36898__$1,n__4666__auto___36895,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34500 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34500[(6)] = c__34267__auto___36901);

return statearr_34500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36896,c__34267__auto___36901,G__34471_36897,G__34471_36898__$1,n__4666__auto___36895,jobs,results,process,async))
);


break;
case "async":
var c__34267__auto___36915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36896,c__34267__auto___36915,G__34471_36897,G__34471_36898__$1,n__4666__auto___36895,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36896,c__34267__auto___36915,G__34471_36897,G__34471_36898__$1,n__4666__auto___36895,jobs,results,process,async){
return (function (state_34516){
var state_val_34517 = (state_34516[(1)]);
if((state_val_34517 === (1))){
var state_34516__$1 = state_34516;
var statearr_34518_36916 = state_34516__$1;
(statearr_34518_36916[(2)] = null);

(statearr_34518_36916[(1)] = (2));


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
var statearr_34519_36918 = state_34516__$1;
(statearr_34519_36918[(1)] = (5));

} else {
var statearr_34520_36919 = state_34516__$1;
(statearr_34520_36919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (5))){
var state_34516__$1 = state_34516;
var statearr_34521_36921 = state_34516__$1;
(statearr_34521_36921[(2)] = null);

(statearr_34521_36921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (6))){
var state_34516__$1 = state_34516;
var statearr_34522_36922 = state_34516__$1;
(statearr_34522_36922[(2)] = null);

(statearr_34522_36922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (7))){
var inst_34512 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
var statearr_34523_36923 = state_34516__$1;
(statearr_34523_36923[(2)] = inst_34512);

(statearr_34523_36923[(1)] = (3));


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
});})(__36896,c__34267__auto___36915,G__34471_36897,G__34471_36898__$1,n__4666__auto___36895,jobs,results,process,async))
;
return ((function (__36896,switch__34199__auto__,c__34267__auto___36915,G__34471_36897,G__34471_36898__$1,n__4666__auto___36895,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34526 = [null,null,null,null,null,null,null];
(statearr_34526[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34526[(1)] = (1));

return statearr_34526;
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
var statearr_34529_36926 = state_34516;
(statearr_34529_36926[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34528;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36927 = state_34516;
state_34516 = G__36927;
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
;})(__36896,switch__34199__auto__,c__34267__auto___36915,G__34471_36897,G__34471_36898__$1,n__4666__auto___36895,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34530 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34530[(6)] = c__34267__auto___36915);

return statearr_34530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36896,c__34267__auto___36915,G__34471_36897,G__34471_36898__$1,n__4666__auto___36895,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34471_36898__$1)].join('')));

}

var G__36929 = (__36896 + (1));
__36896 = G__36929;
continue;
} else {
}
break;
}

var c__34267__auto___36930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34552){
var state_val_34553 = (state_34552[(1)]);
if((state_val_34553 === (7))){
var inst_34548 = (state_34552[(2)]);
var state_34552__$1 = state_34552;
var statearr_34554_36931 = state_34552__$1;
(statearr_34554_36931[(2)] = inst_34548);

(statearr_34554_36931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (1))){
var state_34552__$1 = state_34552;
var statearr_34555_36933 = state_34552__$1;
(statearr_34555_36933[(2)] = null);

(statearr_34555_36933[(1)] = (2));


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
var statearr_34557_36934 = state_34552__$1;
(statearr_34557_36934[(1)] = (5));

} else {
var statearr_34558_36935 = state_34552__$1;
(statearr_34558_36935[(1)] = (6));

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
var statearr_34561_36938 = state_34552__$1;
(statearr_34561_36938[(2)] = null);

(statearr_34561_36938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34553 === (5))){
var inst_34536 = cljs.core.async.close_BANG_(jobs);
var state_34552__$1 = state_34552;
var statearr_34562_36940 = state_34552__$1;
(statearr_34562_36940[(2)] = inst_34536);

(statearr_34562_36940[(1)] = (7));


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
var statearr_34566_36942 = state_34552;
(statearr_34566_36942[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36943 = state_34552;
state_34552 = G__36943;
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
(statearr_34567[(6)] = c__34267__auto___36930);

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
var statearr_34607_36945 = state_34605__$1;
(statearr_34607_36945[(2)] = inst_34601);

(statearr_34607_36945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (20))){
var state_34605__$1 = state_34605;
var statearr_34608_36947 = state_34605__$1;
(statearr_34608_36947[(2)] = null);

(statearr_34608_36947[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (1))){
var state_34605__$1 = state_34605;
var statearr_34609_36948 = state_34605__$1;
(statearr_34609_36948[(2)] = null);

(statearr_34609_36948[(1)] = (2));


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
var statearr_34611_36950 = state_34605__$1;
(statearr_34611_36950[(1)] = (5));

} else {
var statearr_34612_36951 = state_34605__$1;
(statearr_34612_36951[(1)] = (6));

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
var statearr_34613_36952 = state_34605__$1;
(statearr_34613_36952[(2)] = inst_34596);

(statearr_34613_36952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (13))){
var inst_34598 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34614 = state_34605;
(statearr_34614[(9)] = inst_34598);

return statearr_34614;
})();
var statearr_34615_36954 = state_34605__$1;
(statearr_34615_36954[(2)] = null);

(statearr_34615_36954[(1)] = (2));


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
var statearr_34616_36956 = state_34605__$1;
(statearr_34616_36956[(1)] = (19));

} else {
var statearr_34617_36957 = state_34605__$1;
(statearr_34617_36957[(1)] = (20));

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
var statearr_34618_36959 = state_34605__$1;
(statearr_34618_36959[(2)] = null);

(statearr_34618_36959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (11))){
var inst_34580 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34619 = state_34605;
(statearr_34619[(10)] = inst_34580);

return statearr_34619;
})();
var statearr_34620_36960 = state_34605__$1;
(statearr_34620_36960[(2)] = null);

(statearr_34620_36960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (9))){
var state_34605__$1 = state_34605;
var statearr_34621_36962 = state_34605__$1;
(statearr_34621_36962[(2)] = null);

(statearr_34621_36962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (5))){
var state_34605__$1 = state_34605;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34622_36963 = state_34605__$1;
(statearr_34622_36963[(1)] = (8));

} else {
var statearr_34623_36964 = state_34605__$1;
(statearr_34623_36964[(1)] = (9));

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
var statearr_34625_36966 = state_34605__$1;
(statearr_34625_36966[(1)] = (15));

} else {
var statearr_34626_36967 = state_34605__$1;
(statearr_34626_36967[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (16))){
var state_34605__$1 = state_34605;
var statearr_34627_36968 = state_34605__$1;
(statearr_34627_36968[(2)] = false);

(statearr_34627_36968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (10))){
var inst_34577 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34628_36969 = state_34605__$1;
(statearr_34628_36969[(2)] = inst_34577);

(statearr_34628_36969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (18))){
var inst_34588 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34629_36971 = state_34605__$1;
(statearr_34629_36971[(2)] = inst_34588);

(statearr_34629_36971[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (8))){
var inst_34574 = cljs.core.async.close_BANG_(to);
var state_34605__$1 = state_34605;
var statearr_34630_36972 = state_34605__$1;
(statearr_34630_36972[(2)] = inst_34574);

(statearr_34630_36972[(1)] = (10));


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
var statearr_34633_36974 = state_34605;
(statearr_34633_36974[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36975 = state_34605;
state_34605 = G__36975;
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
var G__34644 = arguments.length;
switch (G__34644) {
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
var G__34651 = arguments.length;
switch (G__34651) {
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
var c__34267__auto___36991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34677){
var state_val_34678 = (state_34677[(1)]);
if((state_val_34678 === (7))){
var inst_34673 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
var statearr_34680_36992 = state_34677__$1;
(statearr_34680_36992[(2)] = inst_34673);

(statearr_34680_36992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (1))){
var state_34677__$1 = state_34677;
var statearr_34682_36994 = state_34677__$1;
(statearr_34682_36994[(2)] = null);

(statearr_34682_36994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (4))){
var inst_34654 = (state_34677[(7)]);
var inst_34654__$1 = (state_34677[(2)]);
var inst_34655 = (inst_34654__$1 == null);
var state_34677__$1 = (function (){var statearr_34683 = state_34677;
(statearr_34683[(7)] = inst_34654__$1);

return statearr_34683;
})();
if(cljs.core.truth_(inst_34655)){
var statearr_34684_36997 = state_34677__$1;
(statearr_34684_36997[(1)] = (5));

} else {
var statearr_34685_36998 = state_34677__$1;
(statearr_34685_36998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (13))){
var state_34677__$1 = state_34677;
var statearr_34686_37000 = state_34677__$1;
(statearr_34686_37000[(2)] = null);

(statearr_34686_37000[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (6))){
var inst_34654 = (state_34677[(7)]);
var inst_34660 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34654) : p.call(null,inst_34654));
var state_34677__$1 = state_34677;
if(cljs.core.truth_(inst_34660)){
var statearr_34689_37003 = state_34677__$1;
(statearr_34689_37003[(1)] = (9));

} else {
var statearr_34690_37005 = state_34677__$1;
(statearr_34690_37005[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (3))){
var inst_34675 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34677__$1,inst_34675);
} else {
if((state_val_34678 === (12))){
var state_34677__$1 = state_34677;
var statearr_34691_37006 = state_34677__$1;
(statearr_34691_37006[(2)] = null);

(statearr_34691_37006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (2))){
var state_34677__$1 = state_34677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34677__$1,(4),ch);
} else {
if((state_val_34678 === (11))){
var inst_34654 = (state_34677[(7)]);
var inst_34664 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34677__$1,(8),inst_34664,inst_34654);
} else {
if((state_val_34678 === (9))){
var state_34677__$1 = state_34677;
var statearr_34695_37007 = state_34677__$1;
(statearr_34695_37007[(2)] = tc);

(statearr_34695_37007[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (5))){
var inst_34657 = cljs.core.async.close_BANG_(tc);
var inst_34658 = cljs.core.async.close_BANG_(fc);
var state_34677__$1 = (function (){var statearr_34696 = state_34677;
(statearr_34696[(8)] = inst_34657);

return statearr_34696;
})();
var statearr_34697_37008 = state_34677__$1;
(statearr_34697_37008[(2)] = inst_34658);

(statearr_34697_37008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (14))){
var inst_34671 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
var statearr_34698_37009 = state_34677__$1;
(statearr_34698_37009[(2)] = inst_34671);

(statearr_34698_37009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (10))){
var state_34677__$1 = state_34677;
var statearr_34699_37010 = state_34677__$1;
(statearr_34699_37010[(2)] = fc);

(statearr_34699_37010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (8))){
var inst_34666 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
if(cljs.core.truth_(inst_34666)){
var statearr_34701_37013 = state_34677__$1;
(statearr_34701_37013[(1)] = (12));

} else {
var statearr_34702_37014 = state_34677__$1;
(statearr_34702_37014[(1)] = (13));

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
var statearr_34703 = [null,null,null,null,null,null,null,null,null];
(statearr_34703[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34703[(1)] = (1));

return statearr_34703;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34677){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34677);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34704){if((e34704 instanceof Object)){
var ex__34203__auto__ = e34704;
var statearr_34705_37019 = state_34677;
(statearr_34705_37019[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37020 = state_34677;
state_34677 = G__37020;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34706 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34706[(6)] = c__34267__auto___36991);

return statearr_34706;
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34733){
var state_val_34734 = (state_34733[(1)]);
if((state_val_34734 === (7))){
var inst_34729 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34735_37025 = state_34733__$1;
(statearr_34735_37025[(2)] = inst_34729);

(statearr_34735_37025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (1))){
var inst_34710 = init;
var state_34733__$1 = (function (){var statearr_34736 = state_34733;
(statearr_34736[(7)] = inst_34710);

return statearr_34736;
})();
var statearr_34737_37026 = state_34733__$1;
(statearr_34737_37026[(2)] = null);

(statearr_34737_37026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (4))){
var inst_34716 = (state_34733[(8)]);
var inst_34716__$1 = (state_34733[(2)]);
var inst_34717 = (inst_34716__$1 == null);
var state_34733__$1 = (function (){var statearr_34741 = state_34733;
(statearr_34741[(8)] = inst_34716__$1);

return statearr_34741;
})();
if(cljs.core.truth_(inst_34717)){
var statearr_34742_37032 = state_34733__$1;
(statearr_34742_37032[(1)] = (5));

} else {
var statearr_34743_37033 = state_34733__$1;
(statearr_34743_37033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (6))){
var inst_34710 = (state_34733[(7)]);
var inst_34716 = (state_34733[(8)]);
var inst_34720 = (state_34733[(9)]);
var inst_34720__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34710,inst_34716) : f.call(null,inst_34710,inst_34716));
var inst_34721 = cljs.core.reduced_QMARK_(inst_34720__$1);
var state_34733__$1 = (function (){var statearr_34744 = state_34733;
(statearr_34744[(9)] = inst_34720__$1);

return statearr_34744;
})();
if(inst_34721){
var statearr_34745_37038 = state_34733__$1;
(statearr_34745_37038[(1)] = (8));

} else {
var statearr_34746_37039 = state_34733__$1;
(statearr_34746_37039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (3))){
var inst_34731 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34733__$1,inst_34731);
} else {
if((state_val_34734 === (2))){
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34733__$1,(4),ch);
} else {
if((state_val_34734 === (9))){
var inst_34720 = (state_34733[(9)]);
var inst_34710 = inst_34720;
var state_34733__$1 = (function (){var statearr_34747 = state_34733;
(statearr_34747[(7)] = inst_34710);

return statearr_34747;
})();
var statearr_34748_37045 = state_34733__$1;
(statearr_34748_37045[(2)] = null);

(statearr_34748_37045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (5))){
var inst_34710 = (state_34733[(7)]);
var state_34733__$1 = state_34733;
var statearr_34749_37048 = state_34733__$1;
(statearr_34749_37048[(2)] = inst_34710);

(statearr_34749_37048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (10))){
var inst_34727 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34750_37055 = state_34733__$1;
(statearr_34750_37055[(2)] = inst_34727);

(statearr_34750_37055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (8))){
var inst_34720 = (state_34733[(9)]);
var inst_34723 = cljs.core.deref(inst_34720);
var state_34733__$1 = state_34733;
var statearr_34751_37056 = state_34733__$1;
(statearr_34751_37056[(2)] = inst_34723);

(statearr_34751_37056[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34200__auto____1 = (function (state_34733){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34733);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34753){if((e34753 instanceof Object)){
var ex__34203__auto__ = e34753;
var statearr_34754_37061 = state_34733;
(statearr_34754_37061[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37065 = state_34733;
state_34733 = G__37065;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34200__auto__ = function(state_34733){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34200__auto____1.call(this,state_34733);
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34761){
var state_val_34762 = (state_34761[(1)]);
if((state_val_34762 === (1))){
var inst_34756 = cljs.core.async.reduce(f__$1,init,ch);
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34761__$1,(2),inst_34756);
} else {
if((state_val_34762 === (2))){
var inst_34758 = (state_34761[(2)]);
var inst_34759 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34758) : f__$1.call(null,inst_34758));
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34761__$1,inst_34759);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34200__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34200__auto____0 = (function (){
var statearr_34763 = [null,null,null,null,null,null,null];
(statearr_34763[(0)] = cljs$core$async$transduce_$_state_machine__34200__auto__);

(statearr_34763[(1)] = (1));

return statearr_34763;
});
var cljs$core$async$transduce_$_state_machine__34200__auto____1 = (function (state_34761){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34761);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34764){if((e34764 instanceof Object)){
var ex__34203__auto__ = e34764;
var statearr_34765_37079 = state_34761;
(statearr_34765_37079[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37086 = state_34761;
state_34761 = G__37086;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34200__auto__ = function(state_34761){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34200__auto____1.call(this,state_34761);
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
var G__34774 = arguments.length;
switch (G__34774) {
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34800){
var state_val_34801 = (state_34800[(1)]);
if((state_val_34801 === (7))){
var inst_34782 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34803_37092 = state_34800__$1;
(statearr_34803_37092[(2)] = inst_34782);

(statearr_34803_37092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34800__$1 = (function (){var statearr_34806 = state_34800;
(statearr_34806[(7)] = inst_34777);

return statearr_34806;
})();
var statearr_34807_37094 = state_34800__$1;
(statearr_34807_37094[(2)] = null);

(statearr_34807_37094[(1)] = (2));


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
var statearr_34811_37098 = state_34800__$1;
(statearr_34811_37098[(2)] = inst_34794);

(statearr_34811_37098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var inst_34785 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34785)){
var statearr_34812_37104 = state_34800__$1;
(statearr_34812_37104[(1)] = (8));

} else {
var statearr_34813_37105 = state_34800__$1;
(statearr_34813_37105[(1)] = (9));

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
var statearr_34814_37106 = state_34800__$1;
(statearr_34814_37106[(2)] = null);

(statearr_34814_37106[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34777)){
var statearr_34815_37107 = state_34800__$1;
(statearr_34815_37107[(1)] = (4));

} else {
var statearr_34816_37108 = state_34800__$1;
(statearr_34816_37108[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34800__$1 = state_34800;
var statearr_34817_37114 = state_34800__$1;
(statearr_34817_37114[(2)] = inst_34791);

(statearr_34817_37114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var state_34800__$1 = state_34800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34818_37117 = state_34800__$1;
(statearr_34818_37117[(1)] = (11));

} else {
var statearr_34819_37119 = state_34800__$1;
(statearr_34819_37119[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
var statearr_34823_37120 = state_34800__$1;
(statearr_34823_37120[(2)] = inst_34777);

(statearr_34823_37120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34824_37121 = state_34800__$1;
(statearr_34824_37121[(2)] = inst_34796);

(statearr_34824_37121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (8))){
var inst_34777 = (state_34800[(7)]);
var inst_34787 = cljs.core.next(inst_34777);
var inst_34777__$1 = inst_34787;
var state_34800__$1 = (function (){var statearr_34825 = state_34800;
(statearr_34825[(7)] = inst_34777__$1);

return statearr_34825;
})();
var statearr_34829_37124 = state_34800__$1;
(statearr_34829_37124[(2)] = null);

(statearr_34829_37124[(1)] = (2));


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
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34800){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34800);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34831){if((e34831 instanceof Object)){
var ex__34203__auto__ = e34831;
var statearr_34832_37126 = state_34800;
(statearr_34832_37126[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34831;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37129 = state_34800;
state_34800 = G__37129;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34800);
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
var c__34267__auto___37157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34977){
var state_val_34978 = (state_34977[(1)]);
if((state_val_34978 === (7))){
var inst_34973 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_34979_37161 = state_34977__$1;
(statearr_34979_37161[(2)] = inst_34973);

(statearr_34979_37161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (20))){
var inst_34870 = (state_34977[(7)]);
var inst_34882 = cljs.core.first(inst_34870);
var inst_34883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(0),null);
var inst_34884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(1),null);
var state_34977__$1 = (function (){var statearr_34980 = state_34977;
(statearr_34980[(8)] = inst_34883);

return statearr_34980;
})();
if(cljs.core.truth_(inst_34884)){
var statearr_34981_37167 = state_34977__$1;
(statearr_34981_37167[(1)] = (22));

} else {
var statearr_34982_37168 = state_34977__$1;
(statearr_34982_37168[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (27))){
var inst_34914 = (state_34977[(9)]);
var inst_34920 = (state_34977[(10)]);
var inst_34912 = (state_34977[(11)]);
var inst_34839 = (state_34977[(12)]);
var inst_34920__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34912,inst_34914);
var inst_34922 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34920__$1,inst_34839,done);
var state_34977__$1 = (function (){var statearr_34983 = state_34977;
(statearr_34983[(10)] = inst_34920__$1);

return statearr_34983;
})();
if(cljs.core.truth_(inst_34922)){
var statearr_34984_37172 = state_34977__$1;
(statearr_34984_37172[(1)] = (30));

} else {
var statearr_34985_37173 = state_34977__$1;
(statearr_34985_37173[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (1))){
var state_34977__$1 = state_34977;
var statearr_34986_37174 = state_34977__$1;
(statearr_34986_37174[(2)] = null);

(statearr_34986_37174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (24))){
var inst_34870 = (state_34977[(7)]);
var inst_34889 = (state_34977[(2)]);
var inst_34890 = cljs.core.next(inst_34870);
var inst_34848 = inst_34890;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34977__$1 = (function (){var statearr_34987 = state_34977;
(statearr_34987[(13)] = inst_34848);

(statearr_34987[(14)] = inst_34849);

(statearr_34987[(15)] = inst_34851);

(statearr_34987[(16)] = inst_34850);

(statearr_34987[(17)] = inst_34889);

return statearr_34987;
})();
var statearr_34990_37175 = state_34977__$1;
(statearr_34990_37175[(2)] = null);

(statearr_34990_37175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (39))){
var state_34977__$1 = state_34977;
var statearr_34997_37182 = state_34977__$1;
(statearr_34997_37182[(2)] = null);

(statearr_34997_37182[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (4))){
var inst_34839 = (state_34977[(12)]);
var inst_34839__$1 = (state_34977[(2)]);
var inst_34840 = (inst_34839__$1 == null);
var state_34977__$1 = (function (){var statearr_34999 = state_34977;
(statearr_34999[(12)] = inst_34839__$1);

return statearr_34999;
})();
if(cljs.core.truth_(inst_34840)){
var statearr_35000_37183 = state_34977__$1;
(statearr_35000_37183[(1)] = (5));

} else {
var statearr_35001_37184 = state_34977__$1;
(statearr_35001_37184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (15))){
var inst_34848 = (state_34977[(13)]);
var inst_34849 = (state_34977[(14)]);
var inst_34851 = (state_34977[(15)]);
var inst_34850 = (state_34977[(16)]);
var inst_34866 = (state_34977[(2)]);
var inst_34867 = (inst_34851 + (1));
var tmp34992 = inst_34848;
var tmp34993 = inst_34849;
var tmp34994 = inst_34850;
var inst_34848__$1 = tmp34992;
var inst_34849__$1 = tmp34993;
var inst_34850__$1 = tmp34994;
var inst_34851__$1 = inst_34867;
var state_34977__$1 = (function (){var statearr_35002 = state_34977;
(statearr_35002[(13)] = inst_34848__$1);

(statearr_35002[(18)] = inst_34866);

(statearr_35002[(14)] = inst_34849__$1);

(statearr_35002[(15)] = inst_34851__$1);

(statearr_35002[(16)] = inst_34850__$1);

return statearr_35002;
})();
var statearr_35003_37189 = state_34977__$1;
(statearr_35003_37189[(2)] = null);

(statearr_35003_37189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (21))){
var inst_34893 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35007_37194 = state_34977__$1;
(statearr_35007_37194[(2)] = inst_34893);

(statearr_35007_37194[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (31))){
var inst_34920 = (state_34977[(10)]);
var inst_34925 = done(null);
var inst_34926 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34920);
var state_34977__$1 = (function (){var statearr_35008 = state_34977;
(statearr_35008[(19)] = inst_34925);

return statearr_35008;
})();
var statearr_35011_37199 = state_34977__$1;
(statearr_35011_37199[(2)] = inst_34926);

(statearr_35011_37199[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (32))){
var inst_34914 = (state_34977[(9)]);
var inst_34913 = (state_34977[(20)]);
var inst_34912 = (state_34977[(11)]);
var inst_34911 = (state_34977[(21)]);
var inst_34928 = (state_34977[(2)]);
var inst_34929 = (inst_34914 + (1));
var tmp35004 = inst_34913;
var tmp35005 = inst_34912;
var tmp35006 = inst_34911;
var inst_34911__$1 = tmp35006;
var inst_34912__$1 = tmp35005;
var inst_34913__$1 = tmp35004;
var inst_34914__$1 = inst_34929;
var state_34977__$1 = (function (){var statearr_35013 = state_34977;
(statearr_35013[(9)] = inst_34914__$1);

(statearr_35013[(20)] = inst_34913__$1);

(statearr_35013[(22)] = inst_34928);

(statearr_35013[(11)] = inst_34912__$1);

(statearr_35013[(21)] = inst_34911__$1);

return statearr_35013;
})();
var statearr_35015_37206 = state_34977__$1;
(statearr_35015_37206[(2)] = null);

(statearr_35015_37206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (40))){
var inst_34943 = (state_34977[(23)]);
var inst_34948 = done(null);
var inst_34949 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34943);
var state_34977__$1 = (function (){var statearr_35018 = state_34977;
(statearr_35018[(24)] = inst_34948);

return statearr_35018;
})();
var statearr_35019_37212 = state_34977__$1;
(statearr_35019_37212[(2)] = inst_34949);

(statearr_35019_37212[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (33))){
var inst_34932 = (state_34977[(25)]);
var inst_34934 = cljs.core.chunked_seq_QMARK_(inst_34932);
var state_34977__$1 = state_34977;
if(inst_34934){
var statearr_35020_37215 = state_34977__$1;
(statearr_35020_37215[(1)] = (36));

} else {
var statearr_35021_37216 = state_34977__$1;
(statearr_35021_37216[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (13))){
var inst_34860 = (state_34977[(26)]);
var inst_34863 = cljs.core.async.close_BANG_(inst_34860);
var state_34977__$1 = state_34977;
var statearr_35022_37219 = state_34977__$1;
(statearr_35022_37219[(2)] = inst_34863);

(statearr_35022_37219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (22))){
var inst_34883 = (state_34977[(8)]);
var inst_34886 = cljs.core.async.close_BANG_(inst_34883);
var state_34977__$1 = state_34977;
var statearr_35023_37221 = state_34977__$1;
(statearr_35023_37221[(2)] = inst_34886);

(statearr_35023_37221[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (36))){
var inst_34932 = (state_34977[(25)]);
var inst_34937 = cljs.core.chunk_first(inst_34932);
var inst_34938 = cljs.core.chunk_rest(inst_34932);
var inst_34939 = cljs.core.count(inst_34937);
var inst_34911 = inst_34938;
var inst_34912 = inst_34937;
var inst_34913 = inst_34939;
var inst_34914 = (0);
var state_34977__$1 = (function (){var statearr_35027 = state_34977;
(statearr_35027[(9)] = inst_34914);

(statearr_35027[(20)] = inst_34913);

(statearr_35027[(11)] = inst_34912);

(statearr_35027[(21)] = inst_34911);

return statearr_35027;
})();
var statearr_35029_37231 = state_34977__$1;
(statearr_35029_37231[(2)] = null);

(statearr_35029_37231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (41))){
var inst_34932 = (state_34977[(25)]);
var inst_34951 = (state_34977[(2)]);
var inst_34952 = cljs.core.next(inst_34932);
var inst_34911 = inst_34952;
var inst_34912 = null;
var inst_34913 = (0);
var inst_34914 = (0);
var state_34977__$1 = (function (){var statearr_35032 = state_34977;
(statearr_35032[(27)] = inst_34951);

(statearr_35032[(9)] = inst_34914);

(statearr_35032[(20)] = inst_34913);

(statearr_35032[(11)] = inst_34912);

(statearr_35032[(21)] = inst_34911);

return statearr_35032;
})();
var statearr_35033_37235 = state_34977__$1;
(statearr_35033_37235[(2)] = null);

(statearr_35033_37235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (43))){
var state_34977__$1 = state_34977;
var statearr_35034_37238 = state_34977__$1;
(statearr_35034_37238[(2)] = null);

(statearr_35034_37238[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (29))){
var inst_34960 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35036_37241 = state_34977__$1;
(statearr_35036_37241[(2)] = inst_34960);

(statearr_35036_37241[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (44))){
var inst_34970 = (state_34977[(2)]);
var state_34977__$1 = (function (){var statearr_35040 = state_34977;
(statearr_35040[(28)] = inst_34970);

return statearr_35040;
})();
var statearr_35041_37242 = state_34977__$1;
(statearr_35041_37242[(2)] = null);

(statearr_35041_37242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (6))){
var inst_34903 = (state_34977[(29)]);
var inst_34902 = cljs.core.deref(cs);
var inst_34903__$1 = cljs.core.keys(inst_34902);
var inst_34904 = cljs.core.count(inst_34903__$1);
var inst_34905 = cljs.core.reset_BANG_(dctr,inst_34904);
var inst_34910 = cljs.core.seq(inst_34903__$1);
var inst_34911 = inst_34910;
var inst_34912 = null;
var inst_34913 = (0);
var inst_34914 = (0);
var state_34977__$1 = (function (){var statearr_35057 = state_34977;
(statearr_35057[(30)] = inst_34905);

(statearr_35057[(9)] = inst_34914);

(statearr_35057[(20)] = inst_34913);

(statearr_35057[(29)] = inst_34903__$1);

(statearr_35057[(11)] = inst_34912);

(statearr_35057[(21)] = inst_34911);

return statearr_35057;
})();
var statearr_35058_37245 = state_34977__$1;
(statearr_35058_37245[(2)] = null);

(statearr_35058_37245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (28))){
var inst_34932 = (state_34977[(25)]);
var inst_34911 = (state_34977[(21)]);
var inst_34932__$1 = cljs.core.seq(inst_34911);
var state_34977__$1 = (function (){var statearr_35061 = state_34977;
(statearr_35061[(25)] = inst_34932__$1);

return statearr_35061;
})();
if(inst_34932__$1){
var statearr_35064_37249 = state_34977__$1;
(statearr_35064_37249[(1)] = (33));

} else {
var statearr_35065_37251 = state_34977__$1;
(statearr_35065_37251[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (25))){
var inst_34914 = (state_34977[(9)]);
var inst_34913 = (state_34977[(20)]);
var inst_34916 = (inst_34914 < inst_34913);
var inst_34917 = inst_34916;
var state_34977__$1 = state_34977;
if(cljs.core.truth_(inst_34917)){
var statearr_35066_37253 = state_34977__$1;
(statearr_35066_37253[(1)] = (27));

} else {
var statearr_35067_37254 = state_34977__$1;
(statearr_35067_37254[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (34))){
var state_34977__$1 = state_34977;
var statearr_35069_37256 = state_34977__$1;
(statearr_35069_37256[(2)] = null);

(statearr_35069_37256[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (17))){
var state_34977__$1 = state_34977;
var statearr_35070_37257 = state_34977__$1;
(statearr_35070_37257[(2)] = null);

(statearr_35070_37257[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (3))){
var inst_34975 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34977__$1,inst_34975);
} else {
if((state_val_34978 === (12))){
var inst_34898 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35076_37262 = state_34977__$1;
(statearr_35076_37262[(2)] = inst_34898);

(statearr_35076_37262[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (2))){
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34977__$1,(4),ch);
} else {
if((state_val_34978 === (23))){
var state_34977__$1 = state_34977;
var statearr_35081_37263 = state_34977__$1;
(statearr_35081_37263[(2)] = null);

(statearr_35081_37263[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (35))){
var inst_34958 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35086_37265 = state_34977__$1;
(statearr_35086_37265[(2)] = inst_34958);

(statearr_35086_37265[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (19))){
var inst_34870 = (state_34977[(7)]);
var inst_34874 = cljs.core.chunk_first(inst_34870);
var inst_34875 = cljs.core.chunk_rest(inst_34870);
var inst_34876 = cljs.core.count(inst_34874);
var inst_34848 = inst_34875;
var inst_34849 = inst_34874;
var inst_34850 = inst_34876;
var inst_34851 = (0);
var state_34977__$1 = (function (){var statearr_35095 = state_34977;
(statearr_35095[(13)] = inst_34848);

(statearr_35095[(14)] = inst_34849);

(statearr_35095[(15)] = inst_34851);

(statearr_35095[(16)] = inst_34850);

return statearr_35095;
})();
var statearr_35099_37270 = state_34977__$1;
(statearr_35099_37270[(2)] = null);

(statearr_35099_37270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (11))){
var inst_34848 = (state_34977[(13)]);
var inst_34870 = (state_34977[(7)]);
var inst_34870__$1 = cljs.core.seq(inst_34848);
var state_34977__$1 = (function (){var statearr_35104 = state_34977;
(statearr_35104[(7)] = inst_34870__$1);

return statearr_35104;
})();
if(inst_34870__$1){
var statearr_35108_37275 = state_34977__$1;
(statearr_35108_37275[(1)] = (16));

} else {
var statearr_35110_37276 = state_34977__$1;
(statearr_35110_37276[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (9))){
var inst_34900 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35114_37278 = state_34977__$1;
(statearr_35114_37278[(2)] = inst_34900);

(statearr_35114_37278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (5))){
var inst_34846 = cljs.core.deref(cs);
var inst_34847 = cljs.core.seq(inst_34846);
var inst_34848 = inst_34847;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34977__$1 = (function (){var statearr_35121 = state_34977;
(statearr_35121[(13)] = inst_34848);

(statearr_35121[(14)] = inst_34849);

(statearr_35121[(15)] = inst_34851);

(statearr_35121[(16)] = inst_34850);

return statearr_35121;
})();
var statearr_35125_37284 = state_34977__$1;
(statearr_35125_37284[(2)] = null);

(statearr_35125_37284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (14))){
var state_34977__$1 = state_34977;
var statearr_35130_37287 = state_34977__$1;
(statearr_35130_37287[(2)] = null);

(statearr_35130_37287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (45))){
var inst_34967 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35134_37289 = state_34977__$1;
(statearr_35134_37289[(2)] = inst_34967);

(statearr_35134_37289[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (26))){
var inst_34903 = (state_34977[(29)]);
var inst_34962 = (state_34977[(2)]);
var inst_34964 = cljs.core.seq(inst_34903);
var state_34977__$1 = (function (){var statearr_35141 = state_34977;
(statearr_35141[(31)] = inst_34962);

return statearr_35141;
})();
if(inst_34964){
var statearr_35143_37293 = state_34977__$1;
(statearr_35143_37293[(1)] = (42));

} else {
var statearr_35147_37295 = state_34977__$1;
(statearr_35147_37295[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (16))){
var inst_34870 = (state_34977[(7)]);
var inst_34872 = cljs.core.chunked_seq_QMARK_(inst_34870);
var state_34977__$1 = state_34977;
if(inst_34872){
var statearr_35151_37299 = state_34977__$1;
(statearr_35151_37299[(1)] = (19));

} else {
var statearr_35154_37300 = state_34977__$1;
(statearr_35154_37300[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (38))){
var inst_34955 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35160_37302 = state_34977__$1;
(statearr_35160_37302[(2)] = inst_34955);

(statearr_35160_37302[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (30))){
var state_34977__$1 = state_34977;
var statearr_35164_37306 = state_34977__$1;
(statearr_35164_37306[(2)] = null);

(statearr_35164_37306[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (10))){
var inst_34849 = (state_34977[(14)]);
var inst_34851 = (state_34977[(15)]);
var inst_34859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34849,inst_34851);
var inst_34860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(0),null);
var inst_34861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(1),null);
var state_34977__$1 = (function (){var statearr_35168 = state_34977;
(statearr_35168[(26)] = inst_34860);

return statearr_35168;
})();
if(cljs.core.truth_(inst_34861)){
var statearr_35169_37311 = state_34977__$1;
(statearr_35169_37311[(1)] = (13));

} else {
var statearr_35170_37313 = state_34977__$1;
(statearr_35170_37313[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (18))){
var inst_34896 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_35171_37316 = state_34977__$1;
(statearr_35171_37316[(2)] = inst_34896);

(statearr_35171_37316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (42))){
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34977__$1,(45),dchan);
} else {
if((state_val_34978 === (37))){
var inst_34932 = (state_34977[(25)]);
var inst_34943 = (state_34977[(23)]);
var inst_34839 = (state_34977[(12)]);
var inst_34943__$1 = cljs.core.first(inst_34932);
var inst_34944 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34943__$1,inst_34839,done);
var state_34977__$1 = (function (){var statearr_35172 = state_34977;
(statearr_35172[(23)] = inst_34943__$1);

return statearr_35172;
})();
if(cljs.core.truth_(inst_34944)){
var statearr_35175_37322 = state_34977__$1;
(statearr_35175_37322[(1)] = (39));

} else {
var statearr_35176_37323 = state_34977__$1;
(statearr_35176_37323[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (8))){
var inst_34851 = (state_34977[(15)]);
var inst_34850 = (state_34977[(16)]);
var inst_34853 = (inst_34851 < inst_34850);
var inst_34854 = inst_34853;
var state_34977__$1 = state_34977;
if(cljs.core.truth_(inst_34854)){
var statearr_35177_37324 = state_34977__$1;
(statearr_35177_37324[(1)] = (10));

} else {
var statearr_35178_37325 = state_34977__$1;
(statearr_35178_37325[(1)] = (11));

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
var statearr_35201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35201[(0)] = cljs$core$async$mult_$_state_machine__34200__auto__);

(statearr_35201[(1)] = (1));

return statearr_35201;
});
var cljs$core$async$mult_$_state_machine__34200__auto____1 = (function (state_34977){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34977);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35205){if((e35205 instanceof Object)){
var ex__34203__auto__ = e35205;
var statearr_35206_37330 = state_34977;
(statearr_35206_37330[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35205;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37332 = state_34977;
state_34977 = G__37332;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34200__auto__ = function(state_34977){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34200__auto____1.call(this,state_34977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34200__auto____0;
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34200__auto____1;
return cljs$core$async$mult_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35209 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35209[(6)] = c__34267__auto___37157);

return statearr_35209;
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
var G__35214 = arguments.length;
switch (G__35214) {
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
var len__4789__auto___37367 = arguments.length;
var i__4790__auto___37369 = (0);
while(true){
if((i__4790__auto___37369 < len__4789__auto___37367)){
args__4795__auto__.push((arguments[i__4790__auto___37369]));

var G__37372 = (i__4790__auto___37369 + (1));
i__4790__auto___37369 = G__37372;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35352){
var map__35354 = p__35352;
var map__35354__$1 = (((((!((map__35354 == null))))?(((((map__35354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35354):map__35354);
var opts = map__35354__$1;
var statearr_35359_37377 = state;
(statearr_35359_37377[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35360_37378 = state;
(statearr_35360_37378[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35361_37380 = state;
(statearr_35361_37380[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35327){
var G__35328 = cljs.core.first(seq35327);
var seq35327__$1 = cljs.core.next(seq35327);
var G__35330 = cljs.core.first(seq35327__$1);
var seq35327__$2 = cljs.core.next(seq35327__$1);
var G__35331 = cljs.core.first(seq35327__$2);
var seq35327__$3 = cljs.core.next(seq35327__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35328,G__35330,G__35331,seq35327__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35373 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35374){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35374 = meta35374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35375,meta35374__$1){
var self__ = this;
var _35375__$1 = this;
return (new cljs.core.async.t_cljs$core$async35373(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35374__$1));
}));

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35375){
var self__ = this;
var _35375__$1 = this;
return self__.meta35374;
}));

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35374","meta35374",-1424368820,null)], null);
}));

(cljs.core.async.t_cljs$core$async35373.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35373");

(cljs.core.async.t_cljs$core$async35373.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35373");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35373.
 */
cljs.core.async.__GT_t_cljs$core$async35373 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35373(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35374){
return (new cljs.core.async.t_cljs$core$async35373(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35374));
});

}

return (new cljs.core.async.t_cljs$core$async35373(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35526){
var state_val_35527 = (state_35526[(1)]);
if((state_val_35527 === (7))){
var inst_35430 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
var statearr_35549_37421 = state_35526__$1;
(statearr_35549_37421[(2)] = inst_35430);

(statearr_35549_37421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (20))){
var inst_35443 = (state_35526[(7)]);
var state_35526__$1 = state_35526;
var statearr_35550_37427 = state_35526__$1;
(statearr_35550_37427[(2)] = inst_35443);

(statearr_35550_37427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (27))){
var state_35526__$1 = state_35526;
var statearr_35553_37429 = state_35526__$1;
(statearr_35553_37429[(2)] = null);

(statearr_35553_37429[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (1))){
var inst_35412 = (state_35526[(8)]);
var inst_35412__$1 = calc_state();
var inst_35416 = (inst_35412__$1 == null);
var inst_35417 = cljs.core.not(inst_35416);
var state_35526__$1 = (function (){var statearr_35556 = state_35526;
(statearr_35556[(8)] = inst_35412__$1);

return statearr_35556;
})();
if(inst_35417){
var statearr_35557_37431 = state_35526__$1;
(statearr_35557_37431[(1)] = (2));

} else {
var statearr_35558_37432 = state_35526__$1;
(statearr_35558_37432[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (24))){
var inst_35498 = (state_35526[(9)]);
var inst_35482 = (state_35526[(10)]);
var inst_35473 = (state_35526[(11)]);
var inst_35498__$1 = (inst_35473.cljs$core$IFn$_invoke$arity$1 ? inst_35473.cljs$core$IFn$_invoke$arity$1(inst_35482) : inst_35473.call(null,inst_35482));
var state_35526__$1 = (function (){var statearr_35560 = state_35526;
(statearr_35560[(9)] = inst_35498__$1);

return statearr_35560;
})();
if(cljs.core.truth_(inst_35498__$1)){
var statearr_35563_37435 = state_35526__$1;
(statearr_35563_37435[(1)] = (29));

} else {
var statearr_35566_37436 = state_35526__$1;
(statearr_35566_37436[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (4))){
var inst_35433 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35433)){
var statearr_35568_37438 = state_35526__$1;
(statearr_35568_37438[(1)] = (8));

} else {
var statearr_35570_37442 = state_35526__$1;
(statearr_35570_37442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (15))){
var inst_35467 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35467)){
var statearr_35574_37443 = state_35526__$1;
(statearr_35574_37443[(1)] = (19));

} else {
var statearr_35577_37444 = state_35526__$1;
(statearr_35577_37444[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (21))){
var inst_35472 = (state_35526[(12)]);
var inst_35472__$1 = (state_35526[(2)]);
var inst_35473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35472__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35472__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35472__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35526__$1 = (function (){var statearr_35584 = state_35526;
(statearr_35584[(13)] = inst_35474);

(statearr_35584[(12)] = inst_35472__$1);

(statearr_35584[(11)] = inst_35473);

return statearr_35584;
})();
return cljs.core.async.ioc_alts_BANG_(state_35526__$1,(22),inst_35475);
} else {
if((state_val_35527 === (31))){
var inst_35508 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35508)){
var statearr_35592_37449 = state_35526__$1;
(statearr_35592_37449[(1)] = (32));

} else {
var statearr_35594_37450 = state_35526__$1;
(statearr_35594_37450[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (32))){
var inst_35481 = (state_35526[(14)]);
var state_35526__$1 = state_35526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35526__$1,(35),out,inst_35481);
} else {
if((state_val_35527 === (33))){
var inst_35472 = (state_35526[(12)]);
var inst_35443 = inst_35472;
var state_35526__$1 = (function (){var statearr_35605 = state_35526;
(statearr_35605[(7)] = inst_35443);

return statearr_35605;
})();
var statearr_35607_37454 = state_35526__$1;
(statearr_35607_37454[(2)] = null);

(statearr_35607_37454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (13))){
var inst_35443 = (state_35526[(7)]);
var inst_35456 = inst_35443.cljs$lang$protocol_mask$partition0$;
var inst_35457 = (inst_35456 & (64));
var inst_35458 = inst_35443.cljs$core$ISeq$;
var inst_35459 = (cljs.core.PROTOCOL_SENTINEL === inst_35458);
var inst_35460 = ((inst_35457) || (inst_35459));
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35460)){
var statearr_35614_37456 = state_35526__$1;
(statearr_35614_37456[(1)] = (16));

} else {
var statearr_35616_37457 = state_35526__$1;
(statearr_35616_37457[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (22))){
var inst_35481 = (state_35526[(14)]);
var inst_35482 = (state_35526[(10)]);
var inst_35480 = (state_35526[(2)]);
var inst_35481__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35480,(0),null);
var inst_35482__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35480,(1),null);
var inst_35485 = (inst_35481__$1 == null);
var inst_35486 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35482__$1,change);
var inst_35487 = ((inst_35485) || (inst_35486));
var state_35526__$1 = (function (){var statearr_35625 = state_35526;
(statearr_35625[(14)] = inst_35481__$1);

(statearr_35625[(10)] = inst_35482__$1);

return statearr_35625;
})();
if(cljs.core.truth_(inst_35487)){
var statearr_35627_37461 = state_35526__$1;
(statearr_35627_37461[(1)] = (23));

} else {
var statearr_35629_37462 = state_35526__$1;
(statearr_35629_37462[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (36))){
var inst_35472 = (state_35526[(12)]);
var inst_35443 = inst_35472;
var state_35526__$1 = (function (){var statearr_35634 = state_35526;
(statearr_35634[(7)] = inst_35443);

return statearr_35634;
})();
var statearr_35636_37465 = state_35526__$1;
(statearr_35636_37465[(2)] = null);

(statearr_35636_37465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (29))){
var inst_35498 = (state_35526[(9)]);
var state_35526__$1 = state_35526;
var statearr_35642_37467 = state_35526__$1;
(statearr_35642_37467[(2)] = inst_35498);

(statearr_35642_37467[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (6))){
var state_35526__$1 = state_35526;
var statearr_35645_37471 = state_35526__$1;
(statearr_35645_37471[(2)] = false);

(statearr_35645_37471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (28))){
var inst_35494 = (state_35526[(2)]);
var inst_35495 = calc_state();
var inst_35443 = inst_35495;
var state_35526__$1 = (function (){var statearr_35650 = state_35526;
(statearr_35650[(15)] = inst_35494);

(statearr_35650[(7)] = inst_35443);

return statearr_35650;
})();
var statearr_35654_37473 = state_35526__$1;
(statearr_35654_37473[(2)] = null);

(statearr_35654_37473[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (25))){
var inst_35522 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
var statearr_35655_37474 = state_35526__$1;
(statearr_35655_37474[(2)] = inst_35522);

(statearr_35655_37474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (34))){
var inst_35520 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
var statearr_35656_37480 = state_35526__$1;
(statearr_35656_37480[(2)] = inst_35520);

(statearr_35656_37480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (17))){
var state_35526__$1 = state_35526;
var statearr_35657_37483 = state_35526__$1;
(statearr_35657_37483[(2)] = false);

(statearr_35657_37483[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (3))){
var state_35526__$1 = state_35526;
var statearr_35660_37488 = state_35526__$1;
(statearr_35660_37488[(2)] = false);

(statearr_35660_37488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (12))){
var inst_35524 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35526__$1,inst_35524);
} else {
if((state_val_35527 === (2))){
var inst_35412 = (state_35526[(8)]);
var inst_35421 = inst_35412.cljs$lang$protocol_mask$partition0$;
var inst_35422 = (inst_35421 & (64));
var inst_35424 = inst_35412.cljs$core$ISeq$;
var inst_35425 = (cljs.core.PROTOCOL_SENTINEL === inst_35424);
var inst_35426 = ((inst_35422) || (inst_35425));
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35426)){
var statearr_35669_37492 = state_35526__$1;
(statearr_35669_37492[(1)] = (5));

} else {
var statearr_35675_37493 = state_35526__$1;
(statearr_35675_37493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (23))){
var inst_35481 = (state_35526[(14)]);
var inst_35489 = (inst_35481 == null);
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35489)){
var statearr_35681_37496 = state_35526__$1;
(statearr_35681_37496[(1)] = (26));

} else {
var statearr_35683_37500 = state_35526__$1;
(statearr_35683_37500[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (35))){
var inst_35511 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35511)){
var statearr_35688_37503 = state_35526__$1;
(statearr_35688_37503[(1)] = (36));

} else {
var statearr_35692_37507 = state_35526__$1;
(statearr_35692_37507[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (19))){
var inst_35443 = (state_35526[(7)]);
var inst_35469 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35443);
var state_35526__$1 = state_35526;
var statearr_35696_37510 = state_35526__$1;
(statearr_35696_37510[(2)] = inst_35469);

(statearr_35696_37510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (11))){
var inst_35443 = (state_35526[(7)]);
var inst_35452 = (inst_35443 == null);
var inst_35453 = cljs.core.not(inst_35452);
var state_35526__$1 = state_35526;
if(inst_35453){
var statearr_35702_37513 = state_35526__$1;
(statearr_35702_37513[(1)] = (13));

} else {
var statearr_35706_37514 = state_35526__$1;
(statearr_35706_37514[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (9))){
var inst_35412 = (state_35526[(8)]);
var state_35526__$1 = state_35526;
var statearr_35710_37515 = state_35526__$1;
(statearr_35710_37515[(2)] = inst_35412);

(statearr_35710_37515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (5))){
var state_35526__$1 = state_35526;
var statearr_35711_37518 = state_35526__$1;
(statearr_35711_37518[(2)] = true);

(statearr_35711_37518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (14))){
var state_35526__$1 = state_35526;
var statearr_35712_37522 = state_35526__$1;
(statearr_35712_37522[(2)] = false);

(statearr_35712_37522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (26))){
var inst_35482 = (state_35526[(10)]);
var inst_35491 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35482);
var state_35526__$1 = state_35526;
var statearr_35713_37528 = state_35526__$1;
(statearr_35713_37528[(2)] = inst_35491);

(statearr_35713_37528[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (16))){
var state_35526__$1 = state_35526;
var statearr_35714_37531 = state_35526__$1;
(statearr_35714_37531[(2)] = true);

(statearr_35714_37531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (38))){
var inst_35516 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
var statearr_35715_37533 = state_35526__$1;
(statearr_35715_37533[(2)] = inst_35516);

(statearr_35715_37533[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (30))){
var inst_35474 = (state_35526[(13)]);
var inst_35482 = (state_35526[(10)]);
var inst_35473 = (state_35526[(11)]);
var inst_35503 = cljs.core.empty_QMARK_(inst_35473);
var inst_35504 = (inst_35474.cljs$core$IFn$_invoke$arity$1 ? inst_35474.cljs$core$IFn$_invoke$arity$1(inst_35482) : inst_35474.call(null,inst_35482));
var inst_35505 = cljs.core.not(inst_35504);
var inst_35506 = ((inst_35503) && (inst_35505));
var state_35526__$1 = state_35526;
var statearr_35717_37537 = state_35526__$1;
(statearr_35717_37537[(2)] = inst_35506);

(statearr_35717_37537[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (10))){
var inst_35412 = (state_35526[(8)]);
var inst_35439 = (state_35526[(2)]);
var inst_35440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35439,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35439,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35439,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35443 = inst_35412;
var state_35526__$1 = (function (){var statearr_35719 = state_35526;
(statearr_35719[(16)] = inst_35442);

(statearr_35719[(17)] = inst_35441);

(statearr_35719[(18)] = inst_35440);

(statearr_35719[(7)] = inst_35443);

return statearr_35719;
})();
var statearr_35720_37544 = state_35526__$1;
(statearr_35720_37544[(2)] = null);

(statearr_35720_37544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (18))){
var inst_35464 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
var statearr_35721_37545 = state_35526__$1;
(statearr_35721_37545[(2)] = inst_35464);

(statearr_35721_37545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (37))){
var state_35526__$1 = state_35526;
var statearr_35724_37551 = state_35526__$1;
(statearr_35724_37551[(2)] = null);

(statearr_35724_37551[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (8))){
var inst_35412 = (state_35526[(8)]);
var inst_35436 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35412);
var state_35526__$1 = state_35526;
var statearr_35725_37554 = state_35526__$1;
(statearr_35725_37554[(2)] = inst_35436);

(statearr_35725_37554[(1)] = (10));


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
var statearr_35727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35727[(0)] = cljs$core$async$mix_$_state_machine__34200__auto__);

(statearr_35727[(1)] = (1));

return statearr_35727;
});
var cljs$core$async$mix_$_state_machine__34200__auto____1 = (function (state_35526){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35526);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35729){if((e35729 instanceof Object)){
var ex__34203__auto__ = e35729;
var statearr_35731_37561 = state_35526;
(statearr_35731_37561[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35729;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37564 = state_35526;
state_35526 = G__37564;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34200__auto__ = function(state_35526){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34200__auto____1.call(this,state_35526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34200__auto____0;
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34200__auto____1;
return cljs$core$async$mix_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35737 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35737[(6)] = c__34267__auto___37420);

return statearr_35737;
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
var G__35754 = arguments.length;
switch (G__35754) {
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
var G__35785 = arguments.length;
switch (G__35785) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35780_SHARP_){
if(cljs.core.truth_((p1__35780_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35780_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35780_SHARP_.call(null,topic)))){
return p1__35780_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35780_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35791 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35791 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35792){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35792 = meta35792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35793,meta35792__$1){
var self__ = this;
var _35793__$1 = this;
return (new cljs.core.async.t_cljs$core$async35791(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35792__$1));
}));

(cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35793){
var self__ = this;
var _35793__$1 = this;
return self__.meta35792;
}));

(cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35792","meta35792",-1475297327,null)], null);
}));

(cljs.core.async.t_cljs$core$async35791.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35791");

(cljs.core.async.t_cljs$core$async35791.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35791");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35791.
 */
cljs.core.async.__GT_t_cljs$core$async35791 = (function cljs$core$async$__GT_t_cljs$core$async35791(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35792){
return (new cljs.core.async.t_cljs$core$async35791(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35792));
});

}

return (new cljs.core.async.t_cljs$core$async35791(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35891){
var state_val_35892 = (state_35891[(1)]);
if((state_val_35892 === (7))){
var inst_35887 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
var statearr_35893_37642 = state_35891__$1;
(statearr_35893_37642[(2)] = inst_35887);

(statearr_35893_37642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (20))){
var state_35891__$1 = state_35891;
var statearr_35896_37648 = state_35891__$1;
(statearr_35896_37648[(2)] = null);

(statearr_35896_37648[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (1))){
var state_35891__$1 = state_35891;
var statearr_35898_37652 = state_35891__$1;
(statearr_35898_37652[(2)] = null);

(statearr_35898_37652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (24))){
var inst_35870 = (state_35891[(7)]);
var inst_35879 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35870);
var state_35891__$1 = state_35891;
var statearr_35900_37654 = state_35891__$1;
(statearr_35900_37654[(2)] = inst_35879);

(statearr_35900_37654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (4))){
var inst_35822 = (state_35891[(8)]);
var inst_35822__$1 = (state_35891[(2)]);
var inst_35823 = (inst_35822__$1 == null);
var state_35891__$1 = (function (){var statearr_35904 = state_35891;
(statearr_35904[(8)] = inst_35822__$1);

return statearr_35904;
})();
if(cljs.core.truth_(inst_35823)){
var statearr_35905_37660 = state_35891__$1;
(statearr_35905_37660[(1)] = (5));

} else {
var statearr_35906_37665 = state_35891__$1;
(statearr_35906_37665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (15))){
var inst_35864 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
var statearr_35907_37668 = state_35891__$1;
(statearr_35907_37668[(2)] = inst_35864);

(statearr_35907_37668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (21))){
var inst_35884 = (state_35891[(2)]);
var state_35891__$1 = (function (){var statearr_35910 = state_35891;
(statearr_35910[(9)] = inst_35884);

return statearr_35910;
})();
var statearr_35912_37670 = state_35891__$1;
(statearr_35912_37670[(2)] = null);

(statearr_35912_37670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (13))){
var inst_35846 = (state_35891[(10)]);
var inst_35848 = cljs.core.chunked_seq_QMARK_(inst_35846);
var state_35891__$1 = state_35891;
if(inst_35848){
var statearr_35915_37672 = state_35891__$1;
(statearr_35915_37672[(1)] = (16));

} else {
var statearr_35916_37674 = state_35891__$1;
(statearr_35916_37674[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (22))){
var inst_35876 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
if(cljs.core.truth_(inst_35876)){
var statearr_35917_37680 = state_35891__$1;
(statearr_35917_37680[(1)] = (23));

} else {
var statearr_35920_37682 = state_35891__$1;
(statearr_35920_37682[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (6))){
var inst_35822 = (state_35891[(8)]);
var inst_35872 = (state_35891[(11)]);
var inst_35870 = (state_35891[(7)]);
var inst_35870__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35822) : topic_fn.call(null,inst_35822));
var inst_35871 = cljs.core.deref(mults);
var inst_35872__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35871,inst_35870__$1);
var state_35891__$1 = (function (){var statearr_35923 = state_35891;
(statearr_35923[(11)] = inst_35872__$1);

(statearr_35923[(7)] = inst_35870__$1);

return statearr_35923;
})();
if(cljs.core.truth_(inst_35872__$1)){
var statearr_35924_37685 = state_35891__$1;
(statearr_35924_37685[(1)] = (19));

} else {
var statearr_35925_37688 = state_35891__$1;
(statearr_35925_37688[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (25))){
var inst_35881 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
var statearr_35928_37696 = state_35891__$1;
(statearr_35928_37696[(2)] = inst_35881);

(statearr_35928_37696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (17))){
var inst_35846 = (state_35891[(10)]);
var inst_35855 = cljs.core.first(inst_35846);
var inst_35856 = cljs.core.async.muxch_STAR_(inst_35855);
var inst_35857 = cljs.core.async.close_BANG_(inst_35856);
var inst_35858 = cljs.core.next(inst_35846);
var inst_35832 = inst_35858;
var inst_35833 = null;
var inst_35834 = (0);
var inst_35835 = (0);
var state_35891__$1 = (function (){var statearr_35932 = state_35891;
(statearr_35932[(12)] = inst_35857);

(statearr_35932[(13)] = inst_35835);

(statearr_35932[(14)] = inst_35834);

(statearr_35932[(15)] = inst_35833);

(statearr_35932[(16)] = inst_35832);

return statearr_35932;
})();
var statearr_35935_37701 = state_35891__$1;
(statearr_35935_37701[(2)] = null);

(statearr_35935_37701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (3))){
var inst_35889 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35891__$1,inst_35889);
} else {
if((state_val_35892 === (12))){
var inst_35866 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
var statearr_35936_37709 = state_35891__$1;
(statearr_35936_37709[(2)] = inst_35866);

(statearr_35936_37709[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (2))){
var state_35891__$1 = state_35891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35891__$1,(4),ch);
} else {
if((state_val_35892 === (23))){
var state_35891__$1 = state_35891;
var statearr_35940_37712 = state_35891__$1;
(statearr_35940_37712[(2)] = null);

(statearr_35940_37712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (19))){
var inst_35822 = (state_35891[(8)]);
var inst_35872 = (state_35891[(11)]);
var inst_35874 = cljs.core.async.muxch_STAR_(inst_35872);
var state_35891__$1 = state_35891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35891__$1,(22),inst_35874,inst_35822);
} else {
if((state_val_35892 === (11))){
var inst_35846 = (state_35891[(10)]);
var inst_35832 = (state_35891[(16)]);
var inst_35846__$1 = cljs.core.seq(inst_35832);
var state_35891__$1 = (function (){var statearr_35946 = state_35891;
(statearr_35946[(10)] = inst_35846__$1);

return statearr_35946;
})();
if(inst_35846__$1){
var statearr_35949_37719 = state_35891__$1;
(statearr_35949_37719[(1)] = (13));

} else {
var statearr_35950_37720 = state_35891__$1;
(statearr_35950_37720[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (9))){
var inst_35868 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
var statearr_35951_37722 = state_35891__$1;
(statearr_35951_37722[(2)] = inst_35868);

(statearr_35951_37722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (5))){
var inst_35829 = cljs.core.deref(mults);
var inst_35830 = cljs.core.vals(inst_35829);
var inst_35831 = cljs.core.seq(inst_35830);
var inst_35832 = inst_35831;
var inst_35833 = null;
var inst_35834 = (0);
var inst_35835 = (0);
var state_35891__$1 = (function (){var statearr_35956 = state_35891;
(statearr_35956[(13)] = inst_35835);

(statearr_35956[(14)] = inst_35834);

(statearr_35956[(15)] = inst_35833);

(statearr_35956[(16)] = inst_35832);

return statearr_35956;
})();
var statearr_35960_37727 = state_35891__$1;
(statearr_35960_37727[(2)] = null);

(statearr_35960_37727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (14))){
var state_35891__$1 = state_35891;
var statearr_35965_37728 = state_35891__$1;
(statearr_35965_37728[(2)] = null);

(statearr_35965_37728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (16))){
var inst_35846 = (state_35891[(10)]);
var inst_35850 = cljs.core.chunk_first(inst_35846);
var inst_35851 = cljs.core.chunk_rest(inst_35846);
var inst_35852 = cljs.core.count(inst_35850);
var inst_35832 = inst_35851;
var inst_35833 = inst_35850;
var inst_35834 = inst_35852;
var inst_35835 = (0);
var state_35891__$1 = (function (){var statearr_35968 = state_35891;
(statearr_35968[(13)] = inst_35835);

(statearr_35968[(14)] = inst_35834);

(statearr_35968[(15)] = inst_35833);

(statearr_35968[(16)] = inst_35832);

return statearr_35968;
})();
var statearr_35970_37731 = state_35891__$1;
(statearr_35970_37731[(2)] = null);

(statearr_35970_37731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (10))){
var inst_35835 = (state_35891[(13)]);
var inst_35834 = (state_35891[(14)]);
var inst_35833 = (state_35891[(15)]);
var inst_35832 = (state_35891[(16)]);
var inst_35840 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35833,inst_35835);
var inst_35841 = cljs.core.async.muxch_STAR_(inst_35840);
var inst_35842 = cljs.core.async.close_BANG_(inst_35841);
var inst_35843 = (inst_35835 + (1));
var tmp35961 = inst_35834;
var tmp35962 = inst_35833;
var tmp35963 = inst_35832;
var inst_35832__$1 = tmp35963;
var inst_35833__$1 = tmp35962;
var inst_35834__$1 = tmp35961;
var inst_35835__$1 = inst_35843;
var state_35891__$1 = (function (){var statearr_35974 = state_35891;
(statearr_35974[(13)] = inst_35835__$1);

(statearr_35974[(14)] = inst_35834__$1);

(statearr_35974[(17)] = inst_35842);

(statearr_35974[(15)] = inst_35833__$1);

(statearr_35974[(16)] = inst_35832__$1);

return statearr_35974;
})();
var statearr_35975_37736 = state_35891__$1;
(statearr_35975_37736[(2)] = null);

(statearr_35975_37736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (18))){
var inst_35861 = (state_35891[(2)]);
var state_35891__$1 = state_35891;
var statearr_35978_37739 = state_35891__$1;
(statearr_35978_37739[(2)] = inst_35861);

(statearr_35978_37739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35892 === (8))){
var inst_35835 = (state_35891[(13)]);
var inst_35834 = (state_35891[(14)]);
var inst_35837 = (inst_35835 < inst_35834);
var inst_35838 = inst_35837;
var state_35891__$1 = state_35891;
if(cljs.core.truth_(inst_35838)){
var statearr_35980_37740 = state_35891__$1;
(statearr_35980_37740[(1)] = (10));

} else {
var statearr_35982_37741 = state_35891__$1;
(statearr_35982_37741[(1)] = (11));

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
var statearr_35986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35986[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_35986[(1)] = (1));

return statearr_35986;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_35891){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35891);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35987){if((e35987 instanceof Object)){
var ex__34203__auto__ = e35987;
var statearr_35989_37746 = state_35891;
(statearr_35989_37746[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37747 = state_35891;
state_35891 = G__37747;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_35891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_35891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35993 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35993[(6)] = c__34267__auto___37640);

return statearr_35993;
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
var G__36011 = arguments.length;
switch (G__36011) {
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
var G__36027 = arguments.length;
switch (G__36027) {
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
var c__34267__auto___37770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36085){
var state_val_36086 = (state_36085[(1)]);
if((state_val_36086 === (7))){
var state_36085__$1 = state_36085;
var statearr_36087_37771 = state_36085__$1;
(statearr_36087_37771[(2)] = null);

(statearr_36087_37771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (1))){
var state_36085__$1 = state_36085;
var statearr_36088_37777 = state_36085__$1;
(statearr_36088_37777[(2)] = null);

(statearr_36088_37777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (4))){
var inst_36042 = (state_36085[(7)]);
var inst_36044 = (inst_36042 < cnt);
var state_36085__$1 = state_36085;
if(cljs.core.truth_(inst_36044)){
var statearr_36089_37782 = state_36085__$1;
(statearr_36089_37782[(1)] = (6));

} else {
var statearr_36090_37783 = state_36085__$1;
(statearr_36090_37783[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (15))){
var inst_36081 = (state_36085[(2)]);
var state_36085__$1 = state_36085;
var statearr_36091_37786 = state_36085__$1;
(statearr_36091_37786[(2)] = inst_36081);

(statearr_36091_37786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (13))){
var inst_36074 = cljs.core.async.close_BANG_(out);
var state_36085__$1 = state_36085;
var statearr_36093_37787 = state_36085__$1;
(statearr_36093_37787[(2)] = inst_36074);

(statearr_36093_37787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (6))){
var state_36085__$1 = state_36085;
var statearr_36095_37793 = state_36085__$1;
(statearr_36095_37793[(2)] = null);

(statearr_36095_37793[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (3))){
var inst_36083 = (state_36085[(2)]);
var state_36085__$1 = state_36085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36085__$1,inst_36083);
} else {
if((state_val_36086 === (12))){
var inst_36071 = (state_36085[(8)]);
var inst_36071__$1 = (state_36085[(2)]);
var inst_36072 = cljs.core.some(cljs.core.nil_QMARK_,inst_36071__$1);
var state_36085__$1 = (function (){var statearr_36104 = state_36085;
(statearr_36104[(8)] = inst_36071__$1);

return statearr_36104;
})();
if(cljs.core.truth_(inst_36072)){
var statearr_36106_37797 = state_36085__$1;
(statearr_36106_37797[(1)] = (13));

} else {
var statearr_36107_37798 = state_36085__$1;
(statearr_36107_37798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (2))){
var inst_36040 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36042 = (0);
var state_36085__$1 = (function (){var statearr_36110 = state_36085;
(statearr_36110[(7)] = inst_36042);

(statearr_36110[(9)] = inst_36040);

return statearr_36110;
})();
var statearr_36113_37806 = state_36085__$1;
(statearr_36113_37806[(2)] = null);

(statearr_36113_37806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (11))){
var inst_36042 = (state_36085[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36085,(10),Object,null,(9));
var inst_36054 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36042) : chs__$1.call(null,inst_36042));
var inst_36055 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36042) : done.call(null,inst_36042));
var inst_36056 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36054,inst_36055);
var state_36085__$1 = state_36085;
var statearr_36116_37808 = state_36085__$1;
(statearr_36116_37808[(2)] = inst_36056);


cljs.core.async.impl.ioc_helpers.process_exception(state_36085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (9))){
var inst_36042 = (state_36085[(7)]);
var inst_36058 = (state_36085[(2)]);
var inst_36060 = (inst_36042 + (1));
var inst_36042__$1 = inst_36060;
var state_36085__$1 = (function (){var statearr_36118 = state_36085;
(statearr_36118[(10)] = inst_36058);

(statearr_36118[(7)] = inst_36042__$1);

return statearr_36118;
})();
var statearr_36119_37817 = state_36085__$1;
(statearr_36119_37817[(2)] = null);

(statearr_36119_37817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (5))){
var inst_36068 = (state_36085[(2)]);
var state_36085__$1 = (function (){var statearr_36120 = state_36085;
(statearr_36120[(11)] = inst_36068);

return statearr_36120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36085__$1,(12),dchan);
} else {
if((state_val_36086 === (14))){
var inst_36071 = (state_36085[(8)]);
var inst_36076 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36071);
var state_36085__$1 = state_36085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36085__$1,(16),out,inst_36076);
} else {
if((state_val_36086 === (16))){
var inst_36078 = (state_36085[(2)]);
var state_36085__$1 = (function (){var statearr_36126 = state_36085;
(statearr_36126[(12)] = inst_36078);

return statearr_36126;
})();
var statearr_36127_37820 = state_36085__$1;
(statearr_36127_37820[(2)] = null);

(statearr_36127_37820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (10))){
var inst_36049 = (state_36085[(2)]);
var inst_36050 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36085__$1 = (function (){var statearr_36128 = state_36085;
(statearr_36128[(13)] = inst_36049);

return statearr_36128;
})();
var statearr_36129_37822 = state_36085__$1;
(statearr_36129_37822[(2)] = inst_36050);


cljs.core.async.impl.ioc_helpers.process_exception(state_36085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36086 === (8))){
var inst_36064 = (state_36085[(2)]);
var state_36085__$1 = state_36085;
var statearr_36130_37828 = state_36085__$1;
(statearr_36130_37828[(2)] = inst_36064);

(statearr_36130_37828[(1)] = (5));


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
var statearr_36131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36131[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36131[(1)] = (1));

return statearr_36131;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36085){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36085);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36132){if((e36132 instanceof Object)){
var ex__34203__auto__ = e36132;
var statearr_36133_37834 = state_36085;
(statearr_36133_37834[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36132;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37835 = state_36085;
state_36085 = G__37835;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36134 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36134[(6)] = c__34267__auto___37770);

return statearr_36134;
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
var G__36151 = arguments.length;
switch (G__36151) {
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
var c__34267__auto___37846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36189){
var state_val_36190 = (state_36189[(1)]);
if((state_val_36190 === (7))){
var inst_36165 = (state_36189[(7)]);
var inst_36164 = (state_36189[(8)]);
var inst_36164__$1 = (state_36189[(2)]);
var inst_36165__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36164__$1,(0),null);
var inst_36166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36164__$1,(1),null);
var inst_36168 = (inst_36165__$1 == null);
var state_36189__$1 = (function (){var statearr_36197 = state_36189;
(statearr_36197[(9)] = inst_36166);

(statearr_36197[(7)] = inst_36165__$1);

(statearr_36197[(8)] = inst_36164__$1);

return statearr_36197;
})();
if(cljs.core.truth_(inst_36168)){
var statearr_36198_37855 = state_36189__$1;
(statearr_36198_37855[(1)] = (8));

} else {
var statearr_36199_37857 = state_36189__$1;
(statearr_36199_37857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36190 === (1))){
var inst_36154 = cljs.core.vec(chs);
var inst_36155 = inst_36154;
var state_36189__$1 = (function (){var statearr_36205 = state_36189;
(statearr_36205[(10)] = inst_36155);

return statearr_36205;
})();
var statearr_36206_37858 = state_36189__$1;
(statearr_36206_37858[(2)] = null);

(statearr_36206_37858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36190 === (4))){
var inst_36155 = (state_36189[(10)]);
var state_36189__$1 = state_36189;
return cljs.core.async.ioc_alts_BANG_(state_36189__$1,(7),inst_36155);
} else {
if((state_val_36190 === (6))){
var inst_36184 = (state_36189[(2)]);
var state_36189__$1 = state_36189;
var statearr_36215_37860 = state_36189__$1;
(statearr_36215_37860[(2)] = inst_36184);

(statearr_36215_37860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36190 === (3))){
var inst_36186 = (state_36189[(2)]);
var state_36189__$1 = state_36189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36189__$1,inst_36186);
} else {
if((state_val_36190 === (2))){
var inst_36155 = (state_36189[(10)]);
var inst_36157 = cljs.core.count(inst_36155);
var inst_36158 = (inst_36157 > (0));
var state_36189__$1 = state_36189;
if(cljs.core.truth_(inst_36158)){
var statearr_36219_37865 = state_36189__$1;
(statearr_36219_37865[(1)] = (4));

} else {
var statearr_36220_37866 = state_36189__$1;
(statearr_36220_37866[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36190 === (11))){
var inst_36155 = (state_36189[(10)]);
var inst_36176 = (state_36189[(2)]);
var tmp36216 = inst_36155;
var inst_36155__$1 = tmp36216;
var state_36189__$1 = (function (){var statearr_36222 = state_36189;
(statearr_36222[(11)] = inst_36176);

(statearr_36222[(10)] = inst_36155__$1);

return statearr_36222;
})();
var statearr_36223_37870 = state_36189__$1;
(statearr_36223_37870[(2)] = null);

(statearr_36223_37870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36190 === (9))){
var inst_36165 = (state_36189[(7)]);
var state_36189__$1 = state_36189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36189__$1,(11),out,inst_36165);
} else {
if((state_val_36190 === (5))){
var inst_36182 = cljs.core.async.close_BANG_(out);
var state_36189__$1 = state_36189;
var statearr_36226_37873 = state_36189__$1;
(statearr_36226_37873[(2)] = inst_36182);

(statearr_36226_37873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36190 === (10))){
var inst_36180 = (state_36189[(2)]);
var state_36189__$1 = state_36189;
var statearr_36227_37877 = state_36189__$1;
(statearr_36227_37877[(2)] = inst_36180);

(statearr_36227_37877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36190 === (8))){
var inst_36166 = (state_36189[(9)]);
var inst_36165 = (state_36189[(7)]);
var inst_36155 = (state_36189[(10)]);
var inst_36164 = (state_36189[(8)]);
var inst_36171 = (function (){var cs = inst_36155;
var vec__36160 = inst_36164;
var v = inst_36165;
var c = inst_36166;
return (function (p1__36139_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36139_SHARP_);
});
})();
var inst_36172 = cljs.core.filterv(inst_36171,inst_36155);
var inst_36155__$1 = inst_36172;
var state_36189__$1 = (function (){var statearr_36230 = state_36189;
(statearr_36230[(10)] = inst_36155__$1);

return statearr_36230;
})();
var statearr_36231_37882 = state_36189__$1;
(statearr_36231_37882[(2)] = null);

(statearr_36231_37882[(1)] = (2));


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
var statearr_36234 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36234[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36234[(1)] = (1));

return statearr_36234;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36189){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36189);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36237){if((e36237 instanceof Object)){
var ex__34203__auto__ = e36237;
var statearr_36238_37890 = state_36189;
(statearr_36238_37890[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37891 = state_36189;
state_36189 = G__37891;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36240 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36240[(6)] = c__34267__auto___37846);

return statearr_36240;
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
var G__36252 = arguments.length;
switch (G__36252) {
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
var c__34267__auto___37903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36280){
var state_val_36281 = (state_36280[(1)]);
if((state_val_36281 === (7))){
var inst_36260 = (state_36280[(7)]);
var inst_36260__$1 = (state_36280[(2)]);
var inst_36262 = (inst_36260__$1 == null);
var inst_36263 = cljs.core.not(inst_36262);
var state_36280__$1 = (function (){var statearr_36284 = state_36280;
(statearr_36284[(7)] = inst_36260__$1);

return statearr_36284;
})();
if(inst_36263){
var statearr_36285_37909 = state_36280__$1;
(statearr_36285_37909[(1)] = (8));

} else {
var statearr_36286_37910 = state_36280__$1;
(statearr_36286_37910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (1))){
var inst_36255 = (0);
var state_36280__$1 = (function (){var statearr_36287 = state_36280;
(statearr_36287[(8)] = inst_36255);

return statearr_36287;
})();
var statearr_36289_37912 = state_36280__$1;
(statearr_36289_37912[(2)] = null);

(statearr_36289_37912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (4))){
var state_36280__$1 = state_36280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36280__$1,(7),ch);
} else {
if((state_val_36281 === (6))){
var inst_36275 = (state_36280[(2)]);
var state_36280__$1 = state_36280;
var statearr_36293_37917 = state_36280__$1;
(statearr_36293_37917[(2)] = inst_36275);

(statearr_36293_37917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (3))){
var inst_36277 = (state_36280[(2)]);
var inst_36278 = cljs.core.async.close_BANG_(out);
var state_36280__$1 = (function (){var statearr_36294 = state_36280;
(statearr_36294[(9)] = inst_36277);

return statearr_36294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36280__$1,inst_36278);
} else {
if((state_val_36281 === (2))){
var inst_36255 = (state_36280[(8)]);
var inst_36257 = (inst_36255 < n);
var state_36280__$1 = state_36280;
if(cljs.core.truth_(inst_36257)){
var statearr_36296_37922 = state_36280__$1;
(statearr_36296_37922[(1)] = (4));

} else {
var statearr_36301_37924 = state_36280__$1;
(statearr_36301_37924[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (11))){
var inst_36255 = (state_36280[(8)]);
var inst_36266 = (state_36280[(2)]);
var inst_36267 = (inst_36255 + (1));
var inst_36255__$1 = inst_36267;
var state_36280__$1 = (function (){var statearr_36305 = state_36280;
(statearr_36305[(8)] = inst_36255__$1);

(statearr_36305[(10)] = inst_36266);

return statearr_36305;
})();
var statearr_36306_37928 = state_36280__$1;
(statearr_36306_37928[(2)] = null);

(statearr_36306_37928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (9))){
var state_36280__$1 = state_36280;
var statearr_36307_37929 = state_36280__$1;
(statearr_36307_37929[(2)] = null);

(statearr_36307_37929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (5))){
var state_36280__$1 = state_36280;
var statearr_36309_37930 = state_36280__$1;
(statearr_36309_37930[(2)] = null);

(statearr_36309_37930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (10))){
var inst_36272 = (state_36280[(2)]);
var state_36280__$1 = state_36280;
var statearr_36310_37932 = state_36280__$1;
(statearr_36310_37932[(2)] = inst_36272);

(statearr_36310_37932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36281 === (8))){
var inst_36260 = (state_36280[(7)]);
var state_36280__$1 = state_36280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36280__$1,(11),out,inst_36260);
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
var statearr_36314 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36314[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36314[(1)] = (1));

return statearr_36314;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36280){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36280);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36316){if((e36316 instanceof Object)){
var ex__34203__auto__ = e36316;
var statearr_36317_37938 = state_36280;
(statearr_36317_37938[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36316;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37940 = state_36280;
state_36280 = G__37940;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36319 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36319[(6)] = c__34267__auto___37903);

return statearr_36319;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36322 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36322 = (function (f,ch,meta36323){
this.f = f;
this.ch = ch;
this.meta36323 = meta36323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36324,meta36323__$1){
var self__ = this;
var _36324__$1 = this;
return (new cljs.core.async.t_cljs$core$async36322(self__.f,self__.ch,meta36323__$1));
}));

(cljs.core.async.t_cljs$core$async36322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36324){
var self__ = this;
var _36324__$1 = this;
return self__.meta36323;
}));

(cljs.core.async.t_cljs$core$async36322.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36322.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36322.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36322.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36322.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36336 = (function (f,ch,meta36323,_,fn1,meta36337){
this.f = f;
this.ch = ch;
this.meta36323 = meta36323;
this._ = _;
this.fn1 = fn1;
this.meta36337 = meta36337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36338,meta36337__$1){
var self__ = this;
var _36338__$1 = this;
return (new cljs.core.async.t_cljs$core$async36336(self__.f,self__.ch,self__.meta36323,self__._,self__.fn1,meta36337__$1));
}));

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36338){
var self__ = this;
var _36338__$1 = this;
return self__.meta36337;
}));

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36321_SHARP_){
var G__36344 = (((p1__36321_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36321_SHARP_) : self__.f.call(null,p1__36321_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36344) : f1.call(null,G__36344));
});
}));

(cljs.core.async.t_cljs$core$async36336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36323","meta36323",304181362,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36322","cljs.core.async/t_cljs$core$async36322",-419656429,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36337","meta36337",-22991669,null)], null);
}));

(cljs.core.async.t_cljs$core$async36336.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36336");

(cljs.core.async.t_cljs$core$async36336.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36336");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36336.
 */
cljs.core.async.__GT_t_cljs$core$async36336 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36336(f__$1,ch__$1,meta36323__$1,___$2,fn1__$1,meta36337){
return (new cljs.core.async.t_cljs$core$async36336(f__$1,ch__$1,meta36323__$1,___$2,fn1__$1,meta36337));
});

}

return (new cljs.core.async.t_cljs$core$async36336(self__.f,self__.ch,self__.meta36323,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36347 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36347) : self__.f.call(null,G__36347));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36322.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36322.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36323","meta36323",304181362,null)], null);
}));

(cljs.core.async.t_cljs$core$async36322.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36322");

(cljs.core.async.t_cljs$core$async36322.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36322");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36322.
 */
cljs.core.async.__GT_t_cljs$core$async36322 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36322(f__$1,ch__$1,meta36323){
return (new cljs.core.async.t_cljs$core$async36322(f__$1,ch__$1,meta36323));
});

}

return (new cljs.core.async.t_cljs$core$async36322(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36354 = (function (f,ch,meta36355){
this.f = f;
this.ch = ch;
this.meta36355 = meta36355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36356,meta36355__$1){
var self__ = this;
var _36356__$1 = this;
return (new cljs.core.async.t_cljs$core$async36354(self__.f,self__.ch,meta36355__$1));
}));

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36356){
var self__ = this;
var _36356__$1 = this;
return self__.meta36355;
}));

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36355","meta36355",673399743,null)], null);
}));

(cljs.core.async.t_cljs$core$async36354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36354");

(cljs.core.async.t_cljs$core$async36354.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36354.
 */
cljs.core.async.__GT_t_cljs$core$async36354 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36354(f__$1,ch__$1,meta36355){
return (new cljs.core.async.t_cljs$core$async36354(f__$1,ch__$1,meta36355));
});

}

return (new cljs.core.async.t_cljs$core$async36354(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36371 = (function (p,ch,meta36372){
this.p = p;
this.ch = ch;
this.meta36372 = meta36372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36373,meta36372__$1){
var self__ = this;
var _36373__$1 = this;
return (new cljs.core.async.t_cljs$core$async36371(self__.p,self__.ch,meta36372__$1));
}));

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36373){
var self__ = this;
var _36373__$1 = this;
return self__.meta36372;
}));

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36371.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36372","meta36372",-447091795,null)], null);
}));

(cljs.core.async.t_cljs$core$async36371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36371");

(cljs.core.async.t_cljs$core$async36371.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36371.
 */
cljs.core.async.__GT_t_cljs$core$async36371 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36371(p__$1,ch__$1,meta36372){
return (new cljs.core.async.t_cljs$core$async36371(p__$1,ch__$1,meta36372));
});

}

return (new cljs.core.async.t_cljs$core$async36371(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36391 = arguments.length;
switch (G__36391) {
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
var c__34267__auto___37995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36423){
var state_val_36429 = (state_36423[(1)]);
if((state_val_36429 === (7))){
var inst_36418 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
var statearr_36434_37998 = state_36423__$1;
(statearr_36434_37998[(2)] = inst_36418);

(statearr_36434_37998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36429 === (1))){
var state_36423__$1 = state_36423;
var statearr_36435_37999 = state_36423__$1;
(statearr_36435_37999[(2)] = null);

(statearr_36435_37999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36429 === (4))){
var inst_36404 = (state_36423[(7)]);
var inst_36404__$1 = (state_36423[(2)]);
var inst_36405 = (inst_36404__$1 == null);
var state_36423__$1 = (function (){var statearr_36436 = state_36423;
(statearr_36436[(7)] = inst_36404__$1);

return statearr_36436;
})();
if(cljs.core.truth_(inst_36405)){
var statearr_36438_38000 = state_36423__$1;
(statearr_36438_38000[(1)] = (5));

} else {
var statearr_36440_38001 = state_36423__$1;
(statearr_36440_38001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36429 === (6))){
var inst_36404 = (state_36423[(7)]);
var inst_36409 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36404) : p.call(null,inst_36404));
var state_36423__$1 = state_36423;
if(cljs.core.truth_(inst_36409)){
var statearr_36441_38002 = state_36423__$1;
(statearr_36441_38002[(1)] = (8));

} else {
var statearr_36442_38003 = state_36423__$1;
(statearr_36442_38003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36429 === (3))){
var inst_36421 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36423__$1,inst_36421);
} else {
if((state_val_36429 === (2))){
var state_36423__$1 = state_36423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36423__$1,(4),ch);
} else {
if((state_val_36429 === (11))){
var inst_36412 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
var statearr_36446_38007 = state_36423__$1;
(statearr_36446_38007[(2)] = inst_36412);

(statearr_36446_38007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36429 === (9))){
var state_36423__$1 = state_36423;
var statearr_36447_38008 = state_36423__$1;
(statearr_36447_38008[(2)] = null);

(statearr_36447_38008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36429 === (5))){
var inst_36407 = cljs.core.async.close_BANG_(out);
var state_36423__$1 = state_36423;
var statearr_36454_38013 = state_36423__$1;
(statearr_36454_38013[(2)] = inst_36407);

(statearr_36454_38013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36429 === (10))){
var inst_36415 = (state_36423[(2)]);
var state_36423__$1 = (function (){var statearr_36455 = state_36423;
(statearr_36455[(8)] = inst_36415);

return statearr_36455;
})();
var statearr_36456_38014 = state_36423__$1;
(statearr_36456_38014[(2)] = null);

(statearr_36456_38014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36429 === (8))){
var inst_36404 = (state_36423[(7)]);
var state_36423__$1 = state_36423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36423__$1,(11),out,inst_36404);
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
var statearr_36458 = [null,null,null,null,null,null,null,null,null];
(statearr_36458[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36458[(1)] = (1));

return statearr_36458;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36423){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36423);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36459){if((e36459 instanceof Object)){
var ex__34203__auto__ = e36459;
var statearr_36460_38015 = state_36423;
(statearr_36460_38015[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38016 = state_36423;
state_36423 = G__38016;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36462 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36462[(6)] = c__34267__auto___37995);

return statearr_36462;
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
var G__36468 = arguments.length;
switch (G__36468) {
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36535){
var state_val_36536 = (state_36535[(1)]);
if((state_val_36536 === (7))){
var inst_36530 = (state_36535[(2)]);
var state_36535__$1 = state_36535;
var statearr_36539_38023 = state_36535__$1;
(statearr_36539_38023[(2)] = inst_36530);

(statearr_36539_38023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (20))){
var inst_36499 = (state_36535[(7)]);
var inst_36510 = (state_36535[(2)]);
var inst_36511 = cljs.core.next(inst_36499);
var inst_36484 = inst_36511;
var inst_36485 = null;
var inst_36486 = (0);
var inst_36487 = (0);
var state_36535__$1 = (function (){var statearr_36540 = state_36535;
(statearr_36540[(8)] = inst_36486);

(statearr_36540[(9)] = inst_36510);

(statearr_36540[(10)] = inst_36485);

(statearr_36540[(11)] = inst_36484);

(statearr_36540[(12)] = inst_36487);

return statearr_36540;
})();
var statearr_36542_38024 = state_36535__$1;
(statearr_36542_38024[(2)] = null);

(statearr_36542_38024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (1))){
var state_36535__$1 = state_36535;
var statearr_36543_38025 = state_36535__$1;
(statearr_36543_38025[(2)] = null);

(statearr_36543_38025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (4))){
var inst_36473 = (state_36535[(13)]);
var inst_36473__$1 = (state_36535[(2)]);
var inst_36474 = (inst_36473__$1 == null);
var state_36535__$1 = (function (){var statearr_36544 = state_36535;
(statearr_36544[(13)] = inst_36473__$1);

return statearr_36544;
})();
if(cljs.core.truth_(inst_36474)){
var statearr_36546_38028 = state_36535__$1;
(statearr_36546_38028[(1)] = (5));

} else {
var statearr_36547_38029 = state_36535__$1;
(statearr_36547_38029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (15))){
var state_36535__$1 = state_36535;
var statearr_36551_38032 = state_36535__$1;
(statearr_36551_38032[(2)] = null);

(statearr_36551_38032[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (21))){
var state_36535__$1 = state_36535;
var statearr_36553_38033 = state_36535__$1;
(statearr_36553_38033[(2)] = null);

(statearr_36553_38033[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (13))){
var inst_36486 = (state_36535[(8)]);
var inst_36485 = (state_36535[(10)]);
var inst_36484 = (state_36535[(11)]);
var inst_36487 = (state_36535[(12)]);
var inst_36495 = (state_36535[(2)]);
var inst_36496 = (inst_36487 + (1));
var tmp36548 = inst_36486;
var tmp36549 = inst_36485;
var tmp36550 = inst_36484;
var inst_36484__$1 = tmp36550;
var inst_36485__$1 = tmp36549;
var inst_36486__$1 = tmp36548;
var inst_36487__$1 = inst_36496;
var state_36535__$1 = (function (){var statearr_36554 = state_36535;
(statearr_36554[(8)] = inst_36486__$1);

(statearr_36554[(10)] = inst_36485__$1);

(statearr_36554[(11)] = inst_36484__$1);

(statearr_36554[(14)] = inst_36495);

(statearr_36554[(12)] = inst_36487__$1);

return statearr_36554;
})();
var statearr_36556_38037 = state_36535__$1;
(statearr_36556_38037[(2)] = null);

(statearr_36556_38037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (22))){
var state_36535__$1 = state_36535;
var statearr_36557_38038 = state_36535__$1;
(statearr_36557_38038[(2)] = null);

(statearr_36557_38038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (6))){
var inst_36473 = (state_36535[(13)]);
var inst_36482 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36473) : f.call(null,inst_36473));
var inst_36483 = cljs.core.seq(inst_36482);
var inst_36484 = inst_36483;
var inst_36485 = null;
var inst_36486 = (0);
var inst_36487 = (0);
var state_36535__$1 = (function (){var statearr_36559 = state_36535;
(statearr_36559[(8)] = inst_36486);

(statearr_36559[(10)] = inst_36485);

(statearr_36559[(11)] = inst_36484);

(statearr_36559[(12)] = inst_36487);

return statearr_36559;
})();
var statearr_36560_38039 = state_36535__$1;
(statearr_36560_38039[(2)] = null);

(statearr_36560_38039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (17))){
var inst_36499 = (state_36535[(7)]);
var inst_36503 = cljs.core.chunk_first(inst_36499);
var inst_36504 = cljs.core.chunk_rest(inst_36499);
var inst_36505 = cljs.core.count(inst_36503);
var inst_36484 = inst_36504;
var inst_36485 = inst_36503;
var inst_36486 = inst_36505;
var inst_36487 = (0);
var state_36535__$1 = (function (){var statearr_36562 = state_36535;
(statearr_36562[(8)] = inst_36486);

(statearr_36562[(10)] = inst_36485);

(statearr_36562[(11)] = inst_36484);

(statearr_36562[(12)] = inst_36487);

return statearr_36562;
})();
var statearr_36563_38043 = state_36535__$1;
(statearr_36563_38043[(2)] = null);

(statearr_36563_38043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (3))){
var inst_36532 = (state_36535[(2)]);
var state_36535__$1 = state_36535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36535__$1,inst_36532);
} else {
if((state_val_36536 === (12))){
var inst_36519 = (state_36535[(2)]);
var state_36535__$1 = state_36535;
var statearr_36564_38048 = state_36535__$1;
(statearr_36564_38048[(2)] = inst_36519);

(statearr_36564_38048[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (2))){
var state_36535__$1 = state_36535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36535__$1,(4),in$);
} else {
if((state_val_36536 === (23))){
var inst_36528 = (state_36535[(2)]);
var state_36535__$1 = state_36535;
var statearr_36566_38049 = state_36535__$1;
(statearr_36566_38049[(2)] = inst_36528);

(statearr_36566_38049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (19))){
var inst_36514 = (state_36535[(2)]);
var state_36535__$1 = state_36535;
var statearr_36567_38050 = state_36535__$1;
(statearr_36567_38050[(2)] = inst_36514);

(statearr_36567_38050[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (11))){
var inst_36499 = (state_36535[(7)]);
var inst_36484 = (state_36535[(11)]);
var inst_36499__$1 = cljs.core.seq(inst_36484);
var state_36535__$1 = (function (){var statearr_36569 = state_36535;
(statearr_36569[(7)] = inst_36499__$1);

return statearr_36569;
})();
if(inst_36499__$1){
var statearr_36570_38052 = state_36535__$1;
(statearr_36570_38052[(1)] = (14));

} else {
var statearr_36571_38053 = state_36535__$1;
(statearr_36571_38053[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (9))){
var inst_36522 = (state_36535[(2)]);
var inst_36523 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36535__$1 = (function (){var statearr_36573 = state_36535;
(statearr_36573[(15)] = inst_36522);

return statearr_36573;
})();
if(cljs.core.truth_(inst_36523)){
var statearr_36574_38058 = state_36535__$1;
(statearr_36574_38058[(1)] = (21));

} else {
var statearr_36575_38059 = state_36535__$1;
(statearr_36575_38059[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (5))){
var inst_36476 = cljs.core.async.close_BANG_(out);
var state_36535__$1 = state_36535;
var statearr_36576_38060 = state_36535__$1;
(statearr_36576_38060[(2)] = inst_36476);

(statearr_36576_38060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (14))){
var inst_36499 = (state_36535[(7)]);
var inst_36501 = cljs.core.chunked_seq_QMARK_(inst_36499);
var state_36535__$1 = state_36535;
if(inst_36501){
var statearr_36578_38061 = state_36535__$1;
(statearr_36578_38061[(1)] = (17));

} else {
var statearr_36579_38062 = state_36535__$1;
(statearr_36579_38062[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (16))){
var inst_36517 = (state_36535[(2)]);
var state_36535__$1 = state_36535;
var statearr_36580_38063 = state_36535__$1;
(statearr_36580_38063[(2)] = inst_36517);

(statearr_36580_38063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (10))){
var inst_36485 = (state_36535[(10)]);
var inst_36487 = (state_36535[(12)]);
var inst_36493 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36485,inst_36487);
var state_36535__$1 = state_36535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36535__$1,(13),out,inst_36493);
} else {
if((state_val_36536 === (18))){
var inst_36499 = (state_36535[(7)]);
var inst_36508 = cljs.core.first(inst_36499);
var state_36535__$1 = state_36535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36535__$1,(20),out,inst_36508);
} else {
if((state_val_36536 === (8))){
var inst_36486 = (state_36535[(8)]);
var inst_36487 = (state_36535[(12)]);
var inst_36490 = (inst_36487 < inst_36486);
var inst_36491 = inst_36490;
var state_36535__$1 = state_36535;
if(cljs.core.truth_(inst_36491)){
var statearr_36582_38069 = state_36535__$1;
(statearr_36582_38069[(1)] = (10));

} else {
var statearr_36583_38070 = state_36535__$1;
(statearr_36583_38070[(1)] = (11));

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
var statearr_36585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36585[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__);

(statearr_36585[(1)] = (1));

return statearr_36585;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1 = (function (state_36535){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36535);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36587){if((e36587 instanceof Object)){
var ex__34203__auto__ = e36587;
var statearr_36588_38071 = state_36535;
(statearr_36588_38071[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36587;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38072 = state_36535;
state_36535 = G__38072;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__ = function(state_36535){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1.call(this,state_36535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36589 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36589[(6)] = c__34267__auto__);

return statearr_36589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36592 = arguments.length;
switch (G__36592) {
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
var G__36597 = arguments.length;
switch (G__36597) {
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
var G__36601 = arguments.length;
switch (G__36601) {
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
var c__34267__auto___38083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36627){
var state_val_36628 = (state_36627[(1)]);
if((state_val_36628 === (7))){
var inst_36622 = (state_36627[(2)]);
var state_36627__$1 = state_36627;
var statearr_36630_38084 = state_36627__$1;
(statearr_36630_38084[(2)] = inst_36622);

(statearr_36630_38084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (1))){
var inst_36603 = null;
var state_36627__$1 = (function (){var statearr_36631 = state_36627;
(statearr_36631[(7)] = inst_36603);

return statearr_36631;
})();
var statearr_36633_38085 = state_36627__$1;
(statearr_36633_38085[(2)] = null);

(statearr_36633_38085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (4))){
var inst_36606 = (state_36627[(8)]);
var inst_36606__$1 = (state_36627[(2)]);
var inst_36607 = (inst_36606__$1 == null);
var inst_36608 = cljs.core.not(inst_36607);
var state_36627__$1 = (function (){var statearr_36634 = state_36627;
(statearr_36634[(8)] = inst_36606__$1);

return statearr_36634;
})();
if(inst_36608){
var statearr_36635_38088 = state_36627__$1;
(statearr_36635_38088[(1)] = (5));

} else {
var statearr_36636_38089 = state_36627__$1;
(statearr_36636_38089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (6))){
var state_36627__$1 = state_36627;
var statearr_36638_38090 = state_36627__$1;
(statearr_36638_38090[(2)] = null);

(statearr_36638_38090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (3))){
var inst_36624 = (state_36627[(2)]);
var inst_36625 = cljs.core.async.close_BANG_(out);
var state_36627__$1 = (function (){var statearr_36639 = state_36627;
(statearr_36639[(9)] = inst_36624);

return statearr_36639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36627__$1,inst_36625);
} else {
if((state_val_36628 === (2))){
var state_36627__$1 = state_36627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36627__$1,(4),ch);
} else {
if((state_val_36628 === (11))){
var inst_36606 = (state_36627[(8)]);
var inst_36616 = (state_36627[(2)]);
var inst_36603 = inst_36606;
var state_36627__$1 = (function (){var statearr_36641 = state_36627;
(statearr_36641[(10)] = inst_36616);

(statearr_36641[(7)] = inst_36603);

return statearr_36641;
})();
var statearr_36642_38091 = state_36627__$1;
(statearr_36642_38091[(2)] = null);

(statearr_36642_38091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (9))){
var inst_36606 = (state_36627[(8)]);
var state_36627__$1 = state_36627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36627__$1,(11),out,inst_36606);
} else {
if((state_val_36628 === (5))){
var inst_36606 = (state_36627[(8)]);
var inst_36603 = (state_36627[(7)]);
var inst_36610 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36606,inst_36603);
var state_36627__$1 = state_36627;
if(inst_36610){
var statearr_36645_38095 = state_36627__$1;
(statearr_36645_38095[(1)] = (8));

} else {
var statearr_36646_38096 = state_36627__$1;
(statearr_36646_38096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (10))){
var inst_36619 = (state_36627[(2)]);
var state_36627__$1 = state_36627;
var statearr_36647_38097 = state_36627__$1;
(statearr_36647_38097[(2)] = inst_36619);

(statearr_36647_38097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (8))){
var inst_36603 = (state_36627[(7)]);
var tmp36643 = inst_36603;
var inst_36603__$1 = tmp36643;
var state_36627__$1 = (function (){var statearr_36648 = state_36627;
(statearr_36648[(7)] = inst_36603__$1);

return statearr_36648;
})();
var statearr_36650_38098 = state_36627__$1;
(statearr_36650_38098[(2)] = null);

(statearr_36650_38098[(1)] = (2));


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
var statearr_36651 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36651[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36651[(1)] = (1));

return statearr_36651;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36627){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36627);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36653){if((e36653 instanceof Object)){
var ex__34203__auto__ = e36653;
var statearr_36654_38102 = state_36627;
(statearr_36654_38102[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38103 = state_36627;
state_36627 = G__38103;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36655 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36655[(6)] = c__34267__auto___38083);

return statearr_36655;
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
var G__36659 = arguments.length;
switch (G__36659) {
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
var c__34267__auto___38108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36699){
var state_val_36700 = (state_36699[(1)]);
if((state_val_36700 === (7))){
var inst_36695 = (state_36699[(2)]);
var state_36699__$1 = state_36699;
var statearr_36702_38109 = state_36699__$1;
(statearr_36702_38109[(2)] = inst_36695);

(statearr_36702_38109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (1))){
var inst_36661 = (new Array(n));
var inst_36662 = inst_36661;
var inst_36663 = (0);
var state_36699__$1 = (function (){var statearr_36704 = state_36699;
(statearr_36704[(7)] = inst_36663);

(statearr_36704[(8)] = inst_36662);

return statearr_36704;
})();
var statearr_36705_38111 = state_36699__$1;
(statearr_36705_38111[(2)] = null);

(statearr_36705_38111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (4))){
var inst_36667 = (state_36699[(9)]);
var inst_36667__$1 = (state_36699[(2)]);
var inst_36668 = (inst_36667__$1 == null);
var inst_36669 = cljs.core.not(inst_36668);
var state_36699__$1 = (function (){var statearr_36706 = state_36699;
(statearr_36706[(9)] = inst_36667__$1);

return statearr_36706;
})();
if(inst_36669){
var statearr_36708_38114 = state_36699__$1;
(statearr_36708_38114[(1)] = (5));

} else {
var statearr_36709_38115 = state_36699__$1;
(statearr_36709_38115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (15))){
var inst_36689 = (state_36699[(2)]);
var state_36699__$1 = state_36699;
var statearr_36710_38116 = state_36699__$1;
(statearr_36710_38116[(2)] = inst_36689);

(statearr_36710_38116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (13))){
var state_36699__$1 = state_36699;
var statearr_36712_38117 = state_36699__$1;
(statearr_36712_38117[(2)] = null);

(statearr_36712_38117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (6))){
var inst_36663 = (state_36699[(7)]);
var inst_36685 = (inst_36663 > (0));
var state_36699__$1 = state_36699;
if(cljs.core.truth_(inst_36685)){
var statearr_36713_38118 = state_36699__$1;
(statearr_36713_38118[(1)] = (12));

} else {
var statearr_36714_38120 = state_36699__$1;
(statearr_36714_38120[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (3))){
var inst_36697 = (state_36699[(2)]);
var state_36699__$1 = state_36699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36699__$1,inst_36697);
} else {
if((state_val_36700 === (12))){
var inst_36662 = (state_36699[(8)]);
var inst_36687 = cljs.core.vec(inst_36662);
var state_36699__$1 = state_36699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36699__$1,(15),out,inst_36687);
} else {
if((state_val_36700 === (2))){
var state_36699__$1 = state_36699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36699__$1,(4),ch);
} else {
if((state_val_36700 === (11))){
var inst_36679 = (state_36699[(2)]);
var inst_36680 = (new Array(n));
var inst_36662 = inst_36680;
var inst_36663 = (0);
var state_36699__$1 = (function (){var statearr_36716 = state_36699;
(statearr_36716[(7)] = inst_36663);

(statearr_36716[(10)] = inst_36679);

(statearr_36716[(8)] = inst_36662);

return statearr_36716;
})();
var statearr_36718_38123 = state_36699__$1;
(statearr_36718_38123[(2)] = null);

(statearr_36718_38123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (9))){
var inst_36662 = (state_36699[(8)]);
var inst_36677 = cljs.core.vec(inst_36662);
var state_36699__$1 = state_36699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36699__$1,(11),out,inst_36677);
} else {
if((state_val_36700 === (5))){
var inst_36663 = (state_36699[(7)]);
var inst_36662 = (state_36699[(8)]);
var inst_36667 = (state_36699[(9)]);
var inst_36672 = (state_36699[(11)]);
var inst_36671 = (inst_36662[inst_36663] = inst_36667);
var inst_36672__$1 = (inst_36663 + (1));
var inst_36673 = (inst_36672__$1 < n);
var state_36699__$1 = (function (){var statearr_36720 = state_36699;
(statearr_36720[(12)] = inst_36671);

(statearr_36720[(11)] = inst_36672__$1);

return statearr_36720;
})();
if(cljs.core.truth_(inst_36673)){
var statearr_36721_38127 = state_36699__$1;
(statearr_36721_38127[(1)] = (8));

} else {
var statearr_36722_38128 = state_36699__$1;
(statearr_36722_38128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (14))){
var inst_36692 = (state_36699[(2)]);
var inst_36693 = cljs.core.async.close_BANG_(out);
var state_36699__$1 = (function (){var statearr_36724 = state_36699;
(statearr_36724[(13)] = inst_36692);

return statearr_36724;
})();
var statearr_36726_38129 = state_36699__$1;
(statearr_36726_38129[(2)] = inst_36693);

(statearr_36726_38129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (10))){
var inst_36683 = (state_36699[(2)]);
var state_36699__$1 = state_36699;
var statearr_36727_38130 = state_36699__$1;
(statearr_36727_38130[(2)] = inst_36683);

(statearr_36727_38130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (8))){
var inst_36662 = (state_36699[(8)]);
var inst_36672 = (state_36699[(11)]);
var tmp36723 = inst_36662;
var inst_36662__$1 = tmp36723;
var inst_36663 = inst_36672;
var state_36699__$1 = (function (){var statearr_36728 = state_36699;
(statearr_36728[(7)] = inst_36663);

(statearr_36728[(8)] = inst_36662__$1);

return statearr_36728;
})();
var statearr_36730_38134 = state_36699__$1;
(statearr_36730_38134[(2)] = null);

(statearr_36730_38134[(1)] = (2));


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
var statearr_36731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36731[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36731[(1)] = (1));

return statearr_36731;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36699){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36699);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36736){if((e36736 instanceof Object)){
var ex__34203__auto__ = e36736;
var statearr_36737_38135 = state_36699;
(statearr_36737_38135[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36736;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38137 = state_36699;
state_36699 = G__38137;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36739 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36739[(6)] = c__34267__auto___38108);

return statearr_36739;
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
var G__36742 = arguments.length;
switch (G__36742) {
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
var c__34267__auto___38141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36787){
var state_val_36788 = (state_36787[(1)]);
if((state_val_36788 === (7))){
var inst_36783 = (state_36787[(2)]);
var state_36787__$1 = state_36787;
var statearr_36790_38144 = state_36787__$1;
(statearr_36790_38144[(2)] = inst_36783);

(statearr_36790_38144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36788 === (1))){
var inst_36745 = [];
var inst_36746 = inst_36745;
var inst_36747 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36787__$1 = (function (){var statearr_36792 = state_36787;
(statearr_36792[(7)] = inst_36747);

(statearr_36792[(8)] = inst_36746);

return statearr_36792;
})();
var statearr_36793_38146 = state_36787__$1;
(statearr_36793_38146[(2)] = null);

(statearr_36793_38146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36788 === (4))){
var inst_36750 = (state_36787[(9)]);
var inst_36750__$1 = (state_36787[(2)]);
var inst_36751 = (inst_36750__$1 == null);
var inst_36752 = cljs.core.not(inst_36751);
var state_36787__$1 = (function (){var statearr_36794 = state_36787;
(statearr_36794[(9)] = inst_36750__$1);

return statearr_36794;
})();
if(inst_36752){
var statearr_36796_38147 = state_36787__$1;
(statearr_36796_38147[(1)] = (5));

} else {
var statearr_36797_38149 = state_36787__$1;
(statearr_36797_38149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36788 === (15))){
var inst_36777 = (state_36787[(2)]);
var state_36787__$1 = state_36787;
var statearr_36798_38151 = state_36787__$1;
(statearr_36798_38151[(2)] = inst_36777);

(statearr_36798_38151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36788 === (13))){
var state_36787__$1 = state_36787;
var statearr_36799_38153 = state_36787__$1;
(statearr_36799_38153[(2)] = null);

(statearr_36799_38153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36788 === (6))){
var inst_36746 = (state_36787[(8)]);
var inst_36772 = inst_36746.length;
var inst_36773 = (inst_36772 > (0));
var state_36787__$1 = state_36787;
if(cljs.core.truth_(inst_36773)){
var statearr_36801_38154 = state_36787__$1;
(statearr_36801_38154[(1)] = (12));

} else {
var statearr_36802_38155 = state_36787__$1;
(statearr_36802_38155[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36788 === (3))){
var inst_36785 = (state_36787[(2)]);
var state_36787__$1 = state_36787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36787__$1,inst_36785);
} else {
if((state_val_36788 === (12))){
var inst_36746 = (state_36787[(8)]);
var inst_36775 = cljs.core.vec(inst_36746);
var state_36787__$1 = state_36787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36787__$1,(15),out,inst_36775);
} else {
if((state_val_36788 === (2))){
var state_36787__$1 = state_36787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36787__$1,(4),ch);
} else {
if((state_val_36788 === (11))){
var inst_36754 = (state_36787[(10)]);
var inst_36750 = (state_36787[(9)]);
var inst_36765 = (state_36787[(2)]);
var inst_36766 = [];
var inst_36767 = inst_36766.push(inst_36750);
var inst_36746 = inst_36766;
var inst_36747 = inst_36754;
var state_36787__$1 = (function (){var statearr_36804 = state_36787;
(statearr_36804[(11)] = inst_36765);

(statearr_36804[(7)] = inst_36747);

(statearr_36804[(8)] = inst_36746);

(statearr_36804[(12)] = inst_36767);

return statearr_36804;
})();
var statearr_36806_38159 = state_36787__$1;
(statearr_36806_38159[(2)] = null);

(statearr_36806_38159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36788 === (9))){
var inst_36746 = (state_36787[(8)]);
var inst_36763 = cljs.core.vec(inst_36746);
var state_36787__$1 = state_36787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36787__$1,(11),out,inst_36763);
} else {
if((state_val_36788 === (5))){
var inst_36754 = (state_36787[(10)]);
var inst_36747 = (state_36787[(7)]);
var inst_36750 = (state_36787[(9)]);
var inst_36754__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36750) : f.call(null,inst_36750));
var inst_36755 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36754__$1,inst_36747);
var inst_36757 = cljs.core.keyword_identical_QMARK_(inst_36747,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36758 = ((inst_36755) || (inst_36757));
var state_36787__$1 = (function (){var statearr_36807 = state_36787;
(statearr_36807[(10)] = inst_36754__$1);

return statearr_36807;
})();
if(cljs.core.truth_(inst_36758)){
var statearr_36809_38163 = state_36787__$1;
(statearr_36809_38163[(1)] = (8));

} else {
var statearr_36810_38164 = state_36787__$1;
(statearr_36810_38164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36788 === (14))){
var inst_36780 = (state_36787[(2)]);
var inst_36781 = cljs.core.async.close_BANG_(out);
var state_36787__$1 = (function (){var statearr_36812 = state_36787;
(statearr_36812[(13)] = inst_36780);

return statearr_36812;
})();
var statearr_36813_38165 = state_36787__$1;
(statearr_36813_38165[(2)] = inst_36781);

(statearr_36813_38165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36788 === (10))){
var inst_36770 = (state_36787[(2)]);
var state_36787__$1 = state_36787;
var statearr_36815_38166 = state_36787__$1;
(statearr_36815_38166[(2)] = inst_36770);

(statearr_36815_38166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36788 === (8))){
var inst_36754 = (state_36787[(10)]);
var inst_36746 = (state_36787[(8)]);
var inst_36750 = (state_36787[(9)]);
var inst_36760 = inst_36746.push(inst_36750);
var tmp36811 = inst_36746;
var inst_36746__$1 = tmp36811;
var inst_36747 = inst_36754;
var state_36787__$1 = (function (){var statearr_36816 = state_36787;
(statearr_36816[(7)] = inst_36747);

(statearr_36816[(14)] = inst_36760);

(statearr_36816[(8)] = inst_36746__$1);

return statearr_36816;
})();
var statearr_36818_38169 = state_36787__$1;
(statearr_36818_38169[(2)] = null);

(statearr_36818_38169[(1)] = (2));


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
var statearr_36819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36819[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36819[(1)] = (1));

return statearr_36819;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36787){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36787);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36821){if((e36821 instanceof Object)){
var ex__34203__auto__ = e36821;
var statearr_36822_38171 = state_36787;
(statearr_36822_38171[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36821;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38173 = state_36787;
state_36787 = G__38173;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36824 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36824[(6)] = c__34267__auto___38141);

return statearr_36824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
