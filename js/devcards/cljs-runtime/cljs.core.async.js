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
var val_36813 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36813) : fn1.call(null,val_36813));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36813) : fn1.call(null,val_36813));
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
var n__4666__auto___36819 = n;
var x_36820 = (0);
while(true){
if((x_36820 < n__4666__auto___36819)){
(a[x_36820] = x_36820);

var G__36821 = (x_36820 + (1));
x_36820 = G__36821;
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
return (function (p1__34354_SHARP_){
var G__34360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34354_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34360) : fret.call(null,G__34360));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34355_SHARP_){
var G__34364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34355_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34364) : fret.call(null,G__34364));
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
var G__36832 = (i + (1));
i = G__36832;
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
var len__4789__auto___36835 = arguments.length;
var i__4790__auto___36836 = (0);
while(true){
if((i__4790__auto___36836 < len__4789__auto___36835)){
args__4795__auto__.push((arguments[i__4790__auto___36836]));

var G__36837 = (i__4790__auto___36836 + (1));
i__4790__auto___36836 = G__36837;
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
var c__34272__auto___36843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34408){
var state_val_34409 = (state_34408[(1)]);
if((state_val_34409 === (7))){
var inst_34404 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34413_36844 = state_34408__$1;
(statearr_34413_36844[(2)] = inst_34404);

(statearr_34413_36844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (1))){
var state_34408__$1 = state_34408;
var statearr_34414_36846 = state_34408__$1;
(statearr_34414_36846[(2)] = null);

(statearr_34414_36846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (4))){
var inst_34387 = (state_34408[(7)]);
var inst_34387__$1 = (state_34408[(2)]);
var inst_34388 = (inst_34387__$1 == null);
var state_34408__$1 = (function (){var statearr_34415 = state_34408;
(statearr_34415[(7)] = inst_34387__$1);

return statearr_34415;
})();
if(cljs.core.truth_(inst_34388)){
var statearr_34416_36848 = state_34408__$1;
(statearr_34416_36848[(1)] = (5));

} else {
var statearr_34417_36849 = state_34408__$1;
(statearr_34417_36849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (13))){
var state_34408__$1 = state_34408;
var statearr_34418_36850 = state_34408__$1;
(statearr_34418_36850[(2)] = null);

(statearr_34418_36850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (6))){
var inst_34387 = (state_34408[(7)]);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34408__$1,(11),to,inst_34387);
} else {
if((state_val_34409 === (3))){
var inst_34406 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34408__$1,inst_34406);
} else {
if((state_val_34409 === (12))){
var state_34408__$1 = state_34408;
var statearr_34419_36852 = state_34408__$1;
(statearr_34419_36852[(2)] = null);

(statearr_34419_36852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (2))){
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34408__$1,(4),from);
} else {
if((state_val_34409 === (11))){
var inst_34397 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
if(cljs.core.truth_(inst_34397)){
var statearr_34423_36854 = state_34408__$1;
(statearr_34423_36854[(1)] = (12));

} else {
var statearr_34424_36855 = state_34408__$1;
(statearr_34424_36855[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (9))){
var state_34408__$1 = state_34408;
var statearr_34428_36856 = state_34408__$1;
(statearr_34428_36856[(2)] = null);

(statearr_34428_36856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (5))){
var state_34408__$1 = state_34408;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34432_36858 = state_34408__$1;
(statearr_34432_36858[(1)] = (8));

} else {
var statearr_34433_36859 = state_34408__$1;
(statearr_34433_36859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (14))){
var inst_34402 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34437_36860 = state_34408__$1;
(statearr_34437_36860[(2)] = inst_34402);

(statearr_34437_36860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (10))){
var inst_34394 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34438_36862 = state_34408__$1;
(statearr_34438_36862[(2)] = inst_34394);

(statearr_34438_36862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (8))){
var inst_34391 = cljs.core.async.close_BANG_(to);
var state_34408__$1 = state_34408;
var statearr_34439_36863 = state_34408__$1;
(statearr_34439_36863[(2)] = inst_34391);

(statearr_34439_36863[(1)] = (10));


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
}catch (e34441){if((e34441 instanceof Object)){
var ex__34210__auto__ = e34441;
var statearr_34442_36865 = state_34408;
(statearr_34442_36865[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36866 = state_34408;
state_34408 = G__36866;
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
var state__34275__auto__ = (function (){var statearr_34443 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34443[(6)] = c__34272__auto___36843);

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
var c__34272__auto___36870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34457_36873 = state_34452;
(statearr_34457_36873[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36875 = state_34452;
state_34452 = G__36875;
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
(statearr_34458[(6)] = c__34272__auto___36870);

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
var n__4666__auto___36878 = n;
var __36879 = (0);
while(true){
if((__36879 < n__4666__auto___36878)){
var G__34463_36880 = type;
var G__34463_36881__$1 = (((G__34463_36880 instanceof cljs.core.Keyword))?G__34463_36880.fqn:null);
switch (G__34463_36881__$1) {
case "compute":
var c__34272__auto___36883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36879,c__34272__auto___36883,G__34463_36880,G__34463_36881__$1,n__4666__auto___36878,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36879,c__34272__auto___36883,G__34463_36880,G__34463_36881__$1,n__4666__auto___36878,jobs,results,process,async){
return (function (state_34476){
var state_val_34477 = (state_34476[(1)]);
if((state_val_34477 === (1))){
var state_34476__$1 = state_34476;
var statearr_34478_36885 = state_34476__$1;
(statearr_34478_36885[(2)] = null);

(statearr_34478_36885[(1)] = (2));


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
var statearr_34479_36887 = state_34476__$1;
(statearr_34479_36887[(1)] = (5));

} else {
var statearr_34480_36889 = state_34476__$1;
(statearr_34480_36889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (5))){
var state_34476__$1 = state_34476;
var statearr_34481_36890 = state_34476__$1;
(statearr_34481_36890[(2)] = null);

(statearr_34481_36890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (6))){
var state_34476__$1 = state_34476;
var statearr_34482_36891 = state_34476__$1;
(statearr_34482_36891[(2)] = null);

(statearr_34482_36891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (7))){
var inst_34472 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
var statearr_34483_36893 = state_34476__$1;
(statearr_34483_36893[(2)] = inst_34472);

(statearr_34483_36893[(1)] = (3));


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
});})(__36879,c__34272__auto___36883,G__34463_36880,G__34463_36881__$1,n__4666__auto___36878,jobs,results,process,async))
;
return ((function (__36879,switch__34206__auto__,c__34272__auto___36883,G__34463_36880,G__34463_36881__$1,n__4666__auto___36878,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34488 = [null,null,null,null,null,null,null];
(statearr_34488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34488[(1)] = (1));

return statearr_34488;
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
var statearr_34490_36895 = state_34476;
(statearr_34490_36895[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34489;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36897 = state_34476;
state_34476 = G__36897;
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
;})(__36879,switch__34206__auto__,c__34272__auto___36883,G__34463_36880,G__34463_36881__$1,n__4666__auto___36878,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34491 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34491[(6)] = c__34272__auto___36883);

return statearr_34491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36879,c__34272__auto___36883,G__34463_36880,G__34463_36881__$1,n__4666__auto___36878,jobs,results,process,async))
);


break;
case "async":
var c__34272__auto___36899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36879,c__34272__auto___36899,G__34463_36880,G__34463_36881__$1,n__4666__auto___36878,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36879,c__34272__auto___36899,G__34463_36880,G__34463_36881__$1,n__4666__auto___36878,jobs,results,process,async){
return (function (state_34505){
var state_val_34506 = (state_34505[(1)]);
if((state_val_34506 === (1))){
var state_34505__$1 = state_34505;
var statearr_34507_36900 = state_34505__$1;
(statearr_34507_36900[(2)] = null);

(statearr_34507_36900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (2))){
var state_34505__$1 = state_34505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34505__$1,(4),jobs);
} else {
if((state_val_34506 === (3))){
var inst_34503 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34505__$1,inst_34503);
} else {
if((state_val_34506 === (4))){
var inst_34494 = (state_34505[(2)]);
var inst_34495 = async(inst_34494);
var state_34505__$1 = state_34505;
if(cljs.core.truth_(inst_34495)){
var statearr_34508_36902 = state_34505__$1;
(statearr_34508_36902[(1)] = (5));

} else {
var statearr_34509_36904 = state_34505__$1;
(statearr_34509_36904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (5))){
var state_34505__$1 = state_34505;
var statearr_34510_36905 = state_34505__$1;
(statearr_34510_36905[(2)] = null);

(statearr_34510_36905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (6))){
var state_34505__$1 = state_34505;
var statearr_34511_36906 = state_34505__$1;
(statearr_34511_36906[(2)] = null);

(statearr_34511_36906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (7))){
var inst_34501 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
var statearr_34513_36908 = state_34505__$1;
(statearr_34513_36908[(2)] = inst_34501);

(statearr_34513_36908[(1)] = (3));


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
});})(__36879,c__34272__auto___36899,G__34463_36880,G__34463_36881__$1,n__4666__auto___36878,jobs,results,process,async))
;
return ((function (__36879,switch__34206__auto__,c__34272__auto___36899,G__34463_36880,G__34463_36881__$1,n__4666__auto___36878,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34515 = [null,null,null,null,null,null,null];
(statearr_34515[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34515[(1)] = (1));

return statearr_34515;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34505){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34505);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34516){if((e34516 instanceof Object)){
var ex__34210__auto__ = e34516;
var statearr_34517_36911 = state_34505;
(statearr_34517_36911[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36912 = state_34505;
state_34505 = G__36912;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36879,switch__34206__auto__,c__34272__auto___36899,G__34463_36880,G__34463_36881__$1,n__4666__auto___36878,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34518 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34518[(6)] = c__34272__auto___36899);

return statearr_34518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36879,c__34272__auto___36899,G__34463_36880,G__34463_36881__$1,n__4666__auto___36878,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34463_36881__$1)].join('')));

}

var G__36914 = (__36879 + (1));
__36879 = G__36914;
continue;
} else {
}
break;
}

var c__34272__auto___36915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34543){
var state_val_34544 = (state_34543[(1)]);
if((state_val_34544 === (7))){
var inst_34537 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
var statearr_34550_36917 = state_34543__$1;
(statearr_34550_36917[(2)] = inst_34537);

(statearr_34550_36917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (1))){
var state_34543__$1 = state_34543;
var statearr_34551_36918 = state_34543__$1;
(statearr_34551_36918[(2)] = null);

(statearr_34551_36918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (4))){
var inst_34522 = (state_34543[(7)]);
var inst_34522__$1 = (state_34543[(2)]);
var inst_34523 = (inst_34522__$1 == null);
var state_34543__$1 = (function (){var statearr_34552 = state_34543;
(statearr_34552[(7)] = inst_34522__$1);

return statearr_34552;
})();
if(cljs.core.truth_(inst_34523)){
var statearr_34553_36920 = state_34543__$1;
(statearr_34553_36920[(1)] = (5));

} else {
var statearr_34554_36921 = state_34543__$1;
(statearr_34554_36921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (6))){
var inst_34527 = (state_34543[(8)]);
var inst_34522 = (state_34543[(7)]);
var inst_34527__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34528 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34529 = [inst_34522,inst_34527__$1];
var inst_34530 = (new cljs.core.PersistentVector(null,2,(5),inst_34528,inst_34529,null));
var state_34543__$1 = (function (){var statearr_34555 = state_34543;
(statearr_34555[(8)] = inst_34527__$1);

return statearr_34555;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34543__$1,(8),jobs,inst_34530);
} else {
if((state_val_34544 === (3))){
var inst_34539 = (state_34543[(2)]);
var state_34543__$1 = state_34543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34543__$1,inst_34539);
} else {
if((state_val_34544 === (2))){
var state_34543__$1 = state_34543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34543__$1,(4),from);
} else {
if((state_val_34544 === (9))){
var inst_34534 = (state_34543[(2)]);
var state_34543__$1 = (function (){var statearr_34557 = state_34543;
(statearr_34557[(9)] = inst_34534);

return statearr_34557;
})();
var statearr_34558_36924 = state_34543__$1;
(statearr_34558_36924[(2)] = null);

(statearr_34558_36924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (5))){
var inst_34525 = cljs.core.async.close_BANG_(jobs);
var state_34543__$1 = state_34543;
var statearr_34559_36926 = state_34543__$1;
(statearr_34559_36926[(2)] = inst_34525);

(statearr_34559_36926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34544 === (8))){
var inst_34527 = (state_34543[(8)]);
var inst_34532 = (state_34543[(2)]);
var state_34543__$1 = (function (){var statearr_34560 = state_34543;
(statearr_34560[(10)] = inst_34532);

return statearr_34560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34543__$1,(9),results,inst_34527);
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
var statearr_34565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34565[(1)] = (1));

return statearr_34565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34543){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34543);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34566){if((e34566 instanceof Object)){
var ex__34210__auto__ = e34566;
var statearr_34567_36929 = state_34543;
(statearr_34567_36929[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34566;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36930 = state_34543;
state_34543 = G__36930;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34543){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34571 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34571[(6)] = c__34272__auto___36915);

return statearr_34571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


var c__34272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34609){
var state_val_34610 = (state_34609[(1)]);
if((state_val_34610 === (7))){
var inst_34605 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34611_36932 = state_34609__$1;
(statearr_34611_36932[(2)] = inst_34605);

(statearr_34611_36932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (20))){
var state_34609__$1 = state_34609;
var statearr_34612_36934 = state_34609__$1;
(statearr_34612_36934[(2)] = null);

(statearr_34612_36934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (1))){
var state_34609__$1 = state_34609;
var statearr_34616_36935 = state_34609__$1;
(statearr_34616_36935[(2)] = null);

(statearr_34616_36935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (4))){
var inst_34574 = (state_34609[(7)]);
var inst_34574__$1 = (state_34609[(2)]);
var inst_34575 = (inst_34574__$1 == null);
var state_34609__$1 = (function (){var statearr_34617 = state_34609;
(statearr_34617[(7)] = inst_34574__$1);

return statearr_34617;
})();
if(cljs.core.truth_(inst_34575)){
var statearr_34618_36937 = state_34609__$1;
(statearr_34618_36937[(1)] = (5));

} else {
var statearr_34619_36938 = state_34609__$1;
(statearr_34619_36938[(1)] = (6));

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
var statearr_34620_36940 = state_34609__$1;
(statearr_34620_36940[(2)] = inst_34600);

(statearr_34620_36940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (13))){
var inst_34602 = (state_34609[(2)]);
var state_34609__$1 = (function (){var statearr_34621 = state_34609;
(statearr_34621[(9)] = inst_34602);

return statearr_34621;
})();
var statearr_34622_36942 = state_34609__$1;
(statearr_34622_36942[(2)] = null);

(statearr_34622_36942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (6))){
var inst_34574 = (state_34609[(7)]);
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34609__$1,(11),inst_34574);
} else {
if((state_val_34610 === (17))){
var inst_34595 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
if(cljs.core.truth_(inst_34595)){
var statearr_34623_36943 = state_34609__$1;
(statearr_34623_36943[(1)] = (19));

} else {
var statearr_34624_36945 = state_34609__$1;
(statearr_34624_36945[(1)] = (20));

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
var statearr_34625_36946 = state_34609__$1;
(statearr_34625_36946[(2)] = null);

(statearr_34625_36946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (11))){
var inst_34584 = (state_34609[(2)]);
var state_34609__$1 = (function (){var statearr_34626 = state_34609;
(statearr_34626[(10)] = inst_34584);

return statearr_34626;
})();
var statearr_34627_36947 = state_34609__$1;
(statearr_34627_36947[(2)] = null);

(statearr_34627_36947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (9))){
var state_34609__$1 = state_34609;
var statearr_34628_36948 = state_34609__$1;
(statearr_34628_36948[(2)] = null);

(statearr_34628_36948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (5))){
var state_34609__$1 = state_34609;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36949 = state_34609__$1;
(statearr_34629_36949[(1)] = (8));

} else {
var statearr_34630_36950 = state_34609__$1;
(statearr_34630_36950[(1)] = (9));

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
var statearr_34632_36952 = state_34609__$1;
(statearr_34632_36952[(1)] = (15));

} else {
var statearr_34633_36953 = state_34609__$1;
(statearr_34633_36953[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (16))){
var state_34609__$1 = state_34609;
var statearr_34634_36955 = state_34609__$1;
(statearr_34634_36955[(2)] = false);

(statearr_34634_36955[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (10))){
var inst_34581 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34635_36956 = state_34609__$1;
(statearr_34635_36956[(2)] = inst_34581);

(statearr_34635_36956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (18))){
var inst_34592 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34636_36958 = state_34609__$1;
(statearr_34636_36958[(2)] = inst_34592);

(statearr_34636_36958[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (8))){
var inst_34578 = cljs.core.async.close_BANG_(to);
var state_34609__$1 = state_34609;
var statearr_34637_36959 = state_34609__$1;
(statearr_34637_36959[(2)] = inst_34578);

(statearr_34637_36959[(1)] = (10));


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
var statearr_34640_36962 = state_34609;
(statearr_34640_36962[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36963 = state_34609;
state_34609 = G__36963;
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
var state__34275__auto__ = (function (){var statearr_34641 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34641[(6)] = c__34272__auto__);

return statearr_34641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34272__auto__;
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
var c__34272__auto___36975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_36976 = state_34673__$1;
(statearr_34675_36976[(2)] = inst_34669);

(statearr_34675_36976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_36978 = state_34673__$1;
(statearr_34676_36978[(2)] = null);

(statearr_34676_36978[(1)] = (2));


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
var statearr_34678_36980 = state_34673__$1;
(statearr_34678_36980[(1)] = (5));

} else {
var statearr_34679_36981 = state_34673__$1;
(statearr_34679_36981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_36983 = state_34673__$1;
(statearr_34680_36983[(2)] = null);

(statearr_34680_36983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_36984 = state_34673__$1;
(statearr_34681_36984[(1)] = (9));

} else {
var statearr_34682_36986 = state_34673__$1;
(statearr_34682_36986[(1)] = (10));

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
var statearr_34683_36987 = state_34673__$1;
(statearr_34683_36987[(2)] = null);

(statearr_34683_36987[(1)] = (2));


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
var statearr_34684_36990 = state_34673__$1;
(statearr_34684_36990[(2)] = tc);

(statearr_34684_36990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34685 = state_34673;
(statearr_34685[(8)] = inst_34653);

return statearr_34685;
})();
var statearr_34686_36991 = state_34673__$1;
(statearr_34686_36991[(2)] = inst_34654);

(statearr_34686_36991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34687_36993 = state_34673__$1;
(statearr_34687_36993[(2)] = inst_34667);

(statearr_34687_36993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34688_36994 = state_34673__$1;
(statearr_34688_36994[(2)] = fc);

(statearr_34688_36994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34689_36996 = state_34673__$1;
(statearr_34689_36996[(1)] = (12));

} else {
var statearr_34690_36997 = state_34673__$1;
(statearr_34690_36997[(1)] = (13));

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
var statearr_34694 = [null,null,null,null,null,null,null,null,null];
(statearr_34694[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34694[(1)] = (1));

return statearr_34694;
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
}catch (e34695){if((e34695 instanceof Object)){
var ex__34210__auto__ = e34695;
var statearr_34696_37000 = state_34673;
(statearr_34696_37000[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34695;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37001 = state_34673;
state_34673 = G__37001;
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
var state__34275__auto__ = (function (){var statearr_34700 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34700[(6)] = c__34272__auto___36975);

return statearr_34700;
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
var c__34272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34724){
var state_val_34725 = (state_34724[(1)]);
if((state_val_34725 === (7))){
var inst_34720 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34728_37003 = state_34724__$1;
(statearr_34728_37003[(2)] = inst_34720);

(statearr_34728_37003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (1))){
var inst_34704 = init;
var state_34724__$1 = (function (){var statearr_34729 = state_34724;
(statearr_34729[(7)] = inst_34704);

return statearr_34729;
})();
var statearr_34730_37006 = state_34724__$1;
(statearr_34730_37006[(2)] = null);

(statearr_34730_37006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (4))){
var inst_34707 = (state_34724[(8)]);
var inst_34707__$1 = (state_34724[(2)]);
var inst_34708 = (inst_34707__$1 == null);
var state_34724__$1 = (function (){var statearr_34731 = state_34724;
(statearr_34731[(8)] = inst_34707__$1);

return statearr_34731;
})();
if(cljs.core.truth_(inst_34708)){
var statearr_34732_37012 = state_34724__$1;
(statearr_34732_37012[(1)] = (5));

} else {
var statearr_34733_37013 = state_34724__$1;
(statearr_34733_37013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (6))){
var inst_34711 = (state_34724[(9)]);
var inst_34704 = (state_34724[(7)]);
var inst_34707 = (state_34724[(8)]);
var inst_34711__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34704,inst_34707) : f.call(null,inst_34704,inst_34707));
var inst_34712 = cljs.core.reduced_QMARK_(inst_34711__$1);
var state_34724__$1 = (function (){var statearr_34735 = state_34724;
(statearr_34735[(9)] = inst_34711__$1);

return statearr_34735;
})();
if(inst_34712){
var statearr_34736_37015 = state_34724__$1;
(statearr_34736_37015[(1)] = (8));

} else {
var statearr_34737_37016 = state_34724__$1;
(statearr_34737_37016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (3))){
var inst_34722 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34724__$1,inst_34722);
} else {
if((state_val_34725 === (2))){
var state_34724__$1 = state_34724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34724__$1,(4),ch);
} else {
if((state_val_34725 === (9))){
var inst_34711 = (state_34724[(9)]);
var inst_34704 = inst_34711;
var state_34724__$1 = (function (){var statearr_34739 = state_34724;
(statearr_34739[(7)] = inst_34704);

return statearr_34739;
})();
var statearr_34740_37021 = state_34724__$1;
(statearr_34740_37021[(2)] = null);

(statearr_34740_37021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (5))){
var inst_34704 = (state_34724[(7)]);
var state_34724__$1 = state_34724;
var statearr_34741_37022 = state_34724__$1;
(statearr_34741_37022[(2)] = inst_34704);

(statearr_34741_37022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (10))){
var inst_34718 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34743_37024 = state_34724__$1;
(statearr_34743_37024[(2)] = inst_34718);

(statearr_34743_37024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (8))){
var inst_34711 = (state_34724[(9)]);
var inst_34714 = cljs.core.deref(inst_34711);
var state_34724__$1 = state_34724;
var statearr_34745_37027 = state_34724__$1;
(statearr_34745_37027[(2)] = inst_34714);

(statearr_34745_37027[(1)] = (10));


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
var statearr_34746 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34746[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34746[(1)] = (1));

return statearr_34746;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34724){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34724);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34750){if((e34750 instanceof Object)){
var ex__34210__auto__ = e34750;
var statearr_34751_37032 = state_34724;
(statearr_34751_37032[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37033 = state_34724;
state_34724 = G__37033;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34724){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34752 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34752[(6)] = c__34272__auto__);

return statearr_34752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34272__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34759){
var state_val_34760 = (state_34759[(1)]);
if((state_val_34760 === (1))){
var inst_34754 = cljs.core.async.reduce(f__$1,init,ch);
var state_34759__$1 = state_34759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34759__$1,(2),inst_34754);
} else {
if((state_val_34760 === (2))){
var inst_34756 = (state_34759[(2)]);
var inst_34757 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34756) : f__$1.call(null,inst_34756));
var state_34759__$1 = state_34759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34759__$1,inst_34757);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34761 = [null,null,null,null,null,null,null];
(statearr_34761[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34761[(1)] = (1));

return statearr_34761;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34759){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34759);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34762){if((e34762 instanceof Object)){
var ex__34210__auto__ = e34762;
var statearr_34763_37040 = state_34759;
(statearr_34763_37040[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37042 = state_34759;
state_34759 = G__37042;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34759){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34767 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34767[(6)] = c__34272__auto__);

return statearr_34767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34272__auto__;
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
var G__34769 = arguments.length;
switch (G__34769) {
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
var c__34272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34800){
var state_val_34801 = (state_34800[(1)]);
if((state_val_34801 === (7))){
var inst_34782 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34802_37056 = state_34800__$1;
(statearr_34802_37056[(2)] = inst_34782);

(statearr_34802_37056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34773 = cljs.core.seq(coll);
var inst_34774 = inst_34773;
var state_34800__$1 = (function (){var statearr_34803 = state_34800;
(statearr_34803[(7)] = inst_34774);

return statearr_34803;
})();
var statearr_34804_37062 = state_34800__$1;
(statearr_34804_37062[(2)] = null);

(statearr_34804_37062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (4))){
var inst_34774 = (state_34800[(7)]);
var inst_34777 = cljs.core.first(inst_34774);
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34800__$1,(7),ch,inst_34777);
} else {
if((state_val_34801 === (13))){
var inst_34794 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34805_37071 = state_34800__$1;
(statearr_34805_37071[(2)] = inst_34794);

(statearr_34805_37071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var inst_34785 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34785)){
var statearr_34806_37072 = state_34800__$1;
(statearr_34806_37072[(1)] = (8));

} else {
var statearr_34807_37075 = state_34800__$1;
(statearr_34807_37075[(1)] = (9));

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
var statearr_34808_37078 = state_34800__$1;
(statearr_34808_37078[(2)] = null);

(statearr_34808_37078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var inst_34774 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34774)){
var statearr_34809_37084 = state_34800__$1;
(statearr_34809_37084[(1)] = (4));

} else {
var statearr_34810_37085 = state_34800__$1;
(statearr_34810_37085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34800__$1 = state_34800;
var statearr_34811_37090 = state_34800__$1;
(statearr_34811_37090[(2)] = inst_34791);

(statearr_34811_37090[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var state_34800__$1 = state_34800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34812_37091 = state_34800__$1;
(statearr_34812_37091[(1)] = (11));

} else {
var statearr_34813_37093 = state_34800__$1;
(statearr_34813_37093[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34774 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
var statearr_34814_37098 = state_34800__$1;
(statearr_34814_37098[(2)] = inst_34774);

(statearr_34814_37098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34815_37104 = state_34800__$1;
(statearr_34815_37104[(2)] = inst_34796);

(statearr_34815_37104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (8))){
var inst_34774 = (state_34800[(7)]);
var inst_34787 = cljs.core.next(inst_34774);
var inst_34774__$1 = inst_34787;
var state_34800__$1 = (function (){var statearr_34816 = state_34800;
(statearr_34816[(7)] = inst_34774__$1);

return statearr_34816;
})();
var statearr_34817_37108 = state_34800__$1;
(statearr_34817_37108[(2)] = null);

(statearr_34817_37108[(1)] = (2));


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
}catch (e34819){if((e34819 instanceof Object)){
var ex__34210__auto__ = e34819;
var statearr_34820_37113 = state_34800;
(statearr_34820_37113[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37115 = state_34800;
state_34800 = G__37115;
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
var state__34275__auto__ = (function (){var statearr_34821 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34821[(6)] = c__34272__auto__);

return statearr_34821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34272__auto__;
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
var c__34272__auto___37162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34978){
var state_val_34979 = (state_34978[(1)]);
if((state_val_34979 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34980_37163 = state_34978__$1;
(statearr_34980_37163[(2)] = inst_34974);

(statearr_34980_37163[(1)] = (3));


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
var statearr_34982_37167 = state_34978__$1;
(statearr_34982_37167[(1)] = (22));

} else {
var statearr_34983_37168 = state_34978__$1;
(statearr_34983_37168[(1)] = (23));

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
var statearr_34985_37178 = state_34978__$1;
(statearr_34985_37178[(1)] = (30));

} else {
var statearr_34986_37180 = state_34978__$1;
(statearr_34986_37180[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (1))){
var state_34978__$1 = state_34978;
var statearr_34987_37181 = state_34978__$1;
(statearr_34987_37181[(2)] = null);

(statearr_34987_37181[(1)] = (2));


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
var statearr_34989_37182 = state_34978__$1;
(statearr_34989_37182[(2)] = null);

(statearr_34989_37182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (39))){
var state_34978__$1 = state_34978;
var statearr_34993_37189 = state_34978__$1;
(statearr_34993_37189[(2)] = null);

(statearr_34993_37189[(1)] = (41));


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
var statearr_34995_37190 = state_34978__$1;
(statearr_34995_37190[(1)] = (5));

} else {
var statearr_34996_37195 = state_34978__$1;
(statearr_34996_37195[(1)] = (6));

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
var state_34978__$1 = (function (){var statearr_34999 = state_34978;
(statearr_34999[(18)] = inst_34873);

(statearr_34999[(13)] = inst_34857__$1);

(statearr_34999[(14)] = inst_34856__$1);

(statearr_34999[(15)] = inst_34858__$1);

(statearr_34999[(17)] = inst_34855__$1);

return statearr_34999;
})();
var statearr_35000_37204 = state_34978__$1;
(statearr_35000_37204[(2)] = null);

(statearr_35000_37204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (21))){
var inst_34900 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35007_37207 = state_34978__$1;
(statearr_35007_37207[(2)] = inst_34900);

(statearr_35007_37207[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (31))){
var inst_34926 = (state_34978[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34978__$1 = (function (){var statearr_35009 = state_34978;
(statearr_35009[(19)] = inst_34930);

return statearr_35009;
})();
var statearr_35010_37212 = state_34978__$1;
(statearr_35010_37212[(2)] = inst_34931);

(statearr_35010_37212[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (32))){
var inst_34918 = (state_34978[(20)]);
var inst_34919 = (state_34978[(11)]);
var inst_34920 = (state_34978[(21)]);
var inst_34921 = (state_34978[(12)]);
var inst_34933 = (state_34978[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp35002 = inst_34918;
var tmp35003 = inst_34919;
var tmp35004 = inst_34920;
var inst_34918__$1 = tmp35002;
var inst_34919__$1 = tmp35003;
var inst_34920__$1 = tmp35004;
var inst_34921__$1 = inst_34934;
var state_34978__$1 = (function (){var statearr_35011 = state_34978;
(statearr_35011[(20)] = inst_34918__$1);

(statearr_35011[(22)] = inst_34933);

(statearr_35011[(11)] = inst_34919__$1);

(statearr_35011[(21)] = inst_34920__$1);

(statearr_35011[(12)] = inst_34921__$1);

return statearr_35011;
})();
var statearr_35012_37222 = state_34978__$1;
(statearr_35012_37222[(2)] = null);

(statearr_35012_37222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (40))){
var inst_34946 = (state_34978[(23)]);
var inst_34950 = done(null);
var inst_34951 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34946);
var state_34978__$1 = (function (){var statearr_35013 = state_34978;
(statearr_35013[(24)] = inst_34950);

return statearr_35013;
})();
var statearr_35014_37230 = state_34978__$1;
(statearr_35014_37230[(2)] = inst_34951);

(statearr_35014_37230[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (33))){
var inst_34937 = (state_34978[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34978__$1 = state_34978;
if(inst_34939){
var statearr_35018_37237 = state_34978__$1;
(statearr_35018_37237[(1)] = (36));

} else {
var statearr_35019_37238 = state_34978__$1;
(statearr_35019_37238[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (13))){
var inst_34867 = (state_34978[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34978__$1 = state_34978;
var statearr_35023_37241 = state_34978__$1;
(statearr_35023_37241[(2)] = inst_34870);

(statearr_35023_37241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (22))){
var inst_34890 = (state_34978[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34978__$1 = state_34978;
var statearr_35024_37244 = state_34978__$1;
(statearr_35024_37244[(2)] = inst_34893);

(statearr_35024_37244[(1)] = (24));


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
var state_34978__$1 = (function (){var statearr_35025 = state_34978;
(statearr_35025[(20)] = inst_34918);

(statearr_35025[(11)] = inst_34919);

(statearr_35025[(21)] = inst_34920);

(statearr_35025[(12)] = inst_34921);

return statearr_35025;
})();
var statearr_35026_37246 = state_34978__$1;
(statearr_35026_37246[(2)] = null);

(statearr_35026_37246[(1)] = (25));


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
var state_34978__$1 = (function (){var statearr_35027 = state_34978;
(statearr_35027[(20)] = inst_34918);

(statearr_35027[(11)] = inst_34919);

(statearr_35027[(21)] = inst_34920);

(statearr_35027[(27)] = inst_34953);

(statearr_35027[(12)] = inst_34921);

return statearr_35027;
})();
var statearr_35028_37253 = state_34978__$1;
(statearr_35028_37253[(2)] = null);

(statearr_35028_37253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (43))){
var state_34978__$1 = state_34978;
var statearr_35031_37254 = state_34978__$1;
(statearr_35031_37254[(2)] = null);

(statearr_35031_37254[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (29))){
var inst_34962 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35033_37256 = state_34978__$1;
(statearr_35033_37256[(2)] = inst_34962);

(statearr_35033_37256[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (44))){
var inst_34971 = (state_34978[(2)]);
var state_34978__$1 = (function (){var statearr_35037 = state_34978;
(statearr_35037[(28)] = inst_34971);

return statearr_35037;
})();
var statearr_35038_37261 = state_34978__$1;
(statearr_35038_37261[(2)] = null);

(statearr_35038_37261[(1)] = (2));


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
var state_34978__$1 = (function (){var statearr_35045 = state_34978;
(statearr_35045[(20)] = inst_34918);

(statearr_35045[(29)] = inst_34910__$1);

(statearr_35045[(11)] = inst_34919);

(statearr_35045[(21)] = inst_34920);

(statearr_35045[(12)] = inst_34921);

(statearr_35045[(30)] = inst_34912);

return statearr_35045;
})();
var statearr_35046_37269 = state_34978__$1;
(statearr_35046_37269[(2)] = null);

(statearr_35046_37269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (28))){
var inst_34918 = (state_34978[(20)]);
var inst_34937 = (state_34978[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34978__$1 = (function (){var statearr_35050 = state_34978;
(statearr_35050[(25)] = inst_34937__$1);

return statearr_35050;
})();
if(inst_34937__$1){
var statearr_35064_37276 = state_34978__$1;
(statearr_35064_37276[(1)] = (33));

} else {
var statearr_35066_37277 = state_34978__$1;
(statearr_35066_37277[(1)] = (34));

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
var statearr_35071_37282 = state_34978__$1;
(statearr_35071_37282[(1)] = (27));

} else {
var statearr_35072_37284 = state_34978__$1;
(statearr_35072_37284[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (34))){
var state_34978__$1 = state_34978;
var statearr_35076_37287 = state_34978__$1;
(statearr_35076_37287[(2)] = null);

(statearr_35076_37287[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (17))){
var state_34978__$1 = state_34978;
var statearr_35081_37290 = state_34978__$1;
(statearr_35081_37290[(2)] = null);

(statearr_35081_37290[(1)] = (18));


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
var statearr_35086_37298 = state_34978__$1;
(statearr_35086_37298[(2)] = inst_34905);

(statearr_35086_37298[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(4),ch);
} else {
if((state_val_34979 === (23))){
var state_34978__$1 = state_34978;
var statearr_35095_37303 = state_34978__$1;
(statearr_35095_37303[(2)] = null);

(statearr_35095_37303[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (35))){
var inst_34960 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35101_37307 = state_34978__$1;
(statearr_35101_37307[(2)] = inst_34960);

(statearr_35101_37307[(1)] = (29));


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
var state_34978__$1 = (function (){var statearr_35107 = state_34978;
(statearr_35107[(13)] = inst_34857);

(statearr_35107[(14)] = inst_34856);

(statearr_35107[(15)] = inst_34858);

(statearr_35107[(17)] = inst_34855);

return statearr_35107;
})();
var statearr_35108_37313 = state_34978__$1;
(statearr_35108_37313[(2)] = null);

(statearr_35108_37313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (11))){
var inst_34855 = (state_34978[(17)]);
var inst_34877 = (state_34978[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34978__$1 = (function (){var statearr_35115 = state_34978;
(statearr_35115[(7)] = inst_34877__$1);

return statearr_35115;
})();
if(inst_34877__$1){
var statearr_35117_37314 = state_34978__$1;
(statearr_35117_37314[(1)] = (16));

} else {
var statearr_35120_37317 = state_34978__$1;
(statearr_35120_37317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (9))){
var inst_34907 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35126_37319 = state_34978__$1;
(statearr_35126_37319[(2)] = inst_34907);

(statearr_35126_37319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35132 = state_34978;
(statearr_35132[(13)] = inst_34857);

(statearr_35132[(14)] = inst_34856);

(statearr_35132[(15)] = inst_34858);

(statearr_35132[(17)] = inst_34855);

return statearr_35132;
})();
var statearr_35138_37323 = state_34978__$1;
(statearr_35138_37323[(2)] = null);

(statearr_35138_37323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (14))){
var state_34978__$1 = state_34978;
var statearr_35144_37324 = state_34978__$1;
(statearr_35144_37324[(2)] = null);

(statearr_35144_37324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (45))){
var inst_34968 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35145_37327 = state_34978__$1;
(statearr_35145_37327[(2)] = inst_34968);

(statearr_35145_37327[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (26))){
var inst_34910 = (state_34978[(29)]);
var inst_34964 = (state_34978[(2)]);
var inst_34965 = cljs.core.seq(inst_34910);
var state_34978__$1 = (function (){var statearr_35146 = state_34978;
(statearr_35146[(31)] = inst_34964);

return statearr_35146;
})();
if(inst_34965){
var statearr_35147_37335 = state_34978__$1;
(statearr_35147_37335[(1)] = (42));

} else {
var statearr_35148_37336 = state_34978__$1;
(statearr_35148_37336[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (16))){
var inst_34877 = (state_34978[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34978__$1 = state_34978;
if(inst_34879){
var statearr_35149_37339 = state_34978__$1;
(statearr_35149_37339[(1)] = (19));

} else {
var statearr_35150_37342 = state_34978__$1;
(statearr_35150_37342[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (38))){
var inst_34957 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35151_37343 = state_34978__$1;
(statearr_35151_37343[(2)] = inst_34957);

(statearr_35151_37343[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (30))){
var state_34978__$1 = state_34978;
var statearr_35152_37347 = state_34978__$1;
(statearr_35152_37347[(2)] = null);

(statearr_35152_37347[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (10))){
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34978__$1 = (function (){var statearr_35153 = state_34978;
(statearr_35153[(26)] = inst_34867);

return statearr_35153;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35154_37358 = state_34978__$1;
(statearr_35154_37358[(1)] = (13));

} else {
var statearr_35155_37359 = state_34978__$1;
(statearr_35155_37359[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (18))){
var inst_34903 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35159_37362 = state_34978__$1;
(statearr_35159_37362[(2)] = inst_34903);

(statearr_35159_37362[(1)] = (12));


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
var state_34978__$1 = (function (){var statearr_35172 = state_34978;
(statearr_35172[(23)] = inst_34946__$1);

return statearr_35172;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35174_37372 = state_34978__$1;
(statearr_35174_37372[(1)] = (39));

} else {
var statearr_35178_37373 = state_34978__$1;
(statearr_35178_37373[(1)] = (40));

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
var statearr_35182_37377 = state_34978__$1;
(statearr_35182_37377[(1)] = (10));

} else {
var statearr_35183_37378 = state_34978__$1;
(statearr_35183_37378[(1)] = (11));

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
var statearr_35184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35184[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35184[(1)] = (1));

return statearr_35184;
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
}catch (e35185){if((e35185 instanceof Object)){
var ex__34210__auto__ = e35185;
var statearr_35188_37391 = state_34978;
(statearr_35188_37391[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35185;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37394 = state_34978;
state_34978 = G__37394;
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
var state__34275__auto__ = (function (){var statearr_35189 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35189[(6)] = c__34272__auto___37162);

return statearr_35189;
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
var G__35213 = arguments.length;
switch (G__35213) {
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
var len__4789__auto___37434 = arguments.length;
var i__4790__auto___37435 = (0);
while(true){
if((i__4790__auto___37435 < len__4789__auto___37434)){
args__4795__auto__.push((arguments[i__4790__auto___37435]));

var G__37439 = (i__4790__auto___37435 + (1));
i__4790__auto___37435 = G__37439;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35322){
var map__35324 = p__35322;
var map__35324__$1 = (((((!((map__35324 == null))))?(((((map__35324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35324):map__35324);
var opts = map__35324__$1;
var statearr_35332_37441 = state;
(statearr_35332_37441[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35341_37445 = state;
(statearr_35341_37445[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35343_37447 = state;
(statearr_35343_37447[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35302){
var G__35303 = cljs.core.first(seq35302);
var seq35302__$1 = cljs.core.next(seq35302);
var G__35304 = cljs.core.first(seq35302__$1);
var seq35302__$2 = cljs.core.next(seq35302__$1);
var G__35305 = cljs.core.first(seq35302__$2);
var seq35302__$3 = cljs.core.next(seq35302__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35303,G__35304,G__35305,seq35302__$3);
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
var c__34272__auto___37508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35529){
var state_val_35530 = (state_35529[(1)]);
if((state_val_35530 === (7))){
var inst_35427 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
var statearr_35535_37516 = state_35529__$1;
(statearr_35535_37516[(2)] = inst_35427);

(statearr_35535_37516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (20))){
var inst_35440 = (state_35529[(7)]);
var state_35529__$1 = state_35529;
var statearr_35555_37518 = state_35529__$1;
(statearr_35555_37518[(2)] = inst_35440);

(statearr_35555_37518[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (27))){
var state_35529__$1 = state_35529;
var statearr_35558_37521 = state_35529__$1;
(statearr_35558_37521[(2)] = null);

(statearr_35558_37521[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (1))){
var inst_35409 = (state_35529[(8)]);
var inst_35409__$1 = calc_state();
var inst_35414 = (inst_35409__$1 == null);
var inst_35415 = cljs.core.not(inst_35414);
var state_35529__$1 = (function (){var statearr_35561 = state_35529;
(statearr_35561[(8)] = inst_35409__$1);

return statearr_35561;
})();
if(inst_35415){
var statearr_35564_37528 = state_35529__$1;
(statearr_35564_37528[(1)] = (2));

} else {
var statearr_35565_37529 = state_35529__$1;
(statearr_35565_37529[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (24))){
var inst_35467 = (state_35529[(9)]);
var inst_35497 = (state_35529[(10)]);
var inst_35478 = (state_35529[(11)]);
var inst_35497__$1 = (inst_35467.cljs$core$IFn$_invoke$arity$1 ? inst_35467.cljs$core$IFn$_invoke$arity$1(inst_35478) : inst_35467.call(null,inst_35478));
var state_35529__$1 = (function (){var statearr_35566 = state_35529;
(statearr_35566[(10)] = inst_35497__$1);

return statearr_35566;
})();
if(cljs.core.truth_(inst_35497__$1)){
var statearr_35568_37537 = state_35529__$1;
(statearr_35568_37537[(1)] = (29));

} else {
var statearr_35570_37539 = state_35529__$1;
(statearr_35570_37539[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (4))){
var inst_35430 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
if(cljs.core.truth_(inst_35430)){
var statearr_35573_37540 = state_35529__$1;
(statearr_35573_37540[(1)] = (8));

} else {
var statearr_35575_37544 = state_35529__$1;
(statearr_35575_37544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (15))){
var inst_35461 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
if(cljs.core.truth_(inst_35461)){
var statearr_35581_37549 = state_35529__$1;
(statearr_35581_37549[(1)] = (19));

} else {
var statearr_35584_37550 = state_35529__$1;
(statearr_35584_37550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (21))){
var inst_35466 = (state_35529[(12)]);
var inst_35466__$1 = (state_35529[(2)]);
var inst_35467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35466__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35466__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35466__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35529__$1 = (function (){var statearr_35594 = state_35529;
(statearr_35594[(13)] = inst_35468);

(statearr_35594[(9)] = inst_35467);

(statearr_35594[(12)] = inst_35466__$1);

return statearr_35594;
})();
return cljs.core.async.ioc_alts_BANG_(state_35529__$1,(22),inst_35470);
} else {
if((state_val_35530 === (31))){
var inst_35510 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
if(cljs.core.truth_(inst_35510)){
var statearr_35601_37563 = state_35529__$1;
(statearr_35601_37563[(1)] = (32));

} else {
var statearr_35602_37565 = state_35529__$1;
(statearr_35602_37565[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (32))){
var inst_35476 = (state_35529[(14)]);
var state_35529__$1 = state_35529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35529__$1,(35),out,inst_35476);
} else {
if((state_val_35530 === (33))){
var inst_35466 = (state_35529[(12)]);
var inst_35440 = inst_35466;
var state_35529__$1 = (function (){var statearr_35616 = state_35529;
(statearr_35616[(7)] = inst_35440);

return statearr_35616;
})();
var statearr_35619_37574 = state_35529__$1;
(statearr_35619_37574[(2)] = null);

(statearr_35619_37574[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (13))){
var inst_35440 = (state_35529[(7)]);
var inst_35450 = inst_35440.cljs$lang$protocol_mask$partition0$;
var inst_35451 = (inst_35450 & (64));
var inst_35452 = inst_35440.cljs$core$ISeq$;
var inst_35453 = (cljs.core.PROTOCOL_SENTINEL === inst_35452);
var inst_35454 = ((inst_35451) || (inst_35453));
var state_35529__$1 = state_35529;
if(cljs.core.truth_(inst_35454)){
var statearr_35626_37578 = state_35529__$1;
(statearr_35626_37578[(1)] = (16));

} else {
var statearr_35628_37583 = state_35529__$1;
(statearr_35628_37583[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (22))){
var inst_35476 = (state_35529[(14)]);
var inst_35478 = (state_35529[(11)]);
var inst_35475 = (state_35529[(2)]);
var inst_35476__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35475,(0),null);
var inst_35478__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35475,(1),null);
var inst_35482 = (inst_35476__$1 == null);
var inst_35483 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35478__$1,change);
var inst_35484 = ((inst_35482) || (inst_35483));
var state_35529__$1 = (function (){var statearr_35637 = state_35529;
(statearr_35637[(14)] = inst_35476__$1);

(statearr_35637[(11)] = inst_35478__$1);

return statearr_35637;
})();
if(cljs.core.truth_(inst_35484)){
var statearr_35641_37593 = state_35529__$1;
(statearr_35641_37593[(1)] = (23));

} else {
var statearr_35644_37597 = state_35529__$1;
(statearr_35644_37597[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (36))){
var inst_35466 = (state_35529[(12)]);
var inst_35440 = inst_35466;
var state_35529__$1 = (function (){var statearr_35648 = state_35529;
(statearr_35648[(7)] = inst_35440);

return statearr_35648;
})();
var statearr_35652_37602 = state_35529__$1;
(statearr_35652_37602[(2)] = null);

(statearr_35652_37602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (29))){
var inst_35497 = (state_35529[(10)]);
var state_35529__$1 = state_35529;
var statearr_35656_37604 = state_35529__$1;
(statearr_35656_37604[(2)] = inst_35497);

(statearr_35656_37604[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (6))){
var state_35529__$1 = state_35529;
var statearr_35659_37614 = state_35529__$1;
(statearr_35659_37614[(2)] = false);

(statearr_35659_37614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (28))){
var inst_35493 = (state_35529[(2)]);
var inst_35494 = calc_state();
var inst_35440 = inst_35494;
var state_35529__$1 = (function (){var statearr_35662 = state_35529;
(statearr_35662[(15)] = inst_35493);

(statearr_35662[(7)] = inst_35440);

return statearr_35662;
})();
var statearr_35664_37618 = state_35529__$1;
(statearr_35664_37618[(2)] = null);

(statearr_35664_37618[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (25))){
var inst_35525 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
var statearr_35665_37621 = state_35529__$1;
(statearr_35665_37621[(2)] = inst_35525);

(statearr_35665_37621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (34))){
var inst_35523 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
var statearr_35666_37629 = state_35529__$1;
(statearr_35666_37629[(2)] = inst_35523);

(statearr_35666_37629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (17))){
var state_35529__$1 = state_35529;
var statearr_35671_37631 = state_35529__$1;
(statearr_35671_37631[(2)] = false);

(statearr_35671_37631[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (3))){
var state_35529__$1 = state_35529;
var statearr_35678_37632 = state_35529__$1;
(statearr_35678_37632[(2)] = false);

(statearr_35678_37632[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (12))){
var inst_35527 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35529__$1,inst_35527);
} else {
if((state_val_35530 === (2))){
var inst_35409 = (state_35529[(8)]);
var inst_35419 = inst_35409.cljs$lang$protocol_mask$partition0$;
var inst_35420 = (inst_35419 & (64));
var inst_35421 = inst_35409.cljs$core$ISeq$;
var inst_35422 = (cljs.core.PROTOCOL_SENTINEL === inst_35421);
var inst_35423 = ((inst_35420) || (inst_35422));
var state_35529__$1 = state_35529;
if(cljs.core.truth_(inst_35423)){
var statearr_35691_37645 = state_35529__$1;
(statearr_35691_37645[(1)] = (5));

} else {
var statearr_35695_37647 = state_35529__$1;
(statearr_35695_37647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (23))){
var inst_35476 = (state_35529[(14)]);
var inst_35487 = (inst_35476 == null);
var state_35529__$1 = state_35529;
if(cljs.core.truth_(inst_35487)){
var statearr_35700_37653 = state_35529__$1;
(statearr_35700_37653[(1)] = (26));

} else {
var statearr_35703_37656 = state_35529__$1;
(statearr_35703_37656[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (35))){
var inst_35514 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
if(cljs.core.truth_(inst_35514)){
var statearr_35707_37659 = state_35529__$1;
(statearr_35707_37659[(1)] = (36));

} else {
var statearr_35712_37660 = state_35529__$1;
(statearr_35712_37660[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (19))){
var inst_35440 = (state_35529[(7)]);
var inst_35463 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35440);
var state_35529__$1 = state_35529;
var statearr_35714_37666 = state_35529__$1;
(statearr_35714_37666[(2)] = inst_35463);

(statearr_35714_37666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (11))){
var inst_35440 = (state_35529[(7)]);
var inst_35445 = (inst_35440 == null);
var inst_35446 = cljs.core.not(inst_35445);
var state_35529__$1 = state_35529;
if(inst_35446){
var statearr_35715_37673 = state_35529__$1;
(statearr_35715_37673[(1)] = (13));

} else {
var statearr_35716_37675 = state_35529__$1;
(statearr_35716_37675[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (9))){
var inst_35409 = (state_35529[(8)]);
var state_35529__$1 = state_35529;
var statearr_35717_37677 = state_35529__$1;
(statearr_35717_37677[(2)] = inst_35409);

(statearr_35717_37677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (5))){
var state_35529__$1 = state_35529;
var statearr_35718_37685 = state_35529__$1;
(statearr_35718_37685[(2)] = true);

(statearr_35718_37685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (14))){
var state_35529__$1 = state_35529;
var statearr_35719_37687 = state_35529__$1;
(statearr_35719_37687[(2)] = false);

(statearr_35719_37687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (26))){
var inst_35478 = (state_35529[(11)]);
var inst_35490 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35478);
var state_35529__$1 = state_35529;
var statearr_35722_37691 = state_35529__$1;
(statearr_35722_37691[(2)] = inst_35490);

(statearr_35722_37691[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (16))){
var state_35529__$1 = state_35529;
var statearr_35723_37696 = state_35529__$1;
(statearr_35723_37696[(2)] = true);

(statearr_35723_37696[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (38))){
var inst_35519 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
var statearr_35724_37699 = state_35529__$1;
(statearr_35724_37699[(2)] = inst_35519);

(statearr_35724_37699[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (30))){
var inst_35468 = (state_35529[(13)]);
var inst_35467 = (state_35529[(9)]);
var inst_35478 = (state_35529[(11)]);
var inst_35503 = cljs.core.empty_QMARK_(inst_35467);
var inst_35504 = (inst_35468.cljs$core$IFn$_invoke$arity$1 ? inst_35468.cljs$core$IFn$_invoke$arity$1(inst_35478) : inst_35468.call(null,inst_35478));
var inst_35505 = cljs.core.not(inst_35504);
var inst_35507 = ((inst_35503) && (inst_35505));
var state_35529__$1 = state_35529;
var statearr_35727_37703 = state_35529__$1;
(statearr_35727_37703[(2)] = inst_35507);

(statearr_35727_37703[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (10))){
var inst_35409 = (state_35529[(8)]);
var inst_35435 = (state_35529[(2)]);
var inst_35436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35435,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35435,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35435,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35440 = inst_35409;
var state_35529__$1 = (function (){var statearr_35728 = state_35529;
(statearr_35728[(16)] = inst_35436);

(statearr_35728[(7)] = inst_35440);

(statearr_35728[(17)] = inst_35437);

(statearr_35728[(18)] = inst_35438);

return statearr_35728;
})();
var statearr_35729_37706 = state_35529__$1;
(statearr_35729_37706[(2)] = null);

(statearr_35729_37706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (18))){
var inst_35458 = (state_35529[(2)]);
var state_35529__$1 = state_35529;
var statearr_35732_37709 = state_35529__$1;
(statearr_35732_37709[(2)] = inst_35458);

(statearr_35732_37709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (37))){
var state_35529__$1 = state_35529;
var statearr_35735_37710 = state_35529__$1;
(statearr_35735_37710[(2)] = null);

(statearr_35735_37710[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35530 === (8))){
var inst_35409 = (state_35529[(8)]);
var inst_35432 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35409);
var state_35529__$1 = state_35529;
var statearr_35737_37715 = state_35529__$1;
(statearr_35737_37715[(2)] = inst_35432);

(statearr_35737_37715[(1)] = (10));


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
var statearr_35743_37719 = state_35529;
(statearr_35743_37719[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37721 = state_35529;
state_35529 = G__37721;
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
var state__34275__auto__ = (function (){var statearr_35745 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35745[(6)] = c__34272__auto___37508);

return statearr_35745;
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
var G__35766 = arguments.length;
switch (G__35766) {
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
var G__35796 = arguments.length;
switch (G__35796) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35792_SHARP_){
if(cljs.core.truth_((p1__35792_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35792_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35792_SHARP_.call(null,topic)))){
return p1__35792_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35792_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35801 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35801 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35802){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35802 = meta35802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35803,meta35802__$1){
var self__ = this;
var _35803__$1 = this;
return (new cljs.core.async.t_cljs$core$async35801(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35802__$1));
}));

(cljs.core.async.t_cljs$core$async35801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35803){
var self__ = this;
var _35803__$1 = this;
return self__.meta35802;
}));

(cljs.core.async.t_cljs$core$async35801.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35801.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35801.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35801.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35801.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35801.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35801.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35802","meta35802",-1439615734,null)], null);
}));

(cljs.core.async.t_cljs$core$async35801.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35801");

(cljs.core.async.t_cljs$core$async35801.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35801");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35801.
 */
cljs.core.async.__GT_t_cljs$core$async35801 = (function cljs$core$async$__GT_t_cljs$core$async35801(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35802){
return (new cljs.core.async.t_cljs$core$async35801(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35802));
});

}

return (new cljs.core.async.t_cljs$core$async35801(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34272__auto___37809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35898){
var state_val_35899 = (state_35898[(1)]);
if((state_val_35899 === (7))){
var inst_35894 = (state_35898[(2)]);
var state_35898__$1 = state_35898;
var statearr_35903_37811 = state_35898__$1;
(statearr_35903_37811[(2)] = inst_35894);

(statearr_35903_37811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (20))){
var state_35898__$1 = state_35898;
var statearr_35906_37813 = state_35898__$1;
(statearr_35906_37813[(2)] = null);

(statearr_35906_37813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (1))){
var state_35898__$1 = state_35898;
var statearr_35909_37817 = state_35898__$1;
(statearr_35909_37817[(2)] = null);

(statearr_35909_37817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (24))){
var inst_35877 = (state_35898[(7)]);
var inst_35886 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35877);
var state_35898__$1 = state_35898;
var statearr_35910_37821 = state_35898__$1;
(statearr_35910_37821[(2)] = inst_35886);

(statearr_35910_37821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (4))){
var inst_35820 = (state_35898[(8)]);
var inst_35820__$1 = (state_35898[(2)]);
var inst_35821 = (inst_35820__$1 == null);
var state_35898__$1 = (function (){var statearr_35914 = state_35898;
(statearr_35914[(8)] = inst_35820__$1);

return statearr_35914;
})();
if(cljs.core.truth_(inst_35821)){
var statearr_35915_37827 = state_35898__$1;
(statearr_35915_37827[(1)] = (5));

} else {
var statearr_35917_37828 = state_35898__$1;
(statearr_35917_37828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (15))){
var inst_35871 = (state_35898[(2)]);
var state_35898__$1 = state_35898;
var statearr_35919_37833 = state_35898__$1;
(statearr_35919_37833[(2)] = inst_35871);

(statearr_35919_37833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (21))){
var inst_35891 = (state_35898[(2)]);
var state_35898__$1 = (function (){var statearr_35922 = state_35898;
(statearr_35922[(9)] = inst_35891);

return statearr_35922;
})();
var statearr_35925_37834 = state_35898__$1;
(statearr_35925_37834[(2)] = null);

(statearr_35925_37834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (13))){
var inst_35848 = (state_35898[(10)]);
var inst_35851 = cljs.core.chunked_seq_QMARK_(inst_35848);
var state_35898__$1 = state_35898;
if(inst_35851){
var statearr_35926_37841 = state_35898__$1;
(statearr_35926_37841[(1)] = (16));

} else {
var statearr_35927_37843 = state_35898__$1;
(statearr_35927_37843[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (22))){
var inst_35883 = (state_35898[(2)]);
var state_35898__$1 = state_35898;
if(cljs.core.truth_(inst_35883)){
var statearr_35930_37845 = state_35898__$1;
(statearr_35930_37845[(1)] = (23));

} else {
var statearr_35931_37848 = state_35898__$1;
(statearr_35931_37848[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (6))){
var inst_35879 = (state_35898[(11)]);
var inst_35877 = (state_35898[(7)]);
var inst_35820 = (state_35898[(8)]);
var inst_35877__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35820) : topic_fn.call(null,inst_35820));
var inst_35878 = cljs.core.deref(mults);
var inst_35879__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35878,inst_35877__$1);
var state_35898__$1 = (function (){var statearr_35936 = state_35898;
(statearr_35936[(11)] = inst_35879__$1);

(statearr_35936[(7)] = inst_35877__$1);

return statearr_35936;
})();
if(cljs.core.truth_(inst_35879__$1)){
var statearr_35938_37857 = state_35898__$1;
(statearr_35938_37857[(1)] = (19));

} else {
var statearr_35939_37859 = state_35898__$1;
(statearr_35939_37859[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (25))){
var inst_35888 = (state_35898[(2)]);
var state_35898__$1 = state_35898;
var statearr_35940_37861 = state_35898__$1;
(statearr_35940_37861[(2)] = inst_35888);

(statearr_35940_37861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (17))){
var inst_35848 = (state_35898[(10)]);
var inst_35860 = cljs.core.first(inst_35848);
var inst_35862 = cljs.core.async.muxch_STAR_(inst_35860);
var inst_35863 = cljs.core.async.close_BANG_(inst_35862);
var inst_35865 = cljs.core.next(inst_35848);
var inst_35830 = inst_35865;
var inst_35831 = null;
var inst_35832 = (0);
var inst_35833 = (0);
var state_35898__$1 = (function (){var statearr_35944 = state_35898;
(statearr_35944[(12)] = inst_35831);

(statearr_35944[(13)] = inst_35863);

(statearr_35944[(14)] = inst_35830);

(statearr_35944[(15)] = inst_35833);

(statearr_35944[(16)] = inst_35832);

return statearr_35944;
})();
var statearr_35945_37872 = state_35898__$1;
(statearr_35945_37872[(2)] = null);

(statearr_35945_37872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (3))){
var inst_35896 = (state_35898[(2)]);
var state_35898__$1 = state_35898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35898__$1,inst_35896);
} else {
if((state_val_35899 === (12))){
var inst_35873 = (state_35898[(2)]);
var state_35898__$1 = state_35898;
var statearr_35950_37877 = state_35898__$1;
(statearr_35950_37877[(2)] = inst_35873);

(statearr_35950_37877[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (2))){
var state_35898__$1 = state_35898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35898__$1,(4),ch);
} else {
if((state_val_35899 === (23))){
var state_35898__$1 = state_35898;
var statearr_35954_37879 = state_35898__$1;
(statearr_35954_37879[(2)] = null);

(statearr_35954_37879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (19))){
var inst_35879 = (state_35898[(11)]);
var inst_35820 = (state_35898[(8)]);
var inst_35881 = cljs.core.async.muxch_STAR_(inst_35879);
var state_35898__$1 = state_35898;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35898__$1,(22),inst_35881,inst_35820);
} else {
if((state_val_35899 === (11))){
var inst_35830 = (state_35898[(14)]);
var inst_35848 = (state_35898[(10)]);
var inst_35848__$1 = cljs.core.seq(inst_35830);
var state_35898__$1 = (function (){var statearr_35958 = state_35898;
(statearr_35958[(10)] = inst_35848__$1);

return statearr_35958;
})();
if(inst_35848__$1){
var statearr_35960_37884 = state_35898__$1;
(statearr_35960_37884[(1)] = (13));

} else {
var statearr_35962_37887 = state_35898__$1;
(statearr_35962_37887[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (9))){
var inst_35875 = (state_35898[(2)]);
var state_35898__$1 = state_35898;
var statearr_35965_37888 = state_35898__$1;
(statearr_35965_37888[(2)] = inst_35875);

(statearr_35965_37888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (5))){
var inst_35827 = cljs.core.deref(mults);
var inst_35828 = cljs.core.vals(inst_35827);
var inst_35829 = cljs.core.seq(inst_35828);
var inst_35830 = inst_35829;
var inst_35831 = null;
var inst_35832 = (0);
var inst_35833 = (0);
var state_35898__$1 = (function (){var statearr_35968 = state_35898;
(statearr_35968[(12)] = inst_35831);

(statearr_35968[(14)] = inst_35830);

(statearr_35968[(15)] = inst_35833);

(statearr_35968[(16)] = inst_35832);

return statearr_35968;
})();
var statearr_35970_37895 = state_35898__$1;
(statearr_35970_37895[(2)] = null);

(statearr_35970_37895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (14))){
var state_35898__$1 = state_35898;
var statearr_35975_37898 = state_35898__$1;
(statearr_35975_37898[(2)] = null);

(statearr_35975_37898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (16))){
var inst_35848 = (state_35898[(10)]);
var inst_35853 = cljs.core.chunk_first(inst_35848);
var inst_35855 = cljs.core.chunk_rest(inst_35848);
var inst_35857 = cljs.core.count(inst_35853);
var inst_35830 = inst_35855;
var inst_35831 = inst_35853;
var inst_35832 = inst_35857;
var inst_35833 = (0);
var state_35898__$1 = (function (){var statearr_35979 = state_35898;
(statearr_35979[(12)] = inst_35831);

(statearr_35979[(14)] = inst_35830);

(statearr_35979[(15)] = inst_35833);

(statearr_35979[(16)] = inst_35832);

return statearr_35979;
})();
var statearr_35980_37904 = state_35898__$1;
(statearr_35980_37904[(2)] = null);

(statearr_35980_37904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (10))){
var inst_35831 = (state_35898[(12)]);
var inst_35830 = (state_35898[(14)]);
var inst_35833 = (state_35898[(15)]);
var inst_35832 = (state_35898[(16)]);
var inst_35838 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35831,inst_35833);
var inst_35839 = cljs.core.async.muxch_STAR_(inst_35838);
var inst_35840 = cljs.core.async.close_BANG_(inst_35839);
var inst_35841 = (inst_35833 + (1));
var tmp35971 = inst_35831;
var tmp35972 = inst_35830;
var tmp35973 = inst_35832;
var inst_35830__$1 = tmp35972;
var inst_35831__$1 = tmp35971;
var inst_35832__$1 = tmp35973;
var inst_35833__$1 = inst_35841;
var state_35898__$1 = (function (){var statearr_35985 = state_35898;
(statearr_35985[(12)] = inst_35831__$1);

(statearr_35985[(14)] = inst_35830__$1);

(statearr_35985[(15)] = inst_35833__$1);

(statearr_35985[(16)] = inst_35832__$1);

(statearr_35985[(17)] = inst_35840);

return statearr_35985;
})();
var statearr_35987_37921 = state_35898__$1;
(statearr_35987_37921[(2)] = null);

(statearr_35987_37921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (18))){
var inst_35868 = (state_35898[(2)]);
var state_35898__$1 = state_35898;
var statearr_35990_37924 = state_35898__$1;
(statearr_35990_37924[(2)] = inst_35868);

(statearr_35990_37924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35899 === (8))){
var inst_35833 = (state_35898[(15)]);
var inst_35832 = (state_35898[(16)]);
var inst_35835 = (inst_35833 < inst_35832);
var inst_35836 = inst_35835;
var state_35898__$1 = state_35898;
if(cljs.core.truth_(inst_35836)){
var statearr_35992_37927 = state_35898__$1;
(statearr_35992_37927[(1)] = (10));

} else {
var statearr_35993_37929 = state_35898__$1;
(statearr_35993_37929[(1)] = (11));

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
var statearr_35999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35999[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35999[(1)] = (1));

return statearr_35999;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35898){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35898);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36000){if((e36000 instanceof Object)){
var ex__34210__auto__ = e36000;
var statearr_36002_37935 = state_35898;
(statearr_36002_37935[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36000;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37938 = state_35898;
state_35898 = G__37938;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36005 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36005[(6)] = c__34272__auto___37809);

return statearr_36005;
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
var G__36008 = arguments.length;
switch (G__36008) {
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
var c__34272__auto___37960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36082){
var state_val_36083 = (state_36082[(1)]);
if((state_val_36083 === (7))){
var state_36082__$1 = state_36082;
var statearr_36084_37961 = state_36082__$1;
(statearr_36084_37961[(2)] = null);

(statearr_36084_37961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (1))){
var state_36082__$1 = state_36082;
var statearr_36085_37966 = state_36082__$1;
(statearr_36085_37966[(2)] = null);

(statearr_36085_37966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (4))){
var inst_36041 = (state_36082[(7)]);
var inst_36043 = (inst_36041 < cnt);
var state_36082__$1 = state_36082;
if(cljs.core.truth_(inst_36043)){
var statearr_36088_37967 = state_36082__$1;
(statearr_36088_37967[(1)] = (6));

} else {
var statearr_36090_37968 = state_36082__$1;
(statearr_36090_37968[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (15))){
var inst_36078 = (state_36082[(2)]);
var state_36082__$1 = state_36082;
var statearr_36093_37969 = state_36082__$1;
(statearr_36093_37969[(2)] = inst_36078);

(statearr_36093_37969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (13))){
var inst_36071 = cljs.core.async.close_BANG_(out);
var state_36082__$1 = state_36082;
var statearr_36095_37970 = state_36082__$1;
(statearr_36095_37970[(2)] = inst_36071);

(statearr_36095_37970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (6))){
var state_36082__$1 = state_36082;
var statearr_36096_37971 = state_36082__$1;
(statearr_36096_37971[(2)] = null);

(statearr_36096_37971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (3))){
var inst_36080 = (state_36082[(2)]);
var state_36082__$1 = state_36082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36082__$1,inst_36080);
} else {
if((state_val_36083 === (12))){
var inst_36068 = (state_36082[(8)]);
var inst_36068__$1 = (state_36082[(2)]);
var inst_36069 = cljs.core.some(cljs.core.nil_QMARK_,inst_36068__$1);
var state_36082__$1 = (function (){var statearr_36101 = state_36082;
(statearr_36101[(8)] = inst_36068__$1);

return statearr_36101;
})();
if(cljs.core.truth_(inst_36069)){
var statearr_36102_37973 = state_36082__$1;
(statearr_36102_37973[(1)] = (13));

} else {
var statearr_36103_37978 = state_36082__$1;
(statearr_36103_37978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (2))){
var inst_36038 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36041 = (0);
var state_36082__$1 = (function (){var statearr_36104 = state_36082;
(statearr_36104[(7)] = inst_36041);

(statearr_36104[(9)] = inst_36038);

return statearr_36104;
})();
var statearr_36105_37979 = state_36082__$1;
(statearr_36105_37979[(2)] = null);

(statearr_36105_37979[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (11))){
var inst_36041 = (state_36082[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36082,(10),Object,null,(9));
var inst_36055 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36041) : chs__$1.call(null,inst_36041));
var inst_36056 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36041) : done.call(null,inst_36041));
var inst_36057 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36055,inst_36056);
var state_36082__$1 = state_36082;
var statearr_36106_37980 = state_36082__$1;
(statearr_36106_37980[(2)] = inst_36057);


cljs.core.async.impl.ioc_helpers.process_exception(state_36082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (9))){
var inst_36041 = (state_36082[(7)]);
var inst_36059 = (state_36082[(2)]);
var inst_36060 = (inst_36041 + (1));
var inst_36041__$1 = inst_36060;
var state_36082__$1 = (function (){var statearr_36107 = state_36082;
(statearr_36107[(10)] = inst_36059);

(statearr_36107[(7)] = inst_36041__$1);

return statearr_36107;
})();
var statearr_36108_37983 = state_36082__$1;
(statearr_36108_37983[(2)] = null);

(statearr_36108_37983[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (5))){
var inst_36066 = (state_36082[(2)]);
var state_36082__$1 = (function (){var statearr_36109 = state_36082;
(statearr_36109[(11)] = inst_36066);

return statearr_36109;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36082__$1,(12),dchan);
} else {
if((state_val_36083 === (14))){
var inst_36068 = (state_36082[(8)]);
var inst_36073 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36068);
var state_36082__$1 = state_36082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36082__$1,(16),out,inst_36073);
} else {
if((state_val_36083 === (16))){
var inst_36075 = (state_36082[(2)]);
var state_36082__$1 = (function (){var statearr_36110 = state_36082;
(statearr_36110[(12)] = inst_36075);

return statearr_36110;
})();
var statearr_36111_37989 = state_36082__$1;
(statearr_36111_37989[(2)] = null);

(statearr_36111_37989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (10))){
var inst_36047 = (state_36082[(2)]);
var inst_36048 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36082__$1 = (function (){var statearr_36112 = state_36082;
(statearr_36112[(13)] = inst_36047);

return statearr_36112;
})();
var statearr_36113_37990 = state_36082__$1;
(statearr_36113_37990[(2)] = inst_36048);


cljs.core.async.impl.ioc_helpers.process_exception(state_36082__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36083 === (8))){
var inst_36064 = (state_36082[(2)]);
var state_36082__$1 = state_36082;
var statearr_36114_37991 = state_36082__$1;
(statearr_36114_37991[(2)] = inst_36064);

(statearr_36114_37991[(1)] = (5));


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
}catch (e36117){if((e36117 instanceof Object)){
var ex__34210__auto__ = e36117;
var statearr_36119_37995 = state_36082;
(statearr_36119_37995[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36117;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37997 = state_36082;
state_36082 = G__37997;
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
var state__34275__auto__ = (function (){var statearr_36120 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36120[(6)] = c__34272__auto___37960);

return statearr_36120;
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
var G__36126 = arguments.length;
switch (G__36126) {
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
var c__34272__auto___38007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36158){
var state_val_36159 = (state_36158[(1)]);
if((state_val_36159 === (7))){
var inst_36138 = (state_36158[(7)]);
var inst_36137 = (state_36158[(8)]);
var inst_36137__$1 = (state_36158[(2)]);
var inst_36138__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36137__$1,(0),null);
var inst_36139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36137__$1,(1),null);
var inst_36140 = (inst_36138__$1 == null);
var state_36158__$1 = (function (){var statearr_36160 = state_36158;
(statearr_36160[(7)] = inst_36138__$1);

(statearr_36160[(8)] = inst_36137__$1);

(statearr_36160[(9)] = inst_36139);

return statearr_36160;
})();
if(cljs.core.truth_(inst_36140)){
var statearr_36161_38008 = state_36158__$1;
(statearr_36161_38008[(1)] = (8));

} else {
var statearr_36162_38010 = state_36158__$1;
(statearr_36162_38010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (1))){
var inst_36127 = cljs.core.vec(chs);
var inst_36128 = inst_36127;
var state_36158__$1 = (function (){var statearr_36163 = state_36158;
(statearr_36163[(10)] = inst_36128);

return statearr_36163;
})();
var statearr_36164_38015 = state_36158__$1;
(statearr_36164_38015[(2)] = null);

(statearr_36164_38015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (4))){
var inst_36128 = (state_36158[(10)]);
var state_36158__$1 = state_36158;
return cljs.core.async.ioc_alts_BANG_(state_36158__$1,(7),inst_36128);
} else {
if((state_val_36159 === (6))){
var inst_36154 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
var statearr_36165_38016 = state_36158__$1;
(statearr_36165_38016[(2)] = inst_36154);

(statearr_36165_38016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (3))){
var inst_36156 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36158__$1,inst_36156);
} else {
if((state_val_36159 === (2))){
var inst_36128 = (state_36158[(10)]);
var inst_36130 = cljs.core.count(inst_36128);
var inst_36131 = (inst_36130 > (0));
var state_36158__$1 = state_36158;
if(cljs.core.truth_(inst_36131)){
var statearr_36168_38019 = state_36158__$1;
(statearr_36168_38019[(1)] = (4));

} else {
var statearr_36169_38021 = state_36158__$1;
(statearr_36169_38021[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (11))){
var inst_36128 = (state_36158[(10)]);
var inst_36147 = (state_36158[(2)]);
var tmp36166 = inst_36128;
var inst_36128__$1 = tmp36166;
var state_36158__$1 = (function (){var statearr_36173 = state_36158;
(statearr_36173[(11)] = inst_36147);

(statearr_36173[(10)] = inst_36128__$1);

return statearr_36173;
})();
var statearr_36174_38022 = state_36158__$1;
(statearr_36174_38022[(2)] = null);

(statearr_36174_38022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (9))){
var inst_36138 = (state_36158[(7)]);
var state_36158__$1 = state_36158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36158__$1,(11),out,inst_36138);
} else {
if((state_val_36159 === (5))){
var inst_36152 = cljs.core.async.close_BANG_(out);
var state_36158__$1 = state_36158;
var statearr_36176_38025 = state_36158__$1;
(statearr_36176_38025[(2)] = inst_36152);

(statearr_36176_38025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (10))){
var inst_36150 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
var statearr_36178_38028 = state_36158__$1;
(statearr_36178_38028[(2)] = inst_36150);

(statearr_36178_38028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (8))){
var inst_36138 = (state_36158[(7)]);
var inst_36137 = (state_36158[(8)]);
var inst_36139 = (state_36158[(9)]);
var inst_36128 = (state_36158[(10)]);
var inst_36142 = (function (){var cs = inst_36128;
var vec__36133 = inst_36137;
var v = inst_36138;
var c = inst_36139;
return (function (p1__36122_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36122_SHARP_);
});
})();
var inst_36143 = cljs.core.filterv(inst_36142,inst_36128);
var inst_36128__$1 = inst_36143;
var state_36158__$1 = (function (){var statearr_36183 = state_36158;
(statearr_36183[(10)] = inst_36128__$1);

return statearr_36183;
})();
var statearr_36186_38030 = state_36158__$1;
(statearr_36186_38030[(2)] = null);

(statearr_36186_38030[(1)] = (2));


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
var statearr_36188 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36188[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36188[(1)] = (1));

return statearr_36188;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36158){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36158);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36189){if((e36189 instanceof Object)){
var ex__34210__auto__ = e36189;
var statearr_36190_38032 = state_36158;
(statearr_36190_38032[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36189;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38033 = state_36158;
state_36158 = G__38033;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36193 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36193[(6)] = c__34272__auto___38007);

return statearr_36193;
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
var G__36198 = arguments.length;
switch (G__36198) {
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
var c__34272__auto___38040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36222){
var state_val_36223 = (state_36222[(1)]);
if((state_val_36223 === (7))){
var inst_36204 = (state_36222[(7)]);
var inst_36204__$1 = (state_36222[(2)]);
var inst_36205 = (inst_36204__$1 == null);
var inst_36206 = cljs.core.not(inst_36205);
var state_36222__$1 = (function (){var statearr_36224 = state_36222;
(statearr_36224[(7)] = inst_36204__$1);

return statearr_36224;
})();
if(inst_36206){
var statearr_36225_38042 = state_36222__$1;
(statearr_36225_38042[(1)] = (8));

} else {
var statearr_36226_38043 = state_36222__$1;
(statearr_36226_38043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (1))){
var inst_36199 = (0);
var state_36222__$1 = (function (){var statearr_36227 = state_36222;
(statearr_36227[(8)] = inst_36199);

return statearr_36227;
})();
var statearr_36228_38046 = state_36222__$1;
(statearr_36228_38046[(2)] = null);

(statearr_36228_38046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (4))){
var state_36222__$1 = state_36222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36222__$1,(7),ch);
} else {
if((state_val_36223 === (6))){
var inst_36217 = (state_36222[(2)]);
var state_36222__$1 = state_36222;
var statearr_36229_38049 = state_36222__$1;
(statearr_36229_38049[(2)] = inst_36217);

(statearr_36229_38049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (3))){
var inst_36219 = (state_36222[(2)]);
var inst_36220 = cljs.core.async.close_BANG_(out);
var state_36222__$1 = (function (){var statearr_36230 = state_36222;
(statearr_36230[(9)] = inst_36219);

return statearr_36230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36222__$1,inst_36220);
} else {
if((state_val_36223 === (2))){
var inst_36199 = (state_36222[(8)]);
var inst_36201 = (inst_36199 < n);
var state_36222__$1 = state_36222;
if(cljs.core.truth_(inst_36201)){
var statearr_36235_38052 = state_36222__$1;
(statearr_36235_38052[(1)] = (4));

} else {
var statearr_36236_38053 = state_36222__$1;
(statearr_36236_38053[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (11))){
var inst_36199 = (state_36222[(8)]);
var inst_36209 = (state_36222[(2)]);
var inst_36210 = (inst_36199 + (1));
var inst_36199__$1 = inst_36210;
var state_36222__$1 = (function (){var statearr_36237 = state_36222;
(statearr_36237[(8)] = inst_36199__$1);

(statearr_36237[(10)] = inst_36209);

return statearr_36237;
})();
var statearr_36238_38057 = state_36222__$1;
(statearr_36238_38057[(2)] = null);

(statearr_36238_38057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (9))){
var state_36222__$1 = state_36222;
var statearr_36242_38060 = state_36222__$1;
(statearr_36242_38060[(2)] = null);

(statearr_36242_38060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (5))){
var state_36222__$1 = state_36222;
var statearr_36243_38062 = state_36222__$1;
(statearr_36243_38062[(2)] = null);

(statearr_36243_38062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (10))){
var inst_36214 = (state_36222[(2)]);
var state_36222__$1 = state_36222;
var statearr_36244_38063 = state_36222__$1;
(statearr_36244_38063[(2)] = inst_36214);

(statearr_36244_38063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (8))){
var inst_36204 = (state_36222[(7)]);
var state_36222__$1 = state_36222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36222__$1,(11),out,inst_36204);
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
var statearr_36247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36247[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36247[(1)] = (1));

return statearr_36247;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36222){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36222);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36249){if((e36249 instanceof Object)){
var ex__34210__auto__ = e36249;
var statearr_36251_38067 = state_36222;
(statearr_36251_38067[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36249;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38068 = state_36222;
state_36222 = G__38068;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36253 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36253[(6)] = c__34272__auto___38040);

return statearr_36253;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36257 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36257 = (function (f,ch,meta36258){
this.f = f;
this.ch = ch;
this.meta36258 = meta36258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36259,meta36258__$1){
var self__ = this;
var _36259__$1 = this;
return (new cljs.core.async.t_cljs$core$async36257(self__.f,self__.ch,meta36258__$1));
}));

(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36259){
var self__ = this;
var _36259__$1 = this;
return self__.meta36258;
}));

(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36263 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36263 = (function (f,ch,meta36258,_,fn1,meta36264){
this.f = f;
this.ch = ch;
this.meta36258 = meta36258;
this._ = _;
this.fn1 = fn1;
this.meta36264 = meta36264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36265,meta36264__$1){
var self__ = this;
var _36265__$1 = this;
return (new cljs.core.async.t_cljs$core$async36263(self__.f,self__.ch,self__.meta36258,self__._,self__.fn1,meta36264__$1));
}));

(cljs.core.async.t_cljs$core$async36263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36265){
var self__ = this;
var _36265__$1 = this;
return self__.meta36264;
}));

(cljs.core.async.t_cljs$core$async36263.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36263.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36263.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36263.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36256_SHARP_){
var G__36276 = (((p1__36256_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36256_SHARP_) : self__.f.call(null,p1__36256_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36276) : f1.call(null,G__36276));
});
}));

(cljs.core.async.t_cljs$core$async36263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36258","meta36258",-547299431,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36257","cljs.core.async/t_cljs$core$async36257",-1836366468,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36264","meta36264",-2047192887,null)], null);
}));

(cljs.core.async.t_cljs$core$async36263.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36263");

(cljs.core.async.t_cljs$core$async36263.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36263");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36263.
 */
cljs.core.async.__GT_t_cljs$core$async36263 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36263(f__$1,ch__$1,meta36258__$1,___$2,fn1__$1,meta36264){
return (new cljs.core.async.t_cljs$core$async36263(f__$1,ch__$1,meta36258__$1,___$2,fn1__$1,meta36264));
});

}

return (new cljs.core.async.t_cljs$core$async36263(self__.f,self__.ch,self__.meta36258,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36289 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36289) : self__.f.call(null,G__36289));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36257.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36258","meta36258",-547299431,null)], null);
}));

(cljs.core.async.t_cljs$core$async36257.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36257");

(cljs.core.async.t_cljs$core$async36257.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36257");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36257.
 */
cljs.core.async.__GT_t_cljs$core$async36257 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36257(f__$1,ch__$1,meta36258){
return (new cljs.core.async.t_cljs$core$async36257(f__$1,ch__$1,meta36258));
});

}

return (new cljs.core.async.t_cljs$core$async36257(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36295 = (function (f,ch,meta36296){
this.f = f;
this.ch = ch;
this.meta36296 = meta36296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36297,meta36296__$1){
var self__ = this;
var _36297__$1 = this;
return (new cljs.core.async.t_cljs$core$async36295(self__.f,self__.ch,meta36296__$1));
}));

(cljs.core.async.t_cljs$core$async36295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36297){
var self__ = this;
var _36297__$1 = this;
return self__.meta36296;
}));

(cljs.core.async.t_cljs$core$async36295.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36295.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36295.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36295.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36295.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36295.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36296","meta36296",-2048591247,null)], null);
}));

(cljs.core.async.t_cljs$core$async36295.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36295");

(cljs.core.async.t_cljs$core$async36295.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36295");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36295.
 */
cljs.core.async.__GT_t_cljs$core$async36295 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36295(f__$1,ch__$1,meta36296){
return (new cljs.core.async.t_cljs$core$async36295(f__$1,ch__$1,meta36296));
});

}

return (new cljs.core.async.t_cljs$core$async36295(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36312 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36312 = (function (p,ch,meta36313){
this.p = p;
this.ch = ch;
this.meta36313 = meta36313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36314,meta36313__$1){
var self__ = this;
var _36314__$1 = this;
return (new cljs.core.async.t_cljs$core$async36312(self__.p,self__.ch,meta36313__$1));
}));

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36314){
var self__ = this;
var _36314__$1 = this;
return self__.meta36313;
}));

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36313","meta36313",-1855059289,null)], null);
}));

(cljs.core.async.t_cljs$core$async36312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36312");

(cljs.core.async.t_cljs$core$async36312.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36312.
 */
cljs.core.async.__GT_t_cljs$core$async36312 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36312(p__$1,ch__$1,meta36313){
return (new cljs.core.async.t_cljs$core$async36312(p__$1,ch__$1,meta36313));
});

}

return (new cljs.core.async.t_cljs$core$async36312(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36329 = arguments.length;
switch (G__36329) {
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
var c__34272__auto___38098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36358){
var state_val_36359 = (state_36358[(1)]);
if((state_val_36359 === (7))){
var inst_36354 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
var statearr_36362_38100 = state_36358__$1;
(statearr_36362_38100[(2)] = inst_36354);

(statearr_36362_38100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (1))){
var state_36358__$1 = state_36358;
var statearr_36364_38102 = state_36358__$1;
(statearr_36364_38102[(2)] = null);

(statearr_36364_38102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (4))){
var inst_36340 = (state_36358[(7)]);
var inst_36340__$1 = (state_36358[(2)]);
var inst_36341 = (inst_36340__$1 == null);
var state_36358__$1 = (function (){var statearr_36366 = state_36358;
(statearr_36366[(7)] = inst_36340__$1);

return statearr_36366;
})();
if(cljs.core.truth_(inst_36341)){
var statearr_36368_38103 = state_36358__$1;
(statearr_36368_38103[(1)] = (5));

} else {
var statearr_36369_38104 = state_36358__$1;
(statearr_36369_38104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (6))){
var inst_36340 = (state_36358[(7)]);
var inst_36345 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36340) : p.call(null,inst_36340));
var state_36358__$1 = state_36358;
if(cljs.core.truth_(inst_36345)){
var statearr_36370_38106 = state_36358__$1;
(statearr_36370_38106[(1)] = (8));

} else {
var statearr_36372_38108 = state_36358__$1;
(statearr_36372_38108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (3))){
var inst_36356 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36358__$1,inst_36356);
} else {
if((state_val_36359 === (2))){
var state_36358__$1 = state_36358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36358__$1,(4),ch);
} else {
if((state_val_36359 === (11))){
var inst_36348 = (state_36358[(2)]);
var state_36358__$1 = state_36358;
var statearr_36374_38110 = state_36358__$1;
(statearr_36374_38110[(2)] = inst_36348);

(statearr_36374_38110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (9))){
var state_36358__$1 = state_36358;
var statearr_36375_38111 = state_36358__$1;
(statearr_36375_38111[(2)] = null);

(statearr_36375_38111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (5))){
var inst_36343 = cljs.core.async.close_BANG_(out);
var state_36358__$1 = state_36358;
var statearr_36378_38112 = state_36358__$1;
(statearr_36378_38112[(2)] = inst_36343);

(statearr_36378_38112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (10))){
var inst_36351 = (state_36358[(2)]);
var state_36358__$1 = (function (){var statearr_36379 = state_36358;
(statearr_36379[(8)] = inst_36351);

return statearr_36379;
})();
var statearr_36380_38115 = state_36358__$1;
(statearr_36380_38115[(2)] = null);

(statearr_36380_38115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36359 === (8))){
var inst_36340 = (state_36358[(7)]);
var state_36358__$1 = state_36358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36358__$1,(11),out,inst_36340);
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
var statearr_36381 = [null,null,null,null,null,null,null,null,null];
(statearr_36381[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36381[(1)] = (1));

return statearr_36381;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36358){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36358);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36382){if((e36382 instanceof Object)){
var ex__34210__auto__ = e36382;
var statearr_36383_38117 = state_36358;
(statearr_36383_38117[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36382;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38118 = state_36358;
state_36358 = G__38118;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36386 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36386[(6)] = c__34272__auto___38098);

return statearr_36386;
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
var G__36395 = arguments.length;
switch (G__36395) {
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
var c__34272__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36462){
var state_val_36463 = (state_36462[(1)]);
if((state_val_36463 === (7))){
var inst_36458 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
var statearr_36466_38126 = state_36462__$1;
(statearr_36466_38126[(2)] = inst_36458);

(statearr_36466_38126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (20))){
var inst_36428 = (state_36462[(7)]);
var inst_36439 = (state_36462[(2)]);
var inst_36440 = cljs.core.next(inst_36428);
var inst_36414 = inst_36440;
var inst_36415 = null;
var inst_36416 = (0);
var inst_36417 = (0);
var state_36462__$1 = (function (){var statearr_36467 = state_36462;
(statearr_36467[(8)] = inst_36415);

(statearr_36467[(9)] = inst_36439);

(statearr_36467[(10)] = inst_36416);

(statearr_36467[(11)] = inst_36414);

(statearr_36467[(12)] = inst_36417);

return statearr_36467;
})();
var statearr_36469_38130 = state_36462__$1;
(statearr_36469_38130[(2)] = null);

(statearr_36469_38130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (1))){
var state_36462__$1 = state_36462;
var statearr_36470_38134 = state_36462__$1;
(statearr_36470_38134[(2)] = null);

(statearr_36470_38134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (4))){
var inst_36403 = (state_36462[(13)]);
var inst_36403__$1 = (state_36462[(2)]);
var inst_36404 = (inst_36403__$1 == null);
var state_36462__$1 = (function (){var statearr_36474 = state_36462;
(statearr_36474[(13)] = inst_36403__$1);

return statearr_36474;
})();
if(cljs.core.truth_(inst_36404)){
var statearr_36475_38138 = state_36462__$1;
(statearr_36475_38138[(1)] = (5));

} else {
var statearr_36476_38139 = state_36462__$1;
(statearr_36476_38139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (15))){
var state_36462__$1 = state_36462;
var statearr_36481_38140 = state_36462__$1;
(statearr_36481_38140[(2)] = null);

(statearr_36481_38140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (21))){
var state_36462__$1 = state_36462;
var statearr_36483_38141 = state_36462__$1;
(statearr_36483_38141[(2)] = null);

(statearr_36483_38141[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (13))){
var inst_36415 = (state_36462[(8)]);
var inst_36416 = (state_36462[(10)]);
var inst_36414 = (state_36462[(11)]);
var inst_36417 = (state_36462[(12)]);
var inst_36424 = (state_36462[(2)]);
var inst_36425 = (inst_36417 + (1));
var tmp36477 = inst_36415;
var tmp36478 = inst_36416;
var tmp36479 = inst_36414;
var inst_36414__$1 = tmp36479;
var inst_36415__$1 = tmp36477;
var inst_36416__$1 = tmp36478;
var inst_36417__$1 = inst_36425;
var state_36462__$1 = (function (){var statearr_36485 = state_36462;
(statearr_36485[(8)] = inst_36415__$1);

(statearr_36485[(14)] = inst_36424);

(statearr_36485[(10)] = inst_36416__$1);

(statearr_36485[(11)] = inst_36414__$1);

(statearr_36485[(12)] = inst_36417__$1);

return statearr_36485;
})();
var statearr_36486_38145 = state_36462__$1;
(statearr_36486_38145[(2)] = null);

(statearr_36486_38145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (22))){
var state_36462__$1 = state_36462;
var statearr_36488_38146 = state_36462__$1;
(statearr_36488_38146[(2)] = null);

(statearr_36488_38146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (6))){
var inst_36403 = (state_36462[(13)]);
var inst_36412 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36403) : f.call(null,inst_36403));
var inst_36413 = cljs.core.seq(inst_36412);
var inst_36414 = inst_36413;
var inst_36415 = null;
var inst_36416 = (0);
var inst_36417 = (0);
var state_36462__$1 = (function (){var statearr_36496 = state_36462;
(statearr_36496[(8)] = inst_36415);

(statearr_36496[(10)] = inst_36416);

(statearr_36496[(11)] = inst_36414);

(statearr_36496[(12)] = inst_36417);

return statearr_36496;
})();
var statearr_36498_38149 = state_36462__$1;
(statearr_36498_38149[(2)] = null);

(statearr_36498_38149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (17))){
var inst_36428 = (state_36462[(7)]);
var inst_36432 = cljs.core.chunk_first(inst_36428);
var inst_36433 = cljs.core.chunk_rest(inst_36428);
var inst_36434 = cljs.core.count(inst_36432);
var inst_36414 = inst_36433;
var inst_36415 = inst_36432;
var inst_36416 = inst_36434;
var inst_36417 = (0);
var state_36462__$1 = (function (){var statearr_36500 = state_36462;
(statearr_36500[(8)] = inst_36415);

(statearr_36500[(10)] = inst_36416);

(statearr_36500[(11)] = inst_36414);

(statearr_36500[(12)] = inst_36417);

return statearr_36500;
})();
var statearr_36501_38151 = state_36462__$1;
(statearr_36501_38151[(2)] = null);

(statearr_36501_38151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (3))){
var inst_36460 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36462__$1,inst_36460);
} else {
if((state_val_36463 === (12))){
var inst_36448 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
var statearr_36505_38155 = state_36462__$1;
(statearr_36505_38155[(2)] = inst_36448);

(statearr_36505_38155[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (2))){
var state_36462__$1 = state_36462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36462__$1,(4),in$);
} else {
if((state_val_36463 === (23))){
var inst_36456 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
var statearr_36506_38156 = state_36462__$1;
(statearr_36506_38156[(2)] = inst_36456);

(statearr_36506_38156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (19))){
var inst_36443 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
var statearr_36508_38161 = state_36462__$1;
(statearr_36508_38161[(2)] = inst_36443);

(statearr_36508_38161[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (11))){
var inst_36414 = (state_36462[(11)]);
var inst_36428 = (state_36462[(7)]);
var inst_36428__$1 = cljs.core.seq(inst_36414);
var state_36462__$1 = (function (){var statearr_36509 = state_36462;
(statearr_36509[(7)] = inst_36428__$1);

return statearr_36509;
})();
if(inst_36428__$1){
var statearr_36512_38165 = state_36462__$1;
(statearr_36512_38165[(1)] = (14));

} else {
var statearr_36513_38166 = state_36462__$1;
(statearr_36513_38166[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (9))){
var inst_36450 = (state_36462[(2)]);
var inst_36451 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36462__$1 = (function (){var statearr_36514 = state_36462;
(statearr_36514[(15)] = inst_36450);

return statearr_36514;
})();
if(cljs.core.truth_(inst_36451)){
var statearr_36515_38167 = state_36462__$1;
(statearr_36515_38167[(1)] = (21));

} else {
var statearr_36518_38169 = state_36462__$1;
(statearr_36518_38169[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (5))){
var inst_36406 = cljs.core.async.close_BANG_(out);
var state_36462__$1 = state_36462;
var statearr_36520_38170 = state_36462__$1;
(statearr_36520_38170[(2)] = inst_36406);

(statearr_36520_38170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (14))){
var inst_36428 = (state_36462[(7)]);
var inst_36430 = cljs.core.chunked_seq_QMARK_(inst_36428);
var state_36462__$1 = state_36462;
if(inst_36430){
var statearr_36525_38171 = state_36462__$1;
(statearr_36525_38171[(1)] = (17));

} else {
var statearr_36529_38173 = state_36462__$1;
(statearr_36529_38173[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (16))){
var inst_36446 = (state_36462[(2)]);
var state_36462__$1 = state_36462;
var statearr_36532_38175 = state_36462__$1;
(statearr_36532_38175[(2)] = inst_36446);

(statearr_36532_38175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36463 === (10))){
var inst_36415 = (state_36462[(8)]);
var inst_36417 = (state_36462[(12)]);
var inst_36422 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36415,inst_36417);
var state_36462__$1 = state_36462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36462__$1,(13),out,inst_36422);
} else {
if((state_val_36463 === (18))){
var inst_36428 = (state_36462[(7)]);
var inst_36437 = cljs.core.first(inst_36428);
var state_36462__$1 = state_36462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36462__$1,(20),out,inst_36437);
} else {
if((state_val_36463 === (8))){
var inst_36416 = (state_36462[(10)]);
var inst_36417 = (state_36462[(12)]);
var inst_36419 = (inst_36417 < inst_36416);
var inst_36420 = inst_36419;
var state_36462__$1 = state_36462;
if(cljs.core.truth_(inst_36420)){
var statearr_36534_38177 = state_36462__$1;
(statearr_36534_38177[(1)] = (10));

} else {
var statearr_36536_38178 = state_36462__$1;
(statearr_36536_38178[(1)] = (11));

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
var statearr_36540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36540[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36540[(1)] = (1));

return statearr_36540;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36462){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36462);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36547){if((e36547 instanceof Object)){
var ex__34210__auto__ = e36547;
var statearr_36548_38182 = state_36462;
(statearr_36548_38182[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38183 = state_36462;
state_36462 = G__38183;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36462){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36549 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36549[(6)] = c__34272__auto__);

return statearr_36549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34272__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36560 = arguments.length;
switch (G__36560) {
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
var G__36565 = arguments.length;
switch (G__36565) {
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
var G__36574 = arguments.length;
switch (G__36574) {
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
var c__34272__auto___38194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36601){
var state_val_36602 = (state_36601[(1)]);
if((state_val_36602 === (7))){
var inst_36596 = (state_36601[(2)]);
var state_36601__$1 = state_36601;
var statearr_36604_38195 = state_36601__$1;
(statearr_36604_38195[(2)] = inst_36596);

(statearr_36604_38195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (1))){
var inst_36577 = null;
var state_36601__$1 = (function (){var statearr_36607 = state_36601;
(statearr_36607[(7)] = inst_36577);

return statearr_36607;
})();
var statearr_36608_38196 = state_36601__$1;
(statearr_36608_38196[(2)] = null);

(statearr_36608_38196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (4))){
var inst_36581 = (state_36601[(8)]);
var inst_36581__$1 = (state_36601[(2)]);
var inst_36582 = (inst_36581__$1 == null);
var inst_36583 = cljs.core.not(inst_36582);
var state_36601__$1 = (function (){var statearr_36611 = state_36601;
(statearr_36611[(8)] = inst_36581__$1);

return statearr_36611;
})();
if(inst_36583){
var statearr_36612_38198 = state_36601__$1;
(statearr_36612_38198[(1)] = (5));

} else {
var statearr_36613_38199 = state_36601__$1;
(statearr_36613_38199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (6))){
var state_36601__$1 = state_36601;
var statearr_36614_38200 = state_36601__$1;
(statearr_36614_38200[(2)] = null);

(statearr_36614_38200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (3))){
var inst_36598 = (state_36601[(2)]);
var inst_36599 = cljs.core.async.close_BANG_(out);
var state_36601__$1 = (function (){var statearr_36616 = state_36601;
(statearr_36616[(9)] = inst_36598);

return statearr_36616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36601__$1,inst_36599);
} else {
if((state_val_36602 === (2))){
var state_36601__$1 = state_36601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36601__$1,(4),ch);
} else {
if((state_val_36602 === (11))){
var inst_36581 = (state_36601[(8)]);
var inst_36590 = (state_36601[(2)]);
var inst_36577 = inst_36581;
var state_36601__$1 = (function (){var statearr_36617 = state_36601;
(statearr_36617[(7)] = inst_36577);

(statearr_36617[(10)] = inst_36590);

return statearr_36617;
})();
var statearr_36619_38202 = state_36601__$1;
(statearr_36619_38202[(2)] = null);

(statearr_36619_38202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (9))){
var inst_36581 = (state_36601[(8)]);
var state_36601__$1 = state_36601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36601__$1,(11),out,inst_36581);
} else {
if((state_val_36602 === (5))){
var inst_36577 = (state_36601[(7)]);
var inst_36581 = (state_36601[(8)]);
var inst_36585 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36581,inst_36577);
var state_36601__$1 = state_36601;
if(inst_36585){
var statearr_36622_38204 = state_36601__$1;
(statearr_36622_38204[(1)] = (8));

} else {
var statearr_36623_38205 = state_36601__$1;
(statearr_36623_38205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (10))){
var inst_36593 = (state_36601[(2)]);
var state_36601__$1 = state_36601;
var statearr_36624_38206 = state_36601__$1;
(statearr_36624_38206[(2)] = inst_36593);

(statearr_36624_38206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36602 === (8))){
var inst_36577 = (state_36601[(7)]);
var tmp36620 = inst_36577;
var inst_36577__$1 = tmp36620;
var state_36601__$1 = (function (){var statearr_36626 = state_36601;
(statearr_36626[(7)] = inst_36577__$1);

return statearr_36626;
})();
var statearr_36627_38207 = state_36601__$1;
(statearr_36627_38207[(2)] = null);

(statearr_36627_38207[(1)] = (2));


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
var statearr_36628 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36628[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36628[(1)] = (1));

return statearr_36628;
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
}catch (e36630){if((e36630 instanceof Object)){
var ex__34210__auto__ = e36630;
var statearr_36631_38209 = state_36601;
(statearr_36631_38209[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38210 = state_36601;
state_36601 = G__38210;
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
var state__34275__auto__ = (function (){var statearr_36632 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36632[(6)] = c__34272__auto___38194);

return statearr_36632;
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
var G__36636 = arguments.length;
switch (G__36636) {
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
var c__34272__auto___38214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36677){
var state_val_36678 = (state_36677[(1)]);
if((state_val_36678 === (7))){
var inst_36672 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
var statearr_36680_38215 = state_36677__$1;
(statearr_36680_38215[(2)] = inst_36672);

(statearr_36680_38215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (1))){
var inst_36639 = (new Array(n));
var inst_36640 = inst_36639;
var inst_36641 = (0);
var state_36677__$1 = (function (){var statearr_36681 = state_36677;
(statearr_36681[(7)] = inst_36640);

(statearr_36681[(8)] = inst_36641);

return statearr_36681;
})();
var statearr_36682_38217 = state_36677__$1;
(statearr_36682_38217[(2)] = null);

(statearr_36682_38217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (4))){
var inst_36644 = (state_36677[(9)]);
var inst_36644__$1 = (state_36677[(2)]);
var inst_36645 = (inst_36644__$1 == null);
var inst_36646 = cljs.core.not(inst_36645);
var state_36677__$1 = (function (){var statearr_36684 = state_36677;
(statearr_36684[(9)] = inst_36644__$1);

return statearr_36684;
})();
if(inst_36646){
var statearr_36685_38219 = state_36677__$1;
(statearr_36685_38219[(1)] = (5));

} else {
var statearr_36686_38220 = state_36677__$1;
(statearr_36686_38220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (15))){
var inst_36666 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
var statearr_36688_38221 = state_36677__$1;
(statearr_36688_38221[(2)] = inst_36666);

(statearr_36688_38221[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (13))){
var state_36677__$1 = state_36677;
var statearr_36689_38223 = state_36677__$1;
(statearr_36689_38223[(2)] = null);

(statearr_36689_38223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (6))){
var inst_36641 = (state_36677[(8)]);
var inst_36662 = (inst_36641 > (0));
var state_36677__$1 = state_36677;
if(cljs.core.truth_(inst_36662)){
var statearr_36691_38224 = state_36677__$1;
(statearr_36691_38224[(1)] = (12));

} else {
var statearr_36692_38225 = state_36677__$1;
(statearr_36692_38225[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (3))){
var inst_36674 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36677__$1,inst_36674);
} else {
if((state_val_36678 === (12))){
var inst_36640 = (state_36677[(7)]);
var inst_36664 = cljs.core.vec(inst_36640);
var state_36677__$1 = state_36677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36677__$1,(15),out,inst_36664);
} else {
if((state_val_36678 === (2))){
var state_36677__$1 = state_36677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36677__$1,(4),ch);
} else {
if((state_val_36678 === (11))){
var inst_36656 = (state_36677[(2)]);
var inst_36657 = (new Array(n));
var inst_36640 = inst_36657;
var inst_36641 = (0);
var state_36677__$1 = (function (){var statearr_36694 = state_36677;
(statearr_36694[(10)] = inst_36656);

(statearr_36694[(7)] = inst_36640);

(statearr_36694[(8)] = inst_36641);

return statearr_36694;
})();
var statearr_36695_38228 = state_36677__$1;
(statearr_36695_38228[(2)] = null);

(statearr_36695_38228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (9))){
var inst_36640 = (state_36677[(7)]);
var inst_36654 = cljs.core.vec(inst_36640);
var state_36677__$1 = state_36677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36677__$1,(11),out,inst_36654);
} else {
if((state_val_36678 === (5))){
var inst_36640 = (state_36677[(7)]);
var inst_36644 = (state_36677[(9)]);
var inst_36649 = (state_36677[(11)]);
var inst_36641 = (state_36677[(8)]);
var inst_36648 = (inst_36640[inst_36641] = inst_36644);
var inst_36649__$1 = (inst_36641 + (1));
var inst_36650 = (inst_36649__$1 < n);
var state_36677__$1 = (function (){var statearr_36698 = state_36677;
(statearr_36698[(11)] = inst_36649__$1);

(statearr_36698[(12)] = inst_36648);

return statearr_36698;
})();
if(cljs.core.truth_(inst_36650)){
var statearr_36699_38231 = state_36677__$1;
(statearr_36699_38231[(1)] = (8));

} else {
var statearr_36700_38232 = state_36677__$1;
(statearr_36700_38232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (14))){
var inst_36669 = (state_36677[(2)]);
var inst_36670 = cljs.core.async.close_BANG_(out);
var state_36677__$1 = (function (){var statearr_36703 = state_36677;
(statearr_36703[(13)] = inst_36669);

return statearr_36703;
})();
var statearr_36704_38233 = state_36677__$1;
(statearr_36704_38233[(2)] = inst_36670);

(statearr_36704_38233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (10))){
var inst_36660 = (state_36677[(2)]);
var state_36677__$1 = state_36677;
var statearr_36705_38235 = state_36677__$1;
(statearr_36705_38235[(2)] = inst_36660);

(statearr_36705_38235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36678 === (8))){
var inst_36640 = (state_36677[(7)]);
var inst_36649 = (state_36677[(11)]);
var tmp36701 = inst_36640;
var inst_36640__$1 = tmp36701;
var inst_36641 = inst_36649;
var state_36677__$1 = (function (){var statearr_36707 = state_36677;
(statearr_36707[(7)] = inst_36640__$1);

(statearr_36707[(8)] = inst_36641);

return statearr_36707;
})();
var statearr_36708_38237 = state_36677__$1;
(statearr_36708_38237[(2)] = null);

(statearr_36708_38237[(1)] = (2));


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
var statearr_36710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36710[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36710[(1)] = (1));

return statearr_36710;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36677){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36677);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36711){if((e36711 instanceof Object)){
var ex__34210__auto__ = e36711;
var statearr_36712_38239 = state_36677;
(statearr_36712_38239[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38240 = state_36677;
state_36677 = G__38240;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36713 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36713[(6)] = c__34272__auto___38214);

return statearr_36713;
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
var G__36715 = arguments.length;
switch (G__36715) {
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
var c__34272__auto___38244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36759){
var state_val_36760 = (state_36759[(1)]);
if((state_val_36760 === (7))){
var inst_36755 = (state_36759[(2)]);
var state_36759__$1 = state_36759;
var statearr_36762_38245 = state_36759__$1;
(statearr_36762_38245[(2)] = inst_36755);

(statearr_36762_38245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (1))){
var inst_36716 = [];
var inst_36717 = inst_36716;
var inst_36718 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36759__$1 = (function (){var statearr_36763 = state_36759;
(statearr_36763[(7)] = inst_36718);

(statearr_36763[(8)] = inst_36717);

return statearr_36763;
})();
var statearr_36764_38247 = state_36759__$1;
(statearr_36764_38247[(2)] = null);

(statearr_36764_38247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (4))){
var inst_36722 = (state_36759[(9)]);
var inst_36722__$1 = (state_36759[(2)]);
var inst_36723 = (inst_36722__$1 == null);
var inst_36724 = cljs.core.not(inst_36723);
var state_36759__$1 = (function (){var statearr_36766 = state_36759;
(statearr_36766[(9)] = inst_36722__$1);

return statearr_36766;
})();
if(inst_36724){
var statearr_36767_38249 = state_36759__$1;
(statearr_36767_38249[(1)] = (5));

} else {
var statearr_36768_38250 = state_36759__$1;
(statearr_36768_38250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (15))){
var inst_36749 = (state_36759[(2)]);
var state_36759__$1 = state_36759;
var statearr_36769_38251 = state_36759__$1;
(statearr_36769_38251[(2)] = inst_36749);

(statearr_36769_38251[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (13))){
var state_36759__$1 = state_36759;
var statearr_36771_38253 = state_36759__$1;
(statearr_36771_38253[(2)] = null);

(statearr_36771_38253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (6))){
var inst_36717 = (state_36759[(8)]);
var inst_36743 = inst_36717.length;
var inst_36744 = (inst_36743 > (0));
var state_36759__$1 = state_36759;
if(cljs.core.truth_(inst_36744)){
var statearr_36772_38254 = state_36759__$1;
(statearr_36772_38254[(1)] = (12));

} else {
var statearr_36774_38255 = state_36759__$1;
(statearr_36774_38255[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (3))){
var inst_36757 = (state_36759[(2)]);
var state_36759__$1 = state_36759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36759__$1,inst_36757);
} else {
if((state_val_36760 === (12))){
var inst_36717 = (state_36759[(8)]);
var inst_36747 = cljs.core.vec(inst_36717);
var state_36759__$1 = state_36759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36759__$1,(15),out,inst_36747);
} else {
if((state_val_36760 === (2))){
var state_36759__$1 = state_36759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36759__$1,(4),ch);
} else {
if((state_val_36760 === (11))){
var inst_36722 = (state_36759[(9)]);
var inst_36726 = (state_36759[(10)]);
var inst_36736 = (state_36759[(2)]);
var inst_36737 = [];
var inst_36738 = inst_36737.push(inst_36722);
var inst_36717 = inst_36737;
var inst_36718 = inst_36726;
var state_36759__$1 = (function (){var statearr_36776 = state_36759;
(statearr_36776[(11)] = inst_36736);

(statearr_36776[(12)] = inst_36738);

(statearr_36776[(7)] = inst_36718);

(statearr_36776[(8)] = inst_36717);

return statearr_36776;
})();
var statearr_36778_38257 = state_36759__$1;
(statearr_36778_38257[(2)] = null);

(statearr_36778_38257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (9))){
var inst_36717 = (state_36759[(8)]);
var inst_36734 = cljs.core.vec(inst_36717);
var state_36759__$1 = state_36759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36759__$1,(11),out,inst_36734);
} else {
if((state_val_36760 === (5))){
var inst_36722 = (state_36759[(9)]);
var inst_36726 = (state_36759[(10)]);
var inst_36718 = (state_36759[(7)]);
var inst_36726__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36722) : f.call(null,inst_36722));
var inst_36727 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36726__$1,inst_36718);
var inst_36728 = cljs.core.keyword_identical_QMARK_(inst_36718,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36729 = ((inst_36727) || (inst_36728));
var state_36759__$1 = (function (){var statearr_36780 = state_36759;
(statearr_36780[(10)] = inst_36726__$1);

return statearr_36780;
})();
if(cljs.core.truth_(inst_36729)){
var statearr_36781_38259 = state_36759__$1;
(statearr_36781_38259[(1)] = (8));

} else {
var statearr_36782_38260 = state_36759__$1;
(statearr_36782_38260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (14))){
var inst_36752 = (state_36759[(2)]);
var inst_36753 = cljs.core.async.close_BANG_(out);
var state_36759__$1 = (function (){var statearr_36785 = state_36759;
(statearr_36785[(13)] = inst_36752);

return statearr_36785;
})();
var statearr_36786_38261 = state_36759__$1;
(statearr_36786_38261[(2)] = inst_36753);

(statearr_36786_38261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (10))){
var inst_36741 = (state_36759[(2)]);
var state_36759__$1 = state_36759;
var statearr_36787_38262 = state_36759__$1;
(statearr_36787_38262[(2)] = inst_36741);

(statearr_36787_38262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (8))){
var inst_36722 = (state_36759[(9)]);
var inst_36726 = (state_36759[(10)]);
var inst_36717 = (state_36759[(8)]);
var inst_36731 = inst_36717.push(inst_36722);
var tmp36783 = inst_36717;
var inst_36717__$1 = tmp36783;
var inst_36718 = inst_36726;
var state_36759__$1 = (function (){var statearr_36789 = state_36759;
(statearr_36789[(14)] = inst_36731);

(statearr_36789[(7)] = inst_36718);

(statearr_36789[(8)] = inst_36717__$1);

return statearr_36789;
})();
var statearr_36790_38263 = state_36759__$1;
(statearr_36790_38263[(2)] = null);

(statearr_36790_38263[(1)] = (2));


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
var statearr_36792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36792[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36792[(1)] = (1));

return statearr_36792;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36759){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36759);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36793){if((e36793 instanceof Object)){
var ex__34210__auto__ = e36793;
var statearr_36794_38265 = state_36759;
(statearr_36794_38265[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36793;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38266 = state_36759;
state_36759 = G__38266;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36796 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36796[(6)] = c__34272__auto___38244);

return statearr_36796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
