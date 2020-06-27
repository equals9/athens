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
var val_36836 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36836) : fn1.call(null,val_36836));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36836) : fn1.call(null,val_36836));
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
var n__4666__auto___36842 = n;
var x_36843 = (0);
while(true){
if((x_36843 < n__4666__auto___36842)){
(a[x_36843] = x_36843);

var G__36844 = (x_36843 + (1));
x_36843 = G__36844;
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
var G__36855 = (i + (1));
i = G__36855;
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
var len__4789__auto___36857 = arguments.length;
var i__4790__auto___36858 = (0);
while(true){
if((i__4790__auto___36858 < len__4789__auto___36857)){
args__4795__auto__.push((arguments[i__4790__auto___36858]));

var G__36859 = (i__4790__auto___36858 + (1));
i__4790__auto___36858 = G__36859;
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
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34361){
var G__34362 = cljs.core.first(seq34361);
var seq34361__$1 = cljs.core.next(seq34361);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34362,seq34361__$1);
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
var c__34273__auto___36864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34408){
var state_val_34409 = (state_34408[(1)]);
if((state_val_34409 === (7))){
var inst_34404 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34413_36866 = state_34408__$1;
(statearr_34413_36866[(2)] = inst_34404);

(statearr_34413_36866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (1))){
var state_34408__$1 = state_34408;
var statearr_34414_36867 = state_34408__$1;
(statearr_34414_36867[(2)] = null);

(statearr_34414_36867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (4))){
var inst_34384 = (state_34408[(7)]);
var inst_34384__$1 = (state_34408[(2)]);
var inst_34385 = (inst_34384__$1 == null);
var state_34408__$1 = (function (){var statearr_34415 = state_34408;
(statearr_34415[(7)] = inst_34384__$1);

return statearr_34415;
})();
if(cljs.core.truth_(inst_34385)){
var statearr_34416_36869 = state_34408__$1;
(statearr_34416_36869[(1)] = (5));

} else {
var statearr_34417_36870 = state_34408__$1;
(statearr_34417_36870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (13))){
var state_34408__$1 = state_34408;
var statearr_34418_36871 = state_34408__$1;
(statearr_34418_36871[(2)] = null);

(statearr_34418_36871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (6))){
var inst_34384 = (state_34408[(7)]);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34408__$1,(11),to,inst_34384);
} else {
if((state_val_34409 === (3))){
var inst_34406 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34408__$1,inst_34406);
} else {
if((state_val_34409 === (12))){
var state_34408__$1 = state_34408;
var statearr_34419_36873 = state_34408__$1;
(statearr_34419_36873[(2)] = null);

(statearr_34419_36873[(1)] = (2));


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
var statearr_34420_36875 = state_34408__$1;
(statearr_34420_36875[(1)] = (12));

} else {
var statearr_34421_36876 = state_34408__$1;
(statearr_34421_36876[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (9))){
var state_34408__$1 = state_34408;
var statearr_34422_36877 = state_34408__$1;
(statearr_34422_36877[(2)] = null);

(statearr_34422_36877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (5))){
var state_34408__$1 = state_34408;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34423_36879 = state_34408__$1;
(statearr_34423_36879[(1)] = (8));

} else {
var statearr_34424_36880 = state_34408__$1;
(statearr_34424_36880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (14))){
var inst_34402 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34428_36882 = state_34408__$1;
(statearr_34428_36882[(2)] = inst_34402);

(statearr_34428_36882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (10))){
var inst_34394 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34432_36883 = state_34408__$1;
(statearr_34432_36883[(2)] = inst_34394);

(statearr_34432_36883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (8))){
var inst_34388 = cljs.core.async.close_BANG_(to);
var state_34408__$1 = state_34408;
var statearr_34436_36884 = state_34408__$1;
(statearr_34436_36884[(2)] = inst_34388);

(statearr_34436_36884[(1)] = (10));


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
var statearr_34442_36887 = state_34408;
(statearr_34442_36887[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36888 = state_34408;
state_34408 = G__36888;
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
(statearr_34443[(6)] = c__34273__auto___36864);

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
var c__34273__auto___36891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34457_36895 = state_34452;
(statearr_34457_36895[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36896 = state_34452;
state_34452 = G__36896;
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
(statearr_34458[(6)] = c__34273__auto___36891);

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
var n__4666__auto___36899 = n;
var __36900 = (0);
while(true){
if((__36900 < n__4666__auto___36899)){
var G__34463_36901 = type;
var G__34463_36902__$1 = (((G__34463_36901 instanceof cljs.core.Keyword))?G__34463_36901.fqn:null);
switch (G__34463_36902__$1) {
case "compute":
var c__34273__auto___36904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36900,c__34273__auto___36904,G__34463_36901,G__34463_36902__$1,n__4666__auto___36899,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36900,c__34273__auto___36904,G__34463_36901,G__34463_36902__$1,n__4666__auto___36899,jobs,results,process,async){
return (function (state_34476){
var state_val_34477 = (state_34476[(1)]);
if((state_val_34477 === (1))){
var state_34476__$1 = state_34476;
var statearr_34478_36906 = state_34476__$1;
(statearr_34478_36906[(2)] = null);

(statearr_34478_36906[(1)] = (2));


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
var statearr_34479_36908 = state_34476__$1;
(statearr_34479_36908[(1)] = (5));

} else {
var statearr_34480_36909 = state_34476__$1;
(statearr_34480_36909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (5))){
var state_34476__$1 = state_34476;
var statearr_34481_36911 = state_34476__$1;
(statearr_34481_36911[(2)] = null);

(statearr_34481_36911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (6))){
var state_34476__$1 = state_34476;
var statearr_34482_36912 = state_34476__$1;
(statearr_34482_36912[(2)] = null);

(statearr_34482_36912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34477 === (7))){
var inst_34472 = (state_34476[(2)]);
var state_34476__$1 = state_34476;
var statearr_34483_36914 = state_34476__$1;
(statearr_34483_36914[(2)] = inst_34472);

(statearr_34483_36914[(1)] = (3));


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
});})(__36900,c__34273__auto___36904,G__34463_36901,G__34463_36902__$1,n__4666__auto___36899,jobs,results,process,async))
;
return ((function (__36900,switch__34206__auto__,c__34273__auto___36904,G__34463_36901,G__34463_36902__$1,n__4666__auto___36899,jobs,results,process,async){
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
var statearr_34486_36916 = state_34476;
(statearr_34486_36916[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36918 = state_34476;
state_34476 = G__36918;
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
;})(__36900,switch__34206__auto__,c__34273__auto___36904,G__34463_36901,G__34463_36902__$1,n__4666__auto___36899,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34491 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34491[(6)] = c__34273__auto___36904);

return statearr_34491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36900,c__34273__auto___36904,G__34463_36901,G__34463_36902__$1,n__4666__auto___36899,jobs,results,process,async))
);


break;
case "async":
var c__34273__auto___36920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36900,c__34273__auto___36920,G__34463_36901,G__34463_36902__$1,n__4666__auto___36899,jobs,results,process,async){
return (function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = ((function (__36900,c__34273__auto___36920,G__34463_36901,G__34463_36902__$1,n__4666__auto___36899,jobs,results,process,async){
return (function (state_34504){
var state_val_34505 = (state_34504[(1)]);
if((state_val_34505 === (1))){
var state_34504__$1 = state_34504;
var statearr_34507_36924 = state_34504__$1;
(statearr_34507_36924[(2)] = null);

(statearr_34507_36924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (2))){
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34504__$1,(4),jobs);
} else {
if((state_val_34505 === (3))){
var inst_34502 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34504__$1,inst_34502);
} else {
if((state_val_34505 === (4))){
var inst_34494 = (state_34504[(2)]);
var inst_34495 = async(inst_34494);
var state_34504__$1 = state_34504;
if(cljs.core.truth_(inst_34495)){
var statearr_34508_36926 = state_34504__$1;
(statearr_34508_36926[(1)] = (5));

} else {
var statearr_34509_36927 = state_34504__$1;
(statearr_34509_36927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (5))){
var state_34504__$1 = state_34504;
var statearr_34510_36928 = state_34504__$1;
(statearr_34510_36928[(2)] = null);

(statearr_34510_36928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (6))){
var state_34504__$1 = state_34504;
var statearr_34511_36930 = state_34504__$1;
(statearr_34511_36930[(2)] = null);

(statearr_34511_36930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34505 === (7))){
var inst_34500 = (state_34504[(2)]);
var state_34504__$1 = state_34504;
var statearr_34512_36932 = state_34504__$1;
(statearr_34512_36932[(2)] = inst_34500);

(statearr_34512_36932[(1)] = (3));


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
});})(__36900,c__34273__auto___36920,G__34463_36901,G__34463_36902__$1,n__4666__auto___36899,jobs,results,process,async))
;
return ((function (__36900,switch__34206__auto__,c__34273__auto___36920,G__34463_36901,G__34463_36902__$1,n__4666__auto___36899,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34513 = [null,null,null,null,null,null,null];
(statearr_34513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34513[(1)] = (1));

return statearr_34513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34504){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34504);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34515){if((e34515 instanceof Object)){
var ex__34210__auto__ = e34515;
var statearr_34516_36935 = state_34504;
(statearr_34516_36935[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36936 = state_34504;
state_34504 = G__36936;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34504){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36900,switch__34206__auto__,c__34273__auto___36920,G__34463_36901,G__34463_36902__$1,n__4666__auto___36899,jobs,results,process,async))
})();
var state__34275__auto__ = (function (){var statearr_34518 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34518[(6)] = c__34273__auto___36920);

return statearr_34518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
});})(__36900,c__34273__auto___36920,G__34463_36901,G__34463_36902__$1,n__4666__auto___36899,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34463_36902__$1)].join('')));

}

var G__36939 = (__36900 + (1));
__36900 = G__36939;
continue;
} else {
}
break;
}

var c__34273__auto___36940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34541){
var state_val_34542 = (state_34541[(1)]);
if((state_val_34542 === (7))){
var inst_34537 = (state_34541[(2)]);
var state_34541__$1 = state_34541;
var statearr_34550_36942 = state_34541__$1;
(statearr_34550_36942[(2)] = inst_34537);

(statearr_34550_36942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (1))){
var state_34541__$1 = state_34541;
var statearr_34551_36944 = state_34541__$1;
(statearr_34551_36944[(2)] = null);

(statearr_34551_36944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (4))){
var inst_34521 = (state_34541[(7)]);
var inst_34521__$1 = (state_34541[(2)]);
var inst_34522 = (inst_34521__$1 == null);
var state_34541__$1 = (function (){var statearr_34552 = state_34541;
(statearr_34552[(7)] = inst_34521__$1);

return statearr_34552;
})();
if(cljs.core.truth_(inst_34522)){
var statearr_34553_36945 = state_34541__$1;
(statearr_34553_36945[(1)] = (5));

} else {
var statearr_34554_36946 = state_34541__$1;
(statearr_34554_36946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (6))){
var inst_34521 = (state_34541[(7)]);
var inst_34526 = (state_34541[(8)]);
var inst_34526__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34528 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34529 = [inst_34521,inst_34526__$1];
var inst_34530 = (new cljs.core.PersistentVector(null,2,(5),inst_34528,inst_34529,null));
var state_34541__$1 = (function (){var statearr_34555 = state_34541;
(statearr_34555[(8)] = inst_34526__$1);

return statearr_34555;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34541__$1,(8),jobs,inst_34530);
} else {
if((state_val_34542 === (3))){
var inst_34539 = (state_34541[(2)]);
var state_34541__$1 = state_34541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34541__$1,inst_34539);
} else {
if((state_val_34542 === (2))){
var state_34541__$1 = state_34541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34541__$1,(4),from);
} else {
if((state_val_34542 === (9))){
var inst_34534 = (state_34541[(2)]);
var state_34541__$1 = (function (){var statearr_34556 = state_34541;
(statearr_34556[(9)] = inst_34534);

return statearr_34556;
})();
var statearr_34557_36950 = state_34541__$1;
(statearr_34557_36950[(2)] = null);

(statearr_34557_36950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (5))){
var inst_34524 = cljs.core.async.close_BANG_(jobs);
var state_34541__$1 = state_34541;
var statearr_34559_36952 = state_34541__$1;
(statearr_34559_36952[(2)] = inst_34524);

(statearr_34559_36952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34542 === (8))){
var inst_34526 = (state_34541[(8)]);
var inst_34532 = (state_34541[(2)]);
var state_34541__$1 = (function (){var statearr_34560 = state_34541;
(statearr_34560[(10)] = inst_34532);

return statearr_34560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34541__$1,(9),results,inst_34526);
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
var statearr_34561 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34561[(1)] = (1));

return statearr_34561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34541){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34541);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34562){if((e34562 instanceof Object)){
var ex__34210__auto__ = e34562;
var statearr_34563_36955 = state_34541;
(statearr_34563_36955[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34562;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36957 = state_34541;
state_34541 = G__36957;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34568 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34568[(6)] = c__34273__auto___36940);

return statearr_34568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34609){
var state_val_34610 = (state_34609[(1)]);
if((state_val_34610 === (7))){
var inst_34605 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34611_36961 = state_34609__$1;
(statearr_34611_36961[(2)] = inst_34605);

(statearr_34611_36961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (20))){
var state_34609__$1 = state_34609;
var statearr_34612_36962 = state_34609__$1;
(statearr_34612_36962[(2)] = null);

(statearr_34612_36962[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (1))){
var state_34609__$1 = state_34609;
var statearr_34613_36963 = state_34609__$1;
(statearr_34613_36963[(2)] = null);

(statearr_34613_36963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (4))){
var inst_34571 = (state_34609[(7)]);
var inst_34571__$1 = (state_34609[(2)]);
var inst_34575 = (inst_34571__$1 == null);
var state_34609__$1 = (function (){var statearr_34617 = state_34609;
(statearr_34617[(7)] = inst_34571__$1);

return statearr_34617;
})();
if(cljs.core.truth_(inst_34575)){
var statearr_34618_36965 = state_34609__$1;
(statearr_34618_36965[(1)] = (5));

} else {
var statearr_34619_36966 = state_34609__$1;
(statearr_34619_36966[(1)] = (6));

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
var statearr_34620_36973 = state_34609__$1;
(statearr_34620_36973[(2)] = inst_34600);

(statearr_34620_36973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (13))){
var inst_34602 = (state_34609[(2)]);
var state_34609__$1 = (function (){var statearr_34621 = state_34609;
(statearr_34621[(9)] = inst_34602);

return statearr_34621;
})();
var statearr_34622_36975 = state_34609__$1;
(statearr_34622_36975[(2)] = null);

(statearr_34622_36975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (6))){
var inst_34571 = (state_34609[(7)]);
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34609__$1,(11),inst_34571);
} else {
if((state_val_34610 === (17))){
var inst_34595 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
if(cljs.core.truth_(inst_34595)){
var statearr_34623_36976 = state_34609__$1;
(statearr_34623_36976[(1)] = (19));

} else {
var statearr_34624_36977 = state_34609__$1;
(statearr_34624_36977[(1)] = (20));

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
var statearr_34625_36982 = state_34609__$1;
(statearr_34625_36982[(2)] = null);

(statearr_34625_36982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (11))){
var inst_34584 = (state_34609[(2)]);
var state_34609__$1 = (function (){var statearr_34626 = state_34609;
(statearr_34626[(10)] = inst_34584);

return statearr_34626;
})();
var statearr_34627_36983 = state_34609__$1;
(statearr_34627_36983[(2)] = null);

(statearr_34627_36983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (9))){
var state_34609__$1 = state_34609;
var statearr_34628_36984 = state_34609__$1;
(statearr_34628_36984[(2)] = null);

(statearr_34628_36984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (5))){
var state_34609__$1 = state_34609;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36986 = state_34609__$1;
(statearr_34629_36986[(1)] = (8));

} else {
var statearr_34630_36987 = state_34609__$1;
(statearr_34630_36987[(1)] = (9));

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
var statearr_34632_36988 = state_34609__$1;
(statearr_34632_36988[(1)] = (15));

} else {
var statearr_34633_36989 = state_34609__$1;
(statearr_34633_36989[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (16))){
var state_34609__$1 = state_34609;
var statearr_34634_36990 = state_34609__$1;
(statearr_34634_36990[(2)] = false);

(statearr_34634_36990[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (10))){
var inst_34581 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34635_36991 = state_34609__$1;
(statearr_34635_36991[(2)] = inst_34581);

(statearr_34635_36991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (18))){
var inst_34592 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34636_36992 = state_34609__$1;
(statearr_34636_36992[(2)] = inst_34592);

(statearr_34636_36992[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (8))){
var inst_34578 = cljs.core.async.close_BANG_(to);
var state_34609__$1 = state_34609;
var statearr_34637_36993 = state_34609__$1;
(statearr_34637_36993[(2)] = inst_34578);

(statearr_34637_36993[(1)] = (10));


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
var statearr_34640_36994 = state_34609;
(statearr_34640_36994[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36997 = state_34609;
state_34609 = G__36997;
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
var c__34273__auto___37020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_37025 = state_34673__$1;
(statearr_34675_37025[(2)] = inst_34669);

(statearr_34675_37025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_37026 = state_34673__$1;
(statearr_34676_37026[(2)] = null);

(statearr_34676_37026[(1)] = (2));


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
var statearr_34678_37033 = state_34673__$1;
(statearr_34678_37033[(1)] = (5));

} else {
var statearr_34679_37035 = state_34673__$1;
(statearr_34679_37035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_37039 = state_34673__$1;
(statearr_34680_37039[(2)] = null);

(statearr_34680_37039[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_37043 = state_34673__$1;
(statearr_34681_37043[(1)] = (9));

} else {
var statearr_34682_37044 = state_34673__$1;
(statearr_34682_37044[(1)] = (10));

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
var statearr_34683_37047 = state_34673__$1;
(statearr_34683_37047[(2)] = null);

(statearr_34683_37047[(1)] = (2));


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
var statearr_34684_37055 = state_34673__$1;
(statearr_34684_37055[(2)] = tc);

(statearr_34684_37055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34685 = state_34673;
(statearr_34685[(8)] = inst_34653);

return statearr_34685;
})();
var statearr_34686_37058 = state_34673__$1;
(statearr_34686_37058[(2)] = inst_34654);

(statearr_34686_37058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34687_37061 = state_34673__$1;
(statearr_34687_37061[(2)] = inst_34667);

(statearr_34687_37061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34688_37063 = state_34673__$1;
(statearr_34688_37063[(2)] = fc);

(statearr_34688_37063[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34692_37069 = state_34673__$1;
(statearr_34692_37069[(1)] = (12));

} else {
var statearr_34693_37071 = state_34673__$1;
(statearr_34693_37071[(1)] = (13));

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
var statearr_34696_37078 = state_34673;
(statearr_34696_37078[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34695;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37081 = state_34673;
state_34673 = G__37081;
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
var state__34275__auto__ = (function (){var statearr_34702 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34702[(6)] = c__34273__auto___37020);

return statearr_34702;
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
var statearr_34728_37085 = state_34726__$1;
(statearr_34728_37085[(2)] = inst_34722);

(statearr_34728_37085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (1))){
var inst_34704 = init;
var state_34726__$1 = (function (){var statearr_34729 = state_34726;
(statearr_34729[(7)] = inst_34704);

return statearr_34729;
})();
var statearr_34730_37089 = state_34726__$1;
(statearr_34730_37089[(2)] = null);

(statearr_34730_37089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (4))){
var inst_34707 = (state_34726[(8)]);
var inst_34707__$1 = (state_34726[(2)]);
var inst_34708 = (inst_34707__$1 == null);
var state_34726__$1 = (function (){var statearr_34731 = state_34726;
(statearr_34731[(8)] = inst_34707__$1);

return statearr_34731;
})();
if(cljs.core.truth_(inst_34708)){
var statearr_34732_37095 = state_34726__$1;
(statearr_34732_37095[(1)] = (5));

} else {
var statearr_34733_37096 = state_34726__$1;
(statearr_34733_37096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (6))){
var inst_34711 = (state_34726[(9)]);
var inst_34704 = (state_34726[(7)]);
var inst_34707 = (state_34726[(8)]);
var inst_34711__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34704,inst_34707) : f.call(null,inst_34704,inst_34707));
var inst_34712 = cljs.core.reduced_QMARK_(inst_34711__$1);
var state_34726__$1 = (function (){var statearr_34735 = state_34726;
(statearr_34735[(9)] = inst_34711__$1);

return statearr_34735;
})();
if(inst_34712){
var statearr_34736_37105 = state_34726__$1;
(statearr_34736_37105[(1)] = (8));

} else {
var statearr_34737_37106 = state_34726__$1;
(statearr_34737_37106[(1)] = (9));

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
var inst_34711 = (state_34726[(9)]);
var inst_34704 = inst_34711;
var state_34726__$1 = (function (){var statearr_34739 = state_34726;
(statearr_34739[(7)] = inst_34704);

return statearr_34739;
})();
var statearr_34740_37109 = state_34726__$1;
(statearr_34740_37109[(2)] = null);

(statearr_34740_37109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (5))){
var inst_34704 = (state_34726[(7)]);
var state_34726__$1 = state_34726;
var statearr_34741_37111 = state_34726__$1;
(statearr_34741_37111[(2)] = inst_34704);

(statearr_34741_37111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (10))){
var inst_34720 = (state_34726[(2)]);
var state_34726__$1 = state_34726;
var statearr_34744_37112 = state_34726__$1;
(statearr_34744_37112[(2)] = inst_34720);

(statearr_34744_37112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34727 === (8))){
var inst_34711 = (state_34726[(9)]);
var inst_34716 = cljs.core.deref(inst_34711);
var state_34726__$1 = state_34726;
var statearr_34745_37116 = state_34726__$1;
(statearr_34745_37116[(2)] = inst_34716);

(statearr_34745_37116[(1)] = (10));


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
}catch (e34750){if((e34750 instanceof Object)){
var ex__34210__auto__ = e34750;
var statearr_34751_37121 = state_34726;
(statearr_34751_37121[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37122 = state_34726;
state_34726 = G__37122;
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
var state__34275__auto__ = (function (){var statearr_34752 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34752[(6)] = c__34273__auto__);

return statearr_34752;
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
var statearr_34763_37135 = state_34759;
(statearr_34763_37135[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37138 = state_34759;
state_34759 = G__37138;
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
(statearr_34767[(6)] = c__34273__auto__);

return statearr_34767;
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
var c__34273__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34797){
var state_val_34798 = (state_34797[(1)]);
if((state_val_34798 === (7))){
var inst_34779 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34802_37148 = state_34797__$1;
(statearr_34802_37148[(2)] = inst_34779);

(statearr_34802_37148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (1))){
var inst_34773 = cljs.core.seq(coll);
var inst_34774 = inst_34773;
var state_34797__$1 = (function (){var statearr_34803 = state_34797;
(statearr_34803[(7)] = inst_34774);

return statearr_34803;
})();
var statearr_34804_37150 = state_34797__$1;
(statearr_34804_37150[(2)] = null);

(statearr_34804_37150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (4))){
var inst_34774 = (state_34797[(7)]);
var inst_34777 = cljs.core.first(inst_34774);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34797__$1,(7),ch,inst_34777);
} else {
if((state_val_34798 === (13))){
var inst_34791 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34805_37156 = state_34797__$1;
(statearr_34805_37156[(2)] = inst_34791);

(statearr_34805_37156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (6))){
var inst_34782 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
if(cljs.core.truth_(inst_34782)){
var statearr_34806_37161 = state_34797__$1;
(statearr_34806_37161[(1)] = (8));

} else {
var statearr_34807_37163 = state_34797__$1;
(statearr_34807_37163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (3))){
var inst_34795 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34797__$1,inst_34795);
} else {
if((state_val_34798 === (12))){
var state_34797__$1 = state_34797;
var statearr_34808_37164 = state_34797__$1;
(statearr_34808_37164[(2)] = null);

(statearr_34808_37164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (2))){
var inst_34774 = (state_34797[(7)]);
var state_34797__$1 = state_34797;
if(cljs.core.truth_(inst_34774)){
var statearr_34809_37165 = state_34797__$1;
(statearr_34809_37165[(1)] = (4));

} else {
var statearr_34810_37166 = state_34797__$1;
(statearr_34810_37166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (11))){
var inst_34788 = cljs.core.async.close_BANG_(ch);
var state_34797__$1 = state_34797;
var statearr_34811_37167 = state_34797__$1;
(statearr_34811_37167[(2)] = inst_34788);

(statearr_34811_37167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (9))){
var state_34797__$1 = state_34797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34812_37174 = state_34797__$1;
(statearr_34812_37174[(1)] = (11));

} else {
var statearr_34813_37175 = state_34797__$1;
(statearr_34813_37175[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (5))){
var inst_34774 = (state_34797[(7)]);
var state_34797__$1 = state_34797;
var statearr_34814_37176 = state_34797__$1;
(statearr_34814_37176[(2)] = inst_34774);

(statearr_34814_37176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (10))){
var inst_34793 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34815_37177 = state_34797__$1;
(statearr_34815_37177[(2)] = inst_34793);

(statearr_34815_37177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (8))){
var inst_34774 = (state_34797[(7)]);
var inst_34784 = cljs.core.next(inst_34774);
var inst_34774__$1 = inst_34784;
var state_34797__$1 = (function (){var statearr_34816 = state_34797;
(statearr_34816[(7)] = inst_34774__$1);

return statearr_34816;
})();
var statearr_34817_37182 = state_34797__$1;
(statearr_34817_37182[(2)] = null);

(statearr_34817_37182[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34797){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34797);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34819){if((e34819 instanceof Object)){
var ex__34210__auto__ = e34819;
var statearr_34820_37190 = state_34797;
(statearr_34820_37190[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37194 = state_34797;
state_34797 = G__37194;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_34821 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_34821[(6)] = c__34273__auto__);

return statearr_34821;
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
var c__34273__auto___37238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_34978){
var state_val_34979 = (state_34978[(1)]);
if((state_val_34979 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34980_37243 = state_34978__$1;
(statearr_34980_37243[(2)] = inst_34974);

(statearr_34980_37243[(1)] = (3));


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
var statearr_34982_37248 = state_34978__$1;
(statearr_34982_37248[(1)] = (22));

} else {
var statearr_34983_37250 = state_34978__$1;
(statearr_34983_37250[(1)] = (23));

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
var statearr_34985_37258 = state_34978__$1;
(statearr_34985_37258[(1)] = (30));

} else {
var statearr_34986_37259 = state_34978__$1;
(statearr_34986_37259[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (1))){
var state_34978__$1 = state_34978;
var statearr_34987_37261 = state_34978__$1;
(statearr_34987_37261[(2)] = null);

(statearr_34987_37261[(1)] = (2));


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
var statearr_34989_37269 = state_34978__$1;
(statearr_34989_37269[(2)] = null);

(statearr_34989_37269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (39))){
var state_34978__$1 = state_34978;
var statearr_34993_37271 = state_34978__$1;
(statearr_34993_37271[(2)] = null);

(statearr_34993_37271[(1)] = (41));


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
var statearr_34995_37275 = state_34978__$1;
(statearr_34995_37275[(1)] = (5));

} else {
var statearr_34998_37277 = state_34978__$1;
(statearr_34998_37277[(1)] = (6));

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
var state_34978__$1 = (function (){var statearr_35001 = state_34978;
(statearr_35001[(18)] = inst_34873);

(statearr_35001[(13)] = inst_34857__$1);

(statearr_35001[(14)] = inst_34856__$1);

(statearr_35001[(15)] = inst_34858__$1);

(statearr_35001[(17)] = inst_34855__$1);

return statearr_35001;
})();
var statearr_35004_37286 = state_34978__$1;
(statearr_35004_37286[(2)] = null);

(statearr_35004_37286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (21))){
var inst_34900 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35008_37290 = state_34978__$1;
(statearr_35008_37290[(2)] = inst_34900);

(statearr_35008_37290[(1)] = (18));


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
var statearr_35010_37291 = state_34978__$1;
(statearr_35010_37291[(2)] = inst_34931);

(statearr_35010_37291[(1)] = (32));


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
var state_34978__$1 = (function (){var statearr_35011 = state_34978;
(statearr_35011[(20)] = inst_34918__$1);

(statearr_35011[(22)] = inst_34933);

(statearr_35011[(11)] = inst_34919__$1);

(statearr_35011[(21)] = inst_34920__$1);

(statearr_35011[(12)] = inst_34921__$1);

return statearr_35011;
})();
var statearr_35012_37297 = state_34978__$1;
(statearr_35012_37297[(2)] = null);

(statearr_35012_37297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (40))){
var inst_34946 = (state_34978[(23)]);
var inst_34950 = done(null);
var inst_34951 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34946);
var state_34978__$1 = (function (){var statearr_35016 = state_34978;
(statearr_35016[(24)] = inst_34950);

return statearr_35016;
})();
var statearr_35017_37299 = state_34978__$1;
(statearr_35017_37299[(2)] = inst_34951);

(statearr_35017_37299[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (33))){
var inst_34937 = (state_34978[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34978__$1 = state_34978;
if(inst_34939){
var statearr_35021_37300 = state_34978__$1;
(statearr_35021_37300[(1)] = (36));

} else {
var statearr_35022_37301 = state_34978__$1;
(statearr_35022_37301[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (13))){
var inst_34867 = (state_34978[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34978__$1 = state_34978;
var statearr_35023_37302 = state_34978__$1;
(statearr_35023_37302[(2)] = inst_34870);

(statearr_35023_37302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (22))){
var inst_34890 = (state_34978[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34978__$1 = state_34978;
var statearr_35024_37306 = state_34978__$1;
(statearr_35024_37306[(2)] = inst_34893);

(statearr_35024_37306[(1)] = (24));


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
var statearr_35026_37313 = state_34978__$1;
(statearr_35026_37313[(2)] = null);

(statearr_35026_37313[(1)] = (25));


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
var state_34978__$1 = (function (){var statearr_35029 = state_34978;
(statearr_35029[(20)] = inst_34918);

(statearr_35029[(11)] = inst_34919);

(statearr_35029[(21)] = inst_34920);

(statearr_35029[(27)] = inst_34953);

(statearr_35029[(12)] = inst_34921);

return statearr_35029;
})();
var statearr_35032_37318 = state_34978__$1;
(statearr_35032_37318[(2)] = null);

(statearr_35032_37318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (43))){
var state_34978__$1 = state_34978;
var statearr_35034_37321 = state_34978__$1;
(statearr_35034_37321[(2)] = null);

(statearr_35034_37321[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (29))){
var inst_34962 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35036_37327 = state_34978__$1;
(statearr_35036_37327[(2)] = inst_34962);

(statearr_35036_37327[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (44))){
var inst_34971 = (state_34978[(2)]);
var state_34978__$1 = (function (){var statearr_35037 = state_34978;
(statearr_35037[(28)] = inst_34971);

return statearr_35037;
})();
var statearr_35038_37334 = state_34978__$1;
(statearr_35038_37334[(2)] = null);

(statearr_35038_37334[(1)] = (2));


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
var state_34978__$1 = (function (){var statearr_35039 = state_34978;
(statearr_35039[(20)] = inst_34918);

(statearr_35039[(29)] = inst_34910__$1);

(statearr_35039[(11)] = inst_34919);

(statearr_35039[(21)] = inst_34920);

(statearr_35039[(12)] = inst_34921);

(statearr_35039[(30)] = inst_34912);

return statearr_35039;
})();
var statearr_35042_37342 = state_34978__$1;
(statearr_35042_37342[(2)] = null);

(statearr_35042_37342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (28))){
var inst_34918 = (state_34978[(20)]);
var inst_34937 = (state_34978[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34978__$1 = (function (){var statearr_35044 = state_34978;
(statearr_35044[(25)] = inst_34937__$1);

return statearr_35044;
})();
if(inst_34937__$1){
var statearr_35047_37347 = state_34978__$1;
(statearr_35047_37347[(1)] = (33));

} else {
var statearr_35048_37348 = state_34978__$1;
(statearr_35048_37348[(1)] = (34));

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
var statearr_35050_37351 = state_34978__$1;
(statearr_35050_37351[(1)] = (27));

} else {
var statearr_35051_37353 = state_34978__$1;
(statearr_35051_37353[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (34))){
var state_34978__$1 = state_34978;
var statearr_35056_37356 = state_34978__$1;
(statearr_35056_37356[(2)] = null);

(statearr_35056_37356[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (17))){
var state_34978__$1 = state_34978;
var statearr_35061_37361 = state_34978__$1;
(statearr_35061_37361[(2)] = null);

(statearr_35061_37361[(1)] = (18));


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
var statearr_35073_37368 = state_34978__$1;
(statearr_35073_37368[(2)] = inst_34905);

(statearr_35073_37368[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(4),ch);
} else {
if((state_val_34979 === (23))){
var state_34978__$1 = state_34978;
var statearr_35078_37370 = state_34978__$1;
(statearr_35078_37370[(2)] = null);

(statearr_35078_37370[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (35))){
var inst_34960 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35079_37373 = state_34978__$1;
(statearr_35079_37373[(2)] = inst_34960);

(statearr_35079_37373[(1)] = (29));


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
var state_34978__$1 = (function (){var statearr_35084 = state_34978;
(statearr_35084[(13)] = inst_34857);

(statearr_35084[(14)] = inst_34856);

(statearr_35084[(15)] = inst_34858);

(statearr_35084[(17)] = inst_34855);

return statearr_35084;
})();
var statearr_35089_37377 = state_34978__$1;
(statearr_35089_37377[(2)] = null);

(statearr_35089_37377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (11))){
var inst_34855 = (state_34978[(17)]);
var inst_34877 = (state_34978[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34978__$1 = (function (){var statearr_35094 = state_34978;
(statearr_35094[(7)] = inst_34877__$1);

return statearr_35094;
})();
if(inst_34877__$1){
var statearr_35097_37383 = state_34978__$1;
(statearr_35097_37383[(1)] = (16));

} else {
var statearr_35099_37385 = state_34978__$1;
(statearr_35099_37385[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (9))){
var inst_34907 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35106_37386 = state_34978__$1;
(statearr_35106_37386[(2)] = inst_34907);

(statearr_35106_37386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35112 = state_34978;
(statearr_35112[(13)] = inst_34857);

(statearr_35112[(14)] = inst_34856);

(statearr_35112[(15)] = inst_34858);

(statearr_35112[(17)] = inst_34855);

return statearr_35112;
})();
var statearr_35115_37394 = state_34978__$1;
(statearr_35115_37394[(2)] = null);

(statearr_35115_37394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (14))){
var state_34978__$1 = state_34978;
var statearr_35120_37396 = state_34978__$1;
(statearr_35120_37396[(2)] = null);

(statearr_35120_37396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (45))){
var inst_34968 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35127_37398 = state_34978__$1;
(statearr_35127_37398[(2)] = inst_34968);

(statearr_35127_37398[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (26))){
var inst_34910 = (state_34978[(29)]);
var inst_34964 = (state_34978[(2)]);
var inst_34965 = cljs.core.seq(inst_34910);
var state_34978__$1 = (function (){var statearr_35133 = state_34978;
(statearr_35133[(31)] = inst_34964);

return statearr_35133;
})();
if(inst_34965){
var statearr_35136_37402 = state_34978__$1;
(statearr_35136_37402[(1)] = (42));

} else {
var statearr_35138_37403 = state_34978__$1;
(statearr_35138_37403[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (16))){
var inst_34877 = (state_34978[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34978__$1 = state_34978;
if(inst_34879){
var statearr_35144_37407 = state_34978__$1;
(statearr_35144_37407[(1)] = (19));

} else {
var statearr_35146_37408 = state_34978__$1;
(statearr_35146_37408[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (38))){
var inst_34957 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35153_37409 = state_34978__$1;
(statearr_35153_37409[(2)] = inst_34957);

(statearr_35153_37409[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (30))){
var state_34978__$1 = state_34978;
var statearr_35158_37412 = state_34978__$1;
(statearr_35158_37412[(2)] = null);

(statearr_35158_37412[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (10))){
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34978__$1 = (function (){var statearr_35166 = state_34978;
(statearr_35166[(26)] = inst_34867);

return statearr_35166;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35169_37418 = state_34978__$1;
(statearr_35169_37418[(1)] = (13));

} else {
var statearr_35171_37420 = state_34978__$1;
(statearr_35171_37420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (18))){
var inst_34903 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35178_37421 = state_34978__$1;
(statearr_35178_37421[(2)] = inst_34903);

(statearr_35178_37421[(1)] = (12));


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
var statearr_35180_37427 = state_34978__$1;
(statearr_35180_37427[(1)] = (39));

} else {
var statearr_35181_37428 = state_34978__$1;
(statearr_35181_37428[(1)] = (40));

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
var statearr_35182_37432 = state_34978__$1;
(statearr_35182_37432[(1)] = (10));

} else {
var statearr_35184_37433 = state_34978__$1;
(statearr_35184_37433[(1)] = (11));

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
var statearr_35242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35242[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35242[(1)] = (1));

return statearr_35242;
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
}catch (e35244){if((e35244 instanceof Object)){
var ex__34210__auto__ = e35244;
var statearr_35250_37439 = state_34978;
(statearr_35250_37439[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37440 = state_34978;
state_34978 = G__37440;
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
var state__34275__auto__ = (function (){var statearr_35257 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35257[(6)] = c__34273__auto___37238);

return statearr_35257;
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
var G__35270 = arguments.length;
switch (G__35270) {
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
var len__4789__auto___37493 = arguments.length;
var i__4790__auto___37494 = (0);
while(true){
if((i__4790__auto___37494 < len__4789__auto___37493)){
args__4795__auto__.push((arguments[i__4790__auto___37494]));

var G__37495 = (i__4790__auto___37494 + (1));
i__4790__auto___37494 = G__37495;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35367){
var map__35368 = p__35367;
var map__35368__$1 = (((((!((map__35368 == null))))?(((((map__35368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35368):map__35368);
var opts = map__35368__$1;
var statearr_35375_37504 = state;
(statearr_35375_37504[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35378_37506 = state;
(statearr_35378_37506[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35381_37507 = state;
(statearr_35381_37507[(2)] = cljs.core.deref(cb));


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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35410 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35411){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35411 = meta35411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35412,meta35411__$1){
var self__ = this;
var _35412__$1 = this;
return (new cljs.core.async.t_cljs$core$async35410(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35411__$1));
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35412){
var self__ = this;
var _35412__$1 = this;
return self__.meta35411;
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35410.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35411","meta35411",-2003753180,null)], null);
}));

(cljs.core.async.t_cljs$core$async35410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35410");

(cljs.core.async.t_cljs$core$async35410.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35410.
 */
cljs.core.async.__GT_t_cljs$core$async35410 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35410(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35411){
return (new cljs.core.async.t_cljs$core$async35410(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35411));
});

}

return (new cljs.core.async.t_cljs$core$async35410(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37567 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35624){
var state_val_35626 = (state_35624[(1)]);
if((state_val_35626 === (7))){
var inst_35494 = (state_35624[(2)]);
var state_35624__$1 = state_35624;
var statearr_35643_37574 = state_35624__$1;
(statearr_35643_37574[(2)] = inst_35494);

(statearr_35643_37574[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (20))){
var inst_35507 = (state_35624[(7)]);
var state_35624__$1 = state_35624;
var statearr_35649_37576 = state_35624__$1;
(statearr_35649_37576[(2)] = inst_35507);

(statearr_35649_37576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (27))){
var state_35624__$1 = state_35624;
var statearr_35659_37578 = state_35624__$1;
(statearr_35659_37578[(2)] = null);

(statearr_35659_37578[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (1))){
var inst_35472 = (state_35624[(8)]);
var inst_35472__$1 = calc_state();
var inst_35475 = (inst_35472__$1 == null);
var inst_35476 = cljs.core.not(inst_35475);
var state_35624__$1 = (function (){var statearr_35667 = state_35624;
(statearr_35667[(8)] = inst_35472__$1);

return statearr_35667;
})();
if(inst_35476){
var statearr_35671_37587 = state_35624__$1;
(statearr_35671_37587[(1)] = (2));

} else {
var statearr_35673_37588 = state_35624__$1;
(statearr_35673_37588[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (24))){
var inst_35542 = (state_35624[(9)]);
var inst_35555 = (state_35624[(10)]);
var inst_35589 = (state_35624[(11)]);
var inst_35589__$1 = (inst_35542.cljs$core$IFn$_invoke$arity$1 ? inst_35542.cljs$core$IFn$_invoke$arity$1(inst_35555) : inst_35542.call(null,inst_35555));
var state_35624__$1 = (function (){var statearr_35680 = state_35624;
(statearr_35680[(11)] = inst_35589__$1);

return statearr_35680;
})();
if(cljs.core.truth_(inst_35589__$1)){
var statearr_35682_37595 = state_35624__$1;
(statearr_35682_37595[(1)] = (29));

} else {
var statearr_35683_37600 = state_35624__$1;
(statearr_35683_37600[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (4))){
var inst_35497 = (state_35624[(2)]);
var state_35624__$1 = state_35624;
if(cljs.core.truth_(inst_35497)){
var statearr_35684_37603 = state_35624__$1;
(statearr_35684_37603[(1)] = (8));

} else {
var statearr_35685_37604 = state_35624__$1;
(statearr_35685_37604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (15))){
var inst_35535 = (state_35624[(2)]);
var state_35624__$1 = state_35624;
if(cljs.core.truth_(inst_35535)){
var statearr_35686_37607 = state_35624__$1;
(statearr_35686_37607[(1)] = (19));

} else {
var statearr_35687_37608 = state_35624__$1;
(statearr_35687_37608[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (21))){
var inst_35541 = (state_35624[(12)]);
var inst_35541__$1 = (state_35624[(2)]);
var inst_35542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35541__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35541__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35541__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35624__$1 = (function (){var statearr_35690 = state_35624;
(statearr_35690[(9)] = inst_35542);

(statearr_35690[(13)] = inst_35546);

(statearr_35690[(12)] = inst_35541__$1);

return statearr_35690;
})();
return cljs.core.async.ioc_alts_BANG_(state_35624__$1,(22),inst_35547);
} else {
if((state_val_35626 === (31))){
var inst_35599 = (state_35624[(2)]);
var state_35624__$1 = state_35624;
if(cljs.core.truth_(inst_35599)){
var statearr_35691_37618 = state_35624__$1;
(statearr_35691_37618[(1)] = (32));

} else {
var statearr_35692_37619 = state_35624__$1;
(statearr_35692_37619[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (32))){
var inst_35554 = (state_35624[(14)]);
var state_35624__$1 = state_35624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35624__$1,(35),out,inst_35554);
} else {
if((state_val_35626 === (33))){
var inst_35541 = (state_35624[(12)]);
var inst_35507 = inst_35541;
var state_35624__$1 = (function (){var statearr_35695 = state_35624;
(statearr_35695[(7)] = inst_35507);

return statearr_35695;
})();
var statearr_35696_37631 = state_35624__$1;
(statearr_35696_37631[(2)] = null);

(statearr_35696_37631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (13))){
var inst_35507 = (state_35624[(7)]);
var inst_35523 = inst_35507.cljs$lang$protocol_mask$partition0$;
var inst_35524 = (inst_35523 & (64));
var inst_35525 = inst_35507.cljs$core$ISeq$;
var inst_35526 = (cljs.core.PROTOCOL_SENTINEL === inst_35525);
var inst_35527 = ((inst_35524) || (inst_35526));
var state_35624__$1 = state_35624;
if(cljs.core.truth_(inst_35527)){
var statearr_35699_37634 = state_35624__$1;
(statearr_35699_37634[(1)] = (16));

} else {
var statearr_35700_37635 = state_35624__$1;
(statearr_35700_37635[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (22))){
var inst_35555 = (state_35624[(10)]);
var inst_35554 = (state_35624[(14)]);
var inst_35553 = (state_35624[(2)]);
var inst_35554__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35553,(0),null);
var inst_35555__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35553,(1),null);
var inst_35560 = (inst_35554__$1 == null);
var inst_35562 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35555__$1,change);
var inst_35563 = ((inst_35560) || (inst_35562));
var state_35624__$1 = (function (){var statearr_35703 = state_35624;
(statearr_35703[(10)] = inst_35555__$1);

(statearr_35703[(14)] = inst_35554__$1);

return statearr_35703;
})();
if(cljs.core.truth_(inst_35563)){
var statearr_35706_37645 = state_35624__$1;
(statearr_35706_37645[(1)] = (23));

} else {
var statearr_35707_37646 = state_35624__$1;
(statearr_35707_37646[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (36))){
var inst_35541 = (state_35624[(12)]);
var inst_35507 = inst_35541;
var state_35624__$1 = (function (){var statearr_35709 = state_35624;
(statearr_35709[(7)] = inst_35507);

return statearr_35709;
})();
var statearr_35711_37656 = state_35624__$1;
(statearr_35711_37656[(2)] = null);

(statearr_35711_37656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (29))){
var inst_35589 = (state_35624[(11)]);
var state_35624__$1 = state_35624;
var statearr_35712_37659 = state_35624__$1;
(statearr_35712_37659[(2)] = inst_35589);

(statearr_35712_37659[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (6))){
var state_35624__$1 = state_35624;
var statearr_35713_37661 = state_35624__$1;
(statearr_35713_37661[(2)] = false);

(statearr_35713_37661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (28))){
var inst_35582 = (state_35624[(2)]);
var inst_35584 = calc_state();
var inst_35507 = inst_35584;
var state_35624__$1 = (function (){var statearr_35714 = state_35624;
(statearr_35714[(15)] = inst_35582);

(statearr_35714[(7)] = inst_35507);

return statearr_35714;
})();
var statearr_35719_37667 = state_35624__$1;
(statearr_35719_37667[(2)] = null);

(statearr_35719_37667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (25))){
var inst_35617 = (state_35624[(2)]);
var state_35624__$1 = state_35624;
var statearr_35724_37672 = state_35624__$1;
(statearr_35724_37672[(2)] = inst_35617);

(statearr_35724_37672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (34))){
var inst_35615 = (state_35624[(2)]);
var state_35624__$1 = state_35624;
var statearr_35726_37674 = state_35624__$1;
(statearr_35726_37674[(2)] = inst_35615);

(statearr_35726_37674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (17))){
var state_35624__$1 = state_35624;
var statearr_35728_37675 = state_35624__$1;
(statearr_35728_37675[(2)] = false);

(statearr_35728_37675[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (3))){
var state_35624__$1 = state_35624;
var statearr_35729_37681 = state_35624__$1;
(statearr_35729_37681[(2)] = false);

(statearr_35729_37681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (12))){
var inst_35620 = (state_35624[(2)]);
var state_35624__$1 = state_35624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35624__$1,inst_35620);
} else {
if((state_val_35626 === (2))){
var inst_35472 = (state_35624[(8)]);
var inst_35483 = inst_35472.cljs$lang$protocol_mask$partition0$;
var inst_35484 = (inst_35483 & (64));
var inst_35488 = inst_35472.cljs$core$ISeq$;
var inst_35489 = (cljs.core.PROTOCOL_SENTINEL === inst_35488);
var inst_35490 = ((inst_35484) || (inst_35489));
var state_35624__$1 = state_35624;
if(cljs.core.truth_(inst_35490)){
var statearr_35731_37685 = state_35624__$1;
(statearr_35731_37685[(1)] = (5));

} else {
var statearr_35732_37688 = state_35624__$1;
(statearr_35732_37688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (23))){
var inst_35554 = (state_35624[(14)]);
var inst_35565 = (inst_35554 == null);
var state_35624__$1 = state_35624;
if(cljs.core.truth_(inst_35565)){
var statearr_35734_37690 = state_35624__$1;
(statearr_35734_37690[(1)] = (26));

} else {
var statearr_35735_37691 = state_35624__$1;
(statearr_35735_37691[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (35))){
var inst_35605 = (state_35624[(2)]);
var state_35624__$1 = state_35624;
if(cljs.core.truth_(inst_35605)){
var statearr_35737_37692 = state_35624__$1;
(statearr_35737_37692[(1)] = (36));

} else {
var statearr_35738_37693 = state_35624__$1;
(statearr_35738_37693[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (19))){
var inst_35507 = (state_35624[(7)]);
var inst_35538 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35507);
var state_35624__$1 = state_35624;
var statearr_35739_37696 = state_35624__$1;
(statearr_35739_37696[(2)] = inst_35538);

(statearr_35739_37696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (11))){
var inst_35507 = (state_35624[(7)]);
var inst_35516 = (inst_35507 == null);
var inst_35517 = cljs.core.not(inst_35516);
var state_35624__$1 = state_35624;
if(inst_35517){
var statearr_35741_37697 = state_35624__$1;
(statearr_35741_37697[(1)] = (13));

} else {
var statearr_35742_37698 = state_35624__$1;
(statearr_35742_37698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (9))){
var inst_35472 = (state_35624[(8)]);
var state_35624__$1 = state_35624;
var statearr_35743_37701 = state_35624__$1;
(statearr_35743_37701[(2)] = inst_35472);

(statearr_35743_37701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (5))){
var state_35624__$1 = state_35624;
var statearr_35745_37702 = state_35624__$1;
(statearr_35745_37702[(2)] = true);

(statearr_35745_37702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (14))){
var state_35624__$1 = state_35624;
var statearr_35750_37703 = state_35624__$1;
(statearr_35750_37703[(2)] = false);

(statearr_35750_37703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (26))){
var inst_35555 = (state_35624[(10)]);
var inst_35579 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35555);
var state_35624__$1 = state_35624;
var statearr_35752_37708 = state_35624__$1;
(statearr_35752_37708[(2)] = inst_35579);

(statearr_35752_37708[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (16))){
var state_35624__$1 = state_35624;
var statearr_35755_37709 = state_35624__$1;
(statearr_35755_37709[(2)] = true);

(statearr_35755_37709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (38))){
var inst_35610 = (state_35624[(2)]);
var state_35624__$1 = state_35624;
var statearr_35759_37713 = state_35624__$1;
(statearr_35759_37713[(2)] = inst_35610);

(statearr_35759_37713[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (30))){
var inst_35542 = (state_35624[(9)]);
var inst_35555 = (state_35624[(10)]);
var inst_35546 = (state_35624[(13)]);
var inst_35594 = cljs.core.empty_QMARK_(inst_35542);
var inst_35595 = (inst_35546.cljs$core$IFn$_invoke$arity$1 ? inst_35546.cljs$core$IFn$_invoke$arity$1(inst_35555) : inst_35546.call(null,inst_35555));
var inst_35596 = cljs.core.not(inst_35595);
var inst_35597 = ((inst_35594) && (inst_35596));
var state_35624__$1 = state_35624;
var statearr_35772_37715 = state_35624__$1;
(statearr_35772_37715[(2)] = inst_35597);

(statearr_35772_37715[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (10))){
var inst_35472 = (state_35624[(8)]);
var inst_35502 = (state_35624[(2)]);
var inst_35504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35502,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35502,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35502,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35507 = inst_35472;
var state_35624__$1 = (function (){var statearr_35779 = state_35624;
(statearr_35779[(7)] = inst_35507);

(statearr_35779[(16)] = inst_35506);

(statearr_35779[(17)] = inst_35504);

(statearr_35779[(18)] = inst_35505);

return statearr_35779;
})();
var statearr_35780_37717 = state_35624__$1;
(statearr_35780_37717[(2)] = null);

(statearr_35780_37717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (18))){
var inst_35532 = (state_35624[(2)]);
var state_35624__$1 = state_35624;
var statearr_35782_37718 = state_35624__$1;
(statearr_35782_37718[(2)] = inst_35532);

(statearr_35782_37718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (37))){
var state_35624__$1 = state_35624;
var statearr_35784_37723 = state_35624__$1;
(statearr_35784_37723[(2)] = null);

(statearr_35784_37723[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35626 === (8))){
var inst_35472 = (state_35624[(8)]);
var inst_35499 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35472);
var state_35624__$1 = state_35624;
var statearr_35787_37729 = state_35624__$1;
(statearr_35787_37729[(2)] = inst_35499);

(statearr_35787_37729[(1)] = (10));


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
var statearr_35789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35789[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35789[(1)] = (1));

return statearr_35789;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35624){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35624);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35790){if((e35790 instanceof Object)){
var ex__34210__auto__ = e35790;
var statearr_35791_37734 = state_35624;
(statearr_35791_37734[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35790;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37736 = state_35624;
state_35624 = G__37736;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35624){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_35795 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_35795[(6)] = c__34273__auto___37567);

return statearr_35795;
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
var G__35820 = arguments.length;
switch (G__35820) {
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
var G__35837 = arguments.length;
switch (G__35837) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35831_SHARP_){
if(cljs.core.truth_((p1__35831_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35831_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35831_SHARP_.call(null,topic)))){
return p1__35831_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35831_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35847 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35848){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35848 = meta35848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35849,meta35848__$1){
var self__ = this;
var _35849__$1 = this;
return (new cljs.core.async.t_cljs$core$async35847(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35848__$1));
}));

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35849){
var self__ = this;
var _35849__$1 = this;
return self__.meta35848;
}));

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35848","meta35848",211969587,null)], null);
}));

(cljs.core.async.t_cljs$core$async35847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35847");

(cljs.core.async.t_cljs$core$async35847.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35847.
 */
cljs.core.async.__GT_t_cljs$core$async35847 = (function cljs$core$async$__GT_t_cljs$core$async35847(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35848){
return (new cljs.core.async.t_cljs$core$async35847(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35848));
});

}

return (new cljs.core.async.t_cljs$core$async35847(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34273__auto___37812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_35954){
var state_val_35955 = (state_35954[(1)]);
if((state_val_35955 === (7))){
var inst_35949 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
var statearr_35960_37815 = state_35954__$1;
(statearr_35960_37815[(2)] = inst_35949);

(statearr_35960_37815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (20))){
var state_35954__$1 = state_35954;
var statearr_35962_37820 = state_35954__$1;
(statearr_35962_37820[(2)] = null);

(statearr_35962_37820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (1))){
var state_35954__$1 = state_35954;
var statearr_35965_37821 = state_35954__$1;
(statearr_35965_37821[(2)] = null);

(statearr_35965_37821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (24))){
var inst_35932 = (state_35954[(7)]);
var inst_35941 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35932);
var state_35954__$1 = state_35954;
var statearr_35966_37826 = state_35954__$1;
(statearr_35966_37826[(2)] = inst_35941);

(statearr_35966_37826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (4))){
var inst_35883 = (state_35954[(8)]);
var inst_35883__$1 = (state_35954[(2)]);
var inst_35884 = (inst_35883__$1 == null);
var state_35954__$1 = (function (){var statearr_35967 = state_35954;
(statearr_35967[(8)] = inst_35883__$1);

return statearr_35967;
})();
if(cljs.core.truth_(inst_35884)){
var statearr_35968_37831 = state_35954__$1;
(statearr_35968_37831[(1)] = (5));

} else {
var statearr_35969_37832 = state_35954__$1;
(statearr_35969_37832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (15))){
var inst_35926 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
var statearr_35972_37833 = state_35954__$1;
(statearr_35972_37833[(2)] = inst_35926);

(statearr_35972_37833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (21))){
var inst_35946 = (state_35954[(2)]);
var state_35954__$1 = (function (){var statearr_35973 = state_35954;
(statearr_35973[(9)] = inst_35946);

return statearr_35973;
})();
var statearr_35975_37840 = state_35954__$1;
(statearr_35975_37840[(2)] = null);

(statearr_35975_37840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (13))){
var inst_35907 = (state_35954[(10)]);
var inst_35909 = cljs.core.chunked_seq_QMARK_(inst_35907);
var state_35954__$1 = state_35954;
if(inst_35909){
var statearr_35976_37842 = state_35954__$1;
(statearr_35976_37842[(1)] = (16));

} else {
var statearr_35977_37844 = state_35954__$1;
(statearr_35977_37844[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (22))){
var inst_35938 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
if(cljs.core.truth_(inst_35938)){
var statearr_35980_37848 = state_35954__$1;
(statearr_35980_37848[(1)] = (23));

} else {
var statearr_35981_37849 = state_35954__$1;
(statearr_35981_37849[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (6))){
var inst_35883 = (state_35954[(8)]);
var inst_35934 = (state_35954[(11)]);
var inst_35932 = (state_35954[(7)]);
var inst_35932__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35883) : topic_fn.call(null,inst_35883));
var inst_35933 = cljs.core.deref(mults);
var inst_35934__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35933,inst_35932__$1);
var state_35954__$1 = (function (){var statearr_35983 = state_35954;
(statearr_35983[(11)] = inst_35934__$1);

(statearr_35983[(7)] = inst_35932__$1);

return statearr_35983;
})();
if(cljs.core.truth_(inst_35934__$1)){
var statearr_35987_37858 = state_35954__$1;
(statearr_35987_37858[(1)] = (19));

} else {
var statearr_35988_37859 = state_35954__$1;
(statearr_35988_37859[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (25))){
var inst_35943 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
var statearr_35989_37863 = state_35954__$1;
(statearr_35989_37863[(2)] = inst_35943);

(statearr_35989_37863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (17))){
var inst_35907 = (state_35954[(10)]);
var inst_35916 = cljs.core.first(inst_35907);
var inst_35917 = cljs.core.async.muxch_STAR_(inst_35916);
var inst_35918 = cljs.core.async.close_BANG_(inst_35917);
var inst_35919 = cljs.core.next(inst_35907);
var inst_35893 = inst_35919;
var inst_35894 = null;
var inst_35895 = (0);
var inst_35896 = (0);
var state_35954__$1 = (function (){var statearr_35991 = state_35954;
(statearr_35991[(12)] = inst_35895);

(statearr_35991[(13)] = inst_35918);

(statearr_35991[(14)] = inst_35893);

(statearr_35991[(15)] = inst_35894);

(statearr_35991[(16)] = inst_35896);

return statearr_35991;
})();
var statearr_35998_37870 = state_35954__$1;
(statearr_35998_37870[(2)] = null);

(statearr_35998_37870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (3))){
var inst_35951 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35954__$1,inst_35951);
} else {
if((state_val_35955 === (12))){
var inst_35928 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
var statearr_36003_37875 = state_35954__$1;
(statearr_36003_37875[(2)] = inst_35928);

(statearr_36003_37875[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (2))){
var state_35954__$1 = state_35954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35954__$1,(4),ch);
} else {
if((state_val_35955 === (23))){
var state_35954__$1 = state_35954;
var statearr_36005_37879 = state_35954__$1;
(statearr_36005_37879[(2)] = null);

(statearr_36005_37879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (19))){
var inst_35883 = (state_35954[(8)]);
var inst_35934 = (state_35954[(11)]);
var inst_35936 = cljs.core.async.muxch_STAR_(inst_35934);
var state_35954__$1 = state_35954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35954__$1,(22),inst_35936,inst_35883);
} else {
if((state_val_35955 === (11))){
var inst_35907 = (state_35954[(10)]);
var inst_35893 = (state_35954[(14)]);
var inst_35907__$1 = cljs.core.seq(inst_35893);
var state_35954__$1 = (function (){var statearr_36010 = state_35954;
(statearr_36010[(10)] = inst_35907__$1);

return statearr_36010;
})();
if(inst_35907__$1){
var statearr_36013_37881 = state_35954__$1;
(statearr_36013_37881[(1)] = (13));

} else {
var statearr_36015_37883 = state_35954__$1;
(statearr_36015_37883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (9))){
var inst_35930 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
var statearr_36016_37886 = state_35954__$1;
(statearr_36016_37886[(2)] = inst_35930);

(statearr_36016_37886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (5))){
var inst_35890 = cljs.core.deref(mults);
var inst_35891 = cljs.core.vals(inst_35890);
var inst_35892 = cljs.core.seq(inst_35891);
var inst_35893 = inst_35892;
var inst_35894 = null;
var inst_35895 = (0);
var inst_35896 = (0);
var state_35954__$1 = (function (){var statearr_36030 = state_35954;
(statearr_36030[(12)] = inst_35895);

(statearr_36030[(14)] = inst_35893);

(statearr_36030[(15)] = inst_35894);

(statearr_36030[(16)] = inst_35896);

return statearr_36030;
})();
var statearr_36032_37891 = state_35954__$1;
(statearr_36032_37891[(2)] = null);

(statearr_36032_37891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (14))){
var state_35954__$1 = state_35954;
var statearr_36036_37895 = state_35954__$1;
(statearr_36036_37895[(2)] = null);

(statearr_36036_37895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (16))){
var inst_35907 = (state_35954[(10)]);
var inst_35911 = cljs.core.chunk_first(inst_35907);
var inst_35912 = cljs.core.chunk_rest(inst_35907);
var inst_35913 = cljs.core.count(inst_35911);
var inst_35893 = inst_35912;
var inst_35894 = inst_35911;
var inst_35895 = inst_35913;
var inst_35896 = (0);
var state_35954__$1 = (function (){var statearr_36037 = state_35954;
(statearr_36037[(12)] = inst_35895);

(statearr_36037[(14)] = inst_35893);

(statearr_36037[(15)] = inst_35894);

(statearr_36037[(16)] = inst_35896);

return statearr_36037;
})();
var statearr_36038_37899 = state_35954__$1;
(statearr_36038_37899[(2)] = null);

(statearr_36038_37899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (10))){
var inst_35895 = (state_35954[(12)]);
var inst_35893 = (state_35954[(14)]);
var inst_35894 = (state_35954[(15)]);
var inst_35896 = (state_35954[(16)]);
var inst_35901 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35894,inst_35896);
var inst_35902 = cljs.core.async.muxch_STAR_(inst_35901);
var inst_35903 = cljs.core.async.close_BANG_(inst_35902);
var inst_35904 = (inst_35896 + (1));
var tmp36033 = inst_35895;
var tmp36034 = inst_35893;
var tmp36035 = inst_35894;
var inst_35893__$1 = tmp36034;
var inst_35894__$1 = tmp36035;
var inst_35895__$1 = tmp36033;
var inst_35896__$1 = inst_35904;
var state_35954__$1 = (function (){var statearr_36039 = state_35954;
(statearr_36039[(12)] = inst_35895__$1);

(statearr_36039[(17)] = inst_35903);

(statearr_36039[(14)] = inst_35893__$1);

(statearr_36039[(15)] = inst_35894__$1);

(statearr_36039[(16)] = inst_35896__$1);

return statearr_36039;
})();
var statearr_36040_37907 = state_35954__$1;
(statearr_36040_37907[(2)] = null);

(statearr_36040_37907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (18))){
var inst_35923 = (state_35954[(2)]);
var state_35954__$1 = state_35954;
var statearr_36041_37909 = state_35954__$1;
(statearr_36041_37909[(2)] = inst_35923);

(statearr_36041_37909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35955 === (8))){
var inst_35895 = (state_35954[(12)]);
var inst_35896 = (state_35954[(16)]);
var inst_35898 = (inst_35896 < inst_35895);
var inst_35899 = inst_35898;
var state_35954__$1 = state_35954;
if(cljs.core.truth_(inst_35899)){
var statearr_36042_37916 = state_35954__$1;
(statearr_36042_37916[(1)] = (10));

} else {
var statearr_36043_37917 = state_35954__$1;
(statearr_36043_37917[(1)] = (11));

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
var statearr_36044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36044[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36044[(1)] = (1));

return statearr_36044;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35954){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35954);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36045){if((e36045 instanceof Object)){
var ex__34210__auto__ = e36045;
var statearr_36046_37927 = state_35954;
(statearr_36046_37927[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36045;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37930 = state_35954;
state_35954 = G__37930;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36048 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36048[(6)] = c__34273__auto___37812);

return statearr_36048;
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
var G__36051 = arguments.length;
switch (G__36051) {
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
var G__36061 = arguments.length;
switch (G__36061) {
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
var G__36068 = arguments.length;
switch (G__36068) {
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
var c__34273__auto___37952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36115){
var state_val_36116 = (state_36115[(1)]);
if((state_val_36116 === (7))){
var state_36115__$1 = state_36115;
var statearr_36117_37953 = state_36115__$1;
(statearr_36117_37953[(2)] = null);

(statearr_36117_37953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (1))){
var state_36115__$1 = state_36115;
var statearr_36118_37954 = state_36115__$1;
(statearr_36118_37954[(2)] = null);

(statearr_36118_37954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (4))){
var inst_36079 = (state_36115[(7)]);
var inst_36081 = (inst_36079 < cnt);
var state_36115__$1 = state_36115;
if(cljs.core.truth_(inst_36081)){
var statearr_36119_37958 = state_36115__$1;
(statearr_36119_37958[(1)] = (6));

} else {
var statearr_36120_37959 = state_36115__$1;
(statearr_36120_37959[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (15))){
var inst_36111 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
var statearr_36121_37962 = state_36115__$1;
(statearr_36121_37962[(2)] = inst_36111);

(statearr_36121_37962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (13))){
var inst_36104 = cljs.core.async.close_BANG_(out);
var state_36115__$1 = state_36115;
var statearr_36122_37963 = state_36115__$1;
(statearr_36122_37963[(2)] = inst_36104);

(statearr_36122_37963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (6))){
var state_36115__$1 = state_36115;
var statearr_36123_37964 = state_36115__$1;
(statearr_36123_37964[(2)] = null);

(statearr_36123_37964[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (3))){
var inst_36113 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36115__$1,inst_36113);
} else {
if((state_val_36116 === (12))){
var inst_36101 = (state_36115[(8)]);
var inst_36101__$1 = (state_36115[(2)]);
var inst_36102 = cljs.core.some(cljs.core.nil_QMARK_,inst_36101__$1);
var state_36115__$1 = (function (){var statearr_36131 = state_36115;
(statearr_36131[(8)] = inst_36101__$1);

return statearr_36131;
})();
if(cljs.core.truth_(inst_36102)){
var statearr_36132_37968 = state_36115__$1;
(statearr_36132_37968[(1)] = (13));

} else {
var statearr_36133_37969 = state_36115__$1;
(statearr_36133_37969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (2))){
var inst_36077 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36079 = (0);
var state_36115__$1 = (function (){var statearr_36134 = state_36115;
(statearr_36134[(7)] = inst_36079);

(statearr_36134[(9)] = inst_36077);

return statearr_36134;
})();
var statearr_36135_37970 = state_36115__$1;
(statearr_36135_37970[(2)] = null);

(statearr_36135_37970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (11))){
var inst_36079 = (state_36115[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36115,(10),Object,null,(9));
var inst_36088 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36079) : chs__$1.call(null,inst_36079));
var inst_36089 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36079) : done.call(null,inst_36079));
var inst_36090 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36088,inst_36089);
var state_36115__$1 = state_36115;
var statearr_36137_37975 = state_36115__$1;
(statearr_36137_37975[(2)] = inst_36090);


cljs.core.async.impl.ioc_helpers.process_exception(state_36115__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (9))){
var inst_36079 = (state_36115[(7)]);
var inst_36092 = (state_36115[(2)]);
var inst_36093 = (inst_36079 + (1));
var inst_36079__$1 = inst_36093;
var state_36115__$1 = (function (){var statearr_36140 = state_36115;
(statearr_36140[(10)] = inst_36092);

(statearr_36140[(7)] = inst_36079__$1);

return statearr_36140;
})();
var statearr_36142_37976 = state_36115__$1;
(statearr_36142_37976[(2)] = null);

(statearr_36142_37976[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (5))){
var inst_36099 = (state_36115[(2)]);
var state_36115__$1 = (function (){var statearr_36144 = state_36115;
(statearr_36144[(11)] = inst_36099);

return statearr_36144;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36115__$1,(12),dchan);
} else {
if((state_val_36116 === (14))){
var inst_36101 = (state_36115[(8)]);
var inst_36106 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36101);
var state_36115__$1 = state_36115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36115__$1,(16),out,inst_36106);
} else {
if((state_val_36116 === (16))){
var inst_36108 = (state_36115[(2)]);
var state_36115__$1 = (function (){var statearr_36147 = state_36115;
(statearr_36147[(12)] = inst_36108);

return statearr_36147;
})();
var statearr_36148_37978 = state_36115__$1;
(statearr_36148_37978[(2)] = null);

(statearr_36148_37978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (10))){
var inst_36083 = (state_36115[(2)]);
var inst_36084 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36115__$1 = (function (){var statearr_36149 = state_36115;
(statearr_36149[(13)] = inst_36083);

return statearr_36149;
})();
var statearr_36150_37983 = state_36115__$1;
(statearr_36150_37983[(2)] = inst_36084);


cljs.core.async.impl.ioc_helpers.process_exception(state_36115__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36116 === (8))){
var inst_36097 = (state_36115[(2)]);
var state_36115__$1 = state_36115;
var statearr_36151_37984 = state_36115__$1;
(statearr_36151_37984[(2)] = inst_36097);

(statearr_36151_37984[(1)] = (5));


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
var statearr_36154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36154[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36154[(1)] = (1));

return statearr_36154;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36115){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36115);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36155){if((e36155 instanceof Object)){
var ex__34210__auto__ = e36155;
var statearr_36156_37985 = state_36115;
(statearr_36156_37985[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36155;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37986 = state_36115;
state_36115 = G__37986;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36157 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36157[(6)] = c__34273__auto___37952);

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
var G__36165 = arguments.length;
switch (G__36165) {
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
var c__34273__auto___37993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36197){
var state_val_36198 = (state_36197[(1)]);
if((state_val_36198 === (7))){
var inst_36176 = (state_36197[(7)]);
var inst_36177 = (state_36197[(8)]);
var inst_36176__$1 = (state_36197[(2)]);
var inst_36177__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36176__$1,(0),null);
var inst_36178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36176__$1,(1),null);
var inst_36179 = (inst_36177__$1 == null);
var state_36197__$1 = (function (){var statearr_36199 = state_36197;
(statearr_36199[(7)] = inst_36176__$1);

(statearr_36199[(8)] = inst_36177__$1);

(statearr_36199[(9)] = inst_36178);

return statearr_36199;
})();
if(cljs.core.truth_(inst_36179)){
var statearr_36200_37996 = state_36197__$1;
(statearr_36200_37996[(1)] = (8));

} else {
var statearr_36201_37997 = state_36197__$1;
(statearr_36201_37997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (1))){
var inst_36166 = cljs.core.vec(chs);
var inst_36167 = inst_36166;
var state_36197__$1 = (function (){var statearr_36202 = state_36197;
(statearr_36202[(10)] = inst_36167);

return statearr_36202;
})();
var statearr_36203_37998 = state_36197__$1;
(statearr_36203_37998[(2)] = null);

(statearr_36203_37998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (4))){
var inst_36167 = (state_36197[(10)]);
var state_36197__$1 = state_36197;
return cljs.core.async.ioc_alts_BANG_(state_36197__$1,(7),inst_36167);
} else {
if((state_val_36198 === (6))){
var inst_36193 = (state_36197[(2)]);
var state_36197__$1 = state_36197;
var statearr_36204_38002 = state_36197__$1;
(statearr_36204_38002[(2)] = inst_36193);

(statearr_36204_38002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (3))){
var inst_36195 = (state_36197[(2)]);
var state_36197__$1 = state_36197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36197__$1,inst_36195);
} else {
if((state_val_36198 === (2))){
var inst_36167 = (state_36197[(10)]);
var inst_36169 = cljs.core.count(inst_36167);
var inst_36170 = (inst_36169 > (0));
var state_36197__$1 = state_36197;
if(cljs.core.truth_(inst_36170)){
var statearr_36209_38003 = state_36197__$1;
(statearr_36209_38003[(1)] = (4));

} else {
var statearr_36211_38004 = state_36197__$1;
(statearr_36211_38004[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (11))){
var inst_36167 = (state_36197[(10)]);
var inst_36186 = (state_36197[(2)]);
var tmp36205 = inst_36167;
var inst_36167__$1 = tmp36205;
var state_36197__$1 = (function (){var statearr_36213 = state_36197;
(statearr_36213[(10)] = inst_36167__$1);

(statearr_36213[(11)] = inst_36186);

return statearr_36213;
})();
var statearr_36214_38009 = state_36197__$1;
(statearr_36214_38009[(2)] = null);

(statearr_36214_38009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (9))){
var inst_36177 = (state_36197[(8)]);
var state_36197__$1 = state_36197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36197__$1,(11),out,inst_36177);
} else {
if((state_val_36198 === (5))){
var inst_36191 = cljs.core.async.close_BANG_(out);
var state_36197__$1 = state_36197;
var statearr_36226_38011 = state_36197__$1;
(statearr_36226_38011[(2)] = inst_36191);

(statearr_36226_38011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (10))){
var inst_36189 = (state_36197[(2)]);
var state_36197__$1 = state_36197;
var statearr_36227_38012 = state_36197__$1;
(statearr_36227_38012[(2)] = inst_36189);

(statearr_36227_38012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36198 === (8))){
var inst_36176 = (state_36197[(7)]);
var inst_36167 = (state_36197[(10)]);
var inst_36177 = (state_36197[(8)]);
var inst_36178 = (state_36197[(9)]);
var inst_36181 = (function (){var cs = inst_36167;
var vec__36172 = inst_36176;
var v = inst_36177;
var c = inst_36178;
return (function (p1__36161_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36161_SHARP_);
});
})();
var inst_36182 = cljs.core.filterv(inst_36181,inst_36167);
var inst_36167__$1 = inst_36182;
var state_36197__$1 = (function (){var statearr_36229 = state_36197;
(statearr_36229[(10)] = inst_36167__$1);

return statearr_36229;
})();
var statearr_36231_38017 = state_36197__$1;
(statearr_36231_38017[(2)] = null);

(statearr_36231_38017[(1)] = (2));


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
var statearr_36233 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36233[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36233[(1)] = (1));

return statearr_36233;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36197){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36197);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36235){if((e36235 instanceof Object)){
var ex__34210__auto__ = e36235;
var statearr_36237_38018 = state_36197;
(statearr_36237_38018[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36235;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38019 = state_36197;
state_36197 = G__38019;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36238 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36238[(6)] = c__34273__auto___37993);

return statearr_36238;
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
var G__36242 = arguments.length;
switch (G__36242) {
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
var c__34273__auto___38026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36272){
var state_val_36273 = (state_36272[(1)]);
if((state_val_36273 === (7))){
var inst_36254 = (state_36272[(7)]);
var inst_36254__$1 = (state_36272[(2)]);
var inst_36255 = (inst_36254__$1 == null);
var inst_36256 = cljs.core.not(inst_36255);
var state_36272__$1 = (function (){var statearr_36282 = state_36272;
(statearr_36282[(7)] = inst_36254__$1);

return statearr_36282;
})();
if(inst_36256){
var statearr_36283_38028 = state_36272__$1;
(statearr_36283_38028[(1)] = (8));

} else {
var statearr_36284_38030 = state_36272__$1;
(statearr_36284_38030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (1))){
var inst_36247 = (0);
var state_36272__$1 = (function (){var statearr_36285 = state_36272;
(statearr_36285[(8)] = inst_36247);

return statearr_36285;
})();
var statearr_36287_38032 = state_36272__$1;
(statearr_36287_38032[(2)] = null);

(statearr_36287_38032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (4))){
var state_36272__$1 = state_36272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36272__$1,(7),ch);
} else {
if((state_val_36273 === (6))){
var inst_36267 = (state_36272[(2)]);
var state_36272__$1 = state_36272;
var statearr_36292_38033 = state_36272__$1;
(statearr_36292_38033[(2)] = inst_36267);

(statearr_36292_38033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (3))){
var inst_36269 = (state_36272[(2)]);
var inst_36270 = cljs.core.async.close_BANG_(out);
var state_36272__$1 = (function (){var statearr_36293 = state_36272;
(statearr_36293[(9)] = inst_36269);

return statearr_36293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36272__$1,inst_36270);
} else {
if((state_val_36273 === (2))){
var inst_36247 = (state_36272[(8)]);
var inst_36250 = (inst_36247 < n);
var state_36272__$1 = state_36272;
if(cljs.core.truth_(inst_36250)){
var statearr_36296_38036 = state_36272__$1;
(statearr_36296_38036[(1)] = (4));

} else {
var statearr_36297_38037 = state_36272__$1;
(statearr_36297_38037[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (11))){
var inst_36247 = (state_36272[(8)]);
var inst_36259 = (state_36272[(2)]);
var inst_36260 = (inst_36247 + (1));
var inst_36247__$1 = inst_36260;
var state_36272__$1 = (function (){var statearr_36298 = state_36272;
(statearr_36298[(8)] = inst_36247__$1);

(statearr_36298[(10)] = inst_36259);

return statearr_36298;
})();
var statearr_36299_38040 = state_36272__$1;
(statearr_36299_38040[(2)] = null);

(statearr_36299_38040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (9))){
var state_36272__$1 = state_36272;
var statearr_36300_38041 = state_36272__$1;
(statearr_36300_38041[(2)] = null);

(statearr_36300_38041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (5))){
var state_36272__$1 = state_36272;
var statearr_36303_38042 = state_36272__$1;
(statearr_36303_38042[(2)] = null);

(statearr_36303_38042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (10))){
var inst_36264 = (state_36272[(2)]);
var state_36272__$1 = state_36272;
var statearr_36304_38044 = state_36272__$1;
(statearr_36304_38044[(2)] = inst_36264);

(statearr_36304_38044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36273 === (8))){
var inst_36254 = (state_36272[(7)]);
var state_36272__$1 = state_36272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36272__$1,(11),out,inst_36254);
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
var statearr_36309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36309[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36309[(1)] = (1));

return statearr_36309;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36272){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36272);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36310){if((e36310 instanceof Object)){
var ex__34210__auto__ = e36310;
var statearr_36311_38046 = state_36272;
(statearr_36311_38046[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36310;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38047 = state_36272;
state_36272 = G__38047;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36315 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36315[(6)] = c__34273__auto___38026);

return statearr_36315;
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
cljs.core.async.t_cljs$core$async36323 = (function (f,ch,meta36324){
this.f = f;
this.ch = ch;
this.meta36324 = meta36324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36325,meta36324__$1){
var self__ = this;
var _36325__$1 = this;
return (new cljs.core.async.t_cljs$core$async36323(self__.f,self__.ch,meta36324__$1));
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
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36332 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36332 = (function (f,ch,meta36324,_,fn1,meta36333){
this.f = f;
this.ch = ch;
this.meta36324 = meta36324;
this._ = _;
this.fn1 = fn1;
this.meta36333 = meta36333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36334,meta36333__$1){
var self__ = this;
var _36334__$1 = this;
return (new cljs.core.async.t_cljs$core$async36332(self__.f,self__.ch,self__.meta36324,self__._,self__.fn1,meta36333__$1));
}));

(cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36334){
var self__ = this;
var _36334__$1 = this;
return self__.meta36333;
}));

(cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36321_SHARP_){
var G__36339 = (((p1__36321_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36321_SHARP_) : self__.f.call(null,p1__36321_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36339) : f1.call(null,G__36339));
});
}));

(cljs.core.async.t_cljs$core$async36332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36324","meta36324",445982427,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36323","cljs.core.async/t_cljs$core$async36323",1925777980,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36333","meta36333",596044259,null)], null);
}));

(cljs.core.async.t_cljs$core$async36332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36332");

(cljs.core.async.t_cljs$core$async36332.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36332.
 */
cljs.core.async.__GT_t_cljs$core$async36332 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36332(f__$1,ch__$1,meta36324__$1,___$2,fn1__$1,meta36333){
return (new cljs.core.async.t_cljs$core$async36332(f__$1,ch__$1,meta36324__$1,___$2,fn1__$1,meta36333));
});

}

return (new cljs.core.async.t_cljs$core$async36332(self__.f,self__.ch,self__.meta36324,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36348 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36348) : self__.f.call(null,G__36348));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36323.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36323.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36324","meta36324",445982427,null)], null);
}));

(cljs.core.async.t_cljs$core$async36323.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36323");

(cljs.core.async.t_cljs$core$async36323.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36323");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36323.
 */
cljs.core.async.__GT_t_cljs$core$async36323 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36323(f__$1,ch__$1,meta36324){
return (new cljs.core.async.t_cljs$core$async36323(f__$1,ch__$1,meta36324));
});

}

return (new cljs.core.async.t_cljs$core$async36323(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36366 = (function (p,ch,meta36367){
this.p = p;
this.ch = ch;
this.meta36367 = meta36367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36368,meta36367__$1){
var self__ = this;
var _36368__$1 = this;
return (new cljs.core.async.t_cljs$core$async36366(self__.p,self__.ch,meta36367__$1));
}));

(cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36368){
var self__ = this;
var _36368__$1 = this;
return self__.meta36367;
}));

(cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36366.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36367","meta36367",982316004,null)], null);
}));

(cljs.core.async.t_cljs$core$async36366.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36366");

(cljs.core.async.t_cljs$core$async36366.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36366");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36366.
 */
cljs.core.async.__GT_t_cljs$core$async36366 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36366(p__$1,ch__$1,meta36367){
return (new cljs.core.async.t_cljs$core$async36366(p__$1,ch__$1,meta36367));
});

}

return (new cljs.core.async.t_cljs$core$async36366(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36390 = arguments.length;
switch (G__36390) {
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
var c__34273__auto___38076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36419){
var state_val_36420 = (state_36419[(1)]);
if((state_val_36420 === (7))){
var inst_36415 = (state_36419[(2)]);
var state_36419__$1 = state_36419;
var statearr_36425_38077 = state_36419__$1;
(statearr_36425_38077[(2)] = inst_36415);

(statearr_36425_38077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (1))){
var state_36419__$1 = state_36419;
var statearr_36426_38078 = state_36419__$1;
(statearr_36426_38078[(2)] = null);

(statearr_36426_38078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (4))){
var inst_36401 = (state_36419[(7)]);
var inst_36401__$1 = (state_36419[(2)]);
var inst_36402 = (inst_36401__$1 == null);
var state_36419__$1 = (function (){var statearr_36433 = state_36419;
(statearr_36433[(7)] = inst_36401__$1);

return statearr_36433;
})();
if(cljs.core.truth_(inst_36402)){
var statearr_36434_38081 = state_36419__$1;
(statearr_36434_38081[(1)] = (5));

} else {
var statearr_36435_38083 = state_36419__$1;
(statearr_36435_38083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (6))){
var inst_36401 = (state_36419[(7)]);
var inst_36406 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36401) : p.call(null,inst_36401));
var state_36419__$1 = state_36419;
if(cljs.core.truth_(inst_36406)){
var statearr_36436_38084 = state_36419__$1;
(statearr_36436_38084[(1)] = (8));

} else {
var statearr_36437_38085 = state_36419__$1;
(statearr_36437_38085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (3))){
var inst_36417 = (state_36419[(2)]);
var state_36419__$1 = state_36419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36419__$1,inst_36417);
} else {
if((state_val_36420 === (2))){
var state_36419__$1 = state_36419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36419__$1,(4),ch);
} else {
if((state_val_36420 === (11))){
var inst_36409 = (state_36419[(2)]);
var state_36419__$1 = state_36419;
var statearr_36446_38088 = state_36419__$1;
(statearr_36446_38088[(2)] = inst_36409);

(statearr_36446_38088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (9))){
var state_36419__$1 = state_36419;
var statearr_36448_38090 = state_36419__$1;
(statearr_36448_38090[(2)] = null);

(statearr_36448_38090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (5))){
var inst_36404 = cljs.core.async.close_BANG_(out);
var state_36419__$1 = state_36419;
var statearr_36450_38091 = state_36419__$1;
(statearr_36450_38091[(2)] = inst_36404);

(statearr_36450_38091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (10))){
var inst_36412 = (state_36419[(2)]);
var state_36419__$1 = (function (){var statearr_36451 = state_36419;
(statearr_36451[(8)] = inst_36412);

return statearr_36451;
})();
var statearr_36452_38092 = state_36419__$1;
(statearr_36452_38092[(2)] = null);

(statearr_36452_38092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (8))){
var inst_36401 = (state_36419[(7)]);
var state_36419__$1 = state_36419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36419__$1,(11),out,inst_36401);
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
var statearr_36453 = [null,null,null,null,null,null,null,null,null];
(statearr_36453[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36453[(1)] = (1));

return statearr_36453;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36419){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36419);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36454){if((e36454 instanceof Object)){
var ex__34210__auto__ = e36454;
var statearr_36455_38096 = state_36419;
(statearr_36455_38096[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36454;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38099 = state_36419;
state_36419 = G__38099;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36458 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36458[(6)] = c__34273__auto___38076);

return statearr_36458;
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
var G__36462 = arguments.length;
switch (G__36462) {
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
var inst_36528 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36535_38105 = state_36532__$1;
(statearr_36535_38105[(2)] = inst_36528);

(statearr_36535_38105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (20))){
var inst_36497 = (state_36532[(7)]);
var inst_36509 = (state_36532[(2)]);
var inst_36510 = cljs.core.next(inst_36497);
var inst_36483 = inst_36510;
var inst_36484 = null;
var inst_36485 = (0);
var inst_36486 = (0);
var state_36532__$1 = (function (){var statearr_36538 = state_36532;
(statearr_36538[(8)] = inst_36486);

(statearr_36538[(9)] = inst_36509);

(statearr_36538[(10)] = inst_36485);

(statearr_36538[(11)] = inst_36484);

(statearr_36538[(12)] = inst_36483);

return statearr_36538;
})();
var statearr_36541_38109 = state_36532__$1;
(statearr_36541_38109[(2)] = null);

(statearr_36541_38109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (1))){
var state_36532__$1 = state_36532;
var statearr_36542_38110 = state_36532__$1;
(statearr_36542_38110[(2)] = null);

(statearr_36542_38110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (4))){
var inst_36472 = (state_36532[(13)]);
var inst_36472__$1 = (state_36532[(2)]);
var inst_36473 = (inst_36472__$1 == null);
var state_36532__$1 = (function (){var statearr_36544 = state_36532;
(statearr_36544[(13)] = inst_36472__$1);

return statearr_36544;
})();
if(cljs.core.truth_(inst_36473)){
var statearr_36545_38111 = state_36532__$1;
(statearr_36545_38111[(1)] = (5));

} else {
var statearr_36546_38113 = state_36532__$1;
(statearr_36546_38113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (15))){
var state_36532__$1 = state_36532;
var statearr_36550_38115 = state_36532__$1;
(statearr_36550_38115[(2)] = null);

(statearr_36550_38115[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (21))){
var state_36532__$1 = state_36532;
var statearr_36552_38117 = state_36532__$1;
(statearr_36552_38117[(2)] = null);

(statearr_36552_38117[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (13))){
var inst_36486 = (state_36532[(8)]);
var inst_36485 = (state_36532[(10)]);
var inst_36484 = (state_36532[(11)]);
var inst_36483 = (state_36532[(12)]);
var inst_36493 = (state_36532[(2)]);
var inst_36494 = (inst_36486 + (1));
var tmp36547 = inst_36485;
var tmp36548 = inst_36484;
var tmp36549 = inst_36483;
var inst_36483__$1 = tmp36549;
var inst_36484__$1 = tmp36548;
var inst_36485__$1 = tmp36547;
var inst_36486__$1 = inst_36494;
var state_36532__$1 = (function (){var statearr_36554 = state_36532;
(statearr_36554[(8)] = inst_36486__$1);

(statearr_36554[(10)] = inst_36485__$1);

(statearr_36554[(11)] = inst_36484__$1);

(statearr_36554[(14)] = inst_36493);

(statearr_36554[(12)] = inst_36483__$1);

return statearr_36554;
})();
var statearr_36555_38120 = state_36532__$1;
(statearr_36555_38120[(2)] = null);

(statearr_36555_38120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (22))){
var state_36532__$1 = state_36532;
var statearr_36556_38122 = state_36532__$1;
(statearr_36556_38122[(2)] = null);

(statearr_36556_38122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (6))){
var inst_36472 = (state_36532[(13)]);
var inst_36481 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36472) : f.call(null,inst_36472));
var inst_36482 = cljs.core.seq(inst_36481);
var inst_36483 = inst_36482;
var inst_36484 = null;
var inst_36485 = (0);
var inst_36486 = (0);
var state_36532__$1 = (function (){var statearr_36558 = state_36532;
(statearr_36558[(8)] = inst_36486);

(statearr_36558[(10)] = inst_36485);

(statearr_36558[(11)] = inst_36484);

(statearr_36558[(12)] = inst_36483);

return statearr_36558;
})();
var statearr_36559_38123 = state_36532__$1;
(statearr_36559_38123[(2)] = null);

(statearr_36559_38123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (17))){
var inst_36497 = (state_36532[(7)]);
var inst_36502 = cljs.core.chunk_first(inst_36497);
var inst_36503 = cljs.core.chunk_rest(inst_36497);
var inst_36504 = cljs.core.count(inst_36502);
var inst_36483 = inst_36503;
var inst_36484 = inst_36502;
var inst_36485 = inst_36504;
var inst_36486 = (0);
var state_36532__$1 = (function (){var statearr_36561 = state_36532;
(statearr_36561[(8)] = inst_36486);

(statearr_36561[(10)] = inst_36485);

(statearr_36561[(11)] = inst_36484);

(statearr_36561[(12)] = inst_36483);

return statearr_36561;
})();
var statearr_36562_38124 = state_36532__$1;
(statearr_36562_38124[(2)] = null);

(statearr_36562_38124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (3))){
var inst_36530 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36532__$1,inst_36530);
} else {
if((state_val_36533 === (12))){
var inst_36518 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36564_38127 = state_36532__$1;
(statearr_36564_38127[(2)] = inst_36518);

(statearr_36564_38127[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (2))){
var state_36532__$1 = state_36532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36532__$1,(4),in$);
} else {
if((state_val_36533 === (23))){
var inst_36526 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36566_38129 = state_36532__$1;
(statearr_36566_38129[(2)] = inst_36526);

(statearr_36566_38129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (19))){
var inst_36513 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36567_38130 = state_36532__$1;
(statearr_36567_38130[(2)] = inst_36513);

(statearr_36567_38130[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (11))){
var inst_36483 = (state_36532[(12)]);
var inst_36497 = (state_36532[(7)]);
var inst_36497__$1 = cljs.core.seq(inst_36483);
var state_36532__$1 = (function (){var statearr_36569 = state_36532;
(statearr_36569[(7)] = inst_36497__$1);

return statearr_36569;
})();
if(inst_36497__$1){
var statearr_36570_38131 = state_36532__$1;
(statearr_36570_38131[(1)] = (14));

} else {
var statearr_36571_38132 = state_36532__$1;
(statearr_36571_38132[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (9))){
var inst_36520 = (state_36532[(2)]);
var inst_36521 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36532__$1 = (function (){var statearr_36573 = state_36532;
(statearr_36573[(15)] = inst_36520);

return statearr_36573;
})();
if(cljs.core.truth_(inst_36521)){
var statearr_36574_38134 = state_36532__$1;
(statearr_36574_38134[(1)] = (21));

} else {
var statearr_36575_38136 = state_36532__$1;
(statearr_36575_38136[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (5))){
var inst_36475 = cljs.core.async.close_BANG_(out);
var state_36532__$1 = state_36532;
var statearr_36576_38138 = state_36532__$1;
(statearr_36576_38138[(2)] = inst_36475);

(statearr_36576_38138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (14))){
var inst_36497 = (state_36532[(7)]);
var inst_36499 = cljs.core.chunked_seq_QMARK_(inst_36497);
var state_36532__$1 = state_36532;
if(inst_36499){
var statearr_36578_38139 = state_36532__$1;
(statearr_36578_38139[(1)] = (17));

} else {
var statearr_36579_38140 = state_36532__$1;
(statearr_36579_38140[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (16))){
var inst_36516 = (state_36532[(2)]);
var state_36532__$1 = state_36532;
var statearr_36581_38141 = state_36532__$1;
(statearr_36581_38141[(2)] = inst_36516);

(statearr_36581_38141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36533 === (10))){
var inst_36486 = (state_36532[(8)]);
var inst_36484 = (state_36532[(11)]);
var inst_36491 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36484,inst_36486);
var state_36532__$1 = state_36532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36532__$1,(13),out,inst_36491);
} else {
if((state_val_36533 === (18))){
var inst_36497 = (state_36532[(7)]);
var inst_36507 = cljs.core.first(inst_36497);
var state_36532__$1 = state_36532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36532__$1,(20),out,inst_36507);
} else {
if((state_val_36533 === (8))){
var inst_36486 = (state_36532[(8)]);
var inst_36485 = (state_36532[(10)]);
var inst_36488 = (inst_36486 < inst_36485);
var inst_36489 = inst_36488;
var state_36532__$1 = state_36532;
if(cljs.core.truth_(inst_36489)){
var statearr_36583_38143 = state_36532__$1;
(statearr_36583_38143[(1)] = (10));

} else {
var statearr_36584_38144 = state_36532__$1;
(statearr_36584_38144[(1)] = (11));

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
var statearr_36586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36586[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36586[(1)] = (1));

return statearr_36586;
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
}catch (e36587){if((e36587 instanceof Object)){
var ex__34210__auto__ = e36587;
var statearr_36588_38150 = state_36532;
(statearr_36588_38150[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36587;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38151 = state_36532;
state_36532 = G__38151;
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
var state__34275__auto__ = (function (){var statearr_36590 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36590[(6)] = c__34273__auto__);

return statearr_36590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));

return c__34273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36593 = arguments.length;
switch (G__36593) {
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
var G__36598 = arguments.length;
switch (G__36598) {
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
var G__36602 = arguments.length;
switch (G__36602) {
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
var c__34273__auto___38164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36628){
var state_val_36629 = (state_36628[(1)]);
if((state_val_36629 === (7))){
var inst_36623 = (state_36628[(2)]);
var state_36628__$1 = state_36628;
var statearr_36631_38167 = state_36628__$1;
(statearr_36631_38167[(2)] = inst_36623);

(statearr_36631_38167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36629 === (1))){
var inst_36604 = null;
var state_36628__$1 = (function (){var statearr_36632 = state_36628;
(statearr_36632[(7)] = inst_36604);

return statearr_36632;
})();
var statearr_36633_38169 = state_36628__$1;
(statearr_36633_38169[(2)] = null);

(statearr_36633_38169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36629 === (4))){
var inst_36607 = (state_36628[(8)]);
var inst_36607__$1 = (state_36628[(2)]);
var inst_36608 = (inst_36607__$1 == null);
var inst_36609 = cljs.core.not(inst_36608);
var state_36628__$1 = (function (){var statearr_36635 = state_36628;
(statearr_36635[(8)] = inst_36607__$1);

return statearr_36635;
})();
if(inst_36609){
var statearr_36636_38170 = state_36628__$1;
(statearr_36636_38170[(1)] = (5));

} else {
var statearr_36637_38171 = state_36628__$1;
(statearr_36637_38171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36629 === (6))){
var state_36628__$1 = state_36628;
var statearr_36639_38173 = state_36628__$1;
(statearr_36639_38173[(2)] = null);

(statearr_36639_38173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36629 === (3))){
var inst_36625 = (state_36628[(2)]);
var inst_36626 = cljs.core.async.close_BANG_(out);
var state_36628__$1 = (function (){var statearr_36640 = state_36628;
(statearr_36640[(9)] = inst_36625);

return statearr_36640;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36628__$1,inst_36626);
} else {
if((state_val_36629 === (2))){
var state_36628__$1 = state_36628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36628__$1,(4),ch);
} else {
if((state_val_36629 === (11))){
var inst_36607 = (state_36628[(8)]);
var inst_36617 = (state_36628[(2)]);
var inst_36604 = inst_36607;
var state_36628__$1 = (function (){var statearr_36642 = state_36628;
(statearr_36642[(10)] = inst_36617);

(statearr_36642[(7)] = inst_36604);

return statearr_36642;
})();
var statearr_36643_38176 = state_36628__$1;
(statearr_36643_38176[(2)] = null);

(statearr_36643_38176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36629 === (9))){
var inst_36607 = (state_36628[(8)]);
var state_36628__$1 = state_36628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36628__$1,(11),out,inst_36607);
} else {
if((state_val_36629 === (5))){
var inst_36607 = (state_36628[(8)]);
var inst_36604 = (state_36628[(7)]);
var inst_36611 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36607,inst_36604);
var state_36628__$1 = state_36628;
if(inst_36611){
var statearr_36646_38180 = state_36628__$1;
(statearr_36646_38180[(1)] = (8));

} else {
var statearr_36647_38181 = state_36628__$1;
(statearr_36647_38181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36629 === (10))){
var inst_36620 = (state_36628[(2)]);
var state_36628__$1 = state_36628;
var statearr_36649_38182 = state_36628__$1;
(statearr_36649_38182[(2)] = inst_36620);

(statearr_36649_38182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36629 === (8))){
var inst_36604 = (state_36628[(7)]);
var tmp36645 = inst_36604;
var inst_36604__$1 = tmp36645;
var state_36628__$1 = (function (){var statearr_36650 = state_36628;
(statearr_36650[(7)] = inst_36604__$1);

return statearr_36650;
})();
var statearr_36651_38187 = state_36628__$1;
(statearr_36651_38187[(2)] = null);

(statearr_36651_38187[(1)] = (2));


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
var statearr_36653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36653[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36653[(1)] = (1));

return statearr_36653;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36628){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36628);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36654){if((e36654 instanceof Object)){
var ex__34210__auto__ = e36654;
var statearr_36655_38191 = state_36628;
(statearr_36655_38191[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36654;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38192 = state_36628;
state_36628 = G__38192;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36657 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36657[(6)] = c__34273__auto___38164);

return statearr_36657;
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
var c__34273__auto___38197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36701){
var state_val_36702 = (state_36701[(1)]);
if((state_val_36702 === (7))){
var inst_36696 = (state_36701[(2)]);
var state_36701__$1 = state_36701;
var statearr_36704_38198 = state_36701__$1;
(statearr_36704_38198[(2)] = inst_36696);

(statearr_36704_38198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (1))){
var inst_36663 = (new Array(n));
var inst_36664 = inst_36663;
var inst_36665 = (0);
var state_36701__$1 = (function (){var statearr_36705 = state_36701;
(statearr_36705[(7)] = inst_36664);

(statearr_36705[(8)] = inst_36665);

return statearr_36705;
})();
var statearr_36706_38200 = state_36701__$1;
(statearr_36706_38200[(2)] = null);

(statearr_36706_38200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (4))){
var inst_36668 = (state_36701[(9)]);
var inst_36668__$1 = (state_36701[(2)]);
var inst_36669 = (inst_36668__$1 == null);
var inst_36670 = cljs.core.not(inst_36669);
var state_36701__$1 = (function (){var statearr_36708 = state_36701;
(statearr_36708[(9)] = inst_36668__$1);

return statearr_36708;
})();
if(inst_36670){
var statearr_36709_38203 = state_36701__$1;
(statearr_36709_38203[(1)] = (5));

} else {
var statearr_36710_38204 = state_36701__$1;
(statearr_36710_38204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (15))){
var inst_36690 = (state_36701[(2)]);
var state_36701__$1 = state_36701;
var statearr_36712_38206 = state_36701__$1;
(statearr_36712_38206[(2)] = inst_36690);

(statearr_36712_38206[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (13))){
var state_36701__$1 = state_36701;
var statearr_36713_38207 = state_36701__$1;
(statearr_36713_38207[(2)] = null);

(statearr_36713_38207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (6))){
var inst_36665 = (state_36701[(8)]);
var inst_36686 = (inst_36665 > (0));
var state_36701__$1 = state_36701;
if(cljs.core.truth_(inst_36686)){
var statearr_36715_38208 = state_36701__$1;
(statearr_36715_38208[(1)] = (12));

} else {
var statearr_36716_38209 = state_36701__$1;
(statearr_36716_38209[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (3))){
var inst_36699 = (state_36701[(2)]);
var state_36701__$1 = state_36701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36701__$1,inst_36699);
} else {
if((state_val_36702 === (12))){
var inst_36664 = (state_36701[(7)]);
var inst_36688 = cljs.core.vec(inst_36664);
var state_36701__$1 = state_36701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36701__$1,(15),out,inst_36688);
} else {
if((state_val_36702 === (2))){
var state_36701__$1 = state_36701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36701__$1,(4),ch);
} else {
if((state_val_36702 === (11))){
var inst_36680 = (state_36701[(2)]);
var inst_36681 = (new Array(n));
var inst_36664 = inst_36681;
var inst_36665 = (0);
var state_36701__$1 = (function (){var statearr_36718 = state_36701;
(statearr_36718[(7)] = inst_36664);

(statearr_36718[(10)] = inst_36680);

(statearr_36718[(8)] = inst_36665);

return statearr_36718;
})();
var statearr_36720_38211 = state_36701__$1;
(statearr_36720_38211[(2)] = null);

(statearr_36720_38211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (9))){
var inst_36664 = (state_36701[(7)]);
var inst_36678 = cljs.core.vec(inst_36664);
var state_36701__$1 = state_36701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36701__$1,(11),out,inst_36678);
} else {
if((state_val_36702 === (5))){
var inst_36668 = (state_36701[(9)]);
var inst_36664 = (state_36701[(7)]);
var inst_36673 = (state_36701[(11)]);
var inst_36665 = (state_36701[(8)]);
var inst_36672 = (inst_36664[inst_36665] = inst_36668);
var inst_36673__$1 = (inst_36665 + (1));
var inst_36674 = (inst_36673__$1 < n);
var state_36701__$1 = (function (){var statearr_36722 = state_36701;
(statearr_36722[(11)] = inst_36673__$1);

(statearr_36722[(12)] = inst_36672);

return statearr_36722;
})();
if(cljs.core.truth_(inst_36674)){
var statearr_36723_38215 = state_36701__$1;
(statearr_36723_38215[(1)] = (8));

} else {
var statearr_36724_38216 = state_36701__$1;
(statearr_36724_38216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (14))){
var inst_36693 = (state_36701[(2)]);
var inst_36694 = cljs.core.async.close_BANG_(out);
var state_36701__$1 = (function (){var statearr_36727 = state_36701;
(statearr_36727[(13)] = inst_36693);

return statearr_36727;
})();
var statearr_36728_38217 = state_36701__$1;
(statearr_36728_38217[(2)] = inst_36694);

(statearr_36728_38217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (10))){
var inst_36684 = (state_36701[(2)]);
var state_36701__$1 = state_36701;
var statearr_36729_38218 = state_36701__$1;
(statearr_36729_38218[(2)] = inst_36684);

(statearr_36729_38218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (8))){
var inst_36664 = (state_36701[(7)]);
var inst_36673 = (state_36701[(11)]);
var tmp36725 = inst_36664;
var inst_36664__$1 = tmp36725;
var inst_36665 = inst_36673;
var state_36701__$1 = (function (){var statearr_36731 = state_36701;
(statearr_36731[(7)] = inst_36664__$1);

(statearr_36731[(8)] = inst_36665);

return statearr_36731;
})();
var statearr_36732_38222 = state_36701__$1;
(statearr_36732_38222[(2)] = null);

(statearr_36732_38222[(1)] = (2));


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
var statearr_36734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36734[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36734[(1)] = (1));

return statearr_36734;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36701){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36701);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36735){if((e36735 instanceof Object)){
var ex__34210__auto__ = e36735;
var statearr_36736_38223 = state_36701;
(statearr_36736_38223[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36735;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38224 = state_36701;
state_36701 = G__38224;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36737 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36737[(6)] = c__34273__auto___38197);

return statearr_36737;
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
var G__36739 = arguments.length;
switch (G__36739) {
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
var c__34273__auto___38227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34274__auto__ = (function (){var switch__34206__auto__ = (function (state_36782){
var state_val_36783 = (state_36782[(1)]);
if((state_val_36783 === (7))){
var inst_36778 = (state_36782[(2)]);
var state_36782__$1 = state_36782;
var statearr_36785_38228 = state_36782__$1;
(statearr_36785_38228[(2)] = inst_36778);

(statearr_36785_38228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (1))){
var inst_36740 = [];
var inst_36741 = inst_36740;
var inst_36742 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36782__$1 = (function (){var statearr_36787 = state_36782;
(statearr_36787[(7)] = inst_36741);

(statearr_36787[(8)] = inst_36742);

return statearr_36787;
})();
var statearr_36788_38229 = state_36782__$1;
(statearr_36788_38229[(2)] = null);

(statearr_36788_38229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (4))){
var inst_36745 = (state_36782[(9)]);
var inst_36745__$1 = (state_36782[(2)]);
var inst_36746 = (inst_36745__$1 == null);
var inst_36747 = cljs.core.not(inst_36746);
var state_36782__$1 = (function (){var statearr_36790 = state_36782;
(statearr_36790[(9)] = inst_36745__$1);

return statearr_36790;
})();
if(inst_36747){
var statearr_36791_38231 = state_36782__$1;
(statearr_36791_38231[(1)] = (5));

} else {
var statearr_36792_38232 = state_36782__$1;
(statearr_36792_38232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (15))){
var inst_36772 = (state_36782[(2)]);
var state_36782__$1 = state_36782;
var statearr_36793_38233 = state_36782__$1;
(statearr_36793_38233[(2)] = inst_36772);

(statearr_36793_38233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (13))){
var state_36782__$1 = state_36782;
var statearr_36795_38235 = state_36782__$1;
(statearr_36795_38235[(2)] = null);

(statearr_36795_38235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (6))){
var inst_36741 = (state_36782[(7)]);
var inst_36767 = inst_36741.length;
var inst_36768 = (inst_36767 > (0));
var state_36782__$1 = state_36782;
if(cljs.core.truth_(inst_36768)){
var statearr_36796_38236 = state_36782__$1;
(statearr_36796_38236[(1)] = (12));

} else {
var statearr_36797_38237 = state_36782__$1;
(statearr_36797_38237[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (3))){
var inst_36780 = (state_36782[(2)]);
var state_36782__$1 = state_36782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36782__$1,inst_36780);
} else {
if((state_val_36783 === (12))){
var inst_36741 = (state_36782[(7)]);
var inst_36770 = cljs.core.vec(inst_36741);
var state_36782__$1 = state_36782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36782__$1,(15),out,inst_36770);
} else {
if((state_val_36783 === (2))){
var state_36782__$1 = state_36782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36782__$1,(4),ch);
} else {
if((state_val_36783 === (11))){
var inst_36745 = (state_36782[(9)]);
var inst_36749 = (state_36782[(10)]);
var inst_36760 = (state_36782[(2)]);
var inst_36761 = [];
var inst_36762 = inst_36761.push(inst_36745);
var inst_36741 = inst_36761;
var inst_36742 = inst_36749;
var state_36782__$1 = (function (){var statearr_36800 = state_36782;
(statearr_36800[(7)] = inst_36741);

(statearr_36800[(11)] = inst_36760);

(statearr_36800[(8)] = inst_36742);

(statearr_36800[(12)] = inst_36762);

return statearr_36800;
})();
var statearr_36801_38239 = state_36782__$1;
(statearr_36801_38239[(2)] = null);

(statearr_36801_38239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (9))){
var inst_36741 = (state_36782[(7)]);
var inst_36758 = cljs.core.vec(inst_36741);
var state_36782__$1 = state_36782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36782__$1,(11),out,inst_36758);
} else {
if((state_val_36783 === (5))){
var inst_36745 = (state_36782[(9)]);
var inst_36749 = (state_36782[(10)]);
var inst_36742 = (state_36782[(8)]);
var inst_36749__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36745) : f.call(null,inst_36745));
var inst_36751 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36749__$1,inst_36742);
var inst_36752 = cljs.core.keyword_identical_QMARK_(inst_36742,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36753 = ((inst_36751) || (inst_36752));
var state_36782__$1 = (function (){var statearr_36804 = state_36782;
(statearr_36804[(10)] = inst_36749__$1);

return statearr_36804;
})();
if(cljs.core.truth_(inst_36753)){
var statearr_36805_38241 = state_36782__$1;
(statearr_36805_38241[(1)] = (8));

} else {
var statearr_36806_38242 = state_36782__$1;
(statearr_36806_38242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (14))){
var inst_36775 = (state_36782[(2)]);
var inst_36776 = cljs.core.async.close_BANG_(out);
var state_36782__$1 = (function (){var statearr_36808 = state_36782;
(statearr_36808[(13)] = inst_36775);

return statearr_36808;
})();
var statearr_36810_38243 = state_36782__$1;
(statearr_36810_38243[(2)] = inst_36776);

(statearr_36810_38243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (10))){
var inst_36765 = (state_36782[(2)]);
var state_36782__$1 = state_36782;
var statearr_36811_38245 = state_36782__$1;
(statearr_36811_38245[(2)] = inst_36765);

(statearr_36811_38245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36783 === (8))){
var inst_36745 = (state_36782[(9)]);
var inst_36749 = (state_36782[(10)]);
var inst_36741 = (state_36782[(7)]);
var inst_36755 = inst_36741.push(inst_36745);
var tmp36807 = inst_36741;
var inst_36741__$1 = tmp36807;
var inst_36742 = inst_36749;
var state_36782__$1 = (function (){var statearr_36813 = state_36782;
(statearr_36813[(14)] = inst_36755);

(statearr_36813[(7)] = inst_36741__$1);

(statearr_36813[(8)] = inst_36742);

return statearr_36813;
})();
var statearr_36814_38246 = state_36782__$1;
(statearr_36814_38246[(2)] = null);

(statearr_36814_38246[(1)] = (2));


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
var statearr_36816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36816[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36816[(1)] = (1));

return statearr_36816;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36782){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36782);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36817){if((e36817 instanceof Object)){
var ex__34210__auto__ = e36817;
var statearr_36818_38248 = state_36782;
(statearr_36818_38248[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36817;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38250 = state_36782;
state_36782 = G__38250;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34275__auto__ = (function (){var statearr_36820 = (f__34274__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34274__auto__.cljs$core$IFn$_invoke$arity$0() : f__34274__auto__.call(null));
(statearr_36820[(6)] = c__34273__auto___38227);

return statearr_36820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34275__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
