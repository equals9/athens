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
var val_36871 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36871) : fn1.call(null,val_36871));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36871) : fn1.call(null,val_36871));
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
var G__36887 = (i + (1));
i = G__36887;
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
var len__4789__auto___36889 = arguments.length;
var i__4790__auto___36891 = (0);
while(true){
if((i__4790__auto___36891 < len__4789__auto___36889)){
args__4795__auto__.push((arguments[i__4790__auto___36891]));

var G__36892 = (i__4790__auto___36891 + (1));
i__4790__auto___36891 = G__36892;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34380){
var map__34381 = p__34380;
var map__34381__$1 = (((((!((map__34381 == null))))?(((((map__34381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34381):map__34381);
var opts = map__34381__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34375){
var G__34376 = cljs.core.first(seq34375);
var seq34375__$1 = cljs.core.next(seq34375);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34376,seq34375__$1);
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
var G__34387 = arguments.length;
switch (G__34387) {
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
var c__34274__auto___36898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36901 = state_34423__$1;
(statearr_34425_36901[(2)] = inst_34419);

(statearr_34425_36901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36902 = state_34423__$1;
(statearr_34426_36902[(2)] = null);

(statearr_34426_36902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (4))){
var inst_34402 = (state_34423[(7)]);
var inst_34402__$1 = (state_34423[(2)]);
var inst_34403 = (inst_34402__$1 == null);
var state_34423__$1 = (function (){var statearr_34427 = state_34423;
(statearr_34427[(7)] = inst_34402__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34403)){
var statearr_34428_36904 = state_34423__$1;
(statearr_34428_36904[(1)] = (5));

} else {
var statearr_34429_36905 = state_34423__$1;
(statearr_34429_36905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36906 = state_34423__$1;
(statearr_34430_36906[(2)] = null);

(statearr_34430_36906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (6))){
var inst_34402 = (state_34423[(7)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34423__$1,(11),to,inst_34402);
} else {
if((state_val_34424 === (3))){
var inst_34421 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34423__$1,inst_34421);
} else {
if((state_val_34424 === (12))){
var state_34423__$1 = state_34423;
var statearr_34431_36908 = state_34423__$1;
(statearr_34431_36908[(2)] = null);

(statearr_34431_36908[(1)] = (2));


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
var statearr_34432_36910 = state_34423__$1;
(statearr_34432_36910[(1)] = (12));

} else {
var statearr_34433_36911 = state_34423__$1;
(statearr_34433_36911[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34434_36912 = state_34423__$1;
(statearr_34434_36912[(2)] = null);

(statearr_34434_36912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36913 = state_34423__$1;
(statearr_34435_36913[(1)] = (8));

} else {
var statearr_34436_36915 = state_34423__$1;
(statearr_34436_36915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34417 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_36916 = state_34423__$1;
(statearr_34437_36916[(2)] = inst_34417);

(statearr_34437_36916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34409 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34438_36917 = state_34423__$1;
(statearr_34438_36917[(2)] = inst_34409);

(statearr_34438_36917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34406 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34439_36919 = state_34423__$1;
(statearr_34439_36919[(2)] = inst_34406);

(statearr_34439_36919[(1)] = (10));


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
var statearr_34442_36921 = state_34423;
(statearr_34442_36921[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36922 = state_34423;
state_34423 = G__36922;
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
var state__34276__auto__ = (function (){var statearr_34447 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34447[(6)] = c__34274__auto___36898);

return statearr_34447;
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
var process = (function (p__34449){
var vec__34450 = p__34449;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34450,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34450,(1),null);
var job = vec__34450;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34274__auto___36925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var state_34457__$1 = (function (){var statearr_34460 = state_34457;
(statearr_34460[(7)] = inst_34454);

return statearr_34460;
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
var statearr_34461 = [null,null,null,null,null,null,null,null];
(statearr_34461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34461[(1)] = (1));

return statearr_34461;
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
}catch (e34463){if((e34463 instanceof Object)){
var ex__34210__auto__ = e34463;
var statearr_34464_36927 = state_34457;
(statearr_34464_36927[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36934 = state_34457;
state_34457 = G__36934;
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
var state__34276__auto__ = (function (){var statearr_34465 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34465[(6)] = c__34274__auto___36925);

return statearr_34465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34467){
var vec__34468 = p__34467;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34468,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34468,(1),null);
var job = vec__34468;
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
var n__4666__auto___36936 = n;
var __36937 = (0);
while(true){
if((__36937 < n__4666__auto___36936)){
var G__34471_36938 = type;
var G__34471_36939__$1 = (((G__34471_36938 instanceof cljs.core.Keyword))?G__34471_36938.fqn:null);
switch (G__34471_36939__$1) {
case "compute":
var c__34274__auto___36941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36937,c__34274__auto___36941,G__34471_36938,G__34471_36939__$1,n__4666__auto___36936,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36937,c__34274__auto___36941,G__34471_36938,G__34471_36939__$1,n__4666__auto___36936,jobs,results,process,async){
return (function (state_34486){
var state_val_34487 = (state_34486[(1)]);
if((state_val_34487 === (1))){
var state_34486__$1 = state_34486;
var statearr_34493_36943 = state_34486__$1;
(statearr_34493_36943[(2)] = null);

(statearr_34493_36943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (2))){
var state_34486__$1 = state_34486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34486__$1,(4),jobs);
} else {
if((state_val_34487 === (3))){
var inst_34484 = (state_34486[(2)]);
var state_34486__$1 = state_34486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34486__$1,inst_34484);
} else {
if((state_val_34487 === (4))){
var inst_34475 = (state_34486[(2)]);
var inst_34477 = process(inst_34475);
var state_34486__$1 = state_34486;
if(cljs.core.truth_(inst_34477)){
var statearr_34494_36947 = state_34486__$1;
(statearr_34494_36947[(1)] = (5));

} else {
var statearr_34495_36948 = state_34486__$1;
(statearr_34495_36948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (5))){
var state_34486__$1 = state_34486;
var statearr_34496_36949 = state_34486__$1;
(statearr_34496_36949[(2)] = null);

(statearr_34496_36949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (6))){
var state_34486__$1 = state_34486;
var statearr_34497_36950 = state_34486__$1;
(statearr_34497_36950[(2)] = null);

(statearr_34497_36950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (7))){
var inst_34482 = (state_34486[(2)]);
var state_34486__$1 = state_34486;
var statearr_34498_36951 = state_34486__$1;
(statearr_34498_36951[(2)] = inst_34482);

(statearr_34498_36951[(1)] = (3));


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
});})(__36937,c__34274__auto___36941,G__34471_36938,G__34471_36939__$1,n__4666__auto___36936,jobs,results,process,async))
;
return ((function (__36937,switch__34206__auto__,c__34274__auto___36941,G__34471_36938,G__34471_36939__$1,n__4666__auto___36936,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34499 = [null,null,null,null,null,null,null];
(statearr_34499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34499[(1)] = (1));

return statearr_34499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34486){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34486);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34501){if((e34501 instanceof Object)){
var ex__34210__auto__ = e34501;
var statearr_34502_36956 = state_34486;
(statearr_34502_36956[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36958 = state_34486;
state_34486 = G__36958;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34486){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36937,switch__34206__auto__,c__34274__auto___36941,G__34471_36938,G__34471_36939__$1,n__4666__auto___36936,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34503 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34503[(6)] = c__34274__auto___36941);

return statearr_34503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36937,c__34274__auto___36941,G__34471_36938,G__34471_36939__$1,n__4666__auto___36936,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36937,c__34274__auto___36961,G__34471_36938,G__34471_36939__$1,n__4666__auto___36936,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36937,c__34274__auto___36961,G__34471_36938,G__34471_36939__$1,n__4666__auto___36936,jobs,results,process,async){
return (function (state_34516){
var state_val_34517 = (state_34516[(1)]);
if((state_val_34517 === (1))){
var state_34516__$1 = state_34516;
var statearr_34522_36962 = state_34516__$1;
(statearr_34522_36962[(2)] = null);

(statearr_34522_36962[(1)] = (2));


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
var statearr_34526_36963 = state_34516__$1;
(statearr_34526_36963[(1)] = (5));

} else {
var statearr_34527_36964 = state_34516__$1;
(statearr_34527_36964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (5))){
var state_34516__$1 = state_34516;
var statearr_34528_36965 = state_34516__$1;
(statearr_34528_36965[(2)] = null);

(statearr_34528_36965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (6))){
var state_34516__$1 = state_34516;
var statearr_34529_36966 = state_34516__$1;
(statearr_34529_36966[(2)] = null);

(statearr_34529_36966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34517 === (7))){
var inst_34512 = (state_34516[(2)]);
var state_34516__$1 = state_34516;
var statearr_34530_36969 = state_34516__$1;
(statearr_34530_36969[(2)] = inst_34512);

(statearr_34530_36969[(1)] = (3));


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
});})(__36937,c__34274__auto___36961,G__34471_36938,G__34471_36939__$1,n__4666__auto___36936,jobs,results,process,async))
;
return ((function (__36937,switch__34206__auto__,c__34274__auto___36961,G__34471_36938,G__34471_36939__$1,n__4666__auto___36936,jobs,results,process,async){
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
var statearr_34533_36974 = state_34516;
(statearr_34533_36974[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36975 = state_34516;
state_34516 = G__36975;
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
;})(__36937,switch__34206__auto__,c__34274__auto___36961,G__34471_36938,G__34471_36939__$1,n__4666__auto___36936,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34534 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34534[(6)] = c__34274__auto___36961);

return statearr_34534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36937,c__34274__auto___36961,G__34471_36938,G__34471_36939__$1,n__4666__auto___36936,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34471_36939__$1)].join('')));

}

var G__36978 = (__36937 + (1));
__36937 = G__36978;
continue;
} else {
}
break;
}

var c__34274__auto___36980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34555 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34561_36982 = state_34559__$1;
(statearr_34561_36982[(2)] = inst_34555);

(statearr_34561_36982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (1))){
var state_34559__$1 = state_34559;
var statearr_34562_36985 = state_34559__$1;
(statearr_34562_36985[(2)] = null);

(statearr_34562_36985[(1)] = (2));


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
var statearr_34564_36989 = state_34559__$1;
(statearr_34564_36989[(1)] = (5));

} else {
var statearr_34565_36990 = state_34559__$1;
(statearr_34565_36990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (6))){
var inst_34544 = (state_34559[(8)]);
var inst_34537 = (state_34559[(7)]);
var inst_34544__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34547 = [inst_34537,inst_34544__$1];
var inst_34548 = (new cljs.core.PersistentVector(null,2,(5),inst_34546,inst_34547,null));
var state_34559__$1 = (function (){var statearr_34566 = state_34559;
(statearr_34566[(8)] = inst_34544__$1);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34559__$1,(8),jobs,inst_34548);
} else {
if((state_val_34560 === (3))){
var inst_34557 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34559__$1,inst_34557);
} else {
if((state_val_34560 === (2))){
var state_34559__$1 = state_34559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34559__$1,(4),from);
} else {
if((state_val_34560 === (9))){
var inst_34552 = (state_34559[(2)]);
var state_34559__$1 = (function (){var statearr_34567 = state_34559;
(statearr_34567[(9)] = inst_34552);

return statearr_34567;
})();
var statearr_34568_36998 = state_34559__$1;
(statearr_34568_36998[(2)] = null);

(statearr_34568_36998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34541 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_37003 = state_34559__$1;
(statearr_34569_37003[(2)] = inst_34541);

(statearr_34569_37003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (8))){
var inst_34544 = (state_34559[(8)]);
var inst_34550 = (state_34559[(2)]);
var state_34559__$1 = (function (){var statearr_34570 = state_34559;
(statearr_34570[(10)] = inst_34550);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34559__$1,(9),results,inst_34544);
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
var statearr_34573_37010 = state_34559;
(statearr_34573_37010[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37013 = state_34559;
state_34559 = G__37013;
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
(statearr_34574[(6)] = c__34274__auto___36980);

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
var statearr_34614_37021 = state_34612__$1;
(statearr_34614_37021[(2)] = inst_34608);

(statearr_34614_37021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_37024 = state_34612__$1;
(statearr_34615_37024[(2)] = null);

(statearr_34615_37024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_37027 = state_34612__$1;
(statearr_34616_37027[(2)] = null);

(statearr_34616_37027[(1)] = (2));


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
var statearr_34618_37029 = state_34612__$1;
(statearr_34618_37029[(1)] = (5));

} else {
var statearr_34619_37031 = state_34612__$1;
(statearr_34619_37031[(1)] = (6));

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
var statearr_34620_37037 = state_34612__$1;
(statearr_34620_37037[(2)] = inst_34603);

(statearr_34620_37037[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_37044 = state_34612__$1;
(statearr_34622_37044[(2)] = null);

(statearr_34622_37044[(1)] = (2));


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
var statearr_34623_37045 = state_34612__$1;
(statearr_34623_37045[(1)] = (19));

} else {
var statearr_34624_37046 = state_34612__$1;
(statearr_34624_37046[(1)] = (20));

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
var statearr_34625_37051 = state_34612__$1;
(statearr_34625_37051[(2)] = null);

(statearr_34625_37051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_37053 = state_34612__$1;
(statearr_34627_37053[(2)] = null);

(statearr_34627_37053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_37054 = state_34612__$1;
(statearr_34628_37054[(2)] = null);

(statearr_34628_37054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_37055 = state_34612__$1;
(statearr_34629_37055[(1)] = (8));

} else {
var statearr_34630_37056 = state_34612__$1;
(statearr_34630_37056[(1)] = (9));

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
var statearr_34632_37065 = state_34612__$1;
(statearr_34632_37065[(1)] = (15));

} else {
var statearr_34633_37066 = state_34612__$1;
(statearr_34633_37066[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_37067 = state_34612__$1;
(statearr_34634_37067[(2)] = false);

(statearr_34634_37067[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_37068 = state_34612__$1;
(statearr_34635_37068[(2)] = inst_34584);

(statearr_34635_37068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_37071 = state_34612__$1;
(statearr_34636_37071[(2)] = inst_34595);

(statearr_34636_37071[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_37077 = state_34612__$1;
(statearr_34637_37077[(2)] = inst_34581);

(statearr_34637_37077[(1)] = (10));


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
var statearr_34640_37080 = state_34612;
(statearr_34640_37080[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37082 = state_34612;
state_34612 = G__37082;
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
var c__34274__auto___37104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34684){
var state_val_34685 = (state_34684[(1)]);
if((state_val_34685 === (7))){
var inst_34680 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34686_37106 = state_34684__$1;
(statearr_34686_37106[(2)] = inst_34680);

(statearr_34686_37106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (1))){
var state_34684__$1 = state_34684;
var statearr_34687_37107 = state_34684__$1;
(statearr_34687_37107[(2)] = null);

(statearr_34687_37107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (4))){
var inst_34661 = (state_34684[(7)]);
var inst_34661__$1 = (state_34684[(2)]);
var inst_34662 = (inst_34661__$1 == null);
var state_34684__$1 = (function (){var statearr_34689 = state_34684;
(statearr_34689[(7)] = inst_34661__$1);

return statearr_34689;
})();
if(cljs.core.truth_(inst_34662)){
var statearr_34690_37114 = state_34684__$1;
(statearr_34690_37114[(1)] = (5));

} else {
var statearr_34691_37116 = state_34684__$1;
(statearr_34691_37116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (13))){
var state_34684__$1 = state_34684;
var statearr_34692_37117 = state_34684__$1;
(statearr_34692_37117[(2)] = null);

(statearr_34692_37117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (6))){
var inst_34661 = (state_34684[(7)]);
var inst_34667 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34661) : p.call(null,inst_34661));
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34667)){
var statearr_34694_37120 = state_34684__$1;
(statearr_34694_37120[(1)] = (9));

} else {
var statearr_34695_37121 = state_34684__$1;
(statearr_34695_37121[(1)] = (10));

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
var statearr_34696_37122 = state_34684__$1;
(statearr_34696_37122[(2)] = null);

(statearr_34696_37122[(1)] = (2));


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
var statearr_34699_37125 = state_34684__$1;
(statearr_34699_37125[(2)] = tc);

(statearr_34699_37125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (5))){
var inst_34664 = cljs.core.async.close_BANG_(tc);
var inst_34665 = cljs.core.async.close_BANG_(fc);
var state_34684__$1 = (function (){var statearr_34700 = state_34684;
(statearr_34700[(8)] = inst_34664);

return statearr_34700;
})();
var statearr_34701_37127 = state_34684__$1;
(statearr_34701_37127[(2)] = inst_34665);

(statearr_34701_37127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (14))){
var inst_34678 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34703_37128 = state_34684__$1;
(statearr_34703_37128[(2)] = inst_34678);

(statearr_34703_37128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (10))){
var state_34684__$1 = state_34684;
var statearr_34706_37131 = state_34684__$1;
(statearr_34706_37131[(2)] = fc);

(statearr_34706_37131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (8))){
var inst_34673 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34673)){
var statearr_34707_37136 = state_34684__$1;
(statearr_34707_37136[(1)] = (12));

} else {
var statearr_34708_37138 = state_34684__$1;
(statearr_34708_37138[(1)] = (13));

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
var statearr_34709 = [null,null,null,null,null,null,null,null,null];
(statearr_34709[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34709[(1)] = (1));

return statearr_34709;
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
}catch (e34710){if((e34710 instanceof Object)){
var ex__34210__auto__ = e34710;
var statearr_34711_37142 = state_34684;
(statearr_34711_37142[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37143 = state_34684;
state_34684 = G__37143;
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
var state__34276__auto__ = (function (){var statearr_34713 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34713[(6)] = c__34274__auto___37104);

return statearr_34713;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34737){
var state_val_34738 = (state_34737[(1)]);
if((state_val_34738 === (7))){
var inst_34733 = (state_34737[(2)]);
var state_34737__$1 = state_34737;
var statearr_34742_37150 = state_34737__$1;
(statearr_34742_37150[(2)] = inst_34733);

(statearr_34742_37150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (1))){
var inst_34714 = init;
var state_34737__$1 = (function (){var statearr_34743 = state_34737;
(statearr_34743[(7)] = inst_34714);

return statearr_34743;
})();
var statearr_34744_37151 = state_34737__$1;
(statearr_34744_37151[(2)] = null);

(statearr_34744_37151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (4))){
var inst_34717 = (state_34737[(8)]);
var inst_34717__$1 = (state_34737[(2)]);
var inst_34721 = (inst_34717__$1 == null);
var state_34737__$1 = (function (){var statearr_34745 = state_34737;
(statearr_34745[(8)] = inst_34717__$1);

return statearr_34745;
})();
if(cljs.core.truth_(inst_34721)){
var statearr_34746_37156 = state_34737__$1;
(statearr_34746_37156[(1)] = (5));

} else {
var statearr_34747_37157 = state_34737__$1;
(statearr_34747_37157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (6))){
var inst_34724 = (state_34737[(9)]);
var inst_34717 = (state_34737[(8)]);
var inst_34714 = (state_34737[(7)]);
var inst_34724__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34714,inst_34717) : f.call(null,inst_34714,inst_34717));
var inst_34725 = cljs.core.reduced_QMARK_(inst_34724__$1);
var state_34737__$1 = (function (){var statearr_34748 = state_34737;
(statearr_34748[(9)] = inst_34724__$1);

return statearr_34748;
})();
if(inst_34725){
var statearr_34749_37159 = state_34737__$1;
(statearr_34749_37159[(1)] = (8));

} else {
var statearr_34750_37160 = state_34737__$1;
(statearr_34750_37160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (3))){
var inst_34735 = (state_34737[(2)]);
var state_34737__$1 = state_34737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34737__$1,inst_34735);
} else {
if((state_val_34738 === (2))){
var state_34737__$1 = state_34737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34737__$1,(4),ch);
} else {
if((state_val_34738 === (9))){
var inst_34724 = (state_34737[(9)]);
var inst_34714 = inst_34724;
var state_34737__$1 = (function (){var statearr_34751 = state_34737;
(statearr_34751[(7)] = inst_34714);

return statearr_34751;
})();
var statearr_34752_37170 = state_34737__$1;
(statearr_34752_37170[(2)] = null);

(statearr_34752_37170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (5))){
var inst_34714 = (state_34737[(7)]);
var state_34737__$1 = state_34737;
var statearr_34756_37171 = state_34737__$1;
(statearr_34756_37171[(2)] = inst_34714);

(statearr_34756_37171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (10))){
var inst_34731 = (state_34737[(2)]);
var state_34737__$1 = state_34737;
var statearr_34757_37173 = state_34737__$1;
(statearr_34757_37173[(2)] = inst_34731);

(statearr_34757_37173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34738 === (8))){
var inst_34724 = (state_34737[(9)]);
var inst_34727 = cljs.core.deref(inst_34724);
var state_34737__$1 = state_34737;
var statearr_34758_37177 = state_34737__$1;
(statearr_34758_37177[(2)] = inst_34727);

(statearr_34758_37177[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34737){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34737);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34760){if((e34760 instanceof Object)){
var ex__34210__auto__ = e34760;
var statearr_34761_37183 = state_34737;
(statearr_34761_37183[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37188 = state_34737;
state_34737 = G__37188;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34737){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34737);
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
var statearr_34772_37204 = state_34768;
(statearr_34772_37204[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37205 = state_34768;
state_34768 = G__37205;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34807){
var state_val_34808 = (state_34807[(1)]);
if((state_val_34808 === (7))){
var inst_34789 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34809_37211 = state_34807__$1;
(statearr_34809_37211[(2)] = inst_34789);

(statearr_34809_37211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (1))){
var inst_34779 = cljs.core.seq(coll);
var inst_34780 = inst_34779;
var state_34807__$1 = (function (){var statearr_34811 = state_34807;
(statearr_34811[(7)] = inst_34780);

return statearr_34811;
})();
var statearr_34812_37213 = state_34807__$1;
(statearr_34812_37213[(2)] = null);

(statearr_34812_37213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (4))){
var inst_34780 = (state_34807[(7)]);
var inst_34787 = cljs.core.first(inst_34780);
var state_34807__$1 = state_34807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34807__$1,(7),ch,inst_34787);
} else {
if((state_val_34808 === (13))){
var inst_34801 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34818_37218 = state_34807__$1;
(statearr_34818_37218[(2)] = inst_34801);

(statearr_34818_37218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (6))){
var inst_34792 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34792)){
var statearr_34819_37219 = state_34807__$1;
(statearr_34819_37219[(1)] = (8));

} else {
var statearr_34820_37221 = state_34807__$1;
(statearr_34820_37221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (3))){
var inst_34805 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34807__$1,inst_34805);
} else {
if((state_val_34808 === (12))){
var state_34807__$1 = state_34807;
var statearr_34824_37222 = state_34807__$1;
(statearr_34824_37222[(2)] = null);

(statearr_34824_37222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (2))){
var inst_34780 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34780)){
var statearr_34825_37226 = state_34807__$1;
(statearr_34825_37226[(1)] = (4));

} else {
var statearr_34826_37228 = state_34807__$1;
(statearr_34826_37228[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (11))){
var inst_34798 = cljs.core.async.close_BANG_(ch);
var state_34807__$1 = state_34807;
var statearr_34830_37229 = state_34807__$1;
(statearr_34830_37229[(2)] = inst_34798);

(statearr_34830_37229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (9))){
var state_34807__$1 = state_34807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34831_37230 = state_34807__$1;
(statearr_34831_37230[(1)] = (11));

} else {
var statearr_34832_37232 = state_34807__$1;
(statearr_34832_37232[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (5))){
var inst_34780 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
var statearr_34833_37233 = state_34807__$1;
(statearr_34833_37233[(2)] = inst_34780);

(statearr_34833_37233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (10))){
var inst_34803 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34834_37237 = state_34807__$1;
(statearr_34834_37237[(2)] = inst_34803);

(statearr_34834_37237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (8))){
var inst_34780 = (state_34807[(7)]);
var inst_34794 = cljs.core.next(inst_34780);
var inst_34780__$1 = inst_34794;
var state_34807__$1 = (function (){var statearr_34835 = state_34807;
(statearr_34835[(7)] = inst_34780__$1);

return statearr_34835;
})();
var statearr_34836_37240 = state_34807__$1;
(statearr_34836_37240[(2)] = null);

(statearr_34836_37240[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34807){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34807);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__34210__auto__ = e34838;
var statearr_34839_37248 = state_34807;
(statearr_34839_37248[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37249 = state_34807;
state_34807 = G__37249;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34807);
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
var c__34274__auto___37284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34990){
var state_val_34995 = (state_34990[(1)]);
if((state_val_34995 === (7))){
var inst_34986 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_34998_37286 = state_34990__$1;
(statearr_34998_37286[(2)] = inst_34986);

(statearr_34998_37286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (20))){
var inst_34878 = (state_34990[(7)]);
var inst_34895 = cljs.core.first(inst_34878);
var inst_34896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34895,(0),null);
var inst_34897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34895,(1),null);
var state_34990__$1 = (function (){var statearr_34999 = state_34990;
(statearr_34999[(8)] = inst_34896);

return statearr_34999;
})();
if(cljs.core.truth_(inst_34897)){
var statearr_35000_37290 = state_34990__$1;
(statearr_35000_37290[(1)] = (22));

} else {
var statearr_35001_37293 = state_34990__$1;
(statearr_35001_37293[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (27))){
var inst_34927 = (state_34990[(9)]);
var inst_34846 = (state_34990[(10)]);
var inst_34925 = (state_34990[(11)]);
var inst_34932 = (state_34990[(12)]);
var inst_34932__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34925,inst_34927);
var inst_34933 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34932__$1,inst_34846,done);
var state_34990__$1 = (function (){var statearr_35002 = state_34990;
(statearr_35002[(12)] = inst_34932__$1);

return statearr_35002;
})();
if(cljs.core.truth_(inst_34933)){
var statearr_35004_37299 = state_34990__$1;
(statearr_35004_37299[(1)] = (30));

} else {
var statearr_35006_37300 = state_34990__$1;
(statearr_35006_37300[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (1))){
var state_34990__$1 = state_34990;
var statearr_35008_37303 = state_34990__$1;
(statearr_35008_37303[(2)] = null);

(statearr_35008_37303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (24))){
var inst_34878 = (state_34990[(7)]);
var inst_34902 = (state_34990[(2)]);
var inst_34903 = cljs.core.next(inst_34878);
var inst_34855 = inst_34903;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35012 = state_34990;
(statearr_35012[(13)] = inst_34857);

(statearr_35012[(14)] = inst_34856);

(statearr_35012[(15)] = inst_34858);

(statearr_35012[(16)] = inst_34855);

(statearr_35012[(17)] = inst_34902);

return statearr_35012;
})();
var statearr_35013_37309 = state_34990__$1;
(statearr_35013_37309[(2)] = null);

(statearr_35013_37309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (39))){
var state_34990__$1 = state_34990;
var statearr_35018_37312 = state_34990__$1;
(statearr_35018_37312[(2)] = null);

(statearr_35018_37312[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (4))){
var inst_34846 = (state_34990[(10)]);
var inst_34846__$1 = (state_34990[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34990__$1 = (function (){var statearr_35022 = state_34990;
(statearr_35022[(10)] = inst_34846__$1);

return statearr_35022;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35023_37319 = state_34990__$1;
(statearr_35023_37319[(1)] = (5));

} else {
var statearr_35024_37320 = state_34990__$1;
(statearr_35024_37320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (15))){
var inst_34857 = (state_34990[(13)]);
var inst_34856 = (state_34990[(14)]);
var inst_34858 = (state_34990[(15)]);
var inst_34855 = (state_34990[(16)]);
var inst_34873 = (state_34990[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35014 = inst_34857;
var tmp35015 = inst_34856;
var tmp35016 = inst_34855;
var inst_34855__$1 = tmp35016;
var inst_34856__$1 = tmp35015;
var inst_34857__$1 = tmp35014;
var inst_34858__$1 = inst_34874;
var state_34990__$1 = (function (){var statearr_35040 = state_34990;
(statearr_35040[(18)] = inst_34873);

(statearr_35040[(13)] = inst_34857__$1);

(statearr_35040[(14)] = inst_34856__$1);

(statearr_35040[(15)] = inst_34858__$1);

(statearr_35040[(16)] = inst_34855__$1);

return statearr_35040;
})();
var statearr_35041_37325 = state_34990__$1;
(statearr_35041_37325[(2)] = null);

(statearr_35041_37325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (21))){
var inst_34906 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35047_37330 = state_34990__$1;
(statearr_35047_37330[(2)] = inst_34906);

(statearr_35047_37330[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (31))){
var inst_34932 = (state_34990[(12)]);
var inst_34936 = done(null);
var inst_34937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34932);
var state_34990__$1 = (function (){var statearr_35050 = state_34990;
(statearr_35050[(19)] = inst_34936);

return statearr_35050;
})();
var statearr_35051_37334 = state_34990__$1;
(statearr_35051_37334[(2)] = inst_34937);

(statearr_35051_37334[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (32))){
var inst_34927 = (state_34990[(9)]);
var inst_34925 = (state_34990[(11)]);
var inst_34924 = (state_34990[(20)]);
var inst_34926 = (state_34990[(21)]);
var inst_34940 = (state_34990[(2)]);
var inst_34942 = (inst_34927 + (1));
var tmp35044 = inst_34925;
var tmp35045 = inst_34924;
var tmp35046 = inst_34926;
var inst_34924__$1 = tmp35045;
var inst_34925__$1 = tmp35044;
var inst_34926__$1 = tmp35046;
var inst_34927__$1 = inst_34942;
var state_34990__$1 = (function (){var statearr_35061 = state_34990;
(statearr_35061[(9)] = inst_34927__$1);

(statearr_35061[(11)] = inst_34925__$1);

(statearr_35061[(20)] = inst_34924__$1);

(statearr_35061[(21)] = inst_34926__$1);

(statearr_35061[(22)] = inst_34940);

return statearr_35061;
})();
var statearr_35067_37341 = state_34990__$1;
(statearr_35067_37341[(2)] = null);

(statearr_35067_37341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (40))){
var inst_34956 = (state_34990[(23)]);
var inst_34961 = done(null);
var inst_34962 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34956);
var state_34990__$1 = (function (){var statearr_35076 = state_34990;
(statearr_35076[(24)] = inst_34961);

return statearr_35076;
})();
var statearr_35080_37348 = state_34990__$1;
(statearr_35080_37348[(2)] = inst_34962);

(statearr_35080_37348[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (33))){
var inst_34945 = (state_34990[(25)]);
var inst_34948 = cljs.core.chunked_seq_QMARK_(inst_34945);
var state_34990__$1 = state_34990;
if(inst_34948){
var statearr_35084_37352 = state_34990__$1;
(statearr_35084_37352[(1)] = (36));

} else {
var statearr_35087_37353 = state_34990__$1;
(statearr_35087_37353[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (13))){
var inst_34867 = (state_34990[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34990__$1 = state_34990;
var statearr_35092_37355 = state_34990__$1;
(statearr_35092_37355[(2)] = inst_34870);

(statearr_35092_37355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (22))){
var inst_34896 = (state_34990[(8)]);
var inst_34899 = cljs.core.async.close_BANG_(inst_34896);
var state_34990__$1 = state_34990;
var statearr_35098_37357 = state_34990__$1;
(statearr_35098_37357[(2)] = inst_34899);

(statearr_35098_37357[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (36))){
var inst_34945 = (state_34990[(25)]);
var inst_34950 = cljs.core.chunk_first(inst_34945);
var inst_34952 = cljs.core.chunk_rest(inst_34945);
var inst_34953 = cljs.core.count(inst_34950);
var inst_34924 = inst_34952;
var inst_34925 = inst_34950;
var inst_34926 = inst_34953;
var inst_34927 = (0);
var state_34990__$1 = (function (){var statearr_35106 = state_34990;
(statearr_35106[(9)] = inst_34927);

(statearr_35106[(11)] = inst_34925);

(statearr_35106[(20)] = inst_34924);

(statearr_35106[(21)] = inst_34926);

return statearr_35106;
})();
var statearr_35112_37369 = state_34990__$1;
(statearr_35112_37369[(2)] = null);

(statearr_35112_37369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (41))){
var inst_34945 = (state_34990[(25)]);
var inst_34964 = (state_34990[(2)]);
var inst_34965 = cljs.core.next(inst_34945);
var inst_34924 = inst_34965;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34990__$1 = (function (){var statearr_35120 = state_34990;
(statearr_35120[(9)] = inst_34927);

(statearr_35120[(11)] = inst_34925);

(statearr_35120[(20)] = inst_34924);

(statearr_35120[(21)] = inst_34926);

(statearr_35120[(27)] = inst_34964);

return statearr_35120;
})();
var statearr_35122_37376 = state_34990__$1;
(statearr_35122_37376[(2)] = null);

(statearr_35122_37376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (43))){
var state_34990__$1 = state_34990;
var statearr_35128_37378 = state_34990__$1;
(statearr_35128_37378[(2)] = null);

(statearr_35128_37378[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (29))){
var inst_34973 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35136_37380 = state_34990__$1;
(statearr_35136_37380[(2)] = inst_34973);

(statearr_35136_37380[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (44))){
var inst_34983 = (state_34990[(2)]);
var state_34990__$1 = (function (){var statearr_35139 = state_34990;
(statearr_35139[(28)] = inst_34983);

return statearr_35139;
})();
var statearr_35142_37383 = state_34990__$1;
(statearr_35142_37383[(2)] = null);

(statearr_35142_37383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (6))){
var inst_34916 = (state_34990[(29)]);
var inst_34915 = cljs.core.deref(cs);
var inst_34916__$1 = cljs.core.keys(inst_34915);
var inst_34917 = cljs.core.count(inst_34916__$1);
var inst_34918 = cljs.core.reset_BANG_(dctr,inst_34917);
var inst_34923 = cljs.core.seq(inst_34916__$1);
var inst_34924 = inst_34923;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34990__$1 = (function (){var statearr_35146 = state_34990;
(statearr_35146[(9)] = inst_34927);

(statearr_35146[(30)] = inst_34918);

(statearr_35146[(11)] = inst_34925);

(statearr_35146[(20)] = inst_34924);

(statearr_35146[(21)] = inst_34926);

(statearr_35146[(29)] = inst_34916__$1);

return statearr_35146;
})();
var statearr_35147_37388 = state_34990__$1;
(statearr_35147_37388[(2)] = null);

(statearr_35147_37388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (28))){
var inst_34924 = (state_34990[(20)]);
var inst_34945 = (state_34990[(25)]);
var inst_34945__$1 = cljs.core.seq(inst_34924);
var state_34990__$1 = (function (){var statearr_35148 = state_34990;
(statearr_35148[(25)] = inst_34945__$1);

return statearr_35148;
})();
if(inst_34945__$1){
var statearr_35149_37389 = state_34990__$1;
(statearr_35149_37389[(1)] = (33));

} else {
var statearr_35150_37390 = state_34990__$1;
(statearr_35150_37390[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (25))){
var inst_34927 = (state_34990[(9)]);
var inst_34926 = (state_34990[(21)]);
var inst_34929 = (inst_34927 < inst_34926);
var inst_34930 = inst_34929;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34930)){
var statearr_35153_37398 = state_34990__$1;
(statearr_35153_37398[(1)] = (27));

} else {
var statearr_35154_37399 = state_34990__$1;
(statearr_35154_37399[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (34))){
var state_34990__$1 = state_34990;
var statearr_35177_37400 = state_34990__$1;
(statearr_35177_37400[(2)] = null);

(statearr_35177_37400[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (17))){
var state_34990__$1 = state_34990;
var statearr_35181_37401 = state_34990__$1;
(statearr_35181_37401[(2)] = null);

(statearr_35181_37401[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (3))){
var inst_34988 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34990__$1,inst_34988);
} else {
if((state_val_34995 === (12))){
var inst_34911 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35186_37403 = state_34990__$1;
(statearr_35186_37403[(2)] = inst_34911);

(statearr_35186_37403[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (2))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(4),ch);
} else {
if((state_val_34995 === (23))){
var state_34990__$1 = state_34990;
var statearr_35187_37405 = state_34990__$1;
(statearr_35187_37405[(2)] = null);

(statearr_35187_37405[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (35))){
var inst_34971 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35189_37407 = state_34990__$1;
(statearr_35189_37407[(2)] = inst_34971);

(statearr_35189_37407[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (19))){
var inst_34878 = (state_34990[(7)]);
var inst_34886 = cljs.core.chunk_first(inst_34878);
var inst_34887 = cljs.core.chunk_rest(inst_34878);
var inst_34888 = cljs.core.count(inst_34886);
var inst_34855 = inst_34887;
var inst_34856 = inst_34886;
var inst_34857 = inst_34888;
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35197 = state_34990;
(statearr_35197[(13)] = inst_34857);

(statearr_35197[(14)] = inst_34856);

(statearr_35197[(15)] = inst_34858);

(statearr_35197[(16)] = inst_34855);

return statearr_35197;
})();
var statearr_35199_37414 = state_34990__$1;
(statearr_35199_37414[(2)] = null);

(statearr_35199_37414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (11))){
var inst_34855 = (state_34990[(16)]);
var inst_34878 = (state_34990[(7)]);
var inst_34878__$1 = cljs.core.seq(inst_34855);
var state_34990__$1 = (function (){var statearr_35205 = state_34990;
(statearr_35205[(7)] = inst_34878__$1);

return statearr_35205;
})();
if(inst_34878__$1){
var statearr_35207_37415 = state_34990__$1;
(statearr_35207_37415[(1)] = (16));

} else {
var statearr_35213_37416 = state_34990__$1;
(statearr_35213_37416[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (9))){
var inst_34913 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35215_37418 = state_34990__$1;
(statearr_35215_37418[(2)] = inst_34913);

(statearr_35215_37418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35223 = state_34990;
(statearr_35223[(13)] = inst_34857);

(statearr_35223[(14)] = inst_34856);

(statearr_35223[(15)] = inst_34858);

(statearr_35223[(16)] = inst_34855);

return statearr_35223;
})();
var statearr_35224_37422 = state_34990__$1;
(statearr_35224_37422[(2)] = null);

(statearr_35224_37422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (14))){
var state_34990__$1 = state_34990;
var statearr_35230_37424 = state_34990__$1;
(statearr_35230_37424[(2)] = null);

(statearr_35230_37424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (45))){
var inst_34980 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35234_37425 = state_34990__$1;
(statearr_35234_37425[(2)] = inst_34980);

(statearr_35234_37425[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (26))){
var inst_34916 = (state_34990[(29)]);
var inst_34976 = (state_34990[(2)]);
var inst_34977 = cljs.core.seq(inst_34916);
var state_34990__$1 = (function (){var statearr_35239 = state_34990;
(statearr_35239[(31)] = inst_34976);

return statearr_35239;
})();
if(inst_34977){
var statearr_35241_37429 = state_34990__$1;
(statearr_35241_37429[(1)] = (42));

} else {
var statearr_35243_37430 = state_34990__$1;
(statearr_35243_37430[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (16))){
var inst_34878 = (state_34990[(7)]);
var inst_34881 = cljs.core.chunked_seq_QMARK_(inst_34878);
var state_34990__$1 = state_34990;
if(inst_34881){
var statearr_35248_37431 = state_34990__$1;
(statearr_35248_37431[(1)] = (19));

} else {
var statearr_35250_37432 = state_34990__$1;
(statearr_35250_37432[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (38))){
var inst_34968 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35255_37434 = state_34990__$1;
(statearr_35255_37434[(2)] = inst_34968);

(statearr_35255_37434[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (30))){
var state_34990__$1 = state_34990;
var statearr_35258_37436 = state_34990__$1;
(statearr_35258_37436[(2)] = null);

(statearr_35258_37436[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (10))){
var inst_34856 = (state_34990[(14)]);
var inst_34858 = (state_34990[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34990__$1 = (function (){var statearr_35264 = state_34990;
(statearr_35264[(26)] = inst_34867);

return statearr_35264;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35267_37441 = state_34990__$1;
(statearr_35267_37441[(1)] = (13));

} else {
var statearr_35270_37442 = state_34990__$1;
(statearr_35270_37442[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (18))){
var inst_34909 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35274_37444 = state_34990__$1;
(statearr_35274_37444[(2)] = inst_34909);

(statearr_35274_37444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (42))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(45),dchan);
} else {
if((state_val_34995 === (37))){
var inst_34846 = (state_34990[(10)]);
var inst_34956 = (state_34990[(23)]);
var inst_34945 = (state_34990[(25)]);
var inst_34956__$1 = cljs.core.first(inst_34945);
var inst_34958 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34956__$1,inst_34846,done);
var state_34990__$1 = (function (){var statearr_35284 = state_34990;
(statearr_35284[(23)] = inst_34956__$1);

return statearr_35284;
})();
if(cljs.core.truth_(inst_34958)){
var statearr_35287_37450 = state_34990__$1;
(statearr_35287_37450[(1)] = (39));

} else {
var statearr_35288_37453 = state_34990__$1;
(statearr_35288_37453[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34995 === (8))){
var inst_34857 = (state_34990[(13)]);
var inst_34858 = (state_34990[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34861)){
var statearr_35294_37459 = state_34990__$1;
(statearr_35294_37459[(1)] = (10));

} else {
var statearr_35297_37460 = state_34990__$1;
(statearr_35297_37460[(1)] = (11));

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
var statearr_35307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35307[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35307[(1)] = (1));

return statearr_35307;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34990){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34990);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35313){if((e35313 instanceof Object)){
var ex__34210__auto__ = e35313;
var statearr_35315_37468 = state_34990;
(statearr_35315_37468[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37471 = state_34990;
state_34990 = G__37471;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34990){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35322 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35322[(6)] = c__34274__auto___37284);

return statearr_35322;
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
var G__35338 = arguments.length;
switch (G__35338) {
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
var len__4789__auto___37512 = arguments.length;
var i__4790__auto___37516 = (0);
while(true){
if((i__4790__auto___37516 < len__4789__auto___37512)){
args__4795__auto__.push((arguments[i__4790__auto___37516]));

var G__37518 = (i__4790__auto___37516 + (1));
i__4790__auto___37516 = G__37518;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35402){
var map__35403 = p__35402;
var map__35403__$1 = (((((!((map__35403 == null))))?(((((map__35403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35403):map__35403);
var opts = map__35403__$1;
var statearr_35409_37521 = state;
(statearr_35409_37521[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35410_37524 = state;
(statearr_35410_37524[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35413_37528 = state;
(statearr_35413_37528[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35389){
var G__35390 = cljs.core.first(seq35389);
var seq35389__$1 = cljs.core.next(seq35389);
var G__35391 = cljs.core.first(seq35389__$1);
var seq35389__$2 = cljs.core.next(seq35389__$1);
var G__35392 = cljs.core.first(seq35389__$2);
var seq35389__$3 = cljs.core.next(seq35389__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35390,G__35391,G__35392,seq35389__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35454 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35454 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35455){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35455 = meta35455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35456,meta35455__$1){
var self__ = this;
var _35456__$1 = this;
return (new cljs.core.async.t_cljs$core$async35454(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35455__$1));
}));

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35456){
var self__ = this;
var _35456__$1 = this;
return self__.meta35455;
}));

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35454.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35455","meta35455",-1670899727,null)], null);
}));

(cljs.core.async.t_cljs$core$async35454.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35454");

(cljs.core.async.t_cljs$core$async35454.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35454");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35454.
 */
cljs.core.async.__GT_t_cljs$core$async35454 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35454(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35455){
return (new cljs.core.async.t_cljs$core$async35454(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35455));
});

}

return (new cljs.core.async.t_cljs$core$async35454(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35673){
var state_val_35674 = (state_35673[(1)]);
if((state_val_35674 === (7))){
var inst_35542 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35675_37584 = state_35673__$1;
(statearr_35675_37584[(2)] = inst_35542);

(statearr_35675_37584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (20))){
var inst_35555 = (state_35673[(7)]);
var state_35673__$1 = state_35673;
var statearr_35676_37586 = state_35673__$1;
(statearr_35676_37586[(2)] = inst_35555);

(statearr_35676_37586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (27))){
var state_35673__$1 = state_35673;
var statearr_35677_37588 = state_35673__$1;
(statearr_35677_37588[(2)] = null);

(statearr_35677_37588[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (1))){
var inst_35524 = (state_35673[(8)]);
var inst_35524__$1 = calc_state();
var inst_35527 = (inst_35524__$1 == null);
var inst_35528 = cljs.core.not(inst_35527);
var state_35673__$1 = (function (){var statearr_35680 = state_35673;
(statearr_35680[(8)] = inst_35524__$1);

return statearr_35680;
})();
if(inst_35528){
var statearr_35681_37599 = state_35673__$1;
(statearr_35681_37599[(1)] = (2));

} else {
var statearr_35682_37600 = state_35673__$1;
(statearr_35682_37600[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (24))){
var inst_35593 = (state_35673[(9)]);
var inst_35640 = (state_35673[(10)]);
var inst_35606 = (state_35673[(11)]);
var inst_35640__$1 = (inst_35593.cljs$core$IFn$_invoke$arity$1 ? inst_35593.cljs$core$IFn$_invoke$arity$1(inst_35606) : inst_35593.call(null,inst_35606));
var state_35673__$1 = (function (){var statearr_35683 = state_35673;
(statearr_35683[(10)] = inst_35640__$1);

return statearr_35683;
})();
if(cljs.core.truth_(inst_35640__$1)){
var statearr_35684_37603 = state_35673__$1;
(statearr_35684_37603[(1)] = (29));

} else {
var statearr_35685_37604 = state_35673__$1;
(statearr_35685_37604[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (4))){
var inst_35545 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35545)){
var statearr_35688_37609 = state_35673__$1;
(statearr_35688_37609[(1)] = (8));

} else {
var statearr_35689_37611 = state_35673__$1;
(statearr_35689_37611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (15))){
var inst_35586 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35586)){
var statearr_35690_37615 = state_35673__$1;
(statearr_35690_37615[(1)] = (19));

} else {
var statearr_35691_37616 = state_35673__$1;
(statearr_35691_37616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (21))){
var inst_35591 = (state_35673[(12)]);
var inst_35591__$1 = (state_35673[(2)]);
var inst_35593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35591__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35591__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35591__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35673__$1 = (function (){var statearr_35692 = state_35673;
(statearr_35692[(13)] = inst_35596);

(statearr_35692[(9)] = inst_35593);

(statearr_35692[(12)] = inst_35591__$1);

return statearr_35692;
})();
return cljs.core.async.ioc_alts_BANG_(state_35673__$1,(22),inst_35597);
} else {
if((state_val_35674 === (31))){
var inst_35650 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35650)){
var statearr_35693_37627 = state_35673__$1;
(statearr_35693_37627[(1)] = (32));

} else {
var statearr_35694_37630 = state_35673__$1;
(statearr_35694_37630[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (32))){
var inst_35605 = (state_35673[(14)]);
var state_35673__$1 = state_35673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35673__$1,(35),out,inst_35605);
} else {
if((state_val_35674 === (33))){
var inst_35591 = (state_35673[(12)]);
var inst_35555 = inst_35591;
var state_35673__$1 = (function (){var statearr_35697 = state_35673;
(statearr_35697[(7)] = inst_35555);

return statearr_35697;
})();
var statearr_35698_37634 = state_35673__$1;
(statearr_35698_37634[(2)] = null);

(statearr_35698_37634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (13))){
var inst_35555 = (state_35673[(7)]);
var inst_35575 = inst_35555.cljs$lang$protocol_mask$partition0$;
var inst_35576 = (inst_35575 & (64));
var inst_35577 = inst_35555.cljs$core$ISeq$;
var inst_35578 = (cljs.core.PROTOCOL_SENTINEL === inst_35577);
var inst_35579 = ((inst_35576) || (inst_35578));
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35579)){
var statearr_35701_37642 = state_35673__$1;
(statearr_35701_37642[(1)] = (16));

} else {
var statearr_35702_37643 = state_35673__$1;
(statearr_35702_37643[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (22))){
var inst_35605 = (state_35673[(14)]);
var inst_35606 = (state_35673[(11)]);
var inst_35604 = (state_35673[(2)]);
var inst_35605__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35604,(0),null);
var inst_35606__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35604,(1),null);
var inst_35611 = (inst_35605__$1 == null);
var inst_35612 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35606__$1,change);
var inst_35613 = ((inst_35611) || (inst_35612));
var state_35673__$1 = (function (){var statearr_35705 = state_35673;
(statearr_35705[(14)] = inst_35605__$1);

(statearr_35705[(11)] = inst_35606__$1);

return statearr_35705;
})();
if(cljs.core.truth_(inst_35613)){
var statearr_35707_37656 = state_35673__$1;
(statearr_35707_37656[(1)] = (23));

} else {
var statearr_35708_37657 = state_35673__$1;
(statearr_35708_37657[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (36))){
var inst_35591 = (state_35673[(12)]);
var inst_35555 = inst_35591;
var state_35673__$1 = (function (){var statearr_35710 = state_35673;
(statearr_35710[(7)] = inst_35555);

return statearr_35710;
})();
var statearr_35711_37660 = state_35673__$1;
(statearr_35711_37660[(2)] = null);

(statearr_35711_37660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (29))){
var inst_35640 = (state_35673[(10)]);
var state_35673__$1 = state_35673;
var statearr_35712_37666 = state_35673__$1;
(statearr_35712_37666[(2)] = inst_35640);

(statearr_35712_37666[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (6))){
var state_35673__$1 = state_35673;
var statearr_35713_37670 = state_35673__$1;
(statearr_35713_37670[(2)] = false);

(statearr_35713_37670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (28))){
var inst_35633 = (state_35673[(2)]);
var inst_35634 = calc_state();
var inst_35555 = inst_35634;
var state_35673__$1 = (function (){var statearr_35714 = state_35673;
(statearr_35714[(7)] = inst_35555);

(statearr_35714[(15)] = inst_35633);

return statearr_35714;
})();
var statearr_35718_37672 = state_35673__$1;
(statearr_35718_37672[(2)] = null);

(statearr_35718_37672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (25))){
var inst_35668 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35722_37679 = state_35673__$1;
(statearr_35722_37679[(2)] = inst_35668);

(statearr_35722_37679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (34))){
var inst_35666 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35725_37681 = state_35673__$1;
(statearr_35725_37681[(2)] = inst_35666);

(statearr_35725_37681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (17))){
var state_35673__$1 = state_35673;
var statearr_35727_37683 = state_35673__$1;
(statearr_35727_37683[(2)] = false);

(statearr_35727_37683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (3))){
var state_35673__$1 = state_35673;
var statearr_35728_37686 = state_35673__$1;
(statearr_35728_37686[(2)] = false);

(statearr_35728_37686[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (12))){
var inst_35670 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35673__$1,inst_35670);
} else {
if((state_val_35674 === (2))){
var inst_35524 = (state_35673[(8)]);
var inst_35533 = inst_35524.cljs$lang$protocol_mask$partition0$;
var inst_35534 = (inst_35533 & (64));
var inst_35536 = inst_35524.cljs$core$ISeq$;
var inst_35537 = (cljs.core.PROTOCOL_SENTINEL === inst_35536);
var inst_35538 = ((inst_35534) || (inst_35537));
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35538)){
var statearr_35730_37688 = state_35673__$1;
(statearr_35730_37688[(1)] = (5));

} else {
var statearr_35731_37689 = state_35673__$1;
(statearr_35731_37689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (23))){
var inst_35605 = (state_35673[(14)]);
var inst_35615 = (inst_35605 == null);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35615)){
var statearr_35732_37692 = state_35673__$1;
(statearr_35732_37692[(1)] = (26));

} else {
var statearr_35733_37693 = state_35673__$1;
(statearr_35733_37693[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (35))){
var inst_35655 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
if(cljs.core.truth_(inst_35655)){
var statearr_35734_37694 = state_35673__$1;
(statearr_35734_37694[(1)] = (36));

} else {
var statearr_35735_37695 = state_35673__$1;
(statearr_35735_37695[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (19))){
var inst_35555 = (state_35673[(7)]);
var inst_35588 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35555);
var state_35673__$1 = state_35673;
var statearr_35737_37696 = state_35673__$1;
(statearr_35737_37696[(2)] = inst_35588);

(statearr_35737_37696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (11))){
var inst_35555 = (state_35673[(7)]);
var inst_35569 = (inst_35555 == null);
var inst_35570 = cljs.core.not(inst_35569);
var state_35673__$1 = state_35673;
if(inst_35570){
var statearr_35738_37699 = state_35673__$1;
(statearr_35738_37699[(1)] = (13));

} else {
var statearr_35739_37700 = state_35673__$1;
(statearr_35739_37700[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (9))){
var inst_35524 = (state_35673[(8)]);
var state_35673__$1 = state_35673;
var statearr_35740_37701 = state_35673__$1;
(statearr_35740_37701[(2)] = inst_35524);

(statearr_35740_37701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (5))){
var state_35673__$1 = state_35673;
var statearr_35742_37702 = state_35673__$1;
(statearr_35742_37702[(2)] = true);

(statearr_35742_37702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (14))){
var state_35673__$1 = state_35673;
var statearr_35743_37707 = state_35673__$1;
(statearr_35743_37707[(2)] = false);

(statearr_35743_37707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (26))){
var inst_35606 = (state_35673[(11)]);
var inst_35629 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35606);
var state_35673__$1 = state_35673;
var statearr_35745_37708 = state_35673__$1;
(statearr_35745_37708[(2)] = inst_35629);

(statearr_35745_37708[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (16))){
var state_35673__$1 = state_35673;
var statearr_35746_37709 = state_35673__$1;
(statearr_35746_37709[(2)] = true);

(statearr_35746_37709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (38))){
var inst_35661 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35748_37713 = state_35673__$1;
(statearr_35748_37713[(2)] = inst_35661);

(statearr_35748_37713[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (30))){
var inst_35596 = (state_35673[(13)]);
var inst_35593 = (state_35673[(9)]);
var inst_35606 = (state_35673[(11)]);
var inst_35644 = cljs.core.empty_QMARK_(inst_35593);
var inst_35646 = (inst_35596.cljs$core$IFn$_invoke$arity$1 ? inst_35596.cljs$core$IFn$_invoke$arity$1(inst_35606) : inst_35596.call(null,inst_35606));
var inst_35647 = cljs.core.not(inst_35646);
var inst_35648 = ((inst_35644) && (inst_35647));
var state_35673__$1 = state_35673;
var statearr_35750_37715 = state_35673__$1;
(statearr_35750_37715[(2)] = inst_35648);

(statearr_35750_37715[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (10))){
var inst_35524 = (state_35673[(8)]);
var inst_35551 = (state_35673[(2)]);
var inst_35552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35551,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35551,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35551,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35555 = inst_35524;
var state_35673__$1 = (function (){var statearr_35754 = state_35673;
(statearr_35754[(16)] = inst_35552);

(statearr_35754[(7)] = inst_35555);

(statearr_35754[(17)] = inst_35554);

(statearr_35754[(18)] = inst_35553);

return statearr_35754;
})();
var statearr_35757_37717 = state_35673__$1;
(statearr_35757_37717[(2)] = null);

(statearr_35757_37717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (18))){
var inst_35583 = (state_35673[(2)]);
var state_35673__$1 = state_35673;
var statearr_35758_37718 = state_35673__$1;
(statearr_35758_37718[(2)] = inst_35583);

(statearr_35758_37718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (37))){
var state_35673__$1 = state_35673;
var statearr_35761_37719 = state_35673__$1;
(statearr_35761_37719[(2)] = null);

(statearr_35761_37719[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35674 === (8))){
var inst_35524 = (state_35673[(8)]);
var inst_35547 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35524);
var state_35673__$1 = state_35673;
var statearr_35764_37724 = state_35673__$1;
(statearr_35764_37724[(2)] = inst_35547);

(statearr_35764_37724[(1)] = (10));


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
var statearr_35771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35771[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35771[(1)] = (1));

return statearr_35771;
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
}catch (e35774){if((e35774 instanceof Object)){
var ex__34210__auto__ = e35774;
var statearr_35779_37731 = state_35673;
(statearr_35779_37731[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37735 = state_35673;
state_35673 = G__37735;
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
var state__34276__auto__ = (function (){var statearr_35785 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35785[(6)] = c__34274__auto___37581);

return statearr_35785;
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
var G__35821 = arguments.length;
switch (G__35821) {
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
var c__34274__auto___37797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35945){
var state_val_35946 = (state_35945[(1)]);
if((state_val_35946 === (7))){
var inst_35937 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35950_37800 = state_35945__$1;
(statearr_35950_37800[(2)] = inst_35937);

(statearr_35950_37800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (20))){
var state_35945__$1 = state_35945;
var statearr_35952_37802 = state_35945__$1;
(statearr_35952_37802[(2)] = null);

(statearr_35952_37802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (1))){
var state_35945__$1 = state_35945;
var statearr_35954_37804 = state_35945__$1;
(statearr_35954_37804[(2)] = null);

(statearr_35954_37804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (24))){
var inst_35920 = (state_35945[(7)]);
var inst_35929 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35920);
var state_35945__$1 = state_35945;
var statearr_35957_37809 = state_35945__$1;
(statearr_35957_37809[(2)] = inst_35929);

(statearr_35957_37809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (4))){
var inst_35865 = (state_35945[(8)]);
var inst_35865__$1 = (state_35945[(2)]);
var inst_35867 = (inst_35865__$1 == null);
var state_35945__$1 = (function (){var statearr_35959 = state_35945;
(statearr_35959[(8)] = inst_35865__$1);

return statearr_35959;
})();
if(cljs.core.truth_(inst_35867)){
var statearr_35960_37814 = state_35945__$1;
(statearr_35960_37814[(1)] = (5));

} else {
var statearr_35961_37815 = state_35945__$1;
(statearr_35961_37815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (15))){
var inst_35913 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35966_37816 = state_35945__$1;
(statearr_35966_37816[(2)] = inst_35913);

(statearr_35966_37816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (21))){
var inst_35934 = (state_35945[(2)]);
var state_35945__$1 = (function (){var statearr_35968 = state_35945;
(statearr_35968[(9)] = inst_35934);

return statearr_35968;
})();
var statearr_35969_37818 = state_35945__$1;
(statearr_35969_37818[(2)] = null);

(statearr_35969_37818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (13))){
var inst_35893 = (state_35945[(10)]);
var inst_35895 = cljs.core.chunked_seq_QMARK_(inst_35893);
var state_35945__$1 = state_35945;
if(inst_35895){
var statearr_35972_37822 = state_35945__$1;
(statearr_35972_37822[(1)] = (16));

} else {
var statearr_35974_37824 = state_35945__$1;
(statearr_35974_37824[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (22))){
var inst_35926 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
if(cljs.core.truth_(inst_35926)){
var statearr_35975_37825 = state_35945__$1;
(statearr_35975_37825[(1)] = (23));

} else {
var statearr_35976_37826 = state_35945__$1;
(statearr_35976_37826[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (6))){
var inst_35920 = (state_35945[(7)]);
var inst_35865 = (state_35945[(8)]);
var inst_35922 = (state_35945[(11)]);
var inst_35920__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35865) : topic_fn.call(null,inst_35865));
var inst_35921 = cljs.core.deref(mults);
var inst_35922__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35921,inst_35920__$1);
var state_35945__$1 = (function (){var statearr_35977 = state_35945;
(statearr_35977[(7)] = inst_35920__$1);

(statearr_35977[(11)] = inst_35922__$1);

return statearr_35977;
})();
if(cljs.core.truth_(inst_35922__$1)){
var statearr_35978_37833 = state_35945__$1;
(statearr_35978_37833[(1)] = (19));

} else {
var statearr_35979_37835 = state_35945__$1;
(statearr_35979_37835[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (25))){
var inst_35931 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35982_37837 = state_35945__$1;
(statearr_35982_37837[(2)] = inst_35931);

(statearr_35982_37837[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (17))){
var inst_35893 = (state_35945[(10)]);
var inst_35904 = cljs.core.first(inst_35893);
var inst_35905 = cljs.core.async.muxch_STAR_(inst_35904);
var inst_35906 = cljs.core.async.close_BANG_(inst_35905);
var inst_35907 = cljs.core.next(inst_35893);
var inst_35879 = inst_35907;
var inst_35880 = null;
var inst_35881 = (0);
var inst_35882 = (0);
var state_35945__$1 = (function (){var statearr_35984 = state_35945;
(statearr_35984[(12)] = inst_35879);

(statearr_35984[(13)] = inst_35881);

(statearr_35984[(14)] = inst_35882);

(statearr_35984[(15)] = inst_35906);

(statearr_35984[(16)] = inst_35880);

return statearr_35984;
})();
var statearr_35985_37842 = state_35945__$1;
(statearr_35985_37842[(2)] = null);

(statearr_35985_37842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (3))){
var inst_35939 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35945__$1,inst_35939);
} else {
if((state_val_35946 === (12))){
var inst_35915 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35988_37848 = state_35945__$1;
(statearr_35988_37848[(2)] = inst_35915);

(statearr_35988_37848[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (2))){
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35945__$1,(4),ch);
} else {
if((state_val_35946 === (23))){
var state_35945__$1 = state_35945;
var statearr_35990_37851 = state_35945__$1;
(statearr_35990_37851[(2)] = null);

(statearr_35990_37851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (19))){
var inst_35865 = (state_35945[(8)]);
var inst_35922 = (state_35945[(11)]);
var inst_35924 = cljs.core.async.muxch_STAR_(inst_35922);
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35945__$1,(22),inst_35924,inst_35865);
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
var statearr_35995_37857 = state_35945__$1;
(statearr_35995_37857[(1)] = (13));

} else {
var statearr_35996_37858 = state_35945__$1;
(statearr_35996_37858[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (9))){
var inst_35918 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35997_37862 = state_35945__$1;
(statearr_35997_37862[(2)] = inst_35918);

(statearr_35997_37862[(1)] = (7));


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
var state_35945__$1 = (function (){var statearr_36002 = state_35945;
(statearr_36002[(12)] = inst_35879);

(statearr_36002[(13)] = inst_35881);

(statearr_36002[(14)] = inst_35882);

(statearr_36002[(16)] = inst_35880);

return statearr_36002;
})();
var statearr_36005_37867 = state_35945__$1;
(statearr_36005_37867[(2)] = null);

(statearr_36005_37867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (14))){
var state_35945__$1 = state_35945;
var statearr_36010_37869 = state_35945__$1;
(statearr_36010_37869[(2)] = null);

(statearr_36010_37869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (16))){
var inst_35893 = (state_35945[(10)]);
var inst_35897 = cljs.core.chunk_first(inst_35893);
var inst_35899 = cljs.core.chunk_rest(inst_35893);
var inst_35900 = cljs.core.count(inst_35897);
var inst_35879 = inst_35899;
var inst_35880 = inst_35897;
var inst_35881 = inst_35900;
var inst_35882 = (0);
var state_35945__$1 = (function (){var statearr_36014 = state_35945;
(statearr_36014[(12)] = inst_35879);

(statearr_36014[(13)] = inst_35881);

(statearr_36014[(14)] = inst_35882);

(statearr_36014[(16)] = inst_35880);

return statearr_36014;
})();
var statearr_36016_37877 = state_35945__$1;
(statearr_36016_37877[(2)] = null);

(statearr_36016_37877[(1)] = (8));


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
var statearr_36023_37885 = state_35945__$1;
(statearr_36023_37885[(2)] = null);

(statearr_36023_37885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (18))){
var inst_35910 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_36027_37887 = state_35945__$1;
(statearr_36027_37887[(2)] = inst_35910);

(statearr_36027_37887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (8))){
var inst_35881 = (state_35945[(13)]);
var inst_35882 = (state_35945[(14)]);
var inst_35884 = (inst_35882 < inst_35881);
var inst_35885 = inst_35884;
var state_35945__$1 = state_35945;
if(cljs.core.truth_(inst_35885)){
var statearr_36029_37888 = state_35945__$1;
(statearr_36029_37888[(1)] = (10));

} else {
var statearr_36030_37890 = state_35945__$1;
(statearr_36030_37890[(1)] = (11));

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
var statearr_36036_37894 = state_35945;
(statearr_36036_37894[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36035;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37897 = state_35945;
state_35945 = G__37897;
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
var state__34276__auto__ = (function (){var statearr_36039 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36039[(6)] = c__34274__auto___37797);

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
var c__34274__auto___37921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36103){
var state_val_36104 = (state_36103[(1)]);
if((state_val_36104 === (7))){
var state_36103__$1 = state_36103;
var statearr_36111_37924 = state_36103__$1;
(statearr_36111_37924[(2)] = null);

(statearr_36111_37924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (1))){
var state_36103__$1 = state_36103;
var statearr_36113_37930 = state_36103__$1;
(statearr_36113_37930[(2)] = null);

(statearr_36113_37930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (4))){
var inst_36058 = (state_36103[(7)]);
var inst_36064 = (inst_36058 < cnt);
var state_36103__$1 = state_36103;
if(cljs.core.truth_(inst_36064)){
var statearr_36114_37933 = state_36103__$1;
(statearr_36114_37933[(1)] = (6));

} else {
var statearr_36115_37934 = state_36103__$1;
(statearr_36115_37934[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (15))){
var inst_36098 = (state_36103[(2)]);
var state_36103__$1 = state_36103;
var statearr_36117_37937 = state_36103__$1;
(statearr_36117_37937[(2)] = inst_36098);

(statearr_36117_37937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (13))){
var inst_36091 = cljs.core.async.close_BANG_(out);
var state_36103__$1 = state_36103;
var statearr_36120_37940 = state_36103__$1;
(statearr_36120_37940[(2)] = inst_36091);

(statearr_36120_37940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (6))){
var state_36103__$1 = state_36103;
var statearr_36123_37941 = state_36103__$1;
(statearr_36123_37941[(2)] = null);

(statearr_36123_37941[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (3))){
var inst_36100 = (state_36103[(2)]);
var state_36103__$1 = state_36103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36103__$1,inst_36100);
} else {
if((state_val_36104 === (12))){
var inst_36088 = (state_36103[(8)]);
var inst_36088__$1 = (state_36103[(2)]);
var inst_36089 = cljs.core.some(cljs.core.nil_QMARK_,inst_36088__$1);
var state_36103__$1 = (function (){var statearr_36124 = state_36103;
(statearr_36124[(8)] = inst_36088__$1);

return statearr_36124;
})();
if(cljs.core.truth_(inst_36089)){
var statearr_36125_37945 = state_36103__$1;
(statearr_36125_37945[(1)] = (13));

} else {
var statearr_36126_37948 = state_36103__$1;
(statearr_36126_37948[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (2))){
var inst_36056 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36058 = (0);
var state_36103__$1 = (function (){var statearr_36127 = state_36103;
(statearr_36127[(7)] = inst_36058);

(statearr_36127[(9)] = inst_36056);

return statearr_36127;
})();
var statearr_36128_37949 = state_36103__$1;
(statearr_36128_37949[(2)] = null);

(statearr_36128_37949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (11))){
var inst_36058 = (state_36103[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36103,(10),Object,null,(9));
var inst_36074 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36058) : chs__$1.call(null,inst_36058));
var inst_36075 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36058) : done.call(null,inst_36058));
var inst_36076 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36074,inst_36075);
var state_36103__$1 = state_36103;
var statearr_36129_37951 = state_36103__$1;
(statearr_36129_37951[(2)] = inst_36076);


cljs.core.async.impl.ioc_helpers.process_exception(state_36103__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (9))){
var inst_36058 = (state_36103[(7)]);
var inst_36078 = (state_36103[(2)]);
var inst_36079 = (inst_36058 + (1));
var inst_36058__$1 = inst_36079;
var state_36103__$1 = (function (){var statearr_36134 = state_36103;
(statearr_36134[(7)] = inst_36058__$1);

(statearr_36134[(10)] = inst_36078);

return statearr_36134;
})();
var statearr_36135_37956 = state_36103__$1;
(statearr_36135_37956[(2)] = null);

(statearr_36135_37956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (5))){
var inst_36086 = (state_36103[(2)]);
var state_36103__$1 = (function (){var statearr_36139 = state_36103;
(statearr_36139[(11)] = inst_36086);

return statearr_36139;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36103__$1,(12),dchan);
} else {
if((state_val_36104 === (14))){
var inst_36088 = (state_36103[(8)]);
var inst_36093 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36088);
var state_36103__$1 = state_36103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36103__$1,(16),out,inst_36093);
} else {
if((state_val_36104 === (16))){
var inst_36095 = (state_36103[(2)]);
var state_36103__$1 = (function (){var statearr_36140 = state_36103;
(statearr_36140[(12)] = inst_36095);

return statearr_36140;
})();
var statearr_36141_37960 = state_36103__$1;
(statearr_36141_37960[(2)] = null);

(statearr_36141_37960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (10))){
var inst_36069 = (state_36103[(2)]);
var inst_36070 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36103__$1 = (function (){var statearr_36143 = state_36103;
(statearr_36143[(13)] = inst_36069);

return statearr_36143;
})();
var statearr_36144_37965 = state_36103__$1;
(statearr_36144_37965[(2)] = inst_36070);


cljs.core.async.impl.ioc_helpers.process_exception(state_36103__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36104 === (8))){
var inst_36084 = (state_36103[(2)]);
var state_36103__$1 = state_36103;
var statearr_36147_37966 = state_36103__$1;
(statearr_36147_37966[(2)] = inst_36084);

(statearr_36147_37966[(1)] = (5));


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
var statearr_36150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36150[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36150[(1)] = (1));

return statearr_36150;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36103){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36103);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36151){if((e36151 instanceof Object)){
var ex__34210__auto__ = e36151;
var statearr_36153_37968 = state_36103;
(statearr_36153_37968[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36151;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37970 = state_36103;
state_36103 = G__37970;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36155 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36155[(6)] = c__34274__auto___37921);

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
var G__36181 = arguments.length;
switch (G__36181) {
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
var c__34274__auto___37976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36220){
var state_val_36221 = (state_36220[(1)]);
if((state_val_36221 === (7))){
var inst_36194 = (state_36220[(7)]);
var inst_36195 = (state_36220[(8)]);
var inst_36194__$1 = (state_36220[(2)]);
var inst_36195__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36194__$1,(0),null);
var inst_36197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36194__$1,(1),null);
var inst_36198 = (inst_36195__$1 == null);
var state_36220__$1 = (function (){var statearr_36222 = state_36220;
(statearr_36222[(7)] = inst_36194__$1);

(statearr_36222[(8)] = inst_36195__$1);

(statearr_36222[(9)] = inst_36197);

return statearr_36222;
})();
if(cljs.core.truth_(inst_36198)){
var statearr_36225_37980 = state_36220__$1;
(statearr_36225_37980[(1)] = (8));

} else {
var statearr_36226_37981 = state_36220__$1;
(statearr_36226_37981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (1))){
var inst_36184 = cljs.core.vec(chs);
var inst_36185 = inst_36184;
var state_36220__$1 = (function (){var statearr_36227 = state_36220;
(statearr_36227[(10)] = inst_36185);

return statearr_36227;
})();
var statearr_36228_37982 = state_36220__$1;
(statearr_36228_37982[(2)] = null);

(statearr_36228_37982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (4))){
var inst_36185 = (state_36220[(10)]);
var state_36220__$1 = state_36220;
return cljs.core.async.ioc_alts_BANG_(state_36220__$1,(7),inst_36185);
} else {
if((state_val_36221 === (6))){
var inst_36213 = (state_36220[(2)]);
var state_36220__$1 = state_36220;
var statearr_36231_37987 = state_36220__$1;
(statearr_36231_37987[(2)] = inst_36213);

(statearr_36231_37987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (3))){
var inst_36215 = (state_36220[(2)]);
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36220__$1,inst_36215);
} else {
if((state_val_36221 === (2))){
var inst_36185 = (state_36220[(10)]);
var inst_36187 = cljs.core.count(inst_36185);
var inst_36188 = (inst_36187 > (0));
var state_36220__$1 = state_36220;
if(cljs.core.truth_(inst_36188)){
var statearr_36235_37988 = state_36220__$1;
(statearr_36235_37988[(1)] = (4));

} else {
var statearr_36236_37989 = state_36220__$1;
(statearr_36236_37989[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (11))){
var inst_36185 = (state_36220[(10)]);
var inst_36205 = (state_36220[(2)]);
var tmp36233 = inst_36185;
var inst_36185__$1 = tmp36233;
var state_36220__$1 = (function (){var statearr_36238 = state_36220;
(statearr_36238[(10)] = inst_36185__$1);

(statearr_36238[(11)] = inst_36205);

return statearr_36238;
})();
var statearr_36243_37990 = state_36220__$1;
(statearr_36243_37990[(2)] = null);

(statearr_36243_37990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (9))){
var inst_36195 = (state_36220[(8)]);
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36220__$1,(11),out,inst_36195);
} else {
if((state_val_36221 === (5))){
var inst_36211 = cljs.core.async.close_BANG_(out);
var state_36220__$1 = state_36220;
var statearr_36249_37991 = state_36220__$1;
(statearr_36249_37991[(2)] = inst_36211);

(statearr_36249_37991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (10))){
var inst_36209 = (state_36220[(2)]);
var state_36220__$1 = state_36220;
var statearr_36251_37993 = state_36220__$1;
(statearr_36251_37993[(2)] = inst_36209);

(statearr_36251_37993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (8))){
var inst_36185 = (state_36220[(10)]);
var inst_36194 = (state_36220[(7)]);
var inst_36195 = (state_36220[(8)]);
var inst_36197 = (state_36220[(9)]);
var inst_36200 = (function (){var cs = inst_36185;
var vec__36190 = inst_36194;
var v = inst_36195;
var c = inst_36197;
return (function (p1__36156_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36156_SHARP_);
});
})();
var inst_36201 = cljs.core.filterv(inst_36200,inst_36185);
var inst_36185__$1 = inst_36201;
var state_36220__$1 = (function (){var statearr_36254 = state_36220;
(statearr_36254[(10)] = inst_36185__$1);

return statearr_36254;
})();
var statearr_36255_37998 = state_36220__$1;
(statearr_36255_37998[(2)] = null);

(statearr_36255_37998[(1)] = (2));


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
var statearr_36257 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36257[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36257[(1)] = (1));

return statearr_36257;
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
}catch (e36259){if((e36259 instanceof Object)){
var ex__34210__auto__ = e36259;
var statearr_36260_37999 = state_36220;
(statearr_36260_37999[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36259;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38000 = state_36220;
state_36220 = G__38000;
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
var state__34276__auto__ = (function (){var statearr_36261 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36261[(6)] = c__34274__auto___37976);

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
var G__36269 = arguments.length;
switch (G__36269) {
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
var c__34274__auto___38006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36301){
var state_val_36302 = (state_36301[(1)]);
if((state_val_36302 === (7))){
var inst_36283 = (state_36301[(7)]);
var inst_36283__$1 = (state_36301[(2)]);
var inst_36284 = (inst_36283__$1 == null);
var inst_36285 = cljs.core.not(inst_36284);
var state_36301__$1 = (function (){var statearr_36305 = state_36301;
(statearr_36305[(7)] = inst_36283__$1);

return statearr_36305;
})();
if(inst_36285){
var statearr_36307_38008 = state_36301__$1;
(statearr_36307_38008[(1)] = (8));

} else {
var statearr_36308_38010 = state_36301__$1;
(statearr_36308_38010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (1))){
var inst_36278 = (0);
var state_36301__$1 = (function (){var statearr_36310 = state_36301;
(statearr_36310[(8)] = inst_36278);

return statearr_36310;
})();
var statearr_36311_38012 = state_36301__$1;
(statearr_36311_38012[(2)] = null);

(statearr_36311_38012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (4))){
var state_36301__$1 = state_36301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36301__$1,(7),ch);
} else {
if((state_val_36302 === (6))){
var inst_36296 = (state_36301[(2)]);
var state_36301__$1 = state_36301;
var statearr_36313_38013 = state_36301__$1;
(statearr_36313_38013[(2)] = inst_36296);

(statearr_36313_38013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (3))){
var inst_36298 = (state_36301[(2)]);
var inst_36299 = cljs.core.async.close_BANG_(out);
var state_36301__$1 = (function (){var statearr_36315 = state_36301;
(statearr_36315[(9)] = inst_36298);

return statearr_36315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36301__$1,inst_36299);
} else {
if((state_val_36302 === (2))){
var inst_36278 = (state_36301[(8)]);
var inst_36280 = (inst_36278 < n);
var state_36301__$1 = state_36301;
if(cljs.core.truth_(inst_36280)){
var statearr_36317_38014 = state_36301__$1;
(statearr_36317_38014[(1)] = (4));

} else {
var statearr_36318_38015 = state_36301__$1;
(statearr_36318_38015[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (11))){
var inst_36278 = (state_36301[(8)]);
var inst_36288 = (state_36301[(2)]);
var inst_36289 = (inst_36278 + (1));
var inst_36278__$1 = inst_36289;
var state_36301__$1 = (function (){var statearr_36319 = state_36301;
(statearr_36319[(8)] = inst_36278__$1);

(statearr_36319[(10)] = inst_36288);

return statearr_36319;
})();
var statearr_36320_38019 = state_36301__$1;
(statearr_36320_38019[(2)] = null);

(statearr_36320_38019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (9))){
var state_36301__$1 = state_36301;
var statearr_36321_38020 = state_36301__$1;
(statearr_36321_38020[(2)] = null);

(statearr_36321_38020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (5))){
var state_36301__$1 = state_36301;
var statearr_36324_38021 = state_36301__$1;
(statearr_36324_38021[(2)] = null);

(statearr_36324_38021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (10))){
var inst_36293 = (state_36301[(2)]);
var state_36301__$1 = state_36301;
var statearr_36325_38023 = state_36301__$1;
(statearr_36325_38023[(2)] = inst_36293);

(statearr_36325_38023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (8))){
var inst_36283 = (state_36301[(7)]);
var state_36301__$1 = state_36301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36301__$1,(11),out,inst_36283);
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
var statearr_36330_38028 = state_36301;
(statearr_36330_38028[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36329;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38029 = state_36301;
state_36301 = G__38029;
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
(statearr_36338[(6)] = c__34274__auto___38006);

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
cljs.core.async.t_cljs$core$async36342 = (function (f,ch,meta36343){
this.f = f;
this.ch = ch;
this.meta36343 = meta36343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36344,meta36343__$1){
var self__ = this;
var _36344__$1 = this;
return (new cljs.core.async.t_cljs$core$async36342(self__.f,self__.ch,meta36343__$1));
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
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36349 = (function (f,ch,meta36343,_,fn1,meta36350){
this.f = f;
this.ch = ch;
this.meta36343 = meta36343;
this._ = _;
this.fn1 = fn1;
this.meta36350 = meta36350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36351,meta36350__$1){
var self__ = this;
var _36351__$1 = this;
return (new cljs.core.async.t_cljs$core$async36349(self__.f,self__.ch,self__.meta36343,self__._,self__.fn1,meta36350__$1));
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
var G__36355 = (((p1__36339_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36339_SHARP_) : self__.f.call(null,p1__36339_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36355) : f1.call(null,G__36355));
});
}));

(cljs.core.async.t_cljs$core$async36349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36343","meta36343",2142020441,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36342","cljs.core.async/t_cljs$core$async36342",443481801,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36350","meta36350",620264329,null)], null);
}));

(cljs.core.async.t_cljs$core$async36349.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36349");

(cljs.core.async.t_cljs$core$async36349.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36349");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36349.
 */
cljs.core.async.__GT_t_cljs$core$async36349 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36349(f__$1,ch__$1,meta36343__$1,___$2,fn1__$1,meta36350){
return (new cljs.core.async.t_cljs$core$async36349(f__$1,ch__$1,meta36343__$1,___$2,fn1__$1,meta36350));
});

}

return (new cljs.core.async.t_cljs$core$async36349(self__.f,self__.ch,self__.meta36343,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36343","meta36343",2142020441,null)], null);
}));

(cljs.core.async.t_cljs$core$async36342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36342");

(cljs.core.async.t_cljs$core$async36342.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36342.
 */
cljs.core.async.__GT_t_cljs$core$async36342 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36342(f__$1,ch__$1,meta36343){
return (new cljs.core.async.t_cljs$core$async36342(f__$1,ch__$1,meta36343));
});

}

return (new cljs.core.async.t_cljs$core$async36342(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36372 = (function (f,ch,meta36373){
this.f = f;
this.ch = ch;
this.meta36373 = meta36373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36374,meta36373__$1){
var self__ = this;
var _36374__$1 = this;
return (new cljs.core.async.t_cljs$core$async36372(self__.f,self__.ch,meta36373__$1));
}));

(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36374){
var self__ = this;
var _36374__$1 = this;
return self__.meta36373;
}));

(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36372.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36373","meta36373",-1580334979,null)], null);
}));

(cljs.core.async.t_cljs$core$async36372.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36372");

(cljs.core.async.t_cljs$core$async36372.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36372");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36372.
 */
cljs.core.async.__GT_t_cljs$core$async36372 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36372(f__$1,ch__$1,meta36373){
return (new cljs.core.async.t_cljs$core$async36372(f__$1,ch__$1,meta36373));
});

}

return (new cljs.core.async.t_cljs$core$async36372(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36386 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36386 = (function (p,ch,meta36387){
this.p = p;
this.ch = ch;
this.meta36387 = meta36387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36388,meta36387__$1){
var self__ = this;
var _36388__$1 = this;
return (new cljs.core.async.t_cljs$core$async36386(self__.p,self__.ch,meta36387__$1));
}));

(cljs.core.async.t_cljs$core$async36386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36388){
var self__ = this;
var _36388__$1 = this;
return self__.meta36387;
}));

(cljs.core.async.t_cljs$core$async36386.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36386.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36386.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36386.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36387","meta36387",-127451529,null)], null);
}));

(cljs.core.async.t_cljs$core$async36386.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36386");

(cljs.core.async.t_cljs$core$async36386.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36386");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36386.
 */
cljs.core.async.__GT_t_cljs$core$async36386 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36386(p__$1,ch__$1,meta36387){
return (new cljs.core.async.t_cljs$core$async36386(p__$1,ch__$1,meta36387));
});

}

return (new cljs.core.async.t_cljs$core$async36386(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36417 = arguments.length;
switch (G__36417) {
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
var c__34274__auto___38055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36448){
var state_val_36449 = (state_36448[(1)]);
if((state_val_36449 === (7))){
var inst_36442 = (state_36448[(2)]);
var state_36448__$1 = state_36448;
var statearr_36452_38056 = state_36448__$1;
(statearr_36452_38056[(2)] = inst_36442);

(statearr_36452_38056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36449 === (1))){
var state_36448__$1 = state_36448;
var statearr_36453_38057 = state_36448__$1;
(statearr_36453_38057[(2)] = null);

(statearr_36453_38057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36449 === (4))){
var inst_36423 = (state_36448[(7)]);
var inst_36423__$1 = (state_36448[(2)]);
var inst_36424 = (inst_36423__$1 == null);
var state_36448__$1 = (function (){var statearr_36455 = state_36448;
(statearr_36455[(7)] = inst_36423__$1);

return statearr_36455;
})();
if(cljs.core.truth_(inst_36424)){
var statearr_36456_38060 = state_36448__$1;
(statearr_36456_38060[(1)] = (5));

} else {
var statearr_36457_38061 = state_36448__$1;
(statearr_36457_38061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36449 === (6))){
var inst_36423 = (state_36448[(7)]);
var inst_36428 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36423) : p.call(null,inst_36423));
var state_36448__$1 = state_36448;
if(cljs.core.truth_(inst_36428)){
var statearr_36458_38063 = state_36448__$1;
(statearr_36458_38063[(1)] = (8));

} else {
var statearr_36459_38064 = state_36448__$1;
(statearr_36459_38064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36449 === (3))){
var inst_36444 = (state_36448[(2)]);
var state_36448__$1 = state_36448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36448__$1,inst_36444);
} else {
if((state_val_36449 === (2))){
var state_36448__$1 = state_36448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36448__$1,(4),ch);
} else {
if((state_val_36449 === (11))){
var inst_36436 = (state_36448[(2)]);
var state_36448__$1 = state_36448;
var statearr_36461_38066 = state_36448__$1;
(statearr_36461_38066[(2)] = inst_36436);

(statearr_36461_38066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36449 === (9))){
var state_36448__$1 = state_36448;
var statearr_36465_38068 = state_36448__$1;
(statearr_36465_38068[(2)] = null);

(statearr_36465_38068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36449 === (5))){
var inst_36426 = cljs.core.async.close_BANG_(out);
var state_36448__$1 = state_36448;
var statearr_36470_38070 = state_36448__$1;
(statearr_36470_38070[(2)] = inst_36426);

(statearr_36470_38070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36449 === (10))){
var inst_36439 = (state_36448[(2)]);
var state_36448__$1 = (function (){var statearr_36471 = state_36448;
(statearr_36471[(8)] = inst_36439);

return statearr_36471;
})();
var statearr_36473_38071 = state_36448__$1;
(statearr_36473_38071[(2)] = null);

(statearr_36473_38071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36449 === (8))){
var inst_36423 = (state_36448[(7)]);
var state_36448__$1 = state_36448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36448__$1,(11),out,inst_36423);
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
var statearr_36475 = [null,null,null,null,null,null,null,null,null];
(statearr_36475[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36475[(1)] = (1));

return statearr_36475;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36448){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36448);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36477){if((e36477 instanceof Object)){
var ex__34210__auto__ = e36477;
var statearr_36479_38075 = state_36448;
(statearr_36479_38075[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36477;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38076 = state_36448;
state_36448 = G__38076;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36481 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36481[(6)] = c__34274__auto___38055);

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
var G__36485 = arguments.length;
switch (G__36485) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36552){
var state_val_36553 = (state_36552[(1)]);
if((state_val_36553 === (7))){
var inst_36547 = (state_36552[(2)]);
var state_36552__$1 = state_36552;
var statearr_36556_38081 = state_36552__$1;
(statearr_36556_38081[(2)] = inst_36547);

(statearr_36556_38081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (20))){
var inst_36517 = (state_36552[(7)]);
var inst_36528 = (state_36552[(2)]);
var inst_36529 = cljs.core.next(inst_36517);
var inst_36502 = inst_36529;
var inst_36504 = null;
var inst_36505 = (0);
var inst_36506 = (0);
var state_36552__$1 = (function (){var statearr_36557 = state_36552;
(statearr_36557[(8)] = inst_36502);

(statearr_36557[(9)] = inst_36505);

(statearr_36557[(10)] = inst_36504);

(statearr_36557[(11)] = inst_36506);

(statearr_36557[(12)] = inst_36528);

return statearr_36557;
})();
var statearr_36559_38085 = state_36552__$1;
(statearr_36559_38085[(2)] = null);

(statearr_36559_38085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (1))){
var state_36552__$1 = state_36552;
var statearr_36560_38086 = state_36552__$1;
(statearr_36560_38086[(2)] = null);

(statearr_36560_38086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (4))){
var inst_36491 = (state_36552[(13)]);
var inst_36491__$1 = (state_36552[(2)]);
var inst_36492 = (inst_36491__$1 == null);
var state_36552__$1 = (function (){var statearr_36562 = state_36552;
(statearr_36562[(13)] = inst_36491__$1);

return statearr_36562;
})();
if(cljs.core.truth_(inst_36492)){
var statearr_36563_38087 = state_36552__$1;
(statearr_36563_38087[(1)] = (5));

} else {
var statearr_36564_38088 = state_36552__$1;
(statearr_36564_38088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (15))){
var state_36552__$1 = state_36552;
var statearr_36569_38090 = state_36552__$1;
(statearr_36569_38090[(2)] = null);

(statearr_36569_38090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (21))){
var state_36552__$1 = state_36552;
var statearr_36570_38092 = state_36552__$1;
(statearr_36570_38092[(2)] = null);

(statearr_36570_38092[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (13))){
var inst_36502 = (state_36552[(8)]);
var inst_36505 = (state_36552[(9)]);
var inst_36504 = (state_36552[(10)]);
var inst_36506 = (state_36552[(11)]);
var inst_36513 = (state_36552[(2)]);
var inst_36514 = (inst_36506 + (1));
var tmp36565 = inst_36502;
var tmp36566 = inst_36505;
var tmp36567 = inst_36504;
var inst_36502__$1 = tmp36565;
var inst_36504__$1 = tmp36567;
var inst_36505__$1 = tmp36566;
var inst_36506__$1 = inst_36514;
var state_36552__$1 = (function (){var statearr_36572 = state_36552;
(statearr_36572[(8)] = inst_36502__$1);

(statearr_36572[(9)] = inst_36505__$1);

(statearr_36572[(10)] = inst_36504__$1);

(statearr_36572[(11)] = inst_36506__$1);

(statearr_36572[(14)] = inst_36513);

return statearr_36572;
})();
var statearr_36573_38094 = state_36552__$1;
(statearr_36573_38094[(2)] = null);

(statearr_36573_38094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (22))){
var state_36552__$1 = state_36552;
var statearr_36575_38096 = state_36552__$1;
(statearr_36575_38096[(2)] = null);

(statearr_36575_38096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (6))){
var inst_36491 = (state_36552[(13)]);
var inst_36500 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36491) : f.call(null,inst_36491));
var inst_36501 = cljs.core.seq(inst_36500);
var inst_36502 = inst_36501;
var inst_36504 = null;
var inst_36505 = (0);
var inst_36506 = (0);
var state_36552__$1 = (function (){var statearr_36576 = state_36552;
(statearr_36576[(8)] = inst_36502);

(statearr_36576[(9)] = inst_36505);

(statearr_36576[(10)] = inst_36504);

(statearr_36576[(11)] = inst_36506);

return statearr_36576;
})();
var statearr_36578_38099 = state_36552__$1;
(statearr_36578_38099[(2)] = null);

(statearr_36578_38099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (17))){
var inst_36517 = (state_36552[(7)]);
var inst_36521 = cljs.core.chunk_first(inst_36517);
var inst_36522 = cljs.core.chunk_rest(inst_36517);
var inst_36523 = cljs.core.count(inst_36521);
var inst_36502 = inst_36522;
var inst_36504 = inst_36521;
var inst_36505 = inst_36523;
var inst_36506 = (0);
var state_36552__$1 = (function (){var statearr_36579 = state_36552;
(statearr_36579[(8)] = inst_36502);

(statearr_36579[(9)] = inst_36505);

(statearr_36579[(10)] = inst_36504);

(statearr_36579[(11)] = inst_36506);

return statearr_36579;
})();
var statearr_36580_38102 = state_36552__$1;
(statearr_36580_38102[(2)] = null);

(statearr_36580_38102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (3))){
var inst_36549 = (state_36552[(2)]);
var state_36552__$1 = state_36552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36552__$1,inst_36549);
} else {
if((state_val_36553 === (12))){
var inst_36537 = (state_36552[(2)]);
var state_36552__$1 = state_36552;
var statearr_36582_38104 = state_36552__$1;
(statearr_36582_38104[(2)] = inst_36537);

(statearr_36582_38104[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (2))){
var state_36552__$1 = state_36552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36552__$1,(4),in$);
} else {
if((state_val_36553 === (23))){
var inst_36545 = (state_36552[(2)]);
var state_36552__$1 = state_36552;
var statearr_36584_38105 = state_36552__$1;
(statearr_36584_38105[(2)] = inst_36545);

(statearr_36584_38105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (19))){
var inst_36532 = (state_36552[(2)]);
var state_36552__$1 = state_36552;
var statearr_36585_38107 = state_36552__$1;
(statearr_36585_38107[(2)] = inst_36532);

(statearr_36585_38107[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (11))){
var inst_36502 = (state_36552[(8)]);
var inst_36517 = (state_36552[(7)]);
var inst_36517__$1 = cljs.core.seq(inst_36502);
var state_36552__$1 = (function (){var statearr_36587 = state_36552;
(statearr_36587[(7)] = inst_36517__$1);

return statearr_36587;
})();
if(inst_36517__$1){
var statearr_36588_38110 = state_36552__$1;
(statearr_36588_38110[(1)] = (14));

} else {
var statearr_36589_38111 = state_36552__$1;
(statearr_36589_38111[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (9))){
var inst_36539 = (state_36552[(2)]);
var inst_36540 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36552__$1 = (function (){var statearr_36590 = state_36552;
(statearr_36590[(15)] = inst_36539);

return statearr_36590;
})();
if(cljs.core.truth_(inst_36540)){
var statearr_36592_38112 = state_36552__$1;
(statearr_36592_38112[(1)] = (21));

} else {
var statearr_36593_38113 = state_36552__$1;
(statearr_36593_38113[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (5))){
var inst_36494 = cljs.core.async.close_BANG_(out);
var state_36552__$1 = state_36552;
var statearr_36594_38115 = state_36552__$1;
(statearr_36594_38115[(2)] = inst_36494);

(statearr_36594_38115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (14))){
var inst_36517 = (state_36552[(7)]);
var inst_36519 = cljs.core.chunked_seq_QMARK_(inst_36517);
var state_36552__$1 = state_36552;
if(inst_36519){
var statearr_36596_38118 = state_36552__$1;
(statearr_36596_38118[(1)] = (17));

} else {
var statearr_36597_38119 = state_36552__$1;
(statearr_36597_38119[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (16))){
var inst_36535 = (state_36552[(2)]);
var state_36552__$1 = state_36552;
var statearr_36598_38120 = state_36552__$1;
(statearr_36598_38120[(2)] = inst_36535);

(statearr_36598_38120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (10))){
var inst_36504 = (state_36552[(10)]);
var inst_36506 = (state_36552[(11)]);
var inst_36511 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36504,inst_36506);
var state_36552__$1 = state_36552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36552__$1,(13),out,inst_36511);
} else {
if((state_val_36553 === (18))){
var inst_36517 = (state_36552[(7)]);
var inst_36526 = cljs.core.first(inst_36517);
var state_36552__$1 = state_36552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36552__$1,(20),out,inst_36526);
} else {
if((state_val_36553 === (8))){
var inst_36505 = (state_36552[(9)]);
var inst_36506 = (state_36552[(11)]);
var inst_36508 = (inst_36506 < inst_36505);
var inst_36509 = inst_36508;
var state_36552__$1 = state_36552;
if(cljs.core.truth_(inst_36509)){
var statearr_36600_38122 = state_36552__$1;
(statearr_36600_38122[(1)] = (10));

} else {
var statearr_36602_38124 = state_36552__$1;
(statearr_36602_38124[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36552){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36552);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36605){if((e36605 instanceof Object)){
var ex__34210__auto__ = e36605;
var statearr_36606_38126 = state_36552;
(statearr_36606_38126[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36605;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38127 = state_36552;
state_36552 = G__38127;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36552){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36552);
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
var c__34274__auto___38138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36645){
var state_val_36646 = (state_36645[(1)]);
if((state_val_36646 === (7))){
var inst_36640 = (state_36645[(2)]);
var state_36645__$1 = state_36645;
var statearr_36648_38140 = state_36645__$1;
(statearr_36648_38140[(2)] = inst_36640);

(statearr_36648_38140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (1))){
var inst_36622 = null;
var state_36645__$1 = (function (){var statearr_36650 = state_36645;
(statearr_36650[(7)] = inst_36622);

return statearr_36650;
})();
var statearr_36651_38142 = state_36645__$1;
(statearr_36651_38142[(2)] = null);

(statearr_36651_38142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (4))){
var inst_36625 = (state_36645[(8)]);
var inst_36625__$1 = (state_36645[(2)]);
var inst_36626 = (inst_36625__$1 == null);
var inst_36627 = cljs.core.not(inst_36626);
var state_36645__$1 = (function (){var statearr_36652 = state_36645;
(statearr_36652[(8)] = inst_36625__$1);

return statearr_36652;
})();
if(inst_36627){
var statearr_36653_38143 = state_36645__$1;
(statearr_36653_38143[(1)] = (5));

} else {
var statearr_36655_38145 = state_36645__$1;
(statearr_36655_38145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (6))){
var state_36645__$1 = state_36645;
var statearr_36656_38146 = state_36645__$1;
(statearr_36656_38146[(2)] = null);

(statearr_36656_38146[(1)] = (7));


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
var inst_36625 = (state_36645[(8)]);
var inst_36634 = (state_36645[(2)]);
var inst_36622 = inst_36625;
var state_36645__$1 = (function (){var statearr_36659 = state_36645;
(statearr_36659[(7)] = inst_36622);

(statearr_36659[(10)] = inst_36634);

return statearr_36659;
})();
var statearr_36660_38149 = state_36645__$1;
(statearr_36660_38149[(2)] = null);

(statearr_36660_38149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (9))){
var inst_36625 = (state_36645[(8)]);
var state_36645__$1 = state_36645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36645__$1,(11),out,inst_36625);
} else {
if((state_val_36646 === (5))){
var inst_36622 = (state_36645[(7)]);
var inst_36625 = (state_36645[(8)]);
var inst_36629 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36625,inst_36622);
var state_36645__$1 = state_36645;
if(inst_36629){
var statearr_36663_38151 = state_36645__$1;
(statearr_36663_38151[(1)] = (8));

} else {
var statearr_36664_38152 = state_36645__$1;
(statearr_36664_38152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (10))){
var inst_36637 = (state_36645[(2)]);
var state_36645__$1 = state_36645;
var statearr_36666_38155 = state_36645__$1;
(statearr_36666_38155[(2)] = inst_36637);

(statearr_36666_38155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (8))){
var inst_36622 = (state_36645[(7)]);
var tmp36662 = inst_36622;
var inst_36622__$1 = tmp36662;
var state_36645__$1 = (function (){var statearr_36667 = state_36645;
(statearr_36667[(7)] = inst_36622__$1);

return statearr_36667;
})();
var statearr_36668_38156 = state_36645__$1;
(statearr_36668_38156[(2)] = null);

(statearr_36668_38156[(1)] = (2));


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
var statearr_36670 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36670[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36670[(1)] = (1));

return statearr_36670;
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
var statearr_36672_38157 = state_36645;
(statearr_36672_38157[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38159 = state_36645;
state_36645 = G__38159;
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
(statearr_36674[(6)] = c__34274__auto___38138);

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
var c__34274__auto___38163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36719){
var state_val_36720 = (state_36719[(1)]);
if((state_val_36720 === (7))){
var inst_36714 = (state_36719[(2)]);
var state_36719__$1 = state_36719;
var statearr_36722_38164 = state_36719__$1;
(statearr_36722_38164[(2)] = inst_36714);

(statearr_36722_38164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (1))){
var inst_36681 = (new Array(n));
var inst_36682 = inst_36681;
var inst_36683 = (0);
var state_36719__$1 = (function (){var statearr_36723 = state_36719;
(statearr_36723[(7)] = inst_36683);

(statearr_36723[(8)] = inst_36682);

return statearr_36723;
})();
var statearr_36724_38165 = state_36719__$1;
(statearr_36724_38165[(2)] = null);

(statearr_36724_38165[(1)] = (2));


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
var statearr_36727_38167 = state_36719__$1;
(statearr_36727_38167[(1)] = (5));

} else {
var statearr_36728_38169 = state_36719__$1;
(statearr_36728_38169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (15))){
var inst_36708 = (state_36719[(2)]);
var state_36719__$1 = state_36719;
var statearr_36730_38170 = state_36719__$1;
(statearr_36730_38170[(2)] = inst_36708);

(statearr_36730_38170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (13))){
var state_36719__$1 = state_36719;
var statearr_36731_38175 = state_36719__$1;
(statearr_36731_38175[(2)] = null);

(statearr_36731_38175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (6))){
var inst_36683 = (state_36719[(7)]);
var inst_36704 = (inst_36683 > (0));
var state_36719__$1 = state_36719;
if(cljs.core.truth_(inst_36704)){
var statearr_36732_38176 = state_36719__$1;
(statearr_36732_38176[(1)] = (12));

} else {
var statearr_36734_38177 = state_36719__$1;
(statearr_36734_38177[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (3))){
var inst_36716 = (state_36719[(2)]);
var state_36719__$1 = state_36719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36719__$1,inst_36716);
} else {
if((state_val_36720 === (12))){
var inst_36682 = (state_36719[(8)]);
var inst_36706 = cljs.core.vec(inst_36682);
var state_36719__$1 = state_36719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36719__$1,(15),out,inst_36706);
} else {
if((state_val_36720 === (2))){
var state_36719__$1 = state_36719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36719__$1,(4),ch);
} else {
if((state_val_36720 === (11))){
var inst_36698 = (state_36719[(2)]);
var inst_36699 = (new Array(n));
var inst_36682 = inst_36699;
var inst_36683 = (0);
var state_36719__$1 = (function (){var statearr_36736 = state_36719;
(statearr_36736[(10)] = inst_36698);

(statearr_36736[(7)] = inst_36683);

(statearr_36736[(8)] = inst_36682);

return statearr_36736;
})();
var statearr_36738_38181 = state_36719__$1;
(statearr_36738_38181[(2)] = null);

(statearr_36738_38181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (9))){
var inst_36682 = (state_36719[(8)]);
var inst_36696 = cljs.core.vec(inst_36682);
var state_36719__$1 = state_36719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36719__$1,(11),out,inst_36696);
} else {
if((state_val_36720 === (5))){
var inst_36691 = (state_36719[(11)]);
var inst_36686 = (state_36719[(9)]);
var inst_36683 = (state_36719[(7)]);
var inst_36682 = (state_36719[(8)]);
var inst_36690 = (inst_36682[inst_36683] = inst_36686);
var inst_36691__$1 = (inst_36683 + (1));
var inst_36692 = (inst_36691__$1 < n);
var state_36719__$1 = (function (){var statearr_36740 = state_36719;
(statearr_36740[(11)] = inst_36691__$1);

(statearr_36740[(12)] = inst_36690);

return statearr_36740;
})();
if(cljs.core.truth_(inst_36692)){
var statearr_36741_38185 = state_36719__$1;
(statearr_36741_38185[(1)] = (8));

} else {
var statearr_36742_38187 = state_36719__$1;
(statearr_36742_38187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (14))){
var inst_36711 = (state_36719[(2)]);
var inst_36712 = cljs.core.async.close_BANG_(out);
var state_36719__$1 = (function (){var statearr_36744 = state_36719;
(statearr_36744[(13)] = inst_36711);

return statearr_36744;
})();
var statearr_36746_38189 = state_36719__$1;
(statearr_36746_38189[(2)] = inst_36712);

(statearr_36746_38189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (10))){
var inst_36702 = (state_36719[(2)]);
var state_36719__$1 = state_36719;
var statearr_36747_38191 = state_36719__$1;
(statearr_36747_38191[(2)] = inst_36702);

(statearr_36747_38191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (8))){
var inst_36691 = (state_36719[(11)]);
var inst_36682 = (state_36719[(8)]);
var tmp36743 = inst_36682;
var inst_36682__$1 = tmp36743;
var inst_36683 = inst_36691;
var state_36719__$1 = (function (){var statearr_36749 = state_36719;
(statearr_36749[(7)] = inst_36683);

(statearr_36749[(8)] = inst_36682__$1);

return statearr_36749;
})();
var statearr_36750_38192 = state_36719__$1;
(statearr_36750_38192[(2)] = null);

(statearr_36750_38192[(1)] = (2));


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
var statearr_36752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36752[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36752[(1)] = (1));

return statearr_36752;
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
}catch (e36760){if((e36760 instanceof Object)){
var ex__34210__auto__ = e36760;
var statearr_36761_38195 = state_36719;
(statearr_36761_38195[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38197 = state_36719;
state_36719 = G__38197;
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
var state__34276__auto__ = (function (){var statearr_36764 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36764[(6)] = c__34274__auto___38163);

return statearr_36764;
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
var G__36768 = arguments.length;
switch (G__36768) {
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
var c__34274__auto___38200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36813){
var state_val_36814 = (state_36813[(1)]);
if((state_val_36814 === (7))){
var inst_36809 = (state_36813[(2)]);
var state_36813__$1 = state_36813;
var statearr_36816_38202 = state_36813__$1;
(statearr_36816_38202[(2)] = inst_36809);

(statearr_36816_38202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (1))){
var inst_36771 = [];
var inst_36772 = inst_36771;
var inst_36773 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36813__$1 = (function (){var statearr_36817 = state_36813;
(statearr_36817[(7)] = inst_36772);

(statearr_36817[(8)] = inst_36773);

return statearr_36817;
})();
var statearr_36819_38204 = state_36813__$1;
(statearr_36819_38204[(2)] = null);

(statearr_36819_38204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (4))){
var inst_36776 = (state_36813[(9)]);
var inst_36776__$1 = (state_36813[(2)]);
var inst_36777 = (inst_36776__$1 == null);
var inst_36778 = cljs.core.not(inst_36777);
var state_36813__$1 = (function (){var statearr_36820 = state_36813;
(statearr_36820[(9)] = inst_36776__$1);

return statearr_36820;
})();
if(inst_36778){
var statearr_36821_38206 = state_36813__$1;
(statearr_36821_38206[(1)] = (5));

} else {
var statearr_36822_38207 = state_36813__$1;
(statearr_36822_38207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (15))){
var inst_36803 = (state_36813[(2)]);
var state_36813__$1 = state_36813;
var statearr_36824_38210 = state_36813__$1;
(statearr_36824_38210[(2)] = inst_36803);

(statearr_36824_38210[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (13))){
var state_36813__$1 = state_36813;
var statearr_36825_38211 = state_36813__$1;
(statearr_36825_38211[(2)] = null);

(statearr_36825_38211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (6))){
var inst_36772 = (state_36813[(7)]);
var inst_36798 = inst_36772.length;
var inst_36799 = (inst_36798 > (0));
var state_36813__$1 = state_36813;
if(cljs.core.truth_(inst_36799)){
var statearr_36827_38212 = state_36813__$1;
(statearr_36827_38212[(1)] = (12));

} else {
var statearr_36828_38213 = state_36813__$1;
(statearr_36828_38213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (3))){
var inst_36811 = (state_36813[(2)]);
var state_36813__$1 = state_36813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36813__$1,inst_36811);
} else {
if((state_val_36814 === (12))){
var inst_36772 = (state_36813[(7)]);
var inst_36801 = cljs.core.vec(inst_36772);
var state_36813__$1 = state_36813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36813__$1,(15),out,inst_36801);
} else {
if((state_val_36814 === (2))){
var state_36813__$1 = state_36813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36813__$1,(4),ch);
} else {
if((state_val_36814 === (11))){
var inst_36780 = (state_36813[(10)]);
var inst_36776 = (state_36813[(9)]);
var inst_36790 = (state_36813[(2)]);
var inst_36791 = [];
var inst_36793 = inst_36791.push(inst_36776);
var inst_36772 = inst_36791;
var inst_36773 = inst_36780;
var state_36813__$1 = (function (){var statearr_36830 = state_36813;
(statearr_36830[(7)] = inst_36772);

(statearr_36830[(8)] = inst_36773);

(statearr_36830[(11)] = inst_36790);

(statearr_36830[(12)] = inst_36793);

return statearr_36830;
})();
var statearr_36832_38221 = state_36813__$1;
(statearr_36832_38221[(2)] = null);

(statearr_36832_38221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (9))){
var inst_36772 = (state_36813[(7)]);
var inst_36788 = cljs.core.vec(inst_36772);
var state_36813__$1 = state_36813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36813__$1,(11),out,inst_36788);
} else {
if((state_val_36814 === (5))){
var inst_36773 = (state_36813[(8)]);
var inst_36780 = (state_36813[(10)]);
var inst_36776 = (state_36813[(9)]);
var inst_36780__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36776) : f.call(null,inst_36776));
var inst_36781 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36780__$1,inst_36773);
var inst_36782 = cljs.core.keyword_identical_QMARK_(inst_36773,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36783 = ((inst_36781) || (inst_36782));
var state_36813__$1 = (function (){var statearr_36834 = state_36813;
(statearr_36834[(10)] = inst_36780__$1);

return statearr_36834;
})();
if(cljs.core.truth_(inst_36783)){
var statearr_36835_38223 = state_36813__$1;
(statearr_36835_38223[(1)] = (8));

} else {
var statearr_36836_38224 = state_36813__$1;
(statearr_36836_38224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (14))){
var inst_36806 = (state_36813[(2)]);
var inst_36807 = cljs.core.async.close_BANG_(out);
var state_36813__$1 = (function (){var statearr_36838 = state_36813;
(statearr_36838[(13)] = inst_36806);

return statearr_36838;
})();
var statearr_36840_38227 = state_36813__$1;
(statearr_36840_38227[(2)] = inst_36807);

(statearr_36840_38227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (10))){
var inst_36796 = (state_36813[(2)]);
var state_36813__$1 = state_36813;
var statearr_36841_38228 = state_36813__$1;
(statearr_36841_38228[(2)] = inst_36796);

(statearr_36841_38228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36814 === (8))){
var inst_36772 = (state_36813[(7)]);
var inst_36780 = (state_36813[(10)]);
var inst_36776 = (state_36813[(9)]);
var inst_36785 = inst_36772.push(inst_36776);
var tmp36837 = inst_36772;
var inst_36772__$1 = tmp36837;
var inst_36773 = inst_36780;
var state_36813__$1 = (function (){var statearr_36843 = state_36813;
(statearr_36843[(7)] = inst_36772__$1);

(statearr_36843[(8)] = inst_36773);

(statearr_36843[(14)] = inst_36785);

return statearr_36843;
})();
var statearr_36844_38230 = state_36813__$1;
(statearr_36844_38230[(2)] = null);

(statearr_36844_38230[(1)] = (2));


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
var statearr_36846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36846[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36846[(1)] = (1));

return statearr_36846;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36813){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36813);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36847){if((e36847 instanceof Object)){
var ex__34210__auto__ = e36847;
var statearr_36848_38233 = state_36813;
(statearr_36848_38233[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36847;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38235 = state_36813;
state_36813 = G__38235;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36850 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36850[(6)] = c__34274__auto___38200);

return statearr_36850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
