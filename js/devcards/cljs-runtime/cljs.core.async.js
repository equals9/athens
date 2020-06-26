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
var G__34338 = arguments.length;
switch (G__34338) {
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
var G__34340 = arguments.length;
switch (G__34340) {
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
var n__4666__auto___36838 = n;
var x_36839 = (0);
while(true){
if((x_36839 < n__4666__auto___36838)){
(a[x_36839] = x_36839);

var G__36840 = (x_36839 + (1));
x_36839 = G__36840;
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
return (function (p1__34353_SHARP_){
var G__34355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34353_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34355) : fret.call(null,G__34355));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34354_SHARP_){
var G__34356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34354_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34356) : fret.call(null,G__34356));
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
var G__36851 = (i + (1));
i = G__36851;
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
var len__4789__auto___36853 = arguments.length;
var i__4790__auto___36854 = (0);
while(true){
if((i__4790__auto___36854 < len__4789__auto___36853)){
args__4795__auto__.push((arguments[i__4790__auto___36854]));

var G__36855 = (i__4790__auto___36854 + (1));
i__4790__auto___36854 = G__36855;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34359){
var map__34360 = p__34359;
var map__34360__$1 = (((((!((map__34360 == null))))?(((((map__34360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34360):map__34360);
var opts = map__34360__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34357){
var G__34358 = cljs.core.first(seq34357);
var seq34357__$1 = cljs.core.next(seq34357);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34358,seq34357__$1);
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
var G__34363 = arguments.length;
switch (G__34363) {
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
var c__34273__auto___36861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34396){
var state_val_34397 = (state_34396[(1)]);
if((state_val_34397 === (7))){
var inst_34392 = (state_34396[(2)]);
var state_34396__$1 = state_34396;
var statearr_34407_36863 = state_34396__$1;
(statearr_34407_36863[(2)] = inst_34392);

(statearr_34407_36863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (1))){
var state_34396__$1 = state_34396;
var statearr_34408_36864 = state_34396__$1;
(statearr_34408_36864[(2)] = null);

(statearr_34408_36864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (4))){
var inst_34370 = (state_34396[(7)]);
var inst_34370__$1 = (state_34396[(2)]);
var inst_34375 = (inst_34370__$1 == null);
var state_34396__$1 = (function (){var statearr_34409 = state_34396;
(statearr_34409[(7)] = inst_34370__$1);

return statearr_34409;
})();
if(cljs.core.truth_(inst_34375)){
var statearr_34410_36866 = state_34396__$1;
(statearr_34410_36866[(1)] = (5));

} else {
var statearr_34411_36867 = state_34396__$1;
(statearr_34411_36867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (13))){
var state_34396__$1 = state_34396;
var statearr_34415_36869 = state_34396__$1;
(statearr_34415_36869[(2)] = null);

(statearr_34415_36869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (6))){
var inst_34370 = (state_34396[(7)]);
var state_34396__$1 = state_34396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34396__$1,(11),to,inst_34370);
} else {
if((state_val_34397 === (3))){
var inst_34394 = (state_34396[(2)]);
var state_34396__$1 = state_34396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34396__$1,inst_34394);
} else {
if((state_val_34397 === (12))){
var state_34396__$1 = state_34396;
var statearr_34416_36871 = state_34396__$1;
(statearr_34416_36871[(2)] = null);

(statearr_34416_36871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (2))){
var state_34396__$1 = state_34396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34396__$1,(4),from);
} else {
if((state_val_34397 === (11))){
var inst_34385 = (state_34396[(2)]);
var state_34396__$1 = state_34396;
if(cljs.core.truth_(inst_34385)){
var statearr_34417_36872 = state_34396__$1;
(statearr_34417_36872[(1)] = (12));

} else {
var statearr_34418_36874 = state_34396__$1;
(statearr_34418_36874[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (9))){
var state_34396__$1 = state_34396;
var statearr_34419_36875 = state_34396__$1;
(statearr_34419_36875[(2)] = null);

(statearr_34419_36875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (5))){
var state_34396__$1 = state_34396;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34423_36876 = state_34396__$1;
(statearr_34423_36876[(1)] = (8));

} else {
var statearr_34424_36877 = state_34396__$1;
(statearr_34424_36877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (14))){
var inst_34390 = (state_34396[(2)]);
var state_34396__$1 = state_34396;
var statearr_34425_36879 = state_34396__$1;
(statearr_34425_36879[(2)] = inst_34390);

(statearr_34425_36879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (10))){
var inst_34382 = (state_34396[(2)]);
var state_34396__$1 = state_34396;
var statearr_34426_36880 = state_34396__$1;
(statearr_34426_36880[(2)] = inst_34382);

(statearr_34426_36880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34397 === (8))){
var inst_34379 = cljs.core.async.close_BANG_(to);
var state_34396__$1 = state_34396;
var statearr_34427_36882 = state_34396__$1;
(statearr_34427_36882[(2)] = inst_34379);

(statearr_34427_36882[(1)] = (10));


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
var statearr_34428 = [null,null,null,null,null,null,null,null];
(statearr_34428[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34428[(1)] = (1));

return statearr_34428;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34396){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34396);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34429){if((e34429 instanceof Object)){
var ex__34210__auto__ = e34429;
var statearr_34430_36884 = state_34396;
(statearr_34430_36884[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34429;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36886 = state_34396;
state_34396 = G__36886;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34431 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34431[(6)] = c__34273__auto___36861);

return statearr_34431;
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
var process = (function (p__34432){
var vec__34433 = p__34432;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34433,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34433,(1),null);
var job = vec__34433;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34273__auto___36889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34446){
var state_val_34447 = (state_34446[(1)]);
if((state_val_34447 === (1))){
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34446__$1,(2),res,v);
} else {
if((state_val_34447 === (2))){
var inst_34440 = (state_34446[(2)]);
var inst_34441 = cljs.core.async.close_BANG_(res);
var state_34446__$1 = (function (){var statearr_34451 = state_34446;
(statearr_34451[(7)] = inst_34440);

return statearr_34451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34446__$1,inst_34441);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34446){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34446);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34456){if((e34456 instanceof Object)){
var ex__34210__auto__ = e34456;
var statearr_34457_36892 = state_34446;
(statearr_34457_36892[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36893 = state_34446;
state_34446 = G__36893;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34446){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34458 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34458[(6)] = c__34273__auto___36889);

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
var n__4666__auto___36896 = n;
var __36897 = (0);
while(true){
if((__36897 < n__4666__auto___36896)){
var G__34463_36898 = type;
var G__34463_36899__$1 = (((G__34463_36898 instanceof cljs.core.Keyword))?G__34463_36898.fqn:null);
switch (G__34463_36899__$1) {
case "compute":
var c__34273__auto___36902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36897,c__34273__auto___36902,G__34463_36898,G__34463_36899__$1,n__4666__auto___36896,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36897,c__34273__auto___36902,G__34463_36898,G__34463_36899__$1,n__4666__auto___36896,jobs,results,process,async){
return (function (state_34476){
var state_val_34477 = (state_34476[(1)]);
if((state_val_34477 === (1))){
var state_34476__$1 = state_34476;
var statearr_34478_36904 = state_34476__$1;
(statearr_34478_36904[(2)] = null);

(statearr_34478_36904[(1)] = (2));


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
var statearr_34479_36906 = state_34476__$1;
(statearr_34479_36906[(1)] = (5));

} else {
var statearr_34480_36907 = state_34476__$1;
(statearr_34480_36907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (5))){
var state_34476__$1 = state_34476;
var statearr_34481_36908 = state_34476__$1;
(statearr_34481_36908[(2)] = null);

(statearr_34481_36908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (6))){
var state_34476__$1 = state_34476;
var statearr_34482_36910 = state_34476__$1;
(statearr_34482_36910[(2)] = null);

(statearr_34482_36910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (7))){
var inst_34472 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
var statearr_34483_36911 = state_34476__$1;
(statearr_34483_36911[(2)] = inst_34472);

(statearr_34483_36911[(1)] = (3));


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
});})(__36897,c__34273__auto___36902,G__34463_36898,G__34463_36899__$1,n__4666__auto___36896,jobs,results,process,async))
;
return ((function (__36897,switch__34206__auto__,c__34273__auto___36902,G__34463_36898,G__34463_36899__$1,n__4666__auto___36896,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34484 = [null,null,null,null,null,null,null];
(statearr_34484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34484[(1)] = (1));

return statearr_34484;
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
}catch (e34485){if((e34485 instanceof Object)){
var ex__34210__auto__ = e34485;
var statearr_34486_36914 = state_34476;
(statearr_34486_36914[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36915 = state_34476;
state_34476 = G__36915;
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
;})(__36897,switch__34206__auto__,c__34273__auto___36902,G__34463_36898,G__34463_36899__$1,n__4666__auto___36896,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34487 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34487[(6)] = c__34273__auto___36902);

return statearr_34487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36897,c__34273__auto___36902,G__34463_36898,G__34463_36899__$1,n__4666__auto___36896,jobs,results,process,async))
);


break;
case "async":
var c__34273__auto___36917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36897,c__34273__auto___36917,G__34463_36898,G__34463_36899__$1,n__4666__auto___36896,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36897,c__34273__auto___36917,G__34463_36898,G__34463_36899__$1,n__4666__auto___36896,jobs,results,process,async){
return (function (state_34500){
var state_val_34501 = (state_34500[(1)]);
if((state_val_34501 === (1))){
var state_34500__$1 = state_34500;
var statearr_34502_36919 = state_34500__$1;
(statearr_34502_36919[(2)] = null);

(statearr_34502_36919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (2))){
var state_34500__$1 = state_34500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34500__$1,(4),jobs);
} else {
if((state_val_34501 === (3))){
var inst_34498 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34500__$1,inst_34498);
} else {
if((state_val_34501 === (4))){
var inst_34490 = (state_34500[(2)]);
var inst_34491 = async(inst_34490);
var state_34500__$1 = state_34500;
if(cljs.core.truth_(inst_34491)){
var statearr_34503_36921 = state_34500__$1;
(statearr_34503_36921[(1)] = (5));

} else {
var statearr_34504_36922 = state_34500__$1;
(statearr_34504_36922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (5))){
var state_34500__$1 = state_34500;
var statearr_34505_36924 = state_34500__$1;
(statearr_34505_36924[(2)] = null);

(statearr_34505_36924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (6))){
var state_34500__$1 = state_34500;
var statearr_34506_36925 = state_34500__$1;
(statearr_34506_36925[(2)] = null);

(statearr_34506_36925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (7))){
var inst_34496 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
var statearr_34507_36926 = state_34500__$1;
(statearr_34507_36926[(2)] = inst_34496);

(statearr_34507_36926[(1)] = (3));


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
});})(__36897,c__34273__auto___36917,G__34463_36898,G__34463_36899__$1,n__4666__auto___36896,jobs,results,process,async))
;
return ((function (__36897,switch__34206__auto__,c__34273__auto___36917,G__34463_36898,G__34463_36899__$1,n__4666__auto___36896,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34512 = [null,null,null,null,null,null,null];
(statearr_34512[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34512[(1)] = (1));

return statearr_34512;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34500){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34500);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34513){if((e34513 instanceof Object)){
var ex__34210__auto__ = e34513;
var statearr_34514_36929 = state_34500;
(statearr_34514_36929[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34513;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36930 = state_34500;
state_34500 = G__36930;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36897,switch__34206__auto__,c__34273__auto___36917,G__34463_36898,G__34463_36899__$1,n__4666__auto___36896,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34515 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34515[(6)] = c__34273__auto___36917);

return statearr_34515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36897,c__34273__auto___36917,G__34463_36898,G__34463_36899__$1,n__4666__auto___36896,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34463_36899__$1)].join('')));

}

var G__36932 = (__36897 + (1));
__36897 = G__36932;
continue;
} else {
}
break;
}

var c__34273__auto___36934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34538){
var state_val_34539 = (state_34538[(1)]);
if((state_val_34539 === (7))){
var inst_34534 = (state_34538[(2)]);
var state_34538__$1 = state_34538;
var statearr_34541_36935 = state_34538__$1;
(statearr_34541_36935[(2)] = inst_34534);

(statearr_34541_36935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (1))){
var state_34538__$1 = state_34538;
var statearr_34542_36937 = state_34538__$1;
(statearr_34542_36937[(2)] = null);

(statearr_34542_36937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (4))){
var inst_34519 = (state_34538[(7)]);
var inst_34519__$1 = (state_34538[(2)]);
var inst_34520 = (inst_34519__$1 == null);
var state_34538__$1 = (function (){var statearr_34544 = state_34538;
(statearr_34544[(7)] = inst_34519__$1);

return statearr_34544;
})();
if(cljs.core.truth_(inst_34520)){
var statearr_34545_36938 = state_34538__$1;
(statearr_34545_36938[(1)] = (5));

} else {
var statearr_34546_36940 = state_34538__$1;
(statearr_34546_36940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (6))){
var inst_34524 = (state_34538[(8)]);
var inst_34519 = (state_34538[(7)]);
var inst_34524__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34525 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34526 = [inst_34519,inst_34524__$1];
var inst_34527 = (new cljs.core.PersistentVector(null,2,(5),inst_34525,inst_34526,null));
var state_34538__$1 = (function (){var statearr_34547 = state_34538;
(statearr_34547[(8)] = inst_34524__$1);

return statearr_34547;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34538__$1,(8),jobs,inst_34527);
} else {
if((state_val_34539 === (3))){
var inst_34536 = (state_34538[(2)]);
var state_34538__$1 = state_34538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34538__$1,inst_34536);
} else {
if((state_val_34539 === (2))){
var state_34538__$1 = state_34538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34538__$1,(4),from);
} else {
if((state_val_34539 === (9))){
var inst_34531 = (state_34538[(2)]);
var state_34538__$1 = (function (){var statearr_34549 = state_34538;
(statearr_34549[(9)] = inst_34531);

return statearr_34549;
})();
var statearr_34550_36943 = state_34538__$1;
(statearr_34550_36943[(2)] = null);

(statearr_34550_36943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (5))){
var inst_34522 = cljs.core.async.close_BANG_(jobs);
var state_34538__$1 = state_34538;
var statearr_34551_36945 = state_34538__$1;
(statearr_34551_36945[(2)] = inst_34522);

(statearr_34551_36945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34539 === (8))){
var inst_34524 = (state_34538[(8)]);
var inst_34529 = (state_34538[(2)]);
var state_34538__$1 = (function (){var statearr_34552 = state_34538;
(statearr_34552[(10)] = inst_34529);

return statearr_34552;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34538__$1,(9),results,inst_34524);
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
var statearr_34554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34554[(1)] = (1));

return statearr_34554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34538){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34538);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34556){if((e34556 instanceof Object)){
var ex__34210__auto__ = e34556;
var statearr_34557_36948 = state_34538;
(statearr_34557_36948[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34556;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36949 = state_34538;
state_34538 = G__36949;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34538){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34563 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34563[(6)] = c__34273__auto___36934);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34601){
var state_val_34602 = (state_34601[(1)]);
if((state_val_34602 === (7))){
var inst_34597 = (state_34601[(2)]);
var state_34601__$1 = state_34601;
var statearr_34604_36952 = state_34601__$1;
(statearr_34604_36952[(2)] = inst_34597);

(statearr_34604_36952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (20))){
var state_34601__$1 = state_34601;
var statearr_34605_36953 = state_34601__$1;
(statearr_34605_36953[(2)] = null);

(statearr_34605_36953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (1))){
var state_34601__$1 = state_34601;
var statearr_34606_36955 = state_34601__$1;
(statearr_34606_36955[(2)] = null);

(statearr_34606_36955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (4))){
var inst_34566 = (state_34601[(7)]);
var inst_34566__$1 = (state_34601[(2)]);
var inst_34567 = (inst_34566__$1 == null);
var state_34601__$1 = (function (){var statearr_34607 = state_34601;
(statearr_34607[(7)] = inst_34566__$1);

return statearr_34607;
})();
if(cljs.core.truth_(inst_34567)){
var statearr_34608_36957 = state_34601__$1;
(statearr_34608_36957[(1)] = (5));

} else {
var statearr_34609_36958 = state_34601__$1;
(statearr_34609_36958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (15))){
var inst_34579 = (state_34601[(8)]);
var state_34601__$1 = state_34601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34601__$1,(18),to,inst_34579);
} else {
if((state_val_34602 === (21))){
var inst_34592 = (state_34601[(2)]);
var state_34601__$1 = state_34601;
var statearr_34610_36959 = state_34601__$1;
(statearr_34610_36959[(2)] = inst_34592);

(statearr_34610_36959[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (13))){
var inst_34594 = (state_34601[(2)]);
var state_34601__$1 = (function (){var statearr_34615 = state_34601;
(statearr_34615[(9)] = inst_34594);

return statearr_34615;
})();
var statearr_34616_36961 = state_34601__$1;
(statearr_34616_36961[(2)] = null);

(statearr_34616_36961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (6))){
var inst_34566 = (state_34601[(7)]);
var state_34601__$1 = state_34601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34601__$1,(11),inst_34566);
} else {
if((state_val_34602 === (17))){
var inst_34587 = (state_34601[(2)]);
var state_34601__$1 = state_34601;
if(cljs.core.truth_(inst_34587)){
var statearr_34620_36963 = state_34601__$1;
(statearr_34620_36963[(1)] = (19));

} else {
var statearr_34621_36964 = state_34601__$1;
(statearr_34621_36964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (3))){
var inst_34599 = (state_34601[(2)]);
var state_34601__$1 = state_34601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34601__$1,inst_34599);
} else {
if((state_val_34602 === (12))){
var inst_34576 = (state_34601[(10)]);
var state_34601__$1 = state_34601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34601__$1,(14),inst_34576);
} else {
if((state_val_34602 === (2))){
var state_34601__$1 = state_34601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34601__$1,(4),results);
} else {
if((state_val_34602 === (19))){
var state_34601__$1 = state_34601;
var statearr_34622_36966 = state_34601__$1;
(statearr_34622_36966[(2)] = null);

(statearr_34622_36966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (11))){
var inst_34576 = (state_34601[(2)]);
var state_34601__$1 = (function (){var statearr_34623 = state_34601;
(statearr_34623[(10)] = inst_34576);

return statearr_34623;
})();
var statearr_34624_36968 = state_34601__$1;
(statearr_34624_36968[(2)] = null);

(statearr_34624_36968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (9))){
var state_34601__$1 = state_34601;
var statearr_34625_36969 = state_34601__$1;
(statearr_34625_36969[(2)] = null);

(statearr_34625_36969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (5))){
var state_34601__$1 = state_34601;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34626_36971 = state_34601__$1;
(statearr_34626_36971[(1)] = (8));

} else {
var statearr_34627_36972 = state_34601__$1;
(statearr_34627_36972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (14))){
var inst_34579 = (state_34601[(8)]);
var inst_34579__$1 = (state_34601[(2)]);
var inst_34580 = (inst_34579__$1 == null);
var inst_34581 = cljs.core.not(inst_34580);
var state_34601__$1 = (function (){var statearr_34628 = state_34601;
(statearr_34628[(8)] = inst_34579__$1);

return statearr_34628;
})();
if(inst_34581){
var statearr_34629_36974 = state_34601__$1;
(statearr_34629_36974[(1)] = (15));

} else {
var statearr_34630_36975 = state_34601__$1;
(statearr_34630_36975[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (16))){
var state_34601__$1 = state_34601;
var statearr_34631_36976 = state_34601__$1;
(statearr_34631_36976[(2)] = false);

(statearr_34631_36976[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (10))){
var inst_34573 = (state_34601[(2)]);
var state_34601__$1 = state_34601;
var statearr_34632_36978 = state_34601__$1;
(statearr_34632_36978[(2)] = inst_34573);

(statearr_34632_36978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (18))){
var inst_34584 = (state_34601[(2)]);
var state_34601__$1 = state_34601;
var statearr_34633_36979 = state_34601__$1;
(statearr_34633_36979[(2)] = inst_34584);

(statearr_34633_36979[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34602 === (8))){
var inst_34570 = cljs.core.async.close_BANG_(to);
var state_34601__$1 = state_34601;
var statearr_34634_36980 = state_34601__$1;
(statearr_34634_36980[(2)] = inst_34570);

(statearr_34634_36980[(1)] = (10));


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
var statearr_34635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34635[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34635[(1)] = (1));

return statearr_34635;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34601){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34601);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34637){if((e34637 instanceof Object)){
var ex__34210__auto__ = e34637;
var statearr_34639_36988 = state_34601;
(statearr_34639_36988[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36990 = state_34601;
state_34601 = G__36990;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34601){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34601);
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
var c__34273__auto___36999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_37000 = state_34673__$1;
(statearr_34675_37000[(2)] = inst_34669);

(statearr_34675_37000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_37001 = state_34673__$1;
(statearr_34676_37001[(2)] = null);

(statearr_34676_37001[(1)] = (2));


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
var statearr_34678_37005 = state_34673__$1;
(statearr_34678_37005[(1)] = (5));

} else {
var statearr_34679_37007 = state_34673__$1;
(statearr_34679_37007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_37009 = state_34673__$1;
(statearr_34680_37009[(2)] = null);

(statearr_34680_37009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_37011 = state_34673__$1;
(statearr_34681_37011[(1)] = (9));

} else {
var statearr_34682_37012 = state_34673__$1;
(statearr_34682_37012[(1)] = (10));

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
var statearr_34683_37013 = state_34673__$1;
(statearr_34683_37013[(2)] = null);

(statearr_34683_37013[(1)] = (2));


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
var statearr_34684_37016 = state_34673__$1;
(statearr_34684_37016[(2)] = tc);

(statearr_34684_37016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34685 = state_34673;
(statearr_34685[(8)] = inst_34653);

return statearr_34685;
})();
var statearr_34686_37021 = state_34673__$1;
(statearr_34686_37021[(2)] = inst_34654);

(statearr_34686_37021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34687_37022 = state_34673__$1;
(statearr_34687_37022[(2)] = inst_34667);

(statearr_34687_37022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34688_37023 = state_34673__$1;
(statearr_34688_37023[(2)] = fc);

(statearr_34688_37023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34689_37028 = state_34673__$1;
(statearr_34689_37028[(1)] = (12));

} else {
var statearr_34690_37029 = state_34673__$1;
(statearr_34690_37029[(1)] = (13));

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
}catch (e34692){if((e34692 instanceof Object)){
var ex__34210__auto__ = e34692;
var statearr_34693_37037 = state_34673;
(statearr_34693_37037[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37040 = state_34673;
state_34673 = G__37040;
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
var state__34275__auto__ = (function (){var statearr_34694 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34694[(6)] = c__34273__auto___36999);

return statearr_34694;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34715){
var state_val_34716 = (state_34715[(1)]);
if((state_val_34716 === (7))){
var inst_34711 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34717_37054 = state_34715__$1;
(statearr_34717_37054[(2)] = inst_34711);

(statearr_34717_37054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (1))){
var inst_34695 = init;
var state_34715__$1 = (function (){var statearr_34718 = state_34715;
(statearr_34718[(7)] = inst_34695);

return statearr_34718;
})();
var statearr_34719_37057 = state_34715__$1;
(statearr_34719_37057[(2)] = null);

(statearr_34719_37057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (4))){
var inst_34698 = (state_34715[(8)]);
var inst_34698__$1 = (state_34715[(2)]);
var inst_34699 = (inst_34698__$1 == null);
var state_34715__$1 = (function (){var statearr_34720 = state_34715;
(statearr_34720[(8)] = inst_34698__$1);

return statearr_34720;
})();
if(cljs.core.truth_(inst_34699)){
var statearr_34721_37065 = state_34715__$1;
(statearr_34721_37065[(1)] = (5));

} else {
var statearr_34722_37066 = state_34715__$1;
(statearr_34722_37066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (6))){
var inst_34698 = (state_34715[(8)]);
var inst_34695 = (state_34715[(7)]);
var inst_34702 = (state_34715[(9)]);
var inst_34702__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34695,inst_34698) : f.call(null,inst_34695,inst_34698));
var inst_34703 = cljs.core.reduced_QMARK_(inst_34702__$1);
var state_34715__$1 = (function (){var statearr_34723 = state_34715;
(statearr_34723[(9)] = inst_34702__$1);

return statearr_34723;
})();
if(inst_34703){
var statearr_34724_37073 = state_34715__$1;
(statearr_34724_37073[(1)] = (8));

} else {
var statearr_34725_37076 = state_34715__$1;
(statearr_34725_37076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (3))){
var inst_34713 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34715__$1,inst_34713);
} else {
if((state_val_34716 === (2))){
var state_34715__$1 = state_34715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34715__$1,(4),ch);
} else {
if((state_val_34716 === (9))){
var inst_34702 = (state_34715[(9)]);
var inst_34695 = inst_34702;
var state_34715__$1 = (function (){var statearr_34726 = state_34715;
(statearr_34726[(7)] = inst_34695);

return statearr_34726;
})();
var statearr_34727_37086 = state_34715__$1;
(statearr_34727_37086[(2)] = null);

(statearr_34727_37086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (5))){
var inst_34695 = (state_34715[(7)]);
var state_34715__$1 = state_34715;
var statearr_34728_37089 = state_34715__$1;
(statearr_34728_37089[(2)] = inst_34695);

(statearr_34728_37089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (10))){
var inst_34709 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34729_37092 = state_34715__$1;
(statearr_34729_37092[(2)] = inst_34709);

(statearr_34729_37092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (8))){
var inst_34702 = (state_34715[(9)]);
var inst_34705 = cljs.core.deref(inst_34702);
var state_34715__$1 = state_34715;
var statearr_34730_37094 = state_34715__$1;
(statearr_34730_37094[(2)] = inst_34705);

(statearr_34730_37094[(1)] = (10));


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
var statearr_34731 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34731[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34731[(1)] = (1));

return statearr_34731;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34715){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34715);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34732){if((e34732 instanceof Object)){
var ex__34210__auto__ = e34732;
var statearr_34733_37103 = state_34715;
(statearr_34733_37103[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34732;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37110 = state_34715;
state_34715 = G__37110;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34715){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34734 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34734[(6)] = c__34273__auto__);

return statearr_34734;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34740){
var state_val_34741 = (state_34740[(1)]);
if((state_val_34741 === (1))){
var inst_34735 = cljs.core.async.reduce(f__$1,init,ch);
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34740__$1,(2),inst_34735);
} else {
if((state_val_34741 === (2))){
var inst_34737 = (state_34740[(2)]);
var inst_34738 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34737) : f__$1.call(null,inst_34737));
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34740__$1,inst_34738);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34745 = [null,null,null,null,null,null,null];
(statearr_34745[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34745[(1)] = (1));

return statearr_34745;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34740){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34740);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34746){if((e34746 instanceof Object)){
var ex__34210__auto__ = e34746;
var statearr_34747_37123 = state_34740;
(statearr_34747_37123[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34746;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37124 = state_34740;
state_34740 = G__37124;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34740){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34751 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34751[(6)] = c__34273__auto__);

return statearr_34751;
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
var G__34755 = arguments.length;
switch (G__34755) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34783){
var state_val_34784 = (state_34783[(1)]);
if((state_val_34784 === (7))){
var inst_34765 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
var statearr_34785_37137 = state_34783__$1;
(statearr_34785_37137[(2)] = inst_34765);

(statearr_34785_37137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (1))){
var inst_34757 = cljs.core.seq(coll);
var inst_34758 = inst_34757;
var state_34783__$1 = (function (){var statearr_34786 = state_34783;
(statearr_34786[(7)] = inst_34758);

return statearr_34786;
})();
var statearr_34787_37145 = state_34783__$1;
(statearr_34787_37145[(2)] = null);

(statearr_34787_37145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (4))){
var inst_34758 = (state_34783[(7)]);
var inst_34763 = cljs.core.first(inst_34758);
var state_34783__$1 = state_34783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34783__$1,(7),ch,inst_34763);
} else {
if((state_val_34784 === (13))){
var inst_34777 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
var statearr_34789_37148 = state_34783__$1;
(statearr_34789_37148[(2)] = inst_34777);

(statearr_34789_37148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (6))){
var inst_34768 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
if(cljs.core.truth_(inst_34768)){
var statearr_34790_37150 = state_34783__$1;
(statearr_34790_37150[(1)] = (8));

} else {
var statearr_34791_37152 = state_34783__$1;
(statearr_34791_37152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (3))){
var inst_34781 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34783__$1,inst_34781);
} else {
if((state_val_34784 === (12))){
var state_34783__$1 = state_34783;
var statearr_34793_37154 = state_34783__$1;
(statearr_34793_37154[(2)] = null);

(statearr_34793_37154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (2))){
var inst_34758 = (state_34783[(7)]);
var state_34783__$1 = state_34783;
if(cljs.core.truth_(inst_34758)){
var statearr_34794_37157 = state_34783__$1;
(statearr_34794_37157[(1)] = (4));

} else {
var statearr_34795_37161 = state_34783__$1;
(statearr_34795_37161[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (11))){
var inst_34774 = cljs.core.async.close_BANG_(ch);
var state_34783__$1 = state_34783;
var statearr_34796_37164 = state_34783__$1;
(statearr_34796_37164[(2)] = inst_34774);

(statearr_34796_37164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (9))){
var state_34783__$1 = state_34783;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34797_37168 = state_34783__$1;
(statearr_34797_37168[(1)] = (11));

} else {
var statearr_34799_37169 = state_34783__$1;
(statearr_34799_37169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (5))){
var inst_34758 = (state_34783[(7)]);
var state_34783__$1 = state_34783;
var statearr_34801_37170 = state_34783__$1;
(statearr_34801_37170[(2)] = inst_34758);

(statearr_34801_37170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (10))){
var inst_34779 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
var statearr_34802_37171 = state_34783__$1;
(statearr_34802_37171[(2)] = inst_34779);

(statearr_34802_37171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (8))){
var inst_34758 = (state_34783[(7)]);
var inst_34770 = cljs.core.next(inst_34758);
var inst_34758__$1 = inst_34770;
var state_34783__$1 = (function (){var statearr_34806 = state_34783;
(statearr_34806[(7)] = inst_34758__$1);

return statearr_34806;
})();
var statearr_34807_37178 = state_34783__$1;
(statearr_34807_37178[(2)] = null);

(statearr_34807_37178[(1)] = (2));


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
var statearr_34808 = [null,null,null,null,null,null,null,null];
(statearr_34808[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34808[(1)] = (1));

return statearr_34808;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34783){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34783);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34809){if((e34809 instanceof Object)){
var ex__34210__auto__ = e34809;
var statearr_34810_37183 = state_34783;
(statearr_34810_37183[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34809;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37188 = state_34783;
state_34783 = G__37188;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34811 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34811[(6)] = c__34273__auto__);

return statearr_34811;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34819 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34819 = (function (ch,cs,meta34820){
this.ch = ch;
this.cs = cs;
this.meta34820 = meta34820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34821,meta34820__$1){
var self__ = this;
var _34821__$1 = this;
return (new cljs.core.async.t_cljs$core$async34819(self__.ch,self__.cs,meta34820__$1));
}));

(cljs.core.async.t_cljs$core$async34819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34821){
var self__ = this;
var _34821__$1 = this;
return self__.meta34820;
}));

(cljs.core.async.t_cljs$core$async34819.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34819.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34819.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34819.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34819.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34819.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34820","meta34820",-1646107869,null)], null);
}));

(cljs.core.async.t_cljs$core$async34819.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34819");

(cljs.core.async.t_cljs$core$async34819.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34819");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34819.
 */
cljs.core.async.__GT_t_cljs$core$async34819 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34819(ch__$1,cs__$1,meta34820){
return (new cljs.core.async.t_cljs$core$async34819(ch__$1,cs__$1,meta34820));
});

}

return (new cljs.core.async.t_cljs$core$async34819(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34273__auto___37246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34966){
var state_val_34967 = (state_34966[(1)]);
if((state_val_34967 === (7))){
var inst_34961 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_34968_37251 = state_34966__$1;
(statearr_34968_37251[(2)] = inst_34961);

(statearr_34968_37251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (20))){
var inst_34858 = (state_34966[(7)]);
var inst_34870 = cljs.core.first(inst_34858);
var inst_34871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34870,(0),null);
var inst_34872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34870,(1),null);
var state_34966__$1 = (function (){var statearr_34970 = state_34966;
(statearr_34970[(8)] = inst_34871);

return statearr_34970;
})();
if(cljs.core.truth_(inst_34872)){
var statearr_34971_37260 = state_34966__$1;
(statearr_34971_37260[(1)] = (22));

} else {
var statearr_34972_37261 = state_34966__$1;
(statearr_34972_37261[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (27))){
var inst_34900 = (state_34966[(9)]);
var inst_34907 = (state_34966[(10)]);
var inst_34827 = (state_34966[(11)]);
var inst_34902 = (state_34966[(12)]);
var inst_34907__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34900,inst_34902);
var inst_34908 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34907__$1,inst_34827,done);
var state_34966__$1 = (function (){var statearr_34974 = state_34966;
(statearr_34974[(10)] = inst_34907__$1);

return statearr_34974;
})();
if(cljs.core.truth_(inst_34908)){
var statearr_34976_37269 = state_34966__$1;
(statearr_34976_37269[(1)] = (30));

} else {
var statearr_34977_37271 = state_34966__$1;
(statearr_34977_37271[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (1))){
var state_34966__$1 = state_34966;
var statearr_34978_37273 = state_34966__$1;
(statearr_34978_37273[(2)] = null);

(statearr_34978_37273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (24))){
var inst_34858 = (state_34966[(7)]);
var inst_34877 = (state_34966[(2)]);
var inst_34878 = cljs.core.next(inst_34858);
var inst_34836 = inst_34878;
var inst_34837 = null;
var inst_34838 = (0);
var inst_34839 = (0);
var state_34966__$1 = (function (){var statearr_34982 = state_34966;
(statearr_34982[(13)] = inst_34837);

(statearr_34982[(14)] = inst_34877);

(statearr_34982[(15)] = inst_34836);

(statearr_34982[(16)] = inst_34838);

(statearr_34982[(17)] = inst_34839);

return statearr_34982;
})();
var statearr_34983_37282 = state_34966__$1;
(statearr_34983_37282[(2)] = null);

(statearr_34983_37282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (39))){
var state_34966__$1 = state_34966;
var statearr_34987_37286 = state_34966__$1;
(statearr_34987_37286[(2)] = null);

(statearr_34987_37286[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (4))){
var inst_34827 = (state_34966[(11)]);
var inst_34827__$1 = (state_34966[(2)]);
var inst_34828 = (inst_34827__$1 == null);
var state_34966__$1 = (function (){var statearr_34988 = state_34966;
(statearr_34988[(11)] = inst_34827__$1);

return statearr_34988;
})();
if(cljs.core.truth_(inst_34828)){
var statearr_34989_37287 = state_34966__$1;
(statearr_34989_37287[(1)] = (5));

} else {
var statearr_34990_37288 = state_34966__$1;
(statearr_34990_37288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (15))){
var inst_34837 = (state_34966[(13)]);
var inst_34836 = (state_34966[(15)]);
var inst_34838 = (state_34966[(16)]);
var inst_34839 = (state_34966[(17)]);
var inst_34854 = (state_34966[(2)]);
var inst_34855 = (inst_34839 + (1));
var tmp34984 = inst_34837;
var tmp34985 = inst_34836;
var tmp34986 = inst_34838;
var inst_34836__$1 = tmp34985;
var inst_34837__$1 = tmp34984;
var inst_34838__$1 = tmp34986;
var inst_34839__$1 = inst_34855;
var state_34966__$1 = (function (){var statearr_34991 = state_34966;
(statearr_34991[(13)] = inst_34837__$1);

(statearr_34991[(15)] = inst_34836__$1);

(statearr_34991[(16)] = inst_34838__$1);

(statearr_34991[(17)] = inst_34839__$1);

(statearr_34991[(18)] = inst_34854);

return statearr_34991;
})();
var statearr_34992_37295 = state_34966__$1;
(statearr_34992_37295[(2)] = null);

(statearr_34992_37295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (21))){
var inst_34881 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_34996_37296 = state_34966__$1;
(statearr_34996_37296[(2)] = inst_34881);

(statearr_34996_37296[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (31))){
var inst_34907 = (state_34966[(10)]);
var inst_34911 = done(null);
var inst_34912 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34907);
var state_34966__$1 = (function (){var statearr_35003 = state_34966;
(statearr_35003[(19)] = inst_34911);

return statearr_35003;
})();
var statearr_35004_37301 = state_34966__$1;
(statearr_35004_37301[(2)] = inst_34912);

(statearr_35004_37301[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (32))){
var inst_34901 = (state_34966[(20)]);
var inst_34899 = (state_34966[(21)]);
var inst_34900 = (state_34966[(9)]);
var inst_34902 = (state_34966[(12)]);
var inst_34914 = (state_34966[(2)]);
var inst_34915 = (inst_34902 + (1));
var tmp34993 = inst_34901;
var tmp34994 = inst_34899;
var tmp34995 = inst_34900;
var inst_34899__$1 = tmp34994;
var inst_34900__$1 = tmp34995;
var inst_34901__$1 = tmp34993;
var inst_34902__$1 = inst_34915;
var state_34966__$1 = (function (){var statearr_35005 = state_34966;
(statearr_35005[(20)] = inst_34901__$1);

(statearr_35005[(21)] = inst_34899__$1);

(statearr_35005[(22)] = inst_34914);

(statearr_35005[(9)] = inst_34900__$1);

(statearr_35005[(12)] = inst_34902__$1);

return statearr_35005;
})();
var statearr_35006_37311 = state_34966__$1;
(statearr_35006_37311[(2)] = null);

(statearr_35006_37311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (40))){
var inst_34930 = (state_34966[(23)]);
var inst_34934 = done(null);
var inst_34935 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34930);
var state_34966__$1 = (function (){var statearr_35007 = state_34966;
(statearr_35007[(24)] = inst_34934);

return statearr_35007;
})();
var statearr_35008_37319 = state_34966__$1;
(statearr_35008_37319[(2)] = inst_34935);

(statearr_35008_37319[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (33))){
var inst_34918 = (state_34966[(25)]);
var inst_34920 = cljs.core.chunked_seq_QMARK_(inst_34918);
var state_34966__$1 = state_34966;
if(inst_34920){
var statearr_35009_37326 = state_34966__$1;
(statearr_35009_37326[(1)] = (36));

} else {
var statearr_35010_37327 = state_34966__$1;
(statearr_35010_37327[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (13))){
var inst_34848 = (state_34966[(26)]);
var inst_34851 = cljs.core.async.close_BANG_(inst_34848);
var state_34966__$1 = state_34966;
var statearr_35011_37330 = state_34966__$1;
(statearr_35011_37330[(2)] = inst_34851);

(statearr_35011_37330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (22))){
var inst_34871 = (state_34966[(8)]);
var inst_34874 = cljs.core.async.close_BANG_(inst_34871);
var state_34966__$1 = state_34966;
var statearr_35012_37338 = state_34966__$1;
(statearr_35012_37338[(2)] = inst_34874);

(statearr_35012_37338[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (36))){
var inst_34918 = (state_34966[(25)]);
var inst_34922 = cljs.core.chunk_first(inst_34918);
var inst_34926 = cljs.core.chunk_rest(inst_34918);
var inst_34927 = cljs.core.count(inst_34922);
var inst_34899 = inst_34926;
var inst_34900 = inst_34922;
var inst_34901 = inst_34927;
var inst_34902 = (0);
var state_34966__$1 = (function (){var statearr_35013 = state_34966;
(statearr_35013[(20)] = inst_34901);

(statearr_35013[(21)] = inst_34899);

(statearr_35013[(9)] = inst_34900);

(statearr_35013[(12)] = inst_34902);

return statearr_35013;
})();
var statearr_35014_37344 = state_34966__$1;
(statearr_35014_37344[(2)] = null);

(statearr_35014_37344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (41))){
var inst_34918 = (state_34966[(25)]);
var inst_34937 = (state_34966[(2)]);
var inst_34938 = cljs.core.next(inst_34918);
var inst_34899 = inst_34938;
var inst_34900 = null;
var inst_34901 = (0);
var inst_34902 = (0);
var state_34966__$1 = (function (){var statearr_35015 = state_34966;
(statearr_35015[(20)] = inst_34901);

(statearr_35015[(21)] = inst_34899);

(statearr_35015[(9)] = inst_34900);

(statearr_35015[(27)] = inst_34937);

(statearr_35015[(12)] = inst_34902);

return statearr_35015;
})();
var statearr_35016_37357 = state_34966__$1;
(statearr_35016_37357[(2)] = null);

(statearr_35016_37357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (43))){
var state_34966__$1 = state_34966;
var statearr_35017_37360 = state_34966__$1;
(statearr_35017_37360[(2)] = null);

(statearr_35017_37360[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (29))){
var inst_34946 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_35018_37363 = state_34966__$1;
(statearr_35018_37363[(2)] = inst_34946);

(statearr_35018_37363[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (44))){
var inst_34958 = (state_34966[(2)]);
var state_34966__$1 = (function (){var statearr_35019 = state_34966;
(statearr_35019[(28)] = inst_34958);

return statearr_35019;
})();
var statearr_35020_37366 = state_34966__$1;
(statearr_35020_37366[(2)] = null);

(statearr_35020_37366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (6))){
var inst_34891 = (state_34966[(29)]);
var inst_34890 = cljs.core.deref(cs);
var inst_34891__$1 = cljs.core.keys(inst_34890);
var inst_34892 = cljs.core.count(inst_34891__$1);
var inst_34893 = cljs.core.reset_BANG_(dctr,inst_34892);
var inst_34898 = cljs.core.seq(inst_34891__$1);
var inst_34899 = inst_34898;
var inst_34900 = null;
var inst_34901 = (0);
var inst_34902 = (0);
var state_34966__$1 = (function (){var statearr_35021 = state_34966;
(statearr_35021[(29)] = inst_34891__$1);

(statearr_35021[(20)] = inst_34901);

(statearr_35021[(21)] = inst_34899);

(statearr_35021[(9)] = inst_34900);

(statearr_35021[(30)] = inst_34893);

(statearr_35021[(12)] = inst_34902);

return statearr_35021;
})();
var statearr_35022_37374 = state_34966__$1;
(statearr_35022_37374[(2)] = null);

(statearr_35022_37374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (28))){
var inst_34918 = (state_34966[(25)]);
var inst_34899 = (state_34966[(21)]);
var inst_34918__$1 = cljs.core.seq(inst_34899);
var state_34966__$1 = (function (){var statearr_35023 = state_34966;
(statearr_35023[(25)] = inst_34918__$1);

return statearr_35023;
})();
if(inst_34918__$1){
var statearr_35024_37382 = state_34966__$1;
(statearr_35024_37382[(1)] = (33));

} else {
var statearr_35025_37384 = state_34966__$1;
(statearr_35025_37384[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (25))){
var inst_34901 = (state_34966[(20)]);
var inst_34902 = (state_34966[(12)]);
var inst_34904 = (inst_34902 < inst_34901);
var inst_34905 = inst_34904;
var state_34966__$1 = state_34966;
if(cljs.core.truth_(inst_34905)){
var statearr_35026_37387 = state_34966__$1;
(statearr_35026_37387[(1)] = (27));

} else {
var statearr_35027_37388 = state_34966__$1;
(statearr_35027_37388[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (34))){
var state_34966__$1 = state_34966;
var statearr_35028_37390 = state_34966__$1;
(statearr_35028_37390[(2)] = null);

(statearr_35028_37390[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (17))){
var state_34966__$1 = state_34966;
var statearr_35029_37394 = state_34966__$1;
(statearr_35029_37394[(2)] = null);

(statearr_35029_37394[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (3))){
var inst_34963 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34966__$1,inst_34963);
} else {
if((state_val_34967 === (12))){
var inst_34886 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_35030_37395 = state_34966__$1;
(statearr_35030_37395[(2)] = inst_34886);

(statearr_35030_37395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (2))){
var state_34966__$1 = state_34966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34966__$1,(4),ch);
} else {
if((state_val_34967 === (23))){
var state_34966__$1 = state_34966;
var statearr_35031_37403 = state_34966__$1;
(statearr_35031_37403[(2)] = null);

(statearr_35031_37403[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (35))){
var inst_34944 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_35032_37404 = state_34966__$1;
(statearr_35032_37404[(2)] = inst_34944);

(statearr_35032_37404[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (19))){
var inst_34858 = (state_34966[(7)]);
var inst_34862 = cljs.core.chunk_first(inst_34858);
var inst_34863 = cljs.core.chunk_rest(inst_34858);
var inst_34864 = cljs.core.count(inst_34862);
var inst_34836 = inst_34863;
var inst_34837 = inst_34862;
var inst_34838 = inst_34864;
var inst_34839 = (0);
var state_34966__$1 = (function (){var statearr_35033 = state_34966;
(statearr_35033[(13)] = inst_34837);

(statearr_35033[(15)] = inst_34836);

(statearr_35033[(16)] = inst_34838);

(statearr_35033[(17)] = inst_34839);

return statearr_35033;
})();
var statearr_35034_37408 = state_34966__$1;
(statearr_35034_37408[(2)] = null);

(statearr_35034_37408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (11))){
var inst_34858 = (state_34966[(7)]);
var inst_34836 = (state_34966[(15)]);
var inst_34858__$1 = cljs.core.seq(inst_34836);
var state_34966__$1 = (function (){var statearr_35035 = state_34966;
(statearr_35035[(7)] = inst_34858__$1);

return statearr_35035;
})();
if(inst_34858__$1){
var statearr_35036_37415 = state_34966__$1;
(statearr_35036_37415[(1)] = (16));

} else {
var statearr_35037_37416 = state_34966__$1;
(statearr_35037_37416[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (9))){
var inst_34888 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_35038_37417 = state_34966__$1;
(statearr_35038_37417[(2)] = inst_34888);

(statearr_35038_37417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (5))){
var inst_34834 = cljs.core.deref(cs);
var inst_34835 = cljs.core.seq(inst_34834);
var inst_34836 = inst_34835;
var inst_34837 = null;
var inst_34838 = (0);
var inst_34839 = (0);
var state_34966__$1 = (function (){var statearr_35039 = state_34966;
(statearr_35039[(13)] = inst_34837);

(statearr_35039[(15)] = inst_34836);

(statearr_35039[(16)] = inst_34838);

(statearr_35039[(17)] = inst_34839);

return statearr_35039;
})();
var statearr_35040_37422 = state_34966__$1;
(statearr_35040_37422[(2)] = null);

(statearr_35040_37422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (14))){
var state_34966__$1 = state_34966;
var statearr_35041_37424 = state_34966__$1;
(statearr_35041_37424[(2)] = null);

(statearr_35041_37424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (45))){
var inst_34955 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_35042_37425 = state_34966__$1;
(statearr_35042_37425[(2)] = inst_34955);

(statearr_35042_37425[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (26))){
var inst_34891 = (state_34966[(29)]);
var inst_34948 = (state_34966[(2)]);
var inst_34952 = cljs.core.seq(inst_34891);
var state_34966__$1 = (function (){var statearr_35043 = state_34966;
(statearr_35043[(31)] = inst_34948);

return statearr_35043;
})();
if(inst_34952){
var statearr_35044_37429 = state_34966__$1;
(statearr_35044_37429[(1)] = (42));

} else {
var statearr_35047_37430 = state_34966__$1;
(statearr_35047_37430[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (16))){
var inst_34858 = (state_34966[(7)]);
var inst_34860 = cljs.core.chunked_seq_QMARK_(inst_34858);
var state_34966__$1 = state_34966;
if(inst_34860){
var statearr_35049_37433 = state_34966__$1;
(statearr_35049_37433[(1)] = (19));

} else {
var statearr_35051_37434 = state_34966__$1;
(statearr_35051_37434[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (38))){
var inst_34941 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_35054_37438 = state_34966__$1;
(statearr_35054_37438[(2)] = inst_34941);

(statearr_35054_37438[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (30))){
var state_34966__$1 = state_34966;
var statearr_35055_37440 = state_34966__$1;
(statearr_35055_37440[(2)] = null);

(statearr_35055_37440[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (10))){
var inst_34837 = (state_34966[(13)]);
var inst_34839 = (state_34966[(17)]);
var inst_34847 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34837,inst_34839);
var inst_34848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34847,(0),null);
var inst_34849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34847,(1),null);
var state_34966__$1 = (function (){var statearr_35056 = state_34966;
(statearr_35056[(26)] = inst_34848);

return statearr_35056;
})();
if(cljs.core.truth_(inst_34849)){
var statearr_35057_37447 = state_34966__$1;
(statearr_35057_37447[(1)] = (13));

} else {
var statearr_35058_37448 = state_34966__$1;
(statearr_35058_37448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (18))){
var inst_34884 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_35059_37455 = state_34966__$1;
(statearr_35059_37455[(2)] = inst_34884);

(statearr_35059_37455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (42))){
var state_34966__$1 = state_34966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34966__$1,(45),dchan);
} else {
if((state_val_34967 === (37))){
var inst_34918 = (state_34966[(25)]);
var inst_34930 = (state_34966[(23)]);
var inst_34827 = (state_34966[(11)]);
var inst_34930__$1 = cljs.core.first(inst_34918);
var inst_34931 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34930__$1,inst_34827,done);
var state_34966__$1 = (function (){var statearr_35060 = state_34966;
(statearr_35060[(23)] = inst_34930__$1);

return statearr_35060;
})();
if(cljs.core.truth_(inst_34931)){
var statearr_35062_37461 = state_34966__$1;
(statearr_35062_37461[(1)] = (39));

} else {
var statearr_35064_37465 = state_34966__$1;
(statearr_35064_37465[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (8))){
var inst_34838 = (state_34966[(16)]);
var inst_34839 = (state_34966[(17)]);
var inst_34841 = (inst_34839 < inst_34838);
var inst_34842 = inst_34841;
var state_34966__$1 = state_34966;
if(cljs.core.truth_(inst_34842)){
var statearr_35067_37472 = state_34966__$1;
(statearr_35067_37472[(1)] = (10));

} else {
var statearr_35069_37474 = state_34966__$1;
(statearr_35069_37474[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34966){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34966);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35072){if((e35072 instanceof Object)){
var ex__34210__auto__ = e35072;
var statearr_35073_37482 = state_34966;
(statearr_35073_37482[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37488 = state_34966;
state_34966 = G__37488;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34966){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35074 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35074[(6)] = c__34273__auto___37246);

return statearr_35074;
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
var G__35079 = arguments.length;
switch (G__35079) {
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
var len__4789__auto___37539 = arguments.length;
var i__4790__auto___37540 = (0);
while(true){
if((i__4790__auto___37540 < len__4789__auto___37539)){
args__4795__auto__.push((arguments[i__4790__auto___37540]));

var G__37546 = (i__4790__auto___37540 + (1));
i__4790__auto___37540 = G__37546;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35165){
var map__35167 = p__35165;
var map__35167__$1 = (((((!((map__35167 == null))))?(((((map__35167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35167):map__35167);
var opts = map__35167__$1;
var statearr_35177_37551 = state;
(statearr_35177_37551[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35183_37556 = state;
(statearr_35183_37556[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35188_37560 = state;
(statearr_35188_37560[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35144){
var G__35145 = cljs.core.first(seq35144);
var seq35144__$1 = cljs.core.next(seq35144);
var G__35146 = cljs.core.first(seq35144__$1);
var seq35144__$2 = cljs.core.next(seq35144__$1);
var G__35147 = cljs.core.first(seq35144__$2);
var seq35144__$3 = cljs.core.next(seq35144__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35145,G__35146,G__35147,seq35144__$3);
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
var c__34273__auto___37628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35473){
var state_val_35474 = (state_35473[(1)]);
if((state_val_35474 === (7))){
var inst_35303 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35475_37631 = state_35473__$1;
(statearr_35475_37631[(2)] = inst_35303);

(statearr_35475_37631[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (20))){
var inst_35319 = (state_35473[(7)]);
var state_35473__$1 = state_35473;
var statearr_35478_37641 = state_35473__$1;
(statearr_35478_37641[(2)] = inst_35319);

(statearr_35478_37641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (27))){
var state_35473__$1 = state_35473;
var statearr_35479_37642 = state_35473__$1;
(statearr_35479_37642[(2)] = null);

(statearr_35479_37642[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (1))){
var inst_35285 = (state_35473[(8)]);
var inst_35285__$1 = calc_state();
var inst_35289 = (inst_35285__$1 == null);
var inst_35290 = cljs.core.not(inst_35289);
var state_35473__$1 = (function (){var statearr_35480 = state_35473;
(statearr_35480[(8)] = inst_35285__$1);

return statearr_35480;
})();
if(inst_35290){
var statearr_35481_37649 = state_35473__$1;
(statearr_35481_37649[(1)] = (2));

} else {
var statearr_35482_37651 = state_35473__$1;
(statearr_35482_37651[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (24))){
var inst_35365 = (state_35473[(9)]);
var inst_35447 = (state_35473[(10)]);
var inst_35351 = (state_35473[(11)]);
var inst_35447__$1 = (inst_35351.cljs$core$IFn$_invoke$arity$1 ? inst_35351.cljs$core$IFn$_invoke$arity$1(inst_35365) : inst_35351.call(null,inst_35365));
var state_35473__$1 = (function (){var statearr_35485 = state_35473;
(statearr_35485[(10)] = inst_35447__$1);

return statearr_35485;
})();
if(cljs.core.truth_(inst_35447__$1)){
var statearr_35489_37656 = state_35473__$1;
(statearr_35489_37656[(1)] = (29));

} else {
var statearr_35492_37657 = state_35473__$1;
(statearr_35492_37657[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (4))){
var inst_35306 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
if(cljs.core.truth_(inst_35306)){
var statearr_35495_37663 = state_35473__$1;
(statearr_35495_37663[(1)] = (8));

} else {
var statearr_35497_37665 = state_35473__$1;
(statearr_35497_37665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (15))){
var inst_35345 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
if(cljs.core.truth_(inst_35345)){
var statearr_35499_37667 = state_35473__$1;
(statearr_35499_37667[(1)] = (19));

} else {
var statearr_35500_37669 = state_35473__$1;
(statearr_35500_37669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (21))){
var inst_35350 = (state_35473[(12)]);
var inst_35350__$1 = (state_35473[(2)]);
var inst_35351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35350__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35350__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35350__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35473__$1 = (function (){var statearr_35507 = state_35473;
(statearr_35507[(13)] = inst_35352);

(statearr_35507[(12)] = inst_35350__$1);

(statearr_35507[(11)] = inst_35351);

return statearr_35507;
})();
return cljs.core.async.ioc_alts_BANG_(state_35473__$1,(22),inst_35354);
} else {
if((state_val_35474 === (31))){
var inst_35455 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
if(cljs.core.truth_(inst_35455)){
var statearr_35514_37673 = state_35473__$1;
(statearr_35514_37673[(1)] = (32));

} else {
var statearr_35518_37674 = state_35473__$1;
(statearr_35518_37674[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (32))){
var inst_35364 = (state_35473[(14)]);
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35473__$1,(35),out,inst_35364);
} else {
if((state_val_35474 === (33))){
var inst_35350 = (state_35473[(12)]);
var inst_35319 = inst_35350;
var state_35473__$1 = (function (){var statearr_35521 = state_35473;
(statearr_35521[(7)] = inst_35319);

return statearr_35521;
})();
var statearr_35522_37677 = state_35473__$1;
(statearr_35522_37677[(2)] = null);

(statearr_35522_37677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (13))){
var inst_35319 = (state_35473[(7)]);
var inst_35333 = inst_35319.cljs$lang$protocol_mask$partition0$;
var inst_35334 = (inst_35333 & (64));
var inst_35335 = inst_35319.cljs$core$ISeq$;
var inst_35336 = (cljs.core.PROTOCOL_SENTINEL === inst_35335);
var inst_35337 = ((inst_35334) || (inst_35336));
var state_35473__$1 = state_35473;
if(cljs.core.truth_(inst_35337)){
var statearr_35525_37680 = state_35473__$1;
(statearr_35525_37680[(1)] = (16));

} else {
var statearr_35528_37681 = state_35473__$1;
(statearr_35528_37681[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (22))){
var inst_35365 = (state_35473[(9)]);
var inst_35364 = (state_35473[(14)]);
var inst_35363 = (state_35473[(2)]);
var inst_35364__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35363,(0),null);
var inst_35365__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35363,(1),null);
var inst_35367 = (inst_35364__$1 == null);
var inst_35369 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35365__$1,change);
var inst_35370 = ((inst_35367) || (inst_35369));
var state_35473__$1 = (function (){var statearr_35534 = state_35473;
(statearr_35534[(9)] = inst_35365__$1);

(statearr_35534[(14)] = inst_35364__$1);

return statearr_35534;
})();
if(cljs.core.truth_(inst_35370)){
var statearr_35537_37686 = state_35473__$1;
(statearr_35537_37686[(1)] = (23));

} else {
var statearr_35538_37687 = state_35473__$1;
(statearr_35538_37687[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (36))){
var inst_35350 = (state_35473[(12)]);
var inst_35319 = inst_35350;
var state_35473__$1 = (function (){var statearr_35541 = state_35473;
(statearr_35541[(7)] = inst_35319);

return statearr_35541;
})();
var statearr_35542_37691 = state_35473__$1;
(statearr_35542_37691[(2)] = null);

(statearr_35542_37691[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (29))){
var inst_35447 = (state_35473[(10)]);
var state_35473__$1 = state_35473;
var statearr_35544_37693 = state_35473__$1;
(statearr_35544_37693[(2)] = inst_35447);

(statearr_35544_37693[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (6))){
var state_35473__$1 = state_35473;
var statearr_35549_37695 = state_35473__$1;
(statearr_35549_37695[(2)] = false);

(statearr_35549_37695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (28))){
var inst_35443 = (state_35473[(2)]);
var inst_35444 = calc_state();
var inst_35319 = inst_35444;
var state_35473__$1 = (function (){var statearr_35555 = state_35473;
(statearr_35555[(7)] = inst_35319);

(statearr_35555[(15)] = inst_35443);

return statearr_35555;
})();
var statearr_35559_37696 = state_35473__$1;
(statearr_35559_37696[(2)] = null);

(statearr_35559_37696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (25))){
var inst_35469 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35563_37701 = state_35473__$1;
(statearr_35563_37701[(2)] = inst_35469);

(statearr_35563_37701[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (34))){
var inst_35467 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35575_37707 = state_35473__$1;
(statearr_35575_37707[(2)] = inst_35467);

(statearr_35575_37707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (17))){
var state_35473__$1 = state_35473;
var statearr_35584_37708 = state_35473__$1;
(statearr_35584_37708[(2)] = false);

(statearr_35584_37708[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (3))){
var state_35473__$1 = state_35473;
var statearr_35588_37711 = state_35473__$1;
(statearr_35588_37711[(2)] = false);

(statearr_35588_37711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (12))){
var inst_35471 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35473__$1,inst_35471);
} else {
if((state_val_35474 === (2))){
var inst_35285 = (state_35473[(8)]);
var inst_35294 = inst_35285.cljs$lang$protocol_mask$partition0$;
var inst_35295 = (inst_35294 & (64));
var inst_35296 = inst_35285.cljs$core$ISeq$;
var inst_35297 = (cljs.core.PROTOCOL_SENTINEL === inst_35296);
var inst_35298 = ((inst_35295) || (inst_35297));
var state_35473__$1 = state_35473;
if(cljs.core.truth_(inst_35298)){
var statearr_35591_37717 = state_35473__$1;
(statearr_35591_37717[(1)] = (5));

} else {
var statearr_35594_37719 = state_35473__$1;
(statearr_35594_37719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (23))){
var inst_35364 = (state_35473[(14)]);
var inst_35425 = (inst_35364 == null);
var state_35473__$1 = state_35473;
if(cljs.core.truth_(inst_35425)){
var statearr_35595_37721 = state_35473__$1;
(statearr_35595_37721[(1)] = (26));

} else {
var statearr_35596_37722 = state_35473__$1;
(statearr_35596_37722[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (35))){
var inst_35458 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
if(cljs.core.truth_(inst_35458)){
var statearr_35599_37725 = state_35473__$1;
(statearr_35599_37725[(1)] = (36));

} else {
var statearr_35601_37729 = state_35473__$1;
(statearr_35601_37729[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (19))){
var inst_35319 = (state_35473[(7)]);
var inst_35347 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35319);
var state_35473__$1 = state_35473;
var statearr_35606_37734 = state_35473__$1;
(statearr_35606_37734[(2)] = inst_35347);

(statearr_35606_37734[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (11))){
var inst_35319 = (state_35473[(7)]);
var inst_35326 = (inst_35319 == null);
var inst_35327 = cljs.core.not(inst_35326);
var state_35473__$1 = state_35473;
if(inst_35327){
var statearr_35612_37737 = state_35473__$1;
(statearr_35612_37737[(1)] = (13));

} else {
var statearr_35617_37738 = state_35473__$1;
(statearr_35617_37738[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (9))){
var inst_35285 = (state_35473[(8)]);
var state_35473__$1 = state_35473;
var statearr_35624_37745 = state_35473__$1;
(statearr_35624_37745[(2)] = inst_35285);

(statearr_35624_37745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (5))){
var state_35473__$1 = state_35473;
var statearr_35630_37747 = state_35473__$1;
(statearr_35630_37747[(2)] = true);

(statearr_35630_37747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (14))){
var state_35473__$1 = state_35473;
var statearr_35637_37749 = state_35473__$1;
(statearr_35637_37749[(2)] = false);

(statearr_35637_37749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (26))){
var inst_35365 = (state_35473[(9)]);
var inst_35440 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35365);
var state_35473__$1 = state_35473;
var statearr_35645_37756 = state_35473__$1;
(statearr_35645_37756[(2)] = inst_35440);

(statearr_35645_37756[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (16))){
var state_35473__$1 = state_35473;
var statearr_35649_37758 = state_35473__$1;
(statearr_35649_37758[(2)] = true);

(statearr_35649_37758[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (38))){
var inst_35463 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35660_37760 = state_35473__$1;
(statearr_35660_37760[(2)] = inst_35463);

(statearr_35660_37760[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (30))){
var inst_35352 = (state_35473[(13)]);
var inst_35365 = (state_35473[(9)]);
var inst_35351 = (state_35473[(11)]);
var inst_35450 = cljs.core.empty_QMARK_(inst_35351);
var inst_35451 = (inst_35352.cljs$core$IFn$_invoke$arity$1 ? inst_35352.cljs$core$IFn$_invoke$arity$1(inst_35365) : inst_35352.call(null,inst_35365));
var inst_35452 = cljs.core.not(inst_35451);
var inst_35453 = ((inst_35450) && (inst_35452));
var state_35473__$1 = state_35473;
var statearr_35667_37769 = state_35473__$1;
(statearr_35667_37769[(2)] = inst_35453);

(statearr_35667_37769[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (10))){
var inst_35285 = (state_35473[(8)]);
var inst_35313 = (state_35473[(2)]);
var inst_35314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35313,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35313,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35313,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35319 = inst_35285;
var state_35473__$1 = (function (){var statearr_35675 = state_35473;
(statearr_35675[(7)] = inst_35319);

(statearr_35675[(16)] = inst_35318);

(statearr_35675[(17)] = inst_35314);

(statearr_35675[(18)] = inst_35316);

return statearr_35675;
})();
var statearr_35679_37773 = state_35473__$1;
(statearr_35679_37773[(2)] = null);

(statearr_35679_37773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (18))){
var inst_35342 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35690_37779 = state_35473__$1;
(statearr_35690_37779[(2)] = inst_35342);

(statearr_35690_37779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (37))){
var state_35473__$1 = state_35473;
var statearr_35695_37783 = state_35473__$1;
(statearr_35695_37783[(2)] = null);

(statearr_35695_37783[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (8))){
var inst_35285 = (state_35473[(8)]);
var inst_35310 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35285);
var state_35473__$1 = state_35473;
var statearr_35701_37785 = state_35473__$1;
(statearr_35701_37785[(2)] = inst_35310);

(statearr_35701_37785[(1)] = (10));


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
var statearr_35712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35712[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35712[(1)] = (1));

return statearr_35712;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35473){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35473);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35718){if((e35718 instanceof Object)){
var ex__34210__auto__ = e35718;
var statearr_35720_37793 = state_35473;
(statearr_35720_37793[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35718;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37796 = state_35473;
state_35473 = G__37796;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35473){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35729 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35729[(6)] = c__34273__auto___37628);

return statearr_35729;
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
var G__35746 = arguments.length;
switch (G__35746) {
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
var G__35759 = arguments.length;
switch (G__35759) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35756_SHARP_){
if(cljs.core.truth_((p1__35756_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35756_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35756_SHARP_.call(null,topic)))){
return p1__35756_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35756_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35763 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35763 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35764){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35764 = meta35764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35765,meta35764__$1){
var self__ = this;
var _35765__$1 = this;
return (new cljs.core.async.t_cljs$core$async35763(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35764__$1));
}));

(cljs.core.async.t_cljs$core$async35763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35765){
var self__ = this;
var _35765__$1 = this;
return self__.meta35764;
}));

(cljs.core.async.t_cljs$core$async35763.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35763.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35763.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35763.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35763.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35763.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35764","meta35764",341113865,null)], null);
}));

(cljs.core.async.t_cljs$core$async35763.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35763");

(cljs.core.async.t_cljs$core$async35763.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35763");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35763.
 */
cljs.core.async.__GT_t_cljs$core$async35763 = (function cljs$core$async$__GT_t_cljs$core$async35763(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35764){
return (new cljs.core.async.t_cljs$core$async35763(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35764));
});

}

return (new cljs.core.async.t_cljs$core$async35763(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35873){
var state_val_35874 = (state_35873[(1)]);
if((state_val_35874 === (7))){
var inst_35868 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
var statearr_35877_37868 = state_35873__$1;
(statearr_35877_37868[(2)] = inst_35868);

(statearr_35877_37868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (20))){
var state_35873__$1 = state_35873;
var statearr_35879_37869 = state_35873__$1;
(statearr_35879_37869[(2)] = null);

(statearr_35879_37869[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (1))){
var state_35873__$1 = state_35873;
var statearr_35882_37872 = state_35873__$1;
(statearr_35882_37872[(2)] = null);

(statearr_35882_37872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (24))){
var inst_35851 = (state_35873[(7)]);
var inst_35860 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35851);
var state_35873__$1 = state_35873;
var statearr_35884_37876 = state_35873__$1;
(statearr_35884_37876[(2)] = inst_35860);

(statearr_35884_37876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (4))){
var inst_35803 = (state_35873[(8)]);
var inst_35803__$1 = (state_35873[(2)]);
var inst_35804 = (inst_35803__$1 == null);
var state_35873__$1 = (function (){var statearr_35885 = state_35873;
(statearr_35885[(8)] = inst_35803__$1);

return statearr_35885;
})();
if(cljs.core.truth_(inst_35804)){
var statearr_35887_37880 = state_35873__$1;
(statearr_35887_37880[(1)] = (5));

} else {
var statearr_35888_37881 = state_35873__$1;
(statearr_35888_37881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (15))){
var inst_35845 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
var statearr_35889_37884 = state_35873__$1;
(statearr_35889_37884[(2)] = inst_35845);

(statearr_35889_37884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (21))){
var inst_35865 = (state_35873[(2)]);
var state_35873__$1 = (function (){var statearr_35890 = state_35873;
(statearr_35890[(9)] = inst_35865);

return statearr_35890;
})();
var statearr_35891_37886 = state_35873__$1;
(statearr_35891_37886[(2)] = null);

(statearr_35891_37886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (13))){
var inst_35827 = (state_35873[(10)]);
var inst_35829 = cljs.core.chunked_seq_QMARK_(inst_35827);
var state_35873__$1 = state_35873;
if(inst_35829){
var statearr_35893_37889 = state_35873__$1;
(statearr_35893_37889[(1)] = (16));

} else {
var statearr_35894_37892 = state_35873__$1;
(statearr_35894_37892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (22))){
var inst_35857 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
if(cljs.core.truth_(inst_35857)){
var statearr_35897_37894 = state_35873__$1;
(statearr_35897_37894[(1)] = (23));

} else {
var statearr_35900_37895 = state_35873__$1;
(statearr_35900_37895[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (6))){
var inst_35803 = (state_35873[(8)]);
var inst_35851 = (state_35873[(7)]);
var inst_35853 = (state_35873[(11)]);
var inst_35851__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35803) : topic_fn.call(null,inst_35803));
var inst_35852 = cljs.core.deref(mults);
var inst_35853__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35852,inst_35851__$1);
var state_35873__$1 = (function (){var statearr_35902 = state_35873;
(statearr_35902[(7)] = inst_35851__$1);

(statearr_35902[(11)] = inst_35853__$1);

return statearr_35902;
})();
if(cljs.core.truth_(inst_35853__$1)){
var statearr_35905_37908 = state_35873__$1;
(statearr_35905_37908[(1)] = (19));

} else {
var statearr_35906_37910 = state_35873__$1;
(statearr_35906_37910[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (25))){
var inst_35862 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
var statearr_35908_37912 = state_35873__$1;
(statearr_35908_37912[(2)] = inst_35862);

(statearr_35908_37912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (17))){
var inst_35827 = (state_35873[(10)]);
var inst_35836 = cljs.core.first(inst_35827);
var inst_35837 = cljs.core.async.muxch_STAR_(inst_35836);
var inst_35838 = cljs.core.async.close_BANG_(inst_35837);
var inst_35839 = cljs.core.next(inst_35827);
var inst_35813 = inst_35839;
var inst_35814 = null;
var inst_35815 = (0);
var inst_35816 = (0);
var state_35873__$1 = (function (){var statearr_35913 = state_35873;
(statearr_35913[(12)] = inst_35813);

(statearr_35913[(13)] = inst_35838);

(statearr_35913[(14)] = inst_35815);

(statearr_35913[(15)] = inst_35814);

(statearr_35913[(16)] = inst_35816);

return statearr_35913;
})();
var statearr_35917_37917 = state_35873__$1;
(statearr_35917_37917[(2)] = null);

(statearr_35917_37917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (3))){
var inst_35870 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35873__$1,inst_35870);
} else {
if((state_val_35874 === (12))){
var inst_35847 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
var statearr_35920_37922 = state_35873__$1;
(statearr_35920_37922[(2)] = inst_35847);

(statearr_35920_37922[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (2))){
var state_35873__$1 = state_35873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35873__$1,(4),ch);
} else {
if((state_val_35874 === (23))){
var state_35873__$1 = state_35873;
var statearr_35923_37924 = state_35873__$1;
(statearr_35923_37924[(2)] = null);

(statearr_35923_37924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (19))){
var inst_35803 = (state_35873[(8)]);
var inst_35853 = (state_35873[(11)]);
var inst_35855 = cljs.core.async.muxch_STAR_(inst_35853);
var state_35873__$1 = state_35873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35873__$1,(22),inst_35855,inst_35803);
} else {
if((state_val_35874 === (11))){
var inst_35813 = (state_35873[(12)]);
var inst_35827 = (state_35873[(10)]);
var inst_35827__$1 = cljs.core.seq(inst_35813);
var state_35873__$1 = (function (){var statearr_35929 = state_35873;
(statearr_35929[(10)] = inst_35827__$1);

return statearr_35929;
})();
if(inst_35827__$1){
var statearr_35930_37929 = state_35873__$1;
(statearr_35930_37929[(1)] = (13));

} else {
var statearr_35931_37931 = state_35873__$1;
(statearr_35931_37931[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (9))){
var inst_35849 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
var statearr_35932_37933 = state_35873__$1;
(statearr_35932_37933[(2)] = inst_35849);

(statearr_35932_37933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (5))){
var inst_35810 = cljs.core.deref(mults);
var inst_35811 = cljs.core.vals(inst_35810);
var inst_35812 = cljs.core.seq(inst_35811);
var inst_35813 = inst_35812;
var inst_35814 = null;
var inst_35815 = (0);
var inst_35816 = (0);
var state_35873__$1 = (function (){var statearr_35936 = state_35873;
(statearr_35936[(12)] = inst_35813);

(statearr_35936[(14)] = inst_35815);

(statearr_35936[(15)] = inst_35814);

(statearr_35936[(16)] = inst_35816);

return statearr_35936;
})();
var statearr_35938_37939 = state_35873__$1;
(statearr_35938_37939[(2)] = null);

(statearr_35938_37939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (14))){
var state_35873__$1 = state_35873;
var statearr_35943_37941 = state_35873__$1;
(statearr_35943_37941[(2)] = null);

(statearr_35943_37941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (16))){
var inst_35827 = (state_35873[(10)]);
var inst_35831 = cljs.core.chunk_first(inst_35827);
var inst_35832 = cljs.core.chunk_rest(inst_35827);
var inst_35833 = cljs.core.count(inst_35831);
var inst_35813 = inst_35832;
var inst_35814 = inst_35831;
var inst_35815 = inst_35833;
var inst_35816 = (0);
var state_35873__$1 = (function (){var statearr_35948 = state_35873;
(statearr_35948[(12)] = inst_35813);

(statearr_35948[(14)] = inst_35815);

(statearr_35948[(15)] = inst_35814);

(statearr_35948[(16)] = inst_35816);

return statearr_35948;
})();
var statearr_35949_37945 = state_35873__$1;
(statearr_35949_37945[(2)] = null);

(statearr_35949_37945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (10))){
var inst_35813 = (state_35873[(12)]);
var inst_35815 = (state_35873[(14)]);
var inst_35814 = (state_35873[(15)]);
var inst_35816 = (state_35873[(16)]);
var inst_35821 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35814,inst_35816);
var inst_35822 = cljs.core.async.muxch_STAR_(inst_35821);
var inst_35823 = cljs.core.async.close_BANG_(inst_35822);
var inst_35824 = (inst_35816 + (1));
var tmp35940 = inst_35813;
var tmp35941 = inst_35815;
var tmp35942 = inst_35814;
var inst_35813__$1 = tmp35940;
var inst_35814__$1 = tmp35942;
var inst_35815__$1 = tmp35941;
var inst_35816__$1 = inst_35824;
var state_35873__$1 = (function (){var statearr_35953 = state_35873;
(statearr_35953[(12)] = inst_35813__$1);

(statearr_35953[(14)] = inst_35815__$1);

(statearr_35953[(17)] = inst_35823);

(statearr_35953[(15)] = inst_35814__$1);

(statearr_35953[(16)] = inst_35816__$1);

return statearr_35953;
})();
var statearr_35957_37948 = state_35873__$1;
(statearr_35957_37948[(2)] = null);

(statearr_35957_37948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (18))){
var inst_35842 = (state_35873[(2)]);
var state_35873__$1 = state_35873;
var statearr_35959_37952 = state_35873__$1;
(statearr_35959_37952[(2)] = inst_35842);

(statearr_35959_37952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35874 === (8))){
var inst_35815 = (state_35873[(14)]);
var inst_35816 = (state_35873[(16)]);
var inst_35818 = (inst_35816 < inst_35815);
var inst_35819 = inst_35818;
var state_35873__$1 = state_35873;
if(cljs.core.truth_(inst_35819)){
var statearr_35960_37953 = state_35873__$1;
(statearr_35960_37953[(1)] = (10));

} else {
var statearr_35961_37954 = state_35873__$1;
(statearr_35961_37954[(1)] = (11));

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
var statearr_35965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35965[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35965[(1)] = (1));

return statearr_35965;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35873){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35873);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35968){if((e35968 instanceof Object)){
var ex__34210__auto__ = e35968;
var statearr_35970_37959 = state_35873;
(statearr_35970_37959[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37960 = state_35873;
state_35873 = G__37960;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35975 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35975[(6)] = c__34273__auto___37863);

return statearr_35975;
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
var G__35980 = arguments.length;
switch (G__35980) {
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
var G__35991 = arguments.length;
switch (G__35991) {
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
var G__35998 = arguments.length;
switch (G__35998) {
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
var c__34273__auto___37973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36050){
var state_val_36051 = (state_36050[(1)]);
if((state_val_36051 === (7))){
var state_36050__$1 = state_36050;
var statearr_36053_37974 = state_36050__$1;
(statearr_36053_37974[(2)] = null);

(statearr_36053_37974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (1))){
var state_36050__$1 = state_36050;
var statearr_36055_37976 = state_36050__$1;
(statearr_36055_37976[(2)] = null);

(statearr_36055_37976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (4))){
var inst_36011 = (state_36050[(7)]);
var inst_36013 = (inst_36011 < cnt);
var state_36050__$1 = state_36050;
if(cljs.core.truth_(inst_36013)){
var statearr_36057_37979 = state_36050__$1;
(statearr_36057_37979[(1)] = (6));

} else {
var statearr_36058_37980 = state_36050__$1;
(statearr_36058_37980[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (15))){
var inst_36046 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
var statearr_36060_37981 = state_36050__$1;
(statearr_36060_37981[(2)] = inst_36046);

(statearr_36060_37981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (13))){
var inst_36039 = cljs.core.async.close_BANG_(out);
var state_36050__$1 = state_36050;
var statearr_36062_37982 = state_36050__$1;
(statearr_36062_37982[(2)] = inst_36039);

(statearr_36062_37982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (6))){
var state_36050__$1 = state_36050;
var statearr_36064_37983 = state_36050__$1;
(statearr_36064_37983[(2)] = null);

(statearr_36064_37983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (3))){
var inst_36048 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36050__$1,inst_36048);
} else {
if((state_val_36051 === (12))){
var inst_36036 = (state_36050[(8)]);
var inst_36036__$1 = (state_36050[(2)]);
var inst_36037 = cljs.core.some(cljs.core.nil_QMARK_,inst_36036__$1);
var state_36050__$1 = (function (){var statearr_36073 = state_36050;
(statearr_36073[(8)] = inst_36036__$1);

return statearr_36073;
})();
if(cljs.core.truth_(inst_36037)){
var statearr_36076_37987 = state_36050__$1;
(statearr_36076_37987[(1)] = (13));

} else {
var statearr_36077_37988 = state_36050__$1;
(statearr_36077_37988[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (2))){
var inst_36010 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36011 = (0);
var state_36050__$1 = (function (){var statearr_36079 = state_36050;
(statearr_36079[(9)] = inst_36010);

(statearr_36079[(7)] = inst_36011);

return statearr_36079;
})();
var statearr_36082_37990 = state_36050__$1;
(statearr_36082_37990[(2)] = null);

(statearr_36082_37990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (11))){
var inst_36011 = (state_36050[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36050,(10),Object,null,(9));
var inst_36023 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36011) : chs__$1.call(null,inst_36011));
var inst_36024 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36011) : done.call(null,inst_36011));
var inst_36025 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36023,inst_36024);
var state_36050__$1 = state_36050;
var statearr_36085_37994 = state_36050__$1;
(statearr_36085_37994[(2)] = inst_36025);


cljs.core.async.impl.ioc_helpers.process_exception(state_36050__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (9))){
var inst_36011 = (state_36050[(7)]);
var inst_36027 = (state_36050[(2)]);
var inst_36028 = (inst_36011 + (1));
var inst_36011__$1 = inst_36028;
var state_36050__$1 = (function (){var statearr_36089 = state_36050;
(statearr_36089[(10)] = inst_36027);

(statearr_36089[(7)] = inst_36011__$1);

return statearr_36089;
})();
var statearr_36090_38000 = state_36050__$1;
(statearr_36090_38000[(2)] = null);

(statearr_36090_38000[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (5))){
var inst_36034 = (state_36050[(2)]);
var state_36050__$1 = (function (){var statearr_36094 = state_36050;
(statearr_36094[(11)] = inst_36034);

return statearr_36094;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36050__$1,(12),dchan);
} else {
if((state_val_36051 === (14))){
var inst_36036 = (state_36050[(8)]);
var inst_36041 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36036);
var state_36050__$1 = state_36050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36050__$1,(16),out,inst_36041);
} else {
if((state_val_36051 === (16))){
var inst_36043 = (state_36050[(2)]);
var state_36050__$1 = (function (){var statearr_36098 = state_36050;
(statearr_36098[(12)] = inst_36043);

return statearr_36098;
})();
var statearr_36100_38001 = state_36050__$1;
(statearr_36100_38001[(2)] = null);

(statearr_36100_38001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (10))){
var inst_36018 = (state_36050[(2)]);
var inst_36019 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36050__$1 = (function (){var statearr_36102 = state_36050;
(statearr_36102[(13)] = inst_36018);

return statearr_36102;
})();
var statearr_36103_38003 = state_36050__$1;
(statearr_36103_38003[(2)] = inst_36019);


cljs.core.async.impl.ioc_helpers.process_exception(state_36050__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36051 === (8))){
var inst_36032 = (state_36050[(2)]);
var state_36050__$1 = state_36050;
var statearr_36104_38008 = state_36050__$1;
(statearr_36104_38008[(2)] = inst_36032);

(statearr_36104_38008[(1)] = (5));


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
var statearr_36107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36107[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36107[(1)] = (1));

return statearr_36107;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36050){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36050);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36109){if((e36109 instanceof Object)){
var ex__34210__auto__ = e36109;
var statearr_36111_38009 = state_36050;
(statearr_36111_38009[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36109;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38010 = state_36050;
state_36050 = G__38010;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36114 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36114[(6)] = c__34273__auto___37973);

return statearr_36114;
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
var G__36117 = arguments.length;
switch (G__36117) {
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
var c__34273__auto___38015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36149){
var state_val_36150 = (state_36149[(1)]);
if((state_val_36150 === (7))){
var inst_36129 = (state_36149[(7)]);
var inst_36128 = (state_36149[(8)]);
var inst_36128__$1 = (state_36149[(2)]);
var inst_36129__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36128__$1,(0),null);
var inst_36130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36128__$1,(1),null);
var inst_36131 = (inst_36129__$1 == null);
var state_36149__$1 = (function (){var statearr_36151 = state_36149;
(statearr_36151[(7)] = inst_36129__$1);

(statearr_36151[(9)] = inst_36130);

(statearr_36151[(8)] = inst_36128__$1);

return statearr_36151;
})();
if(cljs.core.truth_(inst_36131)){
var statearr_36152_38018 = state_36149__$1;
(statearr_36152_38018[(1)] = (8));

} else {
var statearr_36153_38019 = state_36149__$1;
(statearr_36153_38019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36150 === (1))){
var inst_36118 = cljs.core.vec(chs);
var inst_36119 = inst_36118;
var state_36149__$1 = (function (){var statearr_36154 = state_36149;
(statearr_36154[(10)] = inst_36119);

return statearr_36154;
})();
var statearr_36155_38022 = state_36149__$1;
(statearr_36155_38022[(2)] = null);

(statearr_36155_38022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36150 === (4))){
var inst_36119 = (state_36149[(10)]);
var state_36149__$1 = state_36149;
return cljs.core.async.ioc_alts_BANG_(state_36149__$1,(7),inst_36119);
} else {
if((state_val_36150 === (6))){
var inst_36145 = (state_36149[(2)]);
var state_36149__$1 = state_36149;
var statearr_36160_38023 = state_36149__$1;
(statearr_36160_38023[(2)] = inst_36145);

(statearr_36160_38023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36150 === (3))){
var inst_36147 = (state_36149[(2)]);
var state_36149__$1 = state_36149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36149__$1,inst_36147);
} else {
if((state_val_36150 === (2))){
var inst_36119 = (state_36149[(10)]);
var inst_36121 = cljs.core.count(inst_36119);
var inst_36122 = (inst_36121 > (0));
var state_36149__$1 = state_36149;
if(cljs.core.truth_(inst_36122)){
var statearr_36162_38026 = state_36149__$1;
(statearr_36162_38026[(1)] = (4));

} else {
var statearr_36163_38027 = state_36149__$1;
(statearr_36163_38027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36150 === (11))){
var inst_36119 = (state_36149[(10)]);
var inst_36138 = (state_36149[(2)]);
var tmp36161 = inst_36119;
var inst_36119__$1 = tmp36161;
var state_36149__$1 = (function (){var statearr_36164 = state_36149;
(statearr_36164[(11)] = inst_36138);

(statearr_36164[(10)] = inst_36119__$1);

return statearr_36164;
})();
var statearr_36165_38028 = state_36149__$1;
(statearr_36165_38028[(2)] = null);

(statearr_36165_38028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36150 === (9))){
var inst_36129 = (state_36149[(7)]);
var state_36149__$1 = state_36149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36149__$1,(11),out,inst_36129);
} else {
if((state_val_36150 === (5))){
var inst_36143 = cljs.core.async.close_BANG_(out);
var state_36149__$1 = state_36149;
var statearr_36166_38030 = state_36149__$1;
(statearr_36166_38030[(2)] = inst_36143);

(statearr_36166_38030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36150 === (10))){
var inst_36141 = (state_36149[(2)]);
var state_36149__$1 = state_36149;
var statearr_36167_38033 = state_36149__$1;
(statearr_36167_38033[(2)] = inst_36141);

(statearr_36167_38033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36150 === (8))){
var inst_36119 = (state_36149[(10)]);
var inst_36129 = (state_36149[(7)]);
var inst_36130 = (state_36149[(9)]);
var inst_36128 = (state_36149[(8)]);
var inst_36133 = (function (){var cs = inst_36119;
var vec__36124 = inst_36128;
var v = inst_36129;
var c = inst_36130;
return (function (p1__36115_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36115_SHARP_);
});
})();
var inst_36134 = cljs.core.filterv(inst_36133,inst_36119);
var inst_36119__$1 = inst_36134;
var state_36149__$1 = (function (){var statearr_36169 = state_36149;
(statearr_36169[(10)] = inst_36119__$1);

return statearr_36169;
})();
var statearr_36170_38034 = state_36149__$1;
(statearr_36170_38034[(2)] = null);

(statearr_36170_38034[(1)] = (2));


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
var statearr_36172 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36172[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36172[(1)] = (1));

return statearr_36172;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36149){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36149);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36173){if((e36173 instanceof Object)){
var ex__34210__auto__ = e36173;
var statearr_36175_38038 = state_36149;
(statearr_36175_38038[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36173;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38039 = state_36149;
state_36149 = G__38039;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36182 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36182[(6)] = c__34273__auto___38015);

return statearr_36182;
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
var G__36192 = arguments.length;
switch (G__36192) {
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
var c__34273__auto___38045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36220){
var state_val_36222 = (state_36220[(1)]);
if((state_val_36222 === (7))){
var inst_36200 = (state_36220[(7)]);
var inst_36200__$1 = (state_36220[(2)]);
var inst_36201 = (inst_36200__$1 == null);
var inst_36202 = cljs.core.not(inst_36201);
var state_36220__$1 = (function (){var statearr_36224 = state_36220;
(statearr_36224[(7)] = inst_36200__$1);

return statearr_36224;
})();
if(inst_36202){
var statearr_36225_38048 = state_36220__$1;
(statearr_36225_38048[(1)] = (8));

} else {
var statearr_36226_38049 = state_36220__$1;
(statearr_36226_38049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (1))){
var inst_36195 = (0);
var state_36220__$1 = (function (){var statearr_36227 = state_36220;
(statearr_36227[(8)] = inst_36195);

return statearr_36227;
})();
var statearr_36228_38051 = state_36220__$1;
(statearr_36228_38051[(2)] = null);

(statearr_36228_38051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (4))){
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36220__$1,(7),ch);
} else {
if((state_val_36222 === (6))){
var inst_36215 = (state_36220[(2)]);
var state_36220__$1 = state_36220;
var statearr_36229_38054 = state_36220__$1;
(statearr_36229_38054[(2)] = inst_36215);

(statearr_36229_38054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (3))){
var inst_36217 = (state_36220[(2)]);
var inst_36218 = cljs.core.async.close_BANG_(out);
var state_36220__$1 = (function (){var statearr_36230 = state_36220;
(statearr_36230[(9)] = inst_36217);

return statearr_36230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36220__$1,inst_36218);
} else {
if((state_val_36222 === (2))){
var inst_36195 = (state_36220[(8)]);
var inst_36197 = (inst_36195 < n);
var state_36220__$1 = state_36220;
if(cljs.core.truth_(inst_36197)){
var statearr_36231_38056 = state_36220__$1;
(statearr_36231_38056[(1)] = (4));

} else {
var statearr_36232_38057 = state_36220__$1;
(statearr_36232_38057[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (11))){
var inst_36195 = (state_36220[(8)]);
var inst_36206 = (state_36220[(2)]);
var inst_36208 = (inst_36195 + (1));
var inst_36195__$1 = inst_36208;
var state_36220__$1 = (function (){var statearr_36233 = state_36220;
(statearr_36233[(10)] = inst_36206);

(statearr_36233[(8)] = inst_36195__$1);

return statearr_36233;
})();
var statearr_36234_38060 = state_36220__$1;
(statearr_36234_38060[(2)] = null);

(statearr_36234_38060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (9))){
var state_36220__$1 = state_36220;
var statearr_36235_38061 = state_36220__$1;
(statearr_36235_38061[(2)] = null);

(statearr_36235_38061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (5))){
var state_36220__$1 = state_36220;
var statearr_36236_38062 = state_36220__$1;
(statearr_36236_38062[(2)] = null);

(statearr_36236_38062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (10))){
var inst_36212 = (state_36220[(2)]);
var state_36220__$1 = state_36220;
var statearr_36237_38065 = state_36220__$1;
(statearr_36237_38065[(2)] = inst_36212);

(statearr_36237_38065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36222 === (8))){
var inst_36200 = (state_36220[(7)]);
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36220__$1,(11),out,inst_36200);
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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36220){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36220);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36243){if((e36243 instanceof Object)){
var ex__34210__auto__ = e36243;
var statearr_36244_38067 = state_36220;
(statearr_36244_38067[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38071 = state_36220;
state_36220 = G__38071;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36248 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36248[(6)] = c__34273__auto___38045);

return statearr_36248;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36250 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36250 = (function (f,ch,meta36251){
this.f = f;
this.ch = ch;
this.meta36251 = meta36251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36252,meta36251__$1){
var self__ = this;
var _36252__$1 = this;
return (new cljs.core.async.t_cljs$core$async36250(self__.f,self__.ch,meta36251__$1));
}));

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36252){
var self__ = this;
var _36252__$1 = this;
return self__.meta36251;
}));

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36260 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36260 = (function (f,ch,meta36251,_,fn1,meta36261){
this.f = f;
this.ch = ch;
this.meta36251 = meta36251;
this._ = _;
this.fn1 = fn1;
this.meta36261 = meta36261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36262,meta36261__$1){
var self__ = this;
var _36262__$1 = this;
return (new cljs.core.async.t_cljs$core$async36260(self__.f,self__.ch,self__.meta36251,self__._,self__.fn1,meta36261__$1));
}));

(cljs.core.async.t_cljs$core$async36260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36262){
var self__ = this;
var _36262__$1 = this;
return self__.meta36261;
}));

(cljs.core.async.t_cljs$core$async36260.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36260.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36249_SHARP_){
var G__36291 = (((p1__36249_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36249_SHARP_) : self__.f.call(null,p1__36249_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36291) : f1.call(null,G__36291));
});
}));

(cljs.core.async.t_cljs$core$async36260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36251","meta36251",1064451899,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36250","cljs.core.async/t_cljs$core$async36250",1087524413,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36261","meta36261",-981723740,null)], null);
}));

(cljs.core.async.t_cljs$core$async36260.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36260");

(cljs.core.async.t_cljs$core$async36260.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36260");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36260.
 */
cljs.core.async.__GT_t_cljs$core$async36260 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36260(f__$1,ch__$1,meta36251__$1,___$2,fn1__$1,meta36261){
return (new cljs.core.async.t_cljs$core$async36260(f__$1,ch__$1,meta36251__$1,___$2,fn1__$1,meta36261));
});

}

return (new cljs.core.async.t_cljs$core$async36260(self__.f,self__.ch,self__.meta36251,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36294 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36294) : self__.f.call(null,G__36294));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36250.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36251","meta36251",1064451899,null)], null);
}));

(cljs.core.async.t_cljs$core$async36250.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36250");

(cljs.core.async.t_cljs$core$async36250.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36250");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36250.
 */
cljs.core.async.__GT_t_cljs$core$async36250 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36250(f__$1,ch__$1,meta36251){
return (new cljs.core.async.t_cljs$core$async36250(f__$1,ch__$1,meta36251));
});

}

return (new cljs.core.async.t_cljs$core$async36250(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36311 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36311 = (function (f,ch,meta36312){
this.f = f;
this.ch = ch;
this.meta36312 = meta36312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36313,meta36312__$1){
var self__ = this;
var _36313__$1 = this;
return (new cljs.core.async.t_cljs$core$async36311(self__.f,self__.ch,meta36312__$1));
}));

(cljs.core.async.t_cljs$core$async36311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36313){
var self__ = this;
var _36313__$1 = this;
return self__.meta36312;
}));

(cljs.core.async.t_cljs$core$async36311.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36311.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36311.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36312","meta36312",1583021152,null)], null);
}));

(cljs.core.async.t_cljs$core$async36311.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36311");

(cljs.core.async.t_cljs$core$async36311.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36311");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36311.
 */
cljs.core.async.__GT_t_cljs$core$async36311 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36311(f__$1,ch__$1,meta36312){
return (new cljs.core.async.t_cljs$core$async36311(f__$1,ch__$1,meta36312));
});

}

return (new cljs.core.async.t_cljs$core$async36311(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36323 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36323 = (function (p,ch,meta36324){
this.p = p;
this.ch = ch;
this.meta36324 = meta36324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36325,meta36324__$1){
var self__ = this;
var _36325__$1 = this;
return (new cljs.core.async.t_cljs$core$async36323(self__.p,self__.ch,meta36324__$1));
}));

(cljs.core.async.t_cljs$core$async36323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36325){
var self__ = this;
var _36325__$1 = this;
return self__.meta36324;
}));

(cljs.core.async.t_cljs$core$async36323.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36323.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36323.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36323.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36323.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36323.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36323.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36324","meta36324",445982427,null)], null);
}));

(cljs.core.async.t_cljs$core$async36323.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36323");

(cljs.core.async.t_cljs$core$async36323.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36323");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36323.
 */
cljs.core.async.__GT_t_cljs$core$async36323 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36323(p__$1,ch__$1,meta36324){
return (new cljs.core.async.t_cljs$core$async36323(p__$1,ch__$1,meta36324));
});

}

return (new cljs.core.async.t_cljs$core$async36323(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36344 = arguments.length;
switch (G__36344) {
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
var c__34273__auto___38098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36369){
var state_val_36370 = (state_36369[(1)]);
if((state_val_36370 === (7))){
var inst_36365 = (state_36369[(2)]);
var state_36369__$1 = state_36369;
var statearr_36382_38101 = state_36369__$1;
(statearr_36382_38101[(2)] = inst_36365);

(statearr_36382_38101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (1))){
var state_36369__$1 = state_36369;
var statearr_36384_38102 = state_36369__$1;
(statearr_36384_38102[(2)] = null);

(statearr_36384_38102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (4))){
var inst_36351 = (state_36369[(7)]);
var inst_36351__$1 = (state_36369[(2)]);
var inst_36352 = (inst_36351__$1 == null);
var state_36369__$1 = (function (){var statearr_36385 = state_36369;
(statearr_36385[(7)] = inst_36351__$1);

return statearr_36385;
})();
if(cljs.core.truth_(inst_36352)){
var statearr_36387_38103 = state_36369__$1;
(statearr_36387_38103[(1)] = (5));

} else {
var statearr_36388_38104 = state_36369__$1;
(statearr_36388_38104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (6))){
var inst_36351 = (state_36369[(7)]);
var inst_36356 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36351) : p.call(null,inst_36351));
var state_36369__$1 = state_36369;
if(cljs.core.truth_(inst_36356)){
var statearr_36390_38106 = state_36369__$1;
(statearr_36390_38106[(1)] = (8));

} else {
var statearr_36391_38108 = state_36369__$1;
(statearr_36391_38108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (3))){
var inst_36367 = (state_36369[(2)]);
var state_36369__$1 = state_36369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36369__$1,inst_36367);
} else {
if((state_val_36370 === (2))){
var state_36369__$1 = state_36369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36369__$1,(4),ch);
} else {
if((state_val_36370 === (11))){
var inst_36359 = (state_36369[(2)]);
var state_36369__$1 = state_36369;
var statearr_36393_38110 = state_36369__$1;
(statearr_36393_38110[(2)] = inst_36359);

(statearr_36393_38110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (9))){
var state_36369__$1 = state_36369;
var statearr_36397_38111 = state_36369__$1;
(statearr_36397_38111[(2)] = null);

(statearr_36397_38111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (5))){
var inst_36354 = cljs.core.async.close_BANG_(out);
var state_36369__$1 = state_36369;
var statearr_36398_38112 = state_36369__$1;
(statearr_36398_38112[(2)] = inst_36354);

(statearr_36398_38112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (10))){
var inst_36362 = (state_36369[(2)]);
var state_36369__$1 = (function (){var statearr_36399 = state_36369;
(statearr_36399[(8)] = inst_36362);

return statearr_36399;
})();
var statearr_36400_38114 = state_36369__$1;
(statearr_36400_38114[(2)] = null);

(statearr_36400_38114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (8))){
var inst_36351 = (state_36369[(7)]);
var state_36369__$1 = state_36369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36369__$1,(11),out,inst_36351);
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
var statearr_36403 = [null,null,null,null,null,null,null,null,null];
(statearr_36403[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36403[(1)] = (1));

return statearr_36403;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36369){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36369);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36404){if((e36404 instanceof Object)){
var ex__34210__auto__ = e36404;
var statearr_36405_38117 = state_36369;
(statearr_36405_38117[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38118 = state_36369;
state_36369 = G__38118;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36407 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36407[(6)] = c__34273__auto___38098);

return statearr_36407;
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
var G__36417 = arguments.length;
switch (G__36417) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36485){
var state_val_36486 = (state_36485[(1)]);
if((state_val_36486 === (7))){
var inst_36481 = (state_36485[(2)]);
var state_36485__$1 = state_36485;
var statearr_36489_38126 = state_36485__$1;
(statearr_36489_38126[(2)] = inst_36481);

(statearr_36489_38126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (20))){
var inst_36451 = (state_36485[(7)]);
var inst_36462 = (state_36485[(2)]);
var inst_36463 = cljs.core.next(inst_36451);
var inst_36436 = inst_36463;
var inst_36437 = null;
var inst_36438 = (0);
var inst_36439 = (0);
var state_36485__$1 = (function (){var statearr_36502 = state_36485;
(statearr_36502[(8)] = inst_36438);

(statearr_36502[(9)] = inst_36436);

(statearr_36502[(10)] = inst_36439);

(statearr_36502[(11)] = inst_36437);

(statearr_36502[(12)] = inst_36462);

return statearr_36502;
})();
var statearr_36504_38130 = state_36485__$1;
(statearr_36504_38130[(2)] = null);

(statearr_36504_38130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (1))){
var state_36485__$1 = state_36485;
var statearr_36505_38131 = state_36485__$1;
(statearr_36505_38131[(2)] = null);

(statearr_36505_38131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (4))){
var inst_36425 = (state_36485[(13)]);
var inst_36425__$1 = (state_36485[(2)]);
var inst_36426 = (inst_36425__$1 == null);
var state_36485__$1 = (function (){var statearr_36510 = state_36485;
(statearr_36510[(13)] = inst_36425__$1);

return statearr_36510;
})();
if(cljs.core.truth_(inst_36426)){
var statearr_36511_38135 = state_36485__$1;
(statearr_36511_38135[(1)] = (5));

} else {
var statearr_36512_38136 = state_36485__$1;
(statearr_36512_38136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (15))){
var state_36485__$1 = state_36485;
var statearr_36522_38137 = state_36485__$1;
(statearr_36522_38137[(2)] = null);

(statearr_36522_38137[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (21))){
var state_36485__$1 = state_36485;
var statearr_36524_38139 = state_36485__$1;
(statearr_36524_38139[(2)] = null);

(statearr_36524_38139[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (13))){
var inst_36438 = (state_36485[(8)]);
var inst_36436 = (state_36485[(9)]);
var inst_36439 = (state_36485[(10)]);
var inst_36437 = (state_36485[(11)]);
var inst_36446 = (state_36485[(2)]);
var inst_36447 = (inst_36439 + (1));
var tmp36513 = inst_36438;
var tmp36514 = inst_36436;
var tmp36515 = inst_36437;
var inst_36436__$1 = tmp36514;
var inst_36437__$1 = tmp36515;
var inst_36438__$1 = tmp36513;
var inst_36439__$1 = inst_36447;
var state_36485__$1 = (function (){var statearr_36533 = state_36485;
(statearr_36533[(8)] = inst_36438__$1);

(statearr_36533[(14)] = inst_36446);

(statearr_36533[(9)] = inst_36436__$1);

(statearr_36533[(10)] = inst_36439__$1);

(statearr_36533[(11)] = inst_36437__$1);

return statearr_36533;
})();
var statearr_36535_38142 = state_36485__$1;
(statearr_36535_38142[(2)] = null);

(statearr_36535_38142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (22))){
var state_36485__$1 = state_36485;
var statearr_36536_38143 = state_36485__$1;
(statearr_36536_38143[(2)] = null);

(statearr_36536_38143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (6))){
var inst_36425 = (state_36485[(13)]);
var inst_36434 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36425) : f.call(null,inst_36425));
var inst_36435 = cljs.core.seq(inst_36434);
var inst_36436 = inst_36435;
var inst_36437 = null;
var inst_36438 = (0);
var inst_36439 = (0);
var state_36485__$1 = (function (){var statearr_36539 = state_36485;
(statearr_36539[(8)] = inst_36438);

(statearr_36539[(9)] = inst_36436);

(statearr_36539[(10)] = inst_36439);

(statearr_36539[(11)] = inst_36437);

return statearr_36539;
})();
var statearr_36540_38147 = state_36485__$1;
(statearr_36540_38147[(2)] = null);

(statearr_36540_38147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (17))){
var inst_36451 = (state_36485[(7)]);
var inst_36455 = cljs.core.chunk_first(inst_36451);
var inst_36456 = cljs.core.chunk_rest(inst_36451);
var inst_36457 = cljs.core.count(inst_36455);
var inst_36436 = inst_36456;
var inst_36437 = inst_36455;
var inst_36438 = inst_36457;
var inst_36439 = (0);
var state_36485__$1 = (function (){var statearr_36552 = state_36485;
(statearr_36552[(8)] = inst_36438);

(statearr_36552[(9)] = inst_36436);

(statearr_36552[(10)] = inst_36439);

(statearr_36552[(11)] = inst_36437);

return statearr_36552;
})();
var statearr_36555_38149 = state_36485__$1;
(statearr_36555_38149[(2)] = null);

(statearr_36555_38149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (3))){
var inst_36483 = (state_36485[(2)]);
var state_36485__$1 = state_36485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36485__$1,inst_36483);
} else {
if((state_val_36486 === (12))){
var inst_36471 = (state_36485[(2)]);
var state_36485__$1 = state_36485;
var statearr_36558_38151 = state_36485__$1;
(statearr_36558_38151[(2)] = inst_36471);

(statearr_36558_38151[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (2))){
var state_36485__$1 = state_36485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36485__$1,(4),in$);
} else {
if((state_val_36486 === (23))){
var inst_36479 = (state_36485[(2)]);
var state_36485__$1 = state_36485;
var statearr_36560_38153 = state_36485__$1;
(statearr_36560_38153[(2)] = inst_36479);

(statearr_36560_38153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (19))){
var inst_36466 = (state_36485[(2)]);
var state_36485__$1 = state_36485;
var statearr_36561_38154 = state_36485__$1;
(statearr_36561_38154[(2)] = inst_36466);

(statearr_36561_38154[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (11))){
var inst_36451 = (state_36485[(7)]);
var inst_36436 = (state_36485[(9)]);
var inst_36451__$1 = cljs.core.seq(inst_36436);
var state_36485__$1 = (function (){var statearr_36563 = state_36485;
(statearr_36563[(7)] = inst_36451__$1);

return statearr_36563;
})();
if(inst_36451__$1){
var statearr_36564_38158 = state_36485__$1;
(statearr_36564_38158[(1)] = (14));

} else {
var statearr_36565_38159 = state_36485__$1;
(statearr_36565_38159[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (9))){
var inst_36473 = (state_36485[(2)]);
var inst_36474 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36485__$1 = (function (){var statearr_36567 = state_36485;
(statearr_36567[(15)] = inst_36473);

return statearr_36567;
})();
if(cljs.core.truth_(inst_36474)){
var statearr_36568_38160 = state_36485__$1;
(statearr_36568_38160[(1)] = (21));

} else {
var statearr_36569_38161 = state_36485__$1;
(statearr_36569_38161[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (5))){
var inst_36428 = cljs.core.async.close_BANG_(out);
var state_36485__$1 = state_36485;
var statearr_36570_38163 = state_36485__$1;
(statearr_36570_38163[(2)] = inst_36428);

(statearr_36570_38163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (14))){
var inst_36451 = (state_36485[(7)]);
var inst_36453 = cljs.core.chunked_seq_QMARK_(inst_36451);
var state_36485__$1 = state_36485;
if(inst_36453){
var statearr_36572_38167 = state_36485__$1;
(statearr_36572_38167[(1)] = (17));

} else {
var statearr_36573_38171 = state_36485__$1;
(statearr_36573_38171[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (16))){
var inst_36469 = (state_36485[(2)]);
var state_36485__$1 = state_36485;
var statearr_36575_38172 = state_36485__$1;
(statearr_36575_38172[(2)] = inst_36469);

(statearr_36575_38172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (10))){
var inst_36439 = (state_36485[(10)]);
var inst_36437 = (state_36485[(11)]);
var inst_36444 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36437,inst_36439);
var state_36485__$1 = state_36485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36485__$1,(13),out,inst_36444);
} else {
if((state_val_36486 === (18))){
var inst_36451 = (state_36485[(7)]);
var inst_36460 = cljs.core.first(inst_36451);
var state_36485__$1 = state_36485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36485__$1,(20),out,inst_36460);
} else {
if((state_val_36486 === (8))){
var inst_36438 = (state_36485[(8)]);
var inst_36439 = (state_36485[(10)]);
var inst_36441 = (inst_36439 < inst_36438);
var inst_36442 = inst_36441;
var state_36485__$1 = state_36485;
if(cljs.core.truth_(inst_36442)){
var statearr_36577_38174 = state_36485__$1;
(statearr_36577_38174[(1)] = (10));

} else {
var statearr_36579_38175 = state_36485__$1;
(statearr_36579_38175[(1)] = (11));

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
var statearr_36580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36580[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36580[(1)] = (1));

return statearr_36580;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36485){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36485);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36582){if((e36582 instanceof Object)){
var ex__34210__auto__ = e36582;
var statearr_36583_38178 = state_36485;
(statearr_36583_38178[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36582;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38179 = state_36485;
state_36485 = G__38179;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36485){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36586 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36586[(6)] = c__34273__auto__);

return statearr_36586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36589 = arguments.length;
switch (G__36589) {
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
var G__36593 = arguments.length;
switch (G__36593) {
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
var G__36598 = arguments.length;
switch (G__36598) {
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
var c__34273__auto___38188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36623){
var state_val_36624 = (state_36623[(1)]);
if((state_val_36624 === (7))){
var inst_36618 = (state_36623[(2)]);
var state_36623__$1 = state_36623;
var statearr_36626_38189 = state_36623__$1;
(statearr_36626_38189[(2)] = inst_36618);

(statearr_36626_38189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36624 === (1))){
var inst_36600 = null;
var state_36623__$1 = (function (){var statearr_36628 = state_36623;
(statearr_36628[(7)] = inst_36600);

return statearr_36628;
})();
var statearr_36629_38190 = state_36623__$1;
(statearr_36629_38190[(2)] = null);

(statearr_36629_38190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36624 === (4))){
var inst_36603 = (state_36623[(8)]);
var inst_36603__$1 = (state_36623[(2)]);
var inst_36604 = (inst_36603__$1 == null);
var inst_36605 = cljs.core.not(inst_36604);
var state_36623__$1 = (function (){var statearr_36631 = state_36623;
(statearr_36631[(8)] = inst_36603__$1);

return statearr_36631;
})();
if(inst_36605){
var statearr_36632_38194 = state_36623__$1;
(statearr_36632_38194[(1)] = (5));

} else {
var statearr_36633_38195 = state_36623__$1;
(statearr_36633_38195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36624 === (6))){
var state_36623__$1 = state_36623;
var statearr_36634_38196 = state_36623__$1;
(statearr_36634_38196[(2)] = null);

(statearr_36634_38196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36624 === (3))){
var inst_36620 = (state_36623[(2)]);
var inst_36621 = cljs.core.async.close_BANG_(out);
var state_36623__$1 = (function (){var statearr_36636 = state_36623;
(statearr_36636[(9)] = inst_36620);

return statearr_36636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36623__$1,inst_36621);
} else {
if((state_val_36624 === (2))){
var state_36623__$1 = state_36623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36623__$1,(4),ch);
} else {
if((state_val_36624 === (11))){
var inst_36603 = (state_36623[(8)]);
var inst_36612 = (state_36623[(2)]);
var inst_36600 = inst_36603;
var state_36623__$1 = (function (){var statearr_36638 = state_36623;
(statearr_36638[(7)] = inst_36600);

(statearr_36638[(10)] = inst_36612);

return statearr_36638;
})();
var statearr_36639_38200 = state_36623__$1;
(statearr_36639_38200[(2)] = null);

(statearr_36639_38200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36624 === (9))){
var inst_36603 = (state_36623[(8)]);
var state_36623__$1 = state_36623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36623__$1,(11),out,inst_36603);
} else {
if((state_val_36624 === (5))){
var inst_36600 = (state_36623[(7)]);
var inst_36603 = (state_36623[(8)]);
var inst_36607 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36603,inst_36600);
var state_36623__$1 = state_36623;
if(inst_36607){
var statearr_36642_38201 = state_36623__$1;
(statearr_36642_38201[(1)] = (8));

} else {
var statearr_36643_38202 = state_36623__$1;
(statearr_36643_38202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36624 === (10))){
var inst_36615 = (state_36623[(2)]);
var state_36623__$1 = state_36623;
var statearr_36644_38203 = state_36623__$1;
(statearr_36644_38203[(2)] = inst_36615);

(statearr_36644_38203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36624 === (8))){
var inst_36600 = (state_36623[(7)]);
var tmp36640 = inst_36600;
var inst_36600__$1 = tmp36640;
var state_36623__$1 = (function (){var statearr_36646 = state_36623;
(statearr_36646[(7)] = inst_36600__$1);

return statearr_36646;
})();
var statearr_36647_38204 = state_36623__$1;
(statearr_36647_38204[(2)] = null);

(statearr_36647_38204[(1)] = (2));


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
var statearr_36649 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36649[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36649[(1)] = (1));

return statearr_36649;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36623){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36623);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36650){if((e36650 instanceof Object)){
var ex__34210__auto__ = e36650;
var statearr_36651_38206 = state_36623;
(statearr_36651_38206[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36650;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38207 = state_36623;
state_36623 = G__38207;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36653 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36653[(6)] = c__34273__auto___38188);

return statearr_36653;
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
var G__36656 = arguments.length;
switch (G__36656) {
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
var c__34273__auto___38210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36697){
var state_val_36698 = (state_36697[(1)]);
if((state_val_36698 === (7))){
var inst_36692 = (state_36697[(2)]);
var state_36697__$1 = state_36697;
var statearr_36700_38212 = state_36697__$1;
(statearr_36700_38212[(2)] = inst_36692);

(statearr_36700_38212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (1))){
var inst_36659 = (new Array(n));
var inst_36660 = inst_36659;
var inst_36661 = (0);
var state_36697__$1 = (function (){var statearr_36701 = state_36697;
(statearr_36701[(7)] = inst_36661);

(statearr_36701[(8)] = inst_36660);

return statearr_36701;
})();
var statearr_36702_38213 = state_36697__$1;
(statearr_36702_38213[(2)] = null);

(statearr_36702_38213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (4))){
var inst_36664 = (state_36697[(9)]);
var inst_36664__$1 = (state_36697[(2)]);
var inst_36665 = (inst_36664__$1 == null);
var inst_36666 = cljs.core.not(inst_36665);
var state_36697__$1 = (function (){var statearr_36704 = state_36697;
(statearr_36704[(9)] = inst_36664__$1);

return statearr_36704;
})();
if(inst_36666){
var statearr_36705_38214 = state_36697__$1;
(statearr_36705_38214[(1)] = (5));

} else {
var statearr_36706_38215 = state_36697__$1;
(statearr_36706_38215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (15))){
var inst_36686 = (state_36697[(2)]);
var state_36697__$1 = state_36697;
var statearr_36707_38217 = state_36697__$1;
(statearr_36707_38217[(2)] = inst_36686);

(statearr_36707_38217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (13))){
var state_36697__$1 = state_36697;
var statearr_36709_38218 = state_36697__$1;
(statearr_36709_38218[(2)] = null);

(statearr_36709_38218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (6))){
var inst_36661 = (state_36697[(7)]);
var inst_36682 = (inst_36661 > (0));
var state_36697__$1 = state_36697;
if(cljs.core.truth_(inst_36682)){
var statearr_36710_38219 = state_36697__$1;
(statearr_36710_38219[(1)] = (12));

} else {
var statearr_36712_38220 = state_36697__$1;
(statearr_36712_38220[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (3))){
var inst_36694 = (state_36697[(2)]);
var state_36697__$1 = state_36697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36697__$1,inst_36694);
} else {
if((state_val_36698 === (12))){
var inst_36660 = (state_36697[(8)]);
var inst_36684 = cljs.core.vec(inst_36660);
var state_36697__$1 = state_36697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36697__$1,(15),out,inst_36684);
} else {
if((state_val_36698 === (2))){
var state_36697__$1 = state_36697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36697__$1,(4),ch);
} else {
if((state_val_36698 === (11))){
var inst_36676 = (state_36697[(2)]);
var inst_36677 = (new Array(n));
var inst_36660 = inst_36677;
var inst_36661 = (0);
var state_36697__$1 = (function (){var statearr_36714 = state_36697;
(statearr_36714[(7)] = inst_36661);

(statearr_36714[(10)] = inst_36676);

(statearr_36714[(8)] = inst_36660);

return statearr_36714;
})();
var statearr_36715_38222 = state_36697__$1;
(statearr_36715_38222[(2)] = null);

(statearr_36715_38222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (9))){
var inst_36660 = (state_36697[(8)]);
var inst_36674 = cljs.core.vec(inst_36660);
var state_36697__$1 = state_36697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36697__$1,(11),out,inst_36674);
} else {
if((state_val_36698 === (5))){
var inst_36669 = (state_36697[(11)]);
var inst_36661 = (state_36697[(7)]);
var inst_36664 = (state_36697[(9)]);
var inst_36660 = (state_36697[(8)]);
var inst_36668 = (inst_36660[inst_36661] = inst_36664);
var inst_36669__$1 = (inst_36661 + (1));
var inst_36670 = (inst_36669__$1 < n);
var state_36697__$1 = (function (){var statearr_36717 = state_36697;
(statearr_36717[(11)] = inst_36669__$1);

(statearr_36717[(12)] = inst_36668);

return statearr_36717;
})();
if(cljs.core.truth_(inst_36670)){
var statearr_36719_38225 = state_36697__$1;
(statearr_36719_38225[(1)] = (8));

} else {
var statearr_36720_38226 = state_36697__$1;
(statearr_36720_38226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (14))){
var inst_36689 = (state_36697[(2)]);
var inst_36690 = cljs.core.async.close_BANG_(out);
var state_36697__$1 = (function (){var statearr_36722 = state_36697;
(statearr_36722[(13)] = inst_36689);

return statearr_36722;
})();
var statearr_36723_38227 = state_36697__$1;
(statearr_36723_38227[(2)] = inst_36690);

(statearr_36723_38227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (10))){
var inst_36680 = (state_36697[(2)]);
var state_36697__$1 = state_36697;
var statearr_36725_38228 = state_36697__$1;
(statearr_36725_38228[(2)] = inst_36680);

(statearr_36725_38228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36698 === (8))){
var inst_36669 = (state_36697[(11)]);
var inst_36660 = (state_36697[(8)]);
var tmp36721 = inst_36660;
var inst_36660__$1 = tmp36721;
var inst_36661 = inst_36669;
var state_36697__$1 = (function (){var statearr_36726 = state_36697;
(statearr_36726[(7)] = inst_36661);

(statearr_36726[(8)] = inst_36660__$1);

return statearr_36726;
})();
var statearr_36728_38230 = state_36697__$1;
(statearr_36728_38230[(2)] = null);

(statearr_36728_38230[(1)] = (2));


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
var statearr_36729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36729[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36729[(1)] = (1));

return statearr_36729;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36697){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36697);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36731){if((e36731 instanceof Object)){
var ex__34210__auto__ = e36731;
var statearr_36732_38232 = state_36697;
(statearr_36732_38232[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36731;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38233 = state_36697;
state_36697 = G__38233;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36733 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36733[(6)] = c__34273__auto___38210);

return statearr_36733;
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
var c__34273__auto___38237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36778){
var state_val_36779 = (state_36778[(1)]);
if((state_val_36779 === (7))){
var inst_36774 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
var statearr_36781_38238 = state_36778__$1;
(statearr_36781_38238[(2)] = inst_36774);

(statearr_36781_38238[(1)] = (3));


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
var statearr_36784_38240 = state_36778__$1;
(statearr_36784_38240[(2)] = null);

(statearr_36784_38240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (4))){
var inst_36741 = (state_36778[(9)]);
var inst_36741__$1 = (state_36778[(2)]);
var inst_36742 = (inst_36741__$1 == null);
var inst_36743 = cljs.core.not(inst_36742);
var state_36778__$1 = (function (){var statearr_36785 = state_36778;
(statearr_36785[(9)] = inst_36741__$1);

return statearr_36785;
})();
if(inst_36743){
var statearr_36787_38242 = state_36778__$1;
(statearr_36787_38242[(1)] = (5));

} else {
var statearr_36788_38243 = state_36778__$1;
(statearr_36788_38243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (15))){
var inst_36768 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
var statearr_36789_38244 = state_36778__$1;
(statearr_36789_38244[(2)] = inst_36768);

(statearr_36789_38244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (13))){
var state_36778__$1 = state_36778;
var statearr_36791_38245 = state_36778__$1;
(statearr_36791_38245[(2)] = null);

(statearr_36791_38245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (6))){
var inst_36737 = (state_36778[(7)]);
var inst_36763 = inst_36737.length;
var inst_36764 = (inst_36763 > (0));
var state_36778__$1 = state_36778;
if(cljs.core.truth_(inst_36764)){
var statearr_36792_38247 = state_36778__$1;
(statearr_36792_38247[(1)] = (12));

} else {
var statearr_36793_38248 = state_36778__$1;
(statearr_36793_38248[(1)] = (13));

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
var statearr_36797_38251 = state_36778__$1;
(statearr_36797_38251[(2)] = null);

(statearr_36797_38251[(1)] = (2));


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
var state_36778__$1 = (function (){var statearr_36799 = state_36778;
(statearr_36799[(10)] = inst_36745__$1);

return statearr_36799;
})();
if(cljs.core.truth_(inst_36749)){
var statearr_36801_38253 = state_36778__$1;
(statearr_36801_38253[(1)] = (8));

} else {
var statearr_36802_38254 = state_36778__$1;
(statearr_36802_38254[(1)] = (9));

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
var statearr_36805_38256 = state_36778__$1;
(statearr_36805_38256[(2)] = inst_36772);

(statearr_36805_38256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (10))){
var inst_36761 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
var statearr_36807_38257 = state_36778__$1;
(statearr_36807_38257[(2)] = inst_36761);

(statearr_36807_38257[(1)] = (7));


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
var state_36778__$1 = (function (){var statearr_36808 = state_36778;
(statearr_36808[(7)] = inst_36737__$1);

(statearr_36808[(14)] = inst_36751);

(statearr_36808[(8)] = inst_36738);

return statearr_36808;
})();
var statearr_36810_38259 = state_36778__$1;
(statearr_36810_38259[(2)] = null);

(statearr_36810_38259[(1)] = (2));


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
var statearr_36811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36811[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36811[(1)] = (1));

return statearr_36811;
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
var statearr_36814_38261 = state_36778;
(statearr_36814_38261[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38262 = state_36778;
state_36778 = G__38262;
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
var state__34275__auto__ = (function (){var statearr_36816 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36816[(6)] = c__34273__auto___38237);

return statearr_36816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
