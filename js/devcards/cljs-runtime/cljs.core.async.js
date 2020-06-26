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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34335 = (function (f,blockable,meta34336){
this.f = f;
this.blockable = blockable;
this.meta34336 = meta34336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34337,meta34336__$1){
var self__ = this;
var _34337__$1 = this;
return (new cljs.core.async.t_cljs$core$async34335(self__.f,self__.blockable,meta34336__$1));
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34337){
var self__ = this;
var _34337__$1 = this;
return self__.meta34336;
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34336","meta34336",1337269977,null)], null);
}));

(cljs.core.async.t_cljs$core$async34335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34335");

(cljs.core.async.t_cljs$core$async34335.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34335.
 */
cljs.core.async.__GT_t_cljs$core$async34335 = (function cljs$core$async$__GT_t_cljs$core$async34335(f__$1,blockable__$1,meta34336){
return (new cljs.core.async.t_cljs$core$async34335(f__$1,blockable__$1,meta34336));
});

}

return (new cljs.core.async.t_cljs$core$async34335(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var val_36809 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36809) : fn1.call(null,val_36809));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36809) : fn1.call(null,val_36809));
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
var n__4666__auto___36815 = n;
var x_36816 = (0);
while(true){
if((x_36816 < n__4666__auto___36815)){
(a[x_36816] = x_36816);

var G__36817 = (x_36816 + (1));
x_36816 = G__36817;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34354 = (function (flag,cb,meta34355){
this.flag = flag;
this.cb = cb;
this.meta34355 = meta34355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34356,meta34355__$1){
var self__ = this;
var _34356__$1 = this;
return (new cljs.core.async.t_cljs$core$async34354(self__.flag,self__.cb,meta34355__$1));
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34356){
var self__ = this;
var _34356__$1 = this;
return self__.meta34355;
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34355","meta34355",-157438434,null)], null);
}));

(cljs.core.async.t_cljs$core$async34354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34354");

(cljs.core.async.t_cljs$core$async34354.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34354.
 */
cljs.core.async.__GT_t_cljs$core$async34354 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34354(flag__$1,cb__$1,meta34355){
return (new cljs.core.async.t_cljs$core$async34354(flag__$1,cb__$1,meta34355));
});

}

return (new cljs.core.async.t_cljs$core$async34354(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36825 = (i + (1));
i = G__36825;
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
var len__4789__auto___36828 = arguments.length;
var i__4790__auto___36829 = (0);
while(true){
if((i__4790__auto___36829 < len__4789__auto___36828)){
args__4795__auto__.push((arguments[i__4790__auto___36829]));

var G__36830 = (i__4790__auto___36829 + (1));
i__4790__auto___36829 = G__36830;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34371){
var map__34372 = p__34371;
var map__34372__$1 = (((((!((map__34372 == null))))?(((((map__34372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34372):map__34372);
var opts = map__34372__$1;
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
var c__34274__auto___36835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34416 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36836 = state_34423__$1;
(statearr_34425_36836[(2)] = inst_34416);

(statearr_34425_36836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36838 = state_34423__$1;
(statearr_34426_36838[(2)] = null);

(statearr_34426_36838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (4))){
var inst_34390 = (state_34423[(7)]);
var inst_34390__$1 = (state_34423[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34423__$1 = (function (){var statearr_34427 = state_34423;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36839 = state_34423__$1;
(statearr_34428_36839[(1)] = (5));

} else {
var statearr_34429_36840 = state_34423__$1;
(statearr_34429_36840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36842 = state_34423__$1;
(statearr_34430_36842[(2)] = null);

(statearr_34430_36842[(1)] = (14));


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
var statearr_34431_36844 = state_34423__$1;
(statearr_34431_36844[(2)] = null);

(statearr_34431_36844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (2))){
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34423__$1,(4),from);
} else {
if((state_val_34424 === (11))){
var inst_34403 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
if(cljs.core.truth_(inst_34403)){
var statearr_34432_36845 = state_34423__$1;
(statearr_34432_36845[(1)] = (12));

} else {
var statearr_34433_36846 = state_34423__$1;
(statearr_34433_36846[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34434_36848 = state_34423__$1;
(statearr_34434_36848[(2)] = null);

(statearr_34434_36848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36849 = state_34423__$1;
(statearr_34435_36849[(1)] = (8));

} else {
var statearr_34436_36850 = state_34423__$1;
(statearr_34436_36850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34414 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_36851 = state_34423__$1;
(statearr_34437_36851[(2)] = inst_34414);

(statearr_34437_36851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34400 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34438_36853 = state_34423__$1;
(statearr_34438_36853[(2)] = inst_34400);

(statearr_34438_36853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34439_36854 = state_34423__$1;
(statearr_34439_36854[(2)] = inst_34394);

(statearr_34439_36854[(1)] = (10));


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
var statearr_34442_36856 = state_34423;
(statearr_34442_36856[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36857 = state_34423;
state_34423 = G__36857;
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
(statearr_34443[(6)] = c__34274__auto___36835);

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
var c__34274__auto___36860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34462_36863 = state_34456;
(statearr_34462_36863[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36864 = state_34456;
state_34456 = G__36864;
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
(statearr_34463[(6)] = c__34274__auto___36860);

return statearr_34463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34465){
var vec__34467 = p__34465;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34467,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34467,(1),null);
var job = vec__34467;
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
var n__4666__auto___36867 = n;
var __36868 = (0);
while(true){
if((__36868 < n__4666__auto___36867)){
var G__34470_36869 = type;
var G__34470_36870__$1 = (((G__34470_36869 instanceof cljs.core.Keyword))?G__34470_36869.fqn:null);
switch (G__34470_36870__$1) {
case "compute":
var c__34274__auto___36872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36868,c__34274__auto___36872,G__34470_36869,G__34470_36870__$1,n__4666__auto___36867,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36868,c__34274__auto___36872,G__34470_36869,G__34470_36870__$1,n__4666__auto___36867,jobs,results,process,async){
return (function (state_34484){
var state_val_34485 = (state_34484[(1)]);
if((state_val_34485 === (1))){
var state_34484__$1 = state_34484;
var statearr_34486_36874 = state_34484__$1;
(statearr_34486_36874[(2)] = null);

(statearr_34486_36874[(1)] = (2));


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
var statearr_34492_36876 = state_34484__$1;
(statearr_34492_36876[(1)] = (5));

} else {
var statearr_34493_36877 = state_34484__$1;
(statearr_34493_36877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (5))){
var state_34484__$1 = state_34484;
var statearr_34496_36878 = state_34484__$1;
(statearr_34496_36878[(2)] = null);

(statearr_34496_36878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (6))){
var state_34484__$1 = state_34484;
var statearr_34497_36879 = state_34484__$1;
(statearr_34497_36879[(2)] = null);

(statearr_34497_36879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (7))){
var inst_34480 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
var statearr_34498_36881 = state_34484__$1;
(statearr_34498_36881[(2)] = inst_34480);

(statearr_34498_36881[(1)] = (3));


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
});})(__36868,c__34274__auto___36872,G__34470_36869,G__34470_36870__$1,n__4666__auto___36867,jobs,results,process,async))
;
return ((function (__36868,switch__34206__auto__,c__34274__auto___36872,G__34470_36869,G__34470_36870__$1,n__4666__auto___36867,jobs,results,process,async){
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
var statearr_34501_36883 = state_34484;
(statearr_34501_36883[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36884 = state_34484;
state_34484 = G__36884;
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
;})(__36868,switch__34206__auto__,c__34274__auto___36872,G__34470_36869,G__34470_36870__$1,n__4666__auto___36867,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34502 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34502[(6)] = c__34274__auto___36872);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36868,c__34274__auto___36872,G__34470_36869,G__34470_36870__$1,n__4666__auto___36867,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36868,c__34274__auto___36886,G__34470_36869,G__34470_36870__$1,n__4666__auto___36867,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36868,c__34274__auto___36886,G__34470_36869,G__34470_36870__$1,n__4666__auto___36867,jobs,results,process,async){
return (function (state_34516){
var state_val_34517 = (state_34516[(1)]);
if((state_val_34517 === (1))){
var state_34516__$1 = state_34516;
var statearr_34518_36888 = state_34516__$1;
(statearr_34518_36888[(2)] = null);

(statearr_34518_36888[(1)] = (2));


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
var inst_34505 = (state_34516[(2)]);
var inst_34507 = async(inst_34505);
var state_34516__$1 = state_34516;
if(cljs.core.truth_(inst_34507)){
var statearr_34519_36890 = state_34516__$1;
(statearr_34519_36890[(1)] = (5));

} else {
var statearr_34521_36891 = state_34516__$1;
(statearr_34521_36891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (5))){
var state_34516__$1 = state_34516;
var statearr_34525_36892 = state_34516__$1;
(statearr_34525_36892[(2)] = null);

(statearr_34525_36892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (6))){
var state_34516__$1 = state_34516;
var statearr_34526_36893 = state_34516__$1;
(statearr_34526_36893[(2)] = null);

(statearr_34526_36893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (7))){
var inst_34512 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
var statearr_34530_36894 = state_34516__$1;
(statearr_34530_36894[(2)] = inst_34512);

(statearr_34530_36894[(1)] = (3));


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
});})(__36868,c__34274__auto___36886,G__34470_36869,G__34470_36870__$1,n__4666__auto___36867,jobs,results,process,async))
;
return ((function (__36868,switch__34206__auto__,c__34274__auto___36886,G__34470_36869,G__34470_36870__$1,n__4666__auto___36867,jobs,results,process,async){
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
var statearr_34533_36897 = state_34516;
(statearr_34533_36897[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36898 = state_34516;
state_34516 = G__36898;
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
;})(__36868,switch__34206__auto__,c__34274__auto___36886,G__34470_36869,G__34470_36870__$1,n__4666__auto___36867,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34534 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34534[(6)] = c__34274__auto___36886);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36868,c__34274__auto___36886,G__34470_36869,G__34470_36870__$1,n__4666__auto___36867,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34470_36870__$1)].join('')));

}

var G__36900 = (__36868 + (1));
__36868 = G__36900;
continue;
} else {
}
break;
}

var c__34274__auto___36901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34558){
var state_val_34559 = (state_34558[(1)]);
if((state_val_34559 === (7))){
var inst_34552 = (state_34558[(2)]);
var state_34558__$1 = state_34558;
var statearr_34561_36902 = state_34558__$1;
(statearr_34561_36902[(2)] = inst_34552);

(statearr_34561_36902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (1))){
var state_34558__$1 = state_34558;
var statearr_34562_36904 = state_34558__$1;
(statearr_34562_36904[(2)] = null);

(statearr_34562_36904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (4))){
var inst_34537 = (state_34558[(7)]);
var inst_34537__$1 = (state_34558[(2)]);
var inst_34538 = (inst_34537__$1 == null);
var state_34558__$1 = (function (){var statearr_34563 = state_34558;
(statearr_34563[(7)] = inst_34537__$1);

return statearr_34563;
})();
if(cljs.core.truth_(inst_34538)){
var statearr_34564_36905 = state_34558__$1;
(statearr_34564_36905[(1)] = (5));

} else {
var statearr_34565_36907 = state_34558__$1;
(statearr_34565_36907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (6))){
var inst_34542 = (state_34558[(8)]);
var inst_34537 = (state_34558[(7)]);
var inst_34542__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34544 = [inst_34537,inst_34542__$1];
var inst_34545 = (new cljs.core.PersistentVector(null,2,(5),inst_34543,inst_34544,null));
var state_34558__$1 = (function (){var statearr_34566 = state_34558;
(statearr_34566[(8)] = inst_34542__$1);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34558__$1,(8),jobs,inst_34545);
} else {
if((state_val_34559 === (3))){
var inst_34554 = (state_34558[(2)]);
var state_34558__$1 = state_34558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34558__$1,inst_34554);
} else {
if((state_val_34559 === (2))){
var state_34558__$1 = state_34558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34558__$1,(4),from);
} else {
if((state_val_34559 === (9))){
var inst_34549 = (state_34558[(2)]);
var state_34558__$1 = (function (){var statearr_34567 = state_34558;
(statearr_34567[(9)] = inst_34549);

return statearr_34567;
})();
var statearr_34568_36909 = state_34558__$1;
(statearr_34568_36909[(2)] = null);

(statearr_34568_36909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(jobs);
var state_34558__$1 = state_34558;
var statearr_34569_36911 = state_34558__$1;
(statearr_34569_36911[(2)] = inst_34540);

(statearr_34569_36911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (8))){
var inst_34542 = (state_34558[(8)]);
var inst_34547 = (state_34558[(2)]);
var state_34558__$1 = (function (){var statearr_34570 = state_34558;
(statearr_34570[(10)] = inst_34547);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34558__$1,(9),results,inst_34542);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34558){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34558);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34572){if((e34572 instanceof Object)){
var ex__34210__auto__ = e34572;
var statearr_34573_36913 = state_34558;
(statearr_34573_36913[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36914 = state_34558;
state_34558 = G__36914;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34574 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34574[(6)] = c__34274__auto___36901);

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
var statearr_34614_36916 = state_34612__$1;
(statearr_34614_36916[(2)] = inst_34608);

(statearr_34614_36916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36918 = state_34612__$1;
(statearr_34615_36918[(2)] = null);

(statearr_34615_36918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36919 = state_34612__$1;
(statearr_34616_36919[(2)] = null);

(statearr_34616_36919[(1)] = (2));


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
var statearr_34618_36921 = state_34612__$1;
(statearr_34618_36921[(1)] = (5));

} else {
var statearr_34619_36922 = state_34612__$1;
(statearr_34619_36922[(1)] = (6));

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
var statearr_34620_36923 = state_34612__$1;
(statearr_34620_36923[(2)] = inst_34603);

(statearr_34620_36923[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36925 = state_34612__$1;
(statearr_34622_36925[(2)] = null);

(statearr_34622_36925[(1)] = (2));


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
var statearr_34623_36926 = state_34612__$1;
(statearr_34623_36926[(1)] = (19));

} else {
var statearr_34624_36927 = state_34612__$1;
(statearr_34624_36927[(1)] = (20));

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
var statearr_34625_36929 = state_34612__$1;
(statearr_34625_36929[(2)] = null);

(statearr_34625_36929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36931 = state_34612__$1;
(statearr_34627_36931[(2)] = null);

(statearr_34627_36931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36932 = state_34612__$1;
(statearr_34628_36932[(2)] = null);

(statearr_34628_36932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36933 = state_34612__$1;
(statearr_34629_36933[(1)] = (8));

} else {
var statearr_34630_36935 = state_34612__$1;
(statearr_34630_36935[(1)] = (9));

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
var statearr_34632_36936 = state_34612__$1;
(statearr_34632_36936[(1)] = (15));

} else {
var statearr_34633_36937 = state_34612__$1;
(statearr_34633_36937[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36939 = state_34612__$1;
(statearr_34634_36939[(2)] = false);

(statearr_34634_36939[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36940 = state_34612__$1;
(statearr_34635_36940[(2)] = inst_34584);

(statearr_34635_36940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36941 = state_34612__$1;
(statearr_34636_36941[(2)] = inst_34595);

(statearr_34636_36941[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36943 = state_34612__$1;
(statearr_34637_36943[(2)] = inst_34581);

(statearr_34637_36943[(1)] = (10));


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
var statearr_34640_36945 = state_34612;
(statearr_34640_36945[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36946 = state_34612;
state_34612 = G__36946;
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
var G__34648 = arguments.length;
switch (G__34648) {
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
var G__34655 = arguments.length;
switch (G__34655) {
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
var c__34274__auto___36955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34692){
var state_val_34693 = (state_34692[(1)]);
if((state_val_34693 === (7))){
var inst_34688 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34694_36957 = state_34692__$1;
(statearr_34694_36957[(2)] = inst_34688);

(statearr_34694_36957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (1))){
var state_34692__$1 = state_34692;
var statearr_34695_36958 = state_34692__$1;
(statearr_34695_36958[(2)] = null);

(statearr_34695_36958[(1)] = (2));


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
var statearr_34700_36960 = state_34692__$1;
(statearr_34700_36960[(1)] = (5));

} else {
var statearr_34701_36961 = state_34692__$1;
(statearr_34701_36961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (13))){
var state_34692__$1 = state_34692;
var statearr_34702_36962 = state_34692__$1;
(statearr_34702_36962[(2)] = null);

(statearr_34702_36962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (6))){
var inst_34669 = (state_34692[(7)]);
var inst_34675 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34669) : p.call(null,inst_34669));
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34675)){
var statearr_34703_36963 = state_34692__$1;
(statearr_34703_36963[(1)] = (9));

} else {
var statearr_34704_36965 = state_34692__$1;
(statearr_34704_36965[(1)] = (10));

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
var statearr_34708_36966 = state_34692__$1;
(statearr_34708_36966[(2)] = null);

(statearr_34708_36966[(1)] = (2));


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
var statearr_34709_36968 = state_34692__$1;
(statearr_34709_36968[(2)] = tc);

(statearr_34709_36968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (5))){
var inst_34672 = cljs.core.async.close_BANG_(tc);
var inst_34673 = cljs.core.async.close_BANG_(fc);
var state_34692__$1 = (function (){var statearr_34710 = state_34692;
(statearr_34710[(8)] = inst_34672);

return statearr_34710;
})();
var statearr_34711_36969 = state_34692__$1;
(statearr_34711_36969[(2)] = inst_34673);

(statearr_34711_36969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (14))){
var inst_34686 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
var statearr_34715_36971 = state_34692__$1;
(statearr_34715_36971[(2)] = inst_34686);

(statearr_34715_36971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (10))){
var state_34692__$1 = state_34692;
var statearr_34716_36972 = state_34692__$1;
(statearr_34716_36972[(2)] = fc);

(statearr_34716_36972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34693 === (8))){
var inst_34681 = (state_34692[(2)]);
var state_34692__$1 = state_34692;
if(cljs.core.truth_(inst_34681)){
var statearr_34717_36974 = state_34692__$1;
(statearr_34717_36974[(1)] = (12));

} else {
var statearr_34718_36975 = state_34692__$1;
(statearr_34718_36975[(1)] = (13));

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
var statearr_34721_36977 = state_34692;
(statearr_34721_36977[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36978 = state_34692;
state_34692 = G__36978;
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
(statearr_34722[(6)] = c__34274__auto___36955);

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
var statearr_34745_36980 = state_34743__$1;
(statearr_34745_36980[(2)] = inst_34739);

(statearr_34745_36980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (1))){
var inst_34723 = init;
var state_34743__$1 = (function (){var statearr_34746 = state_34743;
(statearr_34746[(7)] = inst_34723);

return statearr_34746;
})();
var statearr_34747_36982 = state_34743__$1;
(statearr_34747_36982[(2)] = null);

(statearr_34747_36982[(1)] = (2));


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
var statearr_34749_36984 = state_34743__$1;
(statearr_34749_36984[(1)] = (5));

} else {
var statearr_34750_36985 = state_34743__$1;
(statearr_34750_36985[(1)] = (6));

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
var statearr_34752_36987 = state_34743__$1;
(statearr_34752_36987[(1)] = (8));

} else {
var statearr_34756_36988 = state_34743__$1;
(statearr_34756_36988[(1)] = (9));

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
var state_34743__$1 = (function (){var statearr_34760 = state_34743;
(statearr_34760[(7)] = inst_34723);

return statearr_34760;
})();
var statearr_34761_36990 = state_34743__$1;
(statearr_34761_36990[(2)] = null);

(statearr_34761_36990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (5))){
var inst_34723 = (state_34743[(7)]);
var state_34743__$1 = state_34743;
var statearr_34763_36991 = state_34743__$1;
(statearr_34763_36991[(2)] = inst_34723);

(statearr_34763_36991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (10))){
var inst_34737 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34764_36992 = state_34743__$1;
(statearr_34764_36992[(2)] = inst_34737);

(statearr_34764_36992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (8))){
var inst_34730 = (state_34743[(9)]);
var inst_34733 = cljs.core.deref(inst_34730);
var state_34743__$1 = state_34743;
var statearr_34765_36994 = state_34743__$1;
(statearr_34765_36994[(2)] = inst_34733);

(statearr_34765_36994[(1)] = (10));


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
var statearr_34768_36996 = state_34743;
(statearr_34768_36996[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36997 = state_34743;
state_34743 = G__36997;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34778){
var state_val_34779 = (state_34778[(1)]);
if((state_val_34779 === (1))){
var inst_34773 = cljs.core.async.reduce(f__$1,init,ch);
var state_34778__$1 = state_34778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34778__$1,(2),inst_34773);
} else {
if((state_val_34779 === (2))){
var inst_34775 = (state_34778[(2)]);
var inst_34776 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34775) : f__$1.call(null,inst_34775));
var state_34778__$1 = state_34778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34778__$1,inst_34776);
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
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34778){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34778);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34784){if((e34784 instanceof Object)){
var ex__34210__auto__ = e34784;
var statearr_34785_37001 = state_34778;
(statearr_34785_37001[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37002 = state_34778;
state_34778 = G__37002;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34778){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34778);
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
var statearr_34821_37006 = state_34819__$1;
(statearr_34821_37006[(2)] = inst_34801);

(statearr_34821_37006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (1))){
var inst_34795 = cljs.core.seq(coll);
var inst_34796 = inst_34795;
var state_34819__$1 = (function (){var statearr_34822 = state_34819;
(statearr_34822[(7)] = inst_34796);

return statearr_34822;
})();
var statearr_34823_37008 = state_34819__$1;
(statearr_34823_37008[(2)] = null);

(statearr_34823_37008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (4))){
var inst_34796 = (state_34819[(7)]);
var inst_34799 = cljs.core.first(inst_34796);
var state_34819__$1 = state_34819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34819__$1,(7),ch,inst_34799);
} else {
if((state_val_34820 === (13))){
var inst_34813 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34824_37010 = state_34819__$1;
(statearr_34824_37010[(2)] = inst_34813);

(statearr_34824_37010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (6))){
var inst_34804 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
if(cljs.core.truth_(inst_34804)){
var statearr_34825_37011 = state_34819__$1;
(statearr_34825_37011[(1)] = (8));

} else {
var statearr_34826_37012 = state_34819__$1;
(statearr_34826_37012[(1)] = (9));

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
var statearr_34827_37014 = state_34819__$1;
(statearr_34827_37014[(2)] = null);

(statearr_34827_37014[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (2))){
var inst_34796 = (state_34819[(7)]);
var state_34819__$1 = state_34819;
if(cljs.core.truth_(inst_34796)){
var statearr_34828_37015 = state_34819__$1;
(statearr_34828_37015[(1)] = (4));

} else {
var statearr_34829_37016 = state_34819__$1;
(statearr_34829_37016[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (11))){
var inst_34810 = cljs.core.async.close_BANG_(ch);
var state_34819__$1 = state_34819;
var statearr_34830_37018 = state_34819__$1;
(statearr_34830_37018[(2)] = inst_34810);

(statearr_34830_37018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (9))){
var state_34819__$1 = state_34819;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34831_37019 = state_34819__$1;
(statearr_34831_37019[(1)] = (11));

} else {
var statearr_34832_37020 = state_34819__$1;
(statearr_34832_37020[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (5))){
var inst_34796 = (state_34819[(7)]);
var state_34819__$1 = state_34819;
var statearr_34833_37021 = state_34819__$1;
(statearr_34833_37021[(2)] = inst_34796);

(statearr_34833_37021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (10))){
var inst_34815 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34834_37023 = state_34819__$1;
(statearr_34834_37023[(2)] = inst_34815);

(statearr_34834_37023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (8))){
var inst_34796 = (state_34819[(7)]);
var inst_34806 = cljs.core.next(inst_34796);
var inst_34796__$1 = inst_34806;
var state_34819__$1 = (function (){var statearr_34835 = state_34819;
(statearr_34835[(7)] = inst_34796__$1);

return statearr_34835;
})();
var statearr_34836_37024 = state_34819__$1;
(statearr_34836_37024[(2)] = null);

(statearr_34836_37024[(1)] = (2));


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
var statearr_34839_37026 = state_34819;
(statearr_34839_37026[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37028 = state_34819;
state_34819 = G__37028;
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
var c__34274__auto___37042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34996){
var state_val_34997 = (state_34996[(1)]);
if((state_val_34997 === (7))){
var inst_34988 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35001_37043 = state_34996__$1;
(statearr_35001_37043[(2)] = inst_34988);

(statearr_35001_37043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (20))){
var inst_34883 = (state_34996[(7)]);
var inst_34895 = cljs.core.first(inst_34883);
var inst_34896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34895,(0),null);
var inst_34897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34895,(1),null);
var state_34996__$1 = (function (){var statearr_35005 = state_34996;
(statearr_35005[(8)] = inst_34896);

return statearr_35005;
})();
if(cljs.core.truth_(inst_34897)){
var statearr_35006_37044 = state_34996__$1;
(statearr_35006_37044[(1)] = (22));

} else {
var statearr_35007_37046 = state_34996__$1;
(statearr_35007_37046[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (27))){
var inst_34929 = (state_34996[(9)]);
var inst_34931 = (state_34996[(10)]);
var inst_34849 = (state_34996[(11)]);
var inst_34937 = (state_34996[(12)]);
var inst_34937__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34929,inst_34931);
var inst_34938 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34937__$1,inst_34849,done);
var state_34996__$1 = (function (){var statearr_35008 = state_34996;
(statearr_35008[(12)] = inst_34937__$1);

return statearr_35008;
})();
if(cljs.core.truth_(inst_34938)){
var statearr_35009_37050 = state_34996__$1;
(statearr_35009_37050[(1)] = (30));

} else {
var statearr_35010_37051 = state_34996__$1;
(statearr_35010_37051[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (1))){
var state_34996__$1 = state_34996;
var statearr_35013_37052 = state_34996__$1;
(statearr_35013_37052[(2)] = null);

(statearr_35013_37052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (24))){
var inst_34883 = (state_34996[(7)]);
var inst_34904 = (state_34996[(2)]);
var inst_34905 = cljs.core.next(inst_34883);
var inst_34860 = inst_34905;
var inst_34861 = null;
var inst_34862 = (0);
var inst_34863 = (0);
var state_34996__$1 = (function (){var statearr_35016 = state_34996;
(statearr_35016[(13)] = inst_34863);

(statearr_35016[(14)] = inst_34862);

(statearr_35016[(15)] = inst_34861);

(statearr_35016[(16)] = inst_34904);

(statearr_35016[(17)] = inst_34860);

return statearr_35016;
})();
var statearr_35029_37054 = state_34996__$1;
(statearr_35029_37054[(2)] = null);

(statearr_35029_37054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (39))){
var state_34996__$1 = state_34996;
var statearr_35036_37055 = state_34996__$1;
(statearr_35036_37055[(2)] = null);

(statearr_35036_37055[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (4))){
var inst_34849 = (state_34996[(11)]);
var inst_34849__$1 = (state_34996[(2)]);
var inst_34851 = (inst_34849__$1 == null);
var state_34996__$1 = (function (){var statearr_35039 = state_34996;
(statearr_35039[(11)] = inst_34849__$1);

return statearr_35039;
})();
if(cljs.core.truth_(inst_34851)){
var statearr_35042_37056 = state_34996__$1;
(statearr_35042_37056[(1)] = (5));

} else {
var statearr_35043_37057 = state_34996__$1;
(statearr_35043_37057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (15))){
var inst_34863 = (state_34996[(13)]);
var inst_34862 = (state_34996[(14)]);
var inst_34861 = (state_34996[(15)]);
var inst_34860 = (state_34996[(17)]);
var inst_34879 = (state_34996[(2)]);
var inst_34880 = (inst_34863 + (1));
var tmp35033 = inst_34862;
var tmp35034 = inst_34861;
var tmp35035 = inst_34860;
var inst_34860__$1 = tmp35035;
var inst_34861__$1 = tmp35034;
var inst_34862__$1 = tmp35033;
var inst_34863__$1 = inst_34880;
var state_34996__$1 = (function (){var statearr_35045 = state_34996;
(statearr_35045[(13)] = inst_34863__$1);

(statearr_35045[(18)] = inst_34879);

(statearr_35045[(14)] = inst_34862__$1);

(statearr_35045[(15)] = inst_34861__$1);

(statearr_35045[(17)] = inst_34860__$1);

return statearr_35045;
})();
var statearr_35049_37058 = state_34996__$1;
(statearr_35049_37058[(2)] = null);

(statearr_35049_37058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (21))){
var inst_34908 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35058_37059 = state_34996__$1;
(statearr_35058_37059[(2)] = inst_34908);

(statearr_35058_37059[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (31))){
var inst_34937 = (state_34996[(12)]);
var inst_34942 = done(null);
var inst_34943 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34937);
var state_34996__$1 = (function (){var statearr_35064 = state_34996;
(statearr_35064[(19)] = inst_34942);

return statearr_35064;
})();
var statearr_35066_37060 = state_34996__$1;
(statearr_35066_37060[(2)] = inst_34943);

(statearr_35066_37060[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (32))){
var inst_34929 = (state_34996[(9)]);
var inst_34931 = (state_34996[(10)]);
var inst_34930 = (state_34996[(20)]);
var inst_34928 = (state_34996[(21)]);
var inst_34945 = (state_34996[(2)]);
var inst_34946 = (inst_34931 + (1));
var tmp35054 = inst_34929;
var tmp35055 = inst_34930;
var tmp35056 = inst_34928;
var inst_34928__$1 = tmp35056;
var inst_34929__$1 = tmp35054;
var inst_34930__$1 = tmp35055;
var inst_34931__$1 = inst_34946;
var state_34996__$1 = (function (){var statearr_35079 = state_34996;
(statearr_35079[(9)] = inst_34929__$1);

(statearr_35079[(10)] = inst_34931__$1);

(statearr_35079[(20)] = inst_34930__$1);

(statearr_35079[(21)] = inst_34928__$1);

(statearr_35079[(22)] = inst_34945);

return statearr_35079;
})();
var statearr_35084_37061 = state_34996__$1;
(statearr_35084_37061[(2)] = null);

(statearr_35084_37061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (40))){
var inst_34958 = (state_34996[(23)]);
var inst_34962 = done(null);
var inst_34963 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34958);
var state_34996__$1 = (function (){var statearr_35087 = state_34996;
(statearr_35087[(24)] = inst_34962);

return statearr_35087;
})();
var statearr_35089_37062 = state_34996__$1;
(statearr_35089_37062[(2)] = inst_34963);

(statearr_35089_37062[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (33))){
var inst_34949 = (state_34996[(25)]);
var inst_34951 = cljs.core.chunked_seq_QMARK_(inst_34949);
var state_34996__$1 = state_34996;
if(inst_34951){
var statearr_35094_37065 = state_34996__$1;
(statearr_35094_37065[(1)] = (36));

} else {
var statearr_35095_37066 = state_34996__$1;
(statearr_35095_37066[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (13))){
var inst_34873 = (state_34996[(26)]);
var inst_34876 = cljs.core.async.close_BANG_(inst_34873);
var state_34996__$1 = state_34996;
var statearr_35099_37069 = state_34996__$1;
(statearr_35099_37069[(2)] = inst_34876);

(statearr_35099_37069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (22))){
var inst_34896 = (state_34996[(8)]);
var inst_34901 = cljs.core.async.close_BANG_(inst_34896);
var state_34996__$1 = state_34996;
var statearr_35105_37072 = state_34996__$1;
(statearr_35105_37072[(2)] = inst_34901);

(statearr_35105_37072[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (36))){
var inst_34949 = (state_34996[(25)]);
var inst_34953 = cljs.core.chunk_first(inst_34949);
var inst_34954 = cljs.core.chunk_rest(inst_34949);
var inst_34955 = cljs.core.count(inst_34953);
var inst_34928 = inst_34954;
var inst_34929 = inst_34953;
var inst_34930 = inst_34955;
var inst_34931 = (0);
var state_34996__$1 = (function (){var statearr_35112 = state_34996;
(statearr_35112[(9)] = inst_34929);

(statearr_35112[(10)] = inst_34931);

(statearr_35112[(20)] = inst_34930);

(statearr_35112[(21)] = inst_34928);

return statearr_35112;
})();
var statearr_35116_37073 = state_34996__$1;
(statearr_35116_37073[(2)] = null);

(statearr_35116_37073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (41))){
var inst_34949 = (state_34996[(25)]);
var inst_34965 = (state_34996[(2)]);
var inst_34966 = cljs.core.next(inst_34949);
var inst_34928 = inst_34966;
var inst_34929 = null;
var inst_34930 = (0);
var inst_34931 = (0);
var state_34996__$1 = (function (){var statearr_35122 = state_34996;
(statearr_35122[(9)] = inst_34929);

(statearr_35122[(10)] = inst_34931);

(statearr_35122[(20)] = inst_34930);

(statearr_35122[(27)] = inst_34965);

(statearr_35122[(21)] = inst_34928);

return statearr_35122;
})();
var statearr_35127_37074 = state_34996__$1;
(statearr_35127_37074[(2)] = null);

(statearr_35127_37074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (43))){
var state_34996__$1 = state_34996;
var statearr_35131_37075 = state_34996__$1;
(statearr_35131_37075[(2)] = null);

(statearr_35131_37075[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (29))){
var inst_34974 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35137_37076 = state_34996__$1;
(statearr_35137_37076[(2)] = inst_34974);

(statearr_35137_37076[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (44))){
var inst_34984 = (state_34996[(2)]);
var state_34996__$1 = (function (){var statearr_35143 = state_34996;
(statearr_35143[(28)] = inst_34984);

return statearr_35143;
})();
var statearr_35145_37079 = state_34996__$1;
(statearr_35145_37079[(2)] = null);

(statearr_35145_37079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (6))){
var inst_34919 = (state_34996[(29)]);
var inst_34918 = cljs.core.deref(cs);
var inst_34919__$1 = cljs.core.keys(inst_34918);
var inst_34920 = cljs.core.count(inst_34919__$1);
var inst_34921 = cljs.core.reset_BANG_(dctr,inst_34920);
var inst_34927 = cljs.core.seq(inst_34919__$1);
var inst_34928 = inst_34927;
var inst_34929 = null;
var inst_34930 = (0);
var inst_34931 = (0);
var state_34996__$1 = (function (){var statearr_35146 = state_34996;
(statearr_35146[(9)] = inst_34929);

(statearr_35146[(10)] = inst_34931);

(statearr_35146[(29)] = inst_34919__$1);

(statearr_35146[(30)] = inst_34921);

(statearr_35146[(20)] = inst_34930);

(statearr_35146[(21)] = inst_34928);

return statearr_35146;
})();
var statearr_35147_37084 = state_34996__$1;
(statearr_35147_37084[(2)] = null);

(statearr_35147_37084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (28))){
var inst_34949 = (state_34996[(25)]);
var inst_34928 = (state_34996[(21)]);
var inst_34949__$1 = cljs.core.seq(inst_34928);
var state_34996__$1 = (function (){var statearr_35148 = state_34996;
(statearr_35148[(25)] = inst_34949__$1);

return statearr_35148;
})();
if(inst_34949__$1){
var statearr_35149_37085 = state_34996__$1;
(statearr_35149_37085[(1)] = (33));

} else {
var statearr_35151_37086 = state_34996__$1;
(statearr_35151_37086[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (25))){
var inst_34931 = (state_34996[(10)]);
var inst_34930 = (state_34996[(20)]);
var inst_34934 = (inst_34931 < inst_34930);
var inst_34935 = inst_34934;
var state_34996__$1 = state_34996;
if(cljs.core.truth_(inst_34935)){
var statearr_35153_37090 = state_34996__$1;
(statearr_35153_37090[(1)] = (27));

} else {
var statearr_35154_37092 = state_34996__$1;
(statearr_35154_37092[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (34))){
var state_34996__$1 = state_34996;
var statearr_35178_37093 = state_34996__$1;
(statearr_35178_37093[(2)] = null);

(statearr_35178_37093[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (17))){
var state_34996__$1 = state_34996;
var statearr_35181_37094 = state_34996__$1;
(statearr_35181_37094[(2)] = null);

(statearr_35181_37094[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (3))){
var inst_34990 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34996__$1,inst_34990);
} else {
if((state_val_34997 === (12))){
var inst_34913 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35184_37100 = state_34996__$1;
(statearr_35184_37100[(2)] = inst_34913);

(statearr_35184_37100[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (2))){
var state_34996__$1 = state_34996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34996__$1,(4),ch);
} else {
if((state_val_34997 === (23))){
var state_34996__$1 = state_34996;
var statearr_35187_37103 = state_34996__$1;
(statearr_35187_37103[(2)] = null);

(statearr_35187_37103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (35))){
var inst_34972 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35189_37106 = state_34996__$1;
(statearr_35189_37106[(2)] = inst_34972);

(statearr_35189_37106[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (19))){
var inst_34883 = (state_34996[(7)]);
var inst_34887 = cljs.core.chunk_first(inst_34883);
var inst_34888 = cljs.core.chunk_rest(inst_34883);
var inst_34889 = cljs.core.count(inst_34887);
var inst_34860 = inst_34888;
var inst_34861 = inst_34887;
var inst_34862 = inst_34889;
var inst_34863 = (0);
var state_34996__$1 = (function (){var statearr_35197 = state_34996;
(statearr_35197[(13)] = inst_34863);

(statearr_35197[(14)] = inst_34862);

(statearr_35197[(15)] = inst_34861);

(statearr_35197[(17)] = inst_34860);

return statearr_35197;
})();
var statearr_35199_37113 = state_34996__$1;
(statearr_35199_37113[(2)] = null);

(statearr_35199_37113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (11))){
var inst_34883 = (state_34996[(7)]);
var inst_34860 = (state_34996[(17)]);
var inst_34883__$1 = cljs.core.seq(inst_34860);
var state_34996__$1 = (function (){var statearr_35206 = state_34996;
(statearr_35206[(7)] = inst_34883__$1);

return statearr_35206;
})();
if(inst_34883__$1){
var statearr_35212_37121 = state_34996__$1;
(statearr_35212_37121[(1)] = (16));

} else {
var statearr_35213_37122 = state_34996__$1;
(statearr_35213_37122[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (9))){
var inst_34915 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35221_37123 = state_34996__$1;
(statearr_35221_37123[(2)] = inst_34915);

(statearr_35221_37123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (5))){
var inst_34857 = cljs.core.deref(cs);
var inst_34858 = cljs.core.seq(inst_34857);
var inst_34860 = inst_34858;
var inst_34861 = null;
var inst_34862 = (0);
var inst_34863 = (0);
var state_34996__$1 = (function (){var statearr_35223 = state_34996;
(statearr_35223[(13)] = inst_34863);

(statearr_35223[(14)] = inst_34862);

(statearr_35223[(15)] = inst_34861);

(statearr_35223[(17)] = inst_34860);

return statearr_35223;
})();
var statearr_35230_37126 = state_34996__$1;
(statearr_35230_37126[(2)] = null);

(statearr_35230_37126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (14))){
var state_34996__$1 = state_34996;
var statearr_35233_37129 = state_34996__$1;
(statearr_35233_37129[(2)] = null);

(statearr_35233_37129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (45))){
var inst_34981 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35239_37133 = state_34996__$1;
(statearr_35239_37133[(2)] = inst_34981);

(statearr_35239_37133[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (26))){
var inst_34919 = (state_34996[(29)]);
var inst_34976 = (state_34996[(2)]);
var inst_34977 = cljs.core.seq(inst_34919);
var state_34996__$1 = (function (){var statearr_35245 = state_34996;
(statearr_35245[(31)] = inst_34976);

return statearr_35245;
})();
if(inst_34977){
var statearr_35247_37137 = state_34996__$1;
(statearr_35247_37137[(1)] = (42));

} else {
var statearr_35249_37139 = state_34996__$1;
(statearr_35249_37139[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (16))){
var inst_34883 = (state_34996[(7)]);
var inst_34885 = cljs.core.chunked_seq_QMARK_(inst_34883);
var state_34996__$1 = state_34996;
if(inst_34885){
var statearr_35254_37142 = state_34996__$1;
(statearr_35254_37142[(1)] = (19));

} else {
var statearr_35256_37143 = state_34996__$1;
(statearr_35256_37143[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (38))){
var inst_34969 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35261_37144 = state_34996__$1;
(statearr_35261_37144[(2)] = inst_34969);

(statearr_35261_37144[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (30))){
var state_34996__$1 = state_34996;
var statearr_35267_37146 = state_34996__$1;
(statearr_35267_37146[(2)] = null);

(statearr_35267_37146[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (10))){
var inst_34863 = (state_34996[(13)]);
var inst_34861 = (state_34996[(15)]);
var inst_34872 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34861,inst_34863);
var inst_34873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34872,(0),null);
var inst_34874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34872,(1),null);
var state_34996__$1 = (function (){var statearr_35274 = state_34996;
(statearr_35274[(26)] = inst_34873);

return statearr_35274;
})();
if(cljs.core.truth_(inst_34874)){
var statearr_35277_37156 = state_34996__$1;
(statearr_35277_37156[(1)] = (13));

} else {
var statearr_35279_37159 = state_34996__$1;
(statearr_35279_37159[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (18))){
var inst_34911 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35284_37161 = state_34996__$1;
(statearr_35284_37161[(2)] = inst_34911);

(statearr_35284_37161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (42))){
var state_34996__$1 = state_34996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34996__$1,(45),dchan);
} else {
if((state_val_34997 === (37))){
var inst_34958 = (state_34996[(23)]);
var inst_34849 = (state_34996[(11)]);
var inst_34949 = (state_34996[(25)]);
var inst_34958__$1 = cljs.core.first(inst_34949);
var inst_34959 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34958__$1,inst_34849,done);
var state_34996__$1 = (function (){var statearr_35292 = state_34996;
(statearr_35292[(23)] = inst_34958__$1);

return statearr_35292;
})();
if(cljs.core.truth_(inst_34959)){
var statearr_35296_37164 = state_34996__$1;
(statearr_35296_37164[(1)] = (39));

} else {
var statearr_35298_37165 = state_34996__$1;
(statearr_35298_37165[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (8))){
var inst_34863 = (state_34996[(13)]);
var inst_34862 = (state_34996[(14)]);
var inst_34865 = (inst_34863 < inst_34862);
var inst_34866 = inst_34865;
var state_34996__$1 = state_34996;
if(cljs.core.truth_(inst_34866)){
var statearr_35303_37168 = state_34996__$1;
(statearr_35303_37168[(1)] = (10));

} else {
var statearr_35306_37169 = state_34996__$1;
(statearr_35306_37169[(1)] = (11));

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
var statearr_35316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35316[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35316[(1)] = (1));

return statearr_35316;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34996){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34996);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35320){if((e35320 instanceof Object)){
var ex__34210__auto__ = e35320;
var statearr_35324_37174 = state_34996;
(statearr_35324_37174[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35320;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37180 = state_34996;
state_34996 = G__37180;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34996){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35331 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35331[(6)] = c__34274__auto___37042);

return statearr_35331;
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
var G__35351 = arguments.length;
switch (G__35351) {
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
var len__4789__auto___37207 = arguments.length;
var i__4790__auto___37209 = (0);
while(true){
if((i__4790__auto___37209 < len__4789__auto___37207)){
args__4795__auto__.push((arguments[i__4790__auto___37209]));

var G__37210 = (i__4790__auto___37209 + (1));
i__4790__auto___37209 = G__37210;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35406){
var map__35407 = p__35406;
var map__35407__$1 = (((((!((map__35407 == null))))?(((((map__35407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35407):map__35407);
var opts = map__35407__$1;
var statearr_35412_37214 = state;
(statearr_35412_37214[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35417_37215 = state;
(statearr_35417_37215[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35424_37216 = state;
(statearr_35424_37216[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35395){
var G__35397 = cljs.core.first(seq35395);
var seq35395__$1 = cljs.core.next(seq35395);
var G__35398 = cljs.core.first(seq35395__$1);
var seq35395__$2 = cljs.core.next(seq35395__$1);
var G__35399 = cljs.core.first(seq35395__$2);
var seq35395__$3 = cljs.core.next(seq35395__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35397,G__35398,G__35399,seq35395__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35457 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35457 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35458){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35458 = meta35458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35459,meta35458__$1){
var self__ = this;
var _35459__$1 = this;
return (new cljs.core.async.t_cljs$core$async35457(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35458__$1));
}));

(cljs.core.async.t_cljs$core$async35457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35459){
var self__ = this;
var _35459__$1 = this;
return self__.meta35458;
}));

(cljs.core.async.t_cljs$core$async35457.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35457.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35457.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35457.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35457.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35457.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35457.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35457.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35458","meta35458",-1019347184,null)], null);
}));

(cljs.core.async.t_cljs$core$async35457.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35457");

(cljs.core.async.t_cljs$core$async35457.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35457");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35457.
 */
cljs.core.async.__GT_t_cljs$core$async35457 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35457(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35458){
return (new cljs.core.async.t_cljs$core$async35457(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35458));
});

}

return (new cljs.core.async.t_cljs$core$async35457(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35673){
var state_val_35674 = (state_35673[(1)]);
if((state_val_35674 === (7))){
var inst_35555 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35675_37250 = state_35673__$1;
(statearr_35675_37250[(2)] = inst_35555);

(statearr_35675_37250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (20))){
var inst_35568 = (state_35673[(7)]);
var state_35673__$1 = state_35673;
var statearr_35676_37251 = state_35673__$1;
(statearr_35676_37251[(2)] = inst_35568);

(statearr_35676_37251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (27))){
var state_35673__$1 = state_35673;
var statearr_35679_37252 = state_35673__$1;
(statearr_35679_37252[(2)] = null);

(statearr_35679_37252[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (1))){
var inst_35529 = (state_35673[(8)]);
var inst_35529__$1 = calc_state();
var inst_35532 = (inst_35529__$1 == null);
var inst_35533 = cljs.core.not(inst_35532);
var state_35673__$1 = (function (){var statearr_35680 = state_35673;
(statearr_35680[(8)] = inst_35529__$1);

return statearr_35680;
})();
if(inst_35533){
var statearr_35681_37257 = state_35673__$1;
(statearr_35681_37257[(1)] = (2));

} else {
var statearr_35682_37258 = state_35673__$1;
(statearr_35682_37258[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (24))){
var inst_35615 = (state_35673[(9)]);
var inst_35647 = (state_35673[(10)]);
var inst_35601 = (state_35673[(11)]);
var inst_35647__$1 = (inst_35601.cljs$core$IFn$_invoke$arity$1 ? inst_35601.cljs$core$IFn$_invoke$arity$1(inst_35615) : inst_35601.call(null,inst_35615));
var state_35673__$1 = (function (){var statearr_35685 = state_35673;
(statearr_35685[(10)] = inst_35647__$1);

return statearr_35685;
})();
if(cljs.core.truth_(inst_35647__$1)){
var statearr_35686_37265 = state_35673__$1;
(statearr_35686_37265[(1)] = (29));

} else {
var statearr_35687_37266 = state_35673__$1;
(statearr_35687_37266[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (4))){
var inst_35558 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35558)){
var statearr_35688_37268 = state_35673__$1;
(statearr_35688_37268[(1)] = (8));

} else {
var statearr_35689_37270 = state_35673__$1;
(statearr_35689_37270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (15))){
var inst_35592 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35592)){
var statearr_35692_37273 = state_35673__$1;
(statearr_35692_37273[(1)] = (19));

} else {
var statearr_35693_37274 = state_35673__$1;
(statearr_35693_37274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (21))){
var inst_35600 = (state_35673[(12)]);
var inst_35600__$1 = (state_35673[(2)]);
var inst_35601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35673__$1 = (function (){var statearr_35696 = state_35673;
(statearr_35696[(12)] = inst_35600__$1);

(statearr_35696[(13)] = inst_35602);

(statearr_35696[(11)] = inst_35601);

return statearr_35696;
})();
return cljs.core.async.ioc_alts_BANG_(state_35673__$1,(22),inst_35603);
} else {
if((state_val_35674 === (31))){
var inst_35655 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35655)){
var statearr_35699_37282 = state_35673__$1;
(statearr_35699_37282[(1)] = (32));

} else {
var statearr_35701_37285 = state_35673__$1;
(statearr_35701_37285[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (32))){
var inst_35614 = (state_35673[(14)]);
var state_35673__$1 = state_35673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35673__$1,(35),out,inst_35614);
} else {
if((state_val_35674 === (33))){
var inst_35600 = (state_35673[(12)]);
var inst_35568 = inst_35600;
var state_35673__$1 = (function (){var statearr_35703 = state_35673;
(statearr_35703[(7)] = inst_35568);

return statearr_35703;
})();
var statearr_35704_37287 = state_35673__$1;
(statearr_35704_37287[(2)] = null);

(statearr_35704_37287[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (13))){
var inst_35568 = (state_35673[(7)]);
var inst_35580 = inst_35568.cljs$lang$protocol_mask$partition0$;
var inst_35581 = (inst_35580 & (64));
var inst_35582 = inst_35568.cljs$core$ISeq$;
var inst_35583 = (cljs.core.PROTOCOL_SENTINEL === inst_35582);
var inst_35584 = ((inst_35581) || (inst_35583));
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35584)){
var statearr_35705_37294 = state_35673__$1;
(statearr_35705_37294[(1)] = (16));

} else {
var statearr_35706_37295 = state_35673__$1;
(statearr_35706_37295[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (22))){
var inst_35615 = (state_35673[(9)]);
var inst_35614 = (state_35673[(14)]);
var inst_35613 = (state_35673[(2)]);
var inst_35614__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35613,(0),null);
var inst_35615__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35613,(1),null);
var inst_35617 = (inst_35614__$1 == null);
var inst_35618 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35615__$1,change);
var inst_35619 = ((inst_35617) || (inst_35618));
var state_35673__$1 = (function (){var statearr_35711 = state_35673;
(statearr_35711[(9)] = inst_35615__$1);

(statearr_35711[(14)] = inst_35614__$1);

return statearr_35711;
})();
if(cljs.core.truth_(inst_35619)){
var statearr_35712_37302 = state_35673__$1;
(statearr_35712_37302[(1)] = (23));

} else {
var statearr_35713_37303 = state_35673__$1;
(statearr_35713_37303[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (36))){
var inst_35600 = (state_35673[(12)]);
var inst_35568 = inst_35600;
var state_35673__$1 = (function (){var statearr_35716 = state_35673;
(statearr_35716[(7)] = inst_35568);

return statearr_35716;
})();
var statearr_35717_37306 = state_35673__$1;
(statearr_35717_37306[(2)] = null);

(statearr_35717_37306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (29))){
var inst_35647 = (state_35673[(10)]);
var state_35673__$1 = state_35673;
var statearr_35720_37309 = state_35673__$1;
(statearr_35720_37309[(2)] = inst_35647);

(statearr_35720_37309[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (6))){
var state_35673__$1 = state_35673;
var statearr_35722_37310 = state_35673__$1;
(statearr_35722_37310[(2)] = false);

(statearr_35722_37310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (28))){
var inst_35638 = (state_35673[(2)]);
var inst_35641 = calc_state();
var inst_35568 = inst_35641;
var state_35673__$1 = (function (){var statearr_35723 = state_35673;
(statearr_35723[(15)] = inst_35638);

(statearr_35723[(7)] = inst_35568);

return statearr_35723;
})();
var statearr_35726_37311 = state_35673__$1;
(statearr_35726_37311[(2)] = null);

(statearr_35726_37311[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (25))){
var inst_35669 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35727_37313 = state_35673__$1;
(statearr_35727_37313[(2)] = inst_35669);

(statearr_35727_37313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (34))){
var inst_35667 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35729_37314 = state_35673__$1;
(statearr_35729_37314[(2)] = inst_35667);

(statearr_35729_37314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (17))){
var state_35673__$1 = state_35673;
var statearr_35730_37316 = state_35673__$1;
(statearr_35730_37316[(2)] = false);

(statearr_35730_37316[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (3))){
var state_35673__$1 = state_35673;
var statearr_35732_37317 = state_35673__$1;
(statearr_35732_37317[(2)] = false);

(statearr_35732_37317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (12))){
var inst_35671 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35673__$1,inst_35671);
} else {
if((state_val_35674 === (2))){
var inst_35529 = (state_35673[(8)]);
var inst_35538 = inst_35529.cljs$lang$protocol_mask$partition0$;
var inst_35544 = (inst_35538 & (64));
var inst_35547 = inst_35529.cljs$core$ISeq$;
var inst_35548 = (cljs.core.PROTOCOL_SENTINEL === inst_35547);
var inst_35549 = ((inst_35544) || (inst_35548));
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35549)){
var statearr_35734_37323 = state_35673__$1;
(statearr_35734_37323[(1)] = (5));

} else {
var statearr_35735_37324 = state_35673__$1;
(statearr_35735_37324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (23))){
var inst_35614 = (state_35673[(14)]);
var inst_35622 = (inst_35614 == null);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35622)){
var statearr_35736_37325 = state_35673__$1;
(statearr_35736_37325[(1)] = (26));

} else {
var statearr_35738_37326 = state_35673__$1;
(statearr_35738_37326[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (35))){
var inst_35658 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35658)){
var statearr_35739_37328 = state_35673__$1;
(statearr_35739_37328[(1)] = (36));

} else {
var statearr_35742_37329 = state_35673__$1;
(statearr_35742_37329[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (19))){
var inst_35568 = (state_35673[(7)]);
var inst_35594 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35568);
var state_35673__$1 = state_35673;
var statearr_35746_37330 = state_35673__$1;
(statearr_35746_37330[(2)] = inst_35594);

(statearr_35746_37330[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (11))){
var inst_35568 = (state_35673[(7)]);
var inst_35575 = (inst_35568 == null);
var inst_35576 = cljs.core.not(inst_35575);
var state_35673__$1 = state_35673;
if(inst_35576){
var statearr_35749_37335 = state_35673__$1;
(statearr_35749_37335[(1)] = (13));

} else {
var statearr_35750_37336 = state_35673__$1;
(statearr_35750_37336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (9))){
var inst_35529 = (state_35673[(8)]);
var state_35673__$1 = state_35673;
var statearr_35753_37337 = state_35673__$1;
(statearr_35753_37337[(2)] = inst_35529);

(statearr_35753_37337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (5))){
var state_35673__$1 = state_35673;
var statearr_35755_37339 = state_35673__$1;
(statearr_35755_37339[(2)] = true);

(statearr_35755_37339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (14))){
var state_35673__$1 = state_35673;
var statearr_35757_37340 = state_35673__$1;
(statearr_35757_37340[(2)] = false);

(statearr_35757_37340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (26))){
var inst_35615 = (state_35673[(9)]);
var inst_35634 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35615);
var state_35673__$1 = state_35673;
var statearr_35768_37345 = state_35673__$1;
(statearr_35768_37345[(2)] = inst_35634);

(statearr_35768_37345[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (16))){
var state_35673__$1 = state_35673;
var statearr_35770_37348 = state_35673__$1;
(statearr_35770_37348[(2)] = true);

(statearr_35770_37348[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (38))){
var inst_35663 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35777_37351 = state_35673__$1;
(statearr_35777_37351[(2)] = inst_35663);

(statearr_35777_37351[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (30))){
var inst_35615 = (state_35673[(9)]);
var inst_35602 = (state_35673[(13)]);
var inst_35601 = (state_35673[(11)]);
var inst_35650 = cljs.core.empty_QMARK_(inst_35601);
var inst_35651 = (inst_35602.cljs$core$IFn$_invoke$arity$1 ? inst_35602.cljs$core$IFn$_invoke$arity$1(inst_35615) : inst_35602.call(null,inst_35615));
var inst_35652 = cljs.core.not(inst_35651);
var inst_35653 = ((inst_35650) && (inst_35652));
var state_35673__$1 = state_35673;
var statearr_35780_37356 = state_35673__$1;
(statearr_35780_37356[(2)] = inst_35653);

(statearr_35780_37356[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (10))){
var inst_35529 = (state_35673[(8)]);
var inst_35563 = (state_35673[(2)]);
var inst_35564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35563,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35563,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35563,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35568 = inst_35529;
var state_35673__$1 = (function (){var statearr_35783 = state_35673;
(statearr_35783[(16)] = inst_35564);

(statearr_35783[(7)] = inst_35568);

(statearr_35783[(17)] = inst_35565);

(statearr_35783[(18)] = inst_35567);

return statearr_35783;
})();
var statearr_35784_37362 = state_35673__$1;
(statearr_35784_37362[(2)] = null);

(statearr_35784_37362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (18))){
var inst_35589 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35785_37366 = state_35673__$1;
(statearr_35785_37366[(2)] = inst_35589);

(statearr_35785_37366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (37))){
var state_35673__$1 = state_35673;
var statearr_35786_37367 = state_35673__$1;
(statearr_35786_37367[(2)] = null);

(statearr_35786_37367[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (8))){
var inst_35529 = (state_35673[(8)]);
var inst_35560 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35529);
var state_35673__$1 = state_35673;
var statearr_35788_37372 = state_35673__$1;
(statearr_35788_37372[(2)] = inst_35560);

(statearr_35788_37372[(1)] = (10));


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
var statearr_35790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35790[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35790[(1)] = (1));

return statearr_35790;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35673){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35673);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35792){if((e35792 instanceof Object)){
var ex__34210__auto__ = e35792;
var statearr_35794_37377 = state_35673;
(statearr_35794_37377[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35792;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37381 = state_35673;
state_35673 = G__37381;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35673){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35795 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35795[(6)] = c__34274__auto___37245);

return statearr_35795;
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
var G__35841 = arguments.length;
switch (G__35841) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35850 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35851){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35851 = meta35851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35852,meta35851__$1){
var self__ = this;
var _35852__$1 = this;
return (new cljs.core.async.t_cljs$core$async35850(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35851__$1));
}));

(cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35852){
var self__ = this;
var _35852__$1 = this;
return self__.meta35851;
}));

(cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35850.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35850.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35851","meta35851",336790106,null)], null);
}));

(cljs.core.async.t_cljs$core$async35850.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35850");

(cljs.core.async.t_cljs$core$async35850.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35850");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35850.
 */
cljs.core.async.__GT_t_cljs$core$async35850 = (function cljs$core$async$__GT_t_cljs$core$async35850(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35851){
return (new cljs.core.async.t_cljs$core$async35850(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35851));
});

}

return (new cljs.core.async.t_cljs$core$async35850(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35947){
var state_val_35948 = (state_35947[(1)]);
if((state_val_35948 === (7))){
var inst_35943 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
var statearr_35950_37428 = state_35947__$1;
(statearr_35950_37428[(2)] = inst_35943);

(statearr_35950_37428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (20))){
var state_35947__$1 = state_35947;
var statearr_35953_37433 = state_35947__$1;
(statearr_35953_37433[(2)] = null);

(statearr_35953_37433[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (1))){
var state_35947__$1 = state_35947;
var statearr_35956_37437 = state_35947__$1;
(statearr_35956_37437[(2)] = null);

(statearr_35956_37437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (24))){
var inst_35924 = (state_35947[(7)]);
var inst_35934 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35924);
var state_35947__$1 = state_35947;
var statearr_35958_37440 = state_35947__$1;
(statearr_35958_37440[(2)] = inst_35934);

(statearr_35958_37440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (4))){
var inst_35873 = (state_35947[(8)]);
var inst_35873__$1 = (state_35947[(2)]);
var inst_35874 = (inst_35873__$1 == null);
var state_35947__$1 = (function (){var statearr_35962 = state_35947;
(statearr_35962[(8)] = inst_35873__$1);

return statearr_35962;
})();
if(cljs.core.truth_(inst_35874)){
var statearr_35963_37443 = state_35947__$1;
(statearr_35963_37443[(1)] = (5));

} else {
var statearr_35965_37444 = state_35947__$1;
(statearr_35965_37444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (15))){
var inst_35918 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
var statearr_35967_37446 = state_35947__$1;
(statearr_35967_37446[(2)] = inst_35918);

(statearr_35967_37446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (21))){
var inst_35940 = (state_35947[(2)]);
var state_35947__$1 = (function (){var statearr_35968 = state_35947;
(statearr_35968[(9)] = inst_35940);

return statearr_35968;
})();
var statearr_35970_37452 = state_35947__$1;
(statearr_35970_37452[(2)] = null);

(statearr_35970_37452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (13))){
var inst_35900 = (state_35947[(10)]);
var inst_35902 = cljs.core.chunked_seq_QMARK_(inst_35900);
var state_35947__$1 = state_35947;
if(inst_35902){
var statearr_35973_37458 = state_35947__$1;
(statearr_35973_37458[(1)] = (16));

} else {
var statearr_35974_37461 = state_35947__$1;
(statearr_35974_37461[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (22))){
var inst_35930 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
if(cljs.core.truth_(inst_35930)){
var statearr_35975_37462 = state_35947__$1;
(statearr_35975_37462[(1)] = (23));

} else {
var statearr_35976_37463 = state_35947__$1;
(statearr_35976_37463[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (6))){
var inst_35926 = (state_35947[(11)]);
var inst_35873 = (state_35947[(8)]);
var inst_35924 = (state_35947[(7)]);
var inst_35924__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35873) : topic_fn.call(null,inst_35873));
var inst_35925 = cljs.core.deref(mults);
var inst_35926__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35925,inst_35924__$1);
var state_35947__$1 = (function (){var statearr_35977 = state_35947;
(statearr_35977[(11)] = inst_35926__$1);

(statearr_35977[(7)] = inst_35924__$1);

return statearr_35977;
})();
if(cljs.core.truth_(inst_35926__$1)){
var statearr_35978_37468 = state_35947__$1;
(statearr_35978_37468[(1)] = (19));

} else {
var statearr_35981_37469 = state_35947__$1;
(statearr_35981_37469[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (25))){
var inst_35936 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
var statearr_35982_37471 = state_35947__$1;
(statearr_35982_37471[(2)] = inst_35936);

(statearr_35982_37471[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (17))){
var inst_35900 = (state_35947[(10)]);
var inst_35909 = cljs.core.first(inst_35900);
var inst_35910 = cljs.core.async.muxch_STAR_(inst_35909);
var inst_35911 = cljs.core.async.close_BANG_(inst_35910);
var inst_35912 = cljs.core.next(inst_35900);
var inst_35883 = inst_35912;
var inst_35884 = null;
var inst_35885 = (0);
var inst_35886 = (0);
var state_35947__$1 = (function (){var statearr_35984 = state_35947;
(statearr_35984[(12)] = inst_35883);

(statearr_35984[(13)] = inst_35886);

(statearr_35984[(14)] = inst_35885);

(statearr_35984[(15)] = inst_35884);

(statearr_35984[(16)] = inst_35911);

return statearr_35984;
})();
var statearr_35987_37478 = state_35947__$1;
(statearr_35987_37478[(2)] = null);

(statearr_35987_37478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (3))){
var inst_35945 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35947__$1,inst_35945);
} else {
if((state_val_35948 === (12))){
var inst_35920 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
var statearr_35989_37480 = state_35947__$1;
(statearr_35989_37480[(2)] = inst_35920);

(statearr_35989_37480[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (2))){
var state_35947__$1 = state_35947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35947__$1,(4),ch);
} else {
if((state_val_35948 === (23))){
var state_35947__$1 = state_35947;
var statearr_35990_37482 = state_35947__$1;
(statearr_35990_37482[(2)] = null);

(statearr_35990_37482[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (19))){
var inst_35926 = (state_35947[(11)]);
var inst_35873 = (state_35947[(8)]);
var inst_35928 = cljs.core.async.muxch_STAR_(inst_35926);
var state_35947__$1 = state_35947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35947__$1,(22),inst_35928,inst_35873);
} else {
if((state_val_35948 === (11))){
var inst_35883 = (state_35947[(12)]);
var inst_35900 = (state_35947[(10)]);
var inst_35900__$1 = cljs.core.seq(inst_35883);
var state_35947__$1 = (function (){var statearr_35994 = state_35947;
(statearr_35994[(10)] = inst_35900__$1);

return statearr_35994;
})();
if(inst_35900__$1){
var statearr_35995_37490 = state_35947__$1;
(statearr_35995_37490[(1)] = (13));

} else {
var statearr_35996_37491 = state_35947__$1;
(statearr_35996_37491[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (9))){
var inst_35922 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
var statearr_35997_37492 = state_35947__$1;
(statearr_35997_37492[(2)] = inst_35922);

(statearr_35997_37492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (5))){
var inst_35880 = cljs.core.deref(mults);
var inst_35881 = cljs.core.vals(inst_35880);
var inst_35882 = cljs.core.seq(inst_35881);
var inst_35883 = inst_35882;
var inst_35884 = null;
var inst_35885 = (0);
var inst_35886 = (0);
var state_35947__$1 = (function (){var statearr_35998 = state_35947;
(statearr_35998[(12)] = inst_35883);

(statearr_35998[(13)] = inst_35886);

(statearr_35998[(14)] = inst_35885);

(statearr_35998[(15)] = inst_35884);

return statearr_35998;
})();
var statearr_36003_37497 = state_35947__$1;
(statearr_36003_37497[(2)] = null);

(statearr_36003_37497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (14))){
var state_35947__$1 = state_35947;
var statearr_36010_37498 = state_35947__$1;
(statearr_36010_37498[(2)] = null);

(statearr_36010_37498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (16))){
var inst_35900 = (state_35947[(10)]);
var inst_35904 = cljs.core.chunk_first(inst_35900);
var inst_35905 = cljs.core.chunk_rest(inst_35900);
var inst_35906 = cljs.core.count(inst_35904);
var inst_35883 = inst_35905;
var inst_35884 = inst_35904;
var inst_35885 = inst_35906;
var inst_35886 = (0);
var state_35947__$1 = (function (){var statearr_36015 = state_35947;
(statearr_36015[(12)] = inst_35883);

(statearr_36015[(13)] = inst_35886);

(statearr_36015[(14)] = inst_35885);

(statearr_36015[(15)] = inst_35884);

return statearr_36015;
})();
var statearr_36016_37502 = state_35947__$1;
(statearr_36016_37502[(2)] = null);

(statearr_36016_37502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (10))){
var inst_35883 = (state_35947[(12)]);
var inst_35886 = (state_35947[(13)]);
var inst_35885 = (state_35947[(14)]);
var inst_35884 = (state_35947[(15)]);
var inst_35892 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35884,inst_35886);
var inst_35893 = cljs.core.async.muxch_STAR_(inst_35892);
var inst_35894 = cljs.core.async.close_BANG_(inst_35893);
var inst_35896 = (inst_35886 + (1));
var tmp36005 = inst_35883;
var tmp36006 = inst_35885;
var tmp36007 = inst_35884;
var inst_35883__$1 = tmp36005;
var inst_35884__$1 = tmp36007;
var inst_35885__$1 = tmp36006;
var inst_35886__$1 = inst_35896;
var state_35947__$1 = (function (){var statearr_36022 = state_35947;
(statearr_36022[(12)] = inst_35883__$1);

(statearr_36022[(13)] = inst_35886__$1);

(statearr_36022[(14)] = inst_35885__$1);

(statearr_36022[(17)] = inst_35894);

(statearr_36022[(15)] = inst_35884__$1);

return statearr_36022;
})();
var statearr_36025_37510 = state_35947__$1;
(statearr_36025_37510[(2)] = null);

(statearr_36025_37510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (18))){
var inst_35915 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
var statearr_36027_37512 = state_35947__$1;
(statearr_36027_37512[(2)] = inst_35915);

(statearr_36027_37512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (8))){
var inst_35886 = (state_35947[(13)]);
var inst_35885 = (state_35947[(14)]);
var inst_35888 = (inst_35886 < inst_35885);
var inst_35889 = inst_35888;
var state_35947__$1 = state_35947;
if(cljs.core.truth_(inst_35889)){
var statearr_36030_37514 = state_35947__$1;
(statearr_36030_37514[(1)] = (10));

} else {
var statearr_36032_37515 = state_35947__$1;
(statearr_36032_37515[(1)] = (11));

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
var statearr_36034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36034[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36034[(1)] = (1));

return statearr_36034;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35947){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35947);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36035){if((e36035 instanceof Object)){
var ex__34210__auto__ = e36035;
var statearr_36036_37520 = state_35947;
(statearr_36036_37520[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36035;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37524 = state_35947;
state_35947 = G__37524;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36039 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36039[(6)] = c__34274__auto___37425);

return statearr_36039;
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
var G__36045 = arguments.length;
switch (G__36045) {
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
var c__34274__auto___37542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36094){
var state_val_36095 = (state_36094[(1)]);
if((state_val_36095 === (7))){
var state_36094__$1 = state_36094;
var statearr_36096_37543 = state_36094__$1;
(statearr_36096_37543[(2)] = null);

(statearr_36096_37543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (1))){
var state_36094__$1 = state_36094;
var statearr_36097_37545 = state_36094__$1;
(statearr_36097_37545[(2)] = null);

(statearr_36097_37545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (4))){
var inst_36056 = (state_36094[(7)]);
var inst_36058 = (inst_36056 < cnt);
var state_36094__$1 = state_36094;
if(cljs.core.truth_(inst_36058)){
var statearr_36100_37548 = state_36094__$1;
(statearr_36100_37548[(1)] = (6));

} else {
var statearr_36102_37552 = state_36094__$1;
(statearr_36102_37552[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (15))){
var inst_36089 = (state_36094[(2)]);
var state_36094__$1 = state_36094;
var statearr_36104_37553 = state_36094__$1;
(statearr_36104_37553[(2)] = inst_36089);

(statearr_36104_37553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (13))){
var inst_36082 = cljs.core.async.close_BANG_(out);
var state_36094__$1 = state_36094;
var statearr_36105_37560 = state_36094__$1;
(statearr_36105_37560[(2)] = inst_36082);

(statearr_36105_37560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (6))){
var state_36094__$1 = state_36094;
var statearr_36109_37563 = state_36094__$1;
(statearr_36109_37563[(2)] = null);

(statearr_36109_37563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (3))){
var inst_36091 = (state_36094[(2)]);
var state_36094__$1 = state_36094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36094__$1,inst_36091);
} else {
if((state_val_36095 === (12))){
var inst_36079 = (state_36094[(8)]);
var inst_36079__$1 = (state_36094[(2)]);
var inst_36080 = cljs.core.some(cljs.core.nil_QMARK_,inst_36079__$1);
var state_36094__$1 = (function (){var statearr_36112 = state_36094;
(statearr_36112[(8)] = inst_36079__$1);

return statearr_36112;
})();
if(cljs.core.truth_(inst_36080)){
var statearr_36113_37565 = state_36094__$1;
(statearr_36113_37565[(1)] = (13));

} else {
var statearr_36114_37568 = state_36094__$1;
(statearr_36114_37568[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (2))){
var inst_36055 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36056 = (0);
var state_36094__$1 = (function (){var statearr_36117 = state_36094;
(statearr_36117[(9)] = inst_36055);

(statearr_36117[(7)] = inst_36056);

return statearr_36117;
})();
var statearr_36120_37574 = state_36094__$1;
(statearr_36120_37574[(2)] = null);

(statearr_36120_37574[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (11))){
var inst_36056 = (state_36094[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36094,(10),Object,null,(9));
var inst_36066 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36056) : chs__$1.call(null,inst_36056));
var inst_36067 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36056) : done.call(null,inst_36056));
var inst_36068 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36066,inst_36067);
var state_36094__$1 = state_36094;
var statearr_36123_37581 = state_36094__$1;
(statearr_36123_37581[(2)] = inst_36068);


cljs.core.async.impl.ioc_helpers.process_exception(state_36094__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (9))){
var inst_36056 = (state_36094[(7)]);
var inst_36070 = (state_36094[(2)]);
var inst_36071 = (inst_36056 + (1));
var inst_36056__$1 = inst_36071;
var state_36094__$1 = (function (){var statearr_36125 = state_36094;
(statearr_36125[(10)] = inst_36070);

(statearr_36125[(7)] = inst_36056__$1);

return statearr_36125;
})();
var statearr_36126_37583 = state_36094__$1;
(statearr_36126_37583[(2)] = null);

(statearr_36126_37583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (5))){
var inst_36077 = (state_36094[(2)]);
var state_36094__$1 = (function (){var statearr_36127 = state_36094;
(statearr_36127[(11)] = inst_36077);

return statearr_36127;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36094__$1,(12),dchan);
} else {
if((state_val_36095 === (14))){
var inst_36079 = (state_36094[(8)]);
var inst_36084 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36079);
var state_36094__$1 = state_36094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36094__$1,(16),out,inst_36084);
} else {
if((state_val_36095 === (16))){
var inst_36086 = (state_36094[(2)]);
var state_36094__$1 = (function (){var statearr_36133 = state_36094;
(statearr_36133[(12)] = inst_36086);

return statearr_36133;
})();
var statearr_36134_37595 = state_36094__$1;
(statearr_36134_37595[(2)] = null);

(statearr_36134_37595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (10))){
var inst_36061 = (state_36094[(2)]);
var inst_36062 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36094__$1 = (function (){var statearr_36135 = state_36094;
(statearr_36135[(13)] = inst_36061);

return statearr_36135;
})();
var statearr_36136_37598 = state_36094__$1;
(statearr_36136_37598[(2)] = inst_36062);


cljs.core.async.impl.ioc_helpers.process_exception(state_36094__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (8))){
var inst_36075 = (state_36094[(2)]);
var state_36094__$1 = state_36094;
var statearr_36137_37600 = state_36094__$1;
(statearr_36137_37600[(2)] = inst_36075);

(statearr_36137_37600[(1)] = (5));


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
var statearr_36138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36138[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36138[(1)] = (1));

return statearr_36138;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36094){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36094);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36139){if((e36139 instanceof Object)){
var ex__34210__auto__ = e36139;
var statearr_36140_37608 = state_36094;
(statearr_36140_37608[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36139;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37610 = state_36094;
state_36094 = G__37610;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36141 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36141[(6)] = c__34274__auto___37542);

return statearr_36141;
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
var G__36144 = arguments.length;
switch (G__36144) {
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
var c__34274__auto___37619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36176){
var state_val_36177 = (state_36176[(1)]);
if((state_val_36177 === (7))){
var inst_36155 = (state_36176[(7)]);
var inst_36156 = (state_36176[(8)]);
var inst_36155__$1 = (state_36176[(2)]);
var inst_36156__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36155__$1,(0),null);
var inst_36157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36155__$1,(1),null);
var inst_36158 = (inst_36156__$1 == null);
var state_36176__$1 = (function (){var statearr_36178 = state_36176;
(statearr_36178[(7)] = inst_36155__$1);

(statearr_36178[(8)] = inst_36156__$1);

(statearr_36178[(9)] = inst_36157);

return statearr_36178;
})();
if(cljs.core.truth_(inst_36158)){
var statearr_36179_37627 = state_36176__$1;
(statearr_36179_37627[(1)] = (8));

} else {
var statearr_36180_37628 = state_36176__$1;
(statearr_36180_37628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (1))){
var inst_36145 = cljs.core.vec(chs);
var inst_36146 = inst_36145;
var state_36176__$1 = (function (){var statearr_36181 = state_36176;
(statearr_36181[(10)] = inst_36146);

return statearr_36181;
})();
var statearr_36182_37631 = state_36176__$1;
(statearr_36182_37631[(2)] = null);

(statearr_36182_37631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (4))){
var inst_36146 = (state_36176[(10)]);
var state_36176__$1 = state_36176;
return cljs.core.async.ioc_alts_BANG_(state_36176__$1,(7),inst_36146);
} else {
if((state_val_36177 === (6))){
var inst_36172 = (state_36176[(2)]);
var state_36176__$1 = state_36176;
var statearr_36183_37634 = state_36176__$1;
(statearr_36183_37634[(2)] = inst_36172);

(statearr_36183_37634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (3))){
var inst_36174 = (state_36176[(2)]);
var state_36176__$1 = state_36176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36176__$1,inst_36174);
} else {
if((state_val_36177 === (2))){
var inst_36146 = (state_36176[(10)]);
var inst_36148 = cljs.core.count(inst_36146);
var inst_36149 = (inst_36148 > (0));
var state_36176__$1 = state_36176;
if(cljs.core.truth_(inst_36149)){
var statearr_36185_37641 = state_36176__$1;
(statearr_36185_37641[(1)] = (4));

} else {
var statearr_36186_37642 = state_36176__$1;
(statearr_36186_37642[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (11))){
var inst_36146 = (state_36176[(10)]);
var inst_36165 = (state_36176[(2)]);
var tmp36184 = inst_36146;
var inst_36146__$1 = tmp36184;
var state_36176__$1 = (function (){var statearr_36187 = state_36176;
(statearr_36187[(11)] = inst_36165);

(statearr_36187[(10)] = inst_36146__$1);

return statearr_36187;
})();
var statearr_36188_37648 = state_36176__$1;
(statearr_36188_37648[(2)] = null);

(statearr_36188_37648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (9))){
var inst_36156 = (state_36176[(8)]);
var state_36176__$1 = state_36176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36176__$1,(11),out,inst_36156);
} else {
if((state_val_36177 === (5))){
var inst_36170 = cljs.core.async.close_BANG_(out);
var state_36176__$1 = state_36176;
var statearr_36189_37651 = state_36176__$1;
(statearr_36189_37651[(2)] = inst_36170);

(statearr_36189_37651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (10))){
var inst_36168 = (state_36176[(2)]);
var state_36176__$1 = state_36176;
var statearr_36190_37653 = state_36176__$1;
(statearr_36190_37653[(2)] = inst_36168);

(statearr_36190_37653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (8))){
var inst_36146 = (state_36176[(10)]);
var inst_36155 = (state_36176[(7)]);
var inst_36156 = (state_36176[(8)]);
var inst_36157 = (state_36176[(9)]);
var inst_36160 = (function (){var cs = inst_36146;
var vec__36151 = inst_36155;
var v = inst_36156;
var c = inst_36157;
return (function (p1__36142_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36142_SHARP_);
});
})();
var inst_36161 = cljs.core.filterv(inst_36160,inst_36146);
var inst_36146__$1 = inst_36161;
var state_36176__$1 = (function (){var statearr_36195 = state_36176;
(statearr_36195[(10)] = inst_36146__$1);

return statearr_36195;
})();
var statearr_36196_37665 = state_36176__$1;
(statearr_36196_37665[(2)] = null);

(statearr_36196_37665[(1)] = (2));


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
var statearr_36200 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36200[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36200[(1)] = (1));

return statearr_36200;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36176){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36176);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36201){if((e36201 instanceof Object)){
var ex__34210__auto__ = e36201;
var statearr_36202_37673 = state_36176;
(statearr_36202_37673[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36201;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37677 = state_36176;
state_36176 = G__37677;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36203 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36203[(6)] = c__34274__auto___37619);

return statearr_36203;
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
var G__36208 = arguments.length;
switch (G__36208) {
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
var c__34274__auto___37691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36236){
var state_val_36237 = (state_36236[(1)]);
if((state_val_36237 === (7))){
var inst_36217 = (state_36236[(7)]);
var inst_36217__$1 = (state_36236[(2)]);
var inst_36218 = (inst_36217__$1 == null);
var inst_36219 = cljs.core.not(inst_36218);
var state_36236__$1 = (function (){var statearr_36238 = state_36236;
(statearr_36238[(7)] = inst_36217__$1);

return statearr_36238;
})();
if(inst_36219){
var statearr_36239_37694 = state_36236__$1;
(statearr_36239_37694[(1)] = (8));

} else {
var statearr_36240_37695 = state_36236__$1;
(statearr_36240_37695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (1))){
var inst_36211 = (0);
var state_36236__$1 = (function (){var statearr_36241 = state_36236;
(statearr_36241[(8)] = inst_36211);

return statearr_36241;
})();
var statearr_36244_37701 = state_36236__$1;
(statearr_36244_37701[(2)] = null);

(statearr_36244_37701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (4))){
var state_36236__$1 = state_36236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36236__$1,(7),ch);
} else {
if((state_val_36237 === (6))){
var inst_36230 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36245_37705 = state_36236__$1;
(statearr_36245_37705[(2)] = inst_36230);

(statearr_36245_37705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (3))){
var inst_36232 = (state_36236[(2)]);
var inst_36233 = cljs.core.async.close_BANG_(out);
var state_36236__$1 = (function (){var statearr_36246 = state_36236;
(statearr_36246[(9)] = inst_36232);

return statearr_36246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36236__$1,inst_36233);
} else {
if((state_val_36237 === (2))){
var inst_36211 = (state_36236[(8)]);
var inst_36214 = (inst_36211 < n);
var state_36236__$1 = state_36236;
if(cljs.core.truth_(inst_36214)){
var statearr_36247_37712 = state_36236__$1;
(statearr_36247_37712[(1)] = (4));

} else {
var statearr_36248_37717 = state_36236__$1;
(statearr_36248_37717[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (11))){
var inst_36211 = (state_36236[(8)]);
var inst_36222 = (state_36236[(2)]);
var inst_36223 = (inst_36211 + (1));
var inst_36211__$1 = inst_36223;
var state_36236__$1 = (function (){var statearr_36250 = state_36236;
(statearr_36250[(10)] = inst_36222);

(statearr_36250[(8)] = inst_36211__$1);

return statearr_36250;
})();
var statearr_36253_37720 = state_36236__$1;
(statearr_36253_37720[(2)] = null);

(statearr_36253_37720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (9))){
var state_36236__$1 = state_36236;
var statearr_36256_37722 = state_36236__$1;
(statearr_36256_37722[(2)] = null);

(statearr_36256_37722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (5))){
var state_36236__$1 = state_36236;
var statearr_36259_37724 = state_36236__$1;
(statearr_36259_37724[(2)] = null);

(statearr_36259_37724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (10))){
var inst_36227 = (state_36236[(2)]);
var state_36236__$1 = state_36236;
var statearr_36262_37729 = state_36236__$1;
(statearr_36262_37729[(2)] = inst_36227);

(statearr_36262_37729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36237 === (8))){
var inst_36217 = (state_36236[(7)]);
var state_36236__$1 = state_36236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36236__$1,(11),out,inst_36217);
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
var statearr_36264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36264[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36264[(1)] = (1));

return statearr_36264;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36236){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36236);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36266){if((e36266 instanceof Object)){
var ex__34210__auto__ = e36266;
var statearr_36271_37737 = state_36236;
(statearr_36271_37737[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36266;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37745 = state_36236;
state_36236 = G__37745;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36278 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36278[(6)] = c__34274__auto___37691);

return statearr_36278;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36281 = (function (f,ch,meta36282){
this.f = f;
this.ch = ch;
this.meta36282 = meta36282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36283,meta36282__$1){
var self__ = this;
var _36283__$1 = this;
return (new cljs.core.async.t_cljs$core$async36281(self__.f,self__.ch,meta36282__$1));
}));

(cljs.core.async.t_cljs$core$async36281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36283){
var self__ = this;
var _36283__$1 = this;
return self__.meta36282;
}));

(cljs.core.async.t_cljs$core$async36281.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36281.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36281.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36289 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36289 = (function (f,ch,meta36282,_,fn1,meta36290){
this.f = f;
this.ch = ch;
this.meta36282 = meta36282;
this._ = _;
this.fn1 = fn1;
this.meta36290 = meta36290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36291,meta36290__$1){
var self__ = this;
var _36291__$1 = this;
return (new cljs.core.async.t_cljs$core$async36289(self__.f,self__.ch,self__.meta36282,self__._,self__.fn1,meta36290__$1));
}));

(cljs.core.async.t_cljs$core$async36289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36291){
var self__ = this;
var _36291__$1 = this;
return self__.meta36290;
}));

(cljs.core.async.t_cljs$core$async36289.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36289.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36289.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36289.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36279_SHARP_){
var G__36295 = (((p1__36279_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36279_SHARP_) : self__.f.call(null,p1__36279_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36295) : f1.call(null,G__36295));
});
}));

(cljs.core.async.t_cljs$core$async36289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36282","meta36282",232305865,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36281","cljs.core.async/t_cljs$core$async36281",2018167359,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36290","meta36290",1659100923,null)], null);
}));

(cljs.core.async.t_cljs$core$async36289.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36289");

(cljs.core.async.t_cljs$core$async36289.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36289");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36289.
 */
cljs.core.async.__GT_t_cljs$core$async36289 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36289(f__$1,ch__$1,meta36282__$1,___$2,fn1__$1,meta36290){
return (new cljs.core.async.t_cljs$core$async36289(f__$1,ch__$1,meta36282__$1,___$2,fn1__$1,meta36290));
});

}

return (new cljs.core.async.t_cljs$core$async36289(self__.f,self__.ch,self__.meta36282,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36308 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36308) : self__.f.call(null,G__36308));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36281.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36282","meta36282",232305865,null)], null);
}));

(cljs.core.async.t_cljs$core$async36281.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36281");

(cljs.core.async.t_cljs$core$async36281.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36281");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36281.
 */
cljs.core.async.__GT_t_cljs$core$async36281 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36281(f__$1,ch__$1,meta36282){
return (new cljs.core.async.t_cljs$core$async36281(f__$1,ch__$1,meta36282));
});

}

return (new cljs.core.async.t_cljs$core$async36281(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36313 = (function (f,ch,meta36314){
this.f = f;
this.ch = ch;
this.meta36314 = meta36314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36315,meta36314__$1){
var self__ = this;
var _36315__$1 = this;
return (new cljs.core.async.t_cljs$core$async36313(self__.f,self__.ch,meta36314__$1));
}));

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36315){
var self__ = this;
var _36315__$1 = this;
return self__.meta36314;
}));

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36313.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36314","meta36314",-1949065285,null)], null);
}));

(cljs.core.async.t_cljs$core$async36313.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36313");

(cljs.core.async.t_cljs$core$async36313.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36313");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36313.
 */
cljs.core.async.__GT_t_cljs$core$async36313 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36313(f__$1,ch__$1,meta36314){
return (new cljs.core.async.t_cljs$core$async36313(f__$1,ch__$1,meta36314));
});

}

return (new cljs.core.async.t_cljs$core$async36313(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36325 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36325 = (function (p,ch,meta36326){
this.p = p;
this.ch = ch;
this.meta36326 = meta36326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36327,meta36326__$1){
var self__ = this;
var _36327__$1 = this;
return (new cljs.core.async.t_cljs$core$async36325(self__.p,self__.ch,meta36326__$1));
}));

(cljs.core.async.t_cljs$core$async36325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36327){
var self__ = this;
var _36327__$1 = this;
return self__.meta36326;
}));

(cljs.core.async.t_cljs$core$async36325.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36325.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36325.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36325.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36325.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36325.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36325.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36326","meta36326",7741424,null)], null);
}));

(cljs.core.async.t_cljs$core$async36325.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36325");

(cljs.core.async.t_cljs$core$async36325.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36325");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36325.
 */
cljs.core.async.__GT_t_cljs$core$async36325 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36325(p__$1,ch__$1,meta36326){
return (new cljs.core.async.t_cljs$core$async36325(p__$1,ch__$1,meta36326));
});

}

return (new cljs.core.async.t_cljs$core$async36325(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34274__auto___37805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36369){
var state_val_36370 = (state_36369[(1)]);
if((state_val_36370 === (7))){
var inst_36365 = (state_36369[(2)]);
var state_36369__$1 = state_36369;
var statearr_36374_37806 = state_36369__$1;
(statearr_36374_37806[(2)] = inst_36365);

(statearr_36374_37806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (1))){
var state_36369__$1 = state_36369;
var statearr_36379_37807 = state_36369__$1;
(statearr_36379_37807[(2)] = null);

(statearr_36379_37807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (4))){
var inst_36349 = (state_36369[(7)]);
var inst_36349__$1 = (state_36369[(2)]);
var inst_36351 = (inst_36349__$1 == null);
var state_36369__$1 = (function (){var statearr_36380 = state_36369;
(statearr_36380[(7)] = inst_36349__$1);

return statearr_36380;
})();
if(cljs.core.truth_(inst_36351)){
var statearr_36381_37808 = state_36369__$1;
(statearr_36381_37808[(1)] = (5));

} else {
var statearr_36383_37809 = state_36369__$1;
(statearr_36383_37809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (6))){
var inst_36349 = (state_36369[(7)]);
var inst_36356 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36349) : p.call(null,inst_36349));
var state_36369__$1 = state_36369;
if(cljs.core.truth_(inst_36356)){
var statearr_36385_37811 = state_36369__$1;
(statearr_36385_37811[(1)] = (8));

} else {
var statearr_36386_37812 = state_36369__$1;
(statearr_36386_37812[(1)] = (9));

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
var statearr_36389_37813 = state_36369__$1;
(statearr_36389_37813[(2)] = inst_36359);

(statearr_36389_37813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (9))){
var state_36369__$1 = state_36369;
var statearr_36391_37814 = state_36369__$1;
(statearr_36391_37814[(2)] = null);

(statearr_36391_37814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (5))){
var inst_36353 = cljs.core.async.close_BANG_(out);
var state_36369__$1 = state_36369;
var statearr_36392_37815 = state_36369__$1;
(statearr_36392_37815[(2)] = inst_36353);

(statearr_36392_37815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (10))){
var inst_36362 = (state_36369[(2)]);
var state_36369__$1 = (function (){var statearr_36393 = state_36369;
(statearr_36393[(8)] = inst_36362);

return statearr_36393;
})();
var statearr_36394_37816 = state_36369__$1;
(statearr_36394_37816[(2)] = null);

(statearr_36394_37816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36370 === (8))){
var inst_36349 = (state_36369[(7)]);
var state_36369__$1 = state_36369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36369__$1,(11),out,inst_36349);
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
var statearr_36395 = [null,null,null,null,null,null,null,null,null];
(statearr_36395[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36395[(1)] = (1));

return statearr_36395;
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
}catch (e36396){if((e36396 instanceof Object)){
var ex__34210__auto__ = e36396;
var statearr_36397_37821 = state_36369;
(statearr_36397_37821[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36396;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37822 = state_36369;
state_36369 = G__37822;
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
var state__34276__auto__ = (function (){var statearr_36399 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36399[(6)] = c__34274__auto___37805);

return statearr_36399;
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
var G__36403 = arguments.length;
switch (G__36403) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36470){
var state_val_36471 = (state_36470[(1)]);
if((state_val_36471 === (7))){
var inst_36466 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
var statearr_36472_37829 = state_36470__$1;
(statearr_36472_37829[(2)] = inst_36466);

(statearr_36472_37829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (20))){
var inst_36436 = (state_36470[(7)]);
var inst_36447 = (state_36470[(2)]);
var inst_36448 = cljs.core.next(inst_36436);
var inst_36422 = inst_36448;
var inst_36423 = null;
var inst_36424 = (0);
var inst_36425 = (0);
var state_36470__$1 = (function (){var statearr_36474 = state_36470;
(statearr_36474[(8)] = inst_36425);

(statearr_36474[(9)] = inst_36447);

(statearr_36474[(10)] = inst_36423);

(statearr_36474[(11)] = inst_36424);

(statearr_36474[(12)] = inst_36422);

return statearr_36474;
})();
var statearr_36475_37834 = state_36470__$1;
(statearr_36475_37834[(2)] = null);

(statearr_36475_37834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (1))){
var state_36470__$1 = state_36470;
var statearr_36477_37835 = state_36470__$1;
(statearr_36477_37835[(2)] = null);

(statearr_36477_37835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (4))){
var inst_36411 = (state_36470[(13)]);
var inst_36411__$1 = (state_36470[(2)]);
var inst_36412 = (inst_36411__$1 == null);
var state_36470__$1 = (function (){var statearr_36485 = state_36470;
(statearr_36485[(13)] = inst_36411__$1);

return statearr_36485;
})();
if(cljs.core.truth_(inst_36412)){
var statearr_36486_37839 = state_36470__$1;
(statearr_36486_37839[(1)] = (5));

} else {
var statearr_36488_37840 = state_36470__$1;
(statearr_36488_37840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (15))){
var state_36470__$1 = state_36470;
var statearr_36493_37842 = state_36470__$1;
(statearr_36493_37842[(2)] = null);

(statearr_36493_37842[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (21))){
var state_36470__$1 = state_36470;
var statearr_36494_37844 = state_36470__$1;
(statearr_36494_37844[(2)] = null);

(statearr_36494_37844[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (13))){
var inst_36425 = (state_36470[(8)]);
var inst_36423 = (state_36470[(10)]);
var inst_36424 = (state_36470[(11)]);
var inst_36422 = (state_36470[(12)]);
var inst_36432 = (state_36470[(2)]);
var inst_36433 = (inst_36425 + (1));
var tmp36490 = inst_36423;
var tmp36491 = inst_36424;
var tmp36492 = inst_36422;
var inst_36422__$1 = tmp36492;
var inst_36423__$1 = tmp36490;
var inst_36424__$1 = tmp36491;
var inst_36425__$1 = inst_36433;
var state_36470__$1 = (function (){var statearr_36498 = state_36470;
(statearr_36498[(8)] = inst_36425__$1);

(statearr_36498[(10)] = inst_36423__$1);

(statearr_36498[(14)] = inst_36432);

(statearr_36498[(11)] = inst_36424__$1);

(statearr_36498[(12)] = inst_36422__$1);

return statearr_36498;
})();
var statearr_36499_37854 = state_36470__$1;
(statearr_36499_37854[(2)] = null);

(statearr_36499_37854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (22))){
var state_36470__$1 = state_36470;
var statearr_36500_37856 = state_36470__$1;
(statearr_36500_37856[(2)] = null);

(statearr_36500_37856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (6))){
var inst_36411 = (state_36470[(13)]);
var inst_36420 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36411) : f.call(null,inst_36411));
var inst_36421 = cljs.core.seq(inst_36420);
var inst_36422 = inst_36421;
var inst_36423 = null;
var inst_36424 = (0);
var inst_36425 = (0);
var state_36470__$1 = (function (){var statearr_36502 = state_36470;
(statearr_36502[(8)] = inst_36425);

(statearr_36502[(10)] = inst_36423);

(statearr_36502[(11)] = inst_36424);

(statearr_36502[(12)] = inst_36422);

return statearr_36502;
})();
var statearr_36503_37858 = state_36470__$1;
(statearr_36503_37858[(2)] = null);

(statearr_36503_37858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (17))){
var inst_36436 = (state_36470[(7)]);
var inst_36440 = cljs.core.chunk_first(inst_36436);
var inst_36441 = cljs.core.chunk_rest(inst_36436);
var inst_36442 = cljs.core.count(inst_36440);
var inst_36422 = inst_36441;
var inst_36423 = inst_36440;
var inst_36424 = inst_36442;
var inst_36425 = (0);
var state_36470__$1 = (function (){var statearr_36506 = state_36470;
(statearr_36506[(8)] = inst_36425);

(statearr_36506[(10)] = inst_36423);

(statearr_36506[(11)] = inst_36424);

(statearr_36506[(12)] = inst_36422);

return statearr_36506;
})();
var statearr_36507_37866 = state_36470__$1;
(statearr_36507_37866[(2)] = null);

(statearr_36507_37866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (3))){
var inst_36468 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36470__$1,inst_36468);
} else {
if((state_val_36471 === (12))){
var inst_36456 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
var statearr_36510_37868 = state_36470__$1;
(statearr_36510_37868[(2)] = inst_36456);

(statearr_36510_37868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (2))){
var state_36470__$1 = state_36470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36470__$1,(4),in$);
} else {
if((state_val_36471 === (23))){
var inst_36464 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
var statearr_36514_37874 = state_36470__$1;
(statearr_36514_37874[(2)] = inst_36464);

(statearr_36514_37874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (19))){
var inst_36451 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
var statearr_36522_37877 = state_36470__$1;
(statearr_36522_37877[(2)] = inst_36451);

(statearr_36522_37877[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (11))){
var inst_36436 = (state_36470[(7)]);
var inst_36422 = (state_36470[(12)]);
var inst_36436__$1 = cljs.core.seq(inst_36422);
var state_36470__$1 = (function (){var statearr_36523 = state_36470;
(statearr_36523[(7)] = inst_36436__$1);

return statearr_36523;
})();
if(inst_36436__$1){
var statearr_36525_37879 = state_36470__$1;
(statearr_36525_37879[(1)] = (14));

} else {
var statearr_36526_37880 = state_36470__$1;
(statearr_36526_37880[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (9))){
var inst_36458 = (state_36470[(2)]);
var inst_36459 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36470__$1 = (function (){var statearr_36527 = state_36470;
(statearr_36527[(15)] = inst_36458);

return statearr_36527;
})();
if(cljs.core.truth_(inst_36459)){
var statearr_36529_37886 = state_36470__$1;
(statearr_36529_37886[(1)] = (21));

} else {
var statearr_36533_37890 = state_36470__$1;
(statearr_36533_37890[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (5))){
var inst_36414 = cljs.core.async.close_BANG_(out);
var state_36470__$1 = state_36470;
var statearr_36534_37891 = state_36470__$1;
(statearr_36534_37891[(2)] = inst_36414);

(statearr_36534_37891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (14))){
var inst_36436 = (state_36470[(7)]);
var inst_36438 = cljs.core.chunked_seq_QMARK_(inst_36436);
var state_36470__$1 = state_36470;
if(inst_36438){
var statearr_36541_37894 = state_36470__$1;
(statearr_36541_37894[(1)] = (17));

} else {
var statearr_36542_37895 = state_36470__$1;
(statearr_36542_37895[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (16))){
var inst_36454 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
var statearr_36543_37896 = state_36470__$1;
(statearr_36543_37896[(2)] = inst_36454);

(statearr_36543_37896[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (10))){
var inst_36425 = (state_36470[(8)]);
var inst_36423 = (state_36470[(10)]);
var inst_36430 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36423,inst_36425);
var state_36470__$1 = state_36470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36470__$1,(13),out,inst_36430);
} else {
if((state_val_36471 === (18))){
var inst_36436 = (state_36470[(7)]);
var inst_36445 = cljs.core.first(inst_36436);
var state_36470__$1 = state_36470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36470__$1,(20),out,inst_36445);
} else {
if((state_val_36471 === (8))){
var inst_36425 = (state_36470[(8)]);
var inst_36424 = (state_36470[(11)]);
var inst_36427 = (inst_36425 < inst_36424);
var inst_36428 = inst_36427;
var state_36470__$1 = state_36470;
if(cljs.core.truth_(inst_36428)){
var statearr_36553_37906 = state_36470__$1;
(statearr_36553_37906[(1)] = (10));

} else {
var statearr_36555_37907 = state_36470__$1;
(statearr_36555_37907[(1)] = (11));

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
var statearr_36556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36556[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36556[(1)] = (1));

return statearr_36556;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36470){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36470);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36558){if((e36558 instanceof Object)){
var ex__34210__auto__ = e36558;
var statearr_36560_37910 = state_36470;
(statearr_36560_37910[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36558;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37912 = state_36470;
state_36470 = G__37912;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36470){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36561 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36561[(6)] = c__34274__auto__);

return statearr_36561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36566 = arguments.length;
switch (G__36566) {
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
var G__36574 = arguments.length;
switch (G__36574) {
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
var G__36579 = arguments.length;
switch (G__36579) {
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
var c__34274__auto___37934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36607){
var state_val_36608 = (state_36607[(1)]);
if((state_val_36608 === (7))){
var inst_36602 = (state_36607[(2)]);
var state_36607__$1 = state_36607;
var statearr_36610_37937 = state_36607__$1;
(statearr_36610_37937[(2)] = inst_36602);

(statearr_36610_37937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (1))){
var inst_36584 = null;
var state_36607__$1 = (function (){var statearr_36611 = state_36607;
(statearr_36611[(7)] = inst_36584);

return statearr_36611;
})();
var statearr_36613_37940 = state_36607__$1;
(statearr_36613_37940[(2)] = null);

(statearr_36613_37940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (4))){
var inst_36587 = (state_36607[(8)]);
var inst_36587__$1 = (state_36607[(2)]);
var inst_36588 = (inst_36587__$1 == null);
var inst_36589 = cljs.core.not(inst_36588);
var state_36607__$1 = (function (){var statearr_36614 = state_36607;
(statearr_36614[(8)] = inst_36587__$1);

return statearr_36614;
})();
if(inst_36589){
var statearr_36615_37945 = state_36607__$1;
(statearr_36615_37945[(1)] = (5));

} else {
var statearr_36617_37946 = state_36607__$1;
(statearr_36617_37946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (6))){
var state_36607__$1 = state_36607;
var statearr_36618_37948 = state_36607__$1;
(statearr_36618_37948[(2)] = null);

(statearr_36618_37948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (3))){
var inst_36604 = (state_36607[(2)]);
var inst_36605 = cljs.core.async.close_BANG_(out);
var state_36607__$1 = (function (){var statearr_36619 = state_36607;
(statearr_36619[(9)] = inst_36604);

return statearr_36619;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36607__$1,inst_36605);
} else {
if((state_val_36608 === (2))){
var state_36607__$1 = state_36607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36607__$1,(4),ch);
} else {
if((state_val_36608 === (11))){
var inst_36587 = (state_36607[(8)]);
var inst_36596 = (state_36607[(2)]);
var inst_36584 = inst_36587;
var state_36607__$1 = (function (){var statearr_36621 = state_36607;
(statearr_36621[(10)] = inst_36596);

(statearr_36621[(7)] = inst_36584);

return statearr_36621;
})();
var statearr_36622_37956 = state_36607__$1;
(statearr_36622_37956[(2)] = null);

(statearr_36622_37956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (9))){
var inst_36587 = (state_36607[(8)]);
var state_36607__$1 = state_36607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36607__$1,(11),out,inst_36587);
} else {
if((state_val_36608 === (5))){
var inst_36584 = (state_36607[(7)]);
var inst_36587 = (state_36607[(8)]);
var inst_36591 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36587,inst_36584);
var state_36607__$1 = state_36607;
if(inst_36591){
var statearr_36625_37957 = state_36607__$1;
(statearr_36625_37957[(1)] = (8));

} else {
var statearr_36626_37960 = state_36607__$1;
(statearr_36626_37960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (10))){
var inst_36599 = (state_36607[(2)]);
var state_36607__$1 = state_36607;
var statearr_36627_37965 = state_36607__$1;
(statearr_36627_37965[(2)] = inst_36599);

(statearr_36627_37965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36608 === (8))){
var inst_36584 = (state_36607[(7)]);
var tmp36624 = inst_36584;
var inst_36584__$1 = tmp36624;
var state_36607__$1 = (function (){var statearr_36629 = state_36607;
(statearr_36629[(7)] = inst_36584__$1);

return statearr_36629;
})();
var statearr_36630_37967 = state_36607__$1;
(statearr_36630_37967[(2)] = null);

(statearr_36630_37967[(1)] = (2));


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
var statearr_36632 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36632[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36632[(1)] = (1));

return statearr_36632;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36607){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36607);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36633){if((e36633 instanceof Object)){
var ex__34210__auto__ = e36633;
var statearr_36634_37973 = state_36607;
(statearr_36634_37973[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36633;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37977 = state_36607;
state_36607 = G__37977;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36636 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36636[(6)] = c__34274__auto___37934);

return statearr_36636;
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
var G__36639 = arguments.length;
switch (G__36639) {
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
var c__34274__auto___37987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36679){
var state_val_36680 = (state_36679[(1)]);
if((state_val_36680 === (7))){
var inst_36675 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36682_37989 = state_36679__$1;
(statearr_36682_37989[(2)] = inst_36675);

(statearr_36682_37989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (1))){
var inst_36642 = (new Array(n));
var inst_36643 = inst_36642;
var inst_36644 = (0);
var state_36679__$1 = (function (){var statearr_36684 = state_36679;
(statearr_36684[(7)] = inst_36643);

(statearr_36684[(8)] = inst_36644);

return statearr_36684;
})();
var statearr_36685_37993 = state_36679__$1;
(statearr_36685_37993[(2)] = null);

(statearr_36685_37993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (4))){
var inst_36647 = (state_36679[(9)]);
var inst_36647__$1 = (state_36679[(2)]);
var inst_36648 = (inst_36647__$1 == null);
var inst_36649 = cljs.core.not(inst_36648);
var state_36679__$1 = (function (){var statearr_36686 = state_36679;
(statearr_36686[(9)] = inst_36647__$1);

return statearr_36686;
})();
if(inst_36649){
var statearr_36688_37998 = state_36679__$1;
(statearr_36688_37998[(1)] = (5));

} else {
var statearr_36689_37999 = state_36679__$1;
(statearr_36689_37999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (15))){
var inst_36669 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36690_38003 = state_36679__$1;
(statearr_36690_38003[(2)] = inst_36669);

(statearr_36690_38003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (13))){
var state_36679__$1 = state_36679;
var statearr_36691_38005 = state_36679__$1;
(statearr_36691_38005[(2)] = null);

(statearr_36691_38005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (6))){
var inst_36644 = (state_36679[(8)]);
var inst_36665 = (inst_36644 > (0));
var state_36679__$1 = state_36679;
if(cljs.core.truth_(inst_36665)){
var statearr_36693_38006 = state_36679__$1;
(statearr_36693_38006[(1)] = (12));

} else {
var statearr_36694_38007 = state_36679__$1;
(statearr_36694_38007[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (3))){
var inst_36677 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36679__$1,inst_36677);
} else {
if((state_val_36680 === (12))){
var inst_36643 = (state_36679[(7)]);
var inst_36667 = cljs.core.vec(inst_36643);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36679__$1,(15),out,inst_36667);
} else {
if((state_val_36680 === (2))){
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36679__$1,(4),ch);
} else {
if((state_val_36680 === (11))){
var inst_36659 = (state_36679[(2)]);
var inst_36660 = (new Array(n));
var inst_36643 = inst_36660;
var inst_36644 = (0);
var state_36679__$1 = (function (){var statearr_36696 = state_36679;
(statearr_36696[(7)] = inst_36643);

(statearr_36696[(8)] = inst_36644);

(statearr_36696[(10)] = inst_36659);

return statearr_36696;
})();
var statearr_36698_38009 = state_36679__$1;
(statearr_36698_38009[(2)] = null);

(statearr_36698_38009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (9))){
var inst_36643 = (state_36679[(7)]);
var inst_36657 = cljs.core.vec(inst_36643);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36679__$1,(11),out,inst_36657);
} else {
if((state_val_36680 === (5))){
var inst_36643 = (state_36679[(7)]);
var inst_36644 = (state_36679[(8)]);
var inst_36647 = (state_36679[(9)]);
var inst_36652 = (state_36679[(11)]);
var inst_36651 = (inst_36643[inst_36644] = inst_36647);
var inst_36652__$1 = (inst_36644 + (1));
var inst_36653 = (inst_36652__$1 < n);
var state_36679__$1 = (function (){var statearr_36700 = state_36679;
(statearr_36700[(11)] = inst_36652__$1);

(statearr_36700[(12)] = inst_36651);

return statearr_36700;
})();
if(cljs.core.truth_(inst_36653)){
var statearr_36701_38015 = state_36679__$1;
(statearr_36701_38015[(1)] = (8));

} else {
var statearr_36702_38016 = state_36679__$1;
(statearr_36702_38016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (14))){
var inst_36672 = (state_36679[(2)]);
var inst_36673 = cljs.core.async.close_BANG_(out);
var state_36679__$1 = (function (){var statearr_36704 = state_36679;
(statearr_36704[(13)] = inst_36672);

return statearr_36704;
})();
var statearr_36706_38017 = state_36679__$1;
(statearr_36706_38017[(2)] = inst_36673);

(statearr_36706_38017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (10))){
var inst_36663 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36707_38019 = state_36679__$1;
(statearr_36707_38019[(2)] = inst_36663);

(statearr_36707_38019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (8))){
var inst_36643 = (state_36679[(7)]);
var inst_36652 = (state_36679[(11)]);
var tmp36703 = inst_36643;
var inst_36643__$1 = tmp36703;
var inst_36644 = inst_36652;
var state_36679__$1 = (function (){var statearr_36708 = state_36679;
(statearr_36708[(7)] = inst_36643__$1);

(statearr_36708[(8)] = inst_36644);

return statearr_36708;
})();
var statearr_36710_38024 = state_36679__$1;
(statearr_36710_38024[(2)] = null);

(statearr_36710_38024[(1)] = (2));


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
var statearr_36711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36711[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36711[(1)] = (1));

return statearr_36711;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36679){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36679);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36713){if((e36713 instanceof Object)){
var ex__34210__auto__ = e36713;
var statearr_36714_38025 = state_36679;
(statearr_36714_38025[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36713;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38027 = state_36679;
state_36679 = G__38027;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36715 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36715[(6)] = c__34274__auto___37987);

return statearr_36715;
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
var G__36717 = arguments.length;
switch (G__36717) {
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
var c__34274__auto___38034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36759){
var state_val_36760 = (state_36759[(1)]);
if((state_val_36760 === (7))){
var inst_36755 = (state_36759[(2)]);
var state_36759__$1 = state_36759;
var statearr_36762_38039 = state_36759__$1;
(statearr_36762_38039[(2)] = inst_36755);

(statearr_36762_38039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (1))){
var inst_36718 = [];
var inst_36719 = inst_36718;
var inst_36720 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36759__$1 = (function (){var statearr_36763 = state_36759;
(statearr_36763[(7)] = inst_36720);

(statearr_36763[(8)] = inst_36719);

return statearr_36763;
})();
var statearr_36765_38041 = state_36759__$1;
(statearr_36765_38041[(2)] = null);

(statearr_36765_38041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (4))){
var inst_36723 = (state_36759[(9)]);
var inst_36723__$1 = (state_36759[(2)]);
var inst_36724 = (inst_36723__$1 == null);
var inst_36725 = cljs.core.not(inst_36724);
var state_36759__$1 = (function (){var statearr_36766 = state_36759;
(statearr_36766[(9)] = inst_36723__$1);

return statearr_36766;
})();
if(inst_36725){
var statearr_36767_38060 = state_36759__$1;
(statearr_36767_38060[(1)] = (5));

} else {
var statearr_36768_38061 = state_36759__$1;
(statearr_36768_38061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (15))){
var inst_36749 = (state_36759[(2)]);
var state_36759__$1 = state_36759;
var statearr_36770_38065 = state_36759__$1;
(statearr_36770_38065[(2)] = inst_36749);

(statearr_36770_38065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (13))){
var state_36759__$1 = state_36759;
var statearr_36771_38067 = state_36759__$1;
(statearr_36771_38067[(2)] = null);

(statearr_36771_38067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (6))){
var inst_36719 = (state_36759[(8)]);
var inst_36744 = inst_36719.length;
var inst_36745 = (inst_36744 > (0));
var state_36759__$1 = state_36759;
if(cljs.core.truth_(inst_36745)){
var statearr_36772_38068 = state_36759__$1;
(statearr_36772_38068[(1)] = (12));

} else {
var statearr_36774_38069 = state_36759__$1;
(statearr_36774_38069[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (3))){
var inst_36757 = (state_36759[(2)]);
var state_36759__$1 = state_36759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36759__$1,inst_36757);
} else {
if((state_val_36760 === (12))){
var inst_36719 = (state_36759[(8)]);
var inst_36747 = cljs.core.vec(inst_36719);
var state_36759__$1 = state_36759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36759__$1,(15),out,inst_36747);
} else {
if((state_val_36760 === (2))){
var state_36759__$1 = state_36759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36759__$1,(4),ch);
} else {
if((state_val_36760 === (11))){
var inst_36727 = (state_36759[(10)]);
var inst_36723 = (state_36759[(9)]);
var inst_36737 = (state_36759[(2)]);
var inst_36738 = [];
var inst_36739 = inst_36738.push(inst_36723);
var inst_36719 = inst_36738;
var inst_36720 = inst_36727;
var state_36759__$1 = (function (){var statearr_36776 = state_36759;
(statearr_36776[(7)] = inst_36720);

(statearr_36776[(11)] = inst_36737);

(statearr_36776[(12)] = inst_36739);

(statearr_36776[(8)] = inst_36719);

return statearr_36776;
})();
var statearr_36777_38075 = state_36759__$1;
(statearr_36777_38075[(2)] = null);

(statearr_36777_38075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (9))){
var inst_36719 = (state_36759[(8)]);
var inst_36735 = cljs.core.vec(inst_36719);
var state_36759__$1 = state_36759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36759__$1,(11),out,inst_36735);
} else {
if((state_val_36760 === (5))){
var inst_36720 = (state_36759[(7)]);
var inst_36727 = (state_36759[(10)]);
var inst_36723 = (state_36759[(9)]);
var inst_36727__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36723) : f.call(null,inst_36723));
var inst_36728 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36727__$1,inst_36720);
var inst_36729 = cljs.core.keyword_identical_QMARK_(inst_36720,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36730 = ((inst_36728) || (inst_36729));
var state_36759__$1 = (function (){var statearr_36779 = state_36759;
(statearr_36779[(10)] = inst_36727__$1);

return statearr_36779;
})();
if(cljs.core.truth_(inst_36730)){
var statearr_36781_38083 = state_36759__$1;
(statearr_36781_38083[(1)] = (8));

} else {
var statearr_36782_38084 = state_36759__$1;
(statearr_36782_38084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (14))){
var inst_36752 = (state_36759[(2)]);
var inst_36753 = cljs.core.async.close_BANG_(out);
var state_36759__$1 = (function (){var statearr_36784 = state_36759;
(statearr_36784[(13)] = inst_36752);

return statearr_36784;
})();
var statearr_36785_38085 = state_36759__$1;
(statearr_36785_38085[(2)] = inst_36753);

(statearr_36785_38085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (10))){
var inst_36742 = (state_36759[(2)]);
var state_36759__$1 = state_36759;
var statearr_36787_38087 = state_36759__$1;
(statearr_36787_38087[(2)] = inst_36742);

(statearr_36787_38087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (8))){
var inst_36727 = (state_36759[(10)]);
var inst_36723 = (state_36759[(9)]);
var inst_36719 = (state_36759[(8)]);
var inst_36732 = inst_36719.push(inst_36723);
var tmp36783 = inst_36719;
var inst_36719__$1 = tmp36783;
var inst_36720 = inst_36727;
var state_36759__$1 = (function (){var statearr_36788 = state_36759;
(statearr_36788[(7)] = inst_36720);

(statearr_36788[(14)] = inst_36732);

(statearr_36788[(8)] = inst_36719__$1);

return statearr_36788;
})();
var statearr_36789_38088 = state_36759__$1;
(statearr_36789_38088[(2)] = null);

(statearr_36789_38088[(1)] = (2));


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
var statearr_36791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36791[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36791[(1)] = (1));

return statearr_36791;
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
}catch (e36792){if((e36792 instanceof Object)){
var ex__34210__auto__ = e36792;
var statearr_36793_38094 = state_36759;
(statearr_36793_38094[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36792;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38095 = state_36759;
state_36759 = G__38095;
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
var state__34276__auto__ = (function (){var statearr_36795 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36795[(6)] = c__34274__auto___38034);

return statearr_36795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
