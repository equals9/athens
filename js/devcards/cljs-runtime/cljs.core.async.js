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
var n__4666__auto___36862 = n;
var x_36863 = (0);
while(true){
if((x_36863 < n__4666__auto___36862)){
(a[x_36863] = x_36863);

var G__36865 = (x_36863 + (1));
x_36863 = G__36865;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34348 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34348 = (function (flag,meta34349){
this.flag = flag;
this.meta34349 = meta34349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34350,meta34349__$1){
var self__ = this;
var _34350__$1 = this;
return (new cljs.core.async.t_cljs$core$async34348(self__.flag,meta34349__$1));
}));

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34350){
var self__ = this;
var _34350__$1 = this;
return self__.meta34349;
}));

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34349","meta34349",1097138592,null)], null);
}));

(cljs.core.async.t_cljs$core$async34348.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34348");

(cljs.core.async.t_cljs$core$async34348.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34348");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34348.
 */
cljs.core.async.__GT_t_cljs$core$async34348 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34348(flag__$1,meta34349){
return (new cljs.core.async.t_cljs$core$async34348(flag__$1,meta34349));
});

}

return (new cljs.core.async.t_cljs$core$async34348(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34359 = (function (flag,cb,meta34360){
this.flag = flag;
this.cb = cb;
this.meta34360 = meta34360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34361,meta34360__$1){
var self__ = this;
var _34361__$1 = this;
return (new cljs.core.async.t_cljs$core$async34359(self__.flag,self__.cb,meta34360__$1));
}));

(cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34361){
var self__ = this;
var _34361__$1 = this;
return self__.meta34360;
}));

(cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34360","meta34360",2057262825,null)], null);
}));

(cljs.core.async.t_cljs$core$async34359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34359");

(cljs.core.async.t_cljs$core$async34359.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34359.
 */
cljs.core.async.__GT_t_cljs$core$async34359 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34359(flag__$1,cb__$1,meta34360){
return (new cljs.core.async.t_cljs$core$async34359(flag__$1,cb__$1,meta34360));
});

}

