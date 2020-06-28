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
var val_36869 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36869) : fn1.call(null,val_36869));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36869) : fn1.call(null,val_36869));
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
var n__4666__auto___36876 = n;
var x_36877 = (0);
while(true){
if((x_36877 < n__4666__auto___36876)){
(a[x_36877] = x_36877);

var G__36878 = (x_36877 + (1));
x_36877 = G__36878;
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
var G__36888 = (i + (1));
i = G__36888;
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
var len__4789__auto___36891 = arguments.length;
var i__4790__auto___36892 = (0);
while(true){
if((i__4790__auto___36892 < len__4789__auto___36891)){
args__4795__auto__.push((arguments[i__4790__auto___36892]));

var G__36893 = (i__4790__auto___36892 + (1));
i__4790__auto___36892 = G__36893;
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
var G__34367 = arguments.length;
switch (G__34367) {
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
var c__34273__auto___36899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34405){
var state_val_34406 = (state_34405[(1)]);
if((state_val_34406 === (7))){
var inst_34398 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
var statearr_34413_36901 = state_34405__$1;
(statearr_34413_36901[(2)] = inst_34398);

(statearr_34413_36901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (1))){
var state_34405__$1 = state_34405;
var statearr_34414_36902 = state_34405__$1;
(statearr_34414_36902[(2)] = null);

(statearr_34414_36902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (4))){
var inst_34375 = (state_34405[(7)]);
var inst_34375__$1 = (state_34405[(2)]);
var inst_34376 = (inst_34375__$1 == null);
var state_34405__$1 = (function (){var statearr_34415 = state_34405;
(statearr_34415[(7)] = inst_34375__$1);

return statearr_34415;
})();
if(cljs.core.truth_(inst_34376)){
var statearr_34416_36904 = state_34405__$1;
(statearr_34416_36904[(1)] = (5));

} else {
var statearr_34417_36905 = state_34405__$1;
(statearr_34417_36905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (13))){
var state_34405__$1 = state_34405;
var statearr_34418_36906 = state_34405__$1;
(statearr_34418_36906[(2)] = null);

(statearr_34418_36906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (6))){
var inst_34375 = (state_34405[(7)]);
var state_34405__$1 = state_34405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34405__$1,(11),to,inst_34375);
} else {
if((state_val_34406 === (3))){
var inst_34400 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34405__$1,inst_34400);
} else {
if((state_val_34406 === (12))){
var state_34405__$1 = state_34405;
var statearr_34419_36908 = state_34405__$1;
(statearr_34419_36908[(2)] = null);

(statearr_34419_36908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (2))){
var state_34405__$1 = state_34405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34405__$1,(4),from);
} else {
if((state_val_34406 === (11))){
var inst_34388 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
if(cljs.core.truth_(inst_34388)){
var statearr_34420_36910 = state_34405__$1;
(statearr_34420_36910[(1)] = (12));

} else {
var statearr_34421_36911 = state_34405__$1;
(statearr_34421_36911[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (9))){
var state_34405__$1 = state_34405;
var statearr_34425_36913 = state_34405__$1;
(statearr_34425_36913[(2)] = null);

(statearr_34425_36913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (5))){
var state_34405__$1 = state_34405;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34429_36914 = state_34405__$1;
(statearr_34429_36914[(1)] = (8));

} else {
var statearr_34430_36915 = state_34405__$1;
(statearr_34430_36915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (14))){
var inst_34393 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
var statearr_34434_36917 = state_34405__$1;
(statearr_34434_36917[(2)] = inst_34393);

(statearr_34434_36917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (10))){
var inst_34385 = (state_34405[(2)]);
var state_34405__$1 = state_34405;
var statearr_34435_36918 = state_34405__$1;
(statearr_34435_36918[(2)] = inst_34385);

(statearr_34435_36918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34406 === (8))){
var inst_34379 = cljs.core.async.close_BANG_(to);
var state_34405__$1 = state_34405;
var statearr_34439_36920 = state_34405__$1;
(statearr_34439_36920[(2)] = inst_34379);

(statearr_34439_36920[(1)] = (10));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34405){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34405);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34441){if((e34441 instanceof Object)){
var ex__34210__auto__ = e34441;
var statearr_34442_36922 = state_34405;
(statearr_34442_36922[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36923 = state_34405;
state_34405 = G__36923;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34443 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34443[(6)] = c__34273__auto___36899);

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
var c__34273__auto___36926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34457_36934 = state_34452;
(statearr_34457_36934[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36935 = state_34452;
state_34452 = G__36935;
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
(statearr_34458[(6)] = c__34273__auto___36926);

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
var n__4666__auto___36940 = n;
var __36941 = (0);
while(true){
if((__36941 < n__4666__auto___36940)){
var G__34467_36942 = type;
var G__34467_36943__$1 = (((G__34467_36942 instanceof cljs.core.Keyword))?G__34467_36942.fqn:null);
switch (G__34467_36943__$1) {
case "compute":
var c__34273__auto___36945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36941,c__34273__auto___36945,G__34467_36942,G__34467_36943__$1,n__4666__auto___36940,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36941,c__34273__auto___36945,G__34467_36942,G__34467_36943__$1,n__4666__auto___36940,jobs,results,process,async){
return (function (state_34480){
var state_val_34481 = (state_34480[(1)]);
if((state_val_34481 === (1))){
var state_34480__$1 = state_34480;
var statearr_34482_36947 = state_34480__$1;
(statearr_34482_36947[(2)] = null);

(statearr_34482_36947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (2))){
var state_34480__$1 = state_34480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34480__$1,(4),jobs);
} else {
if((state_val_34481 === (3))){
var inst_34478 = (state_34480[(2)]);
var state_34480__$1 = state_34480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34480__$1,inst_34478);
} else {
if((state_val_34481 === (4))){
var inst_34470 = (state_34480[(2)]);
var inst_34471 = process(inst_34470);
var state_34480__$1 = state_34480;
if(cljs.core.truth_(inst_34471)){
var statearr_34483_36951 = state_34480__$1;
(statearr_34483_36951[(1)] = (5));

} else {
var statearr_34484_36952 = state_34480__$1;
(statearr_34484_36952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (5))){
var state_34480__$1 = state_34480;
var statearr_34485_36955 = state_34480__$1;
(statearr_34485_36955[(2)] = null);

(statearr_34485_36955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (6))){
var state_34480__$1 = state_34480;
var statearr_34486_36957 = state_34480__$1;
(statearr_34486_36957[(2)] = null);

(statearr_34486_36957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (7))){
var inst_34476 = (state_34480[(2)]);
var state_34480__$1 = state_34480;
var statearr_34487_36958 = state_34480__$1;
(statearr_34487_36958[(2)] = inst_34476);

(statearr_34487_36958[(1)] = (3));


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
});})(__36941,c__34273__auto___36945,G__34467_36942,G__34467_36943__$1,n__4666__auto___36940,jobs,results,process,async))
;
return ((function (__36941,switch__34206__auto__,c__34273__auto___36945,G__34467_36942,G__34467_36943__$1,n__4666__auto___36940,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34489 = [null,null,null,null,null,null,null];
(statearr_34489[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34489[(1)] = (1));

return statearr_34489;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34480){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34480);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34490){if((e34490 instanceof Object)){
var ex__34210__auto__ = e34490;
var statearr_34491_36959 = state_34480;
(statearr_34491_36959[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36960 = state_34480;
state_34480 = G__36960;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34480){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36941,switch__34206__auto__,c__34273__auto___36945,G__34467_36942,G__34467_36943__$1,n__4666__auto___36940,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34492 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34492[(6)] = c__34273__auto___36945);

return statearr_34492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36941,c__34273__auto___36945,G__34467_36942,G__34467_36943__$1,n__4666__auto___36940,jobs,results,process,async))
);


break;
case "async":
var c__34273__auto___36963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36941,c__34273__auto___36963,G__34467_36942,G__34467_36943__$1,n__4666__auto___36940,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36941,c__34273__auto___36963,G__34467_36942,G__34467_36943__$1,n__4666__auto___36940,jobs,results,process,async){
return (function (state_34505){
var state_val_34506 = (state_34505[(1)]);
if((state_val_34506 === (1))){
var state_34505__$1 = state_34505;
var statearr_34507_36968 = state_34505__$1;
(statearr_34507_36968[(2)] = null);

(statearr_34507_36968[(1)] = (2));


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
var statearr_34510_36969 = state_34505__$1;
(statearr_34510_36969[(1)] = (5));

} else {
var statearr_34511_36970 = state_34505__$1;
(statearr_34511_36970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (5))){
var state_34505__$1 = state_34505;
var statearr_34513_36974 = state_34505__$1;
(statearr_34513_36974[(2)] = null);

(statearr_34513_36974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (6))){
var state_34505__$1 = state_34505;
var statearr_34514_36976 = state_34505__$1;
(statearr_34514_36976[(2)] = null);

(statearr_34514_36976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (7))){
var inst_34501 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
var statearr_34515_36979 = state_34505__$1;
(statearr_34515_36979[(2)] = inst_34501);

(statearr_34515_36979[(1)] = (3));


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
});})(__36941,c__34273__auto___36963,G__34467_36942,G__34467_36943__$1,n__4666__auto___36940,jobs,results,process,async))
;
return ((function (__36941,switch__34206__auto__,c__34273__auto___36963,G__34467_36942,G__34467_36943__$1,n__4666__auto___36940,jobs,results,process,async){
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
var statearr_34520_36987 = state_34505;
(statearr_34520_36987[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34517;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36989 = state_34505;
state_34505 = G__36989;
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
;})(__36941,switch__34206__auto__,c__34273__auto___36963,G__34467_36942,G__34467_36943__$1,n__4666__auto___36940,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34524 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34524[(6)] = c__34273__auto___36963);

return statearr_34524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36941,c__34273__auto___36963,G__34467_36942,G__34467_36943__$1,n__4666__auto___36940,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34467_36943__$1)].join('')));

}

var G__36997 = (__36941 + (1));
__36941 = G__36997;
continue;
} else {
}
break;
}

var c__34273__auto___37000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34548){
var state_val_34549 = (state_34548[(1)]);
if((state_val_34549 === (7))){
var inst_34544 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
var statearr_34551_37004 = state_34548__$1;
(statearr_34551_37004[(2)] = inst_34544);

(statearr_34551_37004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (1))){
var state_34548__$1 = state_34548;
var statearr_34552_37005 = state_34548__$1;
(statearr_34552_37005[(2)] = null);

(statearr_34552_37005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (4))){
var inst_34529 = (state_34548[(7)]);
var inst_34529__$1 = (state_34548[(2)]);
var inst_34530 = (inst_34529__$1 == null);
var state_34548__$1 = (function (){var statearr_34553 = state_34548;
(statearr_34553[(7)] = inst_34529__$1);

return statearr_34553;
})();
if(cljs.core.truth_(inst_34530)){
var statearr_34555_37010 = state_34548__$1;
(statearr_34555_37010[(1)] = (5));

} else {
var statearr_34556_37013 = state_34548__$1;
(statearr_34556_37013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (6))){
var inst_34529 = (state_34548[(7)]);
var inst_34534 = (state_34548[(8)]);
var inst_34534__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34535 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34536 = [inst_34529,inst_34534__$1];
var inst_34537 = (new cljs.core.PersistentVector(null,2,(5),inst_34535,inst_34536,null));
var state_34548__$1 = (function (){var statearr_34560 = state_34548;
(statearr_34560[(8)] = inst_34534__$1);

return statearr_34560;
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
var state_34548__$1 = (function (){var statearr_34564 = state_34548;
(statearr_34564[(9)] = inst_34541);

return statearr_34564;
})();
var statearr_34565_37023 = state_34548__$1;
(statearr_34565_37023[(2)] = null);

(statearr_34565_37023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (5))){
var inst_34532 = cljs.core.async.close_BANG_(jobs);
var state_34548__$1 = state_34548;
var statearr_34566_37028 = state_34548__$1;
(statearr_34566_37028[(2)] = inst_34532);

(statearr_34566_37028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (8))){
var inst_34534 = (state_34548[(8)]);
var inst_34539 = (state_34548[(2)]);
var state_34548__$1 = (function (){var statearr_34567 = state_34548;
(statearr_34567[(10)] = inst_34539);

return statearr_34567;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34548__$1,(9),results,inst_34534);
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
var statearr_34568 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34568[(1)] = (1));

return statearr_34568;
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
var statearr_34570_37038 = state_34548;
(statearr_34570_37038[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34569;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37041 = state_34548;
state_34548 = G__37041;
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
var state__34275__auto__ = (function (){var statearr_34571 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34571[(6)] = c__34273__auto___37000);

return statearr_34571;
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
var statearr_34614_37043 = state_34612__$1;
(statearr_34614_37043[(2)] = inst_34608);

(statearr_34614_37043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_37047 = state_34612__$1;
(statearr_34615_37047[(2)] = null);

(statearr_34615_37047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_37053 = state_34612__$1;
(statearr_34616_37053[(2)] = null);

(statearr_34616_37053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (4))){
var inst_34574 = (state_34612[(7)]);
var inst_34574__$1 = (state_34612[(2)]);
var inst_34575 = (inst_34574__$1 == null);
var state_34612__$1 = (function (){var statearr_34617 = state_34612;
(statearr_34617[(7)] = inst_34574__$1);

return statearr_34617;
})();
if(cljs.core.truth_(inst_34575)){
var statearr_34618_37054 = state_34612__$1;
(statearr_34618_37054[(1)] = (5));

} else {
var statearr_34619_37055 = state_34612__$1;
(statearr_34619_37055[(1)] = (6));

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
var statearr_34620_37063 = state_34612__$1;
(statearr_34620_37063[(2)] = inst_34603);

(statearr_34620_37063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_37065 = state_34612__$1;
(statearr_34622_37065[(2)] = null);

(statearr_34622_37065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (6))){
var inst_34574 = (state_34612[(7)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(11),inst_34574);
} else {
if((state_val_34613 === (17))){
var inst_34598 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
if(cljs.core.truth_(inst_34598)){
var statearr_34623_37068 = state_34612__$1;
(statearr_34623_37068[(1)] = (19));

} else {
var statearr_34624_37069 = state_34612__$1;
(statearr_34624_37069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (3))){
var inst_34610 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34612__$1,inst_34610);
} else {
if((state_val_34613 === (12))){
var inst_34584 = (state_34612[(10)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(14),inst_34584);
} else {
if((state_val_34613 === (2))){
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(4),results);
} else {
if((state_val_34613 === (19))){
var state_34612__$1 = state_34612;
var statearr_34625_37073 = state_34612__$1;
(statearr_34625_37073[(2)] = null);

(statearr_34625_37073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34584);

return statearr_34626;
})();
var statearr_34627_37075 = state_34612__$1;
(statearr_34627_37075[(2)] = null);

(statearr_34627_37075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_37079 = state_34612__$1;
(statearr_34628_37079[(2)] = null);

(statearr_34628_37079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_37081 = state_34612__$1;
(statearr_34629_37081[(1)] = (8));

} else {
var statearr_34630_37082 = state_34612__$1;
(statearr_34630_37082[(1)] = (9));

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
var statearr_34632_37085 = state_34612__$1;
(statearr_34632_37085[(1)] = (15));

} else {
var statearr_34633_37089 = state_34612__$1;
(statearr_34633_37089[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37092 = state_34612__$1;
(statearr_34634_37092[(2)] = false);

(statearr_34634_37092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34581 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37093 = state_34612__$1;
(statearr_34635_37093[(2)] = inst_34581);

(statearr_34635_37093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37095 = state_34612__$1;
(statearr_34636_37095[(2)] = inst_34595);

(statearr_34636_37095[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34578 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37098 = state_34612__$1;
(statearr_34637_37098[(2)] = inst_34578);

(statearr_34637_37098[(1)] = (10));


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
var statearr_34640_37103 = state_34612;
(statearr_34640_37103[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37106 = state_34612;
state_34612 = G__37106;
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
var c__34273__auto___37127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_37134 = state_34673__$1;
(statearr_34675_37134[(2)] = inst_34669);

(statearr_34675_37134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_37135 = state_34673__$1;
(statearr_34676_37135[(2)] = null);

(statearr_34676_37135[(1)] = (2));


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
var statearr_34678_37140 = state_34673__$1;
(statearr_34678_37140[(1)] = (5));

} else {
var statearr_34679_37141 = state_34673__$1;
(statearr_34679_37141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_37142 = state_34673__$1;
(statearr_34680_37142[(2)] = null);

(statearr_34680_37142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_37147 = state_34673__$1;
(statearr_34681_37147[(1)] = (9));

} else {
var statearr_34682_37148 = state_34673__$1;
(statearr_34682_37148[(1)] = (10));

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
var statearr_34683_37155 = state_34673__$1;
(statearr_34683_37155[(2)] = null);

(statearr_34683_37155[(1)] = (2));


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
var statearr_34687_37160 = state_34673__$1;
(statearr_34687_37160[(2)] = tc);

(statearr_34687_37160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34688 = state_34673;
(statearr_34688[(8)] = inst_34653);

return statearr_34688;
})();
var statearr_34689_37166 = state_34673__$1;
(statearr_34689_37166[(2)] = inst_34654);

(statearr_34689_37166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34690_37167 = state_34673__$1;
(statearr_34690_37167[(2)] = inst_34667);

(statearr_34690_37167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34694_37170 = state_34673__$1;
(statearr_34694_37170[(2)] = fc);

(statearr_34694_37170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34695_37173 = state_34673__$1;
(statearr_34695_37173[(1)] = (12));

} else {
var statearr_34698_37175 = state_34673__$1;
(statearr_34698_37175[(1)] = (13));

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
var statearr_34699 = [null,null,null,null,null,null,null,null,null];
(statearr_34699[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34699[(1)] = (1));

return statearr_34699;
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
}catch (e34700){if((e34700 instanceof Object)){
var ex__34210__auto__ = e34700;
var statearr_34702_37186 = state_34673;
(statearr_34702_37186[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34700;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37189 = state_34673;
state_34673 = G__37189;
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
var state__34275__auto__ = (function (){var statearr_34703 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34703[(6)] = c__34273__auto___37127);

return statearr_34703;
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34726){
var state_val_34727 = (state_34726[(1)]);
if((state_val_34727 === (7))){
var inst_34722 = (state_34726[(2)]);
var state_34726__$1 = state_34726;
var statearr_34729_37194 = state_34726__$1;
(statearr_34729_37194[(2)] = inst_34722);

(statearr_34729_37194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (1))){
var inst_34706 = init;
var state_34726__$1 = (function (){var statearr_34730 = state_34726;
(statearr_34730[(7)] = inst_34706);

return statearr_34730;
})();
var statearr_34732_37195 = state_34726__$1;
(statearr_34732_37195[(2)] = null);

(statearr_34732_37195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (4))){
var inst_34709 = (state_34726[(8)]);
var inst_34709__$1 = (state_34726[(2)]);
var inst_34710 = (inst_34709__$1 == null);
var state_34726__$1 = (function (){var statearr_34733 = state_34726;
(statearr_34733[(8)] = inst_34709__$1);

return statearr_34733;
})();
if(cljs.core.truth_(inst_34710)){
var statearr_34734_37197 = state_34726__$1;
(statearr_34734_37197[(1)] = (5));

} else {
var statearr_34735_37199 = state_34726__$1;
(statearr_34735_37199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (6))){
var inst_34713 = (state_34726[(9)]);
var inst_34706 = (state_34726[(7)]);
var inst_34709 = (state_34726[(8)]);
var inst_34713__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34706,inst_34709) : f.call(null,inst_34706,inst_34709));
var inst_34714 = cljs.core.reduced_QMARK_(inst_34713__$1);
var state_34726__$1 = (function (){var statearr_34736 = state_34726;
(statearr_34736[(9)] = inst_34713__$1);

return statearr_34736;
})();
if(inst_34714){
var statearr_34738_37204 = state_34726__$1;
(statearr_34738_37204[(1)] = (8));

} else {
var statearr_34740_37206 = state_34726__$1;
(statearr_34740_37206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (3))){
var inst_34724 = (state_34726[(2)]);
var state_34726__$1 = state_34726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34726__$1,inst_34724);
} else {
if((state_val_34727 === (2))){
var state_34726__$1 = state_34726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34726__$1,(4),ch);
} else {
if((state_val_34727 === (9))){
var inst_34713 = (state_34726[(9)]);
var inst_34706 = inst_34713;
var state_34726__$1 = (function (){var statearr_34744 = state_34726;
(statearr_34744[(7)] = inst_34706);

return statearr_34744;
})();
var statearr_34745_37208 = state_34726__$1;
(statearr_34745_37208[(2)] = null);

(statearr_34745_37208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (5))){
var inst_34706 = (state_34726[(7)]);
var state_34726__$1 = state_34726;
var statearr_34746_37212 = state_34726__$1;
(statearr_34746_37212[(2)] = inst_34706);

(statearr_34746_37212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (10))){
var inst_34720 = (state_34726[(2)]);
var state_34726__$1 = state_34726;
var statearr_34747_37214 = state_34726__$1;
(statearr_34747_37214[(2)] = inst_34720);

(statearr_34747_37214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (8))){
var inst_34713 = (state_34726[(9)]);
var inst_34716 = cljs.core.deref(inst_34713);
var state_34726__$1 = state_34726;
var statearr_34748_37215 = state_34726__$1;
(statearr_34748_37215[(2)] = inst_34716);

(statearr_34748_37215[(1)] = (10));


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
var statearr_34749 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34749[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34749[(1)] = (1));

return statearr_34749;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34726){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34726);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34751){if((e34751 instanceof Object)){
var ex__34210__auto__ = e34751;
var statearr_34752_37222 = state_34726;
(statearr_34752_37222[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37226 = state_34726;
state_34726 = G__37226;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34726){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34753 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34753[(6)] = c__34273__auto__);

return statearr_34753;
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
var statearr_34764 = [null,null,null,null,null,null,null];
(statearr_34764[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34764[(1)] = (1));

return statearr_34764;
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
}catch (e34768){if((e34768 instanceof Object)){
var ex__34210__auto__ = e34768;
var statearr_34769_37243 = state_34759;
(statearr_34769_37243[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34768;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37245 = state_34759;
state_34759 = G__37245;
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
var state__34275__auto__ = (function (){var statearr_34770 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34770[(6)] = c__34273__auto__);

return statearr_34770;
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
var G__34772 = arguments.length;
switch (G__34772) {
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
var statearr_34802_37259 = state_34800__$1;
(statearr_34802_37259[(2)] = inst_34782);

(statearr_34802_37259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34800__$1 = (function (){var statearr_34803 = state_34800;
(statearr_34803[(7)] = inst_34777);

return statearr_34803;
})();
var statearr_34804_37263 = state_34800__$1;
(statearr_34804_37263[(2)] = null);

(statearr_34804_37263[(1)] = (2));


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
var statearr_34805_37264 = state_34800__$1;
(statearr_34805_37264[(2)] = inst_34794);

(statearr_34805_37264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var inst_34785 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34785)){
var statearr_34806_37267 = state_34800__$1;
(statearr_34806_37267[(1)] = (8));

} else {
var statearr_34807_37268 = state_34800__$1;
(statearr_34807_37268[(1)] = (9));

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
var statearr_34808_37272 = state_34800__$1;
(statearr_34808_37272[(2)] = null);

(statearr_34808_37272[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34777)){
var statearr_34809_37274 = state_34800__$1;
(statearr_34809_37274[(1)] = (4));

} else {
var statearr_34810_37275 = state_34800__$1;
(statearr_34810_37275[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34800__$1 = state_34800;
var statearr_34811_37276 = state_34800__$1;
(statearr_34811_37276[(2)] = inst_34791);

(statearr_34811_37276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var state_34800__$1 = state_34800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34812_37277 = state_34800__$1;
(statearr_34812_37277[(1)] = (11));

} else {
var statearr_34813_37278 = state_34800__$1;
(statearr_34813_37278[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
var statearr_34814_37282 = state_34800__$1;
(statearr_34814_37282[(2)] = inst_34777);

(statearr_34814_37282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34815_37284 = state_34800__$1;
(statearr_34815_37284[(2)] = inst_34796);

(statearr_34815_37284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (8))){
var inst_34777 = (state_34800[(7)]);
var inst_34787 = cljs.core.next(inst_34777);
var inst_34777__$1 = inst_34787;
var state_34800__$1 = (function (){var statearr_34816 = state_34800;
(statearr_34816[(7)] = inst_34777__$1);

return statearr_34816;
})();
var statearr_34817_37290 = state_34800__$1;
(statearr_34817_37290[(2)] = null);

(statearr_34817_37290[(1)] = (2));


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
var statearr_34820_37296 = state_34800;
(statearr_34820_37296[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37301 = state_34800;
state_34800 = G__37301;
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
var state__34275__auto__ = (function (){var statearr_34824 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34824[(6)] = c__34273__auto__);

return statearr_34824;
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
var c__34273__auto___37355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34978){
var state_val_34979 = (state_34978[(1)]);
if((state_val_34979 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34980_37358 = state_34978__$1;
(statearr_34980_37358[(2)] = inst_34974);

(statearr_34980_37358[(1)] = (3));


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
var statearr_34982_37362 = state_34978__$1;
(statearr_34982_37362[(1)] = (22));

} else {
var statearr_34983_37364 = state_34978__$1;
(statearr_34983_37364[(1)] = (23));

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
var statearr_34985_37367 = state_34978__$1;
(statearr_34985_37367[(1)] = (30));

} else {
var statearr_34986_37368 = state_34978__$1;
(statearr_34986_37368[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (1))){
var state_34978__$1 = state_34978;
var statearr_34987_37374 = state_34978__$1;
(statearr_34987_37374[(2)] = null);

(statearr_34987_37374[(1)] = (2));


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
var statearr_34991_37378 = state_34978__$1;
(statearr_34991_37378[(2)] = null);

(statearr_34991_37378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (39))){
var state_34978__$1 = state_34978;
var statearr_34998_37380 = state_34978__$1;
(statearr_34998_37380[(2)] = null);

(statearr_34998_37380[(1)] = (41));


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
var statearr_35001_37385 = state_34978__$1;
(statearr_35001_37385[(1)] = (5));

} else {
var statearr_35002_37386 = state_34978__$1;
(statearr_35002_37386[(1)] = (6));

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
var tmp34993 = inst_34857;
var tmp34994 = inst_34856;
var tmp34995 = inst_34855;
var inst_34855__$1 = tmp34995;
var inst_34856__$1 = tmp34994;
var inst_34857__$1 = tmp34993;
var inst_34858__$1 = inst_34874;
var state_34978__$1 = (function (){var statearr_35003 = state_34978;
(statearr_35003[(18)] = inst_34873);

(statearr_35003[(13)] = inst_34857__$1);

(statearr_35003[(14)] = inst_34856__$1);

(statearr_35003[(15)] = inst_34858__$1);

(statearr_35003[(17)] = inst_34855__$1);

return statearr_35003;
})();
var statearr_35004_37391 = state_34978__$1;
(statearr_35004_37391[(2)] = null);

(statearr_35004_37391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (21))){
var inst_34900 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35008_37392 = state_34978__$1;
(statearr_35008_37392[(2)] = inst_34900);

(statearr_35008_37392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (31))){
var inst_34926 = (state_34978[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34978__$1 = (function (){var statearr_35010 = state_34978;
(statearr_35010[(19)] = inst_34930);

return statearr_35010;
})();
var statearr_35012_37397 = state_34978__$1;
(statearr_35012_37397[(2)] = inst_34931);

(statearr_35012_37397[(1)] = (32));


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
var statearr_35018_37402 = state_34978__$1;
(statearr_35018_37402[(2)] = null);

(statearr_35018_37402[(1)] = (25));


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
var statearr_35020_37408 = state_34978__$1;
(statearr_35020_37408[(2)] = inst_34951);

(statearr_35020_37408[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (33))){
var inst_34937 = (state_34978[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34978__$1 = state_34978;
if(inst_34939){
var statearr_35021_37410 = state_34978__$1;
(statearr_35021_37410[(1)] = (36));

} else {
var statearr_35022_37411 = state_34978__$1;
(statearr_35022_37411[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (13))){
var inst_34867 = (state_34978[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34978__$1 = state_34978;
var statearr_35025_37414 = state_34978__$1;
(statearr_35025_37414[(2)] = inst_34870);

(statearr_35025_37414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (22))){
var inst_34890 = (state_34978[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34978__$1 = state_34978;
var statearr_35028_37420 = state_34978__$1;
(statearr_35028_37420[(2)] = inst_34893);

(statearr_35028_37420[(1)] = (24));


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
var state_34978__$1 = (function (){var statearr_35031 = state_34978;
(statearr_35031[(20)] = inst_34918);

(statearr_35031[(11)] = inst_34919);

(statearr_35031[(21)] = inst_34920);

(statearr_35031[(12)] = inst_34921);

return statearr_35031;
})();
var statearr_35032_37428 = state_34978__$1;
(statearr_35032_37428[(2)] = null);

(statearr_35032_37428[(1)] = (25));


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
var statearr_35034_37441 = state_34978__$1;
(statearr_35034_37441[(2)] = null);

(statearr_35034_37441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (43))){
var state_34978__$1 = state_34978;
var statearr_35035_37443 = state_34978__$1;
(statearr_35035_37443[(2)] = null);

(statearr_35035_37443[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (29))){
var inst_34962 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35038_37445 = state_34978__$1;
(statearr_35038_37445[(2)] = inst_34962);

(statearr_35038_37445[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (44))){
var inst_34971 = (state_34978[(2)]);
var state_34978__$1 = (function (){var statearr_35041 = state_34978;
(statearr_35041[(28)] = inst_34971);

return statearr_35041;
})();
var statearr_35043_37451 = state_34978__$1;
(statearr_35043_37451[(2)] = null);

(statearr_35043_37451[(1)] = (2));


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
var statearr_35046_37461 = state_34978__$1;
(statearr_35046_37461[(2)] = null);

(statearr_35046_37461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (28))){
var inst_34918 = (state_34978[(20)]);
var inst_34937 = (state_34978[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34978__$1 = (function (){var statearr_35049 = state_34978;
(statearr_35049[(25)] = inst_34937__$1);

return statearr_35049;
})();
if(inst_34937__$1){
var statearr_35052_37468 = state_34978__$1;
(statearr_35052_37468[(1)] = (33));

} else {
var statearr_35053_37470 = state_34978__$1;
(statearr_35053_37470[(1)] = (34));

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
var statearr_35060_37472 = state_34978__$1;
(statearr_35060_37472[(1)] = (27));

} else {
var statearr_35067_37473 = state_34978__$1;
(statearr_35067_37473[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (34))){
var state_34978__$1 = state_34978;
var statearr_35074_37476 = state_34978__$1;
(statearr_35074_37476[(2)] = null);

(statearr_35074_37476[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (17))){
var state_34978__$1 = state_34978;
var statearr_35076_37481 = state_34978__$1;
(statearr_35076_37481[(2)] = null);

(statearr_35076_37481[(1)] = (18));


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
var statearr_35079_37484 = state_34978__$1;
(statearr_35079_37484[(2)] = inst_34905);

(statearr_35079_37484[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(4),ch);
} else {
if((state_val_34979 === (23))){
var state_34978__$1 = state_34978;
var statearr_35088_37491 = state_34978__$1;
(statearr_35088_37491[(2)] = null);

(statearr_35088_37491[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (35))){
var inst_34960 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35094_37493 = state_34978__$1;
(statearr_35094_37493[(2)] = inst_34960);

(statearr_35094_37493[(1)] = (29));


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
var state_34978__$1 = (function (){var statearr_35102 = state_34978;
(statearr_35102[(13)] = inst_34857);

(statearr_35102[(14)] = inst_34856);

(statearr_35102[(15)] = inst_34858);

(statearr_35102[(17)] = inst_34855);

return statearr_35102;
})();
var statearr_35108_37501 = state_34978__$1;
(statearr_35108_37501[(2)] = null);

(statearr_35108_37501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (11))){
var inst_34855 = (state_34978[(17)]);
var inst_34877 = (state_34978[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34978__$1 = (function (){var statearr_35114 = state_34978;
(statearr_35114[(7)] = inst_34877__$1);

return statearr_35114;
})();
if(inst_34877__$1){
var statearr_35116_37504 = state_34978__$1;
(statearr_35116_37504[(1)] = (16));

} else {
var statearr_35118_37505 = state_34978__$1;
(statearr_35118_37505[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (9))){
var inst_34907 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35123_37511 = state_34978__$1;
(statearr_35123_37511[(2)] = inst_34907);

(statearr_35123_37511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35131 = state_34978;
(statearr_35131[(13)] = inst_34857);

(statearr_35131[(14)] = inst_34856);

(statearr_35131[(15)] = inst_34858);

(statearr_35131[(17)] = inst_34855);

return statearr_35131;
})();
var statearr_35136_37515 = state_34978__$1;
(statearr_35136_37515[(2)] = null);

(statearr_35136_37515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (14))){
var state_34978__$1 = state_34978;
var statearr_35140_37518 = state_34978__$1;
(statearr_35140_37518[(2)] = null);

(statearr_35140_37518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (45))){
var inst_34968 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35147_37526 = state_34978__$1;
(statearr_35147_37526[(2)] = inst_34968);

(statearr_35147_37526[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (26))){
var inst_34910 = (state_34978[(29)]);
var inst_34964 = (state_34978[(2)]);
var inst_34965 = cljs.core.seq(inst_34910);
var state_34978__$1 = (function (){var statearr_35154 = state_34978;
(statearr_35154[(31)] = inst_34964);

return statearr_35154;
})();
if(inst_34965){
var statearr_35155_37530 = state_34978__$1;
(statearr_35155_37530[(1)] = (42));

} else {
var statearr_35159_37532 = state_34978__$1;
(statearr_35159_37532[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (16))){
var inst_34877 = (state_34978[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34978__$1 = state_34978;
if(inst_34879){
var statearr_35165_37537 = state_34978__$1;
(statearr_35165_37537[(1)] = (19));

} else {
var statearr_35167_37539 = state_34978__$1;
(statearr_35167_37539[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (38))){
var inst_34957 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35173_37543 = state_34978__$1;
(statearr_35173_37543[(2)] = inst_34957);

(statearr_35173_37543[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (30))){
var state_34978__$1 = state_34978;
var statearr_35174_37545 = state_34978__$1;
(statearr_35174_37545[(2)] = null);

(statearr_35174_37545[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (10))){
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34978__$1 = (function (){var statearr_35175 = state_34978;
(statearr_35175[(26)] = inst_34867);

return statearr_35175;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35176_37556 = state_34978__$1;
(statearr_35176_37556[(1)] = (13));

} else {
var statearr_35177_37558 = state_34978__$1;
(statearr_35177_37558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (18))){
var inst_34903 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35180_37560 = state_34978__$1;
(statearr_35180_37560[(2)] = inst_34903);

(statearr_35180_37560[(1)] = (12));


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
var state_34978__$1 = (function (){var statearr_35181 = state_34978;
(statearr_35181[(23)] = inst_34946__$1);

return statearr_35181;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35182_37570 = state_34978__$1;
(statearr_35182_37570[(1)] = (39));

} else {
var statearr_35185_37571 = state_34978__$1;
(statearr_35185_37571[(1)] = (40));

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
var statearr_35202_37573 = state_34978__$1;
(statearr_35202_37573[(1)] = (10));

} else {
var statearr_35208_37574 = state_34978__$1;
(statearr_35208_37574[(1)] = (11));

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
var statearr_35213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35213[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35213[(1)] = (1));

return statearr_35213;
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
}catch (e35216){if((e35216 instanceof Object)){
var ex__34210__auto__ = e35216;
var statearr_35217_37588 = state_34978;
(statearr_35217_37588[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35216;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37593 = state_34978;
state_34978 = G__37593;
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
var state__34275__auto__ = (function (){var statearr_35219 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35219[(6)] = c__34273__auto___37355);

return statearr_35219;
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
var G__35234 = arguments.length;
switch (G__35234) {
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
var len__4789__auto___37652 = arguments.length;
var i__4790__auto___37653 = (0);
while(true){
if((i__4790__auto___37653 < len__4789__auto___37652)){
args__4795__auto__.push((arguments[i__4790__auto___37653]));

var G__37654 = (i__4790__auto___37653 + (1));
i__4790__auto___37653 = G__37654;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35360){
var map__35363 = p__35360;
var map__35363__$1 = (((((!((map__35363 == null))))?(((((map__35363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35363):map__35363);
var opts = map__35363__$1;
var statearr_35366_37658 = state;
(statearr_35366_37658[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35367_37659 = state;
(statearr_35367_37659[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35368_37662 = state;
(statearr_35368_37662[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35334){
var G__35336 = cljs.core.first(seq35334);
var seq35334__$1 = cljs.core.next(seq35334);
var G__35337 = cljs.core.first(seq35334__$1);
var seq35334__$2 = cljs.core.next(seq35334__$1);
var G__35338 = cljs.core.first(seq35334__$2);
var seq35334__$3 = cljs.core.next(seq35334__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35336,G__35337,G__35338,seq35334__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35382 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35382 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35383){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35383 = meta35383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35384,meta35383__$1){
var self__ = this;
var _35384__$1 = this;
return (new cljs.core.async.t_cljs$core$async35382(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35383__$1));
}));

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35384){
var self__ = this;
var _35384__$1 = this;
return self__.meta35383;
}));

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35383","meta35383",992040680,null)], null);
}));

(cljs.core.async.t_cljs$core$async35382.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35382");

(cljs.core.async.t_cljs$core$async35382.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35382");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35382.
 */
cljs.core.async.__GT_t_cljs$core$async35382 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35382(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35383){
return (new cljs.core.async.t_cljs$core$async35382(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35383));
});

}

return (new cljs.core.async.t_cljs$core$async35382(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35560){
var state_val_35561 = (state_35560[(1)]);
if((state_val_35561 === (7))){
var inst_35444 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
var statearr_35572_37698 = state_35560__$1;
(statearr_35572_37698[(2)] = inst_35444);

(statearr_35572_37698[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (20))){
var inst_35456 = (state_35560[(7)]);
var state_35560__$1 = state_35560;
var statearr_35579_37703 = state_35560__$1;
(statearr_35579_37703[(2)] = inst_35456);

(statearr_35579_37703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (27))){
var state_35560__$1 = state_35560;
var statearr_35584_37705 = state_35560__$1;
(statearr_35584_37705[(2)] = null);

(statearr_35584_37705[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (1))){
var inst_35426 = (state_35560[(8)]);
var inst_35426__$1 = calc_state();
var inst_35431 = (inst_35426__$1 == null);
var inst_35432 = cljs.core.not(inst_35431);
var state_35560__$1 = (function (){var statearr_35591 = state_35560;
(statearr_35591[(8)] = inst_35426__$1);

return statearr_35591;
})();
if(inst_35432){
var statearr_35595_37712 = state_35560__$1;
(statearr_35595_37712[(1)] = (2));

} else {
var statearr_35598_37714 = state_35560__$1;
(statearr_35598_37714[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (24))){
var inst_35493 = (state_35560[(9)]);
var inst_35482 = (state_35560[(10)]);
var inst_35532 = (state_35560[(11)]);
var inst_35532__$1 = (inst_35482.cljs$core$IFn$_invoke$arity$1 ? inst_35482.cljs$core$IFn$_invoke$arity$1(inst_35493) : inst_35482.call(null,inst_35493));
var state_35560__$1 = (function (){var statearr_35606 = state_35560;
(statearr_35606[(11)] = inst_35532__$1);

return statearr_35606;
})();
if(cljs.core.truth_(inst_35532__$1)){
var statearr_35609_37717 = state_35560__$1;
(statearr_35609_37717[(1)] = (29));

} else {
var statearr_35610_37718 = state_35560__$1;
(statearr_35610_37718[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (4))){
var inst_35447 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
if(cljs.core.truth_(inst_35447)){
var statearr_35621_37725 = state_35560__$1;
(statearr_35621_37725[(1)] = (8));

} else {
var statearr_35623_37727 = state_35560__$1;
(statearr_35623_37727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (15))){
var inst_35476 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
if(cljs.core.truth_(inst_35476)){
var statearr_35628_37729 = state_35560__$1;
(statearr_35628_37729[(1)] = (19));

} else {
var statearr_35631_37730 = state_35560__$1;
(statearr_35631_37730[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (21))){
var inst_35481 = (state_35560[(12)]);
var inst_35481__$1 = (state_35560[(2)]);
var inst_35482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35481__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35481__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35481__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35560__$1 = (function (){var statearr_35637 = state_35560;
(statearr_35637[(13)] = inst_35484);

(statearr_35637[(12)] = inst_35481__$1);

(statearr_35637[(10)] = inst_35482);

return statearr_35637;
})();
return cljs.core.async.ioc_alts_BANG_(state_35560__$1,(22),inst_35485);
} else {
if((state_val_35561 === (31))){
var inst_35540 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
if(cljs.core.truth_(inst_35540)){
var statearr_35644_37741 = state_35560__$1;
(statearr_35644_37741[(1)] = (32));

} else {
var statearr_35648_37742 = state_35560__$1;
(statearr_35648_37742[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (32))){
var inst_35492 = (state_35560[(14)]);
var state_35560__$1 = state_35560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35560__$1,(35),out,inst_35492);
} else {
if((state_val_35561 === (33))){
var inst_35481 = (state_35560[(12)]);
var inst_35456 = inst_35481;
var state_35560__$1 = (function (){var statearr_35662 = state_35560;
(statearr_35662[(7)] = inst_35456);

return statearr_35662;
})();
var statearr_35665_37744 = state_35560__$1;
(statearr_35665_37744[(2)] = null);

(statearr_35665_37744[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (13))){
var inst_35456 = (state_35560[(7)]);
var inst_35465 = inst_35456.cljs$lang$protocol_mask$partition0$;
var inst_35466 = (inst_35465 & (64));
var inst_35467 = inst_35456.cljs$core$ISeq$;
var inst_35468 = (cljs.core.PROTOCOL_SENTINEL === inst_35467);
var inst_35469 = ((inst_35466) || (inst_35468));
var state_35560__$1 = state_35560;
if(cljs.core.truth_(inst_35469)){
var statearr_35675_37753 = state_35560__$1;
(statearr_35675_37753[(1)] = (16));

} else {
var statearr_35677_37754 = state_35560__$1;
(statearr_35677_37754[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (22))){
var inst_35492 = (state_35560[(14)]);
var inst_35493 = (state_35560[(9)]);
var inst_35491 = (state_35560[(2)]);
var inst_35492__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35491,(0),null);
var inst_35493__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35491,(1),null);
var inst_35506 = (inst_35492__$1 == null);
var inst_35509 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35493__$1,change);
var inst_35512 = ((inst_35506) || (inst_35509));
var state_35560__$1 = (function (){var statearr_35685 = state_35560;
(statearr_35685[(14)] = inst_35492__$1);

(statearr_35685[(9)] = inst_35493__$1);

return statearr_35685;
})();
if(cljs.core.truth_(inst_35512)){
var statearr_35689_37758 = state_35560__$1;
(statearr_35689_37758[(1)] = (23));

} else {
var statearr_35691_37760 = state_35560__$1;
(statearr_35691_37760[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (36))){
var inst_35481 = (state_35560[(12)]);
var inst_35456 = inst_35481;
var state_35560__$1 = (function (){var statearr_35698 = state_35560;
(statearr_35698[(7)] = inst_35456);

return statearr_35698;
})();
var statearr_35699_37767 = state_35560__$1;
(statearr_35699_37767[(2)] = null);

(statearr_35699_37767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (29))){
var inst_35532 = (state_35560[(11)]);
var state_35560__$1 = state_35560;
var statearr_35700_37769 = state_35560__$1;
(statearr_35700_37769[(2)] = inst_35532);

(statearr_35700_37769[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (6))){
var state_35560__$1 = state_35560;
var statearr_35701_37771 = state_35560__$1;
(statearr_35701_37771[(2)] = false);

(statearr_35701_37771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (28))){
var inst_35526 = (state_35560[(2)]);
var inst_35527 = calc_state();
var inst_35456 = inst_35527;
var state_35560__$1 = (function (){var statearr_35702 = state_35560;
(statearr_35702[(7)] = inst_35456);

(statearr_35702[(15)] = inst_35526);

return statearr_35702;
})();
var statearr_35703_37779 = state_35560__$1;
(statearr_35703_37779[(2)] = null);

(statearr_35703_37779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (25))){
var inst_35554 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
var statearr_35706_37781 = state_35560__$1;
(statearr_35706_37781[(2)] = inst_35554);

(statearr_35706_37781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (34))){
var inst_35552 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
var statearr_35707_37782 = state_35560__$1;
(statearr_35707_37782[(2)] = inst_35552);

(statearr_35707_37782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (17))){
var state_35560__$1 = state_35560;
var statearr_35710_37784 = state_35560__$1;
(statearr_35710_37784[(2)] = false);

(statearr_35710_37784[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (3))){
var state_35560__$1 = state_35560;
var statearr_35711_37786 = state_35560__$1;
(statearr_35711_37786[(2)] = false);

(statearr_35711_37786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (12))){
var inst_35556 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35560__$1,inst_35556);
} else {
if((state_val_35561 === (2))){
var inst_35426 = (state_35560[(8)]);
var inst_35436 = inst_35426.cljs$lang$protocol_mask$partition0$;
var inst_35437 = (inst_35436 & (64));
var inst_35438 = inst_35426.cljs$core$ISeq$;
var inst_35439 = (cljs.core.PROTOCOL_SENTINEL === inst_35438);
var inst_35440 = ((inst_35437) || (inst_35439));
var state_35560__$1 = state_35560;
if(cljs.core.truth_(inst_35440)){
var statearr_35713_37793 = state_35560__$1;
(statearr_35713_37793[(1)] = (5));

} else {
var statearr_35715_37795 = state_35560__$1;
(statearr_35715_37795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (23))){
var inst_35492 = (state_35560[(14)]);
var inst_35517 = (inst_35492 == null);
var state_35560__$1 = state_35560;
if(cljs.core.truth_(inst_35517)){
var statearr_35718_37797 = state_35560__$1;
(statearr_35718_37797[(1)] = (26));

} else {
var statearr_35719_37801 = state_35560__$1;
(statearr_35719_37801[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (35))){
var inst_35543 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
if(cljs.core.truth_(inst_35543)){
var statearr_35721_37802 = state_35560__$1;
(statearr_35721_37802[(1)] = (36));

} else {
var statearr_35723_37804 = state_35560__$1;
(statearr_35723_37804[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (19))){
var inst_35456 = (state_35560[(7)]);
var inst_35478 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35456);
var state_35560__$1 = state_35560;
var statearr_35726_37808 = state_35560__$1;
(statearr_35726_37808[(2)] = inst_35478);

(statearr_35726_37808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (11))){
var inst_35456 = (state_35560[(7)]);
var inst_35460 = (inst_35456 == null);
var inst_35461 = cljs.core.not(inst_35460);
var state_35560__$1 = state_35560;
if(inst_35461){
var statearr_35727_37809 = state_35560__$1;
(statearr_35727_37809[(1)] = (13));

} else {
var statearr_35728_37812 = state_35560__$1;
(statearr_35728_37812[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (9))){
var inst_35426 = (state_35560[(8)]);
var state_35560__$1 = state_35560;
var statearr_35729_37817 = state_35560__$1;
(statearr_35729_37817[(2)] = inst_35426);

(statearr_35729_37817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (5))){
var state_35560__$1 = state_35560;
var statearr_35730_37819 = state_35560__$1;
(statearr_35730_37819[(2)] = true);

(statearr_35730_37819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (14))){
var state_35560__$1 = state_35560;
var statearr_35734_37823 = state_35560__$1;
(statearr_35734_37823[(2)] = false);

(statearr_35734_37823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (26))){
var inst_35493 = (state_35560[(9)]);
var inst_35521 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35493);
var state_35560__$1 = state_35560;
var statearr_35736_37826 = state_35560__$1;
(statearr_35736_37826[(2)] = inst_35521);

(statearr_35736_37826[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (16))){
var state_35560__$1 = state_35560;
var statearr_35739_37830 = state_35560__$1;
(statearr_35739_37830[(2)] = true);

(statearr_35739_37830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (38))){
var inst_35548 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
var statearr_35743_37832 = state_35560__$1;
(statearr_35743_37832[(2)] = inst_35548);

(statearr_35743_37832[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (30))){
var inst_35484 = (state_35560[(13)]);
var inst_35493 = (state_35560[(9)]);
var inst_35482 = (state_35560[(10)]);
var inst_35535 = cljs.core.empty_QMARK_(inst_35482);
var inst_35536 = (inst_35484.cljs$core$IFn$_invoke$arity$1 ? inst_35484.cljs$core$IFn$_invoke$arity$1(inst_35493) : inst_35484.call(null,inst_35493));
var inst_35537 = cljs.core.not(inst_35536);
var inst_35538 = ((inst_35535) && (inst_35537));
var state_35560__$1 = state_35560;
var statearr_35745_37839 = state_35560__$1;
(statearr_35745_37839[(2)] = inst_35538);

(statearr_35745_37839[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (10))){
var inst_35426 = (state_35560[(8)]);
var inst_35452 = (state_35560[(2)]);
var inst_35453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35452,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35452,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35452,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35456 = inst_35426;
var state_35560__$1 = (function (){var statearr_35746 = state_35560;
(statearr_35746[(7)] = inst_35456);

(statearr_35746[(16)] = inst_35454);

(statearr_35746[(17)] = inst_35455);

(statearr_35746[(18)] = inst_35453);

return statearr_35746;
})();
var statearr_35748_37846 = state_35560__$1;
(statearr_35748_37846[(2)] = null);

(statearr_35748_37846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (18))){
var inst_35473 = (state_35560[(2)]);
var state_35560__$1 = state_35560;
var statearr_35749_37850 = state_35560__$1;
(statearr_35749_37850[(2)] = inst_35473);

(statearr_35749_37850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (37))){
var state_35560__$1 = state_35560;
var statearr_35751_37852 = state_35560__$1;
(statearr_35751_37852[(2)] = null);

(statearr_35751_37852[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35561 === (8))){
var inst_35426 = (state_35560[(8)]);
var inst_35449 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35426);
var state_35560__$1 = state_35560;
var statearr_35752_37856 = state_35560__$1;
(statearr_35752_37856[(2)] = inst_35449);

(statearr_35752_37856[(1)] = (10));


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
var statearr_35754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35754[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35754[(1)] = (1));

return statearr_35754;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35560){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35560);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35756){if((e35756 instanceof Object)){
var ex__34210__auto__ = e35756;
var statearr_35757_37858 = state_35560;
(statearr_35757_37858[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37862 = state_35560;
state_35560 = G__37862;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35560){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35759 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35759[(6)] = c__34273__auto___37692);

return statearr_35759;
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
var G__35794 = arguments.length;
switch (G__35794) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35803_SHARP_){
if(cljs.core.truth_((p1__35803_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35803_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35803_SHARP_.call(null,topic)))){
return p1__35803_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35803_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35815 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35816){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35816 = meta35816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35817,meta35816__$1){
var self__ = this;
var _35817__$1 = this;
return (new cljs.core.async.t_cljs$core$async35815(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35816__$1));
}));

(cljs.core.async.t_cljs$core$async35815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35817){
var self__ = this;
var _35817__$1 = this;
return self__.meta35816;
}));

(cljs.core.async.t_cljs$core$async35815.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35815.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35815.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35815.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35815.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35815.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35815.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35816","meta35816",-1684738696,null)], null);
}));

(cljs.core.async.t_cljs$core$async35815.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35815");

(cljs.core.async.t_cljs$core$async35815.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35815");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35815.
 */
cljs.core.async.__GT_t_cljs$core$async35815 = (function cljs$core$async$__GT_t_cljs$core$async35815(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35816){
return (new cljs.core.async.t_cljs$core$async35815(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35816));
});

}

return (new cljs.core.async.t_cljs$core$async35815(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35937){
var state_val_35939 = (state_35937[(1)]);
if((state_val_35939 === (7))){
var inst_35927 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
var statearr_35942_37924 = state_35937__$1;
(statearr_35942_37924[(2)] = inst_35927);

(statearr_35942_37924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (20))){
var state_35937__$1 = state_35937;
var statearr_35944_37925 = state_35937__$1;
(statearr_35944_37925[(2)] = null);

(statearr_35944_37925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (1))){
var state_35937__$1 = state_35937;
var statearr_35946_37926 = state_35937__$1;
(statearr_35946_37926[(2)] = null);

(statearr_35946_37926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (24))){
var inst_35910 = (state_35937[(7)]);
var inst_35919 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35910);
var state_35937__$1 = state_35937;
var statearr_35950_37927 = state_35937__$1;
(statearr_35950_37927[(2)] = inst_35919);

(statearr_35950_37927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (4))){
var inst_35855 = (state_35937[(8)]);
var inst_35855__$1 = (state_35937[(2)]);
var inst_35856 = (inst_35855__$1 == null);
var state_35937__$1 = (function (){var statearr_35951 = state_35937;
(statearr_35951[(8)] = inst_35855__$1);

return statearr_35951;
})();
if(cljs.core.truth_(inst_35856)){
var statearr_35952_37931 = state_35937__$1;
(statearr_35952_37931[(1)] = (5));

} else {
var statearr_35953_37932 = state_35937__$1;
(statearr_35953_37932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (15))){
var inst_35904 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
var statearr_35957_37933 = state_35937__$1;
(statearr_35957_37933[(2)] = inst_35904);

(statearr_35957_37933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (21))){
var inst_35924 = (state_35937[(2)]);
var state_35937__$1 = (function (){var statearr_35958 = state_35937;
(statearr_35958[(9)] = inst_35924);

return statearr_35958;
})();
var statearr_35960_37938 = state_35937__$1;
(statearr_35960_37938[(2)] = null);

(statearr_35960_37938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (13))){
var inst_35884 = (state_35937[(10)]);
var inst_35888 = cljs.core.chunked_seq_QMARK_(inst_35884);
var state_35937__$1 = state_35937;
if(inst_35888){
var statearr_35964_37939 = state_35937__$1;
(statearr_35964_37939[(1)] = (16));

} else {
var statearr_35965_37940 = state_35937__$1;
(statearr_35965_37940[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (22))){
var inst_35916 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
if(cljs.core.truth_(inst_35916)){
var statearr_35967_37941 = state_35937__$1;
(statearr_35967_37941[(1)] = (23));

} else {
var statearr_35968_37942 = state_35937__$1;
(statearr_35968_37942[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (6))){
var inst_35912 = (state_35937[(11)]);
var inst_35910 = (state_35937[(7)]);
var inst_35855 = (state_35937[(8)]);
var inst_35910__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35855) : topic_fn.call(null,inst_35855));
var inst_35911 = cljs.core.deref(mults);
var inst_35912__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35911,inst_35910__$1);
var state_35937__$1 = (function (){var statearr_35973 = state_35937;
(statearr_35973[(11)] = inst_35912__$1);

(statearr_35973[(7)] = inst_35910__$1);

return statearr_35973;
})();
if(cljs.core.truth_(inst_35912__$1)){
var statearr_35975_37943 = state_35937__$1;
(statearr_35975_37943[(1)] = (19));

} else {
var statearr_35976_37945 = state_35937__$1;
(statearr_35976_37945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (25))){
var inst_35921 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
var statearr_35978_37946 = state_35937__$1;
(statearr_35978_37946[(2)] = inst_35921);

(statearr_35978_37946[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (17))){
var inst_35884 = (state_35937[(10)]);
var inst_35895 = cljs.core.first(inst_35884);
var inst_35896 = cljs.core.async.muxch_STAR_(inst_35895);
var inst_35897 = cljs.core.async.close_BANG_(inst_35896);
var inst_35898 = cljs.core.next(inst_35884);
var inst_35867 = inst_35898;
var inst_35868 = null;
var inst_35869 = (0);
var inst_35870 = (0);
var state_35937__$1 = (function (){var statearr_35981 = state_35937;
(statearr_35981[(12)] = inst_35867);

(statearr_35981[(13)] = inst_35869);

(statearr_35981[(14)] = inst_35868);

(statearr_35981[(15)] = inst_35870);

(statearr_35981[(16)] = inst_35897);

return statearr_35981;
})();
var statearr_35982_37951 = state_35937__$1;
(statearr_35982_37951[(2)] = null);

(statearr_35982_37951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (3))){
var inst_35930 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35937__$1,inst_35930);
} else {
if((state_val_35939 === (12))){
var inst_35906 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
var statearr_35983_37952 = state_35937__$1;
(statearr_35983_37952[(2)] = inst_35906);

(statearr_35983_37952[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (2))){
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35937__$1,(4),ch);
} else {
if((state_val_35939 === (23))){
var state_35937__$1 = state_35937;
var statearr_35987_37953 = state_35937__$1;
(statearr_35987_37953[(2)] = null);

(statearr_35987_37953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (19))){
var inst_35912 = (state_35937[(11)]);
var inst_35855 = (state_35937[(8)]);
var inst_35914 = cljs.core.async.muxch_STAR_(inst_35912);
var state_35937__$1 = state_35937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35937__$1,(22),inst_35914,inst_35855);
} else {
if((state_val_35939 === (11))){
var inst_35867 = (state_35937[(12)]);
var inst_35884 = (state_35937[(10)]);
var inst_35884__$1 = cljs.core.seq(inst_35867);
var state_35937__$1 = (function (){var statearr_35999 = state_35937;
(statearr_35999[(10)] = inst_35884__$1);

return statearr_35999;
})();
if(inst_35884__$1){
var statearr_36001_37956 = state_35937__$1;
(statearr_36001_37956[(1)] = (13));

} else {
var statearr_36003_37959 = state_35937__$1;
(statearr_36003_37959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (9))){
var inst_35908 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
var statearr_36004_37960 = state_35937__$1;
(statearr_36004_37960[(2)] = inst_35908);

(statearr_36004_37960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (5))){
var inst_35862 = cljs.core.deref(mults);
var inst_35863 = cljs.core.vals(inst_35862);
var inst_35865 = cljs.core.seq(inst_35863);
var inst_35867 = inst_35865;
var inst_35868 = null;
var inst_35869 = (0);
var inst_35870 = (0);
var state_35937__$1 = (function (){var statearr_36009 = state_35937;
(statearr_36009[(12)] = inst_35867);

(statearr_36009[(13)] = inst_35869);

(statearr_36009[(14)] = inst_35868);

(statearr_36009[(15)] = inst_35870);

return statearr_36009;
})();
var statearr_36010_37964 = state_35937__$1;
(statearr_36010_37964[(2)] = null);

(statearr_36010_37964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (14))){
var state_35937__$1 = state_35937;
var statearr_36018_37965 = state_35937__$1;
(statearr_36018_37965[(2)] = null);

(statearr_36018_37965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (16))){
var inst_35884 = (state_35937[(10)]);
var inst_35890 = cljs.core.chunk_first(inst_35884);
var inst_35891 = cljs.core.chunk_rest(inst_35884);
var inst_35892 = cljs.core.count(inst_35890);
var inst_35867 = inst_35891;
var inst_35868 = inst_35890;
var inst_35869 = inst_35892;
var inst_35870 = (0);
var state_35937__$1 = (function (){var statearr_36020 = state_35937;
(statearr_36020[(12)] = inst_35867);

(statearr_36020[(13)] = inst_35869);

(statearr_36020[(14)] = inst_35868);

(statearr_36020[(15)] = inst_35870);

return statearr_36020;
})();
var statearr_36024_37966 = state_35937__$1;
(statearr_36024_37966[(2)] = null);

(statearr_36024_37966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (10))){
var inst_35867 = (state_35937[(12)]);
var inst_35869 = (state_35937[(13)]);
var inst_35868 = (state_35937[(14)]);
var inst_35870 = (state_35937[(15)]);
var inst_35876 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35868,inst_35870);
var inst_35877 = cljs.core.async.muxch_STAR_(inst_35876);
var inst_35878 = cljs.core.async.close_BANG_(inst_35877);
var inst_35880 = (inst_35870 + (1));
var tmp36013 = inst_35867;
var tmp36014 = inst_35869;
var tmp36015 = inst_35868;
var inst_35867__$1 = tmp36013;
var inst_35868__$1 = tmp36015;
var inst_35869__$1 = tmp36014;
var inst_35870__$1 = inst_35880;
var state_35937__$1 = (function (){var statearr_36029 = state_35937;
(statearr_36029[(12)] = inst_35867__$1);

(statearr_36029[(13)] = inst_35869__$1);

(statearr_36029[(14)] = inst_35868__$1);

(statearr_36029[(15)] = inst_35870__$1);

(statearr_36029[(17)] = inst_35878);

return statearr_36029;
})();
var statearr_36030_37970 = state_35937__$1;
(statearr_36030_37970[(2)] = null);

(statearr_36030_37970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (18))){
var inst_35901 = (state_35937[(2)]);
var state_35937__$1 = state_35937;
var statearr_36031_37975 = state_35937__$1;
(statearr_36031_37975[(2)] = inst_35901);

(statearr_36031_37975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (8))){
var inst_35869 = (state_35937[(13)]);
var inst_35870 = (state_35937[(15)]);
var inst_35872 = (inst_35870 < inst_35869);
var inst_35873 = inst_35872;
var state_35937__$1 = state_35937;
if(cljs.core.truth_(inst_35873)){
var statearr_36032_37976 = state_35937__$1;
(statearr_36032_37976[(1)] = (10));

} else {
var statearr_36033_37977 = state_35937__$1;
(statearr_36033_37977[(1)] = (11));

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
var statearr_36037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36037[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36037[(1)] = (1));

return statearr_36037;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35937){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35937);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36040){if((e36040 instanceof Object)){
var ex__34210__auto__ = e36040;
var statearr_36042_37983 = state_35937;
(statearr_36042_37983[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36040;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37984 = state_35937;
state_35937 = G__37984;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36043 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36043[(6)] = c__34273__auto___37919);

return statearr_36043;
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
var G__36049 = arguments.length;
switch (G__36049) {
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
var G__36051 = arguments.length;
switch (G__36051) {
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
var G__36053 = arguments.length;
switch (G__36053) {
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
var c__34273__auto___37998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36109){
var state_val_36110 = (state_36109[(1)]);
if((state_val_36110 === (7))){
var state_36109__$1 = state_36109;
var statearr_36113_37999 = state_36109__$1;
(statearr_36113_37999[(2)] = null);

(statearr_36113_37999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (1))){
var state_36109__$1 = state_36109;
var statearr_36115_38002 = state_36109__$1;
(statearr_36115_38002[(2)] = null);

(statearr_36115_38002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (4))){
var inst_36065 = (state_36109[(7)]);
var inst_36067 = (inst_36065 < cnt);
var state_36109__$1 = state_36109;
if(cljs.core.truth_(inst_36067)){
var statearr_36119_38003 = state_36109__$1;
(statearr_36119_38003[(1)] = (6));

} else {
var statearr_36120_38004 = state_36109__$1;
(statearr_36120_38004[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (15))){
var inst_36100 = (state_36109[(2)]);
var state_36109__$1 = state_36109;
var statearr_36121_38005 = state_36109__$1;
(statearr_36121_38005[(2)] = inst_36100);

(statearr_36121_38005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (13))){
var inst_36092 = cljs.core.async.close_BANG_(out);
var state_36109__$1 = state_36109;
var statearr_36122_38006 = state_36109__$1;
(statearr_36122_38006[(2)] = inst_36092);

(statearr_36122_38006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (6))){
var state_36109__$1 = state_36109;
var statearr_36123_38009 = state_36109__$1;
(statearr_36123_38009[(2)] = null);

(statearr_36123_38009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (3))){
var inst_36103 = (state_36109[(2)]);
var state_36109__$1 = state_36109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36109__$1,inst_36103);
} else {
if((state_val_36110 === (12))){
var inst_36088 = (state_36109[(8)]);
var inst_36088__$1 = (state_36109[(2)]);
var inst_36089 = cljs.core.some(cljs.core.nil_QMARK_,inst_36088__$1);
var state_36109__$1 = (function (){var statearr_36124 = state_36109;
(statearr_36124[(8)] = inst_36088__$1);

return statearr_36124;
})();
if(cljs.core.truth_(inst_36089)){
var statearr_36129_38010 = state_36109__$1;
(statearr_36129_38010[(1)] = (13));

} else {
var statearr_36130_38011 = state_36109__$1;
(statearr_36130_38011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (2))){
var inst_36064 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36065 = (0);
var state_36109__$1 = (function (){var statearr_36132 = state_36109;
(statearr_36132[(9)] = inst_36064);

(statearr_36132[(7)] = inst_36065);

return statearr_36132;
})();
var statearr_36135_38013 = state_36109__$1;
(statearr_36135_38013[(2)] = null);

(statearr_36135_38013[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (11))){
var inst_36065 = (state_36109[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36109,(10),Object,null,(9));
var inst_36075 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36065) : chs__$1.call(null,inst_36065));
var inst_36076 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36065) : done.call(null,inst_36065));
var inst_36077 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36075,inst_36076);
var state_36109__$1 = state_36109;
var statearr_36136_38016 = state_36109__$1;
(statearr_36136_38016[(2)] = inst_36077);


cljs.core.async.impl.ioc_helpers.process_exception(state_36109__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (9))){
var inst_36065 = (state_36109[(7)]);
var inst_36079 = (state_36109[(2)]);
var inst_36080 = (inst_36065 + (1));
var inst_36065__$1 = inst_36080;
var state_36109__$1 = (function (){var statearr_36137 = state_36109;
(statearr_36137[(10)] = inst_36079);

(statearr_36137[(7)] = inst_36065__$1);

return statearr_36137;
})();
var statearr_36139_38018 = state_36109__$1;
(statearr_36139_38018[(2)] = null);

(statearr_36139_38018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (5))){
var inst_36086 = (state_36109[(2)]);
var state_36109__$1 = (function (){var statearr_36141 = state_36109;
(statearr_36141[(11)] = inst_36086);

return statearr_36141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36109__$1,(12),dchan);
} else {
if((state_val_36110 === (14))){
var inst_36088 = (state_36109[(8)]);
var inst_36095 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36088);
var state_36109__$1 = state_36109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36109__$1,(16),out,inst_36095);
} else {
if((state_val_36110 === (16))){
var inst_36097 = (state_36109[(2)]);
var state_36109__$1 = (function (){var statearr_36145 = state_36109;
(statearr_36145[(12)] = inst_36097);

return statearr_36145;
})();
var statearr_36146_38021 = state_36109__$1;
(statearr_36146_38021[(2)] = null);

(statearr_36146_38021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (10))){
var inst_36070 = (state_36109[(2)]);
var inst_36071 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36109__$1 = (function (){var statearr_36148 = state_36109;
(statearr_36148[(13)] = inst_36070);

return statearr_36148;
})();
var statearr_36150_38023 = state_36109__$1;
(statearr_36150_38023[(2)] = inst_36071);


cljs.core.async.impl.ioc_helpers.process_exception(state_36109__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36110 === (8))){
var inst_36084 = (state_36109[(2)]);
var state_36109__$1 = state_36109;
var statearr_36151_38026 = state_36109__$1;
(statearr_36151_38026[(2)] = inst_36084);

(statearr_36151_38026[(1)] = (5));


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
var statearr_36152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36152[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36152[(1)] = (1));

return statearr_36152;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36109){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36109);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36153){if((e36153 instanceof Object)){
var ex__34210__auto__ = e36153;
var statearr_36154_38028 = state_36109;
(statearr_36154_38028[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36153;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38031 = state_36109;
state_36109 = G__38031;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36157 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36157[(6)] = c__34273__auto___37998);

return statearr_36157;
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
var G__36186 = arguments.length;
switch (G__36186) {
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
var c__34273__auto___38036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36222){
var state_val_36223 = (state_36222[(1)]);
if((state_val_36223 === (7))){
var inst_36199 = (state_36222[(7)]);
var inst_36200 = (state_36222[(8)]);
var inst_36199__$1 = (state_36222[(2)]);
var inst_36200__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36199__$1,(0),null);
var inst_36201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36199__$1,(1),null);
var inst_36202 = (inst_36200__$1 == null);
var state_36222__$1 = (function (){var statearr_36228 = state_36222;
(statearr_36228[(7)] = inst_36199__$1);

(statearr_36228[(8)] = inst_36200__$1);

(statearr_36228[(9)] = inst_36201);

return statearr_36228;
})();
if(cljs.core.truth_(inst_36202)){
var statearr_36229_38039 = state_36222__$1;
(statearr_36229_38039[(1)] = (8));

} else {
var statearr_36230_38041 = state_36222__$1;
(statearr_36230_38041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (1))){
var inst_36189 = cljs.core.vec(chs);
var inst_36190 = inst_36189;
var state_36222__$1 = (function (){var statearr_36232 = state_36222;
(statearr_36232[(10)] = inst_36190);

return statearr_36232;
})();
var statearr_36237_38042 = state_36222__$1;
(statearr_36237_38042[(2)] = null);

(statearr_36237_38042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (4))){
var inst_36190 = (state_36222[(10)]);
var state_36222__$1 = state_36222;
return cljs.core.async.ioc_alts_BANG_(state_36222__$1,(7),inst_36190);
} else {
if((state_val_36223 === (6))){
var inst_36218 = (state_36222[(2)]);
var state_36222__$1 = state_36222;
var statearr_36241_38044 = state_36222__$1;
(statearr_36241_38044[(2)] = inst_36218);

(statearr_36241_38044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (3))){
var inst_36220 = (state_36222[(2)]);
var state_36222__$1 = state_36222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36222__$1,inst_36220);
} else {
if((state_val_36223 === (2))){
var inst_36190 = (state_36222[(10)]);
var inst_36192 = cljs.core.count(inst_36190);
var inst_36193 = (inst_36192 > (0));
var state_36222__$1 = state_36222;
if(cljs.core.truth_(inst_36193)){
var statearr_36245_38047 = state_36222__$1;
(statearr_36245_38047[(1)] = (4));

} else {
var statearr_36247_38048 = state_36222__$1;
(statearr_36247_38048[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (11))){
var inst_36190 = (state_36222[(10)]);
var inst_36211 = (state_36222[(2)]);
var tmp36242 = inst_36190;
var inst_36190__$1 = tmp36242;
var state_36222__$1 = (function (){var statearr_36249 = state_36222;
(statearr_36249[(10)] = inst_36190__$1);

(statearr_36249[(11)] = inst_36211);

return statearr_36249;
})();
var statearr_36250_38049 = state_36222__$1;
(statearr_36250_38049[(2)] = null);

(statearr_36250_38049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (9))){
var inst_36200 = (state_36222[(8)]);
var state_36222__$1 = state_36222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36222__$1,(11),out,inst_36200);
} else {
if((state_val_36223 === (5))){
var inst_36216 = cljs.core.async.close_BANG_(out);
var state_36222__$1 = state_36222;
var statearr_36254_38053 = state_36222__$1;
(statearr_36254_38053[(2)] = inst_36216);

(statearr_36254_38053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (10))){
var inst_36214 = (state_36222[(2)]);
var state_36222__$1 = state_36222;
var statearr_36255_38054 = state_36222__$1;
(statearr_36255_38054[(2)] = inst_36214);

(statearr_36255_38054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (8))){
var inst_36199 = (state_36222[(7)]);
var inst_36190 = (state_36222[(10)]);
var inst_36200 = (state_36222[(8)]);
var inst_36201 = (state_36222[(9)]);
var inst_36206 = (function (){var cs = inst_36190;
var vec__36195 = inst_36199;
var v = inst_36200;
var c = inst_36201;
return (function (p1__36158_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36158_SHARP_);
});
})();
var inst_36207 = cljs.core.filterv(inst_36206,inst_36190);
var inst_36190__$1 = inst_36207;
var state_36222__$1 = (function (){var statearr_36261 = state_36222;
(statearr_36261[(10)] = inst_36190__$1);

return statearr_36261;
})();
var statearr_36263_38058 = state_36222__$1;
(statearr_36263_38058[(2)] = null);

(statearr_36263_38058[(1)] = (2));


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
var statearr_36264 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36264[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36264[(1)] = (1));

return statearr_36264;
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
}catch (e36265){if((e36265 instanceof Object)){
var ex__34210__auto__ = e36265;
var statearr_36266_38062 = state_36222;
(statearr_36266_38062[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36265;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38064 = state_36222;
state_36222 = G__38064;
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
var state__34275__auto__ = (function (){var statearr_36268 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36268[(6)] = c__34273__auto___38036);

return statearr_36268;
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
var G__36280 = arguments.length;
switch (G__36280) {
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
var c__34273__auto___38071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36308){
var state_val_36309 = (state_36308[(1)]);
if((state_val_36309 === (7))){
var inst_36290 = (state_36308[(7)]);
var inst_36290__$1 = (state_36308[(2)]);
var inst_36291 = (inst_36290__$1 == null);
var inst_36292 = cljs.core.not(inst_36291);
var state_36308__$1 = (function (){var statearr_36312 = state_36308;
(statearr_36312[(7)] = inst_36290__$1);

return statearr_36312;
})();
if(inst_36292){
var statearr_36313_38074 = state_36308__$1;
(statearr_36313_38074[(1)] = (8));

} else {
var statearr_36314_38076 = state_36308__$1;
(statearr_36314_38076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (1))){
var inst_36284 = (0);
var state_36308__$1 = (function (){var statearr_36315 = state_36308;
(statearr_36315[(8)] = inst_36284);

return statearr_36315;
})();
var statearr_36316_38077 = state_36308__$1;
(statearr_36316_38077[(2)] = null);

(statearr_36316_38077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (4))){
var state_36308__$1 = state_36308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36308__$1,(7),ch);
} else {
if((state_val_36309 === (6))){
var inst_36303 = (state_36308[(2)]);
var state_36308__$1 = state_36308;
var statearr_36319_38078 = state_36308__$1;
(statearr_36319_38078[(2)] = inst_36303);

(statearr_36319_38078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (3))){
var inst_36305 = (state_36308[(2)]);
var inst_36306 = cljs.core.async.close_BANG_(out);
var state_36308__$1 = (function (){var statearr_36320 = state_36308;
(statearr_36320[(9)] = inst_36305);

return statearr_36320;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36308__$1,inst_36306);
} else {
if((state_val_36309 === (2))){
var inst_36284 = (state_36308[(8)]);
var inst_36286 = (inst_36284 < n);
var state_36308__$1 = state_36308;
if(cljs.core.truth_(inst_36286)){
var statearr_36326_38082 = state_36308__$1;
(statearr_36326_38082[(1)] = (4));

} else {
var statearr_36329_38083 = state_36308__$1;
(statearr_36329_38083[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (11))){
var inst_36284 = (state_36308[(8)]);
var inst_36295 = (state_36308[(2)]);
var inst_36296 = (inst_36284 + (1));
var inst_36284__$1 = inst_36296;
var state_36308__$1 = (function (){var statearr_36330 = state_36308;
(statearr_36330[(10)] = inst_36295);

(statearr_36330[(8)] = inst_36284__$1);

return statearr_36330;
})();
var statearr_36331_38084 = state_36308__$1;
(statearr_36331_38084[(2)] = null);

(statearr_36331_38084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (9))){
var state_36308__$1 = state_36308;
var statearr_36333_38086 = state_36308__$1;
(statearr_36333_38086[(2)] = null);

(statearr_36333_38086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (5))){
var state_36308__$1 = state_36308;
var statearr_36335_38089 = state_36308__$1;
(statearr_36335_38089[(2)] = null);

(statearr_36335_38089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (10))){
var inst_36300 = (state_36308[(2)]);
var state_36308__$1 = state_36308;
var statearr_36337_38090 = state_36308__$1;
(statearr_36337_38090[(2)] = inst_36300);

(statearr_36337_38090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (8))){
var inst_36290 = (state_36308[(7)]);
var state_36308__$1 = state_36308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36308__$1,(11),out,inst_36290);
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
var statearr_36340 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36340[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36340[(1)] = (1));

return statearr_36340;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36308){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36308);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36341){if((e36341 instanceof Object)){
var ex__34210__auto__ = e36341;
var statearr_36342_38094 = state_36308;
(statearr_36342_38094[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36341;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38097 = state_36308;
state_36308 = G__38097;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36344 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36344[(6)] = c__34273__auto___38071);

return statearr_36344;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36348 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36348 = (function (f,ch,meta36349){
this.f = f;
this.ch = ch;
this.meta36349 = meta36349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36350,meta36349__$1){
var self__ = this;
var _36350__$1 = this;
return (new cljs.core.async.t_cljs$core$async36348(self__.f,self__.ch,meta36349__$1));
}));

(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36350){
var self__ = this;
var _36350__$1 = this;
return self__.meta36349;
}));

(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36356 = (function (f,ch,meta36349,_,fn1,meta36357){
this.f = f;
this.ch = ch;
this.meta36349 = meta36349;
this._ = _;
this.fn1 = fn1;
this.meta36357 = meta36357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36358,meta36357__$1){
var self__ = this;
var _36358__$1 = this;
return (new cljs.core.async.t_cljs$core$async36356(self__.f,self__.ch,self__.meta36349,self__._,self__.fn1,meta36357__$1));
}));

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36358){
var self__ = this;
var _36358__$1 = this;
return self__.meta36357;
}));

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36346_SHARP_){
var G__36370 = (((p1__36346_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36346_SHARP_) : self__.f.call(null,p1__36346_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36370) : f1.call(null,G__36370));
});
}));

(cljs.core.async.t_cljs$core$async36356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36349","meta36349",252366113,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36348","cljs.core.async/t_cljs$core$async36348",-1676584164,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36357","meta36357",948392194,null)], null);
}));

(cljs.core.async.t_cljs$core$async36356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36356");

(cljs.core.async.t_cljs$core$async36356.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36356.
 */
cljs.core.async.__GT_t_cljs$core$async36356 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36356(f__$1,ch__$1,meta36349__$1,___$2,fn1__$1,meta36357){
return (new cljs.core.async.t_cljs$core$async36356(f__$1,ch__$1,meta36349__$1,___$2,fn1__$1,meta36357));
});

}

return (new cljs.core.async.t_cljs$core$async36356(self__.f,self__.ch,self__.meta36349,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36375 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36375) : self__.f.call(null,G__36375));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36349","meta36349",252366113,null)], null);
}));

(cljs.core.async.t_cljs$core$async36348.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36348");

(cljs.core.async.t_cljs$core$async36348.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36348");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36348.
 */
cljs.core.async.__GT_t_cljs$core$async36348 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36348(f__$1,ch__$1,meta36349){
return (new cljs.core.async.t_cljs$core$async36348(f__$1,ch__$1,meta36349));
});

}

return (new cljs.core.async.t_cljs$core$async36348(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36383 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36383 = (function (f,ch,meta36384){
this.f = f;
this.ch = ch;
this.meta36384 = meta36384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36385,meta36384__$1){
var self__ = this;
var _36385__$1 = this;
return (new cljs.core.async.t_cljs$core$async36383(self__.f,self__.ch,meta36384__$1));
}));

(cljs.core.async.t_cljs$core$async36383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36385){
var self__ = this;
var _36385__$1 = this;
return self__.meta36384;
}));

(cljs.core.async.t_cljs$core$async36383.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36383.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36383.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36383.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36383.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36383.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36384","meta36384",-1284984124,null)], null);
}));

(cljs.core.async.t_cljs$core$async36383.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36383.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36383");

(cljs.core.async.t_cljs$core$async36383.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36383");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36383.
 */
cljs.core.async.__GT_t_cljs$core$async36383 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36383(f__$1,ch__$1,meta36384){
return (new cljs.core.async.t_cljs$core$async36383(f__$1,ch__$1,meta36384));
});

}

return (new cljs.core.async.t_cljs$core$async36383(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36410 = (function (p,ch,meta36411){
this.p = p;
this.ch = ch;
this.meta36411 = meta36411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36412,meta36411__$1){
var self__ = this;
var _36412__$1 = this;
return (new cljs.core.async.t_cljs$core$async36410(self__.p,self__.ch,meta36411__$1));
}));

(cljs.core.async.t_cljs$core$async36410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36412){
var self__ = this;
var _36412__$1 = this;
return self__.meta36411;
}));

(cljs.core.async.t_cljs$core$async36410.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36410.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36410.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36410.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36410.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36410.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36410.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36411","meta36411",887568906,null)], null);
}));

(cljs.core.async.t_cljs$core$async36410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36410");

(cljs.core.async.t_cljs$core$async36410.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36410.
 */
cljs.core.async.__GT_t_cljs$core$async36410 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36410(p__$1,ch__$1,meta36411){
return (new cljs.core.async.t_cljs$core$async36410(p__$1,ch__$1,meta36411));
});

}

return (new cljs.core.async.t_cljs$core$async36410(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36429 = arguments.length;
switch (G__36429) {
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
var c__34273__auto___38130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36458){
var state_val_36459 = (state_36458[(1)]);
if((state_val_36459 === (7))){
var inst_36454 = (state_36458[(2)]);
var state_36458__$1 = state_36458;
var statearr_36461_38135 = state_36458__$1;
(statearr_36461_38135[(2)] = inst_36454);

(statearr_36461_38135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (1))){
var state_36458__$1 = state_36458;
var statearr_36463_38139 = state_36458__$1;
(statearr_36463_38139[(2)] = null);

(statearr_36463_38139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (4))){
var inst_36434 = (state_36458[(7)]);
var inst_36434__$1 = (state_36458[(2)]);
var inst_36435 = (inst_36434__$1 == null);
var state_36458__$1 = (function (){var statearr_36464 = state_36458;
(statearr_36464[(7)] = inst_36434__$1);

return statearr_36464;
})();
if(cljs.core.truth_(inst_36435)){
var statearr_36466_38140 = state_36458__$1;
(statearr_36466_38140[(1)] = (5));

} else {
var statearr_36467_38141 = state_36458__$1;
(statearr_36467_38141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (6))){
var inst_36434 = (state_36458[(7)]);
var inst_36439 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36434) : p.call(null,inst_36434));
var state_36458__$1 = state_36458;
if(cljs.core.truth_(inst_36439)){
var statearr_36468_38143 = state_36458__$1;
(statearr_36468_38143[(1)] = (8));

} else {
var statearr_36469_38144 = state_36458__$1;
(statearr_36469_38144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (3))){
var inst_36456 = (state_36458[(2)]);
var state_36458__$1 = state_36458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36458__$1,inst_36456);
} else {
if((state_val_36459 === (2))){
var state_36458__$1 = state_36458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36458__$1,(4),ch);
} else {
if((state_val_36459 === (11))){
var inst_36446 = (state_36458[(2)]);
var state_36458__$1 = state_36458;
var statearr_36471_38145 = state_36458__$1;
(statearr_36471_38145[(2)] = inst_36446);

(statearr_36471_38145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (9))){
var state_36458__$1 = state_36458;
var statearr_36473_38148 = state_36458__$1;
(statearr_36473_38148[(2)] = null);

(statearr_36473_38148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (5))){
var inst_36437 = cljs.core.async.close_BANG_(out);
var state_36458__$1 = state_36458;
var statearr_36477_38149 = state_36458__$1;
(statearr_36477_38149[(2)] = inst_36437);

(statearr_36477_38149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (10))){
var inst_36449 = (state_36458[(2)]);
var state_36458__$1 = (function (){var statearr_36478 = state_36458;
(statearr_36478[(8)] = inst_36449);

return statearr_36478;
})();
var statearr_36479_38150 = state_36458__$1;
(statearr_36479_38150[(2)] = null);

(statearr_36479_38150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36459 === (8))){
var inst_36434 = (state_36458[(7)]);
var state_36458__$1 = state_36458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36458__$1,(11),out,inst_36434);
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
var statearr_36481 = [null,null,null,null,null,null,null,null,null];
(statearr_36481[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36481[(1)] = (1));

return statearr_36481;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36458){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36458);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36482){if((e36482 instanceof Object)){
var ex__34210__auto__ = e36482;
var statearr_36483_38154 = state_36458;
(statearr_36483_38154[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38156 = state_36458;
state_36458 = G__38156;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36485 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36485[(6)] = c__34273__auto___38130);

return statearr_36485;
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
var G__36488 = arguments.length;
switch (G__36488) {
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
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36555){
var state_val_36556 = (state_36555[(1)]);
if((state_val_36556 === (7))){
var inst_36551 = (state_36555[(2)]);
var state_36555__$1 = state_36555;
var statearr_36558_38159 = state_36555__$1;
(statearr_36558_38159[(2)] = inst_36551);

(statearr_36558_38159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (20))){
var inst_36520 = (state_36555[(7)]);
var inst_36531 = (state_36555[(2)]);
var inst_36532 = cljs.core.next(inst_36520);
var inst_36505 = inst_36532;
var inst_36506 = null;
var inst_36507 = (0);
var inst_36508 = (0);
var state_36555__$1 = (function (){var statearr_36559 = state_36555;
(statearr_36559[(8)] = inst_36507);

(statearr_36559[(9)] = inst_36505);

(statearr_36559[(10)] = inst_36508);

(statearr_36559[(11)] = inst_36531);

(statearr_36559[(12)] = inst_36506);

return statearr_36559;
})();
var statearr_36560_38161 = state_36555__$1;
(statearr_36560_38161[(2)] = null);

(statearr_36560_38161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (1))){
var state_36555__$1 = state_36555;
var statearr_36561_38164 = state_36555__$1;
(statearr_36561_38164[(2)] = null);

(statearr_36561_38164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (4))){
var inst_36494 = (state_36555[(13)]);
var inst_36494__$1 = (state_36555[(2)]);
var inst_36495 = (inst_36494__$1 == null);
var state_36555__$1 = (function (){var statearr_36562 = state_36555;
(statearr_36562[(13)] = inst_36494__$1);

return statearr_36562;
})();
if(cljs.core.truth_(inst_36495)){
var statearr_36564_38165 = state_36555__$1;
(statearr_36564_38165[(1)] = (5));

} else {
var statearr_36565_38166 = state_36555__$1;
(statearr_36565_38166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (15))){
var state_36555__$1 = state_36555;
var statearr_36569_38167 = state_36555__$1;
(statearr_36569_38167[(2)] = null);

(statearr_36569_38167[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (21))){
var state_36555__$1 = state_36555;
var statearr_36570_38170 = state_36555__$1;
(statearr_36570_38170[(2)] = null);

(statearr_36570_38170[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (13))){
var inst_36507 = (state_36555[(8)]);
var inst_36505 = (state_36555[(9)]);
var inst_36508 = (state_36555[(10)]);
var inst_36506 = (state_36555[(12)]);
var inst_36516 = (state_36555[(2)]);
var inst_36517 = (inst_36508 + (1));
var tmp36566 = inst_36507;
var tmp36567 = inst_36505;
var tmp36568 = inst_36506;
var inst_36505__$1 = tmp36567;
var inst_36506__$1 = tmp36568;
var inst_36507__$1 = tmp36566;
var inst_36508__$1 = inst_36517;
var state_36555__$1 = (function (){var statearr_36572 = state_36555;
(statearr_36572[(14)] = inst_36516);

(statearr_36572[(8)] = inst_36507__$1);

(statearr_36572[(9)] = inst_36505__$1);

(statearr_36572[(10)] = inst_36508__$1);

(statearr_36572[(12)] = inst_36506__$1);

return statearr_36572;
})();
var statearr_36574_38172 = state_36555__$1;
(statearr_36574_38172[(2)] = null);

(statearr_36574_38172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (22))){
var state_36555__$1 = state_36555;
var statearr_36575_38173 = state_36555__$1;
(statearr_36575_38173[(2)] = null);

(statearr_36575_38173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (6))){
var inst_36494 = (state_36555[(13)]);
var inst_36503 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36494) : f.call(null,inst_36494));
var inst_36504 = cljs.core.seq(inst_36503);
var inst_36505 = inst_36504;
var inst_36506 = null;
var inst_36507 = (0);
var inst_36508 = (0);
var state_36555__$1 = (function (){var statearr_36577 = state_36555;
(statearr_36577[(8)] = inst_36507);

(statearr_36577[(9)] = inst_36505);

(statearr_36577[(10)] = inst_36508);

(statearr_36577[(12)] = inst_36506);

return statearr_36577;
})();
var statearr_36578_38174 = state_36555__$1;
(statearr_36578_38174[(2)] = null);

(statearr_36578_38174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (17))){
var inst_36520 = (state_36555[(7)]);
var inst_36524 = cljs.core.chunk_first(inst_36520);
var inst_36525 = cljs.core.chunk_rest(inst_36520);
var inst_36526 = cljs.core.count(inst_36524);
var inst_36505 = inst_36525;
var inst_36506 = inst_36524;
var inst_36507 = inst_36526;
var inst_36508 = (0);
var state_36555__$1 = (function (){var statearr_36580 = state_36555;
(statearr_36580[(8)] = inst_36507);

(statearr_36580[(9)] = inst_36505);

(statearr_36580[(10)] = inst_36508);

(statearr_36580[(12)] = inst_36506);

return statearr_36580;
})();
var statearr_36581_38176 = state_36555__$1;
(statearr_36581_38176[(2)] = null);

(statearr_36581_38176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (3))){
var inst_36553 = (state_36555[(2)]);
var state_36555__$1 = state_36555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36555__$1,inst_36553);
} else {
if((state_val_36556 === (12))){
var inst_36540 = (state_36555[(2)]);
var state_36555__$1 = state_36555;
var statearr_36583_38177 = state_36555__$1;
(statearr_36583_38177[(2)] = inst_36540);

(statearr_36583_38177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (2))){
var state_36555__$1 = state_36555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36555__$1,(4),in$);
} else {
if((state_val_36556 === (23))){
var inst_36549 = (state_36555[(2)]);
var state_36555__$1 = state_36555;
var statearr_36584_38179 = state_36555__$1;
(statearr_36584_38179[(2)] = inst_36549);

(statearr_36584_38179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (19))){
var inst_36535 = (state_36555[(2)]);
var state_36555__$1 = state_36555;
var statearr_36586_38180 = state_36555__$1;
(statearr_36586_38180[(2)] = inst_36535);

(statearr_36586_38180[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (11))){
var inst_36505 = (state_36555[(9)]);
var inst_36520 = (state_36555[(7)]);
var inst_36520__$1 = cljs.core.seq(inst_36505);
var state_36555__$1 = (function (){var statearr_36587 = state_36555;
(statearr_36587[(7)] = inst_36520__$1);

return statearr_36587;
})();
if(inst_36520__$1){
var statearr_36588_38182 = state_36555__$1;
(statearr_36588_38182[(1)] = (14));

} else {
var statearr_36590_38183 = state_36555__$1;
(statearr_36590_38183[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (9))){
var inst_36542 = (state_36555[(2)]);
var inst_36543 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36555__$1 = (function (){var statearr_36591 = state_36555;
(statearr_36591[(15)] = inst_36542);

return statearr_36591;
})();
if(cljs.core.truth_(inst_36543)){
var statearr_36592_38184 = state_36555__$1;
(statearr_36592_38184[(1)] = (21));

} else {
var statearr_36593_38185 = state_36555__$1;
(statearr_36593_38185[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (5))){
var inst_36497 = cljs.core.async.close_BANG_(out);
var state_36555__$1 = state_36555;
var statearr_36595_38186 = state_36555__$1;
(statearr_36595_38186[(2)] = inst_36497);

(statearr_36595_38186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (14))){
var inst_36520 = (state_36555[(7)]);
var inst_36522 = cljs.core.chunked_seq_QMARK_(inst_36520);
var state_36555__$1 = state_36555;
if(inst_36522){
var statearr_36596_38188 = state_36555__$1;
(statearr_36596_38188[(1)] = (17));

} else {
var statearr_36598_38189 = state_36555__$1;
(statearr_36598_38189[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (16))){
var inst_36538 = (state_36555[(2)]);
var state_36555__$1 = state_36555;
var statearr_36599_38190 = state_36555__$1;
(statearr_36599_38190[(2)] = inst_36538);

(statearr_36599_38190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36556 === (10))){
var inst_36508 = (state_36555[(10)]);
var inst_36506 = (state_36555[(12)]);
var inst_36514 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36506,inst_36508);
var state_36555__$1 = state_36555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36555__$1,(13),out,inst_36514);
} else {
if((state_val_36556 === (18))){
var inst_36520 = (state_36555[(7)]);
var inst_36529 = cljs.core.first(inst_36520);
var state_36555__$1 = state_36555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36555__$1,(20),out,inst_36529);
} else {
if((state_val_36556 === (8))){
var inst_36507 = (state_36555[(8)]);
var inst_36508 = (state_36555[(10)]);
var inst_36510 = (inst_36508 < inst_36507);
var inst_36511 = inst_36510;
var state_36555__$1 = state_36555;
if(cljs.core.truth_(inst_36511)){
var statearr_36601_38192 = state_36555__$1;
(statearr_36601_38192[(1)] = (10));

} else {
var statearr_36602_38193 = state_36555__$1;
(statearr_36602_38193[(1)] = (11));

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
var statearr_36604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36604[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36604[(1)] = (1));

return statearr_36604;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36555){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36555);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36605){if((e36605 instanceof Object)){
var ex__34210__auto__ = e36605;
var statearr_36606_38195 = state_36555;
(statearr_36606_38195[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36605;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38196 = state_36555;
state_36555 = G__38196;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36555){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36608 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36608[(6)] = c__34273__auto__);

return statearr_36608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36611 = arguments.length;
switch (G__36611) {
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
var G__36615 = arguments.length;
switch (G__36615) {
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
var G__36620 = arguments.length;
switch (G__36620) {
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
var c__34273__auto___38204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36646){
var state_val_36647 = (state_36646[(1)]);
if((state_val_36647 === (7))){
var inst_36641 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
var statearr_36649_38205 = state_36646__$1;
(statearr_36649_38205[(2)] = inst_36641);

(statearr_36649_38205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (1))){
var inst_36622 = null;
var state_36646__$1 = (function (){var statearr_36650 = state_36646;
(statearr_36650[(7)] = inst_36622);

return statearr_36650;
})();
var statearr_36651_38207 = state_36646__$1;
(statearr_36651_38207[(2)] = null);

(statearr_36651_38207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (4))){
var inst_36625 = (state_36646[(8)]);
var inst_36625__$1 = (state_36646[(2)]);
var inst_36627 = (inst_36625__$1 == null);
var inst_36628 = cljs.core.not(inst_36627);
var state_36646__$1 = (function (){var statearr_36653 = state_36646;
(statearr_36653[(8)] = inst_36625__$1);

return statearr_36653;
})();
if(inst_36628){
var statearr_36654_38208 = state_36646__$1;
(statearr_36654_38208[(1)] = (5));

} else {
var statearr_36655_38210 = state_36646__$1;
(statearr_36655_38210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (6))){
var state_36646__$1 = state_36646;
var statearr_36657_38211 = state_36646__$1;
(statearr_36657_38211[(2)] = null);

(statearr_36657_38211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (3))){
var inst_36643 = (state_36646[(2)]);
var inst_36644 = cljs.core.async.close_BANG_(out);
var state_36646__$1 = (function (){var statearr_36658 = state_36646;
(statearr_36658[(9)] = inst_36643);

return statearr_36658;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36646__$1,inst_36644);
} else {
if((state_val_36647 === (2))){
var state_36646__$1 = state_36646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36646__$1,(4),ch);
} else {
if((state_val_36647 === (11))){
var inst_36625 = (state_36646[(8)]);
var inst_36635 = (state_36646[(2)]);
var inst_36622 = inst_36625;
var state_36646__$1 = (function (){var statearr_36660 = state_36646;
(statearr_36660[(7)] = inst_36622);

(statearr_36660[(10)] = inst_36635);

return statearr_36660;
})();
var statearr_36661_38213 = state_36646__$1;
(statearr_36661_38213[(2)] = null);

(statearr_36661_38213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (9))){
var inst_36625 = (state_36646[(8)]);
var state_36646__$1 = state_36646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36646__$1,(11),out,inst_36625);
} else {
if((state_val_36647 === (5))){
var inst_36622 = (state_36646[(7)]);
var inst_36625 = (state_36646[(8)]);
var inst_36630 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36625,inst_36622);
var state_36646__$1 = state_36646;
if(inst_36630){
var statearr_36664_38215 = state_36646__$1;
(statearr_36664_38215[(1)] = (8));

} else {
var statearr_36665_38216 = state_36646__$1;
(statearr_36665_38216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (10))){
var inst_36638 = (state_36646[(2)]);
var state_36646__$1 = state_36646;
var statearr_36667_38217 = state_36646__$1;
(statearr_36667_38217[(2)] = inst_36638);

(statearr_36667_38217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36647 === (8))){
var inst_36622 = (state_36646[(7)]);
var tmp36663 = inst_36622;
var inst_36622__$1 = tmp36663;
var state_36646__$1 = (function (){var statearr_36668 = state_36646;
(statearr_36668[(7)] = inst_36622__$1);

return statearr_36668;
})();
var statearr_36669_38219 = state_36646__$1;
(statearr_36669_38219[(2)] = null);

(statearr_36669_38219[(1)] = (2));


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
var statearr_36671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36671[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36671[(1)] = (1));

return statearr_36671;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36646){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36646);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36672){if((e36672 instanceof Object)){
var ex__34210__auto__ = e36672;
var statearr_36673_38221 = state_36646;
(statearr_36673_38221[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38222 = state_36646;
state_36646 = G__38222;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36675 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36675[(6)] = c__34273__auto___38204);

return statearr_36675;
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
var G__36678 = arguments.length;
switch (G__36678) {
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
var c__34273__auto___38226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36719){
var state_val_36720 = (state_36719[(1)]);
if((state_val_36720 === (7))){
var inst_36715 = (state_36719[(2)]);
var state_36719__$1 = state_36719;
var statearr_36722_38227 = state_36719__$1;
(statearr_36722_38227[(2)] = inst_36715);

(statearr_36722_38227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (1))){
var inst_36681 = (new Array(n));
var inst_36682 = inst_36681;
var inst_36683 = (0);
var state_36719__$1 = (function (){var statearr_36724 = state_36719;
(statearr_36724[(7)] = inst_36683);

(statearr_36724[(8)] = inst_36682);

return statearr_36724;
})();
var statearr_36725_38229 = state_36719__$1;
(statearr_36725_38229[(2)] = null);

(statearr_36725_38229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (4))){
var inst_36686 = (state_36719[(9)]);
var inst_36686__$1 = (state_36719[(2)]);
var inst_36687 = (inst_36686__$1 == null);
var inst_36688 = cljs.core.not(inst_36687);
var state_36719__$1 = (function (){var statearr_36726 = state_36719;
(statearr_36726[(9)] = inst_36686__$1);

return statearr_36726;
})();
if(inst_36688){
var statearr_36728_38230 = state_36719__$1;
(statearr_36728_38230[(1)] = (5));

} else {
var statearr_36729_38232 = state_36719__$1;
(statearr_36729_38232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (15))){
var inst_36709 = (state_36719[(2)]);
var state_36719__$1 = state_36719;
var statearr_36730_38233 = state_36719__$1;
(statearr_36730_38233[(2)] = inst_36709);

(statearr_36730_38233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (13))){
var state_36719__$1 = state_36719;
var statearr_36731_38234 = state_36719__$1;
(statearr_36731_38234[(2)] = null);

(statearr_36731_38234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (6))){
var inst_36683 = (state_36719[(7)]);
var inst_36705 = (inst_36683 > (0));
var state_36719__$1 = state_36719;
if(cljs.core.truth_(inst_36705)){
var statearr_36733_38236 = state_36719__$1;
(statearr_36733_38236[(1)] = (12));

} else {
var statearr_36734_38237 = state_36719__$1;
(statearr_36734_38237[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (3))){
var inst_36717 = (state_36719[(2)]);
var state_36719__$1 = state_36719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36719__$1,inst_36717);
} else {
if((state_val_36720 === (12))){
var inst_36682 = (state_36719[(8)]);
var inst_36707 = cljs.core.vec(inst_36682);
var state_36719__$1 = state_36719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36719__$1,(15),out,inst_36707);
} else {
if((state_val_36720 === (2))){
var state_36719__$1 = state_36719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36719__$1,(4),ch);
} else {
if((state_val_36720 === (11))){
var inst_36699 = (state_36719[(2)]);
var inst_36700 = (new Array(n));
var inst_36682 = inst_36700;
var inst_36683 = (0);
var state_36719__$1 = (function (){var statearr_36736 = state_36719;
(statearr_36736[(10)] = inst_36699);

(statearr_36736[(7)] = inst_36683);

(statearr_36736[(8)] = inst_36682);

return statearr_36736;
})();
var statearr_36738_38239 = state_36719__$1;
(statearr_36738_38239[(2)] = null);

(statearr_36738_38239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (9))){
var inst_36682 = (state_36719[(8)]);
var inst_36697 = cljs.core.vec(inst_36682);
var state_36719__$1 = state_36719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36719__$1,(11),out,inst_36697);
} else {
if((state_val_36720 === (5))){
var inst_36686 = (state_36719[(9)]);
var inst_36683 = (state_36719[(7)]);
var inst_36682 = (state_36719[(8)]);
var inst_36692 = (state_36719[(11)]);
var inst_36690 = (inst_36682[inst_36683] = inst_36686);
var inst_36692__$1 = (inst_36683 + (1));
var inst_36693 = (inst_36692__$1 < n);
var state_36719__$1 = (function (){var statearr_36740 = state_36719;
(statearr_36740[(11)] = inst_36692__$1);

(statearr_36740[(12)] = inst_36690);

return statearr_36740;
})();
if(cljs.core.truth_(inst_36693)){
var statearr_36741_38240 = state_36719__$1;
(statearr_36741_38240[(1)] = (8));

} else {
var statearr_36742_38241 = state_36719__$1;
(statearr_36742_38241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (14))){
var inst_36712 = (state_36719[(2)]);
var inst_36713 = cljs.core.async.close_BANG_(out);
var state_36719__$1 = (function (){var statearr_36744 = state_36719;
(statearr_36744[(13)] = inst_36712);

return statearr_36744;
})();
var statearr_36746_38243 = state_36719__$1;
(statearr_36746_38243[(2)] = inst_36713);

(statearr_36746_38243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (10))){
var inst_36703 = (state_36719[(2)]);
var state_36719__$1 = state_36719;
var statearr_36754_38244 = state_36719__$1;
(statearr_36754_38244[(2)] = inst_36703);

(statearr_36754_38244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (8))){
var inst_36682 = (state_36719[(8)]);
var inst_36692 = (state_36719[(11)]);
var tmp36743 = inst_36682;
var inst_36682__$1 = tmp36743;
var inst_36683 = inst_36692;
var state_36719__$1 = (function (){var statearr_36756 = state_36719;
(statearr_36756[(7)] = inst_36683);

(statearr_36756[(8)] = inst_36682__$1);

return statearr_36756;
})();
var statearr_36757_38245 = state_36719__$1;
(statearr_36757_38245[(2)] = null);

(statearr_36757_38245[(1)] = (2));


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
var statearr_36759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36759[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36759[(1)] = (1));

return statearr_36759;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36719){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36719);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36764){if((e36764 instanceof Object)){
var ex__34210__auto__ = e36764;
var statearr_36765_38246 = state_36719;
(statearr_36765_38246[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38247 = state_36719;
state_36719 = G__38247;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36767 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36767[(6)] = c__34273__auto___38226);

return statearr_36767;
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
var G__36770 = arguments.length;
switch (G__36770) {
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
var c__34273__auto___38249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36815){
var state_val_36816 = (state_36815[(1)]);
if((state_val_36816 === (7))){
var inst_36811 = (state_36815[(2)]);
var state_36815__$1 = state_36815;
var statearr_36819_38250 = state_36815__$1;
(statearr_36819_38250[(2)] = inst_36811);

(statearr_36819_38250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (1))){
var inst_36773 = [];
var inst_36774 = inst_36773;
var inst_36775 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36815__$1 = (function (){var statearr_36820 = state_36815;
(statearr_36820[(7)] = inst_36774);

(statearr_36820[(8)] = inst_36775);

return statearr_36820;
})();
var statearr_36821_38252 = state_36815__$1;
(statearr_36821_38252[(2)] = null);

(statearr_36821_38252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (4))){
var inst_36778 = (state_36815[(9)]);
var inst_36778__$1 = (state_36815[(2)]);
var inst_36779 = (inst_36778__$1 == null);
var inst_36780 = cljs.core.not(inst_36779);
var state_36815__$1 = (function (){var statearr_36823 = state_36815;
(statearr_36823[(9)] = inst_36778__$1);

return statearr_36823;
})();
if(inst_36780){
var statearr_36824_38253 = state_36815__$1;
(statearr_36824_38253[(1)] = (5));

} else {
var statearr_36825_38254 = state_36815__$1;
(statearr_36825_38254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (15))){
var inst_36805 = (state_36815[(2)]);
var state_36815__$1 = state_36815;
var statearr_36827_38255 = state_36815__$1;
(statearr_36827_38255[(2)] = inst_36805);

(statearr_36827_38255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (13))){
var state_36815__$1 = state_36815;
var statearr_36828_38256 = state_36815__$1;
(statearr_36828_38256[(2)] = null);

(statearr_36828_38256[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (6))){
var inst_36774 = (state_36815[(7)]);
var inst_36800 = inst_36774.length;
var inst_36801 = (inst_36800 > (0));
var state_36815__$1 = state_36815;
if(cljs.core.truth_(inst_36801)){
var statearr_36830_38258 = state_36815__$1;
(statearr_36830_38258[(1)] = (12));

} else {
var statearr_36831_38259 = state_36815__$1;
(statearr_36831_38259[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (3))){
var inst_36813 = (state_36815[(2)]);
var state_36815__$1 = state_36815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36815__$1,inst_36813);
} else {
if((state_val_36816 === (12))){
var inst_36774 = (state_36815[(7)]);
var inst_36803 = cljs.core.vec(inst_36774);
var state_36815__$1 = state_36815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36815__$1,(15),out,inst_36803);
} else {
if((state_val_36816 === (2))){
var state_36815__$1 = state_36815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36815__$1,(4),ch);
} else {
if((state_val_36816 === (11))){
var inst_36782 = (state_36815[(10)]);
var inst_36778 = (state_36815[(9)]);
var inst_36793 = (state_36815[(2)]);
var inst_36794 = [];
var inst_36795 = inst_36794.push(inst_36778);
var inst_36774 = inst_36794;
var inst_36775 = inst_36782;
var state_36815__$1 = (function (){var statearr_36833 = state_36815;
(statearr_36833[(7)] = inst_36774);

(statearr_36833[(11)] = inst_36795);

(statearr_36833[(8)] = inst_36775);

(statearr_36833[(12)] = inst_36793);

return statearr_36833;
})();
var statearr_36835_38261 = state_36815__$1;
(statearr_36835_38261[(2)] = null);

(statearr_36835_38261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (9))){
var inst_36774 = (state_36815[(7)]);
var inst_36791 = cljs.core.vec(inst_36774);
var state_36815__$1 = state_36815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36815__$1,(11),out,inst_36791);
} else {
if((state_val_36816 === (5))){
var inst_36782 = (state_36815[(10)]);
var inst_36778 = (state_36815[(9)]);
var inst_36775 = (state_36815[(8)]);
var inst_36782__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36778) : f.call(null,inst_36778));
var inst_36783 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36782__$1,inst_36775);
var inst_36784 = cljs.core.keyword_identical_QMARK_(inst_36775,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36785 = ((inst_36783) || (inst_36784));
var state_36815__$1 = (function (){var statearr_36837 = state_36815;
(statearr_36837[(10)] = inst_36782__$1);

return statearr_36837;
})();
if(cljs.core.truth_(inst_36785)){
var statearr_36838_38262 = state_36815__$1;
(statearr_36838_38262[(1)] = (8));

} else {
var statearr_36839_38263 = state_36815__$1;
(statearr_36839_38263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (14))){
var inst_36808 = (state_36815[(2)]);
var inst_36809 = cljs.core.async.close_BANG_(out);
var state_36815__$1 = (function (){var statearr_36842 = state_36815;
(statearr_36842[(13)] = inst_36808);

return statearr_36842;
})();
var statearr_36843_38266 = state_36815__$1;
(statearr_36843_38266[(2)] = inst_36809);

(statearr_36843_38266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (10))){
var inst_36798 = (state_36815[(2)]);
var state_36815__$1 = state_36815;
var statearr_36844_38268 = state_36815__$1;
(statearr_36844_38268[(2)] = inst_36798);

(statearr_36844_38268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36816 === (8))){
var inst_36782 = (state_36815[(10)]);
var inst_36774 = (state_36815[(7)]);
var inst_36778 = (state_36815[(9)]);
var inst_36788 = inst_36774.push(inst_36778);
var tmp36840 = inst_36774;
var inst_36774__$1 = tmp36840;
var inst_36775 = inst_36782;
var state_36815__$1 = (function (){var statearr_36846 = state_36815;
(statearr_36846[(7)] = inst_36774__$1);

(statearr_36846[(14)] = inst_36788);

(statearr_36846[(8)] = inst_36775);

return statearr_36846;
})();
var statearr_36847_38269 = state_36815__$1;
(statearr_36847_38269[(2)] = null);

(statearr_36847_38269[(1)] = (2));


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
var statearr_36849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36849[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36849[(1)] = (1));

return statearr_36849;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36815){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36815);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36850){if((e36850 instanceof Object)){
var ex__34210__auto__ = e36850;
var statearr_36851_38270 = state_36815;
(statearr_36851_38270[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36850;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38271 = state_36815;
state_36815 = G__38271;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36853 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36853[(6)] = c__34273__auto___38249);

return statearr_36853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
