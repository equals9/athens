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
var val_36828 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36828) : fn1.call(null,val_36828));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36828) : fn1.call(null,val_36828));
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
var n__4666__auto___36833 = n;
var x_36834 = (0);
while(true){
if((x_36834 < n__4666__auto___36833)){
(a[x_36834] = x_36834);

var G__36835 = (x_36834 + (1));
x_36834 = G__36835;
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
var G__36844 = (i + (1));
i = G__36844;
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
var len__4789__auto___36846 = arguments.length;
var i__4790__auto___36847 = (0);
while(true){
if((i__4790__auto___36847 < len__4789__auto___36846)){
args__4795__auto__.push((arguments[i__4790__auto___36847]));

var G__36849 = (i__4790__auto___36847 + (1));
i__4790__auto___36847 = G__36849;
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
var c__34274__auto___36854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34420){
var state_val_34421 = (state_34420[(1)]);
if((state_val_34421 === (7))){
var inst_34407 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34425_36855 = state_34420__$1;
(statearr_34425_36855[(2)] = inst_34407);

(statearr_34425_36855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (1))){
var state_34420__$1 = state_34420;
var statearr_34426_36857 = state_34420__$1;
(statearr_34426_36857[(2)] = null);

(statearr_34426_36857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (4))){
var inst_34390 = (state_34420[(7)]);
var inst_34390__$1 = (state_34420[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34420__$1 = (function (){var statearr_34427 = state_34420;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36858 = state_34420__$1;
(statearr_34428_36858[(1)] = (5));

} else {
var statearr_34429_36859 = state_34420__$1;
(statearr_34429_36859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (13))){
var state_34420__$1 = state_34420;
var statearr_34430_36861 = state_34420__$1;
(statearr_34430_36861[(2)] = null);

(statearr_34430_36861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (6))){
var inst_34390 = (state_34420[(7)]);
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34420__$1,(11),to,inst_34390);
} else {
if((state_val_34421 === (3))){
var inst_34412 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34420__$1,inst_34412);
} else {
if((state_val_34421 === (12))){
var state_34420__$1 = state_34420;
var statearr_34431_36863 = state_34420__$1;
(statearr_34431_36863[(2)] = null);

(statearr_34431_36863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (2))){
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34420__$1,(4),from);
} else {
if((state_val_34421 === (11))){
var inst_34400 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
if(cljs.core.truth_(inst_34400)){
var statearr_34432_36864 = state_34420__$1;
(statearr_34432_36864[(1)] = (12));

} else {
var statearr_34433_36865 = state_34420__$1;
(statearr_34433_36865[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (9))){
var state_34420__$1 = state_34420;
var statearr_34434_36867 = state_34420__$1;
(statearr_34434_36867[(2)] = null);

(statearr_34434_36867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (5))){
var state_34420__$1 = state_34420;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36868 = state_34420__$1;
(statearr_34435_36868[(1)] = (8));

} else {
var statearr_34436_36869 = state_34420__$1;
(statearr_34436_36869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (14))){
var inst_34405 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34437_36870 = state_34420__$1;
(statearr_34437_36870[(2)] = inst_34405);

(statearr_34437_36870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (10))){
var inst_34397 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34438_36872 = state_34420__$1;
(statearr_34438_36872[(2)] = inst_34397);

(statearr_34438_36872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34420__$1 = state_34420;
var statearr_34439_36873 = state_34420__$1;
(statearr_34439_36873[(2)] = inst_34394);

(statearr_34439_36873[(1)] = (10));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34420){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34420);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34441){if((e34441 instanceof Object)){
var ex__34210__auto__ = e34441;
var statearr_34442_36875 = state_34420;
(statearr_34442_36875[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36877 = state_34420;
state_34420 = G__36877;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34443 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34443[(6)] = c__34274__auto___36854);

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
var c__34274__auto___36879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34461_36882 = state_34452;
(statearr_34461_36882[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36884 = state_34452;
state_34452 = G__36884;
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
var state__34276__auto__ = (function (){var statearr_34462 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34462[(6)] = c__34274__auto___36879);

return statearr_34462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34463){
var vec__34465 = p__34463;
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
var n__4666__auto___36886 = n;
var __36887 = (0);
while(true){
if((__36887 < n__4666__auto___36886)){
var G__34468_36888 = type;
var G__34468_36889__$1 = (((G__34468_36888 instanceof cljs.core.Keyword))?G__34468_36888.fqn:null);
switch (G__34468_36889__$1) {
case "compute":
var c__34274__auto___36892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36887,c__34274__auto___36892,G__34468_36888,G__34468_36889__$1,n__4666__auto___36886,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36887,c__34274__auto___36892,G__34468_36888,G__34468_36889__$1,n__4666__auto___36886,jobs,results,process,async){
return (function (state_34481){
var state_val_34482 = (state_34481[(1)]);
if((state_val_34482 === (1))){
var state_34481__$1 = state_34481;
var statearr_34484_36893 = state_34481__$1;
(statearr_34484_36893[(2)] = null);

(statearr_34484_36893[(1)] = (2));


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
var statearr_34486_36895 = state_34481__$1;
(statearr_34486_36895[(1)] = (5));

} else {
var statearr_34487_36896 = state_34481__$1;
(statearr_34487_36896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (5))){
var state_34481__$1 = state_34481;
var statearr_34488_36898 = state_34481__$1;
(statearr_34488_36898[(2)] = null);

(statearr_34488_36898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (6))){
var state_34481__$1 = state_34481;
var statearr_34489_36899 = state_34481__$1;
(statearr_34489_36899[(2)] = null);

(statearr_34489_36899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (7))){
var inst_34477 = (state_34481[(2)]);
var state_34481__$1 = state_34481;
var statearr_34490_36900 = state_34481__$1;
(statearr_34490_36900[(2)] = inst_34477);

(statearr_34490_36900[(1)] = (3));


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
});})(__36887,c__34274__auto___36892,G__34468_36888,G__34468_36889__$1,n__4666__auto___36886,jobs,results,process,async))
;
return ((function (__36887,switch__34206__auto__,c__34274__auto___36892,G__34468_36888,G__34468_36889__$1,n__4666__auto___36886,jobs,results,process,async){
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
var statearr_34494_36903 = state_34481;
(statearr_34494_36903[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36904 = state_34481;
state_34481 = G__36904;
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
;})(__36887,switch__34206__auto__,c__34274__auto___36892,G__34468_36888,G__34468_36889__$1,n__4666__auto___36886,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34495 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34495[(6)] = c__34274__auto___36892);

return statearr_34495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36887,c__34274__auto___36892,G__34468_36888,G__34468_36889__$1,n__4666__auto___36886,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36887,c__34274__auto___36906,G__34468_36888,G__34468_36889__$1,n__4666__auto___36886,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36887,c__34274__auto___36906,G__34468_36888,G__34468_36889__$1,n__4666__auto___36886,jobs,results,process,async){
return (function (state_34513){
var state_val_34514 = (state_34513[(1)]);
if((state_val_34514 === (1))){
var state_34513__$1 = state_34513;
var statearr_34517_36907 = state_34513__$1;
(statearr_34517_36907[(2)] = null);

(statearr_34517_36907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (2))){
var state_34513__$1 = state_34513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34513__$1,(4),jobs);
} else {
if((state_val_34514 === (3))){
var inst_34508 = (state_34513[(2)]);
var state_34513__$1 = state_34513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34513__$1,inst_34508);
} else {
if((state_val_34514 === (4))){
var inst_34500 = (state_34513[(2)]);
var inst_34501 = async(inst_34500);
var state_34513__$1 = state_34513;
if(cljs.core.truth_(inst_34501)){
var statearr_34518_36909 = state_34513__$1;
(statearr_34518_36909[(1)] = (5));

} else {
var statearr_34519_36910 = state_34513__$1;
(statearr_34519_36910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (5))){
var state_34513__$1 = state_34513;
var statearr_34520_36911 = state_34513__$1;
(statearr_34520_36911[(2)] = null);

(statearr_34520_36911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (6))){
var state_34513__$1 = state_34513;
var statearr_34521_36913 = state_34513__$1;
(statearr_34521_36913[(2)] = null);

(statearr_34521_36913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34514 === (7))){
var inst_34506 = (state_34513[(2)]);
var state_34513__$1 = state_34513;
var statearr_34522_36914 = state_34513__$1;
(statearr_34522_36914[(2)] = inst_34506);

(statearr_34522_36914[(1)] = (3));


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
});})(__36887,c__34274__auto___36906,G__34468_36888,G__34468_36889__$1,n__4666__auto___36886,jobs,results,process,async))
;
return ((function (__36887,switch__34206__auto__,c__34274__auto___36906,G__34468_36888,G__34468_36889__$1,n__4666__auto___36886,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34524 = [null,null,null,null,null,null,null];
(statearr_34524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34524[(1)] = (1));

return statearr_34524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34513){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34513);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34525){if((e34525 instanceof Object)){
var ex__34210__auto__ = e34525;
var statearr_34526_36916 = state_34513;
(statearr_34526_36916[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36918 = state_34513;
state_34513 = G__36918;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34513){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36887,switch__34206__auto__,c__34274__auto___36906,G__34468_36888,G__34468_36889__$1,n__4666__auto___36886,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34527 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34527[(6)] = c__34274__auto___36906);

return statearr_34527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36887,c__34274__auto___36906,G__34468_36888,G__34468_36889__$1,n__4666__auto___36886,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34468_36889__$1)].join('')));

}

var G__36920 = (__36887 + (1));
__36887 = G__36920;
continue;
} else {
}
break;
}

var c__34274__auto___36921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34549 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34558_36922 = state_34556__$1;
(statearr_34558_36922[(2)] = inst_34549);

(statearr_34558_36922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34559_36924 = state_34556__$1;
(statearr_34559_36924[(2)] = null);

(statearr_34559_36924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (4))){
var inst_34530 = (state_34556[(7)]);
var inst_34530__$1 = (state_34556[(2)]);
var inst_34532 = (inst_34530__$1 == null);
var state_34556__$1 = (function (){var statearr_34560 = state_34556;
(statearr_34560[(7)] = inst_34530__$1);

return statearr_34560;
})();
if(cljs.core.truth_(inst_34532)){
var statearr_34561_36925 = state_34556__$1;
(statearr_34561_36925[(1)] = (5));

} else {
var statearr_34562_36926 = state_34556__$1;
(statearr_34562_36926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (6))){
var inst_34539 = (state_34556[(8)]);
var inst_34530 = (state_34556[(7)]);
var inst_34539__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34540 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34541 = [inst_34530,inst_34539__$1];
var inst_34542 = (new cljs.core.PersistentVector(null,2,(5),inst_34540,inst_34541,null));
var state_34556__$1 = (function (){var statearr_34566 = state_34556;
(statearr_34566[(8)] = inst_34539__$1);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(8),jobs,inst_34542);
} else {
if((state_val_34557 === (3))){
var inst_34551 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34556__$1,inst_34551);
} else {
if((state_val_34557 === (2))){
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34556__$1,(4),from);
} else {
if((state_val_34557 === (9))){
var inst_34546 = (state_34556[(2)]);
var state_34556__$1 = (function (){var statearr_34567 = state_34556;
(statearr_34567[(9)] = inst_34546);

return statearr_34567;
})();
var statearr_34568_36929 = state_34556__$1;
(statearr_34568_36929[(2)] = null);

(statearr_34568_36929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34534 = cljs.core.async.close_BANG_(jobs);
var state_34556__$1 = state_34556;
var statearr_34569_36930 = state_34556__$1;
(statearr_34569_36930[(2)] = inst_34534);

(statearr_34569_36930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (8))){
var inst_34539 = (state_34556[(8)]);
var inst_34544 = (state_34556[(2)]);
var state_34556__$1 = (function (){var statearr_34570 = state_34556;
(statearr_34570[(10)] = inst_34544);

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
var statearr_34573_36933 = state_34556;
(statearr_34573_36933[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36934 = state_34556;
state_34556 = G__36934;
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
var state__34276__auto__ = (function (){var statearr_34574 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34574[(6)] = c__34274__auto___36921);

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
var statearr_34614_36936 = state_34612__$1;
(statearr_34614_36936[(2)] = inst_34608);

(statearr_34614_36936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36938 = state_34612__$1;
(statearr_34615_36938[(2)] = null);

(statearr_34615_36938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36939 = state_34612__$1;
(statearr_34616_36939[(2)] = null);

(statearr_34616_36939[(1)] = (2));


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
var statearr_34618_36941 = state_34612__$1;
(statearr_34618_36941[(1)] = (5));

} else {
var statearr_34619_36942 = state_34612__$1;
(statearr_34619_36942[(1)] = (6));

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
var statearr_34620_36943 = state_34612__$1;
(statearr_34620_36943[(2)] = inst_34603);

(statearr_34620_36943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36945 = state_34612__$1;
(statearr_34622_36945[(2)] = null);

(statearr_34622_36945[(1)] = (2));


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
var statearr_34623_36947 = state_34612__$1;
(statearr_34623_36947[(1)] = (19));

} else {
var statearr_34624_36948 = state_34612__$1;
(statearr_34624_36948[(1)] = (20));

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
var statearr_34625_36950 = state_34612__$1;
(statearr_34625_36950[(2)] = null);

(statearr_34625_36950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36951 = state_34612__$1;
(statearr_34627_36951[(2)] = null);

(statearr_34627_36951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36953 = state_34612__$1;
(statearr_34628_36953[(2)] = null);

(statearr_34628_36953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36954 = state_34612__$1;
(statearr_34629_36954[(1)] = (8));

} else {
var statearr_34630_36955 = state_34612__$1;
(statearr_34630_36955[(1)] = (9));

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
var statearr_34632_36957 = state_34612__$1;
(statearr_34632_36957[(1)] = (15));

} else {
var statearr_34633_36958 = state_34612__$1;
(statearr_34633_36958[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36959 = state_34612__$1;
(statearr_34634_36959[(2)] = false);

(statearr_34634_36959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36960 = state_34612__$1;
(statearr_34635_36960[(2)] = inst_34584);

(statearr_34635_36960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36962 = state_34612__$1;
(statearr_34636_36962[(2)] = inst_34595);

(statearr_34636_36962[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36963 = state_34612__$1;
(statearr_34637_36963[(2)] = inst_34581);

(statearr_34637_36963[(1)] = (10));


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
var statearr_34640_36965 = state_34612;
(statearr_34640_36965[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36967 = state_34612;
state_34612 = G__36967;
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
var c__34274__auto___36976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34678_36978 = state_34673__$1;
(statearr_34678_36978[(2)] = inst_34669);

(statearr_34678_36978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34679_36979 = state_34673__$1;
(statearr_34679_36979[(2)] = null);

(statearr_34679_36979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (4))){
var inst_34650 = (state_34673[(7)]);
var inst_34650__$1 = (state_34673[(2)]);
var inst_34651 = (inst_34650__$1 == null);
var state_34673__$1 = (function (){var statearr_34680 = state_34673;
(statearr_34680[(7)] = inst_34650__$1);

return statearr_34680;
})();
if(cljs.core.truth_(inst_34651)){
var statearr_34681_36981 = state_34673__$1;
(statearr_34681_36981[(1)] = (5));

} else {
var statearr_34682_36982 = state_34673__$1;
(statearr_34682_36982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34686_36983 = state_34673__$1;
(statearr_34686_36983[(2)] = null);

(statearr_34686_36983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34687_36985 = state_34673__$1;
(statearr_34687_36985[(1)] = (9));

} else {
var statearr_34688_36986 = state_34673__$1;
(statearr_34688_36986[(1)] = (10));

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
var statearr_34691_36987 = state_34673__$1;
(statearr_34691_36987[(2)] = null);

(statearr_34691_36987[(1)] = (2));


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
var statearr_34692_36989 = state_34673__$1;
(statearr_34692_36989[(2)] = tc);

(statearr_34692_36989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34694 = state_34673;
(statearr_34694[(8)] = inst_34653);

return statearr_34694;
})();
var statearr_34695_36991 = state_34673__$1;
(statearr_34695_36991[(2)] = inst_34654);

(statearr_34695_36991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34696_36992 = state_34673__$1;
(statearr_34696_36992[(2)] = inst_34667);

(statearr_34696_36992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34697_36994 = state_34673__$1;
(statearr_34697_36994[(2)] = fc);

(statearr_34697_36994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34700_36995 = state_34673__$1;
(statearr_34700_36995[(1)] = (12));

} else {
var statearr_34701_36996 = state_34673__$1;
(statearr_34701_36996[(1)] = (13));

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
var statearr_34704_36998 = state_34673;
(statearr_34704_36998[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37000 = state_34673;
state_34673 = G__37000;
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
var state__34276__auto__ = (function (){var statearr_34705 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34705[(6)] = c__34274__auto___36976);

return statearr_34705;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34728){
var state_val_34729 = (state_34728[(1)]);
if((state_val_34729 === (7))){
var inst_34724 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
var statearr_34732_37002 = state_34728__$1;
(statearr_34732_37002[(2)] = inst_34724);

(statearr_34732_37002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (1))){
var inst_34708 = init;
var state_34728__$1 = (function (){var statearr_34736 = state_34728;
(statearr_34736[(7)] = inst_34708);

return statearr_34736;
})();
var statearr_34737_37003 = state_34728__$1;
(statearr_34737_37003[(2)] = null);

(statearr_34737_37003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (4))){
var inst_34711 = (state_34728[(8)]);
var inst_34711__$1 = (state_34728[(2)]);
var inst_34712 = (inst_34711__$1 == null);
var state_34728__$1 = (function (){var statearr_34738 = state_34728;
(statearr_34738[(8)] = inst_34711__$1);

return statearr_34738;
})();
if(cljs.core.truth_(inst_34712)){
var statearr_34739_37005 = state_34728__$1;
(statearr_34739_37005[(1)] = (5));

} else {
var statearr_34740_37006 = state_34728__$1;
(statearr_34740_37006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (6))){
var inst_34711 = (state_34728[(8)]);
var inst_34708 = (state_34728[(7)]);
var inst_34715 = (state_34728[(9)]);
var inst_34715__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34708,inst_34711) : f.call(null,inst_34708,inst_34711));
var inst_34716 = cljs.core.reduced_QMARK_(inst_34715__$1);
var state_34728__$1 = (function (){var statearr_34741 = state_34728;
(statearr_34741[(9)] = inst_34715__$1);

return statearr_34741;
})();
if(inst_34716){
var statearr_34742_37007 = state_34728__$1;
(statearr_34742_37007[(1)] = (8));

} else {
var statearr_34743_37008 = state_34728__$1;
(statearr_34743_37008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (3))){
var inst_34726 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34728__$1,inst_34726);
} else {
if((state_val_34729 === (2))){
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34728__$1,(4),ch);
} else {
if((state_val_34729 === (9))){
var inst_34715 = (state_34728[(9)]);
var inst_34708 = inst_34715;
var state_34728__$1 = (function (){var statearr_34745 = state_34728;
(statearr_34745[(7)] = inst_34708);

return statearr_34745;
})();
var statearr_34746_37016 = state_34728__$1;
(statearr_34746_37016[(2)] = null);

(statearr_34746_37016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (5))){
var inst_34708 = (state_34728[(7)]);
var state_34728__$1 = state_34728;
var statearr_34747_37017 = state_34728__$1;
(statearr_34747_37017[(2)] = inst_34708);

(statearr_34747_37017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (10))){
var inst_34722 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
var statearr_34748_37018 = state_34728__$1;
(statearr_34748_37018[(2)] = inst_34722);

(statearr_34748_37018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (8))){
var inst_34715 = (state_34728[(9)]);
var inst_34718 = cljs.core.deref(inst_34715);
var state_34728__$1 = state_34728;
var statearr_34749_37020 = state_34728__$1;
(statearr_34749_37020[(2)] = inst_34718);

(statearr_34749_37020[(1)] = (10));


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
var statearr_34750 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34750[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34750[(1)] = (1));

return statearr_34750;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34728){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34728);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34754){if((e34754 instanceof Object)){
var ex__34210__auto__ = e34754;
var statearr_34755_37021 = state_34728;
(statearr_34755_37021[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37023 = state_34728;
state_34728 = G__37023;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34728){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34756 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34756[(6)] = c__34274__auto__);

return statearr_34756;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34765){
var state_val_34766 = (state_34765[(1)]);
if((state_val_34766 === (1))){
var inst_34760 = cljs.core.async.reduce(f__$1,init,ch);
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34765__$1,(2),inst_34760);
} else {
if((state_val_34766 === (2))){
var inst_34762 = (state_34765[(2)]);
var inst_34763 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34762) : f__$1.call(null,inst_34762));
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34765__$1,inst_34763);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34767 = [null,null,null,null,null,null,null];
(statearr_34767[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34767[(1)] = (1));

return statearr_34767;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34765){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34765);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34768){if((e34768 instanceof Object)){
var ex__34210__auto__ = e34768;
var statearr_34772_37030 = state_34765;
(statearr_34772_37030[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34768;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37033 = state_34765;
state_34765 = G__37033;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34765){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34765);
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
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34800){
var state_val_34801 = (state_34800[(1)]);
if((state_val_34801 === (7))){
var inst_34782 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34802_37037 = state_34800__$1;
(statearr_34802_37037[(2)] = inst_34782);

(statearr_34802_37037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34800__$1 = (function (){var statearr_34803 = state_34800;
(statearr_34803[(7)] = inst_34777);

return statearr_34803;
})();
var statearr_34804_37038 = state_34800__$1;
(statearr_34804_37038[(2)] = null);

(statearr_34804_37038[(1)] = (2));


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
var statearr_34805_37039 = state_34800__$1;
(statearr_34805_37039[(2)] = inst_34794);

(statearr_34805_37039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var inst_34785 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34785)){
var statearr_34806_37042 = state_34800__$1;
(statearr_34806_37042[(1)] = (8));

} else {
var statearr_34807_37044 = state_34800__$1;
(statearr_34807_37044[(1)] = (9));

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
var statearr_34808_37048 = state_34800__$1;
(statearr_34808_37048[(2)] = null);

(statearr_34808_37048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34777)){
var statearr_34809_37049 = state_34800__$1;
(statearr_34809_37049[(1)] = (4));

} else {
var statearr_34810_37050 = state_34800__$1;
(statearr_34810_37050[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34800__$1 = state_34800;
var statearr_34811_37051 = state_34800__$1;
(statearr_34811_37051[(2)] = inst_34791);

(statearr_34811_37051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var state_34800__$1 = state_34800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34812_37052 = state_34800__$1;
(statearr_34812_37052[(1)] = (11));

} else {
var statearr_34813_37053 = state_34800__$1;
(statearr_34813_37053[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
var statearr_34817_37055 = state_34800__$1;
(statearr_34817_37055[(2)] = inst_34777);

(statearr_34817_37055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34821_37059 = state_34800__$1;
(statearr_34821_37059[(2)] = inst_34796);

(statearr_34821_37059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (8))){
var inst_34777 = (state_34800[(7)]);
var inst_34787 = cljs.core.next(inst_34777);
var inst_34777__$1 = inst_34787;
var state_34800__$1 = (function (){var statearr_34822 = state_34800;
(statearr_34822[(7)] = inst_34777__$1);

return statearr_34822;
})();
var statearr_34823_37060 = state_34800__$1;
(statearr_34823_37060[(2)] = null);

(statearr_34823_37060[(1)] = (2));


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
var statearr_34825 = [null,null,null,null,null,null,null,null];
(statearr_34825[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34825[(1)] = (1));

return statearr_34825;
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
}catch (e34826){if((e34826 instanceof Object)){
var ex__34210__auto__ = e34826;
var statearr_34827_37068 = state_34800;
(statearr_34827_37068[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37071 = state_34800;
state_34800 = G__37071;
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
var state__34276__auto__ = (function (){var statearr_34828 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34828[(6)] = c__34274__auto__);

return statearr_34828;
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
var c__34274__auto___37116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34978){
var state_val_34979 = (state_34978[(1)]);
if((state_val_34979 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34980_37117 = state_34978__$1;
(statearr_34980_37117[(2)] = inst_34974);

(statearr_34980_37117[(1)] = (3));


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
var statearr_34982_37121 = state_34978__$1;
(statearr_34982_37121[(1)] = (22));

} else {
var statearr_34983_37125 = state_34978__$1;
(statearr_34983_37125[(1)] = (23));

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
var statearr_34985_37128 = state_34978__$1;
(statearr_34985_37128[(1)] = (30));

} else {
var statearr_34986_37129 = state_34978__$1;
(statearr_34986_37129[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (1))){
var state_34978__$1 = state_34978;
var statearr_34989_37135 = state_34978__$1;
(statearr_34989_37135[(2)] = null);

(statearr_34989_37135[(1)] = (2));


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
var state_34978__$1 = (function (){var statearr_34991 = state_34978;
(statearr_34991[(13)] = inst_34857);

(statearr_34991[(14)] = inst_34856);

(statearr_34991[(15)] = inst_34858);

(statearr_34991[(16)] = inst_34896);

(statearr_34991[(17)] = inst_34855);

return statearr_34991;
})();
var statearr_34994_37139 = state_34978__$1;
(statearr_34994_37139[(2)] = null);

(statearr_34994_37139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (39))){
var state_34978__$1 = state_34978;
var statearr_34999_37140 = state_34978__$1;
(statearr_34999_37140[(2)] = null);

(statearr_34999_37140[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (4))){
var inst_34846 = (state_34978[(9)]);
var inst_34846__$1 = (state_34978[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34978__$1 = (function (){var statearr_35000 = state_34978;
(statearr_35000[(9)] = inst_34846__$1);

return statearr_35000;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35001_37143 = state_34978__$1;
(statearr_35001_37143[(1)] = (5));

} else {
var statearr_35002_37145 = state_34978__$1;
(statearr_35002_37145[(1)] = (6));

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
var tmp34996 = inst_34857;
var tmp34997 = inst_34856;
var tmp34998 = inst_34855;
var inst_34855__$1 = tmp34998;
var inst_34856__$1 = tmp34997;
var inst_34857__$1 = tmp34996;
var inst_34858__$1 = inst_34874;
var state_34978__$1 = (function (){var statearr_35003 = state_34978;
(statearr_35003[(18)] = inst_34873);

(statearr_35003[(13)] = inst_34857__$1);

(statearr_35003[(14)] = inst_34856__$1);

(statearr_35003[(15)] = inst_34858__$1);

(statearr_35003[(17)] = inst_34855__$1);

return statearr_35003;
})();
var statearr_35004_37149 = state_34978__$1;
(statearr_35004_37149[(2)] = null);

(statearr_35004_37149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (21))){
var inst_34900 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35008_37151 = state_34978__$1;
(statearr_35008_37151[(2)] = inst_34900);

(statearr_35008_37151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (31))){
var inst_34926 = (state_34978[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34978__$1 = (function (){var statearr_35011 = state_34978;
(statearr_35011[(19)] = inst_34930);

return statearr_35011;
})();
var statearr_35012_37155 = state_34978__$1;
(statearr_35012_37155[(2)] = inst_34931);

(statearr_35012_37155[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (32))){
var inst_34918 = (state_34978[(20)]);
var inst_34919 = (state_34978[(11)]);
var inst_34920 = (state_34978[(21)]);
var inst_34921 = (state_34978[(12)]);
var inst_34933 = (state_34978[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp35005 = inst_34918;
var tmp35006 = inst_34919;
var tmp35007 = inst_34920;
var inst_34918__$1 = tmp35005;
var inst_34919__$1 = tmp35006;
var inst_34920__$1 = tmp35007;
var inst_34921__$1 = inst_34934;
var state_34978__$1 = (function (){var statearr_35017 = state_34978;
(statearr_35017[(20)] = inst_34918__$1);

(statearr_35017[(22)] = inst_34933);

(statearr_35017[(11)] = inst_34919__$1);

(statearr_35017[(21)] = inst_34920__$1);

(statearr_35017[(12)] = inst_34921__$1);

return statearr_35017;
})();
var statearr_35018_37163 = state_34978__$1;
(statearr_35018_37163[(2)] = null);

(statearr_35018_37163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (40))){
var inst_34946 = (state_34978[(23)]);
var inst_34950 = done(null);
var inst_34951 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34946);
var state_34978__$1 = (function (){var statearr_35019 = state_34978;
(statearr_35019[(24)] = inst_34950);

return statearr_35019;
})();
var statearr_35020_37165 = state_34978__$1;
(statearr_35020_37165[(2)] = inst_34951);

(statearr_35020_37165[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (33))){
var inst_34937 = (state_34978[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34978__$1 = state_34978;
if(inst_34939){
var statearr_35021_37166 = state_34978__$1;
(statearr_35021_37166[(1)] = (36));

} else {
var statearr_35022_37167 = state_34978__$1;
(statearr_35022_37167[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (13))){
var inst_34867 = (state_34978[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34978__$1 = state_34978;
var statearr_35023_37170 = state_34978__$1;
(statearr_35023_37170[(2)] = inst_34870);

(statearr_35023_37170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (22))){
var inst_34890 = (state_34978[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34978__$1 = state_34978;
var statearr_35026_37172 = state_34978__$1;
(statearr_35026_37172[(2)] = inst_34893);

(statearr_35026_37172[(1)] = (24));


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
var state_34978__$1 = (function (){var statearr_35029 = state_34978;
(statearr_35029[(20)] = inst_34918);

(statearr_35029[(11)] = inst_34919);

(statearr_35029[(21)] = inst_34920);

(statearr_35029[(12)] = inst_34921);

return statearr_35029;
})();
var statearr_35031_37179 = state_34978__$1;
(statearr_35031_37179[(2)] = null);

(statearr_35031_37179[(1)] = (25));


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
var state_34978__$1 = (function (){var statearr_35033 = state_34978;
(statearr_35033[(20)] = inst_34918);

(statearr_35033[(11)] = inst_34919);

(statearr_35033[(21)] = inst_34920);

(statearr_35033[(27)] = inst_34953);

(statearr_35033[(12)] = inst_34921);

return statearr_35033;
})();
var statearr_35034_37183 = state_34978__$1;
(statearr_35034_37183[(2)] = null);

(statearr_35034_37183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (43))){
var state_34978__$1 = state_34978;
var statearr_35035_37184 = state_34978__$1;
(statearr_35035_37184[(2)] = null);

(statearr_35035_37184[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (29))){
var inst_34962 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35036_37185 = state_34978__$1;
(statearr_35036_37185[(2)] = inst_34962);

(statearr_35036_37185[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (44))){
var inst_34971 = (state_34978[(2)]);
var state_34978__$1 = (function (){var statearr_35037 = state_34978;
(statearr_35037[(28)] = inst_34971);

return statearr_35037;
})();
var statearr_35038_37188 = state_34978__$1;
(statearr_35038_37188[(2)] = null);

(statearr_35038_37188[(1)] = (2));


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
var state_34978__$1 = (function (){var statearr_35042 = state_34978;
(statearr_35042[(20)] = inst_34918);

(statearr_35042[(29)] = inst_34910__$1);

(statearr_35042[(11)] = inst_34919);

(statearr_35042[(21)] = inst_34920);

(statearr_35042[(12)] = inst_34921);

(statearr_35042[(30)] = inst_34912);

return statearr_35042;
})();
var statearr_35045_37192 = state_34978__$1;
(statearr_35045_37192[(2)] = null);

(statearr_35045_37192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (28))){
var inst_34918 = (state_34978[(20)]);
var inst_34937 = (state_34978[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34978__$1 = (function (){var statearr_35047 = state_34978;
(statearr_35047[(25)] = inst_34937__$1);

return statearr_35047;
})();
if(inst_34937__$1){
var statearr_35048_37198 = state_34978__$1;
(statearr_35048_37198[(1)] = (33));

} else {
var statearr_35049_37201 = state_34978__$1;
(statearr_35049_37201[(1)] = (34));

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
var statearr_35050_37203 = state_34978__$1;
(statearr_35050_37203[(1)] = (27));

} else {
var statearr_35051_37204 = state_34978__$1;
(statearr_35051_37204[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (34))){
var state_34978__$1 = state_34978;
var statearr_35056_37205 = state_34978__$1;
(statearr_35056_37205[(2)] = null);

(statearr_35056_37205[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (17))){
var state_34978__$1 = state_34978;
var statearr_35072_37206 = state_34978__$1;
(statearr_35072_37206[(2)] = null);

(statearr_35072_37206[(1)] = (18));


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
var statearr_35073_37207 = state_34978__$1;
(statearr_35073_37207[(2)] = inst_34905);

(statearr_35073_37207[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(4),ch);
} else {
if((state_val_34979 === (23))){
var state_34978__$1 = state_34978;
var statearr_35078_37209 = state_34978__$1;
(statearr_35078_37209[(2)] = null);

(statearr_35078_37209[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (35))){
var inst_34960 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35079_37215 = state_34978__$1;
(statearr_35079_37215[(2)] = inst_34960);

(statearr_35079_37215[(1)] = (29));


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
var state_34978__$1 = (function (){var statearr_35085 = state_34978;
(statearr_35085[(13)] = inst_34857);

(statearr_35085[(14)] = inst_34856);

(statearr_35085[(15)] = inst_34858);

(statearr_35085[(17)] = inst_34855);

return statearr_35085;
})();
var statearr_35089_37220 = state_34978__$1;
(statearr_35089_37220[(2)] = null);

(statearr_35089_37220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (11))){
var inst_34855 = (state_34978[(17)]);
var inst_34877 = (state_34978[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34978__$1 = (function (){var statearr_35095 = state_34978;
(statearr_35095[(7)] = inst_34877__$1);

return statearr_35095;
})();
if(inst_34877__$1){
var statearr_35097_37221 = state_34978__$1;
(statearr_35097_37221[(1)] = (16));

} else {
var statearr_35099_37222 = state_34978__$1;
(statearr_35099_37222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (9))){
var inst_34907 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35106_37227 = state_34978__$1;
(statearr_35106_37227[(2)] = inst_34907);

(statearr_35106_37227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35111 = state_34978;
(statearr_35111[(13)] = inst_34857);

(statearr_35111[(14)] = inst_34856);

(statearr_35111[(15)] = inst_34858);

(statearr_35111[(17)] = inst_34855);

return statearr_35111;
})();
var statearr_35114_37234 = state_34978__$1;
(statearr_35114_37234[(2)] = null);

(statearr_35114_37234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (14))){
var state_34978__$1 = state_34978;
var statearr_35120_37235 = state_34978__$1;
(statearr_35120_37235[(2)] = null);

(statearr_35120_37235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (45))){
var inst_34968 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35125_37238 = state_34978__$1;
(statearr_35125_37238[(2)] = inst_34968);

(statearr_35125_37238[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (26))){
var inst_34910 = (state_34978[(29)]);
var inst_34964 = (state_34978[(2)]);
var inst_34965 = cljs.core.seq(inst_34910);
var state_34978__$1 = (function (){var statearr_35129 = state_34978;
(statearr_35129[(31)] = inst_34964);

return statearr_35129;
})();
if(inst_34965){
var statearr_35132_37241 = state_34978__$1;
(statearr_35132_37241[(1)] = (42));

} else {
var statearr_35135_37244 = state_34978__$1;
(statearr_35135_37244[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (16))){
var inst_34877 = (state_34978[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34978__$1 = state_34978;
if(inst_34879){
var statearr_35140_37248 = state_34978__$1;
(statearr_35140_37248[(1)] = (19));

} else {
var statearr_35143_37249 = state_34978__$1;
(statearr_35143_37249[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (38))){
var inst_34957 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35147_37252 = state_34978__$1;
(statearr_35147_37252[(2)] = inst_34957);

(statearr_35147_37252[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (30))){
var state_34978__$1 = state_34978;
var statearr_35154_37255 = state_34978__$1;
(statearr_35154_37255[(2)] = null);

(statearr_35154_37255[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (10))){
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34978__$1 = (function (){var statearr_35161 = state_34978;
(statearr_35161[(26)] = inst_34867);

return statearr_35161;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35162_37258 = state_34978__$1;
(statearr_35162_37258[(1)] = (13));

} else {
var statearr_35166_37261 = state_34978__$1;
(statearr_35166_37261[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (18))){
var inst_34903 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35171_37265 = state_34978__$1;
(statearr_35171_37265[(2)] = inst_34903);

(statearr_35171_37265[(1)] = (12));


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
var state_34978__$1 = (function (){var statearr_35179 = state_34978;
(statearr_35179[(23)] = inst_34946__$1);

return statearr_35179;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35180_37272 = state_34978__$1;
(statearr_35180_37272[(1)] = (39));

} else {
var statearr_35181_37273 = state_34978__$1;
(statearr_35181_37273[(1)] = (40));

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
var statearr_35182_37276 = state_34978__$1;
(statearr_35182_37276[(1)] = (10));

} else {
var statearr_35183_37277 = state_34978__$1;
(statearr_35183_37277[(1)] = (11));

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
var statearr_35186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35186[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35186[(1)] = (1));

return statearr_35186;
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
}catch (e35187){if((e35187 instanceof Object)){
var ex__34210__auto__ = e35187;
var statearr_35188_37280 = state_34978;
(statearr_35188_37280[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35187;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37282 = state_34978;
state_34978 = G__37282;
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
var state__34276__auto__ = (function (){var statearr_35191 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35191[(6)] = c__34274__auto___37116);

return statearr_35191;
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
var G__35216 = arguments.length;
switch (G__35216) {
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
var len__4789__auto___37312 = arguments.length;
var i__4790__auto___37313 = (0);
while(true){
if((i__4790__auto___37313 < len__4789__auto___37312)){
args__4795__auto__.push((arguments[i__4790__auto___37313]));

var G__37314 = (i__4790__auto___37313 + (1));
i__4790__auto___37313 = G__37314;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35332){
var map__35333 = p__35332;
var map__35333__$1 = (((((!((map__35333 == null))))?(((((map__35333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35333):map__35333);
var opts = map__35333__$1;
var statearr_35341_37321 = state;
(statearr_35341_37321[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35347_37324 = state;
(statearr_35347_37324[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35351_37325 = state;
(statearr_35351_37325[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35313){
var G__35314 = cljs.core.first(seq35313);
var seq35313__$1 = cljs.core.next(seq35313);
var G__35315 = cljs.core.first(seq35313__$1);
var seq35313__$2 = cljs.core.next(seq35313__$1);
var G__35316 = cljs.core.first(seq35313__$2);
var seq35313__$3 = cljs.core.next(seq35313__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35314,G__35315,G__35316,seq35313__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35371 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35372){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35372 = meta35372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35373,meta35372__$1){
var self__ = this;
var _35373__$1 = this;
return (new cljs.core.async.t_cljs$core$async35371(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35372__$1));
}));

(cljs.core.async.t_cljs$core$async35371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35373){
var self__ = this;
var _35373__$1 = this;
return self__.meta35372;
}));

(cljs.core.async.t_cljs$core$async35371.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35371.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35371.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35371.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35371.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35371.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35371.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35372","meta35372",324978722,null)], null);
}));

(cljs.core.async.t_cljs$core$async35371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35371");

(cljs.core.async.t_cljs$core$async35371.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35371.
 */
cljs.core.async.__GT_t_cljs$core$async35371 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35371(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35372){
return (new cljs.core.async.t_cljs$core$async35371(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35372));
});

}

return (new cljs.core.async.t_cljs$core$async35371(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35529){
var state_val_35532 = (state_35529[(1)]);
if((state_val_35532 === (7))){
var inst_35422 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
var statearr_35545_37360 = state_35529__$1;
(statearr_35545_37360[(2)] = inst_35422);

(statearr_35545_37360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (20))){
var inst_35437 = (state_35529[(7)]);
var state_35529__$1 = state_35529;
var statearr_35557_37363 = state_35529__$1;
(statearr_35557_37363[(2)] = inst_35437);

(statearr_35557_37363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (27))){
var state_35529__$1 = state_35529;
var statearr_35558_37365 = state_35529__$1;
(statearr_35558_37365[(2)] = null);

(statearr_35558_37365[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (1))){
var inst_35407 = (state_35529[(8)]);
var inst_35407__$1 = calc_state();
var inst_35409 = (inst_35407__$1 == null);
var inst_35410 = cljs.core.not(inst_35409);
var state_35529__$1 = (function (){var statearr_35561 = state_35529;
(statearr_35561[(8)] = inst_35407__$1);

return statearr_35561;
})();
if(inst_35410){
var statearr_35563_37371 = state_35529__$1;
(statearr_35563_37371[(1)] = (2));

} else {
var statearr_35565_37373 = state_35529__$1;
(statearr_35565_37373[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (24))){
var inst_35476 = (state_35529[(9)]);
var inst_35465 = (state_35529[(10)]);
var inst_35502 = (state_35529[(11)]);
var inst_35502__$1 = (inst_35465.cljs$core$IFn$_invoke$arity$1 ? inst_35465.cljs$core$IFn$_invoke$arity$1(inst_35476) : inst_35465.call(null,inst_35476));
var state_35529__$1 = (function (){var statearr_35566 = state_35529;
(statearr_35566[(11)] = inst_35502__$1);

return statearr_35566;
})();
if(cljs.core.truth_(inst_35502__$1)){
var statearr_35567_37380 = state_35529__$1;
(statearr_35567_37380[(1)] = (29));

} else {
var statearr_35569_37381 = state_35529__$1;
(statearr_35569_37381[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (4))){
var inst_35425 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
if(cljs.core.truth_(inst_35425)){
var statearr_35576_37382 = state_35529__$1;
(statearr_35576_37382[(1)] = (8));

} else {
var statearr_35578_37383 = state_35529__$1;
(statearr_35578_37383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (15))){
var inst_35459 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
if(cljs.core.truth_(inst_35459)){
var statearr_35583_37386 = state_35529__$1;
(statearr_35583_37386[(1)] = (19));

} else {
var statearr_35585_37387 = state_35529__$1;
(statearr_35585_37387[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (21))){
var inst_35464 = (state_35529[(12)]);
var inst_35464__$1 = (state_35529[(2)]);
var inst_35465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35464__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35464__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35464__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35529__$1 = (function (){var statearr_35595 = state_35529;
(statearr_35595[(12)] = inst_35464__$1);

(statearr_35595[(10)] = inst_35465);

(statearr_35595[(13)] = inst_35466);

return statearr_35595;
})();
return cljs.core.async.ioc_alts_BANG_(state_35529__$1,(22),inst_35467);
} else {
if((state_val_35532 === (31))){
var inst_35511 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
if(cljs.core.truth_(inst_35511)){
var statearr_35601_37397 = state_35529__$1;
(statearr_35601_37397[(1)] = (32));

} else {
var statearr_35602_37398 = state_35529__$1;
(statearr_35602_37398[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (32))){
var inst_35475 = (state_35529[(14)]);
var state_35529__$1 = state_35529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35529__$1,(35),out,inst_35475);
} else {
if((state_val_35532 === (33))){
var inst_35464 = (state_35529[(12)]);
var inst_35437 = inst_35464;
var state_35529__$1 = (function (){var statearr_35613 = state_35529;
(statearr_35613[(7)] = inst_35437);

return statearr_35613;
})();
var statearr_35615_37402 = state_35529__$1;
(statearr_35615_37402[(2)] = null);

(statearr_35615_37402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (13))){
var inst_35437 = (state_35529[(7)]);
var inst_35446 = inst_35437.cljs$lang$protocol_mask$partition0$;
var inst_35447 = (inst_35446 & (64));
var inst_35448 = inst_35437.cljs$core$ISeq$;
var inst_35449 = (cljs.core.PROTOCOL_SENTINEL === inst_35448);
var inst_35451 = ((inst_35447) || (inst_35449));
var state_35529__$1 = state_35529;
if(cljs.core.truth_(inst_35451)){
var statearr_35622_37409 = state_35529__$1;
(statearr_35622_37409[(1)] = (16));

} else {
var statearr_35625_37410 = state_35529__$1;
(statearr_35625_37410[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (22))){
var inst_35476 = (state_35529[(9)]);
var inst_35475 = (state_35529[(14)]);
var inst_35474 = (state_35529[(2)]);
var inst_35475__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35474,(0),null);
var inst_35476__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35474,(1),null);
var inst_35477 = (inst_35475__$1 == null);
var inst_35478 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35476__$1,change);
var inst_35479 = ((inst_35477) || (inst_35478));
var state_35529__$1 = (function (){var statearr_35633 = state_35529;
(statearr_35633[(9)] = inst_35476__$1);

(statearr_35633[(14)] = inst_35475__$1);

return statearr_35633;
})();
if(cljs.core.truth_(inst_35479)){
var statearr_35635_37417 = state_35529__$1;
(statearr_35635_37417[(1)] = (23));

} else {
var statearr_35638_37418 = state_35529__$1;
(statearr_35638_37418[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (36))){
var inst_35464 = (state_35529[(12)]);
var inst_35437 = inst_35464;
var state_35529__$1 = (function (){var statearr_35642 = state_35529;
(statearr_35642[(7)] = inst_35437);

return statearr_35642;
})();
var statearr_35644_37421 = state_35529__$1;
(statearr_35644_37421[(2)] = null);

(statearr_35644_37421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (29))){
var inst_35502 = (state_35529[(11)]);
var state_35529__$1 = state_35529;
var statearr_35649_37424 = state_35529__$1;
(statearr_35649_37424[(2)] = inst_35502);

(statearr_35649_37424[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (6))){
var state_35529__$1 = state_35529;
var statearr_35654_37426 = state_35529__$1;
(statearr_35654_37426[(2)] = false);

(statearr_35654_37426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (28))){
var inst_35493 = (state_35529[(2)]);
var inst_35495 = calc_state();
var inst_35437 = inst_35495;
var state_35529__$1 = (function (){var statearr_35660 = state_35529;
(statearr_35660[(15)] = inst_35493);

(statearr_35660[(7)] = inst_35437);

return statearr_35660;
})();
var statearr_35677_37428 = state_35529__$1;
(statearr_35677_37428[(2)] = null);

(statearr_35677_37428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (25))){
var inst_35525 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
var statearr_35687_37434 = state_35529__$1;
(statearr_35687_37434[(2)] = inst_35525);

(statearr_35687_37434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (34))){
var inst_35523 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
var statearr_35693_37435 = state_35529__$1;
(statearr_35693_37435[(2)] = inst_35523);

(statearr_35693_37435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (17))){
var state_35529__$1 = state_35529;
var statearr_35698_37437 = state_35529__$1;
(statearr_35698_37437[(2)] = false);

(statearr_35698_37437[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (3))){
var state_35529__$1 = state_35529;
var statearr_35702_37438 = state_35529__$1;
(statearr_35702_37438[(2)] = false);

(statearr_35702_37438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (12))){
var inst_35527 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35529__$1,inst_35527);
} else {
if((state_val_35532 === (2))){
var inst_35407 = (state_35529[(8)]);
var inst_35414 = inst_35407.cljs$lang$protocol_mask$partition0$;
var inst_35415 = (inst_35414 & (64));
var inst_35416 = inst_35407.cljs$core$ISeq$;
var inst_35417 = (cljs.core.PROTOCOL_SENTINEL === inst_35416);
var inst_35418 = ((inst_35415) || (inst_35417));
var state_35529__$1 = state_35529;
if(cljs.core.truth_(inst_35418)){
var statearr_35708_37446 = state_35529__$1;
(statearr_35708_37446[(1)] = (5));

} else {
var statearr_35709_37447 = state_35529__$1;
(statearr_35709_37447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (23))){
var inst_35475 = (state_35529[(14)]);
var inst_35481 = (inst_35475 == null);
var state_35529__$1 = state_35529;
if(cljs.core.truth_(inst_35481)){
var statearr_35710_37449 = state_35529__$1;
(statearr_35710_37449[(1)] = (26));

} else {
var statearr_35711_37450 = state_35529__$1;
(statearr_35711_37450[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (35))){
var inst_35514 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
if(cljs.core.truth_(inst_35514)){
var statearr_35712_37452 = state_35529__$1;
(statearr_35712_37452[(1)] = (36));

} else {
var statearr_35713_37454 = state_35529__$1;
(statearr_35713_37454[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (19))){
var inst_35437 = (state_35529[(7)]);
var inst_35461 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35437);
var state_35529__$1 = state_35529;
var statearr_35714_37456 = state_35529__$1;
(statearr_35714_37456[(2)] = inst_35461);

(statearr_35714_37456[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (11))){
var inst_35437 = (state_35529[(7)]);
var inst_35443 = (inst_35437 == null);
var inst_35444 = cljs.core.not(inst_35443);
var state_35529__$1 = state_35529;
if(inst_35444){
var statearr_35715_37458 = state_35529__$1;
(statearr_35715_37458[(1)] = (13));

} else {
var statearr_35716_37460 = state_35529__$1;
(statearr_35716_37460[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (9))){
var inst_35407 = (state_35529[(8)]);
var state_35529__$1 = state_35529;
var statearr_35719_37463 = state_35529__$1;
(statearr_35719_37463[(2)] = inst_35407);

(statearr_35719_37463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (5))){
var state_35529__$1 = state_35529;
var statearr_35720_37464 = state_35529__$1;
(statearr_35720_37464[(2)] = true);

(statearr_35720_37464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (14))){
var state_35529__$1 = state_35529;
var statearr_35721_37465 = state_35529__$1;
(statearr_35721_37465[(2)] = false);

(statearr_35721_37465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (26))){
var inst_35476 = (state_35529[(9)]);
var inst_35490 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35476);
var state_35529__$1 = state_35529;
var statearr_35722_37472 = state_35529__$1;
(statearr_35722_37472[(2)] = inst_35490);

(statearr_35722_37472[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (16))){
var state_35529__$1 = state_35529;
var statearr_35725_37474 = state_35529__$1;
(statearr_35725_37474[(2)] = true);

(statearr_35725_37474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (38))){
var inst_35519 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
var statearr_35726_37475 = state_35529__$1;
(statearr_35726_37475[(2)] = inst_35519);

(statearr_35726_37475[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (30))){
var inst_35476 = (state_35529[(9)]);
var inst_35465 = (state_35529[(10)]);
var inst_35466 = (state_35529[(13)]);
var inst_35506 = cljs.core.empty_QMARK_(inst_35465);
var inst_35507 = (inst_35466.cljs$core$IFn$_invoke$arity$1 ? inst_35466.cljs$core$IFn$_invoke$arity$1(inst_35476) : inst_35466.call(null,inst_35476));
var inst_35508 = cljs.core.not(inst_35507);
var inst_35509 = ((inst_35506) && (inst_35508));
var state_35529__$1 = state_35529;
var statearr_35729_37478 = state_35529__$1;
(statearr_35729_37478[(2)] = inst_35509);

(statearr_35729_37478[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (10))){
var inst_35407 = (state_35529[(8)]);
var inst_35430 = (state_35529[(2)]);
var inst_35431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35430,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35430,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35430,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35437 = inst_35407;
var state_35529__$1 = (function (){var statearr_35732 = state_35529;
(statearr_35732[(16)] = inst_35436);

(statearr_35732[(17)] = inst_35434);

(statearr_35732[(18)] = inst_35431);

(statearr_35732[(7)] = inst_35437);

return statearr_35732;
})();
var statearr_35733_37483 = state_35529__$1;
(statearr_35733_37483[(2)] = null);

(statearr_35733_37483[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (18))){
var inst_35456 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
var statearr_35736_37487 = state_35529__$1;
(statearr_35736_37487[(2)] = inst_35456);

(statearr_35736_37487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (37))){
var state_35529__$1 = state_35529;
var statearr_35738_37488 = state_35529__$1;
(statearr_35738_37488[(2)] = null);

(statearr_35738_37488[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (8))){
var inst_35407 = (state_35529[(8)]);
var inst_35427 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35407);
var state_35529__$1 = state_35529;
var statearr_35740_37490 = state_35529__$1;
(statearr_35740_37490[(2)] = inst_35427);

(statearr_35740_37490[(1)] = (10));


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
var statearr_35741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35741[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35741[(1)] = (1));

return statearr_35741;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35529){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35529);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35742){if((e35742 instanceof Object)){
var ex__34210__auto__ = e35742;
var statearr_35744_37495 = state_35529;
(statearr_35744_37495[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37496 = state_35529;
state_35529 = G__37496;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35529){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35748 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35748[(6)] = c__34274__auto___37357);

return statearr_35748;
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
var G__35765 = arguments.length;
switch (G__35765) {
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
var G__35794 = arguments.length;
switch (G__35794) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35790_SHARP_){
if(cljs.core.truth_((p1__35790_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35790_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35790_SHARP_.call(null,topic)))){
return p1__35790_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35790_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35798 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35798 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35799){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35799 = meta35799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35800,meta35799__$1){
var self__ = this;
var _35800__$1 = this;
return (new cljs.core.async.t_cljs$core$async35798(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35799__$1));
}));

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35800){
var self__ = this;
var _35800__$1 = this;
return self__.meta35799;
}));

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35798.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35799","meta35799",-1779080314,null)], null);
}));

(cljs.core.async.t_cljs$core$async35798.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35798");

(cljs.core.async.t_cljs$core$async35798.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35798");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35798.
 */
cljs.core.async.__GT_t_cljs$core$async35798 = (function cljs$core$async$__GT_t_cljs$core$async35798(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35799){
return (new cljs.core.async.t_cljs$core$async35798(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35799));
});

}

return (new cljs.core.async.t_cljs$core$async35798(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35896){
var state_val_35897 = (state_35896[(1)]);
if((state_val_35897 === (7))){
var inst_35892 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35900_37567 = state_35896__$1;
(statearr_35900_37567[(2)] = inst_35892);

(statearr_35900_37567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (20))){
var state_35896__$1 = state_35896;
var statearr_35901_37569 = state_35896__$1;
(statearr_35901_37569[(2)] = null);

(statearr_35901_37569[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (1))){
var state_35896__$1 = state_35896;
var statearr_35904_37570 = state_35896__$1;
(statearr_35904_37570[(2)] = null);

(statearr_35904_37570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (24))){
var inst_35875 = (state_35896[(7)]);
var inst_35884 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35875);
var state_35896__$1 = state_35896;
var statearr_35906_37577 = state_35896__$1;
(statearr_35906_37577[(2)] = inst_35884);

(statearr_35906_37577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (4))){
var inst_35827 = (state_35896[(8)]);
var inst_35827__$1 = (state_35896[(2)]);
var inst_35828 = (inst_35827__$1 == null);
var state_35896__$1 = (function (){var statearr_35909 = state_35896;
(statearr_35909[(8)] = inst_35827__$1);

return statearr_35909;
})();
if(cljs.core.truth_(inst_35828)){
var statearr_35911_37580 = state_35896__$1;
(statearr_35911_37580[(1)] = (5));

} else {
var statearr_35913_37581 = state_35896__$1;
(statearr_35913_37581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (15))){
var inst_35869 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35914_37582 = state_35896__$1;
(statearr_35914_37582[(2)] = inst_35869);

(statearr_35914_37582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (21))){
var inst_35889 = (state_35896[(2)]);
var state_35896__$1 = (function (){var statearr_35915 = state_35896;
(statearr_35915[(9)] = inst_35889);

return statearr_35915;
})();
var statearr_35916_37589 = state_35896__$1;
(statearr_35916_37589[(2)] = null);

(statearr_35916_37589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (13))){
var inst_35851 = (state_35896[(10)]);
var inst_35853 = cljs.core.chunked_seq_QMARK_(inst_35851);
var state_35896__$1 = state_35896;
if(inst_35853){
var statearr_35920_37591 = state_35896__$1;
(statearr_35920_37591[(1)] = (16));

} else {
var statearr_35921_37592 = state_35896__$1;
(statearr_35921_37592[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (22))){
var inst_35881 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
if(cljs.core.truth_(inst_35881)){
var statearr_35924_37594 = state_35896__$1;
(statearr_35924_37594[(1)] = (23));

} else {
var statearr_35925_37595 = state_35896__$1;
(statearr_35925_37595[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (6))){
var inst_35875 = (state_35896[(7)]);
var inst_35827 = (state_35896[(8)]);
var inst_35877 = (state_35896[(11)]);
var inst_35875__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35827) : topic_fn.call(null,inst_35827));
var inst_35876 = cljs.core.deref(mults);
var inst_35877__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35876,inst_35875__$1);
var state_35896__$1 = (function (){var statearr_35929 = state_35896;
(statearr_35929[(7)] = inst_35875__$1);

(statearr_35929[(11)] = inst_35877__$1);

return statearr_35929;
})();
if(cljs.core.truth_(inst_35877__$1)){
var statearr_35931_37603 = state_35896__$1;
(statearr_35931_37603[(1)] = (19));

} else {
var statearr_35932_37604 = state_35896__$1;
(statearr_35932_37604[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (25))){
var inst_35886 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35933_37606 = state_35896__$1;
(statearr_35933_37606[(2)] = inst_35886);

(statearr_35933_37606[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (17))){
var inst_35851 = (state_35896[(10)]);
var inst_35860 = cljs.core.first(inst_35851);
var inst_35861 = cljs.core.async.muxch_STAR_(inst_35860);
var inst_35862 = cljs.core.async.close_BANG_(inst_35861);
var inst_35863 = cljs.core.next(inst_35851);
var inst_35837 = inst_35863;
var inst_35838 = null;
var inst_35839 = (0);
var inst_35840 = (0);
var state_35896__$1 = (function (){var statearr_35937 = state_35896;
(statearr_35937[(12)] = inst_35838);

(statearr_35937[(13)] = inst_35862);

(statearr_35937[(14)] = inst_35837);

(statearr_35937[(15)] = inst_35839);

(statearr_35937[(16)] = inst_35840);

return statearr_35937;
})();
var statearr_35940_37618 = state_35896__$1;
(statearr_35940_37618[(2)] = null);

(statearr_35940_37618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (3))){
var inst_35894 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35896__$1,inst_35894);
} else {
if((state_val_35897 === (12))){
var inst_35871 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35943_37621 = state_35896__$1;
(statearr_35943_37621[(2)] = inst_35871);

(statearr_35943_37621[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (2))){
var state_35896__$1 = state_35896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35896__$1,(4),ch);
} else {
if((state_val_35897 === (23))){
var state_35896__$1 = state_35896;
var statearr_35945_37626 = state_35896__$1;
(statearr_35945_37626[(2)] = null);

(statearr_35945_37626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (19))){
var inst_35827 = (state_35896[(8)]);
var inst_35877 = (state_35896[(11)]);
var inst_35879 = cljs.core.async.muxch_STAR_(inst_35877);
var state_35896__$1 = state_35896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35896__$1,(22),inst_35879,inst_35827);
} else {
if((state_val_35897 === (11))){
var inst_35851 = (state_35896[(10)]);
var inst_35837 = (state_35896[(14)]);
var inst_35851__$1 = cljs.core.seq(inst_35837);
var state_35896__$1 = (function (){var statearr_35948 = state_35896;
(statearr_35948[(10)] = inst_35851__$1);

return statearr_35948;
})();
if(inst_35851__$1){
var statearr_35949_37632 = state_35896__$1;
(statearr_35949_37632[(1)] = (13));

} else {
var statearr_35952_37633 = state_35896__$1;
(statearr_35952_37633[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (9))){
var inst_35873 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35954_37634 = state_35896__$1;
(statearr_35954_37634[(2)] = inst_35873);

(statearr_35954_37634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (5))){
var inst_35834 = cljs.core.deref(mults);
var inst_35835 = cljs.core.vals(inst_35834);
var inst_35836 = cljs.core.seq(inst_35835);
var inst_35837 = inst_35836;
var inst_35838 = null;
var inst_35839 = (0);
var inst_35840 = (0);
var state_35896__$1 = (function (){var statearr_35959 = state_35896;
(statearr_35959[(12)] = inst_35838);

(statearr_35959[(14)] = inst_35837);

(statearr_35959[(15)] = inst_35839);

(statearr_35959[(16)] = inst_35840);

return statearr_35959;
})();
var statearr_35960_37646 = state_35896__$1;
(statearr_35960_37646[(2)] = null);

(statearr_35960_37646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (14))){
var state_35896__$1 = state_35896;
var statearr_35964_37647 = state_35896__$1;
(statearr_35964_37647[(2)] = null);

(statearr_35964_37647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (16))){
var inst_35851 = (state_35896[(10)]);
var inst_35855 = cljs.core.chunk_first(inst_35851);
var inst_35856 = cljs.core.chunk_rest(inst_35851);
var inst_35857 = cljs.core.count(inst_35855);
var inst_35837 = inst_35856;
var inst_35838 = inst_35855;
var inst_35839 = inst_35857;
var inst_35840 = (0);
var state_35896__$1 = (function (){var statearr_35968 = state_35896;
(statearr_35968[(12)] = inst_35838);

(statearr_35968[(14)] = inst_35837);

(statearr_35968[(15)] = inst_35839);

(statearr_35968[(16)] = inst_35840);

return statearr_35968;
})();
var statearr_35970_37654 = state_35896__$1;
(statearr_35970_37654[(2)] = null);

(statearr_35970_37654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (10))){
var inst_35838 = (state_35896[(12)]);
var inst_35837 = (state_35896[(14)]);
var inst_35839 = (state_35896[(15)]);
var inst_35840 = (state_35896[(16)]);
var inst_35845 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35838,inst_35840);
var inst_35846 = cljs.core.async.muxch_STAR_(inst_35845);
var inst_35847 = cljs.core.async.close_BANG_(inst_35846);
var inst_35848 = (inst_35840 + (1));
var tmp35961 = inst_35838;
var tmp35962 = inst_35837;
var tmp35963 = inst_35839;
var inst_35837__$1 = tmp35962;
var inst_35838__$1 = tmp35961;
var inst_35839__$1 = tmp35963;
var inst_35840__$1 = inst_35848;
var state_35896__$1 = (function (){var statearr_35974 = state_35896;
(statearr_35974[(12)] = inst_35838__$1);

(statearr_35974[(17)] = inst_35847);

(statearr_35974[(14)] = inst_35837__$1);

(statearr_35974[(15)] = inst_35839__$1);

(statearr_35974[(16)] = inst_35840__$1);

return statearr_35974;
})();
var statearr_35975_37662 = state_35896__$1;
(statearr_35975_37662[(2)] = null);

(statearr_35975_37662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (18))){
var inst_35866 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35978_37670 = state_35896__$1;
(statearr_35978_37670[(2)] = inst_35866);

(statearr_35978_37670[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (8))){
var inst_35839 = (state_35896[(15)]);
var inst_35840 = (state_35896[(16)]);
var inst_35842 = (inst_35840 < inst_35839);
var inst_35843 = inst_35842;
var state_35896__$1 = state_35896;
if(cljs.core.truth_(inst_35843)){
var statearr_35980_37674 = state_35896__$1;
(statearr_35980_37674[(1)] = (10));

} else {
var statearr_35982_37675 = state_35896__$1;
(statearr_35982_37675[(1)] = (11));

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
var statearr_35986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35986[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35986[(1)] = (1));

return statearr_35986;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35896){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35896);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35987){if((e35987 instanceof Object)){
var ex__34210__auto__ = e35987;
var statearr_35988_37685 = state_35896;
(statearr_35988_37685[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37687 = state_35896;
state_35896 = G__37687;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35992 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35992[(6)] = c__34274__auto___37564);

return statearr_35992;
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
var G__36014 = arguments.length;
switch (G__36014) {
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
var c__34274__auto___37725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36071){
var state_val_36072 = (state_36071[(1)]);
if((state_val_36072 === (7))){
var state_36071__$1 = state_36071;
var statearr_36080_37727 = state_36071__$1;
(statearr_36080_37727[(2)] = null);

(statearr_36080_37727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (1))){
var state_36071__$1 = state_36071;
var statearr_36081_37732 = state_36071__$1;
(statearr_36081_37732[(2)] = null);

(statearr_36081_37732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (4))){
var inst_36023 = (state_36071[(7)]);
var inst_36025 = (inst_36023 < cnt);
var state_36071__$1 = state_36071;
if(cljs.core.truth_(inst_36025)){
var statearr_36084_37737 = state_36071__$1;
(statearr_36084_37737[(1)] = (6));

} else {
var statearr_36086_37738 = state_36071__$1;
(statearr_36086_37738[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (15))){
var inst_36062 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36088_37740 = state_36071__$1;
(statearr_36088_37740[(2)] = inst_36062);

(statearr_36088_37740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (13))){
var inst_36055 = cljs.core.async.close_BANG_(out);
var state_36071__$1 = state_36071;
var statearr_36089_37741 = state_36071__$1;
(statearr_36089_37741[(2)] = inst_36055);

(statearr_36089_37741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (6))){
var state_36071__$1 = state_36071;
var statearr_36090_37747 = state_36071__$1;
(statearr_36090_37747[(2)] = null);

(statearr_36090_37747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (3))){
var inst_36064 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36071__$1,inst_36064);
} else {
if((state_val_36072 === (12))){
var inst_36052 = (state_36071[(8)]);
var inst_36052__$1 = (state_36071[(2)]);
var inst_36053 = cljs.core.some(cljs.core.nil_QMARK_,inst_36052__$1);
var state_36071__$1 = (function (){var statearr_36097 = state_36071;
(statearr_36097[(8)] = inst_36052__$1);

return statearr_36097;
})();
if(cljs.core.truth_(inst_36053)){
var statearr_36098_37751 = state_36071__$1;
(statearr_36098_37751[(1)] = (13));

} else {
var statearr_36099_37752 = state_36071__$1;
(statearr_36099_37752[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (2))){
var inst_36022 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36023 = (0);
var state_36071__$1 = (function (){var statearr_36100 = state_36071;
(statearr_36100[(9)] = inst_36022);

(statearr_36100[(7)] = inst_36023);

return statearr_36100;
})();
var statearr_36101_37756 = state_36071__$1;
(statearr_36101_37756[(2)] = null);

(statearr_36101_37756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (11))){
var inst_36023 = (state_36071[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36071,(10),Object,null,(9));
var inst_36038 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36023) : chs__$1.call(null,inst_36023));
var inst_36039 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36023) : done.call(null,inst_36023));
var inst_36040 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36038,inst_36039);
var state_36071__$1 = state_36071;
var statearr_36106_37757 = state_36071__$1;
(statearr_36106_37757[(2)] = inst_36040);


cljs.core.async.impl.ioc_helpers.process_exception(state_36071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (9))){
var inst_36023 = (state_36071[(7)]);
var inst_36042 = (state_36071[(2)]);
var inst_36043 = (inst_36023 + (1));
var inst_36023__$1 = inst_36043;
var state_36071__$1 = (function (){var statearr_36107 = state_36071;
(statearr_36107[(10)] = inst_36042);

(statearr_36107[(7)] = inst_36023__$1);

return statearr_36107;
})();
var statearr_36108_37760 = state_36071__$1;
(statearr_36108_37760[(2)] = null);

(statearr_36108_37760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (5))){
var inst_36050 = (state_36071[(2)]);
var state_36071__$1 = (function (){var statearr_36109 = state_36071;
(statearr_36109[(11)] = inst_36050);

return statearr_36109;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36071__$1,(12),dchan);
} else {
if((state_val_36072 === (14))){
var inst_36052 = (state_36071[(8)]);
var inst_36057 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36052);
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36071__$1,(16),out,inst_36057);
} else {
if((state_val_36072 === (16))){
var inst_36059 = (state_36071[(2)]);
var state_36071__$1 = (function (){var statearr_36110 = state_36071;
(statearr_36110[(12)] = inst_36059);

return statearr_36110;
})();
var statearr_36111_37763 = state_36071__$1;
(statearr_36111_37763[(2)] = null);

(statearr_36111_37763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (10))){
var inst_36030 = (state_36071[(2)]);
var inst_36031 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36071__$1 = (function (){var statearr_36112 = state_36071;
(statearr_36112[(13)] = inst_36030);

return statearr_36112;
})();
var statearr_36113_37764 = state_36071__$1;
(statearr_36113_37764[(2)] = inst_36031);


cljs.core.async.impl.ioc_helpers.process_exception(state_36071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (8))){
var inst_36048 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36114_37769 = state_36071__$1;
(statearr_36114_37769[(2)] = inst_36048);

(statearr_36114_37769[(1)] = (5));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36071){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36071);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36116){if((e36116 instanceof Object)){
var ex__34210__auto__ = e36116;
var statearr_36117_37773 = state_36071;
(statearr_36117_37773[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37774 = state_36071;
state_36071 = G__37774;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36118 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36118[(6)] = c__34274__auto___37725);

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
var G__36139 = arguments.length;
switch (G__36139) {
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
var c__34274__auto___37778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36174){
var state_val_36175 = (state_36174[(1)]);
if((state_val_36175 === (7))){
var inst_36150 = (state_36174[(7)]);
var inst_36151 = (state_36174[(8)]);
var inst_36150__$1 = (state_36174[(2)]);
var inst_36151__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36150__$1,(0),null);
var inst_36152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36150__$1,(1),null);
var inst_36153 = (inst_36151__$1 == null);
var state_36174__$1 = (function (){var statearr_36178 = state_36174;
(statearr_36178[(9)] = inst_36152);

(statearr_36178[(7)] = inst_36150__$1);

(statearr_36178[(8)] = inst_36151__$1);

return statearr_36178;
})();
if(cljs.core.truth_(inst_36153)){
var statearr_36179_37779 = state_36174__$1;
(statearr_36179_37779[(1)] = (8));

} else {
var statearr_36180_37781 = state_36174__$1;
(statearr_36180_37781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (1))){
var inst_36140 = cljs.core.vec(chs);
var inst_36141 = inst_36140;
var state_36174__$1 = (function (){var statearr_36181 = state_36174;
(statearr_36181[(10)] = inst_36141);

return statearr_36181;
})();
var statearr_36182_37785 = state_36174__$1;
(statearr_36182_37785[(2)] = null);

(statearr_36182_37785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (4))){
var inst_36141 = (state_36174[(10)]);
var state_36174__$1 = state_36174;
return cljs.core.async.ioc_alts_BANG_(state_36174__$1,(7),inst_36141);
} else {
if((state_val_36175 === (6))){
var inst_36168 = (state_36174[(2)]);
var state_36174__$1 = state_36174;
var statearr_36183_37791 = state_36174__$1;
(statearr_36183_37791[(2)] = inst_36168);

(statearr_36183_37791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (3))){
var inst_36170 = (state_36174[(2)]);
var state_36174__$1 = state_36174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36174__$1,inst_36170);
} else {
if((state_val_36175 === (2))){
var inst_36141 = (state_36174[(10)]);
var inst_36143 = cljs.core.count(inst_36141);
var inst_36144 = (inst_36143 > (0));
var state_36174__$1 = state_36174;
if(cljs.core.truth_(inst_36144)){
var statearr_36185_37796 = state_36174__$1;
(statearr_36185_37796[(1)] = (4));

} else {
var statearr_36186_37797 = state_36174__$1;
(statearr_36186_37797[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (11))){
var inst_36141 = (state_36174[(10)]);
var inst_36161 = (state_36174[(2)]);
var tmp36184 = inst_36141;
var inst_36141__$1 = tmp36184;
var state_36174__$1 = (function (){var statearr_36187 = state_36174;
(statearr_36187[(10)] = inst_36141__$1);

(statearr_36187[(11)] = inst_36161);

return statearr_36187;
})();
var statearr_36188_37799 = state_36174__$1;
(statearr_36188_37799[(2)] = null);

(statearr_36188_37799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (9))){
var inst_36151 = (state_36174[(8)]);
var state_36174__$1 = state_36174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36174__$1,(11),out,inst_36151);
} else {
if((state_val_36175 === (5))){
var inst_36166 = cljs.core.async.close_BANG_(out);
var state_36174__$1 = state_36174;
var statearr_36196_37803 = state_36174__$1;
(statearr_36196_37803[(2)] = inst_36166);

(statearr_36196_37803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (10))){
var inst_36164 = (state_36174[(2)]);
var state_36174__$1 = state_36174;
var statearr_36197_37805 = state_36174__$1;
(statearr_36197_37805[(2)] = inst_36164);

(statearr_36197_37805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36175 === (8))){
var inst_36141 = (state_36174[(10)]);
var inst_36152 = (state_36174[(9)]);
var inst_36150 = (state_36174[(7)]);
var inst_36151 = (state_36174[(8)]);
var inst_36156 = (function (){var cs = inst_36141;
var vec__36146 = inst_36150;
var v = inst_36151;
var c = inst_36152;
return (function (p1__36119_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36119_SHARP_);
});
})();
var inst_36157 = cljs.core.filterv(inst_36156,inst_36141);
var inst_36141__$1 = inst_36157;
var state_36174__$1 = (function (){var statearr_36199 = state_36174;
(statearr_36199[(10)] = inst_36141__$1);

return statearr_36199;
})();
var statearr_36201_37815 = state_36174__$1;
(statearr_36201_37815[(2)] = null);

(statearr_36201_37815[(1)] = (2));


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
var statearr_36204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36204[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36204[(1)] = (1));

return statearr_36204;
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
}catch (e36206){if((e36206 instanceof Object)){
var ex__34210__auto__ = e36206;
var statearr_36207_37818 = state_36174;
(statearr_36207_37818[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36206;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37825 = state_36174;
state_36174 = G__37825;
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
var state__34276__auto__ = (function (){var statearr_36210 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36210[(6)] = c__34274__auto___37778);

return statearr_36210;
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
var c__34274__auto___37836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36241){
var state_val_36242 = (state_36241[(1)]);
if((state_val_36242 === (7))){
var inst_36221 = (state_36241[(7)]);
var inst_36221__$1 = (state_36241[(2)]);
var inst_36222 = (inst_36221__$1 == null);
var inst_36223 = cljs.core.not(inst_36222);
var state_36241__$1 = (function (){var statearr_36250 = state_36241;
(statearr_36250[(7)] = inst_36221__$1);

return statearr_36250;
})();
if(inst_36223){
var statearr_36251_37840 = state_36241__$1;
(statearr_36251_37840[(1)] = (8));

} else {
var statearr_36252_37844 = state_36241__$1;
(statearr_36252_37844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (1))){
var inst_36216 = (0);
var state_36241__$1 = (function (){var statearr_36253 = state_36241;
(statearr_36253[(8)] = inst_36216);

return statearr_36253;
})();
var statearr_36255_37848 = state_36241__$1;
(statearr_36255_37848[(2)] = null);

(statearr_36255_37848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (4))){
var state_36241__$1 = state_36241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36241__$1,(7),ch);
} else {
if((state_val_36242 === (6))){
var inst_36235 = (state_36241[(2)]);
var state_36241__$1 = state_36241;
var statearr_36266_37851 = state_36241__$1;
(statearr_36266_37851[(2)] = inst_36235);

(statearr_36266_37851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (3))){
var inst_36237 = (state_36241[(2)]);
var inst_36239 = cljs.core.async.close_BANG_(out);
var state_36241__$1 = (function (){var statearr_36267 = state_36241;
(statearr_36267[(9)] = inst_36237);

return statearr_36267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36241__$1,inst_36239);
} else {
if((state_val_36242 === (2))){
var inst_36216 = (state_36241[(8)]);
var inst_36218 = (inst_36216 < n);
var state_36241__$1 = state_36241;
if(cljs.core.truth_(inst_36218)){
var statearr_36268_37853 = state_36241__$1;
(statearr_36268_37853[(1)] = (4));

} else {
var statearr_36270_37854 = state_36241__$1;
(statearr_36270_37854[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (11))){
var inst_36216 = (state_36241[(8)]);
var inst_36227 = (state_36241[(2)]);
var inst_36228 = (inst_36216 + (1));
var inst_36216__$1 = inst_36228;
var state_36241__$1 = (function (){var statearr_36271 = state_36241;
(statearr_36271[(8)] = inst_36216__$1);

(statearr_36271[(10)] = inst_36227);

return statearr_36271;
})();
var statearr_36273_37863 = state_36241__$1;
(statearr_36273_37863[(2)] = null);

(statearr_36273_37863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (9))){
var state_36241__$1 = state_36241;
var statearr_36274_37864 = state_36241__$1;
(statearr_36274_37864[(2)] = null);

(statearr_36274_37864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (5))){
var state_36241__$1 = state_36241;
var statearr_36276_37866 = state_36241__$1;
(statearr_36276_37866[(2)] = null);

(statearr_36276_37866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (10))){
var inst_36232 = (state_36241[(2)]);
var state_36241__$1 = state_36241;
var statearr_36278_37868 = state_36241__$1;
(statearr_36278_37868[(2)] = inst_36232);

(statearr_36278_37868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36242 === (8))){
var inst_36221 = (state_36241[(7)]);
var state_36241__$1 = state_36241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36241__$1,(11),out,inst_36221);
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
var statearr_36280 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36280[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36280[(1)] = (1));

return statearr_36280;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36241){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36241);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36281){if((e36281 instanceof Object)){
var ex__34210__auto__ = e36281;
var statearr_36284_37877 = state_36241;
(statearr_36284_37877[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36281;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37879 = state_36241;
state_36241 = G__37879;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36285 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36285[(6)] = c__34274__auto___37836);

return statearr_36285;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36289 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36289 = (function (f,ch,meta36290){
this.f = f;
this.ch = ch;
this.meta36290 = meta36290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36291,meta36290__$1){
var self__ = this;
var _36291__$1 = this;
return (new cljs.core.async.t_cljs$core$async36289(self__.f,self__.ch,meta36290__$1));
}));

(cljs.core.async.t_cljs$core$async36289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36291){
var self__ = this;
var _36291__$1 = this;
return self__.meta36290;
}));

(cljs.core.async.t_cljs$core$async36289.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36289.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36289.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36289.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36289.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36301 = (function (f,ch,meta36290,_,fn1,meta36302){
this.f = f;
this.ch = ch;
this.meta36290 = meta36290;
this._ = _;
this.fn1 = fn1;
this.meta36302 = meta36302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36303,meta36302__$1){
var self__ = this;
var _36303__$1 = this;
return (new cljs.core.async.t_cljs$core$async36301(self__.f,self__.ch,self__.meta36290,self__._,self__.fn1,meta36302__$1));
}));

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36303){
var self__ = this;
var _36303__$1 = this;
return self__.meta36302;
}));

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36301.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36286_SHARP_){
var G__36310 = (((p1__36286_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36286_SHARP_) : self__.f.call(null,p1__36286_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36310) : f1.call(null,G__36310));
});
}));

(cljs.core.async.t_cljs$core$async36301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36290","meta36290",1659100923,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36289","cljs.core.async/t_cljs$core$async36289",-1156789670,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36302","meta36302",-20229454,null)], null);
}));

(cljs.core.async.t_cljs$core$async36301.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36301");

(cljs.core.async.t_cljs$core$async36301.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36301");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36301.
 */
cljs.core.async.__GT_t_cljs$core$async36301 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36301(f__$1,ch__$1,meta36290__$1,___$2,fn1__$1,meta36302){
return (new cljs.core.async.t_cljs$core$async36301(f__$1,ch__$1,meta36290__$1,___$2,fn1__$1,meta36302));
});

}

return (new cljs.core.async.t_cljs$core$async36301(self__.f,self__.ch,self__.meta36290,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36315 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36315) : self__.f.call(null,G__36315));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36289.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36289.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36290","meta36290",1659100923,null)], null);
}));

(cljs.core.async.t_cljs$core$async36289.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36289");

(cljs.core.async.t_cljs$core$async36289.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36289");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36289.
 */
cljs.core.async.__GT_t_cljs$core$async36289 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36289(f__$1,ch__$1,meta36290){
return (new cljs.core.async.t_cljs$core$async36289(f__$1,ch__$1,meta36290));
});

}

return (new cljs.core.async.t_cljs$core$async36289(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36320 = (function (f,ch,meta36321){
this.f = f;
this.ch = ch;
this.meta36321 = meta36321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36322,meta36321__$1){
var self__ = this;
var _36322__$1 = this;
return (new cljs.core.async.t_cljs$core$async36320(self__.f,self__.ch,meta36321__$1));
}));

(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36322){
var self__ = this;
var _36322__$1 = this;
return self__.meta36321;
}));

(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36320.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36321","meta36321",931301641,null)], null);
}));

(cljs.core.async.t_cljs$core$async36320.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36320");

(cljs.core.async.t_cljs$core$async36320.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36320");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36320.
 */
cljs.core.async.__GT_t_cljs$core$async36320 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36320(f__$1,ch__$1,meta36321){
return (new cljs.core.async.t_cljs$core$async36320(f__$1,ch__$1,meta36321));
});

}

return (new cljs.core.async.t_cljs$core$async36320(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36337 = (function (p,ch,meta36338){
this.p = p;
this.ch = ch;
this.meta36338 = meta36338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36339,meta36338__$1){
var self__ = this;
var _36339__$1 = this;
return (new cljs.core.async.t_cljs$core$async36337(self__.p,self__.ch,meta36338__$1));
}));

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36339){
var self__ = this;
var _36339__$1 = this;
return self__.meta36338;
}));

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36338","meta36338",-1451819658,null)], null);
}));

(cljs.core.async.t_cljs$core$async36337.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36337");

(cljs.core.async.t_cljs$core$async36337.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36337");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36337.
 */
cljs.core.async.__GT_t_cljs$core$async36337 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36337(p__$1,ch__$1,meta36338){
return (new cljs.core.async.t_cljs$core$async36337(p__$1,ch__$1,meta36338));
});

}

return (new cljs.core.async.t_cljs$core$async36337(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36356 = arguments.length;
switch (G__36356) {
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
var c__34274__auto___37943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36381){
var state_val_36383 = (state_36381[(1)]);
if((state_val_36383 === (7))){
var inst_36377 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36385_37944 = state_36381__$1;
(statearr_36385_37944[(2)] = inst_36377);

(statearr_36385_37944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (1))){
var state_36381__$1 = state_36381;
var statearr_36387_37946 = state_36381__$1;
(statearr_36387_37946[(2)] = null);

(statearr_36387_37946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (4))){
var inst_36363 = (state_36381[(7)]);
var inst_36363__$1 = (state_36381[(2)]);
var inst_36364 = (inst_36363__$1 == null);
var state_36381__$1 = (function (){var statearr_36388 = state_36381;
(statearr_36388[(7)] = inst_36363__$1);

return statearr_36388;
})();
if(cljs.core.truth_(inst_36364)){
var statearr_36389_37951 = state_36381__$1;
(statearr_36389_37951[(1)] = (5));

} else {
var statearr_36390_37952 = state_36381__$1;
(statearr_36390_37952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (6))){
var inst_36363 = (state_36381[(7)]);
var inst_36368 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36363) : p.call(null,inst_36363));
var state_36381__$1 = state_36381;
if(cljs.core.truth_(inst_36368)){
var statearr_36394_37954 = state_36381__$1;
(statearr_36394_37954[(1)] = (8));

} else {
var statearr_36395_37955 = state_36381__$1;
(statearr_36395_37955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (3))){
var inst_36379 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36381__$1,inst_36379);
} else {
if((state_val_36383 === (2))){
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36381__$1,(4),ch);
} else {
if((state_val_36383 === (11))){
var inst_36371 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36397_37960 = state_36381__$1;
(statearr_36397_37960[(2)] = inst_36371);

(statearr_36397_37960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (9))){
var state_36381__$1 = state_36381;
var statearr_36399_37961 = state_36381__$1;
(statearr_36399_37961[(2)] = null);

(statearr_36399_37961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (5))){
var inst_36366 = cljs.core.async.close_BANG_(out);
var state_36381__$1 = state_36381;
var statearr_36405_37963 = state_36381__$1;
(statearr_36405_37963[(2)] = inst_36366);

(statearr_36405_37963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (10))){
var inst_36374 = (state_36381[(2)]);
var state_36381__$1 = (function (){var statearr_36410 = state_36381;
(statearr_36410[(8)] = inst_36374);

return statearr_36410;
})();
var statearr_36412_37968 = state_36381__$1;
(statearr_36412_37968[(2)] = null);

(statearr_36412_37968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36383 === (8))){
var inst_36363 = (state_36381[(7)]);
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36381__$1,(11),out,inst_36363);
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
var statearr_36414 = [null,null,null,null,null,null,null,null,null];
(statearr_36414[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36414[(1)] = (1));

return statearr_36414;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36381){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36381);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36415){if((e36415 instanceof Object)){
var ex__34210__auto__ = e36415;
var statearr_36416_37972 = state_36381;
(statearr_36416_37972[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36415;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37975 = state_36381;
state_36381 = G__37975;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36420 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36420[(6)] = c__34274__auto___37943);

return statearr_36420;
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
var G__36423 = arguments.length;
switch (G__36423) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36504){
var state_val_36505 = (state_36504[(1)]);
if((state_val_36505 === (7))){
var inst_36496 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
var statearr_36518_37991 = state_36504__$1;
(statearr_36518_37991[(2)] = inst_36496);

(statearr_36518_37991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (20))){
var inst_36465 = (state_36504[(7)]);
var inst_36476 = (state_36504[(2)]);
var inst_36477 = cljs.core.next(inst_36465);
var inst_36444 = inst_36477;
var inst_36445 = null;
var inst_36446 = (0);
var inst_36447 = (0);
var state_36504__$1 = (function (){var statearr_36522 = state_36504;
(statearr_36522[(8)] = inst_36445);

(statearr_36522[(9)] = inst_36447);

(statearr_36522[(10)] = inst_36476);

(statearr_36522[(11)] = inst_36444);

(statearr_36522[(12)] = inst_36446);

return statearr_36522;
})();
var statearr_36524_37996 = state_36504__$1;
(statearr_36524_37996[(2)] = null);

(statearr_36524_37996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (1))){
var state_36504__$1 = state_36504;
var statearr_36525_37998 = state_36504__$1;
(statearr_36525_37998[(2)] = null);

(statearr_36525_37998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (4))){
var inst_36433 = (state_36504[(13)]);
var inst_36433__$1 = (state_36504[(2)]);
var inst_36434 = (inst_36433__$1 == null);
var state_36504__$1 = (function (){var statearr_36526 = state_36504;
(statearr_36526[(13)] = inst_36433__$1);

return statearr_36526;
})();
if(cljs.core.truth_(inst_36434)){
var statearr_36527_38003 = state_36504__$1;
(statearr_36527_38003[(1)] = (5));

} else {
var statearr_36528_38004 = state_36504__$1;
(statearr_36528_38004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (15))){
var state_36504__$1 = state_36504;
var statearr_36534_38005 = state_36504__$1;
(statearr_36534_38005[(2)] = null);

(statearr_36534_38005[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (21))){
var state_36504__$1 = state_36504;
var statearr_36535_38006 = state_36504__$1;
(statearr_36535_38006[(2)] = null);

(statearr_36535_38006[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (13))){
var inst_36445 = (state_36504[(8)]);
var inst_36447 = (state_36504[(9)]);
var inst_36444 = (state_36504[(11)]);
var inst_36446 = (state_36504[(12)]);
var inst_36460 = (state_36504[(2)]);
var inst_36461 = (inst_36447 + (1));
var tmp36530 = inst_36445;
var tmp36531 = inst_36444;
var tmp36532 = inst_36446;
var inst_36444__$1 = tmp36531;
var inst_36445__$1 = tmp36530;
var inst_36446__$1 = tmp36532;
var inst_36447__$1 = inst_36461;
var state_36504__$1 = (function (){var statearr_36538 = state_36504;
(statearr_36538[(8)] = inst_36445__$1);

(statearr_36538[(9)] = inst_36447__$1);

(statearr_36538[(11)] = inst_36444__$1);

(statearr_36538[(12)] = inst_36446__$1);

(statearr_36538[(14)] = inst_36460);

return statearr_36538;
})();
var statearr_36540_38012 = state_36504__$1;
(statearr_36540_38012[(2)] = null);

(statearr_36540_38012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (22))){
var state_36504__$1 = state_36504;
var statearr_36541_38013 = state_36504__$1;
(statearr_36541_38013[(2)] = null);

(statearr_36541_38013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (6))){
var inst_36433 = (state_36504[(13)]);
var inst_36442 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36433) : f.call(null,inst_36433));
var inst_36443 = cljs.core.seq(inst_36442);
var inst_36444 = inst_36443;
var inst_36445 = null;
var inst_36446 = (0);
var inst_36447 = (0);
var state_36504__$1 = (function (){var statearr_36544 = state_36504;
(statearr_36544[(8)] = inst_36445);

(statearr_36544[(9)] = inst_36447);

(statearr_36544[(11)] = inst_36444);

(statearr_36544[(12)] = inst_36446);

return statearr_36544;
})();
var statearr_36545_38018 = state_36504__$1;
(statearr_36545_38018[(2)] = null);

(statearr_36545_38018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (17))){
var inst_36465 = (state_36504[(7)]);
var inst_36469 = cljs.core.chunk_first(inst_36465);
var inst_36470 = cljs.core.chunk_rest(inst_36465);
var inst_36471 = cljs.core.count(inst_36469);
var inst_36444 = inst_36470;
var inst_36445 = inst_36469;
var inst_36446 = inst_36471;
var inst_36447 = (0);
var state_36504__$1 = (function (){var statearr_36550 = state_36504;
(statearr_36550[(8)] = inst_36445);

(statearr_36550[(9)] = inst_36447);

(statearr_36550[(11)] = inst_36444);

(statearr_36550[(12)] = inst_36446);

return statearr_36550;
})();
var statearr_36551_38022 = state_36504__$1;
(statearr_36551_38022[(2)] = null);

(statearr_36551_38022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (3))){
var inst_36498 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36504__$1,inst_36498);
} else {
if((state_val_36505 === (12))){
var inst_36485 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
var statearr_36552_38024 = state_36504__$1;
(statearr_36552_38024[(2)] = inst_36485);

(statearr_36552_38024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (2))){
var state_36504__$1 = state_36504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36504__$1,(4),in$);
} else {
if((state_val_36505 === (23))){
var inst_36494 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
var statearr_36554_38025 = state_36504__$1;
(statearr_36554_38025[(2)] = inst_36494);

(statearr_36554_38025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (19))){
var inst_36480 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
var statearr_36555_38027 = state_36504__$1;
(statearr_36555_38027[(2)] = inst_36480);

(statearr_36555_38027[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (11))){
var inst_36444 = (state_36504[(11)]);
var inst_36465 = (state_36504[(7)]);
var inst_36465__$1 = cljs.core.seq(inst_36444);
var state_36504__$1 = (function (){var statearr_36556 = state_36504;
(statearr_36556[(7)] = inst_36465__$1);

return statearr_36556;
})();
if(inst_36465__$1){
var statearr_36557_38032 = state_36504__$1;
(statearr_36557_38032[(1)] = (14));

} else {
var statearr_36559_38033 = state_36504__$1;
(statearr_36559_38033[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (9))){
var inst_36487 = (state_36504[(2)]);
var inst_36488 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36504__$1 = (function (){var statearr_36560 = state_36504;
(statearr_36560[(15)] = inst_36487);

return statearr_36560;
})();
if(cljs.core.truth_(inst_36488)){
var statearr_36563_38034 = state_36504__$1;
(statearr_36563_38034[(1)] = (21));

} else {
var statearr_36564_38035 = state_36504__$1;
(statearr_36564_38035[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (5))){
var inst_36436 = cljs.core.async.close_BANG_(out);
var state_36504__$1 = state_36504;
var statearr_36567_38036 = state_36504__$1;
(statearr_36567_38036[(2)] = inst_36436);

(statearr_36567_38036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (14))){
var inst_36465 = (state_36504[(7)]);
var inst_36467 = cljs.core.chunked_seq_QMARK_(inst_36465);
var state_36504__$1 = state_36504;
if(inst_36467){
var statearr_36568_38037 = state_36504__$1;
(statearr_36568_38037[(1)] = (17));

} else {
var statearr_36569_38041 = state_36504__$1;
(statearr_36569_38041[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (16))){
var inst_36483 = (state_36504[(2)]);
var state_36504__$1 = state_36504;
var statearr_36571_38042 = state_36504__$1;
(statearr_36571_38042[(2)] = inst_36483);

(statearr_36571_38042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36505 === (10))){
var inst_36445 = (state_36504[(8)]);
var inst_36447 = (state_36504[(9)]);
var inst_36457 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36445,inst_36447);
var state_36504__$1 = state_36504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36504__$1,(13),out,inst_36457);
} else {
if((state_val_36505 === (18))){
var inst_36465 = (state_36504[(7)]);
var inst_36474 = cljs.core.first(inst_36465);
var state_36504__$1 = state_36504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36504__$1,(20),out,inst_36474);
} else {
if((state_val_36505 === (8))){
var inst_36447 = (state_36504[(9)]);
var inst_36446 = (state_36504[(12)]);
var inst_36454 = (inst_36447 < inst_36446);
var inst_36455 = inst_36454;
var state_36504__$1 = state_36504;
if(cljs.core.truth_(inst_36455)){
var statearr_36573_38047 = state_36504__$1;
(statearr_36573_38047[(1)] = (10));

} else {
var statearr_36574_38048 = state_36504__$1;
(statearr_36574_38048[(1)] = (11));

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
var statearr_36576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36576[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36576[(1)] = (1));

return statearr_36576;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36504){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36504);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36577){if((e36577 instanceof Object)){
var ex__34210__auto__ = e36577;
var statearr_36578_38049 = state_36504;
(statearr_36578_38049[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36577;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38050 = state_36504;
state_36504 = G__38050;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36504){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36580 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36580[(6)] = c__34274__auto__);

return statearr_36580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36583 = arguments.length;
switch (G__36583) {
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
var G__36587 = arguments.length;
switch (G__36587) {
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
var G__36591 = arguments.length;
switch (G__36591) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36617){
var state_val_36618 = (state_36617[(1)]);
if((state_val_36618 === (7))){
var inst_36612 = (state_36617[(2)]);
var state_36617__$1 = state_36617;
var statearr_36620_38060 = state_36617__$1;
(statearr_36620_38060[(2)] = inst_36612);

(statearr_36620_38060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (1))){
var inst_36593 = null;
var state_36617__$1 = (function (){var statearr_36622 = state_36617;
(statearr_36622[(7)] = inst_36593);

return statearr_36622;
})();
var statearr_36623_38065 = state_36617__$1;
(statearr_36623_38065[(2)] = null);

(statearr_36623_38065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (4))){
var inst_36597 = (state_36617[(8)]);
var inst_36597__$1 = (state_36617[(2)]);
var inst_36598 = (inst_36597__$1 == null);
var inst_36599 = cljs.core.not(inst_36598);
var state_36617__$1 = (function (){var statearr_36624 = state_36617;
(statearr_36624[(8)] = inst_36597__$1);

return statearr_36624;
})();
if(inst_36599){
var statearr_36625_38067 = state_36617__$1;
(statearr_36625_38067[(1)] = (5));

} else {
var statearr_36627_38068 = state_36617__$1;
(statearr_36627_38068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (6))){
var state_36617__$1 = state_36617;
var statearr_36628_38071 = state_36617__$1;
(statearr_36628_38071[(2)] = null);

(statearr_36628_38071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (3))){
var inst_36614 = (state_36617[(2)]);
var inst_36615 = cljs.core.async.close_BANG_(out);
var state_36617__$1 = (function (){var statearr_36629 = state_36617;
(statearr_36629[(9)] = inst_36614);

return statearr_36629;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36617__$1,inst_36615);
} else {
if((state_val_36618 === (2))){
var state_36617__$1 = state_36617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36617__$1,(4),ch);
} else {
if((state_val_36618 === (11))){
var inst_36597 = (state_36617[(8)]);
var inst_36606 = (state_36617[(2)]);
var inst_36593 = inst_36597;
var state_36617__$1 = (function (){var statearr_36631 = state_36617;
(statearr_36631[(7)] = inst_36593);

(statearr_36631[(10)] = inst_36606);

return statearr_36631;
})();
var statearr_36632_38072 = state_36617__$1;
(statearr_36632_38072[(2)] = null);

(statearr_36632_38072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (9))){
var inst_36597 = (state_36617[(8)]);
var state_36617__$1 = state_36617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36617__$1,(11),out,inst_36597);
} else {
if((state_val_36618 === (5))){
var inst_36593 = (state_36617[(7)]);
var inst_36597 = (state_36617[(8)]);
var inst_36601 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36597,inst_36593);
var state_36617__$1 = state_36617;
if(inst_36601){
var statearr_36635_38074 = state_36617__$1;
(statearr_36635_38074[(1)] = (8));

} else {
var statearr_36636_38076 = state_36617__$1;
(statearr_36636_38076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (10))){
var inst_36609 = (state_36617[(2)]);
var state_36617__$1 = state_36617;
var statearr_36637_38078 = state_36617__$1;
(statearr_36637_38078[(2)] = inst_36609);

(statearr_36637_38078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36618 === (8))){
var inst_36593 = (state_36617[(7)]);
var tmp36634 = inst_36593;
var inst_36593__$1 = tmp36634;
var state_36617__$1 = (function (){var statearr_36639 = state_36617;
(statearr_36639[(7)] = inst_36593__$1);

return statearr_36639;
})();
var statearr_36640_38079 = state_36617__$1;
(statearr_36640_38079[(2)] = null);

(statearr_36640_38079[(1)] = (2));


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
var statearr_36642 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36642[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36642[(1)] = (1));

return statearr_36642;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36617){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36617);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36643){if((e36643 instanceof Object)){
var ex__34210__auto__ = e36643;
var statearr_36644_38084 = state_36617;
(statearr_36644_38084[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36643;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38085 = state_36617;
state_36617 = G__38085;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36646 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36646[(6)] = c__34274__auto___38059);

return statearr_36646;
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
var G__36649 = arguments.length;
switch (G__36649) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36690){
var state_val_36691 = (state_36690[(1)]);
if((state_val_36691 === (7))){
var inst_36685 = (state_36690[(2)]);
var state_36690__$1 = state_36690;
var statearr_36693_38093 = state_36690__$1;
(statearr_36693_38093[(2)] = inst_36685);

(statearr_36693_38093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (1))){
var inst_36651 = (new Array(n));
var inst_36653 = inst_36651;
var inst_36654 = (0);
var state_36690__$1 = (function (){var statearr_36694 = state_36690;
(statearr_36694[(7)] = inst_36653);

(statearr_36694[(8)] = inst_36654);

return statearr_36694;
})();
var statearr_36695_38095 = state_36690__$1;
(statearr_36695_38095[(2)] = null);

(statearr_36695_38095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (4))){
var inst_36657 = (state_36690[(9)]);
var inst_36657__$1 = (state_36690[(2)]);
var inst_36658 = (inst_36657__$1 == null);
var inst_36659 = cljs.core.not(inst_36658);
var state_36690__$1 = (function (){var statearr_36697 = state_36690;
(statearr_36697[(9)] = inst_36657__$1);

return statearr_36697;
})();
if(inst_36659){
var statearr_36698_38100 = state_36690__$1;
(statearr_36698_38100[(1)] = (5));

} else {
var statearr_36699_38101 = state_36690__$1;
(statearr_36699_38101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (15))){
var inst_36679 = (state_36690[(2)]);
var state_36690__$1 = state_36690;
var statearr_36700_38102 = state_36690__$1;
(statearr_36700_38102[(2)] = inst_36679);

(statearr_36700_38102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (13))){
var state_36690__$1 = state_36690;
var statearr_36702_38103 = state_36690__$1;
(statearr_36702_38103[(2)] = null);

(statearr_36702_38103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (6))){
var inst_36654 = (state_36690[(8)]);
var inst_36675 = (inst_36654 > (0));
var state_36690__$1 = state_36690;
if(cljs.core.truth_(inst_36675)){
var statearr_36703_38104 = state_36690__$1;
(statearr_36703_38104[(1)] = (12));

} else {
var statearr_36704_38105 = state_36690__$1;
(statearr_36704_38105[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (3))){
var inst_36687 = (state_36690[(2)]);
var state_36690__$1 = state_36690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36690__$1,inst_36687);
} else {
if((state_val_36691 === (12))){
var inst_36653 = (state_36690[(7)]);
var inst_36677 = cljs.core.vec(inst_36653);
var state_36690__$1 = state_36690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36690__$1,(15),out,inst_36677);
} else {
if((state_val_36691 === (2))){
var state_36690__$1 = state_36690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36690__$1,(4),ch);
} else {
if((state_val_36691 === (11))){
var inst_36669 = (state_36690[(2)]);
var inst_36670 = (new Array(n));
var inst_36653 = inst_36670;
var inst_36654 = (0);
var state_36690__$1 = (function (){var statearr_36707 = state_36690;
(statearr_36707[(7)] = inst_36653);

(statearr_36707[(10)] = inst_36669);

(statearr_36707[(8)] = inst_36654);

return statearr_36707;
})();
var statearr_36708_38109 = state_36690__$1;
(statearr_36708_38109[(2)] = null);

(statearr_36708_38109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (9))){
var inst_36653 = (state_36690[(7)]);
var inst_36667 = cljs.core.vec(inst_36653);
var state_36690__$1 = state_36690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36690__$1,(11),out,inst_36667);
} else {
if((state_val_36691 === (5))){
var inst_36653 = (state_36690[(7)]);
var inst_36657 = (state_36690[(9)]);
var inst_36662 = (state_36690[(11)]);
var inst_36654 = (state_36690[(8)]);
var inst_36661 = (inst_36653[inst_36654] = inst_36657);
var inst_36662__$1 = (inst_36654 + (1));
var inst_36663 = (inst_36662__$1 < n);
var state_36690__$1 = (function (){var statearr_36710 = state_36690;
(statearr_36710[(12)] = inst_36661);

(statearr_36710[(11)] = inst_36662__$1);

return statearr_36710;
})();
if(cljs.core.truth_(inst_36663)){
var statearr_36711_38114 = state_36690__$1;
(statearr_36711_38114[(1)] = (8));

} else {
var statearr_36712_38115 = state_36690__$1;
(statearr_36712_38115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (14))){
var inst_36682 = (state_36690[(2)]);
var inst_36683 = cljs.core.async.close_BANG_(out);
var state_36690__$1 = (function (){var statearr_36715 = state_36690;
(statearr_36715[(13)] = inst_36682);

return statearr_36715;
})();
var statearr_36716_38116 = state_36690__$1;
(statearr_36716_38116[(2)] = inst_36683);

(statearr_36716_38116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (10))){
var inst_36673 = (state_36690[(2)]);
var state_36690__$1 = state_36690;
var statearr_36717_38117 = state_36690__$1;
(statearr_36717_38117[(2)] = inst_36673);

(statearr_36717_38117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36691 === (8))){
var inst_36653 = (state_36690[(7)]);
var inst_36662 = (state_36690[(11)]);
var tmp36713 = inst_36653;
var inst_36653__$1 = tmp36713;
var inst_36654 = inst_36662;
var state_36690__$1 = (function (){var statearr_36718 = state_36690;
(statearr_36718[(7)] = inst_36653__$1);

(statearr_36718[(8)] = inst_36654);

return statearr_36718;
})();
var statearr_36720_38120 = state_36690__$1;
(statearr_36720_38120[(2)] = null);

(statearr_36720_38120[(1)] = (2));


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
var statearr_36721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36721[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36721[(1)] = (1));

return statearr_36721;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36690){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36690);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36726){if((e36726 instanceof Object)){
var ex__34210__auto__ = e36726;
var statearr_36727_38121 = state_36690;
(statearr_36727_38121[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36726;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38122 = state_36690;
state_36690 = G__38122;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36729 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36729[(6)] = c__34274__auto___38092);

return statearr_36729;
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
var G__36732 = arguments.length;
switch (G__36732) {
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
var c__34274__auto___38127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36777){
var state_val_36778 = (state_36777[(1)]);
if((state_val_36778 === (7))){
var inst_36773 = (state_36777[(2)]);
var state_36777__$1 = state_36777;
var statearr_36780_38128 = state_36777__$1;
(statearr_36780_38128[(2)] = inst_36773);

(statearr_36780_38128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (1))){
var inst_36735 = [];
var inst_36736 = inst_36735;
var inst_36737 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36777__$1 = (function (){var statearr_36782 = state_36777;
(statearr_36782[(7)] = inst_36737);

(statearr_36782[(8)] = inst_36736);

return statearr_36782;
})();
var statearr_36783_38132 = state_36777__$1;
(statearr_36783_38132[(2)] = null);

(statearr_36783_38132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (4))){
var inst_36740 = (state_36777[(9)]);
var inst_36740__$1 = (state_36777[(2)]);
var inst_36741 = (inst_36740__$1 == null);
var inst_36742 = cljs.core.not(inst_36741);
var state_36777__$1 = (function (){var statearr_36784 = state_36777;
(statearr_36784[(9)] = inst_36740__$1);

return statearr_36784;
})();
if(inst_36742){
var statearr_36785_38133 = state_36777__$1;
(statearr_36785_38133[(1)] = (5));

} else {
var statearr_36787_38134 = state_36777__$1;
(statearr_36787_38134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (15))){
var inst_36767 = (state_36777[(2)]);
var state_36777__$1 = state_36777;
var statearr_36788_38135 = state_36777__$1;
(statearr_36788_38135[(2)] = inst_36767);

(statearr_36788_38135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (13))){
var state_36777__$1 = state_36777;
var statearr_36789_38138 = state_36777__$1;
(statearr_36789_38138[(2)] = null);

(statearr_36789_38138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (6))){
var inst_36736 = (state_36777[(8)]);
var inst_36762 = inst_36736.length;
var inst_36763 = (inst_36762 > (0));
var state_36777__$1 = state_36777;
if(cljs.core.truth_(inst_36763)){
var statearr_36791_38140 = state_36777__$1;
(statearr_36791_38140[(1)] = (12));

} else {
var statearr_36792_38141 = state_36777__$1;
(statearr_36792_38141[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (3))){
var inst_36775 = (state_36777[(2)]);
var state_36777__$1 = state_36777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36777__$1,inst_36775);
} else {
if((state_val_36778 === (12))){
var inst_36736 = (state_36777[(8)]);
var inst_36765 = cljs.core.vec(inst_36736);
var state_36777__$1 = state_36777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36777__$1,(15),out,inst_36765);
} else {
if((state_val_36778 === (2))){
var state_36777__$1 = state_36777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36777__$1,(4),ch);
} else {
if((state_val_36778 === (11))){
var inst_36740 = (state_36777[(9)]);
var inst_36744 = (state_36777[(10)]);
var inst_36754 = (state_36777[(2)]);
var inst_36755 = [];
var inst_36756 = inst_36755.push(inst_36740);
var inst_36736 = inst_36755;
var inst_36737 = inst_36744;
var state_36777__$1 = (function (){var statearr_36794 = state_36777;
(statearr_36794[(7)] = inst_36737);

(statearr_36794[(8)] = inst_36736);

(statearr_36794[(11)] = inst_36754);

(statearr_36794[(12)] = inst_36756);

return statearr_36794;
})();
var statearr_36796_38145 = state_36777__$1;
(statearr_36796_38145[(2)] = null);

(statearr_36796_38145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (9))){
var inst_36736 = (state_36777[(8)]);
var inst_36752 = cljs.core.vec(inst_36736);
var state_36777__$1 = state_36777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36777__$1,(11),out,inst_36752);
} else {
if((state_val_36778 === (5))){
var inst_36737 = (state_36777[(7)]);
var inst_36740 = (state_36777[(9)]);
var inst_36744 = (state_36777[(10)]);
var inst_36744__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36740) : f.call(null,inst_36740));
var inst_36745 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36744__$1,inst_36737);
var inst_36746 = cljs.core.keyword_identical_QMARK_(inst_36737,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36747 = ((inst_36745) || (inst_36746));
var state_36777__$1 = (function (){var statearr_36798 = state_36777;
(statearr_36798[(10)] = inst_36744__$1);

return statearr_36798;
})();
if(cljs.core.truth_(inst_36747)){
var statearr_36799_38148 = state_36777__$1;
(statearr_36799_38148[(1)] = (8));

} else {
var statearr_36800_38149 = state_36777__$1;
(statearr_36800_38149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (14))){
var inst_36770 = (state_36777[(2)]);
var inst_36771 = cljs.core.async.close_BANG_(out);
var state_36777__$1 = (function (){var statearr_36802 = state_36777;
(statearr_36802[(13)] = inst_36770);

return statearr_36802;
})();
var statearr_36803_38151 = state_36777__$1;
(statearr_36803_38151[(2)] = inst_36771);

(statearr_36803_38151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (10))){
var inst_36759 = (state_36777[(2)]);
var state_36777__$1 = state_36777;
var statearr_36805_38152 = state_36777__$1;
(statearr_36805_38152[(2)] = inst_36759);

(statearr_36805_38152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36778 === (8))){
var inst_36740 = (state_36777[(9)]);
var inst_36736 = (state_36777[(8)]);
var inst_36744 = (state_36777[(10)]);
var inst_36749 = inst_36736.push(inst_36740);
var tmp36801 = inst_36736;
var inst_36736__$1 = tmp36801;
var inst_36737 = inst_36744;
var state_36777__$1 = (function (){var statearr_36806 = state_36777;
(statearr_36806[(7)] = inst_36737);

(statearr_36806[(8)] = inst_36736__$1);

(statearr_36806[(14)] = inst_36749);

return statearr_36806;
})();
var statearr_36808_38155 = state_36777__$1;
(statearr_36808_38155[(2)] = null);

(statearr_36808_38155[(1)] = (2));


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
var statearr_36809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36809[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36809[(1)] = (1));

return statearr_36809;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36777){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36777);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36811){if((e36811 instanceof Object)){
var ex__34210__auto__ = e36811;
var statearr_36812_38157 = state_36777;
(statearr_36812_38157[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36811;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38159 = state_36777;
state_36777 = G__38159;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36814 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36814[(6)] = c__34274__auto___38127);

return statearr_36814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
