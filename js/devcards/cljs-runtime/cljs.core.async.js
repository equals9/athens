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
var G__34334 = arguments.length;
switch (G__34334) {
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
var val_36857 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36857) : fn1.call(null,val_36857));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36857) : fn1.call(null,val_36857));
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
var n__4666__auto___36863 = n;
var x_36864 = (0);
while(true){
if((x_36864 < n__4666__auto___36863)){
(a[x_36864] = x_36864);

var G__36865 = (x_36864 + (1));
x_36864 = G__36865;
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
var G__36873 = (i + (1));
i = G__36873;
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
var len__4789__auto___36875 = arguments.length;
var i__4790__auto___36876 = (0);
while(true){
if((i__4790__auto___36876 < len__4789__auto___36875)){
args__4795__auto__.push((arguments[i__4790__auto___36876]));

var G__36878 = (i__4790__auto___36876 + (1));
i__4790__auto___36876 = G__36878;
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
var c__34274__auto___36883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34420){
var state_val_34424 = (state_34420[(1)]);
if((state_val_34424 === (7))){
var inst_34416 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34425_36884 = state_34420__$1;
(statearr_34425_36884[(2)] = inst_34416);

(statearr_34425_36884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34420__$1 = state_34420;
var statearr_34426_36886 = state_34420__$1;
(statearr_34426_36886[(2)] = null);

(statearr_34426_36886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (4))){
var inst_34390 = (state_34420[(7)]);
var inst_34390__$1 = (state_34420[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34420__$1 = (function (){var statearr_34427 = state_34420;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36887 = state_34420__$1;
(statearr_34428_36887[(1)] = (5));

} else {
var statearr_34429_36888 = state_34420__$1;
(statearr_34429_36888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34420__$1 = state_34420;
var statearr_34430_36890 = state_34420__$1;
(statearr_34430_36890[(2)] = null);

(statearr_34430_36890[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (6))){
var inst_34390 = (state_34420[(7)]);
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34420__$1,(11),to,inst_34390);
} else {
if((state_val_34424 === (3))){
var inst_34418 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34420__$1,inst_34418);
} else {
if((state_val_34424 === (12))){
var state_34420__$1 = state_34420;
var statearr_34431_36891 = state_34420__$1;
(statearr_34431_36891[(2)] = null);

(statearr_34431_36891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (2))){
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34420__$1,(4),from);
} else {
if((state_val_34424 === (11))){
var inst_34403 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
if(cljs.core.truth_(inst_34403)){
var statearr_34432_36893 = state_34420__$1;
(statearr_34432_36893[(1)] = (12));

} else {
var statearr_34433_36894 = state_34420__$1;
(statearr_34433_36894[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34420__$1 = state_34420;
var statearr_34434_36895 = state_34420__$1;
(statearr_34434_36895[(2)] = null);

(statearr_34434_36895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34420__$1 = state_34420;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36897 = state_34420__$1;
(statearr_34435_36897[(1)] = (8));

} else {
var statearr_34436_36898 = state_34420__$1;
(statearr_34436_36898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34414 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34437_36899 = state_34420__$1;
(statearr_34437_36899[(2)] = inst_34414);

(statearr_34437_36899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34400 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34438_36900 = state_34420__$1;
(statearr_34438_36900[(2)] = inst_34400);

(statearr_34438_36900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34420__$1 = state_34420;
var statearr_34439_36902 = state_34420__$1;
(statearr_34439_36902[(2)] = inst_34394);

(statearr_34439_36902[(1)] = (10));


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
var statearr_34442_36904 = state_34420;
(statearr_34442_36904[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36905 = state_34420;
state_34420 = G__36905;
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
(statearr_34443[(6)] = c__34274__auto___36883);

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
var c__34274__auto___36908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34461_36911 = state_34452;
(statearr_34461_36911[(5)] = ex__34210__auto__);


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
var state__34276__auto__ = (function (){var statearr_34462 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34462[(6)] = c__34274__auto___36908);

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
var n__4666__auto___36915 = n;
var __36916 = (0);
while(true){
if((__36916 < n__4666__auto___36915)){
var G__34468_36917 = type;
var G__34468_36918__$1 = (((G__34468_36917 instanceof cljs.core.Keyword))?G__34468_36917.fqn:null);
switch (G__34468_36918__$1) {
case "compute":
var c__34274__auto___36920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36916,c__34274__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36916,c__34274__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (state_34481){
var state_val_34482 = (state_34481[(1)]);
if((state_val_34482 === (1))){
var state_34481__$1 = state_34481;
var statearr_34483_36922 = state_34481__$1;
(statearr_34483_36922[(2)] = null);

(statearr_34483_36922[(1)] = (2));


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
var statearr_34488_36926 = state_34481__$1;
(statearr_34488_36926[(2)] = null);

(statearr_34488_36926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (6))){
var state_34481__$1 = state_34481;
var statearr_34489_36927 = state_34481__$1;
(statearr_34489_36927[(2)] = null);

(statearr_34489_36927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (7))){
var inst_34477 = (state_34481[(2)]);
var state_34481__$1 = state_34481;
var statearr_34490_36929 = state_34481__$1;
(statearr_34490_36929[(2)] = inst_34477);

(statearr_34490_36929[(1)] = (3));


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
});})(__36916,c__34274__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
;
return ((function (__36916,switch__34206__auto__,c__34274__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
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
var statearr_34494_36931 = state_34481;
(statearr_34494_36931[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36932 = state_34481;
state_34481 = G__36932;
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
;})(__36916,switch__34206__auto__,c__34274__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34495 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34495[(6)] = c__34274__auto___36920);

return statearr_34495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36916,c__34274__auto___36920,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36916,c__34274__auto___36934,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36916,c__34274__auto___36934,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function (state_34510){
var state_val_34511 = (state_34510[(1)]);
if((state_val_34511 === (1))){
var state_34510__$1 = state_34510;
var statearr_34517_36936 = state_34510__$1;
(statearr_34517_36936[(2)] = null);

(statearr_34517_36936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34511 === (2))){
var state_34510__$1 = state_34510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34510__$1,(4),jobs);
} else {
if((state_val_34511 === (3))){
var inst_34508 = (state_34510[(2)]);
var state_34510__$1 = state_34510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34510__$1,inst_34508);
} else {
if((state_val_34511 === (4))){
var inst_34500 = (state_34510[(2)]);
var inst_34501 = async(inst_34500);
var state_34510__$1 = state_34510;
if(cljs.core.truth_(inst_34501)){
var statearr_34518_36938 = state_34510__$1;
(statearr_34518_36938[(1)] = (5));

} else {
var statearr_34519_36939 = state_34510__$1;
(statearr_34519_36939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34511 === (5))){
var state_34510__$1 = state_34510;
var statearr_34520_36940 = state_34510__$1;
(statearr_34520_36940[(2)] = null);

(statearr_34520_36940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34511 === (6))){
var state_34510__$1 = state_34510;
var statearr_34521_36941 = state_34510__$1;
(statearr_34521_36941[(2)] = null);

(statearr_34521_36941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34511 === (7))){
var inst_34506 = (state_34510[(2)]);
var state_34510__$1 = state_34510;
var statearr_34522_36943 = state_34510__$1;
(statearr_34522_36943[(2)] = inst_34506);

(statearr_34522_36943[(1)] = (3));


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
});})(__36916,c__34274__auto___36934,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
;
return ((function (__36916,switch__34206__auto__,c__34274__auto___36934,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34524 = [null,null,null,null,null,null,null];
(statearr_34524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34524[(1)] = (1));

return statearr_34524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34510){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34510);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34525){if((e34525 instanceof Object)){
var ex__34210__auto__ = e34525;
var statearr_34526_36945 = state_34510;
(statearr_34526_36945[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36946 = state_34510;
state_34510 = G__36946;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34510){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36916,switch__34206__auto__,c__34274__auto___36934,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34527 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34527[(6)] = c__34274__auto___36934);

return statearr_34527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36916,c__34274__auto___36934,G__34468_36917,G__34468_36918__$1,n__4666__auto___36915,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34468_36918__$1)].join('')));

}

var G__36948 = (__36916 + (1));
__36916 = G__36948;
continue;
} else {
}
break;
}

var c__34274__auto___36949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34549 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34558_36951 = state_34556__$1;
(statearr_34558_36951[(2)] = inst_34549);

(statearr_34558_36951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34559_36952 = state_34556__$1;
(statearr_34559_36952[(2)] = null);

(statearr_34559_36952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (4))){
var inst_34530 = (state_34556[(7)]);
var inst_34530__$1 = (state_34556[(2)]);
var inst_34531 = (inst_34530__$1 == null);
var state_34556__$1 = (function (){var statearr_34560 = state_34556;
(statearr_34560[(7)] = inst_34530__$1);

return statearr_34560;
})();
if(cljs.core.truth_(inst_34531)){
var statearr_34561_36954 = state_34556__$1;
(statearr_34561_36954[(1)] = (5));

} else {
var statearr_34562_36955 = state_34556__$1;
(statearr_34562_36955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (6))){
var inst_34535 = (state_34556[(8)]);
var inst_34530 = (state_34556[(7)]);
var inst_34535__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34540 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34541 = [inst_34530,inst_34535__$1];
var inst_34542 = (new cljs.core.PersistentVector(null,2,(5),inst_34540,inst_34541,null));
var state_34556__$1 = (function (){var statearr_34565 = state_34556;
(statearr_34565[(8)] = inst_34535__$1);

return statearr_34565;
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
var statearr_34568_36957 = state_34556__$1;
(statearr_34568_36957[(2)] = null);

(statearr_34568_36957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34533 = cljs.core.async.close_BANG_(jobs);
var state_34556__$1 = state_34556;
var statearr_34569_36958 = state_34556__$1;
(statearr_34569_36958[(2)] = inst_34533);

(statearr_34569_36958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (8))){
var inst_34535 = (state_34556[(8)]);
var inst_34544 = (state_34556[(2)]);
var state_34556__$1 = (function (){var statearr_34570 = state_34556;
(statearr_34570[(10)] = inst_34544);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(9),results,inst_34535);
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
var statearr_34573_36966 = state_34556;
(statearr_34573_36966[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36967 = state_34556;
state_34556 = G__36967;
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
(statearr_34574[(6)] = c__34274__auto___36949);

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
var statearr_34614_36969 = state_34612__$1;
(statearr_34614_36969[(2)] = inst_34608);

(statearr_34614_36969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36970 = state_34612__$1;
(statearr_34615_36970[(2)] = null);

(statearr_34615_36970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36972 = state_34612__$1;
(statearr_34616_36972[(2)] = null);

(statearr_34616_36972[(1)] = (2));


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
var statearr_34618_36976 = state_34612__$1;
(statearr_34618_36976[(1)] = (5));

} else {
var statearr_34619_36977 = state_34612__$1;
(statearr_34619_36977[(1)] = (6));

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
var statearr_34620_36978 = state_34612__$1;
(statearr_34620_36978[(2)] = inst_34603);

(statearr_34620_36978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36979 = state_34612__$1;
(statearr_34622_36979[(2)] = null);

(statearr_34622_36979[(1)] = (2));


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
var statearr_34623_36981 = state_34612__$1;
(statearr_34623_36981[(1)] = (19));

} else {
var statearr_34624_36982 = state_34612__$1;
(statearr_34624_36982[(1)] = (20));

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
var statearr_34625_36987 = state_34612__$1;
(statearr_34625_36987[(2)] = null);

(statearr_34625_36987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36990 = state_34612__$1;
(statearr_34627_36990[(2)] = null);

(statearr_34627_36990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36991 = state_34612__$1;
(statearr_34628_36991[(2)] = null);

(statearr_34628_36991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36992 = state_34612__$1;
(statearr_34629_36992[(1)] = (8));

} else {
var statearr_34630_36993 = state_34612__$1;
(statearr_34630_36993[(1)] = (9));

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
var statearr_34632_36994 = state_34612__$1;
(statearr_34632_36994[(1)] = (15));

} else {
var statearr_34633_36995 = state_34612__$1;
(statearr_34633_36995[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36996 = state_34612__$1;
(statearr_34634_36996[(2)] = false);

(statearr_34634_36996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36997 = state_34612__$1;
(statearr_34635_36997[(2)] = inst_34584);

(statearr_34635_36997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37000 = state_34612__$1;
(statearr_34636_37000[(2)] = inst_34595);

(statearr_34636_37000[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37002 = state_34612__$1;
(statearr_34637_37002[(2)] = inst_34581);

(statearr_34637_37002[(1)] = (10));


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
var statearr_34640_37006 = state_34612;
(statearr_34640_37006[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37007 = state_34612;
state_34612 = G__37007;
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
var c__34274__auto___37037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34676){
var state_val_34677 = (state_34676[(1)]);
if((state_val_34677 === (7))){
var inst_34672 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
var statearr_34678_37038 = state_34676__$1;
(statearr_34678_37038[(2)] = inst_34672);

(statearr_34678_37038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (1))){
var state_34676__$1 = state_34676;
var statearr_34682_37041 = state_34676__$1;
(statearr_34682_37041[(2)] = null);

(statearr_34682_37041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (4))){
var inst_34653 = (state_34676[(7)]);
var inst_34653__$1 = (state_34676[(2)]);
var inst_34654 = (inst_34653__$1 == null);
var state_34676__$1 = (function (){var statearr_34683 = state_34676;
(statearr_34683[(7)] = inst_34653__$1);

return statearr_34683;
})();
if(cljs.core.truth_(inst_34654)){
var statearr_34686_37044 = state_34676__$1;
(statearr_34686_37044[(1)] = (5));

} else {
var statearr_34687_37047 = state_34676__$1;
(statearr_34687_37047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (13))){
var state_34676__$1 = state_34676;
var statearr_34688_37051 = state_34676__$1;
(statearr_34688_37051[(2)] = null);

(statearr_34688_37051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (6))){
var inst_34653 = (state_34676[(7)]);
var inst_34659 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34653) : p.call(null,inst_34653));
var state_34676__$1 = state_34676;
if(cljs.core.truth_(inst_34659)){
var statearr_34689_37053 = state_34676__$1;
(statearr_34689_37053[(1)] = (9));

} else {
var statearr_34690_37055 = state_34676__$1;
(statearr_34690_37055[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (3))){
var inst_34674 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34676__$1,inst_34674);
} else {
if((state_val_34677 === (12))){
var state_34676__$1 = state_34676;
var statearr_34692_37058 = state_34676__$1;
(statearr_34692_37058[(2)] = null);

(statearr_34692_37058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (2))){
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34676__$1,(4),ch);
} else {
if((state_val_34677 === (11))){
var inst_34653 = (state_34676[(7)]);
var inst_34663 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34676__$1,(8),inst_34663,inst_34653);
} else {
if((state_val_34677 === (9))){
var state_34676__$1 = state_34676;
var statearr_34693_37062 = state_34676__$1;
(statearr_34693_37062[(2)] = tc);

(statearr_34693_37062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (5))){
var inst_34656 = cljs.core.async.close_BANG_(tc);
var inst_34657 = cljs.core.async.close_BANG_(fc);
var state_34676__$1 = (function (){var statearr_34696 = state_34676;
(statearr_34696[(8)] = inst_34656);

return statearr_34696;
})();
var statearr_34697_37067 = state_34676__$1;
(statearr_34697_37067[(2)] = inst_34657);

(statearr_34697_37067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (14))){
var inst_34670 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
var statearr_34698_37074 = state_34676__$1;
(statearr_34698_37074[(2)] = inst_34670);

(statearr_34698_37074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (10))){
var state_34676__$1 = state_34676;
var statearr_34699_37075 = state_34676__$1;
(statearr_34699_37075[(2)] = fc);

(statearr_34699_37075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34677 === (8))){
var inst_34665 = (state_34676[(2)]);
var state_34676__$1 = state_34676;
if(cljs.core.truth_(inst_34665)){
var statearr_34700_37076 = state_34676__$1;
(statearr_34700_37076[(1)] = (12));

} else {
var statearr_34701_37078 = state_34676__$1;
(statearr_34701_37078[(1)] = (13));

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
}catch (e34703){if((e34703 instanceof Object)){
var ex__34210__auto__ = e34703;
var statearr_34705_37083 = state_34676;
(statearr_34705_37083[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37084 = state_34676;
state_34676 = G__37084;
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
var state__34276__auto__ = (function (){var statearr_34707 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34707[(6)] = c__34274__auto___37037);

return statearr_34707;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34733){
var state_val_34734 = (state_34733[(1)]);
if((state_val_34734 === (7))){
var inst_34729 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34735_37093 = state_34733__$1;
(statearr_34735_37093[(2)] = inst_34729);

(statearr_34735_37093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (1))){
var inst_34710 = init;
var state_34733__$1 = (function (){var statearr_34736 = state_34733;
(statearr_34736[(7)] = inst_34710);

return statearr_34736;
})();
var statearr_34737_37094 = state_34733__$1;
(statearr_34737_37094[(2)] = null);

(statearr_34737_37094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (4))){
var inst_34713 = (state_34733[(8)]);
var inst_34713__$1 = (state_34733[(2)]);
var inst_34714 = (inst_34713__$1 == null);
var state_34733__$1 = (function (){var statearr_34738 = state_34733;
(statearr_34738[(8)] = inst_34713__$1);

return statearr_34738;
})();
if(cljs.core.truth_(inst_34714)){
var statearr_34740_37100 = state_34733__$1;
(statearr_34740_37100[(1)] = (5));

} else {
var statearr_34741_37102 = state_34733__$1;
(statearr_34741_37102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (6))){
var inst_34713 = (state_34733[(8)]);
var inst_34710 = (state_34733[(7)]);
var inst_34717 = (state_34733[(9)]);
var inst_34717__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34710,inst_34713) : f.call(null,inst_34710,inst_34713));
var inst_34718 = cljs.core.reduced_QMARK_(inst_34717__$1);
var state_34733__$1 = (function (){var statearr_34742 = state_34733;
(statearr_34742[(9)] = inst_34717__$1);

return statearr_34742;
})();
if(inst_34718){
var statearr_34743_37105 = state_34733__$1;
(statearr_34743_37105[(1)] = (8));

} else {
var statearr_34744_37106 = state_34733__$1;
(statearr_34744_37106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (3))){
var inst_34731 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34733__$1,inst_34731);
} else {
if((state_val_34734 === (2))){
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34733__$1,(4),ch);
} else {
if((state_val_34734 === (9))){
var inst_34717 = (state_34733[(9)]);
var inst_34710 = inst_34717;
var state_34733__$1 = (function (){var statearr_34745 = state_34733;
(statearr_34745[(7)] = inst_34710);

return statearr_34745;
})();
var statearr_34746_37109 = state_34733__$1;
(statearr_34746_37109[(2)] = null);

(statearr_34746_37109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (5))){
var inst_34710 = (state_34733[(7)]);
var state_34733__$1 = state_34733;
var statearr_34747_37111 = state_34733__$1;
(statearr_34747_37111[(2)] = inst_34710);

(statearr_34747_37111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (10))){
var inst_34727 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34751_37112 = state_34733__$1;
(statearr_34751_37112[(2)] = inst_34727);

(statearr_34751_37112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (8))){
var inst_34717 = (state_34733[(9)]);
var inst_34721 = cljs.core.deref(inst_34717);
var state_34733__$1 = state_34733;
var statearr_34752_37116 = state_34733__$1;
(statearr_34752_37116[(2)] = inst_34721);

(statearr_34752_37116[(1)] = (10));


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
var statearr_34753 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34753[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34753[(1)] = (1));

return statearr_34753;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34733){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34733);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34754){if((e34754 instanceof Object)){
var ex__34210__auto__ = e34754;
var statearr_34758_37121 = state_34733;
(statearr_34758_37121[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37122 = state_34733;
state_34733 = G__37122;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34733){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34759 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34759[(6)] = c__34274__auto__);

return statearr_34759;
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
var statearr_34770 = [null,null,null,null,null,null,null];
(statearr_34770[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34770[(1)] = (1));

return statearr_34770;
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
}catch (e34771){if((e34771 instanceof Object)){
var ex__34210__auto__ = e34771;
var statearr_34772_37133 = state_34765;
(statearr_34772_37133[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37135 = state_34765;
state_34765 = G__37135;
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
var statearr_34802_37144 = state_34800__$1;
(statearr_34802_37144[(2)] = inst_34782);

(statearr_34802_37144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34800__$1 = (function (){var statearr_34803 = state_34800;
(statearr_34803[(7)] = inst_34777);

return statearr_34803;
})();
var statearr_34804_37147 = state_34800__$1;
(statearr_34804_37147[(2)] = null);

(statearr_34804_37147[(1)] = (2));


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
var statearr_34805_37148 = state_34800__$1;
(statearr_34805_37148[(2)] = inst_34794);

(statearr_34805_37148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var inst_34785 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34785)){
var statearr_34806_37151 = state_34800__$1;
(statearr_34806_37151[(1)] = (8));

} else {
var statearr_34807_37152 = state_34800__$1;
(statearr_34807_37152[(1)] = (9));

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
var statearr_34811_37153 = state_34800__$1;
(statearr_34811_37153[(2)] = null);

(statearr_34811_37153[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34777)){
var statearr_34812_37155 = state_34800__$1;
(statearr_34812_37155[(1)] = (4));

} else {
var statearr_34813_37158 = state_34800__$1;
(statearr_34813_37158[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34800__$1 = state_34800;
var statearr_34817_37159 = state_34800__$1;
(statearr_34817_37159[(2)] = inst_34791);

(statearr_34817_37159[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var state_34800__$1 = state_34800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34819_37163 = state_34800__$1;
(statearr_34819_37163[(1)] = (11));

} else {
var statearr_34820_37165 = state_34800__$1;
(statearr_34820_37165[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
var statearr_34821_37169 = state_34800__$1;
(statearr_34821_37169[(2)] = inst_34777);

(statearr_34821_37169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34822_37171 = state_34800__$1;
(statearr_34822_37171[(2)] = inst_34796);

(statearr_34822_37171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (8))){
var inst_34777 = (state_34800[(7)]);
var inst_34787 = cljs.core.next(inst_34777);
var inst_34777__$1 = inst_34787;
var state_34800__$1 = (function (){var statearr_34823 = state_34800;
(statearr_34823[(7)] = inst_34777__$1);

return statearr_34823;
})();
var statearr_34824_37172 = state_34800__$1;
(statearr_34824_37172[(2)] = null);

(statearr_34824_37172[(1)] = (2));


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
}catch (e34827){if((e34827 instanceof Object)){
var ex__34210__auto__ = e34827;
var statearr_34828_37173 = state_34800;
(statearr_34828_37173[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37180 = state_34800;
state_34800 = G__37180;
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
var state__34276__auto__ = (function (){var statearr_34831 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34831[(6)] = c__34274__auto__);

return statearr_34831;
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
var c__34274__auto___37221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34978){
var state_val_34983 = (state_34978[(1)]);
if((state_val_34983 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34986_37224 = state_34978__$1;
(statearr_34986_37224[(2)] = inst_34974);

(statearr_34986_37224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (20))){
var inst_34877 = (state_34978[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34978__$1 = (function (){var statearr_34987 = state_34978;
(statearr_34987[(8)] = inst_34890);

return statearr_34987;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34988_37227 = state_34978__$1;
(statearr_34988_37227[(1)] = (22));

} else {
var statearr_34989_37228 = state_34978__$1;
(statearr_34989_37228[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (27))){
var inst_34846 = (state_34978[(9)]);
var inst_34926 = (state_34978[(10)]);
var inst_34919 = (state_34978[(11)]);
var inst_34921 = (state_34978[(12)]);
var inst_34926__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34919,inst_34921);
var inst_34927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34926__$1,inst_34846,done);
var state_34978__$1 = (function (){var statearr_34990 = state_34978;
(statearr_34990[(10)] = inst_34926__$1);

return statearr_34990;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34991_37230 = state_34978__$1;
(statearr_34991_37230[(1)] = (30));

} else {
var statearr_34992_37232 = state_34978__$1;
(statearr_34992_37232[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (1))){
var state_34978__$1 = state_34978;
var statearr_34993_37233 = state_34978__$1;
(statearr_34993_37233[(2)] = null);

(statearr_34993_37233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (24))){
var inst_34877 = (state_34978[(7)]);
var inst_34896 = (state_34978[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_34996 = state_34978;
(statearr_34996[(13)] = inst_34857);

(statearr_34996[(14)] = inst_34856);

(statearr_34996[(15)] = inst_34858);

(statearr_34996[(16)] = inst_34896);

(statearr_34996[(17)] = inst_34855);

return statearr_34996;
})();
var statearr_34999_37239 = state_34978__$1;
(statearr_34999_37239[(2)] = null);

(statearr_34999_37239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (39))){
var state_34978__$1 = state_34978;
var statearr_35005_37240 = state_34978__$1;
(statearr_35005_37240[(2)] = null);

(statearr_35005_37240[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (4))){
var inst_34846 = (state_34978[(9)]);
var inst_34846__$1 = (state_34978[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34978__$1 = (function (){var statearr_35006 = state_34978;
(statearr_35006[(9)] = inst_34846__$1);

return statearr_35006;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35007_37242 = state_34978__$1;
(statearr_35007_37242[(1)] = (5));

} else {
var statearr_35008_37243 = state_34978__$1;
(statearr_35008_37243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (15))){
var inst_34857 = (state_34978[(13)]);
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34855 = (state_34978[(17)]);
var inst_34873 = (state_34978[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35001 = inst_34857;
var tmp35002 = inst_34856;
var tmp35003 = inst_34855;
var inst_34855__$1 = tmp35003;
var inst_34856__$1 = tmp35002;
var inst_34857__$1 = tmp35001;
var inst_34858__$1 = inst_34874;
var state_34978__$1 = (function (){var statearr_35009 = state_34978;
(statearr_35009[(18)] = inst_34873);

(statearr_35009[(13)] = inst_34857__$1);

(statearr_35009[(14)] = inst_34856__$1);

(statearr_35009[(15)] = inst_34858__$1);

(statearr_35009[(17)] = inst_34855__$1);

return statearr_35009;
})();
var statearr_35010_37248 = state_34978__$1;
(statearr_35010_37248[(2)] = null);

(statearr_35010_37248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (21))){
var inst_34900 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35014_37250 = state_34978__$1;
(statearr_35014_37250[(2)] = inst_34900);

(statearr_35014_37250[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (31))){
var inst_34926 = (state_34978[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34978__$1 = (function (){var statearr_35017 = state_34978;
(statearr_35017[(19)] = inst_34930);

return statearr_35017;
})();
var statearr_35019_37254 = state_34978__$1;
(statearr_35019_37254[(2)] = inst_34931);

(statearr_35019_37254[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (32))){
var inst_34918 = (state_34978[(20)]);
var inst_34919 = (state_34978[(11)]);
var inst_34920 = (state_34978[(21)]);
var inst_34921 = (state_34978[(12)]);
var inst_34933 = (state_34978[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp35011 = inst_34918;
var tmp35012 = inst_34919;
var tmp35013 = inst_34920;
var inst_34918__$1 = tmp35011;
var inst_34919__$1 = tmp35012;
var inst_34920__$1 = tmp35013;
var inst_34921__$1 = inst_34934;
var state_34978__$1 = (function (){var statearr_35023 = state_34978;
(statearr_35023[(20)] = inst_34918__$1);

(statearr_35023[(22)] = inst_34933);

(statearr_35023[(11)] = inst_34919__$1);

(statearr_35023[(21)] = inst_34920__$1);

(statearr_35023[(12)] = inst_34921__$1);

return statearr_35023;
})();
var statearr_35024_37260 = state_34978__$1;
(statearr_35024_37260[(2)] = null);

(statearr_35024_37260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (40))){
var inst_34946 = (state_34978[(23)]);
var inst_34950 = done(null);
var inst_34951 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34946);
var state_34978__$1 = (function (){var statearr_35025 = state_34978;
(statearr_35025[(24)] = inst_34950);

return statearr_35025;
})();
var statearr_35026_37265 = state_34978__$1;
(statearr_35026_37265[(2)] = inst_34951);

(statearr_35026_37265[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (33))){
var inst_34937 = (state_34978[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34978__$1 = state_34978;
if(inst_34939){
var statearr_35029_37270 = state_34978__$1;
(statearr_35029_37270[(1)] = (36));

} else {
var statearr_35030_37271 = state_34978__$1;
(statearr_35030_37271[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (13))){
var inst_34867 = (state_34978[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34978__$1 = state_34978;
var statearr_35034_37273 = state_34978__$1;
(statearr_35034_37273[(2)] = inst_34870);

(statearr_35034_37273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (22))){
var inst_34890 = (state_34978[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34978__$1 = state_34978;
var statearr_35036_37277 = state_34978__$1;
(statearr_35036_37277[(2)] = inst_34893);

(statearr_35036_37277[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (36))){
var inst_34937 = (state_34978[(25)]);
var inst_34941 = cljs.core.chunk_first(inst_34937);
var inst_34942 = cljs.core.chunk_rest(inst_34937);
var inst_34943 = cljs.core.count(inst_34941);
var inst_34918 = inst_34942;
var inst_34919 = inst_34941;
var inst_34920 = inst_34943;
var inst_34921 = (0);
var state_34978__$1 = (function (){var statearr_35037 = state_34978;
(statearr_35037[(20)] = inst_34918);

(statearr_35037[(11)] = inst_34919);

(statearr_35037[(21)] = inst_34920);

(statearr_35037[(12)] = inst_34921);

return statearr_35037;
})();
var statearr_35039_37282 = state_34978__$1;
(statearr_35039_37282[(2)] = null);

(statearr_35039_37282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (41))){
var inst_34937 = (state_34978[(25)]);
var inst_34953 = (state_34978[(2)]);
var inst_34954 = cljs.core.next(inst_34937);
var inst_34918 = inst_34954;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34978__$1 = (function (){var statearr_35043 = state_34978;
(statearr_35043[(20)] = inst_34918);

(statearr_35043[(11)] = inst_34919);

(statearr_35043[(21)] = inst_34920);

(statearr_35043[(27)] = inst_34953);

(statearr_35043[(12)] = inst_34921);

return statearr_35043;
})();
var statearr_35044_37288 = state_34978__$1;
(statearr_35044_37288[(2)] = null);

(statearr_35044_37288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (43))){
var state_34978__$1 = state_34978;
var statearr_35057_37292 = state_34978__$1;
(statearr_35057_37292[(2)] = null);

(statearr_35057_37292[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (29))){
var inst_34962 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35061_37294 = state_34978__$1;
(statearr_35061_37294[(2)] = inst_34962);

(statearr_35061_37294[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (44))){
var inst_34971 = (state_34978[(2)]);
var state_34978__$1 = (function (){var statearr_35062 = state_34978;
(statearr_35062[(28)] = inst_34971);

return statearr_35062;
})();
var statearr_35065_37298 = state_34978__$1;
(statearr_35065_37298[(2)] = null);

(statearr_35065_37298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (6))){
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
var state_34978__$1 = (function (){var statearr_35068 = state_34978;
(statearr_35068[(20)] = inst_34918);

(statearr_35068[(29)] = inst_34910__$1);

(statearr_35068[(11)] = inst_34919);

(statearr_35068[(21)] = inst_34920);

(statearr_35068[(12)] = inst_34921);

(statearr_35068[(30)] = inst_34912);

return statearr_35068;
})();
var statearr_35070_37303 = state_34978__$1;
(statearr_35070_37303[(2)] = null);

(statearr_35070_37303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (28))){
var inst_34918 = (state_34978[(20)]);
var inst_34937 = (state_34978[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34978__$1 = (function (){var statearr_35074 = state_34978;
(statearr_35074[(25)] = inst_34937__$1);

return statearr_35074;
})();
if(inst_34937__$1){
var statearr_35077_37304 = state_34978__$1;
(statearr_35077_37304[(1)] = (33));

} else {
var statearr_35080_37305 = state_34978__$1;
(statearr_35080_37305[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (25))){
var inst_34920 = (state_34978[(21)]);
var inst_34921 = (state_34978[(12)]);
var inst_34923 = (inst_34921 < inst_34920);
var inst_34924 = inst_34923;
var state_34978__$1 = state_34978;
if(cljs.core.truth_(inst_34924)){
var statearr_35085_37308 = state_34978__$1;
(statearr_35085_37308[(1)] = (27));

} else {
var statearr_35088_37309 = state_34978__$1;
(statearr_35088_37309[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (34))){
var state_34978__$1 = state_34978;
var statearr_35102_37312 = state_34978__$1;
(statearr_35102_37312[(2)] = null);

(statearr_35102_37312[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (17))){
var state_34978__$1 = state_34978;
var statearr_35107_37314 = state_34978__$1;
(statearr_35107_37314[(2)] = null);

(statearr_35107_37314[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (3))){
var inst_34976 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34978__$1,inst_34976);
} else {
if((state_val_34983 === (12))){
var inst_34905 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35114_37316 = state_34978__$1;
(statearr_35114_37316[(2)] = inst_34905);

(statearr_35114_37316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(4),ch);
} else {
if((state_val_34983 === (23))){
var state_34978__$1 = state_34978;
var statearr_35123_37317 = state_34978__$1;
(statearr_35123_37317[(2)] = null);

(statearr_35123_37317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (35))){
var inst_34960 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35128_37318 = state_34978__$1;
(statearr_35128_37318[(2)] = inst_34960);

(statearr_35128_37318[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (19))){
var inst_34877 = (state_34978[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35136 = state_34978;
(statearr_35136[(13)] = inst_34857);

(statearr_35136[(14)] = inst_34856);

(statearr_35136[(15)] = inst_34858);

(statearr_35136[(17)] = inst_34855);

return statearr_35136;
})();
var statearr_35140_37323 = state_34978__$1;
(statearr_35140_37323[(2)] = null);

(statearr_35140_37323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (11))){
var inst_34855 = (state_34978[(17)]);
var inst_34877 = (state_34978[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34978__$1 = (function (){var statearr_35146 = state_34978;
(statearr_35146[(7)] = inst_34877__$1);

return statearr_35146;
})();
if(inst_34877__$1){
var statearr_35150_37329 = state_34978__$1;
(statearr_35150_37329[(1)] = (16));

} else {
var statearr_35152_37330 = state_34978__$1;
(statearr_35152_37330[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (9))){
var inst_34907 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35157_37333 = state_34978__$1;
(statearr_35157_37333[(2)] = inst_34907);

(statearr_35157_37333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35164 = state_34978;
(statearr_35164[(13)] = inst_34857);

(statearr_35164[(14)] = inst_34856);

(statearr_35164[(15)] = inst_34858);

(statearr_35164[(17)] = inst_34855);

return statearr_35164;
})();
var statearr_35165_37337 = state_34978__$1;
(statearr_35165_37337[(2)] = null);

(statearr_35165_37337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (14))){
var state_34978__$1 = state_34978;
var statearr_35166_37339 = state_34978__$1;
(statearr_35166_37339[(2)] = null);

(statearr_35166_37339[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (45))){
var inst_34968 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35167_37344 = state_34978__$1;
(statearr_35167_37344[(2)] = inst_34968);

(statearr_35167_37344[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (26))){
var inst_34910 = (state_34978[(29)]);
var inst_34964 = (state_34978[(2)]);
var inst_34965 = cljs.core.seq(inst_34910);
var state_34978__$1 = (function (){var statearr_35168 = state_34978;
(statearr_35168[(31)] = inst_34964);

return statearr_35168;
})();
if(inst_34965){
var statearr_35169_37352 = state_34978__$1;
(statearr_35169_37352[(1)] = (42));

} else {
var statearr_35170_37353 = state_34978__$1;
(statearr_35170_37353[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (16))){
var inst_34877 = (state_34978[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34978__$1 = state_34978;
if(inst_34879){
var statearr_35173_37354 = state_34978__$1;
(statearr_35173_37354[(1)] = (19));

} else {
var statearr_35174_37355 = state_34978__$1;
(statearr_35174_37355[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (38))){
var inst_34957 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35175_37358 = state_34978__$1;
(statearr_35175_37358[(2)] = inst_34957);

(statearr_35175_37358[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (30))){
var state_34978__$1 = state_34978;
var statearr_35178_37361 = state_34978__$1;
(statearr_35178_37361[(2)] = null);

(statearr_35178_37361[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (10))){
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34978__$1 = (function (){var statearr_35200 = state_34978;
(statearr_35200[(26)] = inst_34867);

return statearr_35200;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35203_37368 = state_34978__$1;
(statearr_35203_37368[(1)] = (13));

} else {
var statearr_35204_37370 = state_34978__$1;
(statearr_35204_37370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (18))){
var inst_34903 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35205_37373 = state_34978__$1;
(statearr_35205_37373[(2)] = inst_34903);

(statearr_35205_37373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (42))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(45),dchan);
} else {
if((state_val_34983 === (37))){
var inst_34946 = (state_34978[(23)]);
var inst_34846 = (state_34978[(9)]);
var inst_34937 = (state_34978[(25)]);
var inst_34946__$1 = cljs.core.first(inst_34937);
var inst_34947 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34946__$1,inst_34846,done);
var state_34978__$1 = (function (){var statearr_35210 = state_34978;
(statearr_35210[(23)] = inst_34946__$1);

return statearr_35210;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35211_37379 = state_34978__$1;
(statearr_35211_37379[(1)] = (39));

} else {
var statearr_35212_37381 = state_34978__$1;
(statearr_35212_37381[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (8))){
var inst_34857 = (state_34978[(13)]);
var inst_34858 = (state_34978[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34978__$1 = state_34978;
if(cljs.core.truth_(inst_34861)){
var statearr_35214_37386 = state_34978__$1;
(statearr_35214_37386[(1)] = (10));

} else {
var statearr_35216_37390 = state_34978__$1;
(statearr_35216_37390[(1)] = (11));

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
var statearr_35235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35235[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35235[(1)] = (1));

return statearr_35235;
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
}catch (e35238){if((e35238 instanceof Object)){
var ex__34210__auto__ = e35238;
var statearr_35244_37393 = state_34978;
(statearr_35244_37393[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35238;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37396 = state_34978;
state_34978 = G__37396;
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
var state__34276__auto__ = (function (){var statearr_35251 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35251[(6)] = c__34274__auto___37221);

return statearr_35251;
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
var G__35262 = arguments.length;
switch (G__35262) {
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
var len__4789__auto___37428 = arguments.length;
var i__4790__auto___37429 = (0);
while(true){
if((i__4790__auto___37429 < len__4789__auto___37428)){
args__4795__auto__.push((arguments[i__4790__auto___37429]));

var G__37431 = (i__4790__auto___37429 + (1));
i__4790__auto___37429 = G__37431;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35365){
var map__35366 = p__35365;
var map__35366__$1 = (((((!((map__35366 == null))))?(((((map__35366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35366):map__35366);
var opts = map__35366__$1;
var statearr_35368_37435 = state;
(statearr_35368_37435[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35369_37438 = state;
(statearr_35369_37438[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35374_37439 = state;
(statearr_35374_37439[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35359){
var G__35360 = cljs.core.first(seq35359);
var seq35359__$1 = cljs.core.next(seq35359);
var G__35361 = cljs.core.first(seq35359__$1);
var seq35359__$2 = cljs.core.next(seq35359__$1);
var G__35362 = cljs.core.first(seq35359__$2);
var seq35359__$3 = cljs.core.next(seq35359__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35360,G__35361,G__35362,seq35359__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35401 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35402){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35402 = meta35402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35403,meta35402__$1){
var self__ = this;
var _35403__$1 = this;
return (new cljs.core.async.t_cljs$core$async35401(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35402__$1));
}));

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35403){
var self__ = this;
var _35403__$1 = this;
return self__.meta35402;
}));

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35401.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35402","meta35402",416745411,null)], null);
}));

(cljs.core.async.t_cljs$core$async35401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35401");

(cljs.core.async.t_cljs$core$async35401.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35401.
 */
cljs.core.async.__GT_t_cljs$core$async35401 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35401(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35402){
return (new cljs.core.async.t_cljs$core$async35401(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35402));
});

}

return (new cljs.core.async.t_cljs$core$async35401(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35586){
var state_val_35590 = (state_35586[(1)]);
if((state_val_35590 === (7))){
var inst_35471 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35602_37478 = state_35586__$1;
(statearr_35602_37478[(2)] = inst_35471);

(statearr_35602_37478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (20))){
var inst_35484 = (state_35586[(7)]);
var state_35586__$1 = state_35586;
var statearr_35606_37481 = state_35586__$1;
(statearr_35606_37481[(2)] = inst_35484);

(statearr_35606_37481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (27))){
var state_35586__$1 = state_35586;
var statearr_35610_37486 = state_35586__$1;
(statearr_35610_37486[(2)] = null);

(statearr_35610_37486[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (1))){
var inst_35456 = (state_35586[(8)]);
var inst_35456__$1 = calc_state();
var inst_35458 = (inst_35456__$1 == null);
var inst_35459 = cljs.core.not(inst_35458);
var state_35586__$1 = (function (){var statearr_35616 = state_35586;
(statearr_35616[(8)] = inst_35456__$1);

return statearr_35616;
})();
if(inst_35459){
var statearr_35619_37489 = state_35586__$1;
(statearr_35619_37489[(1)] = (2));

} else {
var statearr_35622_37491 = state_35586__$1;
(statearr_35622_37491[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (24))){
var inst_35519 = (state_35586[(9)]);
var inst_35509 = (state_35586[(10)]);
var inst_35553 = (state_35586[(11)]);
var inst_35553__$1 = (inst_35509.cljs$core$IFn$_invoke$arity$1 ? inst_35509.cljs$core$IFn$_invoke$arity$1(inst_35519) : inst_35509.call(null,inst_35519));
var state_35586__$1 = (function (){var statearr_35628 = state_35586;
(statearr_35628[(11)] = inst_35553__$1);

return statearr_35628;
})();
if(cljs.core.truth_(inst_35553__$1)){
var statearr_35631_37494 = state_35586__$1;
(statearr_35631_37494[(1)] = (29));

} else {
var statearr_35632_37498 = state_35586__$1;
(statearr_35632_37498[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (4))){
var inst_35474 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35474)){
var statearr_35647_37499 = state_35586__$1;
(statearr_35647_37499[(1)] = (8));

} else {
var statearr_35652_37502 = state_35586__$1;
(statearr_35652_37502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (15))){
var inst_35503 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35503)){
var statearr_35657_37507 = state_35586__$1;
(statearr_35657_37507[(1)] = (19));

} else {
var statearr_35659_37509 = state_35586__$1;
(statearr_35659_37509[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (21))){
var inst_35508 = (state_35586[(12)]);
var inst_35508__$1 = (state_35586[(2)]);
var inst_35509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35508__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35508__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35508__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35586__$1 = (function (){var statearr_35666 = state_35586;
(statearr_35666[(12)] = inst_35508__$1);

(statearr_35666[(13)] = inst_35510);

(statearr_35666[(10)] = inst_35509);

return statearr_35666;
})();
return cljs.core.async.ioc_alts_BANG_(state_35586__$1,(22),inst_35512);
} else {
if((state_val_35590 === (31))){
var inst_35562 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35562)){
var statearr_35675_37514 = state_35586__$1;
(statearr_35675_37514[(1)] = (32));

} else {
var statearr_35676_37518 = state_35586__$1;
(statearr_35676_37518[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (32))){
var inst_35518 = (state_35586[(14)]);
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35586__$1,(35),out,inst_35518);
} else {
if((state_val_35590 === (33))){
var inst_35508 = (state_35586[(12)]);
var inst_35484 = inst_35508;
var state_35586__$1 = (function (){var statearr_35684 = state_35586;
(statearr_35684[(7)] = inst_35484);

return statearr_35684;
})();
var statearr_35686_37521 = state_35586__$1;
(statearr_35686_37521[(2)] = null);

(statearr_35686_37521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (13))){
var inst_35484 = (state_35586[(7)]);
var inst_35492 = inst_35484.cljs$lang$protocol_mask$partition0$;
var inst_35493 = (inst_35492 & (64));
var inst_35494 = inst_35484.cljs$core$ISeq$;
var inst_35495 = (cljs.core.PROTOCOL_SENTINEL === inst_35494);
var inst_35496 = ((inst_35493) || (inst_35495));
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35496)){
var statearr_35693_37523 = state_35586__$1;
(statearr_35693_37523[(1)] = (16));

} else {
var statearr_35694_37526 = state_35586__$1;
(statearr_35694_37526[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (22))){
var inst_35519 = (state_35586[(9)]);
var inst_35518 = (state_35586[(14)]);
var inst_35517 = (state_35586[(2)]);
var inst_35518__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35517,(0),null);
var inst_35519__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35517,(1),null);
var inst_35522 = (inst_35518__$1 == null);
var inst_35524 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35519__$1,change);
var inst_35525 = ((inst_35522) || (inst_35524));
var state_35586__$1 = (function (){var statearr_35695 = state_35586;
(statearr_35695[(9)] = inst_35519__$1);

(statearr_35695[(14)] = inst_35518__$1);

return statearr_35695;
})();
if(cljs.core.truth_(inst_35525)){
var statearr_35696_37533 = state_35586__$1;
(statearr_35696_37533[(1)] = (23));

} else {
var statearr_35697_37534 = state_35586__$1;
(statearr_35697_37534[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (36))){
var inst_35508 = (state_35586[(12)]);
var inst_35484 = inst_35508;
var state_35586__$1 = (function (){var statearr_35698 = state_35586;
(statearr_35698[(7)] = inst_35484);

return statearr_35698;
})();
var statearr_35699_37537 = state_35586__$1;
(statearr_35699_37537[(2)] = null);

(statearr_35699_37537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (29))){
var inst_35553 = (state_35586[(11)]);
var state_35586__$1 = state_35586;
var statearr_35700_37542 = state_35586__$1;
(statearr_35700_37542[(2)] = inst_35553);

(statearr_35700_37542[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (6))){
var state_35586__$1 = state_35586;
var statearr_35703_37544 = state_35586__$1;
(statearr_35703_37544[(2)] = false);

(statearr_35703_37544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (28))){
var inst_35541 = (state_35586[(2)]);
var inst_35545 = calc_state();
var inst_35484 = inst_35545;
var state_35586__$1 = (function (){var statearr_35704 = state_35586;
(statearr_35704[(7)] = inst_35484);

(statearr_35704[(15)] = inst_35541);

return statearr_35704;
})();
var statearr_35705_37546 = state_35586__$1;
(statearr_35705_37546[(2)] = null);

(statearr_35705_37546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (25))){
var inst_35579 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35708_37549 = state_35586__$1;
(statearr_35708_37549[(2)] = inst_35579);

(statearr_35708_37549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (34))){
var inst_35577 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35711_37554 = state_35586__$1;
(statearr_35711_37554[(2)] = inst_35577);

(statearr_35711_37554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (17))){
var state_35586__$1 = state_35586;
var statearr_35713_37556 = state_35586__$1;
(statearr_35713_37556[(2)] = false);

(statearr_35713_37556[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (3))){
var state_35586__$1 = state_35586;
var statearr_35715_37558 = state_35586__$1;
(statearr_35715_37558[(2)] = false);

(statearr_35715_37558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (12))){
var inst_35581 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35586__$1,inst_35581);
} else {
if((state_val_35590 === (2))){
var inst_35456 = (state_35586[(8)]);
var inst_35463 = inst_35456.cljs$lang$protocol_mask$partition0$;
var inst_35464 = (inst_35463 & (64));
var inst_35465 = inst_35456.cljs$core$ISeq$;
var inst_35466 = (cljs.core.PROTOCOL_SENTINEL === inst_35465);
var inst_35467 = ((inst_35464) || (inst_35466));
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35467)){
var statearr_35719_37564 = state_35586__$1;
(statearr_35719_37564[(1)] = (5));

} else {
var statearr_35721_37566 = state_35586__$1;
(statearr_35721_37566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (23))){
var inst_35518 = (state_35586[(14)]);
var inst_35528 = (inst_35518 == null);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35528)){
var statearr_35722_37568 = state_35586__$1;
(statearr_35722_37568[(1)] = (26));

} else {
var statearr_35723_37569 = state_35586__$1;
(statearr_35723_37569[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (35))){
var inst_35566 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35566)){
var statearr_35724_37571 = state_35586__$1;
(statearr_35724_37571[(1)] = (36));

} else {
var statearr_35725_37572 = state_35586__$1;
(statearr_35725_37572[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (19))){
var inst_35484 = (state_35586[(7)]);
var inst_35505 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35484);
var state_35586__$1 = state_35586;
var statearr_35727_37578 = state_35586__$1;
(statearr_35727_37578[(2)] = inst_35505);

(statearr_35727_37578[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (11))){
var inst_35484 = (state_35586[(7)]);
var inst_35489 = (inst_35484 == null);
var inst_35490 = cljs.core.not(inst_35489);
var state_35586__$1 = state_35586;
if(inst_35490){
var statearr_35731_37585 = state_35586__$1;
(statearr_35731_37585[(1)] = (13));

} else {
var statearr_35732_37586 = state_35586__$1;
(statearr_35732_37586[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (9))){
var inst_35456 = (state_35586[(8)]);
var state_35586__$1 = state_35586;
var statearr_35733_37588 = state_35586__$1;
(statearr_35733_37588[(2)] = inst_35456);

(statearr_35733_37588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (5))){
var state_35586__$1 = state_35586;
var statearr_35736_37590 = state_35586__$1;
(statearr_35736_37590[(2)] = true);

(statearr_35736_37590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (14))){
var state_35586__$1 = state_35586;
var statearr_35739_37591 = state_35586__$1;
(statearr_35739_37591[(2)] = false);

(statearr_35739_37591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (26))){
var inst_35519 = (state_35586[(9)]);
var inst_35535 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35519);
var state_35586__$1 = state_35586;
var statearr_35741_37598 = state_35586__$1;
(statearr_35741_37598[(2)] = inst_35535);

(statearr_35741_37598[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (16))){
var state_35586__$1 = state_35586;
var statearr_35742_37601 = state_35586__$1;
(statearr_35742_37601[(2)] = true);

(statearr_35742_37601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (38))){
var inst_35573 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35744_37603 = state_35586__$1;
(statearr_35744_37603[(2)] = inst_35573);

(statearr_35744_37603[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (30))){
var inst_35519 = (state_35586[(9)]);
var inst_35510 = (state_35586[(13)]);
var inst_35509 = (state_35586[(10)]);
var inst_35557 = cljs.core.empty_QMARK_(inst_35509);
var inst_35558 = (inst_35510.cljs$core$IFn$_invoke$arity$1 ? inst_35510.cljs$core$IFn$_invoke$arity$1(inst_35519) : inst_35510.call(null,inst_35519));
var inst_35559 = cljs.core.not(inst_35558);
var inst_35560 = ((inst_35557) && (inst_35559));
var state_35586__$1 = state_35586;
var statearr_35746_37609 = state_35586__$1;
(statearr_35746_37609[(2)] = inst_35560);

(statearr_35746_37609[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (10))){
var inst_35456 = (state_35586[(8)]);
var inst_35479 = (state_35586[(2)]);
var inst_35480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35479,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35479,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35479,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35484 = inst_35456;
var state_35586__$1 = (function (){var statearr_35748 = state_35586;
(statearr_35748[(16)] = inst_35480);

(statearr_35748[(7)] = inst_35484);

(statearr_35748[(17)] = inst_35481);

(statearr_35748[(18)] = inst_35482);

return statearr_35748;
})();
var statearr_35749_37617 = state_35586__$1;
(statearr_35749_37617[(2)] = null);

(statearr_35749_37617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (18))){
var inst_35500 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35750_37619 = state_35586__$1;
(statearr_35750_37619[(2)] = inst_35500);

(statearr_35750_37619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (37))){
var state_35586__$1 = state_35586;
var statearr_35752_37625 = state_35586__$1;
(statearr_35752_37625[(2)] = null);

(statearr_35752_37625[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (8))){
var inst_35456 = (state_35586[(8)]);
var inst_35476 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35456);
var state_35586__$1 = state_35586;
var statearr_35753_37629 = state_35586__$1;
(statearr_35753_37629[(2)] = inst_35476);

(statearr_35753_37629[(1)] = (10));


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
var statearr_35755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35755[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35755[(1)] = (1));

return statearr_35755;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35586){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35586);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35757){if((e35757 instanceof Object)){
var ex__34210__auto__ = e35757;
var statearr_35758_37640 = state_35586;
(statearr_35758_37640[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37643 = state_35586;
state_35586 = G__37643;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35586){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35764 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35764[(6)] = c__34274__auto___37472);

return statearr_35764;
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
var G__35797 = arguments.length;
switch (G__35797) {
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
var G__35811 = arguments.length;
switch (G__35811) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35804_SHARP_){
if(cljs.core.truth_((p1__35804_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35804_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35804_SHARP_.call(null,topic)))){
return p1__35804_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35804_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35821 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35821 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35822){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35822 = meta35822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35823,meta35822__$1){
var self__ = this;
var _35823__$1 = this;
return (new cljs.core.async.t_cljs$core$async35821(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35822__$1));
}));

(cljs.core.async.t_cljs$core$async35821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35823){
var self__ = this;
var _35823__$1 = this;
return self__.meta35822;
}));

(cljs.core.async.t_cljs$core$async35821.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35821.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35821.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35821.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35821.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35821.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35821.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35822","meta35822",446035524,null)], null);
}));

(cljs.core.async.t_cljs$core$async35821.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35821");

(cljs.core.async.t_cljs$core$async35821.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35821");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35821.
 */
cljs.core.async.__GT_t_cljs$core$async35821 = (function cljs$core$async$__GT_t_cljs$core$async35821(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35822){
return (new cljs.core.async.t_cljs$core$async35821(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35822));
});

}

return (new cljs.core.async.t_cljs$core$async35821(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35938){
var state_val_35939 = (state_35938[(1)]);
if((state_val_35939 === (7))){
var inst_35929 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35942_37715 = state_35938__$1;
(statearr_35942_37715[(2)] = inst_35929);

(statearr_35942_37715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (20))){
var state_35938__$1 = state_35938;
var statearr_35944_37716 = state_35938__$1;
(statearr_35944_37716[(2)] = null);

(statearr_35944_37716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (1))){
var state_35938__$1 = state_35938;
var statearr_35946_37717 = state_35938__$1;
(statearr_35946_37717[(2)] = null);

(statearr_35946_37717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (24))){
var inst_35912 = (state_35938[(7)]);
var inst_35921 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35912);
var state_35938__$1 = state_35938;
var statearr_35950_37719 = state_35938__$1;
(statearr_35950_37719[(2)] = inst_35921);

(statearr_35950_37719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (4))){
var inst_35857 = (state_35938[(8)]);
var inst_35857__$1 = (state_35938[(2)]);
var inst_35858 = (inst_35857__$1 == null);
var state_35938__$1 = (function (){var statearr_35951 = state_35938;
(statearr_35951[(8)] = inst_35857__$1);

return statearr_35951;
})();
if(cljs.core.truth_(inst_35858)){
var statearr_35952_37721 = state_35938__$1;
(statearr_35952_37721[(1)] = (5));

} else {
var statearr_35953_37722 = state_35938__$1;
(statearr_35953_37722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (15))){
var inst_35904 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35956_37723 = state_35938__$1;
(statearr_35956_37723[(2)] = inst_35904);

(statearr_35956_37723[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (21))){
var inst_35926 = (state_35938[(2)]);
var state_35938__$1 = (function (){var statearr_35958 = state_35938;
(statearr_35958[(9)] = inst_35926);

return statearr_35958;
})();
var statearr_35960_37728 = state_35938__$1;
(statearr_35960_37728[(2)] = null);

(statearr_35960_37728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (13))){
var inst_35886 = (state_35938[(10)]);
var inst_35888 = cljs.core.chunked_seq_QMARK_(inst_35886);
var state_35938__$1 = state_35938;
if(inst_35888){
var statearr_35964_37729 = state_35938__$1;
(statearr_35964_37729[(1)] = (16));

} else {
var statearr_35965_37730 = state_35938__$1;
(statearr_35965_37730[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (22))){
var inst_35918 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
if(cljs.core.truth_(inst_35918)){
var statearr_35966_37734 = state_35938__$1;
(statearr_35966_37734[(1)] = (23));

} else {
var statearr_35968_37735 = state_35938__$1;
(statearr_35968_37735[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (6))){
var inst_35912 = (state_35938[(7)]);
var inst_35914 = (state_35938[(11)]);
var inst_35857 = (state_35938[(8)]);
var inst_35912__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35857) : topic_fn.call(null,inst_35857));
var inst_35913 = cljs.core.deref(mults);
var inst_35914__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35913,inst_35912__$1);
var state_35938__$1 = (function (){var statearr_35972 = state_35938;
(statearr_35972[(7)] = inst_35912__$1);

(statearr_35972[(11)] = inst_35914__$1);

return statearr_35972;
})();
if(cljs.core.truth_(inst_35914__$1)){
var statearr_35974_37737 = state_35938__$1;
(statearr_35974_37737[(1)] = (19));

} else {
var statearr_35976_37738 = state_35938__$1;
(statearr_35976_37738[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (25))){
var inst_35923 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35977_37739 = state_35938__$1;
(statearr_35977_37739[(2)] = inst_35923);

(statearr_35977_37739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (17))){
var inst_35886 = (state_35938[(10)]);
var inst_35895 = cljs.core.first(inst_35886);
var inst_35896 = cljs.core.async.muxch_STAR_(inst_35895);
var inst_35897 = cljs.core.async.close_BANG_(inst_35896);
var inst_35898 = cljs.core.next(inst_35886);
var inst_35870 = inst_35898;
var inst_35871 = null;
var inst_35872 = (0);
var inst_35873 = (0);
var state_35938__$1 = (function (){var statearr_35981 = state_35938;
(statearr_35981[(12)] = inst_35872);

(statearr_35981[(13)] = inst_35873);

(statearr_35981[(14)] = inst_35870);

(statearr_35981[(15)] = inst_35871);

(statearr_35981[(16)] = inst_35897);

return statearr_35981;
})();
var statearr_35982_37741 = state_35938__$1;
(statearr_35982_37741[(2)] = null);

(statearr_35982_37741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (3))){
var inst_35932 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35938__$1,inst_35932);
} else {
if((state_val_35939 === (12))){
var inst_35906 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35983_37743 = state_35938__$1;
(statearr_35983_37743[(2)] = inst_35906);

(statearr_35983_37743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (2))){
var state_35938__$1 = state_35938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35938__$1,(4),ch);
} else {
if((state_val_35939 === (23))){
var state_35938__$1 = state_35938;
var statearr_35985_37747 = state_35938__$1;
(statearr_35985_37747[(2)] = null);

(statearr_35985_37747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (19))){
var inst_35914 = (state_35938[(11)]);
var inst_35857 = (state_35938[(8)]);
var inst_35916 = cljs.core.async.muxch_STAR_(inst_35914);
var state_35938__$1 = state_35938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35938__$1,(22),inst_35916,inst_35857);
} else {
if((state_val_35939 === (11))){
var inst_35886 = (state_35938[(10)]);
var inst_35870 = (state_35938[(14)]);
var inst_35886__$1 = cljs.core.seq(inst_35870);
var state_35938__$1 = (function (){var statearr_35988 = state_35938;
(statearr_35988[(10)] = inst_35886__$1);

return statearr_35988;
})();
if(inst_35886__$1){
var statearr_35989_37754 = state_35938__$1;
(statearr_35989_37754[(1)] = (13));

} else {
var statearr_35990_37757 = state_35938__$1;
(statearr_35990_37757[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (9))){
var inst_35908 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35993_37759 = state_35938__$1;
(statearr_35993_37759[(2)] = inst_35908);

(statearr_35993_37759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (5))){
var inst_35866 = cljs.core.deref(mults);
var inst_35867 = cljs.core.vals(inst_35866);
var inst_35868 = cljs.core.seq(inst_35867);
var inst_35870 = inst_35868;
var inst_35871 = null;
var inst_35872 = (0);
var inst_35873 = (0);
var state_35938__$1 = (function (){var statearr_35995 = state_35938;
(statearr_35995[(12)] = inst_35872);

(statearr_35995[(13)] = inst_35873);

(statearr_35995[(14)] = inst_35870);

(statearr_35995[(15)] = inst_35871);

return statearr_35995;
})();
var statearr_35996_37764 = state_35938__$1;
(statearr_35996_37764[(2)] = null);

(statearr_35996_37764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (14))){
var state_35938__$1 = state_35938;
var statearr_36002_37765 = state_35938__$1;
(statearr_36002_37765[(2)] = null);

(statearr_36002_37765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (16))){
var inst_35886 = (state_35938[(10)]);
var inst_35890 = cljs.core.chunk_first(inst_35886);
var inst_35891 = cljs.core.chunk_rest(inst_35886);
var inst_35892 = cljs.core.count(inst_35890);
var inst_35870 = inst_35891;
var inst_35871 = inst_35890;
var inst_35872 = inst_35892;
var inst_35873 = (0);
var state_35938__$1 = (function (){var statearr_36004 = state_35938;
(statearr_36004[(12)] = inst_35872);

(statearr_36004[(13)] = inst_35873);

(statearr_36004[(14)] = inst_35870);

(statearr_36004[(15)] = inst_35871);

return statearr_36004;
})();
var statearr_36005_37775 = state_35938__$1;
(statearr_36005_37775[(2)] = null);

(statearr_36005_37775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (10))){
var inst_35872 = (state_35938[(12)]);
var inst_35873 = (state_35938[(13)]);
var inst_35870 = (state_35938[(14)]);
var inst_35871 = (state_35938[(15)]);
var inst_35880 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35871,inst_35873);
var inst_35881 = cljs.core.async.muxch_STAR_(inst_35880);
var inst_35882 = cljs.core.async.close_BANG_(inst_35881);
var inst_35883 = (inst_35873 + (1));
var tmp35997 = inst_35872;
var tmp35998 = inst_35870;
var tmp35999 = inst_35871;
var inst_35870__$1 = tmp35998;
var inst_35871__$1 = tmp35999;
var inst_35872__$1 = tmp35997;
var inst_35873__$1 = inst_35883;
var state_35938__$1 = (function (){var statearr_36011 = state_35938;
(statearr_36011[(12)] = inst_35872__$1);

(statearr_36011[(17)] = inst_35882);

(statearr_36011[(13)] = inst_35873__$1);

(statearr_36011[(14)] = inst_35870__$1);

(statearr_36011[(15)] = inst_35871__$1);

return statearr_36011;
})();
var statearr_36014_37779 = state_35938__$1;
(statearr_36014_37779[(2)] = null);

(statearr_36014_37779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (18))){
var inst_35901 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_36015_37786 = state_35938__$1;
(statearr_36015_37786[(2)] = inst_35901);

(statearr_36015_37786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (8))){
var inst_35872 = (state_35938[(12)]);
var inst_35873 = (state_35938[(13)]);
var inst_35875 = (inst_35873 < inst_35872);
var inst_35877 = inst_35875;
var state_35938__$1 = state_35938;
if(cljs.core.truth_(inst_35877)){
var statearr_36019_37788 = state_35938__$1;
(statearr_36019_37788[(1)] = (10));

} else {
var statearr_36021_37790 = state_35938__$1;
(statearr_36021_37790[(1)] = (11));

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
var statearr_36025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36025[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36025[(1)] = (1));

return statearr_36025;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35938){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35938);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36027){if((e36027 instanceof Object)){
var ex__34210__auto__ = e36027;
var statearr_36028_37798 = state_35938;
(statearr_36028_37798[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37800 = state_35938;
state_35938 = G__37800;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36033 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36033[(6)] = c__34274__auto___37712);

return statearr_36033;
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
var G__36039 = arguments.length;
switch (G__36039) {
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
var G__36047 = arguments.length;
switch (G__36047) {
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
var c__34274__auto___37824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36101){
var state_val_36102 = (state_36101[(1)]);
if((state_val_36102 === (7))){
var state_36101__$1 = state_36101;
var statearr_36104_37826 = state_36101__$1;
(statearr_36104_37826[(2)] = null);

(statearr_36104_37826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (1))){
var state_36101__$1 = state_36101;
var statearr_36106_37827 = state_36101__$1;
(statearr_36106_37827[(2)] = null);

(statearr_36106_37827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (4))){
var inst_36056 = (state_36101[(7)]);
var inst_36058 = (inst_36056 < cnt);
var state_36101__$1 = state_36101;
if(cljs.core.truth_(inst_36058)){
var statearr_36109_37829 = state_36101__$1;
(statearr_36109_37829[(1)] = (6));

} else {
var statearr_36112_37831 = state_36101__$1;
(statearr_36112_37831[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (15))){
var inst_36094 = (state_36101[(2)]);
var state_36101__$1 = state_36101;
var statearr_36115_37836 = state_36101__$1;
(statearr_36115_37836[(2)] = inst_36094);

(statearr_36115_37836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (13))){
var inst_36087 = cljs.core.async.close_BANG_(out);
var state_36101__$1 = state_36101;
var statearr_36116_37839 = state_36101__$1;
(statearr_36116_37839[(2)] = inst_36087);

(statearr_36116_37839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (6))){
var state_36101__$1 = state_36101;
var statearr_36118_37841 = state_36101__$1;
(statearr_36118_37841[(2)] = null);

(statearr_36118_37841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (3))){
var inst_36098 = (state_36101[(2)]);
var state_36101__$1 = state_36101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36101__$1,inst_36098);
} else {
if((state_val_36102 === (12))){
var inst_36080 = (state_36101[(8)]);
var inst_36080__$1 = (state_36101[(2)]);
var inst_36081 = cljs.core.some(cljs.core.nil_QMARK_,inst_36080__$1);
var state_36101__$1 = (function (){var statearr_36124 = state_36101;
(statearr_36124[(8)] = inst_36080__$1);

return statearr_36124;
})();
if(cljs.core.truth_(inst_36081)){
var statearr_36125_37848 = state_36101__$1;
(statearr_36125_37848[(1)] = (13));

} else {
var statearr_36126_37851 = state_36101__$1;
(statearr_36126_37851[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (2))){
var inst_36055 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36056 = (0);
var state_36101__$1 = (function (){var statearr_36127 = state_36101;
(statearr_36127[(9)] = inst_36055);

(statearr_36127[(7)] = inst_36056);

return statearr_36127;
})();
var statearr_36128_37853 = state_36101__$1;
(statearr_36128_37853[(2)] = null);

(statearr_36128_37853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (11))){
var inst_36056 = (state_36101[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36101,(10),Object,null,(9));
var inst_36066 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36056) : chs__$1.call(null,inst_36056));
var inst_36067 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36056) : done.call(null,inst_36056));
var inst_36068 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36066,inst_36067);
var state_36101__$1 = state_36101;
var statearr_36129_37855 = state_36101__$1;
(statearr_36129_37855[(2)] = inst_36068);


cljs.core.async.impl.ioc_helpers.process_exception(state_36101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (9))){
var inst_36056 = (state_36101[(7)]);
var inst_36070 = (state_36101[(2)]);
var inst_36071 = (inst_36056 + (1));
var inst_36056__$1 = inst_36071;
var state_36101__$1 = (function (){var statearr_36130 = state_36101;
(statearr_36130[(10)] = inst_36070);

(statearr_36130[(7)] = inst_36056__$1);

return statearr_36130;
})();
var statearr_36131_37860 = state_36101__$1;
(statearr_36131_37860[(2)] = null);

(statearr_36131_37860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (5))){
var inst_36077 = (state_36101[(2)]);
var state_36101__$1 = (function (){var statearr_36132 = state_36101;
(statearr_36132[(11)] = inst_36077);

return statearr_36132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36101__$1,(12),dchan);
} else {
if((state_val_36102 === (14))){
var inst_36080 = (state_36101[(8)]);
var inst_36089 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36080);
var state_36101__$1 = state_36101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36101__$1,(16),out,inst_36089);
} else {
if((state_val_36102 === (16))){
var inst_36091 = (state_36101[(2)]);
var state_36101__$1 = (function (){var statearr_36141 = state_36101;
(statearr_36141[(12)] = inst_36091);

return statearr_36141;
})();
var statearr_36142_37866 = state_36101__$1;
(statearr_36142_37866[(2)] = null);

(statearr_36142_37866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (10))){
var inst_36061 = (state_36101[(2)]);
var inst_36062 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36101__$1 = (function (){var statearr_36145 = state_36101;
(statearr_36145[(13)] = inst_36061);

return statearr_36145;
})();
var statearr_36147_37870 = state_36101__$1;
(statearr_36147_37870[(2)] = inst_36062);


cljs.core.async.impl.ioc_helpers.process_exception(state_36101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (8))){
var inst_36075 = (state_36101[(2)]);
var state_36101__$1 = state_36101;
var statearr_36149_37875 = state_36101__$1;
(statearr_36149_37875[(2)] = inst_36075);

(statearr_36149_37875[(1)] = (5));


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
var statearr_36151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36151[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36151[(1)] = (1));

return statearr_36151;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36101){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36101);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36153){if((e36153 instanceof Object)){
var ex__34210__auto__ = e36153;
var statearr_36154_37876 = state_36101;
(statearr_36154_37876[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36153;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37883 = state_36101;
state_36101 = G__37883;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36155 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36155[(6)] = c__34274__auto___37824);

return statearr_36155;
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
var G__36182 = arguments.length;
switch (G__36182) {
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
var c__34274__auto___37891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36223){
var state_val_36224 = (state_36223[(1)]);
if((state_val_36224 === (7))){
var inst_36197 = (state_36223[(7)]);
var inst_36198 = (state_36223[(8)]);
var inst_36197__$1 = (state_36223[(2)]);
var inst_36198__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36197__$1,(0),null);
var inst_36199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36197__$1,(1),null);
var inst_36200 = (inst_36198__$1 == null);
var state_36223__$1 = (function (){var statearr_36228 = state_36223;
(statearr_36228[(9)] = inst_36199);

(statearr_36228[(7)] = inst_36197__$1);

(statearr_36228[(8)] = inst_36198__$1);

return statearr_36228;
})();
if(cljs.core.truth_(inst_36200)){
var statearr_36234_37899 = state_36223__$1;
(statearr_36234_37899[(1)] = (8));

} else {
var statearr_36235_37900 = state_36223__$1;
(statearr_36235_37900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (1))){
var inst_36186 = cljs.core.vec(chs);
var inst_36187 = inst_36186;
var state_36223__$1 = (function (){var statearr_36239 = state_36223;
(statearr_36239[(10)] = inst_36187);

return statearr_36239;
})();
var statearr_36240_37904 = state_36223__$1;
(statearr_36240_37904[(2)] = null);

(statearr_36240_37904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (4))){
var inst_36187 = (state_36223[(10)]);
var state_36223__$1 = state_36223;
return cljs.core.async.ioc_alts_BANG_(state_36223__$1,(7),inst_36187);
} else {
if((state_val_36224 === (6))){
var inst_36218 = (state_36223[(2)]);
var state_36223__$1 = state_36223;
var statearr_36242_37907 = state_36223__$1;
(statearr_36242_37907[(2)] = inst_36218);

(statearr_36242_37907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (3))){
var inst_36220 = (state_36223[(2)]);
var state_36223__$1 = state_36223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36223__$1,inst_36220);
} else {
if((state_val_36224 === (2))){
var inst_36187 = (state_36223[(10)]);
var inst_36190 = cljs.core.count(inst_36187);
var inst_36191 = (inst_36190 > (0));
var state_36223__$1 = state_36223;
if(cljs.core.truth_(inst_36191)){
var statearr_36246_37913 = state_36223__$1;
(statearr_36246_37913[(1)] = (4));

} else {
var statearr_36247_37915 = state_36223__$1;
(statearr_36247_37915[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (11))){
var inst_36187 = (state_36223[(10)]);
var inst_36211 = (state_36223[(2)]);
var tmp36243 = inst_36187;
var inst_36187__$1 = tmp36243;
var state_36223__$1 = (function (){var statearr_36249 = state_36223;
(statearr_36249[(11)] = inst_36211);

(statearr_36249[(10)] = inst_36187__$1);

return statearr_36249;
})();
var statearr_36251_37918 = state_36223__$1;
(statearr_36251_37918[(2)] = null);

(statearr_36251_37918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (9))){
var inst_36198 = (state_36223[(8)]);
var state_36223__$1 = state_36223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36223__$1,(11),out,inst_36198);
} else {
if((state_val_36224 === (5))){
var inst_36216 = cljs.core.async.close_BANG_(out);
var state_36223__$1 = state_36223;
var statearr_36254_37922 = state_36223__$1;
(statearr_36254_37922[(2)] = inst_36216);

(statearr_36254_37922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (10))){
var inst_36214 = (state_36223[(2)]);
var state_36223__$1 = state_36223;
var statearr_36255_37923 = state_36223__$1;
(statearr_36255_37923[(2)] = inst_36214);

(statearr_36255_37923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36224 === (8))){
var inst_36199 = (state_36223[(9)]);
var inst_36187 = (state_36223[(10)]);
var inst_36197 = (state_36223[(7)]);
var inst_36198 = (state_36223[(8)]);
var inst_36206 = (function (){var cs = inst_36187;
var vec__36193 = inst_36197;
var v = inst_36198;
var c = inst_36199;
return (function (p1__36158_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36158_SHARP_);
});
})();
var inst_36207 = cljs.core.filterv(inst_36206,inst_36187);
var inst_36187__$1 = inst_36207;
var state_36223__$1 = (function (){var statearr_36258 = state_36223;
(statearr_36258[(10)] = inst_36187__$1);

return statearr_36258;
})();
var statearr_36259_37926 = state_36223__$1;
(statearr_36259_37926[(2)] = null);

(statearr_36259_37926[(1)] = (2));


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
var statearr_36260 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36260[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36260[(1)] = (1));

return statearr_36260;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36223){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36223);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36261){if((e36261 instanceof Object)){
var ex__34210__auto__ = e36261;
var statearr_36262_37931 = state_36223;
(statearr_36262_37931[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37933 = state_36223;
state_36223 = G__37933;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36267 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36267[(6)] = c__34274__auto___37891);

return statearr_36267;
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
var G__36277 = arguments.length;
switch (G__36277) {
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
var c__34274__auto___37944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36306){
var state_val_36307 = (state_36306[(1)]);
if((state_val_36307 === (7))){
var inst_36287 = (state_36306[(7)]);
var inst_36287__$1 = (state_36306[(2)]);
var inst_36289 = (inst_36287__$1 == null);
var inst_36290 = cljs.core.not(inst_36289);
var state_36306__$1 = (function (){var statearr_36310 = state_36306;
(statearr_36310[(7)] = inst_36287__$1);

return statearr_36310;
})();
if(inst_36290){
var statearr_36311_37945 = state_36306__$1;
(statearr_36311_37945[(1)] = (8));

} else {
var statearr_36312_37947 = state_36306__$1;
(statearr_36312_37947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (1))){
var inst_36282 = (0);
var state_36306__$1 = (function (){var statearr_36313 = state_36306;
(statearr_36313[(8)] = inst_36282);

return statearr_36313;
})();
var statearr_36314_37950 = state_36306__$1;
(statearr_36314_37950[(2)] = null);

(statearr_36314_37950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (4))){
var state_36306__$1 = state_36306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36306__$1,(7),ch);
} else {
if((state_val_36307 === (6))){
var inst_36301 = (state_36306[(2)]);
var state_36306__$1 = state_36306;
var statearr_36317_37954 = state_36306__$1;
(statearr_36317_37954[(2)] = inst_36301);

(statearr_36317_37954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (3))){
var inst_36303 = (state_36306[(2)]);
var inst_36304 = cljs.core.async.close_BANG_(out);
var state_36306__$1 = (function (){var statearr_36318 = state_36306;
(statearr_36318[(9)] = inst_36303);

return statearr_36318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36306__$1,inst_36304);
} else {
if((state_val_36307 === (2))){
var inst_36282 = (state_36306[(8)]);
var inst_36284 = (inst_36282 < n);
var state_36306__$1 = state_36306;
if(cljs.core.truth_(inst_36284)){
var statearr_36321_37961 = state_36306__$1;
(statearr_36321_37961[(1)] = (4));

} else {
var statearr_36322_37962 = state_36306__$1;
(statearr_36322_37962[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (11))){
var inst_36282 = (state_36306[(8)]);
var inst_36293 = (state_36306[(2)]);
var inst_36294 = (inst_36282 + (1));
var inst_36282__$1 = inst_36294;
var state_36306__$1 = (function (){var statearr_36324 = state_36306;
(statearr_36324[(8)] = inst_36282__$1);

(statearr_36324[(10)] = inst_36293);

return statearr_36324;
})();
var statearr_36329_37969 = state_36306__$1;
(statearr_36329_37969[(2)] = null);

(statearr_36329_37969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (9))){
var state_36306__$1 = state_36306;
var statearr_36332_37971 = state_36306__$1;
(statearr_36332_37971[(2)] = null);

(statearr_36332_37971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (5))){
var state_36306__$1 = state_36306;
var statearr_36333_37973 = state_36306__$1;
(statearr_36333_37973[(2)] = null);

(statearr_36333_37973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (10))){
var inst_36298 = (state_36306[(2)]);
var state_36306__$1 = state_36306;
var statearr_36335_37977 = state_36306__$1;
(statearr_36335_37977[(2)] = inst_36298);

(statearr_36335_37977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36307 === (8))){
var inst_36287 = (state_36306[(7)]);
var state_36306__$1 = state_36306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36306__$1,(11),out,inst_36287);
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
var statearr_36338 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36338[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36338[(1)] = (1));

return statearr_36338;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36306){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36306);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36339){if((e36339 instanceof Object)){
var ex__34210__auto__ = e36339;
var statearr_36341_37982 = state_36306;
(statearr_36341_37982[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36339;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37984 = state_36306;
state_36306 = G__37984;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36343 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36343[(6)] = c__34274__auto___37944);

return statearr_36343;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36346 = (function (f,ch,meta36347){
this.f = f;
this.ch = ch;
this.meta36347 = meta36347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36348,meta36347__$1){
var self__ = this;
var _36348__$1 = this;
return (new cljs.core.async.t_cljs$core$async36346(self__.f,self__.ch,meta36347__$1));
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36348){
var self__ = this;
var _36348__$1 = this;
return self__.meta36347;
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36354 = (function (f,ch,meta36347,_,fn1,meta36355){
this.f = f;
this.ch = ch;
this.meta36347 = meta36347;
this._ = _;
this.fn1 = fn1;
this.meta36355 = meta36355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36356,meta36355__$1){
var self__ = this;
var _36356__$1 = this;
return (new cljs.core.async.t_cljs$core$async36354(self__.f,self__.ch,self__.meta36347,self__._,self__.fn1,meta36355__$1));
}));

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36356){
var self__ = this;
var _36356__$1 = this;
return self__.meta36355;
}));

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36345_SHARP_){
var G__36363 = (((p1__36345_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36345_SHARP_) : self__.f.call(null,p1__36345_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36363) : f1.call(null,G__36363));
});
}));

(cljs.core.async.t_cljs$core$async36354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36347","meta36347",800743982,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36346","cljs.core.async/t_cljs$core$async36346",399204442,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36355","meta36355",673399743,null)], null);
}));

(cljs.core.async.t_cljs$core$async36354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36354");

(cljs.core.async.t_cljs$core$async36354.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36354.
 */
cljs.core.async.__GT_t_cljs$core$async36354 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36354(f__$1,ch__$1,meta36347__$1,___$2,fn1__$1,meta36355){
return (new cljs.core.async.t_cljs$core$async36354(f__$1,ch__$1,meta36347__$1,___$2,fn1__$1,meta36355));
});

}

return (new cljs.core.async.t_cljs$core$async36354(self__.f,self__.ch,self__.meta36347,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36373 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36373) : self__.f.call(null,G__36373));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36347","meta36347",800743982,null)], null);
}));

(cljs.core.async.t_cljs$core$async36346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36346");

(cljs.core.async.t_cljs$core$async36346.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36346.
 */
cljs.core.async.__GT_t_cljs$core$async36346 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36346(f__$1,ch__$1,meta36347){
return (new cljs.core.async.t_cljs$core$async36346(f__$1,ch__$1,meta36347));
});

}

return (new cljs.core.async.t_cljs$core$async36346(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36378 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36378 = (function (f,ch,meta36379){
this.f = f;
this.ch = ch;
this.meta36379 = meta36379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36380,meta36379__$1){
var self__ = this;
var _36380__$1 = this;
return (new cljs.core.async.t_cljs$core$async36378(self__.f,self__.ch,meta36379__$1));
}));

(cljs.core.async.t_cljs$core$async36378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36380){
var self__ = this;
var _36380__$1 = this;
return self__.meta36379;
}));

(cljs.core.async.t_cljs$core$async36378.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36378.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36378.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36379","meta36379",-841969319,null)], null);
}));

(cljs.core.async.t_cljs$core$async36378.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36378");

(cljs.core.async.t_cljs$core$async36378.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36378");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36378.
 */
cljs.core.async.__GT_t_cljs$core$async36378 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36378(f__$1,ch__$1,meta36379){
return (new cljs.core.async.t_cljs$core$async36378(f__$1,ch__$1,meta36379));
});

}

return (new cljs.core.async.t_cljs$core$async36378(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36404 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36404 = (function (p,ch,meta36405){
this.p = p;
this.ch = ch;
this.meta36405 = meta36405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36406,meta36405__$1){
var self__ = this;
var _36406__$1 = this;
return (new cljs.core.async.t_cljs$core$async36404(self__.p,self__.ch,meta36405__$1));
}));

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36406){
var self__ = this;
var _36406__$1 = this;
return self__.meta36405;
}));

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36405","meta36405",1075721384,null)], null);
}));

(cljs.core.async.t_cljs$core$async36404.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36404");

(cljs.core.async.t_cljs$core$async36404.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36404");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36404.
 */
cljs.core.async.__GT_t_cljs$core$async36404 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36404(p__$1,ch__$1,meta36405){
return (new cljs.core.async.t_cljs$core$async36404(p__$1,ch__$1,meta36405));
});

}

return (new cljs.core.async.t_cljs$core$async36404(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36418 = arguments.length;
switch (G__36418) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36451){
var state_val_36452 = (state_36451[(1)]);
if((state_val_36452 === (7))){
var inst_36447 = (state_36451[(2)]);
var state_36451__$1 = state_36451;
var statearr_36454_38017 = state_36451__$1;
(statearr_36454_38017[(2)] = inst_36447);

(statearr_36454_38017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (1))){
var state_36451__$1 = state_36451;
var statearr_36457_38018 = state_36451__$1;
(statearr_36457_38018[(2)] = null);

(statearr_36457_38018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (4))){
var inst_36423 = (state_36451[(7)]);
var inst_36423__$1 = (state_36451[(2)]);
var inst_36424 = (inst_36423__$1 == null);
var state_36451__$1 = (function (){var statearr_36460 = state_36451;
(statearr_36460[(7)] = inst_36423__$1);

return statearr_36460;
})();
if(cljs.core.truth_(inst_36424)){
var statearr_36461_38019 = state_36451__$1;
(statearr_36461_38019[(1)] = (5));

} else {
var statearr_36462_38020 = state_36451__$1;
(statearr_36462_38020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (6))){
var inst_36423 = (state_36451[(7)]);
var inst_36428 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36423) : p.call(null,inst_36423));
var state_36451__$1 = state_36451;
if(cljs.core.truth_(inst_36428)){
var statearr_36464_38023 = state_36451__$1;
(statearr_36464_38023[(1)] = (8));

} else {
var statearr_36465_38024 = state_36451__$1;
(statearr_36465_38024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (3))){
var inst_36449 = (state_36451[(2)]);
var state_36451__$1 = state_36451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36451__$1,inst_36449);
} else {
if((state_val_36452 === (2))){
var state_36451__$1 = state_36451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36451__$1,(4),ch);
} else {
if((state_val_36452 === (11))){
var inst_36441 = (state_36451[(2)]);
var state_36451__$1 = state_36451;
var statearr_36467_38027 = state_36451__$1;
(statearr_36467_38027[(2)] = inst_36441);

(statearr_36467_38027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (9))){
var state_36451__$1 = state_36451;
var statearr_36469_38029 = state_36451__$1;
(statearr_36469_38029[(2)] = null);

(statearr_36469_38029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (5))){
var inst_36426 = cljs.core.async.close_BANG_(out);
var state_36451__$1 = state_36451;
var statearr_36470_38032 = state_36451__$1;
(statearr_36470_38032[(2)] = inst_36426);

(statearr_36470_38032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (10))){
var inst_36444 = (state_36451[(2)]);
var state_36451__$1 = (function (){var statearr_36472 = state_36451;
(statearr_36472[(8)] = inst_36444);

return statearr_36472;
})();
var statearr_36473_38033 = state_36451__$1;
(statearr_36473_38033[(2)] = null);

(statearr_36473_38033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (8))){
var inst_36423 = (state_36451[(7)]);
var state_36451__$1 = state_36451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36451__$1,(11),out,inst_36423);
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
var statearr_36474 = [null,null,null,null,null,null,null,null,null];
(statearr_36474[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36474[(1)] = (1));

return statearr_36474;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36451){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36451);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36478){if((e36478 instanceof Object)){
var ex__34210__auto__ = e36478;
var statearr_36479_38034 = state_36451;
(statearr_36479_38034[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36478;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38036 = state_36451;
state_36451 = G__38036;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36481 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36481[(6)] = c__34274__auto___38016);

return statearr_36481;
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
var G__36484 = arguments.length;
switch (G__36484) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36553){
var state_val_36554 = (state_36553[(1)]);
if((state_val_36554 === (7))){
var inst_36547 = (state_36553[(2)]);
var state_36553__$1 = state_36553;
var statearr_36557_38044 = state_36553__$1;
(statearr_36557_38044[(2)] = inst_36547);

(statearr_36557_38044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (20))){
var inst_36517 = (state_36553[(7)]);
var inst_36528 = (state_36553[(2)]);
var inst_36529 = cljs.core.next(inst_36517);
var inst_36501 = inst_36529;
var inst_36503 = null;
var inst_36504 = (0);
var inst_36505 = (0);
var state_36553__$1 = (function (){var statearr_36558 = state_36553;
(statearr_36558[(8)] = inst_36501);

(statearr_36558[(9)] = inst_36505);

(statearr_36558[(10)] = inst_36504);

(statearr_36558[(11)] = inst_36503);

(statearr_36558[(12)] = inst_36528);

return statearr_36558;
})();
var statearr_36560_38050 = state_36553__$1;
(statearr_36560_38050[(2)] = null);

(statearr_36560_38050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (1))){
var state_36553__$1 = state_36553;
var statearr_36561_38051 = state_36553__$1;
(statearr_36561_38051[(2)] = null);

(statearr_36561_38051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (4))){
var inst_36490 = (state_36553[(13)]);
var inst_36490__$1 = (state_36553[(2)]);
var inst_36491 = (inst_36490__$1 == null);
var state_36553__$1 = (function (){var statearr_36562 = state_36553;
(statearr_36562[(13)] = inst_36490__$1);

return statearr_36562;
})();
if(cljs.core.truth_(inst_36491)){
var statearr_36564_38052 = state_36553__$1;
(statearr_36564_38052[(1)] = (5));

} else {
var statearr_36565_38053 = state_36553__$1;
(statearr_36565_38053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (15))){
var state_36553__$1 = state_36553;
var statearr_36569_38054 = state_36553__$1;
(statearr_36569_38054[(2)] = null);

(statearr_36569_38054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (21))){
var state_36553__$1 = state_36553;
var statearr_36570_38055 = state_36553__$1;
(statearr_36570_38055[(2)] = null);

(statearr_36570_38055[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (13))){
var inst_36501 = (state_36553[(8)]);
var inst_36505 = (state_36553[(9)]);
var inst_36504 = (state_36553[(10)]);
var inst_36503 = (state_36553[(11)]);
var inst_36512 = (state_36553[(2)]);
var inst_36513 = (inst_36505 + (1));
var tmp36566 = inst_36501;
var tmp36567 = inst_36504;
var tmp36568 = inst_36503;
var inst_36501__$1 = tmp36566;
var inst_36503__$1 = tmp36568;
var inst_36504__$1 = tmp36567;
var inst_36505__$1 = inst_36513;
var state_36553__$1 = (function (){var statearr_36572 = state_36553;
(statearr_36572[(8)] = inst_36501__$1);

(statearr_36572[(9)] = inst_36505__$1);

(statearr_36572[(10)] = inst_36504__$1);

(statearr_36572[(11)] = inst_36503__$1);

(statearr_36572[(14)] = inst_36512);

return statearr_36572;
})();
var statearr_36574_38061 = state_36553__$1;
(statearr_36574_38061[(2)] = null);

(statearr_36574_38061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (22))){
var state_36553__$1 = state_36553;
var statearr_36575_38062 = state_36553__$1;
(statearr_36575_38062[(2)] = null);

(statearr_36575_38062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (6))){
var inst_36490 = (state_36553[(13)]);
var inst_36499 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36490) : f.call(null,inst_36490));
var inst_36500 = cljs.core.seq(inst_36499);
var inst_36501 = inst_36500;
var inst_36503 = null;
var inst_36504 = (0);
var inst_36505 = (0);
var state_36553__$1 = (function (){var statearr_36577 = state_36553;
(statearr_36577[(8)] = inst_36501);

(statearr_36577[(9)] = inst_36505);

(statearr_36577[(10)] = inst_36504);

(statearr_36577[(11)] = inst_36503);

return statearr_36577;
})();
var statearr_36578_38063 = state_36553__$1;
(statearr_36578_38063[(2)] = null);

(statearr_36578_38063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (17))){
var inst_36517 = (state_36553[(7)]);
var inst_36521 = cljs.core.chunk_first(inst_36517);
var inst_36522 = cljs.core.chunk_rest(inst_36517);
var inst_36523 = cljs.core.count(inst_36521);
var inst_36501 = inst_36522;
var inst_36503 = inst_36521;
var inst_36504 = inst_36523;
var inst_36505 = (0);
var state_36553__$1 = (function (){var statearr_36580 = state_36553;
(statearr_36580[(8)] = inst_36501);

(statearr_36580[(9)] = inst_36505);

(statearr_36580[(10)] = inst_36504);

(statearr_36580[(11)] = inst_36503);

return statearr_36580;
})();
var statearr_36581_38067 = state_36553__$1;
(statearr_36581_38067[(2)] = null);

(statearr_36581_38067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (3))){
var inst_36549 = (state_36553[(2)]);
var state_36553__$1 = state_36553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36553__$1,inst_36549);
} else {
if((state_val_36554 === (12))){
var inst_36537 = (state_36553[(2)]);
var state_36553__$1 = state_36553;
var statearr_36582_38068 = state_36553__$1;
(statearr_36582_38068[(2)] = inst_36537);

(statearr_36582_38068[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (2))){
var state_36553__$1 = state_36553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36553__$1,(4),in$);
} else {
if((state_val_36554 === (23))){
var inst_36545 = (state_36553[(2)]);
var state_36553__$1 = state_36553;
var statearr_36584_38071 = state_36553__$1;
(statearr_36584_38071[(2)] = inst_36545);

(statearr_36584_38071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (19))){
var inst_36532 = (state_36553[(2)]);
var state_36553__$1 = state_36553;
var statearr_36586_38072 = state_36553__$1;
(statearr_36586_38072[(2)] = inst_36532);

(statearr_36586_38072[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (11))){
var inst_36501 = (state_36553[(8)]);
var inst_36517 = (state_36553[(7)]);
var inst_36517__$1 = cljs.core.seq(inst_36501);
var state_36553__$1 = (function (){var statearr_36587 = state_36553;
(statearr_36587[(7)] = inst_36517__$1);

return statearr_36587;
})();
if(inst_36517__$1){
var statearr_36588_38075 = state_36553__$1;
(statearr_36588_38075[(1)] = (14));

} else {
var statearr_36589_38076 = state_36553__$1;
(statearr_36589_38076[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (9))){
var inst_36539 = (state_36553[(2)]);
var inst_36540 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36553__$1 = (function (){var statearr_36591 = state_36553;
(statearr_36591[(15)] = inst_36539);

return statearr_36591;
})();
if(cljs.core.truth_(inst_36540)){
var statearr_36592_38077 = state_36553__$1;
(statearr_36592_38077[(1)] = (21));

} else {
var statearr_36593_38078 = state_36553__$1;
(statearr_36593_38078[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (5))){
var inst_36493 = cljs.core.async.close_BANG_(out);
var state_36553__$1 = state_36553;
var statearr_36594_38080 = state_36553__$1;
(statearr_36594_38080[(2)] = inst_36493);

(statearr_36594_38080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (14))){
var inst_36517 = (state_36553[(7)]);
var inst_36519 = cljs.core.chunked_seq_QMARK_(inst_36517);
var state_36553__$1 = state_36553;
if(inst_36519){
var statearr_36596_38082 = state_36553__$1;
(statearr_36596_38082[(1)] = (17));

} else {
var statearr_36597_38083 = state_36553__$1;
(statearr_36597_38083[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (16))){
var inst_36535 = (state_36553[(2)]);
var state_36553__$1 = state_36553;
var statearr_36598_38084 = state_36553__$1;
(statearr_36598_38084[(2)] = inst_36535);

(statearr_36598_38084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36554 === (10))){
var inst_36505 = (state_36553[(9)]);
var inst_36503 = (state_36553[(11)]);
var inst_36510 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36503,inst_36505);
var state_36553__$1 = state_36553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36553__$1,(13),out,inst_36510);
} else {
if((state_val_36554 === (18))){
var inst_36517 = (state_36553[(7)]);
var inst_36526 = cljs.core.first(inst_36517);
var state_36553__$1 = state_36553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36553__$1,(20),out,inst_36526);
} else {
if((state_val_36554 === (8))){
var inst_36505 = (state_36553[(9)]);
var inst_36504 = (state_36553[(10)]);
var inst_36507 = (inst_36505 < inst_36504);
var inst_36508 = inst_36507;
var state_36553__$1 = state_36553;
if(cljs.core.truth_(inst_36508)){
var statearr_36601_38086 = state_36553__$1;
(statearr_36601_38086[(1)] = (10));

} else {
var statearr_36602_38088 = state_36553__$1;
(statearr_36602_38088[(1)] = (11));

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
var statearr_36603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36603[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36603[(1)] = (1));

return statearr_36603;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36553){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36553);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36605){if((e36605 instanceof Object)){
var ex__34210__auto__ = e36605;
var statearr_36606_38090 = state_36553;
(statearr_36606_38090[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36605;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38091 = state_36553;
state_36553 = G__38091;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36553){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36607 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36607[(6)] = c__34274__auto__);

return statearr_36607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36610 = arguments.length;
switch (G__36610) {
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
var G__36619 = arguments.length;
switch (G__36619) {
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
var c__34274__auto___38102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36645){
var state_val_36646 = (state_36645[(1)]);
if((state_val_36646 === (7))){
var inst_36640 = (state_36645[(2)]);
var state_36645__$1 = state_36645;
var statearr_36648_38105 = state_36645__$1;
(statearr_36648_38105[(2)] = inst_36640);

(statearr_36648_38105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (1))){
var inst_36621 = null;
var state_36645__$1 = (function (){var statearr_36649 = state_36645;
(statearr_36649[(7)] = inst_36621);

return statearr_36649;
})();
var statearr_36650_38106 = state_36645__$1;
(statearr_36650_38106[(2)] = null);

(statearr_36650_38106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (4))){
var inst_36624 = (state_36645[(8)]);
var inst_36624__$1 = (state_36645[(2)]);
var inst_36625 = (inst_36624__$1 == null);
var inst_36626 = cljs.core.not(inst_36625);
var state_36645__$1 = (function (){var statearr_36652 = state_36645;
(statearr_36652[(8)] = inst_36624__$1);

return statearr_36652;
})();
if(inst_36626){
var statearr_36653_38107 = state_36645__$1;
(statearr_36653_38107[(1)] = (5));

} else {
var statearr_36654_38109 = state_36645__$1;
(statearr_36654_38109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (6))){
var state_36645__$1 = state_36645;
var statearr_36656_38110 = state_36645__$1;
(statearr_36656_38110[(2)] = null);

(statearr_36656_38110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (3))){
var inst_36642 = (state_36645[(2)]);
var inst_36643 = cljs.core.async.close_BANG_(out);
var state_36645__$1 = (function (){var statearr_36657 = state_36645;
(statearr_36657[(9)] = inst_36642);

return statearr_36657;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36645__$1,inst_36643);
} else {
if((state_val_36646 === (2))){
var state_36645__$1 = state_36645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36645__$1,(4),ch);
} else {
if((state_val_36646 === (11))){
var inst_36624 = (state_36645[(8)]);
var inst_36634 = (state_36645[(2)]);
var inst_36621 = inst_36624;
var state_36645__$1 = (function (){var statearr_36659 = state_36645;
(statearr_36659[(7)] = inst_36621);

(statearr_36659[(10)] = inst_36634);

return statearr_36659;
})();
var statearr_36660_38113 = state_36645__$1;
(statearr_36660_38113[(2)] = null);

(statearr_36660_38113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (9))){
var inst_36624 = (state_36645[(8)]);
var state_36645__$1 = state_36645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36645__$1,(11),out,inst_36624);
} else {
if((state_val_36646 === (5))){
var inst_36624 = (state_36645[(8)]);
var inst_36621 = (state_36645[(7)]);
var inst_36629 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36624,inst_36621);
var state_36645__$1 = state_36645;
if(inst_36629){
var statearr_36663_38117 = state_36645__$1;
(statearr_36663_38117[(1)] = (8));

} else {
var statearr_36664_38118 = state_36645__$1;
(statearr_36664_38118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (10))){
var inst_36637 = (state_36645[(2)]);
var state_36645__$1 = state_36645;
var statearr_36665_38119 = state_36645__$1;
(statearr_36665_38119[(2)] = inst_36637);

(statearr_36665_38119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (8))){
var inst_36621 = (state_36645[(7)]);
var tmp36661 = inst_36621;
var inst_36621__$1 = tmp36661;
var state_36645__$1 = (function (){var statearr_36667 = state_36645;
(statearr_36667[(7)] = inst_36621__$1);

return statearr_36667;
})();
var statearr_36668_38120 = state_36645__$1;
(statearr_36668_38120[(2)] = null);

(statearr_36668_38120[(1)] = (2));


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
var statearr_36669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36669[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36669[(1)] = (1));

return statearr_36669;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36645){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36645);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36671){if((e36671 instanceof Object)){
var ex__34210__auto__ = e36671;
var statearr_36672_38124 = state_36645;
(statearr_36672_38124[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38125 = state_36645;
state_36645 = G__38125;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36674 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36674[(6)] = c__34274__auto___38102);

return statearr_36674;
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
var G__36677 = arguments.length;
switch (G__36677) {
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
var c__34274__auto___38130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36718){
var state_val_36719 = (state_36718[(1)]);
if((state_val_36719 === (7))){
var inst_36713 = (state_36718[(2)]);
var state_36718__$1 = state_36718;
var statearr_36721_38131 = state_36718__$1;
(statearr_36721_38131[(2)] = inst_36713);

(statearr_36721_38131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (1))){
var inst_36680 = (new Array(n));
var inst_36681 = inst_36680;
var inst_36682 = (0);
var state_36718__$1 = (function (){var statearr_36722 = state_36718;
(statearr_36722[(7)] = inst_36682);

(statearr_36722[(8)] = inst_36681);

return statearr_36722;
})();
var statearr_36723_38133 = state_36718__$1;
(statearr_36723_38133[(2)] = null);

(statearr_36723_38133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (4))){
var inst_36685 = (state_36718[(9)]);
var inst_36685__$1 = (state_36718[(2)]);
var inst_36686 = (inst_36685__$1 == null);
var inst_36687 = cljs.core.not(inst_36686);
var state_36718__$1 = (function (){var statearr_36725 = state_36718;
(statearr_36725[(9)] = inst_36685__$1);

return statearr_36725;
})();
if(inst_36687){
var statearr_36726_38136 = state_36718__$1;
(statearr_36726_38136[(1)] = (5));

} else {
var statearr_36727_38137 = state_36718__$1;
(statearr_36727_38137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (15))){
var inst_36707 = (state_36718[(2)]);
var state_36718__$1 = state_36718;
var statearr_36728_38138 = state_36718__$1;
(statearr_36728_38138[(2)] = inst_36707);

(statearr_36728_38138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (13))){
var state_36718__$1 = state_36718;
var statearr_36730_38139 = state_36718__$1;
(statearr_36730_38139[(2)] = null);

(statearr_36730_38139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (6))){
var inst_36682 = (state_36718[(7)]);
var inst_36703 = (inst_36682 > (0));
var state_36718__$1 = state_36718;
if(cljs.core.truth_(inst_36703)){
var statearr_36731_38141 = state_36718__$1;
(statearr_36731_38141[(1)] = (12));

} else {
var statearr_36732_38143 = state_36718__$1;
(statearr_36732_38143[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (3))){
var inst_36715 = (state_36718[(2)]);
var state_36718__$1 = state_36718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36718__$1,inst_36715);
} else {
if((state_val_36719 === (12))){
var inst_36681 = (state_36718[(8)]);
var inst_36705 = cljs.core.vec(inst_36681);
var state_36718__$1 = state_36718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36718__$1,(15),out,inst_36705);
} else {
if((state_val_36719 === (2))){
var state_36718__$1 = state_36718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36718__$1,(4),ch);
} else {
if((state_val_36719 === (11))){
var inst_36697 = (state_36718[(2)]);
var inst_36698 = (new Array(n));
var inst_36681 = inst_36698;
var inst_36682 = (0);
var state_36718__$1 = (function (){var statearr_36735 = state_36718;
(statearr_36735[(10)] = inst_36697);

(statearr_36735[(7)] = inst_36682);

(statearr_36735[(8)] = inst_36681);

return statearr_36735;
})();
var statearr_36736_38145 = state_36718__$1;
(statearr_36736_38145[(2)] = null);

(statearr_36736_38145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (9))){
var inst_36681 = (state_36718[(8)]);
var inst_36695 = cljs.core.vec(inst_36681);
var state_36718__$1 = state_36718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36718__$1,(11),out,inst_36695);
} else {
if((state_val_36719 === (5))){
var inst_36682 = (state_36718[(7)]);
var inst_36681 = (state_36718[(8)]);
var inst_36685 = (state_36718[(9)]);
var inst_36690 = (state_36718[(11)]);
var inst_36689 = (inst_36681[inst_36682] = inst_36685);
var inst_36690__$1 = (inst_36682 + (1));
var inst_36691 = (inst_36690__$1 < n);
var state_36718__$1 = (function (){var statearr_36738 = state_36718;
(statearr_36738[(11)] = inst_36690__$1);

(statearr_36738[(12)] = inst_36689);

return statearr_36738;
})();
if(cljs.core.truth_(inst_36691)){
var statearr_36739_38149 = state_36718__$1;
(statearr_36739_38149[(1)] = (8));

} else {
var statearr_36740_38150 = state_36718__$1;
(statearr_36740_38150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (14))){
var inst_36710 = (state_36718[(2)]);
var inst_36711 = cljs.core.async.close_BANG_(out);
var state_36718__$1 = (function (){var statearr_36743 = state_36718;
(statearr_36743[(13)] = inst_36710);

return statearr_36743;
})();
var statearr_36744_38151 = state_36718__$1;
(statearr_36744_38151[(2)] = inst_36711);

(statearr_36744_38151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (10))){
var inst_36701 = (state_36718[(2)]);
var state_36718__$1 = state_36718;
var statearr_36745_38153 = state_36718__$1;
(statearr_36745_38153[(2)] = inst_36701);

(statearr_36745_38153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36719 === (8))){
var inst_36681 = (state_36718[(8)]);
var inst_36690 = (state_36718[(11)]);
var tmp36741 = inst_36681;
var inst_36681__$1 = tmp36741;
var inst_36682 = inst_36690;
var state_36718__$1 = (function (){var statearr_36747 = state_36718;
(statearr_36747[(7)] = inst_36682);

(statearr_36747[(8)] = inst_36681__$1);

return statearr_36747;
})();
var statearr_36748_38156 = state_36718__$1;
(statearr_36748_38156[(2)] = null);

(statearr_36748_38156[(1)] = (2));


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
var statearr_36749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36749[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36749[(1)] = (1));

return statearr_36749;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36718){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36718);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36755){if((e36755 instanceof Object)){
var ex__34210__auto__ = e36755;
var statearr_36756_38158 = state_36718;
(statearr_36756_38158[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38161 = state_36718;
state_36718 = G__38161;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36759 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36759[(6)] = c__34274__auto___38130);

return statearr_36759;
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
var G__36762 = arguments.length;
switch (G__36762) {
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
var c__34274__auto___38165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36807){
var state_val_36808 = (state_36807[(1)]);
if((state_val_36808 === (7))){
var inst_36802 = (state_36807[(2)]);
var state_36807__$1 = state_36807;
var statearr_36810_38167 = state_36807__$1;
(statearr_36810_38167[(2)] = inst_36802);

(statearr_36810_38167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36808 === (1))){
var inst_36764 = [];
var inst_36765 = inst_36764;
var inst_36766 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36807__$1 = (function (){var statearr_36811 = state_36807;
(statearr_36811[(7)] = inst_36765);

(statearr_36811[(8)] = inst_36766);

return statearr_36811;
})();
var statearr_36812_38168 = state_36807__$1;
(statearr_36812_38168[(2)] = null);

(statearr_36812_38168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36808 === (4))){
var inst_36770 = (state_36807[(9)]);
var inst_36770__$1 = (state_36807[(2)]);
var inst_36771 = (inst_36770__$1 == null);
var inst_36772 = cljs.core.not(inst_36771);
var state_36807__$1 = (function (){var statearr_36814 = state_36807;
(statearr_36814[(9)] = inst_36770__$1);

return statearr_36814;
})();
if(inst_36772){
var statearr_36815_38171 = state_36807__$1;
(statearr_36815_38171[(1)] = (5));

} else {
var statearr_36816_38173 = state_36807__$1;
(statearr_36816_38173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36808 === (15))){
var inst_36796 = (state_36807[(2)]);
var state_36807__$1 = state_36807;
var statearr_36817_38174 = state_36807__$1;
(statearr_36817_38174[(2)] = inst_36796);

(statearr_36817_38174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36808 === (13))){
var state_36807__$1 = state_36807;
var statearr_36819_38175 = state_36807__$1;
(statearr_36819_38175[(2)] = null);

(statearr_36819_38175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36808 === (6))){
var inst_36765 = (state_36807[(7)]);
var inst_36791 = inst_36765.length;
var inst_36792 = (inst_36791 > (0));
var state_36807__$1 = state_36807;
if(cljs.core.truth_(inst_36792)){
var statearr_36820_38176 = state_36807__$1;
(statearr_36820_38176[(1)] = (12));

} else {
var statearr_36821_38177 = state_36807__$1;
(statearr_36821_38177[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36808 === (3))){
var inst_36804 = (state_36807[(2)]);
var state_36807__$1 = state_36807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36807__$1,inst_36804);
} else {
if((state_val_36808 === (12))){
var inst_36765 = (state_36807[(7)]);
var inst_36794 = cljs.core.vec(inst_36765);
var state_36807__$1 = state_36807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36807__$1,(15),out,inst_36794);
} else {
if((state_val_36808 === (2))){
var state_36807__$1 = state_36807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36807__$1,(4),ch);
} else {
if((state_val_36808 === (11))){
var inst_36774 = (state_36807[(10)]);
var inst_36770 = (state_36807[(9)]);
var inst_36784 = (state_36807[(2)]);
var inst_36785 = [];
var inst_36786 = inst_36785.push(inst_36770);
var inst_36765 = inst_36785;
var inst_36766 = inst_36774;
var state_36807__$1 = (function (){var statearr_36824 = state_36807;
(statearr_36824[(7)] = inst_36765);

(statearr_36824[(11)] = inst_36786);

(statearr_36824[(12)] = inst_36784);

(statearr_36824[(8)] = inst_36766);

return statearr_36824;
})();
var statearr_36825_38181 = state_36807__$1;
(statearr_36825_38181[(2)] = null);

(statearr_36825_38181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36808 === (9))){
var inst_36765 = (state_36807[(7)]);
var inst_36782 = cljs.core.vec(inst_36765);
var state_36807__$1 = state_36807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36807__$1,(11),out,inst_36782);
} else {
if((state_val_36808 === (5))){
var inst_36774 = (state_36807[(10)]);
var inst_36770 = (state_36807[(9)]);
var inst_36766 = (state_36807[(8)]);
var inst_36774__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36770) : f.call(null,inst_36770));
var inst_36775 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36774__$1,inst_36766);
var inst_36776 = cljs.core.keyword_identical_QMARK_(inst_36766,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36777 = ((inst_36775) || (inst_36776));
var state_36807__$1 = (function (){var statearr_36827 = state_36807;
(statearr_36827[(10)] = inst_36774__$1);

return statearr_36827;
})();
if(cljs.core.truth_(inst_36777)){
var statearr_36828_38185 = state_36807__$1;
(statearr_36828_38185[(1)] = (8));

} else {
var statearr_36829_38186 = state_36807__$1;
(statearr_36829_38186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36808 === (14))){
var inst_36799 = (state_36807[(2)]);
var inst_36800 = cljs.core.async.close_BANG_(out);
var state_36807__$1 = (function (){var statearr_36832 = state_36807;
(statearr_36832[(13)] = inst_36799);

return statearr_36832;
})();
var statearr_36833_38187 = state_36807__$1;
(statearr_36833_38187[(2)] = inst_36800);

(statearr_36833_38187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36808 === (10))){
var inst_36789 = (state_36807[(2)]);
var state_36807__$1 = state_36807;
var statearr_36834_38188 = state_36807__$1;
(statearr_36834_38188[(2)] = inst_36789);

(statearr_36834_38188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36808 === (8))){
var inst_36765 = (state_36807[(7)]);
var inst_36774 = (state_36807[(10)]);
var inst_36770 = (state_36807[(9)]);
var inst_36779 = inst_36765.push(inst_36770);
var tmp36831 = inst_36765;
var inst_36765__$1 = tmp36831;
var inst_36766 = inst_36774;
var state_36807__$1 = (function (){var statearr_36836 = state_36807;
(statearr_36836[(7)] = inst_36765__$1);

(statearr_36836[(14)] = inst_36779);

(statearr_36836[(8)] = inst_36766);

return statearr_36836;
})();
var statearr_36837_38192 = state_36807__$1;
(statearr_36837_38192[(2)] = null);

(statearr_36837_38192[(1)] = (2));


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
var statearr_36839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36839[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36839[(1)] = (1));

return statearr_36839;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36807){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36807);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36840){if((e36840 instanceof Object)){
var ex__34210__auto__ = e36840;
var statearr_36842_38193 = state_36807;
(statearr_36842_38193[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38194 = state_36807;
state_36807 = G__38194;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36843 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36843[(6)] = c__34274__auto___38165);

return statearr_36843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
