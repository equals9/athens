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
var val_36812 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36812) : fn1.call(null,val_36812));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36812) : fn1.call(null,val_36812));
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
var G__34359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34354_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34359) : fret.call(null,G__34359));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34355_SHARP_){
var G__34360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34355_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34360) : fret.call(null,G__34360));
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
var len__4789__auto___36834 = arguments.length;
var i__4790__auto___36835 = (0);
while(true){
if((i__4790__auto___36835 < len__4789__auto___36834)){
args__4795__auto__.push((arguments[i__4790__auto___36835]));

var G__36836 = (i__4790__auto___36835 + (1));
i__4790__auto___36835 = G__36836;
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
var c__34274__auto___36842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34411){
var state_val_34412 = (state_34411[(1)]);
if((state_val_34412 === (7))){
var inst_34407 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34413_36844 = state_34411__$1;
(statearr_34413_36844[(2)] = inst_34407);

(statearr_34413_36844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (1))){
var state_34411__$1 = state_34411;
var statearr_34414_36845 = state_34411__$1;
(statearr_34414_36845[(2)] = null);

(statearr_34414_36845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (4))){
var inst_34387 = (state_34411[(7)]);
var inst_34387__$1 = (state_34411[(2)]);
var inst_34388 = (inst_34387__$1 == null);
var state_34411__$1 = (function (){var statearr_34415 = state_34411;
(statearr_34415[(7)] = inst_34387__$1);

return statearr_34415;
})();
if(cljs.core.truth_(inst_34388)){
var statearr_34416_36847 = state_34411__$1;
(statearr_34416_36847[(1)] = (5));

} else {
var statearr_34417_36848 = state_34411__$1;
(statearr_34417_36848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (13))){
var state_34411__$1 = state_34411;
var statearr_34424_36849 = state_34411__$1;
(statearr_34424_36849[(2)] = null);

(statearr_34424_36849[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (6))){
var inst_34387 = (state_34411[(7)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34411__$1,(11),to,inst_34387);
} else {
if((state_val_34412 === (3))){
var inst_34409 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34411__$1,inst_34409);
} else {
if((state_val_34412 === (12))){
var state_34411__$1 = state_34411;
var statearr_34431_36852 = state_34411__$1;
(statearr_34431_36852[(2)] = null);

(statearr_34431_36852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (2))){
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34411__$1,(4),from);
} else {
if((state_val_34412 === (11))){
var inst_34399 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
if(cljs.core.truth_(inst_34399)){
var statearr_34432_36853 = state_34411__$1;
(statearr_34432_36853[(1)] = (12));

} else {
var statearr_34433_36854 = state_34411__$1;
(statearr_34433_36854[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (9))){
var state_34411__$1 = state_34411;
var statearr_34434_36856 = state_34411__$1;
(statearr_34434_36856[(2)] = null);

(statearr_34434_36856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (5))){
var state_34411__$1 = state_34411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36857 = state_34411__$1;
(statearr_34435_36857[(1)] = (8));

} else {
var statearr_34436_36858 = state_34411__$1;
(statearr_34436_36858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (14))){
var inst_34405 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34437_36860 = state_34411__$1;
(statearr_34437_36860[(2)] = inst_34405);

(statearr_34437_36860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (10))){
var inst_34395 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34438_36861 = state_34411__$1;
(statearr_34438_36861[(2)] = inst_34395);

(statearr_34438_36861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (8))){
var inst_34391 = cljs.core.async.close_BANG_(to);
var state_34411__$1 = state_34411;
var statearr_34439_36863 = state_34411__$1;
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
var statearr_34442_36865 = state_34411;
(statearr_34442_36865[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36867 = state_34411;
state_34411 = G__36867;
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
(statearr_34443[(6)] = c__34274__auto___36842);

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
var c__34274__auto___36870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34457_36873 = state_34452;
(statearr_34457_36873[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36874 = state_34452;
state_34452 = G__36874;
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
(statearr_34458[(6)] = c__34274__auto___36870);

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
var n__4666__auto___36877 = n;
var __36878 = (0);
while(true){
if((__36878 < n__4666__auto___36877)){
var G__34463_36879 = type;
var G__34463_36880__$1 = (((G__34463_36879 instanceof cljs.core.Keyword))?G__34463_36879.fqn:null);
switch (G__34463_36880__$1) {
case "compute":
var c__34274__auto___36883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36878,c__34274__auto___36883,G__34463_36879,G__34463_36880__$1,n__4666__auto___36877,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36878,c__34274__auto___36883,G__34463_36879,G__34463_36880__$1,n__4666__auto___36877,jobs,results,process,async){
return (function (state_34476){
var state_val_34477 = (state_34476[(1)]);
if((state_val_34477 === (1))){
var state_34476__$1 = state_34476;
var statearr_34478_36884 = state_34476__$1;
(statearr_34478_36884[(2)] = null);

(statearr_34478_36884[(1)] = (2));


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
var statearr_34483_36887 = state_34476__$1;
(statearr_34483_36887[(1)] = (5));

} else {
var statearr_34484_36888 = state_34476__$1;
(statearr_34484_36888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (5))){
var state_34476__$1 = state_34476;
var statearr_34485_36889 = state_34476__$1;
(statearr_34485_36889[(2)] = null);

(statearr_34485_36889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (6))){
var state_34476__$1 = state_34476;
var statearr_34486_36890 = state_34476__$1;
(statearr_34486_36890[(2)] = null);

(statearr_34486_36890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (7))){
var inst_34472 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
var statearr_34487_36892 = state_34476__$1;
(statearr_34487_36892[(2)] = inst_34472);

(statearr_34487_36892[(1)] = (3));


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
});})(__36878,c__34274__auto___36883,G__34463_36879,G__34463_36880__$1,n__4666__auto___36877,jobs,results,process,async))
;
return ((function (__36878,switch__34206__auto__,c__34274__auto___36883,G__34463_36879,G__34463_36880__$1,n__4666__auto___36877,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34489 = [null,null,null,null,null,null,null];
(statearr_34489[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34489[(1)] = (1));

return statearr_34489;
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
}catch (e34490){if((e34490 instanceof Object)){
var ex__34210__auto__ = e34490;
var statearr_34491_36894 = state_34476;
(statearr_34491_36894[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36896 = state_34476;
state_34476 = G__36896;
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
;})(__36878,switch__34206__auto__,c__34274__auto___36883,G__34463_36879,G__34463_36880__$1,n__4666__auto___36877,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34492 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34492[(6)] = c__34274__auto___36883);

return statearr_34492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36878,c__34274__auto___36883,G__34463_36879,G__34463_36880__$1,n__4666__auto___36877,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36878,c__34274__auto___36898,G__34463_36879,G__34463_36880__$1,n__4666__auto___36877,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36878,c__34274__auto___36898,G__34463_36879,G__34463_36880__$1,n__4666__auto___36877,jobs,results,process,async){
return (function (state_34505){
var state_val_34506 = (state_34505[(1)]);
if((state_val_34506 === (1))){
var state_34505__$1 = state_34505;
var statearr_34508_36899 = state_34505__$1;
(statearr_34508_36899[(2)] = null);

(statearr_34508_36899[(1)] = (2));


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
var inst_34495 = (state_34505[(2)]);
var inst_34496 = async(inst_34495);
var state_34505__$1 = state_34505;
if(cljs.core.truth_(inst_34496)){
var statearr_34510_36901 = state_34505__$1;
(statearr_34510_36901[(1)] = (5));

} else {
var statearr_34511_36902 = state_34505__$1;
(statearr_34511_36902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (5))){
var state_34505__$1 = state_34505;
var statearr_34512_36904 = state_34505__$1;
(statearr_34512_36904[(2)] = null);

(statearr_34512_36904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (6))){
var state_34505__$1 = state_34505;
var statearr_34513_36905 = state_34505__$1;
(statearr_34513_36905[(2)] = null);

(statearr_34513_36905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (7))){
var inst_34501 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
var statearr_34514_36907 = state_34505__$1;
(statearr_34514_36907[(2)] = inst_34501);

(statearr_34514_36907[(1)] = (3));


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
});})(__36878,c__34274__auto___36898,G__34463_36879,G__34463_36880__$1,n__4666__auto___36877,jobs,results,process,async))
;
return ((function (__36878,switch__34206__auto__,c__34274__auto___36898,G__34463_36879,G__34463_36880__$1,n__4666__auto___36877,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34516 = [null,null,null,null,null,null,null];
(statearr_34516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34516[(1)] = (1));

return statearr_34516;
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
}catch (e34517){if((e34517 instanceof Object)){
var ex__34210__auto__ = e34517;
var statearr_34518_36909 = state_34505;
(statearr_34518_36909[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34517;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36911 = state_34505;
state_34505 = G__36911;
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
;})(__36878,switch__34206__auto__,c__34274__auto___36898,G__34463_36879,G__34463_36880__$1,n__4666__auto___36877,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34519 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34519[(6)] = c__34274__auto___36898);

return statearr_34519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36878,c__34274__auto___36898,G__34463_36879,G__34463_36880__$1,n__4666__auto___36877,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34463_36880__$1)].join('')));

}

var G__36912 = (__36878 + (1));
__36878 = G__36912;
continue;
} else {
}
break;
}

var c__34274__auto___36913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34548){
var state_val_34549 = (state_34548[(1)]);
if((state_val_34549 === (7))){
var inst_34544 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
var statearr_34550_36915 = state_34548__$1;
(statearr_34550_36915[(2)] = inst_34544);

(statearr_34550_36915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (1))){
var state_34548__$1 = state_34548;
var statearr_34551_36916 = state_34548__$1;
(statearr_34551_36916[(2)] = null);

(statearr_34551_36916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (4))){
var inst_34524 = (state_34548[(7)]);
var inst_34524__$1 = (state_34548[(2)]);
var inst_34528 = (inst_34524__$1 == null);
var state_34548__$1 = (function (){var statearr_34552 = state_34548;
(statearr_34552[(7)] = inst_34524__$1);

return statearr_34552;
})();
if(cljs.core.truth_(inst_34528)){
var statearr_34553_36918 = state_34548__$1;
(statearr_34553_36918[(1)] = (5));

} else {
var statearr_34554_36919 = state_34548__$1;
(statearr_34554_36919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (6))){
var inst_34524 = (state_34548[(7)]);
var inst_34532 = (state_34548[(8)]);
var inst_34532__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34535 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34536 = [inst_34524,inst_34532__$1];
var inst_34537 = (new cljs.core.PersistentVector(null,2,(5),inst_34535,inst_34536,null));
var state_34548__$1 = (function (){var statearr_34556 = state_34548;
(statearr_34556[(8)] = inst_34532__$1);

return statearr_34556;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34548__$1,(8),jobs,inst_34537);
} else {
if((state_val_34549 === (3))){
var inst_34546 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34548__$1,inst_34546);
} else {
if((state_val_34549 === (2))){
var state_34548__$1 = state_34548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34548__$1,(4),from);
} else {
if((state_val_34549 === (9))){
var inst_34541 = (state_34548[(2)]);
var state_34548__$1 = (function (){var statearr_34557 = state_34548;
(statearr_34557[(9)] = inst_34541);

return statearr_34557;
})();
var statearr_34558_36922 = state_34548__$1;
(statearr_34558_36922[(2)] = null);

(statearr_34558_36922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (5))){
var inst_34530 = cljs.core.async.close_BANG_(jobs);
var state_34548__$1 = state_34548;
var statearr_34559_36924 = state_34548__$1;
(statearr_34559_36924[(2)] = inst_34530);

(statearr_34559_36924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (8))){
var inst_34532 = (state_34548[(8)]);
var inst_34539 = (state_34548[(2)]);
var state_34548__$1 = (function (){var statearr_34561 = state_34548;
(statearr_34561[(10)] = inst_34539);

return statearr_34561;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34548__$1,(9),results,inst_34532);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34548){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34548);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34569){if((e34569 instanceof Object)){
var ex__34210__auto__ = e34569;
var statearr_34570_36927 = state_34548;
(statearr_34570_36927[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34569;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36928 = state_34548;
state_34548 = G__36928;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34571 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34571[(6)] = c__34274__auto___36913);

return statearr_34571;
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
var statearr_34611_36930 = state_34609__$1;
(statearr_34611_36930[(2)] = inst_34605);

(statearr_34611_36930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (20))){
var state_34609__$1 = state_34609;
var statearr_34612_36932 = state_34609__$1;
(statearr_34612_36932[(2)] = null);

(statearr_34612_36932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (1))){
var state_34609__$1 = state_34609;
var statearr_34613_36933 = state_34609__$1;
(statearr_34613_36933[(2)] = null);

(statearr_34613_36933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (4))){
var inst_34574 = (state_34609[(7)]);
var inst_34574__$1 = (state_34609[(2)]);
var inst_34575 = (inst_34574__$1 == null);
var state_34609__$1 = (function (){var statearr_34614 = state_34609;
(statearr_34614[(7)] = inst_34574__$1);

return statearr_34614;
})();
if(cljs.core.truth_(inst_34575)){
var statearr_34617_36935 = state_34609__$1;
(statearr_34617_36935[(1)] = (5));

} else {
var statearr_34619_36936 = state_34609__$1;
(statearr_34619_36936[(1)] = (6));

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
var statearr_34620_36938 = state_34609__$1;
(statearr_34620_36938[(2)] = inst_34600);

(statearr_34620_36938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (13))){
var inst_34602 = (state_34609[(2)]);
var state_34609__$1 = (function (){var statearr_34621 = state_34609;
(statearr_34621[(9)] = inst_34602);

return statearr_34621;
})();
var statearr_34622_36939 = state_34609__$1;
(statearr_34622_36939[(2)] = null);

(statearr_34622_36939[(1)] = (2));


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
var statearr_34623_36941 = state_34609__$1;
(statearr_34623_36941[(1)] = (19));

} else {
var statearr_34624_36942 = state_34609__$1;
(statearr_34624_36942[(1)] = (20));

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
var statearr_34625_36945 = state_34609__$1;
(statearr_34625_36945[(2)] = null);

(statearr_34625_36945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (11))){
var inst_34584 = (state_34609[(2)]);
var state_34609__$1 = (function (){var statearr_34626 = state_34609;
(statearr_34626[(10)] = inst_34584);

return statearr_34626;
})();
var statearr_34627_36946 = state_34609__$1;
(statearr_34627_36946[(2)] = null);

(statearr_34627_36946[(1)] = (12));


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
var statearr_34634_36954 = state_34609__$1;
(statearr_34634_36954[(2)] = false);

(statearr_34634_36954[(1)] = (17));


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
var statearr_34636_36957 = state_34609__$1;
(statearr_34636_36957[(2)] = inst_34592);

(statearr_34636_36957[(1)] = (17));


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
var statearr_34640_36961 = state_34609;
(statearr_34640_36961[(5)] = ex__34210__auto__);


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
var c__34274__auto___36973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_36975 = state_34673__$1;
(statearr_34675_36975[(2)] = inst_34669);

(statearr_34675_36975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_36976 = state_34673__$1;
(statearr_34676_36976[(2)] = null);

(statearr_34676_36976[(1)] = (2));


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
var statearr_34678_36978 = state_34673__$1;
(statearr_34678_36978[(1)] = (5));

} else {
var statearr_34679_36979 = state_34673__$1;
(statearr_34679_36979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_36981 = state_34673__$1;
(statearr_34680_36981[(2)] = null);

(statearr_34680_36981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_36982 = state_34673__$1;
(statearr_34681_36982[(1)] = (9));

} else {
var statearr_34682_36983 = state_34673__$1;
(statearr_34682_36983[(1)] = (10));

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
var statearr_34683_36985 = state_34673__$1;
(statearr_34683_36985[(2)] = null);

(statearr_34683_36985[(1)] = (2));


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
var statearr_34684_36987 = state_34673__$1;
(statearr_34684_36987[(2)] = tc);

(statearr_34684_36987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34685 = state_34673;
(statearr_34685[(8)] = inst_34653);

return statearr_34685;
})();
var statearr_34686_36989 = state_34673__$1;
(statearr_34686_36989[(2)] = inst_34654);

(statearr_34686_36989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34687_36991 = state_34673__$1;
(statearr_34687_36991[(2)] = inst_34667);

(statearr_34687_36991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34688_36992 = state_34673__$1;
(statearr_34688_36992[(2)] = fc);

(statearr_34688_36992[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34689_36993 = state_34673__$1;
(statearr_34689_36993[(1)] = (12));

} else {
var statearr_34690_36995 = state_34673__$1;
(statearr_34690_36995[(1)] = (13));

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
}catch (e34695){if((e34695 instanceof Object)){
var ex__34210__auto__ = e34695;
var statearr_34696_36997 = state_34673;
(statearr_34696_36997[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34695;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36998 = state_34673;
state_34673 = G__36998;
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
(statearr_34697[(6)] = c__34274__auto___36973);

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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34718){
var state_val_34722 = (state_34718[(1)]);
if((state_val_34722 === (7))){
var inst_34714 = (state_34718[(2)]);
var state_34718__$1 = state_34718;
var statearr_34725_37001 = state_34718__$1;
(statearr_34725_37001[(2)] = inst_34714);

(statearr_34725_37001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (1))){
var inst_34698 = init;
var state_34718__$1 = (function (){var statearr_34726 = state_34718;
(statearr_34726[(7)] = inst_34698);

return statearr_34726;
})();
var statearr_34727_37002 = state_34718__$1;
(statearr_34727_37002[(2)] = null);

(statearr_34727_37002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (4))){
var inst_34701 = (state_34718[(8)]);
var inst_34701__$1 = (state_34718[(2)]);
var inst_34702 = (inst_34701__$1 == null);
var state_34718__$1 = (function (){var statearr_34729 = state_34718;
(statearr_34729[(8)] = inst_34701__$1);

return statearr_34729;
})();
if(cljs.core.truth_(inst_34702)){
var statearr_34730_37004 = state_34718__$1;
(statearr_34730_37004[(1)] = (5));

} else {
var statearr_34731_37005 = state_34718__$1;
(statearr_34731_37005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (6))){
var inst_34698 = (state_34718[(7)]);
var inst_34701 = (state_34718[(8)]);
var inst_34705 = (state_34718[(9)]);
var inst_34705__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34698,inst_34701) : f.call(null,inst_34698,inst_34701));
var inst_34706 = cljs.core.reduced_QMARK_(inst_34705__$1);
var state_34718__$1 = (function (){var statearr_34732 = state_34718;
(statearr_34732[(9)] = inst_34705__$1);

return statearr_34732;
})();
if(inst_34706){
var statearr_34735_37007 = state_34718__$1;
(statearr_34735_37007[(1)] = (8));

} else {
var statearr_34736_37008 = state_34718__$1;
(statearr_34736_37008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (3))){
var inst_34716 = (state_34718[(2)]);
var state_34718__$1 = state_34718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34718__$1,inst_34716);
} else {
if((state_val_34722 === (2))){
var state_34718__$1 = state_34718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34718__$1,(4),ch);
} else {
if((state_val_34722 === (9))){
var inst_34705 = (state_34718[(9)]);
var inst_34698 = inst_34705;
var state_34718__$1 = (function (){var statearr_34737 = state_34718;
(statearr_34737[(7)] = inst_34698);

return statearr_34737;
})();
var statearr_34738_37010 = state_34718__$1;
(statearr_34738_37010[(2)] = null);

(statearr_34738_37010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (5))){
var inst_34698 = (state_34718[(7)]);
var state_34718__$1 = state_34718;
var statearr_34739_37017 = state_34718__$1;
(statearr_34739_37017[(2)] = inst_34698);

(statearr_34739_37017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (10))){
var inst_34712 = (state_34718[(2)]);
var state_34718__$1 = state_34718;
var statearr_34740_37018 = state_34718__$1;
(statearr_34740_37018[(2)] = inst_34712);

(statearr_34740_37018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34722 === (8))){
var inst_34705 = (state_34718[(9)]);
var inst_34708 = cljs.core.deref(inst_34705);
var state_34718__$1 = state_34718;
var statearr_34741_37019 = state_34718__$1;
(statearr_34741_37019[(2)] = inst_34708);

(statearr_34741_37019[(1)] = (10));


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
var statearr_34743 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34743[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34743[(1)] = (1));

return statearr_34743;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34718){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34718);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34744){if((e34744 instanceof Object)){
var ex__34210__auto__ = e34744;
var statearr_34745_37021 = state_34718;
(statearr_34745_37021[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34744;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37023 = state_34718;
state_34718 = G__37023;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34718){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34747 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34747[(6)] = c__34274__auto__);

return statearr_34747;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34755){
var state_val_34756 = (state_34755[(1)]);
if((state_val_34756 === (1))){
var inst_34750 = cljs.core.async.reduce(f__$1,init,ch);
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34755__$1,(2),inst_34750);
} else {
if((state_val_34756 === (2))){
var inst_34752 = (state_34755[(2)]);
var inst_34753 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34752) : f__$1.call(null,inst_34752));
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34755__$1,inst_34753);
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
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34755){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34755);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34761){if((e34761 instanceof Object)){
var ex__34210__auto__ = e34761;
var statearr_34762_37028 = state_34755;
(statearr_34762_37028[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37029 = state_34755;
state_34755 = G__37029;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34755){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34763 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34763[(6)] = c__34274__auto__);

return statearr_34763;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34791){
var state_val_34795 = (state_34791[(1)]);
if((state_val_34795 === (7))){
var inst_34773 = (state_34791[(2)]);
var state_34791__$1 = state_34791;
var statearr_34796_37031 = state_34791__$1;
(statearr_34796_37031[(2)] = inst_34773);

(statearr_34796_37031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (1))){
var inst_34767 = cljs.core.seq(coll);
var inst_34768 = inst_34767;
var state_34791__$1 = (function (){var statearr_34797 = state_34791;
(statearr_34797[(7)] = inst_34768);

return statearr_34797;
})();
var statearr_34798_37032 = state_34791__$1;
(statearr_34798_37032[(2)] = null);

(statearr_34798_37032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (4))){
var inst_34768 = (state_34791[(7)]);
var inst_34771 = cljs.core.first(inst_34768);
var state_34791__$1 = state_34791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34791__$1,(7),ch,inst_34771);
} else {
if((state_val_34795 === (13))){
var inst_34785 = (state_34791[(2)]);
var state_34791__$1 = state_34791;
var statearr_34799_37035 = state_34791__$1;
(statearr_34799_37035[(2)] = inst_34785);

(statearr_34799_37035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (6))){
var inst_34776 = (state_34791[(2)]);
var state_34791__$1 = state_34791;
if(cljs.core.truth_(inst_34776)){
var statearr_34803_37038 = state_34791__$1;
(statearr_34803_37038[(1)] = (8));

} else {
var statearr_34804_37039 = state_34791__$1;
(statearr_34804_37039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (3))){
var inst_34789 = (state_34791[(2)]);
var state_34791__$1 = state_34791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34791__$1,inst_34789);
} else {
if((state_val_34795 === (12))){
var state_34791__$1 = state_34791;
var statearr_34805_37042 = state_34791__$1;
(statearr_34805_37042[(2)] = null);

(statearr_34805_37042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (2))){
var inst_34768 = (state_34791[(7)]);
var state_34791__$1 = state_34791;
if(cljs.core.truth_(inst_34768)){
var statearr_34806_37043 = state_34791__$1;
(statearr_34806_37043[(1)] = (4));

} else {
var statearr_34807_37044 = state_34791__$1;
(statearr_34807_37044[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (11))){
var inst_34782 = cljs.core.async.close_BANG_(ch);
var state_34791__$1 = state_34791;
var statearr_34808_37045 = state_34791__$1;
(statearr_34808_37045[(2)] = inst_34782);

(statearr_34808_37045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (9))){
var state_34791__$1 = state_34791;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34809_37046 = state_34791__$1;
(statearr_34809_37046[(1)] = (11));

} else {
var statearr_34810_37047 = state_34791__$1;
(statearr_34810_37047[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (5))){
var inst_34768 = (state_34791[(7)]);
var state_34791__$1 = state_34791;
var statearr_34811_37048 = state_34791__$1;
(statearr_34811_37048[(2)] = inst_34768);

(statearr_34811_37048[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (10))){
var inst_34787 = (state_34791[(2)]);
var state_34791__$1 = state_34791;
var statearr_34812_37051 = state_34791__$1;
(statearr_34812_37051[(2)] = inst_34787);

(statearr_34812_37051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (8))){
var inst_34768 = (state_34791[(7)]);
var inst_34778 = cljs.core.next(inst_34768);
var inst_34768__$1 = inst_34778;
var state_34791__$1 = (function (){var statearr_34813 = state_34791;
(statearr_34813[(7)] = inst_34768__$1);

return statearr_34813;
})();
var statearr_34814_37055 = state_34791__$1;
(statearr_34814_37055[(2)] = null);

(statearr_34814_37055[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34791){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34791);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34819){if((e34819 instanceof Object)){
var ex__34210__auto__ = e34819;
var statearr_34820_37057 = state_34791;
(statearr_34820_37057[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37060 = state_34791;
state_34791 = G__37060;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34791);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34825 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34825 = (function (ch,cs,meta34826){
this.ch = ch;
this.cs = cs;
this.meta34826 = meta34826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34827,meta34826__$1){
var self__ = this;
var _34827__$1 = this;
return (new cljs.core.async.t_cljs$core$async34825(self__.ch,self__.cs,meta34826__$1));
}));

(cljs.core.async.t_cljs$core$async34825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34827){
var self__ = this;
var _34827__$1 = this;
return self__.meta34826;
}));

(cljs.core.async.t_cljs$core$async34825.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34825.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34825.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34825.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34825.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34825.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34826","meta34826",1873660496,null)], null);
}));

(cljs.core.async.t_cljs$core$async34825.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34825");

(cljs.core.async.t_cljs$core$async34825.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34825");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34825.
 */
cljs.core.async.__GT_t_cljs$core$async34825 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34825(ch__$1,cs__$1,meta34826){
return (new cljs.core.async.t_cljs$core$async34825(ch__$1,cs__$1,meta34826));
});

}

return (new cljs.core.async.t_cljs$core$async34825(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34274__auto___37113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34972){
var state_val_34973 = (state_34972[(1)]);
if((state_val_34973 === (7))){
var inst_34968 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_34974_37116 = state_34972__$1;
(statearr_34974_37116[(2)] = inst_34968);

(statearr_34974_37116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (20))){
var inst_34871 = (state_34972[(7)]);
var inst_34883 = cljs.core.first(inst_34871);
var inst_34884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34883,(0),null);
var inst_34885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34883,(1),null);
var state_34972__$1 = (function (){var statearr_34975 = state_34972;
(statearr_34975[(8)] = inst_34884);

return statearr_34975;
})();
if(cljs.core.truth_(inst_34885)){
var statearr_34976_37118 = state_34972__$1;
(statearr_34976_37118[(1)] = (22));

} else {
var statearr_34977_37119 = state_34972__$1;
(statearr_34977_37119[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (27))){
var inst_34837 = (state_34972[(9)]);
var inst_34913 = (state_34972[(10)]);
var inst_34920 = (state_34972[(11)]);
var inst_34915 = (state_34972[(12)]);
var inst_34920__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34913,inst_34915);
var inst_34921 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34920__$1,inst_34837,done);
var state_34972__$1 = (function (){var statearr_34978 = state_34972;
(statearr_34978[(11)] = inst_34920__$1);

return statearr_34978;
})();
if(cljs.core.truth_(inst_34921)){
var statearr_34982_37128 = state_34972__$1;
(statearr_34982_37128[(1)] = (30));

} else {
var statearr_34983_37129 = state_34972__$1;
(statearr_34983_37129[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (1))){
var state_34972__$1 = state_34972;
var statearr_34984_37130 = state_34972__$1;
(statearr_34984_37130[(2)] = null);

(statearr_34984_37130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (24))){
var inst_34871 = (state_34972[(7)]);
var inst_34890 = (state_34972[(2)]);
var inst_34891 = cljs.core.next(inst_34871);
var inst_34847 = inst_34891;
var inst_34848 = null;
var inst_34849 = (0);
var inst_34850 = (0);
var state_34972__$1 = (function (){var statearr_34988 = state_34972;
(statearr_34988[(13)] = inst_34848);

(statearr_34988[(14)] = inst_34849);

(statearr_34988[(15)] = inst_34850);

(statearr_34988[(16)] = inst_34890);

(statearr_34988[(17)] = inst_34847);

return statearr_34988;
})();
var statearr_34989_37139 = state_34972__$1;
(statearr_34989_37139[(2)] = null);

(statearr_34989_37139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (39))){
var state_34972__$1 = state_34972;
var statearr_34993_37140 = state_34972__$1;
(statearr_34993_37140[(2)] = null);

(statearr_34993_37140[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (4))){
var inst_34837 = (state_34972[(9)]);
var inst_34837__$1 = (state_34972[(2)]);
var inst_34838 = (inst_34837__$1 == null);
var state_34972__$1 = (function (){var statearr_34994 = state_34972;
(statearr_34994[(9)] = inst_34837__$1);

return statearr_34994;
})();
if(cljs.core.truth_(inst_34838)){
var statearr_34995_37143 = state_34972__$1;
(statearr_34995_37143[(1)] = (5));

} else {
var statearr_34996_37145 = state_34972__$1;
(statearr_34996_37145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (15))){
var inst_34848 = (state_34972[(13)]);
var inst_34849 = (state_34972[(14)]);
var inst_34850 = (state_34972[(15)]);
var inst_34847 = (state_34972[(17)]);
var inst_34867 = (state_34972[(2)]);
var inst_34868 = (inst_34850 + (1));
var tmp34990 = inst_34848;
var tmp34991 = inst_34849;
var tmp34992 = inst_34847;
var inst_34847__$1 = tmp34992;
var inst_34848__$1 = tmp34990;
var inst_34849__$1 = tmp34991;
var inst_34850__$1 = inst_34868;
var state_34972__$1 = (function (){var statearr_34997 = state_34972;
(statearr_34997[(13)] = inst_34848__$1);

(statearr_34997[(14)] = inst_34849__$1);

(statearr_34997[(15)] = inst_34850__$1);

(statearr_34997[(17)] = inst_34847__$1);

(statearr_34997[(18)] = inst_34867);

return statearr_34997;
})();
var statearr_34998_37149 = state_34972__$1;
(statearr_34998_37149[(2)] = null);

(statearr_34998_37149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (21))){
var inst_34894 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35002_37153 = state_34972__$1;
(statearr_35002_37153[(2)] = inst_34894);

(statearr_35002_37153[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (31))){
var inst_34920 = (state_34972[(11)]);
var inst_34924 = done(null);
var inst_34925 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34920);
var state_34972__$1 = (function (){var statearr_35003 = state_34972;
(statearr_35003[(19)] = inst_34924);

return statearr_35003;
})();
var statearr_35004_37155 = state_34972__$1;
(statearr_35004_37155[(2)] = inst_34925);

(statearr_35004_37155[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (32))){
var inst_34914 = (state_34972[(20)]);
var inst_34913 = (state_34972[(10)]);
var inst_34915 = (state_34972[(12)]);
var inst_34912 = (state_34972[(21)]);
var inst_34927 = (state_34972[(2)]);
var inst_34928 = (inst_34915 + (1));
var tmp34999 = inst_34914;
var tmp35000 = inst_34913;
var tmp35001 = inst_34912;
var inst_34912__$1 = tmp35001;
var inst_34913__$1 = tmp35000;
var inst_34914__$1 = tmp34999;
var inst_34915__$1 = inst_34928;
var state_34972__$1 = (function (){var statearr_35005 = state_34972;
(statearr_35005[(22)] = inst_34927);

(statearr_35005[(20)] = inst_34914__$1);

(statearr_35005[(10)] = inst_34913__$1);

(statearr_35005[(12)] = inst_34915__$1);

(statearr_35005[(21)] = inst_34912__$1);

return statearr_35005;
})();
var statearr_35006_37164 = state_34972__$1;
(statearr_35006_37164[(2)] = null);

(statearr_35006_37164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (40))){
var inst_34940 = (state_34972[(23)]);
var inst_34944 = done(null);
var inst_34945 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34940);
var state_34972__$1 = (function (){var statearr_35007 = state_34972;
(statearr_35007[(24)] = inst_34944);

return statearr_35007;
})();
var statearr_35008_37165 = state_34972__$1;
(statearr_35008_37165[(2)] = inst_34945);

(statearr_35008_37165[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (33))){
var inst_34931 = (state_34972[(25)]);
var inst_34933 = cljs.core.chunked_seq_QMARK_(inst_34931);
var state_34972__$1 = state_34972;
if(inst_34933){
var statearr_35009_37169 = state_34972__$1;
(statearr_35009_37169[(1)] = (36));

} else {
var statearr_35010_37170 = state_34972__$1;
(statearr_35010_37170[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (13))){
var inst_34861 = (state_34972[(26)]);
var inst_34864 = cljs.core.async.close_BANG_(inst_34861);
var state_34972__$1 = state_34972;
var statearr_35011_37172 = state_34972__$1;
(statearr_35011_37172[(2)] = inst_34864);

(statearr_35011_37172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (22))){
var inst_34884 = (state_34972[(8)]);
var inst_34887 = cljs.core.async.close_BANG_(inst_34884);
var state_34972__$1 = state_34972;
var statearr_35012_37178 = state_34972__$1;
(statearr_35012_37178[(2)] = inst_34887);

(statearr_35012_37178[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (36))){
var inst_34931 = (state_34972[(25)]);
var inst_34935 = cljs.core.chunk_first(inst_34931);
var inst_34936 = cljs.core.chunk_rest(inst_34931);
var inst_34937 = cljs.core.count(inst_34935);
var inst_34912 = inst_34936;
var inst_34913 = inst_34935;
var inst_34914 = inst_34937;
var inst_34915 = (0);
var state_34972__$1 = (function (){var statearr_35013 = state_34972;
(statearr_35013[(20)] = inst_34914);

(statearr_35013[(10)] = inst_34913);

(statearr_35013[(12)] = inst_34915);

(statearr_35013[(21)] = inst_34912);

return statearr_35013;
})();
var statearr_35014_37182 = state_34972__$1;
(statearr_35014_37182[(2)] = null);

(statearr_35014_37182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (41))){
var inst_34931 = (state_34972[(25)]);
var inst_34947 = (state_34972[(2)]);
var inst_34948 = cljs.core.next(inst_34931);
var inst_34912 = inst_34948;
var inst_34913 = null;
var inst_34914 = (0);
var inst_34915 = (0);
var state_34972__$1 = (function (){var statearr_35015 = state_34972;
(statearr_35015[(27)] = inst_34947);

(statearr_35015[(20)] = inst_34914);

(statearr_35015[(10)] = inst_34913);

(statearr_35015[(12)] = inst_34915);

(statearr_35015[(21)] = inst_34912);

return statearr_35015;
})();
var statearr_35016_37185 = state_34972__$1;
(statearr_35016_37185[(2)] = null);

(statearr_35016_37185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (43))){
var state_34972__$1 = state_34972;
var statearr_35017_37186 = state_34972__$1;
(statearr_35017_37186[(2)] = null);

(statearr_35017_37186[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (29))){
var inst_34956 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35018_37188 = state_34972__$1;
(statearr_35018_37188[(2)] = inst_34956);

(statearr_35018_37188[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (44))){
var inst_34965 = (state_34972[(2)]);
var state_34972__$1 = (function (){var statearr_35019 = state_34972;
(statearr_35019[(28)] = inst_34965);

return statearr_35019;
})();
var statearr_35020_37194 = state_34972__$1;
(statearr_35020_37194[(2)] = null);

(statearr_35020_37194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (6))){
var inst_34904 = (state_34972[(29)]);
var inst_34903 = cljs.core.deref(cs);
var inst_34904__$1 = cljs.core.keys(inst_34903);
var inst_34905 = cljs.core.count(inst_34904__$1);
var inst_34906 = cljs.core.reset_BANG_(dctr,inst_34905);
var inst_34911 = cljs.core.seq(inst_34904__$1);
var inst_34912 = inst_34911;
var inst_34913 = null;
var inst_34914 = (0);
var inst_34915 = (0);
var state_34972__$1 = (function (){var statearr_35021 = state_34972;
(statearr_35021[(20)] = inst_34914);

(statearr_35021[(10)] = inst_34913);

(statearr_35021[(30)] = inst_34906);

(statearr_35021[(12)] = inst_34915);

(statearr_35021[(21)] = inst_34912);

(statearr_35021[(29)] = inst_34904__$1);

return statearr_35021;
})();
var statearr_35022_37200 = state_34972__$1;
(statearr_35022_37200[(2)] = null);

(statearr_35022_37200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (28))){
var inst_34931 = (state_34972[(25)]);
var inst_34912 = (state_34972[(21)]);
var inst_34931__$1 = cljs.core.seq(inst_34912);
var state_34972__$1 = (function (){var statearr_35023 = state_34972;
(statearr_35023[(25)] = inst_34931__$1);

return statearr_35023;
})();
if(inst_34931__$1){
var statearr_35024_37201 = state_34972__$1;
(statearr_35024_37201[(1)] = (33));

} else {
var statearr_35025_37202 = state_34972__$1;
(statearr_35025_37202[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (25))){
var inst_34914 = (state_34972[(20)]);
var inst_34915 = (state_34972[(12)]);
var inst_34917 = (inst_34915 < inst_34914);
var inst_34918 = inst_34917;
var state_34972__$1 = state_34972;
if(cljs.core.truth_(inst_34918)){
var statearr_35026_37209 = state_34972__$1;
(statearr_35026_37209[(1)] = (27));

} else {
var statearr_35027_37210 = state_34972__$1;
(statearr_35027_37210[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (34))){
var state_34972__$1 = state_34972;
var statearr_35028_37211 = state_34972__$1;
(statearr_35028_37211[(2)] = null);

(statearr_35028_37211[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (17))){
var state_34972__$1 = state_34972;
var statearr_35029_37212 = state_34972__$1;
(statearr_35029_37212[(2)] = null);

(statearr_35029_37212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (3))){
var inst_34970 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34972__$1,inst_34970);
} else {
if((state_val_34973 === (12))){
var inst_34899 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35030_37217 = state_34972__$1;
(statearr_35030_37217[(2)] = inst_34899);

(statearr_35030_37217[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (2))){
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34972__$1,(4),ch);
} else {
if((state_val_34973 === (23))){
var state_34972__$1 = state_34972;
var statearr_35031_37219 = state_34972__$1;
(statearr_35031_37219[(2)] = null);

(statearr_35031_37219[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (35))){
var inst_34954 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35032_37223 = state_34972__$1;
(statearr_35032_37223[(2)] = inst_34954);

(statearr_35032_37223[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (19))){
var inst_34871 = (state_34972[(7)]);
var inst_34875 = cljs.core.chunk_first(inst_34871);
var inst_34876 = cljs.core.chunk_rest(inst_34871);
var inst_34877 = cljs.core.count(inst_34875);
var inst_34847 = inst_34876;
var inst_34848 = inst_34875;
var inst_34849 = inst_34877;
var inst_34850 = (0);
var state_34972__$1 = (function (){var statearr_35033 = state_34972;
(statearr_35033[(13)] = inst_34848);

(statearr_35033[(14)] = inst_34849);

(statearr_35033[(15)] = inst_34850);

(statearr_35033[(17)] = inst_34847);

return statearr_35033;
})();
var statearr_35034_37231 = state_34972__$1;
(statearr_35034_37231[(2)] = null);

(statearr_35034_37231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (11))){
var inst_34871 = (state_34972[(7)]);
var inst_34847 = (state_34972[(17)]);
var inst_34871__$1 = cljs.core.seq(inst_34847);
var state_34972__$1 = (function (){var statearr_35035 = state_34972;
(statearr_35035[(7)] = inst_34871__$1);

return statearr_35035;
})();
if(inst_34871__$1){
var statearr_35036_37235 = state_34972__$1;
(statearr_35036_37235[(1)] = (16));

} else {
var statearr_35037_37236 = state_34972__$1;
(statearr_35037_37236[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (9))){
var inst_34901 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35038_37242 = state_34972__$1;
(statearr_35038_37242[(2)] = inst_34901);

(statearr_35038_37242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (5))){
var inst_34844 = cljs.core.deref(cs);
var inst_34845 = cljs.core.seq(inst_34844);
var inst_34847 = inst_34845;
var inst_34848 = null;
var inst_34849 = (0);
var inst_34850 = (0);
var state_34972__$1 = (function (){var statearr_35039 = state_34972;
(statearr_35039[(13)] = inst_34848);

(statearr_35039[(14)] = inst_34849);

(statearr_35039[(15)] = inst_34850);

(statearr_35039[(17)] = inst_34847);

return statearr_35039;
})();
var statearr_35040_37247 = state_34972__$1;
(statearr_35040_37247[(2)] = null);

(statearr_35040_37247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (14))){
var state_34972__$1 = state_34972;
var statearr_35041_37248 = state_34972__$1;
(statearr_35041_37248[(2)] = null);

(statearr_35041_37248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (45))){
var inst_34962 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35044_37252 = state_34972__$1;
(statearr_35044_37252[(2)] = inst_34962);

(statearr_35044_37252[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (26))){
var inst_34904 = (state_34972[(29)]);
var inst_34958 = (state_34972[(2)]);
var inst_34959 = cljs.core.seq(inst_34904);
var state_34972__$1 = (function (){var statearr_35047 = state_34972;
(statearr_35047[(31)] = inst_34958);

return statearr_35047;
})();
if(inst_34959){
var statearr_35049_37260 = state_34972__$1;
(statearr_35049_37260[(1)] = (42));

} else {
var statearr_35051_37263 = state_34972__$1;
(statearr_35051_37263[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (16))){
var inst_34871 = (state_34972[(7)]);
var inst_34873 = cljs.core.chunked_seq_QMARK_(inst_34871);
var state_34972__$1 = state_34972;
if(inst_34873){
var statearr_35052_37265 = state_34972__$1;
(statearr_35052_37265[(1)] = (19));

} else {
var statearr_35053_37266 = state_34972__$1;
(statearr_35053_37266[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (38))){
var inst_34951 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35054_37267 = state_34972__$1;
(statearr_35054_37267[(2)] = inst_34951);

(statearr_35054_37267[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (30))){
var state_34972__$1 = state_34972;
var statearr_35055_37270 = state_34972__$1;
(statearr_35055_37270[(2)] = null);

(statearr_35055_37270[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (10))){
var inst_34848 = (state_34972[(13)]);
var inst_34850 = (state_34972[(15)]);
var inst_34860 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34848,inst_34850);
var inst_34861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34860,(0),null);
var inst_34862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34860,(1),null);
var state_34972__$1 = (function (){var statearr_35056 = state_34972;
(statearr_35056[(26)] = inst_34861);

return statearr_35056;
})();
if(cljs.core.truth_(inst_34862)){
var statearr_35057_37273 = state_34972__$1;
(statearr_35057_37273[(1)] = (13));

} else {
var statearr_35058_37275 = state_34972__$1;
(statearr_35058_37275[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (18))){
var inst_34897 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35061_37276 = state_34972__$1;
(statearr_35061_37276[(2)] = inst_34897);

(statearr_35061_37276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (42))){
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34972__$1,(45),dchan);
} else {
if((state_val_34973 === (37))){
var inst_34931 = (state_34972[(25)]);
var inst_34837 = (state_34972[(9)]);
var inst_34940 = (state_34972[(23)]);
var inst_34940__$1 = cljs.core.first(inst_34931);
var inst_34941 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34940__$1,inst_34837,done);
var state_34972__$1 = (function (){var statearr_35065 = state_34972;
(statearr_35065[(23)] = inst_34940__$1);

return statearr_35065;
})();
if(cljs.core.truth_(inst_34941)){
var statearr_35067_37282 = state_34972__$1;
(statearr_35067_37282[(1)] = (39));

} else {
var statearr_35068_37284 = state_34972__$1;
(statearr_35068_37284[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (8))){
var inst_34849 = (state_34972[(14)]);
var inst_34850 = (state_34972[(15)]);
var inst_34853 = (inst_34850 < inst_34849);
var inst_34854 = inst_34853;
var state_34972__$1 = state_34972;
if(cljs.core.truth_(inst_34854)){
var statearr_35069_37285 = state_34972__$1;
(statearr_35069_37285[(1)] = (10));

} else {
var statearr_35070_37287 = state_34972__$1;
(statearr_35070_37287[(1)] = (11));

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
var statearr_35071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35071[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35071[(1)] = (1));

return statearr_35071;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34972){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34972);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35072){if((e35072 instanceof Object)){
var ex__34210__auto__ = e35072;
var statearr_35073_37292 = state_34972;
(statearr_35073_37292[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37294 = state_34972;
state_34972 = G__37294;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34972){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35077 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35077[(6)] = c__34274__auto___37113);

return statearr_35077;
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
var G__35082 = arguments.length;
switch (G__35082) {
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
var len__4789__auto___37336 = arguments.length;
var i__4790__auto___37337 = (0);
while(true){
if((i__4790__auto___37337 < len__4789__auto___37336)){
args__4795__auto__.push((arguments[i__4790__auto___37337]));

var G__37338 = (i__4790__auto___37337 + (1));
i__4790__auto___37337 = G__37338;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35174){
var map__35176 = p__35174;
var map__35176__$1 = (((((!((map__35176 == null))))?(((((map__35176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35176):map__35176);
var opts = map__35176__$1;
var statearr_35183_37341 = state;
(statearr_35183_37341[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35192_37343 = state;
(statearr_35192_37343[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35199_37345 = state;
(statearr_35199_37345[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35155){
var G__35158 = cljs.core.first(seq35155);
var seq35155__$1 = cljs.core.next(seq35155);
var G__35159 = cljs.core.first(seq35155__$1);
var seq35155__$2 = cljs.core.next(seq35155__$1);
var G__35160 = cljs.core.first(seq35155__$2);
var seq35155__$3 = cljs.core.next(seq35155__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35158,G__35159,G__35160,seq35155__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35227 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35228){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35228 = meta35228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35229,meta35228__$1){
var self__ = this;
var _35229__$1 = this;
return (new cljs.core.async.t_cljs$core$async35227(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35228__$1));
}));

(cljs.core.async.t_cljs$core$async35227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35229){
var self__ = this;
var _35229__$1 = this;
return self__.meta35228;
}));

(cljs.core.async.t_cljs$core$async35227.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35227.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35227.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35227.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35227.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35227.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35227.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35227.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35228","meta35228",1817227981,null)], null);
}));

(cljs.core.async.t_cljs$core$async35227.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35227");

(cljs.core.async.t_cljs$core$async35227.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35227");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35227.
 */
cljs.core.async.__GT_t_cljs$core$async35227 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35227(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35228){
return (new cljs.core.async.t_cljs$core$async35227(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35228));
});

}

return (new cljs.core.async.t_cljs$core$async35227(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35405){
var state_val_35406 = (state_35405[(1)]);
if((state_val_35406 === (7))){
var inst_35301 = (state_35405[(2)]);
var state_35405__$1 = state_35405;
var statearr_35409_37393 = state_35405__$1;
(statearr_35409_37393[(2)] = inst_35301);

(statearr_35409_37393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (20))){
var inst_35313 = (state_35405[(7)]);
var state_35405__$1 = state_35405;
var statearr_35414_37399 = state_35405__$1;
(statearr_35414_37399[(2)] = inst_35313);

(statearr_35414_37399[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (27))){
var state_35405__$1 = state_35405;
var statearr_35418_37403 = state_35405__$1;
(statearr_35418_37403[(2)] = null);

(statearr_35418_37403[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (1))){
var inst_35284 = (state_35405[(8)]);
var inst_35284__$1 = calc_state();
var inst_35287 = (inst_35284__$1 == null);
var inst_35288 = cljs.core.not(inst_35287);
var state_35405__$1 = (function (){var statearr_35421 = state_35405;
(statearr_35421[(8)] = inst_35284__$1);

return statearr_35421;
})();
if(inst_35288){
var statearr_35424_37406 = state_35405__$1;
(statearr_35424_37406[(1)] = (2));

} else {
var statearr_35427_37407 = state_35405__$1;
(statearr_35427_37407[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (24))){
var inst_35343 = (state_35405[(9)]);
var inst_35375 = (state_35405[(10)]);
var inst_35356 = (state_35405[(11)]);
var inst_35375__$1 = (inst_35343.cljs$core$IFn$_invoke$arity$1 ? inst_35343.cljs$core$IFn$_invoke$arity$1(inst_35356) : inst_35343.call(null,inst_35356));
var state_35405__$1 = (function (){var statearr_35433 = state_35405;
(statearr_35433[(10)] = inst_35375__$1);

return statearr_35433;
})();
if(cljs.core.truth_(inst_35375__$1)){
var statearr_35436_37410 = state_35405__$1;
(statearr_35436_37410[(1)] = (29));

} else {
var statearr_35438_37412 = state_35405__$1;
(statearr_35438_37412[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (4))){
var inst_35304 = (state_35405[(2)]);
var state_35405__$1 = state_35405;
if(cljs.core.truth_(inst_35304)){
var statearr_35442_37414 = state_35405__$1;
(statearr_35442_37414[(1)] = (8));

} else {
var statearr_35444_37415 = state_35405__$1;
(statearr_35444_37415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (15))){
var inst_35336 = (state_35405[(2)]);
var state_35405__$1 = state_35405;
if(cljs.core.truth_(inst_35336)){
var statearr_35449_37421 = state_35405__$1;
(statearr_35449_37421[(1)] = (19));

} else {
var statearr_35452_37422 = state_35405__$1;
(statearr_35452_37422[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (21))){
var inst_35342 = (state_35405[(12)]);
var inst_35342__$1 = (state_35405[(2)]);
var inst_35343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35342__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35342__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35342__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35405__$1 = (function (){var statearr_35459 = state_35405;
(statearr_35459[(9)] = inst_35343);

(statearr_35459[(13)] = inst_35344);

(statearr_35459[(12)] = inst_35342__$1);

return statearr_35459;
})();
return cljs.core.async.ioc_alts_BANG_(state_35405__$1,(22),inst_35345);
} else {
if((state_val_35406 === (31))){
var inst_35387 = (state_35405[(2)]);
var state_35405__$1 = state_35405;
if(cljs.core.truth_(inst_35387)){
var statearr_35464_37431 = state_35405__$1;
(statearr_35464_37431[(1)] = (32));

} else {
var statearr_35468_37432 = state_35405__$1;
(statearr_35468_37432[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (32))){
var inst_35354 = (state_35405[(14)]);
var state_35405__$1 = state_35405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35405__$1,(35),out,inst_35354);
} else {
if((state_val_35406 === (33))){
var inst_35342 = (state_35405[(12)]);
var inst_35313 = inst_35342;
var state_35405__$1 = (function (){var statearr_35484 = state_35405;
(statearr_35484[(7)] = inst_35313);

return statearr_35484;
})();
var statearr_35485_37436 = state_35405__$1;
(statearr_35485_37436[(2)] = null);

(statearr_35485_37436[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (13))){
var inst_35313 = (state_35405[(7)]);
var inst_35324 = inst_35313.cljs$lang$protocol_mask$partition0$;
var inst_35325 = (inst_35324 & (64));
var inst_35326 = inst_35313.cljs$core$ISeq$;
var inst_35327 = (cljs.core.PROTOCOL_SENTINEL === inst_35326);
var inst_35328 = ((inst_35325) || (inst_35327));
var state_35405__$1 = state_35405;
if(cljs.core.truth_(inst_35328)){
var statearr_35493_37439 = state_35405__$1;
(statearr_35493_37439[(1)] = (16));

} else {
var statearr_35494_37440 = state_35405__$1;
(statearr_35494_37440[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (22))){
var inst_35354 = (state_35405[(14)]);
var inst_35356 = (state_35405[(11)]);
var inst_35353 = (state_35405[(2)]);
var inst_35354__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35353,(0),null);
var inst_35356__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35353,(1),null);
var inst_35360 = (inst_35354__$1 == null);
var inst_35362 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35356__$1,change);
var inst_35363 = ((inst_35360) || (inst_35362));
var state_35405__$1 = (function (){var statearr_35495 = state_35405;
(statearr_35495[(14)] = inst_35354__$1);

(statearr_35495[(11)] = inst_35356__$1);

return statearr_35495;
})();
if(cljs.core.truth_(inst_35363)){
var statearr_35496_37444 = state_35405__$1;
(statearr_35496_37444[(1)] = (23));

} else {
var statearr_35497_37447 = state_35405__$1;
(statearr_35497_37447[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (36))){
var inst_35342 = (state_35405[(12)]);
var inst_35313 = inst_35342;
var state_35405__$1 = (function (){var statearr_35498 = state_35405;
(statearr_35498[(7)] = inst_35313);

return statearr_35498;
})();
var statearr_35499_37453 = state_35405__$1;
(statearr_35499_37453[(2)] = null);

(statearr_35499_37453[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (29))){
var inst_35375 = (state_35405[(10)]);
var state_35405__$1 = state_35405;
var statearr_35500_37454 = state_35405__$1;
(statearr_35500_37454[(2)] = inst_35375);

(statearr_35500_37454[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (6))){
var state_35405__$1 = state_35405;
var statearr_35501_37456 = state_35405__$1;
(statearr_35501_37456[(2)] = false);

(statearr_35501_37456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (28))){
var inst_35371 = (state_35405[(2)]);
var inst_35372 = calc_state();
var inst_35313 = inst_35372;
var state_35405__$1 = (function (){var statearr_35504 = state_35405;
(statearr_35504[(7)] = inst_35313);

(statearr_35504[(15)] = inst_35371);

return statearr_35504;
})();
var statearr_35505_37458 = state_35405__$1;
(statearr_35505_37458[(2)] = null);

(statearr_35505_37458[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (25))){
var inst_35401 = (state_35405[(2)]);
var state_35405__$1 = state_35405;
var statearr_35506_37463 = state_35405__$1;
(statearr_35506_37463[(2)] = inst_35401);

(statearr_35506_37463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (34))){
var inst_35399 = (state_35405[(2)]);
var state_35405__$1 = state_35405;
var statearr_35507_37464 = state_35405__$1;
(statearr_35507_37464[(2)] = inst_35399);

(statearr_35507_37464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (17))){
var state_35405__$1 = state_35405;
var statearr_35508_37468 = state_35405__$1;
(statearr_35508_37468[(2)] = false);

(statearr_35508_37468[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (3))){
var state_35405__$1 = state_35405;
var statearr_35509_37469 = state_35405__$1;
(statearr_35509_37469[(2)] = false);

(statearr_35509_37469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (12))){
var inst_35403 = (state_35405[(2)]);
var state_35405__$1 = state_35405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35405__$1,inst_35403);
} else {
if((state_val_35406 === (2))){
var inst_35284 = (state_35405[(8)]);
var inst_35293 = inst_35284.cljs$lang$protocol_mask$partition0$;
var inst_35294 = (inst_35293 & (64));
var inst_35295 = inst_35284.cljs$core$ISeq$;
var inst_35296 = (cljs.core.PROTOCOL_SENTINEL === inst_35295);
var inst_35297 = ((inst_35294) || (inst_35296));
var state_35405__$1 = state_35405;
if(cljs.core.truth_(inst_35297)){
var statearr_35510_37471 = state_35405__$1;
(statearr_35510_37471[(1)] = (5));

} else {
var statearr_35513_37475 = state_35405__$1;
(statearr_35513_37475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (23))){
var inst_35354 = (state_35405[(14)]);
var inst_35365 = (inst_35354 == null);
var state_35405__$1 = state_35405;
if(cljs.core.truth_(inst_35365)){
var statearr_35519_37477 = state_35405__$1;
(statearr_35519_37477[(1)] = (26));

} else {
var statearr_35520_37478 = state_35405__$1;
(statearr_35520_37478[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (35))){
var inst_35390 = (state_35405[(2)]);
var state_35405__$1 = state_35405;
if(cljs.core.truth_(inst_35390)){
var statearr_35521_37479 = state_35405__$1;
(statearr_35521_37479[(1)] = (36));

} else {
var statearr_35524_37480 = state_35405__$1;
(statearr_35524_37480[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (19))){
var inst_35313 = (state_35405[(7)]);
var inst_35339 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35313);
var state_35405__$1 = state_35405;
var statearr_35525_37484 = state_35405__$1;
(statearr_35525_37484[(2)] = inst_35339);

(statearr_35525_37484[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (11))){
var inst_35313 = (state_35405[(7)]);
var inst_35318 = (inst_35313 == null);
var inst_35319 = cljs.core.not(inst_35318);
var state_35405__$1 = state_35405;
if(inst_35319){
var statearr_35528_37487 = state_35405__$1;
(statearr_35528_37487[(1)] = (13));

} else {
var statearr_35529_37488 = state_35405__$1;
(statearr_35529_37488[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (9))){
var inst_35284 = (state_35405[(8)]);
var state_35405__$1 = state_35405;
var statearr_35530_37490 = state_35405__$1;
(statearr_35530_37490[(2)] = inst_35284);

(statearr_35530_37490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (5))){
var state_35405__$1 = state_35405;
var statearr_35533_37494 = state_35405__$1;
(statearr_35533_37494[(2)] = true);

(statearr_35533_37494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (14))){
var state_35405__$1 = state_35405;
var statearr_35537_37495 = state_35405__$1;
(statearr_35537_37495[(2)] = false);

(statearr_35537_37495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (26))){
var inst_35356 = (state_35405[(11)]);
var inst_35368 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35356);
var state_35405__$1 = state_35405;
var statearr_35543_37497 = state_35405__$1;
(statearr_35543_37497[(2)] = inst_35368);

(statearr_35543_37497[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (16))){
var state_35405__$1 = state_35405;
var statearr_35548_37500 = state_35405__$1;
(statearr_35548_37500[(2)] = true);

(statearr_35548_37500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (38))){
var inst_35395 = (state_35405[(2)]);
var state_35405__$1 = state_35405;
var statearr_35552_37505 = state_35405__$1;
(statearr_35552_37505[(2)] = inst_35395);

(statearr_35552_37505[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (30))){
var inst_35343 = (state_35405[(9)]);
var inst_35344 = (state_35405[(13)]);
var inst_35356 = (state_35405[(11)]);
var inst_35381 = cljs.core.empty_QMARK_(inst_35343);
var inst_35382 = (inst_35344.cljs$core$IFn$_invoke$arity$1 ? inst_35344.cljs$core$IFn$_invoke$arity$1(inst_35356) : inst_35344.call(null,inst_35356));
var inst_35384 = cljs.core.not(inst_35382);
var inst_35385 = ((inst_35381) && (inst_35384));
var state_35405__$1 = state_35405;
var statearr_35553_37513 = state_35405__$1;
(statearr_35553_37513[(2)] = inst_35385);

(statearr_35553_37513[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (10))){
var inst_35284 = (state_35405[(8)]);
var inst_35309 = (state_35405[(2)]);
var inst_35310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35309,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35309,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35309,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35313 = inst_35284;
var state_35405__$1 = (function (){var statearr_35556 = state_35405;
(statearr_35556[(7)] = inst_35313);

(statearr_35556[(16)] = inst_35311);

(statearr_35556[(17)] = inst_35312);

(statearr_35556[(18)] = inst_35310);

return statearr_35556;
})();
var statearr_35559_37522 = state_35405__$1;
(statearr_35559_37522[(2)] = null);

(statearr_35559_37522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (18))){
var inst_35332 = (state_35405[(2)]);
var state_35405__$1 = state_35405;
var statearr_35563_37528 = state_35405__$1;
(statearr_35563_37528[(2)] = inst_35332);

(statearr_35563_37528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (37))){
var state_35405__$1 = state_35405;
var statearr_35566_37530 = state_35405__$1;
(statearr_35566_37530[(2)] = null);

(statearr_35566_37530[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35406 === (8))){
var inst_35284 = (state_35405[(8)]);
var inst_35306 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35284);
var state_35405__$1 = state_35405;
var statearr_35569_37532 = state_35405__$1;
(statearr_35569_37532[(2)] = inst_35306);

(statearr_35569_37532[(1)] = (10));


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
var statearr_35573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35573[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35573[(1)] = (1));

return statearr_35573;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35405){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35405);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35576){if((e35576 instanceof Object)){
var ex__34210__auto__ = e35576;
var statearr_35579_37544 = state_35405;
(statearr_35579_37544[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35576;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37547 = state_35405;
state_35405 = G__37547;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35405){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35587 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35587[(6)] = c__34274__auto___37388);

return statearr_35587;
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
var G__35656 = arguments.length;
switch (G__35656) {
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
var G__35700 = arguments.length;
switch (G__35700) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35693_SHARP_){
if(cljs.core.truth_((p1__35693_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35693_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35693_SHARP_.call(null,topic)))){
return p1__35693_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35693_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35726 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35727){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35727 = meta35727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35728,meta35727__$1){
var self__ = this;
var _35728__$1 = this;
return (new cljs.core.async.t_cljs$core$async35726(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35727__$1));
}));

(cljs.core.async.t_cljs$core$async35726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35728){
var self__ = this;
var _35728__$1 = this;
return self__.meta35727;
}));

(cljs.core.async.t_cljs$core$async35726.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35726.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35726.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35726.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35726.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35726.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35727","meta35727",506118142,null)], null);
}));

(cljs.core.async.t_cljs$core$async35726.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35726");

(cljs.core.async.t_cljs$core$async35726.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35726");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35726.
 */
cljs.core.async.__GT_t_cljs$core$async35726 = (function cljs$core$async$__GT_t_cljs$core$async35726(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35727){
return (new cljs.core.async.t_cljs$core$async35726(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35727));
});

}

return (new cljs.core.async.t_cljs$core$async35726(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35828){
var state_val_35829 = (state_35828[(1)]);
if((state_val_35829 === (7))){
var inst_35820 = (state_35828[(2)]);
var state_35828__$1 = state_35828;
var statearr_35834_37634 = state_35828__$1;
(statearr_35834_37634[(2)] = inst_35820);

(statearr_35834_37634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (20))){
var state_35828__$1 = state_35828;
var statearr_35836_37636 = state_35828__$1;
(statearr_35836_37636[(2)] = null);

(statearr_35836_37636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (1))){
var state_35828__$1 = state_35828;
var statearr_35838_37638 = state_35828__$1;
(statearr_35838_37638[(2)] = null);

(statearr_35838_37638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (24))){
var inst_35803 = (state_35828[(7)]);
var inst_35812 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35803);
var state_35828__$1 = state_35828;
var statearr_35839_37639 = state_35828__$1;
(statearr_35839_37639[(2)] = inst_35812);

(statearr_35839_37639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (4))){
var inst_35747 = (state_35828[(8)]);
var inst_35747__$1 = (state_35828[(2)]);
var inst_35748 = (inst_35747__$1 == null);
var state_35828__$1 = (function (){var statearr_35841 = state_35828;
(statearr_35841[(8)] = inst_35747__$1);

return statearr_35841;
})();
if(cljs.core.truth_(inst_35748)){
var statearr_35842_37651 = state_35828__$1;
(statearr_35842_37651[(1)] = (5));

} else {
var statearr_35843_37652 = state_35828__$1;
(statearr_35843_37652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (15))){
var inst_35797 = (state_35828[(2)]);
var state_35828__$1 = state_35828;
var statearr_35845_37654 = state_35828__$1;
(statearr_35845_37654[(2)] = inst_35797);

(statearr_35845_37654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (21))){
var inst_35817 = (state_35828[(2)]);
var state_35828__$1 = (function (){var statearr_35846 = state_35828;
(statearr_35846[(9)] = inst_35817);

return statearr_35846;
})();
var statearr_35847_37657 = state_35828__$1;
(statearr_35847_37657[(2)] = null);

(statearr_35847_37657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (13))){
var inst_35776 = (state_35828[(10)]);
var inst_35779 = cljs.core.chunked_seq_QMARK_(inst_35776);
var state_35828__$1 = state_35828;
if(inst_35779){
var statearr_35849_37665 = state_35828__$1;
(statearr_35849_37665[(1)] = (16));

} else {
var statearr_35850_37666 = state_35828__$1;
(statearr_35850_37666[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (22))){
var inst_35809 = (state_35828[(2)]);
var state_35828__$1 = state_35828;
if(cljs.core.truth_(inst_35809)){
var statearr_35852_37668 = state_35828__$1;
(statearr_35852_37668[(1)] = (23));

} else {
var statearr_35853_37669 = state_35828__$1;
(statearr_35853_37669[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (6))){
var inst_35803 = (state_35828[(7)]);
var inst_35805 = (state_35828[(11)]);
var inst_35747 = (state_35828[(8)]);
var inst_35803__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35747) : topic_fn.call(null,inst_35747));
var inst_35804 = cljs.core.deref(mults);
var inst_35805__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35804,inst_35803__$1);
var state_35828__$1 = (function (){var statearr_35854 = state_35828;
(statearr_35854[(7)] = inst_35803__$1);

(statearr_35854[(11)] = inst_35805__$1);

return statearr_35854;
})();
if(cljs.core.truth_(inst_35805__$1)){
var statearr_35856_37682 = state_35828__$1;
(statearr_35856_37682[(1)] = (19));

} else {
var statearr_35857_37684 = state_35828__$1;
(statearr_35857_37684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (25))){
var inst_35814 = (state_35828[(2)]);
var state_35828__$1 = state_35828;
var statearr_35863_37689 = state_35828__$1;
(statearr_35863_37689[(2)] = inst_35814);

(statearr_35863_37689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (17))){
var inst_35776 = (state_35828[(10)]);
var inst_35787 = cljs.core.first(inst_35776);
var inst_35789 = cljs.core.async.muxch_STAR_(inst_35787);
var inst_35790 = cljs.core.async.close_BANG_(inst_35789);
var inst_35791 = cljs.core.next(inst_35776);
var inst_35757 = inst_35791;
var inst_35758 = null;
var inst_35759 = (0);
var inst_35760 = (0);
var state_35828__$1 = (function (){var statearr_35866 = state_35828;
(statearr_35866[(12)] = inst_35760);

(statearr_35866[(13)] = inst_35759);

(statearr_35866[(14)] = inst_35790);

(statearr_35866[(15)] = inst_35757);

(statearr_35866[(16)] = inst_35758);

return statearr_35866;
})();
var statearr_35868_37724 = state_35828__$1;
(statearr_35868_37724[(2)] = null);

(statearr_35868_37724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (3))){
var inst_35822 = (state_35828[(2)]);
var state_35828__$1 = state_35828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35828__$1,inst_35822);
} else {
if((state_val_35829 === (12))){
var inst_35799 = (state_35828[(2)]);
var state_35828__$1 = state_35828;
var statearr_35871_37729 = state_35828__$1;
(statearr_35871_37729[(2)] = inst_35799);

(statearr_35871_37729[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (2))){
var state_35828__$1 = state_35828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35828__$1,(4),ch);
} else {
if((state_val_35829 === (23))){
var state_35828__$1 = state_35828;
var statearr_35879_37730 = state_35828__$1;
(statearr_35879_37730[(2)] = null);

(statearr_35879_37730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (19))){
var inst_35805 = (state_35828[(11)]);
var inst_35747 = (state_35828[(8)]);
var inst_35807 = cljs.core.async.muxch_STAR_(inst_35805);
var state_35828__$1 = state_35828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35828__$1,(22),inst_35807,inst_35747);
} else {
if((state_val_35829 === (11))){
var inst_35776 = (state_35828[(10)]);
var inst_35757 = (state_35828[(15)]);
var inst_35776__$1 = cljs.core.seq(inst_35757);
var state_35828__$1 = (function (){var statearr_35891 = state_35828;
(statearr_35891[(10)] = inst_35776__$1);

return statearr_35891;
})();
if(inst_35776__$1){
var statearr_35892_37733 = state_35828__$1;
(statearr_35892_37733[(1)] = (13));

} else {
var statearr_35893_37734 = state_35828__$1;
(statearr_35893_37734[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (9))){
var inst_35801 = (state_35828[(2)]);
var state_35828__$1 = state_35828;
var statearr_35894_37736 = state_35828__$1;
(statearr_35894_37736[(2)] = inst_35801);

(statearr_35894_37736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (5))){
var inst_35754 = cljs.core.deref(mults);
var inst_35755 = cljs.core.vals(inst_35754);
var inst_35756 = cljs.core.seq(inst_35755);
var inst_35757 = inst_35756;
var inst_35758 = null;
var inst_35759 = (0);
var inst_35760 = (0);
var state_35828__$1 = (function (){var statearr_35897 = state_35828;
(statearr_35897[(12)] = inst_35760);

(statearr_35897[(13)] = inst_35759);

(statearr_35897[(15)] = inst_35757);

(statearr_35897[(16)] = inst_35758);

return statearr_35897;
})();
var statearr_35900_37738 = state_35828__$1;
(statearr_35900_37738[(2)] = null);

(statearr_35900_37738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (14))){
var state_35828__$1 = state_35828;
var statearr_35904_37743 = state_35828__$1;
(statearr_35904_37743[(2)] = null);

(statearr_35904_37743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (16))){
var inst_35776 = (state_35828[(10)]);
var inst_35781 = cljs.core.chunk_first(inst_35776);
var inst_35782 = cljs.core.chunk_rest(inst_35776);
var inst_35784 = cljs.core.count(inst_35781);
var inst_35757 = inst_35782;
var inst_35758 = inst_35781;
var inst_35759 = inst_35784;
var inst_35760 = (0);
var state_35828__$1 = (function (){var statearr_35906 = state_35828;
(statearr_35906[(12)] = inst_35760);

(statearr_35906[(13)] = inst_35759);

(statearr_35906[(15)] = inst_35757);

(statearr_35906[(16)] = inst_35758);

return statearr_35906;
})();
var statearr_35907_37747 = state_35828__$1;
(statearr_35907_37747[(2)] = null);

(statearr_35907_37747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (10))){
var inst_35760 = (state_35828[(12)]);
var inst_35759 = (state_35828[(13)]);
var inst_35757 = (state_35828[(15)]);
var inst_35758 = (state_35828[(16)]);
var inst_35769 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35758,inst_35760);
var inst_35770 = cljs.core.async.muxch_STAR_(inst_35769);
var inst_35771 = cljs.core.async.close_BANG_(inst_35770);
var inst_35772 = (inst_35760 + (1));
var tmp35901 = inst_35759;
var tmp35902 = inst_35757;
var tmp35903 = inst_35758;
var inst_35757__$1 = tmp35902;
var inst_35758__$1 = tmp35903;
var inst_35759__$1 = tmp35901;
var inst_35760__$1 = inst_35772;
var state_35828__$1 = (function (){var statearr_35911 = state_35828;
(statearr_35911[(12)] = inst_35760__$1);

(statearr_35911[(17)] = inst_35771);

(statearr_35911[(13)] = inst_35759__$1);

(statearr_35911[(15)] = inst_35757__$1);

(statearr_35911[(16)] = inst_35758__$1);

return statearr_35911;
})();
var statearr_35912_37750 = state_35828__$1;
(statearr_35912_37750[(2)] = null);

(statearr_35912_37750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (18))){
var inst_35794 = (state_35828[(2)]);
var state_35828__$1 = state_35828;
var statearr_35913_37751 = state_35828__$1;
(statearr_35913_37751[(2)] = inst_35794);

(statearr_35913_37751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35829 === (8))){
var inst_35760 = (state_35828[(12)]);
var inst_35759 = (state_35828[(13)]);
var inst_35765 = (inst_35760 < inst_35759);
var inst_35766 = inst_35765;
var state_35828__$1 = state_35828;
if(cljs.core.truth_(inst_35766)){
var statearr_35916_37753 = state_35828__$1;
(statearr_35916_37753[(1)] = (10));

} else {
var statearr_35918_37754 = state_35828__$1;
(statearr_35918_37754[(1)] = (11));

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
var statearr_35920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35920[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35920[(1)] = (1));

return statearr_35920;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35828){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35828);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35921){if((e35921 instanceof Object)){
var ex__34210__auto__ = e35921;
var statearr_35923_37764 = state_35828;
(statearr_35923_37764[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35921;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37768 = state_35828;
state_35828 = G__37768;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35924 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35924[(6)] = c__34274__auto___37626);

return statearr_35924;
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
var G__35931 = arguments.length;
switch (G__35931) {
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
var G__35944 = arguments.length;
switch (G__35944) {
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
var G__35955 = arguments.length;
switch (G__35955) {
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
var c__34274__auto___37803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36013){
var state_val_36014 = (state_36013[(1)]);
if((state_val_36014 === (7))){
var state_36013__$1 = state_36013;
var statearr_36021_37805 = state_36013__$1;
(statearr_36021_37805[(2)] = null);

(statearr_36021_37805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (1))){
var state_36013__$1 = state_36013;
var statearr_36023_37806 = state_36013__$1;
(statearr_36023_37806[(2)] = null);

(statearr_36023_37806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (4))){
var inst_35967 = (state_36013[(7)]);
var inst_35969 = (inst_35967 < cnt);
var state_36013__$1 = state_36013;
if(cljs.core.truth_(inst_35969)){
var statearr_36024_37815 = state_36013__$1;
(statearr_36024_37815[(1)] = (6));

} else {
var statearr_36025_37817 = state_36013__$1;
(statearr_36025_37817[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (15))){
var inst_36006 = (state_36013[(2)]);
var state_36013__$1 = state_36013;
var statearr_36029_37819 = state_36013__$1;
(statearr_36029_37819[(2)] = inst_36006);

(statearr_36029_37819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (13))){
var inst_35999 = cljs.core.async.close_BANG_(out);
var state_36013__$1 = state_36013;
var statearr_36032_37821 = state_36013__$1;
(statearr_36032_37821[(2)] = inst_35999);

(statearr_36032_37821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (6))){
var state_36013__$1 = state_36013;
var statearr_36035_37822 = state_36013__$1;
(statearr_36035_37822[(2)] = null);

(statearr_36035_37822[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (3))){
var inst_36008 = (state_36013[(2)]);
var state_36013__$1 = state_36013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36013__$1,inst_36008);
} else {
if((state_val_36014 === (12))){
var inst_35996 = (state_36013[(8)]);
var inst_35996__$1 = (state_36013[(2)]);
var inst_35997 = cljs.core.some(cljs.core.nil_QMARK_,inst_35996__$1);
var state_36013__$1 = (function (){var statearr_36043 = state_36013;
(statearr_36043[(8)] = inst_35996__$1);

return statearr_36043;
})();
if(cljs.core.truth_(inst_35997)){
var statearr_36044_37832 = state_36013__$1;
(statearr_36044_37832[(1)] = (13));

} else {
var statearr_36045_37833 = state_36013__$1;
(statearr_36045_37833[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (2))){
var inst_35966 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35967 = (0);
var state_36013__$1 = (function (){var statearr_36048 = state_36013;
(statearr_36048[(7)] = inst_35967);

(statearr_36048[(9)] = inst_35966);

return statearr_36048;
})();
var statearr_36050_37835 = state_36013__$1;
(statearr_36050_37835[(2)] = null);

(statearr_36050_37835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (11))){
var inst_35967 = (state_36013[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36013,(10),Object,null,(9));
var inst_35979 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35967) : chs__$1.call(null,inst_35967));
var inst_35980 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35967) : done.call(null,inst_35967));
var inst_35981 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35979,inst_35980);
var state_36013__$1 = state_36013;
var statearr_36053_37844 = state_36013__$1;
(statearr_36053_37844[(2)] = inst_35981);


cljs.core.async.impl.ioc_helpers.process_exception(state_36013__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (9))){
var inst_35967 = (state_36013[(7)]);
var inst_35983 = (state_36013[(2)]);
var inst_35985 = (inst_35967 + (1));
var inst_35967__$1 = inst_35985;
var state_36013__$1 = (function (){var statearr_36056 = state_36013;
(statearr_36056[(7)] = inst_35967__$1);

(statearr_36056[(10)] = inst_35983);

return statearr_36056;
})();
var statearr_36057_37847 = state_36013__$1;
(statearr_36057_37847[(2)] = null);

(statearr_36057_37847[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (5))){
var inst_35993 = (state_36013[(2)]);
var state_36013__$1 = (function (){var statearr_36059 = state_36013;
(statearr_36059[(11)] = inst_35993);

return statearr_36059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36013__$1,(12),dchan);
} else {
if((state_val_36014 === (14))){
var inst_35996 = (state_36013[(8)]);
var inst_36001 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35996);
var state_36013__$1 = state_36013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36013__$1,(16),out,inst_36001);
} else {
if((state_val_36014 === (16))){
var inst_36003 = (state_36013[(2)]);
var state_36013__$1 = (function (){var statearr_36065 = state_36013;
(statearr_36065[(12)] = inst_36003);

return statearr_36065;
})();
var statearr_36066_37856 = state_36013__$1;
(statearr_36066_37856[(2)] = null);

(statearr_36066_37856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (10))){
var inst_35973 = (state_36013[(2)]);
var inst_35974 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36013__$1 = (function (){var statearr_36068 = state_36013;
(statearr_36068[(13)] = inst_35973);

return statearr_36068;
})();
var statearr_36070_37858 = state_36013__$1;
(statearr_36070_37858[(2)] = inst_35974);


cljs.core.async.impl.ioc_helpers.process_exception(state_36013__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (8))){
var inst_35991 = (state_36013[(2)]);
var state_36013__$1 = state_36013;
var statearr_36072_37862 = state_36013__$1;
(statearr_36072_37862[(2)] = inst_35991);

(statearr_36072_37862[(1)] = (5));


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
var statearr_36073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36073[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36073[(1)] = (1));

return statearr_36073;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36013){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36013);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36074){if((e36074 instanceof Object)){
var ex__34210__auto__ = e36074;
var statearr_36075_37868 = state_36013;
(statearr_36075_37868[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36074;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37872 = state_36013;
state_36013 = G__37872;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36078 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36078[(6)] = c__34274__auto___37803);

return statearr_36078;
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
var G__36106 = arguments.length;
switch (G__36106) {
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
var c__34274__auto___37879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36143){
var state_val_36144 = (state_36143[(1)]);
if((state_val_36144 === (7))){
var inst_36122 = (state_36143[(7)]);
var inst_36123 = (state_36143[(8)]);
var inst_36122__$1 = (state_36143[(2)]);
var inst_36123__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36122__$1,(0),null);
var inst_36124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36122__$1,(1),null);
var inst_36125 = (inst_36123__$1 == null);
var state_36143__$1 = (function (){var statearr_36151 = state_36143;
(statearr_36151[(7)] = inst_36122__$1);

(statearr_36151[(9)] = inst_36124);

(statearr_36151[(8)] = inst_36123__$1);

return statearr_36151;
})();
if(cljs.core.truth_(inst_36125)){
var statearr_36152_37887 = state_36143__$1;
(statearr_36152_37887[(1)] = (8));

} else {
var statearr_36153_37889 = state_36143__$1;
(statearr_36153_37889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (1))){
var inst_36112 = cljs.core.vec(chs);
var inst_36113 = inst_36112;
var state_36143__$1 = (function (){var statearr_36154 = state_36143;
(statearr_36154[(10)] = inst_36113);

return statearr_36154;
})();
var statearr_36156_37893 = state_36143__$1;
(statearr_36156_37893[(2)] = null);

(statearr_36156_37893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (4))){
var inst_36113 = (state_36143[(10)]);
var state_36143__$1 = state_36143;
return cljs.core.async.ioc_alts_BANG_(state_36143__$1,(7),inst_36113);
} else {
if((state_val_36144 === (6))){
var inst_36139 = (state_36143[(2)]);
var state_36143__$1 = state_36143;
var statearr_36160_37898 = state_36143__$1;
(statearr_36160_37898[(2)] = inst_36139);

(statearr_36160_37898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (3))){
var inst_36141 = (state_36143[(2)]);
var state_36143__$1 = state_36143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36143__$1,inst_36141);
} else {
if((state_val_36144 === (2))){
var inst_36113 = (state_36143[(10)]);
var inst_36115 = cljs.core.count(inst_36113);
var inst_36116 = (inst_36115 > (0));
var state_36143__$1 = state_36143;
if(cljs.core.truth_(inst_36116)){
var statearr_36162_37903 = state_36143__$1;
(statearr_36162_37903[(1)] = (4));

} else {
var statearr_36163_37904 = state_36143__$1;
(statearr_36163_37904[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (11))){
var inst_36113 = (state_36143[(10)]);
var inst_36132 = (state_36143[(2)]);
var tmp36161 = inst_36113;
var inst_36113__$1 = tmp36161;
var state_36143__$1 = (function (){var statearr_36164 = state_36143;
(statearr_36164[(10)] = inst_36113__$1);

(statearr_36164[(11)] = inst_36132);

return statearr_36164;
})();
var statearr_36165_37909 = state_36143__$1;
(statearr_36165_37909[(2)] = null);

(statearr_36165_37909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (9))){
var inst_36123 = (state_36143[(8)]);
var state_36143__$1 = state_36143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36143__$1,(11),out,inst_36123);
} else {
if((state_val_36144 === (5))){
var inst_36137 = cljs.core.async.close_BANG_(out);
var state_36143__$1 = state_36143;
var statearr_36166_37914 = state_36143__$1;
(statearr_36166_37914[(2)] = inst_36137);

(statearr_36166_37914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (10))){
var inst_36135 = (state_36143[(2)]);
var state_36143__$1 = state_36143;
var statearr_36167_37918 = state_36143__$1;
(statearr_36167_37918[(2)] = inst_36135);

(statearr_36167_37918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36144 === (8))){
var inst_36122 = (state_36143[(7)]);
var inst_36113 = (state_36143[(10)]);
var inst_36124 = (state_36143[(9)]);
var inst_36123 = (state_36143[(8)]);
var inst_36127 = (function (){var cs = inst_36113;
var vec__36118 = inst_36122;
var v = inst_36123;
var c = inst_36124;
return (function (p1__36080_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36080_SHARP_);
});
})();
var inst_36128 = cljs.core.filterv(inst_36127,inst_36113);
var inst_36113__$1 = inst_36128;
var state_36143__$1 = (function (){var statearr_36168 = state_36143;
(statearr_36168[(10)] = inst_36113__$1);

return statearr_36168;
})();
var statearr_36169_37924 = state_36143__$1;
(statearr_36169_37924[(2)] = null);

(statearr_36169_37924[(1)] = (2));


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
var statearr_36170 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36170[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36170[(1)] = (1));

return statearr_36170;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36143){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36143);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36171){if((e36171 instanceof Object)){
var ex__34210__auto__ = e36171;
var statearr_36173_37926 = state_36143;
(statearr_36173_37926[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36171;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37928 = state_36143;
state_36143 = G__37928;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36174 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36174[(6)] = c__34274__auto___37879);

return statearr_36174;
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
var G__36181 = arguments.length;
switch (G__36181) {
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
var c__34274__auto___37939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36209){
var state_val_36210 = (state_36209[(1)]);
if((state_val_36210 === (7))){
var inst_36191 = (state_36209[(7)]);
var inst_36191__$1 = (state_36209[(2)]);
var inst_36192 = (inst_36191__$1 == null);
var inst_36193 = cljs.core.not(inst_36192);
var state_36209__$1 = (function (){var statearr_36212 = state_36209;
(statearr_36212[(7)] = inst_36191__$1);

return statearr_36212;
})();
if(inst_36193){
var statearr_36214_37945 = state_36209__$1;
(statearr_36214_37945[(1)] = (8));

} else {
var statearr_36216_37946 = state_36209__$1;
(statearr_36216_37946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (1))){
var inst_36186 = (0);
var state_36209__$1 = (function (){var statearr_36219 = state_36209;
(statearr_36219[(8)] = inst_36186);

return statearr_36219;
})();
var statearr_36220_37947 = state_36209__$1;
(statearr_36220_37947[(2)] = null);

(statearr_36220_37947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (4))){
var state_36209__$1 = state_36209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36209__$1,(7),ch);
} else {
if((state_val_36210 === (6))){
var inst_36204 = (state_36209[(2)]);
var state_36209__$1 = state_36209;
var statearr_36224_37951 = state_36209__$1;
(statearr_36224_37951[(2)] = inst_36204);

(statearr_36224_37951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (3))){
var inst_36206 = (state_36209[(2)]);
var inst_36207 = cljs.core.async.close_BANG_(out);
var state_36209__$1 = (function (){var statearr_36225 = state_36209;
(statearr_36225[(9)] = inst_36206);

return statearr_36225;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36209__$1,inst_36207);
} else {
if((state_val_36210 === (2))){
var inst_36186 = (state_36209[(8)]);
var inst_36188 = (inst_36186 < n);
var state_36209__$1 = state_36209;
if(cljs.core.truth_(inst_36188)){
var statearr_36227_37955 = state_36209__$1;
(statearr_36227_37955[(1)] = (4));

} else {
var statearr_36228_37959 = state_36209__$1;
(statearr_36228_37959[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (11))){
var inst_36186 = (state_36209[(8)]);
var inst_36196 = (state_36209[(2)]);
var inst_36197 = (inst_36186 + (1));
var inst_36186__$1 = inst_36197;
var state_36209__$1 = (function (){var statearr_36233 = state_36209;
(statearr_36233[(10)] = inst_36196);

(statearr_36233[(8)] = inst_36186__$1);

return statearr_36233;
})();
var statearr_36234_37965 = state_36209__$1;
(statearr_36234_37965[(2)] = null);

(statearr_36234_37965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (9))){
var state_36209__$1 = state_36209;
var statearr_36235_37970 = state_36209__$1;
(statearr_36235_37970[(2)] = null);

(statearr_36235_37970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (5))){
var state_36209__$1 = state_36209;
var statearr_36236_37972 = state_36209__$1;
(statearr_36236_37972[(2)] = null);

(statearr_36236_37972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (10))){
var inst_36201 = (state_36209[(2)]);
var state_36209__$1 = state_36209;
var statearr_36237_37975 = state_36209__$1;
(statearr_36237_37975[(2)] = inst_36201);

(statearr_36237_37975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (8))){
var inst_36191 = (state_36209[(7)]);
var state_36209__$1 = state_36209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36209__$1,(11),out,inst_36191);
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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36209){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36209);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36239){if((e36239 instanceof Object)){
var ex__34210__auto__ = e36239;
var statearr_36240_37981 = state_36209;
(statearr_36240_37981[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37984 = state_36209;
state_36209 = G__37984;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36241 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36241[(6)] = c__34274__auto___37939);

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
var G__36261 = (((p1__36242_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36242_SHARP_) : self__.f.call(null,p1__36242_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36261) : f1.call(null,G__36261));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36270 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36270 = (function (f,ch,meta36271){
this.f = f;
this.ch = ch;
this.meta36271 = meta36271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36272,meta36271__$1){
var self__ = this;
var _36272__$1 = this;
return (new cljs.core.async.t_cljs$core$async36270(self__.f,self__.ch,meta36271__$1));
}));

(cljs.core.async.t_cljs$core$async36270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36272){
var self__ = this;
var _36272__$1 = this;
return self__.meta36271;
}));

(cljs.core.async.t_cljs$core$async36270.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36270.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36270.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36270.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36270.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36270.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36271","meta36271",-1278629679,null)], null);
}));

(cljs.core.async.t_cljs$core$async36270.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36270");

(cljs.core.async.t_cljs$core$async36270.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36270");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36270.
 */
cljs.core.async.__GT_t_cljs$core$async36270 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36270(f__$1,ch__$1,meta36271){
return (new cljs.core.async.t_cljs$core$async36270(f__$1,ch__$1,meta36271));
});

}

return (new cljs.core.async.t_cljs$core$async36270(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
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
cljs.core.async.t_cljs$core$async36295 = (function (p,ch,meta36296){
this.p = p;
this.ch = ch;
this.meta36296 = meta36296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36297,meta36296__$1){
var self__ = this;
var _36297__$1 = this;
return (new cljs.core.async.t_cljs$core$async36295(self__.p,self__.ch,meta36296__$1));
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

(cljs.core.async.t_cljs$core$async36295.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
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
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36296","meta36296",-2048591247,null)], null);
}));

(cljs.core.async.t_cljs$core$async36295.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36295");

(cljs.core.async.t_cljs$core$async36295.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36295");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36295.
 */
cljs.core.async.__GT_t_cljs$core$async36295 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36295(p__$1,ch__$1,meta36296){
return (new cljs.core.async.t_cljs$core$async36295(p__$1,ch__$1,meta36296));
});

}

return (new cljs.core.async.t_cljs$core$async36295(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36313 = arguments.length;
switch (G__36313) {
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
var c__34274__auto___38016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36340){
var state_val_36341 = (state_36340[(1)]);
if((state_val_36341 === (7))){
var inst_36336 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36344_38019 = state_36340__$1;
(statearr_36344_38019[(2)] = inst_36336);

(statearr_36344_38019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (1))){
var state_36340__$1 = state_36340;
var statearr_36345_38022 = state_36340__$1;
(statearr_36345_38022[(2)] = null);

(statearr_36345_38022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (4))){
var inst_36321 = (state_36340[(7)]);
var inst_36321__$1 = (state_36340[(2)]);
var inst_36322 = (inst_36321__$1 == null);
var state_36340__$1 = (function (){var statearr_36348 = state_36340;
(statearr_36348[(7)] = inst_36321__$1);

return statearr_36348;
})();
if(cljs.core.truth_(inst_36322)){
var statearr_36349_38024 = state_36340__$1;
(statearr_36349_38024[(1)] = (5));

} else {
var statearr_36350_38025 = state_36340__$1;
(statearr_36350_38025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (6))){
var inst_36321 = (state_36340[(7)]);
var inst_36326 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36321) : p.call(null,inst_36321));
var state_36340__$1 = state_36340;
if(cljs.core.truth_(inst_36326)){
var statearr_36351_38028 = state_36340__$1;
(statearr_36351_38028[(1)] = (8));

} else {
var statearr_36352_38029 = state_36340__$1;
(statearr_36352_38029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (3))){
var inst_36338 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36340__$1,inst_36338);
} else {
if((state_val_36341 === (2))){
var state_36340__$1 = state_36340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36340__$1,(4),ch);
} else {
if((state_val_36341 === (11))){
var inst_36330 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36355_38030 = state_36340__$1;
(statearr_36355_38030[(2)] = inst_36330);

(statearr_36355_38030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (9))){
var state_36340__$1 = state_36340;
var statearr_36356_38031 = state_36340__$1;
(statearr_36356_38031[(2)] = null);

(statearr_36356_38031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (5))){
var inst_36324 = cljs.core.async.close_BANG_(out);
var state_36340__$1 = state_36340;
var statearr_36357_38033 = state_36340__$1;
(statearr_36357_38033[(2)] = inst_36324);

(statearr_36357_38033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (10))){
var inst_36333 = (state_36340[(2)]);
var state_36340__$1 = (function (){var statearr_36358 = state_36340;
(statearr_36358[(8)] = inst_36333);

return statearr_36358;
})();
var statearr_36359_38036 = state_36340__$1;
(statearr_36359_38036[(2)] = null);

(statearr_36359_38036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (8))){
var inst_36321 = (state_36340[(7)]);
var state_36340__$1 = state_36340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36340__$1,(11),out,inst_36321);
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
var statearr_36360 = [null,null,null,null,null,null,null,null,null];
(statearr_36360[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36360[(1)] = (1));

return statearr_36360;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36340){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36340);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36362){if((e36362 instanceof Object)){
var ex__34210__auto__ = e36362;
var statearr_36364_38041 = state_36340;
(statearr_36364_38041[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36362;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38042 = state_36340;
state_36340 = G__38042;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36367 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36367[(6)] = c__34274__auto___38016);

return statearr_36367;
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
var G__36377 = arguments.length;
switch (G__36377) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36446){
var state_val_36447 = (state_36446[(1)]);
if((state_val_36447 === (7))){
var inst_36442 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
var statearr_36448_38049 = state_36446__$1;
(statearr_36448_38049[(2)] = inst_36442);

(statearr_36448_38049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (20))){
var inst_36412 = (state_36446[(7)]);
var inst_36423 = (state_36446[(2)]);
var inst_36424 = cljs.core.next(inst_36412);
var inst_36398 = inst_36424;
var inst_36399 = null;
var inst_36400 = (0);
var inst_36401 = (0);
var state_36446__$1 = (function (){var statearr_36451 = state_36446;
(statearr_36451[(8)] = inst_36399);

(statearr_36451[(9)] = inst_36423);

(statearr_36451[(10)] = inst_36398);

(statearr_36451[(11)] = inst_36400);

(statearr_36451[(12)] = inst_36401);

return statearr_36451;
})();
var statearr_36452_38055 = state_36446__$1;
(statearr_36452_38055[(2)] = null);

(statearr_36452_38055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (1))){
var state_36446__$1 = state_36446;
var statearr_36453_38056 = state_36446__$1;
(statearr_36453_38056[(2)] = null);

(statearr_36453_38056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (4))){
var inst_36385 = (state_36446[(13)]);
var inst_36385__$1 = (state_36446[(2)]);
var inst_36387 = (inst_36385__$1 == null);
var state_36446__$1 = (function (){var statearr_36456 = state_36446;
(statearr_36456[(13)] = inst_36385__$1);

return statearr_36456;
})();
if(cljs.core.truth_(inst_36387)){
var statearr_36457_38057 = state_36446__$1;
(statearr_36457_38057[(1)] = (5));

} else {
var statearr_36458_38058 = state_36446__$1;
(statearr_36458_38058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (15))){
var state_36446__$1 = state_36446;
var statearr_36467_38059 = state_36446__$1;
(statearr_36467_38059[(2)] = null);

(statearr_36467_38059[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (21))){
var state_36446__$1 = state_36446;
var statearr_36470_38060 = state_36446__$1;
(statearr_36470_38060[(2)] = null);

(statearr_36470_38060[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (13))){
var inst_36399 = (state_36446[(8)]);
var inst_36398 = (state_36446[(10)]);
var inst_36400 = (state_36446[(11)]);
var inst_36401 = (state_36446[(12)]);
var inst_36408 = (state_36446[(2)]);
var inst_36409 = (inst_36401 + (1));
var tmp36459 = inst_36399;
var tmp36460 = inst_36398;
var tmp36461 = inst_36400;
var inst_36398__$1 = tmp36460;
var inst_36399__$1 = tmp36459;
var inst_36400__$1 = tmp36461;
var inst_36401__$1 = inst_36409;
var state_36446__$1 = (function (){var statearr_36473 = state_36446;
(statearr_36473[(8)] = inst_36399__$1);

(statearr_36473[(14)] = inst_36408);

(statearr_36473[(10)] = inst_36398__$1);

(statearr_36473[(11)] = inst_36400__$1);

(statearr_36473[(12)] = inst_36401__$1);

return statearr_36473;
})();
var statearr_36474_38064 = state_36446__$1;
(statearr_36474_38064[(2)] = null);

(statearr_36474_38064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (22))){
var state_36446__$1 = state_36446;
var statearr_36476_38065 = state_36446__$1;
(statearr_36476_38065[(2)] = null);

(statearr_36476_38065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (6))){
var inst_36385 = (state_36446[(13)]);
var inst_36395 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36385) : f.call(null,inst_36385));
var inst_36396 = cljs.core.seq(inst_36395);
var inst_36398 = inst_36396;
var inst_36399 = null;
var inst_36400 = (0);
var inst_36401 = (0);
var state_36446__$1 = (function (){var statearr_36479 = state_36446;
(statearr_36479[(8)] = inst_36399);

(statearr_36479[(10)] = inst_36398);

(statearr_36479[(11)] = inst_36400);

(statearr_36479[(12)] = inst_36401);

return statearr_36479;
})();
var statearr_36480_38068 = state_36446__$1;
(statearr_36480_38068[(2)] = null);

(statearr_36480_38068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (17))){
var inst_36412 = (state_36446[(7)]);
var inst_36416 = cljs.core.chunk_first(inst_36412);
var inst_36417 = cljs.core.chunk_rest(inst_36412);
var inst_36418 = cljs.core.count(inst_36416);
var inst_36398 = inst_36417;
var inst_36399 = inst_36416;
var inst_36400 = inst_36418;
var inst_36401 = (0);
var state_36446__$1 = (function (){var statearr_36482 = state_36446;
(statearr_36482[(8)] = inst_36399);

(statearr_36482[(10)] = inst_36398);

(statearr_36482[(11)] = inst_36400);

(statearr_36482[(12)] = inst_36401);

return statearr_36482;
})();
var statearr_36483_38071 = state_36446__$1;
(statearr_36483_38071[(2)] = null);

(statearr_36483_38071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (3))){
var inst_36444 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36446__$1,inst_36444);
} else {
if((state_val_36447 === (12))){
var inst_36432 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
var statearr_36485_38072 = state_36446__$1;
(statearr_36485_38072[(2)] = inst_36432);

(statearr_36485_38072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (2))){
var state_36446__$1 = state_36446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36446__$1,(4),in$);
} else {
if((state_val_36447 === (23))){
var inst_36440 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
var statearr_36487_38075 = state_36446__$1;
(statearr_36487_38075[(2)] = inst_36440);

(statearr_36487_38075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (19))){
var inst_36427 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
var statearr_36488_38076 = state_36446__$1;
(statearr_36488_38076[(2)] = inst_36427);

(statearr_36488_38076[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (11))){
var inst_36412 = (state_36446[(7)]);
var inst_36398 = (state_36446[(10)]);
var inst_36412__$1 = cljs.core.seq(inst_36398);
var state_36446__$1 = (function (){var statearr_36492 = state_36446;
(statearr_36492[(7)] = inst_36412__$1);

return statearr_36492;
})();
if(inst_36412__$1){
var statearr_36493_38077 = state_36446__$1;
(statearr_36493_38077[(1)] = (14));

} else {
var statearr_36494_38078 = state_36446__$1;
(statearr_36494_38078[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (9))){
var inst_36434 = (state_36446[(2)]);
var inst_36435 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36446__$1 = (function (){var statearr_36497 = state_36446;
(statearr_36497[(15)] = inst_36434);

return statearr_36497;
})();
if(cljs.core.truth_(inst_36435)){
var statearr_36498_38080 = state_36446__$1;
(statearr_36498_38080[(1)] = (21));

} else {
var statearr_36499_38081 = state_36446__$1;
(statearr_36499_38081[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (5))){
var inst_36389 = cljs.core.async.close_BANG_(out);
var state_36446__$1 = state_36446;
var statearr_36500_38084 = state_36446__$1;
(statearr_36500_38084[(2)] = inst_36389);

(statearr_36500_38084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (14))){
var inst_36412 = (state_36446[(7)]);
var inst_36414 = cljs.core.chunked_seq_QMARK_(inst_36412);
var state_36446__$1 = state_36446;
if(inst_36414){
var statearr_36502_38085 = state_36446__$1;
(statearr_36502_38085[(1)] = (17));

} else {
var statearr_36503_38086 = state_36446__$1;
(statearr_36503_38086[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (16))){
var inst_36430 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
var statearr_36505_38087 = state_36446__$1;
(statearr_36505_38087[(2)] = inst_36430);

(statearr_36505_38087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (10))){
var inst_36399 = (state_36446[(8)]);
var inst_36401 = (state_36446[(12)]);
var inst_36406 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36399,inst_36401);
var state_36446__$1 = state_36446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36446__$1,(13),out,inst_36406);
} else {
if((state_val_36447 === (18))){
var inst_36412 = (state_36446[(7)]);
var inst_36421 = cljs.core.first(inst_36412);
var state_36446__$1 = state_36446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36446__$1,(20),out,inst_36421);
} else {
if((state_val_36447 === (8))){
var inst_36400 = (state_36446[(11)]);
var inst_36401 = (state_36446[(12)]);
var inst_36403 = (inst_36401 < inst_36400);
var inst_36404 = inst_36403;
var state_36446__$1 = state_36446;
if(cljs.core.truth_(inst_36404)){
var statearr_36515_38091 = state_36446__$1;
(statearr_36515_38091[(1)] = (10));

} else {
var statearr_36516_38092 = state_36446__$1;
(statearr_36516_38092[(1)] = (11));

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
var statearr_36520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36520[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36520[(1)] = (1));

return statearr_36520;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36446){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36446);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36521){if((e36521 instanceof Object)){
var ex__34210__auto__ = e36521;
var statearr_36523_38096 = state_36446;
(statearr_36523_38096[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36521;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38097 = state_36446;
state_36446 = G__38097;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36446){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36526 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36526[(6)] = c__34274__auto__);

return statearr_36526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36538 = arguments.length;
switch (G__36538) {
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
var G__36547 = arguments.length;
switch (G__36547) {
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
var G__36561 = arguments.length;
switch (G__36561) {
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
var c__34274__auto___38108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36589){
var state_val_36590 = (state_36589[(1)]);
if((state_val_36590 === (7))){
var inst_36584 = (state_36589[(2)]);
var state_36589__$1 = state_36589;
var statearr_36593_38111 = state_36589__$1;
(statearr_36593_38111[(2)] = inst_36584);

(statearr_36593_38111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (1))){
var inst_36566 = null;
var state_36589__$1 = (function (){var statearr_36596 = state_36589;
(statearr_36596[(7)] = inst_36566);

return statearr_36596;
})();
var statearr_36597_38112 = state_36589__$1;
(statearr_36597_38112[(2)] = null);

(statearr_36597_38112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (4))){
var inst_36569 = (state_36589[(8)]);
var inst_36569__$1 = (state_36589[(2)]);
var inst_36570 = (inst_36569__$1 == null);
var inst_36571 = cljs.core.not(inst_36570);
var state_36589__$1 = (function (){var statearr_36599 = state_36589;
(statearr_36599[(8)] = inst_36569__$1);

return statearr_36599;
})();
if(inst_36571){
var statearr_36601_38114 = state_36589__$1;
(statearr_36601_38114[(1)] = (5));

} else {
var statearr_36603_38115 = state_36589__$1;
(statearr_36603_38115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (6))){
var state_36589__$1 = state_36589;
var statearr_36604_38117 = state_36589__$1;
(statearr_36604_38117[(2)] = null);

(statearr_36604_38117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (3))){
var inst_36586 = (state_36589[(2)]);
var inst_36587 = cljs.core.async.close_BANG_(out);
var state_36589__$1 = (function (){var statearr_36607 = state_36589;
(statearr_36607[(9)] = inst_36586);

return statearr_36607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36589__$1,inst_36587);
} else {
if((state_val_36590 === (2))){
var state_36589__$1 = state_36589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36589__$1,(4),ch);
} else {
if((state_val_36590 === (11))){
var inst_36569 = (state_36589[(8)]);
var inst_36578 = (state_36589[(2)]);
var inst_36566 = inst_36569;
var state_36589__$1 = (function (){var statearr_36610 = state_36589;
(statearr_36610[(10)] = inst_36578);

(statearr_36610[(7)] = inst_36566);

return statearr_36610;
})();
var statearr_36611_38119 = state_36589__$1;
(statearr_36611_38119[(2)] = null);

(statearr_36611_38119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (9))){
var inst_36569 = (state_36589[(8)]);
var state_36589__$1 = state_36589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36589__$1,(11),out,inst_36569);
} else {
if((state_val_36590 === (5))){
var inst_36569 = (state_36589[(8)]);
var inst_36566 = (state_36589[(7)]);
var inst_36573 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36569,inst_36566);
var state_36589__$1 = state_36589;
if(inst_36573){
var statearr_36619_38123 = state_36589__$1;
(statearr_36619_38123[(1)] = (8));

} else {
var statearr_36620_38124 = state_36589__$1;
(statearr_36620_38124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (10))){
var inst_36581 = (state_36589[(2)]);
var state_36589__$1 = state_36589;
var statearr_36621_38125 = state_36589__$1;
(statearr_36621_38125[(2)] = inst_36581);

(statearr_36621_38125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (8))){
var inst_36566 = (state_36589[(7)]);
var tmp36618 = inst_36566;
var inst_36566__$1 = tmp36618;
var state_36589__$1 = (function (){var statearr_36623 = state_36589;
(statearr_36623[(7)] = inst_36566__$1);

return statearr_36623;
})();
var statearr_36624_38127 = state_36589__$1;
(statearr_36624_38127[(2)] = null);

(statearr_36624_38127[(1)] = (2));


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
var statearr_36626 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36626[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36626[(1)] = (1));

return statearr_36626;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36589){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36589);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36627){if((e36627 instanceof Object)){
var ex__34210__auto__ = e36627;
var statearr_36628_38130 = state_36589;
(statearr_36628_38130[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38132 = state_36589;
state_36589 = G__38132;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36630 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36630[(6)] = c__34274__auto___38108);

return statearr_36630;
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
var G__36633 = arguments.length;
switch (G__36633) {
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
var c__34274__auto___38138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36673){
var state_val_36674 = (state_36673[(1)]);
if((state_val_36674 === (7))){
var inst_36669 = (state_36673[(2)]);
var state_36673__$1 = state_36673;
var statearr_36676_38140 = state_36673__$1;
(statearr_36676_38140[(2)] = inst_36669);

(statearr_36676_38140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36674 === (1))){
var inst_36635 = (new Array(n));
var inst_36636 = inst_36635;
var inst_36637 = (0);
var state_36673__$1 = (function (){var statearr_36678 = state_36673;
(statearr_36678[(7)] = inst_36636);

(statearr_36678[(8)] = inst_36637);

return statearr_36678;
})();
var statearr_36679_38141 = state_36673__$1;
(statearr_36679_38141[(2)] = null);

(statearr_36679_38141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36674 === (4))){
var inst_36640 = (state_36673[(9)]);
var inst_36640__$1 = (state_36673[(2)]);
var inst_36642 = (inst_36640__$1 == null);
var inst_36643 = cljs.core.not(inst_36642);
var state_36673__$1 = (function (){var statearr_36680 = state_36673;
(statearr_36680[(9)] = inst_36640__$1);

return statearr_36680;
})();
if(inst_36643){
var statearr_36682_38145 = state_36673__$1;
(statearr_36682_38145[(1)] = (5));

} else {
var statearr_36683_38146 = state_36673__$1;
(statearr_36683_38146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36674 === (15))){
var inst_36663 = (state_36673[(2)]);
var state_36673__$1 = state_36673;
var statearr_36684_38147 = state_36673__$1;
(statearr_36684_38147[(2)] = inst_36663);

(statearr_36684_38147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36674 === (13))){
var state_36673__$1 = state_36673;
var statearr_36686_38148 = state_36673__$1;
(statearr_36686_38148[(2)] = null);

(statearr_36686_38148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36674 === (6))){
var inst_36637 = (state_36673[(8)]);
var inst_36659 = (inst_36637 > (0));
var state_36673__$1 = state_36673;
if(cljs.core.truth_(inst_36659)){
var statearr_36687_38150 = state_36673__$1;
(statearr_36687_38150[(1)] = (12));

} else {
var statearr_36688_38152 = state_36673__$1;
(statearr_36688_38152[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36674 === (3))){
var inst_36671 = (state_36673[(2)]);
var state_36673__$1 = state_36673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36673__$1,inst_36671);
} else {
if((state_val_36674 === (12))){
var inst_36636 = (state_36673[(7)]);
var inst_36661 = cljs.core.vec(inst_36636);
var state_36673__$1 = state_36673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36673__$1,(15),out,inst_36661);
} else {
if((state_val_36674 === (2))){
var state_36673__$1 = state_36673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36673__$1,(4),ch);
} else {
if((state_val_36674 === (11))){
var inst_36653 = (state_36673[(2)]);
var inst_36654 = (new Array(n));
var inst_36636 = inst_36654;
var inst_36637 = (0);
var state_36673__$1 = (function (){var statearr_36690 = state_36673;
(statearr_36690[(10)] = inst_36653);

(statearr_36690[(7)] = inst_36636);

(statearr_36690[(8)] = inst_36637);

return statearr_36690;
})();
var statearr_36692_38156 = state_36673__$1;
(statearr_36692_38156[(2)] = null);

(statearr_36692_38156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36674 === (9))){
var inst_36636 = (state_36673[(7)]);
var inst_36651 = cljs.core.vec(inst_36636);
var state_36673__$1 = state_36673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36673__$1,(11),out,inst_36651);
} else {
if((state_val_36674 === (5))){
var inst_36636 = (state_36673[(7)]);
var inst_36640 = (state_36673[(9)]);
var inst_36646 = (state_36673[(11)]);
var inst_36637 = (state_36673[(8)]);
var inst_36645 = (inst_36636[inst_36637] = inst_36640);
var inst_36646__$1 = (inst_36637 + (1));
var inst_36647 = (inst_36646__$1 < n);
var state_36673__$1 = (function (){var statearr_36693 = state_36673;
(statearr_36693[(12)] = inst_36645);

(statearr_36693[(11)] = inst_36646__$1);

return statearr_36693;
})();
if(cljs.core.truth_(inst_36647)){
var statearr_36694_38159 = state_36673__$1;
(statearr_36694_38159[(1)] = (8));

} else {
var statearr_36696_38160 = state_36673__$1;
(statearr_36696_38160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36674 === (14))){
var inst_36666 = (state_36673[(2)]);
var inst_36667 = cljs.core.async.close_BANG_(out);
var state_36673__$1 = (function (){var statearr_36698 = state_36673;
(statearr_36698[(13)] = inst_36666);

return statearr_36698;
})();
var statearr_36699_38163 = state_36673__$1;
(statearr_36699_38163[(2)] = inst_36667);

(statearr_36699_38163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36674 === (10))){
var inst_36657 = (state_36673[(2)]);
var state_36673__$1 = state_36673;
var statearr_36701_38164 = state_36673__$1;
(statearr_36701_38164[(2)] = inst_36657);

(statearr_36701_38164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36674 === (8))){
var inst_36636 = (state_36673[(7)]);
var inst_36646 = (state_36673[(11)]);
var tmp36697 = inst_36636;
var inst_36636__$1 = tmp36697;
var inst_36637 = inst_36646;
var state_36673__$1 = (function (){var statearr_36702 = state_36673;
(statearr_36702[(7)] = inst_36636__$1);

(statearr_36702[(8)] = inst_36637);

return statearr_36702;
})();
var statearr_36703_38167 = state_36673__$1;
(statearr_36703_38167[(2)] = null);

(statearr_36703_38167[(1)] = (2));


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
var statearr_36705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36705[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36705[(1)] = (1));

return statearr_36705;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36673){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36673);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36709){if((e36709 instanceof Object)){
var ex__34210__auto__ = e36709;
var statearr_36710_38169 = state_36673;
(statearr_36710_38169[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36709;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38171 = state_36673;
state_36673 = G__38171;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36711 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36711[(6)] = c__34274__auto___38138);

return statearr_36711;
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
var G__36713 = arguments.length;
switch (G__36713) {
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
var c__34274__auto___38175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36758){
var state_val_36759 = (state_36758[(1)]);
if((state_val_36759 === (7))){
var inst_36754 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36761_38177 = state_36758__$1;
(statearr_36761_38177[(2)] = inst_36754);

(statearr_36761_38177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (1))){
var inst_36716 = [];
var inst_36717 = inst_36716;
var inst_36718 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36758__$1 = (function (){var statearr_36763 = state_36758;
(statearr_36763[(7)] = inst_36718);

(statearr_36763[(8)] = inst_36717);

return statearr_36763;
})();
var statearr_36764_38180 = state_36758__$1;
(statearr_36764_38180[(2)] = null);

(statearr_36764_38180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (4))){
var inst_36721 = (state_36758[(9)]);
var inst_36721__$1 = (state_36758[(2)]);
var inst_36722 = (inst_36721__$1 == null);
var inst_36723 = cljs.core.not(inst_36722);
var state_36758__$1 = (function (){var statearr_36766 = state_36758;
(statearr_36766[(9)] = inst_36721__$1);

return statearr_36766;
})();
if(inst_36723){
var statearr_36767_38181 = state_36758__$1;
(statearr_36767_38181[(1)] = (5));

} else {
var statearr_36768_38182 = state_36758__$1;
(statearr_36768_38182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (15))){
var inst_36748 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36770_38183 = state_36758__$1;
(statearr_36770_38183[(2)] = inst_36748);

(statearr_36770_38183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (13))){
var state_36758__$1 = state_36758;
var statearr_36771_38185 = state_36758__$1;
(statearr_36771_38185[(2)] = null);

(statearr_36771_38185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (6))){
var inst_36717 = (state_36758[(8)]);
var inst_36743 = inst_36717.length;
var inst_36744 = (inst_36743 > (0));
var state_36758__$1 = state_36758;
if(cljs.core.truth_(inst_36744)){
var statearr_36772_38188 = state_36758__$1;
(statearr_36772_38188[(1)] = (12));

} else {
var statearr_36773_38189 = state_36758__$1;
(statearr_36773_38189[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (3))){
var inst_36756 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36758__$1,inst_36756);
} else {
if((state_val_36759 === (12))){
var inst_36717 = (state_36758[(8)]);
var inst_36746 = cljs.core.vec(inst_36717);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36758__$1,(15),out,inst_36746);
} else {
if((state_val_36759 === (2))){
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36758__$1,(4),ch);
} else {
if((state_val_36759 === (11))){
var inst_36725 = (state_36758[(10)]);
var inst_36721 = (state_36758[(9)]);
var inst_36735 = (state_36758[(2)]);
var inst_36737 = [];
var inst_36738 = inst_36737.push(inst_36721);
var inst_36717 = inst_36737;
var inst_36718 = inst_36725;
var state_36758__$1 = (function (){var statearr_36776 = state_36758;
(statearr_36776[(11)] = inst_36738);

(statearr_36776[(7)] = inst_36718);

(statearr_36776[(12)] = inst_36735);

(statearr_36776[(8)] = inst_36717);

return statearr_36776;
})();
var statearr_36777_38190 = state_36758__$1;
(statearr_36777_38190[(2)] = null);

(statearr_36777_38190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (9))){
var inst_36717 = (state_36758[(8)]);
var inst_36733 = cljs.core.vec(inst_36717);
var state_36758__$1 = state_36758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36758__$1,(11),out,inst_36733);
} else {
if((state_val_36759 === (5))){
var inst_36725 = (state_36758[(10)]);
var inst_36721 = (state_36758[(9)]);
var inst_36718 = (state_36758[(7)]);
var inst_36725__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36721) : f.call(null,inst_36721));
var inst_36726 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36725__$1,inst_36718);
var inst_36727 = cljs.core.keyword_identical_QMARK_(inst_36718,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36728 = ((inst_36726) || (inst_36727));
var state_36758__$1 = (function (){var statearr_36780 = state_36758;
(statearr_36780[(10)] = inst_36725__$1);

return statearr_36780;
})();
if(cljs.core.truth_(inst_36728)){
var statearr_36781_38197 = state_36758__$1;
(statearr_36781_38197[(1)] = (8));

} else {
var statearr_36782_38198 = state_36758__$1;
(statearr_36782_38198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (14))){
var inst_36751 = (state_36758[(2)]);
var inst_36752 = cljs.core.async.close_BANG_(out);
var state_36758__$1 = (function (){var statearr_36785 = state_36758;
(statearr_36785[(13)] = inst_36751);

return statearr_36785;
})();
var statearr_36786_38199 = state_36758__$1;
(statearr_36786_38199[(2)] = inst_36752);

(statearr_36786_38199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (10))){
var inst_36741 = (state_36758[(2)]);
var state_36758__$1 = state_36758;
var statearr_36787_38203 = state_36758__$1;
(statearr_36787_38203[(2)] = inst_36741);

(statearr_36787_38203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36759 === (8))){
var inst_36725 = (state_36758[(10)]);
var inst_36721 = (state_36758[(9)]);
var inst_36717 = (state_36758[(8)]);
var inst_36730 = inst_36717.push(inst_36721);
var tmp36783 = inst_36717;
var inst_36717__$1 = tmp36783;
var inst_36718 = inst_36725;
var state_36758__$1 = (function (){var statearr_36789 = state_36758;
(statearr_36789[(14)] = inst_36730);

(statearr_36789[(7)] = inst_36718);

(statearr_36789[(8)] = inst_36717__$1);

return statearr_36789;
})();
var statearr_36790_38207 = state_36758__$1;
(statearr_36790_38207[(2)] = null);

(statearr_36790_38207[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36758){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36758);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36793){if((e36793 instanceof Object)){
var ex__34210__auto__ = e36793;
var statearr_36794_38209 = state_36758;
(statearr_36794_38209[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36793;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38210 = state_36758;
state_36758 = G__38210;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36796 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36796[(6)] = c__34274__auto___38175);

return statearr_36796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
