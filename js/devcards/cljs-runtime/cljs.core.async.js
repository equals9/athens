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
var val_36822 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36822) : fn1.call(null,val_36822));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36822) : fn1.call(null,val_36822));
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
var n__4666__auto___36828 = n;
var x_36829 = (0);
while(true){
if((x_36829 < n__4666__auto___36828)){
(a[x_36829] = x_36829);

var G__36830 = (x_36829 + (1));
x_36829 = G__36830;
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
var G__34356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34353_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34356) : fret.call(null,G__34356));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34354_SHARP_){
var G__34357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34354_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34357) : fret.call(null,G__34357));
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
var G__36838 = (i + (1));
i = G__36838;
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
var len__4789__auto___36841 = arguments.length;
var i__4790__auto___36842 = (0);
while(true){
if((i__4790__auto___36842 < len__4789__auto___36841)){
args__4795__auto__.push((arguments[i__4790__auto___36842]));

var G__36843 = (i__4790__auto___36842 + (1));
i__4790__auto___36842 = G__36843;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34363){
var map__34364 = p__34363;
var map__34364__$1 = (((((!((map__34364 == null))))?(((((map__34364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34364):map__34364);
var opts = map__34364__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34358){
var G__34359 = cljs.core.first(seq34358);
var seq34358__$1 = cljs.core.next(seq34358);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34359,seq34358__$1);
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
var c__34274__auto___36848 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34396){
var state_val_34400 = (state_34396[(1)]);
if((state_val_34400 === (7))){
var inst_34392 = (state_34396[(2)]);
var state_34396__$1 = state_34396;
var statearr_34407_36850 = state_34396__$1;
(statearr_34407_36850[(2)] = inst_34392);

(statearr_34407_36850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (1))){
var state_34396__$1 = state_34396;
var statearr_34408_36851 = state_34396__$1;
(statearr_34408_36851[(2)] = null);

(statearr_34408_36851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (4))){
var inst_34375 = (state_34396[(7)]);
var inst_34375__$1 = (state_34396[(2)]);
var inst_34376 = (inst_34375__$1 == null);
var state_34396__$1 = (function (){var statearr_34409 = state_34396;
(statearr_34409[(7)] = inst_34375__$1);

return statearr_34409;
})();
if(cljs.core.truth_(inst_34376)){
var statearr_34410_36853 = state_34396__$1;
(statearr_34410_36853[(1)] = (5));

} else {
var statearr_34411_36854 = state_34396__$1;
(statearr_34411_36854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (13))){
var state_34396__$1 = state_34396;
var statearr_34412_36855 = state_34396__$1;
(statearr_34412_36855[(2)] = null);

(statearr_34412_36855[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (6))){
var inst_34375 = (state_34396[(7)]);
var state_34396__$1 = state_34396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34396__$1,(11),to,inst_34375);
} else {
if((state_val_34400 === (3))){
var inst_34394 = (state_34396[(2)]);
var state_34396__$1 = state_34396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34396__$1,inst_34394);
} else {
if((state_val_34400 === (12))){
var state_34396__$1 = state_34396;
var statearr_34416_36857 = state_34396__$1;
(statearr_34416_36857[(2)] = null);

(statearr_34416_36857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (2))){
var state_34396__$1 = state_34396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34396__$1,(4),from);
} else {
if((state_val_34400 === (11))){
var inst_34385 = (state_34396[(2)]);
var state_34396__$1 = state_34396;
if(cljs.core.truth_(inst_34385)){
var statearr_34417_36858 = state_34396__$1;
(statearr_34417_36858[(1)] = (12));

} else {
var statearr_34418_36859 = state_34396__$1;
(statearr_34418_36859[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (9))){
var state_34396__$1 = state_34396;
var statearr_34419_36861 = state_34396__$1;
(statearr_34419_36861[(2)] = null);

(statearr_34419_36861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (5))){
var state_34396__$1 = state_34396;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34420_36862 = state_34396__$1;
(statearr_34420_36862[(1)] = (8));

} else {
var statearr_34421_36863 = state_34396__$1;
(statearr_34421_36863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (14))){
var inst_34390 = (state_34396[(2)]);
var state_34396__$1 = state_34396;
var statearr_34424_36864 = state_34396__$1;
(statearr_34424_36864[(2)] = inst_34390);

(statearr_34424_36864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (10))){
var inst_34382 = (state_34396[(2)]);
var state_34396__$1 = state_34396;
var statearr_34426_36866 = state_34396__$1;
(statearr_34426_36866[(2)] = inst_34382);

(statearr_34426_36866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34400 === (8))){
var inst_34379 = cljs.core.async.close_BANG_(to);
var state_34396__$1 = state_34396;
var statearr_34427_36867 = state_34396__$1;
(statearr_34427_36867[(2)] = inst_34379);

(statearr_34427_36867[(1)] = (10));


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
var statearr_34430_36869 = state_34396;
(statearr_34430_36869[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34429;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36871 = state_34396;
state_34396 = G__36871;
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
var state__34276__auto__ = (function (){var statearr_34431 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34431[(6)] = c__34274__auto___36848);

return statearr_34431;
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
var c__34274__auto___36874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34446){
var state_val_34447 = (state_34446[(1)]);
if((state_val_34447 === (1))){
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34446__$1,(2),res,v);
} else {
if((state_val_34447 === (2))){
var inst_34440 = (state_34446[(2)]);
var inst_34441 = cljs.core.async.close_BANG_(res);
var state_34446__$1 = (function (){var statearr_34454 = state_34446;
(statearr_34454[(7)] = inst_34440);

return statearr_34454;
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
var statearr_34457_36876 = state_34446;
(statearr_34457_36876[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36878 = state_34446;
state_34446 = G__36878;
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
var state__34276__auto__ = (function (){var statearr_34458 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34458[(6)] = c__34274__auto___36874);

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
var n__4666__auto___36880 = n;
var __36881 = (0);
while(true){
if((__36881 < n__4666__auto___36880)){
var G__34463_36883 = type;
var G__34463_36884__$1 = (((G__34463_36883 instanceof cljs.core.Keyword))?G__34463_36883.fqn:null);
switch (G__34463_36884__$1) {
case "compute":
var c__34274__auto___36886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36881,c__34274__auto___36886,G__34463_36883,G__34463_36884__$1,n__4666__auto___36880,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36881,c__34274__auto___36886,G__34463_36883,G__34463_36884__$1,n__4666__auto___36880,jobs,results,process,async){
return (function (state_34476){
var state_val_34477 = (state_34476[(1)]);
if((state_val_34477 === (1))){
var state_34476__$1 = state_34476;
var statearr_34478_36888 = state_34476__$1;
(statearr_34478_36888[(2)] = null);

(statearr_34478_36888[(1)] = (2));


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
var statearr_34479_36889 = state_34476__$1;
(statearr_34479_36889[(1)] = (5));

} else {
var statearr_34480_36891 = state_34476__$1;
(statearr_34480_36891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (5))){
var state_34476__$1 = state_34476;
var statearr_34481_36892 = state_34476__$1;
(statearr_34481_36892[(2)] = null);

(statearr_34481_36892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (6))){
var state_34476__$1 = state_34476;
var statearr_34482_36893 = state_34476__$1;
(statearr_34482_36893[(2)] = null);

(statearr_34482_36893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (7))){
var inst_34472 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
var statearr_34483_36894 = state_34476__$1;
(statearr_34483_36894[(2)] = inst_34472);

(statearr_34483_36894[(1)] = (3));


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
});})(__36881,c__34274__auto___36886,G__34463_36883,G__34463_36884__$1,n__4666__auto___36880,jobs,results,process,async))
;
return ((function (__36881,switch__34206__auto__,c__34274__auto___36886,G__34463_36883,G__34463_36884__$1,n__4666__auto___36880,jobs,results,process,async){
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
var statearr_34486_36897 = state_34476;
(statearr_34486_36897[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36898 = state_34476;
state_34476 = G__36898;
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
;})(__36881,switch__34206__auto__,c__34274__auto___36886,G__34463_36883,G__34463_36884__$1,n__4666__auto___36880,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34487 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34487[(6)] = c__34274__auto___36886);

return statearr_34487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36881,c__34274__auto___36886,G__34463_36883,G__34463_36884__$1,n__4666__auto___36880,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36881,c__34274__auto___36900,G__34463_36883,G__34463_36884__$1,n__4666__auto___36880,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36881,c__34274__auto___36900,G__34463_36883,G__34463_36884__$1,n__4666__auto___36880,jobs,results,process,async){
return (function (state_34500){
var state_val_34501 = (state_34500[(1)]);
if((state_val_34501 === (1))){
var state_34500__$1 = state_34500;
var statearr_34502_36902 = state_34500__$1;
(statearr_34502_36902[(2)] = null);

(statearr_34502_36902[(1)] = (2));


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
var statearr_34503_36903 = state_34500__$1;
(statearr_34503_36903[(1)] = (5));

} else {
var statearr_34504_36905 = state_34500__$1;
(statearr_34504_36905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (5))){
var state_34500__$1 = state_34500;
var statearr_34505_36906 = state_34500__$1;
(statearr_34505_36906[(2)] = null);

(statearr_34505_36906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (6))){
var state_34500__$1 = state_34500;
var statearr_34506_36907 = state_34500__$1;
(statearr_34506_36907[(2)] = null);

(statearr_34506_36907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34501 === (7))){
var inst_34496 = (state_34500[(2)]);
var state_34500__$1 = state_34500;
var statearr_34507_36909 = state_34500__$1;
(statearr_34507_36909[(2)] = inst_34496);

(statearr_34507_36909[(1)] = (3));


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
});})(__36881,c__34274__auto___36900,G__34463_36883,G__34463_36884__$1,n__4666__auto___36880,jobs,results,process,async))
;
return ((function (__36881,switch__34206__auto__,c__34274__auto___36900,G__34463_36883,G__34463_36884__$1,n__4666__auto___36880,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34508 = [null,null,null,null,null,null,null];
(statearr_34508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34508[(1)] = (1));

return statearr_34508;
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
}catch (e34509){if((e34509 instanceof Object)){
var ex__34210__auto__ = e34509;
var statearr_34510_36911 = state_34500;
(statearr_34510_36911[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34509;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36912 = state_34500;
state_34500 = G__36912;
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
;})(__36881,switch__34206__auto__,c__34274__auto___36900,G__34463_36883,G__34463_36884__$1,n__4666__auto___36880,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34511 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34511[(6)] = c__34274__auto___36900);

return statearr_34511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36881,c__34274__auto___36900,G__34463_36883,G__34463_36884__$1,n__4666__auto___36880,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34463_36884__$1)].join('')));

}

var G__36914 = (__36881 + (1));
__36881 = G__36914;
continue;
} else {
}
break;
}

var c__34274__auto___36915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34533){
var state_val_34534 = (state_34533[(1)]);
if((state_val_34534 === (7))){
var inst_34529 = (state_34533[(2)]);
var state_34533__$1 = state_34533;
var statearr_34535_36917 = state_34533__$1;
(statearr_34535_36917[(2)] = inst_34529);

(statearr_34535_36917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (1))){
var state_34533__$1 = state_34533;
var statearr_34540_36918 = state_34533__$1;
(statearr_34540_36918[(2)] = null);

(statearr_34540_36918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (4))){
var inst_34514 = (state_34533[(7)]);
var inst_34514__$1 = (state_34533[(2)]);
var inst_34515 = (inst_34514__$1 == null);
var state_34533__$1 = (function (){var statearr_34541 = state_34533;
(statearr_34541[(7)] = inst_34514__$1);

return statearr_34541;
})();
if(cljs.core.truth_(inst_34515)){
var statearr_34542_36920 = state_34533__$1;
(statearr_34542_36920[(1)] = (5));

} else {
var statearr_34543_36921 = state_34533__$1;
(statearr_34543_36921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (6))){
var inst_34514 = (state_34533[(7)]);
var inst_34519 = (state_34533[(8)]);
var inst_34519__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34520 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34521 = [inst_34514,inst_34519__$1];
var inst_34522 = (new cljs.core.PersistentVector(null,2,(5),inst_34520,inst_34521,null));
var state_34533__$1 = (function (){var statearr_34544 = state_34533;
(statearr_34544[(8)] = inst_34519__$1);

return statearr_34544;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34533__$1,(8),jobs,inst_34522);
} else {
if((state_val_34534 === (3))){
var inst_34531 = (state_34533[(2)]);
var state_34533__$1 = state_34533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34533__$1,inst_34531);
} else {
if((state_val_34534 === (2))){
var state_34533__$1 = state_34533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34533__$1,(4),from);
} else {
if((state_val_34534 === (9))){
var inst_34526 = (state_34533[(2)]);
var state_34533__$1 = (function (){var statearr_34546 = state_34533;
(statearr_34546[(9)] = inst_34526);

return statearr_34546;
})();
var statearr_34547_36923 = state_34533__$1;
(statearr_34547_36923[(2)] = null);

(statearr_34547_36923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (5))){
var inst_34517 = cljs.core.async.close_BANG_(jobs);
var state_34533__$1 = state_34533;
var statearr_34548_36925 = state_34533__$1;
(statearr_34548_36925[(2)] = inst_34517);

(statearr_34548_36925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (8))){
var inst_34519 = (state_34533[(8)]);
var inst_34524 = (state_34533[(2)]);
var state_34533__$1 = (function (){var statearr_34549 = state_34533;
(statearr_34549[(10)] = inst_34524);

return statearr_34549;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34533__$1,(9),results,inst_34519);
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
var statearr_34550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34550[(1)] = (1));

return statearr_34550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34533){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34533);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34551){if((e34551 instanceof Object)){
var ex__34210__auto__ = e34551;
var statearr_34552_36927 = state_34533;
(statearr_34552_36927[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34551;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36929 = state_34533;
state_34533 = G__36929;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34533){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34554 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34554[(6)] = c__34274__auto___36915);

return statearr_34554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34593){
var state_val_34594 = (state_34593[(1)]);
if((state_val_34594 === (7))){
var inst_34589 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34596_36931 = state_34593__$1;
(statearr_34596_36931[(2)] = inst_34589);

(statearr_34596_36931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (20))){
var state_34593__$1 = state_34593;
var statearr_34597_36932 = state_34593__$1;
(statearr_34597_36932[(2)] = null);

(statearr_34597_36932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (1))){
var state_34593__$1 = state_34593;
var statearr_34598_36934 = state_34593__$1;
(statearr_34598_36934[(2)] = null);

(statearr_34598_36934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (4))){
var inst_34557 = (state_34593[(7)]);
var inst_34557__$1 = (state_34593[(2)]);
var inst_34558 = (inst_34557__$1 == null);
var state_34593__$1 = (function (){var statearr_34599 = state_34593;
(statearr_34599[(7)] = inst_34557__$1);

return statearr_34599;
})();
if(cljs.core.truth_(inst_34558)){
var statearr_34600_36935 = state_34593__$1;
(statearr_34600_36935[(1)] = (5));

} else {
var statearr_34602_36936 = state_34593__$1;
(statearr_34602_36936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (15))){
var inst_34571 = (state_34593[(8)]);
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34593__$1,(18),to,inst_34571);
} else {
if((state_val_34594 === (21))){
var inst_34584 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34607_36938 = state_34593__$1;
(statearr_34607_36938[(2)] = inst_34584);

(statearr_34607_36938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (13))){
var inst_34586 = (state_34593[(2)]);
var state_34593__$1 = (function (){var statearr_34610 = state_34593;
(statearr_34610[(9)] = inst_34586);

return statearr_34610;
})();
var statearr_34611_36940 = state_34593__$1;
(statearr_34611_36940[(2)] = null);

(statearr_34611_36940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (6))){
var inst_34557 = (state_34593[(7)]);
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34593__$1,(11),inst_34557);
} else {
if((state_val_34594 === (17))){
var inst_34579 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
if(cljs.core.truth_(inst_34579)){
var statearr_34612_36941 = state_34593__$1;
(statearr_34612_36941[(1)] = (19));

} else {
var statearr_34613_36943 = state_34593__$1;
(statearr_34613_36943[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (3))){
var inst_34591 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34593__$1,inst_34591);
} else {
if((state_val_34594 === (12))){
var inst_34568 = (state_34593[(10)]);
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34593__$1,(14),inst_34568);
} else {
if((state_val_34594 === (2))){
var state_34593__$1 = state_34593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34593__$1,(4),results);
} else {
if((state_val_34594 === (19))){
var state_34593__$1 = state_34593;
var statearr_34614_36945 = state_34593__$1;
(statearr_34614_36945[(2)] = null);

(statearr_34614_36945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (11))){
var inst_34568 = (state_34593[(2)]);
var state_34593__$1 = (function (){var statearr_34615 = state_34593;
(statearr_34615[(10)] = inst_34568);

return statearr_34615;
})();
var statearr_34616_36946 = state_34593__$1;
(statearr_34616_36946[(2)] = null);

(statearr_34616_36946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (9))){
var state_34593__$1 = state_34593;
var statearr_34617_36947 = state_34593__$1;
(statearr_34617_36947[(2)] = null);

(statearr_34617_36947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (5))){
var state_34593__$1 = state_34593;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34619_36949 = state_34593__$1;
(statearr_34619_36949[(1)] = (8));

} else {
var statearr_34620_36950 = state_34593__$1;
(statearr_34620_36950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (14))){
var inst_34571 = (state_34593[(8)]);
var inst_34571__$1 = (state_34593[(2)]);
var inst_34572 = (inst_34571__$1 == null);
var inst_34573 = cljs.core.not(inst_34572);
var state_34593__$1 = (function (){var statearr_34621 = state_34593;
(statearr_34621[(8)] = inst_34571__$1);

return statearr_34621;
})();
if(inst_34573){
var statearr_34622_36952 = state_34593__$1;
(statearr_34622_36952[(1)] = (15));

} else {
var statearr_34623_36953 = state_34593__$1;
(statearr_34623_36953[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (16))){
var state_34593__$1 = state_34593;
var statearr_34624_36954 = state_34593__$1;
(statearr_34624_36954[(2)] = false);

(statearr_34624_36954[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (10))){
var inst_34565 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34625_36955 = state_34593__$1;
(statearr_34625_36955[(2)] = inst_34565);

(statearr_34625_36955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (18))){
var inst_34576 = (state_34593[(2)]);
var state_34593__$1 = state_34593;
var statearr_34627_36957 = state_34593__$1;
(statearr_34627_36957[(2)] = inst_34576);

(statearr_34627_36957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34594 === (8))){
var inst_34562 = cljs.core.async.close_BANG_(to);
var state_34593__$1 = state_34593;
var statearr_34631_36958 = state_34593__$1;
(statearr_34631_36958[(2)] = inst_34562);

(statearr_34631_36958[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34593){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34593);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34636){if((e34636 instanceof Object)){
var ex__34210__auto__ = e34636;
var statearr_34637_36960 = state_34593;
(statearr_34637_36960[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34636;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36962 = state_34593;
state_34593 = G__36962;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34593){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34638 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34638[(6)] = c__34274__auto__);

return statearr_34638;
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
var G__34640 = arguments.length;
switch (G__34640) {
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
var c__34274__auto___36971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_36973 = state_34673__$1;
(statearr_34675_36973[(2)] = inst_34669);

(statearr_34675_36973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_36974 = state_34673__$1;
(statearr_34676_36974[(2)] = null);

(statearr_34676_36974[(1)] = (2));


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
var statearr_34678_36976 = state_34673__$1;
(statearr_34678_36976[(1)] = (5));

} else {
var statearr_34679_36977 = state_34673__$1;
(statearr_34679_36977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_36978 = state_34673__$1;
(statearr_34680_36978[(2)] = null);

(statearr_34680_36978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_36979 = state_34673__$1;
(statearr_34681_36979[(1)] = (9));

} else {
var statearr_34682_36981 = state_34673__$1;
(statearr_34682_36981[(1)] = (10));

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
var statearr_34683_36982 = state_34673__$1;
(statearr_34683_36982[(2)] = null);

(statearr_34683_36982[(1)] = (2));


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
var statearr_34684_36984 = state_34673__$1;
(statearr_34684_36984[(2)] = tc);

(statearr_34684_36984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34685 = state_34673;
(statearr_34685[(8)] = inst_34653);

return statearr_34685;
})();
var statearr_34686_36985 = state_34673__$1;
(statearr_34686_36985[(2)] = inst_34654);

(statearr_34686_36985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34687_36987 = state_34673__$1;
(statearr_34687_36987[(2)] = inst_34667);

(statearr_34687_36987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34688_36988 = state_34673__$1;
(statearr_34688_36988[(2)] = fc);

(statearr_34688_36988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34689_36990 = state_34673__$1;
(statearr_34689_36990[(1)] = (12));

} else {
var statearr_34690_36991 = state_34673__$1;
(statearr_34690_36991[(1)] = (13));

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
var statearr_34693_36993 = state_34673;
(statearr_34693_36993[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36994 = state_34673;
state_34673 = G__36994;
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
var state__34276__auto__ = (function (){var statearr_34694 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34694[(6)] = c__34274__auto___36971);

return statearr_34694;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34715){
var state_val_34716 = (state_34715[(1)]);
if((state_val_34716 === (7))){
var inst_34711 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34717_36997 = state_34715__$1;
(statearr_34717_36997[(2)] = inst_34711);

(statearr_34717_36997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (1))){
var inst_34695 = init;
var state_34715__$1 = (function (){var statearr_34718 = state_34715;
(statearr_34718[(7)] = inst_34695);

return statearr_34718;
})();
var statearr_34719_36998 = state_34715__$1;
(statearr_34719_36998[(2)] = null);

(statearr_34719_36998[(1)] = (2));


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
var statearr_34721_37000 = state_34715__$1;
(statearr_34721_37000[(1)] = (5));

} else {
var statearr_34722_37001 = state_34715__$1;
(statearr_34722_37001[(1)] = (6));

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
var statearr_34724_37003 = state_34715__$1;
(statearr_34724_37003[(1)] = (8));

} else {
var statearr_34725_37004 = state_34715__$1;
(statearr_34725_37004[(1)] = (9));

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
var statearr_34727_37006 = state_34715__$1;
(statearr_34727_37006[(2)] = null);

(statearr_34727_37006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (5))){
var inst_34695 = (state_34715[(7)]);
var state_34715__$1 = state_34715;
var statearr_34728_37007 = state_34715__$1;
(statearr_34728_37007[(2)] = inst_34695);

(statearr_34728_37007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (10))){
var inst_34709 = (state_34715[(2)]);
var state_34715__$1 = state_34715;
var statearr_34729_37009 = state_34715__$1;
(statearr_34729_37009[(2)] = inst_34709);

(statearr_34729_37009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34716 === (8))){
var inst_34702 = (state_34715[(9)]);
var inst_34705 = cljs.core.deref(inst_34702);
var state_34715__$1 = state_34715;
var statearr_34730_37010 = state_34715__$1;
(statearr_34730_37010[(2)] = inst_34705);

(statearr_34730_37010[(1)] = (10));


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
var statearr_34733_37012 = state_34715;
(statearr_34733_37012[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34732;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37013 = state_34715;
state_34715 = G__37013;
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
var state__34276__auto__ = (function (){var statearr_34734 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34734[(6)] = c__34274__auto__);

return statearr_34734;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34740){
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
var statearr_34747_37022 = state_34740;
(statearr_34747_37022[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34746;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37023 = state_34740;
state_34740 = G__37023;
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
var state__34276__auto__ = (function (){var statearr_34751 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34751[(6)] = c__34274__auto__);

return statearr_34751;
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
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34783){
var state_val_34784 = (state_34783[(1)]);
if((state_val_34784 === (7))){
var inst_34765 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
var statearr_34785_37026 = state_34783__$1;
(statearr_34785_37026[(2)] = inst_34765);

(statearr_34785_37026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (1))){
var inst_34757 = cljs.core.seq(coll);
var inst_34758 = inst_34757;
var state_34783__$1 = (function (){var statearr_34786 = state_34783;
(statearr_34786[(7)] = inst_34758);

return statearr_34786;
})();
var statearr_34787_37030 = state_34783__$1;
(statearr_34787_37030[(2)] = null);

(statearr_34787_37030[(1)] = (2));


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
var statearr_34789_37032 = state_34783__$1;
(statearr_34789_37032[(2)] = inst_34777);

(statearr_34789_37032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (6))){
var inst_34768 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
if(cljs.core.truth_(inst_34768)){
var statearr_34791_37033 = state_34783__$1;
(statearr_34791_37033[(1)] = (8));

} else {
var statearr_34792_37034 = state_34783__$1;
(statearr_34792_37034[(1)] = (9));

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
var statearr_34793_37036 = state_34783__$1;
(statearr_34793_37036[(2)] = null);

(statearr_34793_37036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (2))){
var inst_34758 = (state_34783[(7)]);
var state_34783__$1 = state_34783;
if(cljs.core.truth_(inst_34758)){
var statearr_34794_37037 = state_34783__$1;
(statearr_34794_37037[(1)] = (4));

} else {
var statearr_34795_37038 = state_34783__$1;
(statearr_34795_37038[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (11))){
var inst_34774 = cljs.core.async.close_BANG_(ch);
var state_34783__$1 = state_34783;
var statearr_34798_37041 = state_34783__$1;
(statearr_34798_37041[(2)] = inst_34774);

(statearr_34798_37041[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (9))){
var state_34783__$1 = state_34783;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34799_37044 = state_34783__$1;
(statearr_34799_37044[(1)] = (11));

} else {
var statearr_34800_37045 = state_34783__$1;
(statearr_34800_37045[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (5))){
var inst_34758 = (state_34783[(7)]);
var state_34783__$1 = state_34783;
var statearr_34801_37047 = state_34783__$1;
(statearr_34801_37047[(2)] = inst_34758);

(statearr_34801_37047[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (10))){
var inst_34779 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
var statearr_34805_37049 = state_34783__$1;
(statearr_34805_37049[(2)] = inst_34779);

(statearr_34805_37049[(1)] = (3));


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
var statearr_34807_37050 = state_34783__$1;
(statearr_34807_37050[(2)] = null);

(statearr_34807_37050[(1)] = (2));


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
var statearr_34810_37051 = state_34783;
(statearr_34810_37051[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34809;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37052 = state_34783;
state_34783 = G__37052;
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
var state__34276__auto__ = (function (){var statearr_34812 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34812[(6)] = c__34274__auto__);

return statearr_34812;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34822 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34822 = (function (ch,cs,meta34823){
this.ch = ch;
this.cs = cs;
this.meta34823 = meta34823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34824,meta34823__$1){
var self__ = this;
var _34824__$1 = this;
return (new cljs.core.async.t_cljs$core$async34822(self__.ch,self__.cs,meta34823__$1));
}));

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34824){
var self__ = this;
var _34824__$1 = this;
return self__.meta34823;
}));

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34822.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34823","meta34823",-78265650,null)], null);
}));

(cljs.core.async.t_cljs$core$async34822.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34822");

(cljs.core.async.t_cljs$core$async34822.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34822");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34822.
 */
cljs.core.async.__GT_t_cljs$core$async34822 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34822(ch__$1,cs__$1,meta34823){
return (new cljs.core.async.t_cljs$core$async34822(ch__$1,cs__$1,meta34823));
});

}

return (new cljs.core.async.t_cljs$core$async34822(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34274__auto___37087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34972){
var state_val_34973 = (state_34972[(1)]);
if((state_val_34973 === (7))){
var inst_34968 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_34980_37090 = state_34972__$1;
(statearr_34980_37090[(2)] = inst_34968);

(statearr_34980_37090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (20))){
var inst_34858 = (state_34972[(7)]);
var inst_34876 = cljs.core.first(inst_34858);
var inst_34877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34876,(0),null);
var inst_34878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34876,(1),null);
var state_34972__$1 = (function (){var statearr_34981 = state_34972;
(statearr_34981[(8)] = inst_34877);

return statearr_34981;
})();
if(cljs.core.truth_(inst_34878)){
var statearr_34982_37096 = state_34972__$1;
(statearr_34982_37096[(1)] = (22));

} else {
var statearr_34983_37097 = state_34972__$1;
(statearr_34983_37097[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (27))){
var inst_34914 = (state_34972[(9)]);
var inst_34909 = (state_34972[(10)]);
var inst_34907 = (state_34972[(11)]);
var inst_34827 = (state_34972[(12)]);
var inst_34914__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34907,inst_34909);
var inst_34915 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34914__$1,inst_34827,done);
var state_34972__$1 = (function (){var statearr_34984 = state_34972;
(statearr_34984[(9)] = inst_34914__$1);

return statearr_34984;
})();
if(cljs.core.truth_(inst_34915)){
var statearr_34985_37102 = state_34972__$1;
(statearr_34985_37102[(1)] = (30));

} else {
var statearr_34986_37103 = state_34972__$1;
(statearr_34986_37103[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (1))){
var state_34972__$1 = state_34972;
var statearr_34987_37105 = state_34972__$1;
(statearr_34987_37105[(2)] = null);

(statearr_34987_37105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (24))){
var inst_34858 = (state_34972[(7)]);
var inst_34884 = (state_34972[(2)]);
var inst_34885 = cljs.core.next(inst_34858);
var inst_34836 = inst_34885;
var inst_34837 = null;
var inst_34838 = (0);
var inst_34839 = (0);
var state_34972__$1 = (function (){var statearr_34988 = state_34972;
(statearr_34988[(13)] = inst_34837);

(statearr_34988[(14)] = inst_34836);

(statearr_34988[(15)] = inst_34838);

(statearr_34988[(16)] = inst_34839);

(statearr_34988[(17)] = inst_34884);

return statearr_34988;
})();
var statearr_34989_37115 = state_34972__$1;
(statearr_34989_37115[(2)] = null);

(statearr_34989_37115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (39))){
var state_34972__$1 = state_34972;
var statearr_34993_37119 = state_34972__$1;
(statearr_34993_37119[(2)] = null);

(statearr_34993_37119[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (4))){
var inst_34827 = (state_34972[(12)]);
var inst_34827__$1 = (state_34972[(2)]);
var inst_34828 = (inst_34827__$1 == null);
var state_34972__$1 = (function (){var statearr_34994 = state_34972;
(statearr_34994[(12)] = inst_34827__$1);

return statearr_34994;
})();
if(cljs.core.truth_(inst_34828)){
var statearr_34995_37120 = state_34972__$1;
(statearr_34995_37120[(1)] = (5));

} else {
var statearr_34996_37123 = state_34972__$1;
(statearr_34996_37123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (15))){
var inst_34837 = (state_34972[(13)]);
var inst_34836 = (state_34972[(14)]);
var inst_34838 = (state_34972[(15)]);
var inst_34839 = (state_34972[(16)]);
var inst_34854 = (state_34972[(2)]);
var inst_34855 = (inst_34839 + (1));
var tmp34990 = inst_34837;
var tmp34991 = inst_34836;
var tmp34992 = inst_34838;
var inst_34836__$1 = tmp34991;
var inst_34837__$1 = tmp34990;
var inst_34838__$1 = tmp34992;
var inst_34839__$1 = inst_34855;
var state_34972__$1 = (function (){var statearr_34997 = state_34972;
(statearr_34997[(13)] = inst_34837__$1);

(statearr_34997[(14)] = inst_34836__$1);

(statearr_34997[(15)] = inst_34838__$1);

(statearr_34997[(16)] = inst_34839__$1);

(statearr_34997[(18)] = inst_34854);

return statearr_34997;
})();
var statearr_34998_37127 = state_34972__$1;
(statearr_34998_37127[(2)] = null);

(statearr_34998_37127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (21))){
var inst_34888 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35002_37128 = state_34972__$1;
(statearr_35002_37128[(2)] = inst_34888);

(statearr_35002_37128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (31))){
var inst_34914 = (state_34972[(9)]);
var inst_34918 = done(null);
var inst_34919 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34914);
var state_34972__$1 = (function (){var statearr_35003 = state_34972;
(statearr_35003[(19)] = inst_34918);

return statearr_35003;
})();
var statearr_35004_37132 = state_34972__$1;
(statearr_35004_37132[(2)] = inst_34919);

(statearr_35004_37132[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (32))){
var inst_34909 = (state_34972[(10)]);
var inst_34906 = (state_34972[(20)]);
var inst_34907 = (state_34972[(11)]);
var inst_34908 = (state_34972[(21)]);
var inst_34922 = (state_34972[(2)]);
var inst_34923 = (inst_34909 + (1));
var tmp34999 = inst_34906;
var tmp35000 = inst_34907;
var tmp35001 = inst_34908;
var inst_34906__$1 = tmp34999;
var inst_34907__$1 = tmp35000;
var inst_34908__$1 = tmp35001;
var inst_34909__$1 = inst_34923;
var state_34972__$1 = (function (){var statearr_35005 = state_34972;
(statearr_35005[(10)] = inst_34909__$1);

(statearr_35005[(20)] = inst_34906__$1);

(statearr_35005[(11)] = inst_34907__$1);

(statearr_35005[(21)] = inst_34908__$1);

(statearr_35005[(22)] = inst_34922);

return statearr_35005;
})();
var statearr_35006_37138 = state_34972__$1;
(statearr_35006_37138[(2)] = null);

(statearr_35006_37138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (40))){
var inst_34936 = (state_34972[(23)]);
var inst_34941 = done(null);
var inst_34942 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34936);
var state_34972__$1 = (function (){var statearr_35007 = state_34972;
(statearr_35007[(24)] = inst_34941);

return statearr_35007;
})();
var statearr_35008_37146 = state_34972__$1;
(statearr_35008_37146[(2)] = inst_34942);

(statearr_35008_37146[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (33))){
var inst_34926 = (state_34972[(25)]);
var inst_34928 = cljs.core.chunked_seq_QMARK_(inst_34926);
var state_34972__$1 = state_34972;
if(inst_34928){
var statearr_35009_37148 = state_34972__$1;
(statearr_35009_37148[(1)] = (36));

} else {
var statearr_35010_37149 = state_34972__$1;
(statearr_35010_37149[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (13))){
var inst_34848 = (state_34972[(26)]);
var inst_34851 = cljs.core.async.close_BANG_(inst_34848);
var state_34972__$1 = state_34972;
var statearr_35011_37151 = state_34972__$1;
(statearr_35011_37151[(2)] = inst_34851);

(statearr_35011_37151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (22))){
var inst_34877 = (state_34972[(8)]);
var inst_34881 = cljs.core.async.close_BANG_(inst_34877);
var state_34972__$1 = state_34972;
var statearr_35012_37153 = state_34972__$1;
(statearr_35012_37153[(2)] = inst_34881);

(statearr_35012_37153[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (36))){
var inst_34926 = (state_34972[(25)]);
var inst_34930 = cljs.core.chunk_first(inst_34926);
var inst_34931 = cljs.core.chunk_rest(inst_34926);
var inst_34933 = cljs.core.count(inst_34930);
var inst_34906 = inst_34931;
var inst_34907 = inst_34930;
var inst_34908 = inst_34933;
var inst_34909 = (0);
var state_34972__$1 = (function (){var statearr_35013 = state_34972;
(statearr_35013[(10)] = inst_34909);

(statearr_35013[(20)] = inst_34906);

(statearr_35013[(11)] = inst_34907);

(statearr_35013[(21)] = inst_34908);

return statearr_35013;
})();
var statearr_35014_37156 = state_34972__$1;
(statearr_35014_37156[(2)] = null);

(statearr_35014_37156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (41))){
var inst_34926 = (state_34972[(25)]);
var inst_34944 = (state_34972[(2)]);
var inst_34945 = cljs.core.next(inst_34926);
var inst_34906 = inst_34945;
var inst_34907 = null;
var inst_34908 = (0);
var inst_34909 = (0);
var state_34972__$1 = (function (){var statearr_35015 = state_34972;
(statearr_35015[(27)] = inst_34944);

(statearr_35015[(10)] = inst_34909);

(statearr_35015[(20)] = inst_34906);

(statearr_35015[(11)] = inst_34907);

(statearr_35015[(21)] = inst_34908);

return statearr_35015;
})();
var statearr_35016_37161 = state_34972__$1;
(statearr_35016_37161[(2)] = null);

(statearr_35016_37161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (43))){
var state_34972__$1 = state_34972;
var statearr_35017_37164 = state_34972__$1;
(statearr_35017_37164[(2)] = null);

(statearr_35017_37164[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (29))){
var inst_34953 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35018_37165 = state_34972__$1;
(statearr_35018_37165[(2)] = inst_34953);

(statearr_35018_37165[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (44))){
var inst_34965 = (state_34972[(2)]);
var state_34972__$1 = (function (){var statearr_35019 = state_34972;
(statearr_35019[(28)] = inst_34965);

return statearr_35019;
})();
var statearr_35020_37166 = state_34972__$1;
(statearr_35020_37166[(2)] = null);

(statearr_35020_37166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (6))){
var inst_34898 = (state_34972[(29)]);
var inst_34897 = cljs.core.deref(cs);
var inst_34898__$1 = cljs.core.keys(inst_34897);
var inst_34899 = cljs.core.count(inst_34898__$1);
var inst_34900 = cljs.core.reset_BANG_(dctr,inst_34899);
var inst_34905 = cljs.core.seq(inst_34898__$1);
var inst_34906 = inst_34905;
var inst_34907 = null;
var inst_34908 = (0);
var inst_34909 = (0);
var state_34972__$1 = (function (){var statearr_35021 = state_34972;
(statearr_35021[(29)] = inst_34898__$1);

(statearr_35021[(30)] = inst_34900);

(statearr_35021[(10)] = inst_34909);

(statearr_35021[(20)] = inst_34906);

(statearr_35021[(11)] = inst_34907);

(statearr_35021[(21)] = inst_34908);

return statearr_35021;
})();
var statearr_35022_37175 = state_34972__$1;
(statearr_35022_37175[(2)] = null);

(statearr_35022_37175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (28))){
var inst_34926 = (state_34972[(25)]);
var inst_34906 = (state_34972[(20)]);
var inst_34926__$1 = cljs.core.seq(inst_34906);
var state_34972__$1 = (function (){var statearr_35023 = state_34972;
(statearr_35023[(25)] = inst_34926__$1);

return statearr_35023;
})();
if(inst_34926__$1){
var statearr_35024_37177 = state_34972__$1;
(statearr_35024_37177[(1)] = (33));

} else {
var statearr_35025_37179 = state_34972__$1;
(statearr_35025_37179[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (25))){
var inst_34909 = (state_34972[(10)]);
var inst_34908 = (state_34972[(21)]);
var inst_34911 = (inst_34909 < inst_34908);
var inst_34912 = inst_34911;
var state_34972__$1 = state_34972;
if(cljs.core.truth_(inst_34912)){
var statearr_35026_37181 = state_34972__$1;
(statearr_35026_37181[(1)] = (27));

} else {
var statearr_35027_37182 = state_34972__$1;
(statearr_35027_37182[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (34))){
var state_34972__$1 = state_34972;
var statearr_35028_37183 = state_34972__$1;
(statearr_35028_37183[(2)] = null);

(statearr_35028_37183[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (17))){
var state_34972__$1 = state_34972;
var statearr_35029_37185 = state_34972__$1;
(statearr_35029_37185[(2)] = null);

(statearr_35029_37185[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (3))){
var inst_34970 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34972__$1,inst_34970);
} else {
if((state_val_34973 === (12))){
var inst_34893 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35030_37192 = state_34972__$1;
(statearr_35030_37192[(2)] = inst_34893);

(statearr_35030_37192[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (2))){
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34972__$1,(4),ch);
} else {
if((state_val_34973 === (23))){
var state_34972__$1 = state_34972;
var statearr_35033_37193 = state_34972__$1;
(statearr_35033_37193[(2)] = null);

(statearr_35033_37193[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (35))){
var inst_34951 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35035_37196 = state_34972__$1;
(statearr_35035_37196[(2)] = inst_34951);

(statearr_35035_37196[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (19))){
var inst_34858 = (state_34972[(7)]);
var inst_34865 = cljs.core.chunk_first(inst_34858);
var inst_34866 = cljs.core.chunk_rest(inst_34858);
var inst_34867 = cljs.core.count(inst_34865);
var inst_34836 = inst_34866;
var inst_34837 = inst_34865;
var inst_34838 = inst_34867;
var inst_34839 = (0);
var state_34972__$1 = (function (){var statearr_35039 = state_34972;
(statearr_35039[(13)] = inst_34837);

(statearr_35039[(14)] = inst_34836);

(statearr_35039[(15)] = inst_34838);

(statearr_35039[(16)] = inst_34839);

return statearr_35039;
})();
var statearr_35040_37198 = state_34972__$1;
(statearr_35040_37198[(2)] = null);

(statearr_35040_37198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (11))){
var inst_34858 = (state_34972[(7)]);
var inst_34836 = (state_34972[(14)]);
var inst_34858__$1 = cljs.core.seq(inst_34836);
var state_34972__$1 = (function (){var statearr_35041 = state_34972;
(statearr_35041[(7)] = inst_34858__$1);

return statearr_35041;
})();
if(inst_34858__$1){
var statearr_35042_37200 = state_34972__$1;
(statearr_35042_37200[(1)] = (16));

} else {
var statearr_35043_37201 = state_34972__$1;
(statearr_35043_37201[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (9))){
var inst_34895 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35044_37203 = state_34972__$1;
(statearr_35044_37203[(2)] = inst_34895);

(statearr_35044_37203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (5))){
var inst_34834 = cljs.core.deref(cs);
var inst_34835 = cljs.core.seq(inst_34834);
var inst_34836 = inst_34835;
var inst_34837 = null;
var inst_34838 = (0);
var inst_34839 = (0);
var state_34972__$1 = (function (){var statearr_35045 = state_34972;
(statearr_35045[(13)] = inst_34837);

(statearr_35045[(14)] = inst_34836);

(statearr_35045[(15)] = inst_34838);

(statearr_35045[(16)] = inst_34839);

return statearr_35045;
})();
var statearr_35046_37209 = state_34972__$1;
(statearr_35046_37209[(2)] = null);

(statearr_35046_37209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (14))){
var state_34972__$1 = state_34972;
var statearr_35047_37212 = state_34972__$1;
(statearr_35047_37212[(2)] = null);

(statearr_35047_37212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (45))){
var inst_34962 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35049_37216 = state_34972__$1;
(statearr_35049_37216[(2)] = inst_34962);

(statearr_35049_37216[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (26))){
var inst_34898 = (state_34972[(29)]);
var inst_34955 = (state_34972[(2)]);
var inst_34959 = cljs.core.seq(inst_34898);
var state_34972__$1 = (function (){var statearr_35052 = state_34972;
(statearr_35052[(31)] = inst_34955);

return statearr_35052;
})();
if(inst_34959){
var statearr_35054_37217 = state_34972__$1;
(statearr_35054_37217[(1)] = (42));

} else {
var statearr_35056_37218 = state_34972__$1;
(statearr_35056_37218[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (16))){
var inst_34858 = (state_34972[(7)]);
var inst_34863 = cljs.core.chunked_seq_QMARK_(inst_34858);
var state_34972__$1 = state_34972;
if(inst_34863){
var statearr_35058_37219 = state_34972__$1;
(statearr_35058_37219[(1)] = (19));

} else {
var statearr_35059_37220 = state_34972__$1;
(statearr_35059_37220[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (38))){
var inst_34948 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35060_37221 = state_34972__$1;
(statearr_35060_37221[(2)] = inst_34948);

(statearr_35060_37221[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (30))){
var state_34972__$1 = state_34972;
var statearr_35061_37223 = state_34972__$1;
(statearr_35061_37223[(2)] = null);

(statearr_35061_37223[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (10))){
var inst_34837 = (state_34972[(13)]);
var inst_34839 = (state_34972[(16)]);
var inst_34847 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34837,inst_34839);
var inst_34848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34847,(0),null);
var inst_34849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34847,(1),null);
var state_34972__$1 = (function (){var statearr_35062 = state_34972;
(statearr_35062[(26)] = inst_34848);

return statearr_35062;
})();
if(cljs.core.truth_(inst_34849)){
var statearr_35063_37229 = state_34972__$1;
(statearr_35063_37229[(1)] = (13));

} else {
var statearr_35064_37230 = state_34972__$1;
(statearr_35064_37230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (18))){
var inst_34891 = (state_34972[(2)]);
var state_34972__$1 = state_34972;
var statearr_35065_37231 = state_34972__$1;
(statearr_35065_37231[(2)] = inst_34891);

(statearr_35065_37231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (42))){
var state_34972__$1 = state_34972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34972__$1,(45),dchan);
} else {
if((state_val_34973 === (37))){
var inst_34926 = (state_34972[(25)]);
var inst_34936 = (state_34972[(23)]);
var inst_34827 = (state_34972[(12)]);
var inst_34936__$1 = cljs.core.first(inst_34926);
var inst_34938 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34936__$1,inst_34827,done);
var state_34972__$1 = (function (){var statearr_35068 = state_34972;
(statearr_35068[(23)] = inst_34936__$1);

return statearr_35068;
})();
if(cljs.core.truth_(inst_34938)){
var statearr_35069_37236 = state_34972__$1;
(statearr_35069_37236[(1)] = (39));

} else {
var statearr_35071_37238 = state_34972__$1;
(statearr_35071_37238[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34973 === (8))){
var inst_34838 = (state_34972[(15)]);
var inst_34839 = (state_34972[(16)]);
var inst_34841 = (inst_34839 < inst_34838);
var inst_34842 = inst_34841;
var state_34972__$1 = state_34972;
if(cljs.core.truth_(inst_34842)){
var statearr_35074_37242 = state_34972__$1;
(statearr_35074_37242[(1)] = (10));

} else {
var statearr_35075_37246 = state_34972__$1;
(statearr_35075_37246[(1)] = (11));

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
var statearr_35077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35077[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35077[(1)] = (1));

return statearr_35077;
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
}catch (e35078){if((e35078 instanceof Object)){
var ex__34210__auto__ = e35078;
var statearr_35079_37253 = state_34972;
(statearr_35079_37253[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37255 = state_34972;
state_34972 = G__37255;
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
var state__34276__auto__ = (function (){var statearr_35080 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35080[(6)] = c__34274__auto___37087);

return statearr_35080;
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
var G__35087 = arguments.length;
switch (G__35087) {
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
var len__4789__auto___37286 = arguments.length;
var i__4790__auto___37287 = (0);
while(true){
if((i__4790__auto___37287 < len__4789__auto___37286)){
args__4795__auto__.push((arguments[i__4790__auto___37287]));

var G__37288 = (i__4790__auto___37287 + (1));
i__4790__auto___37287 = G__37288;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35191){
var map__35194 = p__35191;
var map__35194__$1 = (((((!((map__35194 == null))))?(((((map__35194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35194):map__35194);
var opts = map__35194__$1;
var statearr_35197_37293 = state;
(statearr_35197_37293[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35198_37295 = state;
(statearr_35198_37295[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35199_37296 = state;
(statearr_35199_37296[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35171){
var G__35172 = cljs.core.first(seq35171);
var seq35171__$1 = cljs.core.next(seq35171);
var G__35173 = cljs.core.first(seq35171__$1);
var seq35171__$2 = cljs.core.next(seq35171__$1);
var G__35174 = cljs.core.first(seq35171__$2);
var seq35171__$3 = cljs.core.next(seq35171__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35172,G__35173,G__35174,seq35171__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35232 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35233){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35233 = meta35233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35234,meta35233__$1){
var self__ = this;
var _35234__$1 = this;
return (new cljs.core.async.t_cljs$core$async35232(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35233__$1));
}));

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35234){
var self__ = this;
var _35234__$1 = this;
return self__.meta35233;
}));

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35232.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35233","meta35233",-1323400345,null)], null);
}));

(cljs.core.async.t_cljs$core$async35232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35232");

(cljs.core.async.t_cljs$core$async35232.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35232.
 */
cljs.core.async.__GT_t_cljs$core$async35232 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35232(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35233){
return (new cljs.core.async.t_cljs$core$async35232(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35233));
});

}

return (new cljs.core.async.t_cljs$core$async35232(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35437){
var state_val_35439 = (state_35437[(1)]);
if((state_val_35439 === (7))){
var inst_35318 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
var statearr_35450_37340 = state_35437__$1;
(statearr_35450_37340[(2)] = inst_35318);

(statearr_35450_37340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (20))){
var inst_35332 = (state_35437[(7)]);
var state_35437__$1 = state_35437;
var statearr_35456_37344 = state_35437__$1;
(statearr_35456_37344[(2)] = inst_35332);

(statearr_35456_37344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (27))){
var state_35437__$1 = state_35437;
var statearr_35459_37345 = state_35437__$1;
(statearr_35459_37345[(2)] = null);

(statearr_35459_37345[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (1))){
var inst_35302 = (state_35437[(8)]);
var inst_35302__$1 = calc_state();
var inst_35304 = (inst_35302__$1 == null);
var inst_35305 = cljs.core.not(inst_35304);
var state_35437__$1 = (function (){var statearr_35471 = state_35437;
(statearr_35471[(8)] = inst_35302__$1);

return statearr_35471;
})();
if(inst_35305){
var statearr_35473_37346 = state_35437__$1;
(statearr_35473_37346[(1)] = (2));

} else {
var statearr_35474_37347 = state_35437__$1;
(statearr_35474_37347[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (24))){
var inst_35370 = (state_35437[(9)]);
var inst_35401 = (state_35437[(10)]);
var inst_35358 = (state_35437[(11)]);
var inst_35401__$1 = (inst_35358.cljs$core$IFn$_invoke$arity$1 ? inst_35358.cljs$core$IFn$_invoke$arity$1(inst_35370) : inst_35358.call(null,inst_35370));
var state_35437__$1 = (function (){var statearr_35481 = state_35437;
(statearr_35481[(10)] = inst_35401__$1);

return statearr_35481;
})();
if(cljs.core.truth_(inst_35401__$1)){
var statearr_35482_37349 = state_35437__$1;
(statearr_35482_37349[(1)] = (29));

} else {
var statearr_35483_37351 = state_35437__$1;
(statearr_35483_37351[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (4))){
var inst_35321 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
if(cljs.core.truth_(inst_35321)){
var statearr_35484_37353 = state_35437__$1;
(statearr_35484_37353[(1)] = (8));

} else {
var statearr_35485_37354 = state_35437__$1;
(statearr_35485_37354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (15))){
var inst_35351 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
if(cljs.core.truth_(inst_35351)){
var statearr_35486_37357 = state_35437__$1;
(statearr_35486_37357[(1)] = (19));

} else {
var statearr_35487_37358 = state_35437__$1;
(statearr_35487_37358[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (21))){
var inst_35357 = (state_35437[(12)]);
var inst_35357__$1 = (state_35437[(2)]);
var inst_35358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35357__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35357__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35357__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35437__$1 = (function (){var statearr_35488 = state_35437;
(statearr_35488[(12)] = inst_35357__$1);

(statearr_35488[(13)] = inst_35359);

(statearr_35488[(11)] = inst_35358);

return statearr_35488;
})();
return cljs.core.async.ioc_alts_BANG_(state_35437__$1,(22),inst_35360);
} else {
if((state_val_35439 === (31))){
var inst_35413 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
if(cljs.core.truth_(inst_35413)){
var statearr_35491_37360 = state_35437__$1;
(statearr_35491_37360[(1)] = (32));

} else {
var statearr_35492_37361 = state_35437__$1;
(statearr_35492_37361[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (32))){
var inst_35369 = (state_35437[(14)]);
var state_35437__$1 = state_35437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35437__$1,(35),out,inst_35369);
} else {
if((state_val_35439 === (33))){
var inst_35357 = (state_35437[(12)]);
var inst_35332 = inst_35357;
var state_35437__$1 = (function (){var statearr_35493 = state_35437;
(statearr_35493[(7)] = inst_35332);

return statearr_35493;
})();
var statearr_35494_37366 = state_35437__$1;
(statearr_35494_37366[(2)] = null);

(statearr_35494_37366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (13))){
var inst_35332 = (state_35437[(7)]);
var inst_35340 = inst_35332.cljs$lang$protocol_mask$partition0$;
var inst_35341 = (inst_35340 & (64));
var inst_35342 = inst_35332.cljs$core$ISeq$;
var inst_35343 = (cljs.core.PROTOCOL_SENTINEL === inst_35342);
var inst_35344 = ((inst_35341) || (inst_35343));
var state_35437__$1 = state_35437;
if(cljs.core.truth_(inst_35344)){
var statearr_35497_37371 = state_35437__$1;
(statearr_35497_37371[(1)] = (16));

} else {
var statearr_35498_37373 = state_35437__$1;
(statearr_35498_37373[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (22))){
var inst_35369 = (state_35437[(14)]);
var inst_35370 = (state_35437[(9)]);
var inst_35368 = (state_35437[(2)]);
var inst_35369__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35368,(0),null);
var inst_35370__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35368,(1),null);
var inst_35372 = (inst_35369__$1 == null);
var inst_35374 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35370__$1,change);
var inst_35375 = ((inst_35372) || (inst_35374));
var state_35437__$1 = (function (){var statearr_35504 = state_35437;
(statearr_35504[(14)] = inst_35369__$1);

(statearr_35504[(9)] = inst_35370__$1);

return statearr_35504;
})();
if(cljs.core.truth_(inst_35375)){
var statearr_35506_37378 = state_35437__$1;
(statearr_35506_37378[(1)] = (23));

} else {
var statearr_35508_37379 = state_35437__$1;
(statearr_35508_37379[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (36))){
var inst_35357 = (state_35437[(12)]);
var inst_35332 = inst_35357;
var state_35437__$1 = (function (){var statearr_35511 = state_35437;
(statearr_35511[(7)] = inst_35332);

return statearr_35511;
})();
var statearr_35512_37381 = state_35437__$1;
(statearr_35512_37381[(2)] = null);

(statearr_35512_37381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (29))){
var inst_35401 = (state_35437[(10)]);
var state_35437__$1 = state_35437;
var statearr_35514_37386 = state_35437__$1;
(statearr_35514_37386[(2)] = inst_35401);

(statearr_35514_37386[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (6))){
var state_35437__$1 = state_35437;
var statearr_35516_37389 = state_35437__$1;
(statearr_35516_37389[(2)] = false);

(statearr_35516_37389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (28))){
var inst_35395 = (state_35437[(2)]);
var inst_35398 = calc_state();
var inst_35332 = inst_35398;
var state_35437__$1 = (function (){var statearr_35525 = state_35437;
(statearr_35525[(15)] = inst_35395);

(statearr_35525[(7)] = inst_35332);

return statearr_35525;
})();
var statearr_35530_37396 = state_35437__$1;
(statearr_35530_37396[(2)] = null);

(statearr_35530_37396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (25))){
var inst_35428 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
var statearr_35531_37397 = state_35437__$1;
(statearr_35531_37397[(2)] = inst_35428);

(statearr_35531_37397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (34))){
var inst_35426 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
var statearr_35534_37398 = state_35437__$1;
(statearr_35534_37398[(2)] = inst_35426);

(statearr_35534_37398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (17))){
var state_35437__$1 = state_35437;
var statearr_35536_37401 = state_35437__$1;
(statearr_35536_37401[(2)] = false);

(statearr_35536_37401[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (3))){
var state_35437__$1 = state_35437;
var statearr_35537_37404 = state_35437__$1;
(statearr_35537_37404[(2)] = false);

(statearr_35537_37404[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (12))){
var inst_35431 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35437__$1,inst_35431);
} else {
if((state_val_35439 === (2))){
var inst_35302 = (state_35437[(8)]);
var inst_35308 = inst_35302.cljs$lang$protocol_mask$partition0$;
var inst_35309 = (inst_35308 & (64));
var inst_35312 = inst_35302.cljs$core$ISeq$;
var inst_35313 = (cljs.core.PROTOCOL_SENTINEL === inst_35312);
var inst_35314 = ((inst_35309) || (inst_35313));
var state_35437__$1 = state_35437;
if(cljs.core.truth_(inst_35314)){
var statearr_35542_37410 = state_35437__$1;
(statearr_35542_37410[(1)] = (5));

} else {
var statearr_35545_37411 = state_35437__$1;
(statearr_35545_37411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (23))){
var inst_35369 = (state_35437[(14)]);
var inst_35379 = (inst_35369 == null);
var state_35437__$1 = state_35437;
if(cljs.core.truth_(inst_35379)){
var statearr_35549_37415 = state_35437__$1;
(statearr_35549_37415[(1)] = (26));

} else {
var statearr_35550_37417 = state_35437__$1;
(statearr_35550_37417[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (35))){
var inst_35417 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
if(cljs.core.truth_(inst_35417)){
var statearr_35553_37418 = state_35437__$1;
(statearr_35553_37418[(1)] = (36));

} else {
var statearr_35554_37420 = state_35437__$1;
(statearr_35554_37420[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (19))){
var inst_35332 = (state_35437[(7)]);
var inst_35353 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35332);
var state_35437__$1 = state_35437;
var statearr_35557_37423 = state_35437__$1;
(statearr_35557_37423[(2)] = inst_35353);

(statearr_35557_37423[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (11))){
var inst_35332 = (state_35437[(7)]);
var inst_35337 = (inst_35332 == null);
var inst_35338 = cljs.core.not(inst_35337);
var state_35437__$1 = state_35437;
if(inst_35338){
var statearr_35559_37428 = state_35437__$1;
(statearr_35559_37428[(1)] = (13));

} else {
var statearr_35562_37430 = state_35437__$1;
(statearr_35562_37430[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (9))){
var inst_35302 = (state_35437[(8)]);
var state_35437__$1 = state_35437;
var statearr_35566_37436 = state_35437__$1;
(statearr_35566_37436[(2)] = inst_35302);

(statearr_35566_37436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (5))){
var state_35437__$1 = state_35437;
var statearr_35569_37437 = state_35437__$1;
(statearr_35569_37437[(2)] = true);

(statearr_35569_37437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (14))){
var state_35437__$1 = state_35437;
var statearr_35575_37438 = state_35437__$1;
(statearr_35575_37438[(2)] = false);

(statearr_35575_37438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (26))){
var inst_35370 = (state_35437[(9)]);
var inst_35392 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35370);
var state_35437__$1 = state_35437;
var statearr_35576_37441 = state_35437__$1;
(statearr_35576_37441[(2)] = inst_35392);

(statearr_35576_37441[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (16))){
var state_35437__$1 = state_35437;
var statearr_35577_37444 = state_35437__$1;
(statearr_35577_37444[(2)] = true);

(statearr_35577_37444[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (38))){
var inst_35422 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
var statearr_35580_37445 = state_35437__$1;
(statearr_35580_37445[(2)] = inst_35422);

(statearr_35580_37445[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (30))){
var inst_35370 = (state_35437[(9)]);
var inst_35359 = (state_35437[(13)]);
var inst_35358 = (state_35437[(11)]);
var inst_35407 = cljs.core.empty_QMARK_(inst_35358);
var inst_35409 = (inst_35359.cljs$core$IFn$_invoke$arity$1 ? inst_35359.cljs$core$IFn$_invoke$arity$1(inst_35370) : inst_35359.call(null,inst_35370));
var inst_35410 = cljs.core.not(inst_35409);
var inst_35411 = ((inst_35407) && (inst_35410));
var state_35437__$1 = state_35437;
var statearr_35583_37448 = state_35437__$1;
(statearr_35583_37448[(2)] = inst_35411);

(statearr_35583_37448[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (10))){
var inst_35302 = (state_35437[(8)]);
var inst_35326 = (state_35437[(2)]);
var inst_35328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35326,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35326,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35326,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35332 = inst_35302;
var state_35437__$1 = (function (){var statearr_35604 = state_35437;
(statearr_35604[(7)] = inst_35332);

(statearr_35604[(16)] = inst_35330);

(statearr_35604[(17)] = inst_35331);

(statearr_35604[(18)] = inst_35328);

return statearr_35604;
})();
var statearr_35606_37455 = state_35437__$1;
(statearr_35606_37455[(2)] = null);

(statearr_35606_37455[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (18))){
var inst_35348 = (state_35437[(2)]);
var state_35437__$1 = state_35437;
var statearr_35608_37456 = state_35437__$1;
(statearr_35608_37456[(2)] = inst_35348);

(statearr_35608_37456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (37))){
var state_35437__$1 = state_35437;
var statearr_35610_37458 = state_35437__$1;
(statearr_35610_37458[(2)] = null);

(statearr_35610_37458[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (8))){
var inst_35302 = (state_35437[(8)]);
var inst_35323 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35302);
var state_35437__$1 = state_35437;
var statearr_35613_37464 = state_35437__$1;
(statearr_35613_37464[(2)] = inst_35323);

(statearr_35613_37464[(1)] = (10));


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
var statearr_35615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35615[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35615[(1)] = (1));

return statearr_35615;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35437){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35437);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35620){if((e35620 instanceof Object)){
var ex__34210__auto__ = e35620;
var statearr_35622_37468 = state_35437;
(statearr_35622_37468[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35620;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37471 = state_35437;
state_35437 = G__37471;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35437){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35629 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35629[(6)] = c__34274__auto___37337);

return statearr_35629;
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
var G__35706 = arguments.length;
switch (G__35706) {
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
var G__35737 = arguments.length;
switch (G__35737) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35735_SHARP_){
if(cljs.core.truth_((p1__35735_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35735_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35735_SHARP_.call(null,topic)))){
return p1__35735_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35735_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35740 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35740 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35741){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35741 = meta35741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35742,meta35741__$1){
var self__ = this;
var _35742__$1 = this;
return (new cljs.core.async.t_cljs$core$async35740(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35741__$1));
}));

(cljs.core.async.t_cljs$core$async35740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35742){
var self__ = this;
var _35742__$1 = this;
return self__.meta35741;
}));

(cljs.core.async.t_cljs$core$async35740.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35740.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35740.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35740.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35740.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35740.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35740.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35741","meta35741",-1670334417,null)], null);
}));

(cljs.core.async.t_cljs$core$async35740.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35740");

(cljs.core.async.t_cljs$core$async35740.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35740");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35740.
 */
cljs.core.async.__GT_t_cljs$core$async35740 = (function cljs$core$async$__GT_t_cljs$core$async35740(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35741){
return (new cljs.core.async.t_cljs$core$async35740(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35741));
});

}

return (new cljs.core.async.t_cljs$core$async35740(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35835){
var state_val_35836 = (state_35835[(1)]);
if((state_val_35836 === (7))){
var inst_35830 = (state_35835[(2)]);
var state_35835__$1 = state_35835;
var statearr_35838_37523 = state_35835__$1;
(statearr_35838_37523[(2)] = inst_35830);

(statearr_35838_37523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (20))){
var state_35835__$1 = state_35835;
var statearr_35840_37525 = state_35835__$1;
(statearr_35840_37525[(2)] = null);

(statearr_35840_37525[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (1))){
var state_35835__$1 = state_35835;
var statearr_35841_37526 = state_35835__$1;
(statearr_35841_37526[(2)] = null);

(statearr_35841_37526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (24))){
var inst_35813 = (state_35835[(7)]);
var inst_35822 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35813);
var state_35835__$1 = state_35835;
var statearr_35843_37532 = state_35835__$1;
(statearr_35843_37532[(2)] = inst_35822);

(statearr_35843_37532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (4))){
var inst_35759 = (state_35835[(8)]);
var inst_35759__$1 = (state_35835[(2)]);
var inst_35760 = (inst_35759__$1 == null);
var state_35835__$1 = (function (){var statearr_35844 = state_35835;
(statearr_35844[(8)] = inst_35759__$1);

return statearr_35844;
})();
if(cljs.core.truth_(inst_35760)){
var statearr_35845_37540 = state_35835__$1;
(statearr_35845_37540[(1)] = (5));

} else {
var statearr_35846_37542 = state_35835__$1;
(statearr_35846_37542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (15))){
var inst_35807 = (state_35835[(2)]);
var state_35835__$1 = state_35835;
var statearr_35848_37543 = state_35835__$1;
(statearr_35848_37543[(2)] = inst_35807);

(statearr_35848_37543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (21))){
var inst_35827 = (state_35835[(2)]);
var state_35835__$1 = (function (){var statearr_35849 = state_35835;
(statearr_35849[(9)] = inst_35827);

return statearr_35849;
})();
var statearr_35850_37545 = state_35835__$1;
(statearr_35850_37545[(2)] = null);

(statearr_35850_37545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (13))){
var inst_35788 = (state_35835[(10)]);
var inst_35790 = cljs.core.chunked_seq_QMARK_(inst_35788);
var state_35835__$1 = state_35835;
if(inst_35790){
var statearr_35856_37548 = state_35835__$1;
(statearr_35856_37548[(1)] = (16));

} else {
var statearr_35857_37552 = state_35835__$1;
(statearr_35857_37552[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (22))){
var inst_35819 = (state_35835[(2)]);
var state_35835__$1 = state_35835;
if(cljs.core.truth_(inst_35819)){
var statearr_35858_37555 = state_35835__$1;
(statearr_35858_37555[(1)] = (23));

} else {
var statearr_35859_37559 = state_35835__$1;
(statearr_35859_37559[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (6))){
var inst_35813 = (state_35835[(7)]);
var inst_35759 = (state_35835[(8)]);
var inst_35815 = (state_35835[(11)]);
var inst_35813__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35759) : topic_fn.call(null,inst_35759));
var inst_35814 = cljs.core.deref(mults);
var inst_35815__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35814,inst_35813__$1);
var state_35835__$1 = (function (){var statearr_35864 = state_35835;
(statearr_35864[(7)] = inst_35813__$1);

(statearr_35864[(11)] = inst_35815__$1);

return statearr_35864;
})();
if(cljs.core.truth_(inst_35815__$1)){
var statearr_35865_37563 = state_35835__$1;
(statearr_35865_37563[(1)] = (19));

} else {
var statearr_35867_37565 = state_35835__$1;
(statearr_35867_37565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (25))){
var inst_35824 = (state_35835[(2)]);
var state_35835__$1 = state_35835;
var statearr_35873_37566 = state_35835__$1;
(statearr_35873_37566[(2)] = inst_35824);

(statearr_35873_37566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (17))){
var inst_35788 = (state_35835[(10)]);
var inst_35797 = cljs.core.first(inst_35788);
var inst_35798 = cljs.core.async.muxch_STAR_(inst_35797);
var inst_35799 = cljs.core.async.close_BANG_(inst_35798);
var inst_35801 = cljs.core.next(inst_35788);
var inst_35771 = inst_35801;
var inst_35772 = null;
var inst_35773 = (0);
var inst_35774 = (0);
var state_35835__$1 = (function (){var statearr_35881 = state_35835;
(statearr_35881[(12)] = inst_35771);

(statearr_35881[(13)] = inst_35773);

(statearr_35881[(14)] = inst_35772);

(statearr_35881[(15)] = inst_35774);

(statearr_35881[(16)] = inst_35799);

return statearr_35881;
})();
var statearr_35885_37575 = state_35835__$1;
(statearr_35885_37575[(2)] = null);

(statearr_35885_37575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (3))){
var inst_35832 = (state_35835[(2)]);
var state_35835__$1 = state_35835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35835__$1,inst_35832);
} else {
if((state_val_35836 === (12))){
var inst_35809 = (state_35835[(2)]);
var state_35835__$1 = state_35835;
var statearr_35889_37581 = state_35835__$1;
(statearr_35889_37581[(2)] = inst_35809);

(statearr_35889_37581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (2))){
var state_35835__$1 = state_35835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35835__$1,(4),ch);
} else {
if((state_val_35836 === (23))){
var state_35835__$1 = state_35835;
var statearr_35890_37584 = state_35835__$1;
(statearr_35890_37584[(2)] = null);

(statearr_35890_37584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (19))){
var inst_35759 = (state_35835[(8)]);
var inst_35815 = (state_35835[(11)]);
var inst_35817 = cljs.core.async.muxch_STAR_(inst_35815);
var state_35835__$1 = state_35835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35835__$1,(22),inst_35817,inst_35759);
} else {
if((state_val_35836 === (11))){
var inst_35771 = (state_35835[(12)]);
var inst_35788 = (state_35835[(10)]);
var inst_35788__$1 = cljs.core.seq(inst_35771);
var state_35835__$1 = (function (){var statearr_35895 = state_35835;
(statearr_35895[(10)] = inst_35788__$1);

return statearr_35895;
})();
if(inst_35788__$1){
var statearr_35896_37588 = state_35835__$1;
(statearr_35896_37588[(1)] = (13));

} else {
var statearr_35897_37592 = state_35835__$1;
(statearr_35897_37592[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (9))){
var inst_35811 = (state_35835[(2)]);
var state_35835__$1 = state_35835;
var statearr_35898_37594 = state_35835__$1;
(statearr_35898_37594[(2)] = inst_35811);

(statearr_35898_37594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (5))){
var inst_35768 = cljs.core.deref(mults);
var inst_35769 = cljs.core.vals(inst_35768);
var inst_35770 = cljs.core.seq(inst_35769);
var inst_35771 = inst_35770;
var inst_35772 = null;
var inst_35773 = (0);
var inst_35774 = (0);
var state_35835__$1 = (function (){var statearr_35899 = state_35835;
(statearr_35899[(12)] = inst_35771);

(statearr_35899[(13)] = inst_35773);

(statearr_35899[(14)] = inst_35772);

(statearr_35899[(15)] = inst_35774);

return statearr_35899;
})();
var statearr_35901_37597 = state_35835__$1;
(statearr_35901_37597[(2)] = null);

(statearr_35901_37597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (14))){
var state_35835__$1 = state_35835;
var statearr_35905_37603 = state_35835__$1;
(statearr_35905_37603[(2)] = null);

(statearr_35905_37603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (16))){
var inst_35788 = (state_35835[(10)]);
var inst_35792 = cljs.core.chunk_first(inst_35788);
var inst_35793 = cljs.core.chunk_rest(inst_35788);
var inst_35794 = cljs.core.count(inst_35792);
var inst_35771 = inst_35793;
var inst_35772 = inst_35792;
var inst_35773 = inst_35794;
var inst_35774 = (0);
var state_35835__$1 = (function (){var statearr_35908 = state_35835;
(statearr_35908[(12)] = inst_35771);

(statearr_35908[(13)] = inst_35773);

(statearr_35908[(14)] = inst_35772);

(statearr_35908[(15)] = inst_35774);

return statearr_35908;
})();
var statearr_35910_37607 = state_35835__$1;
(statearr_35910_37607[(2)] = null);

(statearr_35910_37607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (10))){
var inst_35771 = (state_35835[(12)]);
var inst_35773 = (state_35835[(13)]);
var inst_35772 = (state_35835[(14)]);
var inst_35774 = (state_35835[(15)]);
var inst_35781 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35772,inst_35774);
var inst_35782 = cljs.core.async.muxch_STAR_(inst_35781);
var inst_35783 = cljs.core.async.close_BANG_(inst_35782);
var inst_35784 = (inst_35774 + (1));
var tmp35902 = inst_35771;
var tmp35903 = inst_35773;
var tmp35904 = inst_35772;
var inst_35771__$1 = tmp35902;
var inst_35772__$1 = tmp35904;
var inst_35773__$1 = tmp35903;
var inst_35774__$1 = inst_35784;
var state_35835__$1 = (function (){var statearr_35912 = state_35835;
(statearr_35912[(12)] = inst_35771__$1);

(statearr_35912[(13)] = inst_35773__$1);

(statearr_35912[(14)] = inst_35772__$1);

(statearr_35912[(17)] = inst_35783);

(statearr_35912[(15)] = inst_35774__$1);

return statearr_35912;
})();
var statearr_35915_37615 = state_35835__$1;
(statearr_35915_37615[(2)] = null);

(statearr_35915_37615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (18))){
var inst_35804 = (state_35835[(2)]);
var state_35835__$1 = state_35835;
var statearr_35917_37617 = state_35835__$1;
(statearr_35917_37617[(2)] = inst_35804);

(statearr_35917_37617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35836 === (8))){
var inst_35773 = (state_35835[(13)]);
var inst_35774 = (state_35835[(15)]);
var inst_35776 = (inst_35774 < inst_35773);
var inst_35778 = inst_35776;
var state_35835__$1 = state_35835;
if(cljs.core.truth_(inst_35778)){
var statearr_35918_37623 = state_35835__$1;
(statearr_35918_37623[(1)] = (10));

} else {
var statearr_35919_37628 = state_35835__$1;
(statearr_35919_37628[(1)] = (11));

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
var statearr_35921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35921[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35921[(1)] = (1));

return statearr_35921;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35835){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35835);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35922){if((e35922 instanceof Object)){
var ex__34210__auto__ = e35922;
var statearr_35923_37633 = state_35835;
(statearr_35923_37633[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37637 = state_35835;
state_35835 = G__37637;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35925 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35925[(6)] = c__34274__auto___37520);

return statearr_35925;
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
var G__35932 = arguments.length;
switch (G__35932) {
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
var G__35946 = arguments.length;
switch (G__35946) {
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
var c__34274__auto___37671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36013){
var state_val_36014 = (state_36013[(1)]);
if((state_val_36014 === (7))){
var state_36013__$1 = state_36013;
var statearr_36020_37679 = state_36013__$1;
(statearr_36020_37679[(2)] = null);

(statearr_36020_37679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (1))){
var state_36013__$1 = state_36013;
var statearr_36023_37682 = state_36013__$1;
(statearr_36023_37682[(2)] = null);

(statearr_36023_37682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (4))){
var inst_35967 = (state_36013[(7)]);
var inst_35969 = (inst_35967 < cnt);
var state_36013__$1 = state_36013;
if(cljs.core.truth_(inst_35969)){
var statearr_36024_37684 = state_36013__$1;
(statearr_36024_37684[(1)] = (6));

} else {
var statearr_36025_37686 = state_36013__$1;
(statearr_36025_37686[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (15))){
var inst_36006 = (state_36013[(2)]);
var state_36013__$1 = state_36013;
var statearr_36028_37688 = state_36013__$1;
(statearr_36028_37688[(2)] = inst_36006);

(statearr_36028_37688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (13))){
var inst_35999 = cljs.core.async.close_BANG_(out);
var state_36013__$1 = state_36013;
var statearr_36030_37695 = state_36013__$1;
(statearr_36030_37695[(2)] = inst_35999);

(statearr_36030_37695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (6))){
var state_36013__$1 = state_36013;
var statearr_36034_37697 = state_36013__$1;
(statearr_36034_37697[(2)] = null);

(statearr_36034_37697[(1)] = (11));


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
var statearr_36044_37701 = state_36013__$1;
(statearr_36044_37701[(1)] = (13));

} else {
var statearr_36045_37705 = state_36013__$1;
(statearr_36045_37705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (2))){
var inst_35966 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35967 = (0);
var state_36013__$1 = (function (){var statearr_36047 = state_36013;
(statearr_36047[(7)] = inst_35967);

(statearr_36047[(9)] = inst_35966);

return statearr_36047;
})();
var statearr_36049_37712 = state_36013__$1;
(statearr_36049_37712[(2)] = null);

(statearr_36049_37712[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (11))){
var inst_35967 = (state_36013[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36013,(10),Object,null,(9));
var inst_35979 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35967) : chs__$1.call(null,inst_35967));
var inst_35980 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35967) : done.call(null,inst_35967));
var inst_35981 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35979,inst_35980);
var state_36013__$1 = state_36013;
var statearr_36052_37715 = state_36013__$1;
(statearr_36052_37715[(2)] = inst_35981);


cljs.core.async.impl.ioc_helpers.process_exception(state_36013__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (9))){
var inst_35967 = (state_36013[(7)]);
var inst_35983 = (state_36013[(2)]);
var inst_35984 = (inst_35967 + (1));
var inst_35967__$1 = inst_35984;
var state_36013__$1 = (function (){var statearr_36056 = state_36013;
(statearr_36056[(7)] = inst_35967__$1);

(statearr_36056[(10)] = inst_35983);

return statearr_36056;
})();
var statearr_36057_37724 = state_36013__$1;
(statearr_36057_37724[(2)] = null);

(statearr_36057_37724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (5))){
var inst_35992 = (state_36013[(2)]);
var state_36013__$1 = (function (){var statearr_36059 = state_36013;
(statearr_36059[(11)] = inst_35992);

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
var state_36013__$1 = (function (){var statearr_36063 = state_36013;
(statearr_36063[(12)] = inst_36003);

return statearr_36063;
})();
var statearr_36065_37731 = state_36013__$1;
(statearr_36065_37731[(2)] = null);

(statearr_36065_37731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (10))){
var inst_35973 = (state_36013[(2)]);
var inst_35974 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36013__$1 = (function (){var statearr_36067 = state_36013;
(statearr_36067[(13)] = inst_35973);

return statearr_36067;
})();
var statearr_36068_37738 = state_36013__$1;
(statearr_36068_37738[(2)] = inst_35974);


cljs.core.async.impl.ioc_helpers.process_exception(state_36013__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36014 === (8))){
var inst_35990 = (state_36013[(2)]);
var state_36013__$1 = state_36013;
var statearr_36071_37740 = state_36013__$1;
(statearr_36071_37740[(2)] = inst_35990);

(statearr_36071_37740[(1)] = (5));


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
var statearr_36075_37750 = state_36013;
(statearr_36075_37750[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36074;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37752 = state_36013;
state_36013 = G__37752;
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
(statearr_36078[(6)] = c__34274__auto___37671);

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
var G__36099 = arguments.length;
switch (G__36099) {
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
var c__34274__auto___37761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36144){
var state_val_36145 = (state_36144[(1)]);
if((state_val_36145 === (7))){
var inst_36119 = (state_36144[(7)]);
var inst_36118 = (state_36144[(8)]);
var inst_36118__$1 = (state_36144[(2)]);
var inst_36119__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36118__$1,(0),null);
var inst_36120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36118__$1,(1),null);
var inst_36121 = (inst_36119__$1 == null);
var state_36144__$1 = (function (){var statearr_36151 = state_36144;
(statearr_36151[(9)] = inst_36120);

(statearr_36151[(7)] = inst_36119__$1);

(statearr_36151[(8)] = inst_36118__$1);

return statearr_36151;
})();
if(cljs.core.truth_(inst_36121)){
var statearr_36152_37766 = state_36144__$1;
(statearr_36152_37766[(1)] = (8));

} else {
var statearr_36153_37767 = state_36144__$1;
(statearr_36153_37767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (1))){
var inst_36105 = cljs.core.vec(chs);
var inst_36106 = inst_36105;
var state_36144__$1 = (function (){var statearr_36154 = state_36144;
(statearr_36154[(10)] = inst_36106);

return statearr_36154;
})();
var statearr_36155_37768 = state_36144__$1;
(statearr_36155_37768[(2)] = null);

(statearr_36155_37768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (4))){
var inst_36106 = (state_36144[(10)]);
var state_36144__$1 = state_36144;
return cljs.core.async.ioc_alts_BANG_(state_36144__$1,(7),inst_36106);
} else {
if((state_val_36145 === (6))){
var inst_36139 = (state_36144[(2)]);
var state_36144__$1 = state_36144;
var statearr_36160_37771 = state_36144__$1;
(statearr_36160_37771[(2)] = inst_36139);

(statearr_36160_37771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (3))){
var inst_36141 = (state_36144[(2)]);
var state_36144__$1 = state_36144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36144__$1,inst_36141);
} else {
if((state_val_36145 === (2))){
var inst_36106 = (state_36144[(10)]);
var inst_36109 = cljs.core.count(inst_36106);
var inst_36111 = (inst_36109 > (0));
var state_36144__$1 = state_36144;
if(cljs.core.truth_(inst_36111)){
var statearr_36162_37772 = state_36144__$1;
(statearr_36162_37772[(1)] = (4));

} else {
var statearr_36163_37773 = state_36144__$1;
(statearr_36163_37773[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (11))){
var inst_36106 = (state_36144[(10)]);
var inst_36132 = (state_36144[(2)]);
var tmp36161 = inst_36106;
var inst_36106__$1 = tmp36161;
var state_36144__$1 = (function (){var statearr_36164 = state_36144;
(statearr_36164[(11)] = inst_36132);

(statearr_36164[(10)] = inst_36106__$1);

return statearr_36164;
})();
var statearr_36165_37776 = state_36144__$1;
(statearr_36165_37776[(2)] = null);

(statearr_36165_37776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (9))){
var inst_36119 = (state_36144[(7)]);
var state_36144__$1 = state_36144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36144__$1,(11),out,inst_36119);
} else {
if((state_val_36145 === (5))){
var inst_36137 = cljs.core.async.close_BANG_(out);
var state_36144__$1 = state_36144;
var statearr_36166_37781 = state_36144__$1;
(statearr_36166_37781[(2)] = inst_36137);

(statearr_36166_37781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (10))){
var inst_36135 = (state_36144[(2)]);
var state_36144__$1 = state_36144;
var statearr_36167_37782 = state_36144__$1;
(statearr_36167_37782[(2)] = inst_36135);

(statearr_36167_37782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36145 === (8))){
var inst_36120 = (state_36144[(9)]);
var inst_36119 = (state_36144[(7)]);
var inst_36106 = (state_36144[(10)]);
var inst_36118 = (state_36144[(8)]);
var inst_36127 = (function (){var cs = inst_36106;
var vec__36114 = inst_36118;
var v = inst_36119;
var c = inst_36120;
return (function (p1__36080_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36080_SHARP_);
});
})();
var inst_36128 = cljs.core.filterv(inst_36127,inst_36106);
var inst_36106__$1 = inst_36128;
var state_36144__$1 = (function (){var statearr_36168 = state_36144;
(statearr_36168[(10)] = inst_36106__$1);

return statearr_36168;
})();
var statearr_36169_37786 = state_36144__$1;
(statearr_36169_37786[(2)] = null);

(statearr_36169_37786[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36144){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36144);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36172){if((e36172 instanceof Object)){
var ex__34210__auto__ = e36172;
var statearr_36173_37788 = state_36144;
(statearr_36173_37788[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36172;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37790 = state_36144;
state_36144 = G__37790;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36174 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36174[(6)] = c__34274__auto___37761);

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
var G__36185 = arguments.length;
switch (G__36185) {
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
var c__34274__auto___37796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36214){
var state_val_36215 = (state_36214[(1)]);
if((state_val_36215 === (7))){
var inst_36194 = (state_36214[(7)]);
var inst_36194__$1 = (state_36214[(2)]);
var inst_36195 = (inst_36194__$1 == null);
var inst_36196 = cljs.core.not(inst_36195);
var state_36214__$1 = (function (){var statearr_36219 = state_36214;
(statearr_36219[(7)] = inst_36194__$1);

return statearr_36219;
})();
if(inst_36196){
var statearr_36220_37803 = state_36214__$1;
(statearr_36220_37803[(1)] = (8));

} else {
var statearr_36221_37804 = state_36214__$1;
(statearr_36221_37804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (1))){
var inst_36187 = (0);
var state_36214__$1 = (function (){var statearr_36222 = state_36214;
(statearr_36222[(8)] = inst_36187);

return statearr_36222;
})();
var statearr_36223_37808 = state_36214__$1;
(statearr_36223_37808[(2)] = null);

(statearr_36223_37808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (4))){
var state_36214__$1 = state_36214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36214__$1,(7),ch);
} else {
if((state_val_36215 === (6))){
var inst_36208 = (state_36214[(2)]);
var state_36214__$1 = state_36214;
var statearr_36228_37810 = state_36214__$1;
(statearr_36228_37810[(2)] = inst_36208);

(statearr_36228_37810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (3))){
var inst_36211 = (state_36214[(2)]);
var inst_36212 = cljs.core.async.close_BANG_(out);
var state_36214__$1 = (function (){var statearr_36230 = state_36214;
(statearr_36230[(9)] = inst_36211);

return statearr_36230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36214__$1,inst_36212);
} else {
if((state_val_36215 === (2))){
var inst_36187 = (state_36214[(8)]);
var inst_36189 = (inst_36187 < n);
var state_36214__$1 = state_36214;
if(cljs.core.truth_(inst_36189)){
var statearr_36231_37815 = state_36214__$1;
(statearr_36231_37815[(1)] = (4));

} else {
var statearr_36232_37816 = state_36214__$1;
(statearr_36232_37816[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (11))){
var inst_36187 = (state_36214[(8)]);
var inst_36199 = (state_36214[(2)]);
var inst_36200 = (inst_36187 + (1));
var inst_36187__$1 = inst_36200;
var state_36214__$1 = (function (){var statearr_36233 = state_36214;
(statearr_36233[(10)] = inst_36199);

(statearr_36233[(8)] = inst_36187__$1);

return statearr_36233;
})();
var statearr_36234_37822 = state_36214__$1;
(statearr_36234_37822[(2)] = null);

(statearr_36234_37822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (9))){
var state_36214__$1 = state_36214;
var statearr_36235_37826 = state_36214__$1;
(statearr_36235_37826[(2)] = null);

(statearr_36235_37826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (5))){
var state_36214__$1 = state_36214;
var statearr_36236_37828 = state_36214__$1;
(statearr_36236_37828[(2)] = null);

(statearr_36236_37828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (10))){
var inst_36205 = (state_36214[(2)]);
var state_36214__$1 = state_36214;
var statearr_36237_37830 = state_36214__$1;
(statearr_36237_37830[(2)] = inst_36205);

(statearr_36237_37830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36215 === (8))){
var inst_36194 = (state_36214[(7)]);
var state_36214__$1 = state_36214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36214__$1,(11),out,inst_36194);
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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36214){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36214);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36239){if((e36239 instanceof Object)){
var ex__34210__auto__ = e36239;
var statearr_36240_37839 = state_36214;
(statearr_36240_37839[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37841 = state_36214;
state_36214 = G__37841;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36245 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36245[(6)] = c__34274__auto___37796);

return statearr_36245;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36259 = (function (f,ch,meta36251,_,fn1,meta36260){
this.f = f;
this.ch = ch;
this.meta36251 = meta36251;
this._ = _;
this.fn1 = fn1;
this.meta36260 = meta36260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36261,meta36260__$1){
var self__ = this;
var _36261__$1 = this;
return (new cljs.core.async.t_cljs$core$async36259(self__.f,self__.ch,self__.meta36251,self__._,self__.fn1,meta36260__$1));
}));

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36261){
var self__ = this;
var _36261__$1 = this;
return self__.meta36260;
}));

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36249_SHARP_){
var G__36265 = (((p1__36249_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36249_SHARP_) : self__.f.call(null,p1__36249_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36265) : f1.call(null,G__36265));
});
}));

(cljs.core.async.t_cljs$core$async36259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36251","meta36251",1064451899,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36250","cljs.core.async/t_cljs$core$async36250",1087524413,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36260","meta36260",-1600977011,null)], null);
}));

(cljs.core.async.t_cljs$core$async36259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36259");

(cljs.core.async.t_cljs$core$async36259.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36259.
 */
cljs.core.async.__GT_t_cljs$core$async36259 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36259(f__$1,ch__$1,meta36251__$1,___$2,fn1__$1,meta36260){
return (new cljs.core.async.t_cljs$core$async36259(f__$1,ch__$1,meta36251__$1,___$2,fn1__$1,meta36260));
});

}

return (new cljs.core.async.t_cljs$core$async36259(self__.f,self__.ch,self__.meta36251,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36272 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36272) : self__.f.call(null,G__36272));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36288 = (function (f,ch,meta36289){
this.f = f;
this.ch = ch;
this.meta36289 = meta36289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36290,meta36289__$1){
var self__ = this;
var _36290__$1 = this;
return (new cljs.core.async.t_cljs$core$async36288(self__.f,self__.ch,meta36289__$1));
}));

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36290){
var self__ = this;
var _36290__$1 = this;
return self__.meta36289;
}));

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36289","meta36289",1706093421,null)], null);
}));

(cljs.core.async.t_cljs$core$async36288.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36288");

(cljs.core.async.t_cljs$core$async36288.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36288");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36288.
 */
cljs.core.async.__GT_t_cljs$core$async36288 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36288(f__$1,ch__$1,meta36289){
return (new cljs.core.async.t_cljs$core$async36288(f__$1,ch__$1,meta36289));
});

}

return (new cljs.core.async.t_cljs$core$async36288(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36300 = (function (p,ch,meta36301){
this.p = p;
this.ch = ch;
this.meta36301 = meta36301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36302,meta36301__$1){
var self__ = this;
var _36302__$1 = this;
return (new cljs.core.async.t_cljs$core$async36300(self__.p,self__.ch,meta36301__$1));
}));

(cljs.core.async.t_cljs$core$async36300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36302){
var self__ = this;
var _36302__$1 = this;
return self__.meta36301;
}));

(cljs.core.async.t_cljs$core$async36300.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36300.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36300.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36300.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36300.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36300.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36300.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36301","meta36301",1043882078,null)], null);
}));

(cljs.core.async.t_cljs$core$async36300.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36300");

(cljs.core.async.t_cljs$core$async36300.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36300");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36300.
 */
cljs.core.async.__GT_t_cljs$core$async36300 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36300(p__$1,ch__$1,meta36301){
return (new cljs.core.async.t_cljs$core$async36300(p__$1,ch__$1,meta36301));
});

}

return (new cljs.core.async.t_cljs$core$async36300(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36321 = arguments.length;
switch (G__36321) {
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
var c__34274__auto___37907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36347){
var state_val_36348 = (state_36347[(1)]);
if((state_val_36348 === (7))){
var inst_36342 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
var statearr_36352_37908 = state_36347__$1;
(statearr_36352_37908[(2)] = inst_36342);

(statearr_36352_37908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (1))){
var state_36347__$1 = state_36347;
var statearr_36353_37911 = state_36347__$1;
(statearr_36353_37911[(2)] = null);

(statearr_36353_37911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (4))){
var inst_36326 = (state_36347[(7)]);
var inst_36326__$1 = (state_36347[(2)]);
var inst_36327 = (inst_36326__$1 == null);
var state_36347__$1 = (function (){var statearr_36359 = state_36347;
(statearr_36359[(7)] = inst_36326__$1);

return statearr_36359;
})();
if(cljs.core.truth_(inst_36327)){
var statearr_36363_37917 = state_36347__$1;
(statearr_36363_37917[(1)] = (5));

} else {
var statearr_36364_37918 = state_36347__$1;
(statearr_36364_37918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (6))){
var inst_36326 = (state_36347[(7)]);
var inst_36331 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36326) : p.call(null,inst_36326));
var state_36347__$1 = state_36347;
if(cljs.core.truth_(inst_36331)){
var statearr_36365_37922 = state_36347__$1;
(statearr_36365_37922[(1)] = (8));

} else {
var statearr_36366_37924 = state_36347__$1;
(statearr_36366_37924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (3))){
var inst_36344 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36347__$1,inst_36344);
} else {
if((state_val_36348 === (2))){
var state_36347__$1 = state_36347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36347__$1,(4),ch);
} else {
if((state_val_36348 === (11))){
var inst_36336 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
var statearr_36368_37929 = state_36347__$1;
(statearr_36368_37929[(2)] = inst_36336);

(statearr_36368_37929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (9))){
var state_36347__$1 = state_36347;
var statearr_36370_37930 = state_36347__$1;
(statearr_36370_37930[(2)] = null);

(statearr_36370_37930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (5))){
var inst_36329 = cljs.core.async.close_BANG_(out);
var state_36347__$1 = state_36347;
var statearr_36376_37934 = state_36347__$1;
(statearr_36376_37934[(2)] = inst_36329);

(statearr_36376_37934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (10))){
var inst_36339 = (state_36347[(2)]);
var state_36347__$1 = (function (){var statearr_36377 = state_36347;
(statearr_36377[(8)] = inst_36339);

return statearr_36377;
})();
var statearr_36380_37937 = state_36347__$1;
(statearr_36380_37937[(2)] = null);

(statearr_36380_37937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (8))){
var inst_36326 = (state_36347[(7)]);
var state_36347__$1 = state_36347;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36347__$1,(11),out,inst_36326);
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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36347){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36347);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36384){if((e36384 instanceof Object)){
var ex__34210__auto__ = e36384;
var statearr_36385_37945 = state_36347;
(statearr_36385_37945[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36384;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37947 = state_36347;
state_36347 = G__37947;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36387 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36387[(6)] = c__34274__auto___37907);

return statearr_36387;
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
var G__36396 = arguments.length;
switch (G__36396) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36472){
var state_val_36473 = (state_36472[(1)]);
if((state_val_36473 === (7))){
var inst_36466 = (state_36472[(2)]);
var state_36472__$1 = state_36472;
var statearr_36485_37957 = state_36472__$1;
(statearr_36485_37957[(2)] = inst_36466);

(statearr_36485_37957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (20))){
var inst_36436 = (state_36472[(7)]);
var inst_36447 = (state_36472[(2)]);
var inst_36448 = cljs.core.next(inst_36436);
var inst_36415 = inst_36448;
var inst_36416 = null;
var inst_36417 = (0);
var inst_36418 = (0);
var state_36472__$1 = (function (){var statearr_36487 = state_36472;
(statearr_36487[(8)] = inst_36418);

(statearr_36487[(9)] = inst_36447);

(statearr_36487[(10)] = inst_36415);

(statearr_36487[(11)] = inst_36416);

(statearr_36487[(12)] = inst_36417);

return statearr_36487;
})();
var statearr_36488_37961 = state_36472__$1;
(statearr_36488_37961[(2)] = null);

(statearr_36488_37961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (1))){
var state_36472__$1 = state_36472;
var statearr_36490_37964 = state_36472__$1;
(statearr_36490_37964[(2)] = null);

(statearr_36490_37964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (4))){
var inst_36404 = (state_36472[(13)]);
var inst_36404__$1 = (state_36472[(2)]);
var inst_36405 = (inst_36404__$1 == null);
var state_36472__$1 = (function (){var statearr_36491 = state_36472;
(statearr_36491[(13)] = inst_36404__$1);

return statearr_36491;
})();
if(cljs.core.truth_(inst_36405)){
var statearr_36492_37966 = state_36472__$1;
(statearr_36492_37966[(1)] = (5));

} else {
var statearr_36493_37967 = state_36472__$1;
(statearr_36493_37967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (15))){
var state_36472__$1 = state_36472;
var statearr_36499_37970 = state_36472__$1;
(statearr_36499_37970[(2)] = null);

(statearr_36499_37970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (21))){
var state_36472__$1 = state_36472;
var statearr_36500_37973 = state_36472__$1;
(statearr_36500_37973[(2)] = null);

(statearr_36500_37973[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (13))){
var inst_36418 = (state_36472[(8)]);
var inst_36415 = (state_36472[(10)]);
var inst_36416 = (state_36472[(11)]);
var inst_36417 = (state_36472[(12)]);
var inst_36431 = (state_36472[(2)]);
var inst_36433 = (inst_36418 + (1));
var tmp36495 = inst_36415;
var tmp36496 = inst_36416;
var tmp36497 = inst_36417;
var inst_36415__$1 = tmp36495;
var inst_36416__$1 = tmp36496;
var inst_36417__$1 = tmp36497;
var inst_36418__$1 = inst_36433;
var state_36472__$1 = (function (){var statearr_36503 = state_36472;
(statearr_36503[(8)] = inst_36418__$1);

(statearr_36503[(10)] = inst_36415__$1);

(statearr_36503[(14)] = inst_36431);

(statearr_36503[(11)] = inst_36416__$1);

(statearr_36503[(12)] = inst_36417__$1);

return statearr_36503;
})();
var statearr_36507_37979 = state_36472__$1;
(statearr_36507_37979[(2)] = null);

(statearr_36507_37979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (22))){
var state_36472__$1 = state_36472;
var statearr_36510_37980 = state_36472__$1;
(statearr_36510_37980[(2)] = null);

(statearr_36510_37980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (6))){
var inst_36404 = (state_36472[(13)]);
var inst_36413 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36404) : f.call(null,inst_36404));
var inst_36414 = cljs.core.seq(inst_36413);
var inst_36415 = inst_36414;
var inst_36416 = null;
var inst_36417 = (0);
var inst_36418 = (0);
var state_36472__$1 = (function (){var statearr_36516 = state_36472;
(statearr_36516[(8)] = inst_36418);

(statearr_36516[(10)] = inst_36415);

(statearr_36516[(11)] = inst_36416);

(statearr_36516[(12)] = inst_36417);

return statearr_36516;
})();
var statearr_36517_37984 = state_36472__$1;
(statearr_36517_37984[(2)] = null);

(statearr_36517_37984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (17))){
var inst_36436 = (state_36472[(7)]);
var inst_36440 = cljs.core.chunk_first(inst_36436);
var inst_36441 = cljs.core.chunk_rest(inst_36436);
var inst_36442 = cljs.core.count(inst_36440);
var inst_36415 = inst_36441;
var inst_36416 = inst_36440;
var inst_36417 = inst_36442;
var inst_36418 = (0);
var state_36472__$1 = (function (){var statearr_36519 = state_36472;
(statearr_36519[(8)] = inst_36418);

(statearr_36519[(10)] = inst_36415);

(statearr_36519[(11)] = inst_36416);

(statearr_36519[(12)] = inst_36417);

return statearr_36519;
})();
var statearr_36520_37992 = state_36472__$1;
(statearr_36520_37992[(2)] = null);

(statearr_36520_37992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (3))){
var inst_36468 = (state_36472[(2)]);
var state_36472__$1 = state_36472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36472__$1,inst_36468);
} else {
if((state_val_36473 === (12))){
var inst_36456 = (state_36472[(2)]);
var state_36472__$1 = state_36472;
var statearr_36525_38002 = state_36472__$1;
(statearr_36525_38002[(2)] = inst_36456);

(statearr_36525_38002[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (2))){
var state_36472__$1 = state_36472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36472__$1,(4),in$);
} else {
if((state_val_36473 === (23))){
var inst_36464 = (state_36472[(2)]);
var state_36472__$1 = state_36472;
var statearr_36526_38003 = state_36472__$1;
(statearr_36526_38003[(2)] = inst_36464);

(statearr_36526_38003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (19))){
var inst_36451 = (state_36472[(2)]);
var state_36472__$1 = state_36472;
var statearr_36533_38004 = state_36472__$1;
(statearr_36533_38004[(2)] = inst_36451);

(statearr_36533_38004[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (11))){
var inst_36415 = (state_36472[(10)]);
var inst_36436 = (state_36472[(7)]);
var inst_36436__$1 = cljs.core.seq(inst_36415);
var state_36472__$1 = (function (){var statearr_36534 = state_36472;
(statearr_36534[(7)] = inst_36436__$1);

return statearr_36534;
})();
if(inst_36436__$1){
var statearr_36535_38006 = state_36472__$1;
(statearr_36535_38006[(1)] = (14));

} else {
var statearr_36536_38008 = state_36472__$1;
(statearr_36536_38008[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (9))){
var inst_36458 = (state_36472[(2)]);
var inst_36459 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36472__$1 = (function (){var statearr_36540 = state_36472;
(statearr_36540[(15)] = inst_36458);

return statearr_36540;
})();
if(cljs.core.truth_(inst_36459)){
var statearr_36544_38011 = state_36472__$1;
(statearr_36544_38011[(1)] = (21));

} else {
var statearr_36545_38012 = state_36472__$1;
(statearr_36545_38012[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (5))){
var inst_36407 = cljs.core.async.close_BANG_(out);
var state_36472__$1 = state_36472;
var statearr_36549_38013 = state_36472__$1;
(statearr_36549_38013[(2)] = inst_36407);

(statearr_36549_38013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (14))){
var inst_36436 = (state_36472[(7)]);
var inst_36438 = cljs.core.chunked_seq_QMARK_(inst_36436);
var state_36472__$1 = state_36472;
if(inst_36438){
var statearr_36551_38016 = state_36472__$1;
(statearr_36551_38016[(1)] = (17));

} else {
var statearr_36552_38018 = state_36472__$1;
(statearr_36552_38018[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (16))){
var inst_36454 = (state_36472[(2)]);
var state_36472__$1 = state_36472;
var statearr_36553_38019 = state_36472__$1;
(statearr_36553_38019[(2)] = inst_36454);

(statearr_36553_38019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36473 === (10))){
var inst_36418 = (state_36472[(8)]);
var inst_36416 = (state_36472[(11)]);
var inst_36428 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36416,inst_36418);
var state_36472__$1 = state_36472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36472__$1,(13),out,inst_36428);
} else {
if((state_val_36473 === (18))){
var inst_36436 = (state_36472[(7)]);
var inst_36445 = cljs.core.first(inst_36436);
var state_36472__$1 = state_36472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36472__$1,(20),out,inst_36445);
} else {
if((state_val_36473 === (8))){
var inst_36418 = (state_36472[(8)]);
var inst_36417 = (state_36472[(12)]);
var inst_36425 = (inst_36418 < inst_36417);
var inst_36426 = inst_36425;
var state_36472__$1 = state_36472;
if(cljs.core.truth_(inst_36426)){
var statearr_36556_38022 = state_36472__$1;
(statearr_36556_38022[(1)] = (10));

} else {
var statearr_36557_38023 = state_36472__$1;
(statearr_36557_38023[(1)] = (11));

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
var statearr_36560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36560[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36560[(1)] = (1));

return statearr_36560;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36472){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36472);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36562){if((e36562 instanceof Object)){
var ex__34210__auto__ = e36562;
var statearr_36563_38025 = state_36472;
(statearr_36563_38025[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36562;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38027 = state_36472;
state_36472 = G__38027;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36472){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36566 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36566[(6)] = c__34274__auto__);

return statearr_36566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36572 = arguments.length;
switch (G__36572) {
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
var G__36575 = arguments.length;
switch (G__36575) {
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
var G__36582 = arguments.length;
switch (G__36582) {
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
var c__34274__auto___38043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36608){
var state_val_36609 = (state_36608[(1)]);
if((state_val_36609 === (7))){
var inst_36603 = (state_36608[(2)]);
var state_36608__$1 = state_36608;
var statearr_36611_38046 = state_36608__$1;
(statearr_36611_38046[(2)] = inst_36603);

(statearr_36611_38046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (1))){
var inst_36585 = null;
var state_36608__$1 = (function (){var statearr_36613 = state_36608;
(statearr_36613[(7)] = inst_36585);

return statearr_36613;
})();
var statearr_36614_38049 = state_36608__$1;
(statearr_36614_38049[(2)] = null);

(statearr_36614_38049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (4))){
var inst_36588 = (state_36608[(8)]);
var inst_36588__$1 = (state_36608[(2)]);
var inst_36589 = (inst_36588__$1 == null);
var inst_36590 = cljs.core.not(inst_36589);
var state_36608__$1 = (function (){var statearr_36615 = state_36608;
(statearr_36615[(8)] = inst_36588__$1);

return statearr_36615;
})();
if(inst_36590){
var statearr_36617_38050 = state_36608__$1;
(statearr_36617_38050[(1)] = (5));

} else {
var statearr_36618_38051 = state_36608__$1;
(statearr_36618_38051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (6))){
var state_36608__$1 = state_36608;
var statearr_36619_38052 = state_36608__$1;
(statearr_36619_38052[(2)] = null);

(statearr_36619_38052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (3))){
var inst_36605 = (state_36608[(2)]);
var inst_36606 = cljs.core.async.close_BANG_(out);
var state_36608__$1 = (function (){var statearr_36621 = state_36608;
(statearr_36621[(9)] = inst_36605);

return statearr_36621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36608__$1,inst_36606);
} else {
if((state_val_36609 === (2))){
var state_36608__$1 = state_36608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36608__$1,(4),ch);
} else {
if((state_val_36609 === (11))){
var inst_36588 = (state_36608[(8)]);
var inst_36597 = (state_36608[(2)]);
var inst_36585 = inst_36588;
var state_36608__$1 = (function (){var statearr_36622 = state_36608;
(statearr_36622[(7)] = inst_36585);

(statearr_36622[(10)] = inst_36597);

return statearr_36622;
})();
var statearr_36623_38053 = state_36608__$1;
(statearr_36623_38053[(2)] = null);

(statearr_36623_38053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (9))){
var inst_36588 = (state_36608[(8)]);
var state_36608__$1 = state_36608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36608__$1,(11),out,inst_36588);
} else {
if((state_val_36609 === (5))){
var inst_36588 = (state_36608[(8)]);
var inst_36585 = (state_36608[(7)]);
var inst_36592 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36588,inst_36585);
var state_36608__$1 = state_36608;
if(inst_36592){
var statearr_36626_38054 = state_36608__$1;
(statearr_36626_38054[(1)] = (8));

} else {
var statearr_36627_38055 = state_36608__$1;
(statearr_36627_38055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (10))){
var inst_36600 = (state_36608[(2)]);
var state_36608__$1 = state_36608;
var statearr_36628_38056 = state_36608__$1;
(statearr_36628_38056[(2)] = inst_36600);

(statearr_36628_38056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36609 === (8))){
var inst_36585 = (state_36608[(7)]);
var tmp36625 = inst_36585;
var inst_36585__$1 = tmp36625;
var state_36608__$1 = (function (){var statearr_36630 = state_36608;
(statearr_36630[(7)] = inst_36585__$1);

return statearr_36630;
})();
var statearr_36631_38057 = state_36608__$1;
(statearr_36631_38057[(2)] = null);

(statearr_36631_38057[(1)] = (2));


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
var statearr_36633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36633[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36633[(1)] = (1));

return statearr_36633;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36608){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36608);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36634){if((e36634 instanceof Object)){
var ex__34210__auto__ = e36634;
var statearr_36635_38058 = state_36608;
(statearr_36635_38058[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36634;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38059 = state_36608;
state_36608 = G__38059;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36637 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36637[(6)] = c__34274__auto___38043);

return statearr_36637;
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
var G__36640 = arguments.length;
switch (G__36640) {
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
var c__34274__auto___38064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36681){
var state_val_36682 = (state_36681[(1)]);
if((state_val_36682 === (7))){
var inst_36677 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36684_38065 = state_36681__$1;
(statearr_36684_38065[(2)] = inst_36677);

(statearr_36684_38065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (1))){
var inst_36643 = (new Array(n));
var inst_36644 = inst_36643;
var inst_36645 = (0);
var state_36681__$1 = (function (){var statearr_36685 = state_36681;
(statearr_36685[(7)] = inst_36645);

(statearr_36685[(8)] = inst_36644);

return statearr_36685;
})();
var statearr_36686_38066 = state_36681__$1;
(statearr_36686_38066[(2)] = null);

(statearr_36686_38066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (4))){
var inst_36648 = (state_36681[(9)]);
var inst_36648__$1 = (state_36681[(2)]);
var inst_36649 = (inst_36648__$1 == null);
var inst_36650 = cljs.core.not(inst_36649);
var state_36681__$1 = (function (){var statearr_36688 = state_36681;
(statearr_36688[(9)] = inst_36648__$1);

return statearr_36688;
})();
if(inst_36650){
var statearr_36689_38071 = state_36681__$1;
(statearr_36689_38071[(1)] = (5));

} else {
var statearr_36690_38072 = state_36681__$1;
(statearr_36690_38072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (15))){
var inst_36671 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36692_38073 = state_36681__$1;
(statearr_36692_38073[(2)] = inst_36671);

(statearr_36692_38073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (13))){
var state_36681__$1 = state_36681;
var statearr_36693_38074 = state_36681__$1;
(statearr_36693_38074[(2)] = null);

(statearr_36693_38074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (6))){
var inst_36645 = (state_36681[(7)]);
var inst_36666 = (inst_36645 > (0));
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36666)){
var statearr_36694_38075 = state_36681__$1;
(statearr_36694_38075[(1)] = (12));

} else {
var statearr_36696_38076 = state_36681__$1;
(statearr_36696_38076[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (3))){
var inst_36679 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36681__$1,inst_36679);
} else {
if((state_val_36682 === (12))){
var inst_36644 = (state_36681[(8)]);
var inst_36669 = cljs.core.vec(inst_36644);
var state_36681__$1 = state_36681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36681__$1,(15),out,inst_36669);
} else {
if((state_val_36682 === (2))){
var state_36681__$1 = state_36681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36681__$1,(4),ch);
} else {
if((state_val_36682 === (11))){
var inst_36660 = (state_36681[(2)]);
var inst_36661 = (new Array(n));
var inst_36644 = inst_36661;
var inst_36645 = (0);
var state_36681__$1 = (function (){var statearr_36698 = state_36681;
(statearr_36698[(7)] = inst_36645);

(statearr_36698[(8)] = inst_36644);

(statearr_36698[(10)] = inst_36660);

return statearr_36698;
})();
var statearr_36699_38078 = state_36681__$1;
(statearr_36699_38078[(2)] = null);

(statearr_36699_38078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (9))){
var inst_36644 = (state_36681[(8)]);
var inst_36658 = cljs.core.vec(inst_36644);
var state_36681__$1 = state_36681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36681__$1,(11),out,inst_36658);
} else {
if((state_val_36682 === (5))){
var inst_36653 = (state_36681[(11)]);
var inst_36645 = (state_36681[(7)]);
var inst_36644 = (state_36681[(8)]);
var inst_36648 = (state_36681[(9)]);
var inst_36652 = (inst_36644[inst_36645] = inst_36648);
var inst_36653__$1 = (inst_36645 + (1));
var inst_36654 = (inst_36653__$1 < n);
var state_36681__$1 = (function (){var statearr_36701 = state_36681;
(statearr_36701[(11)] = inst_36653__$1);

(statearr_36701[(12)] = inst_36652);

return statearr_36701;
})();
if(cljs.core.truth_(inst_36654)){
var statearr_36702_38083 = state_36681__$1;
(statearr_36702_38083[(1)] = (8));

} else {
var statearr_36703_38084 = state_36681__$1;
(statearr_36703_38084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (14))){
var inst_36674 = (state_36681[(2)]);
var inst_36675 = cljs.core.async.close_BANG_(out);
var state_36681__$1 = (function (){var statearr_36706 = state_36681;
(statearr_36706[(13)] = inst_36674);

return statearr_36706;
})();
var statearr_36707_38085 = state_36681__$1;
(statearr_36707_38085[(2)] = inst_36675);

(statearr_36707_38085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (10))){
var inst_36664 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36708_38086 = state_36681__$1;
(statearr_36708_38086[(2)] = inst_36664);

(statearr_36708_38086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (8))){
var inst_36653 = (state_36681[(11)]);
var inst_36644 = (state_36681[(8)]);
var tmp36705 = inst_36644;
var inst_36644__$1 = tmp36705;
var inst_36645 = inst_36653;
var state_36681__$1 = (function (){var statearr_36710 = state_36681;
(statearr_36710[(7)] = inst_36645);

(statearr_36710[(8)] = inst_36644__$1);

return statearr_36710;
})();
var statearr_36711_38087 = state_36681__$1;
(statearr_36711_38087[(2)] = null);

(statearr_36711_38087[(1)] = (2));


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
var statearr_36713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36713[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36713[(1)] = (1));

return statearr_36713;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36681){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36681);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36720){if((e36720 instanceof Object)){
var ex__34210__auto__ = e36720;
var statearr_36721_38092 = state_36681;
(statearr_36721_38092[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38093 = state_36681;
state_36681 = G__38093;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36722 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36722[(6)] = c__34274__auto___38064);

return statearr_36722;
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
var G__36726 = arguments.length;
switch (G__36726) {
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
var c__34274__auto___38098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36770){
var state_val_36771 = (state_36770[(1)]);
if((state_val_36771 === (7))){
var inst_36766 = (state_36770[(2)]);
var state_36770__$1 = state_36770;
var statearr_36774_38099 = state_36770__$1;
(statearr_36774_38099[(2)] = inst_36766);

(statearr_36774_38099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36771 === (1))){
var inst_36728 = [];
var inst_36729 = inst_36728;
var inst_36730 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36770__$1 = (function (){var statearr_36775 = state_36770;
(statearr_36775[(7)] = inst_36730);

(statearr_36775[(8)] = inst_36729);

return statearr_36775;
})();
var statearr_36776_38101 = state_36770__$1;
(statearr_36776_38101[(2)] = null);

(statearr_36776_38101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36771 === (4))){
var inst_36733 = (state_36770[(9)]);
var inst_36733__$1 = (state_36770[(2)]);
var inst_36734 = (inst_36733__$1 == null);
var inst_36735 = cljs.core.not(inst_36734);
var state_36770__$1 = (function (){var statearr_36778 = state_36770;
(statearr_36778[(9)] = inst_36733__$1);

return statearr_36778;
})();
if(inst_36735){
var statearr_36779_38104 = state_36770__$1;
(statearr_36779_38104[(1)] = (5));

} else {
var statearr_36780_38105 = state_36770__$1;
(statearr_36780_38105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36771 === (15))){
var inst_36760 = (state_36770[(2)]);
var state_36770__$1 = state_36770;
var statearr_36782_38106 = state_36770__$1;
(statearr_36782_38106[(2)] = inst_36760);

(statearr_36782_38106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36771 === (13))){
var state_36770__$1 = state_36770;
var statearr_36783_38111 = state_36770__$1;
(statearr_36783_38111[(2)] = null);

(statearr_36783_38111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36771 === (6))){
var inst_36729 = (state_36770[(8)]);
var inst_36755 = inst_36729.length;
var inst_36756 = (inst_36755 > (0));
var state_36770__$1 = state_36770;
if(cljs.core.truth_(inst_36756)){
var statearr_36784_38112 = state_36770__$1;
(statearr_36784_38112[(1)] = (12));

} else {
var statearr_36786_38113 = state_36770__$1;
(statearr_36786_38113[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36771 === (3))){
var inst_36768 = (state_36770[(2)]);
var state_36770__$1 = state_36770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36770__$1,inst_36768);
} else {
if((state_val_36771 === (12))){
var inst_36729 = (state_36770[(8)]);
var inst_36758 = cljs.core.vec(inst_36729);
var state_36770__$1 = state_36770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36770__$1,(15),out,inst_36758);
} else {
if((state_val_36771 === (2))){
var state_36770__$1 = state_36770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36770__$1,(4),ch);
} else {
if((state_val_36771 === (11))){
var inst_36737 = (state_36770[(10)]);
var inst_36733 = (state_36770[(9)]);
var inst_36748 = (state_36770[(2)]);
var inst_36749 = [];
var inst_36750 = inst_36749.push(inst_36733);
var inst_36729 = inst_36749;
var inst_36730 = inst_36737;
var state_36770__$1 = (function (){var statearr_36788 = state_36770;
(statearr_36788[(7)] = inst_36730);

(statearr_36788[(8)] = inst_36729);

(statearr_36788[(11)] = inst_36748);

(statearr_36788[(12)] = inst_36750);

return statearr_36788;
})();
var statearr_36789_38119 = state_36770__$1;
(statearr_36789_38119[(2)] = null);

(statearr_36789_38119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36771 === (9))){
var inst_36729 = (state_36770[(8)]);
var inst_36746 = cljs.core.vec(inst_36729);
var state_36770__$1 = state_36770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36770__$1,(11),out,inst_36746);
} else {
if((state_val_36771 === (5))){
var inst_36730 = (state_36770[(7)]);
var inst_36737 = (state_36770[(10)]);
var inst_36733 = (state_36770[(9)]);
var inst_36737__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36733) : f.call(null,inst_36733));
var inst_36739 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36737__$1,inst_36730);
var inst_36740 = cljs.core.keyword_identical_QMARK_(inst_36730,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36741 = ((inst_36739) || (inst_36740));
var state_36770__$1 = (function (){var statearr_36791 = state_36770;
(statearr_36791[(10)] = inst_36737__$1);

return statearr_36791;
})();
if(cljs.core.truth_(inst_36741)){
var statearr_36792_38121 = state_36770__$1;
(statearr_36792_38121[(1)] = (8));

} else {
var statearr_36794_38122 = state_36770__$1;
(statearr_36794_38122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36771 === (14))){
var inst_36763 = (state_36770[(2)]);
var inst_36764 = cljs.core.async.close_BANG_(out);
var state_36770__$1 = (function (){var statearr_36796 = state_36770;
(statearr_36796[(13)] = inst_36763);

return statearr_36796;
})();
var statearr_36797_38127 = state_36770__$1;
(statearr_36797_38127[(2)] = inst_36764);

(statearr_36797_38127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36771 === (10))){
var inst_36753 = (state_36770[(2)]);
var state_36770__$1 = state_36770;
var statearr_36799_38128 = state_36770__$1;
(statearr_36799_38128[(2)] = inst_36753);

(statearr_36799_38128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36771 === (8))){
var inst_36737 = (state_36770[(10)]);
var inst_36729 = (state_36770[(8)]);
var inst_36733 = (state_36770[(9)]);
var inst_36743 = inst_36729.push(inst_36733);
var tmp36795 = inst_36729;
var inst_36729__$1 = tmp36795;
var inst_36730 = inst_36737;
var state_36770__$1 = (function (){var statearr_36800 = state_36770;
(statearr_36800[(7)] = inst_36730);

(statearr_36800[(8)] = inst_36729__$1);

(statearr_36800[(14)] = inst_36743);

return statearr_36800;
})();
var statearr_36801_38129 = state_36770__$1;
(statearr_36801_38129[(2)] = null);

(statearr_36801_38129[(1)] = (2));


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
var statearr_36803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36803[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36803[(1)] = (1));

return statearr_36803;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36770){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36770);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36804){if((e36804 instanceof Object)){
var ex__34210__auto__ = e36804;
var statearr_36806_38131 = state_36770;
(statearr_36806_38131[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36804;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38134 = state_36770;
state_36770 = G__38134;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36807 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36807[(6)] = c__34274__auto___38098);

return statearr_36807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
