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
var val_36849 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36849) : fn1.call(null,val_36849));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36849) : fn1.call(null,val_36849));
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
var n__4666__auto___36855 = n;
var x_36856 = (0);
while(true){
if((x_36856 < n__4666__auto___36855)){
(a[x_36856] = x_36856);

var G__36857 = (x_36856 + (1));
x_36856 = G__36857;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34351 = (function (flag,cb,meta34352){
this.flag = flag;
this.cb = cb;
this.meta34352 = meta34352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34353,meta34352__$1){
var self__ = this;
var _34353__$1 = this;
return (new cljs.core.async.t_cljs$core$async34351(self__.flag,self__.cb,meta34352__$1));
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34353){
var self__ = this;
var _34353__$1 = this;
return self__.meta34352;
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34352","meta34352",58586617,null)], null);
}));

(cljs.core.async.t_cljs$core$async34351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34351");

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34351.
 */
cljs.core.async.__GT_t_cljs$core$async34351 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34351(flag__$1,cb__$1,meta34352){
return (new cljs.core.async.t_cljs$core$async34351(flag__$1,cb__$1,meta34352));
});

}

return (new cljs.core.async.t_cljs$core$async34351(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36868 = (i + (1));
i = G__36868;
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
var len__4789__auto___36870 = arguments.length;
var i__4790__auto___36871 = (0);
while(true){
if((i__4790__auto___36871 < len__4789__auto___36870)){
args__4795__auto__.push((arguments[i__4790__auto___36871]));

var G__36872 = (i__4790__auto___36871 + (1));
i__4790__auto___36871 = G__36872;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34368){
var map__34369 = p__34368;
var map__34369__$1 = (((((!((map__34369 == null))))?(((((map__34369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34369):map__34369);
var opts = map__34369__$1;
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
var G__34381 = arguments.length;
switch (G__34381) {
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
var c__34273__auto___36879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34411){
var state_val_34412 = (state_34411[(1)]);
if((state_val_34412 === (7))){
var inst_34407 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34425_36880 = state_34411__$1;
(statearr_34425_36880[(2)] = inst_34407);

(statearr_34425_36880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (1))){
var state_34411__$1 = state_34411;
var statearr_34426_36882 = state_34411__$1;
(statearr_34426_36882[(2)] = null);

(statearr_34426_36882[(1)] = (2));


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
var statearr_34428_36884 = state_34411__$1;
(statearr_34428_36884[(1)] = (5));

} else {
var statearr_34429_36885 = state_34411__$1;
(statearr_34429_36885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (13))){
var state_34411__$1 = state_34411;
var statearr_34430_36886 = state_34411__$1;
(statearr_34430_36886[(2)] = null);

(statearr_34430_36886[(1)] = (14));


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
var statearr_34431_36889 = state_34411__$1;
(statearr_34431_36889[(2)] = null);

(statearr_34431_36889[(1)] = (2));


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
var statearr_34432_36890 = state_34411__$1;
(statearr_34432_36890[(1)] = (12));

} else {
var statearr_34433_36892 = state_34411__$1;
(statearr_34433_36892[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (9))){
var state_34411__$1 = state_34411;
var statearr_34434_36893 = state_34411__$1;
(statearr_34434_36893[(2)] = null);

(statearr_34434_36893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (5))){
var state_34411__$1 = state_34411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36894 = state_34411__$1;
(statearr_34435_36894[(1)] = (8));

} else {
var statearr_34436_36896 = state_34411__$1;
(statearr_34436_36896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (14))){
var inst_34405 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34437_36897 = state_34411__$1;
(statearr_34437_36897[(2)] = inst_34405);

(statearr_34437_36897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (10))){
var inst_34397 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34438_36898 = state_34411__$1;
(statearr_34438_36898[(2)] = inst_34397);

(statearr_34438_36898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34411__$1 = state_34411;
var statearr_34439_36900 = state_34411__$1;
(statearr_34439_36900[(2)] = inst_34394);

(statearr_34439_36900[(1)] = (10));


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
var statearr_34442_36902 = state_34411;
(statearr_34442_36902[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36904 = state_34411;
state_34411 = G__36904;
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
var state__34275__auto__ = (function (){var statearr_34443 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34443[(6)] = c__34273__auto___36879);

return statearr_34443;
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
var c__34273__auto___36907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34461_36910 = state_34452;
(statearr_34461_36910[(5)] = ex__34210__auto__);


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
var state__34275__auto__ = (function (){var statearr_34462 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34462[(6)] = c__34273__auto___36907);

return statearr_34462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
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
var c__34273__auto___36920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36916,c__34273__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36916,c__34273__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
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
var statearr_34488_36927 = state_34481__$1;
(statearr_34488_36927[(2)] = null);

(statearr_34488_36927[(1)] = (2));


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
var statearr_34491_36930 = state_34481__$1;
(statearr_34491_36930[(2)] = inst_34477);

(statearr_34491_36930[(1)] = (3));


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
});})(__36916,c__34273__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
;
return ((function (__36916,switch__34206__auto__,c__34273__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
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
var statearr_34494_36932 = state_34481;
(statearr_34494_36932[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36934 = state_34481;
state_34481 = G__36934;
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
;})(__36916,switch__34206__auto__,c__34273__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34497 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34497[(6)] = c__34273__auto___36920);

return statearr_34497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36916,c__34273__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
);


break;
case "async":
var c__34273__auto___36936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36916,c__34273__auto___36936,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36916,c__34273__auto___36936,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (state_34515){
var state_val_34516 = (state_34515[(1)]);
if((state_val_34516 === (1))){
var state_34515__$1 = state_34515;
var statearr_34517_36938 = state_34515__$1;
(statearr_34517_36938[(2)] = null);

(statearr_34517_36938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (2))){
var state_34515__$1 = state_34515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34515__$1,(4),jobs);
} else {
if((state_val_34516 === (3))){
var inst_34513 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34515__$1,inst_34513);
} else {
if((state_val_34516 === (4))){
var inst_34503 = (state_34515[(2)]);
var inst_34504 = async(inst_34503);
var state_34515__$1 = state_34515;
if(cljs.core.truth_(inst_34504)){
var statearr_34518_36940 = state_34515__$1;
(statearr_34518_36940[(1)] = (5));

} else {
var statearr_34519_36941 = state_34515__$1;
(statearr_34519_36941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (5))){
var state_34515__$1 = state_34515;
var statearr_34520_36942 = state_34515__$1;
(statearr_34520_36942[(2)] = null);

(statearr_34520_36942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (6))){
var state_34515__$1 = state_34515;
var statearr_34521_36944 = state_34515__$1;
(statearr_34521_36944[(2)] = null);

(statearr_34521_36944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (7))){
var inst_34511 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
var statearr_34523_36945 = state_34515__$1;
(statearr_34523_36945[(2)] = inst_34511);

(statearr_34523_36945[(1)] = (3));


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
});})(__36916,c__34273__auto___36936,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
;
return ((function (__36916,switch__34206__auto__,c__34273__auto___36936,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34524 = [null,null,null,null,null,null,null];
(statearr_34524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34524[(1)] = (1));

return statearr_34524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34515){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34515);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34525){if((e34525 instanceof Object)){
var ex__34210__auto__ = e34525;
var statearr_34526_36948 = state_34515;
(statearr_34526_36948[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36949 = state_34515;
state_34515 = G__36949;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36916,switch__34206__auto__,c__34273__auto___36936,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34527 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34527[(6)] = c__34273__auto___36936);

return statearr_34527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36916,c__34273__auto___36936,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34468_36918__$1)].join('')));

}

var G__36951 = (__36916 + (1));
__36916 = G__36951;
continue;
} else {
}
break;
}

var c__34273__auto___36952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34552 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34558_36953 = state_34556__$1;
(statearr_34558_36953[(2)] = inst_34552);

(statearr_34558_36953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34559_36954 = state_34556__$1;
(statearr_34559_36954[(2)] = null);

(statearr_34559_36954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (4))){
var inst_34534 = (state_34556[(7)]);
var inst_34534__$1 = (state_34556[(2)]);
var inst_34535 = (inst_34534__$1 == null);
var state_34556__$1 = (function (){var statearr_34560 = state_34556;
(statearr_34560[(7)] = inst_34534__$1);

return statearr_34560;
})();
if(cljs.core.truth_(inst_34535)){
var statearr_34561_36962 = state_34556__$1;
(statearr_34561_36962[(1)] = (5));

} else {
var statearr_34562_36963 = state_34556__$1;
(statearr_34562_36963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (6))){
var inst_34534 = (state_34556[(7)]);
var inst_34539 = (state_34556[(8)]);
var inst_34539__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34544 = [inst_34534,inst_34539__$1];
var inst_34545 = (new cljs.core.PersistentVector(null,2,(5),inst_34543,inst_34544,null));
var state_34556__$1 = (function (){var statearr_34566 = state_34556;
(statearr_34566[(8)] = inst_34539__$1);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(8),jobs,inst_34545);
} else {
if((state_val_34557 === (3))){
var inst_34554 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34556__$1,inst_34554);
} else {
if((state_val_34557 === (2))){
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34556__$1,(4),from);
} else {
if((state_val_34557 === (9))){
var inst_34549 = (state_34556[(2)]);
var state_34556__$1 = (function (){var statearr_34567 = state_34556;
(statearr_34567[(9)] = inst_34549);

return statearr_34567;
})();
var statearr_34568_36965 = state_34556__$1;
(statearr_34568_36965[(2)] = null);

(statearr_34568_36965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34537 = cljs.core.async.close_BANG_(jobs);
var state_34556__$1 = state_34556;
var statearr_34569_36968 = state_34556__$1;
(statearr_34569_36968[(2)] = inst_34537);

(statearr_34569_36968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (8))){
var inst_34539 = (state_34556[(8)]);
var inst_34547 = (state_34556[(2)]);
var state_34556__$1 = (function (){var statearr_34570 = state_34556;
(statearr_34570[(10)] = inst_34547);

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
var statearr_34573_36972 = state_34556;
(statearr_34573_36972[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36975 = state_34556;
state_34556 = G__36975;
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
var state__34275__auto__ = (function (){var statearr_34574 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34574[(6)] = c__34273__auto___36952);

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
var statearr_34618_36983 = state_34612__$1;
(statearr_34618_36983[(1)] = (5));

} else {
var statearr_34619_36984 = state_34612__$1;
(statearr_34619_36984[(1)] = (6));

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
var statearr_34620_36987 = state_34612__$1;
(statearr_34620_36987[(2)] = inst_34603);

(statearr_34620_36987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36991 = state_34612__$1;
(statearr_34622_36991[(2)] = null);

(statearr_34622_36991[(1)] = (2));


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
var statearr_34623_36993 = state_34612__$1;
(statearr_34623_36993[(1)] = (19));

} else {
var statearr_34624_36994 = state_34612__$1;
(statearr_34624_36994[(1)] = (20));

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
var statearr_34625_36999 = state_34612__$1;
(statearr_34625_36999[(2)] = null);

(statearr_34625_36999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_37000 = state_34612__$1;
(statearr_34627_37000[(2)] = null);

(statearr_34627_37000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_37006 = state_34612__$1;
(statearr_34628_37006[(2)] = null);

(statearr_34628_37006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_37007 = state_34612__$1;
(statearr_34629_37007[(1)] = (8));

} else {
var statearr_34630_37010 = state_34612__$1;
(statearr_34630_37010[(1)] = (9));

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
var statearr_34632_37013 = state_34612__$1;
(statearr_34632_37013[(1)] = (15));

} else {
var statearr_34633_37015 = state_34612__$1;
(statearr_34633_37015[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37018 = state_34612__$1;
(statearr_34634_37018[(2)] = false);

(statearr_34634_37018[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37023 = state_34612__$1;
(statearr_34635_37023[(2)] = inst_34584);

(statearr_34635_37023[(1)] = (7));


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
var statearr_34637_37031 = state_34612__$1;
(statearr_34637_37031[(2)] = inst_34581);

(statearr_34637_37031[(1)] = (10));


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
var statearr_34640_37039 = state_34612;
(statearr_34640_37039[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37042 = state_34612;
state_34612 = G__37042;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34676){
var state_val_34680 = (state_34676[(1)]);
if((state_val_34680 === (7))){
var inst_34672 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
var statearr_34683_37077 = state_34676__$1;
(statearr_34683_37077[(2)] = inst_34672);

(statearr_34683_37077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (1))){
var state_34676__$1 = state_34676;
var statearr_34684_37084 = state_34676__$1;
(statearr_34684_37084[(2)] = null);

(statearr_34684_37084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (4))){
var inst_34653 = (state_34676[(7)]);
var inst_34653__$1 = (state_34676[(2)]);
var inst_34654 = (inst_34653__$1 == null);
var state_34676__$1 = (function (){var statearr_34686 = state_34676;
(statearr_34686[(7)] = inst_34653__$1);

return statearr_34686;
})();
if(cljs.core.truth_(inst_34654)){
var statearr_34687_37087 = state_34676__$1;
(statearr_34687_37087[(1)] = (5));

} else {
var statearr_34688_37088 = state_34676__$1;
(statearr_34688_37088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (13))){
var state_34676__$1 = state_34676;
var statearr_34689_37091 = state_34676__$1;
(statearr_34689_37091[(2)] = null);

(statearr_34689_37091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (6))){
var inst_34653 = (state_34676[(7)]);
var inst_34659 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34653) : p.call(null,inst_34653));
var state_34676__$1 = state_34676;
if(cljs.core.truth_(inst_34659)){
var statearr_34690_37093 = state_34676__$1;
(statearr_34690_37093[(1)] = (9));

} else {
var statearr_34693_37094 = state_34676__$1;
(statearr_34693_37094[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (3))){
var inst_34674 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34676__$1,inst_34674);
} else {
if((state_val_34680 === (12))){
var state_34676__$1 = state_34676;
var statearr_34694_37097 = state_34676__$1;
(statearr_34694_37097[(2)] = null);

(statearr_34694_37097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (2))){
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34676__$1,(4),ch);
} else {
if((state_val_34680 === (11))){
var inst_34653 = (state_34676[(7)]);
var inst_34663 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34676__$1,(8),inst_34663,inst_34653);
} else {
if((state_val_34680 === (9))){
var state_34676__$1 = state_34676;
var statearr_34695_37103 = state_34676__$1;
(statearr_34695_37103[(2)] = tc);

(statearr_34695_37103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (5))){
var inst_34656 = cljs.core.async.close_BANG_(tc);
var inst_34657 = cljs.core.async.close_BANG_(fc);
var state_34676__$1 = (function (){var statearr_34696 = state_34676;
(statearr_34696[(8)] = inst_34656);

return statearr_34696;
})();
var statearr_34697_37104 = state_34676__$1;
(statearr_34697_37104[(2)] = inst_34657);

(statearr_34697_37104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (14))){
var inst_34670 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
var statearr_34698_37110 = state_34676__$1;
(statearr_34698_37110[(2)] = inst_34670);

(statearr_34698_37110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (10))){
var state_34676__$1 = state_34676;
var statearr_34700_37114 = state_34676__$1;
(statearr_34700_37114[(2)] = fc);

(statearr_34700_37114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (8))){
var inst_34665 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
if(cljs.core.truth_(inst_34665)){
var statearr_34701_37115 = state_34676__$1;
(statearr_34701_37115[(1)] = (12));

} else {
var statearr_34702_37117 = state_34676__$1;
(statearr_34702_37117[(1)] = (13));

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
var statearr_34704 = [null,null,null,null,null,null,null,null,null];
(statearr_34704[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34704[(1)] = (1));

return statearr_34704;
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
}catch (e34705){if((e34705 instanceof Object)){
var ex__34210__auto__ = e34705;
var statearr_34706_37123 = state_34676;
(statearr_34706_37123[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37128 = state_34676;
state_34676 = G__37128;
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
var state__34275__auto__ = (function (){var statearr_34709 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34709[(6)] = c__34273__auto___37076);

return statearr_34709;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34734){
var state_val_34735 = (state_34734[(1)]);
if((state_val_34735 === (7))){
var inst_34730 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34736_37131 = state_34734__$1;
(statearr_34736_37131[(2)] = inst_34730);

(statearr_34736_37131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (1))){
var inst_34713 = init;
var state_34734__$1 = (function (){var statearr_34737 = state_34734;
(statearr_34737[(7)] = inst_34713);

return statearr_34737;
})();
var statearr_34738_37134 = state_34734__$1;
(statearr_34738_37134[(2)] = null);

(statearr_34738_37134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (4))){
var inst_34716 = (state_34734[(8)]);
var inst_34716__$1 = (state_34734[(2)]);
var inst_34717 = (inst_34716__$1 == null);
var state_34734__$1 = (function (){var statearr_34739 = state_34734;
(statearr_34739[(8)] = inst_34716__$1);

return statearr_34739;
})();
if(cljs.core.truth_(inst_34717)){
var statearr_34740_37136 = state_34734__$1;
(statearr_34740_37136[(1)] = (5));

} else {
var statearr_34741_37139 = state_34734__$1;
(statearr_34741_37139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (6))){
var inst_34713 = (state_34734[(7)]);
var inst_34716 = (state_34734[(8)]);
var inst_34720 = (state_34734[(9)]);
var inst_34720__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34713,inst_34716) : f.call(null,inst_34713,inst_34716));
var inst_34721 = cljs.core.reduced_QMARK_(inst_34720__$1);
var state_34734__$1 = (function (){var statearr_34745 = state_34734;
(statearr_34745[(9)] = inst_34720__$1);

return statearr_34745;
})();
if(inst_34721){
var statearr_34746_37148 = state_34734__$1;
(statearr_34746_37148[(1)] = (8));

} else {
var statearr_34747_37149 = state_34734__$1;
(statearr_34747_37149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (3))){
var inst_34732 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34734__$1,inst_34732);
} else {
if((state_val_34735 === (2))){
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34734__$1,(4),ch);
} else {
if((state_val_34735 === (9))){
var inst_34720 = (state_34734[(9)]);
var inst_34713 = inst_34720;
var state_34734__$1 = (function (){var statearr_34751 = state_34734;
(statearr_34751[(7)] = inst_34713);

return statearr_34751;
})();
var statearr_34752_37150 = state_34734__$1;
(statearr_34752_37150[(2)] = null);

(statearr_34752_37150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (5))){
var inst_34713 = (state_34734[(7)]);
var state_34734__$1 = state_34734;
var statearr_34753_37151 = state_34734__$1;
(statearr_34753_37151[(2)] = inst_34713);

(statearr_34753_37151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (10))){
var inst_34727 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34754_37158 = state_34734__$1;
(statearr_34754_37158[(2)] = inst_34727);

(statearr_34754_37158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (8))){
var inst_34720 = (state_34734[(9)]);
var inst_34723 = cljs.core.deref(inst_34720);
var state_34734__$1 = state_34734;
var statearr_34755_37159 = state_34734__$1;
(statearr_34755_37159[(2)] = inst_34723);

(statearr_34755_37159[(1)] = (10));


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
var statearr_34756 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34756[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34756[(1)] = (1));

return statearr_34756;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34734){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34734);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34760){if((e34760 instanceof Object)){
var ex__34210__auto__ = e34760;
var statearr_34761_37164 = state_34734;
(statearr_34761_37164[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37169 = state_34734;
state_34734 = G__37169;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34734){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34762 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34762[(6)] = c__34273__auto__);

return statearr_34762;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34768){
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
var statearr_34772_37187 = state_34768;
(statearr_34772_37187[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37190 = state_34768;
state_34768 = G__37190;
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
var state__34275__auto__ = (function (){var statearr_34773 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34773[(6)] = c__34273__auto__);

return statearr_34773;
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
var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34800){
var state_val_34801 = (state_34800[(1)]);
if((state_val_34801 === (7))){
var inst_34782 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34805_37207 = state_34800__$1;
(statearr_34805_37207[(2)] = inst_34782);

(statearr_34805_37207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34800__$1 = (function (){var statearr_34806 = state_34800;
(statearr_34806[(7)] = inst_34777);

return statearr_34806;
})();
var statearr_34807_37210 = state_34800__$1;
(statearr_34807_37210[(2)] = null);

(statearr_34807_37210[(1)] = (2));


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
var statearr_34811_37212 = state_34800__$1;
(statearr_34811_37212[(2)] = inst_34794);

(statearr_34811_37212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var inst_34785 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34785)){
var statearr_34813_37213 = state_34800__$1;
(statearr_34813_37213[(1)] = (8));

} else {
var statearr_34814_37215 = state_34800__$1;
(statearr_34814_37215[(1)] = (9));

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
var statearr_34815_37217 = state_34800__$1;
(statearr_34815_37217[(2)] = null);

(statearr_34815_37217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34777)){
var statearr_34816_37222 = state_34800__$1;
(statearr_34816_37222[(1)] = (4));

} else {
var statearr_34817_37223 = state_34800__$1;
(statearr_34817_37223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34800__$1 = state_34800;
var statearr_34818_37225 = state_34800__$1;
(statearr_34818_37225[(2)] = inst_34791);

(statearr_34818_37225[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var state_34800__$1 = state_34800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34819_37226 = state_34800__$1;
(statearr_34819_37226[(1)] = (11));

} else {
var statearr_34820_37227 = state_34800__$1;
(statearr_34820_37227[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
var statearr_34822_37232 = state_34800__$1;
(statearr_34822_37232[(2)] = inst_34777);

(statearr_34822_37232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34823_37233 = state_34800__$1;
(statearr_34823_37233[(2)] = inst_34796);

(statearr_34823_37233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (8))){
var inst_34777 = (state_34800[(7)]);
var inst_34787 = cljs.core.next(inst_34777);
var inst_34777__$1 = inst_34787;
var state_34800__$1 = (function (){var statearr_34826 = state_34800;
(statearr_34826[(7)] = inst_34777__$1);

return statearr_34826;
})();
var statearr_34827_37236 = state_34800__$1;
(statearr_34827_37236[(2)] = null);

(statearr_34827_37236[(1)] = (2));


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
var statearr_34831 = [null,null,null,null,null,null,null,null];
(statearr_34831[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34831[(1)] = (1));

return statearr_34831;
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
}catch (e34832){if((e34832 instanceof Object)){
var ex__34210__auto__ = e34832;
var statearr_34833_37244 = state_34800;
(statearr_34833_37244[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37248 = state_34800;
state_34800 = G__37248;
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
var state__34275__auto__ = (function (){var statearr_34834 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34834[(6)] = c__34273__auto__);

return statearr_34834;
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
var c__34273__auto___37293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34984){
var state_val_34985 = (state_34984[(1)]);
if((state_val_34985 === (7))){
var inst_34980 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_34986_37296 = state_34984__$1;
(statearr_34986_37296[(2)] = inst_34980);

(statearr_34986_37296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (20))){
var inst_34877 = (state_34984[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34984__$1 = (function (){var statearr_34989 = state_34984;
(statearr_34989[(8)] = inst_34890);

return statearr_34989;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34990_37302 = state_34984__$1;
(statearr_34990_37302[(1)] = (22));

} else {
var statearr_34992_37305 = state_34984__$1;
(statearr_34992_37305[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (27))){
var inst_34846 = (state_34984[(9)]);
var inst_34926 = (state_34984[(10)]);
var inst_34919 = (state_34984[(11)]);
var inst_34921 = (state_34984[(12)]);
var inst_34926__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34919,inst_34921);
var inst_34927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34926__$1,inst_34846,done);
var state_34984__$1 = (function (){var statearr_34996 = state_34984;
(statearr_34996[(10)] = inst_34926__$1);

return statearr_34996;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34997_37314 = state_34984__$1;
(statearr_34997_37314[(1)] = (30));

} else {
var statearr_34998_37315 = state_34984__$1;
(statearr_34998_37315[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (1))){
var state_34984__$1 = state_34984;
var statearr_34999_37317 = state_34984__$1;
(statearr_34999_37317[(2)] = null);

(statearr_34999_37317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (24))){
var inst_34877 = (state_34984[(7)]);
var inst_34896 = (state_34984[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35000 = state_34984;
(statearr_35000[(13)] = inst_34857);

(statearr_35000[(14)] = inst_34856);

(statearr_35000[(15)] = inst_34858);

(statearr_35000[(16)] = inst_34896);

(statearr_35000[(17)] = inst_34855);

return statearr_35000;
})();
var statearr_35001_37326 = state_34984__$1;
(statearr_35001_37326[(2)] = null);

(statearr_35001_37326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (39))){
var state_34984__$1 = state_34984;
var statearr_35007_37329 = state_34984__$1;
(statearr_35007_37329[(2)] = null);

(statearr_35007_37329[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (4))){
var inst_34846 = (state_34984[(9)]);
var inst_34846__$1 = (state_34984[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34984__$1 = (function (){var statearr_35010 = state_34984;
(statearr_35010[(9)] = inst_34846__$1);

return statearr_35010;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35011_37333 = state_34984__$1;
(statearr_35011_37333[(1)] = (5));

} else {
var statearr_35013_37334 = state_34984__$1;
(statearr_35013_37334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (15))){
var inst_34857 = (state_34984[(13)]);
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(15)]);
var inst_34855 = (state_34984[(17)]);
var inst_34873 = (state_34984[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35002 = inst_34857;
var tmp35003 = inst_34856;
var tmp35004 = inst_34855;
var inst_34855__$1 = tmp35004;
var inst_34856__$1 = tmp35003;
var inst_34857__$1 = tmp35002;
var inst_34858__$1 = inst_34874;
var state_34984__$1 = (function (){var statearr_35015 = state_34984;
(statearr_35015[(18)] = inst_34873);

(statearr_35015[(13)] = inst_34857__$1);

(statearr_35015[(14)] = inst_34856__$1);

(statearr_35015[(15)] = inst_34858__$1);

(statearr_35015[(17)] = inst_34855__$1);

return statearr_35015;
})();
var statearr_35016_37347 = state_34984__$1;
(statearr_35016_37347[(2)] = null);

(statearr_35016_37347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (21))){
var inst_34900 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35020_37349 = state_34984__$1;
(statearr_35020_37349[(2)] = inst_34900);

(statearr_35020_37349[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (31))){
var inst_34926 = (state_34984[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34984__$1 = (function (){var statearr_35021 = state_34984;
(statearr_35021[(19)] = inst_34930);

return statearr_35021;
})();
var statearr_35022_37353 = state_34984__$1;
(statearr_35022_37353[(2)] = inst_34931);

(statearr_35022_37353[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (32))){
var inst_34918 = (state_34984[(20)]);
var inst_34919 = (state_34984[(11)]);
var inst_34920 = (state_34984[(21)]);
var inst_34921 = (state_34984[(12)]);
var inst_34933 = (state_34984[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp35017 = inst_34918;
var tmp35018 = inst_34919;
var tmp35019 = inst_34920;
var inst_34918__$1 = tmp35017;
var inst_34919__$1 = tmp35018;
var inst_34920__$1 = tmp35019;
var inst_34921__$1 = inst_34934;
var state_34984__$1 = (function (){var statearr_35025 = state_34984;
(statearr_35025[(20)] = inst_34918__$1);

(statearr_35025[(22)] = inst_34933);

(statearr_35025[(11)] = inst_34919__$1);

(statearr_35025[(21)] = inst_34920__$1);

(statearr_35025[(12)] = inst_34921__$1);

return statearr_35025;
})();
var statearr_35029_37361 = state_34984__$1;
(statearr_35029_37361[(2)] = null);

(statearr_35029_37361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (40))){
var inst_34948 = (state_34984[(23)]);
var inst_34953 = done(null);
var inst_34954 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34948);
var state_34984__$1 = (function (){var statearr_35031 = state_34984;
(statearr_35031[(24)] = inst_34953);

return statearr_35031;
})();
var statearr_35032_37364 = state_34984__$1;
(statearr_35032_37364[(2)] = inst_34954);

(statearr_35032_37364[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (33))){
var inst_34937 = (state_34984[(25)]);
var inst_34940 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34984__$1 = state_34984;
if(inst_34940){
var statearr_35033_37370 = state_34984__$1;
(statearr_35033_37370[(1)] = (36));

} else {
var statearr_35035_37372 = state_34984__$1;
(statearr_35035_37372[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (13))){
var inst_34867 = (state_34984[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34984__$1 = state_34984;
var statearr_35039_37374 = state_34984__$1;
(statearr_35039_37374[(2)] = inst_34870);

(statearr_35039_37374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (22))){
var inst_34890 = (state_34984[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34984__$1 = state_34984;
var statearr_35044_37376 = state_34984__$1;
(statearr_35044_37376[(2)] = inst_34893);

(statearr_35044_37376[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (36))){
var inst_34937 = (state_34984[(25)]);
var inst_34943 = cljs.core.chunk_first(inst_34937);
var inst_34944 = cljs.core.chunk_rest(inst_34937);
var inst_34945 = cljs.core.count(inst_34943);
var inst_34918 = inst_34944;
var inst_34919 = inst_34943;
var inst_34920 = inst_34945;
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35056 = state_34984;
(statearr_35056[(20)] = inst_34918);

(statearr_35056[(11)] = inst_34919);

(statearr_35056[(21)] = inst_34920);

(statearr_35056[(12)] = inst_34921);

return statearr_35056;
})();
var statearr_35057_37382 = state_34984__$1;
(statearr_35057_37382[(2)] = null);

(statearr_35057_37382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (41))){
var inst_34937 = (state_34984[(25)]);
var inst_34956 = (state_34984[(2)]);
var inst_34957 = cljs.core.next(inst_34937);
var inst_34918 = inst_34957;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35062 = state_34984;
(statearr_35062[(20)] = inst_34918);

(statearr_35062[(27)] = inst_34956);

(statearr_35062[(11)] = inst_34919);

(statearr_35062[(21)] = inst_34920);

(statearr_35062[(12)] = inst_34921);

return statearr_35062;
})();
var statearr_35063_37389 = state_34984__$1;
(statearr_35063_37389[(2)] = null);

(statearr_35063_37389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (43))){
var state_34984__$1 = state_34984;
var statearr_35065_37392 = state_34984__$1;
(statearr_35065_37392[(2)] = null);

(statearr_35065_37392[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (29))){
var inst_34966 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35069_37393 = state_34984__$1;
(statearr_35069_37393[(2)] = inst_34966);

(statearr_35069_37393[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (44))){
var inst_34976 = (state_34984[(2)]);
var state_34984__$1 = (function (){var statearr_35075 = state_34984;
(statearr_35075[(28)] = inst_34976);

return statearr_35075;
})();
var statearr_35076_37396 = state_34984__$1;
(statearr_35076_37396[(2)] = null);

(statearr_35076_37396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (6))){
var inst_34910 = (state_34984[(29)]);
var inst_34909 = cljs.core.deref(cs);
var inst_34910__$1 = cljs.core.keys(inst_34909);
var inst_34911 = cljs.core.count(inst_34910__$1);
var inst_34912 = cljs.core.reset_BANG_(dctr,inst_34911);
var inst_34917 = cljs.core.seq(inst_34910__$1);
var inst_34918 = inst_34917;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35087 = state_34984;
(statearr_35087[(20)] = inst_34918);

(statearr_35087[(29)] = inst_34910__$1);

(statearr_35087[(11)] = inst_34919);

(statearr_35087[(21)] = inst_34920);

(statearr_35087[(12)] = inst_34921);

(statearr_35087[(30)] = inst_34912);

return statearr_35087;
})();
var statearr_35091_37404 = state_34984__$1;
(statearr_35091_37404[(2)] = null);

(statearr_35091_37404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (28))){
var inst_34918 = (state_34984[(20)]);
var inst_34937 = (state_34984[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34984__$1 = (function (){var statearr_35097 = state_34984;
(statearr_35097[(25)] = inst_34937__$1);

return statearr_35097;
})();
if(inst_34937__$1){
var statearr_35100_37406 = state_34984__$1;
(statearr_35100_37406[(1)] = (33));

} else {
var statearr_35103_37407 = state_34984__$1;
(statearr_35103_37407[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (25))){
var inst_34920 = (state_34984[(21)]);
var inst_34921 = (state_34984[(12)]);
var inst_34923 = (inst_34921 < inst_34920);
var inst_34924 = inst_34923;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34924)){
var statearr_35109_37411 = state_34984__$1;
(statearr_35109_37411[(1)] = (27));

} else {
var statearr_35112_37413 = state_34984__$1;
(statearr_35112_37413[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (34))){
var state_34984__$1 = state_34984;
var statearr_35114_37414 = state_34984__$1;
(statearr_35114_37414[(2)] = null);

(statearr_35114_37414[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (17))){
var state_34984__$1 = state_34984;
var statearr_35115_37415 = state_34984__$1;
(statearr_35115_37415[(2)] = null);

(statearr_35115_37415[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (3))){
var inst_34982 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34984__$1,inst_34982);
} else {
if((state_val_34985 === (12))){
var inst_34905 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35123_37419 = state_34984__$1;
(statearr_35123_37419[(2)] = inst_34905);

(statearr_35123_37419[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (2))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(4),ch);
} else {
if((state_val_34985 === (23))){
var state_34984__$1 = state_34984;
var statearr_35130_37422 = state_34984__$1;
(statearr_35130_37422[(2)] = null);

(statearr_35130_37422[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (35))){
var inst_34964 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35137_37424 = state_34984__$1;
(statearr_35137_37424[(2)] = inst_34964);

(statearr_35137_37424[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (19))){
var inst_34877 = (state_34984[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35144 = state_34984;
(statearr_35144[(13)] = inst_34857);

(statearr_35144[(14)] = inst_34856);

(statearr_35144[(15)] = inst_34858);

(statearr_35144[(17)] = inst_34855);

return statearr_35144;
})();
var statearr_35149_37429 = state_34984__$1;
(statearr_35149_37429[(2)] = null);

(statearr_35149_37429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (11))){
var inst_34855 = (state_34984[(17)]);
var inst_34877 = (state_34984[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34984__$1 = (function (){var statearr_35157 = state_34984;
(statearr_35157[(7)] = inst_34877__$1);

return statearr_35157;
})();
if(inst_34877__$1){
var statearr_35160_37435 = state_34984__$1;
(statearr_35160_37435[(1)] = (16));

} else {
var statearr_35162_37436 = state_34984__$1;
(statearr_35162_37436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (9))){
var inst_34907 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35163_37443 = state_34984__$1;
(statearr_35163_37443[(2)] = inst_34907);

(statearr_35163_37443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35164 = state_34984;
(statearr_35164[(13)] = inst_34857);

(statearr_35164[(14)] = inst_34856);

(statearr_35164[(15)] = inst_34858);

(statearr_35164[(17)] = inst_34855);

return statearr_35164;
})();
var statearr_35165_37447 = state_34984__$1;
(statearr_35165_37447[(2)] = null);

(statearr_35165_37447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (14))){
var state_34984__$1 = state_34984;
var statearr_35166_37449 = state_34984__$1;
(statearr_35166_37449[(2)] = null);

(statearr_35166_37449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (45))){
var inst_34973 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35169_37454 = state_34984__$1;
(statearr_35169_37454[(2)] = inst_34973);

(statearr_35169_37454[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (26))){
var inst_34910 = (state_34984[(29)]);
var inst_34968 = (state_34984[(2)]);
var inst_34969 = cljs.core.seq(inst_34910);
var state_34984__$1 = (function (){var statearr_35170 = state_34984;
(statearr_35170[(31)] = inst_34968);

return statearr_35170;
})();
if(inst_34969){
var statearr_35171_37462 = state_34984__$1;
(statearr_35171_37462[(1)] = (42));

} else {
var statearr_35172_37464 = state_34984__$1;
(statearr_35172_37464[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (16))){
var inst_34877 = (state_34984[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34984__$1 = state_34984;
if(inst_34879){
var statearr_35175_37466 = state_34984__$1;
(statearr_35175_37466[(1)] = (19));

} else {
var statearr_35184_37467 = state_34984__$1;
(statearr_35184_37467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (38))){
var inst_34960 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35200_37470 = state_34984__$1;
(statearr_35200_37470[(2)] = inst_34960);

(statearr_35200_37470[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (30))){
var state_34984__$1 = state_34984;
var statearr_35201_37474 = state_34984__$1;
(statearr_35201_37474[(2)] = null);

(statearr_35201_37474[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (10))){
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34984__$1 = (function (){var statearr_35204 = state_34984;
(statearr_35204[(26)] = inst_34867);

return statearr_35204;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35207_37483 = state_34984__$1;
(statearr_35207_37483[(1)] = (13));

} else {
var statearr_35208_37485 = state_34984__$1;
(statearr_35208_37485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (18))){
var inst_34903 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35209_37486 = state_34984__$1;
(statearr_35209_37486[(2)] = inst_34903);

(statearr_35209_37486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (42))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(45),dchan);
} else {
if((state_val_34985 === (37))){
var inst_34846 = (state_34984[(9)]);
var inst_34937 = (state_34984[(25)]);
var inst_34948 = (state_34984[(23)]);
var inst_34948__$1 = cljs.core.first(inst_34937);
var inst_34949 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34948__$1,inst_34846,done);
var state_34984__$1 = (function (){var statearr_35216 = state_34984;
(statearr_35216[(23)] = inst_34948__$1);

return statearr_35216;
})();
if(cljs.core.truth_(inst_34949)){
var statearr_35219_37495 = state_34984__$1;
(statearr_35219_37495[(1)] = (39));

} else {
var statearr_35221_37496 = state_34984__$1;
(statearr_35221_37496[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (8))){
var inst_34857 = (state_34984[(13)]);
var inst_34858 = (state_34984[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34861)){
var statearr_35227_37503 = state_34984__$1;
(statearr_35227_37503[(1)] = (10));

} else {
var statearr_35228_37505 = state_34984__$1;
(statearr_35228_37505[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34984){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34984);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35249){if((e35249 instanceof Object)){
var ex__34210__auto__ = e35249;
var statearr_35252_37514 = state_34984;
(statearr_35252_37514[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35249;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37516 = state_34984;
state_34984 = G__37516;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34984){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35259 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35259[(6)] = c__34273__auto___37293);

return statearr_35259;
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
var G__35271 = arguments.length;
switch (G__35271) {
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
var len__4789__auto___37577 = arguments.length;
var i__4790__auto___37578 = (0);
while(true){
if((i__4790__auto___37578 < len__4789__auto___37577)){
args__4795__auto__.push((arguments[i__4790__auto___37578]));

var G__37580 = (i__4790__auto___37578 + (1));
i__4790__auto___37578 = G__37580;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35365){
var map__35368 = p__35365;
var map__35368__$1 = (((((!((map__35368 == null))))?(((((map__35368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35368):map__35368);
var opts = map__35368__$1;
var statearr_35375_37592 = state;
(statearr_35375_37592[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35376_37594 = state;
(statearr_35376_37594[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35381_37596 = state;
(statearr_35381_37596[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35361){
var G__35362 = cljs.core.first(seq35361);
var seq35361__$1 = cljs.core.next(seq35361);
var G__35363 = cljs.core.first(seq35361__$1);
var seq35361__$2 = cljs.core.next(seq35361__$1);
var G__35364 = cljs.core.first(seq35361__$2);
var seq35361__$3 = cljs.core.next(seq35361__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35362,G__35363,G__35364,seq35361__$3);
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
var c__34273__auto___37661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35585){
var state_val_35586 = (state_35585[(1)]);
if((state_val_35586 === (7))){
var inst_35476 = (state_35585[(2)]);
var state_35585__$1 = state_35585;
var statearr_35597_37662 = state_35585__$1;
(statearr_35597_37662[(2)] = inst_35476);

(statearr_35597_37662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (20))){
var inst_35490 = (state_35585[(7)]);
var state_35585__$1 = state_35585;
var statearr_35603_37664 = state_35585__$1;
(statearr_35603_37664[(2)] = inst_35490);

(statearr_35603_37664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (27))){
var state_35585__$1 = state_35585;
var statearr_35606_37666 = state_35585__$1;
(statearr_35606_37666[(2)] = null);

(statearr_35606_37666[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (1))){
var inst_35460 = (state_35585[(8)]);
var inst_35460__$1 = calc_state();
var inst_35463 = (inst_35460__$1 == null);
var inst_35464 = cljs.core.not(inst_35463);
var state_35585__$1 = (function (){var statearr_35612 = state_35585;
(statearr_35612[(8)] = inst_35460__$1);

return statearr_35612;
})();
if(inst_35464){
var statearr_35617_37669 = state_35585__$1;
(statearr_35617_37669[(1)] = (2));

} else {
var statearr_35618_37670 = state_35585__$1;
(statearr_35618_37670[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (24))){
var inst_35557 = (state_35585[(9)]);
var inst_35539 = (state_35585[(10)]);
var inst_35522 = (state_35585[(11)]);
var inst_35557__$1 = (inst_35522.cljs$core$IFn$_invoke$arity$1 ? inst_35522.cljs$core$IFn$_invoke$arity$1(inst_35539) : inst_35522.call(null,inst_35539));
var state_35585__$1 = (function (){var statearr_35624 = state_35585;
(statearr_35624[(9)] = inst_35557__$1);

return statearr_35624;
})();
if(cljs.core.truth_(inst_35557__$1)){
var statearr_35626_37671 = state_35585__$1;
(statearr_35626_37671[(1)] = (29));

} else {
var statearr_35630_37676 = state_35585__$1;
(statearr_35630_37676[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (4))){
var inst_35479 = (state_35585[(2)]);
var state_35585__$1 = state_35585;
if(cljs.core.truth_(inst_35479)){
var statearr_35633_37677 = state_35585__$1;
(statearr_35633_37677[(1)] = (8));

} else {
var statearr_35635_37678 = state_35585__$1;
(statearr_35635_37678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (15))){
var inst_35515 = (state_35585[(2)]);
var state_35585__$1 = state_35585;
if(cljs.core.truth_(inst_35515)){
var statearr_35640_37682 = state_35585__$1;
(statearr_35640_37682[(1)] = (19));

} else {
var statearr_35642_37683 = state_35585__$1;
(statearr_35642_37683[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (21))){
var inst_35520 = (state_35585[(12)]);
var inst_35520__$1 = (state_35585[(2)]);
var inst_35522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35520__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35520__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35520__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35585__$1 = (function (){var statearr_35647 = state_35585;
(statearr_35647[(12)] = inst_35520__$1);

(statearr_35647[(13)] = inst_35523);

(statearr_35647[(11)] = inst_35522);

return statearr_35647;
})();
return cljs.core.async.ioc_alts_BANG_(state_35585__$1,(22),inst_35527);
} else {
if((state_val_35586 === (31))){
var inst_35565 = (state_35585[(2)]);
var state_35585__$1 = state_35585;
if(cljs.core.truth_(inst_35565)){
var statearr_35654_37686 = state_35585__$1;
(statearr_35654_37686[(1)] = (32));

} else {
var statearr_35657_37687 = state_35585__$1;
(statearr_35657_37687[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (32))){
var inst_35535 = (state_35585[(14)]);
var state_35585__$1 = state_35585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35585__$1,(35),out,inst_35535);
} else {
if((state_val_35586 === (33))){
var inst_35520 = (state_35585[(12)]);
var inst_35490 = inst_35520;
var state_35585__$1 = (function (){var statearr_35668 = state_35585;
(statearr_35668[(7)] = inst_35490);

return statearr_35668;
})();
var statearr_35671_37693 = state_35585__$1;
(statearr_35671_37693[(2)] = null);

(statearr_35671_37693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (13))){
var inst_35490 = (state_35585[(7)]);
var inst_35504 = inst_35490.cljs$lang$protocol_mask$partition0$;
var inst_35505 = (inst_35504 & (64));
var inst_35506 = inst_35490.cljs$core$ISeq$;
var inst_35507 = (cljs.core.PROTOCOL_SENTINEL === inst_35506);
var inst_35508 = ((inst_35505) || (inst_35507));
var state_35585__$1 = state_35585;
if(cljs.core.truth_(inst_35508)){
var statearr_35681_37699 = state_35585__$1;
(statearr_35681_37699[(1)] = (16));

} else {
var statearr_35682_37703 = state_35585__$1;
(statearr_35682_37703[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (22))){
var inst_35539 = (state_35585[(10)]);
var inst_35535 = (state_35585[(14)]);
var inst_35534 = (state_35585[(2)]);
var inst_35535__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35534,(0),null);
var inst_35539__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35534,(1),null);
var inst_35541 = (inst_35535__$1 == null);
var inst_35542 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35539__$1,change);
var inst_35543 = ((inst_35541) || (inst_35542));
var state_35585__$1 = (function (){var statearr_35690 = state_35585;
(statearr_35690[(10)] = inst_35539__$1);

(statearr_35690[(14)] = inst_35535__$1);

return statearr_35690;
})();
if(cljs.core.truth_(inst_35543)){
var statearr_35695_37708 = state_35585__$1;
(statearr_35695_37708[(1)] = (23));

} else {
var statearr_35697_37709 = state_35585__$1;
(statearr_35697_37709[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (36))){
var inst_35520 = (state_35585[(12)]);
var inst_35490 = inst_35520;
var state_35585__$1 = (function (){var statearr_35698 = state_35585;
(statearr_35698[(7)] = inst_35490);

return statearr_35698;
})();
var statearr_35699_37711 = state_35585__$1;
(statearr_35699_37711[(2)] = null);

(statearr_35699_37711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (29))){
var inst_35557 = (state_35585[(9)]);
var state_35585__$1 = state_35585;
var statearr_35700_37720 = state_35585__$1;
(statearr_35700_37720[(2)] = inst_35557);

(statearr_35700_37720[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (6))){
var state_35585__$1 = state_35585;
var statearr_35701_37722 = state_35585__$1;
(statearr_35701_37722[(2)] = false);

(statearr_35701_37722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (28))){
var inst_35553 = (state_35585[(2)]);
var inst_35554 = calc_state();
var inst_35490 = inst_35554;
var state_35585__$1 = (function (){var statearr_35702 = state_35585;
(statearr_35702[(7)] = inst_35490);

(statearr_35702[(15)] = inst_35553);

return statearr_35702;
})();
var statearr_35703_37725 = state_35585__$1;
(statearr_35703_37725[(2)] = null);

(statearr_35703_37725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (25))){
var inst_35581 = (state_35585[(2)]);
var state_35585__$1 = state_35585;
var statearr_35704_37732 = state_35585__$1;
(statearr_35704_37732[(2)] = inst_35581);

(statearr_35704_37732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (34))){
var inst_35579 = (state_35585[(2)]);
var state_35585__$1 = state_35585;
var statearr_35705_37734 = state_35585__$1;
(statearr_35705_37734[(2)] = inst_35579);

(statearr_35705_37734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (17))){
var state_35585__$1 = state_35585;
var statearr_35706_37736 = state_35585__$1;
(statearr_35706_37736[(2)] = false);

(statearr_35706_37736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (3))){
var state_35585__$1 = state_35585;
var statearr_35709_37739 = state_35585__$1;
(statearr_35709_37739[(2)] = false);

(statearr_35709_37739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (12))){
var inst_35583 = (state_35585[(2)]);
var state_35585__$1 = state_35585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35585__$1,inst_35583);
} else {
if((state_val_35586 === (2))){
var inst_35460 = (state_35585[(8)]);
var inst_35466 = inst_35460.cljs$lang$protocol_mask$partition0$;
var inst_35467 = (inst_35466 & (64));
var inst_35469 = inst_35460.cljs$core$ISeq$;
var inst_35470 = (cljs.core.PROTOCOL_SENTINEL === inst_35469);
var inst_35471 = ((inst_35467) || (inst_35470));
var state_35585__$1 = state_35585;
if(cljs.core.truth_(inst_35471)){
var statearr_35712_37746 = state_35585__$1;
(statearr_35712_37746[(1)] = (5));

} else {
var statearr_35713_37747 = state_35585__$1;
(statearr_35713_37747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (23))){
var inst_35535 = (state_35585[(14)]);
var inst_35546 = (inst_35535 == null);
var state_35585__$1 = state_35585;
if(cljs.core.truth_(inst_35546)){
var statearr_35714_37753 = state_35585__$1;
(statearr_35714_37753[(1)] = (26));

} else {
var statearr_35715_37757 = state_35585__$1;
(statearr_35715_37757[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (35))){
var inst_35568 = (state_35585[(2)]);
var state_35585__$1 = state_35585;
if(cljs.core.truth_(inst_35568)){
var statearr_35716_37759 = state_35585__$1;
(statearr_35716_37759[(1)] = (36));

} else {
var statearr_35717_37760 = state_35585__$1;
(statearr_35717_37760[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (19))){
var inst_35490 = (state_35585[(7)]);
var inst_35517 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35490);
var state_35585__$1 = state_35585;
var statearr_35720_37762 = state_35585__$1;
(statearr_35720_37762[(2)] = inst_35517);

(statearr_35720_37762[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (11))){
var inst_35490 = (state_35585[(7)]);
var inst_35496 = (inst_35490 == null);
var inst_35497 = cljs.core.not(inst_35496);
var state_35585__$1 = state_35585;
if(inst_35497){
var statearr_35723_37764 = state_35585__$1;
(statearr_35723_37764[(1)] = (13));

} else {
var statearr_35724_37767 = state_35585__$1;
(statearr_35724_37767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (9))){
var inst_35460 = (state_35585[(8)]);
var state_35585__$1 = state_35585;
var statearr_35727_37774 = state_35585__$1;
(statearr_35727_37774[(2)] = inst_35460);

(statearr_35727_37774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (5))){
var state_35585__$1 = state_35585;
var statearr_35729_37775 = state_35585__$1;
(statearr_35729_37775[(2)] = true);

(statearr_35729_37775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (14))){
var state_35585__$1 = state_35585;
var statearr_35731_37777 = state_35585__$1;
(statearr_35731_37777[(2)] = false);

(statearr_35731_37777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (26))){
var inst_35539 = (state_35585[(10)]);
var inst_35550 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35539);
var state_35585__$1 = state_35585;
var statearr_35732_37779 = state_35585__$1;
(statearr_35732_37779[(2)] = inst_35550);

(statearr_35732_37779[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (16))){
var state_35585__$1 = state_35585;
var statearr_35733_37781 = state_35585__$1;
(statearr_35733_37781[(2)] = true);

(statearr_35733_37781[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (38))){
var inst_35575 = (state_35585[(2)]);
var state_35585__$1 = state_35585;
var statearr_35734_37787 = state_35585__$1;
(statearr_35734_37787[(2)] = inst_35575);

(statearr_35734_37787[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (30))){
var inst_35539 = (state_35585[(10)]);
var inst_35523 = (state_35585[(13)]);
var inst_35522 = (state_35585[(11)]);
var inst_35560 = cljs.core.empty_QMARK_(inst_35522);
var inst_35561 = (inst_35523.cljs$core$IFn$_invoke$arity$1 ? inst_35523.cljs$core$IFn$_invoke$arity$1(inst_35539) : inst_35523.call(null,inst_35539));
var inst_35562 = cljs.core.not(inst_35561);
var inst_35563 = ((inst_35560) && (inst_35562));
var state_35585__$1 = state_35585;
var statearr_35739_37792 = state_35585__$1;
(statearr_35739_37792[(2)] = inst_35563);

(statearr_35739_37792[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (10))){
var inst_35460 = (state_35585[(8)]);
var inst_35485 = (state_35585[(2)]);
var inst_35486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35485,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35485,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35485,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35490 = inst_35460;
var state_35585__$1 = (function (){var statearr_35742 = state_35585;
(statearr_35742[(16)] = inst_35486);

(statearr_35742[(7)] = inst_35490);

(statearr_35742[(17)] = inst_35488);

(statearr_35742[(18)] = inst_35489);

return statearr_35742;
})();
var statearr_35745_37801 = state_35585__$1;
(statearr_35745_37801[(2)] = null);

(statearr_35745_37801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (18))){
var inst_35512 = (state_35585[(2)]);
var state_35585__$1 = state_35585;
var statearr_35747_37803 = state_35585__$1;
(statearr_35747_37803[(2)] = inst_35512);

(statearr_35747_37803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (37))){
var state_35585__$1 = state_35585;
var statearr_35748_37804 = state_35585__$1;
(statearr_35748_37804[(2)] = null);

(statearr_35748_37804[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35586 === (8))){
var inst_35460 = (state_35585[(8)]);
var inst_35481 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35460);
var state_35585__$1 = state_35585;
var statearr_35750_37809 = state_35585__$1;
(statearr_35750_37809[(2)] = inst_35481);

(statearr_35750_37809[(1)] = (10));


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
var statearr_35752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35752[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35752[(1)] = (1));

return statearr_35752;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35585){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35585);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35754){if((e35754 instanceof Object)){
var ex__34210__auto__ = e35754;
var statearr_35755_37818 = state_35585;
(statearr_35755_37818[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37820 = state_35585;
state_35585 = G__37820;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35585){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35757 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35757[(6)] = c__34273__auto___37661);

return statearr_35757;
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
var G__35805 = arguments.length;
switch (G__35805) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35812 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35812 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35813){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35813 = meta35813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35814,meta35813__$1){
var self__ = this;
var _35814__$1 = this;
return (new cljs.core.async.t_cljs$core$async35812(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35813__$1));
}));

(cljs.core.async.t_cljs$core$async35812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35814){
var self__ = this;
var _35814__$1 = this;
return self__.meta35813;
}));

(cljs.core.async.t_cljs$core$async35812.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35812.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35812.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35812.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35812.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35812.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35812.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35813","meta35813",1462386966,null)], null);
}));

(cljs.core.async.t_cljs$core$async35812.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35812");

(cljs.core.async.t_cljs$core$async35812.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35812");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35812.
 */
cljs.core.async.__GT_t_cljs$core$async35812 = (function cljs$core$async$__GT_t_cljs$core$async35812(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35813){
return (new cljs.core.async.t_cljs$core$async35812(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35813));
});

}

return (new cljs.core.async.t_cljs$core$async35812(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35913){
var state_val_35914 = (state_35913[(1)]);
if((state_val_35914 === (7))){
var inst_35909 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
var statearr_35916_37892 = state_35913__$1;
(statearr_35916_37892[(2)] = inst_35909);

(statearr_35916_37892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (20))){
var state_35913__$1 = state_35913;
var statearr_35917_37897 = state_35913__$1;
(statearr_35917_37897[(2)] = null);

(statearr_35917_37897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (1))){
var state_35913__$1 = state_35913;
var statearr_35921_37899 = state_35913__$1;
(statearr_35921_37899[(2)] = null);

(statearr_35921_37899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (24))){
var inst_35889 = (state_35913[(7)]);
var inst_35901 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35889);
var state_35913__$1 = state_35913;
var statearr_35924_37904 = state_35913__$1;
(statearr_35924_37904[(2)] = inst_35901);

(statearr_35924_37904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (4))){
var inst_35836 = (state_35913[(8)]);
var inst_35836__$1 = (state_35913[(2)]);
var inst_35837 = (inst_35836__$1 == null);
var state_35913__$1 = (function (){var statearr_35927 = state_35913;
(statearr_35927[(8)] = inst_35836__$1);

return statearr_35927;
})();
if(cljs.core.truth_(inst_35837)){
var statearr_35928_37910 = state_35913__$1;
(statearr_35928_37910[(1)] = (5));

} else {
var statearr_35929_37911 = state_35913__$1;
(statearr_35929_37911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (15))){
var inst_35883 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
var statearr_35932_37913 = state_35913__$1;
(statearr_35932_37913[(2)] = inst_35883);

(statearr_35932_37913[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (21))){
var inst_35906 = (state_35913[(2)]);
var state_35913__$1 = (function (){var statearr_35934 = state_35913;
(statearr_35934[(9)] = inst_35906);

return statearr_35934;
})();
var statearr_35935_37918 = state_35913__$1;
(statearr_35935_37918[(2)] = null);

(statearr_35935_37918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (13))){
var inst_35863 = (state_35913[(10)]);
var inst_35866 = cljs.core.chunked_seq_QMARK_(inst_35863);
var state_35913__$1 = state_35913;
if(inst_35866){
var statearr_35938_37919 = state_35913__$1;
(statearr_35938_37919[(1)] = (16));

} else {
var statearr_35939_37921 = state_35913__$1;
(statearr_35939_37921[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (22))){
var inst_35897 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
if(cljs.core.truth_(inst_35897)){
var statearr_35943_37924 = state_35913__$1;
(statearr_35943_37924[(1)] = (23));

} else {
var statearr_35945_37925 = state_35913__$1;
(statearr_35945_37925[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (6))){
var inst_35892 = (state_35913[(11)]);
var inst_35889 = (state_35913[(7)]);
var inst_35836 = (state_35913[(8)]);
var inst_35889__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35836) : topic_fn.call(null,inst_35836));
var inst_35891 = cljs.core.deref(mults);
var inst_35892__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35891,inst_35889__$1);
var state_35913__$1 = (function (){var statearr_35947 = state_35913;
(statearr_35947[(11)] = inst_35892__$1);

(statearr_35947[(7)] = inst_35889__$1);

return statearr_35947;
})();
if(cljs.core.truth_(inst_35892__$1)){
var statearr_35948_37930 = state_35913__$1;
(statearr_35948_37930[(1)] = (19));

} else {
var statearr_35951_37932 = state_35913__$1;
(statearr_35951_37932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (25))){
var inst_35903 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
var statearr_35953_37933 = state_35913__$1;
(statearr_35953_37933[(2)] = inst_35903);

(statearr_35953_37933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (17))){
var inst_35863 = (state_35913[(10)]);
var inst_35874 = cljs.core.first(inst_35863);
var inst_35875 = cljs.core.async.muxch_STAR_(inst_35874);
var inst_35876 = cljs.core.async.close_BANG_(inst_35875);
var inst_35877 = cljs.core.next(inst_35863);
var inst_35846 = inst_35877;
var inst_35847 = null;
var inst_35848 = (0);
var inst_35849 = (0);
var state_35913__$1 = (function (){var statearr_35958 = state_35913;
(statearr_35958[(12)] = inst_35876);

(statearr_35958[(13)] = inst_35847);

(statearr_35958[(14)] = inst_35846);

(statearr_35958[(15)] = inst_35849);

(statearr_35958[(16)] = inst_35848);

return statearr_35958;
})();
var statearr_35959_37939 = state_35913__$1;
(statearr_35959_37939[(2)] = null);

(statearr_35959_37939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (3))){
var inst_35911 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35913__$1,inst_35911);
} else {
if((state_val_35914 === (12))){
var inst_35885 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
var statearr_35963_37940 = state_35913__$1;
(statearr_35963_37940[(2)] = inst_35885);

(statearr_35963_37940[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (2))){
var state_35913__$1 = state_35913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35913__$1,(4),ch);
} else {
if((state_val_35914 === (23))){
var state_35913__$1 = state_35913;
var statearr_35966_37941 = state_35913__$1;
(statearr_35966_37941[(2)] = null);

(statearr_35966_37941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (19))){
var inst_35892 = (state_35913[(11)]);
var inst_35836 = (state_35913[(8)]);
var inst_35895 = cljs.core.async.muxch_STAR_(inst_35892);
var state_35913__$1 = state_35913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35913__$1,(22),inst_35895,inst_35836);
} else {
if((state_val_35914 === (11))){
var inst_35863 = (state_35913[(10)]);
var inst_35846 = (state_35913[(14)]);
var inst_35863__$1 = cljs.core.seq(inst_35846);
var state_35913__$1 = (function (){var statearr_35969 = state_35913;
(statearr_35969[(10)] = inst_35863__$1);

return statearr_35969;
})();
if(inst_35863__$1){
var statearr_35972_37945 = state_35913__$1;
(statearr_35972_37945[(1)] = (13));

} else {
var statearr_35973_37946 = state_35913__$1;
(statearr_35973_37946[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (9))){
var inst_35887 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
var statearr_35975_37951 = state_35913__$1;
(statearr_35975_37951[(2)] = inst_35887);

(statearr_35975_37951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (5))){
var inst_35843 = cljs.core.deref(mults);
var inst_35844 = cljs.core.vals(inst_35843);
var inst_35845 = cljs.core.seq(inst_35844);
var inst_35846 = inst_35845;
var inst_35847 = null;
var inst_35848 = (0);
var inst_35849 = (0);
var state_35913__$1 = (function (){var statearr_35980 = state_35913;
(statearr_35980[(13)] = inst_35847);

(statearr_35980[(14)] = inst_35846);

(statearr_35980[(15)] = inst_35849);

(statearr_35980[(16)] = inst_35848);

return statearr_35980;
})();
var statearr_35981_37952 = state_35913__$1;
(statearr_35981_37952[(2)] = null);

(statearr_35981_37952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (14))){
var state_35913__$1 = state_35913;
var statearr_35986_37953 = state_35913__$1;
(statearr_35986_37953[(2)] = null);

(statearr_35986_37953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (16))){
var inst_35863 = (state_35913[(10)]);
var inst_35868 = cljs.core.chunk_first(inst_35863);
var inst_35869 = cljs.core.chunk_rest(inst_35863);
var inst_35870 = cljs.core.count(inst_35868);
var inst_35846 = inst_35869;
var inst_35847 = inst_35868;
var inst_35848 = inst_35870;
var inst_35849 = (0);
var state_35913__$1 = (function (){var statearr_35991 = state_35913;
(statearr_35991[(13)] = inst_35847);

(statearr_35991[(14)] = inst_35846);

(statearr_35991[(15)] = inst_35849);

(statearr_35991[(16)] = inst_35848);

return statearr_35991;
})();
var statearr_35993_37955 = state_35913__$1;
(statearr_35993_37955[(2)] = null);

(statearr_35993_37955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (10))){
var inst_35847 = (state_35913[(13)]);
var inst_35846 = (state_35913[(14)]);
var inst_35849 = (state_35913[(15)]);
var inst_35848 = (state_35913[(16)]);
var inst_35856 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35847,inst_35849);
var inst_35857 = cljs.core.async.muxch_STAR_(inst_35856);
var inst_35858 = cljs.core.async.close_BANG_(inst_35857);
var inst_35859 = (inst_35849 + (1));
var tmp35983 = inst_35847;
var tmp35984 = inst_35846;
var tmp35985 = inst_35848;
var inst_35846__$1 = tmp35984;
var inst_35847__$1 = tmp35983;
var inst_35848__$1 = tmp35985;
var inst_35849__$1 = inst_35859;
var state_35913__$1 = (function (){var statearr_35997 = state_35913;
(statearr_35997[(13)] = inst_35847__$1);

(statearr_35997[(17)] = inst_35858);

(statearr_35997[(14)] = inst_35846__$1);

(statearr_35997[(15)] = inst_35849__$1);

(statearr_35997[(16)] = inst_35848__$1);

return statearr_35997;
})();
var statearr_35998_37960 = state_35913__$1;
(statearr_35998_37960[(2)] = null);

(statearr_35998_37960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (18))){
var inst_35880 = (state_35913[(2)]);
var state_35913__$1 = state_35913;
var statearr_35999_37961 = state_35913__$1;
(statearr_35999_37961[(2)] = inst_35880);

(statearr_35999_37961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35914 === (8))){
var inst_35849 = (state_35913[(15)]);
var inst_35848 = (state_35913[(16)]);
var inst_35851 = (inst_35849 < inst_35848);
var inst_35852 = inst_35851;
var state_35913__$1 = state_35913;
if(cljs.core.truth_(inst_35852)){
var statearr_36000_37962 = state_35913__$1;
(statearr_36000_37962[(1)] = (10));

} else {
var statearr_36001_37963 = state_35913__$1;
(statearr_36001_37963[(1)] = (11));

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
var statearr_36004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36004[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36004[(1)] = (1));

return statearr_36004;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35913){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35913);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36006){if((e36006 instanceof Object)){
var ex__34210__auto__ = e36006;
var statearr_36007_37969 = state_35913;
(statearr_36007_37969[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36006;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37972 = state_35913;
state_35913 = G__37972;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36010 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36010[(6)] = c__34273__auto___37887);

return statearr_36010;
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
var G__36014 = arguments.length;
switch (G__36014) {
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
var G__36026 = arguments.length;
switch (G__36026) {
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
var G__36036 = arguments.length;
switch (G__36036) {
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
var c__34273__auto___37983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36088){
var state_val_36089 = (state_36088[(1)]);
if((state_val_36089 === (7))){
var state_36088__$1 = state_36088;
var statearr_36090_37984 = state_36088__$1;
(statearr_36090_37984[(2)] = null);

(statearr_36090_37984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (1))){
var state_36088__$1 = state_36088;
var statearr_36091_37985 = state_36088__$1;
(statearr_36091_37985[(2)] = null);

(statearr_36091_37985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (4))){
var inst_36046 = (state_36088[(7)]);
var inst_36048 = (inst_36046 < cnt);
var state_36088__$1 = state_36088;
if(cljs.core.truth_(inst_36048)){
var statearr_36093_37987 = state_36088__$1;
(statearr_36093_37987[(1)] = (6));

} else {
var statearr_36095_37988 = state_36088__$1;
(statearr_36095_37988[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (15))){
var inst_36084 = (state_36088[(2)]);
var state_36088__$1 = state_36088;
var statearr_36098_37993 = state_36088__$1;
(statearr_36098_37993[(2)] = inst_36084);

(statearr_36098_37993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (13))){
var inst_36077 = cljs.core.async.close_BANG_(out);
var state_36088__$1 = state_36088;
var statearr_36099_37994 = state_36088__$1;
(statearr_36099_37994[(2)] = inst_36077);

(statearr_36099_37994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (6))){
var state_36088__$1 = state_36088;
var statearr_36100_37995 = state_36088__$1;
(statearr_36100_37995[(2)] = null);

(statearr_36100_37995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (3))){
var inst_36086 = (state_36088[(2)]);
var state_36088__$1 = state_36088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36088__$1,inst_36086);
} else {
if((state_val_36089 === (12))){
var inst_36074 = (state_36088[(8)]);
var inst_36074__$1 = (state_36088[(2)]);
var inst_36075 = cljs.core.some(cljs.core.nil_QMARK_,inst_36074__$1);
var state_36088__$1 = (function (){var statearr_36101 = state_36088;
(statearr_36101[(8)] = inst_36074__$1);

return statearr_36101;
})();
if(cljs.core.truth_(inst_36075)){
var statearr_36102_37996 = state_36088__$1;
(statearr_36102_37996[(1)] = (13));

} else {
var statearr_36103_37997 = state_36088__$1;
(statearr_36103_37997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (2))){
var inst_36045 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36046 = (0);
var state_36088__$1 = (function (){var statearr_36104 = state_36088;
(statearr_36104[(7)] = inst_36046);

(statearr_36104[(9)] = inst_36045);

return statearr_36104;
})();
var statearr_36105_37999 = state_36088__$1;
(statearr_36105_37999[(2)] = null);

(statearr_36105_37999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (11))){
var inst_36046 = (state_36088[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36088,(10),Object,null,(9));
var inst_36060 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36046) : chs__$1.call(null,inst_36046));
var inst_36061 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36046) : done.call(null,inst_36046));
var inst_36062 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36060,inst_36061);
var state_36088__$1 = state_36088;
var statearr_36106_38004 = state_36088__$1;
(statearr_36106_38004[(2)] = inst_36062);


cljs.core.async.impl.ioc_helpers.process_exception(state_36088__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (9))){
var inst_36046 = (state_36088[(7)]);
var inst_36065 = (state_36088[(2)]);
var inst_36066 = (inst_36046 + (1));
var inst_36046__$1 = inst_36066;
var state_36088__$1 = (function (){var statearr_36107 = state_36088;
(statearr_36107[(7)] = inst_36046__$1);

(statearr_36107[(10)] = inst_36065);

return statearr_36107;
})();
var statearr_36108_38005 = state_36088__$1;
(statearr_36108_38005[(2)] = null);

(statearr_36108_38005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (5))){
var inst_36072 = (state_36088[(2)]);
var state_36088__$1 = (function (){var statearr_36109 = state_36088;
(statearr_36109[(11)] = inst_36072);

return statearr_36109;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36088__$1,(12),dchan);
} else {
if((state_val_36089 === (14))){
var inst_36074 = (state_36088[(8)]);
var inst_36079 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36074);
var state_36088__$1 = state_36088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36088__$1,(16),out,inst_36079);
} else {
if((state_val_36089 === (16))){
var inst_36081 = (state_36088[(2)]);
var state_36088__$1 = (function (){var statearr_36111 = state_36088;
(statearr_36111[(12)] = inst_36081);

return statearr_36111;
})();
var statearr_36112_38006 = state_36088__$1;
(statearr_36112_38006[(2)] = null);

(statearr_36112_38006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (10))){
var inst_36053 = (state_36088[(2)]);
var inst_36055 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36088__$1 = (function (){var statearr_36114 = state_36088;
(statearr_36114[(13)] = inst_36053);

return statearr_36114;
})();
var statearr_36115_38009 = state_36088__$1;
(statearr_36115_38009[(2)] = inst_36055);


cljs.core.async.impl.ioc_helpers.process_exception(state_36088__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (8))){
var inst_36070 = (state_36088[(2)]);
var state_36088__$1 = state_36088;
var statearr_36116_38011 = state_36088__$1;
(statearr_36116_38011[(2)] = inst_36070);

(statearr_36116_38011[(1)] = (5));


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
var statearr_36118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36118[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36118[(1)] = (1));

return statearr_36118;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36088){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36088);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36121){if((e36121 instanceof Object)){
var ex__34210__auto__ = e36121;
var statearr_36123_38012 = state_36088;
(statearr_36123_38012[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36121;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38015 = state_36088;
state_36088 = G__38015;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36127 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36127[(6)] = c__34273__auto___37983);

return statearr_36127;
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
var G__36131 = arguments.length;
switch (G__36131) {
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
var c__34273__auto___38017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36171){
var state_val_36172 = (state_36171[(1)]);
if((state_val_36172 === (7))){
var inst_36150 = (state_36171[(7)]);
var inst_36149 = (state_36171[(8)]);
var inst_36149__$1 = (state_36171[(2)]);
var inst_36150__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36149__$1,(0),null);
var inst_36151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36149__$1,(1),null);
var inst_36152 = (inst_36150__$1 == null);
var state_36171__$1 = (function (){var statearr_36178 = state_36171;
(statearr_36178[(7)] = inst_36150__$1);

(statearr_36178[(8)] = inst_36149__$1);

(statearr_36178[(9)] = inst_36151);

return statearr_36178;
})();
if(cljs.core.truth_(inst_36152)){
var statearr_36179_38018 = state_36171__$1;
(statearr_36179_38018[(1)] = (8));

} else {
var statearr_36180_38019 = state_36171__$1;
(statearr_36180_38019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (1))){
var inst_36137 = cljs.core.vec(chs);
var inst_36138 = inst_36137;
var state_36171__$1 = (function (){var statearr_36181 = state_36171;
(statearr_36181[(10)] = inst_36138);

return statearr_36181;
})();
var statearr_36182_38020 = state_36171__$1;
(statearr_36182_38020[(2)] = null);

(statearr_36182_38020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (4))){
var inst_36138 = (state_36171[(10)]);
var state_36171__$1 = state_36171;
return cljs.core.async.ioc_alts_BANG_(state_36171__$1,(7),inst_36138);
} else {
if((state_val_36172 === (6))){
var inst_36167 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36183_38023 = state_36171__$1;
(statearr_36183_38023[(2)] = inst_36167);

(statearr_36183_38023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (3))){
var inst_36169 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36171__$1,inst_36169);
} else {
if((state_val_36172 === (2))){
var inst_36138 = (state_36171[(10)]);
var inst_36140 = cljs.core.count(inst_36138);
var inst_36141 = (inst_36140 > (0));
var state_36171__$1 = state_36171;
if(cljs.core.truth_(inst_36141)){
var statearr_36185_38024 = state_36171__$1;
(statearr_36185_38024[(1)] = (4));

} else {
var statearr_36186_38026 = state_36171__$1;
(statearr_36186_38026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (11))){
var inst_36138 = (state_36171[(10)]);
var inst_36160 = (state_36171[(2)]);
var tmp36184 = inst_36138;
var inst_36138__$1 = tmp36184;
var state_36171__$1 = (function (){var statearr_36187 = state_36171;
(statearr_36187[(10)] = inst_36138__$1);

(statearr_36187[(11)] = inst_36160);

return statearr_36187;
})();
var statearr_36188_38028 = state_36171__$1;
(statearr_36188_38028[(2)] = null);

(statearr_36188_38028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (9))){
var inst_36150 = (state_36171[(7)]);
var state_36171__$1 = state_36171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36171__$1,(11),out,inst_36150);
} else {
if((state_val_36172 === (5))){
var inst_36165 = cljs.core.async.close_BANG_(out);
var state_36171__$1 = state_36171;
var statearr_36194_38029 = state_36171__$1;
(statearr_36194_38029[(2)] = inst_36165);

(statearr_36194_38029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (10))){
var inst_36163 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36197_38030 = state_36171__$1;
(statearr_36197_38030[(2)] = inst_36163);

(statearr_36197_38030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (8))){
var inst_36138 = (state_36171[(10)]);
var inst_36150 = (state_36171[(7)]);
var inst_36149 = (state_36171[(8)]);
var inst_36151 = (state_36171[(9)]);
var inst_36154 = (function (){var cs = inst_36138;
var vec__36144 = inst_36149;
var v = inst_36150;
var c = inst_36151;
return (function (p1__36128_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36128_SHARP_);
});
})();
var inst_36156 = cljs.core.filterv(inst_36154,inst_36138);
var inst_36138__$1 = inst_36156;
var state_36171__$1 = (function (){var statearr_36198 = state_36171;
(statearr_36198[(10)] = inst_36138__$1);

return statearr_36198;
})();
var statearr_36199_38034 = state_36171__$1;
(statearr_36199_38034[(2)] = null);

(statearr_36199_38034[(1)] = (2));


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
var statearr_36202 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36202[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36202[(1)] = (1));

return statearr_36202;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36171){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36171);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36205){if((e36205 instanceof Object)){
var ex__34210__auto__ = e36205;
var statearr_36207_38036 = state_36171;
(statearr_36207_38036[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36205;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38038 = state_36171;
state_36171 = G__38038;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36209 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36209[(6)] = c__34273__auto___38017);

return statearr_36209;
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
var G__36214 = arguments.length;
switch (G__36214) {
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
var c__34273__auto___38041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36246){
var state_val_36247 = (state_36246[(1)]);
if((state_val_36247 === (7))){
var inst_36221 = (state_36246[(7)]);
var inst_36221__$1 = (state_36246[(2)]);
var inst_36222 = (inst_36221__$1 == null);
var inst_36223 = cljs.core.not(inst_36222);
var state_36246__$1 = (function (){var statearr_36250 = state_36246;
(statearr_36250[(7)] = inst_36221__$1);

return statearr_36250;
})();
if(inst_36223){
var statearr_36252_38045 = state_36246__$1;
(statearr_36252_38045[(1)] = (8));

} else {
var statearr_36257_38046 = state_36246__$1;
(statearr_36257_38046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (1))){
var inst_36215 = (0);
var state_36246__$1 = (function (){var statearr_36264 = state_36246;
(statearr_36264[(8)] = inst_36215);

return statearr_36264;
})();
var statearr_36265_38047 = state_36246__$1;
(statearr_36265_38047[(2)] = null);

(statearr_36265_38047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (4))){
var state_36246__$1 = state_36246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36246__$1,(7),ch);
} else {
if((state_val_36247 === (6))){
var inst_36239 = (state_36246[(2)]);
var state_36246__$1 = state_36246;
var statearr_36266_38050 = state_36246__$1;
(statearr_36266_38050[(2)] = inst_36239);

(statearr_36266_38050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (3))){
var inst_36242 = (state_36246[(2)]);
var inst_36243 = cljs.core.async.close_BANG_(out);
var state_36246__$1 = (function (){var statearr_36268 = state_36246;
(statearr_36268[(9)] = inst_36242);

return statearr_36268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36246__$1,inst_36243);
} else {
if((state_val_36247 === (2))){
var inst_36215 = (state_36246[(8)]);
var inst_36217 = (inst_36215 < n);
var state_36246__$1 = state_36246;
if(cljs.core.truth_(inst_36217)){
var statearr_36270_38052 = state_36246__$1;
(statearr_36270_38052[(1)] = (4));

} else {
var statearr_36272_38053 = state_36246__$1;
(statearr_36272_38053[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (11))){
var inst_36215 = (state_36246[(8)]);
var inst_36226 = (state_36246[(2)]);
var inst_36228 = (inst_36215 + (1));
var inst_36215__$1 = inst_36228;
var state_36246__$1 = (function (){var statearr_36274 = state_36246;
(statearr_36274[(8)] = inst_36215__$1);

(statearr_36274[(10)] = inst_36226);

return statearr_36274;
})();
var statearr_36276_38056 = state_36246__$1;
(statearr_36276_38056[(2)] = null);

(statearr_36276_38056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (9))){
var state_36246__$1 = state_36246;
var statearr_36277_38058 = state_36246__$1;
(statearr_36277_38058[(2)] = null);

(statearr_36277_38058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (5))){
var state_36246__$1 = state_36246;
var statearr_36278_38059 = state_36246__$1;
(statearr_36278_38059[(2)] = null);

(statearr_36278_38059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (10))){
var inst_36236 = (state_36246[(2)]);
var state_36246__$1 = state_36246;
var statearr_36281_38060 = state_36246__$1;
(statearr_36281_38060[(2)] = inst_36236);

(statearr_36281_38060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36247 === (8))){
var inst_36221 = (state_36246[(7)]);
var state_36246__$1 = state_36246;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36246__$1,(11),out,inst_36221);
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
var statearr_36282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36282[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36282[(1)] = (1));

return statearr_36282;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36246){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36246);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36285){if((e36285 instanceof Object)){
var ex__34210__auto__ = e36285;
var statearr_36286_38064 = state_36246;
(statearr_36286_38064[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38065 = state_36246;
state_36246 = G__38065;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36287 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36287[(6)] = c__34273__auto___38041);

return statearr_36287;
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
cljs.core.async.t_cljs$core$async36293 = (function (f,ch,meta36294){
this.f = f;
this.ch = ch;
this.meta36294 = meta36294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36295,meta36294__$1){
var self__ = this;
var _36295__$1 = this;
return (new cljs.core.async.t_cljs$core$async36293(self__.f,self__.ch,meta36294__$1));
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
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36307 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36307 = (function (f,ch,meta36294,_,fn1,meta36308){
this.f = f;
this.ch = ch;
this.meta36294 = meta36294;
this._ = _;
this.fn1 = fn1;
this.meta36308 = meta36308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36309,meta36308__$1){
var self__ = this;
var _36309__$1 = this;
return (new cljs.core.async.t_cljs$core$async36307(self__.f,self__.ch,self__.meta36294,self__._,self__.fn1,meta36308__$1));
}));

(cljs.core.async.t_cljs$core$async36307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36309){
var self__ = this;
var _36309__$1 = this;
return self__.meta36308;
}));

(cljs.core.async.t_cljs$core$async36307.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36307.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36307.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36307.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36291_SHARP_){
var G__36314 = (((p1__36291_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36291_SHARP_) : self__.f.call(null,p1__36291_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36314) : f1.call(null,G__36314));
});
}));

(cljs.core.async.t_cljs$core$async36307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36294","meta36294",1936540444,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36293","cljs.core.async/t_cljs$core$async36293",246317326,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36308","meta36308",-1902506456,null)], null);
}));

(cljs.core.async.t_cljs$core$async36307.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36307");

(cljs.core.async.t_cljs$core$async36307.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36307");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36307.
 */
cljs.core.async.__GT_t_cljs$core$async36307 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36307(f__$1,ch__$1,meta36294__$1,___$2,fn1__$1,meta36308){
return (new cljs.core.async.t_cljs$core$async36307(f__$1,ch__$1,meta36294__$1,___$2,fn1__$1,meta36308));
});

}

return (new cljs.core.async.t_cljs$core$async36307(self__.f,self__.ch,self__.meta36294,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36320 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36320) : self__.f.call(null,G__36320));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36294","meta36294",1936540444,null)], null);
}));

(cljs.core.async.t_cljs$core$async36293.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36293");

(cljs.core.async.t_cljs$core$async36293.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36293");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36293.
 */
cljs.core.async.__GT_t_cljs$core$async36293 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36293(f__$1,ch__$1,meta36294){
return (new cljs.core.async.t_cljs$core$async36293(f__$1,ch__$1,meta36294));
});

}

return (new cljs.core.async.t_cljs$core$async36293(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34273__auto___38094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36389){
var state_val_36391 = (state_36389[(1)]);
if((state_val_36391 === (7))){
var inst_36385 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
var statearr_36395_38095 = state_36389__$1;
(statearr_36395_38095[(2)] = inst_36385);

(statearr_36395_38095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36391 === (1))){
var state_36389__$1 = state_36389;
var statearr_36401_38098 = state_36389__$1;
(statearr_36401_38098[(2)] = null);

(statearr_36401_38098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36391 === (4))){
var inst_36369 = (state_36389[(7)]);
var inst_36369__$1 = (state_36389[(2)]);
var inst_36371 = (inst_36369__$1 == null);
var state_36389__$1 = (function (){var statearr_36404 = state_36389;
(statearr_36404[(7)] = inst_36369__$1);

return statearr_36404;
})();
if(cljs.core.truth_(inst_36371)){
var statearr_36405_38100 = state_36389__$1;
(statearr_36405_38100[(1)] = (5));

} else {
var statearr_36406_38101 = state_36389__$1;
(statearr_36406_38101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36391 === (6))){
var inst_36369 = (state_36389[(7)]);
var inst_36376 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36369) : p.call(null,inst_36369));
var state_36389__$1 = state_36389;
if(cljs.core.truth_(inst_36376)){
var statearr_36407_38103 = state_36389__$1;
(statearr_36407_38103[(1)] = (8));

} else {
var statearr_36408_38104 = state_36389__$1;
(statearr_36408_38104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36391 === (3))){
var inst_36387 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36389__$1,inst_36387);
} else {
if((state_val_36391 === (2))){
var state_36389__$1 = state_36389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36389__$1,(4),ch);
} else {
if((state_val_36391 === (11))){
var inst_36379 = (state_36389[(2)]);
var state_36389__$1 = state_36389;
var statearr_36412_38107 = state_36389__$1;
(statearr_36412_38107[(2)] = inst_36379);

(statearr_36412_38107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36391 === (9))){
var state_36389__$1 = state_36389;
var statearr_36414_38108 = state_36389__$1;
(statearr_36414_38108[(2)] = null);

(statearr_36414_38108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36391 === (5))){
var inst_36374 = cljs.core.async.close_BANG_(out);
var state_36389__$1 = state_36389;
var statearr_36419_38109 = state_36389__$1;
(statearr_36419_38109[(2)] = inst_36374);

(statearr_36419_38109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36391 === (10))){
var inst_36382 = (state_36389[(2)]);
var state_36389__$1 = (function (){var statearr_36423 = state_36389;
(statearr_36423[(8)] = inst_36382);

return statearr_36423;
})();
var statearr_36426_38111 = state_36389__$1;
(statearr_36426_38111[(2)] = null);

(statearr_36426_38111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36391 === (8))){
var inst_36369 = (state_36389[(7)]);
var state_36389__$1 = state_36389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36389__$1,(11),out,inst_36369);
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
var statearr_36432 = [null,null,null,null,null,null,null,null,null];
(statearr_36432[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36432[(1)] = (1));

return statearr_36432;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36389){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36389);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36434){if((e36434 instanceof Object)){
var ex__34210__auto__ = e36434;
var statearr_36435_38114 = state_36389;
(statearr_36435_38114[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36434;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38115 = state_36389;
state_36389 = G__38115;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36437 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36437[(6)] = c__34273__auto___38094);

return statearr_36437;
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
var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36532){
var state_val_36533 = (state_36532[(1)]);
if((state_val_36533 === (7))){
var inst_36527 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36539_38120 = state_36532__$1;
(statearr_36539_38120[(2)] = inst_36527);

(statearr_36539_38120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (20))){
var inst_36497 = (state_36532[(7)]);
var inst_36508 = (state_36532[(2)]);
var inst_36509 = cljs.core.next(inst_36497);
var inst_36472 = inst_36509;
var inst_36473 = null;
var inst_36474 = (0);
var inst_36475 = (0);
var state_36532__$1 = (function (){var statearr_36541 = state_36532;
(statearr_36541[(8)] = inst_36508);

(statearr_36541[(9)] = inst_36475);

(statearr_36541[(10)] = inst_36473);

(statearr_36541[(11)] = inst_36472);

(statearr_36541[(12)] = inst_36474);

return statearr_36541;
})();
var statearr_36542_38122 = state_36532__$1;
(statearr_36542_38122[(2)] = null);

(statearr_36542_38122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (1))){
var state_36532__$1 = state_36532;
var statearr_36544_38124 = state_36532__$1;
(statearr_36544_38124[(2)] = null);

(statearr_36544_38124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (4))){
var inst_36461 = (state_36532[(13)]);
var inst_36461__$1 = (state_36532[(2)]);
var inst_36462 = (inst_36461__$1 == null);
var state_36532__$1 = (function (){var statearr_36545 = state_36532;
(statearr_36545[(13)] = inst_36461__$1);

return statearr_36545;
})();
if(cljs.core.truth_(inst_36462)){
var statearr_36546_38129 = state_36532__$1;
(statearr_36546_38129[(1)] = (5));

} else {
var statearr_36547_38130 = state_36532__$1;
(statearr_36547_38130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (15))){
var state_36532__$1 = state_36532;
var statearr_36552_38131 = state_36532__$1;
(statearr_36552_38131[(2)] = null);

(statearr_36552_38131[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (21))){
var state_36532__$1 = state_36532;
var statearr_36553_38132 = state_36532__$1;
(statearr_36553_38132[(2)] = null);

(statearr_36553_38132[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (13))){
var inst_36475 = (state_36532[(9)]);
var inst_36473 = (state_36532[(10)]);
var inst_36472 = (state_36532[(11)]);
var inst_36474 = (state_36532[(12)]);
var inst_36493 = (state_36532[(2)]);
var inst_36494 = (inst_36475 + (1));
var tmp36549 = inst_36473;
var tmp36550 = inst_36472;
var tmp36551 = inst_36474;
var inst_36472__$1 = tmp36550;
var inst_36473__$1 = tmp36549;
var inst_36474__$1 = tmp36551;
var inst_36475__$1 = inst_36494;
var state_36532__$1 = (function (){var statearr_36555 = state_36532;
(statearr_36555[(9)] = inst_36475__$1);

(statearr_36555[(14)] = inst_36493);

(statearr_36555[(10)] = inst_36473__$1);

(statearr_36555[(11)] = inst_36472__$1);

(statearr_36555[(12)] = inst_36474__$1);

return statearr_36555;
})();
var statearr_36556_38139 = state_36532__$1;
(statearr_36556_38139[(2)] = null);

(statearr_36556_38139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (22))){
var state_36532__$1 = state_36532;
var statearr_36558_38140 = state_36532__$1;
(statearr_36558_38140[(2)] = null);

(statearr_36558_38140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (6))){
var inst_36461 = (state_36532[(13)]);
var inst_36470 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36461) : f.call(null,inst_36461));
var inst_36471 = cljs.core.seq(inst_36470);
var inst_36472 = inst_36471;
var inst_36473 = null;
var inst_36474 = (0);
var inst_36475 = (0);
var state_36532__$1 = (function (){var statearr_36560 = state_36532;
(statearr_36560[(9)] = inst_36475);

(statearr_36560[(10)] = inst_36473);

(statearr_36560[(11)] = inst_36472);

(statearr_36560[(12)] = inst_36474);

return statearr_36560;
})();
var statearr_36561_38144 = state_36532__$1;
(statearr_36561_38144[(2)] = null);

(statearr_36561_38144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (17))){
var inst_36497 = (state_36532[(7)]);
var inst_36501 = cljs.core.chunk_first(inst_36497);
var inst_36502 = cljs.core.chunk_rest(inst_36497);
var inst_36503 = cljs.core.count(inst_36501);
var inst_36472 = inst_36502;
var inst_36473 = inst_36501;
var inst_36474 = inst_36503;
var inst_36475 = (0);
var state_36532__$1 = (function (){var statearr_36563 = state_36532;
(statearr_36563[(9)] = inst_36475);

(statearr_36563[(10)] = inst_36473);

(statearr_36563[(11)] = inst_36472);

(statearr_36563[(12)] = inst_36474);

return statearr_36563;
})();
var statearr_36564_38145 = state_36532__$1;
(statearr_36564_38145[(2)] = null);

(statearr_36564_38145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (3))){
var inst_36529 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36532__$1,inst_36529);
} else {
if((state_val_36533 === (12))){
var inst_36517 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36565_38149 = state_36532__$1;
(statearr_36565_38149[(2)] = inst_36517);

(statearr_36565_38149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (2))){
var state_36532__$1 = state_36532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36532__$1,(4),in$);
} else {
if((state_val_36533 === (23))){
var inst_36525 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36567_38150 = state_36532__$1;
(statearr_36567_38150[(2)] = inst_36525);

(statearr_36567_38150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (19))){
var inst_36512 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36568_38151 = state_36532__$1;
(statearr_36568_38151[(2)] = inst_36512);

(statearr_36568_38151[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (11))){
var inst_36472 = (state_36532[(11)]);
var inst_36497 = (state_36532[(7)]);
var inst_36497__$1 = cljs.core.seq(inst_36472);
var state_36532__$1 = (function (){var statearr_36570 = state_36532;
(statearr_36570[(7)] = inst_36497__$1);

return statearr_36570;
})();
if(inst_36497__$1){
var statearr_36571_38153 = state_36532__$1;
(statearr_36571_38153[(1)] = (14));

} else {
var statearr_36573_38154 = state_36532__$1;
(statearr_36573_38154[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (9))){
var inst_36519 = (state_36532[(2)]);
var inst_36520 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36532__$1 = (function (){var statearr_36574 = state_36532;
(statearr_36574[(15)] = inst_36519);

return statearr_36574;
})();
if(cljs.core.truth_(inst_36520)){
var statearr_36575_38156 = state_36532__$1;
(statearr_36575_38156[(1)] = (21));

} else {
var statearr_36576_38157 = state_36532__$1;
(statearr_36576_38157[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (5))){
var inst_36464 = cljs.core.async.close_BANG_(out);
var state_36532__$1 = state_36532;
var statearr_36578_38159 = state_36532__$1;
(statearr_36578_38159[(2)] = inst_36464);

(statearr_36578_38159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (14))){
var inst_36497 = (state_36532[(7)]);
var inst_36499 = cljs.core.chunked_seq_QMARK_(inst_36497);
var state_36532__$1 = state_36532;
if(inst_36499){
var statearr_36579_38160 = state_36532__$1;
(statearr_36579_38160[(1)] = (17));

} else {
var statearr_36581_38162 = state_36532__$1;
(statearr_36581_38162[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (16))){
var inst_36515 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36582_38165 = state_36532__$1;
(statearr_36582_38165[(2)] = inst_36515);

(statearr_36582_38165[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (10))){
var inst_36475 = (state_36532[(9)]);
var inst_36473 = (state_36532[(10)]);
var inst_36490 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36473,inst_36475);
var state_36532__$1 = state_36532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36532__$1,(13),out,inst_36490);
} else {
if((state_val_36533 === (18))){
var inst_36497 = (state_36532[(7)]);
var inst_36506 = cljs.core.first(inst_36497);
var state_36532__$1 = state_36532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36532__$1,(20),out,inst_36506);
} else {
if((state_val_36533 === (8))){
var inst_36475 = (state_36532[(9)]);
var inst_36474 = (state_36532[(12)]);
var inst_36484 = (inst_36475 < inst_36474);
var inst_36485 = inst_36484;
var state_36532__$1 = state_36532;
if(cljs.core.truth_(inst_36485)){
var statearr_36584_38170 = state_36532__$1;
(statearr_36584_38170[(1)] = (10));

} else {
var statearr_36585_38171 = state_36532__$1;
(statearr_36585_38171[(1)] = (11));

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
var statearr_36587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36587[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36587[(1)] = (1));

return statearr_36587;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36532){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36532);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36589){if((e36589 instanceof Object)){
var ex__34210__auto__ = e36589;
var statearr_36590_38175 = state_36532;
(statearr_36590_38175[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38177 = state_36532;
state_36532 = G__38177;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36532){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36592 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36592[(6)] = c__34273__auto__);

return statearr_36592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36595 = arguments.length;
switch (G__36595) {
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
var G__36599 = arguments.length;
switch (G__36599) {
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
var G__36603 = arguments.length;
switch (G__36603) {
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
var c__34273__auto___38187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36630){
var state_val_36631 = (state_36630[(1)]);
if((state_val_36631 === (7))){
var inst_36624 = (state_36630[(2)]);
var state_36630__$1 = state_36630;
var statearr_36633_38188 = state_36630__$1;
(statearr_36633_38188[(2)] = inst_36624);

(statearr_36633_38188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36631 === (1))){
var inst_36606 = null;
var state_36630__$1 = (function (){var statearr_36634 = state_36630;
(statearr_36634[(7)] = inst_36606);

return statearr_36634;
})();
var statearr_36635_38189 = state_36630__$1;
(statearr_36635_38189[(2)] = null);

(statearr_36635_38189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36631 === (4))){
var inst_36609 = (state_36630[(8)]);
var inst_36609__$1 = (state_36630[(2)]);
var inst_36610 = (inst_36609__$1 == null);
var inst_36611 = cljs.core.not(inst_36610);
var state_36630__$1 = (function (){var statearr_36637 = state_36630;
(statearr_36637[(8)] = inst_36609__$1);

return statearr_36637;
})();
if(inst_36611){
var statearr_36638_38191 = state_36630__$1;
(statearr_36638_38191[(1)] = (5));

} else {
var statearr_36639_38192 = state_36630__$1;
(statearr_36639_38192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36631 === (6))){
var state_36630__$1 = state_36630;
var statearr_36641_38193 = state_36630__$1;
(statearr_36641_38193[(2)] = null);

(statearr_36641_38193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36631 === (3))){
var inst_36626 = (state_36630[(2)]);
var inst_36627 = cljs.core.async.close_BANG_(out);
var state_36630__$1 = (function (){var statearr_36642 = state_36630;
(statearr_36642[(9)] = inst_36626);

return statearr_36642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36630__$1,inst_36627);
} else {
if((state_val_36631 === (2))){
var state_36630__$1 = state_36630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36630__$1,(4),ch);
} else {
if((state_val_36631 === (11))){
var inst_36609 = (state_36630[(8)]);
var inst_36618 = (state_36630[(2)]);
var inst_36606 = inst_36609;
var state_36630__$1 = (function (){var statearr_36644 = state_36630;
(statearr_36644[(7)] = inst_36606);

(statearr_36644[(10)] = inst_36618);

return statearr_36644;
})();
var statearr_36645_38197 = state_36630__$1;
(statearr_36645_38197[(2)] = null);

(statearr_36645_38197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36631 === (9))){
var inst_36609 = (state_36630[(8)]);
var state_36630__$1 = state_36630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36630__$1,(11),out,inst_36609);
} else {
if((state_val_36631 === (5))){
var inst_36609 = (state_36630[(8)]);
var inst_36606 = (state_36630[(7)]);
var inst_36613 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36609,inst_36606);
var state_36630__$1 = state_36630;
if(inst_36613){
var statearr_36648_38198 = state_36630__$1;
(statearr_36648_38198[(1)] = (8));

} else {
var statearr_36649_38199 = state_36630__$1;
(statearr_36649_38199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36631 === (10))){
var inst_36621 = (state_36630[(2)]);
var state_36630__$1 = state_36630;
var statearr_36651_38202 = state_36630__$1;
(statearr_36651_38202[(2)] = inst_36621);

(statearr_36651_38202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36631 === (8))){
var inst_36606 = (state_36630[(7)]);
var tmp36647 = inst_36606;
var inst_36606__$1 = tmp36647;
var state_36630__$1 = (function (){var statearr_36652 = state_36630;
(statearr_36652[(7)] = inst_36606__$1);

return statearr_36652;
})();
var statearr_36653_38204 = state_36630__$1;
(statearr_36653_38204[(2)] = null);

(statearr_36653_38204[(1)] = (2));


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
var statearr_36655 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36655[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36655[(1)] = (1));

return statearr_36655;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36630){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36630);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36656){if((e36656 instanceof Object)){
var ex__34210__auto__ = e36656;
var statearr_36657_38205 = state_36630;
(statearr_36657_38205[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36656;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38206 = state_36630;
state_36630 = G__38206;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36659 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36659[(6)] = c__34273__auto___38187);

return statearr_36659;
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
var G__36662 = arguments.length;
switch (G__36662) {
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
var c__34273__auto___38209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36703){
var state_val_36704 = (state_36703[(1)]);
if((state_val_36704 === (7))){
var inst_36699 = (state_36703[(2)]);
var state_36703__$1 = state_36703;
var statearr_36707_38210 = state_36703__$1;
(statearr_36707_38210[(2)] = inst_36699);

(statearr_36707_38210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36704 === (1))){
var inst_36665 = (new Array(n));
var inst_36666 = inst_36665;
var inst_36667 = (0);
var state_36703__$1 = (function (){var statearr_36708 = state_36703;
(statearr_36708[(7)] = inst_36666);

(statearr_36708[(8)] = inst_36667);

return statearr_36708;
})();
var statearr_36709_38212 = state_36703__$1;
(statearr_36709_38212[(2)] = null);

(statearr_36709_38212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36704 === (4))){
var inst_36670 = (state_36703[(9)]);
var inst_36670__$1 = (state_36703[(2)]);
var inst_36672 = (inst_36670__$1 == null);
var inst_36673 = cljs.core.not(inst_36672);
var state_36703__$1 = (function (){var statearr_36711 = state_36703;
(statearr_36711[(9)] = inst_36670__$1);

return statearr_36711;
})();
if(inst_36673){
var statearr_36712_38214 = state_36703__$1;
(statearr_36712_38214[(1)] = (5));

} else {
var statearr_36713_38215 = state_36703__$1;
(statearr_36713_38215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36704 === (15))){
var inst_36693 = (state_36703[(2)]);
var state_36703__$1 = state_36703;
var statearr_36715_38216 = state_36703__$1;
(statearr_36715_38216[(2)] = inst_36693);

(statearr_36715_38216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36704 === (13))){
var state_36703__$1 = state_36703;
var statearr_36716_38217 = state_36703__$1;
(statearr_36716_38217[(2)] = null);

(statearr_36716_38217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36704 === (6))){
var inst_36667 = (state_36703[(8)]);
var inst_36689 = (inst_36667 > (0));
var state_36703__$1 = state_36703;
if(cljs.core.truth_(inst_36689)){
var statearr_36718_38218 = state_36703__$1;
(statearr_36718_38218[(1)] = (12));

} else {
var statearr_36719_38220 = state_36703__$1;
(statearr_36719_38220[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36704 === (3))){
var inst_36701 = (state_36703[(2)]);
var state_36703__$1 = state_36703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36703__$1,inst_36701);
} else {
if((state_val_36704 === (12))){
var inst_36666 = (state_36703[(7)]);
var inst_36691 = cljs.core.vec(inst_36666);
var state_36703__$1 = state_36703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36703__$1,(15),out,inst_36691);
} else {
if((state_val_36704 === (2))){
var state_36703__$1 = state_36703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36703__$1,(4),ch);
} else {
if((state_val_36704 === (11))){
var inst_36683 = (state_36703[(2)]);
var inst_36684 = (new Array(n));
var inst_36666 = inst_36684;
var inst_36667 = (0);
var state_36703__$1 = (function (){var statearr_36721 = state_36703;
(statearr_36721[(7)] = inst_36666);

(statearr_36721[(10)] = inst_36683);

(statearr_36721[(8)] = inst_36667);

return statearr_36721;
})();
var statearr_36723_38223 = state_36703__$1;
(statearr_36723_38223[(2)] = null);

(statearr_36723_38223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36704 === (9))){
var inst_36666 = (state_36703[(7)]);
var inst_36681 = cljs.core.vec(inst_36666);
var state_36703__$1 = state_36703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36703__$1,(11),out,inst_36681);
} else {
if((state_val_36704 === (5))){
var inst_36676 = (state_36703[(11)]);
var inst_36666 = (state_36703[(7)]);
var inst_36667 = (state_36703[(8)]);
var inst_36670 = (state_36703[(9)]);
var inst_36675 = (inst_36666[inst_36667] = inst_36670);
var inst_36676__$1 = (inst_36667 + (1));
var inst_36677 = (inst_36676__$1 < n);
var state_36703__$1 = (function (){var statearr_36725 = state_36703;
(statearr_36725[(11)] = inst_36676__$1);

(statearr_36725[(12)] = inst_36675);

return statearr_36725;
})();
if(cljs.core.truth_(inst_36677)){
var statearr_36726_38225 = state_36703__$1;
(statearr_36726_38225[(1)] = (8));

} else {
var statearr_36727_38226 = state_36703__$1;
(statearr_36727_38226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36704 === (14))){
var inst_36696 = (state_36703[(2)]);
var inst_36697 = cljs.core.async.close_BANG_(out);
var state_36703__$1 = (function (){var statearr_36730 = state_36703;
(statearr_36730[(13)] = inst_36696);

return statearr_36730;
})();
var statearr_36731_38228 = state_36703__$1;
(statearr_36731_38228[(2)] = inst_36697);

(statearr_36731_38228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36704 === (10))){
var inst_36687 = (state_36703[(2)]);
var state_36703__$1 = state_36703;
var statearr_36732_38229 = state_36703__$1;
(statearr_36732_38229[(2)] = inst_36687);

(statearr_36732_38229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36704 === (8))){
var inst_36676 = (state_36703[(11)]);
var inst_36666 = (state_36703[(7)]);
var tmp36728 = inst_36666;
var inst_36666__$1 = tmp36728;
var inst_36667 = inst_36676;
var state_36703__$1 = (function (){var statearr_36734 = state_36703;
(statearr_36734[(7)] = inst_36666__$1);

(statearr_36734[(8)] = inst_36667);

return statearr_36734;
})();
var statearr_36735_38231 = state_36703__$1;
(statearr_36735_38231[(2)] = null);

(statearr_36735_38231[(1)] = (2));


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
var statearr_36737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36737[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36737[(1)] = (1));

return statearr_36737;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36703){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36703);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36742){if((e36742 instanceof Object)){
var ex__34210__auto__ = e36742;
var statearr_36743_38233 = state_36703;
(statearr_36743_38233[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38234 = state_36703;
state_36703 = G__38234;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36745 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36745[(6)] = c__34273__auto___38209);

return statearr_36745;
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
var G__36748 = arguments.length;
switch (G__36748) {
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
var c__34273__auto___38239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36794){
var state_val_36795 = (state_36794[(1)]);
if((state_val_36795 === (7))){
var inst_36790 = (state_36794[(2)]);
var state_36794__$1 = state_36794;
var statearr_36797_38240 = state_36794__$1;
(statearr_36797_38240[(2)] = inst_36790);

(statearr_36797_38240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (1))){
var inst_36751 = [];
var inst_36752 = inst_36751;
var inst_36753 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36794__$1 = (function (){var statearr_36799 = state_36794;
(statearr_36799[(7)] = inst_36753);

(statearr_36799[(8)] = inst_36752);

return statearr_36799;
})();
var statearr_36800_38242 = state_36794__$1;
(statearr_36800_38242[(2)] = null);

(statearr_36800_38242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (4))){
var inst_36756 = (state_36794[(9)]);
var inst_36756__$1 = (state_36794[(2)]);
var inst_36758 = (inst_36756__$1 == null);
var inst_36759 = cljs.core.not(inst_36758);
var state_36794__$1 = (function (){var statearr_36802 = state_36794;
(statearr_36802[(9)] = inst_36756__$1);

return statearr_36802;
})();
if(inst_36759){
var statearr_36803_38243 = state_36794__$1;
(statearr_36803_38243[(1)] = (5));

} else {
var statearr_36804_38244 = state_36794__$1;
(statearr_36804_38244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (15))){
var inst_36784 = (state_36794[(2)]);
var state_36794__$1 = state_36794;
var statearr_36805_38246 = state_36794__$1;
(statearr_36805_38246[(2)] = inst_36784);

(statearr_36805_38246[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (13))){
var state_36794__$1 = state_36794;
var statearr_36807_38247 = state_36794__$1;
(statearr_36807_38247[(2)] = null);

(statearr_36807_38247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (6))){
var inst_36752 = (state_36794[(8)]);
var inst_36779 = inst_36752.length;
var inst_36780 = (inst_36779 > (0));
var state_36794__$1 = state_36794;
if(cljs.core.truth_(inst_36780)){
var statearr_36808_38249 = state_36794__$1;
(statearr_36808_38249[(1)] = (12));

} else {
var statearr_36810_38250 = state_36794__$1;
(statearr_36810_38250[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (3))){
var inst_36792 = (state_36794[(2)]);
var state_36794__$1 = state_36794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36794__$1,inst_36792);
} else {
if((state_val_36795 === (12))){
var inst_36752 = (state_36794[(8)]);
var inst_36782 = cljs.core.vec(inst_36752);
var state_36794__$1 = state_36794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36794__$1,(15),out,inst_36782);
} else {
if((state_val_36795 === (2))){
var state_36794__$1 = state_36794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36794__$1,(4),ch);
} else {
if((state_val_36795 === (11))){
var inst_36756 = (state_36794[(9)]);
var inst_36761 = (state_36794[(10)]);
var inst_36771 = (state_36794[(2)]);
var inst_36772 = [];
var inst_36773 = inst_36772.push(inst_36756);
var inst_36752 = inst_36772;
var inst_36753 = inst_36761;
var state_36794__$1 = (function (){var statearr_36812 = state_36794;
(statearr_36812[(11)] = inst_36773);

(statearr_36812[(12)] = inst_36771);

(statearr_36812[(7)] = inst_36753);

(statearr_36812[(8)] = inst_36752);

return statearr_36812;
})();
var statearr_36813_38252 = state_36794__$1;
(statearr_36813_38252[(2)] = null);

(statearr_36813_38252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (9))){
var inst_36752 = (state_36794[(8)]);
var inst_36769 = cljs.core.vec(inst_36752);
var state_36794__$1 = state_36794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36794__$1,(11),out,inst_36769);
} else {
if((state_val_36795 === (5))){
var inst_36753 = (state_36794[(7)]);
var inst_36756 = (state_36794[(9)]);
var inst_36761 = (state_36794[(10)]);
var inst_36761__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36756) : f.call(null,inst_36756));
var inst_36762 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36761__$1,inst_36753);
var inst_36763 = cljs.core.keyword_identical_QMARK_(inst_36753,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36764 = ((inst_36762) || (inst_36763));
var state_36794__$1 = (function (){var statearr_36815 = state_36794;
(statearr_36815[(10)] = inst_36761__$1);

return statearr_36815;
})();
if(cljs.core.truth_(inst_36764)){
var statearr_36817_38254 = state_36794__$1;
(statearr_36817_38254[(1)] = (8));

} else {
var statearr_36818_38255 = state_36794__$1;
(statearr_36818_38255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (14))){
var inst_36787 = (state_36794[(2)]);
var inst_36788 = cljs.core.async.close_BANG_(out);
var state_36794__$1 = (function (){var statearr_36820 = state_36794;
(statearr_36820[(13)] = inst_36787);

return statearr_36820;
})();
var statearr_36822_38257 = state_36794__$1;
(statearr_36822_38257[(2)] = inst_36788);

(statearr_36822_38257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (10))){
var inst_36776 = (state_36794[(2)]);
var state_36794__$1 = state_36794;
var statearr_36823_38258 = state_36794__$1;
(statearr_36823_38258[(2)] = inst_36776);

(statearr_36823_38258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (8))){
var inst_36756 = (state_36794[(9)]);
var inst_36761 = (state_36794[(10)]);
var inst_36752 = (state_36794[(8)]);
var inst_36766 = inst_36752.push(inst_36756);
var tmp36819 = inst_36752;
var inst_36752__$1 = tmp36819;
var inst_36753 = inst_36761;
var state_36794__$1 = (function (){var statearr_36825 = state_36794;
(statearr_36825[(7)] = inst_36753);

(statearr_36825[(14)] = inst_36766);

(statearr_36825[(8)] = inst_36752__$1);

return statearr_36825;
})();
var statearr_36826_38260 = state_36794__$1;
(statearr_36826_38260[(2)] = null);

(statearr_36826_38260[(1)] = (2));


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
var statearr_36828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36828[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36828[(1)] = (1));

return statearr_36828;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36794){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36794);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36829){if((e36829 instanceof Object)){
var ex__34210__auto__ = e36829;
var statearr_36830_38261 = state_36794;
(statearr_36830_38261[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36829;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38263 = state_36794;
state_36794 = G__38263;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36832 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36832[(6)] = c__34273__auto___38239);

return statearr_36832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
