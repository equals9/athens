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
var n__4666__auto___36841 = n;
var x_36842 = (0);
while(true){
if((x_36842 < n__4666__auto___36841)){
(a[x_36842] = x_36842);

var G__36843 = (x_36842 + (1));
x_36842 = G__36843;
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
var G__36852 = (i + (1));
i = G__36852;
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
var len__4789__auto___36854 = arguments.length;
var i__4790__auto___36855 = (0);
while(true){
if((i__4790__auto___36855 < len__4789__auto___36854)){
args__4795__auto__.push((arguments[i__4790__auto___36855]));

var G__36856 = (i__4790__auto___36855 + (1));
i__4790__auto___36855 = G__36856;
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
var c__34274__auto___36861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34411){
var state_val_34412 = (state_34411[(1)]);
if((state_val_34412 === (7))){
var inst_34407 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34422_36863 = state_34411__$1;
(statearr_34422_36863[(2)] = inst_34407);

(statearr_34422_36863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (1))){
var state_34411__$1 = state_34411;
var statearr_34423_36864 = state_34411__$1;
(statearr_34423_36864[(2)] = null);

(statearr_34423_36864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (4))){
var inst_34390 = (state_34411[(7)]);
var inst_34390__$1 = (state_34411[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34411__$1 = (function (){var statearr_34427 = state_34411;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36866 = state_34411__$1;
(statearr_34428_36866[(1)] = (5));

} else {
var statearr_34429_36867 = state_34411__$1;
(statearr_34429_36867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (13))){
var state_34411__$1 = state_34411;
var statearr_34430_36868 = state_34411__$1;
(statearr_34430_36868[(2)] = null);

(statearr_34430_36868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (6))){
var inst_34390 = (state_34411[(7)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34411__$1,(11),to,inst_34390);
} else {
if((state_val_34412 === (3))){
var inst_34409 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34411__$1,inst_34409);
} else {
if((state_val_34412 === (12))){
var state_34411__$1 = state_34411;
var statearr_34431_36870 = state_34411__$1;
(statearr_34431_36870[(2)] = null);

(statearr_34431_36870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (2))){
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34411__$1,(4),from);
} else {
if((state_val_34412 === (11))){
var inst_34400 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
if(cljs.core.truth_(inst_34400)){
var statearr_34432_36871 = state_34411__$1;
(statearr_34432_36871[(1)] = (12));

} else {
var statearr_34433_36873 = state_34411__$1;
(statearr_34433_36873[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (9))){
var state_34411__$1 = state_34411;
var statearr_34434_36874 = state_34411__$1;
(statearr_34434_36874[(2)] = null);

(statearr_34434_36874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (5))){
var state_34411__$1 = state_34411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36875 = state_34411__$1;
(statearr_34435_36875[(1)] = (8));

} else {
var statearr_34436_36876 = state_34411__$1;
(statearr_34436_36876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (14))){
var inst_34405 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34437_36878 = state_34411__$1;
(statearr_34437_36878[(2)] = inst_34405);

(statearr_34437_36878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (10))){
var inst_34397 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34438_36879 = state_34411__$1;
(statearr_34438_36879[(2)] = inst_34397);

(statearr_34438_36879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34411__$1 = state_34411;
var statearr_34439_36880 = state_34411__$1;
(statearr_34439_36880[(2)] = inst_34394);

(statearr_34439_36880[(1)] = (10));


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
var statearr_34442_36882 = state_34411;
(statearr_34442_36882[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36884 = state_34411;
state_34411 = G__36884;
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
(statearr_34443[(6)] = c__34274__auto___36861);

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
var c__34274__auto___36886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34457_36889 = state_34452;
(statearr_34457_36889[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36891 = state_34452;
state_34452 = G__36891;
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
(statearr_34458[(6)] = c__34274__auto___36886);

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
var n__4666__auto___36893 = n;
var __36894 = (0);
while(true){
if((__36894 < n__4666__auto___36893)){
var G__34463_36895 = type;
var G__34463_36896__$1 = (((G__34463_36895 instanceof cljs.core.Keyword))?G__34463_36895.fqn:null);
switch (G__34463_36896__$1) {
case "compute":
var c__34274__auto___36898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36894,c__34274__auto___36898,G__34463_36895,G__34463_36896__$1,n__4666__auto___36893,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36894,c__34274__auto___36898,G__34463_36895,G__34463_36896__$1,n__4666__auto___36893,jobs,results,process,async){
return (function (state_34480){
var state_val_34481 = (state_34480[(1)]);
if((state_val_34481 === (1))){
var state_34480__$1 = state_34480;
var statearr_34482_36900 = state_34480__$1;
(statearr_34482_36900[(2)] = null);

(statearr_34482_36900[(1)] = (2));


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
var statearr_34484_36902 = state_34480__$1;
(statearr_34484_36902[(1)] = (5));

} else {
var statearr_34485_36903 = state_34480__$1;
(statearr_34485_36903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (5))){
var state_34480__$1 = state_34480;
var statearr_34486_36904 = state_34480__$1;
(statearr_34486_36904[(2)] = null);

(statearr_34486_36904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (6))){
var state_34480__$1 = state_34480;
var statearr_34487_36905 = state_34480__$1;
(statearr_34487_36905[(2)] = null);

(statearr_34487_36905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (7))){
var inst_34476 = (state_34480[(2)]);
var state_34480__$1 = state_34480;
var statearr_34488_36907 = state_34480__$1;
(statearr_34488_36907[(2)] = inst_34476);

(statearr_34488_36907[(1)] = (3));


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
});})(__36894,c__34274__auto___36898,G__34463_36895,G__34463_36896__$1,n__4666__auto___36893,jobs,results,process,async))
;
return ((function (__36894,switch__34206__auto__,c__34274__auto___36898,G__34463_36895,G__34463_36896__$1,n__4666__auto___36893,jobs,results,process,async){
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
var statearr_34491_36909 = state_34480;
(statearr_34491_36909[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36910 = state_34480;
state_34480 = G__36910;
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
;})(__36894,switch__34206__auto__,c__34274__auto___36898,G__34463_36895,G__34463_36896__$1,n__4666__auto___36893,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34493 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34493[(6)] = c__34274__auto___36898);

return statearr_34493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36894,c__34274__auto___36898,G__34463_36895,G__34463_36896__$1,n__4666__auto___36893,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36894,c__34274__auto___36912,G__34463_36895,G__34463_36896__$1,n__4666__auto___36893,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36894,c__34274__auto___36912,G__34463_36895,G__34463_36896__$1,n__4666__auto___36893,jobs,results,process,async){
return (function (state_34507){
var state_val_34508 = (state_34507[(1)]);
if((state_val_34508 === (1))){
var state_34507__$1 = state_34507;
var statearr_34509_36914 = state_34507__$1;
(statearr_34509_36914[(2)] = null);

(statearr_34509_36914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (2))){
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34507__$1,(4),jobs);
} else {
if((state_val_34508 === (3))){
var inst_34505 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34507__$1,inst_34505);
} else {
if((state_val_34508 === (4))){
var inst_34496 = (state_34507[(2)]);
var inst_34498 = async(inst_34496);
var state_34507__$1 = state_34507;
if(cljs.core.truth_(inst_34498)){
var statearr_34511_36916 = state_34507__$1;
(statearr_34511_36916[(1)] = (5));

} else {
var statearr_34512_36917 = state_34507__$1;
(statearr_34512_36917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (5))){
var state_34507__$1 = state_34507;
var statearr_34513_36918 = state_34507__$1;
(statearr_34513_36918[(2)] = null);

(statearr_34513_36918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (6))){
var state_34507__$1 = state_34507;
var statearr_34514_36919 = state_34507__$1;
(statearr_34514_36919[(2)] = null);

(statearr_34514_36919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (7))){
var inst_34503 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34516_36921 = state_34507__$1;
(statearr_34516_36921[(2)] = inst_34503);

(statearr_34516_36921[(1)] = (3));


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
});})(__36894,c__34274__auto___36912,G__34463_36895,G__34463_36896__$1,n__4666__auto___36893,jobs,results,process,async))
;
return ((function (__36894,switch__34206__auto__,c__34274__auto___36912,G__34463_36895,G__34463_36896__$1,n__4666__auto___36893,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34521 = [null,null,null,null,null,null,null];
(statearr_34521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34521[(1)] = (1));

return statearr_34521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34507){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34507);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34523){if((e34523 instanceof Object)){
var ex__34210__auto__ = e34523;
var statearr_34525_36923 = state_34507;
(statearr_34525_36923[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36924 = state_34507;
state_34507 = G__36924;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36894,switch__34206__auto__,c__34274__auto___36912,G__34463_36895,G__34463_36896__$1,n__4666__auto___36893,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34526 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34526[(6)] = c__34274__auto___36912);

return statearr_34526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36894,c__34274__auto___36912,G__34463_36895,G__34463_36896__$1,n__4666__auto___36893,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34463_36896__$1)].join('')));

}

var G__36926 = (__36894 + (1));
__36894 = G__36926;
continue;
} else {
}
break;
}

var c__34274__auto___36927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34549){
var state_val_34550 = (state_34549[(1)]);
if((state_val_34550 === (7))){
var inst_34544 = (state_34549[(2)]);
var state_34549__$1 = state_34549;
var statearr_34551_36929 = state_34549__$1;
(statearr_34551_36929[(2)] = inst_34544);

(statearr_34551_36929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (1))){
var state_34549__$1 = state_34549;
var statearr_34552_36930 = state_34549__$1;
(statearr_34552_36930[(2)] = null);

(statearr_34552_36930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (4))){
var inst_34529 = (state_34549[(7)]);
var inst_34529__$1 = (state_34549[(2)]);
var inst_34530 = (inst_34529__$1 == null);
var state_34549__$1 = (function (){var statearr_34553 = state_34549;
(statearr_34553[(7)] = inst_34529__$1);

return statearr_34553;
})();
if(cljs.core.truth_(inst_34530)){
var statearr_34554_36932 = state_34549__$1;
(statearr_34554_36932[(1)] = (5));

} else {
var statearr_34555_36933 = state_34549__$1;
(statearr_34555_36933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (6))){
var inst_34529 = (state_34549[(7)]);
var inst_34534 = (state_34549[(8)]);
var inst_34534__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34535 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34536 = [inst_34529,inst_34534__$1];
var inst_34537 = (new cljs.core.PersistentVector(null,2,(5),inst_34535,inst_34536,null));
var state_34549__$1 = (function (){var statearr_34556 = state_34549;
(statearr_34556[(8)] = inst_34534__$1);

return statearr_34556;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34549__$1,(8),jobs,inst_34537);
} else {
if((state_val_34550 === (3))){
var inst_34546 = (state_34549[(2)]);
var state_34549__$1 = state_34549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34549__$1,inst_34546);
} else {
if((state_val_34550 === (2))){
var state_34549__$1 = state_34549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34549__$1,(4),from);
} else {
if((state_val_34550 === (9))){
var inst_34541 = (state_34549[(2)]);
var state_34549__$1 = (function (){var statearr_34561 = state_34549;
(statearr_34561[(9)] = inst_34541);

return statearr_34561;
})();
var statearr_34562_36936 = state_34549__$1;
(statearr_34562_36936[(2)] = null);

(statearr_34562_36936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (5))){
var inst_34532 = cljs.core.async.close_BANG_(jobs);
var state_34549__$1 = state_34549;
var statearr_34563_36937 = state_34549__$1;
(statearr_34563_36937[(2)] = inst_34532);

(statearr_34563_36937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34550 === (8))){
var inst_34534 = (state_34549[(8)]);
var inst_34539 = (state_34549[(2)]);
var state_34549__$1 = (function (){var statearr_34567 = state_34549;
(statearr_34567[(10)] = inst_34539);

return statearr_34567;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34549__$1,(9),results,inst_34534);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34549){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34549);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34569){if((e34569 instanceof Object)){
var ex__34210__auto__ = e34569;
var statearr_34570_36940 = state_34549;
(statearr_34570_36940[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34569;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36941 = state_34549;
state_34549 = G__36941;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34549){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34571 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34571[(6)] = c__34274__auto___36927);

return statearr_34571;
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
var statearr_34614_36943 = state_34612__$1;
(statearr_34614_36943[(2)] = inst_34608);

(statearr_34614_36943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36945 = state_34612__$1;
(statearr_34615_36945[(2)] = null);

(statearr_34615_36945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36946 = state_34612__$1;
(statearr_34616_36946[(2)] = null);

(statearr_34616_36946[(1)] = (2));


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
var statearr_34618_36948 = state_34612__$1;
(statearr_34618_36948[(1)] = (5));

} else {
var statearr_34619_36949 = state_34612__$1;
(statearr_34619_36949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (15))){
var inst_34589 = (state_34612[(8)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34612__$1,(18),to,inst_34589);
} else {
if((state_val_34613 === (21))){
var inst_34603 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34620_36951 = state_34612__$1;
(statearr_34620_36951[(2)] = inst_34603);

(statearr_34620_36951[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36953 = state_34612__$1;
(statearr_34622_36953[(2)] = null);

(statearr_34622_36953[(1)] = (2));


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
var statearr_34623_36957 = state_34612__$1;
(statearr_34623_36957[(1)] = (19));

} else {
var statearr_34624_36958 = state_34612__$1;
(statearr_34624_36958[(1)] = (20));

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
var statearr_34625_36960 = state_34612__$1;
(statearr_34625_36960[(2)] = null);

(statearr_34625_36960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34584);

return statearr_34626;
})();
var statearr_34627_36962 = state_34612__$1;
(statearr_34627_36962[(2)] = null);

(statearr_34627_36962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36963 = state_34612__$1;
(statearr_34628_36963[(2)] = null);

(statearr_34628_36963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36964 = state_34612__$1;
(statearr_34629_36964[(1)] = (8));

} else {
var statearr_34630_36966 = state_34612__$1;
(statearr_34630_36966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (14))){
var inst_34589 = (state_34612[(8)]);
var inst_34589__$1 = (state_34612[(2)]);
var inst_34591 = (inst_34589__$1 == null);
var inst_34592 = cljs.core.not(inst_34591);
var state_34612__$1 = (function (){var statearr_34631 = state_34612;
(statearr_34631[(8)] = inst_34589__$1);

return statearr_34631;
})();
if(inst_34592){
var statearr_34632_36968 = state_34612__$1;
(statearr_34632_36968[(1)] = (15));

} else {
var statearr_34633_36969 = state_34612__$1;
(statearr_34633_36969[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36970 = state_34612__$1;
(statearr_34634_36970[(2)] = false);

(statearr_34634_36970[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34581 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36972 = state_34612__$1;
(statearr_34635_36972[(2)] = inst_34581);

(statearr_34635_36972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36974 = state_34612__$1;
(statearr_34636_36974[(2)] = inst_34595);

(statearr_34636_36974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34578 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36975 = state_34612__$1;
(statearr_34637_36975[(2)] = inst_34578);

(statearr_34637_36975[(1)] = (10));


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
var statearr_34640_36977 = state_34612;
(statearr_34640_36977[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36979 = state_34612;
state_34612 = G__36979;
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
var c__34274__auto___36993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_36995 = state_34673__$1;
(statearr_34675_36995[(2)] = inst_34669);

(statearr_34675_36995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_36996 = state_34673__$1;
(statearr_34676_36996[(2)] = null);

(statearr_34676_36996[(1)] = (2));


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
var statearr_34678_36997 = state_34673__$1;
(statearr_34678_36997[(1)] = (5));

} else {
var statearr_34679_36998 = state_34673__$1;
(statearr_34679_36998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_37000 = state_34673__$1;
(statearr_34680_37000[(2)] = null);

(statearr_34680_37000[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_37004 = state_34673__$1;
(statearr_34681_37004[(1)] = (9));

} else {
var statearr_34682_37005 = state_34673__$1;
(statearr_34682_37005[(1)] = (10));

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
var statearr_34683_37006 = state_34673__$1;
(statearr_34683_37006[(2)] = null);

(statearr_34683_37006[(1)] = (2));


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
var statearr_34684_37008 = state_34673__$1;
(statearr_34684_37008[(2)] = tc);

(statearr_34684_37008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34685 = state_34673;
(statearr_34685[(8)] = inst_34653);

return statearr_34685;
})();
var statearr_34686_37009 = state_34673__$1;
(statearr_34686_37009[(2)] = inst_34654);

(statearr_34686_37009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34687_37010 = state_34673__$1;
(statearr_34687_37010[(2)] = inst_34667);

(statearr_34687_37010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34691_37013 = state_34673__$1;
(statearr_34691_37013[(2)] = fc);

(statearr_34691_37013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34692_37015 = state_34673__$1;
(statearr_34692_37015[(1)] = (12));

} else {
var statearr_34693_37016 = state_34673__$1;
(statearr_34693_37016[(1)] = (13));

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
var statearr_34696_37020 = state_34673;
(statearr_34696_37020[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34695;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37021 = state_34673;
state_34673 = G__37021;
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
(statearr_34697[(6)] = c__34274__auto___36993);

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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34723){
var state_val_34724 = (state_34723[(1)]);
if((state_val_34724 === (7))){
var inst_34719 = (state_34723[(2)]);
var state_34723__$1 = state_34723;
var statearr_34725_37022 = state_34723__$1;
(statearr_34725_37022[(2)] = inst_34719);

(statearr_34725_37022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (1))){
var inst_34701 = init;
var state_34723__$1 = (function (){var statearr_34727 = state_34723;
(statearr_34727[(7)] = inst_34701);

return statearr_34727;
})();
var statearr_34728_37023 = state_34723__$1;
(statearr_34728_37023[(2)] = null);

(statearr_34728_37023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (4))){
var inst_34704 = (state_34723[(8)]);
var inst_34704__$1 = (state_34723[(2)]);
var inst_34705 = (inst_34704__$1 == null);
var state_34723__$1 = (function (){var statearr_34729 = state_34723;
(statearr_34729[(8)] = inst_34704__$1);

return statearr_34729;
})();
if(cljs.core.truth_(inst_34705)){
var statearr_34730_37027 = state_34723__$1;
(statearr_34730_37027[(1)] = (5));

} else {
var statearr_34731_37029 = state_34723__$1;
(statearr_34731_37029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (6))){
var inst_34710 = (state_34723[(9)]);
var inst_34704 = (state_34723[(8)]);
var inst_34701 = (state_34723[(7)]);
var inst_34710__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34701,inst_34704) : f.call(null,inst_34701,inst_34704));
var inst_34711 = cljs.core.reduced_QMARK_(inst_34710__$1);
var state_34723__$1 = (function (){var statearr_34734 = state_34723;
(statearr_34734[(9)] = inst_34710__$1);

return statearr_34734;
})();
if(inst_34711){
var statearr_34735_37032 = state_34723__$1;
(statearr_34735_37032[(1)] = (8));

} else {
var statearr_34736_37033 = state_34723__$1;
(statearr_34736_37033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (3))){
var inst_34721 = (state_34723[(2)]);
var state_34723__$1 = state_34723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34723__$1,inst_34721);
} else {
if((state_val_34724 === (2))){
var state_34723__$1 = state_34723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34723__$1,(4),ch);
} else {
if((state_val_34724 === (9))){
var inst_34710 = (state_34723[(9)]);
var inst_34701 = inst_34710;
var state_34723__$1 = (function (){var statearr_34737 = state_34723;
(statearr_34737[(7)] = inst_34701);

return statearr_34737;
})();
var statearr_34738_37034 = state_34723__$1;
(statearr_34738_37034[(2)] = null);

(statearr_34738_37034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (5))){
var inst_34701 = (state_34723[(7)]);
var state_34723__$1 = state_34723;
var statearr_34739_37036 = state_34723__$1;
(statearr_34739_37036[(2)] = inst_34701);

(statearr_34739_37036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (10))){
var inst_34717 = (state_34723[(2)]);
var state_34723__$1 = state_34723;
var statearr_34740_37040 = state_34723__$1;
(statearr_34740_37040[(2)] = inst_34717);

(statearr_34740_37040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34724 === (8))){
var inst_34710 = (state_34723[(9)]);
var inst_34713 = cljs.core.deref(inst_34710);
var state_34723__$1 = state_34723;
var statearr_34741_37041 = state_34723__$1;
(statearr_34741_37041[(2)] = inst_34713);

(statearr_34741_37041[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34723){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34723);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34744){if((e34744 instanceof Object)){
var ex__34210__auto__ = e34744;
var statearr_34746_37049 = state_34723;
(statearr_34746_37049[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34744;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37052 = state_34723;
state_34723 = G__37052;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34723){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34723);
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
var statearr_34762_37066 = state_34755;
(statearr_34762_37066[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37067 = state_34755;
state_34755 = G__37067;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34794){
var state_val_34795 = (state_34794[(1)]);
if((state_val_34795 === (7))){
var inst_34776 = (state_34794[(2)]);
var state_34794__$1 = state_34794;
var statearr_34799_37080 = state_34794__$1;
(statearr_34799_37080[(2)] = inst_34776);

(statearr_34799_37080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (1))){
var inst_34767 = cljs.core.seq(coll);
var inst_34768 = inst_34767;
var state_34794__$1 = (function (){var statearr_34800 = state_34794;
(statearr_34800[(7)] = inst_34768);

return statearr_34800;
})();
var statearr_34801_37083 = state_34794__$1;
(statearr_34801_37083[(2)] = null);

(statearr_34801_37083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (4))){
var inst_34768 = (state_34794[(7)]);
var inst_34774 = cljs.core.first(inst_34768);
var state_34794__$1 = state_34794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34794__$1,(7),ch,inst_34774);
} else {
if((state_val_34795 === (13))){
var inst_34788 = (state_34794[(2)]);
var state_34794__$1 = state_34794;
var statearr_34802_37089 = state_34794__$1;
(statearr_34802_37089[(2)] = inst_34788);

(statearr_34802_37089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (6))){
var inst_34779 = (state_34794[(2)]);
var state_34794__$1 = state_34794;
if(cljs.core.truth_(inst_34779)){
var statearr_34803_37092 = state_34794__$1;
(statearr_34803_37092[(1)] = (8));

} else {
var statearr_34804_37096 = state_34794__$1;
(statearr_34804_37096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (3))){
var inst_34792 = (state_34794[(2)]);
var state_34794__$1 = state_34794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34794__$1,inst_34792);
} else {
if((state_val_34795 === (12))){
var state_34794__$1 = state_34794;
var statearr_34808_37100 = state_34794__$1;
(statearr_34808_37100[(2)] = null);

(statearr_34808_37100[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (2))){
var inst_34768 = (state_34794[(7)]);
var state_34794__$1 = state_34794;
if(cljs.core.truth_(inst_34768)){
var statearr_34809_37101 = state_34794__$1;
(statearr_34809_37101[(1)] = (4));

} else {
var statearr_34810_37102 = state_34794__$1;
(statearr_34810_37102[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (11))){
var inst_34785 = cljs.core.async.close_BANG_(ch);
var state_34794__$1 = state_34794;
var statearr_34811_37105 = state_34794__$1;
(statearr_34811_37105[(2)] = inst_34785);

(statearr_34811_37105[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (9))){
var state_34794__$1 = state_34794;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34812_37108 = state_34794__$1;
(statearr_34812_37108[(1)] = (11));

} else {
var statearr_34813_37109 = state_34794__$1;
(statearr_34813_37109[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (5))){
var inst_34768 = (state_34794[(7)]);
var state_34794__$1 = state_34794;
var statearr_34814_37110 = state_34794__$1;
(statearr_34814_37110[(2)] = inst_34768);

(statearr_34814_37110[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (10))){
var inst_34790 = (state_34794[(2)]);
var state_34794__$1 = state_34794;
var statearr_34815_37112 = state_34794__$1;
(statearr_34815_37112[(2)] = inst_34790);

(statearr_34815_37112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (8))){
var inst_34768 = (state_34794[(7)]);
var inst_34781 = cljs.core.next(inst_34768);
var inst_34768__$1 = inst_34781;
var state_34794__$1 = (function (){var statearr_34816 = state_34794;
(statearr_34816[(7)] = inst_34768__$1);

return statearr_34816;
})();
var statearr_34817_37113 = state_34794__$1;
(statearr_34817_37113[(2)] = null);

(statearr_34817_37113[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34794){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34794);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34819){if((e34819 instanceof Object)){
var ex__34210__auto__ = e34819;
var statearr_34820_37122 = state_34794;
(statearr_34820_37122[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37123 = state_34794;
state_34794 = G__37123;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34794);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34829 = (function (ch,cs,meta34830){
this.ch = ch;
this.cs = cs;
this.meta34830 = meta34830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34831,meta34830__$1){
var self__ = this;
var _34831__$1 = this;
return (new cljs.core.async.t_cljs$core$async34829(self__.ch,self__.cs,meta34830__$1));
}));

(cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34831){
var self__ = this;
var _34831__$1 = this;
return self__.meta34830;
}));

(cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34830","meta34830",1334682322,null)], null);
}));

(cljs.core.async.t_cljs$core$async34829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34829");

(cljs.core.async.t_cljs$core$async34829.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34829.
 */
cljs.core.async.__GT_t_cljs$core$async34829 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34829(ch__$1,cs__$1,meta34830){
return (new cljs.core.async.t_cljs$core$async34829(ch__$1,cs__$1,meta34830));
});

}

return (new cljs.core.async.t_cljs$core$async34829(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34274__auto___37153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34978){
var state_val_34979 = (state_34978[(1)]);
if((state_val_34979 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34980_37156 = state_34978__$1;
(statearr_34980_37156[(2)] = inst_34974);

(statearr_34980_37156[(1)] = (3));


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
var statearr_34982_37162 = state_34978__$1;
(statearr_34982_37162[(1)] = (22));

} else {
var statearr_34983_37163 = state_34978__$1;
(statearr_34983_37163[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (27))){
var inst_34843 = (state_34978[(9)]);
var inst_34926 = (state_34978[(10)]);
var inst_34919 = (state_34978[(11)]);
var inst_34921 = (state_34978[(12)]);
var inst_34926__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34919,inst_34921);
var inst_34927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34926__$1,inst_34843,done);
var state_34978__$1 = (function (){var statearr_34984 = state_34978;
(statearr_34984[(10)] = inst_34926__$1);

return statearr_34984;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34985_37166 = state_34978__$1;
(statearr_34985_37166[(1)] = (30));

} else {
var statearr_34986_37167 = state_34978__$1;
(statearr_34986_37167[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (1))){
var state_34978__$1 = state_34978;
var statearr_34987_37168 = state_34978__$1;
(statearr_34987_37168[(2)] = null);

(statearr_34987_37168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (24))){
var inst_34877 = (state_34978[(7)]);
var inst_34896 = (state_34978[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34852 = inst_34897;
var inst_34853 = null;
var inst_34854 = (0);
var inst_34855 = (0);
var state_34978__$1 = (function (){var statearr_34988 = state_34978;
(statearr_34988[(13)] = inst_34852);

(statearr_34988[(14)] = inst_34896);

(statearr_34988[(15)] = inst_34855);

(statearr_34988[(16)] = inst_34853);

(statearr_34988[(17)] = inst_34854);

return statearr_34988;
})();
var statearr_34989_37171 = state_34978__$1;
(statearr_34989_37171[(2)] = null);

(statearr_34989_37171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (39))){
var state_34978__$1 = state_34978;
var statearr_34993_37172 = state_34978__$1;
(statearr_34993_37172[(2)] = null);

(statearr_34993_37172[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (4))){
var inst_34843 = (state_34978[(9)]);
var inst_34843__$1 = (state_34978[(2)]);
var inst_34844 = (inst_34843__$1 == null);
var state_34978__$1 = (function (){var statearr_34994 = state_34978;
(statearr_34994[(9)] = inst_34843__$1);

return statearr_34994;
})();
if(cljs.core.truth_(inst_34844)){
var statearr_34995_37176 = state_34978__$1;
(statearr_34995_37176[(1)] = (5));

} else {
var statearr_34996_37177 = state_34978__$1;
(statearr_34996_37177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (15))){
var inst_34852 = (state_34978[(13)]);
var inst_34855 = (state_34978[(15)]);
var inst_34853 = (state_34978[(16)]);
var inst_34854 = (state_34978[(17)]);
var inst_34873 = (state_34978[(2)]);
var inst_34874 = (inst_34855 + (1));
var tmp34990 = inst_34852;
var tmp34991 = inst_34853;
var tmp34992 = inst_34854;
var inst_34852__$1 = tmp34990;
var inst_34853__$1 = tmp34991;
var inst_34854__$1 = tmp34992;
var inst_34855__$1 = inst_34874;
var state_34978__$1 = (function (){var statearr_34997 = state_34978;
(statearr_34997[(18)] = inst_34873);

(statearr_34997[(13)] = inst_34852__$1);

(statearr_34997[(15)] = inst_34855__$1);

(statearr_34997[(16)] = inst_34853__$1);

(statearr_34997[(17)] = inst_34854__$1);

return statearr_34997;
})();
var statearr_34998_37186 = state_34978__$1;
(statearr_34998_37186[(2)] = null);

(statearr_34998_37186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (21))){
var inst_34900 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35002_37187 = state_34978__$1;
(statearr_35002_37187[(2)] = inst_34900);

(statearr_35002_37187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (31))){
var inst_34926 = (state_34978[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34978__$1 = (function (){var statearr_35003 = state_34978;
(statearr_35003[(19)] = inst_34930);

return statearr_35003;
})();
var statearr_35004_37188 = state_34978__$1;
(statearr_35004_37188[(2)] = inst_34931);

(statearr_35004_37188[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (32))){
var inst_34918 = (state_34978[(20)]);
var inst_34919 = (state_34978[(11)]);
var inst_34920 = (state_34978[(21)]);
var inst_34921 = (state_34978[(12)]);
var inst_34933 = (state_34978[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp34999 = inst_34918;
var tmp35000 = inst_34919;
var tmp35001 = inst_34920;
var inst_34918__$1 = tmp34999;
var inst_34919__$1 = tmp35000;
var inst_34920__$1 = tmp35001;
var inst_34921__$1 = inst_34934;
var state_34978__$1 = (function (){var statearr_35005 = state_34978;
(statearr_35005[(20)] = inst_34918__$1);

(statearr_35005[(22)] = inst_34933);

(statearr_35005[(11)] = inst_34919__$1);

(statearr_35005[(21)] = inst_34920__$1);

(statearr_35005[(12)] = inst_34921__$1);

return statearr_35005;
})();
var statearr_35006_37195 = state_34978__$1;
(statearr_35006_37195[(2)] = null);

(statearr_35006_37195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (40))){
var inst_34946 = (state_34978[(23)]);
var inst_34950 = done(null);
var inst_34951 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34946);
var state_34978__$1 = (function (){var statearr_35009 = state_34978;
(statearr_35009[(24)] = inst_34950);

return statearr_35009;
})();
var statearr_35010_37196 = state_34978__$1;
(statearr_35010_37196[(2)] = inst_34951);

(statearr_35010_37196[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (33))){
var inst_34937 = (state_34978[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34978__$1 = state_34978;
if(inst_34939){
var statearr_35013_37201 = state_34978__$1;
(statearr_35013_37201[(1)] = (36));

} else {
var statearr_35015_37202 = state_34978__$1;
(statearr_35015_37202[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (13))){
var inst_34867 = (state_34978[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34978__$1 = state_34978;
var statearr_35017_37203 = state_34978__$1;
(statearr_35017_37203[(2)] = inst_34870);

(statearr_35017_37203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (22))){
var inst_34890 = (state_34978[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34978__$1 = state_34978;
var statearr_35018_37205 = state_34978__$1;
(statearr_35018_37205[(2)] = inst_34893);

(statearr_35018_37205[(1)] = (24));


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
var state_34978__$1 = (function (){var statearr_35019 = state_34978;
(statearr_35019[(20)] = inst_34918);

(statearr_35019[(11)] = inst_34919);

(statearr_35019[(21)] = inst_34920);

(statearr_35019[(12)] = inst_34921);

return statearr_35019;
})();
var statearr_35020_37215 = state_34978__$1;
(statearr_35020_37215[(2)] = null);

(statearr_35020_37215[(1)] = (25));


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
var state_34978__$1 = (function (){var statearr_35021 = state_34978;
(statearr_35021[(20)] = inst_34918);

(statearr_35021[(11)] = inst_34919);

(statearr_35021[(21)] = inst_34920);

(statearr_35021[(27)] = inst_34953);

(statearr_35021[(12)] = inst_34921);

return statearr_35021;
})();
var statearr_35022_37220 = state_34978__$1;
(statearr_35022_37220[(2)] = null);

(statearr_35022_37220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (43))){
var state_34978__$1 = state_34978;
var statearr_35024_37221 = state_34978__$1;
(statearr_35024_37221[(2)] = null);

(statearr_35024_37221[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (29))){
var inst_34962 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35027_37229 = state_34978__$1;
(statearr_35027_37229[(2)] = inst_34962);

(statearr_35027_37229[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (44))){
var inst_34971 = (state_34978[(2)]);
var state_34978__$1 = (function (){var statearr_35030 = state_34978;
(statearr_35030[(28)] = inst_34971);

return statearr_35030;
})();
var statearr_35031_37232 = state_34978__$1;
(statearr_35031_37232[(2)] = null);

(statearr_35031_37232[(1)] = (2));


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
var state_34978__$1 = (function (){var statearr_35033 = state_34978;
(statearr_35033[(20)] = inst_34918);

(statearr_35033[(29)] = inst_34910__$1);

(statearr_35033[(11)] = inst_34919);

(statearr_35033[(21)] = inst_34920);

(statearr_35033[(12)] = inst_34921);

(statearr_35033[(30)] = inst_34912);

return statearr_35033;
})();
var statearr_35034_37243 = state_34978__$1;
(statearr_35034_37243[(2)] = null);

(statearr_35034_37243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (28))){
var inst_34918 = (state_34978[(20)]);
var inst_34937 = (state_34978[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34978__$1 = (function (){var statearr_35035 = state_34978;
(statearr_35035[(25)] = inst_34937__$1);

return statearr_35035;
})();
if(inst_34937__$1){
var statearr_35036_37247 = state_34978__$1;
(statearr_35036_37247[(1)] = (33));

} else {
var statearr_35037_37248 = state_34978__$1;
(statearr_35037_37248[(1)] = (34));

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
var statearr_35038_37251 = state_34978__$1;
(statearr_35038_37251[(1)] = (27));

} else {
var statearr_35039_37252 = state_34978__$1;
(statearr_35039_37252[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (34))){
var state_34978__$1 = state_34978;
var statearr_35044_37253 = state_34978__$1;
(statearr_35044_37253[(2)] = null);

(statearr_35044_37253[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (17))){
var state_34978__$1 = state_34978;
var statearr_35046_37256 = state_34978__$1;
(statearr_35046_37256[(2)] = null);

(statearr_35046_37256[(1)] = (18));


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
var statearr_35048_37257 = state_34978__$1;
(statearr_35048_37257[(2)] = inst_34905);

(statearr_35048_37257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(4),ch);
} else {
if((state_val_34979 === (23))){
var state_34978__$1 = state_34978;
var statearr_35049_37259 = state_34978__$1;
(statearr_35049_37259[(2)] = null);

(statearr_35049_37259[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (35))){
var inst_34960 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35050_37261 = state_34978__$1;
(statearr_35050_37261[(2)] = inst_34960);

(statearr_35050_37261[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (19))){
var inst_34877 = (state_34978[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34852 = inst_34882;
var inst_34853 = inst_34881;
var inst_34854 = inst_34883;
var inst_34855 = (0);
var state_34978__$1 = (function (){var statearr_35052 = state_34978;
(statearr_35052[(13)] = inst_34852);

(statearr_35052[(15)] = inst_34855);

(statearr_35052[(16)] = inst_34853);

(statearr_35052[(17)] = inst_34854);

return statearr_35052;
})();
var statearr_35054_37266 = state_34978__$1;
(statearr_35054_37266[(2)] = null);

(statearr_35054_37266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (11))){
var inst_34852 = (state_34978[(13)]);
var inst_34877 = (state_34978[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34852);
var state_34978__$1 = (function (){var statearr_35058 = state_34978;
(statearr_35058[(7)] = inst_34877__$1);

return statearr_35058;
})();
if(inst_34877__$1){
var statearr_35060_37268 = state_34978__$1;
(statearr_35060_37268[(1)] = (16));

} else {
var statearr_35061_37269 = state_34978__$1;
(statearr_35061_37269[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (9))){
var inst_34907 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35062_37271 = state_34978__$1;
(statearr_35062_37271[(2)] = inst_34907);

(statearr_35062_37271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (5))){
var inst_34850 = cljs.core.deref(cs);
var inst_34851 = cljs.core.seq(inst_34850);
var inst_34852 = inst_34851;
var inst_34853 = null;
var inst_34854 = (0);
var inst_34855 = (0);
var state_34978__$1 = (function (){var statearr_35063 = state_34978;
(statearr_35063[(13)] = inst_34852);

(statearr_35063[(15)] = inst_34855);

(statearr_35063[(16)] = inst_34853);

(statearr_35063[(17)] = inst_34854);

return statearr_35063;
})();
var statearr_35065_37276 = state_34978__$1;
(statearr_35065_37276[(2)] = null);

(statearr_35065_37276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (14))){
var state_34978__$1 = state_34978;
var statearr_35068_37277 = state_34978__$1;
(statearr_35068_37277[(2)] = null);

(statearr_35068_37277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (45))){
var inst_34968 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35070_37278 = state_34978__$1;
(statearr_35070_37278[(2)] = inst_34968);

(statearr_35070_37278[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (26))){
var inst_34910 = (state_34978[(29)]);
var inst_34964 = (state_34978[(2)]);
var inst_34965 = cljs.core.seq(inst_34910);
var state_34978__$1 = (function (){var statearr_35083 = state_34978;
(statearr_35083[(31)] = inst_34964);

return statearr_35083;
})();
if(inst_34965){
var statearr_35087_37281 = state_34978__$1;
(statearr_35087_37281[(1)] = (42));

} else {
var statearr_35088_37282 = state_34978__$1;
(statearr_35088_37282[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (16))){
var inst_34877 = (state_34978[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34978__$1 = state_34978;
if(inst_34879){
var statearr_35089_37286 = state_34978__$1;
(statearr_35089_37286[(1)] = (19));

} else {
var statearr_35092_37287 = state_34978__$1;
(statearr_35092_37287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (38))){
var inst_34957 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35095_37290 = state_34978__$1;
(statearr_35095_37290[(2)] = inst_34957);

(statearr_35095_37290[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (30))){
var state_34978__$1 = state_34978;
var statearr_35096_37293 = state_34978__$1;
(statearr_35096_37293[(2)] = null);

(statearr_35096_37293[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (10))){
var inst_34855 = (state_34978[(15)]);
var inst_34853 = (state_34978[(16)]);
var inst_34863 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34853,inst_34855);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34863,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34863,(1),null);
var state_34978__$1 = (function (){var statearr_35098 = state_34978;
(statearr_35098[(26)] = inst_34867);

return statearr_35098;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35100_37296 = state_34978__$1;
(statearr_35100_37296[(1)] = (13));

} else {
var statearr_35103_37298 = state_34978__$1;
(statearr_35103_37298[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (18))){
var inst_34903 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35109_37300 = state_34978__$1;
(statearr_35109_37300[(2)] = inst_34903);

(statearr_35109_37300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (42))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(45),dchan);
} else {
if((state_val_34979 === (37))){
var inst_34843 = (state_34978[(9)]);
var inst_34946 = (state_34978[(23)]);
var inst_34937 = (state_34978[(25)]);
var inst_34946__$1 = cljs.core.first(inst_34937);
var inst_34947 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34946__$1,inst_34843,done);
var state_34978__$1 = (function (){var statearr_35116 = state_34978;
(statearr_35116[(23)] = inst_34946__$1);

return statearr_35116;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35119_37306 = state_34978__$1;
(statearr_35119_37306[(1)] = (39));

} else {
var statearr_35122_37307 = state_34978__$1;
(statearr_35122_37307[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (8))){
var inst_34855 = (state_34978[(15)]);
var inst_34854 = (state_34978[(17)]);
var inst_34857 = (inst_34855 < inst_34854);
var inst_34858 = inst_34857;
var state_34978__$1 = state_34978;
if(cljs.core.truth_(inst_34858)){
var statearr_35129_37311 = state_34978__$1;
(statearr_35129_37311[(1)] = (10));

} else {
var statearr_35131_37313 = state_34978__$1;
(statearr_35131_37313[(1)] = (11));

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
var statearr_35139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35139[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35139[(1)] = (1));

return statearr_35139;
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
}catch (e35145){if((e35145 instanceof Object)){
var ex__34210__auto__ = e35145;
var statearr_35149_37321 = state_34978;
(statearr_35149_37321[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37323 = state_34978;
state_34978 = G__37323;
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
var state__34276__auto__ = (function (){var statearr_35158 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35158[(6)] = c__34274__auto___37153);

return statearr_35158;
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
var G__35170 = arguments.length;
switch (G__35170) {
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
var len__4789__auto___37351 = arguments.length;
var i__4790__auto___37352 = (0);
while(true){
if((i__4790__auto___37352 < len__4789__auto___37351)){
args__4795__auto__.push((arguments[i__4790__auto___37352]));

var G__37353 = (i__4790__auto___37352 + (1));
i__4790__auto___37352 = G__37353;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35271){
var map__35272 = p__35271;
var map__35272__$1 = (((((!((map__35272 == null))))?(((((map__35272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35272):map__35272);
var opts = map__35272__$1;
var statearr_35280_37358 = state;
(statearr_35280_37358[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35286_37360 = state;
(statearr_35286_37360[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35292_37362 = state;
(statearr_35292_37362[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35254){
var G__35255 = cljs.core.first(seq35254);
var seq35254__$1 = cljs.core.next(seq35254);
var G__35256 = cljs.core.first(seq35254__$1);
var seq35254__$2 = cljs.core.next(seq35254__$1);
var G__35257 = cljs.core.first(seq35254__$2);
var seq35254__$3 = cljs.core.next(seq35254__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35255,G__35256,G__35257,seq35254__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35338 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35339){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35339 = meta35339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35340,meta35339__$1){
var self__ = this;
var _35340__$1 = this;
return (new cljs.core.async.t_cljs$core$async35338(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35339__$1));
}));

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35340){
var self__ = this;
var _35340__$1 = this;
return self__.meta35339;
}));

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35338.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35339","meta35339",-1528690936,null)], null);
}));

(cljs.core.async.t_cljs$core$async35338.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35338");

(cljs.core.async.t_cljs$core$async35338.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35338");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35338.
 */
cljs.core.async.__GT_t_cljs$core$async35338 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35338(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35339){
return (new cljs.core.async.t_cljs$core$async35338(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35339));
});

}

return (new cljs.core.async.t_cljs$core$async35338(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35503){
var state_val_35504 = (state_35503[(1)]);
if((state_val_35504 === (7))){
var inst_35392 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35509_37412 = state_35503__$1;
(statearr_35509_37412[(2)] = inst_35392);

(statearr_35509_37412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (20))){
var inst_35408 = (state_35503[(7)]);
var state_35503__$1 = state_35503;
var statearr_35515_37413 = state_35503__$1;
(statearr_35515_37413[(2)] = inst_35408);

(statearr_35515_37413[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (27))){
var state_35503__$1 = state_35503;
var statearr_35516_37415 = state_35503__$1;
(statearr_35516_37415[(2)] = null);

(statearr_35516_37415[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (1))){
var inst_35377 = (state_35503[(8)]);
var inst_35377__$1 = calc_state();
var inst_35380 = (inst_35377__$1 == null);
var inst_35381 = cljs.core.not(inst_35380);
var state_35503__$1 = (function (){var statearr_35521 = state_35503;
(statearr_35521[(8)] = inst_35377__$1);

return statearr_35521;
})();
if(inst_35381){
var statearr_35522_37417 = state_35503__$1;
(statearr_35522_37417[(1)] = (2));

} else {
var statearr_35523_37423 = state_35503__$1;
(statearr_35523_37423[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (24))){
var inst_35474 = (state_35503[(9)]);
var inst_35446 = (state_35503[(10)]);
var inst_35435 = (state_35503[(11)]);
var inst_35474__$1 = (inst_35435.cljs$core$IFn$_invoke$arity$1 ? inst_35435.cljs$core$IFn$_invoke$arity$1(inst_35446) : inst_35435.call(null,inst_35446));
var state_35503__$1 = (function (){var statearr_35525 = state_35503;
(statearr_35525[(9)] = inst_35474__$1);

return statearr_35525;
})();
if(cljs.core.truth_(inst_35474__$1)){
var statearr_35526_37425 = state_35503__$1;
(statearr_35526_37425[(1)] = (29));

} else {
var statearr_35529_37427 = state_35503__$1;
(statearr_35529_37427[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (4))){
var inst_35397 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35397)){
var statearr_35537_37428 = state_35503__$1;
(statearr_35537_37428[(1)] = (8));

} else {
var statearr_35540_37430 = state_35503__$1;
(statearr_35540_37430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (15))){
var inst_35428 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35428)){
var statearr_35542_37432 = state_35503__$1;
(statearr_35542_37432[(1)] = (19));

} else {
var statearr_35543_37434 = state_35503__$1;
(statearr_35543_37434[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (21))){
var inst_35434 = (state_35503[(12)]);
var inst_35434__$1 = (state_35503[(2)]);
var inst_35435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35434__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35434__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35434__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35503__$1 = (function (){var statearr_35546 = state_35503;
(statearr_35546[(13)] = inst_35436);

(statearr_35546[(12)] = inst_35434__$1);

(statearr_35546[(11)] = inst_35435);

return statearr_35546;
})();
return cljs.core.async.ioc_alts_BANG_(state_35503__$1,(22),inst_35437);
} else {
if((state_val_35504 === (31))){
var inst_35485 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35485)){
var statearr_35549_37439 = state_35503__$1;
(statearr_35549_37439[(1)] = (32));

} else {
var statearr_35550_37440 = state_35503__$1;
(statearr_35550_37440[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (32))){
var inst_35445 = (state_35503[(14)]);
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35503__$1,(35),out,inst_35445);
} else {
if((state_val_35504 === (33))){
var inst_35434 = (state_35503[(12)]);
var inst_35408 = inst_35434;
var state_35503__$1 = (function (){var statearr_35572 = state_35503;
(statearr_35572[(7)] = inst_35408);

return statearr_35572;
})();
var statearr_35573_37442 = state_35503__$1;
(statearr_35573_37442[(2)] = null);

(statearr_35573_37442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (13))){
var inst_35408 = (state_35503[(7)]);
var inst_35416 = inst_35408.cljs$lang$protocol_mask$partition0$;
var inst_35417 = (inst_35416 & (64));
var inst_35418 = inst_35408.cljs$core$ISeq$;
var inst_35419 = (cljs.core.PROTOCOL_SENTINEL === inst_35418);
var inst_35420 = ((inst_35417) || (inst_35419));
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35420)){
var statearr_35576_37449 = state_35503__$1;
(statearr_35576_37449[(1)] = (16));

} else {
var statearr_35579_37450 = state_35503__$1;
(statearr_35579_37450[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (22))){
var inst_35445 = (state_35503[(14)]);
var inst_35446 = (state_35503[(10)]);
var inst_35443 = (state_35503[(2)]);
var inst_35445__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35443,(0),null);
var inst_35446__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35443,(1),null);
var inst_35447 = (inst_35445__$1 == null);
var inst_35448 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35446__$1,change);
var inst_35449 = ((inst_35447) || (inst_35448));
var state_35503__$1 = (function (){var statearr_35580 = state_35503;
(statearr_35580[(14)] = inst_35445__$1);

(statearr_35580[(10)] = inst_35446__$1);

return statearr_35580;
})();
if(cljs.core.truth_(inst_35449)){
var statearr_35582_37453 = state_35503__$1;
(statearr_35582_37453[(1)] = (23));

} else {
var statearr_35583_37454 = state_35503__$1;
(statearr_35583_37454[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (36))){
var inst_35434 = (state_35503[(12)]);
var inst_35408 = inst_35434;
var state_35503__$1 = (function (){var statearr_35588 = state_35503;
(statearr_35588[(7)] = inst_35408);

return statearr_35588;
})();
var statearr_35590_37456 = state_35503__$1;
(statearr_35590_37456[(2)] = null);

(statearr_35590_37456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (29))){
var inst_35474 = (state_35503[(9)]);
var state_35503__$1 = state_35503;
var statearr_35595_37460 = state_35503__$1;
(statearr_35595_37460[(2)] = inst_35474);

(statearr_35595_37460[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (6))){
var state_35503__$1 = state_35503;
var statearr_35598_37461 = state_35503__$1;
(statearr_35598_37461[(2)] = false);

(statearr_35598_37461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (28))){
var inst_35467 = (state_35503[(2)]);
var inst_35468 = calc_state();
var inst_35408 = inst_35468;
var state_35503__$1 = (function (){var statearr_35608 = state_35503;
(statearr_35608[(15)] = inst_35467);

(statearr_35608[(7)] = inst_35408);

return statearr_35608;
})();
var statearr_35621_37465 = state_35503__$1;
(statearr_35621_37465[(2)] = null);

(statearr_35621_37465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (25))){
var inst_35499 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35629_37466 = state_35503__$1;
(statearr_35629_37466[(2)] = inst_35499);

(statearr_35629_37466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (34))){
var inst_35497 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35634_37468 = state_35503__$1;
(statearr_35634_37468[(2)] = inst_35497);

(statearr_35634_37468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (17))){
var state_35503__$1 = state_35503;
var statearr_35638_37469 = state_35503__$1;
(statearr_35638_37469[(2)] = false);

(statearr_35638_37469[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (3))){
var state_35503__$1 = state_35503;
var statearr_35643_37473 = state_35503__$1;
(statearr_35643_37473[(2)] = false);

(statearr_35643_37473[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (12))){
var inst_35501 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35503__$1,inst_35501);
} else {
if((state_val_35504 === (2))){
var inst_35377 = (state_35503[(8)]);
var inst_35384 = inst_35377.cljs$lang$protocol_mask$partition0$;
var inst_35385 = (inst_35384 & (64));
var inst_35386 = inst_35377.cljs$core$ISeq$;
var inst_35387 = (cljs.core.PROTOCOL_SENTINEL === inst_35386);
var inst_35388 = ((inst_35385) || (inst_35387));
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35388)){
var statearr_35652_37475 = state_35503__$1;
(statearr_35652_37475[(1)] = (5));

} else {
var statearr_35654_37476 = state_35503__$1;
(statearr_35654_37476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (23))){
var inst_35445 = (state_35503[(14)]);
var inst_35451 = (inst_35445 == null);
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35451)){
var statearr_35659_37480 = state_35503__$1;
(statearr_35659_37480[(1)] = (26));

} else {
var statearr_35661_37481 = state_35503__$1;
(statearr_35661_37481[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (35))){
var inst_35488 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
if(cljs.core.truth_(inst_35488)){
var statearr_35666_37482 = state_35503__$1;
(statearr_35666_37482[(1)] = (36));

} else {
var statearr_35668_37483 = state_35503__$1;
(statearr_35668_37483[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (19))){
var inst_35408 = (state_35503[(7)]);
var inst_35431 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35408);
var state_35503__$1 = state_35503;
var statearr_35679_37486 = state_35503__$1;
(statearr_35679_37486[(2)] = inst_35431);

(statearr_35679_37486[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (11))){
var inst_35408 = (state_35503[(7)]);
var inst_35413 = (inst_35408 == null);
var inst_35414 = cljs.core.not(inst_35413);
var state_35503__$1 = state_35503;
if(inst_35414){
var statearr_35686_37488 = state_35503__$1;
(statearr_35686_37488[(1)] = (13));

} else {
var statearr_35689_37490 = state_35503__$1;
(statearr_35689_37490[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (9))){
var inst_35377 = (state_35503[(8)]);
var state_35503__$1 = state_35503;
var statearr_35694_37493 = state_35503__$1;
(statearr_35694_37493[(2)] = inst_35377);

(statearr_35694_37493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (5))){
var state_35503__$1 = state_35503;
var statearr_35700_37494 = state_35503__$1;
(statearr_35700_37494[(2)] = true);

(statearr_35700_37494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (14))){
var state_35503__$1 = state_35503;
var statearr_35703_37496 = state_35503__$1;
(statearr_35703_37496[(2)] = false);

(statearr_35703_37496[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (26))){
var inst_35446 = (state_35503[(10)]);
var inst_35464 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35446);
var state_35503__$1 = state_35503;
var statearr_35709_37499 = state_35503__$1;
(statearr_35709_37499[(2)] = inst_35464);

(statearr_35709_37499[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (16))){
var state_35503__$1 = state_35503;
var statearr_35714_37503 = state_35503__$1;
(statearr_35714_37503[(2)] = true);

(statearr_35714_37503[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (38))){
var inst_35493 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35722_37506 = state_35503__$1;
(statearr_35722_37506[(2)] = inst_35493);

(statearr_35722_37506[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (30))){
var inst_35436 = (state_35503[(13)]);
var inst_35446 = (state_35503[(10)]);
var inst_35435 = (state_35503[(11)]);
var inst_35480 = cljs.core.empty_QMARK_(inst_35435);
var inst_35481 = (inst_35436.cljs$core$IFn$_invoke$arity$1 ? inst_35436.cljs$core$IFn$_invoke$arity$1(inst_35446) : inst_35436.call(null,inst_35446));
var inst_35482 = cljs.core.not(inst_35481);
var inst_35483 = ((inst_35480) && (inst_35482));
var state_35503__$1 = state_35503;
var statearr_35723_37513 = state_35503__$1;
(statearr_35723_37513[(2)] = inst_35483);

(statearr_35723_37513[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (10))){
var inst_35377 = (state_35503[(8)]);
var inst_35402 = (state_35503[(2)]);
var inst_35404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35402,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35402,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35402,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35408 = inst_35377;
var state_35503__$1 = (function (){var statearr_35724 = state_35503;
(statearr_35724[(7)] = inst_35408);

(statearr_35724[(16)] = inst_35404);

(statearr_35724[(17)] = inst_35405);

(statearr_35724[(18)] = inst_35406);

return statearr_35724;
})();
var statearr_35725_37520 = state_35503__$1;
(statearr_35725_37520[(2)] = null);

(statearr_35725_37520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (18))){
var inst_35425 = (state_35503[(2)]);
var state_35503__$1 = state_35503;
var statearr_35726_37523 = state_35503__$1;
(statearr_35726_37523[(2)] = inst_35425);

(statearr_35726_37523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (37))){
var state_35503__$1 = state_35503;
var statearr_35729_37528 = state_35503__$1;
(statearr_35729_37528[(2)] = null);

(statearr_35729_37528[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35504 === (8))){
var inst_35377 = (state_35503[(8)]);
var inst_35399 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35377);
var state_35503__$1 = state_35503;
var statearr_35730_37531 = state_35503__$1;
(statearr_35730_37531[(2)] = inst_35399);

(statearr_35730_37531[(1)] = (10));


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
var statearr_35733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35733[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35733[(1)] = (1));

return statearr_35733;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35503){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35503);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35734){if((e35734 instanceof Object)){
var ex__34210__auto__ = e35734;
var statearr_35735_37538 = state_35503;
(statearr_35735_37538[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35734;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37539 = state_35503;
state_35503 = G__37539;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35503){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35736 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35736[(6)] = c__34274__auto___37406);

return statearr_35736;
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
var G__35757 = arguments.length;
switch (G__35757) {
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
var G__35769 = arguments.length;
switch (G__35769) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35761_SHARP_){
if(cljs.core.truth_((p1__35761_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35761_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35761_SHARP_.call(null,topic)))){
return p1__35761_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35761_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35780 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35780 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35781){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35781 = meta35781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35782,meta35781__$1){
var self__ = this;
var _35782__$1 = this;
return (new cljs.core.async.t_cljs$core$async35780(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35781__$1));
}));

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35782){
var self__ = this;
var _35782__$1 = this;
return self__.meta35781;
}));

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35780.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35781","meta35781",-1188276579,null)], null);
}));

(cljs.core.async.t_cljs$core$async35780.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35780");

(cljs.core.async.t_cljs$core$async35780.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35780");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35780.
 */
cljs.core.async.__GT_t_cljs$core$async35780 = (function cljs$core$async$__GT_t_cljs$core$async35780(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35781){
return (new cljs.core.async.t_cljs$core$async35780(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35781));
});

}

return (new cljs.core.async.t_cljs$core$async35780(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35895){
var state_val_35897 = (state_35895[(1)]);
if((state_val_35897 === (7))){
var inst_35885 = (state_35895[(2)]);
var state_35895__$1 = state_35895;
var statearr_35900_37601 = state_35895__$1;
(statearr_35900_37601[(2)] = inst_35885);

(statearr_35900_37601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (20))){
var state_35895__$1 = state_35895;
var statearr_35902_37604 = state_35895__$1;
(statearr_35902_37604[(2)] = null);

(statearr_35902_37604[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (1))){
var state_35895__$1 = state_35895;
var statearr_35905_37605 = state_35895__$1;
(statearr_35905_37605[(2)] = null);

(statearr_35905_37605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (24))){
var inst_35868 = (state_35895[(7)]);
var inst_35877 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35868);
var state_35895__$1 = state_35895;
var statearr_35906_37606 = state_35895__$1;
(statearr_35906_37606[(2)] = inst_35877);

(statearr_35906_37606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (4))){
var inst_35814 = (state_35895[(8)]);
var inst_35814__$1 = (state_35895[(2)]);
var inst_35815 = (inst_35814__$1 == null);
var state_35895__$1 = (function (){var statearr_35911 = state_35895;
(statearr_35911[(8)] = inst_35814__$1);

return statearr_35911;
})();
if(cljs.core.truth_(inst_35815)){
var statearr_35912_37609 = state_35895__$1;
(statearr_35912_37609[(1)] = (5));

} else {
var statearr_35913_37610 = state_35895__$1;
(statearr_35913_37610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (15))){
var inst_35862 = (state_35895[(2)]);
var state_35895__$1 = state_35895;
var statearr_35914_37615 = state_35895__$1;
(statearr_35914_37615[(2)] = inst_35862);

(statearr_35914_37615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (21))){
var inst_35882 = (state_35895[(2)]);
var state_35895__$1 = (function (){var statearr_35917 = state_35895;
(statearr_35917[(9)] = inst_35882);

return statearr_35917;
})();
var statearr_35918_37620 = state_35895__$1;
(statearr_35918_37620[(2)] = null);

(statearr_35918_37620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (13))){
var inst_35841 = (state_35895[(10)]);
var inst_35845 = cljs.core.chunked_seq_QMARK_(inst_35841);
var state_35895__$1 = state_35895;
if(inst_35845){
var statearr_35921_37622 = state_35895__$1;
(statearr_35921_37622[(1)] = (16));

} else {
var statearr_35922_37623 = state_35895__$1;
(statearr_35922_37623[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (22))){
var inst_35874 = (state_35895[(2)]);
var state_35895__$1 = state_35895;
if(cljs.core.truth_(inst_35874)){
var statearr_35924_37626 = state_35895__$1;
(statearr_35924_37626[(1)] = (23));

} else {
var statearr_35925_37630 = state_35895__$1;
(statearr_35925_37630[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (6))){
var inst_35814 = (state_35895[(8)]);
var inst_35868 = (state_35895[(7)]);
var inst_35870 = (state_35895[(11)]);
var inst_35868__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35814) : topic_fn.call(null,inst_35814));
var inst_35869 = cljs.core.deref(mults);
var inst_35870__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35869,inst_35868__$1);
var state_35895__$1 = (function (){var statearr_35930 = state_35895;
(statearr_35930[(7)] = inst_35868__$1);

(statearr_35930[(11)] = inst_35870__$1);

return statearr_35930;
})();
if(cljs.core.truth_(inst_35870__$1)){
var statearr_35931_37638 = state_35895__$1;
(statearr_35931_37638[(1)] = (19));

} else {
var statearr_35932_37639 = state_35895__$1;
(statearr_35932_37639[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (25))){
var inst_35879 = (state_35895[(2)]);
var state_35895__$1 = state_35895;
var statearr_35933_37641 = state_35895__$1;
(statearr_35933_37641[(2)] = inst_35879);

(statearr_35933_37641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (17))){
var inst_35841 = (state_35895[(10)]);
var inst_35853 = cljs.core.first(inst_35841);
var inst_35854 = cljs.core.async.muxch_STAR_(inst_35853);
var inst_35855 = cljs.core.async.close_BANG_(inst_35854);
var inst_35856 = cljs.core.next(inst_35841);
var inst_35827 = inst_35856;
var inst_35828 = null;
var inst_35829 = (0);
var inst_35830 = (0);
var state_35895__$1 = (function (){var statearr_35937 = state_35895;
(statearr_35937[(12)] = inst_35829);

(statearr_35937[(13)] = inst_35828);

(statearr_35937[(14)] = inst_35827);

(statearr_35937[(15)] = inst_35830);

(statearr_35937[(16)] = inst_35855);

return statearr_35937;
})();
var statearr_35940_37650 = state_35895__$1;
(statearr_35940_37650[(2)] = null);

(statearr_35940_37650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (3))){
var inst_35887 = (state_35895[(2)]);
var state_35895__$1 = state_35895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35895__$1,inst_35887);
} else {
if((state_val_35897 === (12))){
var inst_35864 = (state_35895[(2)]);
var state_35895__$1 = state_35895;
var statearr_35943_37652 = state_35895__$1;
(statearr_35943_37652[(2)] = inst_35864);

(statearr_35943_37652[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (2))){
var state_35895__$1 = state_35895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35895__$1,(4),ch);
} else {
if((state_val_35897 === (23))){
var state_35895__$1 = state_35895;
var statearr_35945_37662 = state_35895__$1;
(statearr_35945_37662[(2)] = null);

(statearr_35945_37662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (19))){
var inst_35814 = (state_35895[(8)]);
var inst_35870 = (state_35895[(11)]);
var inst_35872 = cljs.core.async.muxch_STAR_(inst_35870);
var state_35895__$1 = state_35895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35895__$1,(22),inst_35872,inst_35814);
} else {
if((state_val_35897 === (11))){
var inst_35827 = (state_35895[(14)]);
var inst_35841 = (state_35895[(10)]);
var inst_35841__$1 = cljs.core.seq(inst_35827);
var state_35895__$1 = (function (){var statearr_35948 = state_35895;
(statearr_35948[(10)] = inst_35841__$1);

return statearr_35948;
})();
if(inst_35841__$1){
var statearr_35949_37667 = state_35895__$1;
(statearr_35949_37667[(1)] = (13));

} else {
var statearr_35952_37668 = state_35895__$1;
(statearr_35952_37668[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (9))){
var inst_35866 = (state_35895[(2)]);
var state_35895__$1 = state_35895;
var statearr_35954_37673 = state_35895__$1;
(statearr_35954_37673[(2)] = inst_35866);

(statearr_35954_37673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (5))){
var inst_35824 = cljs.core.deref(mults);
var inst_35825 = cljs.core.vals(inst_35824);
var inst_35826 = cljs.core.seq(inst_35825);
var inst_35827 = inst_35826;
var inst_35828 = null;
var inst_35829 = (0);
var inst_35830 = (0);
var state_35895__$1 = (function (){var statearr_35959 = state_35895;
(statearr_35959[(12)] = inst_35829);

(statearr_35959[(13)] = inst_35828);

(statearr_35959[(14)] = inst_35827);

(statearr_35959[(15)] = inst_35830);

return statearr_35959;
})();
var statearr_35960_37679 = state_35895__$1;
(statearr_35960_37679[(2)] = null);

(statearr_35960_37679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (14))){
var state_35895__$1 = state_35895;
var statearr_35964_37680 = state_35895__$1;
(statearr_35964_37680[(2)] = null);

(statearr_35964_37680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (16))){
var inst_35841 = (state_35895[(10)]);
var inst_35847 = cljs.core.chunk_first(inst_35841);
var inst_35849 = cljs.core.chunk_rest(inst_35841);
var inst_35850 = cljs.core.count(inst_35847);
var inst_35827 = inst_35849;
var inst_35828 = inst_35847;
var inst_35829 = inst_35850;
var inst_35830 = (0);
var state_35895__$1 = (function (){var statearr_35968 = state_35895;
(statearr_35968[(12)] = inst_35829);

(statearr_35968[(13)] = inst_35828);

(statearr_35968[(14)] = inst_35827);

(statearr_35968[(15)] = inst_35830);

return statearr_35968;
})();
var statearr_35969_37692 = state_35895__$1;
(statearr_35969_37692[(2)] = null);

(statearr_35969_37692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (10))){
var inst_35829 = (state_35895[(12)]);
var inst_35828 = (state_35895[(13)]);
var inst_35827 = (state_35895[(14)]);
var inst_35830 = (state_35895[(15)]);
var inst_35835 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35828,inst_35830);
var inst_35836 = cljs.core.async.muxch_STAR_(inst_35835);
var inst_35837 = cljs.core.async.close_BANG_(inst_35836);
var inst_35838 = (inst_35830 + (1));
var tmp35961 = inst_35829;
var tmp35962 = inst_35828;
var tmp35963 = inst_35827;
var inst_35827__$1 = tmp35963;
var inst_35828__$1 = tmp35962;
var inst_35829__$1 = tmp35961;
var inst_35830__$1 = inst_35838;
var state_35895__$1 = (function (){var statearr_35974 = state_35895;
(statearr_35974[(12)] = inst_35829__$1);

(statearr_35974[(13)] = inst_35828__$1);

(statearr_35974[(17)] = inst_35837);

(statearr_35974[(14)] = inst_35827__$1);

(statearr_35974[(15)] = inst_35830__$1);

return statearr_35974;
})();
var statearr_35975_37703 = state_35895__$1;
(statearr_35975_37703[(2)] = null);

(statearr_35975_37703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (18))){
var inst_35859 = (state_35895[(2)]);
var state_35895__$1 = state_35895;
var statearr_35978_37704 = state_35895__$1;
(statearr_35978_37704[(2)] = inst_35859);

(statearr_35978_37704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (8))){
var inst_35829 = (state_35895[(12)]);
var inst_35830 = (state_35895[(15)]);
var inst_35832 = (inst_35830 < inst_35829);
var inst_35833 = inst_35832;
var state_35895__$1 = state_35895;
if(cljs.core.truth_(inst_35833)){
var statearr_35980_37706 = state_35895__$1;
(statearr_35980_37706[(1)] = (10));

} else {
var statearr_35981_37709 = state_35895__$1;
(statearr_35981_37709[(1)] = (11));

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
var statearr_35986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35986[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35986[(1)] = (1));

return statearr_35986;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35895){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35895);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35987){if((e35987 instanceof Object)){
var ex__34210__auto__ = e35987;
var statearr_35988_37720 = state_35895;
(statearr_35988_37720[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37722 = state_35895;
state_35895 = G__37722;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35991 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35991[(6)] = c__34274__auto___37591);

return statearr_35991;
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
var G__35997 = arguments.length;
switch (G__35997) {
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
var G__36008 = arguments.length;
switch (G__36008) {
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
var G__36014 = arguments.length;
switch (G__36014) {
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
var c__34274__auto___37746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36071){
var state_val_36072 = (state_36071[(1)]);
if((state_val_36072 === (7))){
var state_36071__$1 = state_36071;
var statearr_36080_37749 = state_36071__$1;
(statearr_36080_37749[(2)] = null);

(statearr_36080_37749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (1))){
var state_36071__$1 = state_36071;
var statearr_36081_37750 = state_36071__$1;
(statearr_36081_37750[(2)] = null);

(statearr_36081_37750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (4))){
var inst_36023 = (state_36071[(7)]);
var inst_36025 = (inst_36023 < cnt);
var state_36071__$1 = state_36071;
if(cljs.core.truth_(inst_36025)){
var statearr_36085_37751 = state_36071__$1;
(statearr_36085_37751[(1)] = (6));

} else {
var statearr_36087_37753 = state_36071__$1;
(statearr_36087_37753[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (15))){
var inst_36063 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36088_37755 = state_36071__$1;
(statearr_36088_37755[(2)] = inst_36063);

(statearr_36088_37755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (13))){
var inst_36055 = cljs.core.async.close_BANG_(out);
var state_36071__$1 = state_36071;
var statearr_36089_37756 = state_36071__$1;
(statearr_36089_37756[(2)] = inst_36055);

(statearr_36089_37756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (6))){
var state_36071__$1 = state_36071;
var statearr_36090_37757 = state_36071__$1;
(statearr_36090_37757[(2)] = null);

(statearr_36090_37757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (3))){
var inst_36065 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36071__$1,inst_36065);
} else {
if((state_val_36072 === (12))){
var inst_36052 = (state_36071[(8)]);
var inst_36052__$1 = (state_36071[(2)]);
var inst_36053 = cljs.core.some(cljs.core.nil_QMARK_,inst_36052__$1);
var state_36071__$1 = (function (){var statearr_36097 = state_36071;
(statearr_36097[(8)] = inst_36052__$1);

return statearr_36097;
})();
if(cljs.core.truth_(inst_36053)){
var statearr_36098_37762 = state_36071__$1;
(statearr_36098_37762[(1)] = (13));

} else {
var statearr_36100_37763 = state_36071__$1;
(statearr_36100_37763[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (2))){
var inst_36022 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36023 = (0);
var state_36071__$1 = (function (){var statearr_36104 = state_36071;
(statearr_36104[(9)] = inst_36022);

(statearr_36104[(7)] = inst_36023);

return statearr_36104;
})();
var statearr_36105_37767 = state_36071__$1;
(statearr_36105_37767[(2)] = null);

(statearr_36105_37767[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (11))){
var inst_36023 = (state_36071[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36071,(10),Object,null,(9));
var inst_36036 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36023) : chs__$1.call(null,inst_36023));
var inst_36037 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36023) : done.call(null,inst_36023));
var inst_36038 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36036,inst_36037);
var state_36071__$1 = state_36071;
var statearr_36106_37769 = state_36071__$1;
(statearr_36106_37769[(2)] = inst_36038);


cljs.core.async.impl.ioc_helpers.process_exception(state_36071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (9))){
var inst_36023 = (state_36071[(7)]);
var inst_36041 = (state_36071[(2)]);
var inst_36042 = (inst_36023 + (1));
var inst_36023__$1 = inst_36042;
var state_36071__$1 = (function (){var statearr_36107 = state_36071;
(statearr_36107[(10)] = inst_36041);

(statearr_36107[(7)] = inst_36023__$1);

return statearr_36107;
})();
var statearr_36108_37771 = state_36071__$1;
(statearr_36108_37771[(2)] = null);

(statearr_36108_37771[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (5))){
var inst_36049 = (state_36071[(2)]);
var state_36071__$1 = (function (){var statearr_36109 = state_36071;
(statearr_36109[(11)] = inst_36049);

return statearr_36109;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36071__$1,(12),dchan);
} else {
if((state_val_36072 === (14))){
var inst_36052 = (state_36071[(8)]);
var inst_36058 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36052);
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36071__$1,(16),out,inst_36058);
} else {
if((state_val_36072 === (16))){
var inst_36060 = (state_36071[(2)]);
var state_36071__$1 = (function (){var statearr_36110 = state_36071;
(statearr_36110[(12)] = inst_36060);

return statearr_36110;
})();
var statearr_36111_37772 = state_36071__$1;
(statearr_36111_37772[(2)] = null);

(statearr_36111_37772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (10))){
var inst_36027 = (state_36071[(2)]);
var inst_36028 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36071__$1 = (function (){var statearr_36112 = state_36071;
(statearr_36112[(13)] = inst_36027);

return statearr_36112;
})();
var statearr_36113_37777 = state_36071__$1;
(statearr_36113_37777[(2)] = inst_36028);


cljs.core.async.impl.ioc_helpers.process_exception(state_36071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (8))){
var inst_36047 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36114_37778 = state_36071__$1;
(statearr_36114_37778[(2)] = inst_36047);

(statearr_36114_37778[(1)] = (5));


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
var statearr_36115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36115[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36115[(1)] = (1));

return statearr_36115;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36071){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36071);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36116){if((e36116 instanceof Object)){
var ex__34210__auto__ = e36116;
var statearr_36117_37785 = state_36071;
(statearr_36117_37785[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37789 = state_36071;
state_36071 = G__37789;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36119 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36119[(6)] = c__34274__auto___37746);

return statearr_36119;
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
var c__34274__auto___37796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_36179_37805 = state_36176__$1;
(statearr_36179_37805[(1)] = (8));

} else {
var statearr_36180_37806 = state_36176__$1;
(statearr_36180_37806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (1))){
var inst_36145 = cljs.core.vec(chs);
var inst_36146 = inst_36145;
var state_36176__$1 = (function (){var statearr_36185 = state_36176;
(statearr_36185[(10)] = inst_36146);

return statearr_36185;
})();
var statearr_36186_37809 = state_36176__$1;
(statearr_36186_37809[(2)] = null);

(statearr_36186_37809[(1)] = (2));


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
var statearr_36190_37811 = state_36176__$1;
(statearr_36190_37811[(2)] = inst_36172);

(statearr_36190_37811[(1)] = (3));


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
var statearr_36192_37819 = state_36176__$1;
(statearr_36192_37819[(1)] = (4));

} else {
var statearr_36193_37820 = state_36176__$1;
(statearr_36193_37820[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (11))){
var inst_36146 = (state_36176[(10)]);
var inst_36165 = (state_36176[(2)]);
var tmp36191 = inst_36146;
var inst_36146__$1 = tmp36191;
var state_36176__$1 = (function (){var statearr_36196 = state_36176;
(statearr_36196[(11)] = inst_36165);

(statearr_36196[(10)] = inst_36146__$1);

return statearr_36196;
})();
var statearr_36198_37822 = state_36176__$1;
(statearr_36198_37822[(2)] = null);

(statearr_36198_37822[(1)] = (2));


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
var statearr_36203_37830 = state_36176__$1;
(statearr_36203_37830[(2)] = inst_36170);

(statearr_36203_37830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36177 === (10))){
var inst_36168 = (state_36176[(2)]);
var state_36176__$1 = state_36176;
var statearr_36206_37831 = state_36176__$1;
(statearr_36206_37831[(2)] = inst_36168);

(statearr_36206_37831[(1)] = (6));


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
return (function (p1__36120_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36120_SHARP_);
});
})();
var inst_36161 = cljs.core.filterv(inst_36160,inst_36146);
var inst_36146__$1 = inst_36161;
var state_36176__$1 = (function (){var statearr_36207 = state_36176;
(statearr_36207[(10)] = inst_36146__$1);

return statearr_36207;
})();
var statearr_36208_37838 = state_36176__$1;
(statearr_36208_37838[(2)] = null);

(statearr_36208_37838[(1)] = (2));


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
var statearr_36209 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36209[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36209[(1)] = (1));

return statearr_36209;
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
}catch (e36211){if((e36211 instanceof Object)){
var ex__34210__auto__ = e36211;
var statearr_36214_37844 = state_36176;
(statearr_36214_37844[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36211;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37846 = state_36176;
state_36176 = G__37846;
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
var state__34276__auto__ = (function (){var statearr_36219 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36219[(6)] = c__34274__auto___37796);

return statearr_36219;
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
var G__36235 = arguments.length;
switch (G__36235) {
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
var c__34274__auto___37857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36262){
var state_val_36263 = (state_36262[(1)]);
if((state_val_36263 === (7))){
var inst_36243 = (state_36262[(7)]);
var inst_36243__$1 = (state_36262[(2)]);
var inst_36244 = (inst_36243__$1 == null);
var inst_36245 = cljs.core.not(inst_36244);
var state_36262__$1 = (function (){var statearr_36266 = state_36262;
(statearr_36266[(7)] = inst_36243__$1);

return statearr_36266;
})();
if(inst_36245){
var statearr_36267_37860 = state_36262__$1;
(statearr_36267_37860[(1)] = (8));

} else {
var statearr_36268_37861 = state_36262__$1;
(statearr_36268_37861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (1))){
var inst_36237 = (0);
var state_36262__$1 = (function (){var statearr_36271 = state_36262;
(statearr_36271[(8)] = inst_36237);

return statearr_36271;
})();
var statearr_36272_37867 = state_36262__$1;
(statearr_36272_37867[(2)] = null);

(statearr_36272_37867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (4))){
var state_36262__$1 = state_36262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36262__$1,(7),ch);
} else {
if((state_val_36263 === (6))){
var inst_36256 = (state_36262[(2)]);
var state_36262__$1 = state_36262;
var statearr_36273_37870 = state_36262__$1;
(statearr_36273_37870[(2)] = inst_36256);

(statearr_36273_37870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (3))){
var inst_36258 = (state_36262[(2)]);
var inst_36259 = cljs.core.async.close_BANG_(out);
var state_36262__$1 = (function (){var statearr_36274 = state_36262;
(statearr_36274[(9)] = inst_36258);

return statearr_36274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36262__$1,inst_36259);
} else {
if((state_val_36263 === (2))){
var inst_36237 = (state_36262[(8)]);
var inst_36240 = (inst_36237 < n);
var state_36262__$1 = state_36262;
if(cljs.core.truth_(inst_36240)){
var statearr_36277_37874 = state_36262__$1;
(statearr_36277_37874[(1)] = (4));

} else {
var statearr_36278_37878 = state_36262__$1;
(statearr_36278_37878[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (11))){
var inst_36237 = (state_36262[(8)]);
var inst_36248 = (state_36262[(2)]);
var inst_36249 = (inst_36237 + (1));
var inst_36237__$1 = inst_36249;
var state_36262__$1 = (function (){var statearr_36279 = state_36262;
(statearr_36279[(8)] = inst_36237__$1);

(statearr_36279[(10)] = inst_36248);

return statearr_36279;
})();
var statearr_36280_37883 = state_36262__$1;
(statearr_36280_37883[(2)] = null);

(statearr_36280_37883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (9))){
var state_36262__$1 = state_36262;
var statearr_36283_37884 = state_36262__$1;
(statearr_36283_37884[(2)] = null);

(statearr_36283_37884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (5))){
var state_36262__$1 = state_36262;
var statearr_36286_37885 = state_36262__$1;
(statearr_36286_37885[(2)] = null);

(statearr_36286_37885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (10))){
var inst_36253 = (state_36262[(2)]);
var state_36262__$1 = state_36262;
var statearr_36287_37887 = state_36262__$1;
(statearr_36287_37887[(2)] = inst_36253);

(statearr_36287_37887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36263 === (8))){
var inst_36243 = (state_36262[(7)]);
var state_36262__$1 = state_36262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36262__$1,(11),out,inst_36243);
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
var statearr_36293 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36293[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36293[(1)] = (1));

return statearr_36293;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36262){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36262);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36297){if((e36297 instanceof Object)){
var ex__34210__auto__ = e36297;
var statearr_36298_37892 = state_36262;
(statearr_36298_37892[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36297;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37896 = state_36262;
state_36262 = G__37896;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36300 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36300[(6)] = c__34274__auto___37857);

return statearr_36300;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36304 = (function (f,ch,meta36305){
this.f = f;
this.ch = ch;
this.meta36305 = meta36305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36306,meta36305__$1){
var self__ = this;
var _36306__$1 = this;
return (new cljs.core.async.t_cljs$core$async36304(self__.f,self__.ch,meta36305__$1));
}));

(cljs.core.async.t_cljs$core$async36304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36306){
var self__ = this;
var _36306__$1 = this;
return self__.meta36305;
}));

(cljs.core.async.t_cljs$core$async36304.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36304.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36304.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36304.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36304.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36311 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36311 = (function (f,ch,meta36305,_,fn1,meta36312){
this.f = f;
this.ch = ch;
this.meta36305 = meta36305;
this._ = _;
this.fn1 = fn1;
this.meta36312 = meta36312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36313,meta36312__$1){
var self__ = this;
var _36313__$1 = this;
return (new cljs.core.async.t_cljs$core$async36311(self__.f,self__.ch,self__.meta36305,self__._,self__.fn1,meta36312__$1));
}));

(cljs.core.async.t_cljs$core$async36311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36313){
var self__ = this;
var _36313__$1 = this;
return self__.meta36312;
}));

(cljs.core.async.t_cljs$core$async36311.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36311.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36311.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36311.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36302_SHARP_){
var G__36320 = (((p1__36302_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36302_SHARP_) : self__.f.call(null,p1__36302_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36320) : f1.call(null,G__36320));
});
}));

(cljs.core.async.t_cljs$core$async36311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36305","meta36305",-622131446,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36304","cljs.core.async/t_cljs$core$async36304",1956503866,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36312","meta36312",1583021152,null)], null);
}));

(cljs.core.async.t_cljs$core$async36311.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36311");

(cljs.core.async.t_cljs$core$async36311.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36311");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36311.
 */
cljs.core.async.__GT_t_cljs$core$async36311 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36311(f__$1,ch__$1,meta36305__$1,___$2,fn1__$1,meta36312){
return (new cljs.core.async.t_cljs$core$async36311(f__$1,ch__$1,meta36305__$1,___$2,fn1__$1,meta36312));
});

}

return (new cljs.core.async.t_cljs$core$async36311(self__.f,self__.ch,self__.meta36305,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36329 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36329) : self__.f.call(null,G__36329));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36304.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36304.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36305","meta36305",-622131446,null)], null);
}));

(cljs.core.async.t_cljs$core$async36304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36304");

(cljs.core.async.t_cljs$core$async36304.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36304.
 */
cljs.core.async.__GT_t_cljs$core$async36304 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36304(f__$1,ch__$1,meta36305){
return (new cljs.core.async.t_cljs$core$async36304(f__$1,ch__$1,meta36305));
});

}

return (new cljs.core.async.t_cljs$core$async36304(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36336 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36336 = (function (f,ch,meta36337){
this.f = f;
this.ch = ch;
this.meta36337 = meta36337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36338,meta36337__$1){
var self__ = this;
var _36338__$1 = this;
return (new cljs.core.async.t_cljs$core$async36336(self__.f,self__.ch,meta36337__$1));
}));

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36338){
var self__ = this;
var _36338__$1 = this;
return self__.meta36337;
}));

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36336.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36337","meta36337",-22991669,null)], null);
}));

(cljs.core.async.t_cljs$core$async36336.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36336");

(cljs.core.async.t_cljs$core$async36336.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36336");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36336.
 */
cljs.core.async.__GT_t_cljs$core$async36336 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36336(f__$1,ch__$1,meta36337){
return (new cljs.core.async.t_cljs$core$async36336(f__$1,ch__$1,meta36337));
});

}

return (new cljs.core.async.t_cljs$core$async36336(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36351 = (function (p,ch,meta36352){
this.p = p;
this.ch = ch;
this.meta36352 = meta36352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36353,meta36352__$1){
var self__ = this;
var _36353__$1 = this;
return (new cljs.core.async.t_cljs$core$async36351(self__.p,self__.ch,meta36352__$1));
}));

(cljs.core.async.t_cljs$core$async36351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36353){
var self__ = this;
var _36353__$1 = this;
return self__.meta36352;
}));

(cljs.core.async.t_cljs$core$async36351.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36351.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36351.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36351.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36352","meta36352",-793377060,null)], null);
}));

(cljs.core.async.t_cljs$core$async36351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36351");

(cljs.core.async.t_cljs$core$async36351.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36351.
 */
cljs.core.async.__GT_t_cljs$core$async36351 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36351(p__$1,ch__$1,meta36352){
return (new cljs.core.async.t_cljs$core$async36351(p__$1,ch__$1,meta36352));
});

}

return (new cljs.core.async.t_cljs$core$async36351(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36366 = arguments.length;
switch (G__36366) {
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
var c__34274__auto___37953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36403){
var state_val_36404 = (state_36403[(1)]);
if((state_val_36404 === (7))){
var inst_36399 = (state_36403[(2)]);
var state_36403__$1 = state_36403;
var statearr_36406_37954 = state_36403__$1;
(statearr_36406_37954[(2)] = inst_36399);

(statearr_36406_37954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (1))){
var state_36403__$1 = state_36403;
var statearr_36407_37956 = state_36403__$1;
(statearr_36407_37956[(2)] = null);

(statearr_36407_37956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (4))){
var inst_36371 = (state_36403[(7)]);
var inst_36371__$1 = (state_36403[(2)]);
var inst_36373 = (inst_36371__$1 == null);
var state_36403__$1 = (function (){var statearr_36410 = state_36403;
(statearr_36410[(7)] = inst_36371__$1);

return statearr_36410;
})();
if(cljs.core.truth_(inst_36373)){
var statearr_36411_37961 = state_36403__$1;
(statearr_36411_37961[(1)] = (5));

} else {
var statearr_36412_37962 = state_36403__$1;
(statearr_36412_37962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (6))){
var inst_36371 = (state_36403[(7)]);
var inst_36377 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36371) : p.call(null,inst_36371));
var state_36403__$1 = state_36403;
if(cljs.core.truth_(inst_36377)){
var statearr_36415_37963 = state_36403__$1;
(statearr_36415_37963[(1)] = (8));

} else {
var statearr_36416_37965 = state_36403__$1;
(statearr_36416_37965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (3))){
var inst_36401 = (state_36403[(2)]);
var state_36403__$1 = state_36403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36403__$1,inst_36401);
} else {
if((state_val_36404 === (2))){
var state_36403__$1 = state_36403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36403__$1,(4),ch);
} else {
if((state_val_36404 === (11))){
var inst_36390 = (state_36403[(2)]);
var state_36403__$1 = state_36403;
var statearr_36427_37969 = state_36403__$1;
(statearr_36427_37969[(2)] = inst_36390);

(statearr_36427_37969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (9))){
var state_36403__$1 = state_36403;
var statearr_36428_37971 = state_36403__$1;
(statearr_36428_37971[(2)] = null);

(statearr_36428_37971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (5))){
var inst_36375 = cljs.core.async.close_BANG_(out);
var state_36403__$1 = state_36403;
var statearr_36441_37973 = state_36403__$1;
(statearr_36441_37973[(2)] = inst_36375);

(statearr_36441_37973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (10))){
var inst_36393 = (state_36403[(2)]);
var state_36403__$1 = (function (){var statearr_36447 = state_36403;
(statearr_36447[(8)] = inst_36393);

return statearr_36447;
})();
var statearr_36448_37974 = state_36403__$1;
(statearr_36448_37974[(2)] = null);

(statearr_36448_37974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36404 === (8))){
var inst_36371 = (state_36403[(7)]);
var state_36403__$1 = state_36403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36403__$1,(11),out,inst_36371);
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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36403){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36403);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36454){if((e36454 instanceof Object)){
var ex__34210__auto__ = e36454;
var statearr_36455_37986 = state_36403;
(statearr_36455_37986[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36454;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37988 = state_36403;
state_36403 = G__37988;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36457 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36457[(6)] = c__34274__auto___37953);

return statearr_36457;
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
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36533){
var state_val_36534 = (state_36533[(1)]);
if((state_val_36534 === (7))){
var inst_36528 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
var statearr_36540_37998 = state_36533__$1;
(statearr_36540_37998[(2)] = inst_36528);

(statearr_36540_37998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (20))){
var inst_36498 = (state_36533[(7)]);
var inst_36509 = (state_36533[(2)]);
var inst_36510 = cljs.core.next(inst_36498);
var inst_36483 = inst_36510;
var inst_36484 = null;
var inst_36485 = (0);
var inst_36486 = (0);
var state_36533__$1 = (function (){var statearr_36542 = state_36533;
(statearr_36542[(8)] = inst_36486);

(statearr_36542[(9)] = inst_36509);

(statearr_36542[(10)] = inst_36485);

(statearr_36542[(11)] = inst_36484);

(statearr_36542[(12)] = inst_36483);

return statearr_36542;
})();
var statearr_36543_38001 = state_36533__$1;
(statearr_36543_38001[(2)] = null);

(statearr_36543_38001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (1))){
var state_36533__$1 = state_36533;
var statearr_36544_38003 = state_36533__$1;
(statearr_36544_38003[(2)] = null);

(statearr_36544_38003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (4))){
var inst_36472 = (state_36533[(13)]);
var inst_36472__$1 = (state_36533[(2)]);
var inst_36473 = (inst_36472__$1 == null);
var state_36533__$1 = (function (){var statearr_36546 = state_36533;
(statearr_36546[(13)] = inst_36472__$1);

return statearr_36546;
})();
if(cljs.core.truth_(inst_36473)){
var statearr_36547_38008 = state_36533__$1;
(statearr_36547_38008[(1)] = (5));

} else {
var statearr_36548_38009 = state_36533__$1;
(statearr_36548_38009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (15))){
var state_36533__$1 = state_36533;
var statearr_36553_38010 = state_36533__$1;
(statearr_36553_38010[(2)] = null);

(statearr_36553_38010[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (21))){
var state_36533__$1 = state_36533;
var statearr_36554_38012 = state_36533__$1;
(statearr_36554_38012[(2)] = null);

(statearr_36554_38012[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (13))){
var inst_36486 = (state_36533[(8)]);
var inst_36485 = (state_36533[(10)]);
var inst_36484 = (state_36533[(11)]);
var inst_36483 = (state_36533[(12)]);
var inst_36493 = (state_36533[(2)]);
var inst_36494 = (inst_36486 + (1));
var tmp36549 = inst_36485;
var tmp36550 = inst_36484;
var tmp36551 = inst_36483;
var inst_36483__$1 = tmp36551;
var inst_36484__$1 = tmp36550;
var inst_36485__$1 = tmp36549;
var inst_36486__$1 = inst_36494;
var state_36533__$1 = (function (){var statearr_36556 = state_36533;
(statearr_36556[(8)] = inst_36486__$1);

(statearr_36556[(10)] = inst_36485__$1);

(statearr_36556[(11)] = inst_36484__$1);

(statearr_36556[(14)] = inst_36493);

(statearr_36556[(12)] = inst_36483__$1);

return statearr_36556;
})();
var statearr_36557_38019 = state_36533__$1;
(statearr_36557_38019[(2)] = null);

(statearr_36557_38019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (22))){
var state_36533__$1 = state_36533;
var statearr_36558_38020 = state_36533__$1;
(statearr_36558_38020[(2)] = null);

(statearr_36558_38020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (6))){
var inst_36472 = (state_36533[(13)]);
var inst_36481 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36472) : f.call(null,inst_36472));
var inst_36482 = cljs.core.seq(inst_36481);
var inst_36483 = inst_36482;
var inst_36484 = null;
var inst_36485 = (0);
var inst_36486 = (0);
var state_36533__$1 = (function (){var statearr_36560 = state_36533;
(statearr_36560[(8)] = inst_36486);

(statearr_36560[(10)] = inst_36485);

(statearr_36560[(11)] = inst_36484);

(statearr_36560[(12)] = inst_36483);

return statearr_36560;
})();
var statearr_36561_38022 = state_36533__$1;
(statearr_36561_38022[(2)] = null);

(statearr_36561_38022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (17))){
var inst_36498 = (state_36533[(7)]);
var inst_36502 = cljs.core.chunk_first(inst_36498);
var inst_36503 = cljs.core.chunk_rest(inst_36498);
var inst_36504 = cljs.core.count(inst_36502);
var inst_36483 = inst_36503;
var inst_36484 = inst_36502;
var inst_36485 = inst_36504;
var inst_36486 = (0);
var state_36533__$1 = (function (){var statearr_36563 = state_36533;
(statearr_36563[(8)] = inst_36486);

(statearr_36563[(10)] = inst_36485);

(statearr_36563[(11)] = inst_36484);

(statearr_36563[(12)] = inst_36483);

return statearr_36563;
})();
var statearr_36564_38026 = state_36533__$1;
(statearr_36564_38026[(2)] = null);

(statearr_36564_38026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (3))){
var inst_36530 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36533__$1,inst_36530);
} else {
if((state_val_36534 === (12))){
var inst_36518 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
var statearr_36566_38029 = state_36533__$1;
(statearr_36566_38029[(2)] = inst_36518);

(statearr_36566_38029[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (2))){
var state_36533__$1 = state_36533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36533__$1,(4),in$);
} else {
if((state_val_36534 === (23))){
var inst_36526 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
var statearr_36567_38030 = state_36533__$1;
(statearr_36567_38030[(2)] = inst_36526);

(statearr_36567_38030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (19))){
var inst_36513 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
var statearr_36569_38031 = state_36533__$1;
(statearr_36569_38031[(2)] = inst_36513);

(statearr_36569_38031[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (11))){
var inst_36483 = (state_36533[(12)]);
var inst_36498 = (state_36533[(7)]);
var inst_36498__$1 = cljs.core.seq(inst_36483);
var state_36533__$1 = (function (){var statearr_36570 = state_36533;
(statearr_36570[(7)] = inst_36498__$1);

return statearr_36570;
})();
if(inst_36498__$1){
var statearr_36571_38035 = state_36533__$1;
(statearr_36571_38035[(1)] = (14));

} else {
var statearr_36573_38036 = state_36533__$1;
(statearr_36573_38036[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (9))){
var inst_36520 = (state_36533[(2)]);
var inst_36521 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36533__$1 = (function (){var statearr_36574 = state_36533;
(statearr_36574[(15)] = inst_36520);

return statearr_36574;
})();
if(cljs.core.truth_(inst_36521)){
var statearr_36575_38037 = state_36533__$1;
(statearr_36575_38037[(1)] = (21));

} else {
var statearr_36576_38038 = state_36533__$1;
(statearr_36576_38038[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (5))){
var inst_36475 = cljs.core.async.close_BANG_(out);
var state_36533__$1 = state_36533;
var statearr_36578_38039 = state_36533__$1;
(statearr_36578_38039[(2)] = inst_36475);

(statearr_36578_38039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (14))){
var inst_36498 = (state_36533[(7)]);
var inst_36500 = cljs.core.chunked_seq_QMARK_(inst_36498);
var state_36533__$1 = state_36533;
if(inst_36500){
var statearr_36579_38044 = state_36533__$1;
(statearr_36579_38044[(1)] = (17));

} else {
var statearr_36580_38045 = state_36533__$1;
(statearr_36580_38045[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (16))){
var inst_36516 = (state_36533[(2)]);
var state_36533__$1 = state_36533;
var statearr_36582_38046 = state_36533__$1;
(statearr_36582_38046[(2)] = inst_36516);

(statearr_36582_38046[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36534 === (10))){
var inst_36486 = (state_36533[(8)]);
var inst_36484 = (state_36533[(11)]);
var inst_36491 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36484,inst_36486);
var state_36533__$1 = state_36533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36533__$1,(13),out,inst_36491);
} else {
if((state_val_36534 === (18))){
var inst_36498 = (state_36533[(7)]);
var inst_36507 = cljs.core.first(inst_36498);
var state_36533__$1 = state_36533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36533__$1,(20),out,inst_36507);
} else {
if((state_val_36534 === (8))){
var inst_36486 = (state_36533[(8)]);
var inst_36485 = (state_36533[(10)]);
var inst_36488 = (inst_36486 < inst_36485);
var inst_36489 = inst_36488;
var state_36533__$1 = state_36533;
if(cljs.core.truth_(inst_36489)){
var statearr_36584_38047 = state_36533__$1;
(statearr_36584_38047[(1)] = (10));

} else {
var statearr_36585_38048 = state_36533__$1;
(statearr_36585_38048[(1)] = (11));

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
var statearr_36589_38050 = state_36533;
(statearr_36589_38050[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36588;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38051 = state_36533;
state_36533 = G__38051;
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
var c__34274__auto___38063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36629){
var state_val_36630 = (state_36629[(1)]);
if((state_val_36630 === (7))){
var inst_36624 = (state_36629[(2)]);
var state_36629__$1 = state_36629;
var statearr_36632_38065 = state_36629__$1;
(statearr_36632_38065[(2)] = inst_36624);

(statearr_36632_38065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36630 === (1))){
var inst_36605 = null;
var state_36629__$1 = (function (){var statearr_36633 = state_36629;
(statearr_36633[(7)] = inst_36605);

return statearr_36633;
})();
var statearr_36634_38068 = state_36629__$1;
(statearr_36634_38068[(2)] = null);

(statearr_36634_38068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36630 === (4))){
var inst_36609 = (state_36629[(8)]);
var inst_36609__$1 = (state_36629[(2)]);
var inst_36610 = (inst_36609__$1 == null);
var inst_36611 = cljs.core.not(inst_36610);
var state_36629__$1 = (function (){var statearr_36636 = state_36629;
(statearr_36636[(8)] = inst_36609__$1);

return statearr_36636;
})();
if(inst_36611){
var statearr_36637_38069 = state_36629__$1;
(statearr_36637_38069[(1)] = (5));

} else {
var statearr_36638_38070 = state_36629__$1;
(statearr_36638_38070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36630 === (6))){
var state_36629__$1 = state_36629;
var statearr_36639_38071 = state_36629__$1;
(statearr_36639_38071[(2)] = null);

(statearr_36639_38071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36630 === (3))){
var inst_36626 = (state_36629[(2)]);
var inst_36627 = cljs.core.async.close_BANG_(out);
var state_36629__$1 = (function (){var statearr_36641 = state_36629;
(statearr_36641[(9)] = inst_36626);

return statearr_36641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36629__$1,inst_36627);
} else {
if((state_val_36630 === (2))){
var state_36629__$1 = state_36629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36629__$1,(4),ch);
} else {
if((state_val_36630 === (11))){
var inst_36609 = (state_36629[(8)]);
var inst_36618 = (state_36629[(2)]);
var inst_36605 = inst_36609;
var state_36629__$1 = (function (){var statearr_36642 = state_36629;
(statearr_36642[(7)] = inst_36605);

(statearr_36642[(10)] = inst_36618);

return statearr_36642;
})();
var statearr_36644_38075 = state_36629__$1;
(statearr_36644_38075[(2)] = null);

(statearr_36644_38075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36630 === (9))){
var inst_36609 = (state_36629[(8)]);
var state_36629__$1 = state_36629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36629__$1,(11),out,inst_36609);
} else {
if((state_val_36630 === (5))){
var inst_36605 = (state_36629[(7)]);
var inst_36609 = (state_36629[(8)]);
var inst_36613 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36609,inst_36605);
var state_36629__$1 = state_36629;
if(inst_36613){
var statearr_36647_38076 = state_36629__$1;
(statearr_36647_38076[(1)] = (8));

} else {
var statearr_36648_38077 = state_36629__$1;
(statearr_36648_38077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36630 === (10))){
var inst_36621 = (state_36629[(2)]);
var state_36629__$1 = state_36629;
var statearr_36649_38082 = state_36629__$1;
(statearr_36649_38082[(2)] = inst_36621);

(statearr_36649_38082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36630 === (8))){
var inst_36605 = (state_36629[(7)]);
var tmp36645 = inst_36605;
var inst_36605__$1 = tmp36645;
var state_36629__$1 = (function (){var statearr_36650 = state_36629;
(statearr_36650[(7)] = inst_36605__$1);

return statearr_36650;
})();
var statearr_36651_38083 = state_36629__$1;
(statearr_36651_38083[(2)] = null);

(statearr_36651_38083[(1)] = (2));


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
}catch (e36654){if((e36654 instanceof Object)){
var ex__34210__auto__ = e36654;
var statearr_36656_38089 = state_36629;
(statearr_36656_38089[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36654;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38090 = state_36629;
state_36629 = G__38090;
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
var state__34276__auto__ = (function (){var statearr_36657 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36657[(6)] = c__34274__auto___38063);

return statearr_36657;
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
var c__34274__auto___38093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36701){
var state_val_36702 = (state_36701[(1)]);
if((state_val_36702 === (7))){
var inst_36697 = (state_36701[(2)]);
var state_36701__$1 = state_36701;
var statearr_36704_38098 = state_36701__$1;
(statearr_36704_38098[(2)] = inst_36697);

(statearr_36704_38098[(1)] = (3));


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
var statearr_36707_38099 = state_36701__$1;
(statearr_36707_38099[(2)] = null);

(statearr_36707_38099[(1)] = (2));


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
var statearr_36709_38100 = state_36701__$1;
(statearr_36709_38100[(1)] = (5));

} else {
var statearr_36710_38101 = state_36701__$1;
(statearr_36710_38101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (15))){
var inst_36691 = (state_36701[(2)]);
var state_36701__$1 = state_36701;
var statearr_36712_38102 = state_36701__$1;
(statearr_36712_38102[(2)] = inst_36691);

(statearr_36712_38102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (13))){
var state_36701__$1 = state_36701;
var statearr_36713_38105 = state_36701__$1;
(statearr_36713_38105[(2)] = null);

(statearr_36713_38105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (6))){
var inst_36665 = (state_36701[(8)]);
var inst_36687 = (inst_36665 > (0));
var state_36701__$1 = state_36701;
if(cljs.core.truth_(inst_36687)){
var statearr_36715_38107 = state_36701__$1;
(statearr_36715_38107[(1)] = (12));

} else {
var statearr_36716_38108 = state_36701__$1;
(statearr_36716_38108[(1)] = (13));

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
var inst_36689 = cljs.core.vec(inst_36664);
var state_36701__$1 = state_36701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36701__$1,(15),out,inst_36689);
} else {
if((state_val_36702 === (2))){
var state_36701__$1 = state_36701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36701__$1,(4),ch);
} else {
if((state_val_36702 === (11))){
var inst_36681 = (state_36701[(2)]);
var inst_36682 = (new Array(n));
var inst_36664 = inst_36682;
var inst_36665 = (0);
var state_36701__$1 = (function (){var statearr_36718 = state_36701;
(statearr_36718[(7)] = inst_36664);

(statearr_36718[(10)] = inst_36681);

(statearr_36718[(8)] = inst_36665);

return statearr_36718;
})();
var statearr_36719_38111 = state_36701__$1;
(statearr_36719_38111[(2)] = null);

(statearr_36719_38111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (9))){
var inst_36664 = (state_36701[(7)]);
var inst_36679 = cljs.core.vec(inst_36664);
var state_36701__$1 = state_36701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36701__$1,(11),out,inst_36679);
} else {
if((state_val_36702 === (5))){
var inst_36668 = (state_36701[(9)]);
var inst_36664 = (state_36701[(7)]);
var inst_36673 = (state_36701[(11)]);
var inst_36665 = (state_36701[(8)]);
var inst_36672 = (inst_36664[inst_36665] = inst_36668);
var inst_36673__$1 = (inst_36665 + (1));
var inst_36674 = (inst_36673__$1 < n);
var state_36701__$1 = (function (){var statearr_36721 = state_36701;
(statearr_36721[(11)] = inst_36673__$1);

(statearr_36721[(12)] = inst_36672);

return statearr_36721;
})();
if(cljs.core.truth_(inst_36674)){
var statearr_36723_38114 = state_36701__$1;
(statearr_36723_38114[(1)] = (8));

} else {
var statearr_36724_38115 = state_36701__$1;
(statearr_36724_38115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (14))){
var inst_36694 = (state_36701[(2)]);
var inst_36695 = cljs.core.async.close_BANG_(out);
var state_36701__$1 = (function (){var statearr_36726 = state_36701;
(statearr_36726[(13)] = inst_36694);

return statearr_36726;
})();
var statearr_36727_38116 = state_36701__$1;
(statearr_36727_38116[(2)] = inst_36695);

(statearr_36727_38116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (10))){
var inst_36685 = (state_36701[(2)]);
var state_36701__$1 = state_36701;
var statearr_36729_38118 = state_36701__$1;
(statearr_36729_38118[(2)] = inst_36685);

(statearr_36729_38118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36702 === (8))){
var inst_36664 = (state_36701[(7)]);
var inst_36673 = (state_36701[(11)]);
var tmp36725 = inst_36664;
var inst_36664__$1 = tmp36725;
var inst_36665 = inst_36673;
var state_36701__$1 = (function (){var statearr_36730 = state_36701;
(statearr_36730[(7)] = inst_36664__$1);

(statearr_36730[(8)] = inst_36665);

return statearr_36730;
})();
var statearr_36731_38120 = state_36701__$1;
(statearr_36731_38120[(2)] = null);

(statearr_36731_38120[(1)] = (2));


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
var statearr_36733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36733[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36733[(1)] = (1));

return statearr_36733;
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
}catch (e36738){if((e36738 instanceof Object)){
var ex__34210__auto__ = e36738;
var statearr_36739_38121 = state_36701;
(statearr_36739_38121[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36738;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38122 = state_36701;
state_36701 = G__38122;
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
var state__34276__auto__ = (function (){var statearr_36741 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36741[(6)] = c__34274__auto___38093);

return statearr_36741;
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
var G__36744 = arguments.length;
switch (G__36744) {
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
var c__34274__auto___38127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36789){
var state_val_36790 = (state_36789[(1)]);
if((state_val_36790 === (7))){
var inst_36784 = (state_36789[(2)]);
var state_36789__$1 = state_36789;
var statearr_36792_38129 = state_36789__$1;
(statearr_36792_38129[(2)] = inst_36784);

(statearr_36792_38129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (1))){
var inst_36746 = [];
var inst_36747 = inst_36746;
var inst_36748 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36789__$1 = (function (){var statearr_36793 = state_36789;
(statearr_36793[(7)] = inst_36747);

(statearr_36793[(8)] = inst_36748);

return statearr_36793;
})();
var statearr_36794_38132 = state_36789__$1;
(statearr_36794_38132[(2)] = null);

(statearr_36794_38132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (4))){
var inst_36751 = (state_36789[(9)]);
var inst_36751__$1 = (state_36789[(2)]);
var inst_36753 = (inst_36751__$1 == null);
var inst_36754 = cljs.core.not(inst_36753);
var state_36789__$1 = (function (){var statearr_36795 = state_36789;
(statearr_36795[(9)] = inst_36751__$1);

return statearr_36795;
})();
if(inst_36754){
var statearr_36797_38133 = state_36789__$1;
(statearr_36797_38133[(1)] = (5));

} else {
var statearr_36798_38134 = state_36789__$1;
(statearr_36798_38134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (15))){
var inst_36778 = (state_36789[(2)]);
var state_36789__$1 = state_36789;
var statearr_36799_38136 = state_36789__$1;
(statearr_36799_38136[(2)] = inst_36778);

(statearr_36799_38136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (13))){
var state_36789__$1 = state_36789;
var statearr_36801_38138 = state_36789__$1;
(statearr_36801_38138[(2)] = null);

(statearr_36801_38138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (6))){
var inst_36747 = (state_36789[(7)]);
var inst_36773 = inst_36747.length;
var inst_36774 = (inst_36773 > (0));
var state_36789__$1 = state_36789;
if(cljs.core.truth_(inst_36774)){
var statearr_36802_38140 = state_36789__$1;
(statearr_36802_38140[(1)] = (12));

} else {
var statearr_36803_38141 = state_36789__$1;
(statearr_36803_38141[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (3))){
var inst_36786 = (state_36789[(2)]);
var state_36789__$1 = state_36789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36789__$1,inst_36786);
} else {
if((state_val_36790 === (12))){
var inst_36747 = (state_36789[(7)]);
var inst_36776 = cljs.core.vec(inst_36747);
var state_36789__$1 = state_36789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36789__$1,(15),out,inst_36776);
} else {
if((state_val_36790 === (2))){
var state_36789__$1 = state_36789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36789__$1,(4),ch);
} else {
if((state_val_36790 === (11))){
var inst_36751 = (state_36789[(9)]);
var inst_36756 = (state_36789[(10)]);
var inst_36766 = (state_36789[(2)]);
var inst_36767 = [];
var inst_36768 = inst_36767.push(inst_36751);
var inst_36747 = inst_36767;
var inst_36748 = inst_36756;
var state_36789__$1 = (function (){var statearr_36806 = state_36789;
(statearr_36806[(7)] = inst_36747);

(statearr_36806[(8)] = inst_36748);

(statearr_36806[(11)] = inst_36768);

(statearr_36806[(12)] = inst_36766);

return statearr_36806;
})();
var statearr_36807_38145 = state_36789__$1;
(statearr_36807_38145[(2)] = null);

(statearr_36807_38145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (9))){
var inst_36747 = (state_36789[(7)]);
var inst_36764 = cljs.core.vec(inst_36747);
var state_36789__$1 = state_36789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36789__$1,(11),out,inst_36764);
} else {
if((state_val_36790 === (5))){
var inst_36751 = (state_36789[(9)]);
var inst_36748 = (state_36789[(8)]);
var inst_36756 = (state_36789[(10)]);
var inst_36756__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36751) : f.call(null,inst_36751));
var inst_36757 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36756__$1,inst_36748);
var inst_36758 = cljs.core.keyword_identical_QMARK_(inst_36748,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36759 = ((inst_36757) || (inst_36758));
var state_36789__$1 = (function (){var statearr_36809 = state_36789;
(statearr_36809[(10)] = inst_36756__$1);

return statearr_36809;
})();
if(cljs.core.truth_(inst_36759)){
var statearr_36810_38148 = state_36789__$1;
(statearr_36810_38148[(1)] = (8));

} else {
var statearr_36811_38150 = state_36789__$1;
(statearr_36811_38150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (14))){
var inst_36781 = (state_36789[(2)]);
var inst_36782 = cljs.core.async.close_BANG_(out);
var state_36789__$1 = (function (){var statearr_36814 = state_36789;
(statearr_36814[(13)] = inst_36781);

return statearr_36814;
})();
var statearr_36815_38151 = state_36789__$1;
(statearr_36815_38151[(2)] = inst_36782);

(statearr_36815_38151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (10))){
var inst_36771 = (state_36789[(2)]);
var state_36789__$1 = state_36789;
var statearr_36816_38152 = state_36789__$1;
(statearr_36816_38152[(2)] = inst_36771);

(statearr_36816_38152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36790 === (8))){
var inst_36751 = (state_36789[(9)]);
var inst_36747 = (state_36789[(7)]);
var inst_36756 = (state_36789[(10)]);
var inst_36761 = inst_36747.push(inst_36751);
var tmp36812 = inst_36747;
var inst_36747__$1 = tmp36812;
var inst_36748 = inst_36756;
var state_36789__$1 = (function (){var statearr_36818 = state_36789;
(statearr_36818[(7)] = inst_36747__$1);

(statearr_36818[(8)] = inst_36748);

(statearr_36818[(14)] = inst_36761);

return statearr_36818;
})();
var statearr_36819_38155 = state_36789__$1;
(statearr_36819_38155[(2)] = null);

(statearr_36819_38155[(1)] = (2));


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
var statearr_36821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36821[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36821[(1)] = (1));

return statearr_36821;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36789){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36789);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36822){if((e36822 instanceof Object)){
var ex__34210__auto__ = e36822;
var statearr_36823_38157 = state_36789;
(statearr_36823_38157[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36822;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38158 = state_36789;
state_36789 = G__38158;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36824 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36824[(6)] = c__34274__auto___38127);

return statearr_36824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
