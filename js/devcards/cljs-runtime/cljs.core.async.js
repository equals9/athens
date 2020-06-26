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
var val_36832 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36832) : fn1.call(null,val_36832));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36832) : fn1.call(null,val_36832));
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
var n__4666__auto___36840 = n;
var x_36841 = (0);
while(true){
if((x_36841 < n__4666__auto___36840)){
(a[x_36841] = x_36841);

var G__36842 = (x_36841 + (1));
x_36841 = G__36842;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34355 = (function (flag,cb,meta34356){
this.flag = flag;
this.cb = cb;
this.meta34356 = meta34356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34357,meta34356__$1){
var self__ = this;
var _34357__$1 = this;
return (new cljs.core.async.t_cljs$core$async34355(self__.flag,self__.cb,meta34356__$1));
}));

(cljs.core.async.t_cljs$core$async34355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34357){
var self__ = this;
var _34357__$1 = this;
return self__.meta34356;
}));

(cljs.core.async.t_cljs$core$async34355.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34356","meta34356",749682899,null)], null);
}));

(cljs.core.async.t_cljs$core$async34355.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34355");

(cljs.core.async.t_cljs$core$async34355.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34355");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34355.
 */
cljs.core.async.__GT_t_cljs$core$async34355 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34355(flag__$1,cb__$1,meta34356){
return (new cljs.core.async.t_cljs$core$async34355(flag__$1,cb__$1,meta34356));
});

}