return (new cljs.core.async.t_cljs$core$async34359(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34377){
var map__34378 = p__34377;
var map__34378__$1 = (((((!((map__34378 == null))))?(((((map__34378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34378):map__34378);
var opts = map__34378__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34372){
var G__34373 = cljs.core.first(seq34372);
var seq34372__$1 = cljs.core.next(seq34372);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34373,seq34372__$1);
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36884 = state_34423__$1;
(statearr_34425_36884[(2)] = inst_34419);

(statearr_34425_36884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36886 = state_34423__$1;
(statearr_34426_36886[(2)] = null);

(statearr_34426_36886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (4))){
var inst_34396 = (state_34423[(7)]);
var inst_34396__$1 = (state_34423[(2)]);
var inst_34400 = (inst_34396__$1 == null);
var state_34423__$1 = (function (){var statearr_34427 = state_34423;
(statearr_34427[(7)] = inst_34396__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34400)){
var statearr_34428_36887 = state_34423__$1;
(statearr_34428_36887[(1)] = (5));

} else {
var statearr_34429_36889 = state_34423__$1;
(statearr_34429_36889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36890 = state_34423__$1;
(statearr_34430_36890[(2)] = null);

(statearr_34430_36890[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (6))){
var inst_34396 = (state_34423[(7)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34423__$1,(11),to,inst_34396);
} else {
if((state_val_34424 === (3))){
var inst_34421 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34423__$1,inst_34421);
} else {
if((state_val_34424 === (12))){
var state_34423__$1 = state_34423;
var statearr_34431_36892 = state_34423__$1;
(statearr_34431_36892[(2)] = null);

(statearr_34431_36892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (2))){
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34423__$1,(4),from);
} else {
if((state_val_34424 === (11))){
var inst_34412 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
if(cljs.core.truth_(inst_34412)){
var statearr_34432_36894 = state_34423__$1;
(statearr_34432_36894[(1)] = (12));

} else {
var statearr_34433_36895 = state_34423__$1;
(statearr_34433_36895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34434_36896 = state_34423__$1;
(statearr_34434_36896[(2)] = null);

(statearr_34434_36896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36897 = state_34423__$1;
(statearr_34435_36897[(1)] = (8));

} else {
var statearr_34436_36899 = state_34423__$1;
(statearr_34436_36899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34417 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_36900 = state_34423__$1;
(statearr_34437_36900[(2)] = inst_34417);

(statearr_34437_36900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34409 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34438_36901 = state_34423__$1;
(statearr_34438_36901[(2)] = inst_34409);

(statearr_34438_36901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34406 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34439_36903 = state_34423__$1;
(statearr_34439_36903[(2)] = inst_34406);

(statearr_34439_36903[(1)] = (10));


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
var statearr_34442_36905 = state_34423;
(statearr_34442_36905[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36906 = state_34423;
state_34423 = G__36906;
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
var c__34274__auto___36909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34457){
var state_val_34458 = (state_34457[(1)]);
if((state_val_34458 === (1))){
var state_34457__$1 = state_34457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34457__$1,(2),res,v);
} else {
if((state_val_34458 === (2))){
var inst_34454 = (state_34457[(2)]);
var inst_34455 = cljs.core.async.close_BANG_(res);
var state_34457__$1 = (function (){var statearr_34459 = state_34457;
(statearr_34459[(7)] = inst_34454);

return statearr_34459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34457__$1,inst_34455);
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
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34457){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34457);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34461){if((e34461 instanceof Object)){
var ex__34210__auto__ = e34461;
var statearr_34462_36912 = state_34457;
(statearr_34462_36912[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36913 = state_34457;
state_34457 = G__36913;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34457){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34464 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34464[(6)] = c__34274__auto___36909);

return statearr_34464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34466){
var vec__34467 = p__34466;
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
var n__4666__auto___36916 = n;
var __36917 = (0);
while(true){
if((__36917 < n__4666__auto___36916)){
var G__34470_36918 = type;
var G__34470_36919__$1 = (((G__34470_36918 instanceof cljs.core.Keyword))?G__34470_36918.fqn:null);
switch (G__34470_36919__$1) {
case "compute":
var c__34274__auto___36921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36917,c__34274__auto___36921,G__34470_36918,G__34470_36919__$1,n__4666__auto___36916,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36917,c__34274__auto___36921,G__34470_36918,G__34470_36919__$1,n__4666__auto___36916,jobs,results,process,async){
return (function (state_34484){
var state_val_34485 = (state_34484[(1)]);
if((state_val_34485 === (1))){
var state_34484__$1 = state_34484;
var statearr_34486_36923 = state_34484__$1;
(statearr_34486_36923[(2)] = null);

(statearr_34486_36923[(1)] = (2));


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
var statearr_34492_36925 = state_34484__$1;
(statearr_34492_36925[(1)] = (5));

} else {
var statearr_34493_36926 = state_34484__$1;
(statearr_34493_36926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (5))){
var state_34484__$1 = state_34484;
var statearr_34496_36927 = state_34484__$1;
(statearr_34496_36927[(2)] = null);

(statearr_34496_36927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (6))){
var state_34484__$1 = state_34484;
var statearr_34497_36929 = state_34484__$1;
(statearr_34497_36929[(2)] = null);

(statearr_34497_36929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (7))){
var inst_34480 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
var statearr_34498_36930 = state_34484__$1;
(statearr_34498_36930[(2)] = inst_34480);

(statearr_34498_36930[(1)] = (3));


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
});})(__36917,c__34274__auto___36921,G__34470_36918,G__34470_36919__$1,n__4666__auto___36916,jobs,results,process,async))
;
return ((function (__36917,switch__34206__auto__,c__34274__auto___36921,G__34470_36918,G__34470_36919__$1,n__4666__auto___36916,jobs,results,process,async){
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
var statearr_34501_36932 = state_34484;
(statearr_34501_36932[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34500;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36934 = state_34484;
state_34484 = G__36934;
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
;})(__36917,switch__34206__auto__,c__34274__auto___36921,G__34470_36918,G__34470_36919__$1,n__4666__auto___36916,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34502 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34502[(6)] = c__34274__auto___36921);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36917,c__34274__auto___36921,G__34470_36918,G__34470_36919__$1,n__4666__auto___36916,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36917,c__34274__auto___36935,G__34470_36918,G__34470_36919__$1,n__4666__auto___36916,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36917,c__34274__auto___36935,G__34470_36918,G__34470_36919__$1,n__4666__auto___36916,jobs,results,process,async){
return (function (state_34516){
var state_val_34517 = (state_34516[(1)]);
if((state_val_34517 === (1))){
var state_34516__$1 = state_34516;
var statearr_34518_36937 = state_34516__$1;
(statearr_34518_36937[(2)] = null);

(statearr_34518_36937[(1)] = (2));


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
var statearr_34520_36939 = state_34516__$1;
(statearr_34520_36939[(1)] = (5));

} else {
var statearr_34524_36940 = state_34516__$1;
(statearr_34524_36940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (5))){
var state_34516__$1 = state_34516;
var statearr_34525_36941 = state_34516__$1;
(statearr_34525_36941[(2)] = null);

(statearr_34525_36941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (6))){
var state_34516__$1 = state_34516;
var statearr_34529_36943 = state_34516__$1;
(statearr_34529_36943[(2)] = null);

(statearr_34529_36943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (7))){
var inst_34512 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
var statearr_34530_36944 = state_34516__$1;
(statearr_34530_36944[(2)] = inst_34512);

(statearr_34530_36944[(1)] = (3));


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
});})(__36917,c__34274__auto___36935,G__34470_36918,G__34470_36919__$1,n__4666__auto___36916,jobs,results,process,async))
;
return ((function (__36917,switch__34206__auto__,c__34274__auto___36935,G__34470_36918,G__34470_36919__$1,n__4666__auto___36916,jobs,results,process,async){
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
var statearr_34533_36947 = state_34516;
(statearr_34533_36947[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36948 = state_34516;
state_34516 = G__36948;
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
;})(__36917,switch__34206__auto__,c__34274__auto___36935,G__34470_36918,G__34470_36919__$1,n__4666__auto___36916,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34534 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34534[(6)] = c__34274__auto___36935);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36917,c__34274__auto___36935,G__34470_36918,G__34470_36919__$1,n__4666__auto___36916,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34470_36919__$1)].join('')));

}

var G__36950 = (__36917 + (1));
__36917 = G__36950;
continue;
} else {
}
break;
}

var c__34274__auto___36951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34558){
var state_val_34559 = (state_34558[(1)]);
if((state_val_34559 === (7))){
var inst_34552 = (state_34558[(2)]);
var state_34558__$1 = state_34558;
var statearr_34561_36952 = state_34558__$1;
(statearr_34561_36952[(2)] = inst_34552);

(statearr_34561_36952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (1))){
var state_34558__$1 = state_34558;
var statearr_34562_36954 = state_34558__$1;
(statearr_34562_36954[(2)] = null);

(statearr_34562_36954[(1)] = (2));


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
var statearr_34564_36955 = state_34558__$1;
(statearr_34564_36955[(1)] = (5));

} else {
var statearr_34565_36956 = state_34558__$1;
(statearr_34565_36956[(1)] = (6));

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
var statearr_34568_36964 = state_34558__$1;
(statearr_34568_36964[(2)] = null);

(statearr_34568_36964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34559 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(jobs);
var state_34558__$1 = state_34558;
var statearr_34569_36965 = state_34558__$1;
(statearr_34569_36965[(2)] = inst_34540);

(statearr_34569_36965[(1)] = (7));


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
var statearr_34573_36967 = state_34558;
(statearr_34573_36967[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36968 = state_34558;
state_34558 = G__36968;
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
(statearr_34574[(6)] = c__34274__auto___36951);

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
var statearr_34614_36973 = state_34612__$1;
(statearr_34614_36973[(2)] = inst_34608);

(statearr_34614_36973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36974 = state_34612__$1;
(statearr_34615_36974[(2)] = null);

(statearr_34615_36974[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36975 = state_34612__$1;
(statearr_34616_36975[(2)] = null);

(statearr_34616_36975[(1)] = (2));


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
var statearr_34618_36977 = state_34612__$1;
(statearr_34618_36977[(1)] = (5));

} else {
var statearr_34619_36978 = state_34612__$1;
(statearr_34619_36978[(1)] = (6));

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
var statearr_34620_36981 = state_34612__$1;
(statearr_34620_36981[(2)] = inst_34603);

(statearr_34620_36981[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36985 = state_34612__$1;
(statearr_34622_36985[(2)] = null);

(statearr_34622_36985[(1)] = (2));


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
var statearr_34623_36987 = state_34612__$1;
(statearr_34623_36987[(1)] = (19));

} else {
var statearr_34624_36988 = state_34612__$1;
(statearr_34624_36988[(1)] = (20));

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
var statearr_34625_36989 = state_34612__$1;
(statearr_34625_36989[(2)] = null);

(statearr_34625_36989[(1)] = (12));


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
var statearr_34630_36994 = state_34612__$1;
(statearr_34630_36994[(1)] = (9));

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
var statearr_34632_36998 = state_34612__$1;
(statearr_34632_36998[(1)] = (15));

} else {
var statearr_34633_37000 = state_34612__$1;
(statearr_34633_37000[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37002 = state_34612__$1;
(statearr_34634_37002[(2)] = false);

(statearr_34634_37002[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37003 = state_34612__$1;
(statearr_34635_37003[(2)] = inst_34584);

(statearr_34635_37003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37004 = state_34612__$1;
(statearr_34636_37004[(2)] = inst_34595);

(statearr_34636_37004[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37005 = state_34612__$1;
(statearr_34637_37005[(2)] = inst_34581);

(statearr_34637_37005[(1)] = (10));


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
var statearr_34640_37010 = state_34612;
(statearr_34640_37010[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37013 = state_34612;
state_34612 = G__37013;
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
var G__34653 = arguments.length;
switch (G__34653) {
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
var c__34274__auto___37046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34682){
var state_val_34683 = (state_34682[(1)]);
if((state_val_34683 === (7))){
var inst_34678 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34686_37049 = state_34682__$1;
(statearr_34686_37049[(2)] = inst_34678);

(statearr_34686_37049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (1))){
var state_34682__$1 = state_34682;
var statearr_34687_37052 = state_34682__$1;
(statearr_34687_37052[(2)] = null);

(statearr_34687_37052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (4))){
var inst_34659 = (state_34682[(7)]);
var inst_34659__$1 = (state_34682[(2)]);
var inst_34660 = (inst_34659__$1 == null);
var state_34682__$1 = (function (){var statearr_34688 = state_34682;
(statearr_34688[(7)] = inst_34659__$1);

return statearr_34688;
})();
if(cljs.core.truth_(inst_34660)){
var statearr_34689_37054 = state_34682__$1;
(statearr_34689_37054[(1)] = (5));

} else {
var statearr_34690_37056 = state_34682__$1;
(statearr_34690_37056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (13))){
var state_34682__$1 = state_34682;
var statearr_34691_37061 = state_34682__$1;
(statearr_34691_37061[(2)] = null);

(statearr_34691_37061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (6))){
var inst_34659 = (state_34682[(7)]);
var inst_34665 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34659) : p.call(null,inst_34659));
var state_34682__$1 = state_34682;
if(cljs.core.truth_(inst_34665)){
var statearr_34692_37066 = state_34682__$1;
(statearr_34692_37066[(1)] = (9));

} else {
var statearr_34693_37070 = state_34682__$1;
(statearr_34693_37070[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (3))){
var inst_34680 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34682__$1,inst_34680);
} else {
if((state_val_34683 === (12))){
var state_34682__$1 = state_34682;
var statearr_34695_37071 = state_34682__$1;
(statearr_34695_37071[(2)] = null);

(statearr_34695_37071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (2))){
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34682__$1,(4),ch);
} else {
if((state_val_34683 === (11))){
var inst_34659 = (state_34682[(7)]);
var inst_34669 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34682__$1,(8),inst_34669,inst_34659);
} else {
if((state_val_34683 === (9))){
var state_34682__$1 = state_34682;
var statearr_34697_37074 = state_34682__$1;
(statearr_34697_37074[(2)] = tc);

(statearr_34697_37074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (5))){
var inst_34662 = cljs.core.async.close_BANG_(tc);
var inst_34663 = cljs.core.async.close_BANG_(fc);
var state_34682__$1 = (function (){var statearr_34698 = state_34682;
(statearr_34698[(8)] = inst_34662);

return statearr_34698;
})();
var statearr_34699_37077 = state_34682__$1;
(statearr_34699_37077[(2)] = inst_34663);

(statearr_34699_37077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (14))){
var inst_34676 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
var statearr_34700_37079 = state_34682__$1;
(statearr_34700_37079[(2)] = inst_34676);

(statearr_34700_37079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (10))){
var state_34682__$1 = state_34682;
var statearr_34701_37080 = state_34682__$1;
(statearr_34701_37080[(2)] = fc);

(statearr_34701_37080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34683 === (8))){
var inst_34671 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
if(cljs.core.truth_(inst_34671)){
var statearr_34704_37084 = state_34682__$1;
(statearr_34704_37084[(1)] = (12));

} else {
var statearr_34705_37085 = state_34682__$1;
(statearr_34705_37085[(1)] = (13));

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
var statearr_34706 = [null,null,null,null,null,null,null,null,null];
(statearr_34706[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34706[(1)] = (1));

return statearr_34706;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34682){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34682);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34710){if((e34710 instanceof Object)){
var ex__34210__auto__ = e34710;
var statearr_34711_37091 = state_34682;
(statearr_34711_37091[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37094 = state_34682;
state_34682 = G__37094;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34712 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34712[(6)] = c__34274__auto___37046);

return statearr_34712;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34734){
var state_val_34735 = (state_34734[(1)]);
if((state_val_34735 === (7))){
var inst_34730 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34739_37101 = state_34734__$1;
(statearr_34739_37101[(2)] = inst_34730);

(statearr_34739_37101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (1))){
var inst_34714 = init;
var state_34734__$1 = (function (){var statearr_34740 = state_34734;
(statearr_34740[(7)] = inst_34714);

return statearr_34740;
})();
var statearr_34741_37104 = state_34734__$1;
(statearr_34741_37104[(2)] = null);

(statearr_34741_37104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (4))){
var inst_34717 = (state_34734[(8)]);
var inst_34717__$1 = (state_34734[(2)]);
var inst_34718 = (inst_34717__$1 == null);
var state_34734__$1 = (function (){var statearr_34742 = state_34734;
(statearr_34742[(8)] = inst_34717__$1);

return statearr_34742;
})();
if(cljs.core.truth_(inst_34718)){
var statearr_34743_37106 = state_34734__$1;
(statearr_34743_37106[(1)] = (5));

} else {
var statearr_34747_37107 = state_34734__$1;
(statearr_34747_37107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (6))){
var inst_34721 = (state_34734[(9)]);
var inst_34717 = (state_34734[(8)]);
var inst_34714 = (state_34734[(7)]);
var inst_34721__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34714,inst_34717) : f.call(null,inst_34714,inst_34717));
var inst_34722 = cljs.core.reduced_QMARK_(inst_34721__$1);
var state_34734__$1 = (function (){var statearr_34748 = state_34734;
(statearr_34748[(9)] = inst_34721__$1);

return statearr_34748;
})();
if(inst_34722){
var statearr_34749_37111 = state_34734__$1;
(statearr_34749_37111[(1)] = (8));

} else {
var statearr_34750_37112 = state_34734__$1;
(statearr_34750_37112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (3))){
var inst_34732 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34734__$1,inst_34732);
} else {
if((state_val_34735 === (2))){
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34734__$1,(4),ch);
} else {
if((state_val_34735 === (9))){
var inst_34721 = (state_34734[(9)]);
var inst_34714 = inst_34721;
var state_34734__$1 = (function (){var statearr_34751 = state_34734;
(statearr_34751[(7)] = inst_34714);

return statearr_34751;
})();
var statearr_34752_37117 = state_34734__$1;
(statearr_34752_37117[(2)] = null);

(statearr_34752_37117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (5))){
var inst_34714 = (state_34734[(7)]);
var state_34734__$1 = state_34734;
var statearr_34753_37118 = state_34734__$1;
(statearr_34753_37118[(2)] = inst_34714);

(statearr_34753_37118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (10))){
var inst_34728 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34757_37119 = state_34734__$1;
(statearr_34757_37119[(2)] = inst_34728);

(statearr_34757_37119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (8))){
var inst_34721 = (state_34734[(9)]);
var inst_34724 = cljs.core.deref(inst_34721);
var state_34734__$1 = state_34734;
var statearr_34758_37127 = state_34734__$1;
(statearr_34758_37127[(2)] = inst_34724);

(statearr_34758_37127[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34734){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34734);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34760){if((e34760 instanceof Object)){
var ex__34210__auto__ = e34760;
var statearr_34761_37129 = state_34734;
(statearr_34761_37129[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37131 = state_34734;
state_34734 = G__37131;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34734){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34734);
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
var statearr_34770 = [null,null,null,null,null,null,null];
(statearr_34770[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34770[(1)] = (1));

return statearr_34770;
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
}catch (e34771){if((e34771 instanceof Object)){
var ex__34210__auto__ = e34771;
var statearr_34772_37142 = state_34768;
(statearr_34772_37142[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37144 = state_34768;
state_34768 = G__37144;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34806){
var state_val_34807 = (state_34806[(1)]);
if((state_val_34807 === (7))){
var inst_34788 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
var statearr_34809_37150 = state_34806__$1;
(statearr_34809_37150[(2)] = inst_34788);

(statearr_34809_37150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34806__$1 = (function (){var statearr_34810 = state_34806;
(statearr_34810[(7)] = inst_34777);

return statearr_34810;
})();
var statearr_34811_37155 = state_34806__$1;
(statearr_34811_37155[(2)] = null);

(statearr_34811_37155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (4))){
var inst_34777 = (state_34806[(7)]);
var inst_34783 = cljs.core.first(inst_34777);
var state_34806__$1 = state_34806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34806__$1,(7),ch,inst_34783);
} else {
if((state_val_34807 === (13))){
var inst_34800 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
var statearr_34812_37161 = state_34806__$1;
(statearr_34812_37161[(2)] = inst_34800);

(statearr_34812_37161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (6))){
var inst_34791 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
if(cljs.core.truth_(inst_34791)){
var statearr_34814_37162 = state_34806__$1;
(statearr_34814_37162[(1)] = (8));

} else {
var statearr_34815_37163 = state_34806__$1;
(statearr_34815_37163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (3))){
var inst_34804 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34806__$1,inst_34804);
} else {
if((state_val_34807 === (12))){
var state_34806__$1 = state_34806;
var statearr_34817_37164 = state_34806__$1;
(statearr_34817_37164[(2)] = null);

(statearr_34817_37164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (2))){
var inst_34777 = (state_34806[(7)]);
var state_34806__$1 = state_34806;
if(cljs.core.truth_(inst_34777)){
var statearr_34819_37165 = state_34806__$1;
(statearr_34819_37165[(1)] = (4));

} else {
var statearr_34820_37166 = state_34806__$1;
(statearr_34820_37166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (11))){
var inst_34797 = cljs.core.async.close_BANG_(ch);
var state_34806__$1 = state_34806;
var statearr_34824_37169 = state_34806__$1;
(statearr_34824_37169[(2)] = inst_34797);

(statearr_34824_37169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (9))){
var state_34806__$1 = state_34806;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34825_37174 = state_34806__$1;
(statearr_34825_37174[(1)] = (11));

} else {
var statearr_34826_37175 = state_34806__$1;
(statearr_34826_37175[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (5))){
var inst_34777 = (state_34806[(7)]);
var state_34806__$1 = state_34806;
var statearr_34827_37176 = state_34806__$1;
(statearr_34827_37176[(2)] = inst_34777);

(statearr_34827_37176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (10))){
var inst_34802 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
var statearr_34828_37177 = state_34806__$1;
(statearr_34828_37177[(2)] = inst_34802);

(statearr_34828_37177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (8))){
var inst_34777 = (state_34806[(7)]);
var inst_34793 = cljs.core.next(inst_34777);
var inst_34777__$1 = inst_34793;
var state_34806__$1 = (function (){var statearr_34829 = state_34806;
(statearr_34829[(7)] = inst_34777__$1);

return statearr_34829;
})();
var statearr_34830_37182 = state_34806__$1;
(statearr_34830_37182[(2)] = null);

(statearr_34830_37182[(1)] = (2));


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
var statearr_34831 = [null,null,null,null,null,null,null,null];
(statearr_34831[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34831[(1)] = (1));

return statearr_34831;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34806){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34806);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34832){if((e34832 instanceof Object)){
var ex__34210__auto__ = e34832;
var statearr_34833_37190 = state_34806;
(statearr_34833_37190[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37194 = state_34806;
state_34806 = G__37194;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34837 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34837[(6)] = c__34274__auto__);

return statearr_34837;
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
var c__34274__auto___37232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34984){
var state_val_34985 = (state_34984[(1)]);
if((state_val_34985 === (7))){
var inst_34980 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_34991_37233 = state_34984__$1;
(statearr_34991_37233[(2)] = inst_34980);

(statearr_34991_37233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (20))){
var inst_34877 = (state_34984[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34984__$1 = (function (){var statearr_34993 = state_34984;
(statearr_34993[(8)] = inst_34890);

return statearr_34993;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34994_37235 = state_34984__$1;
(statearr_34994_37235[(1)] = (22));

} else {
var statearr_34995_37239 = state_34984__$1;
(statearr_34995_37239[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (27))){
var inst_34846 = (state_34984[(9)]);
var inst_34926 = (state_34984[(10)]);
var inst_34919 = (state_34984[(11)]);
var inst_34921 = (state_34984[(12)]);
var inst_34926__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34919,inst_34921);
var inst_34927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34926__$1,inst_34846,done);
var state_34984__$1 = (function (){var statearr_34996 = state_34984;
(statearr_34996[(10)] = inst_34926__$1);

return statearr_34996;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34997_37241 = state_34984__$1;
(statearr_34997_37241[(1)] = (30));

} else {
var statearr_34998_37243 = state_34984__$1;
(statearr_34998_37243[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (1))){
var state_34984__$1 = state_34984;
var statearr_34999_37244 = state_34984__$1;
(statearr_34999_37244[(2)] = null);

(statearr_34999_37244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (24))){
var inst_34877 = (state_34984[(7)]);
var inst_34896 = (state_34984[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35000 = state_34984;
(statearr_35000[(13)] = inst_34857);

(statearr_35000[(14)] = inst_34856);

(statearr_35000[(15)] = inst_34858);

(statearr_35000[(16)] = inst_34896);

(statearr_35000[(17)] = inst_34855);

return statearr_35000;
})();
var statearr_35001_37250 = state_34984__$1;
(statearr_35001_37250[(2)] = null);

(statearr_35001_37250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (39))){
var state_34984__$1 = state_34984;
var statearr_35009_37254 = state_34984__$1;
(statearr_35009_37254[(2)] = null);

(statearr_35009_37254[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (4))){
var inst_34846 = (state_34984[(9)]);
var inst_34846__$1 = (state_34984[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34984__$1 = (function (){var statearr_35012 = state_34984;
(statearr_35012[(9)] = inst_34846__$1);

return statearr_35012;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35013_37258 = state_34984__$1;
(statearr_35013_37258[(1)] = (5));

} else {
var statearr_35014_37260 = state_34984__$1;
(statearr_35014_37260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (15))){
var inst_34857 = (state_34984[(13)]);
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(15)]);
var inst_34855 = (state_34984[(17)]);
var inst_34873 = (state_34984[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35004 = inst_34857;
var tmp35005 = inst_34856;
var tmp35006 = inst_34855;
var inst_34855__$1 = tmp35006;
var inst_34856__$1 = tmp35005;
var inst_34857__$1 = tmp35004;
var inst_34858__$1 = inst_34874;
var state_34984__$1 = (function (){var statearr_35015 = state_34984;
(statearr_35015[(18)] = inst_34873);

(statearr_35015[(13)] = inst_34857__$1);

(statearr_35015[(14)] = inst_34856__$1);

(statearr_35015[(15)] = inst_34858__$1);

(statearr_35015[(17)] = inst_34855__$1);

return statearr_35015;
})();
var statearr_35016_37266 = state_34984__$1;
(statearr_35016_37266[(2)] = null);

(statearr_35016_37266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (21))){
var inst_34900 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35020_37270 = state_34984__$1;
(statearr_35020_37270[(2)] = inst_34900);

(statearr_35020_37270[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (31))){
var inst_34926 = (state_34984[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34984__$1 = (function (){var statearr_35023 = state_34984;
(statearr_35023[(19)] = inst_34930);

return statearr_35023;
})();
var statearr_35024_37275 = state_34984__$1;
(statearr_35024_37275[(2)] = inst_34931);

(statearr_35024_37275[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (32))){
var inst_34918 = (state_34984[(20)]);
var inst_34919 = (state_34984[(11)]);
var inst_34920 = (state_34984[(21)]);
var inst_34921 = (state_34984[(12)]);
var inst_34933 = (state_34984[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp35017 = inst_34918;
var tmp35018 = inst_34919;
var tmp35019 = inst_34920;
var inst_34918__$1 = tmp35017;
var inst_34919__$1 = tmp35018;
var inst_34920__$1 = tmp35019;
var inst_34921__$1 = inst_34934;
var state_34984__$1 = (function (){var statearr_35029 = state_34984;
(statearr_35029[(20)] = inst_34918__$1);

(statearr_35029[(22)] = inst_34933);

(statearr_35029[(11)] = inst_34919__$1);

(statearr_35029[(21)] = inst_34920__$1);

(statearr_35029[(12)] = inst_34921__$1);

return statearr_35029;
})();
var statearr_35030_37283 = state_34984__$1;
(statearr_35030_37283[(2)] = null);

(statearr_35030_37283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (40))){
var inst_34948 = (state_34984[(23)]);
var inst_34952 = done(null);
var inst_34953 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34948);
var state_34984__$1 = (function (){var statearr_35034 = state_34984;
(statearr_35034[(24)] = inst_34952);

return statearr_35034;
})();
var statearr_35036_37286 = state_34984__$1;
(statearr_35036_37286[(2)] = inst_34953);

(statearr_35036_37286[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (33))){
var inst_34937 = (state_34984[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34984__$1 = state_34984;
if(inst_34939){
var statearr_35037_37290 = state_34984__$1;
(statearr_35037_37290[(1)] = (36));

} else {
var statearr_35044_37291 = state_34984__$1;
(statearr_35044_37291[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (13))){
var inst_34867 = (state_34984[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34984__$1 = state_34984;
var statearr_35054_37296 = state_34984__$1;
(statearr_35054_37296[(2)] = inst_34870);

(statearr_35054_37296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (22))){
var inst_34890 = (state_34984[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34984__$1 = state_34984;
var statearr_35055_37297 = state_34984__$1;
(statearr_35055_37297[(2)] = inst_34893);

(statearr_35055_37297[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (36))){
var inst_34937 = (state_34984[(25)]);
var inst_34941 = cljs.core.chunk_first(inst_34937);
var inst_34942 = cljs.core.chunk_rest(inst_34937);
var inst_34943 = cljs.core.count(inst_34941);
var inst_34918 = inst_34942;
var inst_34919 = inst_34941;
var inst_34920 = inst_34943;
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35060 = state_34984;
(statearr_35060[(20)] = inst_34918);

(statearr_35060[(11)] = inst_34919);

(statearr_35060[(21)] = inst_34920);

(statearr_35060[(12)] = inst_34921);

return statearr_35060;
})();
var statearr_35061_37298 = state_34984__$1;
(statearr_35061_37298[(2)] = null);

(statearr_35061_37298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (41))){
var inst_34937 = (state_34984[(25)]);
var inst_34955 = (state_34984[(2)]);
var inst_34956 = cljs.core.next(inst_34937);
var inst_34918 = inst_34956;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35063 = state_34984;
(statearr_35063[(20)] = inst_34918);

(statearr_35063[(11)] = inst_34919);

(statearr_35063[(27)] = inst_34955);

(statearr_35063[(21)] = inst_34920);

(statearr_35063[(12)] = inst_34921);

return statearr_35063;
})();
var statearr_35068_37304 = state_34984__$1;
(statearr_35068_37304[(2)] = null);

(statearr_35068_37304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (43))){
var state_34984__$1 = state_34984;
var statearr_35073_37306 = state_34984__$1;
(statearr_35073_37306[(2)] = null);

(statearr_35073_37306[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (29))){
var inst_34964 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35079_37307 = state_34984__$1;
(statearr_35079_37307[(2)] = inst_34964);

(statearr_35079_37307[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (44))){
var inst_34977 = (state_34984[(2)]);
var state_34984__$1 = (function (){var statearr_35083 = state_34984;
(statearr_35083[(28)] = inst_34977);

return statearr_35083;
})();
var statearr_35086_37308 = state_34984__$1;
(statearr_35086_37308[(2)] = null);

(statearr_35086_37308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (6))){
var inst_34910 = (state_34984[(29)]);
var inst_34909 = cljs.core.deref(cs);
var inst_34910__$1 = cljs.core.keys(inst_34909);
var inst_34911 = cljs.core.count(inst_34910__$1);
var inst_34912 = cljs.core.reset_BANG_(dctr,inst_34911);
var inst_34917 = cljs.core.seq(inst_34910__$1);
var inst_34918 = inst_34917;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34984__$1 = (function (){var statearr_35095 = state_34984;
(statearr_35095[(20)] = inst_34918);

(statearr_35095[(29)] = inst_34910__$1);

(statearr_35095[(11)] = inst_34919);

(statearr_35095[(21)] = inst_34920);

(statearr_35095[(12)] = inst_34921);

(statearr_35095[(30)] = inst_34912);

return statearr_35095;
})();
var statearr_35099_37313 = state_34984__$1;
(statearr_35099_37313[(2)] = null);

(statearr_35099_37313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (28))){
var inst_34918 = (state_34984[(20)]);
var inst_34937 = (state_34984[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34984__$1 = (function (){var statearr_35104 = state_34984;
(statearr_35104[(25)] = inst_34937__$1);

return statearr_35104;
})();
if(inst_34937__$1){
var statearr_35108_37319 = state_34984__$1;
(statearr_35108_37319[(1)] = (33));

} else {
var statearr_35110_37320 = state_34984__$1;
(statearr_35110_37320[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (25))){
var inst_34920 = (state_34984[(21)]);
var inst_34921 = (state_34984[(12)]);
var inst_34923 = (inst_34921 < inst_34920);
var inst_34924 = inst_34923;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34924)){
var statearr_35116_37323 = state_34984__$1;
(statearr_35116_37323[(1)] = (27));

} else {
var statearr_35119_37326 = state_34984__$1;
(statearr_35119_37326[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (34))){
var state_34984__$1 = state_34984;
var statearr_35134_37327 = state_34984__$1;
(statearr_35134_37327[(2)] = null);

(statearr_35134_37327[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (17))){
var state_34984__$1 = state_34984;
var statearr_35140_37329 = state_34984__$1;
(statearr_35140_37329[(2)] = null);

(statearr_35140_37329[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (3))){
var inst_34982 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34984__$1,inst_34982);
} else {
if((state_val_34985 === (12))){
var inst_34905 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35148_37335 = state_34984__$1;
(statearr_35148_37335[(2)] = inst_34905);

(statearr_35148_37335[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (2))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(4),ch);
} else {
if((state_val_34985 === (23))){
var state_34984__$1 = state_34984;
var statearr_35156_37342 = state_34984__$1;
(statearr_35156_37342[(2)] = null);

(statearr_35156_37342[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (35))){
var inst_34962 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35157_37344 = state_34984__$1;
(statearr_35157_37344[(2)] = inst_34962);

(statearr_35157_37344[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (19))){
var inst_34877 = (state_34984[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35158 = state_34984;
(statearr_35158[(13)] = inst_34857);

(statearr_35158[(14)] = inst_34856);

(statearr_35158[(15)] = inst_34858);

(statearr_35158[(17)] = inst_34855);

return statearr_35158;
})();
var statearr_35159_37349 = state_34984__$1;
(statearr_35159_37349[(2)] = null);

(statearr_35159_37349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (11))){
var inst_34855 = (state_34984[(17)]);
var inst_34877 = (state_34984[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34984__$1 = (function (){var statearr_35162 = state_34984;
(statearr_35162[(7)] = inst_34877__$1);

return statearr_35162;
})();
if(inst_34877__$1){
var statearr_35163_37355 = state_34984__$1;
(statearr_35163_37355[(1)] = (16));

} else {
var statearr_35164_37356 = state_34984__$1;
(statearr_35164_37356[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (9))){
var inst_34907 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35165_37359 = state_34984__$1;
(statearr_35165_37359[(2)] = inst_34907);

(statearr_35165_37359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35168 = state_34984;
(statearr_35168[(13)] = inst_34857);

(statearr_35168[(14)] = inst_34856);

(statearr_35168[(15)] = inst_34858);

(statearr_35168[(17)] = inst_34855);

return statearr_35168;
})();
var statearr_35171_37363 = state_34984__$1;
(statearr_35171_37363[(2)] = null);

(statearr_35171_37363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (14))){
var state_34984__$1 = state_34984;
var statearr_35191_37366 = state_34984__$1;
(statearr_35191_37366[(2)] = null);

(statearr_35191_37366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (45))){
var inst_34973 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35194_37371 = state_34984__$1;
(statearr_35194_37371[(2)] = inst_34973);

(statearr_35194_37371[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (26))){
var inst_34910 = (state_34984[(29)]);
var inst_34966 = (state_34984[(2)]);
var inst_34970 = cljs.core.seq(inst_34910);
var state_34984__$1 = (function (){var statearr_35197 = state_34984;
(statearr_35197[(31)] = inst_34966);

return statearr_35197;
})();
if(inst_34970){
var statearr_35200_37378 = state_34984__$1;
(statearr_35200_37378[(1)] = (42));

} else {
var statearr_35201_37379 = state_34984__$1;
(statearr_35201_37379[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (16))){
var inst_34877 = (state_34984[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34984__$1 = state_34984;
if(inst_34879){
var statearr_35202_37380 = state_34984__$1;
(statearr_35202_37380[(1)] = (19));

} else {
var statearr_35203_37381 = state_34984__$1;
(statearr_35203_37381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (38))){
var inst_34959 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35205_37384 = state_34984__$1;
(statearr_35205_37384[(2)] = inst_34959);

(statearr_35205_37384[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (30))){
var state_34984__$1 = state_34984;
var statearr_35211_37387 = state_34984__$1;
(statearr_35211_37387[(2)] = null);

(statearr_35211_37387[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (10))){
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34984__$1 = (function (){var statearr_35218 = state_34984;
(statearr_35218[(26)] = inst_34867);

return statearr_35218;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35221_37389 = state_34984__$1;
(statearr_35221_37389[(1)] = (13));

} else {
var statearr_35222_37391 = state_34984__$1;
(statearr_35222_37391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (18))){
var inst_34903 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35229_37394 = state_34984__$1;
(statearr_35229_37394[(2)] = inst_34903);

(statearr_35229_37394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (42))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(45),dchan);
} else {
if((state_val_34985 === (37))){
var inst_34846 = (state_34984[(9)]);
var inst_34937 = (state_34984[(25)]);
var inst_34948 = (state_34984[(23)]);
var inst_34948__$1 = cljs.core.first(inst_34937);
var inst_34949 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34948__$1,inst_34846,done);
var state_34984__$1 = (function (){var statearr_35238 = state_34984;
(statearr_35238[(23)] = inst_34948__$1);

return statearr_35238;
})();
if(cljs.core.truth_(inst_34949)){
var statearr_35242_37399 = state_34984__$1;
(statearr_35242_37399[(1)] = (39));

} else {
var statearr_35245_37400 = state_34984__$1;
(statearr_35245_37400[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (8))){
var inst_34857 = (state_34984[(13)]);
var inst_34858 = (state_34984[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34861)){
var statearr_35250_37402 = state_34984__$1;
(statearr_35250_37402[(1)] = (10));

} else {
var statearr_35253_37406 = state_34984__$1;
(statearr_35253_37406[(1)] = (11));

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
var statearr_35262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35262[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35262[(1)] = (1));

return statearr_35262;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34984){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34984);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35267){if((e35267 instanceof Object)){
var ex__34210__auto__ = e35267;
var statearr_35269_37413 = state_34984;
(statearr_35269_37413[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37415 = state_34984;
state_34984 = G__37415;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34984){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35278 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35278[(6)] = c__34274__auto___37232);

return statearr_35278;
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
var G__35291 = arguments.length;
switch (G__35291) {
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
var len__4789__auto___37442 = arguments.length;
var i__4790__auto___37443 = (0);
while(true){
if((i__4790__auto___37443 < len__4789__auto___37442)){
args__4795__auto__.push((arguments[i__4790__auto___37443]));

var G__37444 = (i__4790__auto___37443 + (1));
i__4790__auto___37443 = G__37444;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35376){
var map__35377 = p__35376;
var map__35377__$1 = (((((!((map__35377 == null))))?(((((map__35377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35377):map__35377);
var opts = map__35377__$1;
var statearr_35380_37448 = state;
(statearr_35380_37448[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35386_37449 = state;
(statearr_35386_37449[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35392_37452 = state;
(statearr_35392_37452[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35363){
var G__35364 = cljs.core.first(seq35363);
var seq35363__$1 = cljs.core.next(seq35363);
var G__35365 = cljs.core.first(seq35363__$1);
var seq35363__$2 = cljs.core.next(seq35363__$1);
var G__35366 = cljs.core.first(seq35363__$2);
var seq35363__$3 = cljs.core.next(seq35363__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35364,G__35365,G__35366,seq35363__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35414 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35415){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35415 = meta35415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35416,meta35415__$1){
var self__ = this;
var _35416__$1 = this;
return (new cljs.core.async.t_cljs$core$async35414(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35415__$1));
}));

(cljs.core.async.t_cljs$core$async35414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35416){
var self__ = this;
var _35416__$1 = this;
return self__.meta35415;
}));

(cljs.core.async.t_cljs$core$async35414.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35414.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35414.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35414.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35414.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35414.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35414.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35415","meta35415",597011365,null)], null);
}));

(cljs.core.async.t_cljs$core$async35414.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35414");

(cljs.core.async.t_cljs$core$async35414.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35414");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35414.
 */
cljs.core.async.__GT_t_cljs$core$async35414 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35414(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35415){
return (new cljs.core.async.t_cljs$core$async35414(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35415));
});

}

return (new cljs.core.async.t_cljs$core$async35414(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35617){
var state_val_35620 = (state_35617[(1)]);
if((state_val_35620 === (7))){
var inst_35489 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35630_37508 = state_35617__$1;
(statearr_35630_37508[(2)] = inst_35489);

(statearr_35630_37508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (20))){
var inst_35503 = (state_35617[(7)]);
var state_35617__$1 = state_35617;
var statearr_35641_37510 = state_35617__$1;
(statearr_35641_37510[(2)] = inst_35503);

(statearr_35641_37510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (27))){
var state_35617__$1 = state_35617;
var statearr_35646_37511 = state_35617__$1;
(statearr_35646_37511[(2)] = null);

(statearr_35646_37511[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (1))){
var inst_35470 = (state_35617[(8)]);
var inst_35470__$1 = calc_state();
var inst_35474 = (inst_35470__$1 == null);
var inst_35475 = cljs.core.not(inst_35474);
var state_35617__$1 = (function (){var statearr_35652 = state_35617;
(statearr_35652[(8)] = inst_35470__$1);

return statearr_35652;
})();
if(inst_35475){
var statearr_35657_37519 = state_35617__$1;
(statearr_35657_37519[(1)] = (2));

} else {
var statearr_35659_37520 = state_35617__$1;
(statearr_35659_37520[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (24))){
var inst_35536 = (state_35617[(9)]);
var inst_35583 = (state_35617[(10)]);
var inst_35550 = (state_35617[(11)]);
var inst_35583__$1 = (inst_35536.cljs$core$IFn$_invoke$arity$1 ? inst_35536.cljs$core$IFn$_invoke$arity$1(inst_35550) : inst_35536.call(null,inst_35550));
var state_35617__$1 = (function (){var statearr_35667 = state_35617;
(statearr_35667[(10)] = inst_35583__$1);

return statearr_35667;
})();
if(cljs.core.truth_(inst_35583__$1)){
var statearr_35670_37522 = state_35617__$1;
(statearr_35670_37522[(1)] = (29));

} else {
var statearr_35671_37523 = state_35617__$1;
(statearr_35671_37523[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (4))){
var inst_35492 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35492)){
var statearr_35681_37529 = state_35617__$1;
(statearr_35681_37529[(1)] = (8));

} else {
var statearr_35684_37531 = state_35617__$1;
(statearr_35684_37531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (15))){
var inst_35530 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35530)){
var statearr_35686_37533 = state_35617__$1;
(statearr_35686_37533[(1)] = (19));

} else {
var statearr_35687_37534 = state_35617__$1;
(statearr_35687_37534[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (21))){
var inst_35535 = (state_35617[(12)]);
var inst_35535__$1 = (state_35617[(2)]);
var inst_35536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35535__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35535__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35535__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35617__$1 = (function (){var statearr_35688 = state_35617;
(statearr_35688[(9)] = inst_35536);

(statearr_35688[(12)] = inst_35535__$1);

(statearr_35688[(13)] = inst_35537);

return statearr_35688;
})();
return cljs.core.async.ioc_alts_BANG_(state_35617__$1,(22),inst_35538);
} else {
if((state_val_35620 === (31))){
var inst_35593 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35593)){
var statearr_35689_37543 = state_35617__$1;
(statearr_35689_37543[(1)] = (32));

} else {
var statearr_35690_37544 = state_35617__$1;
(statearr_35690_37544[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (32))){
var inst_35548 = (state_35617[(14)]);
var state_35617__$1 = state_35617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35617__$1,(35),out,inst_35548);
} else {
if((state_val_35620 === (33))){
var inst_35535 = (state_35617[(12)]);
var inst_35503 = inst_35535;
var state_35617__$1 = (function (){var statearr_35691 = state_35617;
(statearr_35691[(7)] = inst_35503);

return statearr_35691;
})();
var statearr_35694_37546 = state_35617__$1;
(statearr_35694_37546[(2)] = null);

(statearr_35694_37546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (13))){
var inst_35503 = (state_35617[(7)]);
var inst_35517 = inst_35503.cljs$lang$protocol_mask$partition0$;
var inst_35518 = (inst_35517 & (64));
var inst_35520 = inst_35503.cljs$core$ISeq$;
var inst_35521 = (cljs.core.PROTOCOL_SENTINEL === inst_35520);
var inst_35522 = ((inst_35518) || (inst_35521));
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35522)){
var statearr_35695_37553 = state_35617__$1;
(statearr_35695_37553[(1)] = (16));

} else {
var statearr_35696_37555 = state_35617__$1;
(statearr_35696_37555[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (22))){
var inst_35548 = (state_35617[(14)]);
var inst_35550 = (state_35617[(11)]);
var inst_35547 = (state_35617[(2)]);
var inst_35548__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35547,(0),null);
var inst_35550__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35547,(1),null);
var inst_35555 = (inst_35548__$1 == null);
var inst_35556 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35550__$1,change);
var inst_35557 = ((inst_35555) || (inst_35556));
var state_35617__$1 = (function (){var statearr_35699 = state_35617;
(statearr_35699[(14)] = inst_35548__$1);

(statearr_35699[(11)] = inst_35550__$1);

return statearr_35699;
})();
if(cljs.core.truth_(inst_35557)){
var statearr_35700_37562 = state_35617__$1;
(statearr_35700_37562[(1)] = (23));

} else {
var statearr_35701_37563 = state_35617__$1;
(statearr_35701_37563[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (36))){
var inst_35535 = (state_35617[(12)]);
var inst_35503 = inst_35535;
var state_35617__$1 = (function (){var statearr_35702 = state_35617;
(statearr_35702[(7)] = inst_35503);

return statearr_35702;
})();
var statearr_35703_37570 = state_35617__$1;
(statearr_35703_37570[(2)] = null);

(statearr_35703_37570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (29))){
var inst_35583 = (state_35617[(10)]);
var state_35617__$1 = state_35617;
var statearr_35704_37572 = state_35617__$1;
(statearr_35704_37572[(2)] = inst_35583);

(statearr_35704_37572[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (6))){
var state_35617__$1 = state_35617;
var statearr_35707_37574 = state_35617__$1;
(statearr_35707_37574[(2)] = false);

(statearr_35707_37574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (28))){
var inst_35576 = (state_35617[(2)]);
var inst_35577 = calc_state();
var inst_35503 = inst_35577;
var state_35617__$1 = (function (){var statearr_35709 = state_35617;
(statearr_35709[(7)] = inst_35503);

(statearr_35709[(15)] = inst_35576);

return statearr_35709;
})();
var statearr_35711_37580 = state_35617__$1;
(statearr_35711_37580[(2)] = null);

(statearr_35711_37580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (25))){
var inst_35610 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35716_37584 = state_35617__$1;
(statearr_35716_37584[(2)] = inst_35610);

(statearr_35716_37584[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (34))){
var inst_35608 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35717_37586 = state_35617__$1;
(statearr_35717_37586[(2)] = inst_35608);

(statearr_35717_37586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (17))){
var state_35617__$1 = state_35617;
var statearr_35718_37587 = state_35617__$1;
(statearr_35718_37587[(2)] = false);

(statearr_35718_37587[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (3))){
var state_35617__$1 = state_35617;
var statearr_35720_37593 = state_35617__$1;
(statearr_35720_37593[(2)] = false);

(statearr_35720_37593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (12))){
var inst_35613 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35617__$1,inst_35613);
} else {
if((state_val_35620 === (2))){
var inst_35470 = (state_35617[(8)]);
var inst_35478 = inst_35470.cljs$lang$protocol_mask$partition0$;
var inst_35479 = (inst_35478 & (64));
var inst_35480 = inst_35470.cljs$core$ISeq$;
var inst_35481 = (cljs.core.PROTOCOL_SENTINEL === inst_35480);
var inst_35482 = ((inst_35479) || (inst_35481));
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35482)){
var statearr_35724_37601 = state_35617__$1;
(statearr_35724_37601[(1)] = (5));

} else {
var statearr_35727_37602 = state_35617__$1;
(statearr_35727_37602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (23))){
var inst_35548 = (state_35617[(14)]);
var inst_35560 = (inst_35548 == null);
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35560)){
var statearr_35730_37604 = state_35617__$1;
(statearr_35730_37604[(1)] = (26));

} else {
var statearr_35731_37606 = state_35617__$1;
(statearr_35731_37606[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (35))){
var inst_35598 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35598)){
var statearr_35733_37612 = state_35617__$1;
(statearr_35733_37612[(1)] = (36));

} else {
var statearr_35734_37614 = state_35617__$1;
(statearr_35734_37614[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (19))){
var inst_35503 = (state_35617[(7)]);
var inst_35532 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35503);
var state_35617__$1 = state_35617;
var statearr_35736_37616 = state_35617__$1;
(statearr_35736_37616[(2)] = inst_35532);

(statearr_35736_37616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (11))){
var inst_35503 = (state_35617[(7)]);
var inst_35511 = (inst_35503 == null);
var inst_35512 = cljs.core.not(inst_35511);
var state_35617__$1 = state_35617;
if(inst_35512){
var statearr_35737_37618 = state_35617__$1;
(statearr_35737_37618[(1)] = (13));

} else {
var statearr_35738_37621 = state_35617__$1;
(statearr_35738_37621[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (9))){
var inst_35470 = (state_35617[(8)]);
var state_35617__$1 = state_35617;
var statearr_35740_37629 = state_35617__$1;
(statearr_35740_37629[(2)] = inst_35470);

(statearr_35740_37629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (5))){
var state_35617__$1 = state_35617;
var statearr_35741_37632 = state_35617__$1;
(statearr_35741_37632[(2)] = true);

(statearr_35741_37632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (14))){
var state_35617__$1 = state_35617;
var statearr_35742_37633 = state_35617__$1;
(statearr_35742_37633[(2)] = false);

(statearr_35742_37633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (26))){
var inst_35550 = (state_35617[(11)]);
var inst_35573 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35550);
var state_35617__$1 = state_35617;
var statearr_35744_37636 = state_35617__$1;
(statearr_35744_37636[(2)] = inst_35573);

(statearr_35744_37636[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (16))){
var state_35617__$1 = state_35617;
var statearr_35745_37640 = state_35617__$1;
(statearr_35745_37640[(2)] = true);

(statearr_35745_37640[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (38))){
var inst_35603 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35747_37645 = state_35617__$1;
(statearr_35747_37645[(2)] = inst_35603);

(statearr_35747_37645[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (30))){
var inst_35536 = (state_35617[(9)]);
var inst_35550 = (state_35617[(11)]);
var inst_35537 = (state_35617[(13)]);
var inst_35588 = cljs.core.empty_QMARK_(inst_35536);
var inst_35589 = (inst_35537.cljs$core$IFn$_invoke$arity$1 ? inst_35537.cljs$core$IFn$_invoke$arity$1(inst_35550) : inst_35537.call(null,inst_35550));
var inst_35590 = cljs.core.not(inst_35589);
var inst_35591 = ((inst_35588) && (inst_35590));
var state_35617__$1 = state_35617;
var statearr_35749_37648 = state_35617__$1;
(statearr_35749_37648[(2)] = inst_35591);

(statearr_35749_37648[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (10))){
var inst_35470 = (state_35617[(8)]);
var inst_35497 = (state_35617[(2)]);
var inst_35499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35497,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35497,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35497,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35503 = inst_35470;
var state_35617__$1 = (function (){var statearr_35751 = state_35617;
(statearr_35751[(7)] = inst_35503);

(statearr_35751[(16)] = inst_35500);

(statearr_35751[(17)] = inst_35502);

(statearr_35751[(18)] = inst_35499);

return statearr_35751;
})();
var statearr_35754_37660 = state_35617__$1;
(statearr_35754_37660[(2)] = null);

(statearr_35754_37660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (18))){
var inst_35527 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35758_37662 = state_35617__$1;
(statearr_35758_37662[(2)] = inst_35527);

(statearr_35758_37662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (37))){
var state_35617__$1 = state_35617;
var statearr_35759_37664 = state_35617__$1;
(statearr_35759_37664[(2)] = null);

(statearr_35759_37664[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35620 === (8))){
var inst_35470 = (state_35617[(8)]);
var inst_35494 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35470);
var state_35617__$1 = state_35617;
var statearr_35762_37670 = state_35617__$1;
(statearr_35762_37670[(2)] = inst_35494);

(statearr_35762_37670[(1)] = (10));


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
var statearr_35766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35766[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35766[(1)] = (1));

return statearr_35766;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35617){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35617);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35772){if((e35772 instanceof Object)){
var ex__34210__auto__ = e35772;
var statearr_35775_37677 = state_35617;
(statearr_35775_37677[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35772;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37685 = state_35617;
state_35617 = G__37685;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35617){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35784 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35784[(6)] = c__34274__auto___37502);

return statearr_35784;
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
var G__35802 = arguments.length;
switch (G__35802) {
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
var G__35819 = arguments.length;
switch (G__35819) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35812_SHARP_){
if(cljs.core.truth_((p1__35812_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35812_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35812_SHARP_.call(null,topic)))){
return p1__35812_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35812_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35827 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35828){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35828 = meta35828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35829,meta35828__$1){
var self__ = this;
var _35829__$1 = this;
return (new cljs.core.async.t_cljs$core$async35827(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35828__$1));
}));

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35829){
var self__ = this;
var _35829__$1 = this;
return self__.meta35828;
}));

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35827.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35827.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35828","meta35828",885589779,null)], null);
}));

(cljs.core.async.t_cljs$core$async35827.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35827");

(cljs.core.async.t_cljs$core$async35827.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35827");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35827.
 */
cljs.core.async.__GT_t_cljs$core$async35827 = (function cljs$core$async$__GT_t_cljs$core$async35827(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35828){
return (new cljs.core.async.t_cljs$core$async35827(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35828));
});

}

return (new cljs.core.async.t_cljs$core$async35827(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35945){
var state_val_35946 = (state_35945[(1)]);
if((state_val_35946 === (7))){
var inst_35938 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35950_37730 = state_35945__$1;
(statearr_35950_37730[(2)] = inst_35938);

(statearr_35950_37730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (20))){
var state_35945__$1 = state_35945;
var statearr_35953_37731 = state_35945__$1;
(statearr_35953_37731[(2)] = null);

(statearr_35953_37731[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (1))){
var state_35945__$1 = state_35945;
var statearr_35956_37737 = state_35945__$1;
(statearr_35956_37737[(2)] = null);

(statearr_35956_37737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (24))){
var inst_35920 = (state_35945[(7)]);
var inst_35930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35920);
var state_35945__$1 = state_35945;
var statearr_35957_37739 = state_35945__$1;
(statearr_35957_37739[(2)] = inst_35930);

(statearr_35957_37739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (4))){
var inst_35866 = (state_35945[(8)]);
var inst_35866__$1 = (state_35945[(2)]);
var inst_35868 = (inst_35866__$1 == null);
var state_35945__$1 = (function (){var statearr_35959 = state_35945;
(statearr_35959[(8)] = inst_35866__$1);

return statearr_35959;
})();
if(cljs.core.truth_(inst_35868)){
var statearr_35961_37743 = state_35945__$1;
(statearr_35961_37743[(1)] = (5));

} else {
var statearr_35964_37744 = state_35945__$1;
(statearr_35964_37744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (15))){
var inst_35914 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35967_37746 = state_35945__$1;
(statearr_35967_37746[(2)] = inst_35914);

(statearr_35967_37746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (21))){
var inst_35935 = (state_35945[(2)]);
var state_35945__$1 = (function (){var statearr_35968 = state_35945;
(statearr_35968[(9)] = inst_35935);

return statearr_35968;
})();
var statearr_35969_37750 = state_35945__$1;
(statearr_35969_37750[(2)] = null);

(statearr_35969_37750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (13))){
var inst_35893 = (state_35945[(10)]);
var inst_35897 = cljs.core.chunked_seq_QMARK_(inst_35893);
var state_35945__$1 = state_35945;
if(inst_35897){
var statearr_35972_37752 = state_35945__$1;
(statearr_35972_37752[(1)] = (16));

} else {
var statearr_35974_37753 = state_35945__$1;
(statearr_35974_37753[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (22))){
var inst_35926 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
if(cljs.core.truth_(inst_35926)){
var statearr_35975_37756 = state_35945__$1;
(statearr_35975_37756[(1)] = (23));

} else {
var statearr_35976_37760 = state_35945__$1;
(statearr_35976_37760[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (6))){
var inst_35920 = (state_35945[(7)]);
var inst_35922 = (state_35945[(11)]);
var inst_35866 = (state_35945[(8)]);
var inst_35920__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35866) : topic_fn.call(null,inst_35866));
var inst_35921 = cljs.core.deref(mults);
var inst_35922__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35921,inst_35920__$1);
var state_35945__$1 = (function (){var statearr_35977 = state_35945;
(statearr_35977[(7)] = inst_35920__$1);

(statearr_35977[(11)] = inst_35922__$1);

return statearr_35977;
})();
if(cljs.core.truth_(inst_35922__$1)){
var statearr_35978_37766 = state_35945__$1;
(statearr_35978_37766[(1)] = (19));

} else {
var statearr_35979_37767 = state_35945__$1;
(statearr_35979_37767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (25))){
var inst_35932 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35982_37769 = state_35945__$1;
(statearr_35982_37769[(2)] = inst_35932);

(statearr_35982_37769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (17))){
var inst_35893 = (state_35945[(10)]);
var inst_35905 = cljs.core.first(inst_35893);
var inst_35906 = cljs.core.async.muxch_STAR_(inst_35905);
var inst_35907 = cljs.core.async.close_BANG_(inst_35906);
var inst_35908 = cljs.core.next(inst_35893);
var inst_35879 = inst_35908;
var inst_35880 = null;
var inst_35881 = (0);
var inst_35882 = (0);
var state_35945__$1 = (function (){var statearr_35984 = state_35945;
(statearr_35984[(12)] = inst_35879);

(statearr_35984[(13)] = inst_35881);

(statearr_35984[(14)] = inst_35882);

(statearr_35984[(15)] = inst_35907);

(statearr_35984[(16)] = inst_35880);

return statearr_35984;
})();
var statearr_35985_37778 = state_35945__$1;
(statearr_35985_37778[(2)] = null);

(statearr_35985_37778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (3))){
var inst_35940 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35945__$1,inst_35940);
} else {
if((state_val_35946 === (12))){
var inst_35916 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35988_37784 = state_35945__$1;
(statearr_35988_37784[(2)] = inst_35916);

(statearr_35988_37784[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (2))){
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35945__$1,(4),ch);
} else {
if((state_val_35946 === (23))){
var state_35945__$1 = state_35945;
var statearr_35990_37787 = state_35945__$1;
(statearr_35990_37787[(2)] = null);

(statearr_35990_37787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (19))){
var inst_35922 = (state_35945[(11)]);
var inst_35866 = (state_35945[(8)]);
var inst_35924 = cljs.core.async.muxch_STAR_(inst_35922);
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35945__$1,(22),inst_35924,inst_35866);
} else {
if((state_val_35946 === (11))){
var inst_35879 = (state_35945[(12)]);
var inst_35893 = (state_35945[(10)]);
var inst_35893__$1 = cljs.core.seq(inst_35879);
var state_35945__$1 = (function (){var statearr_35994 = state_35945;
(statearr_35994[(10)] = inst_35893__$1);

return statearr_35994;
})();
if(inst_35893__$1){
var statearr_35995_37794 = state_35945__$1;
(statearr_35995_37794[(1)] = (13));

} else {
var statearr_35996_37795 = state_35945__$1;
(statearr_35996_37795[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (9))){
var inst_35918 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35997_37799 = state_35945__$1;
(statearr_35997_37799[(2)] = inst_35918);

(statearr_35997_37799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (5))){
var inst_35876 = cljs.core.deref(mults);
var inst_35877 = cljs.core.vals(inst_35876);
var inst_35878 = cljs.core.seq(inst_35877);
var inst_35879 = inst_35878;
var inst_35880 = null;
var inst_35881 = (0);
var inst_35882 = (0);
var state_35945__$1 = (function (){var statearr_36001 = state_35945;
(statearr_36001[(12)] = inst_35879);

(statearr_36001[(13)] = inst_35881);

(statearr_36001[(14)] = inst_35882);

(statearr_36001[(16)] = inst_35880);

return statearr_36001;
})();
var statearr_36004_37802 = state_35945__$1;
(statearr_36004_37802[(2)] = null);

(statearr_36004_37802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (14))){
var state_35945__$1 = state_35945;
var statearr_36010_37804 = state_35945__$1;
(statearr_36010_37804[(2)] = null);

(statearr_36010_37804[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (16))){
var inst_35893 = (state_35945[(10)]);
var inst_35899 = cljs.core.chunk_first(inst_35893);
var inst_35900 = cljs.core.chunk_rest(inst_35893);
var inst_35901 = cljs.core.count(inst_35899);
var inst_35879 = inst_35900;
var inst_35880 = inst_35899;
var inst_35881 = inst_35901;
var inst_35882 = (0);
var state_35945__$1 = (function (){var statearr_36013 = state_35945;
(statearr_36013[(12)] = inst_35879);

(statearr_36013[(13)] = inst_35881);

(statearr_36013[(14)] = inst_35882);

(statearr_36013[(16)] = inst_35880);

return statearr_36013;
})();
var statearr_36016_37813 = state_35945__$1;
(statearr_36016_37813[(2)] = null);

(statearr_36016_37813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (10))){
var inst_35879 = (state_35945[(12)]);
var inst_35881 = (state_35945[(13)]);
var inst_35882 = (state_35945[(14)]);
var inst_35880 = (state_35945[(16)]);
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
var state_35945__$1 = (function (){var statearr_36021 = state_35945;
(statearr_36021[(12)] = inst_35879__$1);

(statearr_36021[(13)] = inst_35881__$1);

(statearr_36021[(17)] = inst_35889);

(statearr_36021[(14)] = inst_35882__$1);

(statearr_36021[(16)] = inst_35880__$1);

return statearr_36021;
})();
var statearr_36022_37817 = state_35945__$1;
(statearr_36022_37817[(2)] = null);

(statearr_36022_37817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (18))){
var inst_35911 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_36026_37823 = state_35945__$1;
(statearr_36026_37823[(2)] = inst_35911);

(statearr_36026_37823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (8))){
var inst_35881 = (state_35945[(13)]);
var inst_35882 = (state_35945[(14)]);
var inst_35884 = (inst_35882 < inst_35881);
var inst_35885 = inst_35884;
var state_35945__$1 = state_35945;
if(cljs.core.truth_(inst_35885)){
var statearr_36028_37826 = state_35945__$1;
(statearr_36028_37826[(1)] = (10));

} else {
var statearr_36030_37828 = state_35945__$1;
(statearr_36030_37828[(1)] = (11));

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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35945){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35945);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36035){if((e36035 instanceof Object)){
var ex__34210__auto__ = e36035;
var statearr_36036_37836 = state_35945;
(statearr_36036_37836[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36035;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37839 = state_35945;
state_35945 = G__37839;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36037 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36037[(6)] = c__34274__auto___37725);

return statearr_36037;
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
var c__34274__auto___37860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36102){
var state_val_36103 = (state_36102[(1)]);
if((state_val_36103 === (7))){
var state_36102__$1 = state_36102;
var statearr_36109_37867 = state_36102__$1;
(statearr_36109_37867[(2)] = null);

(statearr_36109_37867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (1))){
var state_36102__$1 = state_36102;
var statearr_36112_37869 = state_36102__$1;
(statearr_36112_37869[(2)] = null);

(statearr_36112_37869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (4))){
var inst_36059 = (state_36102[(7)]);
var inst_36061 = (inst_36059 < cnt);
var state_36102__$1 = state_36102;
if(cljs.core.truth_(inst_36061)){
var statearr_36113_37871 = state_36102__$1;
(statearr_36113_37871[(1)] = (6));

} else {
var statearr_36115_37874 = state_36102__$1;
(statearr_36115_37874[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (15))){
var inst_36098 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36116_37876 = state_36102__$1;
(statearr_36116_37876[(2)] = inst_36098);

(statearr_36116_37876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (13))){
var inst_36090 = cljs.core.async.close_BANG_(out);
var state_36102__$1 = state_36102;
var statearr_36117_37880 = state_36102__$1;
(statearr_36117_37880[(2)] = inst_36090);

(statearr_36117_37880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (6))){
var state_36102__$1 = state_36102;
var statearr_36119_37882 = state_36102__$1;
(statearr_36119_37882[(2)] = null);

(statearr_36119_37882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (3))){
var inst_36100 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36102__$1,inst_36100);
} else {
if((state_val_36103 === (12))){
var inst_36087 = (state_36102[(8)]);
var inst_36087__$1 = (state_36102[(2)]);
var inst_36088 = cljs.core.some(cljs.core.nil_QMARK_,inst_36087__$1);
var state_36102__$1 = (function (){var statearr_36124 = state_36102;
(statearr_36124[(8)] = inst_36087__$1);

return statearr_36124;
})();
if(cljs.core.truth_(inst_36088)){
var statearr_36125_37887 = state_36102__$1;
(statearr_36125_37887[(1)] = (13));

} else {
var statearr_36126_37889 = state_36102__$1;
(statearr_36126_37889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (2))){
var inst_36057 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36059 = (0);
var state_36102__$1 = (function (){var statearr_36127 = state_36102;
(statearr_36127[(7)] = inst_36059);

(statearr_36127[(9)] = inst_36057);

return statearr_36127;
})();
var statearr_36128_37893 = state_36102__$1;
(statearr_36128_37893[(2)] = null);

(statearr_36128_37893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (11))){
var inst_36059 = (state_36102[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36102,(10),Object,null,(9));
var inst_36071 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36059) : chs__$1.call(null,inst_36059));
var inst_36072 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36059) : done.call(null,inst_36059));
var inst_36073 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36071,inst_36072);
var state_36102__$1 = state_36102;
var statearr_36129_37898 = state_36102__$1;
(statearr_36129_37898[(2)] = inst_36073);


cljs.core.async.impl.ioc_helpers.process_exception(state_36102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (9))){
var inst_36059 = (state_36102[(7)]);
var inst_36075 = (state_36102[(2)]);
var inst_36079 = (inst_36059 + (1));
var inst_36059__$1 = inst_36079;
var state_36102__$1 = (function (){var statearr_36130 = state_36102;
(statearr_36130[(7)] = inst_36059__$1);

(statearr_36130[(10)] = inst_36075);

return statearr_36130;
})();
var statearr_36135_37903 = state_36102__$1;
(statearr_36135_37903[(2)] = null);

(statearr_36135_37903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (5))){
var inst_36085 = (state_36102[(2)]);
var state_36102__$1 = (function (){var statearr_36136 = state_36102;
(statearr_36136[(11)] = inst_36085);

return statearr_36136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36102__$1,(12),dchan);
} else {
if((state_val_36103 === (14))){
var inst_36087 = (state_36102[(8)]);
var inst_36093 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36087);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36102__$1,(16),out,inst_36093);
} else {
if((state_val_36103 === (16))){
var inst_36095 = (state_36102[(2)]);
var state_36102__$1 = (function (){var statearr_36140 = state_36102;
(statearr_36140[(12)] = inst_36095);

return statearr_36140;
})();
var statearr_36141_37908 = state_36102__$1;
(statearr_36141_37908[(2)] = null);

(statearr_36141_37908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (10))){
var inst_36066 = (state_36102[(2)]);
var inst_36067 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36102__$1 = (function (){var statearr_36142 = state_36102;
(statearr_36142[(13)] = inst_36066);

return statearr_36142;
})();
var statearr_36143_37910 = state_36102__$1;
(statearr_36143_37910[(2)] = inst_36067);


cljs.core.async.impl.ioc_helpers.process_exception(state_36102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (8))){
var inst_36083 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36145_37912 = state_36102__$1;
(statearr_36145_37912[(2)] = inst_36083);

(statearr_36145_37912[(1)] = (5));


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
var statearr_36148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36148[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36148[(1)] = (1));

return statearr_36148;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36102){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36102);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36151){if((e36151 instanceof Object)){
var ex__34210__auto__ = e36151;
var statearr_36152_37917 = state_36102;
(statearr_36152_37917[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36151;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37919 = state_36102;
state_36102 = G__37919;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36154 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36154[(6)] = c__34274__auto___37860);

return statearr_36154;
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
var c__34274__auto___37928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36218){
var state_val_36219 = (state_36218[(1)]);
if((state_val_36219 === (7))){
var inst_36196 = (state_36218[(7)]);
var inst_36197 = (state_36218[(8)]);
var inst_36196__$1 = (state_36218[(2)]);
var inst_36197__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36196__$1,(0),null);
var inst_36198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36196__$1,(1),null);
var inst_36199 = (inst_36197__$1 == null);
var state_36218__$1 = (function (){var statearr_36222 = state_36218;
(statearr_36222[(7)] = inst_36196__$1);

(statearr_36222[(8)] = inst_36197__$1);

(statearr_36222[(9)] = inst_36198);

return statearr_36222;
})();
if(cljs.core.truth_(inst_36199)){
var statearr_36223_37932 = state_36218__$1;
(statearr_36223_37932[(1)] = (8));

} else {
var statearr_36224_37933 = state_36218__$1;
(statearr_36224_37933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (1))){
var inst_36185 = cljs.core.vec(chs);
var inst_36186 = inst_36185;
var state_36218__$1 = (function (){var statearr_36227 = state_36218;
(statearr_36227[(10)] = inst_36186);

return statearr_36227;
})();
var statearr_36228_37936 = state_36218__$1;
(statearr_36228_37936[(2)] = null);

(statearr_36228_37936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (4))){
var inst_36186 = (state_36218[(10)]);
var state_36218__$1 = state_36218;
return cljs.core.async.ioc_alts_BANG_(state_36218__$1,(7),inst_36186);
} else {
if((state_val_36219 === (6))){
var inst_36214 = (state_36218[(2)]);
var state_36218__$1 = state_36218;
var statearr_36229_37940 = state_36218__$1;
(statearr_36229_37940[(2)] = inst_36214);

(statearr_36229_37940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (3))){
var inst_36216 = (state_36218[(2)]);
var state_36218__$1 = state_36218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36218__$1,inst_36216);
} else {
if((state_val_36219 === (2))){
var inst_36186 = (state_36218[(10)]);
var inst_36189 = cljs.core.count(inst_36186);
var inst_36190 = (inst_36189 > (0));
var state_36218__$1 = state_36218;
if(cljs.core.truth_(inst_36190)){
var statearr_36234_37947 = state_36218__$1;
(statearr_36234_37947[(1)] = (4));

} else {
var statearr_36236_37948 = state_36218__$1;
(statearr_36236_37948[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (11))){
var inst_36186 = (state_36218[(10)]);
var inst_36207 = (state_36218[(2)]);
var tmp36230 = inst_36186;
var inst_36186__$1 = tmp36230;
var state_36218__$1 = (function (){var statearr_36237 = state_36218;
(statearr_36237[(11)] = inst_36207);

(statearr_36237[(10)] = inst_36186__$1);

return statearr_36237;
})();
var statearr_36238_37956 = state_36218__$1;
(statearr_36238_37956[(2)] = null);

(statearr_36238_37956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (9))){
var inst_36197 = (state_36218[(8)]);
var state_36218__$1 = state_36218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36218__$1,(11),out,inst_36197);
} else {
if((state_val_36219 === (5))){
var inst_36212 = cljs.core.async.close_BANG_(out);
var state_36218__$1 = state_36218;
var statearr_36249_37959 = state_36218__$1;
(statearr_36249_37959[(2)] = inst_36212);

(statearr_36249_37959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (10))){
var inst_36210 = (state_36218[(2)]);
var state_36218__$1 = state_36218;
var statearr_36250_37962 = state_36218__$1;
(statearr_36250_37962[(2)] = inst_36210);

(statearr_36250_37962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36219 === (8))){
var inst_36196 = (state_36218[(7)]);
var inst_36186 = (state_36218[(10)]);
var inst_36197 = (state_36218[(8)]);
var inst_36198 = (state_36218[(9)]);
var inst_36202 = (function (){var cs = inst_36186;
var vec__36192 = inst_36196;
var v = inst_36197;
var c = inst_36198;
return (function (p1__36156_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36156_SHARP_);
});
})();
var inst_36203 = cljs.core.filterv(inst_36202,inst_36186);
var inst_36186__$1 = inst_36203;
var state_36218__$1 = (function (){var statearr_36253 = state_36218;
(statearr_36253[(10)] = inst_36186__$1);

return statearr_36253;
})();
var statearr_36255_37966 = state_36218__$1;
(statearr_36255_37966[(2)] = null);

(statearr_36255_37966[(1)] = (2));


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
var statearr_36256 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36256[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36256[(1)] = (1));

return statearr_36256;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36218){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36218);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36259){if((e36259 instanceof Object)){
var ex__34210__auto__ = e36259;
var statearr_36260_37970 = state_36218;
(statearr_36260_37970[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36259;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37971 = state_36218;
state_36218 = G__37971;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36261 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36261[(6)] = c__34274__auto___37928);

return statearr_36261;
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
var G__36268 = arguments.length;
switch (G__36268) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36301){
var state_val_36302 = (state_36301[(1)]);
if((state_val_36302 === (7))){
var inst_36282 = (state_36301[(7)]);
var inst_36282__$1 = (state_36301[(2)]);
var inst_36284 = (inst_36282__$1 == null);
var inst_36285 = cljs.core.not(inst_36284);
var state_36301__$1 = (function (){var statearr_36304 = state_36301;
(statearr_36304[(7)] = inst_36282__$1);

return statearr_36304;
})();
if(inst_36285){
var statearr_36306_37985 = state_36301__$1;
(statearr_36306_37985[(1)] = (8));

} else {
var statearr_36307_37986 = state_36301__$1;
(statearr_36307_37986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (1))){
var inst_36273 = (0);
var state_36301__$1 = (function (){var statearr_36309 = state_36301;
(statearr_36309[(8)] = inst_36273);

return statearr_36309;
})();
var statearr_36310_37988 = state_36301__$1;
(statearr_36310_37988[(2)] = null);

(statearr_36310_37988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (4))){
var state_36301__$1 = state_36301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36301__$1,(7),ch);
} else {
if((state_val_36302 === (6))){
var inst_36296 = (state_36301[(2)]);
var state_36301__$1 = state_36301;
var statearr_36313_37989 = state_36301__$1;
(statearr_36313_37989[(2)] = inst_36296);

(statearr_36313_37989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (3))){
var inst_36298 = (state_36301[(2)]);
var inst_36299 = cljs.core.async.close_BANG_(out);
var state_36301__$1 = (function (){var statearr_36314 = state_36301;
(statearr_36314[(9)] = inst_36298);

return statearr_36314;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36301__$1,inst_36299);
} else {
if((state_val_36302 === (2))){
var inst_36273 = (state_36301[(8)]);
var inst_36277 = (inst_36273 < n);
var state_36301__$1 = state_36301;
if(cljs.core.truth_(inst_36277)){
var statearr_36317_37993 = state_36301__$1;
(statearr_36317_37993[(1)] = (4));

} else {
var statearr_36318_37994 = state_36301__$1;
(statearr_36318_37994[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (11))){
var inst_36273 = (state_36301[(8)]);
var inst_36288 = (state_36301[(2)]);
var inst_36289 = (inst_36273 + (1));
var inst_36273__$1 = inst_36289;
var state_36301__$1 = (function (){var statearr_36319 = state_36301;
(statearr_36319[(10)] = inst_36288);

(statearr_36319[(8)] = inst_36273__$1);

return statearr_36319;
})();
var statearr_36320_37997 = state_36301__$1;
(statearr_36320_37997[(2)] = null);

(statearr_36320_37997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (9))){
var state_36301__$1 = state_36301;
var statearr_36321_37998 = state_36301__$1;
(statearr_36321_37998[(2)] = null);

(statearr_36321_37998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (5))){
var state_36301__$1 = state_36301;
var statearr_36324_37999 = state_36301__$1;
(statearr_36324_37999[(2)] = null);

(statearr_36324_37999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (10))){
var inst_36293 = (state_36301[(2)]);
var state_36301__$1 = state_36301;
var statearr_36325_38000 = state_36301__$1;
(statearr_36325_38000[(2)] = inst_36293);

(statearr_36325_38000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (8))){
var inst_36282 = (state_36301[(7)]);
var state_36301__$1 = state_36301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36301__$1,(11),out,inst_36282);
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
var statearr_36328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36328[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36328[(1)] = (1));

return statearr_36328;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36301){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36301);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36329){if((e36329 instanceof Object)){
var ex__34210__auto__ = e36329;
var statearr_36330_38004 = state_36301;
(statearr_36330_38004[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36329;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38009 = state_36301;
state_36301 = G__38009;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36338 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36338[(6)] = c__34274__auto___37980);

return statearr_36338;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36341 = (function (f,ch,meta36342){
this.f = f;
this.ch = ch;
this.meta36342 = meta36342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36343,meta36342__$1){
var self__ = this;
var _36343__$1 = this;
return (new cljs.core.async.t_cljs$core$async36341(self__.f,self__.ch,meta36342__$1));
}));

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36343){
var self__ = this;
var _36343__$1 = this;
return self__.meta36342;
}));

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36349 = (function (f,ch,meta36342,_,fn1,meta36350){
this.f = f;
this.ch = ch;
this.meta36342 = meta36342;
this._ = _;
this.fn1 = fn1;
this.meta36350 = meta36350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36351,meta36350__$1){
var self__ = this;
var _36351__$1 = this;
return (new cljs.core.async.t_cljs$core$async36349(self__.f,self__.ch,self__.meta36342,self__._,self__.fn1,meta36350__$1));
}));

(cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36351){
var self__ = this;
var _36351__$1 = this;
return self__.meta36350;
}));

(cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36339_SHARP_){
var G__36357 = (((p1__36339_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36339_SHARP_) : self__.f.call(null,p1__36339_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36357) : f1.call(null,G__36357));
});
}));

(cljs.core.async.t_cljs$core$async36349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36342","meta36342",1426951232,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36341","cljs.core.async/t_cljs$core$async36341",-260361477,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36350","meta36350",620264329,null)], null);
}));

(cljs.core.async.t_cljs$core$async36349.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36349");

(cljs.core.async.t_cljs$core$async36349.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36349");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36349.
 */
cljs.core.async.__GT_t_cljs$core$async36349 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36349(f__$1,ch__$1,meta36342__$1,___$2,fn1__$1,meta36350){
return (new cljs.core.async.t_cljs$core$async36349(f__$1,ch__$1,meta36342__$1,___$2,fn1__$1,meta36350));
});

}

return (new cljs.core.async.t_cljs$core$async36349(self__.f,self__.ch,self__.meta36342,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36361 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36361) : self__.f.call(null,G__36361));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36342","meta36342",1426951232,null)], null);
}));

(cljs.core.async.t_cljs$core$async36341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36341");

(cljs.core.async.t_cljs$core$async36341.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36341.
 */
cljs.core.async.__GT_t_cljs$core$async36341 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36341(f__$1,ch__$1,meta36342){
return (new cljs.core.async.t_cljs$core$async36341(f__$1,ch__$1,meta36342));
});

}

return (new cljs.core.async.t_cljs$core$async36341(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36374 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36374 = (function (f,ch,meta36375){
this.f = f;
this.ch = ch;
this.meta36375 = meta36375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36376,meta36375__$1){
var self__ = this;
var _36376__$1 = this;
return (new cljs.core.async.t_cljs$core$async36374(self__.f,self__.ch,meta36375__$1));
}));

(cljs.core.async.t_cljs$core$async36374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36376){
var self__ = this;
var _36376__$1 = this;
return self__.meta36375;
}));

(cljs.core.async.t_cljs$core$async36374.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36374.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36374.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36374.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36374.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36374.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36375","meta36375",-288234000,null)], null);
}));

(cljs.core.async.t_cljs$core$async36374.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36374");

(cljs.core.async.t_cljs$core$async36374.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36374");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36374.
 */
cljs.core.async.__GT_t_cljs$core$async36374 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36374(f__$1,ch__$1,meta36375){
return (new cljs.core.async.t_cljs$core$async36374(f__$1,ch__$1,meta36375));
});

}

return (new cljs.core.async.t_cljs$core$async36374(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36392 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36392 = (function (p,ch,meta36393){
this.p = p;
this.ch = ch;
this.meta36393 = meta36393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36394,meta36393__$1){
var self__ = this;
var _36394__$1 = this;
return (new cljs.core.async.t_cljs$core$async36392(self__.p,self__.ch,meta36393__$1));
}));

(cljs.core.async.t_cljs$core$async36392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36394){
var self__ = this;
var _36394__$1 = this;
return self__.meta36393;
}));

(cljs.core.async.t_cljs$core$async36392.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36392.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36392.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36392.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36392.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36392.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36392.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36393","meta36393",-932396707,null)], null);
}));

(cljs.core.async.t_cljs$core$async36392.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36392");

(cljs.core.async.t_cljs$core$async36392.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36392");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36392.
 */
cljs.core.async.__GT_t_cljs$core$async36392 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36392(p__$1,ch__$1,meta36393){
return (new cljs.core.async.t_cljs$core$async36392(p__$1,ch__$1,meta36393));
});

}

return (new cljs.core.async.t_cljs$core$async36392(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34274__auto___38035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36451){
var state_val_36452 = (state_36451[(1)]);
if((state_val_36452 === (7))){
var inst_36447 = (state_36451[(2)]);
var state_36451__$1 = state_36451;
var statearr_36454_38036 = state_36451__$1;
(statearr_36454_38036[(2)] = inst_36447);

(statearr_36454_38036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (1))){
var state_36451__$1 = state_36451;
var statearr_36457_38037 = state_36451__$1;
(statearr_36457_38037[(2)] = null);

(statearr_36457_38037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (4))){
var inst_36425 = (state_36451[(7)]);
var inst_36425__$1 = (state_36451[(2)]);
var inst_36426 = (inst_36425__$1 == null);
var state_36451__$1 = (function (){var statearr_36460 = state_36451;
(statearr_36460[(7)] = inst_36425__$1);

return statearr_36460;
})();
if(cljs.core.truth_(inst_36426)){
var statearr_36461_38043 = state_36451__$1;
(statearr_36461_38043[(1)] = (5));

} else {
var statearr_36462_38044 = state_36451__$1;
(statearr_36462_38044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (6))){
var inst_36425 = (state_36451[(7)]);
var inst_36430 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36425) : p.call(null,inst_36425));
var state_36451__$1 = state_36451;
if(cljs.core.truth_(inst_36430)){
var statearr_36463_38045 = state_36451__$1;
(statearr_36463_38045[(1)] = (8));

} else {
var statearr_36464_38046 = state_36451__$1;
(statearr_36464_38046[(1)] = (9));

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
var inst_36440 = (state_36451[(2)]);
var state_36451__$1 = state_36451;
var statearr_36466_38047 = state_36451__$1;
(statearr_36466_38047[(2)] = inst_36440);

(statearr_36466_38047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (9))){
var state_36451__$1 = state_36451;
var statearr_36468_38048 = state_36451__$1;
(statearr_36468_38048[(2)] = null);

(statearr_36468_38048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (5))){
var inst_36428 = cljs.core.async.close_BANG_(out);
var state_36451__$1 = state_36451;
var statearr_36472_38052 = state_36451__$1;
(statearr_36472_38052[(2)] = inst_36428);

(statearr_36472_38052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (10))){
var inst_36443 = (state_36451[(2)]);
var state_36451__$1 = (function (){var statearr_36473 = state_36451;
(statearr_36473[(8)] = inst_36443);

return statearr_36473;
})();
var statearr_36474_38053 = state_36451__$1;
(statearr_36474_38053[(2)] = null);

(statearr_36474_38053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36452 === (8))){
var inst_36425 = (state_36451[(7)]);
var state_36451__$1 = state_36451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36451__$1,(11),out,inst_36425);
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
var statearr_36476 = [null,null,null,null,null,null,null,null,null];
(statearr_36476[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36476[(1)] = (1));

return statearr_36476;
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
var statearr_36479_38056 = state_36451;
(statearr_36479_38056[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36478;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38057 = state_36451;
state_36451 = G__38057;
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
var state__34276__auto__ = (function (){var statearr_36480 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36480[(6)] = c__34274__auto___38035);

return statearr_36480;
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
var G__36483 = arguments.length;
switch (G__36483) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36551){
var state_val_36552 = (state_36551[(1)]);
if((state_val_36552 === (7))){
var inst_36546 = (state_36551[(2)]);
var state_36551__$1 = state_36551;
var statearr_36555_38063 = state_36551__$1;
(statearr_36555_38063[(2)] = inst_36546);

(statearr_36555_38063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (20))){
var inst_36515 = (state_36551[(7)]);
var inst_36527 = (state_36551[(2)]);
var inst_36528 = cljs.core.next(inst_36515);
var inst_36500 = inst_36528;
var inst_36502 = null;
var inst_36503 = (0);
var inst_36504 = (0);
var state_36551__$1 = (function (){var statearr_36557 = state_36551;
(statearr_36557[(8)] = inst_36502);

(statearr_36557[(9)] = inst_36527);

(statearr_36557[(10)] = inst_36504);

(statearr_36557[(11)] = inst_36503);

(statearr_36557[(12)] = inst_36500);

return statearr_36557;
})();
var statearr_36558_38064 = state_36551__$1;
(statearr_36558_38064[(2)] = null);

(statearr_36558_38064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (1))){
var state_36551__$1 = state_36551;
var statearr_36559_38065 = state_36551__$1;
(statearr_36559_38065[(2)] = null);

(statearr_36559_38065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (4))){
var inst_36489 = (state_36551[(13)]);
var inst_36489__$1 = (state_36551[(2)]);
var inst_36490 = (inst_36489__$1 == null);
var state_36551__$1 = (function (){var statearr_36561 = state_36551;
(statearr_36561[(13)] = inst_36489__$1);

return statearr_36561;
})();
if(cljs.core.truth_(inst_36490)){
var statearr_36562_38069 = state_36551__$1;
(statearr_36562_38069[(1)] = (5));

} else {
var statearr_36563_38070 = state_36551__$1;
(statearr_36563_38070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (15))){
var state_36551__$1 = state_36551;
var statearr_36567_38071 = state_36551__$1;
(statearr_36567_38071[(2)] = null);

(statearr_36567_38071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (21))){
var state_36551__$1 = state_36551;
var statearr_36569_38072 = state_36551__$1;
(statearr_36569_38072[(2)] = null);

(statearr_36569_38072[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (13))){
var inst_36502 = (state_36551[(8)]);
var inst_36504 = (state_36551[(10)]);
var inst_36503 = (state_36551[(11)]);
var inst_36500 = (state_36551[(12)]);
var inst_36511 = (state_36551[(2)]);
var inst_36512 = (inst_36504 + (1));
var tmp36564 = inst_36502;
var tmp36565 = inst_36503;
var tmp36566 = inst_36500;
var inst_36500__$1 = tmp36566;
var inst_36502__$1 = tmp36564;
var inst_36503__$1 = tmp36565;
var inst_36504__$1 = inst_36512;
var state_36551__$1 = (function (){var statearr_36570 = state_36551;
(statearr_36570[(8)] = inst_36502__$1);

(statearr_36570[(14)] = inst_36511);

(statearr_36570[(10)] = inst_36504__$1);

(statearr_36570[(11)] = inst_36503__$1);

(statearr_36570[(12)] = inst_36500__$1);

return statearr_36570;
})();
var statearr_36572_38076 = state_36551__$1;
(statearr_36572_38076[(2)] = null);

(statearr_36572_38076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (22))){
var state_36551__$1 = state_36551;
var statearr_36573_38077 = state_36551__$1;
(statearr_36573_38077[(2)] = null);

(statearr_36573_38077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (6))){
var inst_36489 = (state_36551[(13)]);
var inst_36498 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36489) : f.call(null,inst_36489));
var inst_36499 = cljs.core.seq(inst_36498);
var inst_36500 = inst_36499;
var inst_36502 = null;
var inst_36503 = (0);
var inst_36504 = (0);
var state_36551__$1 = (function (){var statearr_36575 = state_36551;
(statearr_36575[(8)] = inst_36502);

(statearr_36575[(10)] = inst_36504);

(statearr_36575[(11)] = inst_36503);

(statearr_36575[(12)] = inst_36500);

return statearr_36575;
})();
var statearr_36576_38080 = state_36551__$1;
(statearr_36576_38080[(2)] = null);

(statearr_36576_38080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (17))){
var inst_36515 = (state_36551[(7)]);
var inst_36519 = cljs.core.chunk_first(inst_36515);
var inst_36520 = cljs.core.chunk_rest(inst_36515);
var inst_36521 = cljs.core.count(inst_36519);
var inst_36500 = inst_36520;
var inst_36502 = inst_36519;
var inst_36503 = inst_36521;
var inst_36504 = (0);
var state_36551__$1 = (function (){var statearr_36578 = state_36551;
(statearr_36578[(8)] = inst_36502);

(statearr_36578[(10)] = inst_36504);

(statearr_36578[(11)] = inst_36503);

(statearr_36578[(12)] = inst_36500);

return statearr_36578;
})();
var statearr_36579_38082 = state_36551__$1;
(statearr_36579_38082[(2)] = null);

(statearr_36579_38082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (3))){
var inst_36548 = (state_36551[(2)]);
var state_36551__$1 = state_36551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36551__$1,inst_36548);
} else {
if((state_val_36552 === (12))){
var inst_36536 = (state_36551[(2)]);
var state_36551__$1 = state_36551;
var statearr_36581_38084 = state_36551__$1;
(statearr_36581_38084[(2)] = inst_36536);

(statearr_36581_38084[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (2))){
var state_36551__$1 = state_36551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36551__$1,(4),in$);
} else {
if((state_val_36552 === (23))){
var inst_36544 = (state_36551[(2)]);
var state_36551__$1 = state_36551;
var statearr_36582_38087 = state_36551__$1;
(statearr_36582_38087[(2)] = inst_36544);

(statearr_36582_38087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (19))){
var inst_36531 = (state_36551[(2)]);
var state_36551__$1 = state_36551;
var statearr_36584_38088 = state_36551__$1;
(statearr_36584_38088[(2)] = inst_36531);

(statearr_36584_38088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (11))){
var inst_36515 = (state_36551[(7)]);
var inst_36500 = (state_36551[(12)]);
var inst_36515__$1 = cljs.core.seq(inst_36500);
var state_36551__$1 = (function (){var statearr_36585 = state_36551;
(statearr_36585[(7)] = inst_36515__$1);

return statearr_36585;
})();
if(inst_36515__$1){
var statearr_36586_38089 = state_36551__$1;
(statearr_36586_38089[(1)] = (14));

} else {
var statearr_36588_38091 = state_36551__$1;
(statearr_36588_38091[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (9))){
var inst_36538 = (state_36551[(2)]);
var inst_36539 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36551__$1 = (function (){var statearr_36589 = state_36551;
(statearr_36589[(15)] = inst_36538);

return statearr_36589;
})();
if(cljs.core.truth_(inst_36539)){
var statearr_36590_38094 = state_36551__$1;
(statearr_36590_38094[(1)] = (21));

} else {
var statearr_36591_38095 = state_36551__$1;
(statearr_36591_38095[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (5))){
var inst_36492 = cljs.core.async.close_BANG_(out);
var state_36551__$1 = state_36551;
var statearr_36593_38096 = state_36551__$1;
(statearr_36593_38096[(2)] = inst_36492);

(statearr_36593_38096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (14))){
var inst_36515 = (state_36551[(7)]);
var inst_36517 = cljs.core.chunked_seq_QMARK_(inst_36515);
var state_36551__$1 = state_36551;
if(inst_36517){
var statearr_36594_38097 = state_36551__$1;
(statearr_36594_38097[(1)] = (17));

} else {
var statearr_36595_38098 = state_36551__$1;
(statearr_36595_38098[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (16))){
var inst_36534 = (state_36551[(2)]);
var state_36551__$1 = state_36551;
var statearr_36597_38100 = state_36551__$1;
(statearr_36597_38100[(2)] = inst_36534);

(statearr_36597_38100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36552 === (10))){
var inst_36502 = (state_36551[(8)]);
var inst_36504 = (state_36551[(10)]);
var inst_36509 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36502,inst_36504);
var state_36551__$1 = state_36551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36551__$1,(13),out,inst_36509);
} else {
if((state_val_36552 === (18))){
var inst_36515 = (state_36551[(7)]);
var inst_36525 = cljs.core.first(inst_36515);
var state_36551__$1 = state_36551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36551__$1,(20),out,inst_36525);
} else {
if((state_val_36552 === (8))){
var inst_36504 = (state_36551[(10)]);
var inst_36503 = (state_36551[(11)]);
var inst_36506 = (inst_36504 < inst_36503);
var inst_36507 = inst_36506;
var state_36551__$1 = state_36551;
if(cljs.core.truth_(inst_36507)){
var statearr_36599_38103 = state_36551__$1;
(statearr_36599_38103[(1)] = (10));

} else {
var statearr_36600_38104 = state_36551__$1;
(statearr_36600_38104[(1)] = (11));

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
var statearr_36602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36602[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36602[(1)] = (1));

return statearr_36602;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36551){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36551);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36603){if((e36603 instanceof Object)){
var ex__34210__auto__ = e36603;
var statearr_36604_38108 = state_36551;
(statearr_36604_38108[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36603;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38109 = state_36551;
state_36551 = G__38109;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36551){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36606 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36606[(6)] = c__34274__auto__);

return statearr_36606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36609 = arguments.length;
switch (G__36609) {
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
var G__36613 = arguments.length;
switch (G__36613) {
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
var G__36617 = arguments.length;
switch (G__36617) {
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
var c__34274__auto___38119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36643){
var state_val_36644 = (state_36643[(1)]);
if((state_val_36644 === (7))){
var inst_36638 = (state_36643[(2)]);
var state_36643__$1 = state_36643;
var statearr_36646_38121 = state_36643__$1;
(statearr_36646_38121[(2)] = inst_36638);

(statearr_36646_38121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36644 === (1))){
var inst_36620 = null;
var state_36643__$1 = (function (){var statearr_36647 = state_36643;
(statearr_36647[(7)] = inst_36620);

return statearr_36647;
})();
var statearr_36648_38124 = state_36643__$1;
(statearr_36648_38124[(2)] = null);

(statearr_36648_38124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36644 === (4))){
var inst_36623 = (state_36643[(8)]);
var inst_36623__$1 = (state_36643[(2)]);
var inst_36624 = (inst_36623__$1 == null);
var inst_36625 = cljs.core.not(inst_36624);
var state_36643__$1 = (function (){var statearr_36650 = state_36643;
(statearr_36650[(8)] = inst_36623__$1);

return statearr_36650;
})();
if(inst_36625){
var statearr_36651_38125 = state_36643__$1;
(statearr_36651_38125[(1)] = (5));

} else {
var statearr_36652_38126 = state_36643__$1;
(statearr_36652_38126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36644 === (6))){
var state_36643__$1 = state_36643;
var statearr_36654_38128 = state_36643__$1;
(statearr_36654_38128[(2)] = null);

(statearr_36654_38128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36644 === (3))){
var inst_36640 = (state_36643[(2)]);
var inst_36641 = cljs.core.async.close_BANG_(out);
var state_36643__$1 = (function (){var statearr_36655 = state_36643;
(statearr_36655[(9)] = inst_36640);

return statearr_36655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36643__$1,inst_36641);
} else {
if((state_val_36644 === (2))){
var state_36643__$1 = state_36643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36643__$1,(4),ch);
} else {
if((state_val_36644 === (11))){
var inst_36623 = (state_36643[(8)]);
var inst_36632 = (state_36643[(2)]);
var inst_36620 = inst_36623;
var state_36643__$1 = (function (){var statearr_36657 = state_36643;
(statearr_36657[(10)] = inst_36632);

(statearr_36657[(7)] = inst_36620);

return statearr_36657;
})();
var statearr_36658_38131 = state_36643__$1;
(statearr_36658_38131[(2)] = null);

(statearr_36658_38131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36644 === (9))){
var inst_36623 = (state_36643[(8)]);
var state_36643__$1 = state_36643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36643__$1,(11),out,inst_36623);
} else {
if((state_val_36644 === (5))){
var inst_36623 = (state_36643[(8)]);
var inst_36620 = (state_36643[(7)]);
var inst_36627 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36623,inst_36620);
var state_36643__$1 = state_36643;
if(inst_36627){
var statearr_36661_38135 = state_36643__$1;
(statearr_36661_38135[(1)] = (8));

} else {
var statearr_36662_38136 = state_36643__$1;
(statearr_36662_38136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36644 === (10))){
var inst_36635 = (state_36643[(2)]);
var state_36643__$1 = state_36643;
var statearr_36663_38137 = state_36643__$1;
(statearr_36663_38137[(2)] = inst_36635);

(statearr_36663_38137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36644 === (8))){
var inst_36620 = (state_36643[(7)]);
var tmp36659 = inst_36620;
var inst_36620__$1 = tmp36659;
var state_36643__$1 = (function (){var statearr_36665 = state_36643;
(statearr_36665[(7)] = inst_36620__$1);

return statearr_36665;
})();
var statearr_36666_38138 = state_36643__$1;
(statearr_36666_38138[(2)] = null);

(statearr_36666_38138[(1)] = (2));


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
var statearr_36667 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36667[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36667[(1)] = (1));

return statearr_36667;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36643){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36643);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36669){if((e36669 instanceof Object)){
var ex__34210__auto__ = e36669;
var statearr_36670_38142 = state_36643;
(statearr_36670_38142[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36669;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38143 = state_36643;
state_36643 = G__38143;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36672 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36672[(6)] = c__34274__auto___38119);

return statearr_36672;
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
var G__36675 = arguments.length;
switch (G__36675) {
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
var c__34274__auto___38148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36715){
var state_val_36717 = (state_36715[(1)]);
if((state_val_36717 === (7))){
var inst_36711 = (state_36715[(2)]);
var state_36715__$1 = state_36715;
var statearr_36719_38149 = state_36715__$1;
(statearr_36719_38149[(2)] = inst_36711);

(statearr_36719_38149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (1))){
var inst_36678 = (new Array(n));
var inst_36679 = inst_36678;
var inst_36680 = (0);
var state_36715__$1 = (function (){var statearr_36720 = state_36715;
(statearr_36720[(7)] = inst_36679);

(statearr_36720[(8)] = inst_36680);

return statearr_36720;
})();
var statearr_36721_38152 = state_36715__$1;
(statearr_36721_38152[(2)] = null);

(statearr_36721_38152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (4))){
var inst_36683 = (state_36715[(9)]);
var inst_36683__$1 = (state_36715[(2)]);
var inst_36684 = (inst_36683__$1 == null);
var inst_36685 = cljs.core.not(inst_36684);
var state_36715__$1 = (function (){var statearr_36723 = state_36715;
(statearr_36723[(9)] = inst_36683__$1);

return statearr_36723;
})();
if(inst_36685){
var statearr_36724_38154 = state_36715__$1;
(statearr_36724_38154[(1)] = (5));

} else {
var statearr_36725_38155 = state_36715__$1;
(statearr_36725_38155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (15))){
var inst_36705 = (state_36715[(2)]);
var state_36715__$1 = state_36715;
var statearr_36726_38156 = state_36715__$1;
(statearr_36726_38156[(2)] = inst_36705);

(statearr_36726_38156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (13))){
var state_36715__$1 = state_36715;
var statearr_36728_38158 = state_36715__$1;
(statearr_36728_38158[(2)] = null);

(statearr_36728_38158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (6))){
var inst_36680 = (state_36715[(8)]);
var inst_36701 = (inst_36680 > (0));
var state_36715__$1 = state_36715;
if(cljs.core.truth_(inst_36701)){
var statearr_36729_38161 = state_36715__$1;
(statearr_36729_38161[(1)] = (12));

} else {
var statearr_36730_38162 = state_36715__$1;
(statearr_36730_38162[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (3))){
var inst_36713 = (state_36715[(2)]);
var state_36715__$1 = state_36715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36715__$1,inst_36713);
} else {
if((state_val_36717 === (12))){
var inst_36679 = (state_36715[(7)]);
var inst_36703 = cljs.core.vec(inst_36679);
var state_36715__$1 = state_36715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36715__$1,(15),out,inst_36703);
} else {
if((state_val_36717 === (2))){
var state_36715__$1 = state_36715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36715__$1,(4),ch);
} else {
if((state_val_36717 === (11))){
var inst_36695 = (state_36715[(2)]);
var inst_36696 = (new Array(n));
var inst_36679 = inst_36696;
var inst_36680 = (0);
var state_36715__$1 = (function (){var statearr_36733 = state_36715;
(statearr_36733[(7)] = inst_36679);

(statearr_36733[(8)] = inst_36680);

(statearr_36733[(10)] = inst_36695);

return statearr_36733;
})();
var statearr_36734_38165 = state_36715__$1;
(statearr_36734_38165[(2)] = null);

(statearr_36734_38165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (9))){
var inst_36679 = (state_36715[(7)]);
var inst_36693 = cljs.core.vec(inst_36679);
var state_36715__$1 = state_36715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36715__$1,(11),out,inst_36693);
} else {
if((state_val_36717 === (5))){
var inst_36679 = (state_36715[(7)]);
var inst_36683 = (state_36715[(9)]);
var inst_36688 = (state_36715[(11)]);
var inst_36680 = (state_36715[(8)]);
var inst_36687 = (inst_36679[inst_36680] = inst_36683);
var inst_36688__$1 = (inst_36680 + (1));
var inst_36689 = (inst_36688__$1 < n);
var state_36715__$1 = (function (){var statearr_36736 = state_36715;
(statearr_36736[(12)] = inst_36687);

(statearr_36736[(11)] = inst_36688__$1);

return statearr_36736;
})();
if(cljs.core.truth_(inst_36689)){
var statearr_36737_38167 = state_36715__$1;
(statearr_36737_38167[(1)] = (8));

} else {
var statearr_36738_38168 = state_36715__$1;
(statearr_36738_38168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (14))){
var inst_36708 = (state_36715[(2)]);
var inst_36709 = cljs.core.async.close_BANG_(out);
var state_36715__$1 = (function (){var statearr_36741 = state_36715;
(statearr_36741[(13)] = inst_36708);

return statearr_36741;
})();
var statearr_36742_38170 = state_36715__$1;
(statearr_36742_38170[(2)] = inst_36709);

(statearr_36742_38170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (10))){
var inst_36699 = (state_36715[(2)]);
var state_36715__$1 = state_36715;
var statearr_36743_38172 = state_36715__$1;
(statearr_36743_38172[(2)] = inst_36699);

(statearr_36743_38172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36717 === (8))){
var inst_36679 = (state_36715[(7)]);
var inst_36688 = (state_36715[(11)]);
var tmp36739 = inst_36679;
var inst_36679__$1 = tmp36739;
var inst_36680 = inst_36688;
var state_36715__$1 = (function (){var statearr_36744 = state_36715;
(statearr_36744[(7)] = inst_36679__$1);

(statearr_36744[(8)] = inst_36680);

return statearr_36744;
})();
var statearr_36746_38174 = state_36715__$1;
(statearr_36746_38174[(2)] = null);

(statearr_36746_38174[(1)] = (2));


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
var statearr_36747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36747[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36747[(1)] = (1));

return statearr_36747;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36715){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36715);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36754){if((e36754 instanceof Object)){
var ex__34210__auto__ = e36754;
var statearr_36755_38175 = state_36715;
(statearr_36755_38175[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38177 = state_36715;
state_36715 = G__38177;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36757 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36757[(6)] = c__34274__auto___38148);

return statearr_36757;
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
var G__36761 = arguments.length;
switch (G__36761) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36806){
var state_val_36807 = (state_36806[(1)]);
if((state_val_36807 === (7))){
var inst_36801 = (state_36806[(2)]);
var state_36806__$1 = state_36806;
var statearr_36809_38182 = state_36806__$1;
(statearr_36809_38182[(2)] = inst_36801);

(statearr_36809_38182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (1))){
var inst_36763 = [];
var inst_36764 = inst_36763;
var inst_36765 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36806__$1 = (function (){var statearr_36810 = state_36806;
(statearr_36810[(7)] = inst_36765);

(statearr_36810[(8)] = inst_36764);

return statearr_36810;
})();
var statearr_36811_38183 = state_36806__$1;
(statearr_36811_38183[(2)] = null);

(statearr_36811_38183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (4))){
var inst_36768 = (state_36806[(9)]);
var inst_36768__$1 = (state_36806[(2)]);
var inst_36770 = (inst_36768__$1 == null);
var inst_36771 = cljs.core.not(inst_36770);
var state_36806__$1 = (function (){var statearr_36813 = state_36806;
(statearr_36813[(9)] = inst_36768__$1);

return statearr_36813;
})();
if(inst_36771){
var statearr_36814_38185 = state_36806__$1;
(statearr_36814_38185[(1)] = (5));

} else {
var statearr_36815_38187 = state_36806__$1;
(statearr_36815_38187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (15))){
var inst_36795 = (state_36806[(2)]);
var state_36806__$1 = state_36806;
var statearr_36816_38188 = state_36806__$1;
(statearr_36816_38188[(2)] = inst_36795);

(statearr_36816_38188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (13))){
var state_36806__$1 = state_36806;
var statearr_36818_38193 = state_36806__$1;
(statearr_36818_38193[(2)] = null);

(statearr_36818_38193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (6))){
var inst_36764 = (state_36806[(8)]);
var inst_36790 = inst_36764.length;
var inst_36791 = (inst_36790 > (0));
var state_36806__$1 = state_36806;
if(cljs.core.truth_(inst_36791)){
var statearr_36819_38194 = state_36806__$1;
(statearr_36819_38194[(1)] = (12));

} else {
var statearr_36820_38195 = state_36806__$1;
(statearr_36820_38195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (3))){
var inst_36803 = (state_36806[(2)]);
var state_36806__$1 = state_36806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36806__$1,inst_36803);
} else {
if((state_val_36807 === (12))){
var inst_36764 = (state_36806[(8)]);
var inst_36793 = cljs.core.vec(inst_36764);
var state_36806__$1 = state_36806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36806__$1,(15),out,inst_36793);
} else {
if((state_val_36807 === (2))){
var state_36806__$1 = state_36806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36806__$1,(4),ch);
} else {
if((state_val_36807 === (11))){
var inst_36773 = (state_36806[(10)]);
var inst_36768 = (state_36806[(9)]);
var inst_36783 = (state_36806[(2)]);
var inst_36784 = [];
var inst_36785 = inst_36784.push(inst_36768);
var inst_36764 = inst_36784;
var inst_36765 = inst_36773;
var state_36806__$1 = (function (){var statearr_36823 = state_36806;
(statearr_36823[(7)] = inst_36765);

(statearr_36823[(8)] = inst_36764);

(statearr_36823[(11)] = inst_36783);

(statearr_36823[(12)] = inst_36785);

return statearr_36823;
})();
var statearr_36824_38202 = state_36806__$1;
(statearr_36824_38202[(2)] = null);

(statearr_36824_38202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (9))){
var inst_36764 = (state_36806[(8)]);
var inst_36781 = cljs.core.vec(inst_36764);
var state_36806__$1 = state_36806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36806__$1,(11),out,inst_36781);
} else {
if((state_val_36807 === (5))){
var inst_36765 = (state_36806[(7)]);
var inst_36773 = (state_36806[(10)]);
var inst_36768 = (state_36806[(9)]);
var inst_36773__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36768) : f.call(null,inst_36768));
var inst_36774 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36773__$1,inst_36765);
var inst_36775 = cljs.core.keyword_identical_QMARK_(inst_36765,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36776 = ((inst_36774) || (inst_36775));
var state_36806__$1 = (function (){var statearr_36826 = state_36806;
(statearr_36826[(10)] = inst_36773__$1);

return statearr_36826;
})();
if(cljs.core.truth_(inst_36776)){
var statearr_36827_38205 = state_36806__$1;
(statearr_36827_38205[(1)] = (8));

} else {
var statearr_36828_38207 = state_36806__$1;
(statearr_36828_38207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (14))){
var inst_36798 = (state_36806[(2)]);
var inst_36799 = cljs.core.async.close_BANG_(out);
var state_36806__$1 = (function (){var statearr_36831 = state_36806;
(statearr_36831[(13)] = inst_36798);

return statearr_36831;
})();
var statearr_36832_38208 = state_36806__$1;
(statearr_36832_38208[(2)] = inst_36799);

(statearr_36832_38208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (10))){
var inst_36788 = (state_36806[(2)]);
var state_36806__$1 = state_36806;
var statearr_36833_38209 = state_36806__$1;
(statearr_36833_38209[(2)] = inst_36788);

(statearr_36833_38209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36807 === (8))){
var inst_36764 = (state_36806[(8)]);
var inst_36773 = (state_36806[(10)]);
var inst_36768 = (state_36806[(9)]);
var inst_36778 = inst_36764.push(inst_36768);
var tmp36830 = inst_36764;
var inst_36764__$1 = tmp36830;
var inst_36765 = inst_36773;
var state_36806__$1 = (function (){var statearr_36835 = state_36806;
(statearr_36835[(7)] = inst_36765);

(statearr_36835[(8)] = inst_36764__$1);

(statearr_36835[(14)] = inst_36778);

return statearr_36835;
})();
var statearr_36836_38212 = state_36806__$1;
(statearr_36836_38212[(2)] = null);

(statearr_36836_38212[(1)] = (2));


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
var statearr_36838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36838[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36838[(1)] = (1));

return statearr_36838;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36806){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36806);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36839){if((e36839 instanceof Object)){
var ex__34210__auto__ = e36839;
var statearr_36841_38214 = state_36806;
(statearr_36841_38214[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38215 = state_36806;
state_36806 = G__38215;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36842 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36842[(6)] = c__34274__auto___38181);

return statearr_36842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
