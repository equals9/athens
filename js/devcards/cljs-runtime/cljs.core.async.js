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
var val_36815 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36815) : fn1.call(null,val_36815));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36815) : fn1.call(null,val_36815));
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
var n__4666__auto___36820 = n;
var x_36821 = (0);
while(true){
if((x_36821 < n__4666__auto___36820)){
(a[x_36821] = x_36821);

var G__36822 = (x_36821 + (1));
x_36821 = G__36822;
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
var G__36831 = (i + (1));
i = G__36831;
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
var len__4789__auto___36833 = arguments.length;
var i__4790__auto___36834 = (0);
while(true){
if((i__4790__auto___36834 < len__4789__auto___36833)){
args__4795__auto__.push((arguments[i__4790__auto___36834]));

var G__36835 = (i__4790__auto___36834 + (1));
i__4790__auto___36834 = G__36835;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34374){
var map__34375 = p__34374;
var map__34375__$1 = (((((!((map__34375 == null))))?(((((map__34375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34375):map__34375);
var opts = map__34375__$1;
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
var c__34274__auto___36841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34416 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36842 = state_34423__$1;
(statearr_34425_36842[(2)] = inst_34416);

(statearr_34425_36842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36843 = state_34423__$1;
(statearr_34426_36843[(2)] = null);

(statearr_34426_36843[(1)] = (2));


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
var statearr_34428_36845 = state_34423__$1;
(statearr_34428_36845[(1)] = (5));

} else {
var statearr_34429_36846 = state_34423__$1;
(statearr_34429_36846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36847 = state_34423__$1;
(statearr_34430_36847[(2)] = null);

(statearr_34430_36847[(1)] = (14));


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
var statearr_34431_36849 = state_34423__$1;
(statearr_34431_36849[(2)] = null);

(statearr_34431_36849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (2))){
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34423__$1,(4),from);
} else {
if((state_val_34424 === (11))){
var inst_34406 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
if(cljs.core.truth_(inst_34406)){
var statearr_34432_36850 = state_34423__$1;
(statearr_34432_36850[(1)] = (12));

} else {
var statearr_34433_36852 = state_34423__$1;
(statearr_34433_36852[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34434_36853 = state_34423__$1;
(statearr_34434_36853[(2)] = null);

(statearr_34434_36853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36854 = state_34423__$1;
(statearr_34435_36854[(1)] = (8));

} else {
var statearr_34436_36855 = state_34423__$1;
(statearr_34436_36855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34414 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_36857 = state_34423__$1;
(statearr_34437_36857[(2)] = inst_34414);

(statearr_34437_36857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34403 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34438_36858 = state_34423__$1;
(statearr_34438_36858[(2)] = inst_34403);

(statearr_34438_36858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34397 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34439_36859 = state_34423__$1;
(statearr_34439_36859[(2)] = inst_34397);

(statearr_34439_36859[(1)] = (10));


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
var statearr_34442_36861 = state_34423;
(statearr_34442_36861[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36863 = state_34423;
state_34423 = G__36863;
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
(statearr_34443[(6)] = c__34274__auto___36841);

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
var c__34274__auto___36866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34462_36868 = state_34456;
(statearr_34462_36868[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36870 = state_34456;
state_34456 = G__36870;
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
(statearr_34463[(6)] = c__34274__auto___36866);

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
var n__4666__auto___36872 = n;
var __36873 = (0);
while(true){
if((__36873 < n__4666__auto___36872)){
var G__34470_36875 = type;
var G__34470_36876__$1 = (((G__34470_36875 instanceof cljs.core.Keyword))?G__34470_36875.fqn:null);
switch (G__34470_36876__$1) {
case "compute":
var c__34274__auto___36878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36873,c__34274__auto___36878,G__34470_36875,G__34470_36876__$1,n__4666__auto___36872,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36873,c__34274__auto___36878,G__34470_36875,G__34470_36876__$1,n__4666__auto___36872,jobs,results,process,async){
return (function (state_34483){
var state_val_34484 = (state_34483[(1)]);
if((state_val_34484 === (1))){
var state_34483__$1 = state_34483;
var statearr_34486_36879 = state_34483__$1;
(statearr_34486_36879[(2)] = null);

(statearr_34486_36879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (2))){
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34483__$1,(4),jobs);
} else {
if((state_val_34484 === (3))){
var inst_34481 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34483__$1,inst_34481);
} else {
if((state_val_34484 === (4))){
var inst_34473 = (state_34483[(2)]);
var inst_34474 = process(inst_34473);
var state_34483__$1 = state_34483;
if(cljs.core.truth_(inst_34474)){
var statearr_34489_36881 = state_34483__$1;
(statearr_34489_36881[(1)] = (5));

} else {
var statearr_34490_36883 = state_34483__$1;
(statearr_34490_36883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (5))){
var state_34483__$1 = state_34483;
var statearr_34494_36884 = state_34483__$1;
(statearr_34494_36884[(2)] = null);

(statearr_34494_36884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (6))){
var state_34483__$1 = state_34483;
var statearr_34497_36885 = state_34483__$1;
(statearr_34497_36885[(2)] = null);

(statearr_34497_36885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34484 === (7))){
var inst_34479 = (state_34483[(2)]);
var state_34483__$1 = state_34483;
var statearr_34498_36887 = state_34483__$1;
(statearr_34498_36887[(2)] = inst_34479);

(statearr_34498_36887[(1)] = (3));


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
});})(__36873,c__34274__auto___36878,G__34470_36875,G__34470_36876__$1,n__4666__auto___36872,jobs,results,process,async))
;
return ((function (__36873,switch__34206__auto__,c__34274__auto___36878,G__34470_36875,G__34470_36876__$1,n__4666__auto___36872,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34499 = [null,null,null,null,null,null,null];
(statearr_34499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34499[(1)] = (1));

return statearr_34499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34483){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34483);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34500){if((e34500 instanceof Object)){
var ex__34210__auto__ = e34500;
var statearr_34501_36889 = state_34483;
(statearr_34501_36889[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36890 = state_34483;
state_34483 = G__36890;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34483){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36873,switch__34206__auto__,c__34274__auto___36878,G__34470_36875,G__34470_36876__$1,n__4666__auto___36872,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34502 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34502[(6)] = c__34274__auto___36878);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36873,c__34274__auto___36878,G__34470_36875,G__34470_36876__$1,n__4666__auto___36872,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36873,c__34274__auto___36892,G__34470_36875,G__34470_36876__$1,n__4666__auto___36872,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36873,c__34274__auto___36892,G__34470_36875,G__34470_36876__$1,n__4666__auto___36872,jobs,results,process,async){
return (function (state_34515){
var state_val_34516 = (state_34515[(1)]);
if((state_val_34516 === (1))){
var state_34515__$1 = state_34515;
var statearr_34518_36894 = state_34515__$1;
(statearr_34518_36894[(2)] = null);

(statearr_34518_36894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (2))){
var state_34515__$1 = state_34515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34515__$1,(4),jobs);
} else {
if((state_val_34516 === (3))){
var inst_34513 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34515__$1,inst_34513);
} else {
if((state_val_34516 === (4))){
var inst_34505 = (state_34515[(2)]);
var inst_34506 = async(inst_34505);
var state_34515__$1 = state_34515;
if(cljs.core.truth_(inst_34506)){
var statearr_34519_36896 = state_34515__$1;
(statearr_34519_36896[(1)] = (5));

} else {
var statearr_34520_36897 = state_34515__$1;
(statearr_34520_36897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (5))){
var state_34515__$1 = state_34515;
var statearr_34522_36898 = state_34515__$1;
(statearr_34522_36898[(2)] = null);

(statearr_34522_36898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (6))){
var state_34515__$1 = state_34515;
var statearr_34526_36899 = state_34515__$1;
(statearr_34526_36899[(2)] = null);

(statearr_34526_36899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (7))){
var inst_34511 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
var statearr_34527_36901 = state_34515__$1;
(statearr_34527_36901[(2)] = inst_34511);

(statearr_34527_36901[(1)] = (3));


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
});})(__36873,c__34274__auto___36892,G__34470_36875,G__34470_36876__$1,n__4666__auto___36872,jobs,results,process,async))
;
return ((function (__36873,switch__34206__auto__,c__34274__auto___36892,G__34470_36875,G__34470_36876__$1,n__4666__auto___36872,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34531 = [null,null,null,null,null,null,null];
(statearr_34531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34531[(1)] = (1));

return statearr_34531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34515){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34515);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34532){if((e34532 instanceof Object)){
var ex__34210__auto__ = e34532;
var statearr_34533_36903 = state_34515;
(statearr_34533_36903[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36904 = state_34515;
state_34515 = G__36904;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36873,switch__34206__auto__,c__34274__auto___36892,G__34470_36875,G__34470_36876__$1,n__4666__auto___36872,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34534 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34534[(6)] = c__34274__auto___36892);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36873,c__34274__auto___36892,G__34470_36875,G__34470_36876__$1,n__4666__auto___36872,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34470_36876__$1)].join('')));

}

var G__36906 = (__36873 + (1));
__36873 = G__36906;
continue;
} else {
}
break;
}

var c__34274__auto___36907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34552 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34561_36909 = state_34556__$1;
(statearr_34561_36909[(2)] = inst_34552);

(statearr_34561_36909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34562_36910 = state_34556__$1;
(statearr_34562_36910[(2)] = null);

(statearr_34562_36910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (4))){
var inst_34537 = (state_34556[(7)]);
var inst_34537__$1 = (state_34556[(2)]);
var inst_34538 = (inst_34537__$1 == null);
var state_34556__$1 = (function (){var statearr_34563 = state_34556;
(statearr_34563[(7)] = inst_34537__$1);

return statearr_34563;
})();
if(cljs.core.truth_(inst_34538)){
var statearr_34564_36912 = state_34556__$1;
(statearr_34564_36912[(1)] = (5));

} else {
var statearr_34565_36913 = state_34556__$1;
(statearr_34565_36913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (6))){
var inst_34542 = (state_34556[(8)]);
var inst_34537 = (state_34556[(7)]);
var inst_34542__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34544 = [inst_34537,inst_34542__$1];
var inst_34545 = (new cljs.core.PersistentVector(null,2,(5),inst_34543,inst_34544,null));
var state_34556__$1 = (function (){var statearr_34566 = state_34556;
(statearr_34566[(8)] = inst_34542__$1);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(8),jobs,inst_34545);
} else {
if((state_val_34557 === (3))){
var inst_34554 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34556__$1,inst_34554);
} else {
if((state_val_34557 === (2))){
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34556__$1,(4),from);
} else {
if((state_val_34557 === (9))){
var inst_34549 = (state_34556[(2)]);
var state_34556__$1 = (function (){var statearr_34567 = state_34556;
(statearr_34567[(9)] = inst_34549);

return statearr_34567;
})();
var statearr_34568_36916 = state_34556__$1;
(statearr_34568_36916[(2)] = null);

(statearr_34568_36916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(jobs);
var state_34556__$1 = state_34556;
var statearr_34569_36917 = state_34556__$1;
(statearr_34569_36917[(2)] = inst_34540);

(statearr_34569_36917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (8))){
var inst_34542 = (state_34556[(8)]);
var inst_34547 = (state_34556[(2)]);
var state_34556__$1 = (function (){var statearr_34570 = state_34556;
(statearr_34570[(10)] = inst_34547);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(9),results,inst_34542);
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
var statearr_34573_36919 = state_34556;
(statearr_34573_36919[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36921 = state_34556;
state_34556 = G__36921;
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
(statearr_34574[(6)] = c__34274__auto___36907);

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
var statearr_34614_36923 = state_34612__$1;
(statearr_34614_36923[(2)] = inst_34608);

(statearr_34614_36923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36924 = state_34612__$1;
(statearr_34615_36924[(2)] = null);

(statearr_34615_36924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36926 = state_34612__$1;
(statearr_34616_36926[(2)] = null);

(statearr_34616_36926[(1)] = (2));


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
var statearr_34618_36927 = state_34612__$1;
(statearr_34618_36927[(1)] = (5));

} else {
var statearr_34619_36928 = state_34612__$1;
(statearr_34619_36928[(1)] = (6));

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
var statearr_34620_36930 = state_34612__$1;
(statearr_34620_36930[(2)] = inst_34603);

(statearr_34620_36930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36931 = state_34612__$1;
(statearr_34622_36931[(2)] = null);

(statearr_34622_36931[(1)] = (2));


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
var statearr_34623_36933 = state_34612__$1;
(statearr_34623_36933[(1)] = (19));

} else {
var statearr_34624_36934 = state_34612__$1;
(statearr_34624_36934[(1)] = (20));

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
var statearr_34625_36936 = state_34612__$1;
(statearr_34625_36936[(2)] = null);

(statearr_34625_36936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36937 = state_34612__$1;
(statearr_34627_36937[(2)] = null);

(statearr_34627_36937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36939 = state_34612__$1;
(statearr_34628_36939[(2)] = null);

(statearr_34628_36939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36940 = state_34612__$1;
(statearr_34629_36940[(1)] = (8));

} else {
var statearr_34630_36941 = state_34612__$1;
(statearr_34630_36941[(1)] = (9));

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
var statearr_34632_36943 = state_34612__$1;
(statearr_34632_36943[(1)] = (15));

} else {
var statearr_34633_36944 = state_34612__$1;
(statearr_34633_36944[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36945 = state_34612__$1;
(statearr_34634_36945[(2)] = false);

(statearr_34634_36945[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36947 = state_34612__$1;
(statearr_34635_36947[(2)] = inst_34584);

(statearr_34635_36947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36948 = state_34612__$1;
(statearr_34636_36948[(2)] = inst_34595);

(statearr_34636_36948[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36949 = state_34612__$1;
(statearr_34637_36949[(2)] = inst_34581);

(statearr_34637_36949[(1)] = (10));


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
var statearr_34640_36951 = state_34612;
(statearr_34640_36951[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36953 = state_34612;
state_34612 = G__36953;
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
var G__34656 = arguments.length;
switch (G__34656) {
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
var c__34274__auto___36962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34684){
var state_val_34685 = (state_34684[(1)]);
if((state_val_34685 === (7))){
var inst_34680 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34687_36964 = state_34684__$1;
(statearr_34687_36964[(2)] = inst_34680);

(statearr_34687_36964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (1))){
var state_34684__$1 = state_34684;
var statearr_34688_36965 = state_34684__$1;
(statearr_34688_36965[(2)] = null);

(statearr_34688_36965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (4))){
var inst_34661 = (state_34684[(7)]);
var inst_34661__$1 = (state_34684[(2)]);
var inst_34662 = (inst_34661__$1 == null);
var state_34684__$1 = (function (){var statearr_34690 = state_34684;
(statearr_34690[(7)] = inst_34661__$1);

return statearr_34690;
})();
if(cljs.core.truth_(inst_34662)){
var statearr_34691_36967 = state_34684__$1;
(statearr_34691_36967[(1)] = (5));

} else {
var statearr_34692_36968 = state_34684__$1;
(statearr_34692_36968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (13))){
var state_34684__$1 = state_34684;
var statearr_34693_36969 = state_34684__$1;
(statearr_34693_36969[(2)] = null);

(statearr_34693_36969[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (6))){
var inst_34661 = (state_34684[(7)]);
var inst_34667 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34661) : p.call(null,inst_34661));
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34667)){
var statearr_34695_36971 = state_34684__$1;
(statearr_34695_36971[(1)] = (9));

} else {
var statearr_34697_36972 = state_34684__$1;
(statearr_34697_36972[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (3))){
var inst_34682 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34684__$1,inst_34682);
} else {
if((state_val_34685 === (12))){
var state_34684__$1 = state_34684;
var statearr_34698_36973 = state_34684__$1;
(statearr_34698_36973[(2)] = null);

(statearr_34698_36973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (2))){
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34684__$1,(4),ch);
} else {
if((state_val_34685 === (11))){
var inst_34661 = (state_34684[(7)]);
var inst_34671 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34684__$1,(8),inst_34671,inst_34661);
} else {
if((state_val_34685 === (9))){
var state_34684__$1 = state_34684;
var statearr_34702_36975 = state_34684__$1;
(statearr_34702_36975[(2)] = tc);

(statearr_34702_36975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (5))){
var inst_34664 = cljs.core.async.close_BANG_(tc);
var inst_34665 = cljs.core.async.close_BANG_(fc);
var state_34684__$1 = (function (){var statearr_34703 = state_34684;
(statearr_34703[(8)] = inst_34664);

return statearr_34703;
})();
var statearr_34704_36977 = state_34684__$1;
(statearr_34704_36977[(2)] = inst_34665);

(statearr_34704_36977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (14))){
var inst_34678 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34705_36978 = state_34684__$1;
(statearr_34705_36978[(2)] = inst_34678);

(statearr_34705_36978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (10))){
var state_34684__$1 = state_34684;
var statearr_34707_36980 = state_34684__$1;
(statearr_34707_36980[(2)] = fc);

(statearr_34707_36980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (8))){
var inst_34673 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34673)){
var statearr_34708_36981 = state_34684__$1;
(statearr_34708_36981[(1)] = (12));

} else {
var statearr_34709_36982 = state_34684__$1;
(statearr_34709_36982[(1)] = (13));

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
var statearr_34710 = [null,null,null,null,null,null,null,null,null];
(statearr_34710[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34710[(1)] = (1));

return statearr_34710;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34684){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34684);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34711){if((e34711 instanceof Object)){
var ex__34210__auto__ = e34711;
var statearr_34712_36984 = state_34684;
(statearr_34712_36984[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36986 = state_34684;
state_34684 = G__36986;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34716 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34716[(6)] = c__34274__auto___36962);

return statearr_34716;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34740){
var state_val_34741 = (state_34740[(1)]);
if((state_val_34741 === (7))){
var inst_34736 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34745_36989 = state_34740__$1;
(statearr_34745_36989[(2)] = inst_34736);

(statearr_34745_36989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (1))){
var inst_34720 = init;
var state_34740__$1 = (function (){var statearr_34746 = state_34740;
(statearr_34746[(7)] = inst_34720);

return statearr_34746;
})();
var statearr_34747_36991 = state_34740__$1;
(statearr_34747_36991[(2)] = null);

(statearr_34747_36991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (4))){
var inst_34723 = (state_34740[(8)]);
var inst_34723__$1 = (state_34740[(2)]);
var inst_34724 = (inst_34723__$1 == null);
var state_34740__$1 = (function (){var statearr_34748 = state_34740;
(statearr_34748[(8)] = inst_34723__$1);

return statearr_34748;
})();
if(cljs.core.truth_(inst_34724)){
var statearr_34749_36993 = state_34740__$1;
(statearr_34749_36993[(1)] = (5));

} else {
var statearr_34750_36994 = state_34740__$1;
(statearr_34750_36994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (6))){
var inst_34727 = (state_34740[(9)]);
var inst_34723 = (state_34740[(8)]);
var inst_34720 = (state_34740[(7)]);
var inst_34727__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34720,inst_34723) : f.call(null,inst_34720,inst_34723));
var inst_34728 = cljs.core.reduced_QMARK_(inst_34727__$1);
var state_34740__$1 = (function (){var statearr_34751 = state_34740;
(statearr_34751[(9)] = inst_34727__$1);

return statearr_34751;
})();
if(inst_34728){
var statearr_34752_36996 = state_34740__$1;
(statearr_34752_36996[(1)] = (8));

} else {
var statearr_34753_36997 = state_34740__$1;
(statearr_34753_36997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (3))){
var inst_34738 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34740__$1,inst_34738);
} else {
if((state_val_34741 === (2))){
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34740__$1,(4),ch);
} else {
if((state_val_34741 === (9))){
var inst_34727 = (state_34740[(9)]);
var inst_34720 = inst_34727;
var state_34740__$1 = (function (){var statearr_34754 = state_34740;
(statearr_34754[(7)] = inst_34720);

return statearr_34754;
})();
var statearr_34755_36999 = state_34740__$1;
(statearr_34755_36999[(2)] = null);

(statearr_34755_36999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (5))){
var inst_34720 = (state_34740[(7)]);
var state_34740__$1 = state_34740;
var statearr_34756_37000 = state_34740__$1;
(statearr_34756_37000[(2)] = inst_34720);

(statearr_34756_37000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (10))){
var inst_34734 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34757_37001 = state_34740__$1;
(statearr_34757_37001[(2)] = inst_34734);

(statearr_34757_37001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (8))){
var inst_34727 = (state_34740[(9)]);
var inst_34730 = cljs.core.deref(inst_34727);
var state_34740__$1 = state_34740;
var statearr_34758_37003 = state_34740__$1;
(statearr_34758_37003[(2)] = inst_34730);

(statearr_34758_37003[(1)] = (10));


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
var statearr_34759 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34759[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34759[(1)] = (1));

return statearr_34759;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34740){
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
}catch (e34760){if((e34760 instanceof Object)){
var ex__34210__auto__ = e34760;
var statearr_34761_37005 = state_34740;
(statearr_34761_37005[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37006 = state_34740;
state_34740 = G__37006;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34740){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34762 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34762[(6)] = c__34274__auto__);

return statearr_34762;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34768){
var state_val_34769 = (state_34768[(1)]);
if((state_val_34769 === (1))){
var inst_34763 = cljs.core.async.reduce(f__$1,init,ch);
var state_34768__$1 = state_34768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34768__$1,(2),inst_34763);
} else {
if((state_val_34769 === (2))){
var inst_34765 = (state_34768[(2)]);
var inst_34766 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34765) : f__$1.call(null,inst_34765));
var state_34768__$1 = state_34768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34768__$1,inst_34766);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34777 = [null,null,null,null,null,null,null];
(statearr_34777[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34777[(1)] = (1));

return statearr_34777;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34768){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34768);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34778){if((e34778 instanceof Object)){
var ex__34210__auto__ = e34778;
var statearr_34779_37010 = state_34768;
(statearr_34779_37010[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34778;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37012 = state_34768;
state_34768 = G__37012;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34768){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34780 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34780[(6)] = c__34274__auto__);

return statearr_34780;
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
var G__34783 = arguments.length;
switch (G__34783) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34813){
var state_val_34814 = (state_34813[(1)]);
if((state_val_34814 === (7))){
var inst_34795 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
var statearr_34815_37016 = state_34813__$1;
(statearr_34815_37016[(2)] = inst_34795);

(statearr_34815_37016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (1))){
var inst_34788 = cljs.core.seq(coll);
var inst_34789 = inst_34788;
var state_34813__$1 = (function (){var statearr_34819 = state_34813;
(statearr_34819[(7)] = inst_34789);

return statearr_34819;
})();
var statearr_34820_37018 = state_34813__$1;
(statearr_34820_37018[(2)] = null);

(statearr_34820_37018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (4))){
var inst_34789 = (state_34813[(7)]);
var inst_34793 = cljs.core.first(inst_34789);
var state_34813__$1 = state_34813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34813__$1,(7),ch,inst_34793);
} else {
if((state_val_34814 === (13))){
var inst_34807 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
var statearr_34824_37019 = state_34813__$1;
(statearr_34824_37019[(2)] = inst_34807);

(statearr_34824_37019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (6))){
var inst_34798 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
if(cljs.core.truth_(inst_34798)){
var statearr_34825_37021 = state_34813__$1;
(statearr_34825_37021[(1)] = (8));

} else {
var statearr_34826_37022 = state_34813__$1;
(statearr_34826_37022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (3))){
var inst_34811 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34813__$1,inst_34811);
} else {
if((state_val_34814 === (12))){
var state_34813__$1 = state_34813;
var statearr_34827_37023 = state_34813__$1;
(statearr_34827_37023[(2)] = null);

(statearr_34827_37023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (2))){
var inst_34789 = (state_34813[(7)]);
var state_34813__$1 = state_34813;
if(cljs.core.truth_(inst_34789)){
var statearr_34828_37024 = state_34813__$1;
(statearr_34828_37024[(1)] = (4));

} else {
var statearr_34829_37025 = state_34813__$1;
(statearr_34829_37025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (11))){
var inst_34804 = cljs.core.async.close_BANG_(ch);
var state_34813__$1 = state_34813;
var statearr_34830_37026 = state_34813__$1;
(statearr_34830_37026[(2)] = inst_34804);

(statearr_34830_37026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (9))){
var state_34813__$1 = state_34813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34831_37028 = state_34813__$1;
(statearr_34831_37028[(1)] = (11));

} else {
var statearr_34832_37035 = state_34813__$1;
(statearr_34832_37035[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (5))){
var inst_34789 = (state_34813[(7)]);
var state_34813__$1 = state_34813;
var statearr_34833_37036 = state_34813__$1;
(statearr_34833_37036[(2)] = inst_34789);

(statearr_34833_37036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (10))){
var inst_34809 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
var statearr_34834_37037 = state_34813__$1;
(statearr_34834_37037[(2)] = inst_34809);

(statearr_34834_37037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (8))){
var inst_34789 = (state_34813[(7)]);
var inst_34800 = cljs.core.next(inst_34789);
var inst_34789__$1 = inst_34800;
var state_34813__$1 = (function (){var statearr_34835 = state_34813;
(statearr_34835[(7)] = inst_34789__$1);

return statearr_34835;
})();
var statearr_34836_37038 = state_34813__$1;
(statearr_34836_37038[(2)] = null);

(statearr_34836_37038[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34813){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34813);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__34210__auto__ = e34838;
var statearr_34839_37040 = state_34813;
(statearr_34839_37040[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37041 = state_34813;
state_34813 = G__37041;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34813);
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
var c__34274__auto___37053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34992){
var state_val_34993 = (state_34992[(1)]);
if((state_val_34993 === (7))){
var inst_34988 = (state_34992[(2)]);
var state_34992__$1 = state_34992;
var statearr_34994_37054 = state_34992__$1;
(statearr_34994_37054[(2)] = inst_34988);

(statearr_34994_37054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (20))){
var inst_34883 = (state_34992[(7)]);
var inst_34901 = cljs.core.first(inst_34883);
var inst_34902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34901,(0),null);
var inst_34903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34901,(1),null);
var state_34992__$1 = (function (){var statearr_34995 = state_34992;
(statearr_34995[(8)] = inst_34902);

return statearr_34995;
})();
if(cljs.core.truth_(inst_34903)){
var statearr_34997_37058 = state_34992__$1;
(statearr_34997_37058[(1)] = (22));

} else {
var statearr_34999_37060 = state_34992__$1;
(statearr_34999_37060[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (27))){
var inst_34931 = (state_34992[(9)]);
var inst_34852 = (state_34992[(10)]);
var inst_34933 = (state_34992[(11)]);
var inst_34938 = (state_34992[(12)]);
var inst_34938__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34931,inst_34933);
var inst_34939 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34938__$1,inst_34852,done);
var state_34992__$1 = (function (){var statearr_35002 = state_34992;
(statearr_35002[(12)] = inst_34938__$1);

return statearr_35002;
})();
if(cljs.core.truth_(inst_34939)){
var statearr_35003_37063 = state_34992__$1;
(statearr_35003_37063[(1)] = (30));

} else {
var statearr_35004_37064 = state_34992__$1;
(statearr_35004_37064[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (1))){
var state_34992__$1 = state_34992;
var statearr_35005_37065 = state_34992__$1;
(statearr_35005_37065[(2)] = null);

(statearr_35005_37065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (24))){
var inst_34883 = (state_34992[(7)]);
var inst_34908 = (state_34992[(2)]);
var inst_34909 = cljs.core.next(inst_34883);
var inst_34861 = inst_34909;
var inst_34862 = null;
var inst_34863 = (0);
var inst_34864 = (0);
var state_34992__$1 = (function (){var statearr_35006 = state_34992;
(statearr_35006[(13)] = inst_34863);

(statearr_35006[(14)] = inst_34862);

(statearr_35006[(15)] = inst_34864);

(statearr_35006[(16)] = inst_34908);

(statearr_35006[(17)] = inst_34861);

return statearr_35006;
})();
var statearr_35007_37069 = state_34992__$1;
(statearr_35007_37069[(2)] = null);

(statearr_35007_37069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (39))){
var state_34992__$1 = state_34992;
var statearr_35013_37071 = state_34992__$1;
(statearr_35013_37071[(2)] = null);

(statearr_35013_37071[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (4))){
var inst_34852 = (state_34992[(10)]);
var inst_34852__$1 = (state_34992[(2)]);
var inst_34853 = (inst_34852__$1 == null);
var state_34992__$1 = (function (){var statearr_35017 = state_34992;
(statearr_35017[(10)] = inst_34852__$1);

return statearr_35017;
})();
if(cljs.core.truth_(inst_34853)){
var statearr_35019_37077 = state_34992__$1;
(statearr_35019_37077[(1)] = (5));

} else {
var statearr_35020_37078 = state_34992__$1;
(statearr_35020_37078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (15))){
var inst_34863 = (state_34992[(13)]);
var inst_34862 = (state_34992[(14)]);
var inst_34864 = (state_34992[(15)]);
var inst_34861 = (state_34992[(17)]);
var inst_34879 = (state_34992[(2)]);
var inst_34880 = (inst_34864 + (1));
var tmp35008 = inst_34863;
var tmp35009 = inst_34862;
var tmp35010 = inst_34861;
var inst_34861__$1 = tmp35010;
var inst_34862__$1 = tmp35009;
var inst_34863__$1 = tmp35008;
var inst_34864__$1 = inst_34880;
var state_34992__$1 = (function (){var statearr_35021 = state_34992;
(statearr_35021[(13)] = inst_34863__$1);

(statearr_35021[(18)] = inst_34879);

(statearr_35021[(14)] = inst_34862__$1);

(statearr_35021[(15)] = inst_34864__$1);

(statearr_35021[(17)] = inst_34861__$1);

return statearr_35021;
})();
var statearr_35022_37083 = state_34992__$1;
(statearr_35022_37083[(2)] = null);

(statearr_35022_37083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (21))){
var inst_34912 = (state_34992[(2)]);
var state_34992__$1 = state_34992;
var statearr_35029_37085 = state_34992__$1;
(statearr_35029_37085[(2)] = inst_34912);

(statearr_35029_37085[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (31))){
var inst_34938 = (state_34992[(12)]);
var inst_34942 = done(null);
var inst_34945 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34938);
var state_34992__$1 = (function (){var statearr_35031 = state_34992;
(statearr_35031[(19)] = inst_34942);

return statearr_35031;
})();
var statearr_35032_37092 = state_34992__$1;
(statearr_35032_37092[(2)] = inst_34945);

(statearr_35032_37092[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (32))){
var inst_34931 = (state_34992[(9)]);
var inst_34933 = (state_34992[(11)]);
var inst_34930 = (state_34992[(20)]);
var inst_34932 = (state_34992[(21)]);
var inst_34947 = (state_34992[(2)]);
var inst_34948 = (inst_34933 + (1));
var tmp35024 = inst_34931;
var tmp35025 = inst_34930;
var tmp35026 = inst_34932;
var inst_34930__$1 = tmp35025;
var inst_34931__$1 = tmp35024;
var inst_34932__$1 = tmp35026;
var inst_34933__$1 = inst_34948;
var state_34992__$1 = (function (){var statearr_35046 = state_34992;
(statearr_35046[(22)] = inst_34947);

(statearr_35046[(9)] = inst_34931__$1);

(statearr_35046[(11)] = inst_34933__$1);

(statearr_35046[(20)] = inst_34930__$1);

(statearr_35046[(21)] = inst_34932__$1);

return statearr_35046;
})();
var statearr_35049_37099 = state_34992__$1;
(statearr_35049_37099[(2)] = null);

(statearr_35049_37099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (40))){
var inst_34960 = (state_34992[(23)]);
var inst_34964 = done(null);
var inst_34965 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34960);
var state_34992__$1 = (function (){var statearr_35052 = state_34992;
(statearr_35052[(24)] = inst_34964);

return statearr_35052;
})();
var statearr_35053_37104 = state_34992__$1;
(statearr_35053_37104[(2)] = inst_34965);

(statearr_35053_37104[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (33))){
var inst_34951 = (state_34992[(25)]);
var inst_34953 = cljs.core.chunked_seq_QMARK_(inst_34951);
var state_34992__$1 = state_34992;
if(inst_34953){
var statearr_35056_37109 = state_34992__$1;
(statearr_35056_37109[(1)] = (36));

} else {
var statearr_35057_37111 = state_34992__$1;
(statearr_35057_37111[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (13))){
var inst_34873 = (state_34992[(26)]);
var inst_34876 = cljs.core.async.close_BANG_(inst_34873);
var state_34992__$1 = state_34992;
var statearr_35059_37112 = state_34992__$1;
(statearr_35059_37112[(2)] = inst_34876);

(statearr_35059_37112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (22))){
var inst_34902 = (state_34992[(8)]);
var inst_34905 = cljs.core.async.close_BANG_(inst_34902);
var state_34992__$1 = state_34992;
var statearr_35065_37117 = state_34992__$1;
(statearr_35065_37117[(2)] = inst_34905);

(statearr_35065_37117[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (36))){
var inst_34951 = (state_34992[(25)]);
var inst_34955 = cljs.core.chunk_first(inst_34951);
var inst_34956 = cljs.core.chunk_rest(inst_34951);
var inst_34957 = cljs.core.count(inst_34955);
var inst_34930 = inst_34956;
var inst_34931 = inst_34955;
var inst_34932 = inst_34957;
var inst_34933 = (0);
var state_34992__$1 = (function (){var statearr_35070 = state_34992;
(statearr_35070[(9)] = inst_34931);

(statearr_35070[(11)] = inst_34933);

(statearr_35070[(20)] = inst_34930);

(statearr_35070[(21)] = inst_34932);

return statearr_35070;
})();
var statearr_35075_37123 = state_34992__$1;
(statearr_35075_37123[(2)] = null);

(statearr_35075_37123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (41))){
var inst_34951 = (state_34992[(25)]);
var inst_34967 = (state_34992[(2)]);
var inst_34968 = cljs.core.next(inst_34951);
var inst_34930 = inst_34968;
var inst_34931 = null;
var inst_34932 = (0);
var inst_34933 = (0);
var state_34992__$1 = (function (){var statearr_35081 = state_34992;
(statearr_35081[(9)] = inst_34931);

(statearr_35081[(11)] = inst_34933);

(statearr_35081[(20)] = inst_34930);

(statearr_35081[(21)] = inst_34932);

(statearr_35081[(27)] = inst_34967);

return statearr_35081;
})();
var statearr_35085_37132 = state_34992__$1;
(statearr_35085_37132[(2)] = null);

(statearr_35085_37132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (43))){
var state_34992__$1 = state_34992;
var statearr_35091_37133 = state_34992__$1;
(statearr_35091_37133[(2)] = null);

(statearr_35091_37133[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (29))){
var inst_34976 = (state_34992[(2)]);
var state_34992__$1 = state_34992;
var statearr_35095_37136 = state_34992__$1;
(statearr_35095_37136[(2)] = inst_34976);

(statearr_35095_37136[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (44))){
var inst_34985 = (state_34992[(2)]);
var state_34992__$1 = (function (){var statearr_35099 = state_34992;
(statearr_35099[(28)] = inst_34985);

return statearr_35099;
})();
var statearr_35103_37139 = state_34992__$1;
(statearr_35103_37139[(2)] = null);

(statearr_35103_37139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (6))){
var inst_34922 = (state_34992[(29)]);
var inst_34921 = cljs.core.deref(cs);
var inst_34922__$1 = cljs.core.keys(inst_34921);
var inst_34923 = cljs.core.count(inst_34922__$1);
var inst_34924 = cljs.core.reset_BANG_(dctr,inst_34923);
var inst_34929 = cljs.core.seq(inst_34922__$1);
var inst_34930 = inst_34929;
var inst_34931 = null;
var inst_34932 = (0);
var inst_34933 = (0);
var state_34992__$1 = (function (){var statearr_35111 = state_34992;
(statearr_35111[(9)] = inst_34931);

(statearr_35111[(30)] = inst_34924);

(statearr_35111[(11)] = inst_34933);

(statearr_35111[(20)] = inst_34930);

(statearr_35111[(21)] = inst_34932);

(statearr_35111[(29)] = inst_34922__$1);

return statearr_35111;
})();
var statearr_35115_37141 = state_34992__$1;
(statearr_35115_37141[(2)] = null);

(statearr_35115_37141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (28))){
var inst_34951 = (state_34992[(25)]);
var inst_34930 = (state_34992[(20)]);
var inst_34951__$1 = cljs.core.seq(inst_34930);
var state_34992__$1 = (function (){var statearr_35121 = state_34992;
(statearr_35121[(25)] = inst_34951__$1);

return statearr_35121;
})();
if(inst_34951__$1){
var statearr_35125_37150 = state_34992__$1;
(statearr_35125_37150[(1)] = (33));

} else {
var statearr_35126_37151 = state_34992__$1;
(statearr_35126_37151[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (25))){
var inst_34933 = (state_34992[(11)]);
var inst_34932 = (state_34992[(21)]);
var inst_34935 = (inst_34933 < inst_34932);
var inst_34936 = inst_34935;
var state_34992__$1 = state_34992;
if(cljs.core.truth_(inst_34936)){
var statearr_35132_37152 = state_34992__$1;
(statearr_35132_37152[(1)] = (27));

} else {
var statearr_35133_37153 = state_34992__$1;
(statearr_35133_37153[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (34))){
var state_34992__$1 = state_34992;
var statearr_35137_37156 = state_34992__$1;
(statearr_35137_37156[(2)] = null);

(statearr_35137_37156[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (17))){
var state_34992__$1 = state_34992;
var statearr_35138_37162 = state_34992__$1;
(statearr_35138_37162[(2)] = null);

(statearr_35138_37162[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (3))){
var inst_34990 = (state_34992[(2)]);
var state_34992__$1 = state_34992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34992__$1,inst_34990);
} else {
if((state_val_34993 === (12))){
var inst_34917 = (state_34992[(2)]);
var state_34992__$1 = state_34992;
var statearr_35144_37164 = state_34992__$1;
(statearr_35144_37164[(2)] = inst_34917);

(statearr_35144_37164[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (2))){
var state_34992__$1 = state_34992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34992__$1,(4),ch);
} else {
if((state_val_34993 === (23))){
var state_34992__$1 = state_34992;
var statearr_35150_37167 = state_34992__$1;
(statearr_35150_37167[(2)] = null);

(statearr_35150_37167[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (35))){
var inst_34974 = (state_34992[(2)]);
var state_34992__$1 = state_34992;
var statearr_35157_37168 = state_34992__$1;
(statearr_35157_37168[(2)] = inst_34974);

(statearr_35157_37168[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (19))){
var inst_34883 = (state_34992[(7)]);
var inst_34892 = cljs.core.chunk_first(inst_34883);
var inst_34893 = cljs.core.chunk_rest(inst_34883);
var inst_34894 = cljs.core.count(inst_34892);
var inst_34861 = inst_34893;
var inst_34862 = inst_34892;
var inst_34863 = inst_34894;
var inst_34864 = (0);
var state_34992__$1 = (function (){var statearr_35158 = state_34992;
(statearr_35158[(13)] = inst_34863);

(statearr_35158[(14)] = inst_34862);

(statearr_35158[(15)] = inst_34864);

(statearr_35158[(17)] = inst_34861);

return statearr_35158;
})();
var statearr_35159_37171 = state_34992__$1;
(statearr_35159_37171[(2)] = null);

(statearr_35159_37171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (11))){
var inst_34883 = (state_34992[(7)]);
var inst_34861 = (state_34992[(17)]);
var inst_34883__$1 = cljs.core.seq(inst_34861);
var state_34992__$1 = (function (){var statearr_35160 = state_34992;
(statearr_35160[(7)] = inst_34883__$1);

return statearr_35160;
})();
if(inst_34883__$1){
var statearr_35161_37185 = state_34992__$1;
(statearr_35161_37185[(1)] = (16));

} else {
var statearr_35162_37186 = state_34992__$1;
(statearr_35162_37186[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (9))){
var inst_34919 = (state_34992[(2)]);
var state_34992__$1 = state_34992;
var statearr_35165_37188 = state_34992__$1;
(statearr_35165_37188[(2)] = inst_34919);

(statearr_35165_37188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (5))){
var inst_34859 = cljs.core.deref(cs);
var inst_34860 = cljs.core.seq(inst_34859);
var inst_34861 = inst_34860;
var inst_34862 = null;
var inst_34863 = (0);
var inst_34864 = (0);
var state_34992__$1 = (function (){var statearr_35166 = state_34992;
(statearr_35166[(13)] = inst_34863);

(statearr_35166[(14)] = inst_34862);

(statearr_35166[(15)] = inst_34864);

(statearr_35166[(17)] = inst_34861);

return statearr_35166;
})();
var statearr_35167_37191 = state_34992__$1;
(statearr_35167_37191[(2)] = null);

(statearr_35167_37191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (14))){
var state_34992__$1 = state_34992;
var statearr_35170_37193 = state_34992__$1;
(statearr_35170_37193[(2)] = null);

(statearr_35170_37193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (45))){
var inst_34982 = (state_34992[(2)]);
var state_34992__$1 = state_34992;
var statearr_35191_37194 = state_34992__$1;
(statearr_35191_37194[(2)] = inst_34982);

(statearr_35191_37194[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (26))){
var inst_34922 = (state_34992[(29)]);
var inst_34978 = (state_34992[(2)]);
var inst_34979 = cljs.core.seq(inst_34922);
var state_34992__$1 = (function (){var statearr_35195 = state_34992;
(statearr_35195[(31)] = inst_34978);

return statearr_35195;
})();
if(inst_34979){
var statearr_35196_37198 = state_34992__$1;
(statearr_35196_37198[(1)] = (42));

} else {
var statearr_35197_37200 = state_34992__$1;
(statearr_35197_37200[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (16))){
var inst_34883 = (state_34992[(7)]);
var inst_34888 = cljs.core.chunked_seq_QMARK_(inst_34883);
var state_34992__$1 = state_34992;
if(inst_34888){
var statearr_35200_37204 = state_34992__$1;
(statearr_35200_37204[(1)] = (19));

} else {
var statearr_35201_37205 = state_34992__$1;
(statearr_35201_37205[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (38))){
var inst_34971 = (state_34992[(2)]);
var state_34992__$1 = state_34992;
var statearr_35204_37206 = state_34992__$1;
(statearr_35204_37206[(2)] = inst_34971);

(statearr_35204_37206[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (30))){
var state_34992__$1 = state_34992;
var statearr_35205_37209 = state_34992__$1;
(statearr_35205_37209[(2)] = null);

(statearr_35205_37209[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (10))){
var inst_34862 = (state_34992[(14)]);
var inst_34864 = (state_34992[(15)]);
var inst_34872 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34862,inst_34864);
var inst_34873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34872,(0),null);
var inst_34874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34872,(1),null);
var state_34992__$1 = (function (){var statearr_35207 = state_34992;
(statearr_35207[(26)] = inst_34873);

return statearr_35207;
})();
if(cljs.core.truth_(inst_34874)){
var statearr_35209_37212 = state_34992__$1;
(statearr_35209_37212[(1)] = (13));

} else {
var statearr_35212_37213 = state_34992__$1;
(statearr_35212_37213[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (18))){
var inst_34915 = (state_34992[(2)]);
var state_34992__$1 = state_34992;
var statearr_35217_37215 = state_34992__$1;
(statearr_35217_37215[(2)] = inst_34915);

(statearr_35217_37215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (42))){
var state_34992__$1 = state_34992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34992__$1,(45),dchan);
} else {
if((state_val_34993 === (37))){
var inst_34951 = (state_34992[(25)]);
var inst_34852 = (state_34992[(10)]);
var inst_34960 = (state_34992[(23)]);
var inst_34960__$1 = cljs.core.first(inst_34951);
var inst_34961 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34960__$1,inst_34852,done);
var state_34992__$1 = (function (){var statearr_35225 = state_34992;
(statearr_35225[(23)] = inst_34960__$1);

return statearr_35225;
})();
if(cljs.core.truth_(inst_34961)){
var statearr_35231_37223 = state_34992__$1;
(statearr_35231_37223[(1)] = (39));

} else {
var statearr_35232_37226 = state_34992__$1;
(statearr_35232_37226[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34993 === (8))){
var inst_34863 = (state_34992[(13)]);
var inst_34864 = (state_34992[(15)]);
var inst_34866 = (inst_34864 < inst_34863);
var inst_34867 = inst_34866;
var state_34992__$1 = state_34992;
if(cljs.core.truth_(inst_34867)){
var statearr_35240_37228 = state_34992__$1;
(statearr_35240_37228[(1)] = (10));

} else {
var statearr_35242_37229 = state_34992__$1;
(statearr_35242_37229[(1)] = (11));

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
var statearr_35251 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35251[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35251[(1)] = (1));

return statearr_35251;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34992){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34992);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35256){if((e35256 instanceof Object)){
var ex__34210__auto__ = e35256;
var statearr_35258_37236 = state_34992;
(statearr_35258_37236[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35256;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37237 = state_34992;
state_34992 = G__37237;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34992){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35265 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35265[(6)] = c__34274__auto___37053);

return statearr_35265;
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
var G__35278 = arguments.length;
switch (G__35278) {
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
var len__4789__auto___37283 = arguments.length;
var i__4790__auto___37284 = (0);
while(true){
if((i__4790__auto___37284 < len__4789__auto___37283)){
args__4795__auto__.push((arguments[i__4790__auto___37284]));

var G__37286 = (i__4790__auto___37284 + (1));
i__4790__auto___37284 = G__37286;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35387){
var map__35388 = p__35387;
var map__35388__$1 = (((((!((map__35388 == null))))?(((((map__35388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35388):map__35388);
var opts = map__35388__$1;
var statearr_35396_37289 = state;
(statearr_35396_37289[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35397_37293 = state;
(statearr_35397_37293[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35400_37295 = state;
(statearr_35400_37295[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35371){
var G__35372 = cljs.core.first(seq35371);
var seq35371__$1 = cljs.core.next(seq35371);
var G__35374 = cljs.core.first(seq35371__$1);
var seq35371__$2 = cljs.core.next(seq35371__$1);
var G__35375 = cljs.core.first(seq35371__$2);
var seq35371__$3 = cljs.core.next(seq35371__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35372,G__35374,G__35375,seq35371__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35425 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35426){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35426 = meta35426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35427,meta35426__$1){
var self__ = this;
var _35427__$1 = this;
return (new cljs.core.async.t_cljs$core$async35425(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35426__$1));
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35427){
var self__ = this;
var _35427__$1 = this;
return self__.meta35426;
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35425.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35426","meta35426",332097432,null)], null);
}));

(cljs.core.async.t_cljs$core$async35425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35425");

(cljs.core.async.t_cljs$core$async35425.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35425.
 */
cljs.core.async.__GT_t_cljs$core$async35425 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35425(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35426){
return (new cljs.core.async.t_cljs$core$async35425(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35426));
});

}

return (new cljs.core.async.t_cljs$core$async35425(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35631){
var state_val_35632 = (state_35631[(1)]);
if((state_val_35632 === (7))){
var inst_35521 = (state_35631[(2)]);
var state_35631__$1 = state_35631;
var statearr_35643_37343 = state_35631__$1;
(statearr_35643_37343[(2)] = inst_35521);

(statearr_35643_37343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (20))){
var inst_35536 = (state_35631[(7)]);
var state_35631__$1 = state_35631;
var statearr_35648_37344 = state_35631__$1;
(statearr_35648_37344[(2)] = inst_35536);

(statearr_35648_37344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (27))){
var state_35631__$1 = state_35631;
var statearr_35654_37345 = state_35631__$1;
(statearr_35654_37345[(2)] = null);

(statearr_35654_37345[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (1))){
var inst_35503 = (state_35631[(8)]);
var inst_35503__$1 = calc_state();
var inst_35506 = (inst_35503__$1 == null);
var inst_35507 = cljs.core.not(inst_35506);
var state_35631__$1 = (function (){var statearr_35661 = state_35631;
(statearr_35661[(8)] = inst_35503__$1);

return statearr_35661;
})();
if(inst_35507){
var statearr_35665_37348 = state_35631__$1;
(statearr_35665_37348[(1)] = (2));

} else {
var statearr_35668_37349 = state_35631__$1;
(statearr_35668_37349[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (24))){
var inst_35580 = (state_35631[(9)]);
var inst_35598 = (state_35631[(10)]);
var inst_35567 = (state_35631[(11)]);
var inst_35598__$1 = (inst_35567.cljs$core$IFn$_invoke$arity$1 ? inst_35567.cljs$core$IFn$_invoke$arity$1(inst_35580) : inst_35567.call(null,inst_35580));
var state_35631__$1 = (function (){var statearr_35673 = state_35631;
(statearr_35673[(10)] = inst_35598__$1);

return statearr_35673;
})();
if(cljs.core.truth_(inst_35598__$1)){
var statearr_35676_37354 = state_35631__$1;
(statearr_35676_37354[(1)] = (29));

} else {
var statearr_35677_37355 = state_35631__$1;
(statearr_35677_37355[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (4))){
var inst_35524 = (state_35631[(2)]);
var state_35631__$1 = state_35631;
if(cljs.core.truth_(inst_35524)){
var statearr_35683_37356 = state_35631__$1;
(statearr_35683_37356[(1)] = (8));

} else {
var statearr_35685_37357 = state_35631__$1;
(statearr_35685_37357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (15))){
var inst_35561 = (state_35631[(2)]);
var state_35631__$1 = state_35631;
if(cljs.core.truth_(inst_35561)){
var statearr_35686_37358 = state_35631__$1;
(statearr_35686_37358[(1)] = (19));

} else {
var statearr_35687_37359 = state_35631__$1;
(statearr_35687_37359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (21))){
var inst_35566 = (state_35631[(12)]);
var inst_35566__$1 = (state_35631[(2)]);
var inst_35567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35566__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35566__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35566__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35631__$1 = (function (){var statearr_35688 = state_35631;
(statearr_35688[(13)] = inst_35569);

(statearr_35688[(12)] = inst_35566__$1);

(statearr_35688[(11)] = inst_35567);

return statearr_35688;
})();
return cljs.core.async.ioc_alts_BANG_(state_35631__$1,(22),inst_35570);
} else {
if((state_val_35632 === (31))){
var inst_35609 = (state_35631[(2)]);
var state_35631__$1 = state_35631;
if(cljs.core.truth_(inst_35609)){
var statearr_35689_37369 = state_35631__$1;
(statearr_35689_37369[(1)] = (32));

} else {
var statearr_35690_37370 = state_35631__$1;
(statearr_35690_37370[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (32))){
var inst_35579 = (state_35631[(14)]);
var state_35631__$1 = state_35631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35631__$1,(35),out,inst_35579);
} else {
if((state_val_35632 === (33))){
var inst_35566 = (state_35631[(12)]);
var inst_35536 = inst_35566;
var state_35631__$1 = (function (){var statearr_35693 = state_35631;
(statearr_35693[(7)] = inst_35536);

return statearr_35693;
})();
var statearr_35694_37375 = state_35631__$1;
(statearr_35694_37375[(2)] = null);

(statearr_35694_37375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (13))){
var inst_35536 = (state_35631[(7)]);
var inst_35548 = inst_35536.cljs$lang$protocol_mask$partition0$;
var inst_35549 = (inst_35548 & (64));
var inst_35551 = inst_35536.cljs$core$ISeq$;
var inst_35552 = (cljs.core.PROTOCOL_SENTINEL === inst_35551);
var inst_35553 = ((inst_35549) || (inst_35552));
var state_35631__$1 = state_35631;
if(cljs.core.truth_(inst_35553)){
var statearr_35695_37382 = state_35631__$1;
(statearr_35695_37382[(1)] = (16));

} else {
var statearr_35696_37384 = state_35631__$1;
(statearr_35696_37384[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (22))){
var inst_35580 = (state_35631[(9)]);
var inst_35579 = (state_35631[(14)]);
var inst_35578 = (state_35631[(2)]);
var inst_35579__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35578,(0),null);
var inst_35580__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35578,(1),null);
var inst_35583 = (inst_35579__$1 == null);
var inst_35584 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35580__$1,change);
var inst_35585 = ((inst_35583) || (inst_35584));
var state_35631__$1 = (function (){var statearr_35699 = state_35631;
(statearr_35699[(9)] = inst_35580__$1);

(statearr_35699[(14)] = inst_35579__$1);

return statearr_35699;
})();
if(cljs.core.truth_(inst_35585)){
var statearr_35700_37391 = state_35631__$1;
(statearr_35700_37391[(1)] = (23));

} else {
var statearr_35701_37394 = state_35631__$1;
(statearr_35701_37394[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (36))){
var inst_35566 = (state_35631[(12)]);
var inst_35536 = inst_35566;
var state_35631__$1 = (function (){var statearr_35702 = state_35631;
(statearr_35702[(7)] = inst_35536);

return statearr_35702;
})();
var statearr_35705_37397 = state_35631__$1;
(statearr_35705_37397[(2)] = null);

(statearr_35705_37397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (29))){
var inst_35598 = (state_35631[(10)]);
var state_35631__$1 = state_35631;
var statearr_35707_37403 = state_35631__$1;
(statearr_35707_37403[(2)] = inst_35598);

(statearr_35707_37403[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (6))){
var state_35631__$1 = state_35631;
var statearr_35709_37404 = state_35631__$1;
(statearr_35709_37404[(2)] = false);

(statearr_35709_37404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (28))){
var inst_35594 = (state_35631[(2)]);
var inst_35595 = calc_state();
var inst_35536 = inst_35595;
var state_35631__$1 = (function (){var statearr_35712 = state_35631;
(statearr_35712[(7)] = inst_35536);

(statearr_35712[(15)] = inst_35594);

return statearr_35712;
})();
var statearr_35714_37409 = state_35631__$1;
(statearr_35714_37409[(2)] = null);

(statearr_35714_37409[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (25))){
var inst_35624 = (state_35631[(2)]);
var state_35631__$1 = state_35631;
var statearr_35715_37411 = state_35631__$1;
(statearr_35715_37411[(2)] = inst_35624);

(statearr_35715_37411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (34))){
var inst_35622 = (state_35631[(2)]);
var state_35631__$1 = state_35631;
var statearr_35716_37416 = state_35631__$1;
(statearr_35716_37416[(2)] = inst_35622);

(statearr_35716_37416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (17))){
var state_35631__$1 = state_35631;
var statearr_35718_37419 = state_35631__$1;
(statearr_35718_37419[(2)] = false);

(statearr_35718_37419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (3))){
var state_35631__$1 = state_35631;
var statearr_35719_37426 = state_35631__$1;
(statearr_35719_37426[(2)] = false);

(statearr_35719_37426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (12))){
var inst_35626 = (state_35631[(2)]);
var state_35631__$1 = state_35631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35631__$1,inst_35626);
} else {
if((state_val_35632 === (2))){
var inst_35503 = (state_35631[(8)]);
var inst_35512 = inst_35503.cljs$lang$protocol_mask$partition0$;
var inst_35513 = (inst_35512 & (64));
var inst_35515 = inst_35503.cljs$core$ISeq$;
var inst_35516 = (cljs.core.PROTOCOL_SENTINEL === inst_35515);
var inst_35517 = ((inst_35513) || (inst_35516));
var state_35631__$1 = state_35631;
if(cljs.core.truth_(inst_35517)){
var statearr_35726_37429 = state_35631__$1;
(statearr_35726_37429[(1)] = (5));

} else {
var statearr_35727_37430 = state_35631__$1;
(statearr_35727_37430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (23))){
var inst_35579 = (state_35631[(14)]);
var inst_35588 = (inst_35579 == null);
var state_35631__$1 = state_35631;
if(cljs.core.truth_(inst_35588)){
var statearr_35731_37433 = state_35631__$1;
(statearr_35731_37433[(1)] = (26));

} else {
var statearr_35732_37434 = state_35631__$1;
(statearr_35732_37434[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (35))){
var inst_35613 = (state_35631[(2)]);
var state_35631__$1 = state_35631;
if(cljs.core.truth_(inst_35613)){
var statearr_35733_37436 = state_35631__$1;
(statearr_35733_37436[(1)] = (36));

} else {
var statearr_35735_37438 = state_35631__$1;
(statearr_35735_37438[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (19))){
var inst_35536 = (state_35631[(7)]);
var inst_35563 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35536);
var state_35631__$1 = state_35631;
var statearr_35736_37444 = state_35631__$1;
(statearr_35736_37444[(2)] = inst_35563);

(statearr_35736_37444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (11))){
var inst_35536 = (state_35631[(7)]);
var inst_35542 = (inst_35536 == null);
var inst_35543 = cljs.core.not(inst_35542);
var state_35631__$1 = state_35631;
if(inst_35543){
var statearr_35738_37446 = state_35631__$1;
(statearr_35738_37446[(1)] = (13));

} else {
var statearr_35739_37447 = state_35631__$1;
(statearr_35739_37447[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (9))){
var inst_35503 = (state_35631[(8)]);
var state_35631__$1 = state_35631;
var statearr_35740_37449 = state_35631__$1;
(statearr_35740_37449[(2)] = inst_35503);

(statearr_35740_37449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (5))){
var state_35631__$1 = state_35631;
var statearr_35741_37455 = state_35631__$1;
(statearr_35741_37455[(2)] = true);

(statearr_35741_37455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (14))){
var state_35631__$1 = state_35631;
var statearr_35743_37457 = state_35631__$1;
(statearr_35743_37457[(2)] = false);

(statearr_35743_37457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (26))){
var inst_35580 = (state_35631[(9)]);
var inst_35591 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35580);
var state_35631__$1 = state_35631;
var statearr_35745_37459 = state_35631__$1;
(statearr_35745_37459[(2)] = inst_35591);

(statearr_35745_37459[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (16))){
var state_35631__$1 = state_35631;
var statearr_35746_37462 = state_35631__$1;
(statearr_35746_37462[(2)] = true);

(statearr_35746_37462[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (38))){
var inst_35618 = (state_35631[(2)]);
var state_35631__$1 = state_35631;
var statearr_35747_37464 = state_35631__$1;
(statearr_35747_37464[(2)] = inst_35618);

(statearr_35747_37464[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (30))){
var inst_35580 = (state_35631[(9)]);
var inst_35569 = (state_35631[(13)]);
var inst_35567 = (state_35631[(11)]);
var inst_35604 = cljs.core.empty_QMARK_(inst_35567);
var inst_35605 = (inst_35569.cljs$core$IFn$_invoke$arity$1 ? inst_35569.cljs$core$IFn$_invoke$arity$1(inst_35580) : inst_35569.call(null,inst_35580));
var inst_35606 = cljs.core.not(inst_35605);
var inst_35607 = ((inst_35604) && (inst_35606));
var state_35631__$1 = state_35631;
var statearr_35749_37469 = state_35631__$1;
(statearr_35749_37469[(2)] = inst_35607);

(statearr_35749_37469[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (10))){
var inst_35503 = (state_35631[(8)]);
var inst_35529 = (state_35631[(2)]);
var inst_35531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35529,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35529,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35529,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35536 = inst_35503;
var state_35631__$1 = (function (){var statearr_35751 = state_35631;
(statearr_35751[(7)] = inst_35536);

(statearr_35751[(16)] = inst_35531);

(statearr_35751[(17)] = inst_35535);

(statearr_35751[(18)] = inst_35532);

return statearr_35751;
})();
var statearr_35755_37477 = state_35631__$1;
(statearr_35755_37477[(2)] = null);

(statearr_35755_37477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (18))){
var inst_35557 = (state_35631[(2)]);
var state_35631__$1 = state_35631;
var statearr_35758_37478 = state_35631__$1;
(statearr_35758_37478[(2)] = inst_35557);

(statearr_35758_37478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (37))){
var state_35631__$1 = state_35631;
var statearr_35761_37480 = state_35631__$1;
(statearr_35761_37480[(2)] = null);

(statearr_35761_37480[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35632 === (8))){
var inst_35503 = (state_35631[(8)]);
var inst_35526 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35503);
var state_35631__$1 = state_35631;
var statearr_35764_37482 = state_35631__$1;
(statearr_35764_37482[(2)] = inst_35526);

(statearr_35764_37482[(1)] = (10));


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
var statearr_35773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35773[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35773[(1)] = (1));

return statearr_35773;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35631){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35631);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35779){if((e35779 instanceof Object)){
var ex__34210__auto__ = e35779;
var statearr_35781_37490 = state_35631;
(statearr_35781_37490[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37491 = state_35631;
state_35631 = G__37491;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35631){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35787 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35787[(6)] = c__34274__auto___37338);

return statearr_35787;
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
var G__35803 = arguments.length;
switch (G__35803) {
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
var G__35825 = arguments.length;
switch (G__35825) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35821_SHARP_){
if(cljs.core.truth_((p1__35821_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35821_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35821_SHARP_.call(null,topic)))){
return p1__35821_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35821_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35833 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35834){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35834 = meta35834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35835,meta35834__$1){
var self__ = this;
var _35835__$1 = this;
return (new cljs.core.async.t_cljs$core$async35833(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35834__$1));
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35835){
var self__ = this;
var _35835__$1 = this;
return self__.meta35834;
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35833.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35834","meta35834",736940433,null)], null);
}));

(cljs.core.async.t_cljs$core$async35833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35833");

(cljs.core.async.t_cljs$core$async35833.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35833.
 */
cljs.core.async.__GT_t_cljs$core$async35833 = (function cljs$core$async$__GT_t_cljs$core$async35833(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35834){
return (new cljs.core.async.t_cljs$core$async35833(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35834));
});

}

return (new cljs.core.async.t_cljs$core$async35833(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35943){
var state_val_35944 = (state_35943[(1)]);
if((state_val_35944 === (7))){
var inst_35939 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
var statearr_35947_37551 = state_35943__$1;
(statearr_35947_37551[(2)] = inst_35939);

(statearr_35947_37551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (20))){
var state_35943__$1 = state_35943;
var statearr_35948_37552 = state_35943__$1;
(statearr_35948_37552[(2)] = null);

(statearr_35948_37552[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (1))){
var state_35943__$1 = state_35943;
var statearr_35952_37554 = state_35943__$1;
(statearr_35952_37554[(2)] = null);

(statearr_35952_37554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (24))){
var inst_35921 = (state_35943[(7)]);
var inst_35931 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35921);
var state_35943__$1 = state_35943;
var statearr_35954_37557 = state_35943__$1;
(statearr_35954_37557[(2)] = inst_35931);

(statearr_35954_37557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (4))){
var inst_35869 = (state_35943[(8)]);
var inst_35869__$1 = (state_35943[(2)]);
var inst_35870 = (inst_35869__$1 == null);
var state_35943__$1 = (function (){var statearr_35958 = state_35943;
(statearr_35958[(8)] = inst_35869__$1);

return statearr_35958;
})();
if(cljs.core.truth_(inst_35870)){
var statearr_35959_37563 = state_35943__$1;
(statearr_35959_37563[(1)] = (5));

} else {
var statearr_35960_37565 = state_35943__$1;
(statearr_35960_37565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (15))){
var inst_35914 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
var statearr_35962_37566 = state_35943__$1;
(statearr_35962_37566[(2)] = inst_35914);

(statearr_35962_37566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (21))){
var inst_35936 = (state_35943[(2)]);
var state_35943__$1 = (function (){var statearr_35966 = state_35943;
(statearr_35966[(9)] = inst_35936);

return statearr_35966;
})();
var statearr_35967_37569 = state_35943__$1;
(statearr_35967_37569[(2)] = null);

(statearr_35967_37569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (13))){
var inst_35894 = (state_35943[(10)]);
var inst_35897 = cljs.core.chunked_seq_QMARK_(inst_35894);
var state_35943__$1 = state_35943;
if(inst_35897){
var statearr_35970_37574 = state_35943__$1;
(statearr_35970_37574[(1)] = (16));

} else {
var statearr_35971_37575 = state_35943__$1;
(statearr_35971_37575[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (22))){
var inst_35927 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
if(cljs.core.truth_(inst_35927)){
var statearr_35974_37578 = state_35943__$1;
(statearr_35974_37578[(1)] = (23));

} else {
var statearr_35976_37579 = state_35943__$1;
(statearr_35976_37579[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (6))){
var inst_35921 = (state_35943[(7)]);
var inst_35869 = (state_35943[(8)]);
var inst_35923 = (state_35943[(11)]);
var inst_35921__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35869) : topic_fn.call(null,inst_35869));
var inst_35922 = cljs.core.deref(mults);
var inst_35923__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35922,inst_35921__$1);
var state_35943__$1 = (function (){var statearr_35977 = state_35943;
(statearr_35977[(7)] = inst_35921__$1);

(statearr_35977[(11)] = inst_35923__$1);

return statearr_35977;
})();
if(cljs.core.truth_(inst_35923__$1)){
var statearr_35978_37587 = state_35943__$1;
(statearr_35978_37587[(1)] = (19));

} else {
var statearr_35979_37588 = state_35943__$1;
(statearr_35979_37588[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (25))){
var inst_35933 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
var statearr_35980_37590 = state_35943__$1;
(statearr_35980_37590[(2)] = inst_35933);

(statearr_35980_37590[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (17))){
var inst_35894 = (state_35943[(10)]);
var inst_35905 = cljs.core.first(inst_35894);
var inst_35906 = cljs.core.async.muxch_STAR_(inst_35905);
var inst_35907 = cljs.core.async.close_BANG_(inst_35906);
var inst_35908 = cljs.core.next(inst_35894);
var inst_35879 = inst_35908;
var inst_35880 = null;
var inst_35881 = (0);
var inst_35882 = (0);
var state_35943__$1 = (function (){var statearr_35984 = state_35943;
(statearr_35984[(12)] = inst_35879);

(statearr_35984[(13)] = inst_35881);

(statearr_35984[(14)] = inst_35882);

(statearr_35984[(15)] = inst_35907);

(statearr_35984[(16)] = inst_35880);

return statearr_35984;
})();
var statearr_35985_37593 = state_35943__$1;
(statearr_35985_37593[(2)] = null);

(statearr_35985_37593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (3))){
var inst_35941 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35943__$1,inst_35941);
} else {
if((state_val_35944 === (12))){
var inst_35916 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
var statearr_35988_37594 = state_35943__$1;
(statearr_35988_37594[(2)] = inst_35916);

(statearr_35988_37594[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (2))){
var state_35943__$1 = state_35943;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35943__$1,(4),ch);
} else {
if((state_val_35944 === (23))){
var state_35943__$1 = state_35943;
var statearr_35990_37595 = state_35943__$1;
(statearr_35990_37595[(2)] = null);

(statearr_35990_37595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (19))){
var inst_35869 = (state_35943[(8)]);
var inst_35923 = (state_35943[(11)]);
var inst_35925 = cljs.core.async.muxch_STAR_(inst_35923);
var state_35943__$1 = state_35943;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35943__$1,(22),inst_35925,inst_35869);
} else {
if((state_val_35944 === (11))){
var inst_35879 = (state_35943[(12)]);
var inst_35894 = (state_35943[(10)]);
var inst_35894__$1 = cljs.core.seq(inst_35879);
var state_35943__$1 = (function (){var statearr_35994 = state_35943;
(statearr_35994[(10)] = inst_35894__$1);

return statearr_35994;
})();
if(inst_35894__$1){
var statearr_35995_37600 = state_35943__$1;
(statearr_35995_37600[(1)] = (13));

} else {
var statearr_35996_37601 = state_35943__$1;
(statearr_35996_37601[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (9))){
var inst_35918 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
var statearr_35997_37603 = state_35943__$1;
(statearr_35997_37603[(2)] = inst_35918);

(statearr_35997_37603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (5))){
var inst_35876 = cljs.core.deref(mults);
var inst_35877 = cljs.core.vals(inst_35876);
var inst_35878 = cljs.core.seq(inst_35877);
var inst_35879 = inst_35878;
var inst_35880 = null;
var inst_35881 = (0);
var inst_35882 = (0);
var state_35943__$1 = (function (){var statearr_36002 = state_35943;
(statearr_36002[(12)] = inst_35879);

(statearr_36002[(13)] = inst_35881);

(statearr_36002[(14)] = inst_35882);

(statearr_36002[(16)] = inst_35880);

return statearr_36002;
})();
var statearr_36005_37610 = state_35943__$1;
(statearr_36005_37610[(2)] = null);

(statearr_36005_37610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (14))){
var state_35943__$1 = state_35943;
var statearr_36010_37613 = state_35943__$1;
(statearr_36010_37613[(2)] = null);

(statearr_36010_37613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (16))){
var inst_35894 = (state_35943[(10)]);
var inst_35900 = cljs.core.chunk_first(inst_35894);
var inst_35901 = cljs.core.chunk_rest(inst_35894);
var inst_35902 = cljs.core.count(inst_35900);
var inst_35879 = inst_35901;
var inst_35880 = inst_35900;
var inst_35881 = inst_35902;
var inst_35882 = (0);
var state_35943__$1 = (function (){var statearr_36015 = state_35943;
(statearr_36015[(12)] = inst_35879);

(statearr_36015[(13)] = inst_35881);

(statearr_36015[(14)] = inst_35882);

(statearr_36015[(16)] = inst_35880);

return statearr_36015;
})();
var statearr_36017_37624 = state_35943__$1;
(statearr_36017_37624[(2)] = null);

(statearr_36017_37624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (10))){
var inst_35879 = (state_35943[(12)]);
var inst_35881 = (state_35943[(13)]);
var inst_35882 = (state_35943[(14)]);
var inst_35880 = (state_35943[(16)]);
var inst_35887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35880,inst_35882);
var inst_35888 = cljs.core.async.muxch_STAR_(inst_35887);
var inst_35889 = cljs.core.async.close_BANG_(inst_35888);
var inst_35890 = (inst_35882 + (1));
var tmp36007 = inst_35879;
var tmp36008 = inst_35881;
var tmp36009 = inst_35880;
var inst_35879__$1 = tmp36007;
var inst_35880__$1 = tmp36009;
var inst_35881__$1 = tmp36008;
var inst_35882__$1 = inst_35890;
var state_35943__$1 = (function (){var statearr_36022 = state_35943;
(statearr_36022[(12)] = inst_35879__$1);

(statearr_36022[(13)] = inst_35881__$1);

(statearr_36022[(17)] = inst_35889);

(statearr_36022[(14)] = inst_35882__$1);

(statearr_36022[(16)] = inst_35880__$1);

return statearr_36022;
})();
var statearr_36026_37634 = state_35943__$1;
(statearr_36026_37634[(2)] = null);

(statearr_36026_37634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (18))){
var inst_35911 = (state_35943[(2)]);
var state_35943__$1 = state_35943;
var statearr_36028_37638 = state_35943__$1;
(statearr_36028_37638[(2)] = inst_35911);

(statearr_36028_37638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35944 === (8))){
var inst_35881 = (state_35943[(13)]);
var inst_35882 = (state_35943[(14)]);
var inst_35884 = (inst_35882 < inst_35881);
var inst_35885 = inst_35884;
var state_35943__$1 = state_35943;
if(cljs.core.truth_(inst_35885)){
var statearr_36032_37642 = state_35943__$1;
(statearr_36032_37642[(1)] = (10));

} else {
var statearr_36033_37643 = state_35943__$1;
(statearr_36033_37643[(1)] = (11));

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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35943){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35943);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36035){if((e36035 instanceof Object)){
var ex__34210__auto__ = e36035;
var statearr_36036_37654 = state_35943;
(statearr_36036_37654[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36035;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37656 = state_35943;
state_35943 = G__37656;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36040 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36040[(6)] = c__34274__auto___37550);

return statearr_36040;
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
var c__34274__auto___37691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36098){
var state_val_36099 = (state_36098[(1)]);
if((state_val_36099 === (7))){
var state_36098__$1 = state_36098;
var statearr_36103_37701 = state_36098__$1;
(statearr_36103_37701[(2)] = null);

(statearr_36103_37701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36099 === (1))){
var state_36098__$1 = state_36098;
var statearr_36104_37704 = state_36098__$1;
(statearr_36104_37704[(2)] = null);

(statearr_36104_37704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36099 === (4))){
var inst_36058 = (state_36098[(7)]);
var inst_36060 = (inst_36058 < cnt);
var state_36098__$1 = state_36098;
if(cljs.core.truth_(inst_36060)){
var statearr_36106_37707 = state_36098__$1;
(statearr_36106_37707[(1)] = (6));

} else {
var statearr_36107_37708 = state_36098__$1;
(statearr_36107_37708[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36099 === (15))){
var inst_36094 = (state_36098[(2)]);
var state_36098__$1 = state_36098;
var statearr_36108_37713 = state_36098__$1;
(statearr_36108_37713[(2)] = inst_36094);

(statearr_36108_37713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36099 === (13))){
var inst_36087 = cljs.core.async.close_BANG_(out);
var state_36098__$1 = state_36098;
var statearr_36109_37718 = state_36098__$1;
(statearr_36109_37718[(2)] = inst_36087);

(statearr_36109_37718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36099 === (6))){
var state_36098__$1 = state_36098;
var statearr_36111_37720 = state_36098__$1;
(statearr_36111_37720[(2)] = null);

(statearr_36111_37720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36099 === (3))){
var inst_36096 = (state_36098[(2)]);
var state_36098__$1 = state_36098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36098__$1,inst_36096);
} else {
if((state_val_36099 === (12))){
var inst_36084 = (state_36098[(8)]);
var inst_36084__$1 = (state_36098[(2)]);
var inst_36085 = cljs.core.some(cljs.core.nil_QMARK_,inst_36084__$1);
var state_36098__$1 = (function (){var statearr_36119 = state_36098;
(statearr_36119[(8)] = inst_36084__$1);

return statearr_36119;
})();
if(cljs.core.truth_(inst_36085)){
var statearr_36121_37732 = state_36098__$1;
(statearr_36121_37732[(1)] = (13));

} else {
var statearr_36122_37733 = state_36098__$1;
(statearr_36122_37733[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36099 === (2))){
var inst_36057 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36058 = (0);
var state_36098__$1 = (function (){var statearr_36127 = state_36098;
(statearr_36127[(7)] = inst_36058);

(statearr_36127[(9)] = inst_36057);

return statearr_36127;
})();
var statearr_36128_37736 = state_36098__$1;
(statearr_36128_37736[(2)] = null);

(statearr_36128_37736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36099 === (11))){
var inst_36058 = (state_36098[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36098,(10),Object,null,(9));
var inst_36069 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36058) : chs__$1.call(null,inst_36058));
var inst_36070 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36058) : done.call(null,inst_36058));
var inst_36071 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36069,inst_36070);
var state_36098__$1 = state_36098;
var statearr_36129_37745 = state_36098__$1;
(statearr_36129_37745[(2)] = inst_36071);


cljs.core.async.impl.ioc_helpers.process_exception(state_36098__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36099 === (9))){
var inst_36058 = (state_36098[(7)]);
var inst_36074 = (state_36098[(2)]);
var inst_36075 = (inst_36058 + (1));
var inst_36058__$1 = inst_36075;
var state_36098__$1 = (function (){var statearr_36130 = state_36098;
(statearr_36130[(7)] = inst_36058__$1);

(statearr_36130[(10)] = inst_36074);

return statearr_36130;
})();
var statearr_36131_37749 = state_36098__$1;
(statearr_36131_37749[(2)] = null);

(statearr_36131_37749[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36099 === (5))){
var inst_36081 = (state_36098[(2)]);
var state_36098__$1 = (function (){var statearr_36132 = state_36098;
(statearr_36132[(11)] = inst_36081);

return statearr_36132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36098__$1,(12),dchan);
} else {
if((state_val_36099 === (14))){
var inst_36084 = (state_36098[(8)]);
var inst_36089 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36084);
var state_36098__$1 = state_36098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36098__$1,(16),out,inst_36089);
} else {
if((state_val_36099 === (16))){
var inst_36091 = (state_36098[(2)]);
var state_36098__$1 = (function (){var statearr_36133 = state_36098;
(statearr_36133[(12)] = inst_36091);

return statearr_36133;
})();
var statearr_36134_37758 = state_36098__$1;
(statearr_36134_37758[(2)] = null);

(statearr_36134_37758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36099 === (10))){
var inst_36063 = (state_36098[(2)]);
var inst_36064 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36098__$1 = (function (){var statearr_36135 = state_36098;
(statearr_36135[(13)] = inst_36063);

return statearr_36135;
})();
var statearr_36136_37760 = state_36098__$1;
(statearr_36136_37760[(2)] = inst_36064);


cljs.core.async.impl.ioc_helpers.process_exception(state_36098__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36099 === (8))){
var inst_36079 = (state_36098[(2)]);
var state_36098__$1 = state_36098;
var statearr_36137_37761 = state_36098__$1;
(statearr_36137_37761[(2)] = inst_36079);

(statearr_36137_37761[(1)] = (5));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36098){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36098);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36139){if((e36139 instanceof Object)){
var ex__34210__auto__ = e36139;
var statearr_36140_37764 = state_36098;
(statearr_36140_37764[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36139;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37766 = state_36098;
state_36098 = G__37766;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36141 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36141[(6)] = c__34274__auto___37691);

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
var G__36148 = arguments.length;
switch (G__36148) {
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
var c__34274__auto___37773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36180){
var state_val_36181 = (state_36180[(1)]);
if((state_val_36181 === (7))){
var inst_36160 = (state_36180[(7)]);
var inst_36159 = (state_36180[(8)]);
var inst_36159__$1 = (state_36180[(2)]);
var inst_36160__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36159__$1,(0),null);
var inst_36161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36159__$1,(1),null);
var inst_36162 = (inst_36160__$1 == null);
var state_36180__$1 = (function (){var statearr_36182 = state_36180;
(statearr_36182[(7)] = inst_36160__$1);

(statearr_36182[(9)] = inst_36161);

(statearr_36182[(8)] = inst_36159__$1);

return statearr_36182;
})();
if(cljs.core.truth_(inst_36162)){
var statearr_36183_37778 = state_36180__$1;
(statearr_36183_37778[(1)] = (8));

} else {
var statearr_36184_37779 = state_36180__$1;
(statearr_36184_37779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (1))){
var inst_36149 = cljs.core.vec(chs);
var inst_36150 = inst_36149;
var state_36180__$1 = (function (){var statearr_36185 = state_36180;
(statearr_36185[(10)] = inst_36150);

return statearr_36185;
})();
var statearr_36186_37780 = state_36180__$1;
(statearr_36186_37780[(2)] = null);

(statearr_36186_37780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (4))){
var inst_36150 = (state_36180[(10)]);
var state_36180__$1 = state_36180;
return cljs.core.async.ioc_alts_BANG_(state_36180__$1,(7),inst_36150);
} else {
if((state_val_36181 === (6))){
var inst_36176 = (state_36180[(2)]);
var state_36180__$1 = state_36180;
var statearr_36190_37782 = state_36180__$1;
(statearr_36190_37782[(2)] = inst_36176);

(statearr_36190_37782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (3))){
var inst_36178 = (state_36180[(2)]);
var state_36180__$1 = state_36180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36180__$1,inst_36178);
} else {
if((state_val_36181 === (2))){
var inst_36150 = (state_36180[(10)]);
var inst_36152 = cljs.core.count(inst_36150);
var inst_36153 = (inst_36152 > (0));
var state_36180__$1 = state_36180;
if(cljs.core.truth_(inst_36153)){
var statearr_36192_37784 = state_36180__$1;
(statearr_36192_37784[(1)] = (4));

} else {
var statearr_36193_37788 = state_36180__$1;
(statearr_36193_37788[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (11))){
var inst_36150 = (state_36180[(10)]);
var inst_36169 = (state_36180[(2)]);
var tmp36191 = inst_36150;
var inst_36150__$1 = tmp36191;
var state_36180__$1 = (function (){var statearr_36196 = state_36180;
(statearr_36196[(10)] = inst_36150__$1);

(statearr_36196[(11)] = inst_36169);

return statearr_36196;
})();
var statearr_36198_37794 = state_36180__$1;
(statearr_36198_37794[(2)] = null);

(statearr_36198_37794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (9))){
var inst_36160 = (state_36180[(7)]);
var state_36180__$1 = state_36180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36180__$1,(11),out,inst_36160);
} else {
if((state_val_36181 === (5))){
var inst_36174 = cljs.core.async.close_BANG_(out);
var state_36180__$1 = state_36180;
var statearr_36203_37799 = state_36180__$1;
(statearr_36203_37799[(2)] = inst_36174);

(statearr_36203_37799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (10))){
var inst_36172 = (state_36180[(2)]);
var state_36180__$1 = state_36180;
var statearr_36204_37800 = state_36180__$1;
(statearr_36204_37800[(2)] = inst_36172);

(statearr_36204_37800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (8))){
var inst_36150 = (state_36180[(10)]);
var inst_36160 = (state_36180[(7)]);
var inst_36161 = (state_36180[(9)]);
var inst_36159 = (state_36180[(8)]);
var inst_36164 = (function (){var cs = inst_36150;
var vec__36155 = inst_36159;
var v = inst_36160;
var c = inst_36161;
return (function (p1__36142_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36142_SHARP_);
});
})();
var inst_36165 = cljs.core.filterv(inst_36164,inst_36150);
var inst_36150__$1 = inst_36165;
var state_36180__$1 = (function (){var statearr_36205 = state_36180;
(statearr_36205[(10)] = inst_36150__$1);

return statearr_36205;
})();
var statearr_36206_37806 = state_36180__$1;
(statearr_36206_37806[(2)] = null);

(statearr_36206_37806[(1)] = (2));


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
var statearr_36207 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36207[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36207[(1)] = (1));

return statearr_36207;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36180){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36180);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36208){if((e36208 instanceof Object)){
var ex__34210__auto__ = e36208;
var statearr_36211_37816 = state_36180;
(statearr_36211_37816[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37818 = state_36180;
state_36180 = G__37818;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36212 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36212[(6)] = c__34274__auto___37773);

return statearr_36212;
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
var G__36221 = arguments.length;
switch (G__36221) {
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
var c__34274__auto___37834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36259){
var state_val_36260 = (state_36259[(1)]);
if((state_val_36260 === (7))){
var inst_36240 = (state_36259[(7)]);
var inst_36240__$1 = (state_36259[(2)]);
var inst_36242 = (inst_36240__$1 == null);
var inst_36243 = cljs.core.not(inst_36242);
var state_36259__$1 = (function (){var statearr_36261 = state_36259;
(statearr_36261[(7)] = inst_36240__$1);

return statearr_36261;
})();
if(inst_36243){
var statearr_36262_37838 = state_36259__$1;
(statearr_36262_37838[(1)] = (8));

} else {
var statearr_36263_37839 = state_36259__$1;
(statearr_36263_37839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (1))){
var inst_36230 = (0);
var state_36259__$1 = (function (){var statearr_36265 = state_36259;
(statearr_36265[(8)] = inst_36230);

return statearr_36265;
})();
var statearr_36266_37845 = state_36259__$1;
(statearr_36266_37845[(2)] = null);

(statearr_36266_37845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (4))){
var state_36259__$1 = state_36259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36259__$1,(7),ch);
} else {
if((state_val_36260 === (6))){
var inst_36254 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36268_37850 = state_36259__$1;
(statearr_36268_37850[(2)] = inst_36254);

(statearr_36268_37850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (3))){
var inst_36256 = (state_36259[(2)]);
var inst_36257 = cljs.core.async.close_BANG_(out);
var state_36259__$1 = (function (){var statearr_36270 = state_36259;
(statearr_36270[(9)] = inst_36256);

return statearr_36270;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36259__$1,inst_36257);
} else {
if((state_val_36260 === (2))){
var inst_36230 = (state_36259[(8)]);
var inst_36232 = (inst_36230 < n);
var state_36259__$1 = state_36259;
if(cljs.core.truth_(inst_36232)){
var statearr_36273_37853 = state_36259__$1;
(statearr_36273_37853[(1)] = (4));

} else {
var statearr_36274_37854 = state_36259__$1;
(statearr_36274_37854[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (11))){
var inst_36230 = (state_36259[(8)]);
var inst_36246 = (state_36259[(2)]);
var inst_36247 = (inst_36230 + (1));
var inst_36230__$1 = inst_36247;
var state_36259__$1 = (function (){var statearr_36275 = state_36259;
(statearr_36275[(10)] = inst_36246);

(statearr_36275[(8)] = inst_36230__$1);

return statearr_36275;
})();
var statearr_36276_37863 = state_36259__$1;
(statearr_36276_37863[(2)] = null);

(statearr_36276_37863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (9))){
var state_36259__$1 = state_36259;
var statearr_36277_37865 = state_36259__$1;
(statearr_36277_37865[(2)] = null);

(statearr_36277_37865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (5))){
var state_36259__$1 = state_36259;
var statearr_36280_37867 = state_36259__$1;
(statearr_36280_37867[(2)] = null);

(statearr_36280_37867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (10))){
var inst_36251 = (state_36259[(2)]);
var state_36259__$1 = state_36259;
var statearr_36281_37868 = state_36259__$1;
(statearr_36281_37868[(2)] = inst_36251);

(statearr_36281_37868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36260 === (8))){
var inst_36240 = (state_36259[(7)]);
var state_36259__$1 = state_36259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36259__$1,(11),out,inst_36240);
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
var statearr_36282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36282[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36282[(1)] = (1));

return statearr_36282;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36259){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36259);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36285){if((e36285 instanceof Object)){
var ex__34210__auto__ = e36285;
var statearr_36286_37879 = state_36259;
(statearr_36286_37879[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37881 = state_36259;
state_36259 = G__37881;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36287 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36287[(6)] = c__34274__auto___37834);

return statearr_36287;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36293 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36293 = (function (f,ch,meta36294){
this.f = f;
this.ch = ch;
this.meta36294 = meta36294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36295,meta36294__$1){
var self__ = this;
var _36295__$1 = this;
return (new cljs.core.async.t_cljs$core$async36293(self__.f,self__.ch,meta36294__$1));
}));

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36295){
var self__ = this;
var _36295__$1 = this;
return self__.meta36294;
}));

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36306 = (function (f,ch,meta36294,_,fn1,meta36307){
this.f = f;
this.ch = ch;
this.meta36294 = meta36294;
this._ = _;
this.fn1 = fn1;
this.meta36307 = meta36307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36308,meta36307__$1){
var self__ = this;
var _36308__$1 = this;
return (new cljs.core.async.t_cljs$core$async36306(self__.f,self__.ch,self__.meta36294,self__._,self__.fn1,meta36307__$1));
}));

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36308){
var self__ = this;
var _36308__$1 = this;
return self__.meta36307;
}));

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36290_SHARP_){
var G__36314 = (((p1__36290_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36290_SHARP_) : self__.f.call(null,p1__36290_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36314) : f1.call(null,G__36314));
});
}));

(cljs.core.async.t_cljs$core$async36306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36294","meta36294",1936540444,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36293","cljs.core.async/t_cljs$core$async36293",246317326,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36307","meta36307",348116198,null)], null);
}));

(cljs.core.async.t_cljs$core$async36306.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36306");

(cljs.core.async.t_cljs$core$async36306.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36306");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36306.
 */
cljs.core.async.__GT_t_cljs$core$async36306 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36306(f__$1,ch__$1,meta36294__$1,___$2,fn1__$1,meta36307){
return (new cljs.core.async.t_cljs$core$async36306(f__$1,ch__$1,meta36294__$1,___$2,fn1__$1,meta36307));
});

}

return (new cljs.core.async.t_cljs$core$async36306(self__.f,self__.ch,self__.meta36294,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36317 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36317) : self__.f.call(null,G__36317));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36293.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36294","meta36294",1936540444,null)], null);
}));

(cljs.core.async.t_cljs$core$async36293.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36293");

(cljs.core.async.t_cljs$core$async36293.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36293");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36293.
 */
cljs.core.async.__GT_t_cljs$core$async36293 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36293(f__$1,ch__$1,meta36294){
return (new cljs.core.async.t_cljs$core$async36293(f__$1,ch__$1,meta36294));
});

}

return (new cljs.core.async.t_cljs$core$async36293(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36330 = (function (f,ch,meta36331){
this.f = f;
this.ch = ch;
this.meta36331 = meta36331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36332,meta36331__$1){
var self__ = this;
var _36332__$1 = this;
return (new cljs.core.async.t_cljs$core$async36330(self__.f,self__.ch,meta36331__$1));
}));

(cljs.core.async.t_cljs$core$async36330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36332){
var self__ = this;
var _36332__$1 = this;
return self__.meta36331;
}));

(cljs.core.async.t_cljs$core$async36330.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36330.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36330.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36331","meta36331",758452791,null)], null);
}));

(cljs.core.async.t_cljs$core$async36330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36330");

(cljs.core.async.t_cljs$core$async36330.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36330.
 */
cljs.core.async.__GT_t_cljs$core$async36330 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36330(f__$1,ch__$1,meta36331){
return (new cljs.core.async.t_cljs$core$async36330(f__$1,ch__$1,meta36331));
});

}

return (new cljs.core.async.t_cljs$core$async36330(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36342 = (function (p,ch,meta36343){
this.p = p;
this.ch = ch;
this.meta36343 = meta36343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36344,meta36343__$1){
var self__ = this;
var _36344__$1 = this;
return (new cljs.core.async.t_cljs$core$async36342(self__.p,self__.ch,meta36343__$1));
}));

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36344){
var self__ = this;
var _36344__$1 = this;
return self__.meta36343;
}));

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36343","meta36343",2142020441,null)], null);
}));

(cljs.core.async.t_cljs$core$async36342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36342");

(cljs.core.async.t_cljs$core$async36342.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36342.
 */
cljs.core.async.__GT_t_cljs$core$async36342 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36342(p__$1,ch__$1,meta36343){
return (new cljs.core.async.t_cljs$core$async36342(p__$1,ch__$1,meta36343));
});

}

return (new cljs.core.async.t_cljs$core$async36342(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36361 = arguments.length;
switch (G__36361) {
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
var c__34274__auto___37961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36387){
var state_val_36388 = (state_36387[(1)]);
if((state_val_36388 === (7))){
var inst_36383 = (state_36387[(2)]);
var state_36387__$1 = state_36387;
var statearr_36389_37965 = state_36387__$1;
(statearr_36389_37965[(2)] = inst_36383);

(statearr_36389_37965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (1))){
var state_36387__$1 = state_36387;
var statearr_36392_37966 = state_36387__$1;
(statearr_36392_37966[(2)] = null);

(statearr_36392_37966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (4))){
var inst_36366 = (state_36387[(7)]);
var inst_36366__$1 = (state_36387[(2)]);
var inst_36367 = (inst_36366__$1 == null);
var state_36387__$1 = (function (){var statearr_36393 = state_36387;
(statearr_36393[(7)] = inst_36366__$1);

return statearr_36393;
})();
if(cljs.core.truth_(inst_36367)){
var statearr_36394_37973 = state_36387__$1;
(statearr_36394_37973[(1)] = (5));

} else {
var statearr_36395_37974 = state_36387__$1;
(statearr_36395_37974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (6))){
var inst_36366 = (state_36387[(7)]);
var inst_36373 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36366) : p.call(null,inst_36366));
var state_36387__$1 = state_36387;
if(cljs.core.truth_(inst_36373)){
var statearr_36397_37981 = state_36387__$1;
(statearr_36397_37981[(1)] = (8));

} else {
var statearr_36398_37982 = state_36387__$1;
(statearr_36398_37982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (3))){
var inst_36385 = (state_36387[(2)]);
var state_36387__$1 = state_36387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36387__$1,inst_36385);
} else {
if((state_val_36388 === (2))){
var state_36387__$1 = state_36387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36387__$1,(4),ch);
} else {
if((state_val_36388 === (11))){
var inst_36377 = (state_36387[(2)]);
var state_36387__$1 = state_36387;
var statearr_36405_37986 = state_36387__$1;
(statearr_36405_37986[(2)] = inst_36377);

(statearr_36405_37986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (9))){
var state_36387__$1 = state_36387;
var statearr_36408_37989 = state_36387__$1;
(statearr_36408_37989[(2)] = null);

(statearr_36408_37989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (5))){
var inst_36369 = cljs.core.async.close_BANG_(out);
var state_36387__$1 = state_36387;
var statearr_36411_37990 = state_36387__$1;
(statearr_36411_37990[(2)] = inst_36369);

(statearr_36411_37990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (10))){
var inst_36380 = (state_36387[(2)]);
var state_36387__$1 = (function (){var statearr_36412 = state_36387;
(statearr_36412[(8)] = inst_36380);

return statearr_36412;
})();
var statearr_36413_37992 = state_36387__$1;
(statearr_36413_37992[(2)] = null);

(statearr_36413_37992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (8))){
var inst_36366 = (state_36387[(7)]);
var state_36387__$1 = state_36387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36387__$1,(11),out,inst_36366);
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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36387){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36387);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36415){if((e36415 instanceof Object)){
var ex__34210__auto__ = e36415;
var statearr_36416_37997 = state_36387;
(statearr_36416_37997[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36415;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37999 = state_36387;
state_36387 = G__37999;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36419 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36419[(6)] = c__34274__auto___37961);

return statearr_36419;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36492){
var state_val_36493 = (state_36492[(1)]);
if((state_val_36493 === (7))){
var inst_36488 = (state_36492[(2)]);
var state_36492__$1 = state_36492;
var statearr_36494_38010 = state_36492__$1;
(statearr_36494_38010[(2)] = inst_36488);

(statearr_36494_38010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (20))){
var inst_36458 = (state_36492[(7)]);
var inst_36469 = (state_36492[(2)]);
var inst_36470 = cljs.core.next(inst_36458);
var inst_36442 = inst_36470;
var inst_36444 = null;
var inst_36445 = (0);
var inst_36446 = (0);
var state_36492__$1 = (function (){var statearr_36495 = state_36492;
(statearr_36495[(8)] = inst_36442);

(statearr_36495[(9)] = inst_36445);

(statearr_36495[(10)] = inst_36444);

(statearr_36495[(11)] = inst_36446);

(statearr_36495[(12)] = inst_36469);

return statearr_36495;
})();
var statearr_36501_38013 = state_36492__$1;
(statearr_36501_38013[(2)] = null);

(statearr_36501_38013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (1))){
var state_36492__$1 = state_36492;
var statearr_36504_38015 = state_36492__$1;
(statearr_36504_38015[(2)] = null);

(statearr_36504_38015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (4))){
var inst_36430 = (state_36492[(13)]);
var inst_36430__$1 = (state_36492[(2)]);
var inst_36431 = (inst_36430__$1 == null);
var state_36492__$1 = (function (){var statearr_36505 = state_36492;
(statearr_36505[(13)] = inst_36430__$1);

return statearr_36505;
})();
if(cljs.core.truth_(inst_36431)){
var statearr_36506_38016 = state_36492__$1;
(statearr_36506_38016[(1)] = (5));

} else {
var statearr_36508_38017 = state_36492__$1;
(statearr_36508_38017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (15))){
var state_36492__$1 = state_36492;
var statearr_36512_38019 = state_36492__$1;
(statearr_36512_38019[(2)] = null);

(statearr_36512_38019[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (21))){
var state_36492__$1 = state_36492;
var statearr_36513_38022 = state_36492__$1;
(statearr_36513_38022[(2)] = null);

(statearr_36513_38022[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (13))){
var inst_36442 = (state_36492[(8)]);
var inst_36445 = (state_36492[(9)]);
var inst_36444 = (state_36492[(10)]);
var inst_36446 = (state_36492[(11)]);
var inst_36454 = (state_36492[(2)]);
var inst_36455 = (inst_36446 + (1));
var tmp36509 = inst_36442;
var tmp36510 = inst_36445;
var tmp36511 = inst_36444;
var inst_36442__$1 = tmp36509;
var inst_36444__$1 = tmp36511;
var inst_36445__$1 = tmp36510;
var inst_36446__$1 = inst_36455;
var state_36492__$1 = (function (){var statearr_36518 = state_36492;
(statearr_36518[(8)] = inst_36442__$1);

(statearr_36518[(9)] = inst_36445__$1);

(statearr_36518[(10)] = inst_36444__$1);

(statearr_36518[(11)] = inst_36446__$1);

(statearr_36518[(14)] = inst_36454);

return statearr_36518;
})();
var statearr_36525_38025 = state_36492__$1;
(statearr_36525_38025[(2)] = null);

(statearr_36525_38025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (22))){
var state_36492__$1 = state_36492;
var statearr_36526_38026 = state_36492__$1;
(statearr_36526_38026[(2)] = null);

(statearr_36526_38026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (6))){
var inst_36430 = (state_36492[(13)]);
var inst_36439 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36430) : f.call(null,inst_36430));
var inst_36440 = cljs.core.seq(inst_36439);
var inst_36442 = inst_36440;
var inst_36444 = null;
var inst_36445 = (0);
var inst_36446 = (0);
var state_36492__$1 = (function (){var statearr_36527 = state_36492;
(statearr_36527[(8)] = inst_36442);

(statearr_36527[(9)] = inst_36445);

(statearr_36527[(10)] = inst_36444);

(statearr_36527[(11)] = inst_36446);

return statearr_36527;
})();
var statearr_36529_38030 = state_36492__$1;
(statearr_36529_38030[(2)] = null);

(statearr_36529_38030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (17))){
var inst_36458 = (state_36492[(7)]);
var inst_36462 = cljs.core.chunk_first(inst_36458);
var inst_36463 = cljs.core.chunk_rest(inst_36458);
var inst_36464 = cljs.core.count(inst_36462);
var inst_36442 = inst_36463;
var inst_36444 = inst_36462;
var inst_36445 = inst_36464;
var inst_36446 = (0);
var state_36492__$1 = (function (){var statearr_36536 = state_36492;
(statearr_36536[(8)] = inst_36442);

(statearr_36536[(9)] = inst_36445);

(statearr_36536[(10)] = inst_36444);

(statearr_36536[(11)] = inst_36446);

return statearr_36536;
})();
var statearr_36539_38035 = state_36492__$1;
(statearr_36539_38035[(2)] = null);

(statearr_36539_38035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (3))){
var inst_36490 = (state_36492[(2)]);
var state_36492__$1 = state_36492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36492__$1,inst_36490);
} else {
if((state_val_36493 === (12))){
var inst_36478 = (state_36492[(2)]);
var state_36492__$1 = state_36492;
var statearr_36541_38036 = state_36492__$1;
(statearr_36541_38036[(2)] = inst_36478);

(statearr_36541_38036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (2))){
var state_36492__$1 = state_36492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36492__$1,(4),in$);
} else {
if((state_val_36493 === (23))){
var inst_36486 = (state_36492[(2)]);
var state_36492__$1 = state_36492;
var statearr_36542_38037 = state_36492__$1;
(statearr_36542_38037[(2)] = inst_36486);

(statearr_36542_38037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (19))){
var inst_36473 = (state_36492[(2)]);
var state_36492__$1 = state_36492;
var statearr_36545_38038 = state_36492__$1;
(statearr_36545_38038[(2)] = inst_36473);

(statearr_36545_38038[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (11))){
var inst_36442 = (state_36492[(8)]);
var inst_36458 = (state_36492[(7)]);
var inst_36458__$1 = cljs.core.seq(inst_36442);
var state_36492__$1 = (function (){var statearr_36546 = state_36492;
(statearr_36546[(7)] = inst_36458__$1);

return statearr_36546;
})();
if(inst_36458__$1){
var statearr_36547_38039 = state_36492__$1;
(statearr_36547_38039[(1)] = (14));

} else {
var statearr_36548_38040 = state_36492__$1;
(statearr_36548_38040[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (9))){
var inst_36480 = (state_36492[(2)]);
var inst_36481 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36492__$1 = (function (){var statearr_36551 = state_36492;
(statearr_36551[(15)] = inst_36480);

return statearr_36551;
})();
if(cljs.core.truth_(inst_36481)){
var statearr_36553_38042 = state_36492__$1;
(statearr_36553_38042[(1)] = (21));

} else {
var statearr_36554_38043 = state_36492__$1;
(statearr_36554_38043[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (5))){
var inst_36433 = cljs.core.async.close_BANG_(out);
var state_36492__$1 = state_36492;
var statearr_36556_38044 = state_36492__$1;
(statearr_36556_38044[(2)] = inst_36433);

(statearr_36556_38044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (14))){
var inst_36458 = (state_36492[(7)]);
var inst_36460 = cljs.core.chunked_seq_QMARK_(inst_36458);
var state_36492__$1 = state_36492;
if(inst_36460){
var statearr_36561_38049 = state_36492__$1;
(statearr_36561_38049[(1)] = (17));

} else {
var statearr_36563_38050 = state_36492__$1;
(statearr_36563_38050[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (16))){
var inst_36476 = (state_36492[(2)]);
var state_36492__$1 = state_36492;
var statearr_36564_38051 = state_36492__$1;
(statearr_36564_38051[(2)] = inst_36476);

(statearr_36564_38051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (10))){
var inst_36444 = (state_36492[(10)]);
var inst_36446 = (state_36492[(11)]);
var inst_36452 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36444,inst_36446);
var state_36492__$1 = state_36492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36492__$1,(13),out,inst_36452);
} else {
if((state_val_36493 === (18))){
var inst_36458 = (state_36492[(7)]);
var inst_36467 = cljs.core.first(inst_36458);
var state_36492__$1 = state_36492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36492__$1,(20),out,inst_36467);
} else {
if((state_val_36493 === (8))){
var inst_36445 = (state_36492[(9)]);
var inst_36446 = (state_36492[(11)]);
var inst_36449 = (inst_36446 < inst_36445);
var inst_36450 = inst_36449;
var state_36492__$1 = state_36492;
if(cljs.core.truth_(inst_36450)){
var statearr_36566_38052 = state_36492__$1;
(statearr_36566_38052[(1)] = (10));

} else {
var statearr_36567_38053 = state_36492__$1;
(statearr_36567_38053[(1)] = (11));

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
var statearr_36569 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36569[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36569[(1)] = (1));

return statearr_36569;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36492){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36492);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36570){if((e36570 instanceof Object)){
var ex__34210__auto__ = e36570;
var statearr_36573_38056 = state_36492;
(statearr_36573_38056[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38059 = state_36492;
state_36492 = G__38059;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36492){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36576 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36576[(6)] = c__34274__auto__);

return statearr_36576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36579 = arguments.length;
switch (G__36579) {
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
var G__36583 = arguments.length;
switch (G__36583) {
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
var G__36587 = arguments.length;
switch (G__36587) {
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
var c__34274__auto___38073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36614){
var state_val_36615 = (state_36614[(1)]);
if((state_val_36615 === (7))){
var inst_36609 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
var statearr_36616_38074 = state_36614__$1;
(statearr_36616_38074[(2)] = inst_36609);

(statearr_36616_38074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (1))){
var inst_36590 = null;
var state_36614__$1 = (function (){var statearr_36618 = state_36614;
(statearr_36618[(7)] = inst_36590);

return statearr_36618;
})();
var statearr_36619_38076 = state_36614__$1;
(statearr_36619_38076[(2)] = null);

(statearr_36619_38076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (4))){
var inst_36593 = (state_36614[(8)]);
var inst_36593__$1 = (state_36614[(2)]);
var inst_36594 = (inst_36593__$1 == null);
var inst_36595 = cljs.core.not(inst_36594);
var state_36614__$1 = (function (){var statearr_36620 = state_36614;
(statearr_36620[(8)] = inst_36593__$1);

return statearr_36620;
})();
if(inst_36595){
var statearr_36621_38081 = state_36614__$1;
(statearr_36621_38081[(1)] = (5));

} else {
var statearr_36622_38082 = state_36614__$1;
(statearr_36622_38082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (6))){
var state_36614__$1 = state_36614;
var statearr_36623_38083 = state_36614__$1;
(statearr_36623_38083[(2)] = null);

(statearr_36623_38083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (3))){
var inst_36611 = (state_36614[(2)]);
var inst_36612 = cljs.core.async.close_BANG_(out);
var state_36614__$1 = (function (){var statearr_36625 = state_36614;
(statearr_36625[(9)] = inst_36611);

return statearr_36625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36614__$1,inst_36612);
} else {
if((state_val_36615 === (2))){
var state_36614__$1 = state_36614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36614__$1,(4),ch);
} else {
if((state_val_36615 === (11))){
var inst_36593 = (state_36614[(8)]);
var inst_36602 = (state_36614[(2)]);
var inst_36590 = inst_36593;
var state_36614__$1 = (function (){var statearr_36626 = state_36614;
(statearr_36626[(10)] = inst_36602);

(statearr_36626[(7)] = inst_36590);

return statearr_36626;
})();
var statearr_36628_38089 = state_36614__$1;
(statearr_36628_38089[(2)] = null);

(statearr_36628_38089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (9))){
var inst_36593 = (state_36614[(8)]);
var state_36614__$1 = state_36614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36614__$1,(11),out,inst_36593);
} else {
if((state_val_36615 === (5))){
var inst_36593 = (state_36614[(8)]);
var inst_36590 = (state_36614[(7)]);
var inst_36597 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36593,inst_36590);
var state_36614__$1 = state_36614;
if(inst_36597){
var statearr_36630_38090 = state_36614__$1;
(statearr_36630_38090[(1)] = (8));

} else {
var statearr_36631_38091 = state_36614__$1;
(statearr_36631_38091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (10))){
var inst_36606 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
var statearr_36632_38092 = state_36614__$1;
(statearr_36632_38092[(2)] = inst_36606);

(statearr_36632_38092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (8))){
var inst_36590 = (state_36614[(7)]);
var tmp36629 = inst_36590;
var inst_36590__$1 = tmp36629;
var state_36614__$1 = (function (){var statearr_36633 = state_36614;
(statearr_36633[(7)] = inst_36590__$1);

return statearr_36633;
})();
var statearr_36635_38094 = state_36614__$1;
(statearr_36635_38094[(2)] = null);

(statearr_36635_38094[(1)] = (2));


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
var statearr_36636 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36636[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36636[(1)] = (1));

return statearr_36636;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36614){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36614);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36637){if((e36637 instanceof Object)){
var ex__34210__auto__ = e36637;
var statearr_36638_38097 = state_36614;
(statearr_36638_38097[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38098 = state_36614;
state_36614 = G__38098;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36640 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36640[(6)] = c__34274__auto___38073);

return statearr_36640;
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
var G__36643 = arguments.length;
switch (G__36643) {
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
var c__34274__auto___38104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36683){
var state_val_36684 = (state_36683[(1)]);
if((state_val_36684 === (7))){
var inst_36679 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36686_38105 = state_36683__$1;
(statearr_36686_38105[(2)] = inst_36679);

(statearr_36686_38105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (1))){
var inst_36645 = (new Array(n));
var inst_36646 = inst_36645;
var inst_36647 = (0);
var state_36683__$1 = (function (){var statearr_36687 = state_36683;
(statearr_36687[(7)] = inst_36647);

(statearr_36687[(8)] = inst_36646);

return statearr_36687;
})();
var statearr_36689_38108 = state_36683__$1;
(statearr_36689_38108[(2)] = null);

(statearr_36689_38108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (4))){
var inst_36650 = (state_36683[(9)]);
var inst_36650__$1 = (state_36683[(2)]);
var inst_36651 = (inst_36650__$1 == null);
var inst_36652 = cljs.core.not(inst_36651);
var state_36683__$1 = (function (){var statearr_36690 = state_36683;
(statearr_36690[(9)] = inst_36650__$1);

return statearr_36690;
})();
if(inst_36652){
var statearr_36691_38109 = state_36683__$1;
(statearr_36691_38109[(1)] = (5));

} else {
var statearr_36693_38110 = state_36683__$1;
(statearr_36693_38110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (15))){
var inst_36672 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36694_38111 = state_36683__$1;
(statearr_36694_38111[(2)] = inst_36672);

(statearr_36694_38111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (13))){
var state_36683__$1 = state_36683;
var statearr_36695_38113 = state_36683__$1;
(statearr_36695_38113[(2)] = null);

(statearr_36695_38113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (6))){
var inst_36647 = (state_36683[(7)]);
var inst_36668 = (inst_36647 > (0));
var state_36683__$1 = state_36683;
if(cljs.core.truth_(inst_36668)){
var statearr_36697_38116 = state_36683__$1;
(statearr_36697_38116[(1)] = (12));

} else {
var statearr_36698_38117 = state_36683__$1;
(statearr_36698_38117[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (3))){
var inst_36681 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36683__$1,inst_36681);
} else {
if((state_val_36684 === (12))){
var inst_36646 = (state_36683[(8)]);
var inst_36670 = cljs.core.vec(inst_36646);
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36683__$1,(15),out,inst_36670);
} else {
if((state_val_36684 === (2))){
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36683__$1,(4),ch);
} else {
if((state_val_36684 === (11))){
var inst_36662 = (state_36683[(2)]);
var inst_36663 = (new Array(n));
var inst_36646 = inst_36663;
var inst_36647 = (0);
var state_36683__$1 = (function (){var statearr_36700 = state_36683;
(statearr_36700[(10)] = inst_36662);

(statearr_36700[(7)] = inst_36647);

(statearr_36700[(8)] = inst_36646);

return statearr_36700;
})();
var statearr_36702_38121 = state_36683__$1;
(statearr_36702_38121[(2)] = null);

(statearr_36702_38121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (9))){
var inst_36646 = (state_36683[(8)]);
var inst_36660 = cljs.core.vec(inst_36646);
var state_36683__$1 = state_36683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36683__$1,(11),out,inst_36660);
} else {
if((state_val_36684 === (5))){
var inst_36655 = (state_36683[(11)]);
var inst_36647 = (state_36683[(7)]);
var inst_36646 = (state_36683[(8)]);
var inst_36650 = (state_36683[(9)]);
var inst_36654 = (inst_36646[inst_36647] = inst_36650);
var inst_36655__$1 = (inst_36647 + (1));
var inst_36656 = (inst_36655__$1 < n);
var state_36683__$1 = (function (){var statearr_36704 = state_36683;
(statearr_36704[(11)] = inst_36655__$1);

(statearr_36704[(12)] = inst_36654);

return statearr_36704;
})();
if(cljs.core.truth_(inst_36656)){
var statearr_36705_38123 = state_36683__$1;
(statearr_36705_38123[(1)] = (8));

} else {
var statearr_36706_38125 = state_36683__$1;
(statearr_36706_38125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (14))){
var inst_36675 = (state_36683[(2)]);
var inst_36677 = cljs.core.async.close_BANG_(out);
var state_36683__$1 = (function (){var statearr_36708 = state_36683;
(statearr_36708[(13)] = inst_36675);

return statearr_36708;
})();
var statearr_36709_38127 = state_36683__$1;
(statearr_36709_38127[(2)] = inst_36677);

(statearr_36709_38127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (10))){
var inst_36666 = (state_36683[(2)]);
var state_36683__$1 = state_36683;
var statearr_36711_38128 = state_36683__$1;
(statearr_36711_38128[(2)] = inst_36666);

(statearr_36711_38128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36684 === (8))){
var inst_36655 = (state_36683[(11)]);
var inst_36646 = (state_36683[(8)]);
var tmp36707 = inst_36646;
var inst_36646__$1 = tmp36707;
var inst_36647 = inst_36655;
var state_36683__$1 = (function (){var statearr_36712 = state_36683;
(statearr_36712[(7)] = inst_36647);

(statearr_36712[(8)] = inst_36646__$1);

return statearr_36712;
})();
var statearr_36714_38131 = state_36683__$1;
(statearr_36714_38131[(2)] = null);

(statearr_36714_38131[(1)] = (2));


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
var statearr_36715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36715[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36715[(1)] = (1));

return statearr_36715;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36683){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36683);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36717){if((e36717 instanceof Object)){
var ex__34210__auto__ = e36717;
var statearr_36718_38133 = state_36683;
(statearr_36718_38133[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36717;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38135 = state_36683;
state_36683 = G__38135;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36719 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36719[(6)] = c__34274__auto___38104);

return statearr_36719;
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
var G__36721 = arguments.length;
switch (G__36721) {
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
var c__34274__auto___38141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36764){
var state_val_36765 = (state_36764[(1)]);
if((state_val_36765 === (7))){
var inst_36760 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36767_38143 = state_36764__$1;
(statearr_36767_38143[(2)] = inst_36760);

(statearr_36767_38143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (1))){
var inst_36722 = [];
var inst_36723 = inst_36722;
var inst_36724 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36764__$1 = (function (){var statearr_36768 = state_36764;
(statearr_36768[(7)] = inst_36723);

(statearr_36768[(8)] = inst_36724);

return statearr_36768;
})();
var statearr_36769_38144 = state_36764__$1;
(statearr_36769_38144[(2)] = null);

(statearr_36769_38144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (4))){
var inst_36727 = (state_36764[(9)]);
var inst_36727__$1 = (state_36764[(2)]);
var inst_36728 = (inst_36727__$1 == null);
var inst_36729 = cljs.core.not(inst_36728);
var state_36764__$1 = (function (){var statearr_36771 = state_36764;
(statearr_36771[(9)] = inst_36727__$1);

return statearr_36771;
})();
if(inst_36729){
var statearr_36772_38148 = state_36764__$1;
(statearr_36772_38148[(1)] = (5));

} else {
var statearr_36773_38149 = state_36764__$1;
(statearr_36773_38149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (15))){
var inst_36754 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36775_38150 = state_36764__$1;
(statearr_36775_38150[(2)] = inst_36754);

(statearr_36775_38150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (13))){
var state_36764__$1 = state_36764;
var statearr_36776_38151 = state_36764__$1;
(statearr_36776_38151[(2)] = null);

(statearr_36776_38151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (6))){
var inst_36723 = (state_36764[(7)]);
var inst_36748 = inst_36723.length;
var inst_36749 = (inst_36748 > (0));
var state_36764__$1 = state_36764;
if(cljs.core.truth_(inst_36749)){
var statearr_36778_38154 = state_36764__$1;
(statearr_36778_38154[(1)] = (12));

} else {
var statearr_36779_38156 = state_36764__$1;
(statearr_36779_38156[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (3))){
var inst_36762 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36764__$1,inst_36762);
} else {
if((state_val_36765 === (12))){
var inst_36723 = (state_36764[(7)]);
var inst_36752 = cljs.core.vec(inst_36723);
var state_36764__$1 = state_36764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36764__$1,(15),out,inst_36752);
} else {
if((state_val_36765 === (2))){
var state_36764__$1 = state_36764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36764__$1,(4),ch);
} else {
if((state_val_36765 === (11))){
var inst_36727 = (state_36764[(9)]);
var inst_36731 = (state_36764[(10)]);
var inst_36741 = (state_36764[(2)]);
var inst_36742 = [];
var inst_36743 = inst_36742.push(inst_36727);
var inst_36723 = inst_36742;
var inst_36724 = inst_36731;
var state_36764__$1 = (function (){var statearr_36781 = state_36764;
(statearr_36781[(11)] = inst_36741);

(statearr_36781[(12)] = inst_36743);

(statearr_36781[(7)] = inst_36723);

(statearr_36781[(8)] = inst_36724);

return statearr_36781;
})();
var statearr_36782_38160 = state_36764__$1;
(statearr_36782_38160[(2)] = null);

(statearr_36782_38160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (9))){
var inst_36723 = (state_36764[(7)]);
var inst_36739 = cljs.core.vec(inst_36723);
var state_36764__$1 = state_36764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36764__$1,(11),out,inst_36739);
} else {
if((state_val_36765 === (5))){
var inst_36727 = (state_36764[(9)]);
var inst_36731 = (state_36764[(10)]);
var inst_36724 = (state_36764[(8)]);
var inst_36731__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36727) : f.call(null,inst_36727));
var inst_36732 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36731__$1,inst_36724);
var inst_36733 = cljs.core.keyword_identical_QMARK_(inst_36724,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36734 = ((inst_36732) || (inst_36733));
var state_36764__$1 = (function (){var statearr_36784 = state_36764;
(statearr_36784[(10)] = inst_36731__$1);

return statearr_36784;
})();
if(cljs.core.truth_(inst_36734)){
var statearr_36785_38164 = state_36764__$1;
(statearr_36785_38164[(1)] = (8));

} else {
var statearr_36787_38165 = state_36764__$1;
(statearr_36787_38165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (14))){
var inst_36757 = (state_36764[(2)]);
var inst_36758 = cljs.core.async.close_BANG_(out);
var state_36764__$1 = (function (){var statearr_36789 = state_36764;
(statearr_36789[(13)] = inst_36757);

return statearr_36789;
})();
var statearr_36790_38166 = state_36764__$1;
(statearr_36790_38166[(2)] = inst_36758);

(statearr_36790_38166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (10))){
var inst_36746 = (state_36764[(2)]);
var state_36764__$1 = state_36764;
var statearr_36792_38169 = state_36764__$1;
(statearr_36792_38169[(2)] = inst_36746);

(statearr_36792_38169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36765 === (8))){
var inst_36727 = (state_36764[(9)]);
var inst_36731 = (state_36764[(10)]);
var inst_36723 = (state_36764[(7)]);
var inst_36736 = inst_36723.push(inst_36727);
var tmp36788 = inst_36723;
var inst_36723__$1 = tmp36788;
var inst_36724 = inst_36731;
var state_36764__$1 = (function (){var statearr_36793 = state_36764;
(statearr_36793[(14)] = inst_36736);

(statearr_36793[(7)] = inst_36723__$1);

(statearr_36793[(8)] = inst_36724);

return statearr_36793;
})();
var statearr_36794_38171 = state_36764__$1;
(statearr_36794_38171[(2)] = null);

(statearr_36794_38171[(1)] = (2));


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
var statearr_36796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36796[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36796[(1)] = (1));

return statearr_36796;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36764){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36764);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36798){if((e36798 instanceof Object)){
var ex__34210__auto__ = e36798;
var statearr_36799_38175 = state_36764;
(statearr_36799_38175[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38176 = state_36764;
state_36764 = G__38176;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36801 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36801[(6)] = c__34274__auto___38141);

return statearr_36801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