return (new cljs.core.async.t_cljs$core$async34355(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34274__auto___36864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36866 = state_34423__$1;
(statearr_34425_36866[(2)] = inst_34419);

(statearr_34425_36866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36867 = state_34423__$1;
(statearr_34426_36867[(2)] = null);

(statearr_34426_36867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (4))){
var inst_34390 = (state_34423[(7)]);
var inst_34390__$1 = (state_34423[(2)]);
var inst_34394 = (inst_34390__$1 == null);
var state_34423__$1 = (function (){var statearr_34427 = state_34423;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34394)){
var statearr_34428_36869 = state_34423__$1;
(statearr_34428_36869[(1)] = (5));

} else {
var statearr_34429_36870 = state_34423__$1;
(statearr_34429_36870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36871 = state_34423__$1;
(statearr_34430_36871[(2)] = null);

(statearr_34430_36871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (6))){
var inst_34390 = (state_34423[(7)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34423__$1,(11),to,inst_34390);
} else {
if((state_val_34424 === (3))){
var inst_34421 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34423__$1,inst_34421);
} else {
if((state_val_34424 === (12))){
var state_34423__$1 = state_34423;
var statearr_34431_36873 = state_34423__$1;
(statearr_34431_36873[(2)] = null);

(statearr_34431_36873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (2))){
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34423__$1,(4),from);
} else {
if((state_val_34424 === (11))){
var inst_34409 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
if(cljs.core.truth_(inst_34409)){
var statearr_34432_36875 = state_34423__$1;
(statearr_34432_36875[(1)] = (12));

} else {
var statearr_34433_36876 = state_34423__$1;
(statearr_34433_36876[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34434_36878 = state_34423__$1;
(statearr_34434_36878[(2)] = null);

(statearr_34434_36878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36879 = state_34423__$1;
(statearr_34435_36879[(1)] = (8));

} else {
var statearr_34436_36880 = state_34423__$1;
(statearr_34436_36880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34417 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_36882 = state_34423__$1;
(statearr_34437_36882[(2)] = inst_34417);

(statearr_34437_36882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34406 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34438_36883 = state_34423__$1;
(statearr_34438_36883[(2)] = inst_34406);

(statearr_34438_36883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34400 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34439_36885 = state_34423__$1;
(statearr_34439_36885[(2)] = inst_34400);

(statearr_34439_36885[(1)] = (10));


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
}catch (e34441){if((e34441 instanceof Object)){
var ex__34210__auto__ = e34441;
var statearr_34442_36887 = state_34423;
(statearr_34442_36887[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36888 = state_34423;
state_34423 = G__36888;
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
var state__34276__auto__ = (function (){var statearr_34443 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34443[(6)] = c__34274__auto___36864);

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
var process = (function (p__34448){
var vec__34449 = p__34448;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34449,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34449,(1),null);
var job = vec__34449;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34274__auto___36891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34456){
var state_val_34457 = (state_34456[(1)]);
if((state_val_34457 === (1))){
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34456__$1,(2),res,v);
} else {
if((state_val_34457 === (2))){
var inst_34453 = (state_34456[(2)]);
var inst_34454 = cljs.core.async.close_BANG_(res);
var state_34456__$1 = (function (){var statearr_34459 = state_34456;
(statearr_34459[(7)] = inst_34453);

return statearr_34459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34456__$1,inst_34454);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34460 = [null,null,null,null,null,null,null,null];
(statearr_34460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34460[(1)] = (1));

return statearr_34460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34456){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34456);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34461){if((e34461 instanceof Object)){
var ex__34210__auto__ = e34461;
var statearr_34462_36894 = state_34456;
(statearr_34462_36894[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36896 = state_34456;
state_34456 = G__36896;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34463 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34463[(6)] = c__34274__auto___36891);

return statearr_34463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34465){
var vec__34466 = p__34465;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34466,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34466,(1),null);
var job = vec__34466;
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
var n__4666__auto___36899 = n;
var __36900 = (0);
while(true){
if((__36900 < n__4666__auto___36899)){
var G__34471_36901 = type;
var G__34471_36902__$1 = (((G__34471_36901 instanceof cljs.core.Keyword))?G__34471_36901.fqn:null);
switch (G__34471_36902__$1) {
case "compute":
var c__34274__auto___36904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36900,c__34274__auto___36904,G__34471_36901,G__34471_36902__$1,n__4666__auto___36899,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36900,c__34274__auto___36904,G__34471_36901,G__34471_36902__$1,n__4666__auto___36899,jobs,results,process,async){
return (function (state_34484){
var state_val_34485 = (state_34484[(1)]);
if((state_val_34485 === (1))){
var state_34484__$1 = state_34484;
var statearr_34491_36906 = state_34484__$1;
(statearr_34491_36906[(2)] = null);

(statearr_34491_36906[(1)] = (2));


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
var statearr_34494_36908 = state_34484__$1;
(statearr_34494_36908[(1)] = (5));

} else {
var statearr_34495_36909 = state_34484__$1;
(statearr_34495_36909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (5))){
var state_34484__$1 = state_34484;
var statearr_34496_36911 = state_34484__$1;
(statearr_34496_36911[(2)] = null);

(statearr_34496_36911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (6))){
var state_34484__$1 = state_34484;
var statearr_34497_36912 = state_34484__$1;
(statearr_34497_36912[(2)] = null);

(statearr_34497_36912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (7))){
var inst_34480 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
var statearr_34498_36914 = state_34484__$1;
(statearr_34498_36914[(2)] = inst_34480);

(statearr_34498_36914[(1)] = (3));


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
});})(__36900,c__34274__auto___36904,G__34471_36901,G__34471_36902__$1,n__4666__auto___36899,jobs,results,process,async))
;
return ((function (__36900,switch__34206__auto__,c__34274__auto___36904,G__34471_36901,G__34471_36902__$1,n__4666__auto___36899,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34499 = [null,null,null,null,null,null,null];
(statearr_34499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34499[(1)] = (1));

return statearr_34499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34484){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34484);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34500){if((e34500 instanceof Object)){
var ex__34210__auto__ = e34500;
var statearr_34501_36916 = state_34484;
(statearr_34501_36916[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36918 = state_34484;
state_34484 = G__36918;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34484){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36900,switch__34206__auto__,c__34274__auto___36904,G__34471_36901,G__34471_36902__$1,n__4666__auto___36899,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34503 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34503[(6)] = c__34274__auto___36904);

return statearr_34503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36900,c__34274__auto___36904,G__34471_36901,G__34471_36902__$1,n__4666__auto___36899,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36900,c__34274__auto___36919,G__34471_36901,G__34471_36902__$1,n__4666__auto___36899,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36900,c__34274__auto___36919,G__34471_36901,G__34471_36902__$1,n__4666__auto___36899,jobs,results,process,async){
return (function (state_34516){
var state_val_34517 = (state_34516[(1)]);
if((state_val_34517 === (1))){
var state_34516__$1 = state_34516;
var statearr_34518_36921 = state_34516__$1;
(statearr_34518_36921[(2)] = null);

(statearr_34518_36921[(1)] = (2));


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
var statearr_34523_36923 = state_34516__$1;
(statearr_34523_36923[(1)] = (5));

} else {
var statearr_34524_36924 = state_34516__$1;
(statearr_34524_36924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (5))){
var state_34516__$1 = state_34516;
var statearr_34525_36926 = state_34516__$1;
(statearr_34525_36926[(2)] = null);

(statearr_34525_36926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (6))){
var state_34516__$1 = state_34516;
var statearr_34529_36927 = state_34516__$1;
(statearr_34529_36927[(2)] = null);

(statearr_34529_36927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (7))){
var inst_34512 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
var statearr_34530_36929 = state_34516__$1;
(statearr_34530_36929[(2)] = inst_34512);

(statearr_34530_36929[(1)] = (3));


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
});})(__36900,c__34274__auto___36919,G__34471_36901,G__34471_36902__$1,n__4666__auto___36899,jobs,results,process,async))
;
return ((function (__36900,switch__34206__auto__,c__34274__auto___36919,G__34471_36901,G__34471_36902__$1,n__4666__auto___36899,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34531 = [null,null,null,null,null,null,null];
(statearr_34531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34531[(1)] = (1));

return statearr_34531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34516){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34516);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34532){if((e34532 instanceof Object)){
var ex__34210__auto__ = e34532;
var statearr_34533_36931 = state_34516;
(statearr_34533_36931[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36933 = state_34516;
state_34516 = G__36933;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36900,switch__34206__auto__,c__34274__auto___36919,G__34471_36901,G__34471_36902__$1,n__4666__auto___36899,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34534 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34534[(6)] = c__34274__auto___36919);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36900,c__34274__auto___36919,G__34471_36901,G__34471_36902__$1,n__4666__auto___36899,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34471_36902__$1)].join('')));

}

var G__36935 = (__36900 + (1));
__36900 = G__36935;
continue;
} else {
}
break;
}

var c__34274__auto___36936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34554 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34561_36937 = state_34559__$1;
(statearr_34561_36937[(2)] = inst_34554);

(statearr_34561_36937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (1))){
var state_34559__$1 = state_34559;
var statearr_34562_36939 = state_34559__$1;
(statearr_34562_36939[(2)] = null);

(statearr_34562_36939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (4))){
var inst_34537 = (state_34559[(7)]);
var inst_34537__$1 = (state_34559[(2)]);
var inst_34538 = (inst_34537__$1 == null);
var state_34559__$1 = (function (){var statearr_34563 = state_34559;
(statearr_34563[(7)] = inst_34537__$1);

return statearr_34563;
})();
if(cljs.core.truth_(inst_34538)){
var statearr_34564_36941 = state_34559__$1;
(statearr_34564_36941[(1)] = (5));

} else {
var statearr_34565_36942 = state_34559__$1;
(statearr_34565_36942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (6))){
var inst_34542 = (state_34559[(8)]);
var inst_34537 = (state_34559[(7)]);
var inst_34542__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34544 = [inst_34537,inst_34542__$1];
var inst_34545 = (new cljs.core.PersistentVector(null,2,(5),inst_34543,inst_34544,null));
var state_34559__$1 = (function (){var statearr_34566 = state_34559;
(statearr_34566[(8)] = inst_34542__$1);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34559__$1,(8),jobs,inst_34545);
} else {
if((state_val_34560 === (3))){
var inst_34556 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34559__$1,inst_34556);
} else {
if((state_val_34560 === (2))){
var state_34559__$1 = state_34559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34559__$1,(4),from);
} else {
if((state_val_34560 === (9))){
var inst_34550 = (state_34559[(2)]);
var state_34559__$1 = (function (){var statearr_34567 = state_34559;
(statearr_34567[(9)] = inst_34550);

return statearr_34567;
})();
var statearr_34568_36945 = state_34559__$1;
(statearr_34568_36945[(2)] = null);

(statearr_34568_36945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_36946 = state_34559__$1;
(statearr_34569_36946[(2)] = inst_34540);

(statearr_34569_36946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (8))){
var inst_34542 = (state_34559[(8)]);
var inst_34548 = (state_34559[(2)]);
var state_34559__$1 = (function (){var statearr_34570 = state_34559;
(statearr_34570[(10)] = inst_34548);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34559__$1,(9),results,inst_34542);
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
var statearr_34573_36949 = state_34559;
(statearr_34573_36949[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36951 = state_34559;
state_34559 = G__36951;
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
(statearr_34574[(6)] = c__34274__auto___36936);

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
var statearr_34614_36953 = state_34612__$1;
(statearr_34614_36953[(2)] = inst_34608);

(statearr_34614_36953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36954 = state_34612__$1;
(statearr_34615_36954[(2)] = null);

(statearr_34615_36954[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36956 = state_34612__$1;
(statearr_34616_36956[(2)] = null);

(statearr_34616_36956[(1)] = (2));


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
var statearr_34618_36958 = state_34612__$1;
(statearr_34618_36958[(1)] = (5));

} else {
var statearr_34619_36959 = state_34612__$1;
(statearr_34619_36959[(1)] = (6));

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
var statearr_34620_36960 = state_34612__$1;
(statearr_34620_36960[(2)] = inst_34603);

(statearr_34620_36960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36962 = state_34612__$1;
(statearr_34622_36962[(2)] = null);

(statearr_34622_36962[(1)] = (2));


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
var statearr_34623_36964 = state_34612__$1;
(statearr_34623_36964[(1)] = (19));

} else {
var statearr_34624_36965 = state_34612__$1;
(statearr_34624_36965[(1)] = (20));

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
var statearr_34625_36967 = state_34612__$1;
(statearr_34625_36967[(2)] = null);

(statearr_34625_36967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36969 = state_34612__$1;
(statearr_34627_36969[(2)] = null);

(statearr_34627_36969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36970 = state_34612__$1;
(statearr_34628_36970[(2)] = null);

(statearr_34628_36970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36972 = state_34612__$1;
(statearr_34629_36972[(1)] = (8));

} else {
var statearr_34630_36973 = state_34612__$1;
(statearr_34630_36973[(1)] = (9));

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
var statearr_34632_36975 = state_34612__$1;
(statearr_34632_36975[(1)] = (15));

} else {
var statearr_34633_36976 = state_34612__$1;
(statearr_34633_36976[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36977 = state_34612__$1;
(statearr_34634_36977[(2)] = false);

(statearr_34634_36977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36978 = state_34612__$1;
(statearr_34635_36978[(2)] = inst_34584);

(statearr_34635_36978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36979 = state_34612__$1;
(statearr_34636_36979[(2)] = inst_34595);

(statearr_34636_36979[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36981 = state_34612__$1;
(statearr_34637_36981[(2)] = inst_34581);

(statearr_34637_36981[(1)] = (10));


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
}catch (e34642){if((e34642 instanceof Object)){
var ex__34210__auto__ = e34642;
var statearr_34643_36988 = state_34612;
(statearr_34643_36988[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36990 = state_34612;
state_34612 = G__36990;
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
var state__34276__auto__ = (function (){var statearr_34644 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34644[(6)] = c__34274__auto__);

return statearr_34644;
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
var G__34649 = arguments.length;
switch (G__34649) {
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
var G__34656 = arguments.length;
switch (G__34656) {
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
var G__34665 = arguments.length;
switch (G__34665) {
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
var c__34274__auto___36999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34692){
var state_val_34693 = (state_34692[(1)]);
if((state_val_34693 === (7))){
var inst_34688 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34694_37000 = state_34692__$1;
(statearr_34694_37000[(2)] = inst_34688);

(statearr_34694_37000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (1))){
var state_34692__$1 = state_34692;
var statearr_34695_37001 = state_34692__$1;
(statearr_34695_37001[(2)] = null);

(statearr_34695_37001[(1)] = (2));


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
var statearr_34700_37002 = state_34692__$1;
(statearr_34700_37002[(1)] = (5));

} else {
var statearr_34701_37003 = state_34692__$1;
(statearr_34701_37003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (13))){
var state_34692__$1 = state_34692;
var statearr_34702_37004 = state_34692__$1;
(statearr_34702_37004[(2)] = null);

(statearr_34702_37004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (6))){
var inst_34669 = (state_34692[(7)]);
var inst_34675 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34669) : p.call(null,inst_34669));
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34675)){
var statearr_34703_37005 = state_34692__$1;
(statearr_34703_37005[(1)] = (9));

} else {
var statearr_34704_37008 = state_34692__$1;
(statearr_34704_37008[(1)] = (10));

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
var statearr_34708_37011 = state_34692__$1;
(statearr_34708_37011[(2)] = null);

(statearr_34708_37011[(1)] = (2));


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
var statearr_34709_37014 = state_34692__$1;
(statearr_34709_37014[(2)] = tc);

(statearr_34709_37014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (5))){
var inst_34672 = cljs.core.async.close_BANG_(tc);
var inst_34673 = cljs.core.async.close_BANG_(fc);
var state_34692__$1 = (function (){var statearr_34710 = state_34692;
(statearr_34710[(8)] = inst_34672);

return statearr_34710;
})();
var statearr_34711_37015 = state_34692__$1;
(statearr_34711_37015[(2)] = inst_34673);

(statearr_34711_37015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (14))){
var inst_34686 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34712_37016 = state_34692__$1;
(statearr_34712_37016[(2)] = inst_34686);

(statearr_34712_37016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (10))){
var state_34692__$1 = state_34692;
var statearr_34713_37017 = state_34692__$1;
(statearr_34713_37017[(2)] = fc);

(statearr_34713_37017[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (8))){
var inst_34681 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34681)){
var statearr_34717_37018 = state_34692__$1;
(statearr_34717_37018[(1)] = (12));

} else {
var statearr_34718_37019 = state_34692__$1;
(statearr_34718_37019[(1)] = (13));

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
var statearr_34719 = [null,null,null,null,null,null,null,null,null];
(statearr_34719[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34719[(1)] = (1));

return statearr_34719;
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
}catch (e34720){if((e34720 instanceof Object)){
var ex__34210__auto__ = e34720;
var statearr_34721_37026 = state_34692;
(statearr_34721_37026[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37027 = state_34692;
state_34692 = G__37027;
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
(statearr_34722[(6)] = c__34274__auto___36999);

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
var statearr_34745_37032 = state_34743__$1;
(statearr_34745_37032[(2)] = inst_34739);

(statearr_34745_37032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (1))){
var inst_34723 = init;
var state_34743__$1 = (function (){var statearr_34746 = state_34743;
(statearr_34746[(7)] = inst_34723);

return statearr_34746;
})();
var statearr_34747_37033 = state_34743__$1;
(statearr_34747_37033[(2)] = null);

(statearr_34747_37033[(1)] = (2));


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
var statearr_34749_37039 = state_34743__$1;
(statearr_34749_37039[(1)] = (5));

} else {
var statearr_34750_37041 = state_34743__$1;
(statearr_34750_37041[(1)] = (6));

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
var statearr_34752_37045 = state_34743__$1;
(statearr_34752_37045[(1)] = (8));

} else {
var statearr_34753_37047 = state_34743__$1;
(statearr_34753_37047[(1)] = (9));

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
var state_34743__$1 = (function (){var statearr_34757 = state_34743;
(statearr_34757[(7)] = inst_34723);

return statearr_34757;
})();
var statearr_34758_37057 = state_34743__$1;
(statearr_34758_37057[(2)] = null);

(statearr_34758_37057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (5))){
var inst_34723 = (state_34743[(7)]);
var state_34743__$1 = state_34743;
var statearr_34762_37061 = state_34743__$1;
(statearr_34762_37061[(2)] = inst_34723);

(statearr_34762_37061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (10))){
var inst_34737 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34763_37062 = state_34743__$1;
(statearr_34763_37062[(2)] = inst_34737);

(statearr_34763_37062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (8))){
var inst_34730 = (state_34743[(9)]);
var inst_34733 = cljs.core.deref(inst_34730);
var state_34743__$1 = state_34743;
var statearr_34764_37065 = state_34743__$1;
(statearr_34764_37065[(2)] = inst_34733);

(statearr_34764_37065[(1)] = (10));


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
var statearr_34766 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34766[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34766[(1)] = (1));

return statearr_34766;
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
}catch (e34767){if((e34767 instanceof Object)){
var ex__34210__auto__ = e34767;
var statearr_34768_37073 = state_34743;
(statearr_34768_37073[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37076 = state_34743;
state_34743 = G__37076;
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
var state__34276__auto__ = (function (){var statearr_34769 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34769[(6)] = c__34274__auto__);

return statearr_34769;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34776){
var state_val_34777 = (state_34776[(1)]);
if((state_val_34777 === (1))){
var inst_34771 = cljs.core.async.reduce(f__$1,init,ch);
var state_34776__$1 = state_34776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34776__$1,(2),inst_34771);
} else {
if((state_val_34777 === (2))){
var inst_34773 = (state_34776[(2)]);
var inst_34774 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34773) : f__$1.call(null,inst_34773));
var state_34776__$1 = state_34776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34776__$1,inst_34774);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34783 = [null,null,null,null,null,null,null];
(statearr_34783[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34783[(1)] = (1));

return statearr_34783;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34776){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34776);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34784){if((e34784 instanceof Object)){
var ex__34210__auto__ = e34784;
var statearr_34785_37094 = state_34776;
(statearr_34785_37094[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37097 = state_34776;
state_34776 = G__37097;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34776){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34786 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34786[(6)] = c__34274__auto__);

return statearr_34786;
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
var G__34788 = arguments.length;
switch (G__34788) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34819){
var state_val_34820 = (state_34819[(1)]);
if((state_val_34820 === (7))){
var inst_34801 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34821_37108 = state_34819__$1;
(statearr_34821_37108[(2)] = inst_34801);

(statearr_34821_37108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (1))){
var inst_34792 = cljs.core.seq(coll);
var inst_34793 = inst_34792;
var state_34819__$1 = (function (){var statearr_34822 = state_34819;
(statearr_34822[(7)] = inst_34793);

return statearr_34822;
})();
var statearr_34823_37109 = state_34819__$1;
(statearr_34823_37109[(2)] = null);

(statearr_34823_37109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (4))){
var inst_34793 = (state_34819[(7)]);
var inst_34799 = cljs.core.first(inst_34793);
var state_34819__$1 = state_34819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34819__$1,(7),ch,inst_34799);
} else {
if((state_val_34820 === (13))){
var inst_34813 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34824_37118 = state_34819__$1;
(statearr_34824_37118[(2)] = inst_34813);

(statearr_34824_37118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (6))){
var inst_34804 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
if(cljs.core.truth_(inst_34804)){
var statearr_34825_37119 = state_34819__$1;
(statearr_34825_37119[(1)] = (8));

} else {
var statearr_34826_37120 = state_34819__$1;
(statearr_34826_37120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (3))){
var inst_34817 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34819__$1,inst_34817);
} else {
if((state_val_34820 === (12))){
var state_34819__$1 = state_34819;
var statearr_34827_37123 = state_34819__$1;
(statearr_34827_37123[(2)] = null);

(statearr_34827_37123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (2))){
var inst_34793 = (state_34819[(7)]);
var state_34819__$1 = state_34819;
if(cljs.core.truth_(inst_34793)){
var statearr_34828_37125 = state_34819__$1;
(statearr_34828_37125[(1)] = (4));

} else {
var statearr_34829_37126 = state_34819__$1;
(statearr_34829_37126[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (11))){
var inst_34810 = cljs.core.async.close_BANG_(ch);
var state_34819__$1 = state_34819;
var statearr_34830_37127 = state_34819__$1;
(statearr_34830_37127[(2)] = inst_34810);

(statearr_34830_37127[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (9))){
var state_34819__$1 = state_34819;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34831_37131 = state_34819__$1;
(statearr_34831_37131[(1)] = (11));

} else {
var statearr_34832_37132 = state_34819__$1;
(statearr_34832_37132[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (5))){
var inst_34793 = (state_34819[(7)]);
var state_34819__$1 = state_34819;
var statearr_34833_37134 = state_34819__$1;
(statearr_34833_37134[(2)] = inst_34793);

(statearr_34833_37134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (10))){
var inst_34815 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34834_37138 = state_34819__$1;
(statearr_34834_37138[(2)] = inst_34815);

(statearr_34834_37138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (8))){
var inst_34793 = (state_34819[(7)]);
var inst_34806 = cljs.core.next(inst_34793);
var inst_34793__$1 = inst_34806;
var state_34819__$1 = (function (){var statearr_34835 = state_34819;
(statearr_34835[(7)] = inst_34793__$1);

return statearr_34835;
})();
var statearr_34836_37139 = state_34819__$1;
(statearr_34836_37139[(2)] = null);

(statearr_34836_37139[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34819){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34819);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__34210__auto__ = e34838;
var statearr_34839_37147 = state_34819;
(statearr_34839_37147[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37149 = state_34819;
state_34819 = G__37149;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34819);
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
var c__34274__auto___37185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34998){
var state_val_35003 = (state_34998[(1)]);
if((state_val_35003 === (7))){
var inst_34992 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35006_37186 = state_34998__$1;
(statearr_35006_37186[(2)] = inst_34992);

(statearr_35006_37186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (20))){
var inst_34889 = (state_34998[(7)]);
var inst_34904 = cljs.core.first(inst_34889);
var inst_34905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34904,(0),null);
var inst_34907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34904,(1),null);
var state_34998__$1 = (function (){var statearr_35009 = state_34998;
(statearr_35009[(8)] = inst_34905);

return statearr_35009;
})();
if(cljs.core.truth_(inst_34907)){
var statearr_35010_37194 = state_34998__$1;
(statearr_35010_37194[(1)] = (22));

} else {
var statearr_35021_37195 = state_34998__$1;
(statearr_35021_37195[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (27))){
var inst_34857 = (state_34998[(9)]);
var inst_34936 = (state_34998[(10)]);
var inst_34943 = (state_34998[(11)]);
var inst_34938 = (state_34998[(12)]);
var inst_34943__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34936,inst_34938);
var inst_34944 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34943__$1,inst_34857,done);
var state_34998__$1 = (function (){var statearr_35027 = state_34998;
(statearr_35027[(11)] = inst_34943__$1);

return statearr_35027;
})();
if(cljs.core.truth_(inst_34944)){
var statearr_35030_37201 = state_34998__$1;
(statearr_35030_37201[(1)] = (30));

} else {
var statearr_35031_37203 = state_34998__$1;
(statearr_35031_37203[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (1))){
var state_34998__$1 = state_34998;
var statearr_35034_37205 = state_34998__$1;
(statearr_35034_37205[(2)] = null);

(statearr_35034_37205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (24))){
var inst_34889 = (state_34998[(7)]);
var inst_34913 = (state_34998[(2)]);
var inst_34914 = cljs.core.next(inst_34889);
var inst_34867 = inst_34914;
var inst_34868 = null;
var inst_34869 = (0);
var inst_34870 = (0);
var state_34998__$1 = (function (){var statearr_35036 = state_34998;
(statearr_35036[(13)] = inst_34869);

(statearr_35036[(14)] = inst_34870);

(statearr_35036[(15)] = inst_34913);

(statearr_35036[(16)] = inst_34868);

(statearr_35036[(17)] = inst_34867);

return statearr_35036;
})();
var statearr_35040_37213 = state_34998__$1;
(statearr_35040_37213[(2)] = null);

(statearr_35040_37213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (39))){
var state_34998__$1 = state_34998;
var statearr_35053_37216 = state_34998__$1;
(statearr_35053_37216[(2)] = null);

(statearr_35053_37216[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (4))){
var inst_34857 = (state_34998[(9)]);
var inst_34857__$1 = (state_34998[(2)]);
var inst_34858 = (inst_34857__$1 == null);
var state_34998__$1 = (function (){var statearr_35059 = state_34998;
(statearr_35059[(9)] = inst_34857__$1);

return statearr_35059;
})();
if(cljs.core.truth_(inst_34858)){
var statearr_35063_37218 = state_34998__$1;
(statearr_35063_37218[(1)] = (5));

} else {
var statearr_35065_37221 = state_34998__$1;
(statearr_35065_37221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (15))){
var inst_34869 = (state_34998[(13)]);
var inst_34870 = (state_34998[(14)]);
var inst_34868 = (state_34998[(16)]);
var inst_34867 = (state_34998[(17)]);
var inst_34885 = (state_34998[(2)]);
var inst_34886 = (inst_34870 + (1));
var tmp35046 = inst_34869;
var tmp35047 = inst_34868;
var tmp35048 = inst_34867;
var inst_34867__$1 = tmp35048;
var inst_34868__$1 = tmp35047;
var inst_34869__$1 = tmp35046;
var inst_34870__$1 = inst_34886;
var state_34998__$1 = (function (){var statearr_35073 = state_34998;
(statearr_35073[(13)] = inst_34869__$1);

(statearr_35073[(18)] = inst_34885);

(statearr_35073[(14)] = inst_34870__$1);

(statearr_35073[(16)] = inst_34868__$1);

(statearr_35073[(17)] = inst_34867__$1);

return statearr_35073;
})();
var statearr_35078_37232 = state_34998__$1;
(statearr_35078_37232[(2)] = null);

(statearr_35078_37232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (21))){
var inst_34917 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35087_37235 = state_34998__$1;
(statearr_35087_37235[(2)] = inst_34917);

(statearr_35087_37235[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (31))){
var inst_34943 = (state_34998[(11)]);
var inst_34947 = done(null);
var inst_34949 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34943);
var state_34998__$1 = (function (){var statearr_35095 = state_34998;
(statearr_35095[(19)] = inst_34947);

return statearr_35095;
})();
var statearr_35097_37238 = state_34998__$1;
(statearr_35097_37238[(2)] = inst_34949);

(statearr_35097_37238[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (32))){
var inst_34937 = (state_34998[(20)]);
var inst_34935 = (state_34998[(21)]);
var inst_34936 = (state_34998[(10)]);
var inst_34938 = (state_34998[(12)]);
var inst_34951 = (state_34998[(2)]);
var inst_34952 = (inst_34938 + (1));
var tmp35082 = inst_34937;
var tmp35083 = inst_34935;
var tmp35084 = inst_34936;
var inst_34935__$1 = tmp35083;
var inst_34936__$1 = tmp35084;
var inst_34937__$1 = tmp35082;
var inst_34938__$1 = inst_34952;
var state_34998__$1 = (function (){var statearr_35114 = state_34998;
(statearr_35114[(22)] = inst_34951);

(statearr_35114[(20)] = inst_34937__$1);

(statearr_35114[(21)] = inst_34935__$1);

(statearr_35114[(10)] = inst_34936__$1);

(statearr_35114[(12)] = inst_34938__$1);

return statearr_35114;
})();
var statearr_35120_37241 = state_34998__$1;
(statearr_35120_37241[(2)] = null);

(statearr_35120_37241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (40))){
var inst_34964 = (state_34998[(23)]);
var inst_34968 = done(null);
var inst_34969 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34964);
var state_34998__$1 = (function (){var statearr_35127 = state_34998;
(statearr_35127[(24)] = inst_34968);

return statearr_35127;
})();
var statearr_35131_37246 = state_34998__$1;
(statearr_35131_37246[(2)] = inst_34969);

(statearr_35131_37246[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (33))){
var inst_34955 = (state_34998[(25)]);
var inst_34957 = cljs.core.chunked_seq_QMARK_(inst_34955);
var state_34998__$1 = state_34998;
if(inst_34957){
var statearr_35134_37248 = state_34998__$1;
(statearr_35134_37248[(1)] = (36));

} else {
var statearr_35135_37249 = state_34998__$1;
(statearr_35135_37249[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (13))){
var inst_34879 = (state_34998[(26)]);
var inst_34882 = cljs.core.async.close_BANG_(inst_34879);
var state_34998__$1 = state_34998;
var statearr_35136_37251 = state_34998__$1;
(statearr_35136_37251[(2)] = inst_34882);

(statearr_35136_37251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (22))){
var inst_34905 = (state_34998[(8)]);
var inst_34910 = cljs.core.async.close_BANG_(inst_34905);
var state_34998__$1 = state_34998;
var statearr_35137_37255 = state_34998__$1;
(statearr_35137_37255[(2)] = inst_34910);

(statearr_35137_37255[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (36))){
var inst_34955 = (state_34998[(25)]);
var inst_34959 = cljs.core.chunk_first(inst_34955);
var inst_34960 = cljs.core.chunk_rest(inst_34955);
var inst_34961 = cljs.core.count(inst_34959);
var inst_34935 = inst_34960;
var inst_34936 = inst_34959;
var inst_34937 = inst_34961;
var inst_34938 = (0);
var state_34998__$1 = (function (){var statearr_35140 = state_34998;
(statearr_35140[(20)] = inst_34937);

(statearr_35140[(21)] = inst_34935);

(statearr_35140[(10)] = inst_34936);

(statearr_35140[(12)] = inst_34938);

return statearr_35140;
})();
var statearr_35141_37258 = state_34998__$1;
(statearr_35141_37258[(2)] = null);

(statearr_35141_37258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (41))){
var inst_34955 = (state_34998[(25)]);
var inst_34971 = (state_34998[(2)]);
var inst_34972 = cljs.core.next(inst_34955);
var inst_34935 = inst_34972;
var inst_34936 = null;
var inst_34937 = (0);
var inst_34938 = (0);
var state_34998__$1 = (function (){var statearr_35144 = state_34998;
(statearr_35144[(27)] = inst_34971);

(statearr_35144[(20)] = inst_34937);

(statearr_35144[(21)] = inst_34935);

(statearr_35144[(10)] = inst_34936);

(statearr_35144[(12)] = inst_34938);

return statearr_35144;
})();
var statearr_35145_37264 = state_34998__$1;
(statearr_35145_37264[(2)] = null);

(statearr_35145_37264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (43))){
var state_34998__$1 = state_34998;
var statearr_35167_37268 = state_34998__$1;
(statearr_35167_37268[(2)] = null);

(statearr_35167_37268[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (29))){
var inst_34980 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35170_37270 = state_34998__$1;
(statearr_35170_37270[(2)] = inst_34980);

(statearr_35170_37270[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (44))){
var inst_34989 = (state_34998[(2)]);
var state_34998__$1 = (function (){var statearr_35173 = state_34998;
(statearr_35173[(28)] = inst_34989);

return statearr_35173;
})();
var statearr_35174_37274 = state_34998__$1;
(statearr_35174_37274[(2)] = null);

(statearr_35174_37274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (6))){
var inst_34927 = (state_34998[(29)]);
var inst_34926 = cljs.core.deref(cs);
var inst_34927__$1 = cljs.core.keys(inst_34926);
var inst_34928 = cljs.core.count(inst_34927__$1);
var inst_34929 = cljs.core.reset_BANG_(dctr,inst_34928);
var inst_34934 = cljs.core.seq(inst_34927__$1);
var inst_34935 = inst_34934;
var inst_34936 = null;
var inst_34937 = (0);
var inst_34938 = (0);
var state_34998__$1 = (function (){var statearr_35177 = state_34998;
(statearr_35177[(30)] = inst_34929);

(statearr_35177[(29)] = inst_34927__$1);

(statearr_35177[(20)] = inst_34937);

(statearr_35177[(21)] = inst_34935);

(statearr_35177[(10)] = inst_34936);

(statearr_35177[(12)] = inst_34938);

return statearr_35177;
})();
var statearr_35179_37283 = state_34998__$1;
(statearr_35179_37283[(2)] = null);

(statearr_35179_37283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (28))){
var inst_34955 = (state_34998[(25)]);
var inst_34935 = (state_34998[(21)]);
var inst_34955__$1 = cljs.core.seq(inst_34935);
var state_34998__$1 = (function (){var statearr_35185 = state_34998;
(statearr_35185[(25)] = inst_34955__$1);

return statearr_35185;
})();
if(inst_34955__$1){
var statearr_35188_37288 = state_34998__$1;
(statearr_35188_37288[(1)] = (33));

} else {
var statearr_35190_37290 = state_34998__$1;
(statearr_35190_37290[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (25))){
var inst_34937 = (state_34998[(20)]);
var inst_34938 = (state_34998[(12)]);
var inst_34940 = (inst_34938 < inst_34937);
var inst_34941 = inst_34940;
var state_34998__$1 = state_34998;
if(cljs.core.truth_(inst_34941)){
var statearr_35196_37294 = state_34998__$1;
(statearr_35196_37294[(1)] = (27));

} else {
var statearr_35198_37295 = state_34998__$1;
(statearr_35198_37295[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (34))){
var state_34998__$1 = state_34998;
var statearr_35217_37297 = state_34998__$1;
(statearr_35217_37297[(2)] = null);

(statearr_35217_37297[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (17))){
var state_34998__$1 = state_34998;
var statearr_35222_37301 = state_34998__$1;
(statearr_35222_37301[(2)] = null);

(statearr_35222_37301[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (3))){
var inst_34994 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34998__$1,inst_34994);
} else {
if((state_val_35003 === (12))){
var inst_34922 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35232_37306 = state_34998__$1;
(statearr_35232_37306[(2)] = inst_34922);

(statearr_35232_37306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (2))){
var state_34998__$1 = state_34998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34998__$1,(4),ch);
} else {
if((state_val_35003 === (23))){
var state_34998__$1 = state_34998;
var statearr_35239_37311 = state_34998__$1;
(statearr_35239_37311[(2)] = null);

(statearr_35239_37311[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (35))){
var inst_34978 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35245_37312 = state_34998__$1;
(statearr_35245_37312[(2)] = inst_34978);

(statearr_35245_37312[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (19))){
var inst_34889 = (state_34998[(7)]);
var inst_34895 = cljs.core.chunk_first(inst_34889);
var inst_34896 = cljs.core.chunk_rest(inst_34889);
var inst_34897 = cljs.core.count(inst_34895);
var inst_34867 = inst_34896;
var inst_34868 = inst_34895;
var inst_34869 = inst_34897;
var inst_34870 = (0);
var state_34998__$1 = (function (){var statearr_35254 = state_34998;
(statearr_35254[(13)] = inst_34869);

(statearr_35254[(14)] = inst_34870);

(statearr_35254[(16)] = inst_34868);

(statearr_35254[(17)] = inst_34867);

return statearr_35254;
})();
var statearr_35260_37315 = state_34998__$1;
(statearr_35260_37315[(2)] = null);

(statearr_35260_37315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (11))){
var inst_34889 = (state_34998[(7)]);
var inst_34867 = (state_34998[(17)]);
var inst_34889__$1 = cljs.core.seq(inst_34867);
var state_34998__$1 = (function (){var statearr_35265 = state_34998;
(statearr_35265[(7)] = inst_34889__$1);

return statearr_35265;
})();
if(inst_34889__$1){
var statearr_35268_37318 = state_34998__$1;
(statearr_35268_37318[(1)] = (16));

} else {
var statearr_35271_37320 = state_34998__$1;
(statearr_35271_37320[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (9))){
var inst_34924 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35275_37322 = state_34998__$1;
(statearr_35275_37322[(2)] = inst_34924);

(statearr_35275_37322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (5))){
var inst_34865 = cljs.core.deref(cs);
var inst_34866 = cljs.core.seq(inst_34865);
var inst_34867 = inst_34866;
var inst_34868 = null;
var inst_34869 = (0);
var inst_34870 = (0);
var state_34998__$1 = (function (){var statearr_35282 = state_34998;
(statearr_35282[(13)] = inst_34869);

(statearr_35282[(14)] = inst_34870);

(statearr_35282[(16)] = inst_34868);

(statearr_35282[(17)] = inst_34867);

return statearr_35282;
})();
var statearr_35288_37323 = state_34998__$1;
(statearr_35288_37323[(2)] = null);

(statearr_35288_37323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (14))){
var state_34998__$1 = state_34998;
var statearr_35293_37324 = state_34998__$1;
(statearr_35293_37324[(2)] = null);

(statearr_35293_37324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (45))){
var inst_34986 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35299_37326 = state_34998__$1;
(statearr_35299_37326[(2)] = inst_34986);

(statearr_35299_37326[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (26))){
var inst_34927 = (state_34998[(29)]);
var inst_34982 = (state_34998[(2)]);
var inst_34983 = cljs.core.seq(inst_34927);
var state_34998__$1 = (function (){var statearr_35306 = state_34998;
(statearr_35306[(31)] = inst_34982);

return statearr_35306;
})();
if(inst_34983){
var statearr_35308_37330 = state_34998__$1;
(statearr_35308_37330[(1)] = (42));

} else {
var statearr_35311_37333 = state_34998__$1;
(statearr_35311_37333[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (16))){
var inst_34889 = (state_34998[(7)]);
var inst_34891 = cljs.core.chunked_seq_QMARK_(inst_34889);
var state_34998__$1 = state_34998;
if(inst_34891){
var statearr_35315_37337 = state_34998__$1;
(statearr_35315_37337[(1)] = (19));

} else {
var statearr_35317_37338 = state_34998__$1;
(statearr_35317_37338[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (38))){
var inst_34975 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35324_37341 = state_34998__$1;
(statearr_35324_37341[(2)] = inst_34975);

(statearr_35324_37341[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (30))){
var state_34998__$1 = state_34998;
var statearr_35332_37344 = state_34998__$1;
(statearr_35332_37344[(2)] = null);

(statearr_35332_37344[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (10))){
var inst_34870 = (state_34998[(14)]);
var inst_34868 = (state_34998[(16)]);
var inst_34878 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34868,inst_34870);
var inst_34879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34878,(0),null);
var inst_34880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34878,(1),null);
var state_34998__$1 = (function (){var statearr_35341 = state_34998;
(statearr_35341[(26)] = inst_34879);

return statearr_35341;
})();
if(cljs.core.truth_(inst_34880)){
var statearr_35345_37351 = state_34998__$1;
(statearr_35345_37351[(1)] = (13));

} else {
var statearr_35346_37353 = state_34998__$1;
(statearr_35346_37353[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (18))){
var inst_34920 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35347_37357 = state_34998__$1;
(statearr_35347_37357[(2)] = inst_34920);

(statearr_35347_37357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (42))){
var state_34998__$1 = state_34998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34998__$1,(45),dchan);
} else {
if((state_val_35003 === (37))){
var inst_34857 = (state_34998[(9)]);
var inst_34964 = (state_34998[(23)]);
var inst_34955 = (state_34998[(25)]);
var inst_34964__$1 = cljs.core.first(inst_34955);
var inst_34965 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34964__$1,inst_34857,done);
var state_34998__$1 = (function (){var statearr_35348 = state_34998;
(statearr_35348[(23)] = inst_34964__$1);

return statearr_35348;
})();
if(cljs.core.truth_(inst_34965)){
var statearr_35349_37363 = state_34998__$1;
(statearr_35349_37363[(1)] = (39));

} else {
var statearr_35350_37364 = state_34998__$1;
(statearr_35350_37364[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35003 === (8))){
var inst_34869 = (state_34998[(13)]);
var inst_34870 = (state_34998[(14)]);
var inst_34872 = (inst_34870 < inst_34869);
var inst_34873 = inst_34872;
var state_34998__$1 = state_34998;
if(cljs.core.truth_(inst_34873)){
var statearr_35351_37369 = state_34998__$1;
(statearr_35351_37369[(1)] = (10));

} else {
var statearr_35352_37372 = state_34998__$1;
(statearr_35352_37372[(1)] = (11));

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
var statearr_35355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35355[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35355[(1)] = (1));

return statearr_35355;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34998){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34998);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35356){if((e35356 instanceof Object)){
var ex__34210__auto__ = e35356;
var statearr_35357_37378 = state_34998;
(statearr_35357_37378[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35356;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37382 = state_34998;
state_34998 = G__37382;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34998){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35359 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35359[(6)] = c__34274__auto___37185);

return statearr_35359;
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
var G__35367 = arguments.length;
switch (G__35367) {
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
var len__4789__auto___37421 = arguments.length;
var i__4790__auto___37422 = (0);
while(true){
if((i__4790__auto___37422 < len__4789__auto___37421)){
args__4795__auto__.push((arguments[i__4790__auto___37422]));

var G__37423 = (i__4790__auto___37422 + (1));
i__4790__auto___37422 = G__37423;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35456){
var map__35459 = p__35456;
var map__35459__$1 = (((((!((map__35459 == null))))?(((((map__35459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35459):map__35459);
var opts = map__35459__$1;
var statearr_35469_37431 = state;
(statearr_35469_37431[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35475_37432 = state;
(statearr_35475_37432[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35480_37434 = state;
(statearr_35480_37434[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35444){
var G__35445 = cljs.core.first(seq35444);
var seq35444__$1 = cljs.core.next(seq35444);
var G__35446 = cljs.core.first(seq35444__$1);
var seq35444__$2 = cljs.core.next(seq35444__$1);
var G__35447 = cljs.core.first(seq35444__$2);
var seq35444__$3 = cljs.core.next(seq35444__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35445,G__35446,G__35447,seq35444__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35540 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35541){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35541 = meta35541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35542,meta35541__$1){
var self__ = this;
var _35542__$1 = this;
return (new cljs.core.async.t_cljs$core$async35540(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35541__$1));
}));

(cljs.core.async.t_cljs$core$async35540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35542){
var self__ = this;
var _35542__$1 = this;
return self__.meta35541;
}));

(cljs.core.async.t_cljs$core$async35540.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35540.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35540.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35540.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35540.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35540.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35540.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35540.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35541","meta35541",-1947604363,null)], null);
}));

(cljs.core.async.t_cljs$core$async35540.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35540");

(cljs.core.async.t_cljs$core$async35540.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35540");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35540.
 */
cljs.core.async.__GT_t_cljs$core$async35540 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35540(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35541){
return (new cljs.core.async.t_cljs$core$async35540(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35541));
});

}

return (new cljs.core.async.t_cljs$core$async35540(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35687){
var state_val_35689 = (state_35687[(1)]);
if((state_val_35689 === (7))){
var inst_35592 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35693_37478 = state_35687__$1;
(statearr_35693_37478[(2)] = inst_35592);

(statearr_35693_37478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (20))){
var inst_35604 = (state_35687[(7)]);
var state_35687__$1 = state_35687;
var statearr_35696_37485 = state_35687__$1;
(statearr_35696_37485[(2)] = inst_35604);

(statearr_35696_37485[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (27))){
var state_35687__$1 = state_35687;
var statearr_35698_37488 = state_35687__$1;
(statearr_35698_37488[(2)] = null);

(statearr_35698_37488[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (1))){
var inst_35577 = (state_35687[(8)]);
var inst_35577__$1 = calc_state();
var inst_35581 = (inst_35577__$1 == null);
var inst_35582 = cljs.core.not(inst_35581);
var state_35687__$1 = (function (){var statearr_35700 = state_35687;
(statearr_35700[(8)] = inst_35577__$1);

return statearr_35700;
})();
if(inst_35582){
var statearr_35701_37490 = state_35687__$1;
(statearr_35701_37490[(1)] = (2));

} else {
var statearr_35702_37491 = state_35687__$1;
(statearr_35702_37491[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (24))){
var inst_35659 = (state_35687[(9)]);
var inst_35641 = (state_35687[(10)]);
var inst_35630 = (state_35687[(11)]);
var inst_35659__$1 = (inst_35630.cljs$core$IFn$_invoke$arity$1 ? inst_35630.cljs$core$IFn$_invoke$arity$1(inst_35641) : inst_35630.call(null,inst_35641));
var state_35687__$1 = (function (){var statearr_35704 = state_35687;
(statearr_35704[(9)] = inst_35659__$1);

return statearr_35704;
})();
if(cljs.core.truth_(inst_35659__$1)){
var statearr_35705_37502 = state_35687__$1;
(statearr_35705_37502[(1)] = (29));

} else {
var statearr_35706_37504 = state_35687__$1;
(statearr_35706_37504[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (4))){
var inst_35595 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35595)){
var statearr_35708_37507 = state_35687__$1;
(statearr_35708_37507[(1)] = (8));

} else {
var statearr_35709_37508 = state_35687__$1;
(statearr_35709_37508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (15))){
var inst_35624 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35624)){
var statearr_35711_37510 = state_35687__$1;
(statearr_35711_37510[(1)] = (19));

} else {
var statearr_35712_37511 = state_35687__$1;
(statearr_35712_37511[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (21))){
var inst_35629 = (state_35687[(12)]);
var inst_35629__$1 = (state_35687[(2)]);
var inst_35630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35629__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35629__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35629__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35687__$1 = (function (){var statearr_35714 = state_35687;
(statearr_35714[(12)] = inst_35629__$1);

(statearr_35714[(11)] = inst_35630);

(statearr_35714[(13)] = inst_35631);

return statearr_35714;
})();
return cljs.core.async.ioc_alts_BANG_(state_35687__$1,(22),inst_35632);
} else {
if((state_val_35689 === (31))){
var inst_35667 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35667)){
var statearr_35715_37520 = state_35687__$1;
(statearr_35715_37520[(1)] = (32));

} else {
var statearr_35717_37521 = state_35687__$1;
(statearr_35717_37521[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (32))){
var inst_35640 = (state_35687[(14)]);
var state_35687__$1 = state_35687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35687__$1,(35),out,inst_35640);
} else {
if((state_val_35689 === (33))){
var inst_35629 = (state_35687[(12)]);
var inst_35604 = inst_35629;
var state_35687__$1 = (function (){var statearr_35723 = state_35687;
(statearr_35723[(7)] = inst_35604);

return statearr_35723;
})();
var statearr_35724_37529 = state_35687__$1;
(statearr_35724_37529[(2)] = null);

(statearr_35724_37529[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (13))){
var inst_35604 = (state_35687[(7)]);
var inst_35613 = inst_35604.cljs$lang$protocol_mask$partition0$;
var inst_35614 = (inst_35613 & (64));
var inst_35615 = inst_35604.cljs$core$ISeq$;
var inst_35616 = (cljs.core.PROTOCOL_SENTINEL === inst_35615);
var inst_35617 = ((inst_35614) || (inst_35616));
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35617)){
var statearr_35727_37533 = state_35687__$1;
(statearr_35727_37533[(1)] = (16));

} else {
var statearr_35730_37534 = state_35687__$1;
(statearr_35730_37534[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (22))){
var inst_35641 = (state_35687[(10)]);
var inst_35640 = (state_35687[(14)]);
var inst_35639 = (state_35687[(2)]);
var inst_35640__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35639,(0),null);
var inst_35641__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35639,(1),null);
var inst_35642 = (inst_35640__$1 == null);
var inst_35643 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35641__$1,change);
var inst_35644 = ((inst_35642) || (inst_35643));
var state_35687__$1 = (function (){var statearr_35732 = state_35687;
(statearr_35732[(10)] = inst_35641__$1);

(statearr_35732[(14)] = inst_35640__$1);

return statearr_35732;
})();
if(cljs.core.truth_(inst_35644)){
var statearr_35738_37541 = state_35687__$1;
(statearr_35738_37541[(1)] = (23));

} else {
var statearr_35740_37543 = state_35687__$1;
(statearr_35740_37543[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (36))){
var inst_35629 = (state_35687[(12)]);
var inst_35604 = inst_35629;
var state_35687__$1 = (function (){var statearr_35746 = state_35687;
(statearr_35746[(7)] = inst_35604);

return statearr_35746;
})();
var statearr_35748_37549 = state_35687__$1;
(statearr_35748_37549[(2)] = null);

(statearr_35748_37549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (29))){
var inst_35659 = (state_35687[(9)]);
var state_35687__$1 = state_35687;
var statearr_35755_37551 = state_35687__$1;
(statearr_35755_37551[(2)] = inst_35659);

(statearr_35755_37551[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (6))){
var state_35687__$1 = state_35687;
var statearr_35756_37553 = state_35687__$1;
(statearr_35756_37553[(2)] = false);

(statearr_35756_37553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (28))){
var inst_35655 = (state_35687[(2)]);
var inst_35656 = calc_state();
var inst_35604 = inst_35656;
var state_35687__$1 = (function (){var statearr_35757 = state_35687;
(statearr_35757[(15)] = inst_35655);

(statearr_35757[(7)] = inst_35604);

return statearr_35757;
})();
var statearr_35760_37560 = state_35687__$1;
(statearr_35760_37560[(2)] = null);

(statearr_35760_37560[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (25))){
var inst_35681 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35763_37562 = state_35687__$1;
(statearr_35763_37562[(2)] = inst_35681);

(statearr_35763_37562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (34))){
var inst_35679 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35765_37564 = state_35687__$1;
(statearr_35765_37564[(2)] = inst_35679);

(statearr_35765_37564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (17))){
var state_35687__$1 = state_35687;
var statearr_35766_37570 = state_35687__$1;
(statearr_35766_37570[(2)] = false);

(statearr_35766_37570[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (3))){
var state_35687__$1 = state_35687;
var statearr_35769_37575 = state_35687__$1;
(statearr_35769_37575[(2)] = false);

(statearr_35769_37575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (12))){
var inst_35683 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35687__$1,inst_35683);
} else {
if((state_val_35689 === (2))){
var inst_35577 = (state_35687[(8)]);
var inst_35584 = inst_35577.cljs$lang$protocol_mask$partition0$;
var inst_35585 = (inst_35584 & (64));
var inst_35586 = inst_35577.cljs$core$ISeq$;
var inst_35587 = (cljs.core.PROTOCOL_SENTINEL === inst_35586);
var inst_35588 = ((inst_35585) || (inst_35587));
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35588)){
var statearr_35772_37580 = state_35687__$1;
(statearr_35772_37580[(1)] = (5));

} else {
var statearr_35773_37581 = state_35687__$1;
(statearr_35773_37581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (23))){
var inst_35640 = (state_35687[(14)]);
var inst_35647 = (inst_35640 == null);
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35647)){
var statearr_35776_37586 = state_35687__$1;
(statearr_35776_37586[(1)] = (26));

} else {
var statearr_35777_37589 = state_35687__$1;
(statearr_35777_37589[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (35))){
var inst_35670 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
if(cljs.core.truth_(inst_35670)){
var statearr_35779_37592 = state_35687__$1;
(statearr_35779_37592[(1)] = (36));

} else {
var statearr_35780_37593 = state_35687__$1;
(statearr_35780_37593[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (19))){
var inst_35604 = (state_35687[(7)]);
var inst_35626 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35604);
var state_35687__$1 = state_35687;
var statearr_35782_37595 = state_35687__$1;
(statearr_35782_37595[(2)] = inst_35626);

(statearr_35782_37595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (11))){
var inst_35604 = (state_35687[(7)]);
var inst_35608 = (inst_35604 == null);
var inst_35609 = cljs.core.not(inst_35608);
var state_35687__$1 = state_35687;
if(inst_35609){
var statearr_35783_37601 = state_35687__$1;
(statearr_35783_37601[(1)] = (13));

} else {
var statearr_35784_37606 = state_35687__$1;
(statearr_35784_37606[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (9))){
var inst_35577 = (state_35687[(8)]);
var state_35687__$1 = state_35687;
var statearr_35785_37609 = state_35687__$1;
(statearr_35785_37609[(2)] = inst_35577);

(statearr_35785_37609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (5))){
var state_35687__$1 = state_35687;
var statearr_35788_37610 = state_35687__$1;
(statearr_35788_37610[(2)] = true);

(statearr_35788_37610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (14))){
var state_35687__$1 = state_35687;
var statearr_35792_37612 = state_35687__$1;
(statearr_35792_37612[(2)] = false);

(statearr_35792_37612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (26))){
var inst_35641 = (state_35687[(10)]);
var inst_35652 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35641);
var state_35687__$1 = state_35687;
var statearr_35794_37614 = state_35687__$1;
(statearr_35794_37614[(2)] = inst_35652);

(statearr_35794_37614[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (16))){
var state_35687__$1 = state_35687;
var statearr_35797_37620 = state_35687__$1;
(statearr_35797_37620[(2)] = true);

(statearr_35797_37620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (38))){
var inst_35675 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35799_37624 = state_35687__$1;
(statearr_35799_37624[(2)] = inst_35675);

(statearr_35799_37624[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (30))){
var inst_35641 = (state_35687[(10)]);
var inst_35630 = (state_35687[(11)]);
var inst_35631 = (state_35687[(13)]);
var inst_35662 = cljs.core.empty_QMARK_(inst_35630);
var inst_35663 = (inst_35631.cljs$core$IFn$_invoke$arity$1 ? inst_35631.cljs$core$IFn$_invoke$arity$1(inst_35641) : inst_35631.call(null,inst_35641));
var inst_35664 = cljs.core.not(inst_35663);
var inst_35665 = ((inst_35662) && (inst_35664));
var state_35687__$1 = state_35687;
var statearr_35805_37626 = state_35687__$1;
(statearr_35805_37626[(2)] = inst_35665);

(statearr_35805_37626[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (10))){
var inst_35577 = (state_35687[(8)]);
var inst_35600 = (state_35687[(2)]);
var inst_35601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35604 = inst_35577;
var state_35687__$1 = (function (){var statearr_35810 = state_35687;
(statearr_35810[(16)] = inst_35602);

(statearr_35810[(17)] = inst_35601);

(statearr_35810[(18)] = inst_35603);

(statearr_35810[(7)] = inst_35604);

return statearr_35810;
})();
var statearr_35811_37639 = state_35687__$1;
(statearr_35811_37639[(2)] = null);

(statearr_35811_37639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (18))){
var inst_35621 = (state_35687[(2)]);
var state_35687__$1 = state_35687;
var statearr_35814_37641 = state_35687__$1;
(statearr_35814_37641[(2)] = inst_35621);

(statearr_35814_37641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (37))){
var state_35687__$1 = state_35687;
var statearr_35816_37646 = state_35687__$1;
(statearr_35816_37646[(2)] = null);

(statearr_35816_37646[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (8))){
var inst_35577 = (state_35687[(8)]);
var inst_35597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35577);
var state_35687__$1 = state_35687;
var statearr_35817_37651 = state_35687__$1;
(statearr_35817_37651[(2)] = inst_35597);

(statearr_35817_37651[(1)] = (10));


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
var statearr_35822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35822[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35822[(1)] = (1));

return statearr_35822;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35687){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35687);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35823){if((e35823 instanceof Object)){
var ex__34210__auto__ = e35823;
var statearr_35826_37663 = state_35687;
(statearr_35826_37663[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35823;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37665 = state_35687;
state_35687 = G__37665;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35687){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35829 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35829[(6)] = c__34274__auto___37472);

return statearr_35829;
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
var G__35860 = arguments.length;
switch (G__35860) {
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
var G__35884 = arguments.length;
switch (G__35884) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35878_SHARP_){
if(cljs.core.truth_((p1__35878_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35878_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35878_SHARP_.call(null,topic)))){
return p1__35878_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35878_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35890 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35891){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35891 = meta35891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35892,meta35891__$1){
var self__ = this;
var _35892__$1 = this;
return (new cljs.core.async.t_cljs$core$async35890(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35891__$1));
}));

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35892){
var self__ = this;
var _35892__$1 = this;
return self__.meta35891;
}));

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35890.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35891","meta35891",-266876071,null)], null);
}));

(cljs.core.async.t_cljs$core$async35890.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35890");

(cljs.core.async.t_cljs$core$async35890.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35890");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35890.
 */
cljs.core.async.__GT_t_cljs$core$async35890 = (function cljs$core$async$__GT_t_cljs$core$async35890(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35891){
return (new cljs.core.async.t_cljs$core$async35890(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35891));
});

}

return (new cljs.core.async.t_cljs$core$async35890(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36003){
var state_val_36004 = (state_36003[(1)]);
if((state_val_36004 === (7))){
var inst_35996 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
var statearr_36005_37726 = state_36003__$1;
(statearr_36005_37726[(2)] = inst_35996);

(statearr_36005_37726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (20))){
var state_36003__$1 = state_36003;
var statearr_36006_37728 = state_36003__$1;
(statearr_36006_37728[(2)] = null);

(statearr_36006_37728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (1))){
var state_36003__$1 = state_36003;
var statearr_36007_37732 = state_36003__$1;
(statearr_36007_37732[(2)] = null);

(statearr_36007_37732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (24))){
var inst_35978 = (state_36003[(7)]);
var inst_35987 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35978);
var state_36003__$1 = state_36003;
var statearr_36008_37738 = state_36003__$1;
(statearr_36008_37738[(2)] = inst_35987);

(statearr_36008_37738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (4))){
var inst_35926 = (state_36003[(8)]);
var inst_35926__$1 = (state_36003[(2)]);
var inst_35927 = (inst_35926__$1 == null);
var state_36003__$1 = (function (){var statearr_36009 = state_36003;
(statearr_36009[(8)] = inst_35926__$1);

return statearr_36009;
})();
if(cljs.core.truth_(inst_35927)){
var statearr_36010_37742 = state_36003__$1;
(statearr_36010_37742[(1)] = (5));

} else {
var statearr_36011_37744 = state_36003__$1;
(statearr_36011_37744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (15))){
var inst_35972 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
var statearr_36012_37745 = state_36003__$1;
(statearr_36012_37745[(2)] = inst_35972);

(statearr_36012_37745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (21))){
var inst_35992 = (state_36003[(2)]);
var state_36003__$1 = (function (){var statearr_36013 = state_36003;
(statearr_36013[(9)] = inst_35992);

return statearr_36013;
})();
var statearr_36014_37747 = state_36003__$1;
(statearr_36014_37747[(2)] = null);

(statearr_36014_37747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (13))){
var inst_35954 = (state_36003[(10)]);
var inst_35956 = cljs.core.chunked_seq_QMARK_(inst_35954);
var state_36003__$1 = state_36003;
if(inst_35956){
var statearr_36015_37751 = state_36003__$1;
(statearr_36015_37751[(1)] = (16));

} else {
var statearr_36016_37753 = state_36003__$1;
(statearr_36016_37753[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (22))){
var inst_35984 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
if(cljs.core.truth_(inst_35984)){
var statearr_36017_37754 = state_36003__$1;
(statearr_36017_37754[(1)] = (23));

} else {
var statearr_36019_37757 = state_36003__$1;
(statearr_36019_37757[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (6))){
var inst_35926 = (state_36003[(8)]);
var inst_35978 = (state_36003[(7)]);
var inst_35980 = (state_36003[(11)]);
var inst_35978__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35926) : topic_fn.call(null,inst_35926));
var inst_35979 = cljs.core.deref(mults);
var inst_35980__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35979,inst_35978__$1);
var state_36003__$1 = (function (){var statearr_36020 = state_36003;
(statearr_36020[(7)] = inst_35978__$1);

(statearr_36020[(11)] = inst_35980__$1);

return statearr_36020;
})();
if(cljs.core.truth_(inst_35980__$1)){
var statearr_36021_37766 = state_36003__$1;
(statearr_36021_37766[(1)] = (19));

} else {
var statearr_36023_37767 = state_36003__$1;
(statearr_36023_37767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (25))){
var inst_35989 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
var statearr_36024_37769 = state_36003__$1;
(statearr_36024_37769[(2)] = inst_35989);

(statearr_36024_37769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (17))){
var inst_35954 = (state_36003[(10)]);
var inst_35963 = cljs.core.first(inst_35954);
var inst_35964 = cljs.core.async.muxch_STAR_(inst_35963);
var inst_35965 = cljs.core.async.close_BANG_(inst_35964);
var inst_35966 = cljs.core.next(inst_35954);
var inst_35938 = inst_35966;
var inst_35939 = null;
var inst_35940 = (0);
var inst_35941 = (0);
var state_36003__$1 = (function (){var statearr_36025 = state_36003;
(statearr_36025[(12)] = inst_35940);

(statearr_36025[(13)] = inst_35938);

(statearr_36025[(14)] = inst_35965);

(statearr_36025[(15)] = inst_35941);

(statearr_36025[(16)] = inst_35939);

return statearr_36025;
})();
var statearr_36029_37778 = state_36003__$1;
(statearr_36029_37778[(2)] = null);

(statearr_36029_37778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (3))){
var inst_35998 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36003__$1,inst_35998);
} else {
if((state_val_36004 === (12))){
var inst_35974 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
var statearr_36031_37785 = state_36003__$1;
(statearr_36031_37785[(2)] = inst_35974);

(statearr_36031_37785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (2))){
var state_36003__$1 = state_36003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36003__$1,(4),ch);
} else {
if((state_val_36004 === (23))){
var state_36003__$1 = state_36003;
var statearr_36035_37788 = state_36003__$1;
(statearr_36035_37788[(2)] = null);

(statearr_36035_37788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (19))){
var inst_35926 = (state_36003[(8)]);
var inst_35980 = (state_36003[(11)]);
var inst_35982 = cljs.core.async.muxch_STAR_(inst_35980);
var state_36003__$1 = state_36003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36003__$1,(22),inst_35982,inst_35926);
} else {
if((state_val_36004 === (11))){
var inst_35938 = (state_36003[(13)]);
var inst_35954 = (state_36003[(10)]);
var inst_35954__$1 = cljs.core.seq(inst_35938);
var state_36003__$1 = (function (){var statearr_36037 = state_36003;
(statearr_36037[(10)] = inst_35954__$1);

return statearr_36037;
})();
if(inst_35954__$1){
var statearr_36038_37798 = state_36003__$1;
(statearr_36038_37798[(1)] = (13));

} else {
var statearr_36039_37799 = state_36003__$1;
(statearr_36039_37799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (9))){
var inst_35976 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
var statearr_36040_37801 = state_36003__$1;
(statearr_36040_37801[(2)] = inst_35976);

(statearr_36040_37801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (5))){
var inst_35935 = cljs.core.deref(mults);
var inst_35936 = cljs.core.vals(inst_35935);
var inst_35937 = cljs.core.seq(inst_35936);
var inst_35938 = inst_35937;
var inst_35939 = null;
var inst_35940 = (0);
var inst_35941 = (0);
var state_36003__$1 = (function (){var statearr_36041 = state_36003;
(statearr_36041[(12)] = inst_35940);

(statearr_36041[(13)] = inst_35938);

(statearr_36041[(15)] = inst_35941);

(statearr_36041[(16)] = inst_35939);

return statearr_36041;
})();
var statearr_36042_37805 = state_36003__$1;
(statearr_36042_37805[(2)] = null);

(statearr_36042_37805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (14))){
var state_36003__$1 = state_36003;
var statearr_36047_37812 = state_36003__$1;
(statearr_36047_37812[(2)] = null);

(statearr_36047_37812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (16))){
var inst_35954 = (state_36003[(10)]);
var inst_35958 = cljs.core.chunk_first(inst_35954);
var inst_35959 = cljs.core.chunk_rest(inst_35954);
var inst_35960 = cljs.core.count(inst_35958);
var inst_35938 = inst_35959;
var inst_35939 = inst_35958;
var inst_35940 = inst_35960;
var inst_35941 = (0);
var state_36003__$1 = (function (){var statearr_36050 = state_36003;
(statearr_36050[(12)] = inst_35940);

(statearr_36050[(13)] = inst_35938);

(statearr_36050[(15)] = inst_35941);

(statearr_36050[(16)] = inst_35939);

return statearr_36050;
})();
var statearr_36053_37815 = state_36003__$1;
(statearr_36053_37815[(2)] = null);

(statearr_36053_37815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (10))){
var inst_35940 = (state_36003[(12)]);
var inst_35938 = (state_36003[(13)]);
var inst_35941 = (state_36003[(15)]);
var inst_35939 = (state_36003[(16)]);
var inst_35948 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35939,inst_35941);
var inst_35949 = cljs.core.async.muxch_STAR_(inst_35948);
var inst_35950 = cljs.core.async.close_BANG_(inst_35949);
var inst_35951 = (inst_35941 + (1));
var tmp36043 = inst_35940;
var tmp36044 = inst_35938;
var tmp36045 = inst_35939;
var inst_35938__$1 = tmp36044;
var inst_35939__$1 = tmp36045;
var inst_35940__$1 = tmp36043;
var inst_35941__$1 = inst_35951;
var state_36003__$1 = (function (){var statearr_36057 = state_36003;
(statearr_36057[(12)] = inst_35940__$1);

(statearr_36057[(13)] = inst_35938__$1);

(statearr_36057[(15)] = inst_35941__$1);

(statearr_36057[(17)] = inst_35950);

(statearr_36057[(16)] = inst_35939__$1);

return statearr_36057;
})();
var statearr_36058_37824 = state_36003__$1;
(statearr_36058_37824[(2)] = null);

(statearr_36058_37824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (18))){
var inst_35969 = (state_36003[(2)]);
var state_36003__$1 = state_36003;
var statearr_36062_37825 = state_36003__$1;
(statearr_36062_37825[(2)] = inst_35969);

(statearr_36062_37825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36004 === (8))){
var inst_35940 = (state_36003[(12)]);
var inst_35941 = (state_36003[(15)]);
var inst_35944 = (inst_35941 < inst_35940);
var inst_35945 = inst_35944;
var state_36003__$1 = state_36003;
if(cljs.core.truth_(inst_35945)){
var statearr_36065_37829 = state_36003__$1;
(statearr_36065_37829[(1)] = (10));

} else {
var statearr_36066_37833 = state_36003__$1;
(statearr_36066_37833[(1)] = (11));

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
var statearr_36067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36067[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36067[(1)] = (1));

return statearr_36067;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36003){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36003);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36068){if((e36068 instanceof Object)){
var ex__34210__auto__ = e36068;
var statearr_36069_37840 = state_36003;
(statearr_36069_37840[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36068;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37842 = state_36003;
state_36003 = G__37842;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36070 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36070[(6)] = c__34274__auto___37725);

return statearr_36070;
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
var G__36072 = arguments.length;
switch (G__36072) {
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
var G__36081 = arguments.length;
switch (G__36081) {
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
var G__36085 = arguments.length;
switch (G__36085) {
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
var c__34274__auto___37866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36131){
var state_val_36132 = (state_36131[(1)]);
if((state_val_36132 === (7))){
var state_36131__$1 = state_36131;
var statearr_36133_37867 = state_36131__$1;
(statearr_36133_37867[(2)] = null);

(statearr_36133_37867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (1))){
var state_36131__$1 = state_36131;
var statearr_36134_37869 = state_36131__$1;
(statearr_36134_37869[(2)] = null);

(statearr_36134_37869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (4))){
var inst_36093 = (state_36131[(7)]);
var inst_36095 = (inst_36093 < cnt);
var state_36131__$1 = state_36131;
if(cljs.core.truth_(inst_36095)){
var statearr_36135_37871 = state_36131__$1;
(statearr_36135_37871[(1)] = (6));

} else {
var statearr_36136_37872 = state_36131__$1;
(statearr_36136_37872[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (15))){
var inst_36127 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36137_37876 = state_36131__$1;
(statearr_36137_37876[(2)] = inst_36127);

(statearr_36137_37876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (13))){
var inst_36120 = cljs.core.async.close_BANG_(out);
var state_36131__$1 = state_36131;
var statearr_36139_37878 = state_36131__$1;
(statearr_36139_37878[(2)] = inst_36120);

(statearr_36139_37878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (6))){
var state_36131__$1 = state_36131;
var statearr_36141_37882 = state_36131__$1;
(statearr_36141_37882[(2)] = null);

(statearr_36141_37882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (3))){
var inst_36129 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36131__$1,inst_36129);
} else {
if((state_val_36132 === (12))){
var inst_36117 = (state_36131[(8)]);
var inst_36117__$1 = (state_36131[(2)]);
var inst_36118 = cljs.core.some(cljs.core.nil_QMARK_,inst_36117__$1);
var state_36131__$1 = (function (){var statearr_36155 = state_36131;
(statearr_36155[(8)] = inst_36117__$1);

return statearr_36155;
})();
if(cljs.core.truth_(inst_36118)){
var statearr_36161_37887 = state_36131__$1;
(statearr_36161_37887[(1)] = (13));

} else {
var statearr_36163_37888 = state_36131__$1;
(statearr_36163_37888[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (2))){
var inst_36092 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36093 = (0);
var state_36131__$1 = (function (){var statearr_36164 = state_36131;
(statearr_36164[(9)] = inst_36092);

(statearr_36164[(7)] = inst_36093);

return statearr_36164;
})();
var statearr_36165_37892 = state_36131__$1;
(statearr_36165_37892[(2)] = null);

(statearr_36165_37892[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (11))){
var inst_36093 = (state_36131[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36131,(10),Object,null,(9));
var inst_36104 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36093) : chs__$1.call(null,inst_36093));
var inst_36105 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36093) : done.call(null,inst_36093));
var inst_36106 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36104,inst_36105);
var state_36131__$1 = state_36131;
var statearr_36167_37898 = state_36131__$1;
(statearr_36167_37898[(2)] = inst_36106);


cljs.core.async.impl.ioc_helpers.process_exception(state_36131__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (9))){
var inst_36093 = (state_36131[(7)]);
var inst_36108 = (state_36131[(2)]);
var inst_36109 = (inst_36093 + (1));
var inst_36093__$1 = inst_36109;
var state_36131__$1 = (function (){var statearr_36169 = state_36131;
(statearr_36169[(7)] = inst_36093__$1);

(statearr_36169[(10)] = inst_36108);

return statearr_36169;
})();
var statearr_36171_37903 = state_36131__$1;
(statearr_36171_37903[(2)] = null);

(statearr_36171_37903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (5))){
var inst_36115 = (state_36131[(2)]);
var state_36131__$1 = (function (){var statearr_36173 = state_36131;
(statearr_36173[(11)] = inst_36115);

return statearr_36173;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36131__$1,(12),dchan);
} else {
if((state_val_36132 === (14))){
var inst_36117 = (state_36131[(8)]);
var inst_36122 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36117);
var state_36131__$1 = state_36131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36131__$1,(16),out,inst_36122);
} else {
if((state_val_36132 === (16))){
var inst_36124 = (state_36131[(2)]);
var state_36131__$1 = (function (){var statearr_36175 = state_36131;
(statearr_36175[(12)] = inst_36124);

return statearr_36175;
})();
var statearr_36176_37904 = state_36131__$1;
(statearr_36176_37904[(2)] = null);

(statearr_36176_37904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (10))){
var inst_36097 = (state_36131[(2)]);
var inst_36100 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36131__$1 = (function (){var statearr_36177 = state_36131;
(statearr_36177[(13)] = inst_36097);

return statearr_36177;
})();
var statearr_36178_37905 = state_36131__$1;
(statearr_36178_37905[(2)] = inst_36100);


cljs.core.async.impl.ioc_helpers.process_exception(state_36131__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (8))){
var inst_36113 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36181_37907 = state_36131__$1;
(statearr_36181_37907[(2)] = inst_36113);

(statearr_36181_37907[(1)] = (5));


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
var statearr_36182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36182[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36182[(1)] = (1));

return statearr_36182;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36131){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36131);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36183){if((e36183 instanceof Object)){
var ex__34210__auto__ = e36183;
var statearr_36184_37911 = state_36131;
(statearr_36184_37911[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36183;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37913 = state_36131;
state_36131 = G__37913;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36187 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36187[(6)] = c__34274__auto___37866);

return statearr_36187;
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
var G__36190 = arguments.length;
switch (G__36190) {
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
var c__34274__auto___37920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36222){
var state_val_36223 = (state_36222[(1)]);
if((state_val_36223 === (7))){
var inst_36202 = (state_36222[(7)]);
var inst_36201 = (state_36222[(8)]);
var inst_36201__$1 = (state_36222[(2)]);
var inst_36202__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36201__$1,(0),null);
var inst_36203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36201__$1,(1),null);
var inst_36204 = (inst_36202__$1 == null);
var state_36222__$1 = (function (){var statearr_36224 = state_36222;
(statearr_36224[(9)] = inst_36203);

(statearr_36224[(7)] = inst_36202__$1);

(statearr_36224[(8)] = inst_36201__$1);

return statearr_36224;
})();
if(cljs.core.truth_(inst_36204)){
var statearr_36225_37926 = state_36222__$1;
(statearr_36225_37926[(1)] = (8));

} else {
var statearr_36226_37927 = state_36222__$1;
(statearr_36226_37927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (1))){
var inst_36191 = cljs.core.vec(chs);
var inst_36192 = inst_36191;
var state_36222__$1 = (function (){var statearr_36227 = state_36222;
(statearr_36227[(10)] = inst_36192);

return statearr_36227;
})();
var statearr_36228_37929 = state_36222__$1;
(statearr_36228_37929[(2)] = null);

(statearr_36228_37929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (4))){
var inst_36192 = (state_36222[(10)]);
var state_36222__$1 = state_36222;
return cljs.core.async.ioc_alts_BANG_(state_36222__$1,(7),inst_36192);
} else {
if((state_val_36223 === (6))){
var inst_36218 = (state_36222[(2)]);
var state_36222__$1 = state_36222;
var statearr_36231_37934 = state_36222__$1;
(statearr_36231_37934[(2)] = inst_36218);

(statearr_36231_37934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (3))){
var inst_36220 = (state_36222[(2)]);
var state_36222__$1 = state_36222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36222__$1,inst_36220);
} else {
if((state_val_36223 === (2))){
var inst_36192 = (state_36222[(10)]);
var inst_36194 = cljs.core.count(inst_36192);
var inst_36195 = (inst_36194 > (0));
var state_36222__$1 = state_36222;
if(cljs.core.truth_(inst_36195)){
var statearr_36235_37938 = state_36222__$1;
(statearr_36235_37938[(1)] = (4));

} else {
var statearr_36236_37941 = state_36222__$1;
(statearr_36236_37941[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (11))){
var inst_36192 = (state_36222[(10)]);
var inst_36211 = (state_36222[(2)]);
var tmp36233 = inst_36192;
var inst_36192__$1 = tmp36233;
var state_36222__$1 = (function (){var statearr_36238 = state_36222;
(statearr_36238[(11)] = inst_36211);

(statearr_36238[(10)] = inst_36192__$1);

return statearr_36238;
})();
var statearr_36243_37943 = state_36222__$1;
(statearr_36243_37943[(2)] = null);

(statearr_36243_37943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (9))){
var inst_36202 = (state_36222[(7)]);
var state_36222__$1 = state_36222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36222__$1,(11),out,inst_36202);
} else {
if((state_val_36223 === (5))){
var inst_36216 = cljs.core.async.close_BANG_(out);
var state_36222__$1 = state_36222;
var statearr_36248_37944 = state_36222__$1;
(statearr_36248_37944[(2)] = inst_36216);

(statearr_36248_37944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (10))){
var inst_36214 = (state_36222[(2)]);
var state_36222__$1 = state_36222;
var statearr_36250_37951 = state_36222__$1;
(statearr_36250_37951[(2)] = inst_36214);

(statearr_36250_37951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (8))){
var inst_36203 = (state_36222[(9)]);
var inst_36202 = (state_36222[(7)]);
var inst_36201 = (state_36222[(8)]);
var inst_36192 = (state_36222[(10)]);
var inst_36206 = (function (){var cs = inst_36192;
var vec__36197 = inst_36201;
var v = inst_36202;
var c = inst_36203;
return (function (p1__36188_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36188_SHARP_);
});
})();
var inst_36207 = cljs.core.filterv(inst_36206,inst_36192);
var inst_36192__$1 = inst_36207;
var state_36222__$1 = (function (){var statearr_36253 = state_36222;
(statearr_36253[(10)] = inst_36192__$1);

return statearr_36253;
})();
var statearr_36254_37961 = state_36222__$1;
(statearr_36254_37961[(2)] = null);

(statearr_36254_37961[(1)] = (2));


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
var statearr_36255 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36255[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36255[(1)] = (1));

return statearr_36255;
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
}catch (e36256){if((e36256 instanceof Object)){
var ex__34210__auto__ = e36256;
var statearr_36257_37967 = state_36222;
(statearr_36257_37967[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36256;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37970 = state_36222;
state_36222 = G__37970;
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
var state__34276__auto__ = (function (){var statearr_36258 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36258[(6)] = c__34274__auto___37920);

return statearr_36258;
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
var G__36261 = arguments.length;
switch (G__36261) {
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
var c__34274__auto___37980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36287){
var state_val_36288 = (state_36287[(1)]);
if((state_val_36288 === (7))){
var inst_36269 = (state_36287[(7)]);
var inst_36269__$1 = (state_36287[(2)]);
var inst_36270 = (inst_36269__$1 == null);
var inst_36271 = cljs.core.not(inst_36270);
var state_36287__$1 = (function (){var statearr_36291 = state_36287;
(statearr_36291[(7)] = inst_36269__$1);

return statearr_36291;
})();
if(inst_36271){
var statearr_36292_37985 = state_36287__$1;
(statearr_36292_37985[(1)] = (8));

} else {
var statearr_36293_37987 = state_36287__$1;
(statearr_36293_37987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (1))){
var inst_36264 = (0);
var state_36287__$1 = (function (){var statearr_36294 = state_36287;
(statearr_36294[(8)] = inst_36264);

return statearr_36294;
})();
var statearr_36295_37988 = state_36287__$1;
(statearr_36295_37988[(2)] = null);

(statearr_36295_37988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (4))){
var state_36287__$1 = state_36287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36287__$1,(7),ch);
} else {
if((state_val_36288 === (6))){
var inst_36282 = (state_36287[(2)]);
var state_36287__$1 = state_36287;
var statearr_36298_37992 = state_36287__$1;
(statearr_36298_37992[(2)] = inst_36282);

(statearr_36298_37992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (3))){
var inst_36284 = (state_36287[(2)]);
var inst_36285 = cljs.core.async.close_BANG_(out);
var state_36287__$1 = (function (){var statearr_36301 = state_36287;
(statearr_36301[(9)] = inst_36284);

return statearr_36301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36287__$1,inst_36285);
} else {
if((state_val_36288 === (2))){
var inst_36264 = (state_36287[(8)]);
var inst_36266 = (inst_36264 < n);
var state_36287__$1 = state_36287;
if(cljs.core.truth_(inst_36266)){
var statearr_36302_37995 = state_36287__$1;
(statearr_36302_37995[(1)] = (4));

} else {
var statearr_36303_37996 = state_36287__$1;
(statearr_36303_37996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (11))){
var inst_36264 = (state_36287[(8)]);
var inst_36274 = (state_36287[(2)]);
var inst_36275 = (inst_36264 + (1));
var inst_36264__$1 = inst_36275;
var state_36287__$1 = (function (){var statearr_36305 = state_36287;
(statearr_36305[(10)] = inst_36274);

(statearr_36305[(8)] = inst_36264__$1);

return statearr_36305;
})();
var statearr_36310_37997 = state_36287__$1;
(statearr_36310_37997[(2)] = null);

(statearr_36310_37997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (9))){
var state_36287__$1 = state_36287;
var statearr_36314_37998 = state_36287__$1;
(statearr_36314_37998[(2)] = null);

(statearr_36314_37998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (5))){
var state_36287__$1 = state_36287;
var statearr_36315_37999 = state_36287__$1;
(statearr_36315_37999[(2)] = null);

(statearr_36315_37999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (10))){
var inst_36279 = (state_36287[(2)]);
var state_36287__$1 = state_36287;
var statearr_36316_38000 = state_36287__$1;
(statearr_36316_38000[(2)] = inst_36279);

(statearr_36316_38000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36288 === (8))){
var inst_36269 = (state_36287[(7)]);
var state_36287__$1 = state_36287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36287__$1,(11),out,inst_36269);
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
var statearr_36317 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36317[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36317[(1)] = (1));

return statearr_36317;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36287){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36287);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36319){if((e36319 instanceof Object)){
var ex__34210__auto__ = e36319;
var statearr_36320_38001 = state_36287;
(statearr_36320_38001[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36319;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38002 = state_36287;
state_36287 = G__38002;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36322 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36322[(6)] = c__34274__auto___37980);

return statearr_36322;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36327 = (function (f,ch,meta36328){
this.f = f;
this.ch = ch;
this.meta36328 = meta36328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36329,meta36328__$1){
var self__ = this;
var _36329__$1 = this;
return (new cljs.core.async.t_cljs$core$async36327(self__.f,self__.ch,meta36328__$1));
}));

(cljs.core.async.t_cljs$core$async36327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36329){
var self__ = this;
var _36329__$1 = this;
return self__.meta36328;
}));

(cljs.core.async.t_cljs$core$async36327.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36327.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36327.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36334 = (function (f,ch,meta36328,_,fn1,meta36335){
this.f = f;
this.ch = ch;
this.meta36328 = meta36328;
this._ = _;
this.fn1 = fn1;
this.meta36335 = meta36335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36336,meta36335__$1){
var self__ = this;
var _36336__$1 = this;
return (new cljs.core.async.t_cljs$core$async36334(self__.f,self__.ch,self__.meta36328,self__._,self__.fn1,meta36335__$1));
}));

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36336){
var self__ = this;
var _36336__$1 = this;
return self__.meta36335;
}));

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36324_SHARP_){
var G__36346 = (((p1__36324_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36324_SHARP_) : self__.f.call(null,p1__36324_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36346) : f1.call(null,G__36346));
});
}));

(cljs.core.async.t_cljs$core$async36334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36328","meta36328",-598098695,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36327","cljs.core.async/t_cljs$core$async36327",499366292,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36335","meta36335",622785842,null)], null);
}));

(cljs.core.async.t_cljs$core$async36334.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36334");

(cljs.core.async.t_cljs$core$async36334.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36334");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36334.
 */
cljs.core.async.__GT_t_cljs$core$async36334 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36334(f__$1,ch__$1,meta36328__$1,___$2,fn1__$1,meta36335){
return (new cljs.core.async.t_cljs$core$async36334(f__$1,ch__$1,meta36328__$1,___$2,fn1__$1,meta36335));
});

}

return (new cljs.core.async.t_cljs$core$async36334(self__.f,self__.ch,self__.meta36328,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36352 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36352) : self__.f.call(null,G__36352));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36327.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36328","meta36328",-598098695,null)], null);
}));

(cljs.core.async.t_cljs$core$async36327.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36327");

(cljs.core.async.t_cljs$core$async36327.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36327");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36327.
 */
cljs.core.async.__GT_t_cljs$core$async36327 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36327(f__$1,ch__$1,meta36328){
return (new cljs.core.async.t_cljs$core$async36327(f__$1,ch__$1,meta36328));
});

}

return (new cljs.core.async.t_cljs$core$async36327(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36356 = (function (f,ch,meta36357){
this.f = f;
this.ch = ch;
this.meta36357 = meta36357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36358,meta36357__$1){
var self__ = this;
var _36358__$1 = this;
return (new cljs.core.async.t_cljs$core$async36356(self__.f,self__.ch,meta36357__$1));
}));

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36358){
var self__ = this;
var _36358__$1 = this;
return self__.meta36357;
}));

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36357","meta36357",948392194,null)], null);
}));

(cljs.core.async.t_cljs$core$async36356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36356");

(cljs.core.async.t_cljs$core$async36356.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36356.
 */
cljs.core.async.__GT_t_cljs$core$async36356 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36356(f__$1,ch__$1,meta36357){
return (new cljs.core.async.t_cljs$core$async36356(f__$1,ch__$1,meta36357));
});

}

return (new cljs.core.async.t_cljs$core$async36356(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36375 = (function (p,ch,meta36376){
this.p = p;
this.ch = ch;
this.meta36376 = meta36376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36377,meta36376__$1){
var self__ = this;
var _36377__$1 = this;
return (new cljs.core.async.t_cljs$core$async36375(self__.p,self__.ch,meta36376__$1));
}));

(cljs.core.async.t_cljs$core$async36375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36377){
var self__ = this;
var _36377__$1 = this;
return self__.meta36376;
}));

(cljs.core.async.t_cljs$core$async36375.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36375.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36375.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36375.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36375.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36375.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36375.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36376","meta36376",-748481692,null)], null);
}));

(cljs.core.async.t_cljs$core$async36375.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36375");

(cljs.core.async.t_cljs$core$async36375.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36375");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36375.
 */
cljs.core.async.__GT_t_cljs$core$async36375 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36375(p__$1,ch__$1,meta36376){
return (new cljs.core.async.t_cljs$core$async36375(p__$1,ch__$1,meta36376));
});

}

return (new cljs.core.async.t_cljs$core$async36375(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36397 = arguments.length;
switch (G__36397) {
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
var c__34274__auto___38031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36423){
var state_val_36424 = (state_36423[(1)]);
if((state_val_36424 === (7))){
var inst_36419 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
var statearr_36431_38036 = state_36423__$1;
(statearr_36431_38036[(2)] = inst_36419);

(statearr_36431_38036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (1))){
var state_36423__$1 = state_36423;
var statearr_36432_38037 = state_36423__$1;
(statearr_36432_38037[(2)] = null);

(statearr_36432_38037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (4))){
var inst_36402 = (state_36423[(7)]);
var inst_36402__$1 = (state_36423[(2)]);
var inst_36406 = (inst_36402__$1 == null);
var state_36423__$1 = (function (){var statearr_36433 = state_36423;
(statearr_36433[(7)] = inst_36402__$1);

return statearr_36433;
})();
if(cljs.core.truth_(inst_36406)){
var statearr_36435_38038 = state_36423__$1;
(statearr_36435_38038[(1)] = (5));

} else {
var statearr_36438_38039 = state_36423__$1;
(statearr_36438_38039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (6))){
var inst_36402 = (state_36423[(7)]);
var inst_36410 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36402) : p.call(null,inst_36402));
var state_36423__$1 = state_36423;
if(cljs.core.truth_(inst_36410)){
var statearr_36443_38045 = state_36423__$1;
(statearr_36443_38045[(1)] = (8));

} else {
var statearr_36445_38046 = state_36423__$1;
(statearr_36445_38046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (3))){
var inst_36421 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36423__$1,inst_36421);
} else {
if((state_val_36424 === (2))){
var state_36423__$1 = state_36423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36423__$1,(4),ch);
} else {
if((state_val_36424 === (11))){
var inst_36413 = (state_36423[(2)]);
var state_36423__$1 = state_36423;
var statearr_36448_38048 = state_36423__$1;
(statearr_36448_38048[(2)] = inst_36413);

(statearr_36448_38048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (9))){
var state_36423__$1 = state_36423;
var statearr_36449_38051 = state_36423__$1;
(statearr_36449_38051[(2)] = null);

(statearr_36449_38051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (5))){
var inst_36408 = cljs.core.async.close_BANG_(out);
var state_36423__$1 = state_36423;
var statearr_36451_38052 = state_36423__$1;
(statearr_36451_38052[(2)] = inst_36408);

(statearr_36451_38052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (10))){
var inst_36416 = (state_36423[(2)]);
var state_36423__$1 = (function (){var statearr_36452 = state_36423;
(statearr_36452[(8)] = inst_36416);

return statearr_36452;
})();
var statearr_36453_38055 = state_36423__$1;
(statearr_36453_38055[(2)] = null);

(statearr_36453_38055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36424 === (8))){
var inst_36402 = (state_36423[(7)]);
var state_36423__$1 = state_36423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36423__$1,(11),out,inst_36402);
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
var statearr_36455 = [null,null,null,null,null,null,null,null,null];
(statearr_36455[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36455[(1)] = (1));

return statearr_36455;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36423){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36423);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36456){if((e36456 instanceof Object)){
var ex__34210__auto__ = e36456;
var statearr_36457_38058 = state_36423;
(statearr_36457_38058[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38059 = state_36423;
state_36423 = G__38059;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36460 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36460[(6)] = c__34274__auto___38031);

return statearr_36460;
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
var G__36465 = arguments.length;
switch (G__36465) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36533){
var state_val_36534 = (state_36533[(1)]);
if((state_val_36534 === (7))){
var inst_36529 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
var statearr_36539_38063 = state_36533__$1;
(statearr_36539_38063[(2)] = inst_36529);

(statearr_36539_38063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (20))){
var inst_36498 = (state_36533[(7)]);
var inst_36510 = (state_36533[(2)]);
var inst_36511 = cljs.core.next(inst_36498);
var inst_36484 = inst_36511;
var inst_36485 = null;
var inst_36486 = (0);
var inst_36487 = (0);
var state_36533__$1 = (function (){var statearr_36540 = state_36533;
(statearr_36540[(8)] = inst_36486);

(statearr_36540[(9)] = inst_36510);

(statearr_36540[(10)] = inst_36485);

(statearr_36540[(11)] = inst_36484);

(statearr_36540[(12)] = inst_36487);

return statearr_36540;
})();
var statearr_36542_38067 = state_36533__$1;
(statearr_36542_38067[(2)] = null);

(statearr_36542_38067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (1))){
var state_36533__$1 = state_36533;
var statearr_36543_38068 = state_36533__$1;
(statearr_36543_38068[(2)] = null);

(statearr_36543_38068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (4))){
var inst_36473 = (state_36533[(13)]);
var inst_36473__$1 = (state_36533[(2)]);
var inst_36474 = (inst_36473__$1 == null);
var state_36533__$1 = (function (){var statearr_36545 = state_36533;
(statearr_36545[(13)] = inst_36473__$1);

return statearr_36545;
})();
if(cljs.core.truth_(inst_36474)){
var statearr_36546_38071 = state_36533__$1;
(statearr_36546_38071[(1)] = (5));

} else {
var statearr_36547_38073 = state_36533__$1;
(statearr_36547_38073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (15))){
var state_36533__$1 = state_36533;
var statearr_36551_38074 = state_36533__$1;
(statearr_36551_38074[(2)] = null);

(statearr_36551_38074[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (21))){
var state_36533__$1 = state_36533;
var statearr_36553_38075 = state_36533__$1;
(statearr_36553_38075[(2)] = null);

(statearr_36553_38075[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (13))){
var inst_36486 = (state_36533[(8)]);
var inst_36485 = (state_36533[(10)]);
var inst_36484 = (state_36533[(11)]);
var inst_36487 = (state_36533[(12)]);
var inst_36494 = (state_36533[(2)]);
var inst_36495 = (inst_36487 + (1));
var tmp36548 = inst_36486;
var tmp36549 = inst_36485;
var tmp36550 = inst_36484;
var inst_36484__$1 = tmp36550;
var inst_36485__$1 = tmp36549;
var inst_36486__$1 = tmp36548;
var inst_36487__$1 = inst_36495;
var state_36533__$1 = (function (){var statearr_36555 = state_36533;
(statearr_36555[(8)] = inst_36486__$1);

(statearr_36555[(14)] = inst_36494);

(statearr_36555[(10)] = inst_36485__$1);

(statearr_36555[(11)] = inst_36484__$1);

(statearr_36555[(12)] = inst_36487__$1);

return statearr_36555;
})();
var statearr_36556_38079 = state_36533__$1;
(statearr_36556_38079[(2)] = null);

(statearr_36556_38079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (22))){
var state_36533__$1 = state_36533;
var statearr_36558_38080 = state_36533__$1;
(statearr_36558_38080[(2)] = null);

(statearr_36558_38080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (6))){
var inst_36473 = (state_36533[(13)]);
var inst_36482 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36473) : f.call(null,inst_36473));
var inst_36483 = cljs.core.seq(inst_36482);
var inst_36484 = inst_36483;
var inst_36485 = null;
var inst_36486 = (0);
var inst_36487 = (0);
var state_36533__$1 = (function (){var statearr_36559 = state_36533;
(statearr_36559[(8)] = inst_36486);

(statearr_36559[(10)] = inst_36485);

(statearr_36559[(11)] = inst_36484);

(statearr_36559[(12)] = inst_36487);

return statearr_36559;
})();
var statearr_36561_38084 = state_36533__$1;
(statearr_36561_38084[(2)] = null);

(statearr_36561_38084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (17))){
var inst_36498 = (state_36533[(7)]);
var inst_36503 = cljs.core.chunk_first(inst_36498);
var inst_36504 = cljs.core.chunk_rest(inst_36498);
var inst_36505 = cljs.core.count(inst_36503);
var inst_36484 = inst_36504;
var inst_36485 = inst_36503;
var inst_36486 = inst_36505;
var inst_36487 = (0);
var state_36533__$1 = (function (){var statearr_36562 = state_36533;
(statearr_36562[(8)] = inst_36486);

(statearr_36562[(10)] = inst_36485);

(statearr_36562[(11)] = inst_36484);

(statearr_36562[(12)] = inst_36487);

return statearr_36562;
})();
var statearr_36564_38085 = state_36533__$1;
(statearr_36564_38085[(2)] = null);

(statearr_36564_38085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (3))){
var inst_36531 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36533__$1,inst_36531);
} else {
if((state_val_36534 === (12))){
var inst_36519 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
var statearr_36565_38089 = state_36533__$1;
(statearr_36565_38089[(2)] = inst_36519);

(statearr_36565_38089[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (2))){
var state_36533__$1 = state_36533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36533__$1,(4),in$);
} else {
if((state_val_36534 === (23))){
var inst_36527 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
var statearr_36567_38090 = state_36533__$1;
(statearr_36567_38090[(2)] = inst_36527);

(statearr_36567_38090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (19))){
var inst_36514 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
var statearr_36568_38091 = state_36533__$1;
(statearr_36568_38091[(2)] = inst_36514);

(statearr_36568_38091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (11))){
var inst_36484 = (state_36533[(11)]);
var inst_36498 = (state_36533[(7)]);
var inst_36498__$1 = cljs.core.seq(inst_36484);
var state_36533__$1 = (function (){var statearr_36570 = state_36533;
(statearr_36570[(7)] = inst_36498__$1);

return statearr_36570;
})();
if(inst_36498__$1){
var statearr_36571_38095 = state_36533__$1;
(statearr_36571_38095[(1)] = (14));

} else {
var statearr_36572_38096 = state_36533__$1;
(statearr_36572_38096[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (9))){
var inst_36521 = (state_36533[(2)]);
var inst_36522 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36533__$1 = (function (){var statearr_36574 = state_36533;
(statearr_36574[(15)] = inst_36521);

return statearr_36574;
})();
if(cljs.core.truth_(inst_36522)){
var statearr_36575_38097 = state_36533__$1;
(statearr_36575_38097[(1)] = (21));

} else {
var statearr_36576_38098 = state_36533__$1;
(statearr_36576_38098[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (5))){
var inst_36476 = cljs.core.async.close_BANG_(out);
var state_36533__$1 = state_36533;
var statearr_36577_38099 = state_36533__$1;
(statearr_36577_38099[(2)] = inst_36476);

(statearr_36577_38099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (14))){
var inst_36498 = (state_36533[(7)]);
var inst_36500 = cljs.core.chunked_seq_QMARK_(inst_36498);
var state_36533__$1 = state_36533;
if(inst_36500){
var statearr_36579_38103 = state_36533__$1;
(statearr_36579_38103[(1)] = (17));

} else {
var statearr_36580_38104 = state_36533__$1;
(statearr_36580_38104[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (16))){
var inst_36517 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
var statearr_36582_38105 = state_36533__$1;
(statearr_36582_38105[(2)] = inst_36517);

(statearr_36582_38105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (10))){
var inst_36485 = (state_36533[(10)]);
var inst_36487 = (state_36533[(12)]);
var inst_36492 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36485,inst_36487);
var state_36533__$1 = state_36533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36533__$1,(13),out,inst_36492);
} else {
if((state_val_36534 === (18))){
var inst_36498 = (state_36533[(7)]);
var inst_36508 = cljs.core.first(inst_36498);
var state_36533__$1 = state_36533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36533__$1,(20),out,inst_36508);
} else {
if((state_val_36534 === (8))){
var inst_36486 = (state_36533[(8)]);
var inst_36487 = (state_36533[(12)]);
var inst_36489 = (inst_36487 < inst_36486);
var inst_36490 = inst_36489;
var state_36533__$1 = state_36533;
if(cljs.core.truth_(inst_36490)){
var statearr_36584_38106 = state_36533__$1;
(statearr_36584_38106[(1)] = (10));

} else {
var statearr_36585_38107 = state_36533__$1;
(statearr_36585_38107[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36533){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36533);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36588){if((e36588 instanceof Object)){
var ex__34210__auto__ = e36588;
var statearr_36589_38111 = state_36533;
(statearr_36589_38111[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36588;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38112 = state_36533;
state_36533 = G__38112;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36533){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36591 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36591[(6)] = c__34274__auto__);

return statearr_36591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36594 = arguments.length;
switch (G__36594) {
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
var c__34274__auto___38122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36629){
var state_val_36630 = (state_36629[(1)]);
if((state_val_36630 === (7))){
var inst_36624 = (state_36629[(2)]);
var state_36629__$1 = state_36629;
var statearr_36632_38123 = state_36629__$1;
(statearr_36632_38123[(2)] = inst_36624);

(statearr_36632_38123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36630 === (1))){
var inst_36605 = null;
var state_36629__$1 = (function (){var statearr_36633 = state_36629;
(statearr_36633[(7)] = inst_36605);

return statearr_36633;
})();
var statearr_36635_38126 = state_36629__$1;
(statearr_36635_38126[(2)] = null);

(statearr_36635_38126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36630 === (4))){
var inst_36608 = (state_36629[(8)]);
var inst_36608__$1 = (state_36629[(2)]);
var inst_36610 = (inst_36608__$1 == null);
var inst_36611 = cljs.core.not(inst_36610);
var state_36629__$1 = (function (){var statearr_36636 = state_36629;
(statearr_36636[(8)] = inst_36608__$1);

return statearr_36636;
})();
if(inst_36611){
var statearr_36637_38128 = state_36629__$1;
(statearr_36637_38128[(1)] = (5));

} else {
var statearr_36639_38129 = state_36629__$1;
(statearr_36639_38129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36630 === (6))){
var state_36629__$1 = state_36629;
var statearr_36640_38130 = state_36629__$1;
(statearr_36640_38130[(2)] = null);

(statearr_36640_38130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36630 === (3))){
var inst_36626 = (state_36629[(2)]);
var inst_36627 = cljs.core.async.close_BANG_(out);
var state_36629__$1 = (function (){var statearr_36642 = state_36629;
(statearr_36642[(9)] = inst_36626);

return statearr_36642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36629__$1,inst_36627);
} else {
if((state_val_36630 === (2))){
var state_36629__$1 = state_36629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36629__$1,(4),ch);
} else {
if((state_val_36630 === (11))){
var inst_36608 = (state_36629[(8)]);
var inst_36618 = (state_36629[(2)]);
var inst_36605 = inst_36608;
var state_36629__$1 = (function (){var statearr_36643 = state_36629;
(statearr_36643[(7)] = inst_36605);

(statearr_36643[(10)] = inst_36618);

return statearr_36643;
})();
var statearr_36645_38134 = state_36629__$1;
(statearr_36645_38134[(2)] = null);

(statearr_36645_38134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36630 === (9))){
var inst_36608 = (state_36629[(8)]);
var state_36629__$1 = state_36629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36629__$1,(11),out,inst_36608);
} else {
if((state_val_36630 === (5))){
var inst_36605 = (state_36629[(7)]);
var inst_36608 = (state_36629[(8)]);
var inst_36613 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36608,inst_36605);
var state_36629__$1 = state_36629;
if(inst_36613){
var statearr_36647_38136 = state_36629__$1;
(statearr_36647_38136[(1)] = (8));

} else {
var statearr_36649_38137 = state_36629__$1;
(statearr_36649_38137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36630 === (10))){
var inst_36621 = (state_36629[(2)]);
var state_36629__$1 = state_36629;
var statearr_36650_38140 = state_36629__$1;
(statearr_36650_38140[(2)] = inst_36621);

(statearr_36650_38140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36630 === (8))){
var inst_36605 = (state_36629[(7)]);
var tmp36646 = inst_36605;
var inst_36605__$1 = tmp36646;
var state_36629__$1 = (function (){var statearr_36651 = state_36629;
(statearr_36651[(7)] = inst_36605__$1);

return statearr_36651;
})();
var statearr_36653_38141 = state_36629__$1;
(statearr_36653_38141[(2)] = null);

(statearr_36653_38141[(1)] = (2));


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
var statearr_36654 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36654[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36654[(1)] = (1));

return statearr_36654;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36629){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36629);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36655){if((e36655 instanceof Object)){
var ex__34210__auto__ = e36655;
var statearr_36656_38145 = state_36629;
(statearr_36656_38145[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38146 = state_36629;
state_36629 = G__38146;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36658 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36658[(6)] = c__34274__auto___38122);

return statearr_36658;
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
var G__36660 = arguments.length;
switch (G__36660) {
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
var c__34274__auto___38151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36699){
var state_val_36700 = (state_36699[(1)]);
if((state_val_36700 === (7))){
var inst_36695 = (state_36699[(2)]);
var state_36699__$1 = state_36699;
var statearr_36702_38152 = state_36699__$1;
(statearr_36702_38152[(2)] = inst_36695);

(statearr_36702_38152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (1))){
var inst_36662 = (new Array(n));
var inst_36663 = inst_36662;
var inst_36664 = (0);
var state_36699__$1 = (function (){var statearr_36704 = state_36699;
(statearr_36704[(7)] = inst_36663);

(statearr_36704[(8)] = inst_36664);

return statearr_36704;
})();
var statearr_36705_38154 = state_36699__$1;
(statearr_36705_38154[(2)] = null);

(statearr_36705_38154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (4))){
var inst_36667 = (state_36699[(9)]);
var inst_36667__$1 = (state_36699[(2)]);
var inst_36668 = (inst_36667__$1 == null);
var inst_36669 = cljs.core.not(inst_36668);
var state_36699__$1 = (function (){var statearr_36707 = state_36699;
(statearr_36707[(9)] = inst_36667__$1);

return statearr_36707;
})();
if(inst_36669){
var statearr_36708_38157 = state_36699__$1;
(statearr_36708_38157[(1)] = (5));

} else {
var statearr_36709_38158 = state_36699__$1;
(statearr_36709_38158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (15))){
var inst_36689 = (state_36699[(2)]);
var state_36699__$1 = state_36699;
var statearr_36710_38159 = state_36699__$1;
(statearr_36710_38159[(2)] = inst_36689);

(statearr_36710_38159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (13))){
var state_36699__$1 = state_36699;
var statearr_36712_38161 = state_36699__$1;
(statearr_36712_38161[(2)] = null);

(statearr_36712_38161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (6))){
var inst_36664 = (state_36699[(8)]);
var inst_36685 = (inst_36664 > (0));
var state_36699__$1 = state_36699;
if(cljs.core.truth_(inst_36685)){
var statearr_36713_38163 = state_36699__$1;
(statearr_36713_38163[(1)] = (12));

} else {
var statearr_36714_38165 = state_36699__$1;
(statearr_36714_38165[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (3))){
var inst_36697 = (state_36699[(2)]);
var state_36699__$1 = state_36699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36699__$1,inst_36697);
} else {
if((state_val_36700 === (12))){
var inst_36663 = (state_36699[(7)]);
var inst_36687 = cljs.core.vec(inst_36663);
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
var inst_36663 = inst_36680;
var inst_36664 = (0);
var state_36699__$1 = (function (){var statearr_36716 = state_36699;
(statearr_36716[(7)] = inst_36663);

(statearr_36716[(10)] = inst_36679);

(statearr_36716[(8)] = inst_36664);

return statearr_36716;
})();
var statearr_36717_38166 = state_36699__$1;
(statearr_36717_38166[(2)] = null);

(statearr_36717_38166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (9))){
var inst_36663 = (state_36699[(7)]);
var inst_36677 = cljs.core.vec(inst_36663);
var state_36699__$1 = state_36699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36699__$1,(11),out,inst_36677);
} else {
if((state_val_36700 === (5))){
var inst_36663 = (state_36699[(7)]);
var inst_36664 = (state_36699[(8)]);
var inst_36667 = (state_36699[(9)]);
var inst_36672 = (state_36699[(11)]);
var inst_36671 = (inst_36663[inst_36664] = inst_36667);
var inst_36672__$1 = (inst_36664 + (1));
var inst_36673 = (inst_36672__$1 < n);
var state_36699__$1 = (function (){var statearr_36719 = state_36699;
(statearr_36719[(12)] = inst_36671);

(statearr_36719[(11)] = inst_36672__$1);

return statearr_36719;
})();
if(cljs.core.truth_(inst_36673)){
var statearr_36720_38170 = state_36699__$1;
(statearr_36720_38170[(1)] = (8));

} else {
var statearr_36721_38171 = state_36699__$1;
(statearr_36721_38171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (14))){
var inst_36692 = (state_36699[(2)]);
var inst_36693 = cljs.core.async.close_BANG_(out);
var state_36699__$1 = (function (){var statearr_36723 = state_36699;
(statearr_36723[(13)] = inst_36692);

return statearr_36723;
})();
var statearr_36724_38172 = state_36699__$1;
(statearr_36724_38172[(2)] = inst_36693);

(statearr_36724_38172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (10))){
var inst_36683 = (state_36699[(2)]);
var state_36699__$1 = state_36699;
var statearr_36726_38173 = state_36699__$1;
(statearr_36726_38173[(2)] = inst_36683);

(statearr_36726_38173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36700 === (8))){
var inst_36663 = (state_36699[(7)]);
var inst_36672 = (state_36699[(11)]);
var tmp36722 = inst_36663;
var inst_36663__$1 = tmp36722;
var inst_36664 = inst_36672;
var state_36699__$1 = (function (){var statearr_36727 = state_36699;
(statearr_36727[(7)] = inst_36663__$1);

(statearr_36727[(8)] = inst_36664);

return statearr_36727;
})();
var statearr_36728_38175 = state_36699__$1;
(statearr_36728_38175[(2)] = null);

(statearr_36728_38175[(1)] = (2));


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
var statearr_36730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36730[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36730[(1)] = (1));

return statearr_36730;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36699){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36699);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36731){if((e36731 instanceof Object)){
var ex__34210__auto__ = e36731;
var statearr_36732_38178 = state_36699;
(statearr_36732_38178[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36731;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38179 = state_36699;
state_36699 = G__38179;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36733 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36733[(6)] = c__34274__auto___38151);

return statearr_36733;
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
var G__36735 = arguments.length;
switch (G__36735) {
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
var c__34274__auto___38181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36778){
var state_val_36779 = (state_36778[(1)]);
if((state_val_36779 === (7))){
var inst_36774 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
var statearr_36781_38182 = state_36778__$1;
(statearr_36781_38182[(2)] = inst_36774);

(statearr_36781_38182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (1))){
var inst_36736 = [];
var inst_36737 = inst_36736;
var inst_36738 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36778__$1 = (function (){var statearr_36783 = state_36778;
(statearr_36783[(7)] = inst_36737);

(statearr_36783[(8)] = inst_36738);

return statearr_36783;
})();
var statearr_36784_38183 = state_36778__$1;
(statearr_36784_38183[(2)] = null);

(statearr_36784_38183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (4))){
var inst_36741 = (state_36778[(9)]);
var inst_36741__$1 = (state_36778[(2)]);
var inst_36742 = (inst_36741__$1 == null);
var inst_36743 = cljs.core.not(inst_36742);
var state_36778__$1 = (function (){var statearr_36786 = state_36778;
(statearr_36786[(9)] = inst_36741__$1);

return statearr_36786;
})();
if(inst_36743){
var statearr_36787_38185 = state_36778__$1;
(statearr_36787_38185[(1)] = (5));

} else {
var statearr_36788_38186 = state_36778__$1;
(statearr_36788_38186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (15))){
var inst_36768 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
var statearr_36789_38188 = state_36778__$1;
(statearr_36789_38188[(2)] = inst_36768);

(statearr_36789_38188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (13))){
var state_36778__$1 = state_36778;
var statearr_36791_38193 = state_36778__$1;
(statearr_36791_38193[(2)] = null);

(statearr_36791_38193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (6))){
var inst_36737 = (state_36778[(7)]);
var inst_36763 = inst_36737.length;
var inst_36764 = (inst_36763 > (0));
var state_36778__$1 = state_36778;
if(cljs.core.truth_(inst_36764)){
var statearr_36792_38194 = state_36778__$1;
(statearr_36792_38194[(1)] = (12));

} else {
var statearr_36793_38195 = state_36778__$1;
(statearr_36793_38195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (3))){
var inst_36776 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36778__$1,inst_36776);
} else {
if((state_val_36779 === (12))){
var inst_36737 = (state_36778[(7)]);
var inst_36766 = cljs.core.vec(inst_36737);
var state_36778__$1 = state_36778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36778__$1,(15),out,inst_36766);
} else {
if((state_val_36779 === (2))){
var state_36778__$1 = state_36778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36778__$1,(4),ch);
} else {
if((state_val_36779 === (11))){
var inst_36745 = (state_36778[(10)]);
var inst_36741 = (state_36778[(9)]);
var inst_36756 = (state_36778[(2)]);
var inst_36757 = [];
var inst_36758 = inst_36757.push(inst_36741);
var inst_36737 = inst_36757;
var inst_36738 = inst_36745;
var state_36778__$1 = (function (){var statearr_36796 = state_36778;
(statearr_36796[(7)] = inst_36737);

(statearr_36796[(11)] = inst_36758);

(statearr_36796[(12)] = inst_36756);

(statearr_36796[(8)] = inst_36738);

return statearr_36796;
})();
var statearr_36797_38202 = state_36778__$1;
(statearr_36797_38202[(2)] = null);

(statearr_36797_38202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (9))){
var inst_36737 = (state_36778[(7)]);
var inst_36754 = cljs.core.vec(inst_36737);
var state_36778__$1 = state_36778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36778__$1,(11),out,inst_36754);
} else {
if((state_val_36779 === (5))){
var inst_36745 = (state_36778[(10)]);
var inst_36738 = (state_36778[(8)]);
var inst_36741 = (state_36778[(9)]);
var inst_36745__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36741) : f.call(null,inst_36741));
var inst_36747 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36745__$1,inst_36738);
var inst_36748 = cljs.core.keyword_identical_QMARK_(inst_36738,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36749 = ((inst_36747) || (inst_36748));
var state_36778__$1 = (function (){var statearr_36800 = state_36778;
(statearr_36800[(10)] = inst_36745__$1);

return statearr_36800;
})();
if(cljs.core.truth_(inst_36749)){
var statearr_36801_38206 = state_36778__$1;
(statearr_36801_38206[(1)] = (8));

} else {
var statearr_36802_38207 = state_36778__$1;
(statearr_36802_38207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (14))){
var inst_36771 = (state_36778[(2)]);
var inst_36772 = cljs.core.async.close_BANG_(out);
var state_36778__$1 = (function (){var statearr_36804 = state_36778;
(statearr_36804[(13)] = inst_36771);

return statearr_36804;
})();
var statearr_36806_38208 = state_36778__$1;
(statearr_36806_38208[(2)] = inst_36772);

(statearr_36806_38208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (10))){
var inst_36761 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
var statearr_36807_38209 = state_36778__$1;
(statearr_36807_38209[(2)] = inst_36761);

(statearr_36807_38209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (8))){
var inst_36745 = (state_36778[(10)]);
var inst_36737 = (state_36778[(7)]);
var inst_36741 = (state_36778[(9)]);
var inst_36751 = inst_36737.push(inst_36741);
var tmp36803 = inst_36737;
var inst_36737__$1 = tmp36803;
var inst_36738 = inst_36745;
var state_36778__$1 = (function (){var statearr_36809 = state_36778;
(statearr_36809[(7)] = inst_36737__$1);

(statearr_36809[(14)] = inst_36751);

(statearr_36809[(8)] = inst_36738);

return statearr_36809;
})();
var statearr_36810_38213 = state_36778__$1;
(statearr_36810_38213[(2)] = null);

(statearr_36810_38213[(1)] = (2));


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
var statearr_36812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36812[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36812[(1)] = (1));

return statearr_36812;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36778){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36778);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36813){if((e36813 instanceof Object)){
var ex__34210__auto__ = e36813;
var statearr_36814_38214 = state_36778;
(statearr_36814_38214[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38216 = state_36778;
state_36778 = G__38216;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36816 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36816[(6)] = c__34274__auto___38181);

return statearr_36816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
