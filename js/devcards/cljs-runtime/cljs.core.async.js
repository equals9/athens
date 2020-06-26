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
var val_36853 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36853) : fn1.call(null,val_36853));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36853) : fn1.call(null,val_36853));
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
var n__4666__auto___36858 = n;
var x_36859 = (0);
while(true){
if((x_36859 < n__4666__auto___36858)){
(a[x_36859] = x_36859);

var G__36861 = (x_36859 + (1));
x_36859 = G__36861;
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
var G__36869 = (i + (1));
i = G__36869;
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
var len__4789__auto___36871 = arguments.length;
var i__4790__auto___36872 = (0);
while(true){
if((i__4790__auto___36872 < len__4789__auto___36871)){
args__4795__auto__.push((arguments[i__4790__auto___36872]));

var G__36873 = (i__4790__auto___36872 + (1));
i__4790__auto___36872 = G__36873;
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
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34369){
var G__34370 = cljs.core.first(seq34369);
var seq34369__$1 = cljs.core.next(seq34369);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34370,seq34369__$1);
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
var c__34274__auto___36878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36880 = state_34423__$1;
(statearr_34425_36880[(2)] = inst_34419);

(statearr_34425_36880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36881 = state_34423__$1;
(statearr_34426_36881[(2)] = null);

(statearr_34426_36881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (4))){
var inst_34390 = (state_34423[(7)]);
var inst_34390__$1 = (state_34423[(2)]);
var inst_34400 = (inst_34390__$1 == null);
var state_34423__$1 = (function (){var statearr_34427 = state_34423;
(statearr_34427[(7)] = inst_34390__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34400)){
var statearr_34428_36883 = state_34423__$1;
(statearr_34428_36883[(1)] = (5));

} else {
var statearr_34429_36884 = state_34423__$1;
(statearr_34429_36884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36885 = state_34423__$1;
(statearr_34430_36885[(2)] = null);

(statearr_34430_36885[(1)] = (14));


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
var statearr_34431_36887 = state_34423__$1;
(statearr_34431_36887[(2)] = null);

(statearr_34431_36887[(1)] = (2));


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
var statearr_34432_36889 = state_34423__$1;
(statearr_34432_36889[(1)] = (12));

} else {
var statearr_34433_36890 = state_34423__$1;
(statearr_34433_36890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34434_36891 = state_34423__$1;
(statearr_34434_36891[(2)] = null);

(statearr_34434_36891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36893 = state_34423__$1;
(statearr_34435_36893[(1)] = (8));

} else {
var statearr_34436_36894 = state_34423__$1;
(statearr_34436_36894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34417 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_36895 = state_34423__$1;
(statearr_34437_36895[(2)] = inst_34417);

(statearr_34437_36895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34409 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34438_36896 = state_34423__$1;
(statearr_34438_36896[(2)] = inst_34409);

(statearr_34438_36896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34403 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34439_36898 = state_34423__$1;
(statearr_34439_36898[(2)] = inst_34403);

(statearr_34439_36898[(1)] = (10));


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
var statearr_34444 = [null,null,null,null,null,null,null,null];
(statearr_34444[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34444[(1)] = (1));

return statearr_34444;
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
}catch (e34445){if((e34445 instanceof Object)){
var ex__34210__auto__ = e34445;
var statearr_34446_36900 = state_34423;
(statearr_34446_36900[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36901 = state_34423;
state_34423 = G__36901;
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
(statearr_34447[(6)] = c__34274__auto___36878);

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
var c__34274__auto___36904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var state_34457__$1 = (function (){var statearr_34461 = state_34457;
(statearr_34461[(7)] = inst_34454);

return statearr_34461;
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
var statearr_34462 = [null,null,null,null,null,null,null,null];
(statearr_34462[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34462[(1)] = (1));

return statearr_34462;
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
var statearr_34464_36907 = state_34457;
(statearr_34464_36907[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36908 = state_34457;
state_34457 = G__36908;
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
var state__34276__auto__ = (function (){var statearr_34466 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34466[(6)] = c__34274__auto___36904);

return statearr_34466;
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
var n__4666__auto___36911 = n;
var __36912 = (0);
while(true){
if((__36912 < n__4666__auto___36911)){
var G__34478_36913 = type;
var G__34478_36914__$1 = (((G__34478_36913 instanceof cljs.core.Keyword))?G__34478_36913.fqn:null);
switch (G__34478_36914__$1) {
case "compute":
var c__34274__auto___36916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36912,c__34274__auto___36916,G__34478_36913,G__34478_36914__$1,n__4666__auto___36911,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36912,c__34274__auto___36916,G__34478_36913,G__34478_36914__$1,n__4666__auto___36911,jobs,results,process,async){
return (function (state_34491){
var state_val_34492 = (state_34491[(1)]);
if((state_val_34492 === (1))){
var state_34491__$1 = state_34491;
var statearr_34493_36918 = state_34491__$1;
(statearr_34493_36918[(2)] = null);

(statearr_34493_36918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (2))){
var state_34491__$1 = state_34491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34491__$1,(4),jobs);
} else {
if((state_val_34492 === (3))){
var inst_34489 = (state_34491[(2)]);
var state_34491__$1 = state_34491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34491__$1,inst_34489);
} else {
if((state_val_34492 === (4))){
var inst_34481 = (state_34491[(2)]);
var inst_34482 = process(inst_34481);
var state_34491__$1 = state_34491;
if(cljs.core.truth_(inst_34482)){
var statearr_34495_36920 = state_34491__$1;
(statearr_34495_36920[(1)] = (5));

} else {
var statearr_34496_36921 = state_34491__$1;
(statearr_34496_36921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (5))){
var state_34491__$1 = state_34491;
var statearr_34497_36922 = state_34491__$1;
(statearr_34497_36922[(2)] = null);

(statearr_34497_36922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (6))){
var state_34491__$1 = state_34491;
var statearr_34498_36923 = state_34491__$1;
(statearr_34498_36923[(2)] = null);

(statearr_34498_36923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (7))){
var inst_34487 = (state_34491[(2)]);
var state_34491__$1 = state_34491;
var statearr_34499_36925 = state_34491__$1;
(statearr_34499_36925[(2)] = inst_34487);

(statearr_34499_36925[(1)] = (3));


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
});})(__36912,c__34274__auto___36916,G__34478_36913,G__34478_36914__$1,n__4666__auto___36911,jobs,results,process,async))
;
return ((function (__36912,switch__34206__auto__,c__34274__auto___36916,G__34478_36913,G__34478_36914__$1,n__4666__auto___36911,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34500 = [null,null,null,null,null,null,null];
(statearr_34500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34500[(1)] = (1));

return statearr_34500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34491){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34491);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34501){if((e34501 instanceof Object)){
var ex__34210__auto__ = e34501;
var statearr_34503_36927 = state_34491;
(statearr_34503_36927[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36928 = state_34491;
state_34491 = G__36928;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36912,switch__34206__auto__,c__34274__auto___36916,G__34478_36913,G__34478_36914__$1,n__4666__auto___36911,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34507 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34507[(6)] = c__34274__auto___36916);

return statearr_34507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36912,c__34274__auto___36916,G__34478_36913,G__34478_36914__$1,n__4666__auto___36911,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36912,c__34274__auto___36930,G__34478_36913,G__34478_36914__$1,n__4666__auto___36911,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36912,c__34274__auto___36930,G__34478_36913,G__34478_36914__$1,n__4666__auto___36911,jobs,results,process,async){
return (function (state_34523){
var state_val_34524 = (state_34523[(1)]);
if((state_val_34524 === (1))){
var state_34523__$1 = state_34523;
var statearr_34525_36932 = state_34523__$1;
(statearr_34525_36932[(2)] = null);

(statearr_34525_36932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (2))){
var state_34523__$1 = state_34523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34523__$1,(4),jobs);
} else {
if((state_val_34524 === (3))){
var inst_34521 = (state_34523[(2)]);
var state_34523__$1 = state_34523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34523__$1,inst_34521);
} else {
if((state_val_34524 === (4))){
var inst_34513 = (state_34523[(2)]);
var inst_34514 = async(inst_34513);
var state_34523__$1 = state_34523;
if(cljs.core.truth_(inst_34514)){
var statearr_34526_36934 = state_34523__$1;
(statearr_34526_36934[(1)] = (5));

} else {
var statearr_34527_36935 = state_34523__$1;
(statearr_34527_36935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (5))){
var state_34523__$1 = state_34523;
var statearr_34528_36936 = state_34523__$1;
(statearr_34528_36936[(2)] = null);

(statearr_34528_36936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (6))){
var state_34523__$1 = state_34523;
var statearr_34529_36937 = state_34523__$1;
(statearr_34529_36937[(2)] = null);

(statearr_34529_36937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (7))){
var inst_34519 = (state_34523[(2)]);
var state_34523__$1 = state_34523;
var statearr_34530_36939 = state_34523__$1;
(statearr_34530_36939[(2)] = inst_34519);

(statearr_34530_36939[(1)] = (3));


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
});})(__36912,c__34274__auto___36930,G__34478_36913,G__34478_36914__$1,n__4666__auto___36911,jobs,results,process,async))
;
return ((function (__36912,switch__34206__auto__,c__34274__auto___36930,G__34478_36913,G__34478_36914__$1,n__4666__auto___36911,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34531 = [null,null,null,null,null,null,null];
(statearr_34531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34531[(1)] = (1));

return statearr_34531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34523){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34523);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34535){if((e34535 instanceof Object)){
var ex__34210__auto__ = e34535;
var statearr_34536_36941 = state_34523;
(statearr_34536_36941[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36942 = state_34523;
state_34523 = G__36942;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34523){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36912,switch__34206__auto__,c__34274__auto___36930,G__34478_36913,G__34478_36914__$1,n__4666__auto___36911,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34537 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34537[(6)] = c__34274__auto___36930);

return statearr_34537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36912,c__34274__auto___36930,G__34478_36913,G__34478_36914__$1,n__4666__auto___36911,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34478_36914__$1)].join('')));

}

var G__36944 = (__36912 + (1));
__36912 = G__36944;
continue;
} else {
}
break;
}

var c__34274__auto___36945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34555 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34561_36947 = state_34559__$1;
(statearr_34561_36947[(2)] = inst_34555);

(statearr_34561_36947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (1))){
var state_34559__$1 = state_34559;
var statearr_34562_36948 = state_34559__$1;
(statearr_34562_36948[(2)] = null);

(statearr_34562_36948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (4))){
var inst_34540 = (state_34559[(7)]);
var inst_34540__$1 = (state_34559[(2)]);
var inst_34541 = (inst_34540__$1 == null);
var state_34559__$1 = (function (){var statearr_34563 = state_34559;
(statearr_34563[(7)] = inst_34540__$1);

return statearr_34563;
})();
if(cljs.core.truth_(inst_34541)){
var statearr_34564_36950 = state_34559__$1;
(statearr_34564_36950[(1)] = (5));

} else {
var statearr_34565_36951 = state_34559__$1;
(statearr_34565_36951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (6))){
var inst_34540 = (state_34559[(7)]);
var inst_34545 = (state_34559[(8)]);
var inst_34545__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34547 = [inst_34540,inst_34545__$1];
var inst_34548 = (new cljs.core.PersistentVector(null,2,(5),inst_34546,inst_34547,null));
var state_34559__$1 = (function (){var statearr_34566 = state_34559;
(statearr_34566[(8)] = inst_34545__$1);

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
var statearr_34568_36954 = state_34559__$1;
(statearr_34568_36954[(2)] = null);

(statearr_34568_36954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34543 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_36955 = state_34559__$1;
(statearr_34569_36955[(2)] = inst_34543);

(statearr_34569_36955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (8))){
var inst_34545 = (state_34559[(8)]);
var inst_34550 = (state_34559[(2)]);
var state_34559__$1 = (function (){var statearr_34570 = state_34559;
(statearr_34570[(10)] = inst_34550);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34559__$1,(9),results,inst_34545);
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
var statearr_34573_36958 = state_34559;
(statearr_34573_36958[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36959 = state_34559;
state_34559 = G__36959;
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
(statearr_34574[(6)] = c__34274__auto___36945);

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
var statearr_34614_36961 = state_34612__$1;
(statearr_34614_36961[(2)] = inst_34608);

(statearr_34614_36961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36962 = state_34612__$1;
(statearr_34615_36962[(2)] = null);

(statearr_34615_36962[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36963 = state_34612__$1;
(statearr_34616_36963[(2)] = null);

(statearr_34616_36963[(1)] = (2));


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
var statearr_34618_36964 = state_34612__$1;
(statearr_34618_36964[(1)] = (5));

} else {
var statearr_34619_36965 = state_34612__$1;
(statearr_34619_36965[(1)] = (6));

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
var statearr_34620_36973 = state_34612__$1;
(statearr_34620_36973[(2)] = inst_34603);

(statearr_34620_36973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36974 = state_34612__$1;
(statearr_34622_36974[(2)] = null);

(statearr_34622_36974[(1)] = (2));


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
var statearr_34623_36975 = state_34612__$1;
(statearr_34623_36975[(1)] = (19));

} else {
var statearr_34624_36977 = state_34612__$1;
(statearr_34624_36977[(1)] = (20));

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
var statearr_34625_36978 = state_34612__$1;
(statearr_34625_36978[(2)] = null);

(statearr_34625_36978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36979 = state_34612__$1;
(statearr_34627_36979[(2)] = null);

(statearr_34627_36979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36981 = state_34612__$1;
(statearr_34628_36981[(2)] = null);

(statearr_34628_36981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36985 = state_34612__$1;
(statearr_34629_36985[(1)] = (8));

} else {
var statearr_34630_36986 = state_34612__$1;
(statearr_34630_36986[(1)] = (9));

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
var statearr_34632_36987 = state_34612__$1;
(statearr_34632_36987[(1)] = (15));

} else {
var statearr_34633_36988 = state_34612__$1;
(statearr_34633_36988[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36989 = state_34612__$1;
(statearr_34634_36989[(2)] = false);

(statearr_34634_36989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36990 = state_34612__$1;
(statearr_34635_36990[(2)] = inst_34584);

(statearr_34635_36990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36992 = state_34612__$1;
(statearr_34636_36992[(2)] = inst_34595);

(statearr_34636_36992[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36994 = state_34612__$1;
(statearr_34637_36994[(2)] = inst_34581);

(statearr_34637_36994[(1)] = (10));


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
var statearr_34640_36999 = state_34612;
(statearr_34640_36999[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37001 = state_34612;
state_34612 = G__37001;
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
var G__34651 = arguments.length;
switch (G__34651) {
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
var G__34658 = arguments.length;
switch (G__34658) {
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
var c__34274__auto___37012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34684){
var state_val_34685 = (state_34684[(1)]);
if((state_val_34685 === (7))){
var inst_34680 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34687_37016 = state_34684__$1;
(statearr_34687_37016[(2)] = inst_34680);

(statearr_34687_37016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (1))){
var state_34684__$1 = state_34684;
var statearr_34688_37017 = state_34684__$1;
(statearr_34688_37017[(2)] = null);

(statearr_34688_37017[(1)] = (2));


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
var statearr_34691_37023 = state_34684__$1;
(statearr_34691_37023[(1)] = (5));

} else {
var statearr_34692_37024 = state_34684__$1;
(statearr_34692_37024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (13))){
var state_34684__$1 = state_34684;
var statearr_34693_37027 = state_34684__$1;
(statearr_34693_37027[(2)] = null);

(statearr_34693_37027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (6))){
var inst_34661 = (state_34684[(7)]);
var inst_34667 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34661) : p.call(null,inst_34661));
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34667)){
var statearr_34694_37030 = state_34684__$1;
(statearr_34694_37030[(1)] = (9));

} else {
var statearr_34696_37031 = state_34684__$1;
(statearr_34696_37031[(1)] = (10));

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
var statearr_34698_37033 = state_34684__$1;
(statearr_34698_37033[(2)] = null);

(statearr_34698_37033[(1)] = (2));


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
var statearr_34702_37042 = state_34684__$1;
(statearr_34702_37042[(2)] = tc);

(statearr_34702_37042[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (5))){
var inst_34664 = cljs.core.async.close_BANG_(tc);
var inst_34665 = cljs.core.async.close_BANG_(fc);
var state_34684__$1 = (function (){var statearr_34703 = state_34684;
(statearr_34703[(8)] = inst_34664);

return statearr_34703;
})();
var statearr_34704_37047 = state_34684__$1;
(statearr_34704_37047[(2)] = inst_34665);

(statearr_34704_37047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (14))){
var inst_34678 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34705_37048 = state_34684__$1;
(statearr_34705_37048[(2)] = inst_34678);

(statearr_34705_37048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (10))){
var state_34684__$1 = state_34684;
var statearr_34706_37051 = state_34684__$1;
(statearr_34706_37051[(2)] = fc);

(statearr_34706_37051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (8))){
var inst_34673 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34673)){
var statearr_34707_37054 = state_34684__$1;
(statearr_34707_37054[(1)] = (12));

} else {
var statearr_34708_37055 = state_34684__$1;
(statearr_34708_37055[(1)] = (13));

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
var statearr_34712_37063 = state_34684;
(statearr_34712_37063[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37066 = state_34684;
state_34684 = G__37066;
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
(statearr_34713[(6)] = c__34274__auto___37012);

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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34740){
var state_val_34741 = (state_34740[(1)]);
if((state_val_34741 === (7))){
var inst_34736 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34742_37074 = state_34740__$1;
(statearr_34742_37074[(2)] = inst_34736);

(statearr_34742_37074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (1))){
var inst_34717 = init;
var state_34740__$1 = (function (){var statearr_34743 = state_34740;
(statearr_34743[(7)] = inst_34717);

return statearr_34743;
})();
var statearr_34744_37081 = state_34740__$1;
(statearr_34744_37081[(2)] = null);

(statearr_34744_37081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (4))){
var inst_34720 = (state_34740[(8)]);
var inst_34720__$1 = (state_34740[(2)]);
var inst_34721 = (inst_34720__$1 == null);
var state_34740__$1 = (function (){var statearr_34745 = state_34740;
(statearr_34745[(8)] = inst_34720__$1);

return statearr_34745;
})();
if(cljs.core.truth_(inst_34721)){
var statearr_34746_37082 = state_34740__$1;
(statearr_34746_37082[(1)] = (5));

} else {
var statearr_34750_37083 = state_34740__$1;
(statearr_34750_37083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (6))){
var inst_34727 = (state_34740[(9)]);
var inst_34717 = (state_34740[(7)]);
var inst_34720 = (state_34740[(8)]);
var inst_34727__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34717,inst_34720) : f.call(null,inst_34717,inst_34720));
var inst_34728 = cljs.core.reduced_QMARK_(inst_34727__$1);
var state_34740__$1 = (function (){var statearr_34751 = state_34740;
(statearr_34751[(9)] = inst_34727__$1);

return statearr_34751;
})();
if(inst_34728){
var statearr_34752_37088 = state_34740__$1;
(statearr_34752_37088[(1)] = (8));

} else {
var statearr_34753_37089 = state_34740__$1;
(statearr_34753_37089[(1)] = (9));

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
var inst_34717 = inst_34727;
var state_34740__$1 = (function (){var statearr_34754 = state_34740;
(statearr_34754[(7)] = inst_34717);

return statearr_34754;
})();
var statearr_34755_37091 = state_34740__$1;
(statearr_34755_37091[(2)] = null);

(statearr_34755_37091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (5))){
var inst_34717 = (state_34740[(7)]);
var state_34740__$1 = state_34740;
var statearr_34756_37092 = state_34740__$1;
(statearr_34756_37092[(2)] = inst_34717);

(statearr_34756_37092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (10))){
var inst_34734 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34757_37096 = state_34740__$1;
(statearr_34757_37096[(2)] = inst_34734);

(statearr_34757_37096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (8))){
var inst_34727 = (state_34740[(9)]);
var inst_34730 = cljs.core.deref(inst_34727);
var state_34740__$1 = state_34740;
var statearr_34758_37102 = state_34740__$1;
(statearr_34758_37102[(2)] = inst_34730);

(statearr_34758_37102[(1)] = (10));


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
var statearr_34761_37105 = state_34740;
(statearr_34761_37105[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37110 = state_34740;
state_34740 = G__37110;
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
var statearr_34772_37116 = state_34768;
(statearr_34772_37116[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37120 = state_34768;
state_34768 = G__37120;
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
var G__34778 = arguments.length;
switch (G__34778) {
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
var statearr_34814_37131 = state_34807__$1;
(statearr_34814_37131[(2)] = inst_34789);

(statearr_34814_37131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (1))){
var inst_34783 = cljs.core.seq(coll);
var inst_34784 = inst_34783;
var state_34807__$1 = (function (){var statearr_34816 = state_34807;
(statearr_34816[(7)] = inst_34784);

return statearr_34816;
})();
var statearr_34817_37134 = state_34807__$1;
(statearr_34817_37134[(2)] = null);

(statearr_34817_37134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (4))){
var inst_34784 = (state_34807[(7)]);
var inst_34787 = cljs.core.first(inst_34784);
var state_34807__$1 = state_34807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34807__$1,(7),ch,inst_34787);
} else {
if((state_val_34808 === (13))){
var inst_34801 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34818_37136 = state_34807__$1;
(statearr_34818_37136[(2)] = inst_34801);

(statearr_34818_37136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (6))){
var inst_34792 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34792)){
var statearr_34819_37139 = state_34807__$1;
(statearr_34819_37139[(1)] = (8));

} else {
var statearr_34820_37140 = state_34807__$1;
(statearr_34820_37140[(1)] = (9));

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
var statearr_34827_37142 = state_34807__$1;
(statearr_34827_37142[(2)] = null);

(statearr_34827_37142[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (2))){
var inst_34784 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34784)){
var statearr_34828_37144 = state_34807__$1;
(statearr_34828_37144[(1)] = (4));

} else {
var statearr_34829_37147 = state_34807__$1;
(statearr_34829_37147[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (11))){
var inst_34798 = cljs.core.async.close_BANG_(ch);
var state_34807__$1 = state_34807;
var statearr_34830_37149 = state_34807__$1;
(statearr_34830_37149[(2)] = inst_34798);

(statearr_34830_37149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (9))){
var state_34807__$1 = state_34807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34831_37153 = state_34807__$1;
(statearr_34831_37153[(1)] = (11));

} else {
var statearr_34832_37154 = state_34807__$1;
(statearr_34832_37154[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (5))){
var inst_34784 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
var statearr_34833_37155 = state_34807__$1;
(statearr_34833_37155[(2)] = inst_34784);

(statearr_34833_37155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (10))){
var inst_34803 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34834_37158 = state_34807__$1;
(statearr_34834_37158[(2)] = inst_34803);

(statearr_34834_37158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (8))){
var inst_34784 = (state_34807[(7)]);
var inst_34794 = cljs.core.next(inst_34784);
var inst_34784__$1 = inst_34794;
var state_34807__$1 = (function (){var statearr_34835 = state_34807;
(statearr_34835[(7)] = inst_34784__$1);

return statearr_34835;
})();
var statearr_34836_37159 = state_34807__$1;
(statearr_34836_37159[(2)] = null);

(statearr_34836_37159[(1)] = (2));


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
var statearr_34839_37162 = state_34807;
(statearr_34839_37162[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37164 = state_34807;
state_34807 = G__37164;
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
var c__34274__auto___37218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34994){
var state_val_34997 = (state_34994[(1)]);
if((state_val_34997 === (7))){
var inst_34986 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
var statearr_34998_37222 = state_34994__$1;
(statearr_34998_37222[(2)] = inst_34986);

(statearr_34998_37222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (20))){
var inst_34883 = (state_34994[(7)]);
var inst_34895 = cljs.core.first(inst_34883);
var inst_34896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34895,(0),null);
var inst_34897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34895,(1),null);
var state_34994__$1 = (function (){var statearr_35001 = state_34994;
(statearr_35001[(8)] = inst_34896);

return statearr_35001;
})();
if(cljs.core.truth_(inst_34897)){
var statearr_35002_37225 = state_34994__$1;
(statearr_35002_37225[(1)] = (22));

} else {
var statearr_35004_37226 = state_34994__$1;
(statearr_35004_37226[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (27))){
var inst_34927 = (state_34994[(9)]);
var inst_34846 = (state_34994[(10)]);
var inst_34925 = (state_34994[(11)]);
var inst_34932 = (state_34994[(12)]);
var inst_34932__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34925,inst_34927);
var inst_34933 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34932__$1,inst_34846,done);
var state_34994__$1 = (function (){var statearr_35008 = state_34994;
(statearr_35008[(12)] = inst_34932__$1);

return statearr_35008;
})();
if(cljs.core.truth_(inst_34933)){
var statearr_35009_37229 = state_34994__$1;
(statearr_35009_37229[(1)] = (30));

} else {
var statearr_35010_37230 = state_34994__$1;
(statearr_35010_37230[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (1))){
var state_34994__$1 = state_34994;
var statearr_35011_37231 = state_34994__$1;
(statearr_35011_37231[(2)] = null);

(statearr_35011_37231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (24))){
var inst_34883 = (state_34994[(7)]);
var inst_34902 = (state_34994[(2)]);
var inst_34903 = cljs.core.next(inst_34883);
var inst_34855 = inst_34903;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34994__$1 = (function (){var statearr_35013 = state_34994;
(statearr_35013[(13)] = inst_34857);

(statearr_35013[(14)] = inst_34856);

(statearr_35013[(15)] = inst_34858);

(statearr_35013[(16)] = inst_34855);

(statearr_35013[(17)] = inst_34902);

return statearr_35013;
})();
var statearr_35017_37234 = state_34994__$1;
(statearr_35017_37234[(2)] = null);

(statearr_35017_37234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (39))){
var state_34994__$1 = state_34994;
var statearr_35035_37236 = state_34994__$1;
(statearr_35035_37236[(2)] = null);

(statearr_35035_37236[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (4))){
var inst_34846 = (state_34994[(10)]);
var inst_34846__$1 = (state_34994[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34994__$1 = (function (){var statearr_35037 = state_34994;
(statearr_35037[(10)] = inst_34846__$1);

return statearr_35037;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35038_37240 = state_34994__$1;
(statearr_35038_37240[(1)] = (5));

} else {
var statearr_35041_37242 = state_34994__$1;
(statearr_35041_37242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (15))){
var inst_34857 = (state_34994[(13)]);
var inst_34856 = (state_34994[(14)]);
var inst_34858 = (state_34994[(15)]);
var inst_34855 = (state_34994[(16)]);
var inst_34878 = (state_34994[(2)]);
var inst_34880 = (inst_34858 + (1));
var tmp35018 = inst_34857;
var tmp35019 = inst_34856;
var tmp35020 = inst_34855;
var inst_34855__$1 = tmp35020;
var inst_34856__$1 = tmp35019;
var inst_34857__$1 = tmp35018;
var inst_34858__$1 = inst_34880;
var state_34994__$1 = (function (){var statearr_35044 = state_34994;
(statearr_35044[(13)] = inst_34857__$1);

(statearr_35044[(14)] = inst_34856__$1);

(statearr_35044[(15)] = inst_34858__$1);

(statearr_35044[(16)] = inst_34855__$1);

(statearr_35044[(18)] = inst_34878);

return statearr_35044;
})();
var statearr_35046_37244 = state_34994__$1;
(statearr_35046_37244[(2)] = null);

(statearr_35046_37244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (21))){
var inst_34906 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
var statearr_35053_37248 = state_34994__$1;
(statearr_35053_37248[(2)] = inst_34906);

(statearr_35053_37248[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (31))){
var inst_34932 = (state_34994[(12)]);
var inst_34938 = done(null);
var inst_34943 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34932);
var state_34994__$1 = (function (){var statearr_35059 = state_34994;
(statearr_35059[(19)] = inst_34938);

return statearr_35059;
})();
var statearr_35061_37250 = state_34994__$1;
(statearr_35061_37250[(2)] = inst_34943);

(statearr_35061_37250[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (32))){
var inst_34927 = (state_34994[(9)]);
var inst_34925 = (state_34994[(11)]);
var inst_34924 = (state_34994[(20)]);
var inst_34926 = (state_34994[(21)]);
var inst_34945 = (state_34994[(2)]);
var inst_34946 = (inst_34927 + (1));
var tmp35047 = inst_34925;
var tmp35048 = inst_34924;
var tmp35049 = inst_34926;
var inst_34924__$1 = tmp35048;
var inst_34925__$1 = tmp35047;
var inst_34926__$1 = tmp35049;
var inst_34927__$1 = inst_34946;
var state_34994__$1 = (function (){var statearr_35077 = state_34994;
(statearr_35077[(9)] = inst_34927__$1);

(statearr_35077[(11)] = inst_34925__$1);

(statearr_35077[(20)] = inst_34924__$1);

(statearr_35077[(21)] = inst_34926__$1);

(statearr_35077[(22)] = inst_34945);

return statearr_35077;
})();
var statearr_35081_37256 = state_34994__$1;
(statearr_35081_37256[(2)] = null);

(statearr_35081_37256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (40))){
var inst_34958 = (state_34994[(23)]);
var inst_34962 = done(null);
var inst_34963 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34958);
var state_34994__$1 = (function (){var statearr_35087 = state_34994;
(statearr_35087[(24)] = inst_34962);

return statearr_35087;
})();
var statearr_35089_37261 = state_34994__$1;
(statearr_35089_37261[(2)] = inst_34963);

(statearr_35089_37261[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (33))){
var inst_34949 = (state_34994[(25)]);
var inst_34951 = cljs.core.chunked_seq_QMARK_(inst_34949);
var state_34994__$1 = state_34994;
if(inst_34951){
var statearr_35095_37263 = state_34994__$1;
(statearr_35095_37263[(1)] = (36));

} else {
var statearr_35098_37266 = state_34994__$1;
(statearr_35098_37266[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (13))){
var inst_34871 = (state_34994[(26)]);
var inst_34875 = cljs.core.async.close_BANG_(inst_34871);
var state_34994__$1 = state_34994;
var statearr_35104_37268 = state_34994__$1;
(statearr_35104_37268[(2)] = inst_34875);

(statearr_35104_37268[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (22))){
var inst_34896 = (state_34994[(8)]);
var inst_34899 = cljs.core.async.close_BANG_(inst_34896);
var state_34994__$1 = state_34994;
var statearr_35111_37269 = state_34994__$1;
(statearr_35111_37269[(2)] = inst_34899);

(statearr_35111_37269[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (36))){
var inst_34949 = (state_34994[(25)]);
var inst_34953 = cljs.core.chunk_first(inst_34949);
var inst_34954 = cljs.core.chunk_rest(inst_34949);
var inst_34955 = cljs.core.count(inst_34953);
var inst_34924 = inst_34954;
var inst_34925 = inst_34953;
var inst_34926 = inst_34955;
var inst_34927 = (0);
var state_34994__$1 = (function (){var statearr_35122 = state_34994;
(statearr_35122[(9)] = inst_34927);

(statearr_35122[(11)] = inst_34925);

(statearr_35122[(20)] = inst_34924);

(statearr_35122[(21)] = inst_34926);

return statearr_35122;
})();
var statearr_35123_37274 = state_34994__$1;
(statearr_35123_37274[(2)] = null);

(statearr_35123_37274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (41))){
var inst_34949 = (state_34994[(25)]);
var inst_34965 = (state_34994[(2)]);
var inst_34966 = cljs.core.next(inst_34949);
var inst_34924 = inst_34966;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34994__$1 = (function (){var statearr_35134 = state_34994;
(statearr_35134[(9)] = inst_34927);

(statearr_35134[(11)] = inst_34925);

(statearr_35134[(20)] = inst_34924);

(statearr_35134[(21)] = inst_34926);

(statearr_35134[(27)] = inst_34965);

return statearr_35134;
})();
var statearr_35141_37279 = state_34994__$1;
(statearr_35141_37279[(2)] = null);

(statearr_35141_37279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (43))){
var state_34994__$1 = state_34994;
var statearr_35142_37280 = state_34994__$1;
(statearr_35142_37280[(2)] = null);

(statearr_35142_37280[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (29))){
var inst_34974 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
var statearr_35143_37282 = state_34994__$1;
(statearr_35143_37282[(2)] = inst_34974);

(statearr_35143_37282[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (44))){
var inst_34983 = (state_34994[(2)]);
var state_34994__$1 = (function (){var statearr_35144 = state_34994;
(statearr_35144[(28)] = inst_34983);

return statearr_35144;
})();
var statearr_35145_37285 = state_34994__$1;
(statearr_35145_37285[(2)] = null);

(statearr_35145_37285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (6))){
var inst_34916 = (state_34994[(29)]);
var inst_34915 = cljs.core.deref(cs);
var inst_34916__$1 = cljs.core.keys(inst_34915);
var inst_34917 = cljs.core.count(inst_34916__$1);
var inst_34918 = cljs.core.reset_BANG_(dctr,inst_34917);
var inst_34923 = cljs.core.seq(inst_34916__$1);
var inst_34924 = inst_34923;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34994__$1 = (function (){var statearr_35148 = state_34994;
(statearr_35148[(9)] = inst_34927);

(statearr_35148[(30)] = inst_34918);

(statearr_35148[(11)] = inst_34925);

(statearr_35148[(20)] = inst_34924);

(statearr_35148[(21)] = inst_34926);

(statearr_35148[(29)] = inst_34916__$1);

return statearr_35148;
})();
var statearr_35149_37291 = state_34994__$1;
(statearr_35149_37291[(2)] = null);

(statearr_35149_37291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (28))){
var inst_34924 = (state_34994[(20)]);
var inst_34949 = (state_34994[(25)]);
var inst_34949__$1 = cljs.core.seq(inst_34924);
var state_34994__$1 = (function (){var statearr_35152 = state_34994;
(statearr_35152[(25)] = inst_34949__$1);

return statearr_35152;
})();
if(inst_34949__$1){
var statearr_35153_37296 = state_34994__$1;
(statearr_35153_37296[(1)] = (33));

} else {
var statearr_35154_37297 = state_34994__$1;
(statearr_35154_37297[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (25))){
var inst_34927 = (state_34994[(9)]);
var inst_34926 = (state_34994[(21)]);
var inst_34929 = (inst_34927 < inst_34926);
var inst_34930 = inst_34929;
var state_34994__$1 = state_34994;
if(cljs.core.truth_(inst_34930)){
var statearr_35178_37301 = state_34994__$1;
(statearr_35178_37301[(1)] = (27));

} else {
var statearr_35179_37303 = state_34994__$1;
(statearr_35179_37303[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (34))){
var state_34994__$1 = state_34994;
var statearr_35184_37304 = state_34994__$1;
(statearr_35184_37304[(2)] = null);

(statearr_35184_37304[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (17))){
var state_34994__$1 = state_34994;
var statearr_35185_37308 = state_34994__$1;
(statearr_35185_37308[(2)] = null);

(statearr_35185_37308[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (3))){
var inst_34988 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34994__$1,inst_34988);
} else {
if((state_val_34997 === (12))){
var inst_34911 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
var statearr_35188_37310 = state_34994__$1;
(statearr_35188_37310[(2)] = inst_34911);

(statearr_35188_37310[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (2))){
var state_34994__$1 = state_34994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34994__$1,(4),ch);
} else {
if((state_val_34997 === (23))){
var state_34994__$1 = state_34994;
var statearr_35196_37311 = state_34994__$1;
(statearr_35196_37311[(2)] = null);

(statearr_35196_37311[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (35))){
var inst_34972 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
var statearr_35202_37312 = state_34994__$1;
(statearr_35202_37312[(2)] = inst_34972);

(statearr_35202_37312[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (19))){
var inst_34883 = (state_34994[(7)]);
var inst_34887 = cljs.core.chunk_first(inst_34883);
var inst_34888 = cljs.core.chunk_rest(inst_34883);
var inst_34889 = cljs.core.count(inst_34887);
var inst_34855 = inst_34888;
var inst_34856 = inst_34887;
var inst_34857 = inst_34889;
var inst_34858 = (0);
var state_34994__$1 = (function (){var statearr_35216 = state_34994;
(statearr_35216[(13)] = inst_34857);

(statearr_35216[(14)] = inst_34856);

(statearr_35216[(15)] = inst_34858);

(statearr_35216[(16)] = inst_34855);

return statearr_35216;
})();
var statearr_35218_37317 = state_34994__$1;
(statearr_35218_37317[(2)] = null);

(statearr_35218_37317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (11))){
var inst_34883 = (state_34994[(7)]);
var inst_34855 = (state_34994[(16)]);
var inst_34883__$1 = cljs.core.seq(inst_34855);
var state_34994__$1 = (function (){var statearr_35224 = state_34994;
(statearr_35224[(7)] = inst_34883__$1);

return statearr_35224;
})();
if(inst_34883__$1){
var statearr_35227_37320 = state_34994__$1;
(statearr_35227_37320[(1)] = (16));

} else {
var statearr_35229_37321 = state_34994__$1;
(statearr_35229_37321[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (9))){
var inst_34913 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
var statearr_35234_37322 = state_34994__$1;
(statearr_35234_37322[(2)] = inst_34913);

(statearr_35234_37322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34994__$1 = (function (){var statearr_35241 = state_34994;
(statearr_35241[(13)] = inst_34857);

(statearr_35241[(14)] = inst_34856);

(statearr_35241[(15)] = inst_34858);

(statearr_35241[(16)] = inst_34855);

return statearr_35241;
})();
var statearr_35244_37323 = state_34994__$1;
(statearr_35244_37323[(2)] = null);

(statearr_35244_37323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (14))){
var state_34994__$1 = state_34994;
var statearr_35249_37325 = state_34994__$1;
(statearr_35249_37325[(2)] = null);

(statearr_35249_37325[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (45))){
var inst_34980 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
var statearr_35253_37329 = state_34994__$1;
(statearr_35253_37329[(2)] = inst_34980);

(statearr_35253_37329[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (26))){
var inst_34916 = (state_34994[(29)]);
var inst_34976 = (state_34994[(2)]);
var inst_34977 = cljs.core.seq(inst_34916);
var state_34994__$1 = (function (){var statearr_35259 = state_34994;
(statearr_35259[(31)] = inst_34976);

return statearr_35259;
})();
if(inst_34977){
var statearr_35262_37335 = state_34994__$1;
(statearr_35262_37335[(1)] = (42));

} else {
var statearr_35265_37336 = state_34994__$1;
(statearr_35265_37336[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (16))){
var inst_34883 = (state_34994[(7)]);
var inst_34885 = cljs.core.chunked_seq_QMARK_(inst_34883);
var state_34994__$1 = state_34994;
if(inst_34885){
var statearr_35271_37338 = state_34994__$1;
(statearr_35271_37338[(1)] = (19));

} else {
var statearr_35273_37340 = state_34994__$1;
(statearr_35273_37340[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (38))){
var inst_34969 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
var statearr_35278_37343 = state_34994__$1;
(statearr_35278_37343[(2)] = inst_34969);

(statearr_35278_37343[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (30))){
var state_34994__$1 = state_34994;
var statearr_35282_37344 = state_34994__$1;
(statearr_35282_37344[(2)] = null);

(statearr_35282_37344[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (10))){
var inst_34856 = (state_34994[(14)]);
var inst_34858 = (state_34994[(15)]);
var inst_34868 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34868,(0),null);
var inst_34873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34868,(1),null);
var state_34994__$1 = (function (){var statearr_35289 = state_34994;
(statearr_35289[(26)] = inst_34871);

return statearr_35289;
})();
if(cljs.core.truth_(inst_34873)){
var statearr_35292_37351 = state_34994__$1;
(statearr_35292_37351[(1)] = (13));

} else {
var statearr_35294_37352 = state_34994__$1;
(statearr_35294_37352[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (18))){
var inst_34909 = (state_34994[(2)]);
var state_34994__$1 = state_34994;
var statearr_35300_37357 = state_34994__$1;
(statearr_35300_37357[(2)] = inst_34909);

(statearr_35300_37357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (42))){
var state_34994__$1 = state_34994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34994__$1,(45),dchan);
} else {
if((state_val_34997 === (37))){
var inst_34958 = (state_34994[(23)]);
var inst_34846 = (state_34994[(10)]);
var inst_34949 = (state_34994[(25)]);
var inst_34958__$1 = cljs.core.first(inst_34949);
var inst_34959 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34958__$1,inst_34846,done);
var state_34994__$1 = (function (){var statearr_35308 = state_34994;
(statearr_35308[(23)] = inst_34958__$1);

return statearr_35308;
})();
if(cljs.core.truth_(inst_34959)){
var statearr_35312_37361 = state_34994__$1;
(statearr_35312_37361[(1)] = (39));

} else {
var statearr_35314_37363 = state_34994__$1;
(statearr_35314_37363[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (8))){
var inst_34857 = (state_34994[(13)]);
var inst_34858 = (state_34994[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34994__$1 = state_34994;
if(cljs.core.truth_(inst_34861)){
var statearr_35320_37367 = state_34994__$1;
(statearr_35320_37367[(1)] = (10));

} else {
var statearr_35322_37368 = state_34994__$1;
(statearr_35322_37368[(1)] = (11));

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
var statearr_35333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35333[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35333[(1)] = (1));

return statearr_35333;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34994){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34994);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35337){if((e35337 instanceof Object)){
var ex__34210__auto__ = e35337;
var statearr_35342_37378 = state_34994;
(statearr_35342_37378[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35337;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37379 = state_34994;
state_34994 = G__37379;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34994){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35350 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35350[(6)] = c__34274__auto___37218);

return statearr_35350;
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
var G__35358 = arguments.length;
switch (G__35358) {
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
var len__4789__auto___37415 = arguments.length;
var i__4790__auto___37417 = (0);
while(true){
if((i__4790__auto___37417 < len__4789__auto___37415)){
args__4795__auto__.push((arguments[i__4790__auto___37417]));

var G__37418 = (i__4790__auto___37417 + (1));
i__4790__auto___37417 = G__37418;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35416){
var map__35419 = p__35416;
var map__35419__$1 = (((((!((map__35419 == null))))?(((((map__35419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35419):map__35419);
var opts = map__35419__$1;
var statearr_35422_37423 = state;
(statearr_35422_37423[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35424_37425 = state;
(statearr_35424_37425[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35426_37426 = state;
(statearr_35426_37426[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35402){
var G__35403 = cljs.core.first(seq35402);
var seq35402__$1 = cljs.core.next(seq35402);
var G__35404 = cljs.core.first(seq35402__$1);
var seq35402__$2 = cljs.core.next(seq35402__$1);
var G__35405 = cljs.core.first(seq35402__$2);
var seq35402__$3 = cljs.core.next(seq35402__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35403,G__35404,G__35405,seq35402__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35470 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35471){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35471 = meta35471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35472,meta35471__$1){
var self__ = this;
var _35472__$1 = this;
return (new cljs.core.async.t_cljs$core$async35470(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35471__$1));
}));

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35472){
var self__ = this;
var _35472__$1 = this;
return self__.meta35471;
}));

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35470.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35471","meta35471",-1519319675,null)], null);
}));

(cljs.core.async.t_cljs$core$async35470.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35470");

(cljs.core.async.t_cljs$core$async35470.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35470");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35470.
 */
cljs.core.async.__GT_t_cljs$core$async35470 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35470(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35471){
return (new cljs.core.async.t_cljs$core$async35470(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35471));
});

}

return (new cljs.core.async.t_cljs$core$async35470(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35670){
var state_val_35671 = (state_35670[(1)]);
if((state_val_35671 === (7))){
var inst_35556 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
var statearr_35675_37458 = state_35670__$1;
(statearr_35675_37458[(2)] = inst_35556);

(statearr_35675_37458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (20))){
var inst_35571 = (state_35670[(7)]);
var state_35670__$1 = state_35670;
var statearr_35676_37460 = state_35670__$1;
(statearr_35676_37460[(2)] = inst_35571);

(statearr_35676_37460[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (27))){
var state_35670__$1 = state_35670;
var statearr_35677_37461 = state_35670__$1;
(statearr_35677_37461[(2)] = null);

(statearr_35677_37461[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (1))){
var inst_35538 = (state_35670[(8)]);
var inst_35538__$1 = calc_state();
var inst_35542 = (inst_35538__$1 == null);
var inst_35543 = cljs.core.not(inst_35542);
var state_35670__$1 = (function (){var statearr_35678 = state_35670;
(statearr_35678[(8)] = inst_35538__$1);

return statearr_35678;
})();
if(inst_35543){
var statearr_35679_37467 = state_35670__$1;
(statearr_35679_37467[(1)] = (2));

} else {
var statearr_35680_37468 = state_35670__$1;
(statearr_35680_37468[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (24))){
var inst_35615 = (state_35670[(9)]);
var inst_35635 = (state_35670[(10)]);
var inst_35601 = (state_35670[(11)]);
var inst_35635__$1 = (inst_35601.cljs$core$IFn$_invoke$arity$1 ? inst_35601.cljs$core$IFn$_invoke$arity$1(inst_35615) : inst_35601.call(null,inst_35615));
var state_35670__$1 = (function (){var statearr_35683 = state_35670;
(statearr_35683[(10)] = inst_35635__$1);

return statearr_35683;
})();
if(cljs.core.truth_(inst_35635__$1)){
var statearr_35684_37476 = state_35670__$1;
(statearr_35684_37476[(1)] = (29));

} else {
var statearr_35685_37477 = state_35670__$1;
(statearr_35685_37477[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (4))){
var inst_35559 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
if(cljs.core.truth_(inst_35559)){
var statearr_35688_37479 = state_35670__$1;
(statearr_35688_37479[(1)] = (8));

} else {
var statearr_35689_37481 = state_35670__$1;
(statearr_35689_37481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (15))){
var inst_35592 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
if(cljs.core.truth_(inst_35592)){
var statearr_35690_37482 = state_35670__$1;
(statearr_35690_37482[(1)] = (19));

} else {
var statearr_35691_37483 = state_35670__$1;
(statearr_35691_37483[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (21))){
var inst_35600 = (state_35670[(12)]);
var inst_35600__$1 = (state_35670[(2)]);
var inst_35601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35670__$1 = (function (){var statearr_35692 = state_35670;
(statearr_35692[(12)] = inst_35600__$1);

(statearr_35692[(13)] = inst_35602);

(statearr_35692[(11)] = inst_35601);

return statearr_35692;
})();
return cljs.core.async.ioc_alts_BANG_(state_35670__$1,(22),inst_35603);
} else {
if((state_val_35671 === (31))){
var inst_35645 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
if(cljs.core.truth_(inst_35645)){
var statearr_35694_37497 = state_35670__$1;
(statearr_35694_37497[(1)] = (32));

} else {
var statearr_35696_37498 = state_35670__$1;
(statearr_35696_37498[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (32))){
var inst_35614 = (state_35670[(14)]);
var state_35670__$1 = state_35670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35670__$1,(35),out,inst_35614);
} else {
if((state_val_35671 === (33))){
var inst_35600 = (state_35670[(12)]);
var inst_35571 = inst_35600;
var state_35670__$1 = (function (){var statearr_35699 = state_35670;
(statearr_35699[(7)] = inst_35571);

return statearr_35699;
})();
var statearr_35700_37500 = state_35670__$1;
(statearr_35700_37500[(2)] = null);

(statearr_35700_37500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (13))){
var inst_35571 = (state_35670[(7)]);
var inst_35581 = inst_35571.cljs$lang$protocol_mask$partition0$;
var inst_35582 = (inst_35581 & (64));
var inst_35583 = inst_35571.cljs$core$ISeq$;
var inst_35584 = (cljs.core.PROTOCOL_SENTINEL === inst_35583);
var inst_35585 = ((inst_35582) || (inst_35584));
var state_35670__$1 = state_35670;
if(cljs.core.truth_(inst_35585)){
var statearr_35704_37506 = state_35670__$1;
(statearr_35704_37506[(1)] = (16));

} else {
var statearr_35706_37507 = state_35670__$1;
(statearr_35706_37507[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (22))){
var inst_35615 = (state_35670[(9)]);
var inst_35614 = (state_35670[(14)]);
var inst_35613 = (state_35670[(2)]);
var inst_35614__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35613,(0),null);
var inst_35615__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35613,(1),null);
var inst_35617 = (inst_35614__$1 == null);
var inst_35618 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35615__$1,change);
var inst_35619 = ((inst_35617) || (inst_35618));
var state_35670__$1 = (function (){var statearr_35707 = state_35670;
(statearr_35707[(9)] = inst_35615__$1);

(statearr_35707[(14)] = inst_35614__$1);

return statearr_35707;
})();
if(cljs.core.truth_(inst_35619)){
var statearr_35708_37516 = state_35670__$1;
(statearr_35708_37516[(1)] = (23));

} else {
var statearr_35709_37517 = state_35670__$1;
(statearr_35709_37517[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (36))){
var inst_35600 = (state_35670[(12)]);
var inst_35571 = inst_35600;
var state_35670__$1 = (function (){var statearr_35710 = state_35670;
(statearr_35710[(7)] = inst_35571);

return statearr_35710;
})();
var statearr_35711_37519 = state_35670__$1;
(statearr_35711_37519[(2)] = null);

(statearr_35711_37519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (29))){
var inst_35635 = (state_35670[(10)]);
var state_35670__$1 = state_35670;
var statearr_35715_37525 = state_35670__$1;
(statearr_35715_37525[(2)] = inst_35635);

(statearr_35715_37525[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (6))){
var state_35670__$1 = state_35670;
var statearr_35717_37528 = state_35670__$1;
(statearr_35717_37528[(2)] = false);

(statearr_35717_37528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (28))){
var inst_35629 = (state_35670[(2)]);
var inst_35630 = calc_state();
var inst_35571 = inst_35630;
var state_35670__$1 = (function (){var statearr_35720 = state_35670;
(statearr_35720[(15)] = inst_35629);

(statearr_35720[(7)] = inst_35571);

return statearr_35720;
})();
var statearr_35721_37530 = state_35670__$1;
(statearr_35721_37530[(2)] = null);

(statearr_35721_37530[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (25))){
var inst_35661 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
var statearr_35725_37531 = state_35670__$1;
(statearr_35725_37531[(2)] = inst_35661);

(statearr_35725_37531[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (34))){
var inst_35659 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
var statearr_35727_37537 = state_35670__$1;
(statearr_35727_37537[(2)] = inst_35659);

(statearr_35727_37537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (17))){
var state_35670__$1 = state_35670;
var statearr_35728_37540 = state_35670__$1;
(statearr_35728_37540[(2)] = false);

(statearr_35728_37540[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (3))){
var state_35670__$1 = state_35670;
var statearr_35730_37541 = state_35670__$1;
(statearr_35730_37541[(2)] = false);

(statearr_35730_37541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (12))){
var inst_35664 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35670__$1,inst_35664);
} else {
if((state_val_35671 === (2))){
var inst_35538 = (state_35670[(8)]);
var inst_35548 = inst_35538.cljs$lang$protocol_mask$partition0$;
var inst_35549 = (inst_35548 & (64));
var inst_35550 = inst_35538.cljs$core$ISeq$;
var inst_35551 = (cljs.core.PROTOCOL_SENTINEL === inst_35550);
var inst_35552 = ((inst_35549) || (inst_35551));
var state_35670__$1 = state_35670;
if(cljs.core.truth_(inst_35552)){
var statearr_35732_37545 = state_35670__$1;
(statearr_35732_37545[(1)] = (5));

} else {
var statearr_35733_37549 = state_35670__$1;
(statearr_35733_37549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (23))){
var inst_35614 = (state_35670[(14)]);
var inst_35622 = (inst_35614 == null);
var state_35670__$1 = state_35670;
if(cljs.core.truth_(inst_35622)){
var statearr_35734_37552 = state_35670__$1;
(statearr_35734_37552[(1)] = (26));

} else {
var statearr_35735_37553 = state_35670__$1;
(statearr_35735_37553[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (35))){
var inst_35648 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
if(cljs.core.truth_(inst_35648)){
var statearr_35737_37557 = state_35670__$1;
(statearr_35737_37557[(1)] = (36));

} else {
var statearr_35738_37558 = state_35670__$1;
(statearr_35738_37558[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (19))){
var inst_35571 = (state_35670[(7)]);
var inst_35597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35571);
var state_35670__$1 = state_35670;
var statearr_35739_37564 = state_35670__$1;
(statearr_35739_37564[(2)] = inst_35597);

(statearr_35739_37564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (11))){
var inst_35571 = (state_35670[(7)]);
var inst_35577 = (inst_35571 == null);
var inst_35578 = cljs.core.not(inst_35577);
var state_35670__$1 = state_35670;
if(inst_35578){
var statearr_35741_37566 = state_35670__$1;
(statearr_35741_37566[(1)] = (13));

} else {
var statearr_35742_37567 = state_35670__$1;
(statearr_35742_37567[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (9))){
var inst_35538 = (state_35670[(8)]);
var state_35670__$1 = state_35670;
var statearr_35743_37570 = state_35670__$1;
(statearr_35743_37570[(2)] = inst_35538);

(statearr_35743_37570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (5))){
var state_35670__$1 = state_35670;
var statearr_35744_37574 = state_35670__$1;
(statearr_35744_37574[(2)] = true);

(statearr_35744_37574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (14))){
var state_35670__$1 = state_35670;
var statearr_35745_37577 = state_35670__$1;
(statearr_35745_37577[(2)] = false);

(statearr_35745_37577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (26))){
var inst_35615 = (state_35670[(9)]);
var inst_35626 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35615);
var state_35670__$1 = state_35670;
var statearr_35747_37579 = state_35670__$1;
(statearr_35747_37579[(2)] = inst_35626);

(statearr_35747_37579[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (16))){
var state_35670__$1 = state_35670;
var statearr_35748_37580 = state_35670__$1;
(statearr_35748_37580[(2)] = true);

(statearr_35748_37580[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (38))){
var inst_35655 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
var statearr_35754_37586 = state_35670__$1;
(statearr_35754_37586[(2)] = inst_35655);

(statearr_35754_37586[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (30))){
var inst_35615 = (state_35670[(9)]);
var inst_35602 = (state_35670[(13)]);
var inst_35601 = (state_35670[(11)]);
var inst_35639 = cljs.core.empty_QMARK_(inst_35601);
var inst_35640 = (inst_35602.cljs$core$IFn$_invoke$arity$1 ? inst_35602.cljs$core$IFn$_invoke$arity$1(inst_35615) : inst_35602.call(null,inst_35615));
var inst_35641 = cljs.core.not(inst_35640);
var inst_35643 = ((inst_35639) && (inst_35641));
var state_35670__$1 = state_35670;
var statearr_35759_37593 = state_35670__$1;
(statearr_35759_37593[(2)] = inst_35643);

(statearr_35759_37593[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (10))){
var inst_35538 = (state_35670[(8)]);
var inst_35565 = (state_35670[(2)]);
var inst_35566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35565,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35565,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35565,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35571 = inst_35538;
var state_35670__$1 = (function (){var statearr_35761 = state_35670;
(statearr_35761[(16)] = inst_35569);

(statearr_35761[(7)] = inst_35571);

(statearr_35761[(17)] = inst_35566);

(statearr_35761[(18)] = inst_35570);

return statearr_35761;
})();
var statearr_35763_37601 = state_35670__$1;
(statearr_35763_37601[(2)] = null);

(statearr_35763_37601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (18))){
var inst_35589 = (state_35670[(2)]);
var state_35670__$1 = state_35670;
var statearr_35770_37605 = state_35670__$1;
(statearr_35770_37605[(2)] = inst_35589);

(statearr_35770_37605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (37))){
var state_35670__$1 = state_35670;
var statearr_35776_37607 = state_35670__$1;
(statearr_35776_37607[(2)] = null);

(statearr_35776_37607[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35671 === (8))){
var inst_35538 = (state_35670[(8)]);
var inst_35562 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35538);
var state_35670__$1 = state_35670;
var statearr_35781_37608 = state_35670__$1;
(statearr_35781_37608[(2)] = inst_35562);

(statearr_35781_37608[(1)] = (10));


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
var statearr_35784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35784[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35784[(1)] = (1));

return statearr_35784;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35670){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35670);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35787){if((e35787 instanceof Object)){
var ex__34210__auto__ = e35787;
var statearr_35788_37621 = state_35670;
(statearr_35788_37621[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37623 = state_35670;
state_35670 = G__37623;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35670){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35791 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35791[(6)] = c__34274__auto___37454);

return statearr_35791;
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
var G__35805 = arguments.length;
switch (G__35805) {
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
var G__35823 = arguments.length;
switch (G__35823) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35819_SHARP_){
if(cljs.core.truth_((p1__35819_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35819_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35819_SHARP_.call(null,topic)))){
return p1__35819_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35819_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35831 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35831 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35832){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35832 = meta35832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35833,meta35832__$1){
var self__ = this;
var _35833__$1 = this;
return (new cljs.core.async.t_cljs$core$async35831(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35832__$1));
}));

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35833){
var self__ = this;
var _35833__$1 = this;
return self__.meta35832;
}));

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35831.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35832","meta35832",-583861689,null)], null);
}));

(cljs.core.async.t_cljs$core$async35831.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35831");

(cljs.core.async.t_cljs$core$async35831.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35831");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35831.
 */
cljs.core.async.__GT_t_cljs$core$async35831 = (function cljs$core$async$__GT_t_cljs$core$async35831(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35832){
return (new cljs.core.async.t_cljs$core$async35831(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35832));
});

}

return (new cljs.core.async.t_cljs$core$async35831(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35938){
var state_val_35939 = (state_35938[(1)]);
if((state_val_35939 === (7))){
var inst_35932 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35944_37713 = state_35938__$1;
(statearr_35944_37713[(2)] = inst_35932);

(statearr_35944_37713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (20))){
var state_35938__$1 = state_35938;
var statearr_35947_37714 = state_35938__$1;
(statearr_35947_37714[(2)] = null);

(statearr_35947_37714[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (1))){
var state_35938__$1 = state_35938;
var statearr_35949_37715 = state_35938__$1;
(statearr_35949_37715[(2)] = null);

(statearr_35949_37715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (24))){
var inst_35914 = (state_35938[(7)]);
var inst_35923 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35914);
var state_35938__$1 = state_35938;
var statearr_35950_37718 = state_35938__$1;
(statearr_35950_37718[(2)] = inst_35923);

(statearr_35950_37718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (4))){
var inst_35860 = (state_35938[(8)]);
var inst_35860__$1 = (state_35938[(2)]);
var inst_35862 = (inst_35860__$1 == null);
var state_35938__$1 = (function (){var statearr_35953 = state_35938;
(statearr_35953[(8)] = inst_35860__$1);

return statearr_35953;
})();
if(cljs.core.truth_(inst_35862)){
var statearr_35954_37719 = state_35938__$1;
(statearr_35954_37719[(1)] = (5));

} else {
var statearr_35956_37720 = state_35938__$1;
(statearr_35956_37720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (15))){
var inst_35907 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35958_37721 = state_35938__$1;
(statearr_35958_37721[(2)] = inst_35907);

(statearr_35958_37721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (21))){
var inst_35928 = (state_35938[(2)]);
var state_35938__$1 = (function (){var statearr_35960 = state_35938;
(statearr_35960[(9)] = inst_35928);

return statearr_35960;
})();
var statearr_35962_37724 = state_35938__$1;
(statearr_35962_37724[(2)] = null);

(statearr_35962_37724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (13))){
var inst_35887 = (state_35938[(10)]);
var inst_35890 = cljs.core.chunked_seq_QMARK_(inst_35887);
var state_35938__$1 = state_35938;
if(inst_35890){
var statearr_35964_37725 = state_35938__$1;
(statearr_35964_37725[(1)] = (16));

} else {
var statearr_35966_37726 = state_35938__$1;
(statearr_35966_37726[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (22))){
var inst_35920 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
if(cljs.core.truth_(inst_35920)){
var statearr_35967_37731 = state_35938__$1;
(statearr_35967_37731[(1)] = (23));

} else {
var statearr_35968_37732 = state_35938__$1;
(statearr_35968_37732[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (6))){
var inst_35914 = (state_35938[(7)]);
var inst_35916 = (state_35938[(11)]);
var inst_35860 = (state_35938[(8)]);
var inst_35914__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35860) : topic_fn.call(null,inst_35860));
var inst_35915 = cljs.core.deref(mults);
var inst_35916__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35915,inst_35914__$1);
var state_35938__$1 = (function (){var statearr_35973 = state_35938;
(statearr_35973[(7)] = inst_35914__$1);

(statearr_35973[(11)] = inst_35916__$1);

return statearr_35973;
})();
if(cljs.core.truth_(inst_35916__$1)){
var statearr_35975_37736 = state_35938__$1;
(statearr_35975_37736[(1)] = (19));

} else {
var statearr_35977_37737 = state_35938__$1;
(statearr_35977_37737[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (25))){
var inst_35925 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35980_37738 = state_35938__$1;
(statearr_35980_37738[(2)] = inst_35925);

(statearr_35980_37738[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (17))){
var inst_35887 = (state_35938[(10)]);
var inst_35898 = cljs.core.first(inst_35887);
var inst_35899 = cljs.core.async.muxch_STAR_(inst_35898);
var inst_35900 = cljs.core.async.close_BANG_(inst_35899);
var inst_35901 = cljs.core.next(inst_35887);
var inst_35872 = inst_35901;
var inst_35873 = null;
var inst_35874 = (0);
var inst_35875 = (0);
var state_35938__$1 = (function (){var statearr_35981 = state_35938;
(statearr_35981[(12)] = inst_35872);

(statearr_35981[(13)] = inst_35875);

(statearr_35981[(14)] = inst_35873);

(statearr_35981[(15)] = inst_35900);

(statearr_35981[(16)] = inst_35874);

return statearr_35981;
})();
var statearr_35982_37741 = state_35938__$1;
(statearr_35982_37741[(2)] = null);

(statearr_35982_37741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (3))){
var inst_35934 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35938__$1,inst_35934);
} else {
if((state_val_35939 === (12))){
var inst_35909 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35985_37742 = state_35938__$1;
(statearr_35985_37742[(2)] = inst_35909);

(statearr_35985_37742[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (2))){
var state_35938__$1 = state_35938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35938__$1,(4),ch);
} else {
if((state_val_35939 === (23))){
var state_35938__$1 = state_35938;
var statearr_35987_37743 = state_35938__$1;
(statearr_35987_37743[(2)] = null);

(statearr_35987_37743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (19))){
var inst_35916 = (state_35938[(11)]);
var inst_35860 = (state_35938[(8)]);
var inst_35918 = cljs.core.async.muxch_STAR_(inst_35916);
var state_35938__$1 = state_35938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35938__$1,(22),inst_35918,inst_35860);
} else {
if((state_val_35939 === (11))){
var inst_35872 = (state_35938[(12)]);
var inst_35887 = (state_35938[(10)]);
var inst_35887__$1 = cljs.core.seq(inst_35872);
var state_35938__$1 = (function (){var statearr_35990 = state_35938;
(statearr_35990[(10)] = inst_35887__$1);

return statearr_35990;
})();
if(inst_35887__$1){
var statearr_35991_37753 = state_35938__$1;
(statearr_35991_37753[(1)] = (13));

} else {
var statearr_35992_37754 = state_35938__$1;
(statearr_35992_37754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (9))){
var inst_35911 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_35994_37755 = state_35938__$1;
(statearr_35994_37755[(2)] = inst_35911);

(statearr_35994_37755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (5))){
var inst_35869 = cljs.core.deref(mults);
var inst_35870 = cljs.core.vals(inst_35869);
var inst_35871 = cljs.core.seq(inst_35870);
var inst_35872 = inst_35871;
var inst_35873 = null;
var inst_35874 = (0);
var inst_35875 = (0);
var state_35938__$1 = (function (){var statearr_35996 = state_35938;
(statearr_35996[(12)] = inst_35872);

(statearr_35996[(13)] = inst_35875);

(statearr_35996[(14)] = inst_35873);

(statearr_35996[(16)] = inst_35874);

return statearr_35996;
})();
var statearr_35999_37760 = state_35938__$1;
(statearr_35999_37760[(2)] = null);

(statearr_35999_37760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (14))){
var state_35938__$1 = state_35938;
var statearr_36003_37762 = state_35938__$1;
(statearr_36003_37762[(2)] = null);

(statearr_36003_37762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (16))){
var inst_35887 = (state_35938[(10)]);
var inst_35892 = cljs.core.chunk_first(inst_35887);
var inst_35893 = cljs.core.chunk_rest(inst_35887);
var inst_35895 = cljs.core.count(inst_35892);
var inst_35872 = inst_35893;
var inst_35873 = inst_35892;
var inst_35874 = inst_35895;
var inst_35875 = (0);
var state_35938__$1 = (function (){var statearr_36004 = state_35938;
(statearr_36004[(12)] = inst_35872);

(statearr_36004[(13)] = inst_35875);

(statearr_36004[(14)] = inst_35873);

(statearr_36004[(16)] = inst_35874);

return statearr_36004;
})();
var statearr_36008_37767 = state_35938__$1;
(statearr_36008_37767[(2)] = null);

(statearr_36008_37767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (10))){
var inst_35872 = (state_35938[(12)]);
var inst_35875 = (state_35938[(13)]);
var inst_35873 = (state_35938[(14)]);
var inst_35874 = (state_35938[(16)]);
var inst_35880 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35873,inst_35875);
var inst_35881 = cljs.core.async.muxch_STAR_(inst_35880);
var inst_35882 = cljs.core.async.close_BANG_(inst_35881);
var inst_35883 = (inst_35875 + (1));
var tmp36000 = inst_35872;
var tmp36001 = inst_35873;
var tmp36002 = inst_35874;
var inst_35872__$1 = tmp36000;
var inst_35873__$1 = tmp36001;
var inst_35874__$1 = tmp36002;
var inst_35875__$1 = inst_35883;
var state_35938__$1 = (function (){var statearr_36013 = state_35938;
(statearr_36013[(12)] = inst_35872__$1);

(statearr_36013[(13)] = inst_35875__$1);

(statearr_36013[(17)] = inst_35882);

(statearr_36013[(14)] = inst_35873__$1);

(statearr_36013[(16)] = inst_35874__$1);

return statearr_36013;
})();
var statearr_36015_37778 = state_35938__$1;
(statearr_36015_37778[(2)] = null);

(statearr_36015_37778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (18))){
var inst_35904 = (state_35938[(2)]);
var state_35938__$1 = state_35938;
var statearr_36019_37779 = state_35938__$1;
(statearr_36019_37779[(2)] = inst_35904);

(statearr_36019_37779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35939 === (8))){
var inst_35875 = (state_35938[(13)]);
var inst_35874 = (state_35938[(16)]);
var inst_35877 = (inst_35875 < inst_35874);
var inst_35878 = inst_35877;
var state_35938__$1 = state_35938;
if(cljs.core.truth_(inst_35878)){
var statearr_36021_37781 = state_35938__$1;
(statearr_36021_37781[(1)] = (10));

} else {
var statearr_36022_37784 = state_35938__$1;
(statearr_36022_37784[(1)] = (11));

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
var statearr_36027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36027[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36027[(1)] = (1));

return statearr_36027;
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
}catch (e36030){if((e36030 instanceof Object)){
var ex__34210__auto__ = e36030;
var statearr_36032_37791 = state_35938;
(statearr_36032_37791[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36030;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37794 = state_35938;
state_35938 = G__37794;
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
var state__34276__auto__ = (function (){var statearr_36035 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36035[(6)] = c__34274__auto___37710);

return statearr_36035;
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
var statearr_36105_37827 = state_36101__$1;
(statearr_36105_37827[(2)] = null);

(statearr_36105_37827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (4))){
var inst_36056 = (state_36101[(7)]);
var inst_36058 = (inst_36056 < cnt);
var state_36101__$1 = state_36101;
if(cljs.core.truth_(inst_36058)){
var statearr_36107_37829 = state_36101__$1;
(statearr_36107_37829[(1)] = (6));

} else {
var statearr_36108_37831 = state_36101__$1;
(statearr_36108_37831[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (15))){
var inst_36090 = (state_36101[(2)]);
var state_36101__$1 = state_36101;
var statearr_36109_37836 = state_36101__$1;
(statearr_36109_37836[(2)] = inst_36090);

(statearr_36109_37836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (13))){
var inst_36082 = cljs.core.async.close_BANG_(out);
var state_36101__$1 = state_36101;
var statearr_36112_37839 = state_36101__$1;
(statearr_36112_37839[(2)] = inst_36082);

(statearr_36112_37839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (6))){
var state_36101__$1 = state_36101;
var statearr_36115_37841 = state_36101__$1;
(statearr_36115_37841[(2)] = null);

(statearr_36115_37841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (3))){
var inst_36092 = (state_36101[(2)]);
var state_36101__$1 = state_36101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36101__$1,inst_36092);
} else {
if((state_val_36102 === (12))){
var inst_36079 = (state_36101[(8)]);
var inst_36079__$1 = (state_36101[(2)]);
var inst_36080 = cljs.core.some(cljs.core.nil_QMARK_,inst_36079__$1);
var state_36101__$1 = (function (){var statearr_36122 = state_36101;
(statearr_36122[(8)] = inst_36079__$1);

return statearr_36122;
})();
if(cljs.core.truth_(inst_36080)){
var statearr_36125_37849 = state_36101__$1;
(statearr_36125_37849[(1)] = (13));

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
var inst_36079 = (state_36101[(8)]);
var inst_36085 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36079);
var state_36101__$1 = state_36101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36101__$1,(16),out,inst_36085);
} else {
if((state_val_36102 === (16))){
var inst_36087 = (state_36101[(2)]);
var state_36101__$1 = (function (){var statearr_36133 = state_36101;
(statearr_36133[(12)] = inst_36087);

return statearr_36133;
})();
var statearr_36134_37866 = state_36101__$1;
(statearr_36134_37866[(2)] = null);

(statearr_36134_37866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (10))){
var inst_36060 = (state_36101[(2)]);
var inst_36061 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36101__$1 = (function (){var statearr_36135 = state_36101;
(statearr_36135[(13)] = inst_36060);

return statearr_36135;
})();
var statearr_36136_37870 = state_36101__$1;
(statearr_36136_37870[(2)] = inst_36061);


cljs.core.async.impl.ioc_helpers.process_exception(state_36101__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36102 === (8))){
var inst_36075 = (state_36101[(2)]);
var state_36101__$1 = state_36101;
var statearr_36137_37874 = state_36101__$1;
(statearr_36137_37874[(2)] = inst_36075);

(statearr_36137_37874[(1)] = (5));


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
var statearr_36142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36142[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36142[(1)] = (1));

return statearr_36142;
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
}catch (e36146){if((e36146 instanceof Object)){
var ex__34210__auto__ = e36146;
var statearr_36147_37876 = state_36101;
(statearr_36147_37876[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37882 = state_36101;
state_36101 = G__37882;
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
var state__34276__auto__ = (function (){var statearr_36148 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36148[(6)] = c__34274__auto___37824);

return statearr_36148;
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
var G__36166 = arguments.length;
switch (G__36166) {
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
var c__34274__auto___37890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36213){
var state_val_36214 = (state_36213[(1)]);
if((state_val_36214 === (7))){
var inst_36182 = (state_36213[(7)]);
var inst_36183 = (state_36213[(8)]);
var inst_36182__$1 = (state_36213[(2)]);
var inst_36183__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36182__$1,(0),null);
var inst_36184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36182__$1,(1),null);
var inst_36187 = (inst_36183__$1 == null);
var state_36213__$1 = (function (){var statearr_36216 = state_36213;
(statearr_36216[(7)] = inst_36182__$1);

(statearr_36216[(9)] = inst_36184);

(statearr_36216[(8)] = inst_36183__$1);

return statearr_36216;
})();
if(cljs.core.truth_(inst_36187)){
var statearr_36218_37898 = state_36213__$1;
(statearr_36218_37898[(1)] = (8));

} else {
var statearr_36219_37900 = state_36213__$1;
(statearr_36219_37900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (1))){
var inst_36171 = cljs.core.vec(chs);
var inst_36172 = inst_36171;
var state_36213__$1 = (function (){var statearr_36221 = state_36213;
(statearr_36221[(10)] = inst_36172);

return statearr_36221;
})();
var statearr_36222_37902 = state_36213__$1;
(statearr_36222_37902[(2)] = null);

(statearr_36222_37902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (4))){
var inst_36172 = (state_36213[(10)]);
var state_36213__$1 = state_36213;
return cljs.core.async.ioc_alts_BANG_(state_36213__$1,(7),inst_36172);
} else {
if((state_val_36214 === (6))){
var inst_36209 = (state_36213[(2)]);
var state_36213__$1 = state_36213;
var statearr_36225_37910 = state_36213__$1;
(statearr_36225_37910[(2)] = inst_36209);

(statearr_36225_37910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (3))){
var inst_36211 = (state_36213[(2)]);
var state_36213__$1 = state_36213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36213__$1,inst_36211);
} else {
if((state_val_36214 === (2))){
var inst_36172 = (state_36213[(10)]);
var inst_36174 = cljs.core.count(inst_36172);
var inst_36175 = (inst_36174 > (0));
var state_36213__$1 = state_36213;
if(cljs.core.truth_(inst_36175)){
var statearr_36229_37915 = state_36213__$1;
(statearr_36229_37915[(1)] = (4));

} else {
var statearr_36230_37916 = state_36213__$1;
(statearr_36230_37916[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (11))){
var inst_36172 = (state_36213[(10)]);
var inst_36202 = (state_36213[(2)]);
var tmp36226 = inst_36172;
var inst_36172__$1 = tmp36226;
var state_36213__$1 = (function (){var statearr_36231 = state_36213;
(statearr_36231[(10)] = inst_36172__$1);

(statearr_36231[(11)] = inst_36202);

return statearr_36231;
})();
var statearr_36232_37921 = state_36213__$1;
(statearr_36232_37921[(2)] = null);

(statearr_36232_37921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (9))){
var inst_36183 = (state_36213[(8)]);
var state_36213__$1 = state_36213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36213__$1,(11),out,inst_36183);
} else {
if((state_val_36214 === (5))){
var inst_36207 = cljs.core.async.close_BANG_(out);
var state_36213__$1 = state_36213;
var statearr_36236_37922 = state_36213__$1;
(statearr_36236_37922[(2)] = inst_36207);

(statearr_36236_37922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (10))){
var inst_36205 = (state_36213[(2)]);
var state_36213__$1 = state_36213;
var statearr_36239_37924 = state_36213__$1;
(statearr_36239_37924[(2)] = inst_36205);

(statearr_36239_37924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36214 === (8))){
var inst_36182 = (state_36213[(7)]);
var inst_36172 = (state_36213[(10)]);
var inst_36184 = (state_36213[(9)]);
var inst_36183 = (state_36213[(8)]);
var inst_36196 = (function (){var cs = inst_36172;
var vec__36178 = inst_36182;
var v = inst_36183;
var c = inst_36184;
return (function (p1__36149_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36149_SHARP_);
});
})();
var inst_36198 = cljs.core.filterv(inst_36196,inst_36172);
var inst_36172__$1 = inst_36198;
var state_36213__$1 = (function (){var statearr_36241 = state_36213;
(statearr_36241[(10)] = inst_36172__$1);

return statearr_36241;
})();
var statearr_36243_37928 = state_36213__$1;
(statearr_36243_37928[(2)] = null);

(statearr_36243_37928[(1)] = (2));


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
var statearr_36251 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36251[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36251[(1)] = (1));

return statearr_36251;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36213){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36213);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36252){if((e36252 instanceof Object)){
var ex__34210__auto__ = e36252;
var statearr_36253_37932 = state_36213;
(statearr_36253_37932[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37937 = state_36213;
state_36213 = G__37937;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36255 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36255[(6)] = c__34274__auto___37890);

return statearr_36255;
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
var G__36262 = arguments.length;
switch (G__36262) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36291){
var state_val_36292 = (state_36291[(1)]);
if((state_val_36292 === (7))){
var inst_36271 = (state_36291[(7)]);
var inst_36271__$1 = (state_36291[(2)]);
var inst_36272 = (inst_36271__$1 == null);
var inst_36273 = cljs.core.not(inst_36272);
var state_36291__$1 = (function (){var statearr_36295 = state_36291;
(statearr_36295[(7)] = inst_36271__$1);

return statearr_36295;
})();
if(inst_36273){
var statearr_36297_37946 = state_36291__$1;
(statearr_36297_37946[(1)] = (8));

} else {
var statearr_36302_37947 = state_36291__$1;
(statearr_36302_37947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (1))){
var inst_36264 = (0);
var state_36291__$1 = (function (){var statearr_36306 = state_36291;
(statearr_36306[(8)] = inst_36264);

return statearr_36306;
})();
var statearr_36307_37952 = state_36291__$1;
(statearr_36307_37952[(2)] = null);

(statearr_36307_37952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (4))){
var state_36291__$1 = state_36291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36291__$1,(7),ch);
} else {
if((state_val_36292 === (6))){
var inst_36285 = (state_36291[(2)]);
var state_36291__$1 = state_36291;
var statearr_36308_37954 = state_36291__$1;
(statearr_36308_37954[(2)] = inst_36285);

(statearr_36308_37954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (3))){
var inst_36287 = (state_36291[(2)]);
var inst_36288 = cljs.core.async.close_BANG_(out);
var state_36291__$1 = (function (){var statearr_36310 = state_36291;
(statearr_36310[(9)] = inst_36287);

return statearr_36310;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36291__$1,inst_36288);
} else {
if((state_val_36292 === (2))){
var inst_36264 = (state_36291[(8)]);
var inst_36266 = (inst_36264 < n);
var state_36291__$1 = state_36291;
if(cljs.core.truth_(inst_36266)){
var statearr_36312_37961 = state_36291__$1;
(statearr_36312_37961[(1)] = (4));

} else {
var statearr_36314_37964 = state_36291__$1;
(statearr_36314_37964[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (11))){
var inst_36264 = (state_36291[(8)]);
var inst_36276 = (state_36291[(2)]);
var inst_36278 = (inst_36264 + (1));
var inst_36264__$1 = inst_36278;
var state_36291__$1 = (function (){var statearr_36316 = state_36291;
(statearr_36316[(8)] = inst_36264__$1);

(statearr_36316[(10)] = inst_36276);

return statearr_36316;
})();
var statearr_36317_37970 = state_36291__$1;
(statearr_36317_37970[(2)] = null);

(statearr_36317_37970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (9))){
var state_36291__$1 = state_36291;
var statearr_36319_37971 = state_36291__$1;
(statearr_36319_37971[(2)] = null);

(statearr_36319_37971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (5))){
var state_36291__$1 = state_36291;
var statearr_36320_37974 = state_36291__$1;
(statearr_36320_37974[(2)] = null);

(statearr_36320_37974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (10))){
var inst_36282 = (state_36291[(2)]);
var state_36291__$1 = state_36291;
var statearr_36322_37977 = state_36291__$1;
(statearr_36322_37977[(2)] = inst_36282);

(statearr_36322_37977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36292 === (8))){
var inst_36271 = (state_36291[(7)]);
var state_36291__$1 = state_36291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36291__$1,(11),out,inst_36271);
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
var statearr_36324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36324[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36324[(1)] = (1));

return statearr_36324;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36291){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36291);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36325){if((e36325 instanceof Object)){
var ex__34210__auto__ = e36325;
var statearr_36326_37982 = state_36291;
(statearr_36326_37982[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37984 = state_36291;
state_36291 = G__37984;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36329 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36329[(6)] = c__34274__auto___37944);

return statearr_36329;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36333 = (function (f,ch,meta36334){
this.f = f;
this.ch = ch;
this.meta36334 = meta36334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36335,meta36334__$1){
var self__ = this;
var _36335__$1 = this;
return (new cljs.core.async.t_cljs$core$async36333(self__.f,self__.ch,meta36334__$1));
}));

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36335){
var self__ = this;
var _36335__$1 = this;
return self__.meta36334;
}));

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36346 = (function (f,ch,meta36334,_,fn1,meta36347){
this.f = f;
this.ch = ch;
this.meta36334 = meta36334;
this._ = _;
this.fn1 = fn1;
this.meta36347 = meta36347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36348,meta36347__$1){
var self__ = this;
var _36348__$1 = this;
return (new cljs.core.async.t_cljs$core$async36346(self__.f,self__.ch,self__.meta36334,self__._,self__.fn1,meta36347__$1));
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36348){
var self__ = this;
var _36348__$1 = this;
return self__.meta36347;
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36330_SHARP_){
var G__36353 = (((p1__36330_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36330_SHARP_) : self__.f.call(null,p1__36330_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36353) : f1.call(null,G__36353));
});
}));

(cljs.core.async.t_cljs$core$async36346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36334","meta36334",-466817117,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36333","cljs.core.async/t_cljs$core$async36333",1860255262,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36347","meta36347",800743982,null)], null);
}));

(cljs.core.async.t_cljs$core$async36346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36346");

(cljs.core.async.t_cljs$core$async36346.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36346.
 */
cljs.core.async.__GT_t_cljs$core$async36346 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36346(f__$1,ch__$1,meta36334__$1,___$2,fn1__$1,meta36347){
return (new cljs.core.async.t_cljs$core$async36346(f__$1,ch__$1,meta36334__$1,___$2,fn1__$1,meta36347));
});

}

return (new cljs.core.async.t_cljs$core$async36346(self__.f,self__.ch,self__.meta36334,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36358 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36358) : self__.f.call(null,G__36358));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36333.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36334","meta36334",-466817117,null)], null);
}));

(cljs.core.async.t_cljs$core$async36333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36333");

(cljs.core.async.t_cljs$core$async36333.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36333.
 */
cljs.core.async.__GT_t_cljs$core$async36333 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36333(f__$1,ch__$1,meta36334){
return (new cljs.core.async.t_cljs$core$async36333(f__$1,ch__$1,meta36334));
});

}

return (new cljs.core.async.t_cljs$core$async36333(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36367 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36367 = (function (f,ch,meta36368){
this.f = f;
this.ch = ch;
this.meta36368 = meta36368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36369,meta36368__$1){
var self__ = this;
var _36369__$1 = this;
return (new cljs.core.async.t_cljs$core$async36367(self__.f,self__.ch,meta36368__$1));
}));

(cljs.core.async.t_cljs$core$async36367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36369){
var self__ = this;
var _36369__$1 = this;
return self__.meta36368;
}));

(cljs.core.async.t_cljs$core$async36367.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36367.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36367.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36367.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36367.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36367.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36368","meta36368",-2102499830,null)], null);
}));

(cljs.core.async.t_cljs$core$async36367.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36367");

(cljs.core.async.t_cljs$core$async36367.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36367");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36367.
 */
cljs.core.async.__GT_t_cljs$core$async36367 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36367(f__$1,ch__$1,meta36368){
return (new cljs.core.async.t_cljs$core$async36367(f__$1,ch__$1,meta36368));
});

}

return (new cljs.core.async.t_cljs$core$async36367(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36381 = (function (p,ch,meta36382){
this.p = p;
this.ch = ch;
this.meta36382 = meta36382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36383,meta36382__$1){
var self__ = this;
var _36383__$1 = this;
return (new cljs.core.async.t_cljs$core$async36381(self__.p,self__.ch,meta36382__$1));
}));

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36383){
var self__ = this;
var _36383__$1 = this;
return self__.meta36382;
}));

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36381.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36382","meta36382",1356888983,null)], null);
}));

(cljs.core.async.t_cljs$core$async36381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36381");

(cljs.core.async.t_cljs$core$async36381.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36381.
 */
cljs.core.async.__GT_t_cljs$core$async36381 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36381(p__$1,ch__$1,meta36382){
return (new cljs.core.async.t_cljs$core$async36381(p__$1,ch__$1,meta36382));
});

}

return (new cljs.core.async.t_cljs$core$async36381(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36409 = arguments.length;
switch (G__36409) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36446){
var state_val_36447 = (state_36446[(1)]);
if((state_val_36447 === (7))){
var inst_36441 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
var statearr_36452_38017 = state_36446__$1;
(statearr_36452_38017[(2)] = inst_36441);

(statearr_36452_38017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (1))){
var state_36446__$1 = state_36446;
var statearr_36453_38018 = state_36446__$1;
(statearr_36453_38018[(2)] = null);

(statearr_36453_38018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (4))){
var inst_36421 = (state_36446[(7)]);
var inst_36421__$1 = (state_36446[(2)]);
var inst_36422 = (inst_36421__$1 == null);
var state_36446__$1 = (function (){var statearr_36454 = state_36446;
(statearr_36454[(7)] = inst_36421__$1);

return statearr_36454;
})();
if(cljs.core.truth_(inst_36422)){
var statearr_36455_38019 = state_36446__$1;
(statearr_36455_38019[(1)] = (5));

} else {
var statearr_36456_38020 = state_36446__$1;
(statearr_36456_38020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (6))){
var inst_36421 = (state_36446[(7)]);
var inst_36426 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36421) : p.call(null,inst_36421));
var state_36446__$1 = state_36446;
if(cljs.core.truth_(inst_36426)){
var statearr_36458_38025 = state_36446__$1;
(statearr_36458_38025[(1)] = (8));

} else {
var statearr_36459_38026 = state_36446__$1;
(statearr_36459_38026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (3))){
var inst_36443 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36446__$1,inst_36443);
} else {
if((state_val_36447 === (2))){
var state_36446__$1 = state_36446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36446__$1,(4),ch);
} else {
if((state_val_36447 === (11))){
var inst_36434 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
var statearr_36461_38028 = state_36446__$1;
(statearr_36461_38028[(2)] = inst_36434);

(statearr_36461_38028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (9))){
var state_36446__$1 = state_36446;
var statearr_36462_38031 = state_36446__$1;
(statearr_36462_38031[(2)] = null);

(statearr_36462_38031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (5))){
var inst_36424 = cljs.core.async.close_BANG_(out);
var state_36446__$1 = state_36446;
var statearr_36468_38032 = state_36446__$1;
(statearr_36468_38032[(2)] = inst_36424);

(statearr_36468_38032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (10))){
var inst_36437 = (state_36446[(2)]);
var state_36446__$1 = (function (){var statearr_36470 = state_36446;
(statearr_36470[(8)] = inst_36437);

return statearr_36470;
})();
var statearr_36471_38033 = state_36446__$1;
(statearr_36471_38033[(2)] = null);

(statearr_36471_38033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (8))){
var inst_36421 = (state_36446[(7)]);
var state_36446__$1 = state_36446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36446__$1,(11),out,inst_36421);
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
var statearr_36472 = [null,null,null,null,null,null,null,null,null];
(statearr_36472[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36472[(1)] = (1));

return statearr_36472;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36446){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36446);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36474){if((e36474 instanceof Object)){
var ex__34210__auto__ = e36474;
var statearr_36475_38035 = state_36446;
(statearr_36475_38035[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36474;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38038 = state_36446;
state_36446 = G__38038;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36477 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36477[(6)] = c__34274__auto___38016);

return statearr_36477;
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
var G__36480 = arguments.length;
switch (G__36480) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36550){
var state_val_36551 = (state_36550[(1)]);
if((state_val_36551 === (7))){
var inst_36545 = (state_36550[(2)]);
var state_36550__$1 = state_36550;
var statearr_36554_38044 = state_36550__$1;
(statearr_36554_38044[(2)] = inst_36545);

(statearr_36554_38044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (20))){
var inst_36514 = (state_36550[(7)]);
var inst_36526 = (state_36550[(2)]);
var inst_36527 = cljs.core.next(inst_36514);
var inst_36497 = inst_36527;
var inst_36498 = null;
var inst_36499 = (0);
var inst_36500 = (0);
var state_36550__$1 = (function (){var statearr_36555 = state_36550;
(statearr_36555[(8)] = inst_36499);

(statearr_36555[(9)] = inst_36526);

(statearr_36555[(10)] = inst_36500);

(statearr_36555[(11)] = inst_36497);

(statearr_36555[(12)] = inst_36498);

return statearr_36555;
})();
var statearr_36557_38050 = state_36550__$1;
(statearr_36557_38050[(2)] = null);

(statearr_36557_38050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (1))){
var state_36550__$1 = state_36550;
var statearr_36558_38051 = state_36550__$1;
(statearr_36558_38051[(2)] = null);

(statearr_36558_38051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (4))){
var inst_36485 = (state_36550[(13)]);
var inst_36485__$1 = (state_36550[(2)]);
var inst_36486 = (inst_36485__$1 == null);
var state_36550__$1 = (function (){var statearr_36560 = state_36550;
(statearr_36560[(13)] = inst_36485__$1);

return statearr_36560;
})();
if(cljs.core.truth_(inst_36486)){
var statearr_36561_38052 = state_36550__$1;
(statearr_36561_38052[(1)] = (5));

} else {
var statearr_36562_38053 = state_36550__$1;
(statearr_36562_38053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (15))){
var state_36550__$1 = state_36550;
var statearr_36566_38054 = state_36550__$1;
(statearr_36566_38054[(2)] = null);

(statearr_36566_38054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (21))){
var state_36550__$1 = state_36550;
var statearr_36568_38055 = state_36550__$1;
(statearr_36568_38055[(2)] = null);

(statearr_36568_38055[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (13))){
var inst_36499 = (state_36550[(8)]);
var inst_36500 = (state_36550[(10)]);
var inst_36497 = (state_36550[(11)]);
var inst_36498 = (state_36550[(12)]);
var inst_36510 = (state_36550[(2)]);
var inst_36511 = (inst_36500 + (1));
var tmp36563 = inst_36499;
var tmp36564 = inst_36497;
var tmp36565 = inst_36498;
var inst_36497__$1 = tmp36564;
var inst_36498__$1 = tmp36565;
var inst_36499__$1 = tmp36563;
var inst_36500__$1 = inst_36511;
var state_36550__$1 = (function (){var statearr_36569 = state_36550;
(statearr_36569[(8)] = inst_36499__$1);

(statearr_36569[(14)] = inst_36510);

(statearr_36569[(10)] = inst_36500__$1);

(statearr_36569[(11)] = inst_36497__$1);

(statearr_36569[(12)] = inst_36498__$1);

return statearr_36569;
})();
var statearr_36571_38061 = state_36550__$1;
(statearr_36571_38061[(2)] = null);

(statearr_36571_38061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (22))){
var state_36550__$1 = state_36550;
var statearr_36572_38062 = state_36550__$1;
(statearr_36572_38062[(2)] = null);

(statearr_36572_38062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (6))){
var inst_36485 = (state_36550[(13)]);
var inst_36495 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36485) : f.call(null,inst_36485));
var inst_36496 = cljs.core.seq(inst_36495);
var inst_36497 = inst_36496;
var inst_36498 = null;
var inst_36499 = (0);
var inst_36500 = (0);
var state_36550__$1 = (function (){var statearr_36574 = state_36550;
(statearr_36574[(8)] = inst_36499);

(statearr_36574[(10)] = inst_36500);

(statearr_36574[(11)] = inst_36497);

(statearr_36574[(12)] = inst_36498);

return statearr_36574;
})();
var statearr_36575_38064 = state_36550__$1;
(statearr_36575_38064[(2)] = null);

(statearr_36575_38064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (17))){
var inst_36514 = (state_36550[(7)]);
var inst_36518 = cljs.core.chunk_first(inst_36514);
var inst_36519 = cljs.core.chunk_rest(inst_36514);
var inst_36520 = cljs.core.count(inst_36518);
var inst_36497 = inst_36519;
var inst_36498 = inst_36518;
var inst_36499 = inst_36520;
var inst_36500 = (0);
var state_36550__$1 = (function (){var statearr_36577 = state_36550;
(statearr_36577[(8)] = inst_36499);

(statearr_36577[(10)] = inst_36500);

(statearr_36577[(11)] = inst_36497);

(statearr_36577[(12)] = inst_36498);

return statearr_36577;
})();
var statearr_36578_38067 = state_36550__$1;
(statearr_36578_38067[(2)] = null);

(statearr_36578_38067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (3))){
var inst_36547 = (state_36550[(2)]);
var state_36550__$1 = state_36550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36550__$1,inst_36547);
} else {
if((state_val_36551 === (12))){
var inst_36535 = (state_36550[(2)]);
var state_36550__$1 = state_36550;
var statearr_36580_38068 = state_36550__$1;
(statearr_36580_38068[(2)] = inst_36535);

(statearr_36580_38068[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (2))){
var state_36550__$1 = state_36550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36550__$1,(4),in$);
} else {
if((state_val_36551 === (23))){
var inst_36543 = (state_36550[(2)]);
var state_36550__$1 = state_36550;
var statearr_36581_38071 = state_36550__$1;
(statearr_36581_38071[(2)] = inst_36543);

(statearr_36581_38071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (19))){
var inst_36530 = (state_36550[(2)]);
var state_36550__$1 = state_36550;
var statearr_36582_38072 = state_36550__$1;
(statearr_36582_38072[(2)] = inst_36530);

(statearr_36582_38072[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (11))){
var inst_36514 = (state_36550[(7)]);
var inst_36497 = (state_36550[(11)]);
var inst_36514__$1 = cljs.core.seq(inst_36497);
var state_36550__$1 = (function (){var statearr_36584 = state_36550;
(statearr_36584[(7)] = inst_36514__$1);

return statearr_36584;
})();
if(inst_36514__$1){
var statearr_36585_38075 = state_36550__$1;
(statearr_36585_38075[(1)] = (14));

} else {
var statearr_36586_38076 = state_36550__$1;
(statearr_36586_38076[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (9))){
var inst_36537 = (state_36550[(2)]);
var inst_36538 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36550__$1 = (function (){var statearr_36587 = state_36550;
(statearr_36587[(15)] = inst_36537);

return statearr_36587;
})();
if(cljs.core.truth_(inst_36538)){
var statearr_36589_38077 = state_36550__$1;
(statearr_36589_38077[(1)] = (21));

} else {
var statearr_36590_38078 = state_36550__$1;
(statearr_36590_38078[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (5))){
var inst_36489 = cljs.core.async.close_BANG_(out);
var state_36550__$1 = state_36550;
var statearr_36591_38079 = state_36550__$1;
(statearr_36591_38079[(2)] = inst_36489);

(statearr_36591_38079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (14))){
var inst_36514 = (state_36550[(7)]);
var inst_36516 = cljs.core.chunked_seq_QMARK_(inst_36514);
var state_36550__$1 = state_36550;
if(inst_36516){
var statearr_36593_38080 = state_36550__$1;
(statearr_36593_38080[(1)] = (17));

} else {
var statearr_36594_38081 = state_36550__$1;
(statearr_36594_38081[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (16))){
var inst_36533 = (state_36550[(2)]);
var state_36550__$1 = state_36550;
var statearr_36595_38083 = state_36550__$1;
(statearr_36595_38083[(2)] = inst_36533);

(statearr_36595_38083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (10))){
var inst_36500 = (state_36550[(10)]);
var inst_36498 = (state_36550[(12)]);
var inst_36508 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36498,inst_36500);
var state_36550__$1 = state_36550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36550__$1,(13),out,inst_36508);
} else {
if((state_val_36551 === (18))){
var inst_36514 = (state_36550[(7)]);
var inst_36524 = cljs.core.first(inst_36514);
var state_36550__$1 = state_36550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36550__$1,(20),out,inst_36524);
} else {
if((state_val_36551 === (8))){
var inst_36499 = (state_36550[(8)]);
var inst_36500 = (state_36550[(10)]);
var inst_36504 = (inst_36500 < inst_36499);
var inst_36505 = inst_36504;
var state_36550__$1 = state_36550;
if(cljs.core.truth_(inst_36505)){
var statearr_36597_38084 = state_36550__$1;
(statearr_36597_38084[(1)] = (10));

} else {
var statearr_36598_38085 = state_36550__$1;
(statearr_36598_38085[(1)] = (11));

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
var statearr_36600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36600[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36600[(1)] = (1));

return statearr_36600;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36550){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36550);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36601){if((e36601 instanceof Object)){
var ex__34210__auto__ = e36601;
var statearr_36603_38087 = state_36550;
(statearr_36603_38087[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38088 = state_36550;
state_36550 = G__38088;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36550){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36604 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36604[(6)] = c__34274__auto__);

return statearr_36604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36607 = arguments.length;
switch (G__36607) {
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
var G__36611 = arguments.length;
switch (G__36611) {
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
var G__36615 = arguments.length;
switch (G__36615) {
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
var c__34274__auto___38095 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36641){
var state_val_36642 = (state_36641[(1)]);
if((state_val_36642 === (7))){
var inst_36636 = (state_36641[(2)]);
var state_36641__$1 = state_36641;
var statearr_36644_38096 = state_36641__$1;
(statearr_36644_38096[(2)] = inst_36636);

(statearr_36644_38096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36642 === (1))){
var inst_36618 = null;
var state_36641__$1 = (function (){var statearr_36646 = state_36641;
(statearr_36646[(7)] = inst_36618);

return statearr_36646;
})();
var statearr_36647_38097 = state_36641__$1;
(statearr_36647_38097[(2)] = null);

(statearr_36647_38097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36642 === (4))){
var inst_36621 = (state_36641[(8)]);
var inst_36621__$1 = (state_36641[(2)]);
var inst_36622 = (inst_36621__$1 == null);
var inst_36623 = cljs.core.not(inst_36622);
var state_36641__$1 = (function (){var statearr_36649 = state_36641;
(statearr_36649[(8)] = inst_36621__$1);

return statearr_36649;
})();
if(inst_36623){
var statearr_36650_38101 = state_36641__$1;
(statearr_36650_38101[(1)] = (5));

} else {
var statearr_36651_38102 = state_36641__$1;
(statearr_36651_38102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36642 === (6))){
var state_36641__$1 = state_36641;
var statearr_36652_38103 = state_36641__$1;
(statearr_36652_38103[(2)] = null);

(statearr_36652_38103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36642 === (3))){
var inst_36638 = (state_36641[(2)]);
var inst_36639 = cljs.core.async.close_BANG_(out);
var state_36641__$1 = (function (){var statearr_36654 = state_36641;
(statearr_36654[(9)] = inst_36638);

return statearr_36654;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36641__$1,inst_36639);
} else {
if((state_val_36642 === (2))){
var state_36641__$1 = state_36641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36641__$1,(4),ch);
} else {
if((state_val_36642 === (11))){
var inst_36621 = (state_36641[(8)]);
var inst_36630 = (state_36641[(2)]);
var inst_36618 = inst_36621;
var state_36641__$1 = (function (){var statearr_36655 = state_36641;
(statearr_36655[(10)] = inst_36630);

(statearr_36655[(7)] = inst_36618);

return statearr_36655;
})();
var statearr_36656_38106 = state_36641__$1;
(statearr_36656_38106[(2)] = null);

(statearr_36656_38106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36642 === (9))){
var inst_36621 = (state_36641[(8)]);
var state_36641__$1 = state_36641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36641__$1,(11),out,inst_36621);
} else {
if((state_val_36642 === (5))){
var inst_36621 = (state_36641[(8)]);
var inst_36618 = (state_36641[(7)]);
var inst_36625 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36621,inst_36618);
var state_36641__$1 = state_36641;
if(inst_36625){
var statearr_36659_38108 = state_36641__$1;
(statearr_36659_38108[(1)] = (8));

} else {
var statearr_36660_38109 = state_36641__$1;
(statearr_36660_38109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36642 === (10))){
var inst_36633 = (state_36641[(2)]);
var state_36641__$1 = state_36641;
var statearr_36662_38110 = state_36641__$1;
(statearr_36662_38110[(2)] = inst_36633);

(statearr_36662_38110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36642 === (8))){
var inst_36618 = (state_36641[(7)]);
var tmp36658 = inst_36618;
var inst_36618__$1 = tmp36658;
var state_36641__$1 = (function (){var statearr_36663 = state_36641;
(statearr_36663[(7)] = inst_36618__$1);

return statearr_36663;
})();
var statearr_36664_38113 = state_36641__$1;
(statearr_36664_38113[(2)] = null);

(statearr_36664_38113[(1)] = (2));


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
var statearr_36666 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36666[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36666[(1)] = (1));

return statearr_36666;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36641){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36641);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36667){if((e36667 instanceof Object)){
var ex__34210__auto__ = e36667;
var statearr_36668_38115 = state_36641;
(statearr_36668_38115[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38116 = state_36641;
state_36641 = G__38116;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36670 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36670[(6)] = c__34274__auto___38095);

return statearr_36670;
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
var G__36673 = arguments.length;
switch (G__36673) {
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
var c__34274__auto___38121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36714){
var state_val_36715 = (state_36714[(1)]);
if((state_val_36715 === (7))){
var inst_36710 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
var statearr_36717_38122 = state_36714__$1;
(statearr_36717_38122[(2)] = inst_36710);

(statearr_36717_38122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (1))){
var inst_36676 = (new Array(n));
var inst_36677 = inst_36676;
var inst_36678 = (0);
var state_36714__$1 = (function (){var statearr_36718 = state_36714;
(statearr_36718[(7)] = inst_36677);

(statearr_36718[(8)] = inst_36678);

return statearr_36718;
})();
var statearr_36720_38125 = state_36714__$1;
(statearr_36720_38125[(2)] = null);

(statearr_36720_38125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (4))){
var inst_36681 = (state_36714[(9)]);
var inst_36681__$1 = (state_36714[(2)]);
var inst_36682 = (inst_36681__$1 == null);
var inst_36683 = cljs.core.not(inst_36682);
var state_36714__$1 = (function (){var statearr_36721 = state_36714;
(statearr_36721[(9)] = inst_36681__$1);

return statearr_36721;
})();
if(inst_36683){
var statearr_36722_38127 = state_36714__$1;
(statearr_36722_38127[(1)] = (5));

} else {
var statearr_36723_38128 = state_36714__$1;
(statearr_36723_38128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (15))){
var inst_36704 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
var statearr_36725_38129 = state_36714__$1;
(statearr_36725_38129[(2)] = inst_36704);

(statearr_36725_38129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (13))){
var state_36714__$1 = state_36714;
var statearr_36726_38130 = state_36714__$1;
(statearr_36726_38130[(2)] = null);

(statearr_36726_38130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (6))){
var inst_36678 = (state_36714[(8)]);
var inst_36700 = (inst_36678 > (0));
var state_36714__$1 = state_36714;
if(cljs.core.truth_(inst_36700)){
var statearr_36728_38132 = state_36714__$1;
(statearr_36728_38132[(1)] = (12));

} else {
var statearr_36729_38133 = state_36714__$1;
(statearr_36729_38133[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (3))){
var inst_36712 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36714__$1,inst_36712);
} else {
if((state_val_36715 === (12))){
var inst_36677 = (state_36714[(7)]);
var inst_36702 = cljs.core.vec(inst_36677);
var state_36714__$1 = state_36714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36714__$1,(15),out,inst_36702);
} else {
if((state_val_36715 === (2))){
var state_36714__$1 = state_36714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36714__$1,(4),ch);
} else {
if((state_val_36715 === (11))){
var inst_36694 = (state_36714[(2)]);
var inst_36695 = (new Array(n));
var inst_36677 = inst_36695;
var inst_36678 = (0);
var state_36714__$1 = (function (){var statearr_36731 = state_36714;
(statearr_36731[(10)] = inst_36694);

(statearr_36731[(7)] = inst_36677);

(statearr_36731[(8)] = inst_36678);

return statearr_36731;
})();
var statearr_36732_38136 = state_36714__$1;
(statearr_36732_38136[(2)] = null);

(statearr_36732_38136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (9))){
var inst_36677 = (state_36714[(7)]);
var inst_36692 = cljs.core.vec(inst_36677);
var state_36714__$1 = state_36714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36714__$1,(11),out,inst_36692);
} else {
if((state_val_36715 === (5))){
var inst_36686 = (state_36714[(11)]);
var inst_36681 = (state_36714[(9)]);
var inst_36677 = (state_36714[(7)]);
var inst_36678 = (state_36714[(8)]);
var inst_36685 = (inst_36677[inst_36678] = inst_36681);
var inst_36686__$1 = (inst_36678 + (1));
var inst_36687 = (inst_36686__$1 < n);
var state_36714__$1 = (function (){var statearr_36734 = state_36714;
(statearr_36734[(11)] = inst_36686__$1);

(statearr_36734[(12)] = inst_36685);

return statearr_36734;
})();
if(cljs.core.truth_(inst_36687)){
var statearr_36736_38140 = state_36714__$1;
(statearr_36736_38140[(1)] = (8));

} else {
var statearr_36737_38141 = state_36714__$1;
(statearr_36737_38141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (14))){
var inst_36707 = (state_36714[(2)]);
var inst_36708 = cljs.core.async.close_BANG_(out);
var state_36714__$1 = (function (){var statearr_36739 = state_36714;
(statearr_36739[(13)] = inst_36707);

return statearr_36739;
})();
var statearr_36740_38142 = state_36714__$1;
(statearr_36740_38142[(2)] = inst_36708);

(statearr_36740_38142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (10))){
var inst_36698 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
var statearr_36742_38144 = state_36714__$1;
(statearr_36742_38144[(2)] = inst_36698);

(statearr_36742_38144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (8))){
var inst_36686 = (state_36714[(11)]);
var inst_36677 = (state_36714[(7)]);
var tmp36738 = inst_36677;
var inst_36677__$1 = tmp36738;
var inst_36678 = inst_36686;
var state_36714__$1 = (function (){var statearr_36743 = state_36714;
(statearr_36743[(7)] = inst_36677__$1);

(statearr_36743[(8)] = inst_36678);

return statearr_36743;
})();
var statearr_36744_38147 = state_36714__$1;
(statearr_36744_38147[(2)] = null);

(statearr_36744_38147[(1)] = (2));


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
var statearr_36746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36746[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36746[(1)] = (1));

return statearr_36746;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36714){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36714);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36751){if((e36751 instanceof Object)){
var ex__34210__auto__ = e36751;
var statearr_36752_38148 = state_36714;
(statearr_36752_38148[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38150 = state_36714;
state_36714 = G__38150;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36754 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36754[(6)] = c__34274__auto___38121);

return statearr_36754;
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
var G__36757 = arguments.length;
switch (G__36757) {
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
var c__34274__auto___38155 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36802){
var state_val_36803 = (state_36802[(1)]);
if((state_val_36803 === (7))){
var inst_36797 = (state_36802[(2)]);
var state_36802__$1 = state_36802;
var statearr_36805_38157 = state_36802__$1;
(statearr_36805_38157[(2)] = inst_36797);

(statearr_36805_38157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (1))){
var inst_36760 = [];
var inst_36761 = inst_36760;
var inst_36762 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36802__$1 = (function (){var statearr_36806 = state_36802;
(statearr_36806[(7)] = inst_36761);

(statearr_36806[(8)] = inst_36762);

return statearr_36806;
})();
var statearr_36807_38159 = state_36802__$1;
(statearr_36807_38159[(2)] = null);

(statearr_36807_38159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (4))){
var inst_36765 = (state_36802[(9)]);
var inst_36765__$1 = (state_36802[(2)]);
var inst_36766 = (inst_36765__$1 == null);
var inst_36767 = cljs.core.not(inst_36766);
var state_36802__$1 = (function (){var statearr_36809 = state_36802;
(statearr_36809[(9)] = inst_36765__$1);

return statearr_36809;
})();
if(inst_36767){
var statearr_36810_38161 = state_36802__$1;
(statearr_36810_38161[(1)] = (5));

} else {
var statearr_36811_38162 = state_36802__$1;
(statearr_36811_38162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (15))){
var inst_36791 = (state_36802[(2)]);
var state_36802__$1 = state_36802;
var statearr_36812_38164 = state_36802__$1;
(statearr_36812_38164[(2)] = inst_36791);

(statearr_36812_38164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (13))){
var state_36802__$1 = state_36802;
var statearr_36814_38166 = state_36802__$1;
(statearr_36814_38166[(2)] = null);

(statearr_36814_38166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (6))){
var inst_36761 = (state_36802[(7)]);
var inst_36786 = inst_36761.length;
var inst_36787 = (inst_36786 > (0));
var state_36802__$1 = state_36802;
if(cljs.core.truth_(inst_36787)){
var statearr_36815_38167 = state_36802__$1;
(statearr_36815_38167[(1)] = (12));

} else {
var statearr_36816_38168 = state_36802__$1;
(statearr_36816_38168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (3))){
var inst_36799 = (state_36802[(2)]);
var state_36802__$1 = state_36802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36802__$1,inst_36799);
} else {
if((state_val_36803 === (12))){
var inst_36761 = (state_36802[(7)]);
var inst_36789 = cljs.core.vec(inst_36761);
var state_36802__$1 = state_36802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36802__$1,(15),out,inst_36789);
} else {
if((state_val_36803 === (2))){
var state_36802__$1 = state_36802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36802__$1,(4),ch);
} else {
if((state_val_36803 === (11))){
var inst_36765 = (state_36802[(9)]);
var inst_36769 = (state_36802[(10)]);
var inst_36779 = (state_36802[(2)]);
var inst_36780 = [];
var inst_36781 = inst_36780.push(inst_36765);
var inst_36761 = inst_36780;
var inst_36762 = inst_36769;
var state_36802__$1 = (function (){var statearr_36819 = state_36802;
(statearr_36819[(11)] = inst_36779);

(statearr_36819[(7)] = inst_36761);

(statearr_36819[(12)] = inst_36781);

(statearr_36819[(8)] = inst_36762);

return statearr_36819;
})();
var statearr_36820_38172 = state_36802__$1;
(statearr_36820_38172[(2)] = null);

(statearr_36820_38172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (9))){
var inst_36761 = (state_36802[(7)]);
var inst_36777 = cljs.core.vec(inst_36761);
var state_36802__$1 = state_36802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36802__$1,(11),out,inst_36777);
} else {
if((state_val_36803 === (5))){
var inst_36765 = (state_36802[(9)]);
var inst_36769 = (state_36802[(10)]);
var inst_36762 = (state_36802[(8)]);
var inst_36769__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36765) : f.call(null,inst_36765));
var inst_36770 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36769__$1,inst_36762);
var inst_36771 = cljs.core.keyword_identical_QMARK_(inst_36762,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36772 = ((inst_36770) || (inst_36771));
var state_36802__$1 = (function (){var statearr_36822 = state_36802;
(statearr_36822[(10)] = inst_36769__$1);

return statearr_36822;
})();
if(cljs.core.truth_(inst_36772)){
var statearr_36823_38175 = state_36802__$1;
(statearr_36823_38175[(1)] = (8));

} else {
var statearr_36825_38177 = state_36802__$1;
(statearr_36825_38177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (14))){
var inst_36794 = (state_36802[(2)]);
var inst_36795 = cljs.core.async.close_BANG_(out);
var state_36802__$1 = (function (){var statearr_36827 = state_36802;
(statearr_36827[(13)] = inst_36794);

return statearr_36827;
})();
var statearr_36828_38178 = state_36802__$1;
(statearr_36828_38178[(2)] = inst_36795);

(statearr_36828_38178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (10))){
var inst_36784 = (state_36802[(2)]);
var state_36802__$1 = state_36802;
var statearr_36830_38179 = state_36802__$1;
(statearr_36830_38179[(2)] = inst_36784);

(statearr_36830_38179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36803 === (8))){
var inst_36765 = (state_36802[(9)]);
var inst_36761 = (state_36802[(7)]);
var inst_36769 = (state_36802[(10)]);
var inst_36774 = inst_36761.push(inst_36765);
var tmp36826 = inst_36761;
var inst_36761__$1 = tmp36826;
var inst_36762 = inst_36769;
var state_36802__$1 = (function (){var statearr_36831 = state_36802;
(statearr_36831[(14)] = inst_36774);

(statearr_36831[(7)] = inst_36761__$1);

(statearr_36831[(8)] = inst_36762);

return statearr_36831;
})();
var statearr_36832_38182 = state_36802__$1;
(statearr_36832_38182[(2)] = null);

(statearr_36832_38182[(1)] = (2));


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
var statearr_36834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36834[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36834[(1)] = (1));

return statearr_36834;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36802){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36802);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36835){if((e36835 instanceof Object)){
var ex__34210__auto__ = e36835;
var statearr_36837_38184 = state_36802;
(statearr_36837_38184[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36835;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38185 = state_36802;
state_36802 = G__38185;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36838 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36838[(6)] = c__34274__auto___38155);

return statearr_36838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
