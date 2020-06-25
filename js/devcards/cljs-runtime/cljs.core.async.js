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
var val_36817 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36817) : fn1.call(null,val_36817));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36817) : fn1.call(null,val_36817));
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
var n__4666__auto___36820 = n;
var x_36821 = (0);
while(true){
if((x_36821 < n__4666__auto___36820)){
(a[x_36821] = x_36821);

var G__36822 = (x_36821 + (1));
x_36821 = G__36822;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34340 = (function (flag,meta34341){
this.flag = flag;
this.meta34341 = meta34341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34342,meta34341__$1){
var self__ = this;
var _34342__$1 = this;
return (new cljs.core.async.t_cljs$core$async34340(self__.flag,meta34341__$1));
}));

(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34342){
var self__ = this;
var _34342__$1 = this;
return self__.meta34341;
}));

(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34341","meta34341",1249706960,null)], null);
}));

(cljs.core.async.t_cljs$core$async34340.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34340");

(cljs.core.async.t_cljs$core$async34340.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34340");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34340.
 */
cljs.core.async.__GT_t_cljs$core$async34340 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34340(flag__$1,meta34341){
return (new cljs.core.async.t_cljs$core$async34340(flag__$1,meta34341));
});

}

return (new cljs.core.async.t_cljs$core$async34340(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34347 = (function (flag,cb,meta34348){
this.flag = flag;
this.cb = cb;
this.meta34348 = meta34348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34349,meta34348__$1){
var self__ = this;
var _34349__$1 = this;
return (new cljs.core.async.t_cljs$core$async34347(self__.flag,self__.cb,meta34348__$1));
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
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34348","meta34348",2664160,null)], null);
}));

(cljs.core.async.t_cljs$core$async34347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34347");

(cljs.core.async.t_cljs$core$async34347.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34347.
 */
cljs.core.async.__GT_t_cljs$core$async34347 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34347(flag__$1,cb__$1,meta34348){
return (new cljs.core.async.t_cljs$core$async34347(flag__$1,cb__$1,meta34348));
});

}

return (new cljs.core.async.t_cljs$core$async34347(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36830 = (i + (1));
i = G__36830;
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
var len__4789__auto___36832 = arguments.length;
var i__4790__auto___36833 = (0);
while(true){
if((i__4790__auto___36833 < len__4789__auto___36832)){
args__4795__auto__.push((arguments[i__4790__auto___36833]));

var G__36834 = (i__4790__auto___36833 + (1));
i__4790__auto___36833 = G__36834;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34367){
var map__34368 = p__34367;
var map__34368__$1 = (((((!((map__34368 == null))))?(((((map__34368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34368):map__34368);
var opts = map__34368__$1;
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
var c__34267__auto___36839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34416){
var state_val_34417 = (state_34416[(1)]);
if((state_val_34417 === (7))){
var inst_34409 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34418_36841 = state_34416__$1;
(statearr_34418_36841[(2)] = inst_34409);

(statearr_34418_36841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (1))){
var state_34416__$1 = state_34416;
var statearr_34419_36842 = state_34416__$1;
(statearr_34419_36842[(2)] = null);

(statearr_34419_36842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (4))){
var inst_34383 = (state_34416[(7)]);
var inst_34383__$1 = (state_34416[(2)]);
var inst_34384 = (inst_34383__$1 == null);
var state_34416__$1 = (function (){var statearr_34420 = state_34416;
(statearr_34420[(7)] = inst_34383__$1);

return statearr_34420;
})();
if(cljs.core.truth_(inst_34384)){
var statearr_34421_36844 = state_34416__$1;
(statearr_34421_36844[(1)] = (5));

} else {
var statearr_34422_36845 = state_34416__$1;
(statearr_34422_36845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (13))){
var state_34416__$1 = state_34416;
var statearr_34423_36846 = state_34416__$1;
(statearr_34423_36846[(2)] = null);

(statearr_34423_36846[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (6))){
var inst_34383 = (state_34416[(7)]);
var state_34416__$1 = state_34416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34416__$1,(11),to,inst_34383);
} else {
if((state_val_34417 === (3))){
var inst_34414 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34416__$1,inst_34414);
} else {
if((state_val_34417 === (12))){
var state_34416__$1 = state_34416;
var statearr_34424_36848 = state_34416__$1;
(statearr_34424_36848[(2)] = null);

(statearr_34424_36848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (2))){
var state_34416__$1 = state_34416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34416__$1,(4),from);
} else {
if((state_val_34417 === (11))){
var inst_34399 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
if(cljs.core.truth_(inst_34399)){
var statearr_34425_36850 = state_34416__$1;
(statearr_34425_36850[(1)] = (12));

} else {
var statearr_34426_36851 = state_34416__$1;
(statearr_34426_36851[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (9))){
var state_34416__$1 = state_34416;
var statearr_34427_36852 = state_34416__$1;
(statearr_34427_36852[(2)] = null);

(statearr_34427_36852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (5))){
var state_34416__$1 = state_34416;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34428_36854 = state_34416__$1;
(statearr_34428_36854[(1)] = (8));

} else {
var statearr_34429_36855 = state_34416__$1;
(statearr_34429_36855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (14))){
var inst_34407 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34430_36856 = state_34416__$1;
(statearr_34430_36856[(2)] = inst_34407);

(statearr_34430_36856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (10))){
var inst_34396 = (state_34416[(2)]);
var state_34416__$1 = state_34416;
var statearr_34431_36858 = state_34416__$1;
(statearr_34431_36858[(2)] = inst_34396);

(statearr_34431_36858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34417 === (8))){
var inst_34390 = cljs.core.async.close_BANG_(to);
var state_34416__$1 = state_34416;
var statearr_34432_36859 = state_34416__$1;
(statearr_34432_36859[(2)] = inst_34390);

(statearr_34432_36859[(1)] = (10));


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
}catch (e34434){if((e34434 instanceof Object)){
var ex__34203__auto__ = e34434;
var statearr_34435_36861 = state_34416;
(statearr_34435_36861[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36862 = state_34416;
state_34416 = G__36862;
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
var state__34269__auto__ = (function (){var statearr_34436 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34436[(6)] = c__34267__auto___36839);

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
var process = (function (p__34441){
var vec__34442 = p__34441;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34442,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34442,(1),null);
var job = vec__34442;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34267__auto___36865 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34449){
var state_val_34450 = (state_34449[(1)]);
if((state_val_34450 === (1))){
var state_34449__$1 = state_34449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34449__$1,(2),res,v);
} else {
if((state_val_34450 === (2))){
var inst_34446 = (state_34449[(2)]);
var inst_34447 = cljs.core.async.close_BANG_(res);
var state_34449__$1 = (function (){var statearr_34452 = state_34449;
(statearr_34452[(7)] = inst_34446);

return statearr_34452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34449__$1,inst_34447);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34453 = [null,null,null,null,null,null,null,null];
(statearr_34453[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34453[(1)] = (1));

return statearr_34453;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34449){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34449);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34454){if((e34454 instanceof Object)){
var ex__34203__auto__ = e34454;
var statearr_34455_36868 = state_34449;
(statearr_34455_36868[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34454;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36870 = state_34449;
state_34449 = G__36870;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34449){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34456 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34456[(6)] = c__34267__auto___36865);

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
var n__4666__auto___36872 = n;
var __36873 = (0);
while(true){
if((__36873 < n__4666__auto___36872)){
var G__34463_36874 = type;
var G__34463_36875__$1 = (((G__34463_36874 instanceof cljs.core.Keyword))?G__34463_36874.fqn:null);
switch (G__34463_36875__$1) {
case "compute":
var c__34267__auto___36878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36873,c__34267__auto___36878,G__34463_36874,G__34463_36875__$1,n__4666__auto___36872,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36873,c__34267__auto___36878,G__34463_36874,G__34463_36875__$1,n__4666__auto___36872,jobs,results,process,async){
return (function (state_34476){
var state_val_34477 = (state_34476[(1)]);
if((state_val_34477 === (1))){
var state_34476__$1 = state_34476;
var statearr_34479_36879 = state_34476__$1;
(statearr_34479_36879[(2)] = null);

(statearr_34479_36879[(1)] = (2));


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
var statearr_34480_36881 = state_34476__$1;
(statearr_34480_36881[(1)] = (5));

} else {
var statearr_34481_36882 = state_34476__$1;
(statearr_34481_36882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (5))){
var state_34476__$1 = state_34476;
var statearr_34482_36884 = state_34476__$1;
(statearr_34482_36884[(2)] = null);

(statearr_34482_36884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (6))){
var state_34476__$1 = state_34476;
var statearr_34485_36885 = state_34476__$1;
(statearr_34485_36885[(2)] = null);

(statearr_34485_36885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (7))){
var inst_34472 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
var statearr_34489_36886 = state_34476__$1;
(statearr_34489_36886[(2)] = inst_34472);

(statearr_34489_36886[(1)] = (3));


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
});})(__36873,c__34267__auto___36878,G__34463_36874,G__34463_36875__$1,n__4666__auto___36872,jobs,results,process,async))
;
return ((function (__36873,switch__34199__auto__,c__34267__auto___36878,G__34463_36874,G__34463_36875__$1,n__4666__auto___36872,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34492 = [null,null,null,null,null,null,null];
(statearr_34492[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34492[(1)] = (1));

return statearr_34492;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1 = (function (state_34476){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34476);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34493){if((e34493 instanceof Object)){
var ex__34203__auto__ = e34493;
var statearr_34494_36889 = state_34476;
(statearr_34494_36889[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36890 = state_34476;
state_34476 = G__36890;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = function(state_34476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1.call(this,state_34476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__;
})()
;})(__36873,switch__34199__auto__,c__34267__auto___36878,G__34463_36874,G__34463_36875__$1,n__4666__auto___36872,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34495 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34495[(6)] = c__34267__auto___36878);

return statearr_34495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36873,c__34267__auto___36878,G__34463_36874,G__34463_36875__$1,n__4666__auto___36872,jobs,results,process,async))
);


break;
case "async":
var c__34267__auto___36892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36873,c__34267__auto___36892,G__34463_36874,G__34463_36875__$1,n__4666__auto___36872,jobs,results,process,async){
return (function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = ((function (__36873,c__34267__auto___36892,G__34463_36874,G__34463_36875__$1,n__4666__auto___36872,jobs,results,process,async){
return (function (state_34508){
var state_val_34509 = (state_34508[(1)]);
if((state_val_34509 === (1))){
var state_34508__$1 = state_34508;
var statearr_34511_36894 = state_34508__$1;
(statearr_34511_36894[(2)] = null);

(statearr_34511_36894[(1)] = (2));


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
var statearr_34512_36896 = state_34508__$1;
(statearr_34512_36896[(1)] = (5));

} else {
var statearr_34513_36897 = state_34508__$1;
(statearr_34513_36897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (5))){
var state_34508__$1 = state_34508;
var statearr_34514_36898 = state_34508__$1;
(statearr_34514_36898[(2)] = null);

(statearr_34514_36898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (6))){
var state_34508__$1 = state_34508;
var statearr_34515_36899 = state_34508__$1;
(statearr_34515_36899[(2)] = null);

(statearr_34515_36899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (7))){
var inst_34504 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
var statearr_34517_36901 = state_34508__$1;
(statearr_34517_36901[(2)] = inst_34504);

(statearr_34517_36901[(1)] = (3));


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
});})(__36873,c__34267__auto___36892,G__34463_36874,G__34463_36875__$1,n__4666__auto___36872,jobs,results,process,async))
;
return ((function (__36873,switch__34199__auto__,c__34267__auto___36892,G__34463_36874,G__34463_36875__$1,n__4666__auto___36872,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34200__auto____0 = (function (){
var statearr_34521 = [null,null,null,null,null,null,null];
(statearr_34521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34200__auto__);

(statearr_34521[(1)] = (1));

return statearr_34521;
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
}catch (e34522){if((e34522 instanceof Object)){
var ex__34203__auto__ = e34522;
var statearr_34526_36903 = state_34508;
(statearr_34526_36903[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34522;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36904 = state_34508;
state_34508 = G__36904;
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
;})(__36873,switch__34199__auto__,c__34267__auto___36892,G__34463_36874,G__34463_36875__$1,n__4666__auto___36872,jobs,results,process,async))
})();
var state__34269__auto__ = (function (){var statearr_34527 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34527[(6)] = c__34267__auto___36892);

return statearr_34527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
});})(__36873,c__34267__auto___36892,G__34463_36874,G__34463_36875__$1,n__4666__auto___36872,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34463_36875__$1)].join('')));

}

var G__36906 = (__36873 + (1));
__36873 = G__36906;
continue;
} else {
}
break;
}

var c__34267__auto___36907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34549){
var state_val_34550 = (state_34549[(1)]);
if((state_val_34550 === (7))){
var inst_34545 = (state_34549[(2)]);
var state_34549__$1 = state_34549;
var statearr_34554_36909 = state_34549__$1;
(statearr_34554_36909[(2)] = inst_34545);

(statearr_34554_36909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (1))){
var state_34549__$1 = state_34549;
var statearr_34555_36910 = state_34549__$1;
(statearr_34555_36910[(2)] = null);

(statearr_34555_36910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (4))){
var inst_34530 = (state_34549[(7)]);
var inst_34530__$1 = (state_34549[(2)]);
var inst_34531 = (inst_34530__$1 == null);
var state_34549__$1 = (function (){var statearr_34556 = state_34549;
(statearr_34556[(7)] = inst_34530__$1);

return statearr_34556;
})();
if(cljs.core.truth_(inst_34531)){
var statearr_34557_36912 = state_34549__$1;
(statearr_34557_36912[(1)] = (5));

} else {
var statearr_34558_36913 = state_34549__$1;
(statearr_34558_36913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (6))){
var inst_34535 = (state_34549[(8)]);
var inst_34530 = (state_34549[(7)]);
var inst_34535__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34537 = [inst_34530,inst_34535__$1];
var inst_34538 = (new cljs.core.PersistentVector(null,2,(5),inst_34536,inst_34537,null));
var state_34549__$1 = (function (){var statearr_34559 = state_34549;
(statearr_34559[(8)] = inst_34535__$1);

return statearr_34559;
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
var statearr_34561_36915 = state_34549__$1;
(statearr_34561_36915[(2)] = null);

(statearr_34561_36915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (5))){
var inst_34533 = cljs.core.async.close_BANG_(jobs);
var state_34549__$1 = state_34549;
var statearr_34562_36917 = state_34549__$1;
(statearr_34562_36917[(2)] = inst_34533);

(statearr_34562_36917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (8))){
var inst_34535 = (state_34549[(8)]);
var inst_34540 = (state_34549[(2)]);
var state_34549__$1 = (function (){var statearr_34563 = state_34549;
(statearr_34563[(10)] = inst_34540);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34549__$1,(9),results,inst_34535);
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
var statearr_34566_36919 = state_34549;
(statearr_34566_36919[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36921 = state_34549;
state_34549 = G__36921;
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
(statearr_34567[(6)] = c__34267__auto___36907);

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
var statearr_34607_36923 = state_34605__$1;
(statearr_34607_36923[(2)] = inst_34601);

(statearr_34607_36923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (20))){
var state_34605__$1 = state_34605;
var statearr_34608_36924 = state_34605__$1;
(statearr_34608_36924[(2)] = null);

(statearr_34608_36924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (1))){
var state_34605__$1 = state_34605;
var statearr_34609_36926 = state_34605__$1;
(statearr_34609_36926[(2)] = null);

(statearr_34609_36926[(1)] = (2));


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
var statearr_34611_36927 = state_34605__$1;
(statearr_34611_36927[(1)] = (5));

} else {
var statearr_34612_36928 = state_34605__$1;
(statearr_34612_36928[(1)] = (6));

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
var statearr_34613_36930 = state_34605__$1;
(statearr_34613_36930[(2)] = inst_34596);

(statearr_34613_36930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (13))){
var inst_34598 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34614 = state_34605;
(statearr_34614[(9)] = inst_34598);

return statearr_34614;
})();
var statearr_34615_36932 = state_34605__$1;
(statearr_34615_36932[(2)] = null);

(statearr_34615_36932[(1)] = (2));


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
var statearr_34616_36933 = state_34605__$1;
(statearr_34616_36933[(1)] = (19));

} else {
var statearr_34617_36934 = state_34605__$1;
(statearr_34617_36934[(1)] = (20));

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
var statearr_34618_36936 = state_34605__$1;
(statearr_34618_36936[(2)] = null);

(statearr_34618_36936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (11))){
var inst_34580 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34619 = state_34605;
(statearr_34619[(10)] = inst_34580);

return statearr_34619;
})();
var statearr_34620_36938 = state_34605__$1;
(statearr_34620_36938[(2)] = null);

(statearr_34620_36938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (9))){
var state_34605__$1 = state_34605;
var statearr_34621_36939 = state_34605__$1;
(statearr_34621_36939[(2)] = null);

(statearr_34621_36939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (5))){
var state_34605__$1 = state_34605;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34622_36941 = state_34605__$1;
(statearr_34622_36941[(1)] = (8));

} else {
var statearr_34623_36942 = state_34605__$1;
(statearr_34623_36942[(1)] = (9));

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
var statearr_34625_36943 = state_34605__$1;
(statearr_34625_36943[(1)] = (15));

} else {
var statearr_34626_36945 = state_34605__$1;
(statearr_34626_36945[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (16))){
var state_34605__$1 = state_34605;
var statearr_34627_36946 = state_34605__$1;
(statearr_34627_36946[(2)] = false);

(statearr_34627_36946[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (10))){
var inst_34577 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34628_36947 = state_34605__$1;
(statearr_34628_36947[(2)] = inst_34577);

(statearr_34628_36947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (18))){
var inst_34588 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34629_36949 = state_34605__$1;
(statearr_34629_36949[(2)] = inst_34588);

(statearr_34629_36949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (8))){
var inst_34574 = cljs.core.async.close_BANG_(to);
var state_34605__$1 = state_34605;
var statearr_34630_36950 = state_34605__$1;
(statearr_34630_36950[(2)] = inst_34574);

(statearr_34630_36950[(1)] = (10));


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
var statearr_34633_36952 = state_34605;
(statearr_34633_36952[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36954 = state_34605;
state_34605 = G__36954;
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
var G__34643 = arguments.length;
switch (G__34643) {
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
var c__34267__auto___36963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34674){
var state_val_34675 = (state_34674[(1)]);
if((state_val_34675 === (7))){
var inst_34668 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
var statearr_34676_36965 = state_34674__$1;
(statearr_34676_36965[(2)] = inst_34668);

(statearr_34676_36965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (1))){
var state_34674__$1 = state_34674;
var statearr_34678_36966 = state_34674__$1;
(statearr_34678_36966[(2)] = null);

(statearr_34678_36966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (4))){
var inst_34649 = (state_34674[(7)]);
var inst_34649__$1 = (state_34674[(2)]);
var inst_34650 = (inst_34649__$1 == null);
var state_34674__$1 = (function (){var statearr_34679 = state_34674;
(statearr_34679[(7)] = inst_34649__$1);

return statearr_34679;
})();
if(cljs.core.truth_(inst_34650)){
var statearr_34680_36968 = state_34674__$1;
(statearr_34680_36968[(1)] = (5));

} else {
var statearr_34681_36969 = state_34674__$1;
(statearr_34681_36969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (13))){
var state_34674__$1 = state_34674;
var statearr_34682_36970 = state_34674__$1;
(statearr_34682_36970[(2)] = null);

(statearr_34682_36970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (6))){
var inst_34649 = (state_34674[(7)]);
var inst_34655 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34649) : p.call(null,inst_34649));
var state_34674__$1 = state_34674;
if(cljs.core.truth_(inst_34655)){
var statearr_34685_36972 = state_34674__$1;
(statearr_34685_36972[(1)] = (9));

} else {
var statearr_34686_36973 = state_34674__$1;
(statearr_34686_36973[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (3))){
var inst_34670 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34674__$1,inst_34670);
} else {
if((state_val_34675 === (12))){
var state_34674__$1 = state_34674;
var statearr_34687_36975 = state_34674__$1;
(statearr_34687_36975[(2)] = null);

(statearr_34687_36975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (2))){
var state_34674__$1 = state_34674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34674__$1,(4),ch);
} else {
if((state_val_34675 === (11))){
var inst_34649 = (state_34674[(7)]);
var inst_34659 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34674__$1,(8),inst_34659,inst_34649);
} else {
if((state_val_34675 === (9))){
var state_34674__$1 = state_34674;
var statearr_34688_36976 = state_34674__$1;
(statearr_34688_36976[(2)] = tc);

(statearr_34688_36976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (5))){
var inst_34652 = cljs.core.async.close_BANG_(tc);
var inst_34653 = cljs.core.async.close_BANG_(fc);
var state_34674__$1 = (function (){var statearr_34689 = state_34674;
(statearr_34689[(8)] = inst_34652);

return statearr_34689;
})();
var statearr_34690_36978 = state_34674__$1;
(statearr_34690_36978[(2)] = inst_34653);

(statearr_34690_36978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (14))){
var inst_34666 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
var statearr_34692_36979 = state_34674__$1;
(statearr_34692_36979[(2)] = inst_34666);

(statearr_34692_36979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (10))){
var state_34674__$1 = state_34674;
var statearr_34693_36981 = state_34674__$1;
(statearr_34693_36981[(2)] = fc);

(statearr_34693_36981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34675 === (8))){
var inst_34661 = (state_34674[(2)]);
var state_34674__$1 = state_34674;
if(cljs.core.truth_(inst_34661)){
var statearr_34694_36982 = state_34674__$1;
(statearr_34694_36982[(1)] = (12));

} else {
var statearr_34695_36983 = state_34674__$1;
(statearr_34695_36983[(1)] = (13));

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
var statearr_34697 = [null,null,null,null,null,null,null,null,null];
(statearr_34697[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34697[(1)] = (1));

return statearr_34697;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_34674){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34674);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34698){if((e34698 instanceof Object)){
var ex__34203__auto__ = e34698;
var statearr_34699_36986 = state_34674;
(statearr_34699_36986[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34698;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36987 = state_34674;
state_34674 = G__36987;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_34674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_34674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_34702 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34702[(6)] = c__34267__auto___36963);

return statearr_34702;
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34727){
var state_val_34728 = (state_34727[(1)]);
if((state_val_34728 === (7))){
var inst_34723 = (state_34727[(2)]);
var state_34727__$1 = state_34727;
var statearr_34729_36989 = state_34727__$1;
(statearr_34729_36989[(2)] = inst_34723);

(statearr_34729_36989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34728 === (1))){
var inst_34706 = init;
var state_34727__$1 = (function (){var statearr_34730 = state_34727;
(statearr_34730[(7)] = inst_34706);

return statearr_34730;
})();
var statearr_34731_36991 = state_34727__$1;
(statearr_34731_36991[(2)] = null);

(statearr_34731_36991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34728 === (4))){
var inst_34709 = (state_34727[(8)]);
var inst_34709__$1 = (state_34727[(2)]);
var inst_34710 = (inst_34709__$1 == null);
var state_34727__$1 = (function (){var statearr_34732 = state_34727;
(statearr_34732[(8)] = inst_34709__$1);

return statearr_34732;
})();
if(cljs.core.truth_(inst_34710)){
var statearr_34733_36992 = state_34727__$1;
(statearr_34733_36992[(1)] = (5));

} else {
var statearr_34734_36994 = state_34727__$1;
(statearr_34734_36994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34728 === (6))){
var inst_34713 = (state_34727[(9)]);
var inst_34706 = (state_34727[(7)]);
var inst_34709 = (state_34727[(8)]);
var inst_34713__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34706,inst_34709) : f.call(null,inst_34706,inst_34709));
var inst_34714 = cljs.core.reduced_QMARK_(inst_34713__$1);
var state_34727__$1 = (function (){var statearr_34738 = state_34727;
(statearr_34738[(9)] = inst_34713__$1);

return statearr_34738;
})();
if(inst_34714){
var statearr_34739_36995 = state_34727__$1;
(statearr_34739_36995[(1)] = (8));

} else {
var statearr_34740_36997 = state_34727__$1;
(statearr_34740_36997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34728 === (3))){
var inst_34725 = (state_34727[(2)]);
var state_34727__$1 = state_34727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34727__$1,inst_34725);
} else {
if((state_val_34728 === (2))){
var state_34727__$1 = state_34727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34727__$1,(4),ch);
} else {
if((state_val_34728 === (9))){
var inst_34713 = (state_34727[(9)]);
var inst_34706 = inst_34713;
var state_34727__$1 = (function (){var statearr_34741 = state_34727;
(statearr_34741[(7)] = inst_34706);

return statearr_34741;
})();
var statearr_34745_36999 = state_34727__$1;
(statearr_34745_36999[(2)] = null);

(statearr_34745_36999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34728 === (5))){
var inst_34706 = (state_34727[(7)]);
var state_34727__$1 = state_34727;
var statearr_34746_37000 = state_34727__$1;
(statearr_34746_37000[(2)] = inst_34706);

(statearr_34746_37000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34728 === (10))){
var inst_34721 = (state_34727[(2)]);
var state_34727__$1 = state_34727;
var statearr_34747_37001 = state_34727__$1;
(statearr_34747_37001[(2)] = inst_34721);

(statearr_34747_37001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34728 === (8))){
var inst_34713 = (state_34727[(9)]);
var inst_34716 = cljs.core.deref(inst_34713);
var state_34727__$1 = state_34727;
var statearr_34748_37003 = state_34727__$1;
(statearr_34748_37003[(2)] = inst_34716);

(statearr_34748_37003[(1)] = (10));


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
var statearr_34749 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34749[(0)] = cljs$core$async$reduce_$_state_machine__34200__auto__);

(statearr_34749[(1)] = (1));

return statearr_34749;
});
var cljs$core$async$reduce_$_state_machine__34200__auto____1 = (function (state_34727){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34727);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e34750){if((e34750 instanceof Object)){
var ex__34203__auto__ = e34750;
var statearr_34751_37005 = state_34727;
(statearr_34751_37005[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37006 = state_34727;
state_34727 = G__37006;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34200__auto__ = function(state_34727){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34200__auto____1.call(this,state_34727);
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
var statearr_34765_37015 = state_34761;
(statearr_34765_37015[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37016 = state_34761;
state_34761 = G__37016;
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
var statearr_34798_37019 = state_34793__$1;
(statearr_34798_37019[(2)] = inst_34775);

(statearr_34798_37019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (1))){
var inst_34769 = cljs.core.seq(coll);
var inst_34770 = inst_34769;
var state_34793__$1 = (function (){var statearr_34799 = state_34793;
(statearr_34799[(7)] = inst_34770);

return statearr_34799;
})();
var statearr_34800_37024 = state_34793__$1;
(statearr_34800_37024[(2)] = null);

(statearr_34800_37024[(1)] = (2));


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
var statearr_34805_37025 = state_34793__$1;
(statearr_34805_37025[(2)] = inst_34787);

(statearr_34805_37025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (6))){
var inst_34778 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
if(cljs.core.truth_(inst_34778)){
var statearr_34806_37026 = state_34793__$1;
(statearr_34806_37026[(1)] = (8));

} else {
var statearr_34807_37027 = state_34793__$1;
(statearr_34807_37027[(1)] = (9));

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
var statearr_34808_37029 = state_34793__$1;
(statearr_34808_37029[(2)] = null);

(statearr_34808_37029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (2))){
var inst_34770 = (state_34793[(7)]);
var state_34793__$1 = state_34793;
if(cljs.core.truth_(inst_34770)){
var statearr_34809_37030 = state_34793__$1;
(statearr_34809_37030[(1)] = (4));

} else {
var statearr_34810_37031 = state_34793__$1;
(statearr_34810_37031[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (11))){
var inst_34784 = cljs.core.async.close_BANG_(ch);
var state_34793__$1 = state_34793;
var statearr_34811_37032 = state_34793__$1;
(statearr_34811_37032[(2)] = inst_34784);

(statearr_34811_37032[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (9))){
var state_34793__$1 = state_34793;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34812_37033 = state_34793__$1;
(statearr_34812_37033[(1)] = (11));

} else {
var statearr_34814_37034 = state_34793__$1;
(statearr_34814_37034[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (5))){
var inst_34770 = (state_34793[(7)]);
var state_34793__$1 = state_34793;
var statearr_34815_37035 = state_34793__$1;
(statearr_34815_37035[(2)] = inst_34770);

(statearr_34815_37035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (10))){
var inst_34789 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34817_37036 = state_34793__$1;
(statearr_34817_37036[(2)] = inst_34789);

(statearr_34817_37036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (8))){
var inst_34770 = (state_34793[(7)]);
var inst_34780 = cljs.core.next(inst_34770);
var inst_34770__$1 = inst_34780;
var state_34793__$1 = (function (){var statearr_34819 = state_34793;
(statearr_34819[(7)] = inst_34770__$1);

return statearr_34819;
})();
var statearr_34821_37037 = state_34793__$1;
(statearr_34821_37037[(2)] = null);

(statearr_34821_37037[(1)] = (2));


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
var statearr_34824 = [null,null,null,null,null,null,null,null];
(statearr_34824[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_34824[(1)] = (1));

return statearr_34824;
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
}catch (e34825){if((e34825 instanceof Object)){
var ex__34203__auto__ = e34825;
var statearr_34826_37038 = state_34793;
(statearr_34826_37038[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37039 = state_34793;
state_34793 = G__37039;
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
var state__34269__auto__ = (function (){var statearr_34827 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_34827[(6)] = c__34267__auto__);

return statearr_34827;
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
var c__34267__auto___37058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_34973){
var state_val_34978 = (state_34973[(1)]);
if((state_val_34978 === (7))){
var inst_34967 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
var statearr_34979_37062 = state_34973__$1;
(statearr_34979_37062[(2)] = inst_34967);

(statearr_34979_37062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (20))){
var inst_34870 = (state_34973[(7)]);
var inst_34882 = cljs.core.first(inst_34870);
var inst_34883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(0),null);
var inst_34884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34882,(1),null);
var state_34973__$1 = (function (){var statearr_34980 = state_34973;
(statearr_34980[(8)] = inst_34883);

return statearr_34980;
})();
if(cljs.core.truth_(inst_34884)){
var statearr_34981_37067 = state_34973__$1;
(statearr_34981_37067[(1)] = (22));

} else {
var statearr_34982_37068 = state_34973__$1;
(statearr_34982_37068[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (27))){
var inst_34914 = (state_34973[(9)]);
var inst_34919 = (state_34973[(10)]);
var inst_34912 = (state_34973[(11)]);
var inst_34839 = (state_34973[(12)]);
var inst_34919__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34912,inst_34914);
var inst_34920 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34919__$1,inst_34839,done);
var state_34973__$1 = (function (){var statearr_34983 = state_34973;
(statearr_34983[(10)] = inst_34919__$1);

return statearr_34983;
})();
if(cljs.core.truth_(inst_34920)){
var statearr_34984_37074 = state_34973__$1;
(statearr_34984_37074[(1)] = (30));

} else {
var statearr_34987_37076 = state_34973__$1;
(statearr_34987_37076[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (1))){
var state_34973__$1 = state_34973;
var statearr_34989_37078 = state_34973__$1;
(statearr_34989_37078[(2)] = null);

(statearr_34989_37078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (24))){
var inst_34870 = (state_34973[(7)]);
var inst_34889 = (state_34973[(2)]);
var inst_34890 = cljs.core.next(inst_34870);
var inst_34848 = inst_34890;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34973__$1 = (function (){var statearr_34992 = state_34973;
(statearr_34992[(13)] = inst_34848);

(statearr_34992[(14)] = inst_34849);

(statearr_34992[(15)] = inst_34851);

(statearr_34992[(16)] = inst_34850);

(statearr_34992[(17)] = inst_34889);

return statearr_34992;
})();
var statearr_34994_37085 = state_34973__$1;
(statearr_34994_37085[(2)] = null);

(statearr_34994_37085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (39))){
var state_34973__$1 = state_34973;
var statearr_34998_37088 = state_34973__$1;
(statearr_34998_37088[(2)] = null);

(statearr_34998_37088[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (4))){
var inst_34839 = (state_34973[(12)]);
var inst_34839__$1 = (state_34973[(2)]);
var inst_34840 = (inst_34839__$1 == null);
var state_34973__$1 = (function (){var statearr_34999 = state_34973;
(statearr_34999[(12)] = inst_34839__$1);

return statearr_34999;
})();
if(cljs.core.truth_(inst_34840)){
var statearr_35000_37091 = state_34973__$1;
(statearr_35000_37091[(1)] = (5));

} else {
var statearr_35001_37094 = state_34973__$1;
(statearr_35001_37094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (15))){
var inst_34848 = (state_34973[(13)]);
var inst_34849 = (state_34973[(14)]);
var inst_34851 = (state_34973[(15)]);
var inst_34850 = (state_34973[(16)]);
var inst_34866 = (state_34973[(2)]);
var inst_34867 = (inst_34851 + (1));
var tmp34995 = inst_34848;
var tmp34996 = inst_34849;
var tmp34997 = inst_34850;
var inst_34848__$1 = tmp34995;
var inst_34849__$1 = tmp34996;
var inst_34850__$1 = tmp34997;
var inst_34851__$1 = inst_34867;
var state_34973__$1 = (function (){var statearr_35002 = state_34973;
(statearr_35002[(13)] = inst_34848__$1);

(statearr_35002[(18)] = inst_34866);

(statearr_35002[(14)] = inst_34849__$1);

(statearr_35002[(15)] = inst_34851__$1);

(statearr_35002[(16)] = inst_34850__$1);

return statearr_35002;
})();
var statearr_35005_37102 = state_34973__$1;
(statearr_35005_37102[(2)] = null);

(statearr_35005_37102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (21))){
var inst_34893 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
var statearr_35011_37104 = state_34973__$1;
(statearr_35011_37104[(2)] = inst_34893);

(statearr_35011_37104[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (31))){
var inst_34919 = (state_34973[(10)]);
var inst_34923 = done(null);
var inst_34924 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34919);
var state_34973__$1 = (function (){var statearr_35014 = state_34973;
(statearr_35014[(19)] = inst_34923);

return statearr_35014;
})();
var statearr_35015_37110 = state_34973__$1;
(statearr_35015_37110[(2)] = inst_34924);

(statearr_35015_37110[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (32))){
var inst_34914 = (state_34973[(9)]);
var inst_34913 = (state_34973[(20)]);
var inst_34912 = (state_34973[(11)]);
var inst_34911 = (state_34973[(21)]);
var inst_34926 = (state_34973[(2)]);
var inst_34927 = (inst_34914 + (1));
var tmp35007 = inst_34913;
var tmp35008 = inst_34912;
var tmp35009 = inst_34911;
var inst_34911__$1 = tmp35009;
var inst_34912__$1 = tmp35008;
var inst_34913__$1 = tmp35007;
var inst_34914__$1 = inst_34927;
var state_34973__$1 = (function (){var statearr_35016 = state_34973;
(statearr_35016[(9)] = inst_34914__$1);

(statearr_35016[(22)] = inst_34926);

(statearr_35016[(20)] = inst_34913__$1);

(statearr_35016[(11)] = inst_34912__$1);

(statearr_35016[(21)] = inst_34911__$1);

return statearr_35016;
})();
var statearr_35017_37118 = state_34973__$1;
(statearr_35017_37118[(2)] = null);

(statearr_35017_37118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (40))){
var inst_34939 = (state_34973[(23)]);
var inst_34943 = done(null);
var inst_34944 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34939);
var state_34973__$1 = (function (){var statearr_35020 = state_34973;
(statearr_35020[(24)] = inst_34943);

return statearr_35020;
})();
var statearr_35021_37123 = state_34973__$1;
(statearr_35021_37123[(2)] = inst_34944);

(statearr_35021_37123[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (33))){
var inst_34930 = (state_34973[(25)]);
var inst_34932 = cljs.core.chunked_seq_QMARK_(inst_34930);
var state_34973__$1 = state_34973;
if(inst_34932){
var statearr_35025_37124 = state_34973__$1;
(statearr_35025_37124[(1)] = (36));

} else {
var statearr_35027_37126 = state_34973__$1;
(statearr_35027_37126[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (13))){
var inst_34860 = (state_34973[(26)]);
var inst_34863 = cljs.core.async.close_BANG_(inst_34860);
var state_34973__$1 = state_34973;
var statearr_35028_37127 = state_34973__$1;
(statearr_35028_37127[(2)] = inst_34863);

(statearr_35028_37127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (22))){
var inst_34883 = (state_34973[(8)]);
var inst_34886 = cljs.core.async.close_BANG_(inst_34883);
var state_34973__$1 = state_34973;
var statearr_35029_37128 = state_34973__$1;
(statearr_35029_37128[(2)] = inst_34886);

(statearr_35029_37128[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (36))){
var inst_34930 = (state_34973[(25)]);
var inst_34934 = cljs.core.chunk_first(inst_34930);
var inst_34935 = cljs.core.chunk_rest(inst_34930);
var inst_34936 = cljs.core.count(inst_34934);
var inst_34911 = inst_34935;
var inst_34912 = inst_34934;
var inst_34913 = inst_34936;
var inst_34914 = (0);
var state_34973__$1 = (function (){var statearr_35033 = state_34973;
(statearr_35033[(9)] = inst_34914);

(statearr_35033[(20)] = inst_34913);

(statearr_35033[(11)] = inst_34912);

(statearr_35033[(21)] = inst_34911);

return statearr_35033;
})();
var statearr_35035_37137 = state_34973__$1;
(statearr_35035_37137[(2)] = null);

(statearr_35035_37137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (41))){
var inst_34930 = (state_34973[(25)]);
var inst_34946 = (state_34973[(2)]);
var inst_34947 = cljs.core.next(inst_34930);
var inst_34911 = inst_34947;
var inst_34912 = null;
var inst_34913 = (0);
var inst_34914 = (0);
var state_34973__$1 = (function (){var statearr_35044 = state_34973;
(statearr_35044[(27)] = inst_34946);

(statearr_35044[(9)] = inst_34914);

(statearr_35044[(20)] = inst_34913);

(statearr_35044[(11)] = inst_34912);

(statearr_35044[(21)] = inst_34911);

return statearr_35044;
})();
var statearr_35052_37145 = state_34973__$1;
(statearr_35052_37145[(2)] = null);

(statearr_35052_37145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (43))){
var state_34973__$1 = state_34973;
var statearr_35055_37147 = state_34973__$1;
(statearr_35055_37147[(2)] = null);

(statearr_35055_37147[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (29))){
var inst_34955 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
var statearr_35058_37148 = state_34973__$1;
(statearr_35058_37148[(2)] = inst_34955);

(statearr_35058_37148[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (44))){
var inst_34964 = (state_34973[(2)]);
var state_34973__$1 = (function (){var statearr_35059 = state_34973;
(statearr_35059[(28)] = inst_34964);

return statearr_35059;
})();
var statearr_35060_37151 = state_34973__$1;
(statearr_35060_37151[(2)] = null);

(statearr_35060_37151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (6))){
var inst_34903 = (state_34973[(29)]);
var inst_34902 = cljs.core.deref(cs);
var inst_34903__$1 = cljs.core.keys(inst_34902);
var inst_34904 = cljs.core.count(inst_34903__$1);
var inst_34905 = cljs.core.reset_BANG_(dctr,inst_34904);
var inst_34910 = cljs.core.seq(inst_34903__$1);
var inst_34911 = inst_34910;
var inst_34912 = null;
var inst_34913 = (0);
var inst_34914 = (0);
var state_34973__$1 = (function (){var statearr_35067 = state_34973;
(statearr_35067[(30)] = inst_34905);

(statearr_35067[(9)] = inst_34914);

(statearr_35067[(20)] = inst_34913);

(statearr_35067[(29)] = inst_34903__$1);

(statearr_35067[(11)] = inst_34912);

(statearr_35067[(21)] = inst_34911);

return statearr_35067;
})();
var statearr_35071_37155 = state_34973__$1;
(statearr_35071_37155[(2)] = null);

(statearr_35071_37155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (28))){
var inst_34930 = (state_34973[(25)]);
var inst_34911 = (state_34973[(21)]);
var inst_34930__$1 = cljs.core.seq(inst_34911);
var state_34973__$1 = (function (){var statearr_35077 = state_34973;
(statearr_35077[(25)] = inst_34930__$1);

return statearr_35077;
})();
if(inst_34930__$1){
var statearr_35079_37158 = state_34973__$1;
(statearr_35079_37158[(1)] = (33));

} else {
var statearr_35082_37159 = state_34973__$1;
(statearr_35082_37159[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (25))){
var inst_34914 = (state_34973[(9)]);
var inst_34913 = (state_34973[(20)]);
var inst_34916 = (inst_34914 < inst_34913);
var inst_34917 = inst_34916;
var state_34973__$1 = state_34973;
if(cljs.core.truth_(inst_34917)){
var statearr_35088_37163 = state_34973__$1;
(statearr_35088_37163[(1)] = (27));

} else {
var statearr_35092_37164 = state_34973__$1;
(statearr_35092_37164[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (34))){
var state_34973__$1 = state_34973;
var statearr_35106_37165 = state_34973__$1;
(statearr_35106_37165[(2)] = null);

(statearr_35106_37165[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (17))){
var state_34973__$1 = state_34973;
var statearr_35111_37166 = state_34973__$1;
(statearr_35111_37166[(2)] = null);

(statearr_35111_37166[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (3))){
var inst_34969 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34973__$1,inst_34969);
} else {
if((state_val_34978 === (12))){
var inst_34898 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
var statearr_35119_37174 = state_34973__$1;
(statearr_35119_37174[(2)] = inst_34898);

(statearr_35119_37174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (2))){
var state_34973__$1 = state_34973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34973__$1,(4),ch);
} else {
if((state_val_34978 === (23))){
var state_34973__$1 = state_34973;
var statearr_35129_37176 = state_34973__$1;
(statearr_35129_37176[(2)] = null);

(statearr_35129_37176[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (35))){
var inst_34953 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
var statearr_35134_37177 = state_34973__$1;
(statearr_35134_37177[(2)] = inst_34953);

(statearr_35134_37177[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (19))){
var inst_34870 = (state_34973[(7)]);
var inst_34874 = cljs.core.chunk_first(inst_34870);
var inst_34875 = cljs.core.chunk_rest(inst_34870);
var inst_34876 = cljs.core.count(inst_34874);
var inst_34848 = inst_34875;
var inst_34849 = inst_34874;
var inst_34850 = inst_34876;
var inst_34851 = (0);
var state_34973__$1 = (function (){var statearr_35142 = state_34973;
(statearr_35142[(13)] = inst_34848);

(statearr_35142[(14)] = inst_34849);

(statearr_35142[(15)] = inst_34851);

(statearr_35142[(16)] = inst_34850);

return statearr_35142;
})();
var statearr_35146_37181 = state_34973__$1;
(statearr_35146_37181[(2)] = null);

(statearr_35146_37181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (11))){
var inst_34848 = (state_34973[(13)]);
var inst_34870 = (state_34973[(7)]);
var inst_34870__$1 = cljs.core.seq(inst_34848);
var state_34973__$1 = (function (){var statearr_35153 = state_34973;
(statearr_35153[(7)] = inst_34870__$1);

return statearr_35153;
})();
if(inst_34870__$1){
var statearr_35154_37185 = state_34973__$1;
(statearr_35154_37185[(1)] = (16));

} else {
var statearr_35155_37186 = state_34973__$1;
(statearr_35155_37186[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (9))){
var inst_34900 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
var statearr_35156_37191 = state_34973__$1;
(statearr_35156_37191[(2)] = inst_34900);

(statearr_35156_37191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (5))){
var inst_34846 = cljs.core.deref(cs);
var inst_34847 = cljs.core.seq(inst_34846);
var inst_34848 = inst_34847;
var inst_34849 = null;
var inst_34850 = (0);
var inst_34851 = (0);
var state_34973__$1 = (function (){var statearr_35157 = state_34973;
(statearr_35157[(13)] = inst_34848);

(statearr_35157[(14)] = inst_34849);

(statearr_35157[(15)] = inst_34851);

(statearr_35157[(16)] = inst_34850);

return statearr_35157;
})();
var statearr_35158_37194 = state_34973__$1;
(statearr_35158_37194[(2)] = null);

(statearr_35158_37194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (14))){
var state_34973__$1 = state_34973;
var statearr_35161_37195 = state_34973__$1;
(statearr_35161_37195[(2)] = null);

(statearr_35161_37195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (45))){
var inst_34961 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
var statearr_35162_37196 = state_34973__$1;
(statearr_35162_37196[(2)] = inst_34961);

(statearr_35162_37196[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (26))){
var inst_34903 = (state_34973[(29)]);
var inst_34957 = (state_34973[(2)]);
var inst_34958 = cljs.core.seq(inst_34903);
var state_34973__$1 = (function (){var statearr_35165 = state_34973;
(statearr_35165[(31)] = inst_34957);

return statearr_35165;
})();
if(inst_34958){
var statearr_35166_37199 = state_34973__$1;
(statearr_35166_37199[(1)] = (42));

} else {
var statearr_35167_37200 = state_34973__$1;
(statearr_35167_37200[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (16))){
var inst_34870 = (state_34973[(7)]);
var inst_34872 = cljs.core.chunked_seq_QMARK_(inst_34870);
var state_34973__$1 = state_34973;
if(inst_34872){
var statearr_35188_37201 = state_34973__$1;
(statearr_35188_37201[(1)] = (19));

} else {
var statearr_35191_37203 = state_34973__$1;
(statearr_35191_37203[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (38))){
var inst_34950 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
var statearr_35193_37206 = state_34973__$1;
(statearr_35193_37206[(2)] = inst_34950);

(statearr_35193_37206[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (30))){
var state_34973__$1 = state_34973;
var statearr_35196_37211 = state_34973__$1;
(statearr_35196_37211[(2)] = null);

(statearr_35196_37211[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (10))){
var inst_34849 = (state_34973[(14)]);
var inst_34851 = (state_34973[(15)]);
var inst_34859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34849,inst_34851);
var inst_34860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(0),null);
var inst_34861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34859,(1),null);
var state_34973__$1 = (function (){var statearr_35199 = state_34973;
(statearr_35199[(26)] = inst_34860);

return statearr_35199;
})();
if(cljs.core.truth_(inst_34861)){
var statearr_35200_37216 = state_34973__$1;
(statearr_35200_37216[(1)] = (13));

} else {
var statearr_35201_37217 = state_34973__$1;
(statearr_35201_37217[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (18))){
var inst_34896 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
var statearr_35203_37218 = state_34973__$1;
(statearr_35203_37218[(2)] = inst_34896);

(statearr_35203_37218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (42))){
var state_34973__$1 = state_34973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34973__$1,(45),dchan);
} else {
if((state_val_34978 === (37))){
var inst_34930 = (state_34973[(25)]);
var inst_34839 = (state_34973[(12)]);
var inst_34939 = (state_34973[(23)]);
var inst_34939__$1 = cljs.core.first(inst_34930);
var inst_34940 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34939__$1,inst_34839,done);
var state_34973__$1 = (function (){var statearr_35211 = state_34973;
(statearr_35211[(23)] = inst_34939__$1);

return statearr_35211;
})();
if(cljs.core.truth_(inst_34940)){
var statearr_35213_37220 = state_34973__$1;
(statearr_35213_37220[(1)] = (39));

} else {
var statearr_35215_37226 = state_34973__$1;
(statearr_35215_37226[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (8))){
var inst_34851 = (state_34973[(15)]);
var inst_34850 = (state_34973[(16)]);
var inst_34853 = (inst_34851 < inst_34850);
var inst_34854 = inst_34853;
var state_34973__$1 = state_34973;
if(cljs.core.truth_(inst_34854)){
var statearr_35220_37227 = state_34973__$1;
(statearr_35220_37227[(1)] = (10));

} else {
var statearr_35224_37228 = state_34973__$1;
(statearr_35224_37228[(1)] = (11));

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
var statearr_35236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35236[(0)] = cljs$core$async$mult_$_state_machine__34200__auto__);

(statearr_35236[(1)] = (1));

return statearr_35236;
});
var cljs$core$async$mult_$_state_machine__34200__auto____1 = (function (state_34973){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_34973);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35243){if((e35243 instanceof Object)){
var ex__34203__auto__ = e35243;
var statearr_35245_37233 = state_34973;
(statearr_35245_37233[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37238 = state_34973;
state_34973 = G__37238;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34200__auto__ = function(state_34973){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34200__auto____1.call(this,state_34973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34200__auto____0;
cljs$core$async$mult_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34200__auto____1;
return cljs$core$async$mult_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35252 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35252[(6)] = c__34267__auto___37058);

return statearr_35252;
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
var G__35265 = arguments.length;
switch (G__35265) {
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
var len__4789__auto___37276 = arguments.length;
var i__4790__auto___37277 = (0);
while(true){
if((i__4790__auto___37277 < len__4789__auto___37276)){
args__4795__auto__.push((arguments[i__4790__auto___37277]));

var G__37278 = (i__4790__auto___37277 + (1));
i__4790__auto___37277 = G__37278;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35358){
var map__35361 = p__35358;
var map__35361__$1 = (((((!((map__35361 == null))))?(((((map__35361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35361):map__35361);
var opts = map__35361__$1;
var statearr_35367_37281 = state;
(statearr_35367_37281[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35369_37282 = state;
(statearr_35369_37282[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35372_37284 = state;
(statearr_35372_37284[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35354){
var G__35355 = cljs.core.first(seq35354);
var seq35354__$1 = cljs.core.next(seq35354);
var G__35356 = cljs.core.first(seq35354__$1);
var seq35354__$2 = cljs.core.next(seq35354__$1);
var G__35357 = cljs.core.first(seq35354__$2);
var seq35354__$3 = cljs.core.next(seq35354__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35355,G__35356,G__35357,seq35354__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35401 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35402){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35402 = meta35402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35403,meta35402__$1){
var self__ = this;
var _35403__$1 = this;
return (new cljs.core.async.t_cljs$core$async35401(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35402__$1));
}));

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35403){
var self__ = this;
var _35403__$1 = this;
return self__.meta35402;
}));

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35402","meta35402",416745411,null)], null);
}));

(cljs.core.async.t_cljs$core$async35401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35401");

(cljs.core.async.t_cljs$core$async35401.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35401.
 */
cljs.core.async.__GT_t_cljs$core$async35401 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35401(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35402){
return (new cljs.core.async.t_cljs$core$async35401(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35402));
});

}

return (new cljs.core.async.t_cljs$core$async35401(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35595){
var state_val_35597 = (state_35595[(1)]);
if((state_val_35597 === (7))){
var inst_35467 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35608_37326 = state_35595__$1;
(statearr_35608_37326[(2)] = inst_35467);

(statearr_35608_37326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (20))){
var inst_35479 = (state_35595[(7)]);
var state_35595__$1 = state_35595;
var statearr_35613_37329 = state_35595__$1;
(statearr_35613_37329[(2)] = inst_35479);

(statearr_35613_37329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (27))){
var state_35595__$1 = state_35595;
var statearr_35618_37331 = state_35595__$1;
(statearr_35618_37331[(2)] = null);

(statearr_35618_37331[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (1))){
var inst_35453 = (state_35595[(8)]);
var inst_35453__$1 = calc_state();
var inst_35455 = (inst_35453__$1 == null);
var inst_35456 = cljs.core.not(inst_35455);
var state_35595__$1 = (function (){var statearr_35624 = state_35595;
(statearr_35624[(8)] = inst_35453__$1);

return statearr_35624;
})();
if(inst_35456){
var statearr_35626_37336 = state_35595__$1;
(statearr_35626_37336[(1)] = (2));

} else {
var statearr_35628_37339 = state_35595__$1;
(statearr_35628_37339[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (24))){
var inst_35510 = (state_35595[(9)]);
var inst_35523 = (state_35595[(10)]);
var inst_35561 = (state_35595[(11)]);
var inst_35561__$1 = (inst_35510.cljs$core$IFn$_invoke$arity$1 ? inst_35510.cljs$core$IFn$_invoke$arity$1(inst_35523) : inst_35510.call(null,inst_35523));
var state_35595__$1 = (function (){var statearr_35641 = state_35595;
(statearr_35641[(11)] = inst_35561__$1);

return statearr_35641;
})();
if(cljs.core.truth_(inst_35561__$1)){
var statearr_35643_37341 = state_35595__$1;
(statearr_35643_37341[(1)] = (29));

} else {
var statearr_35645_37342 = state_35595__$1;
(statearr_35645_37342[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (4))){
var inst_35470 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35470)){
var statearr_35659_37343 = state_35595__$1;
(statearr_35659_37343[(1)] = (8));

} else {
var statearr_35660_37344 = state_35595__$1;
(statearr_35660_37344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (15))){
var inst_35503 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35503)){
var statearr_35665_37345 = state_35595__$1;
(statearr_35665_37345[(1)] = (19));

} else {
var statearr_35668_37347 = state_35595__$1;
(statearr_35668_37347[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (21))){
var inst_35508 = (state_35595[(12)]);
var inst_35508__$1 = (state_35595[(2)]);
var inst_35510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35508__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35508__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35508__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35595__$1 = (function (){var statearr_35674 = state_35595;
(statearr_35674[(13)] = inst_35511);

(statearr_35674[(12)] = inst_35508__$1);

(statearr_35674[(9)] = inst_35510);

return statearr_35674;
})();
return cljs.core.async.ioc_alts_BANG_(state_35595__$1,(22),inst_35514);
} else {
if((state_val_35597 === (31))){
var inst_35570 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35570)){
var statearr_35682_37353 = state_35595__$1;
(statearr_35682_37353[(1)] = (32));

} else {
var statearr_35683_37354 = state_35595__$1;
(statearr_35683_37354[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (32))){
var inst_35522 = (state_35595[(14)]);
var state_35595__$1 = state_35595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35595__$1,(35),out,inst_35522);
} else {
if((state_val_35597 === (33))){
var inst_35508 = (state_35595[(12)]);
var inst_35479 = inst_35508;
var state_35595__$1 = (function (){var statearr_35684 = state_35595;
(statearr_35684[(7)] = inst_35479);

return statearr_35684;
})();
var statearr_35685_37355 = state_35595__$1;
(statearr_35685_37355[(2)] = null);

(statearr_35685_37355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (13))){
var inst_35479 = (state_35595[(7)]);
var inst_35491 = inst_35479.cljs$lang$protocol_mask$partition0$;
var inst_35493 = (inst_35491 & (64));
var inst_35494 = inst_35479.cljs$core$ISeq$;
var inst_35495 = (cljs.core.PROTOCOL_SENTINEL === inst_35494);
var inst_35496 = ((inst_35493) || (inst_35495));
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35496)){
var statearr_35686_37356 = state_35595__$1;
(statearr_35686_37356[(1)] = (16));

} else {
var statearr_35687_37358 = state_35595__$1;
(statearr_35687_37358[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (22))){
var inst_35523 = (state_35595[(10)]);
var inst_35522 = (state_35595[(14)]);
var inst_35521 = (state_35595[(2)]);
var inst_35522__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35521,(0),null);
var inst_35523__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35521,(1),null);
var inst_35525 = (inst_35522__$1 == null);
var inst_35529 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35523__$1,change);
var inst_35530 = ((inst_35525) || (inst_35529));
var state_35595__$1 = (function (){var statearr_35688 = state_35595;
(statearr_35688[(10)] = inst_35523__$1);

(statearr_35688[(14)] = inst_35522__$1);

return statearr_35688;
})();
if(cljs.core.truth_(inst_35530)){
var statearr_35691_37365 = state_35595__$1;
(statearr_35691_37365[(1)] = (23));

} else {
var statearr_35692_37368 = state_35595__$1;
(statearr_35692_37368[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (36))){
var inst_35508 = (state_35595[(12)]);
var inst_35479 = inst_35508;
var state_35595__$1 = (function (){var statearr_35693 = state_35595;
(statearr_35693[(7)] = inst_35479);

return statearr_35693;
})();
var statearr_35694_37369 = state_35595__$1;
(statearr_35694_37369[(2)] = null);

(statearr_35694_37369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (29))){
var inst_35561 = (state_35595[(11)]);
var state_35595__$1 = state_35595;
var statearr_35695_37372 = state_35595__$1;
(statearr_35695_37372[(2)] = inst_35561);

(statearr_35695_37372[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (6))){
var state_35595__$1 = state_35595;
var statearr_35698_37375 = state_35595__$1;
(statearr_35698_37375[(2)] = false);

(statearr_35698_37375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (28))){
var inst_35552 = (state_35595[(2)]);
var inst_35553 = calc_state();
var inst_35479 = inst_35553;
var state_35595__$1 = (function (){var statearr_35699 = state_35595;
(statearr_35699[(15)] = inst_35552);

(statearr_35699[(7)] = inst_35479);

return statearr_35699;
})();
var statearr_35702_37378 = state_35595__$1;
(statearr_35702_37378[(2)] = null);

(statearr_35702_37378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (25))){
var inst_35587 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35705_37383 = state_35595__$1;
(statearr_35705_37383[(2)] = inst_35587);

(statearr_35705_37383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (34))){
var inst_35585 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35708_37388 = state_35595__$1;
(statearr_35708_37388[(2)] = inst_35585);

(statearr_35708_37388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (17))){
var state_35595__$1 = state_35595;
var statearr_35710_37399 = state_35595__$1;
(statearr_35710_37399[(2)] = false);

(statearr_35710_37399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (3))){
var state_35595__$1 = state_35595;
var statearr_35712_37402 = state_35595__$1;
(statearr_35712_37402[(2)] = false);

(statearr_35712_37402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (12))){
var inst_35591 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35595__$1,inst_35591);
} else {
if((state_val_35597 === (2))){
var inst_35453 = (state_35595[(8)]);
var inst_35458 = inst_35453.cljs$lang$protocol_mask$partition0$;
var inst_35459 = (inst_35458 & (64));
var inst_35460 = inst_35453.cljs$core$ISeq$;
var inst_35461 = (cljs.core.PROTOCOL_SENTINEL === inst_35460);
var inst_35462 = ((inst_35459) || (inst_35461));
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35462)){
var statearr_35713_37407 = state_35595__$1;
(statearr_35713_37407[(1)] = (5));

} else {
var statearr_35714_37408 = state_35595__$1;
(statearr_35714_37408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (23))){
var inst_35522 = (state_35595[(14)]);
var inst_35532 = (inst_35522 == null);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35532)){
var statearr_35716_37411 = state_35595__$1;
(statearr_35716_37411[(1)] = (26));

} else {
var statearr_35717_37414 = state_35595__$1;
(statearr_35717_37414[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (35))){
var inst_35576 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
if(cljs.core.truth_(inst_35576)){
var statearr_35721_37418 = state_35595__$1;
(statearr_35721_37418[(1)] = (36));

} else {
var statearr_35722_37419 = state_35595__$1;
(statearr_35722_37419[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (19))){
var inst_35479 = (state_35595[(7)]);
var inst_35505 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35479);
var state_35595__$1 = state_35595;
var statearr_35724_37426 = state_35595__$1;
(statearr_35724_37426[(2)] = inst_35505);

(statearr_35724_37426[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (11))){
var inst_35479 = (state_35595[(7)]);
var inst_35487 = (inst_35479 == null);
var inst_35488 = cljs.core.not(inst_35487);
var state_35595__$1 = state_35595;
if(inst_35488){
var statearr_35728_37427 = state_35595__$1;
(statearr_35728_37427[(1)] = (13));

} else {
var statearr_35729_37428 = state_35595__$1;
(statearr_35729_37428[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (9))){
var inst_35453 = (state_35595[(8)]);
var state_35595__$1 = state_35595;
var statearr_35731_37431 = state_35595__$1;
(statearr_35731_37431[(2)] = inst_35453);

(statearr_35731_37431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (5))){
var state_35595__$1 = state_35595;
var statearr_35732_37434 = state_35595__$1;
(statearr_35732_37434[(2)] = true);

(statearr_35732_37434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (14))){
var state_35595__$1 = state_35595;
var statearr_35734_37435 = state_35595__$1;
(statearr_35734_37435[(2)] = false);

(statearr_35734_37435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (26))){
var inst_35523 = (state_35595[(10)]);
var inst_35549 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35523);
var state_35595__$1 = state_35595;
var statearr_35735_37437 = state_35595__$1;
(statearr_35735_37437[(2)] = inst_35549);

(statearr_35735_37437[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (16))){
var state_35595__$1 = state_35595;
var statearr_35737_37439 = state_35595__$1;
(statearr_35737_37439[(2)] = true);

(statearr_35737_37439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (38))){
var inst_35581 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35738_37443 = state_35595__$1;
(statearr_35738_37443[(2)] = inst_35581);

(statearr_35738_37443[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (30))){
var inst_35511 = (state_35595[(13)]);
var inst_35510 = (state_35595[(9)]);
var inst_35523 = (state_35595[(10)]);
var inst_35565 = cljs.core.empty_QMARK_(inst_35510);
var inst_35566 = (inst_35511.cljs$core$IFn$_invoke$arity$1 ? inst_35511.cljs$core$IFn$_invoke$arity$1(inst_35523) : inst_35511.call(null,inst_35523));
var inst_35567 = cljs.core.not(inst_35566);
var inst_35568 = ((inst_35565) && (inst_35567));
var state_35595__$1 = state_35595;
var statearr_35740_37447 = state_35595__$1;
(statearr_35740_37447[(2)] = inst_35568);

(statearr_35740_37447[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (10))){
var inst_35453 = (state_35595[(8)]);
var inst_35475 = (state_35595[(2)]);
var inst_35476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35475,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35475,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35475,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35479 = inst_35453;
var state_35595__$1 = (function (){var statearr_35742 = state_35595;
(statearr_35742[(16)] = inst_35476);

(statearr_35742[(17)] = inst_35477);

(statearr_35742[(18)] = inst_35478);

(statearr_35742[(7)] = inst_35479);

return statearr_35742;
})();
var statearr_35744_37455 = state_35595__$1;
(statearr_35744_37455[(2)] = null);

(statearr_35744_37455[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (18))){
var inst_35500 = (state_35595[(2)]);
var state_35595__$1 = state_35595;
var statearr_35745_37456 = state_35595__$1;
(statearr_35745_37456[(2)] = inst_35500);

(statearr_35745_37456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (37))){
var state_35595__$1 = state_35595;
var statearr_35746_37458 = state_35595__$1;
(statearr_35746_37458[(2)] = null);

(statearr_35746_37458[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35597 === (8))){
var inst_35453 = (state_35595[(8)]);
var inst_35472 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35453);
var state_35595__$1 = state_35595;
var statearr_35748_37461 = state_35595__$1;
(statearr_35748_37461[(2)] = inst_35472);

(statearr_35748_37461[(1)] = (10));


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
var statearr_35754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35754[(0)] = cljs$core$async$mix_$_state_machine__34200__auto__);

(statearr_35754[(1)] = (1));

return statearr_35754;
});
var cljs$core$async$mix_$_state_machine__34200__auto____1 = (function (state_35595){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35595);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e35756){if((e35756 instanceof Object)){
var ex__34203__auto__ = e35756;
var statearr_35758_37467 = state_35595;
(statearr_35758_37467[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37468 = state_35595;
state_35595 = G__37468;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34200__auto__ = function(state_35595){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34200__auto____1.call(this,state_35595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34200__auto____0;
cljs$core$async$mix_$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34200__auto____1;
return cljs$core$async$mix_$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_35761 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_35761[(6)] = c__34267__auto___37323);

return statearr_35761;
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
var G__35793 = arguments.length;
switch (G__35793) {
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
var G__35806 = arguments.length;
switch (G__35806) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35801_SHARP_){
if(cljs.core.truth_((p1__35801_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35801_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35801_SHARP_.call(null,topic)))){
return p1__35801_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35801_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35817 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35818){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35818 = meta35818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35819,meta35818__$1){
var self__ = this;
var _35819__$1 = this;
return (new cljs.core.async.t_cljs$core$async35817(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35818__$1));
}));

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35819){
var self__ = this;
var _35819__$1 = this;
return self__.meta35818;
}));

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35818","meta35818",135183639,null)], null);
}));

(cljs.core.async.t_cljs$core$async35817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35817");

(cljs.core.async.t_cljs$core$async35817.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35817.
 */
cljs.core.async.__GT_t_cljs$core$async35817 = (function cljs$core$async$__GT_t_cljs$core$async35817(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35818){
return (new cljs.core.async.t_cljs$core$async35817(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35818));
});

}

return (new cljs.core.async.t_cljs$core$async35817(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34267__auto___37523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_35933){
var state_val_35935 = (state_35933[(1)]);
if((state_val_35935 === (7))){
var inst_35927 = (state_35933[(2)]);
var state_35933__$1 = state_35933;
var statearr_35940_37530 = state_35933__$1;
(statearr_35940_37530[(2)] = inst_35927);

(statearr_35940_37530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (20))){
var state_35933__$1 = state_35933;
var statearr_35941_37531 = state_35933__$1;
(statearr_35941_37531[(2)] = null);

(statearr_35941_37531[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (1))){
var state_35933__$1 = state_35933;
var statearr_35942_37533 = state_35933__$1;
(statearr_35942_37533[(2)] = null);

(statearr_35942_37533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (24))){
var inst_35908 = (state_35933[(7)]);
var inst_35919 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35908);
var state_35933__$1 = state_35933;
var statearr_35945_37536 = state_35933__$1;
(statearr_35945_37536[(2)] = inst_35919);

(statearr_35945_37536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (4))){
var inst_35854 = (state_35933[(8)]);
var inst_35854__$1 = (state_35933[(2)]);
var inst_35856 = (inst_35854__$1 == null);
var state_35933__$1 = (function (){var statearr_35947 = state_35933;
(statearr_35947[(8)] = inst_35854__$1);

return statearr_35947;
})();
if(cljs.core.truth_(inst_35856)){
var statearr_35949_37545 = state_35933__$1;
(statearr_35949_37545[(1)] = (5));

} else {
var statearr_35951_37547 = state_35933__$1;
(statearr_35951_37547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (15))){
var inst_35901 = (state_35933[(2)]);
var state_35933__$1 = state_35933;
var statearr_35954_37549 = state_35933__$1;
(statearr_35954_37549[(2)] = inst_35901);

(statearr_35954_37549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (21))){
var inst_35924 = (state_35933[(2)]);
var state_35933__$1 = (function (){var statearr_35955 = state_35933;
(statearr_35955[(9)] = inst_35924);

return statearr_35955;
})();
var statearr_35957_37552 = state_35933__$1;
(statearr_35957_37552[(2)] = null);

(statearr_35957_37552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (13))){
var inst_35881 = (state_35933[(10)]);
var inst_35884 = cljs.core.chunked_seq_QMARK_(inst_35881);
var state_35933__$1 = state_35933;
if(inst_35884){
var statearr_35958_37555 = state_35933__$1;
(statearr_35958_37555[(1)] = (16));

} else {
var statearr_35960_37559 = state_35933__$1;
(statearr_35960_37559[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (22))){
var inst_35916 = (state_35933[(2)]);
var state_35933__$1 = state_35933;
if(cljs.core.truth_(inst_35916)){
var statearr_35964_37562 = state_35933__$1;
(statearr_35964_37562[(1)] = (23));

} else {
var statearr_35966_37563 = state_35933__$1;
(statearr_35966_37563[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (6))){
var inst_35908 = (state_35933[(7)]);
var inst_35911 = (state_35933[(11)]);
var inst_35854 = (state_35933[(8)]);
var inst_35908__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35854) : topic_fn.call(null,inst_35854));
var inst_35910 = cljs.core.deref(mults);
var inst_35911__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35910,inst_35908__$1);
var state_35933__$1 = (function (){var statearr_35972 = state_35933;
(statearr_35972[(7)] = inst_35908__$1);

(statearr_35972[(11)] = inst_35911__$1);

return statearr_35972;
})();
if(cljs.core.truth_(inst_35911__$1)){
var statearr_35974_37567 = state_35933__$1;
(statearr_35974_37567[(1)] = (19));

} else {
var statearr_35975_37571 = state_35933__$1;
(statearr_35975_37571[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (25))){
var inst_35921 = (state_35933[(2)]);
var state_35933__$1 = state_35933;
var statearr_35976_37574 = state_35933__$1;
(statearr_35976_37574[(2)] = inst_35921);

(statearr_35976_37574[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (17))){
var inst_35881 = (state_35933[(10)]);
var inst_35891 = cljs.core.first(inst_35881);
var inst_35893 = cljs.core.async.muxch_STAR_(inst_35891);
var inst_35894 = cljs.core.async.close_BANG_(inst_35893);
var inst_35895 = cljs.core.next(inst_35881);
var inst_35865 = inst_35895;
var inst_35866 = null;
var inst_35867 = (0);
var inst_35868 = (0);
var state_35933__$1 = (function (){var statearr_35979 = state_35933;
(statearr_35979[(12)] = inst_35867);

(statearr_35979[(13)] = inst_35865);

(statearr_35979[(14)] = inst_35868);

(statearr_35979[(15)] = inst_35894);

(statearr_35979[(16)] = inst_35866);

return statearr_35979;
})();
var statearr_35980_37581 = state_35933__$1;
(statearr_35980_37581[(2)] = null);

(statearr_35980_37581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (3))){
var inst_35929 = (state_35933[(2)]);
var state_35933__$1 = state_35933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35933__$1,inst_35929);
} else {
if((state_val_35935 === (12))){
var inst_35903 = (state_35933[(2)]);
var state_35933__$1 = state_35933;
var statearr_35982_37584 = state_35933__$1;
(statearr_35982_37584[(2)] = inst_35903);

(statearr_35982_37584[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (2))){
var state_35933__$1 = state_35933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35933__$1,(4),ch);
} else {
if((state_val_35935 === (23))){
var state_35933__$1 = state_35933;
var statearr_35986_37586 = state_35933__$1;
(statearr_35986_37586[(2)] = null);

(statearr_35986_37586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (19))){
var inst_35911 = (state_35933[(11)]);
var inst_35854 = (state_35933[(8)]);
var inst_35914 = cljs.core.async.muxch_STAR_(inst_35911);
var state_35933__$1 = state_35933;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35933__$1,(22),inst_35914,inst_35854);
} else {
if((state_val_35935 === (11))){
var inst_35881 = (state_35933[(10)]);
var inst_35865 = (state_35933[(13)]);
var inst_35881__$1 = cljs.core.seq(inst_35865);
var state_35933__$1 = (function (){var statearr_35987 = state_35933;
(statearr_35987[(10)] = inst_35881__$1);

return statearr_35987;
})();
if(inst_35881__$1){
var statearr_35988_37594 = state_35933__$1;
(statearr_35988_37594[(1)] = (13));

} else {
var statearr_35989_37596 = state_35933__$1;
(statearr_35989_37596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (9))){
var inst_35906 = (state_35933[(2)]);
var state_35933__$1 = state_35933;
var statearr_35994_37597 = state_35933__$1;
(statearr_35994_37597[(2)] = inst_35906);

(statearr_35994_37597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (5))){
var inst_35862 = cljs.core.deref(mults);
var inst_35863 = cljs.core.vals(inst_35862);
var inst_35864 = cljs.core.seq(inst_35863);
var inst_35865 = inst_35864;
var inst_35866 = null;
var inst_35867 = (0);
var inst_35868 = (0);
var state_35933__$1 = (function (){var statearr_35998 = state_35933;
(statearr_35998[(12)] = inst_35867);

(statearr_35998[(13)] = inst_35865);

(statearr_35998[(14)] = inst_35868);

(statearr_35998[(16)] = inst_35866);

return statearr_35998;
})();
var statearr_35999_37605 = state_35933__$1;
(statearr_35999_37605[(2)] = null);

(statearr_35999_37605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (14))){
var state_35933__$1 = state_35933;
var statearr_36006_37607 = state_35933__$1;
(statearr_36006_37607[(2)] = null);

(statearr_36006_37607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (16))){
var inst_35881 = (state_35933[(10)]);
var inst_35886 = cljs.core.chunk_first(inst_35881);
var inst_35887 = cljs.core.chunk_rest(inst_35881);
var inst_35888 = cljs.core.count(inst_35886);
var inst_35865 = inst_35887;
var inst_35866 = inst_35886;
var inst_35867 = inst_35888;
var inst_35868 = (0);
var state_35933__$1 = (function (){var statearr_36009 = state_35933;
(statearr_36009[(12)] = inst_35867);

(statearr_36009[(13)] = inst_35865);

(statearr_36009[(14)] = inst_35868);

(statearr_36009[(16)] = inst_35866);

return statearr_36009;
})();
var statearr_36013_37618 = state_35933__$1;
(statearr_36013_37618[(2)] = null);

(statearr_36013_37618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (10))){
var inst_35867 = (state_35933[(12)]);
var inst_35865 = (state_35933[(13)]);
var inst_35868 = (state_35933[(14)]);
var inst_35866 = (state_35933[(16)]);
var inst_35873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35866,inst_35868);
var inst_35874 = cljs.core.async.muxch_STAR_(inst_35873);
var inst_35875 = cljs.core.async.close_BANG_(inst_35874);
var inst_35878 = (inst_35868 + (1));
var tmp36001 = inst_35867;
var tmp36002 = inst_35865;
var tmp36003 = inst_35866;
var inst_35865__$1 = tmp36002;
var inst_35866__$1 = tmp36003;
var inst_35867__$1 = tmp36001;
var inst_35868__$1 = inst_35878;
var state_35933__$1 = (function (){var statearr_36017 = state_35933;
(statearr_36017[(12)] = inst_35867__$1);

(statearr_36017[(17)] = inst_35875);

(statearr_36017[(13)] = inst_35865__$1);

(statearr_36017[(14)] = inst_35868__$1);

(statearr_36017[(16)] = inst_35866__$1);

return statearr_36017;
})();
var statearr_36019_37627 = state_35933__$1;
(statearr_36019_37627[(2)] = null);

(statearr_36019_37627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (18))){
var inst_35898 = (state_35933[(2)]);
var state_35933__$1 = state_35933;
var statearr_36021_37631 = state_35933__$1;
(statearr_36021_37631[(2)] = inst_35898);

(statearr_36021_37631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35935 === (8))){
var inst_35867 = (state_35933[(12)]);
var inst_35868 = (state_35933[(14)]);
var inst_35870 = (inst_35868 < inst_35867);
var inst_35871 = inst_35870;
var state_35933__$1 = state_35933;
if(cljs.core.truth_(inst_35871)){
var statearr_36025_37633 = state_35933__$1;
(statearr_36025_37633[(1)] = (10));

} else {
var statearr_36026_37634 = state_35933__$1;
(statearr_36026_37634[(1)] = (11));

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
var statearr_36027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36027[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36027[(1)] = (1));

return statearr_36027;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_35933){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_35933);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36028){if((e36028 instanceof Object)){
var ex__34203__auto__ = e36028;
var statearr_36029_37646 = state_35933;
(statearr_36029_37646[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36028;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37649 = state_35933;
state_35933 = G__37649;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_35933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_35933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36033 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36033[(6)] = c__34267__auto___37523);

return statearr_36033;
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
var G__36038 = arguments.length;
switch (G__36038) {
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
var G__36044 = arguments.length;
switch (G__36044) {
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
var G__36046 = arguments.length;
switch (G__36046) {
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
var c__34267__auto___37684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36108){
var state_val_36109 = (state_36108[(1)]);
if((state_val_36109 === (7))){
var state_36108__$1 = state_36108;
var statearr_36110_37694 = state_36108__$1;
(statearr_36110_37694[(2)] = null);

(statearr_36110_37694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (1))){
var state_36108__$1 = state_36108;
var statearr_36111_37697 = state_36108__$1;
(statearr_36111_37697[(2)] = null);

(statearr_36111_37697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (4))){
var inst_36054 = (state_36108[(7)]);
var inst_36056 = (inst_36054 < cnt);
var state_36108__$1 = state_36108;
if(cljs.core.truth_(inst_36056)){
var statearr_36112_37699 = state_36108__$1;
(statearr_36112_37699[(1)] = (6));

} else {
var statearr_36113_37701 = state_36108__$1;
(statearr_36113_37701[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (15))){
var inst_36104 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36114_37702 = state_36108__$1;
(statearr_36114_37702[(2)] = inst_36104);

(statearr_36114_37702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (13))){
var inst_36095 = cljs.core.async.close_BANG_(out);
var state_36108__$1 = state_36108;
var statearr_36115_37709 = state_36108__$1;
(statearr_36115_37709[(2)] = inst_36095);

(statearr_36115_37709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (6))){
var state_36108__$1 = state_36108;
var statearr_36116_37712 = state_36108__$1;
(statearr_36116_37712[(2)] = null);

(statearr_36116_37712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (3))){
var inst_36106 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36108__$1,inst_36106);
} else {
if((state_val_36109 === (12))){
var inst_36086 = (state_36108[(8)]);
var inst_36086__$1 = (state_36108[(2)]);
var inst_36087 = cljs.core.some(cljs.core.nil_QMARK_,inst_36086__$1);
var state_36108__$1 = (function (){var statearr_36117 = state_36108;
(statearr_36117[(8)] = inst_36086__$1);

return statearr_36117;
})();
if(cljs.core.truth_(inst_36087)){
var statearr_36118_37716 = state_36108__$1;
(statearr_36118_37716[(1)] = (13));

} else {
var statearr_36119_37720 = state_36108__$1;
(statearr_36119_37720[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (2))){
var inst_36049 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36054 = (0);
var state_36108__$1 = (function (){var statearr_36120 = state_36108;
(statearr_36120[(9)] = inst_36049);

(statearr_36120[(7)] = inst_36054);

return statearr_36120;
})();
var statearr_36121_37727 = state_36108__$1;
(statearr_36121_37727[(2)] = null);

(statearr_36121_37727[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (11))){
var inst_36054 = (state_36108[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36108,(10),Object,null,(9));
var inst_36063 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36054) : chs__$1.call(null,inst_36054));
var inst_36064 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36054) : done.call(null,inst_36054));
var inst_36065 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36063,inst_36064);
var state_36108__$1 = state_36108;
var statearr_36122_37731 = state_36108__$1;
(statearr_36122_37731[(2)] = inst_36065);


cljs.core.async.impl.ioc_helpers.process_exception(state_36108__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (9))){
var inst_36054 = (state_36108[(7)]);
var inst_36067 = (state_36108[(2)]);
var inst_36068 = (inst_36054 + (1));
var inst_36054__$1 = inst_36068;
var state_36108__$1 = (function (){var statearr_36123 = state_36108;
(statearr_36123[(10)] = inst_36067);

(statearr_36123[(7)] = inst_36054__$1);

return statearr_36123;
})();
var statearr_36124_37739 = state_36108__$1;
(statearr_36124_37739[(2)] = null);

(statearr_36124_37739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (5))){
var inst_36082 = (state_36108[(2)]);
var state_36108__$1 = (function (){var statearr_36125 = state_36108;
(statearr_36125[(11)] = inst_36082);

return statearr_36125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36108__$1,(12),dchan);
} else {
if((state_val_36109 === (14))){
var inst_36086 = (state_36108[(8)]);
var inst_36098 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36086);
var state_36108__$1 = state_36108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36108__$1,(16),out,inst_36098);
} else {
if((state_val_36109 === (16))){
var inst_36100 = (state_36108[(2)]);
var state_36108__$1 = (function (){var statearr_36130 = state_36108;
(statearr_36130[(12)] = inst_36100);

return statearr_36130;
})();
var statearr_36131_37747 = state_36108__$1;
(statearr_36131_37747[(2)] = null);

(statearr_36131_37747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (10))){
var inst_36058 = (state_36108[(2)]);
var inst_36059 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36108__$1 = (function (){var statearr_36132 = state_36108;
(statearr_36132[(13)] = inst_36058);

return statearr_36132;
})();
var statearr_36133_37750 = state_36108__$1;
(statearr_36133_37750[(2)] = inst_36059);


cljs.core.async.impl.ioc_helpers.process_exception(state_36108__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (8))){
var inst_36080 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36137_37752 = state_36108__$1;
(statearr_36137_37752[(2)] = inst_36080);

(statearr_36137_37752[(1)] = (5));


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
var statearr_36138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36138[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36138[(1)] = (1));

return statearr_36138;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36108){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36108);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36139){if((e36139 instanceof Object)){
var ex__34203__auto__ = e36139;
var statearr_36140_37755 = state_36108;
(statearr_36140_37755[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36139;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37756 = state_36108;
state_36108 = G__37756;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36143 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36143[(6)] = c__34267__auto___37684);

return statearr_36143;
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
var G__36149 = arguments.length;
switch (G__36149) {
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
var c__34267__auto___37762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36183){
var state_val_36184 = (state_36183[(1)]);
if((state_val_36184 === (7))){
var inst_36162 = (state_36183[(7)]);
var inst_36163 = (state_36183[(8)]);
var inst_36162__$1 = (state_36183[(2)]);
var inst_36163__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36162__$1,(0),null);
var inst_36164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36162__$1,(1),null);
var inst_36165 = (inst_36163__$1 == null);
var state_36183__$1 = (function (){var statearr_36187 = state_36183;
(statearr_36187[(7)] = inst_36162__$1);

(statearr_36187[(9)] = inst_36164);

(statearr_36187[(8)] = inst_36163__$1);

return statearr_36187;
})();
if(cljs.core.truth_(inst_36165)){
var statearr_36188_37767 = state_36183__$1;
(statearr_36188_37767[(1)] = (8));

} else {
var statearr_36189_37768 = state_36183__$1;
(statearr_36189_37768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (1))){
var inst_36152 = cljs.core.vec(chs);
var inst_36153 = inst_36152;
var state_36183__$1 = (function (){var statearr_36190 = state_36183;
(statearr_36190[(10)] = inst_36153);

return statearr_36190;
})();
var statearr_36191_37769 = state_36183__$1;
(statearr_36191_37769[(2)] = null);

(statearr_36191_37769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (4))){
var inst_36153 = (state_36183[(10)]);
var state_36183__$1 = state_36183;
return cljs.core.async.ioc_alts_BANG_(state_36183__$1,(7),inst_36153);
} else {
if((state_val_36184 === (6))){
var inst_36179 = (state_36183[(2)]);
var state_36183__$1 = state_36183;
var statearr_36194_37773 = state_36183__$1;
(statearr_36194_37773[(2)] = inst_36179);

(statearr_36194_37773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (3))){
var inst_36181 = (state_36183[(2)]);
var state_36183__$1 = state_36183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36183__$1,inst_36181);
} else {
if((state_val_36184 === (2))){
var inst_36153 = (state_36183[(10)]);
var inst_36155 = cljs.core.count(inst_36153);
var inst_36156 = (inst_36155 > (0));
var state_36183__$1 = state_36183;
if(cljs.core.truth_(inst_36156)){
var statearr_36201_37775 = state_36183__$1;
(statearr_36201_37775[(1)] = (4));

} else {
var statearr_36203_37776 = state_36183__$1;
(statearr_36203_37776[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (11))){
var inst_36153 = (state_36183[(10)]);
var inst_36172 = (state_36183[(2)]);
var tmp36196 = inst_36153;
var inst_36153__$1 = tmp36196;
var state_36183__$1 = (function (){var statearr_36206 = state_36183;
(statearr_36206[(11)] = inst_36172);

(statearr_36206[(10)] = inst_36153__$1);

return statearr_36206;
})();
var statearr_36207_37778 = state_36183__$1;
(statearr_36207_37778[(2)] = null);

(statearr_36207_37778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (9))){
var inst_36163 = (state_36183[(8)]);
var state_36183__$1 = state_36183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36183__$1,(11),out,inst_36163);
} else {
if((state_val_36184 === (5))){
var inst_36177 = cljs.core.async.close_BANG_(out);
var state_36183__$1 = state_36183;
var statearr_36219_37779 = state_36183__$1;
(statearr_36219_37779[(2)] = inst_36177);

(statearr_36219_37779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (10))){
var inst_36175 = (state_36183[(2)]);
var state_36183__$1 = state_36183;
var statearr_36220_37781 = state_36183__$1;
(statearr_36220_37781[(2)] = inst_36175);

(statearr_36220_37781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36184 === (8))){
var inst_36162 = (state_36183[(7)]);
var inst_36153 = (state_36183[(10)]);
var inst_36164 = (state_36183[(9)]);
var inst_36163 = (state_36183[(8)]);
var inst_36167 = (function (){var cs = inst_36153;
var vec__36158 = inst_36162;
var v = inst_36163;
var c = inst_36164;
return (function (p1__36146_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36146_SHARP_);
});
})();
var inst_36168 = cljs.core.filterv(inst_36167,inst_36153);
var inst_36153__$1 = inst_36168;
var state_36183__$1 = (function (){var statearr_36223 = state_36183;
(statearr_36223[(10)] = inst_36153__$1);

return statearr_36223;
})();
var statearr_36224_37790 = state_36183__$1;
(statearr_36224_37790[(2)] = null);

(statearr_36224_37790[(1)] = (2));


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
var statearr_36226 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36226[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36226[(1)] = (1));

return statearr_36226;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36183){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36183);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36229){if((e36229 instanceof Object)){
var ex__34203__auto__ = e36229;
var statearr_36230_37795 = state_36183;
(statearr_36230_37795[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36229;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37797 = state_36183;
state_36183 = G__37797;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36231 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36231[(6)] = c__34267__auto___37762);

return statearr_36231;
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
var c__34267__auto___37812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36263){
var state_val_36265 = (state_36263[(1)]);
if((state_val_36265 === (7))){
var inst_36243 = (state_36263[(7)]);
var inst_36243__$1 = (state_36263[(2)]);
var inst_36245 = (inst_36243__$1 == null);
var inst_36246 = cljs.core.not(inst_36245);
var state_36263__$1 = (function (){var statearr_36268 = state_36263;
(statearr_36268[(7)] = inst_36243__$1);

return statearr_36268;
})();
if(inst_36246){
var statearr_36273_37815 = state_36263__$1;
(statearr_36273_37815[(1)] = (8));

} else {
var statearr_36277_37816 = state_36263__$1;
(statearr_36277_37816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (1))){
var inst_36238 = (0);
var state_36263__$1 = (function (){var statearr_36278 = state_36263;
(statearr_36278[(8)] = inst_36238);

return statearr_36278;
})();
var statearr_36279_37822 = state_36263__$1;
(statearr_36279_37822[(2)] = null);

(statearr_36279_37822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (4))){
var state_36263__$1 = state_36263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36263__$1,(7),ch);
} else {
if((state_val_36265 === (6))){
var inst_36258 = (state_36263[(2)]);
var state_36263__$1 = state_36263;
var statearr_36281_37825 = state_36263__$1;
(statearr_36281_37825[(2)] = inst_36258);

(statearr_36281_37825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (3))){
var inst_36260 = (state_36263[(2)]);
var inst_36261 = cljs.core.async.close_BANG_(out);
var state_36263__$1 = (function (){var statearr_36283 = state_36263;
(statearr_36283[(9)] = inst_36260);

return statearr_36283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36263__$1,inst_36261);
} else {
if((state_val_36265 === (2))){
var inst_36238 = (state_36263[(8)]);
var inst_36240 = (inst_36238 < n);
var state_36263__$1 = state_36263;
if(cljs.core.truth_(inst_36240)){
var statearr_36285_37833 = state_36263__$1;
(statearr_36285_37833[(1)] = (4));

} else {
var statearr_36286_37834 = state_36263__$1;
(statearr_36286_37834[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (11))){
var inst_36238 = (state_36263[(8)]);
var inst_36249 = (state_36263[(2)]);
var inst_36250 = (inst_36238 + (1));
var inst_36238__$1 = inst_36250;
var state_36263__$1 = (function (){var statearr_36288 = state_36263;
(statearr_36288[(10)] = inst_36249);

(statearr_36288[(8)] = inst_36238__$1);

return statearr_36288;
})();
var statearr_36289_37837 = state_36263__$1;
(statearr_36289_37837[(2)] = null);

(statearr_36289_37837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (9))){
var state_36263__$1 = state_36263;
var statearr_36291_37838 = state_36263__$1;
(statearr_36291_37838[(2)] = null);

(statearr_36291_37838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (5))){
var state_36263__$1 = state_36263;
var statearr_36292_37844 = state_36263__$1;
(statearr_36292_37844[(2)] = null);

(statearr_36292_37844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (10))){
var inst_36254 = (state_36263[(2)]);
var state_36263__$1 = state_36263;
var statearr_36294_37848 = state_36263__$1;
(statearr_36294_37848[(2)] = inst_36254);

(statearr_36294_37848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36265 === (8))){
var inst_36243 = (state_36263[(7)]);
var state_36263__$1 = state_36263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36263__$1,(11),out,inst_36243);
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
var statearr_36296 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36296[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36296[(1)] = (1));

return statearr_36296;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36263){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36263);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36297){if((e36297 instanceof Object)){
var ex__34203__auto__ = e36297;
var statearr_36298_37852 = state_36263;
(statearr_36298_37852[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36297;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37855 = state_36263;
state_36263 = G__37855;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36301 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36301[(6)] = c__34267__auto___37812);

return statearr_36301;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36319 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36319 = (function (f,ch,meta36307,_,fn1,meta36320){
this.f = f;
this.ch = ch;
this.meta36307 = meta36307;
this._ = _;
this.fn1 = fn1;
this.meta36320 = meta36320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36321,meta36320__$1){
var self__ = this;
var _36321__$1 = this;
return (new cljs.core.async.t_cljs$core$async36319(self__.f,self__.ch,self__.meta36307,self__._,self__.fn1,meta36320__$1));
}));

(cljs.core.async.t_cljs$core$async36319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36321){
var self__ = this;
var _36321__$1 = this;
return self__.meta36320;
}));

(cljs.core.async.t_cljs$core$async36319.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36319.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36319.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36319.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36302_SHARP_){
var G__36326 = (((p1__36302_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36302_SHARP_) : self__.f.call(null,p1__36302_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36326) : f1.call(null,G__36326));
});
}));

(cljs.core.async.t_cljs$core$async36319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36307","meta36307",348116198,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36306","cljs.core.async/t_cljs$core$async36306",1077785870,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36320","meta36320",238143253,null)], null);
}));

(cljs.core.async.t_cljs$core$async36319.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36319");

(cljs.core.async.t_cljs$core$async36319.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36319");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36319.
 */
cljs.core.async.__GT_t_cljs$core$async36319 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36319(f__$1,ch__$1,meta36307__$1,___$2,fn1__$1,meta36320){
return (new cljs.core.async.t_cljs$core$async36319(f__$1,ch__$1,meta36307__$1,___$2,fn1__$1,meta36320));
});

}

return (new cljs.core.async.t_cljs$core$async36319(self__.f,self__.ch,self__.meta36307,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36331 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36331) : self__.f.call(null,G__36331));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36341 = (function (f,ch,meta36342){
this.f = f;
this.ch = ch;
this.meta36342 = meta36342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36343,meta36342__$1){
var self__ = this;
var _36343__$1 = this;
return (new cljs.core.async.t_cljs$core$async36341(self__.f,self__.ch,meta36342__$1));
}));

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36343){
var self__ = this;
var _36343__$1 = this;
return self__.meta36342;
}));

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36342","meta36342",1426951232,null)], null);
}));

(cljs.core.async.t_cljs$core$async36341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36341");

(cljs.core.async.t_cljs$core$async36341.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36341.
 */
cljs.core.async.__GT_t_cljs$core$async36341 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36341(f__$1,ch__$1,meta36342){
return (new cljs.core.async.t_cljs$core$async36341(f__$1,ch__$1,meta36342));
});

}

return (new cljs.core.async.t_cljs$core$async36341(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36352 = (function (p,ch,meta36353){
this.p = p;
this.ch = ch;
this.meta36353 = meta36353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36354,meta36353__$1){
var self__ = this;
var _36354__$1 = this;
return (new cljs.core.async.t_cljs$core$async36352(self__.p,self__.ch,meta36353__$1));
}));

(cljs.core.async.t_cljs$core$async36352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36354){
var self__ = this;
var _36354__$1 = this;
return self__.meta36353;
}));

(cljs.core.async.t_cljs$core$async36352.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36352.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36352.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36352.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36353","meta36353",2080689735,null)], null);
}));

(cljs.core.async.t_cljs$core$async36352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36352");

(cljs.core.async.t_cljs$core$async36352.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36352.
 */
cljs.core.async.__GT_t_cljs$core$async36352 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36352(p__$1,ch__$1,meta36353){
return (new cljs.core.async.t_cljs$core$async36352(p__$1,ch__$1,meta36353));
});

}

return (new cljs.core.async.t_cljs$core$async36352(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36375 = arguments.length;
switch (G__36375) {
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
var c__34267__auto___37927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36397){
var state_val_36398 = (state_36397[(1)]);
if((state_val_36398 === (7))){
var inst_36393 = (state_36397[(2)]);
var state_36397__$1 = state_36397;
var statearr_36401_37932 = state_36397__$1;
(statearr_36401_37932[(2)] = inst_36393);

(statearr_36401_37932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (1))){
var state_36397__$1 = state_36397;
var statearr_36402_37933 = state_36397__$1;
(statearr_36402_37933[(2)] = null);

(statearr_36402_37933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (4))){
var inst_36379 = (state_36397[(7)]);
var inst_36379__$1 = (state_36397[(2)]);
var inst_36380 = (inst_36379__$1 == null);
var state_36397__$1 = (function (){var statearr_36405 = state_36397;
(statearr_36405[(7)] = inst_36379__$1);

return statearr_36405;
})();
if(cljs.core.truth_(inst_36380)){
var statearr_36406_37938 = state_36397__$1;
(statearr_36406_37938[(1)] = (5));

} else {
var statearr_36410_37939 = state_36397__$1;
(statearr_36410_37939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (6))){
var inst_36379 = (state_36397[(7)]);
var inst_36384 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36379) : p.call(null,inst_36379));
var state_36397__$1 = state_36397;
if(cljs.core.truth_(inst_36384)){
var statearr_36413_37940 = state_36397__$1;
(statearr_36413_37940[(1)] = (8));

} else {
var statearr_36417_37941 = state_36397__$1;
(statearr_36417_37941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (3))){
var inst_36395 = (state_36397[(2)]);
var state_36397__$1 = state_36397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36397__$1,inst_36395);
} else {
if((state_val_36398 === (2))){
var state_36397__$1 = state_36397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36397__$1,(4),ch);
} else {
if((state_val_36398 === (11))){
var inst_36387 = (state_36397[(2)]);
var state_36397__$1 = state_36397;
var statearr_36420_37943 = state_36397__$1;
(statearr_36420_37943[(2)] = inst_36387);

(statearr_36420_37943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (9))){
var state_36397__$1 = state_36397;
var statearr_36422_37945 = state_36397__$1;
(statearr_36422_37945[(2)] = null);

(statearr_36422_37945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (5))){
var inst_36382 = cljs.core.async.close_BANG_(out);
var state_36397__$1 = state_36397;
var statearr_36423_37950 = state_36397__$1;
(statearr_36423_37950[(2)] = inst_36382);

(statearr_36423_37950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (10))){
var inst_36390 = (state_36397[(2)]);
var state_36397__$1 = (function (){var statearr_36424 = state_36397;
(statearr_36424[(8)] = inst_36390);

return statearr_36424;
})();
var statearr_36425_37951 = state_36397__$1;
(statearr_36425_37951[(2)] = null);

(statearr_36425_37951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (8))){
var inst_36379 = (state_36397[(7)]);
var state_36397__$1 = state_36397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36397__$1,(11),out,inst_36379);
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
var statearr_36426 = [null,null,null,null,null,null,null,null,null];
(statearr_36426[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36426[(1)] = (1));

return statearr_36426;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36397){
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
}catch (e36427){if((e36427 instanceof Object)){
var ex__34203__auto__ = e36427;
var statearr_36428_37958 = state_36397;
(statearr_36428_37958[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37959 = state_36397;
state_36397 = G__37959;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36433 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36433[(6)] = c__34267__auto___37927);

return statearr_36433;
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
var G__36441 = arguments.length;
switch (G__36441) {
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
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36515){
var state_val_36516 = (state_36515[(1)]);
if((state_val_36516 === (7))){
var inst_36511 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
var statearr_36519_37971 = state_36515__$1;
(statearr_36519_37971[(2)] = inst_36511);

(statearr_36519_37971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (20))){
var inst_36479 = (state_36515[(7)]);
var inst_36492 = (state_36515[(2)]);
var inst_36493 = cljs.core.next(inst_36479);
var inst_36465 = inst_36493;
var inst_36466 = null;
var inst_36467 = (0);
var inst_36468 = (0);
var state_36515__$1 = (function (){var statearr_36521 = state_36515;
(statearr_36521[(8)] = inst_36467);

(statearr_36521[(9)] = inst_36492);

(statearr_36521[(10)] = inst_36466);

(statearr_36521[(11)] = inst_36468);

(statearr_36521[(12)] = inst_36465);

return statearr_36521;
})();
var statearr_36523_37979 = state_36515__$1;
(statearr_36523_37979[(2)] = null);

(statearr_36523_37979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (1))){
var state_36515__$1 = state_36515;
var statearr_36525_37985 = state_36515__$1;
(statearr_36525_37985[(2)] = null);

(statearr_36525_37985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (4))){
var inst_36454 = (state_36515[(13)]);
var inst_36454__$1 = (state_36515[(2)]);
var inst_36455 = (inst_36454__$1 == null);
var state_36515__$1 = (function (){var statearr_36526 = state_36515;
(statearr_36526[(13)] = inst_36454__$1);

return statearr_36526;
})();
if(cljs.core.truth_(inst_36455)){
var statearr_36528_37988 = state_36515__$1;
(statearr_36528_37988[(1)] = (5));

} else {
var statearr_36530_37990 = state_36515__$1;
(statearr_36530_37990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (15))){
var state_36515__$1 = state_36515;
var statearr_36536_37993 = state_36515__$1;
(statearr_36536_37993[(2)] = null);

(statearr_36536_37993[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (21))){
var state_36515__$1 = state_36515;
var statearr_36537_37994 = state_36515__$1;
(statearr_36537_37994[(2)] = null);

(statearr_36537_37994[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (13))){
var inst_36467 = (state_36515[(8)]);
var inst_36466 = (state_36515[(10)]);
var inst_36468 = (state_36515[(11)]);
var inst_36465 = (state_36515[(12)]);
var inst_36475 = (state_36515[(2)]);
var inst_36476 = (inst_36468 + (1));
var tmp36533 = inst_36467;
var tmp36534 = inst_36466;
var tmp36535 = inst_36465;
var inst_36465__$1 = tmp36535;
var inst_36466__$1 = tmp36534;
var inst_36467__$1 = tmp36533;
var inst_36468__$1 = inst_36476;
var state_36515__$1 = (function (){var statearr_36539 = state_36515;
(statearr_36539[(8)] = inst_36467__$1);

(statearr_36539[(10)] = inst_36466__$1);

(statearr_36539[(11)] = inst_36468__$1);

(statearr_36539[(12)] = inst_36465__$1);

(statearr_36539[(14)] = inst_36475);

return statearr_36539;
})();
var statearr_36540_38000 = state_36515__$1;
(statearr_36540_38000[(2)] = null);

(statearr_36540_38000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (22))){
var state_36515__$1 = state_36515;
var statearr_36541_38001 = state_36515__$1;
(statearr_36541_38001[(2)] = null);

(statearr_36541_38001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (6))){
var inst_36454 = (state_36515[(13)]);
var inst_36463 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36454) : f.call(null,inst_36454));
var inst_36464 = cljs.core.seq(inst_36463);
var inst_36465 = inst_36464;
var inst_36466 = null;
var inst_36467 = (0);
var inst_36468 = (0);
var state_36515__$1 = (function (){var statearr_36543 = state_36515;
(statearr_36543[(8)] = inst_36467);

(statearr_36543[(10)] = inst_36466);

(statearr_36543[(11)] = inst_36468);

(statearr_36543[(12)] = inst_36465);

return statearr_36543;
})();
var statearr_36544_38005 = state_36515__$1;
(statearr_36544_38005[(2)] = null);

(statearr_36544_38005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (17))){
var inst_36479 = (state_36515[(7)]);
var inst_36484 = cljs.core.chunk_first(inst_36479);
var inst_36485 = cljs.core.chunk_rest(inst_36479);
var inst_36487 = cljs.core.count(inst_36484);
var inst_36465 = inst_36485;
var inst_36466 = inst_36484;
var inst_36467 = inst_36487;
var inst_36468 = (0);
var state_36515__$1 = (function (){var statearr_36549 = state_36515;
(statearr_36549[(8)] = inst_36467);

(statearr_36549[(10)] = inst_36466);

(statearr_36549[(11)] = inst_36468);

(statearr_36549[(12)] = inst_36465);

return statearr_36549;
})();
var statearr_36550_38008 = state_36515__$1;
(statearr_36550_38008[(2)] = null);

(statearr_36550_38008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (3))){
var inst_36513 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36515__$1,inst_36513);
} else {
if((state_val_36516 === (12))){
var inst_36501 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
var statearr_36551_38012 = state_36515__$1;
(statearr_36551_38012[(2)] = inst_36501);

(statearr_36551_38012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (2))){
var state_36515__$1 = state_36515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36515__$1,(4),in$);
} else {
if((state_val_36516 === (23))){
var inst_36509 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
var statearr_36553_38017 = state_36515__$1;
(statearr_36553_38017[(2)] = inst_36509);

(statearr_36553_38017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (19))){
var inst_36496 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
var statearr_36554_38018 = state_36515__$1;
(statearr_36554_38018[(2)] = inst_36496);

(statearr_36554_38018[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (11))){
var inst_36465 = (state_36515[(12)]);
var inst_36479 = (state_36515[(7)]);
var inst_36479__$1 = cljs.core.seq(inst_36465);
var state_36515__$1 = (function (){var statearr_36556 = state_36515;
(statearr_36556[(7)] = inst_36479__$1);

return statearr_36556;
})();
if(inst_36479__$1){
var statearr_36557_38020 = state_36515__$1;
(statearr_36557_38020[(1)] = (14));

} else {
var statearr_36558_38021 = state_36515__$1;
(statearr_36558_38021[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (9))){
var inst_36503 = (state_36515[(2)]);
var inst_36504 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36515__$1 = (function (){var statearr_36560 = state_36515;
(statearr_36560[(15)] = inst_36503);

return statearr_36560;
})();
if(cljs.core.truth_(inst_36504)){
var statearr_36561_38022 = state_36515__$1;
(statearr_36561_38022[(1)] = (21));

} else {
var statearr_36562_38024 = state_36515__$1;
(statearr_36562_38024[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (5))){
var inst_36457 = cljs.core.async.close_BANG_(out);
var state_36515__$1 = state_36515;
var statearr_36563_38027 = state_36515__$1;
(statearr_36563_38027[(2)] = inst_36457);

(statearr_36563_38027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (14))){
var inst_36479 = (state_36515[(7)]);
var inst_36481 = cljs.core.chunked_seq_QMARK_(inst_36479);
var state_36515__$1 = state_36515;
if(inst_36481){
var statearr_36565_38030 = state_36515__$1;
(statearr_36565_38030[(1)] = (17));

} else {
var statearr_36566_38031 = state_36515__$1;
(statearr_36566_38031[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (16))){
var inst_36499 = (state_36515[(2)]);
var state_36515__$1 = state_36515;
var statearr_36567_38032 = state_36515__$1;
(statearr_36567_38032[(2)] = inst_36499);

(statearr_36567_38032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36516 === (10))){
var inst_36466 = (state_36515[(10)]);
var inst_36468 = (state_36515[(11)]);
var inst_36473 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36466,inst_36468);
var state_36515__$1 = state_36515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36515__$1,(13),out,inst_36473);
} else {
if((state_val_36516 === (18))){
var inst_36479 = (state_36515[(7)]);
var inst_36490 = cljs.core.first(inst_36479);
var state_36515__$1 = state_36515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36515__$1,(20),out,inst_36490);
} else {
if((state_val_36516 === (8))){
var inst_36467 = (state_36515[(8)]);
var inst_36468 = (state_36515[(11)]);
var inst_36470 = (inst_36468 < inst_36467);
var inst_36471 = inst_36470;
var state_36515__$1 = state_36515;
if(cljs.core.truth_(inst_36471)){
var statearr_36569_38033 = state_36515__$1;
(statearr_36569_38033[(1)] = (10));

} else {
var statearr_36571_38034 = state_36515__$1;
(statearr_36571_38034[(1)] = (11));

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
var statearr_36572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36572[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__);

(statearr_36572[(1)] = (1));

return statearr_36572;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1 = (function (state_36515){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36515);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36574){if((e36574 instanceof Object)){
var ex__34203__auto__ = e36574;
var statearr_36575_38035 = state_36515;
(statearr_36575_38035[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36574;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38036 = state_36515;
state_36515 = G__38036;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__ = function(state_36515){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1.call(this,state_36515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34200__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36576 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36576[(6)] = c__34267__auto__);

return statearr_36576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));

return c__34267__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36580 = arguments.length;
switch (G__36580) {
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
var G__36584 = arguments.length;
switch (G__36584) {
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
var G__36588 = arguments.length;
switch (G__36588) {
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
var c__34267__auto___38043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36614){
var state_val_36615 = (state_36614[(1)]);
if((state_val_36615 === (7))){
var inst_36608 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
var statearr_36617_38044 = state_36614__$1;
(statearr_36617_38044[(2)] = inst_36608);

(statearr_36617_38044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (1))){
var inst_36590 = null;
var state_36614__$1 = (function (){var statearr_36618 = state_36614;
(statearr_36618[(7)] = inst_36590);

return statearr_36618;
})();
var statearr_36619_38049 = state_36614__$1;
(statearr_36619_38049[(2)] = null);

(statearr_36619_38049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (4))){
var inst_36593 = (state_36614[(8)]);
var inst_36593__$1 = (state_36614[(2)]);
var inst_36594 = (inst_36593__$1 == null);
var inst_36595 = cljs.core.not(inst_36594);
var state_36614__$1 = (function (){var statearr_36621 = state_36614;
(statearr_36621[(8)] = inst_36593__$1);

return statearr_36621;
})();
if(inst_36595){
var statearr_36622_38050 = state_36614__$1;
(statearr_36622_38050[(1)] = (5));

} else {
var statearr_36623_38051 = state_36614__$1;
(statearr_36623_38051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (6))){
var state_36614__$1 = state_36614;
var statearr_36624_38052 = state_36614__$1;
(statearr_36624_38052[(2)] = null);

(statearr_36624_38052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (3))){
var inst_36610 = (state_36614[(2)]);
var inst_36611 = cljs.core.async.close_BANG_(out);
var state_36614__$1 = (function (){var statearr_36626 = state_36614;
(statearr_36626[(9)] = inst_36610);

return statearr_36626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36614__$1,inst_36611);
} else {
if((state_val_36615 === (2))){
var state_36614__$1 = state_36614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36614__$1,(4),ch);
} else {
if((state_val_36615 === (11))){
var inst_36593 = (state_36614[(8)]);
var inst_36602 = (state_36614[(2)]);
var inst_36590 = inst_36593;
var state_36614__$1 = (function (){var statearr_36627 = state_36614;
(statearr_36627[(10)] = inst_36602);

(statearr_36627[(7)] = inst_36590);

return statearr_36627;
})();
var statearr_36629_38054 = state_36614__$1;
(statearr_36629_38054[(2)] = null);

(statearr_36629_38054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (9))){
var inst_36593 = (state_36614[(8)]);
var state_36614__$1 = state_36614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36614__$1,(11),out,inst_36593);
} else {
if((state_val_36615 === (5))){
var inst_36593 = (state_36614[(8)]);
var inst_36590 = (state_36614[(7)]);
var inst_36597 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36593,inst_36590);
var state_36614__$1 = state_36614;
if(inst_36597){
var statearr_36631_38055 = state_36614__$1;
(statearr_36631_38055[(1)] = (8));

} else {
var statearr_36633_38056 = state_36614__$1;
(statearr_36633_38056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (10))){
var inst_36605 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
var statearr_36634_38057 = state_36614__$1;
(statearr_36634_38057[(2)] = inst_36605);

(statearr_36634_38057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (8))){
var inst_36590 = (state_36614[(7)]);
var tmp36630 = inst_36590;
var inst_36590__$1 = tmp36630;
var state_36614__$1 = (function (){var statearr_36635 = state_36614;
(statearr_36635[(7)] = inst_36590__$1);

return statearr_36635;
})();
var statearr_36636_38062 = state_36614__$1;
(statearr_36636_38062[(2)] = null);

(statearr_36636_38062[(1)] = (2));


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
var statearr_36638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36638[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36638[(1)] = (1));

return statearr_36638;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36614){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36614);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36639){if((e36639 instanceof Object)){
var ex__34203__auto__ = e36639;
var statearr_36640_38063 = state_36614;
(statearr_36640_38063[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38064 = state_36614;
state_36614 = G__38064;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36642 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36642[(6)] = c__34267__auto___38043);

return statearr_36642;
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
var G__36646 = arguments.length;
switch (G__36646) {
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
var c__34267__auto___38070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36686){
var state_val_36687 = (state_36686[(1)]);
if((state_val_36687 === (7))){
var inst_36681 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36689_38071 = state_36686__$1;
(statearr_36689_38071[(2)] = inst_36681);

(statearr_36689_38071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (1))){
var inst_36648 = (new Array(n));
var inst_36649 = inst_36648;
var inst_36650 = (0);
var state_36686__$1 = (function (){var statearr_36690 = state_36686;
(statearr_36690[(7)] = inst_36649);

(statearr_36690[(8)] = inst_36650);

return statearr_36690;
})();
var statearr_36691_38075 = state_36686__$1;
(statearr_36691_38075[(2)] = null);

(statearr_36691_38075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (4))){
var inst_36653 = (state_36686[(9)]);
var inst_36653__$1 = (state_36686[(2)]);
var inst_36654 = (inst_36653__$1 == null);
var inst_36655 = cljs.core.not(inst_36654);
var state_36686__$1 = (function (){var statearr_36693 = state_36686;
(statearr_36693[(9)] = inst_36653__$1);

return statearr_36693;
})();
if(inst_36655){
var statearr_36694_38076 = state_36686__$1;
(statearr_36694_38076[(1)] = (5));

} else {
var statearr_36695_38077 = state_36686__$1;
(statearr_36695_38077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (15))){
var inst_36675 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36696_38078 = state_36686__$1;
(statearr_36696_38078[(2)] = inst_36675);

(statearr_36696_38078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (13))){
var state_36686__$1 = state_36686;
var statearr_36698_38079 = state_36686__$1;
(statearr_36698_38079[(2)] = null);

(statearr_36698_38079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (6))){
var inst_36650 = (state_36686[(8)]);
var inst_36671 = (inst_36650 > (0));
var state_36686__$1 = state_36686;
if(cljs.core.truth_(inst_36671)){
var statearr_36699_38081 = state_36686__$1;
(statearr_36699_38081[(1)] = (12));

} else {
var statearr_36700_38082 = state_36686__$1;
(statearr_36700_38082[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (3))){
var inst_36683 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36686__$1,inst_36683);
} else {
if((state_val_36687 === (12))){
var inst_36649 = (state_36686[(7)]);
var inst_36673 = cljs.core.vec(inst_36649);
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36686__$1,(15),out,inst_36673);
} else {
if((state_val_36687 === (2))){
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36686__$1,(4),ch);
} else {
if((state_val_36687 === (11))){
var inst_36665 = (state_36686[(2)]);
var inst_36666 = (new Array(n));
var inst_36649 = inst_36666;
var inst_36650 = (0);
var state_36686__$1 = (function (){var statearr_36703 = state_36686;
(statearr_36703[(7)] = inst_36649);

(statearr_36703[(10)] = inst_36665);

(statearr_36703[(8)] = inst_36650);

return statearr_36703;
})();
var statearr_36704_38087 = state_36686__$1;
(statearr_36704_38087[(2)] = null);

(statearr_36704_38087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (9))){
var inst_36649 = (state_36686[(7)]);
var inst_36663 = cljs.core.vec(inst_36649);
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36686__$1,(11),out,inst_36663);
} else {
if((state_val_36687 === (5))){
var inst_36653 = (state_36686[(9)]);
var inst_36649 = (state_36686[(7)]);
var inst_36658 = (state_36686[(11)]);
var inst_36650 = (state_36686[(8)]);
var inst_36657 = (inst_36649[inst_36650] = inst_36653);
var inst_36658__$1 = (inst_36650 + (1));
var inst_36659 = (inst_36658__$1 < n);
var state_36686__$1 = (function (){var statearr_36706 = state_36686;
(statearr_36706[(12)] = inst_36657);

(statearr_36706[(11)] = inst_36658__$1);

return statearr_36706;
})();
if(cljs.core.truth_(inst_36659)){
var statearr_36707_38091 = state_36686__$1;
(statearr_36707_38091[(1)] = (8));

} else {
var statearr_36708_38092 = state_36686__$1;
(statearr_36708_38092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (14))){
var inst_36678 = (state_36686[(2)]);
var inst_36679 = cljs.core.async.close_BANG_(out);
var state_36686__$1 = (function (){var statearr_36710 = state_36686;
(statearr_36710[(13)] = inst_36678);

return statearr_36710;
})();
var statearr_36712_38097 = state_36686__$1;
(statearr_36712_38097[(2)] = inst_36679);

(statearr_36712_38097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (10))){
var inst_36669 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36713_38098 = state_36686__$1;
(statearr_36713_38098[(2)] = inst_36669);

(statearr_36713_38098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (8))){
var inst_36649 = (state_36686[(7)]);
var inst_36658 = (state_36686[(11)]);
var tmp36709 = inst_36649;
var inst_36649__$1 = tmp36709;
var inst_36650 = inst_36658;
var state_36686__$1 = (function (){var statearr_36714 = state_36686;
(statearr_36714[(7)] = inst_36649__$1);

(statearr_36714[(8)] = inst_36650);

return statearr_36714;
})();
var statearr_36716_38099 = state_36686__$1;
(statearr_36716_38099[(2)] = null);

(statearr_36716_38099[(1)] = (2));


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
var statearr_36717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36717[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36717[(1)] = (1));

return statearr_36717;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36686){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36686);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36719){if((e36719 instanceof Object)){
var ex__34203__auto__ = e36719;
var statearr_36720_38105 = state_36686;
(statearr_36720_38105[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36719;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38106 = state_36686;
state_36686 = G__38106;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36721 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36721[(6)] = c__34267__auto___38070);

return statearr_36721;
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
var G__36723 = arguments.length;
switch (G__36723) {
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
var c__34267__auto___38109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34268__auto__ = (function (){var switch__34199__auto__ = (function (state_36766){
var state_val_36767 = (state_36766[(1)]);
if((state_val_36767 === (7))){
var inst_36762 = (state_36766[(2)]);
var state_36766__$1 = state_36766;
var statearr_36769_38111 = state_36766__$1;
(statearr_36769_38111[(2)] = inst_36762);

(statearr_36769_38111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (1))){
var inst_36724 = [];
var inst_36725 = inst_36724;
var inst_36726 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36766__$1 = (function (){var statearr_36770 = state_36766;
(statearr_36770[(7)] = inst_36725);

(statearr_36770[(8)] = inst_36726);

return statearr_36770;
})();
var statearr_36771_38113 = state_36766__$1;
(statearr_36771_38113[(2)] = null);

(statearr_36771_38113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (4))){
var inst_36729 = (state_36766[(9)]);
var inst_36729__$1 = (state_36766[(2)]);
var inst_36730 = (inst_36729__$1 == null);
var inst_36731 = cljs.core.not(inst_36730);
var state_36766__$1 = (function (){var statearr_36773 = state_36766;
(statearr_36773[(9)] = inst_36729__$1);

return statearr_36773;
})();
if(inst_36731){
var statearr_36774_38114 = state_36766__$1;
(statearr_36774_38114[(1)] = (5));

} else {
var statearr_36775_38117 = state_36766__$1;
(statearr_36775_38117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (15))){
var inst_36756 = (state_36766[(2)]);
var state_36766__$1 = state_36766;
var statearr_36776_38118 = state_36766__$1;
(statearr_36776_38118[(2)] = inst_36756);

(statearr_36776_38118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (13))){
var state_36766__$1 = state_36766;
var statearr_36778_38119 = state_36766__$1;
(statearr_36778_38119[(2)] = null);

(statearr_36778_38119[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (6))){
var inst_36725 = (state_36766[(7)]);
var inst_36750 = inst_36725.length;
var inst_36751 = (inst_36750 > (0));
var state_36766__$1 = state_36766;
if(cljs.core.truth_(inst_36751)){
var statearr_36779_38122 = state_36766__$1;
(statearr_36779_38122[(1)] = (12));

} else {
var statearr_36780_38123 = state_36766__$1;
(statearr_36780_38123[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (3))){
var inst_36764 = (state_36766[(2)]);
var state_36766__$1 = state_36766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36766__$1,inst_36764);
} else {
if((state_val_36767 === (12))){
var inst_36725 = (state_36766[(7)]);
var inst_36754 = cljs.core.vec(inst_36725);
var state_36766__$1 = state_36766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36766__$1,(15),out,inst_36754);
} else {
if((state_val_36767 === (2))){
var state_36766__$1 = state_36766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36766__$1,(4),ch);
} else {
if((state_val_36767 === (11))){
var inst_36729 = (state_36766[(9)]);
var inst_36733 = (state_36766[(10)]);
var inst_36743 = (state_36766[(2)]);
var inst_36744 = [];
var inst_36745 = inst_36744.push(inst_36729);
var inst_36725 = inst_36744;
var inst_36726 = inst_36733;
var state_36766__$1 = (function (){var statearr_36783 = state_36766;
(statearr_36783[(11)] = inst_36745);

(statearr_36783[(7)] = inst_36725);

(statearr_36783[(8)] = inst_36726);

(statearr_36783[(12)] = inst_36743);

return statearr_36783;
})();
var statearr_36784_38126 = state_36766__$1;
(statearr_36784_38126[(2)] = null);

(statearr_36784_38126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (9))){
var inst_36725 = (state_36766[(7)]);
var inst_36741 = cljs.core.vec(inst_36725);
var state_36766__$1 = state_36766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36766__$1,(11),out,inst_36741);
} else {
if((state_val_36767 === (5))){
var inst_36729 = (state_36766[(9)]);
var inst_36726 = (state_36766[(8)]);
var inst_36733 = (state_36766[(10)]);
var inst_36733__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36729) : f.call(null,inst_36729));
var inst_36734 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36733__$1,inst_36726);
var inst_36735 = cljs.core.keyword_identical_QMARK_(inst_36726,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36736 = ((inst_36734) || (inst_36735));
var state_36766__$1 = (function (){var statearr_36786 = state_36766;
(statearr_36786[(10)] = inst_36733__$1);

return statearr_36786;
})();
if(cljs.core.truth_(inst_36736)){
var statearr_36787_38127 = state_36766__$1;
(statearr_36787_38127[(1)] = (8));

} else {
var statearr_36788_38129 = state_36766__$1;
(statearr_36788_38129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (14))){
var inst_36759 = (state_36766[(2)]);
var inst_36760 = cljs.core.async.close_BANG_(out);
var state_36766__$1 = (function (){var statearr_36791 = state_36766;
(statearr_36791[(13)] = inst_36759);

return statearr_36791;
})();
var statearr_36792_38132 = state_36766__$1;
(statearr_36792_38132[(2)] = inst_36760);

(statearr_36792_38132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (10))){
var inst_36748 = (state_36766[(2)]);
var state_36766__$1 = state_36766;
var statearr_36793_38133 = state_36766__$1;
(statearr_36793_38133[(2)] = inst_36748);

(statearr_36793_38133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36767 === (8))){
var inst_36725 = (state_36766[(7)]);
var inst_36729 = (state_36766[(9)]);
var inst_36733 = (state_36766[(10)]);
var inst_36738 = inst_36725.push(inst_36729);
var tmp36790 = inst_36725;
var inst_36725__$1 = tmp36790;
var inst_36726 = inst_36733;
var state_36766__$1 = (function (){var statearr_36795 = state_36766;
(statearr_36795[(7)] = inst_36725__$1);

(statearr_36795[(8)] = inst_36726);

(statearr_36795[(14)] = inst_36738);

return statearr_36795;
})();
var statearr_36796_38135 = state_36766__$1;
(statearr_36796_38135[(2)] = null);

(statearr_36796_38135[(1)] = (2));


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
var statearr_36798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36798[(0)] = cljs$core$async$state_machine__34200__auto__);

(statearr_36798[(1)] = (1));

return statearr_36798;
});
var cljs$core$async$state_machine__34200__auto____1 = (function (state_36766){
while(true){
var ret_value__34201__auto__ = (function (){try{while(true){
var result__34202__auto__ = switch__34199__auto__(state_36766);
if(cljs.core.keyword_identical_QMARK_(result__34202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34202__auto__;
}
break;
}
}catch (e36799){if((e36799 instanceof Object)){
var ex__34203__auto__ = e36799;
var statearr_36800_38138 = state_36766;
(statearr_36800_38138[(5)] = ex__34203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36799;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38139 = state_36766;
state_36766 = G__38139;
continue;
} else {
return ret_value__34201__auto__;
}
break;
}
});
cljs$core$async$state_machine__34200__auto__ = function(state_36766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34200__auto____1.call(this,state_36766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34200__auto____0;
cljs$core$async$state_machine__34200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34200__auto____1;
return cljs$core$async$state_machine__34200__auto__;
})()
})();
var state__34269__auto__ = (function (){var statearr_36802 = (f__34268__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34268__auto__.cljs$core$IFn$_invoke$arity$0() : f__34268__auto__.call(null));
(statearr_36802[(6)] = c__34267__auto___38109);

return statearr_36802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34269__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
