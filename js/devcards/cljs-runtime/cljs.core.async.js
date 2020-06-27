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
var val_36779 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36779) : fn1.call(null,val_36779));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36779) : fn1.call(null,val_36779));
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
var n__4666__auto___36785 = n;
var x_36786 = (0);
while(true){
if((x_36786 < n__4666__auto___36785)){
(a[x_36786] = x_36786);

var G__36787 = (x_36786 + (1));
x_36786 = G__36787;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34351 = (function (flag,cb,meta34352){
this.flag = flag;
this.cb = cb;
this.meta34352 = meta34352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34353,meta34352__$1){
var self__ = this;
var _34353__$1 = this;
return (new cljs.core.async.t_cljs$core$async34351(self__.flag,self__.cb,meta34352__$1));
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34353){
var self__ = this;
var _34353__$1 = this;
return self__.meta34352;
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34352","meta34352",58586617,null)], null);
}));

(cljs.core.async.t_cljs$core$async34351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34351");

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34351.
 */
cljs.core.async.__GT_t_cljs$core$async34351 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34351(flag__$1,cb__$1,meta34352){
return (new cljs.core.async.t_cljs$core$async34351(flag__$1,cb__$1,meta34352));
});

}

return (new cljs.core.async.t_cljs$core$async34351(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34357_SHARP_){
var G__34364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34357_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34364) : fret.call(null,G__34364));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34358_SHARP_){
var G__34365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34358_SHARP_,port], null);
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
var G__36795 = (i + (1));
i = G__36795;
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
var len__4789__auto___36798 = arguments.length;
var i__4790__auto___36799 = (0);
while(true){
if((i__4790__auto___36799 < len__4789__auto___36798)){
args__4795__auto__.push((arguments[i__4790__auto___36799]));

var G__36800 = (i__4790__auto___36799 + (1));
i__4790__auto___36799 = G__36800;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34368){
var map__34369 = p__34368;
var map__34369__$1 = (((((!((map__34369 == null))))?(((((map__34369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34369):map__34369);
var opts = map__34369__$1;
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
var G__34378 = arguments.length;
switch (G__34378) {
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
var c__34274__auto___36805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34411){
var state_val_34412 = (state_34411[(1)]);
if((state_val_34412 === (7))){
var inst_34407 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34425_36807 = state_34411__$1;
(statearr_34425_36807[(2)] = inst_34407);

(statearr_34425_36807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (1))){
var state_34411__$1 = state_34411;
var statearr_34426_36808 = state_34411__$1;
(statearr_34426_36808[(2)] = null);

(statearr_34426_36808[(1)] = (2));


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
var statearr_34428_36810 = state_34411__$1;
(statearr_34428_36810[(1)] = (5));

} else {
var statearr_34429_36811 = state_34411__$1;
(statearr_34429_36811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (13))){
var state_34411__$1 = state_34411;
var statearr_34430_36812 = state_34411__$1;
(statearr_34430_36812[(2)] = null);

(statearr_34430_36812[(1)] = (14));


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
var statearr_34431_36814 = state_34411__$1;
(statearr_34431_36814[(2)] = null);

(statearr_34431_36814[(1)] = (2));


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
var statearr_34432_36815 = state_34411__$1;
(statearr_34432_36815[(1)] = (12));

} else {
var statearr_34433_36817 = state_34411__$1;
(statearr_34433_36817[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (9))){
var state_34411__$1 = state_34411;
var statearr_34434_36818 = state_34411__$1;
(statearr_34434_36818[(2)] = null);

(statearr_34434_36818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (5))){
var state_34411__$1 = state_34411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36819 = state_34411__$1;
(statearr_34435_36819[(1)] = (8));

} else {
var statearr_34436_36820 = state_34411__$1;
(statearr_34436_36820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (14))){
var inst_34405 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34437_36821 = state_34411__$1;
(statearr_34437_36821[(2)] = inst_34405);

(statearr_34437_36821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (10))){
var inst_34397 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34438_36823 = state_34411__$1;
(statearr_34438_36823[(2)] = inst_34397);

(statearr_34438_36823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34411__$1 = state_34411;
var statearr_34439_36824 = state_34411__$1;
(statearr_34439_36824[(2)] = inst_34394);

(statearr_34439_36824[(1)] = (10));


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
var statearr_34442_36826 = state_34411;
(statearr_34442_36826[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36828 = state_34411;
state_34411 = G__36828;
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
(statearr_34443[(6)] = c__34274__auto___36805);

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
var c__34274__auto___36831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
}catch (e34460){if((e34460 instanceof Object)){
var ex__34210__auto__ = e34460;
var statearr_34461_36833 = state_34452;
(statearr_34461_36833[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36835 = state_34452;
state_34452 = G__36835;
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
(statearr_34462[(6)] = c__34274__auto___36831);

return statearr_34462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34463){
var vec__34464 = p__34463;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34464,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34464,(1),null);
var job = vec__34464;
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
var n__4666__auto___36837 = n;
var __36838 = (0);
while(true){
if((__36838 < n__4666__auto___36837)){
var G__34468_36839 = type;
var G__34468_36840__$1 = (((G__34468_36839 instanceof cljs.core.Keyword))?G__34468_36839.fqn:null);
switch (G__34468_36840__$1) {
case "compute":
var c__34274__auto___36843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36838,c__34274__auto___36843,G__34468_36839,G__34468_36840__$1,n__4666__auto___36837,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36838,c__34274__auto___36843,G__34468_36839,G__34468_36840__$1,n__4666__auto___36837,jobs,results,process,async){
return (function (state_34481){
var state_val_34482 = (state_34481[(1)]);
if((state_val_34482 === (1))){
var state_34481__$1 = state_34481;
var statearr_34484_36844 = state_34481__$1;
(statearr_34484_36844[(2)] = null);

(statearr_34484_36844[(1)] = (2));


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
var statearr_34486_36846 = state_34481__$1;
(statearr_34486_36846[(1)] = (5));

} else {
var statearr_34487_36847 = state_34481__$1;
(statearr_34487_36847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (5))){
var state_34481__$1 = state_34481;
var statearr_34488_36849 = state_34481__$1;
(statearr_34488_36849[(2)] = null);

(statearr_34488_36849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (6))){
var state_34481__$1 = state_34481;
var statearr_34490_36850 = state_34481__$1;
(statearr_34490_36850[(2)] = null);

(statearr_34490_36850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34482 === (7))){
var inst_34477 = (state_34481[(2)]);
var state_34481__$1 = state_34481;
var statearr_34491_36851 = state_34481__$1;
(statearr_34491_36851[(2)] = inst_34477);

(statearr_34491_36851[(1)] = (3));


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
});})(__36838,c__34274__auto___36843,G__34468_36839,G__34468_36840__$1,n__4666__auto___36837,jobs,results,process,async))
;
return ((function (__36838,switch__34206__auto__,c__34274__auto___36843,G__34468_36839,G__34468_36840__$1,n__4666__auto___36837,jobs,results,process,async){
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
var statearr_34494_36854 = state_34481;
(statearr_34494_36854[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36855 = state_34481;
state_34481 = G__36855;
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
;})(__36838,switch__34206__auto__,c__34274__auto___36843,G__34468_36839,G__34468_36840__$1,n__4666__auto___36837,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34497 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34497[(6)] = c__34274__auto___36843);

return statearr_34497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36838,c__34274__auto___36843,G__34468_36839,G__34468_36840__$1,n__4666__auto___36837,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36838,c__34274__auto___36857,G__34468_36839,G__34468_36840__$1,n__4666__auto___36837,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36838,c__34274__auto___36857,G__34468_36839,G__34468_36840__$1,n__4666__auto___36837,jobs,results,process,async){
return (function (state_34515){
var state_val_34516 = (state_34515[(1)]);
if((state_val_34516 === (1))){
var state_34515__$1 = state_34515;
var statearr_34517_36859 = state_34515__$1;
(statearr_34517_36859[(2)] = null);

(statearr_34517_36859[(1)] = (2));


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
var inst_34503 = (state_34515[(2)]);
var inst_34506 = async(inst_34503);
var state_34515__$1 = state_34515;
if(cljs.core.truth_(inst_34506)){
var statearr_34518_36861 = state_34515__$1;
(statearr_34518_36861[(1)] = (5));

} else {
var statearr_34519_36862 = state_34515__$1;
(statearr_34519_36862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (5))){
var state_34515__$1 = state_34515;
var statearr_34521_36863 = state_34515__$1;
(statearr_34521_36863[(2)] = null);

(statearr_34521_36863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (6))){
var state_34515__$1 = state_34515;
var statearr_34522_36864 = state_34515__$1;
(statearr_34522_36864[(2)] = null);

(statearr_34522_36864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34516 === (7))){
var inst_34511 = (state_34515[(2)]);
var state_34515__$1 = state_34515;
var statearr_34523_36866 = state_34515__$1;
(statearr_34523_36866[(2)] = inst_34511);

(statearr_34523_36866[(1)] = (3));


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
});})(__36838,c__34274__auto___36857,G__34468_36839,G__34468_36840__$1,n__4666__auto___36837,jobs,results,process,async))
;
return ((function (__36838,switch__34206__auto__,c__34274__auto___36857,G__34468_36839,G__34468_36840__$1,n__4666__auto___36837,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34524 = [null,null,null,null,null,null,null];
(statearr_34524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34524[(1)] = (1));

return statearr_34524;
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
}catch (e34525){if((e34525 instanceof Object)){
var ex__34210__auto__ = e34525;
var statearr_34526_36868 = state_34515;
(statearr_34526_36868[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36869 = state_34515;
state_34515 = G__36869;
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
;})(__36838,switch__34206__auto__,c__34274__auto___36857,G__34468_36839,G__34468_36840__$1,n__4666__auto___36837,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34531 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34531[(6)] = c__34274__auto___36857);

return statearr_34531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36838,c__34274__auto___36857,G__34468_36839,G__34468_36840__$1,n__4666__auto___36837,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34468_36840__$1)].join('')));

}

var G__36871 = (__36838 + (1));
__36838 = G__36871;
continue;
} else {
}
break;
}

var c__34274__auto___36872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34552 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34561_36874 = state_34556__$1;
(statearr_34561_36874[(2)] = inst_34552);

(statearr_34561_36874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var state_34556__$1 = state_34556;
var statearr_34562_36875 = state_34556__$1;
(statearr_34562_36875[(2)] = null);

(statearr_34562_36875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (4))){
var inst_34534 = (state_34556[(7)]);
var inst_34534__$1 = (state_34556[(2)]);
var inst_34538 = (inst_34534__$1 == null);
var state_34556__$1 = (function (){var statearr_34563 = state_34556;
(statearr_34563[(7)] = inst_34534__$1);

return statearr_34563;
})();
if(cljs.core.truth_(inst_34538)){
var statearr_34564_36877 = state_34556__$1;
(statearr_34564_36877[(1)] = (5));

} else {
var statearr_34565_36878 = state_34556__$1;
(statearr_34565_36878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (6))){
var inst_34542 = (state_34556[(8)]);
var inst_34534 = (state_34556[(7)]);
var inst_34542__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34543 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34544 = [inst_34534,inst_34542__$1];
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
var statearr_34568_36881 = state_34556__$1;
(statearr_34568_36881[(2)] = null);

(statearr_34568_36881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(jobs);
var state_34556__$1 = state_34556;
var statearr_34569_36882 = state_34556__$1;
(statearr_34569_36882[(2)] = inst_34540);

(statearr_34569_36882[(1)] = (7));


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
var statearr_34573_36885 = state_34556;
(statearr_34573_36885[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36886 = state_34556;
state_34556 = G__36886;
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
(statearr_34574[(6)] = c__34274__auto___36872);

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
var statearr_34614_36888 = state_34612__$1;
(statearr_34614_36888[(2)] = inst_34608);

(statearr_34614_36888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36889 = state_34612__$1;
(statearr_34615_36889[(2)] = null);

(statearr_34615_36889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36891 = state_34612__$1;
(statearr_34616_36891[(2)] = null);

(statearr_34616_36891[(1)] = (2));


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
var statearr_34618_36892 = state_34612__$1;
(statearr_34618_36892[(1)] = (5));

} else {
var statearr_34619_36894 = state_34612__$1;
(statearr_34619_36894[(1)] = (6));

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
var statearr_34620_36895 = state_34612__$1;
(statearr_34620_36895[(2)] = inst_34603);

(statearr_34620_36895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36897 = state_34612__$1;
(statearr_34622_36897[(2)] = null);

(statearr_34622_36897[(1)] = (2));


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
var statearr_34623_36898 = state_34612__$1;
(statearr_34623_36898[(1)] = (19));

} else {
var statearr_34624_36900 = state_34612__$1;
(statearr_34624_36900[(1)] = (20));

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
var statearr_34625_36901 = state_34612__$1;
(statearr_34625_36901[(2)] = null);

(statearr_34625_36901[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36903 = state_34612__$1;
(statearr_34627_36903[(2)] = null);

(statearr_34627_36903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36904 = state_34612__$1;
(statearr_34628_36904[(2)] = null);

(statearr_34628_36904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36906 = state_34612__$1;
(statearr_34629_36906[(1)] = (8));

} else {
var statearr_34630_36907 = state_34612__$1;
(statearr_34630_36907[(1)] = (9));

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
var statearr_34632_36908 = state_34612__$1;
(statearr_34632_36908[(1)] = (15));

} else {
var statearr_34633_36909 = state_34612__$1;
(statearr_34633_36909[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36911 = state_34612__$1;
(statearr_34634_36911[(2)] = false);

(statearr_34634_36911[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36912 = state_34612__$1;
(statearr_34635_36912[(2)] = inst_34584);

(statearr_34635_36912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36913 = state_34612__$1;
(statearr_34636_36913[(2)] = inst_34595);

(statearr_34636_36913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36915 = state_34612__$1;
(statearr_34637_36915[(2)] = inst_34581);

(statearr_34637_36915[(1)] = (10));


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
var statearr_34640_36917 = state_34612;
(statearr_34640_36917[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36918 = state_34612;
state_34612 = G__36918;
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
var c__34274__auto___36928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34684){
var state_val_34685 = (state_34684[(1)]);
if((state_val_34685 === (7))){
var inst_34680 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34686_36929 = state_34684__$1;
(statearr_34686_36929[(2)] = inst_34680);

(statearr_34686_36929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (1))){
var state_34684__$1 = state_34684;
var statearr_34687_36931 = state_34684__$1;
(statearr_34687_36931[(2)] = null);

(statearr_34687_36931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (4))){
var inst_34659 = (state_34684[(7)]);
var inst_34659__$1 = (state_34684[(2)]);
var inst_34662 = (inst_34659__$1 == null);
var state_34684__$1 = (function (){var statearr_34688 = state_34684;
(statearr_34688[(7)] = inst_34659__$1);

return statearr_34688;
})();
if(cljs.core.truth_(inst_34662)){
var statearr_34689_36932 = state_34684__$1;
(statearr_34689_36932[(1)] = (5));

} else {
var statearr_34690_36934 = state_34684__$1;
(statearr_34690_36934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (13))){
var state_34684__$1 = state_34684;
var statearr_34692_36935 = state_34684__$1;
(statearr_34692_36935[(2)] = null);

(statearr_34692_36935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (6))){
var inst_34659 = (state_34684[(7)]);
var inst_34667 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34659) : p.call(null,inst_34659));
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34667)){
var statearr_34693_36936 = state_34684__$1;
(statearr_34693_36936[(1)] = (9));

} else {
var statearr_34694_36937 = state_34684__$1;
(statearr_34694_36937[(1)] = (10));

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
var statearr_34696_36939 = state_34684__$1;
(statearr_34696_36939[(2)] = null);

(statearr_34696_36939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (2))){
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34684__$1,(4),ch);
} else {
if((state_val_34685 === (11))){
var inst_34659 = (state_34684[(7)]);
var inst_34671 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34684__$1,(8),inst_34671,inst_34659);
} else {
if((state_val_34685 === (9))){
var state_34684__$1 = state_34684;
var statearr_34697_36941 = state_34684__$1;
(statearr_34697_36941[(2)] = tc);

(statearr_34697_36941[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (5))){
var inst_34664 = cljs.core.async.close_BANG_(tc);
var inst_34665 = cljs.core.async.close_BANG_(fc);
var state_34684__$1 = (function (){var statearr_34700 = state_34684;
(statearr_34700[(8)] = inst_34664);

return statearr_34700;
})();
var statearr_34701_36942 = state_34684__$1;
(statearr_34701_36942[(2)] = inst_34665);

(statearr_34701_36942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (14))){
var inst_34678 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34702_36944 = state_34684__$1;
(statearr_34702_36944[(2)] = inst_34678);

(statearr_34702_36944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (10))){
var state_34684__$1 = state_34684;
var statearr_34703_36945 = state_34684__$1;
(statearr_34703_36945[(2)] = fc);

(statearr_34703_36945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (8))){
var inst_34673 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34673)){
var statearr_34707_36947 = state_34684__$1;
(statearr_34707_36947[(1)] = (12));

} else {
var statearr_34708_36948 = state_34684__$1;
(statearr_34708_36948[(1)] = (13));

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
var statearr_34711_36950 = state_34684;
(statearr_34711_36950[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36951 = state_34684;
state_34684 = G__36951;
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
(statearr_34716[(6)] = c__34274__auto___36928);

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
var statearr_34745_36954 = state_34740__$1;
(statearr_34745_36954[(2)] = inst_34736);

(statearr_34745_36954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (1))){
var inst_34720 = init;
var state_34740__$1 = (function (){var statearr_34746 = state_34740;
(statearr_34746[(7)] = inst_34720);

return statearr_34746;
})();
var statearr_34747_36955 = state_34740__$1;
(statearr_34747_36955[(2)] = null);

(statearr_34747_36955[(1)] = (2));


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
var statearr_34749_36956 = state_34740__$1;
(statearr_34749_36956[(1)] = (5));

} else {
var statearr_34750_36957 = state_34740__$1;
(statearr_34750_36957[(1)] = (6));

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
var statearr_34752_36959 = state_34740__$1;
(statearr_34752_36959[(1)] = (8));

} else {
var statearr_34753_36960 = state_34740__$1;
(statearr_34753_36960[(1)] = (9));

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
var statearr_34755_36962 = state_34740__$1;
(statearr_34755_36962[(2)] = null);

(statearr_34755_36962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (5))){
var inst_34720 = (state_34740[(7)]);
var state_34740__$1 = state_34740;
var statearr_34756_36963 = state_34740__$1;
(statearr_34756_36963[(2)] = inst_34720);

(statearr_34756_36963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (10))){
var inst_34734 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34757_36964 = state_34740__$1;
(statearr_34757_36964[(2)] = inst_34734);

(statearr_34757_36964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (8))){
var inst_34727 = (state_34740[(9)]);
var inst_34730 = cljs.core.deref(inst_34727);
var state_34740__$1 = state_34740;
var statearr_34758_36965 = state_34740__$1;
(statearr_34758_36965[(2)] = inst_34730);

(statearr_34758_36965[(1)] = (10));


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
var statearr_34761_36967 = state_34740;
(statearr_34761_36967[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36969 = state_34740;
state_34740 = G__36969;
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
}catch (e34774){if((e34774 instanceof Object)){
var ex__34210__auto__ = e34774;
var statearr_34775_36973 = state_34768;
(statearr_34775_36973[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36974 = state_34768;
state_34768 = G__36974;
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
var state__34276__auto__ = (function (){var statearr_34779 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34779[(6)] = c__34274__auto__);

return statearr_34779;
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
var G__34782 = arguments.length;
switch (G__34782) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34808){
var state_val_34809 = (state_34808[(1)]);
if((state_val_34809 === (7))){
var inst_34790 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34812_36978 = state_34808__$1;
(statearr_34812_36978[(2)] = inst_34790);

(statearr_34812_36978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (1))){
var inst_34783 = cljs.core.seq(coll);
var inst_34784 = inst_34783;
var state_34808__$1 = (function (){var statearr_34813 = state_34808;
(statearr_34813[(7)] = inst_34784);

return statearr_34813;
})();
var statearr_34816_36980 = state_34808__$1;
(statearr_34816_36980[(2)] = null);

(statearr_34816_36980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (4))){
var inst_34784 = (state_34808[(7)]);
var inst_34788 = cljs.core.first(inst_34784);
var state_34808__$1 = state_34808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34808__$1,(7),ch,inst_34788);
} else {
if((state_val_34809 === (13))){
var inst_34802 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34818_36981 = state_34808__$1;
(statearr_34818_36981[(2)] = inst_34802);

(statearr_34818_36981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (6))){
var inst_34793 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
if(cljs.core.truth_(inst_34793)){
var statearr_34819_36983 = state_34808__$1;
(statearr_34819_36983[(1)] = (8));

} else {
var statearr_34820_36984 = state_34808__$1;
(statearr_34820_36984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (3))){
var inst_34806 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34808__$1,inst_34806);
} else {
if((state_val_34809 === (12))){
var state_34808__$1 = state_34808;
var statearr_34821_36985 = state_34808__$1;
(statearr_34821_36985[(2)] = null);

(statearr_34821_36985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (2))){
var inst_34784 = (state_34808[(7)]);
var state_34808__$1 = state_34808;
if(cljs.core.truth_(inst_34784)){
var statearr_34822_36987 = state_34808__$1;
(statearr_34822_36987[(1)] = (4));

} else {
var statearr_34823_36988 = state_34808__$1;
(statearr_34823_36988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (11))){
var inst_34799 = cljs.core.async.close_BANG_(ch);
var state_34808__$1 = state_34808;
var statearr_34824_36989 = state_34808__$1;
(statearr_34824_36989[(2)] = inst_34799);

(statearr_34824_36989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (9))){
var state_34808__$1 = state_34808;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34825_36991 = state_34808__$1;
(statearr_34825_36991[(1)] = (11));

} else {
var statearr_34826_36992 = state_34808__$1;
(statearr_34826_36992[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (5))){
var inst_34784 = (state_34808[(7)]);
var state_34808__$1 = state_34808;
var statearr_34830_36993 = state_34808__$1;
(statearr_34830_36993[(2)] = inst_34784);

(statearr_34830_36993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (10))){
var inst_34804 = (state_34808[(2)]);
var state_34808__$1 = state_34808;
var statearr_34831_36995 = state_34808__$1;
(statearr_34831_36995[(2)] = inst_34804);

(statearr_34831_36995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34809 === (8))){
var inst_34784 = (state_34808[(7)]);
var inst_34795 = cljs.core.next(inst_34784);
var inst_34784__$1 = inst_34795;
var state_34808__$1 = (function (){var statearr_34832 = state_34808;
(statearr_34832[(7)] = inst_34784__$1);

return statearr_34832;
})();
var statearr_34836_36996 = state_34808__$1;
(statearr_34836_36996[(2)] = null);

(statearr_34836_36996[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34808){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34808);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__34210__auto__ = e34838;
var statearr_34839_36998 = state_34808;
(statearr_34839_36998[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36999 = state_34808;
state_34808 = G__36999;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34808);
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
var c__34274__auto___37010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34978){
var state_val_34979 = (state_34978[(1)]);
if((state_val_34979 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34980_37011 = state_34978__$1;
(statearr_34980_37011[(2)] = inst_34974);

(statearr_34980_37011[(1)] = (3));


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
var statearr_34982_37013 = state_34978__$1;
(statearr_34982_37013[(1)] = (22));

} else {
var statearr_34983_37014 = state_34978__$1;
(statearr_34983_37014[(1)] = (23));

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
var state_34978__$1 = (function (){var statearr_34987 = state_34978;
(statearr_34987[(10)] = inst_34926__$1);

return statearr_34987;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34989_37016 = state_34978__$1;
(statearr_34989_37016[(1)] = (30));

} else {
var statearr_34991_37017 = state_34978__$1;
(statearr_34991_37017[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (1))){
var state_34978__$1 = state_34978;
var statearr_34993_37019 = state_34978__$1;
(statearr_34993_37019[(2)] = null);

(statearr_34993_37019[(1)] = (2));


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
var state_34978__$1 = (function (){var statearr_34994 = state_34978;
(statearr_34994[(13)] = inst_34857);

(statearr_34994[(14)] = inst_34856);

(statearr_34994[(15)] = inst_34858);

(statearr_34994[(16)] = inst_34896);

(statearr_34994[(17)] = inst_34855);

return statearr_34994;
})();
var statearr_34995_37021 = state_34978__$1;
(statearr_34995_37021[(2)] = null);

(statearr_34995_37021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (39))){
var state_34978__$1 = state_34978;
var statearr_34999_37022 = state_34978__$1;
(statearr_34999_37022[(2)] = null);

(statearr_34999_37022[(1)] = (41));


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
var statearr_35001_37024 = state_34978__$1;
(statearr_35001_37024[(1)] = (5));

} else {
var statearr_35002_37025 = state_34978__$1;
(statearr_35002_37025[(1)] = (6));

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
var tmp34996 = inst_34857;
var tmp34997 = inst_34856;
var tmp34998 = inst_34855;
var inst_34855__$1 = tmp34998;
var inst_34856__$1 = tmp34997;
var inst_34857__$1 = tmp34996;
var inst_34858__$1 = inst_34874;
var state_34978__$1 = (function (){var statearr_35005 = state_34978;
(statearr_35005[(18)] = inst_34873);

(statearr_35005[(13)] = inst_34857__$1);

(statearr_35005[(14)] = inst_34856__$1);

(statearr_35005[(15)] = inst_34858__$1);

(statearr_35005[(17)] = inst_34855__$1);

return statearr_35005;
})();
var statearr_35007_37027 = state_34978__$1;
(statearr_35007_37027[(2)] = null);

(statearr_35007_37027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (21))){
var inst_34900 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35013_37029 = state_34978__$1;
(statearr_35013_37029[(2)] = inst_34900);

(statearr_35013_37029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (31))){
var inst_34926 = (state_34978[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34978__$1 = (function (){var statearr_35015 = state_34978;
(statearr_35015[(19)] = inst_34930);

return statearr_35015;
})();
var statearr_35016_37030 = state_34978__$1;
(statearr_35016_37030[(2)] = inst_34931);

(statearr_35016_37030[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (32))){
var inst_34918 = (state_34978[(20)]);
var inst_34919 = (state_34978[(11)]);
var inst_34920 = (state_34978[(21)]);
var inst_34921 = (state_34978[(12)]);
var inst_34933 = (state_34978[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp35010 = inst_34918;
var tmp35011 = inst_34919;
var tmp35012 = inst_34920;
var inst_34918__$1 = tmp35010;
var inst_34919__$1 = tmp35011;
var inst_34920__$1 = tmp35012;
var inst_34921__$1 = inst_34934;
var state_34978__$1 = (function (){var statearr_35017 = state_34978;
(statearr_35017[(20)] = inst_34918__$1);

(statearr_35017[(22)] = inst_34933);

(statearr_35017[(11)] = inst_34919__$1);

(statearr_35017[(21)] = inst_34920__$1);

(statearr_35017[(12)] = inst_34921__$1);

return statearr_35017;
})();
var statearr_35018_37033 = state_34978__$1;
(statearr_35018_37033[(2)] = null);

(statearr_35018_37033[(1)] = (25));


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
var statearr_35020_37034 = state_34978__$1;
(statearr_35020_37034[(2)] = inst_34951);

(statearr_35020_37034[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (33))){
var inst_34937 = (state_34978[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34978__$1 = state_34978;
if(inst_34939){
var statearr_35021_37036 = state_34978__$1;
(statearr_35021_37036[(1)] = (36));

} else {
var statearr_35022_37037 = state_34978__$1;
(statearr_35022_37037[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (13))){
var inst_34867 = (state_34978[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34978__$1 = state_34978;
var statearr_35023_37038 = state_34978__$1;
(statearr_35023_37038[(2)] = inst_34870);

(statearr_35023_37038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (22))){
var inst_34890 = (state_34978[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34978__$1 = state_34978;
var statearr_35024_37040 = state_34978__$1;
(statearr_35024_37040[(2)] = inst_34893);

(statearr_35024_37040[(1)] = (24));


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
var state_34978__$1 = (function (){var statearr_35027 = state_34978;
(statearr_35027[(20)] = inst_34918);

(statearr_35027[(11)] = inst_34919);

(statearr_35027[(21)] = inst_34920);

(statearr_35027[(12)] = inst_34921);

return statearr_35027;
})();
var statearr_35028_37042 = state_34978__$1;
(statearr_35028_37042[(2)] = null);

(statearr_35028_37042[(1)] = (25));


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
var state_34978__$1 = (function (){var statearr_35032 = state_34978;
(statearr_35032[(20)] = inst_34918);

(statearr_35032[(11)] = inst_34919);

(statearr_35032[(21)] = inst_34920);

(statearr_35032[(27)] = inst_34953);

(statearr_35032[(12)] = inst_34921);

return statearr_35032;
})();
var statearr_35034_37044 = state_34978__$1;
(statearr_35034_37044[(2)] = null);

(statearr_35034_37044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (43))){
var state_34978__$1 = state_34978;
var statearr_35035_37045 = state_34978__$1;
(statearr_35035_37045[(2)] = null);

(statearr_35035_37045[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (29))){
var inst_34962 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35036_37047 = state_34978__$1;
(statearr_35036_37047[(2)] = inst_34962);

(statearr_35036_37047[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (44))){
var inst_34971 = (state_34978[(2)]);
var state_34978__$1 = (function (){var statearr_35037 = state_34978;
(statearr_35037[(28)] = inst_34971);

return statearr_35037;
})();
var statearr_35038_37048 = state_34978__$1;
(statearr_35038_37048[(2)] = null);

(statearr_35038_37048[(1)] = (2));


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
var statearr_35042_37051 = state_34978__$1;
(statearr_35042_37051[(2)] = null);

(statearr_35042_37051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (28))){
var inst_34918 = (state_34978[(20)]);
var inst_34937 = (state_34978[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34978__$1 = (function (){var statearr_35045 = state_34978;
(statearr_35045[(25)] = inst_34937__$1);

return statearr_35045;
})();
if(inst_34937__$1){
var statearr_35047_37052 = state_34978__$1;
(statearr_35047_37052[(1)] = (33));

} else {
var statearr_35048_37054 = state_34978__$1;
(statearr_35048_37054[(1)] = (34));

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
var statearr_35050_37055 = state_34978__$1;
(statearr_35050_37055[(1)] = (27));

} else {
var statearr_35051_37056 = state_34978__$1;
(statearr_35051_37056[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (34))){
var state_34978__$1 = state_34978;
var statearr_35052_37057 = state_34978__$1;
(statearr_35052_37057[(2)] = null);

(statearr_35052_37057[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (17))){
var state_34978__$1 = state_34978;
var statearr_35053_37059 = state_34978__$1;
(statearr_35053_37059[(2)] = null);

(statearr_35053_37059[(1)] = (18));


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
var statearr_35054_37060 = state_34978__$1;
(statearr_35054_37060[(2)] = inst_34905);

(statearr_35054_37060[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(4),ch);
} else {
if((state_val_34979 === (23))){
var state_34978__$1 = state_34978;
var statearr_35058_37062 = state_34978__$1;
(statearr_35058_37062[(2)] = null);

(statearr_35058_37062[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (35))){
var inst_34960 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35060_37063 = state_34978__$1;
(statearr_35060_37063[(2)] = inst_34960);

(statearr_35060_37063[(1)] = (29));


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
var state_34978__$1 = (function (){var statearr_35075 = state_34978;
(statearr_35075[(13)] = inst_34857);

(statearr_35075[(14)] = inst_34856);

(statearr_35075[(15)] = inst_34858);

(statearr_35075[(17)] = inst_34855);

return statearr_35075;
})();
var statearr_35077_37065 = state_34978__$1;
(statearr_35077_37065[(2)] = null);

(statearr_35077_37065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (11))){
var inst_34855 = (state_34978[(17)]);
var inst_34877 = (state_34978[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34978__$1 = (function (){var statearr_35080 = state_34978;
(statearr_35080[(7)] = inst_34877__$1);

return statearr_35080;
})();
if(inst_34877__$1){
var statearr_35081_37067 = state_34978__$1;
(statearr_35081_37067[(1)] = (16));

} else {
var statearr_35082_37068 = state_34978__$1;
(statearr_35082_37068[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (9))){
var inst_34907 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35085_37070 = state_34978__$1;
(statearr_35085_37070[(2)] = inst_34907);

(statearr_35085_37070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35087 = state_34978;
(statearr_35087[(13)] = inst_34857);

(statearr_35087[(14)] = inst_34856);

(statearr_35087[(15)] = inst_34858);

(statearr_35087[(17)] = inst_34855);

return statearr_35087;
})();
var statearr_35089_37071 = state_34978__$1;
(statearr_35089_37071[(2)] = null);

(statearr_35089_37071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (14))){
var state_34978__$1 = state_34978;
var statearr_35094_37073 = state_34978__$1;
(statearr_35094_37073[(2)] = null);

(statearr_35094_37073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (45))){
var inst_34968 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35098_37074 = state_34978__$1;
(statearr_35098_37074[(2)] = inst_34968);

(statearr_35098_37074[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (26))){
var inst_34910 = (state_34978[(29)]);
var inst_34964 = (state_34978[(2)]);
var inst_34965 = cljs.core.seq(inst_34910);
var state_34978__$1 = (function (){var statearr_35104 = state_34978;
(statearr_35104[(31)] = inst_34964);

return statearr_35104;
})();
if(inst_34965){
var statearr_35108_37076 = state_34978__$1;
(statearr_35108_37076[(1)] = (42));

} else {
var statearr_35110_37077 = state_34978__$1;
(statearr_35110_37077[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (16))){
var inst_34877 = (state_34978[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34978__$1 = state_34978;
if(inst_34879){
var statearr_35115_37078 = state_34978__$1;
(statearr_35115_37078[(1)] = (19));

} else {
var statearr_35119_37079 = state_34978__$1;
(statearr_35119_37079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (38))){
var inst_34957 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35122_37080 = state_34978__$1;
(statearr_35122_37080[(2)] = inst_34957);

(statearr_35122_37080[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (30))){
var state_34978__$1 = state_34978;
var statearr_35128_37082 = state_34978__$1;
(statearr_35128_37082[(2)] = null);

(statearr_35128_37082[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (10))){
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34978__$1 = (function (){var statearr_35135 = state_34978;
(statearr_35135[(26)] = inst_34867);

return statearr_35135;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35136_37089 = state_34978__$1;
(statearr_35136_37089[(1)] = (13));

} else {
var statearr_35140_37090 = state_34978__$1;
(statearr_35140_37090[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (18))){
var inst_34903 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35145_37091 = state_34978__$1;
(statearr_35145_37091[(2)] = inst_34903);

(statearr_35145_37091[(1)] = (12));


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
var state_34978__$1 = (function (){var statearr_35155 = state_34978;
(statearr_35155[(23)] = inst_34946__$1);

return statearr_35155;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35158_37093 = state_34978__$1;
(statearr_35158_37093[(1)] = (39));

} else {
var statearr_35161_37094 = state_34978__$1;
(statearr_35161_37094[(1)] = (40));

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
var statearr_35168_37095 = state_34978__$1;
(statearr_35168_37095[(1)] = (10));

} else {
var statearr_35169_37096 = state_34978__$1;
(statearr_35169_37096[(1)] = (11));

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
var statearr_35181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35181[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35181[(1)] = (1));

return statearr_35181;
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
}catch (e35185){if((e35185 instanceof Object)){
var ex__34210__auto__ = e35185;
var statearr_35186_37101 = state_34978;
(statearr_35186_37101[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35185;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37102 = state_34978;
state_34978 = G__37102;
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
var state__34276__auto__ = (function (){var statearr_35187 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35187[(6)] = c__34274__auto___37010);

return statearr_35187;
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
var G__35191 = arguments.length;
switch (G__35191) {
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
var len__4789__auto___37110 = arguments.length;
var i__4790__auto___37111 = (0);
while(true){
if((i__4790__auto___37111 < len__4789__auto___37110)){
args__4795__auto__.push((arguments[i__4790__auto___37111]));

var G__37113 = (i__4790__auto___37111 + (1));
i__4790__auto___37111 = G__37113;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35306){
var map__35308 = p__35306;
var map__35308__$1 = (((((!((map__35308 == null))))?(((((map__35308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35308):map__35308);
var opts = map__35308__$1;
var statearr_35315_37114 = state;
(statearr_35315_37114[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35321_37115 = state;
(statearr_35321_37115[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35327_37116 = state;
(statearr_35327_37116[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35289){
var G__35290 = cljs.core.first(seq35289);
var seq35289__$1 = cljs.core.next(seq35289);
var G__35291 = cljs.core.first(seq35289__$1);
var seq35289__$2 = cljs.core.next(seq35289__$1);
var G__35292 = cljs.core.first(seq35289__$2);
var seq35289__$3 = cljs.core.next(seq35289__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35290,G__35291,G__35292,seq35289__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35369 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35370){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35370 = meta35370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35371,meta35370__$1){
var self__ = this;
var _35371__$1 = this;
return (new cljs.core.async.t_cljs$core$async35369(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35370__$1));
}));

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35371){
var self__ = this;
var _35371__$1 = this;
return self__.meta35370;
}));

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35369.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35370","meta35370",-1077361373,null)], null);
}));

(cljs.core.async.t_cljs$core$async35369.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35369");

(cljs.core.async.t_cljs$core$async35369.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35369");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35369.
 */
cljs.core.async.__GT_t_cljs$core$async35369 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35369(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35370){
return (new cljs.core.async.t_cljs$core$async35369(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35370));
});

}

return (new cljs.core.async.t_cljs$core$async35369(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35507){
var state_val_35508 = (state_35507[(1)]);
if((state_val_35508 === (7))){
var inst_35411 = (state_35507[(2)]);
var state_35507__$1 = state_35507;
var statearr_35513_37150 = state_35507__$1;
(statearr_35513_37150[(2)] = inst_35411);

(statearr_35513_37150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (20))){
var inst_35424 = (state_35507[(7)]);
var state_35507__$1 = state_35507;
var statearr_35515_37153 = state_35507__$1;
(statearr_35515_37153[(2)] = inst_35424);

(statearr_35515_37153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (27))){
var state_35507__$1 = state_35507;
var statearr_35518_37156 = state_35507__$1;
(statearr_35518_37156[(2)] = null);

(statearr_35518_37156[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (1))){
var inst_35393 = (state_35507[(8)]);
var inst_35393__$1 = calc_state();
var inst_35396 = (inst_35393__$1 == null);
var inst_35397 = cljs.core.not(inst_35396);
var state_35507__$1 = (function (){var statearr_35521 = state_35507;
(statearr_35521[(8)] = inst_35393__$1);

return statearr_35521;
})();
if(inst_35397){
var statearr_35522_37162 = state_35507__$1;
(statearr_35522_37162[(1)] = (2));

} else {
var statearr_35523_37163 = state_35507__$1;
(statearr_35523_37163[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (24))){
var inst_35454 = (state_35507[(9)]);
var inst_35463 = (state_35507[(10)]);
var inst_35479 = (state_35507[(11)]);
var inst_35479__$1 = (inst_35454.cljs$core$IFn$_invoke$arity$1 ? inst_35454.cljs$core$IFn$_invoke$arity$1(inst_35463) : inst_35454.call(null,inst_35463));
var state_35507__$1 = (function (){var statearr_35526 = state_35507;
(statearr_35526[(11)] = inst_35479__$1);

return statearr_35526;
})();
if(cljs.core.truth_(inst_35479__$1)){
var statearr_35530_37168 = state_35507__$1;
(statearr_35530_37168[(1)] = (29));

} else {
var statearr_35532_37169 = state_35507__$1;
(statearr_35532_37169[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (4))){
var inst_35415 = (state_35507[(2)]);
var state_35507__$1 = state_35507;
if(cljs.core.truth_(inst_35415)){
var statearr_35534_37171 = state_35507__$1;
(statearr_35534_37171[(1)] = (8));

} else {
var statearr_35535_37172 = state_35507__$1;
(statearr_35535_37172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (15))){
var inst_35448 = (state_35507[(2)]);
var state_35507__$1 = state_35507;
if(cljs.core.truth_(inst_35448)){
var statearr_35540_37175 = state_35507__$1;
(statearr_35540_37175[(1)] = (19));

} else {
var statearr_35543_37178 = state_35507__$1;
(statearr_35543_37178[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (21))){
var inst_35453 = (state_35507[(12)]);
var inst_35453__$1 = (state_35507[(2)]);
var inst_35454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35453__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35453__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35453__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35507__$1 = (function (){var statearr_35544 = state_35507;
(statearr_35544[(9)] = inst_35454);

(statearr_35544[(13)] = inst_35455);

(statearr_35544[(12)] = inst_35453__$1);

return statearr_35544;
})();
return cljs.core.async.ioc_alts_BANG_(state_35507__$1,(22),inst_35456);
} else {
if((state_val_35508 === (31))){
var inst_35487 = (state_35507[(2)]);
var state_35507__$1 = state_35507;
if(cljs.core.truth_(inst_35487)){
var statearr_35547_37187 = state_35507__$1;
(statearr_35547_37187[(1)] = (32));

} else {
var statearr_35548_37188 = state_35507__$1;
(statearr_35548_37188[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (32))){
var inst_35462 = (state_35507[(14)]);
var state_35507__$1 = state_35507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35507__$1,(35),out,inst_35462);
} else {
if((state_val_35508 === (33))){
var inst_35453 = (state_35507[(12)]);
var inst_35424 = inst_35453;
var state_35507__$1 = (function (){var statearr_35563 = state_35507;
(statearr_35563[(7)] = inst_35424);

return statearr_35563;
})();
var statearr_35571_37191 = state_35507__$1;
(statearr_35571_37191[(2)] = null);

(statearr_35571_37191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (13))){
var inst_35424 = (state_35507[(7)]);
var inst_35437 = inst_35424.cljs$lang$protocol_mask$partition0$;
var inst_35438 = (inst_35437 & (64));
var inst_35439 = inst_35424.cljs$core$ISeq$;
var inst_35440 = (cljs.core.PROTOCOL_SENTINEL === inst_35439);
var inst_35441 = ((inst_35438) || (inst_35440));
var state_35507__$1 = state_35507;
if(cljs.core.truth_(inst_35441)){
var statearr_35574_37195 = state_35507__$1;
(statearr_35574_37195[(1)] = (16));

} else {
var statearr_35575_37196 = state_35507__$1;
(statearr_35575_37196[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (22))){
var inst_35463 = (state_35507[(10)]);
var inst_35462 = (state_35507[(14)]);
var inst_35461 = (state_35507[(2)]);
var inst_35462__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35461,(0),null);
var inst_35463__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35461,(1),null);
var inst_35464 = (inst_35462__$1 == null);
var inst_35465 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35463__$1,change);
var inst_35466 = ((inst_35464) || (inst_35465));
var state_35507__$1 = (function (){var statearr_35580 = state_35507;
(statearr_35580[(10)] = inst_35463__$1);

(statearr_35580[(14)] = inst_35462__$1);

return statearr_35580;
})();
if(cljs.core.truth_(inst_35466)){
var statearr_35581_37200 = state_35507__$1;
(statearr_35581_37200[(1)] = (23));

} else {
var statearr_35582_37201 = state_35507__$1;
(statearr_35582_37201[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (36))){
var inst_35453 = (state_35507[(12)]);
var inst_35424 = inst_35453;
var state_35507__$1 = (function (){var statearr_35584 = state_35507;
(statearr_35584[(7)] = inst_35424);

return statearr_35584;
})();
var statearr_35585_37207 = state_35507__$1;
(statearr_35585_37207[(2)] = null);

(statearr_35585_37207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (29))){
var inst_35479 = (state_35507[(11)]);
var state_35507__$1 = state_35507;
var statearr_35590_37208 = state_35507__$1;
(statearr_35590_37208[(2)] = inst_35479);

(statearr_35590_37208[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (6))){
var state_35507__$1 = state_35507;
var statearr_35593_37209 = state_35507__$1;
(statearr_35593_37209[(2)] = false);

(statearr_35593_37209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (28))){
var inst_35475 = (state_35507[(2)]);
var inst_35476 = calc_state();
var inst_35424 = inst_35476;
var state_35507__$1 = (function (){var statearr_35599 = state_35507;
(statearr_35599[(7)] = inst_35424);

(statearr_35599[(15)] = inst_35475);

return statearr_35599;
})();
var statearr_35600_37217 = state_35507__$1;
(statearr_35600_37217[(2)] = null);

(statearr_35600_37217[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (25))){
var inst_35503 = (state_35507[(2)]);
var state_35507__$1 = state_35507;
var statearr_35601_37219 = state_35507__$1;
(statearr_35601_37219[(2)] = inst_35503);

(statearr_35601_37219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (34))){
var inst_35501 = (state_35507[(2)]);
var state_35507__$1 = state_35507;
var statearr_35602_37220 = state_35507__$1;
(statearr_35602_37220[(2)] = inst_35501);

(statearr_35602_37220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (17))){
var state_35507__$1 = state_35507;
var statearr_35604_37221 = state_35507__$1;
(statearr_35604_37221[(2)] = false);

(statearr_35604_37221[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (3))){
var state_35507__$1 = state_35507;
var statearr_35613_37224 = state_35507__$1;
(statearr_35613_37224[(2)] = false);

(statearr_35613_37224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (12))){
var inst_35505 = (state_35507[(2)]);
var state_35507__$1 = state_35507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35507__$1,inst_35505);
} else {
if((state_val_35508 === (2))){
var inst_35393 = (state_35507[(8)]);
var inst_35403 = inst_35393.cljs$lang$protocol_mask$partition0$;
var inst_35404 = (inst_35403 & (64));
var inst_35405 = inst_35393.cljs$core$ISeq$;
var inst_35406 = (cljs.core.PROTOCOL_SENTINEL === inst_35405);
var inst_35407 = ((inst_35404) || (inst_35406));
var state_35507__$1 = state_35507;
if(cljs.core.truth_(inst_35407)){
var statearr_35624_37226 = state_35507__$1;
(statearr_35624_37226[(1)] = (5));

} else {
var statearr_35627_37227 = state_35507__$1;
(statearr_35627_37227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (23))){
var inst_35462 = (state_35507[(14)]);
var inst_35468 = (inst_35462 == null);
var state_35507__$1 = state_35507;
if(cljs.core.truth_(inst_35468)){
var statearr_35632_37230 = state_35507__$1;
(statearr_35632_37230[(1)] = (26));

} else {
var statearr_35636_37232 = state_35507__$1;
(statearr_35636_37232[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (35))){
var inst_35490 = (state_35507[(2)]);
var state_35507__$1 = state_35507;
if(cljs.core.truth_(inst_35490)){
var statearr_35639_37233 = state_35507__$1;
(statearr_35639_37233[(1)] = (36));

} else {
var statearr_35642_37235 = state_35507__$1;
(statearr_35642_37235[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (19))){
var inst_35424 = (state_35507[(7)]);
var inst_35450 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35424);
var state_35507__$1 = state_35507;
var statearr_35647_37239 = state_35507__$1;
(statearr_35647_37239[(2)] = inst_35450);

(statearr_35647_37239[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (11))){
var inst_35424 = (state_35507[(7)]);
var inst_35433 = (inst_35424 == null);
var inst_35434 = cljs.core.not(inst_35433);
var state_35507__$1 = state_35507;
if(inst_35434){
var statearr_35653_37240 = state_35507__$1;
(statearr_35653_37240[(1)] = (13));

} else {
var statearr_35655_37241 = state_35507__$1;
(statearr_35655_37241[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (9))){
var inst_35393 = (state_35507[(8)]);
var state_35507__$1 = state_35507;
var statearr_35660_37242 = state_35507__$1;
(statearr_35660_37242[(2)] = inst_35393);

(statearr_35660_37242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (5))){
var state_35507__$1 = state_35507;
var statearr_35663_37248 = state_35507__$1;
(statearr_35663_37248[(2)] = true);

(statearr_35663_37248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (14))){
var state_35507__$1 = state_35507;
var statearr_35668_37253 = state_35507__$1;
(statearr_35668_37253[(2)] = false);

(statearr_35668_37253[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (26))){
var inst_35463 = (state_35507[(10)]);
var inst_35472 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35463);
var state_35507__$1 = state_35507;
var statearr_35674_37256 = state_35507__$1;
(statearr_35674_37256[(2)] = inst_35472);

(statearr_35674_37256[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (16))){
var state_35507__$1 = state_35507;
var statearr_35676_37257 = state_35507__$1;
(statearr_35676_37257[(2)] = true);

(statearr_35676_37257[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (38))){
var inst_35497 = (state_35507[(2)]);
var state_35507__$1 = state_35507;
var statearr_35680_37259 = state_35507__$1;
(statearr_35680_37259[(2)] = inst_35497);

(statearr_35680_37259[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (30))){
var inst_35454 = (state_35507[(9)]);
var inst_35455 = (state_35507[(13)]);
var inst_35463 = (state_35507[(10)]);
var inst_35482 = cljs.core.empty_QMARK_(inst_35454);
var inst_35483 = (inst_35455.cljs$core$IFn$_invoke$arity$1 ? inst_35455.cljs$core$IFn$_invoke$arity$1(inst_35463) : inst_35455.call(null,inst_35463));
var inst_35484 = cljs.core.not(inst_35483);
var inst_35485 = ((inst_35482) && (inst_35484));
var state_35507__$1 = state_35507;
var statearr_35683_37266 = state_35507__$1;
(statearr_35683_37266[(2)] = inst_35485);

(statearr_35683_37266[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (10))){
var inst_35393 = (state_35507[(8)]);
var inst_35420 = (state_35507[(2)]);
var inst_35421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35420,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35420,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35420,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35424 = inst_35393;
var state_35507__$1 = (function (){var statearr_35691 = state_35507;
(statearr_35691[(16)] = inst_35423);

(statearr_35691[(7)] = inst_35424);

(statearr_35691[(17)] = inst_35422);

(statearr_35691[(18)] = inst_35421);

return statearr_35691;
})();
var statearr_35694_37269 = state_35507__$1;
(statearr_35694_37269[(2)] = null);

(statearr_35694_37269[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (18))){
var inst_35445 = (state_35507[(2)]);
var state_35507__$1 = state_35507;
var statearr_35699_37270 = state_35507__$1;
(statearr_35699_37270[(2)] = inst_35445);

(statearr_35699_37270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (37))){
var state_35507__$1 = state_35507;
var statearr_35704_37273 = state_35507__$1;
(statearr_35704_37273[(2)] = null);

(statearr_35704_37273[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (8))){
var inst_35393 = (state_35507[(8)]);
var inst_35417 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35393);
var state_35507__$1 = state_35507;
var statearr_35711_37275 = state_35507__$1;
(statearr_35711_37275[(2)] = inst_35417);

(statearr_35711_37275[(1)] = (10));


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
var statearr_35721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35721[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35721[(1)] = (1));

return statearr_35721;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35507){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35507);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35724){if((e35724 instanceof Object)){
var ex__34210__auto__ = e35724;
var statearr_35728_37282 = state_35507;
(statearr_35728_37282[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37286 = state_35507;
state_35507 = G__37286;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35507){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35732 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35732[(6)] = c__34274__auto___37149);

return statearr_35732;
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
var G__35746 = arguments.length;
switch (G__35746) {
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
var G__35759 = arguments.length;
switch (G__35759) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35756_SHARP_){
if(cljs.core.truth_((p1__35756_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35756_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35756_SHARP_.call(null,topic)))){
return p1__35756_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35756_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35762 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35763){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35763 = meta35763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35764,meta35763__$1){
var self__ = this;
var _35764__$1 = this;
return (new cljs.core.async.t_cljs$core$async35762(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35763__$1));
}));

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35764){
var self__ = this;
var _35764__$1 = this;
return self__.meta35763;
}));

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35763","meta35763",1010903438,null)], null);
}));

(cljs.core.async.t_cljs$core$async35762.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35762");

(cljs.core.async.t_cljs$core$async35762.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35762");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35762.
 */
cljs.core.async.__GT_t_cljs$core$async35762 = (function cljs$core$async$__GT_t_cljs$core$async35762(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35763){
return (new cljs.core.async.t_cljs$core$async35762(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35763));
});

}

return (new cljs.core.async.t_cljs$core$async35762(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35867){
var state_val_35868 = (state_35867[(1)]);
if((state_val_35868 === (7))){
var inst_35863 = (state_35867[(2)]);
var state_35867__$1 = state_35867;
var statearr_35871_37342 = state_35867__$1;
(statearr_35871_37342[(2)] = inst_35863);

(statearr_35871_37342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (20))){
var state_35867__$1 = state_35867;
var statearr_35874_37343 = state_35867__$1;
(statearr_35874_37343[(2)] = null);

(statearr_35874_37343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (1))){
var state_35867__$1 = state_35867;
var statearr_35875_37345 = state_35867__$1;
(statearr_35875_37345[(2)] = null);

(statearr_35875_37345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (24))){
var inst_35846 = (state_35867[(7)]);
var inst_35855 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35846);
var state_35867__$1 = state_35867;
var statearr_35876_37347 = state_35867__$1;
(statearr_35876_37347[(2)] = inst_35855);

(statearr_35876_37347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (4))){
var inst_35792 = (state_35867[(8)]);
var inst_35792__$1 = (state_35867[(2)]);
var inst_35793 = (inst_35792__$1 == null);
var state_35867__$1 = (function (){var statearr_35878 = state_35867;
(statearr_35878[(8)] = inst_35792__$1);

return statearr_35878;
})();
if(cljs.core.truth_(inst_35793)){
var statearr_35879_37352 = state_35867__$1;
(statearr_35879_37352[(1)] = (5));

} else {
var statearr_35880_37353 = state_35867__$1;
(statearr_35880_37353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (15))){
var inst_35840 = (state_35867[(2)]);
var state_35867__$1 = state_35867;
var statearr_35881_37354 = state_35867__$1;
(statearr_35881_37354[(2)] = inst_35840);

(statearr_35881_37354[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (21))){
var inst_35860 = (state_35867[(2)]);
var state_35867__$1 = (function (){var statearr_35883 = state_35867;
(statearr_35883[(9)] = inst_35860);

return statearr_35883;
})();
var statearr_35885_37356 = state_35867__$1;
(statearr_35885_37356[(2)] = null);

(statearr_35885_37356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (13))){
var inst_35821 = (state_35867[(10)]);
var inst_35824 = cljs.core.chunked_seq_QMARK_(inst_35821);
var state_35867__$1 = state_35867;
if(inst_35824){
var statearr_35887_37357 = state_35867__$1;
(statearr_35887_37357[(1)] = (16));

} else {
var statearr_35888_37361 = state_35867__$1;
(statearr_35888_37361[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (22))){
var inst_35852 = (state_35867[(2)]);
var state_35867__$1 = state_35867;
if(cljs.core.truth_(inst_35852)){
var statearr_35890_37363 = state_35867__$1;
(statearr_35890_37363[(1)] = (23));

} else {
var statearr_35891_37364 = state_35867__$1;
(statearr_35891_37364[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (6))){
var inst_35792 = (state_35867[(8)]);
var inst_35846 = (state_35867[(7)]);
var inst_35848 = (state_35867[(11)]);
var inst_35846__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35792) : topic_fn.call(null,inst_35792));
var inst_35847 = cljs.core.deref(mults);
var inst_35848__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35847,inst_35846__$1);
var state_35867__$1 = (function (){var statearr_35894 = state_35867;
(statearr_35894[(7)] = inst_35846__$1);

(statearr_35894[(11)] = inst_35848__$1);

return statearr_35894;
})();
if(cljs.core.truth_(inst_35848__$1)){
var statearr_35896_37366 = state_35867__$1;
(statearr_35896_37366[(1)] = (19));

} else {
var statearr_35897_37368 = state_35867__$1;
(statearr_35897_37368[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (25))){
var inst_35857 = (state_35867[(2)]);
var state_35867__$1 = state_35867;
var statearr_35898_37372 = state_35867__$1;
(statearr_35898_37372[(2)] = inst_35857);

(statearr_35898_37372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (17))){
var inst_35821 = (state_35867[(10)]);
var inst_35831 = cljs.core.first(inst_35821);
var inst_35832 = cljs.core.async.muxch_STAR_(inst_35831);
var inst_35833 = cljs.core.async.close_BANG_(inst_35832);
var inst_35834 = cljs.core.next(inst_35821);
var inst_35802 = inst_35834;
var inst_35803 = null;
var inst_35804 = (0);
var inst_35805 = (0);
var state_35867__$1 = (function (){var statearr_35900 = state_35867;
(statearr_35900[(12)] = inst_35802);

(statearr_35900[(13)] = inst_35803);

(statearr_35900[(14)] = inst_35805);

(statearr_35900[(15)] = inst_35804);

(statearr_35900[(16)] = inst_35833);

return statearr_35900;
})();
var statearr_35901_37378 = state_35867__$1;
(statearr_35901_37378[(2)] = null);

(statearr_35901_37378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (3))){
var inst_35865 = (state_35867[(2)]);
var state_35867__$1 = state_35867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35867__$1,inst_35865);
} else {
if((state_val_35868 === (12))){
var inst_35842 = (state_35867[(2)]);
var state_35867__$1 = state_35867;
var statearr_35903_37382 = state_35867__$1;
(statearr_35903_37382[(2)] = inst_35842);

(statearr_35903_37382[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (2))){
var state_35867__$1 = state_35867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35867__$1,(4),ch);
} else {
if((state_val_35868 === (23))){
var state_35867__$1 = state_35867;
var statearr_35908_37387 = state_35867__$1;
(statearr_35908_37387[(2)] = null);

(statearr_35908_37387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (19))){
var inst_35792 = (state_35867[(8)]);
var inst_35848 = (state_35867[(11)]);
var inst_35850 = cljs.core.async.muxch_STAR_(inst_35848);
var state_35867__$1 = state_35867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35867__$1,(22),inst_35850,inst_35792);
} else {
if((state_val_35868 === (11))){
var inst_35802 = (state_35867[(12)]);
var inst_35821 = (state_35867[(10)]);
var inst_35821__$1 = cljs.core.seq(inst_35802);
var state_35867__$1 = (function (){var statearr_35910 = state_35867;
(statearr_35910[(10)] = inst_35821__$1);

return statearr_35910;
})();
if(inst_35821__$1){
var statearr_35913_37393 = state_35867__$1;
(statearr_35913_37393[(1)] = (13));

} else {
var statearr_35914_37394 = state_35867__$1;
(statearr_35914_37394[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (9))){
var inst_35844 = (state_35867[(2)]);
var state_35867__$1 = state_35867;
var statearr_35916_37398 = state_35867__$1;
(statearr_35916_37398[(2)] = inst_35844);

(statearr_35916_37398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (5))){
var inst_35799 = cljs.core.deref(mults);
var inst_35800 = cljs.core.vals(inst_35799);
var inst_35801 = cljs.core.seq(inst_35800);
var inst_35802 = inst_35801;
var inst_35803 = null;
var inst_35804 = (0);
var inst_35805 = (0);
var state_35867__$1 = (function (){var statearr_35917 = state_35867;
(statearr_35917[(12)] = inst_35802);

(statearr_35917[(13)] = inst_35803);

(statearr_35917[(14)] = inst_35805);

(statearr_35917[(15)] = inst_35804);

return statearr_35917;
})();
var statearr_35922_37403 = state_35867__$1;
(statearr_35922_37403[(2)] = null);

(statearr_35922_37403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (14))){
var state_35867__$1 = state_35867;
var statearr_35929_37405 = state_35867__$1;
(statearr_35929_37405[(2)] = null);

(statearr_35929_37405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (16))){
var inst_35821 = (state_35867[(10)]);
var inst_35826 = cljs.core.chunk_first(inst_35821);
var inst_35827 = cljs.core.chunk_rest(inst_35821);
var inst_35828 = cljs.core.count(inst_35826);
var inst_35802 = inst_35827;
var inst_35803 = inst_35826;
var inst_35804 = inst_35828;
var inst_35805 = (0);
var state_35867__$1 = (function (){var statearr_35932 = state_35867;
(statearr_35932[(12)] = inst_35802);

(statearr_35932[(13)] = inst_35803);

(statearr_35932[(14)] = inst_35805);

(statearr_35932[(15)] = inst_35804);

return statearr_35932;
})();
var statearr_35933_37412 = state_35867__$1;
(statearr_35933_37412[(2)] = null);

(statearr_35933_37412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (10))){
var inst_35802 = (state_35867[(12)]);
var inst_35803 = (state_35867[(13)]);
var inst_35805 = (state_35867[(14)]);
var inst_35804 = (state_35867[(15)]);
var inst_35810 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35803,inst_35805);
var inst_35812 = cljs.core.async.muxch_STAR_(inst_35810);
var inst_35813 = cljs.core.async.close_BANG_(inst_35812);
var inst_35816 = (inst_35805 + (1));
var tmp35924 = inst_35802;
var tmp35925 = inst_35803;
var tmp35926 = inst_35804;
var inst_35802__$1 = tmp35924;
var inst_35803__$1 = tmp35925;
var inst_35804__$1 = tmp35926;
var inst_35805__$1 = inst_35816;
var state_35867__$1 = (function (){var statearr_35937 = state_35867;
(statearr_35937[(12)] = inst_35802__$1);

(statearr_35937[(17)] = inst_35813);

(statearr_35937[(13)] = inst_35803__$1);

(statearr_35937[(14)] = inst_35805__$1);

(statearr_35937[(15)] = inst_35804__$1);

return statearr_35937;
})();
var statearr_35938_37418 = state_35867__$1;
(statearr_35938_37418[(2)] = null);

(statearr_35938_37418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (18))){
var inst_35837 = (state_35867[(2)]);
var state_35867__$1 = state_35867;
var statearr_35941_37419 = state_35867__$1;
(statearr_35941_37419[(2)] = inst_35837);

(statearr_35941_37419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35868 === (8))){
var inst_35805 = (state_35867[(14)]);
var inst_35804 = (state_35867[(15)]);
var inst_35807 = (inst_35805 < inst_35804);
var inst_35808 = inst_35807;
var state_35867__$1 = state_35867;
if(cljs.core.truth_(inst_35808)){
var statearr_35944_37420 = state_35867__$1;
(statearr_35944_37420[(1)] = (10));

} else {
var statearr_35945_37421 = state_35867__$1;
(statearr_35945_37421[(1)] = (11));

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
var statearr_35949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35949[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35949[(1)] = (1));

return statearr_35949;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35867){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35867);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35951){if((e35951 instanceof Object)){
var ex__34210__auto__ = e35951;
var statearr_35953_37427 = state_35867;
(statearr_35953_37427[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35951;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37429 = state_35867;
state_35867 = G__37429;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35957 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35957[(6)] = c__34274__auto___37340);

return statearr_35957;
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
var G__35962 = arguments.length;
switch (G__35962) {
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
var G__35972 = arguments.length;
switch (G__35972) {
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
var G__35981 = arguments.length;
switch (G__35981) {
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
var c__34274__auto___37447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36034){
var state_val_36035 = (state_36034[(1)]);
if((state_val_36035 === (7))){
var state_36034__$1 = state_36034;
var statearr_36036_37453 = state_36034__$1;
(statearr_36036_37453[(2)] = null);

(statearr_36036_37453[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36035 === (1))){
var state_36034__$1 = state_36034;
var statearr_36039_37455 = state_36034__$1;
(statearr_36039_37455[(2)] = null);

(statearr_36039_37455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36035 === (4))){
var inst_35993 = (state_36034[(7)]);
var inst_35995 = (inst_35993 < cnt);
var state_36034__$1 = state_36034;
if(cljs.core.truth_(inst_35995)){
var statearr_36041_37462 = state_36034__$1;
(statearr_36041_37462[(1)] = (6));

} else {
var statearr_36043_37463 = state_36034__$1;
(statearr_36043_37463[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36035 === (15))){
var inst_36030 = (state_36034[(2)]);
var state_36034__$1 = state_36034;
var statearr_36045_37464 = state_36034__$1;
(statearr_36045_37464[(2)] = inst_36030);

(statearr_36045_37464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36035 === (13))){
var inst_36023 = cljs.core.async.close_BANG_(out);
var state_36034__$1 = state_36034;
var statearr_36048_37467 = state_36034__$1;
(statearr_36048_37467[(2)] = inst_36023);

(statearr_36048_37467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36035 === (6))){
var state_36034__$1 = state_36034;
var statearr_36049_37468 = state_36034__$1;
(statearr_36049_37468[(2)] = null);

(statearr_36049_37468[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36035 === (3))){
var inst_36032 = (state_36034[(2)]);
var state_36034__$1 = state_36034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36034__$1,inst_36032);
} else {
if((state_val_36035 === (12))){
var inst_36020 = (state_36034[(8)]);
var inst_36020__$1 = (state_36034[(2)]);
var inst_36021 = cljs.core.some(cljs.core.nil_QMARK_,inst_36020__$1);
var state_36034__$1 = (function (){var statearr_36059 = state_36034;
(statearr_36059[(8)] = inst_36020__$1);

return statearr_36059;
})();
if(cljs.core.truth_(inst_36021)){
var statearr_36060_37476 = state_36034__$1;
(statearr_36060_37476[(1)] = (13));

} else {
var statearr_36061_37477 = state_36034__$1;
(statearr_36061_37477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36035 === (2))){
var inst_35992 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35993 = (0);
var state_36034__$1 = (function (){var statearr_36062 = state_36034;
(statearr_36062[(9)] = inst_35992);

(statearr_36062[(7)] = inst_35993);

return statearr_36062;
})();
var statearr_36063_37482 = state_36034__$1;
(statearr_36063_37482[(2)] = null);

(statearr_36063_37482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36035 === (11))){
var inst_35993 = (state_36034[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36034,(10),Object,null,(9));
var inst_36006 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35993) : chs__$1.call(null,inst_35993));
var inst_36007 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35993) : done.call(null,inst_35993));
var inst_36008 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36006,inst_36007);
var state_36034__$1 = state_36034;
var statearr_36064_37486 = state_36034__$1;
(statearr_36064_37486[(2)] = inst_36008);


cljs.core.async.impl.ioc_helpers.process_exception(state_36034__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36035 === (9))){
var inst_35993 = (state_36034[(7)]);
var inst_36010 = (state_36034[(2)]);
var inst_36012 = (inst_35993 + (1));
var inst_35993__$1 = inst_36012;
var state_36034__$1 = (function (){var statearr_36067 = state_36034;
(statearr_36067[(7)] = inst_35993__$1);

(statearr_36067[(10)] = inst_36010);

return statearr_36067;
})();
var statearr_36069_37494 = state_36034__$1;
(statearr_36069_37494[(2)] = null);

(statearr_36069_37494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36035 === (5))){
var inst_36018 = (state_36034[(2)]);
var state_36034__$1 = (function (){var statearr_36070 = state_36034;
(statearr_36070[(11)] = inst_36018);

return statearr_36070;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36034__$1,(12),dchan);
} else {
if((state_val_36035 === (14))){
var inst_36020 = (state_36034[(8)]);
var inst_36025 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36020);
var state_36034__$1 = state_36034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36034__$1,(16),out,inst_36025);
} else {
if((state_val_36035 === (16))){
var inst_36027 = (state_36034[(2)]);
var state_36034__$1 = (function (){var statearr_36073 = state_36034;
(statearr_36073[(12)] = inst_36027);

return statearr_36073;
})();
var statearr_36074_37500 = state_36034__$1;
(statearr_36074_37500[(2)] = null);

(statearr_36074_37500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36035 === (10))){
var inst_35999 = (state_36034[(2)]);
var inst_36000 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36034__$1 = (function (){var statearr_36076 = state_36034;
(statearr_36076[(13)] = inst_35999);

return statearr_36076;
})();
var statearr_36077_37503 = state_36034__$1;
(statearr_36077_37503[(2)] = inst_36000);


cljs.core.async.impl.ioc_helpers.process_exception(state_36034__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36035 === (8))){
var inst_36016 = (state_36034[(2)]);
var state_36034__$1 = state_36034;
var statearr_36078_37504 = state_36034__$1;
(statearr_36078_37504[(2)] = inst_36016);

(statearr_36078_37504[(1)] = (5));


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
var statearr_36082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36082[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36082[(1)] = (1));

return statearr_36082;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36034){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36034);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36083){if((e36083 instanceof Object)){
var ex__34210__auto__ = e36083;
var statearr_36084_37511 = state_36034;
(statearr_36084_37511[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37513 = state_36034;
state_36034 = G__37513;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36085 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36085[(6)] = c__34274__auto___37447);

return statearr_36085;
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
var G__36095 = arguments.length;
switch (G__36095) {
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
var c__34274__auto___37522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36127){
var state_val_36128 = (state_36127[(1)]);
if((state_val_36128 === (7))){
var inst_36106 = (state_36127[(7)]);
var inst_36107 = (state_36127[(8)]);
var inst_36106__$1 = (state_36127[(2)]);
var inst_36107__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36106__$1,(0),null);
var inst_36108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36106__$1,(1),null);
var inst_36109 = (inst_36107__$1 == null);
var state_36127__$1 = (function (){var statearr_36129 = state_36127;
(statearr_36129[(7)] = inst_36106__$1);

(statearr_36129[(8)] = inst_36107__$1);

(statearr_36129[(9)] = inst_36108);

return statearr_36129;
})();
if(cljs.core.truth_(inst_36109)){
var statearr_36130_37526 = state_36127__$1;
(statearr_36130_37526[(1)] = (8));

} else {
var statearr_36131_37527 = state_36127__$1;
(statearr_36131_37527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (1))){
var inst_36096 = cljs.core.vec(chs);
var inst_36097 = inst_36096;
var state_36127__$1 = (function (){var statearr_36132 = state_36127;
(statearr_36132[(10)] = inst_36097);

return statearr_36132;
})();
var statearr_36133_37530 = state_36127__$1;
(statearr_36133_37530[(2)] = null);

(statearr_36133_37530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (4))){
var inst_36097 = (state_36127[(10)]);
var state_36127__$1 = state_36127;
return cljs.core.async.ioc_alts_BANG_(state_36127__$1,(7),inst_36097);
} else {
if((state_val_36128 === (6))){
var inst_36123 = (state_36127[(2)]);
var state_36127__$1 = state_36127;
var statearr_36134_37532 = state_36127__$1;
(statearr_36134_37532[(2)] = inst_36123);

(statearr_36134_37532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (3))){
var inst_36125 = (state_36127[(2)]);
var state_36127__$1 = state_36127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36127__$1,inst_36125);
} else {
if((state_val_36128 === (2))){
var inst_36097 = (state_36127[(10)]);
var inst_36099 = cljs.core.count(inst_36097);
var inst_36100 = (inst_36099 > (0));
var state_36127__$1 = state_36127;
if(cljs.core.truth_(inst_36100)){
var statearr_36136_37536 = state_36127__$1;
(statearr_36136_37536[(1)] = (4));

} else {
var statearr_36137_37537 = state_36127__$1;
(statearr_36137_37537[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (11))){
var inst_36097 = (state_36127[(10)]);
var inst_36116 = (state_36127[(2)]);
var tmp36135 = inst_36097;
var inst_36097__$1 = tmp36135;
var state_36127__$1 = (function (){var statearr_36139 = state_36127;
(statearr_36139[(10)] = inst_36097__$1);

(statearr_36139[(11)] = inst_36116);

return statearr_36139;
})();
var statearr_36141_37543 = state_36127__$1;
(statearr_36141_37543[(2)] = null);

(statearr_36141_37543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (9))){
var inst_36107 = (state_36127[(8)]);
var state_36127__$1 = state_36127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36127__$1,(11),out,inst_36107);
} else {
if((state_val_36128 === (5))){
var inst_36121 = cljs.core.async.close_BANG_(out);
var state_36127__$1 = state_36127;
var statearr_36148_37546 = state_36127__$1;
(statearr_36148_37546[(2)] = inst_36121);

(statearr_36148_37546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (10))){
var inst_36119 = (state_36127[(2)]);
var state_36127__$1 = state_36127;
var statearr_36150_37547 = state_36127__$1;
(statearr_36150_37547[(2)] = inst_36119);

(statearr_36150_37547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36128 === (8))){
var inst_36097 = (state_36127[(10)]);
var inst_36106 = (state_36127[(7)]);
var inst_36107 = (state_36127[(8)]);
var inst_36108 = (state_36127[(9)]);
var inst_36111 = (function (){var cs = inst_36097;
var vec__36102 = inst_36106;
var v = inst_36107;
var c = inst_36108;
return (function (p1__36092_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36092_SHARP_);
});
})();
var inst_36112 = cljs.core.filterv(inst_36111,inst_36097);
var inst_36097__$1 = inst_36112;
var state_36127__$1 = (function (){var statearr_36155 = state_36127;
(statearr_36155[(10)] = inst_36097__$1);

return statearr_36155;
})();
var statearr_36156_37551 = state_36127__$1;
(statearr_36156_37551[(2)] = null);

(statearr_36156_37551[(1)] = (2));


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
var statearr_36160 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36160[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36160[(1)] = (1));

return statearr_36160;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36127){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36127);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36161){if((e36161 instanceof Object)){
var ex__34210__auto__ = e36161;
var statearr_36162_37558 = state_36127;
(statearr_36162_37558[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37559 = state_36127;
state_36127 = G__37559;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36163 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36163[(6)] = c__34274__auto___37522);

return statearr_36163;
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
var G__36171 = arguments.length;
switch (G__36171) {
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
var c__34274__auto___37566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36199){
var state_val_36200 = (state_36199[(1)]);
if((state_val_36200 === (7))){
var inst_36181 = (state_36199[(7)]);
var inst_36181__$1 = (state_36199[(2)]);
var inst_36182 = (inst_36181__$1 == null);
var inst_36183 = cljs.core.not(inst_36182);
var state_36199__$1 = (function (){var statearr_36201 = state_36199;
(statearr_36201[(7)] = inst_36181__$1);

return statearr_36201;
})();
if(inst_36183){
var statearr_36202_37570 = state_36199__$1;
(statearr_36202_37570[(1)] = (8));

} else {
var statearr_36203_37571 = state_36199__$1;
(statearr_36203_37571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (1))){
var inst_36176 = (0);
var state_36199__$1 = (function (){var statearr_36204 = state_36199;
(statearr_36204[(8)] = inst_36176);

return statearr_36204;
})();
var statearr_36205_37572 = state_36199__$1;
(statearr_36205_37572[(2)] = null);

(statearr_36205_37572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (4))){
var state_36199__$1 = state_36199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36199__$1,(7),ch);
} else {
if((state_val_36200 === (6))){
var inst_36194 = (state_36199[(2)]);
var state_36199__$1 = state_36199;
var statearr_36206_37575 = state_36199__$1;
(statearr_36206_37575[(2)] = inst_36194);

(statearr_36206_37575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (3))){
var inst_36196 = (state_36199[(2)]);
var inst_36197 = cljs.core.async.close_BANG_(out);
var state_36199__$1 = (function (){var statearr_36207 = state_36199;
(statearr_36207[(9)] = inst_36196);

return statearr_36207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36199__$1,inst_36197);
} else {
if((state_val_36200 === (2))){
var inst_36176 = (state_36199[(8)]);
var inst_36178 = (inst_36176 < n);
var state_36199__$1 = state_36199;
if(cljs.core.truth_(inst_36178)){
var statearr_36208_37580 = state_36199__$1;
(statearr_36208_37580[(1)] = (4));

} else {
var statearr_36209_37581 = state_36199__$1;
(statearr_36209_37581[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (11))){
var inst_36176 = (state_36199[(8)]);
var inst_36186 = (state_36199[(2)]);
var inst_36187 = (inst_36176 + (1));
var inst_36176__$1 = inst_36187;
var state_36199__$1 = (function (){var statearr_36210 = state_36199;
(statearr_36210[(8)] = inst_36176__$1);

(statearr_36210[(10)] = inst_36186);

return statearr_36210;
})();
var statearr_36211_37583 = state_36199__$1;
(statearr_36211_37583[(2)] = null);

(statearr_36211_37583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (9))){
var state_36199__$1 = state_36199;
var statearr_36212_37586 = state_36199__$1;
(statearr_36212_37586[(2)] = null);

(statearr_36212_37586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (5))){
var state_36199__$1 = state_36199;
var statearr_36213_37590 = state_36199__$1;
(statearr_36213_37590[(2)] = null);

(statearr_36213_37590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (10))){
var inst_36191 = (state_36199[(2)]);
var state_36199__$1 = state_36199;
var statearr_36215_37596 = state_36199__$1;
(statearr_36215_37596[(2)] = inst_36191);

(statearr_36215_37596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36200 === (8))){
var inst_36181 = (state_36199[(7)]);
var state_36199__$1 = state_36199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36199__$1,(11),out,inst_36181);
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
var statearr_36216 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36216[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36216[(1)] = (1));

return statearr_36216;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36199){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36199);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36218){if((e36218 instanceof Object)){
var ex__34210__auto__ = e36218;
var statearr_36219_37601 = state_36199;
(statearr_36219_37601[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37604 = state_36199;
state_36199 = G__37604;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36220 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36220[(6)] = c__34274__auto___37566);

return statearr_36220;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36226 = (function (f,ch,meta36227){
this.f = f;
this.ch = ch;
this.meta36227 = meta36227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36228,meta36227__$1){
var self__ = this;
var _36228__$1 = this;
return (new cljs.core.async.t_cljs$core$async36226(self__.f,self__.ch,meta36227__$1));
}));

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36228){
var self__ = this;
var _36228__$1 = this;
return self__.meta36227;
}));

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36233 = (function (f,ch,meta36227,_,fn1,meta36234){
this.f = f;
this.ch = ch;
this.meta36227 = meta36227;
this._ = _;
this.fn1 = fn1;
this.meta36234 = meta36234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36235,meta36234__$1){
var self__ = this;
var _36235__$1 = this;
return (new cljs.core.async.t_cljs$core$async36233(self__.f,self__.ch,self__.meta36227,self__._,self__.fn1,meta36234__$1));
}));

(cljs.core.async.t_cljs$core$async36233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36235){
var self__ = this;
var _36235__$1 = this;
return self__.meta36234;
}));

(cljs.core.async.t_cljs$core$async36233.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36233.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36233.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36233.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36222_SHARP_){
var G__36244 = (((p1__36222_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36222_SHARP_) : self__.f.call(null,p1__36222_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36244) : f1.call(null,G__36244));
});
}));

(cljs.core.async.t_cljs$core$async36233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36227","meta36227",-798583611,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36226","cljs.core.async/t_cljs$core$async36226",-2023446474,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36234","meta36234",-1361614166,null)], null);
}));

(cljs.core.async.t_cljs$core$async36233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36233");

(cljs.core.async.t_cljs$core$async36233.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36233.
 */
cljs.core.async.__GT_t_cljs$core$async36233 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36233(f__$1,ch__$1,meta36227__$1,___$2,fn1__$1,meta36234){
return (new cljs.core.async.t_cljs$core$async36233(f__$1,ch__$1,meta36227__$1,___$2,fn1__$1,meta36234));
});

}

return (new cljs.core.async.t_cljs$core$async36233(self__.f,self__.ch,self__.meta36227,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36250 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36250) : self__.f.call(null,G__36250));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36227","meta36227",-798583611,null)], null);
}));

(cljs.core.async.t_cljs$core$async36226.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36226");

(cljs.core.async.t_cljs$core$async36226.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36226");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36226.
 */
cljs.core.async.__GT_t_cljs$core$async36226 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36226(f__$1,ch__$1,meta36227){
return (new cljs.core.async.t_cljs$core$async36226(f__$1,ch__$1,meta36227));
});

}

return (new cljs.core.async.t_cljs$core$async36226(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36251 = (function (f,ch,meta36252){
this.f = f;
this.ch = ch;
this.meta36252 = meta36252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36253,meta36252__$1){
var self__ = this;
var _36253__$1 = this;
return (new cljs.core.async.t_cljs$core$async36251(self__.f,self__.ch,meta36252__$1));
}));

(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36253){
var self__ = this;
var _36253__$1 = this;
return self__.meta36252;
}));

(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36251.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36252","meta36252",1362345826,null)], null);
}));

(cljs.core.async.t_cljs$core$async36251.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36251");

(cljs.core.async.t_cljs$core$async36251.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36251");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36251.
 */
cljs.core.async.__GT_t_cljs$core$async36251 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36251(f__$1,ch__$1,meta36252){
return (new cljs.core.async.t_cljs$core$async36251(f__$1,ch__$1,meta36252));
});

}

return (new cljs.core.async.t_cljs$core$async36251(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36258 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36258 = (function (p,ch,meta36259){
this.p = p;
this.ch = ch;
this.meta36259 = meta36259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36260,meta36259__$1){
var self__ = this;
var _36260__$1 = this;
return (new cljs.core.async.t_cljs$core$async36258(self__.p,self__.ch,meta36259__$1));
}));

(cljs.core.async.t_cljs$core$async36258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36260){
var self__ = this;
var _36260__$1 = this;
return self__.meta36259;
}));

(cljs.core.async.t_cljs$core$async36258.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36258.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36258.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36258.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36258.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36258.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36258.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36259","meta36259",-1185208411,null)], null);
}));

(cljs.core.async.t_cljs$core$async36258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36258");

(cljs.core.async.t_cljs$core$async36258.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36258.
 */
cljs.core.async.__GT_t_cljs$core$async36258 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36258(p__$1,ch__$1,meta36259){
return (new cljs.core.async.t_cljs$core$async36258(p__$1,ch__$1,meta36259));
});

}

return (new cljs.core.async.t_cljs$core$async36258(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36272 = arguments.length;
switch (G__36272) {
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
var c__34274__auto___37685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36295){
var state_val_36296 = (state_36295[(1)]);
if((state_val_36296 === (7))){
var inst_36291 = (state_36295[(2)]);
var state_36295__$1 = state_36295;
var statearr_36299_37689 = state_36295__$1;
(statearr_36299_37689[(2)] = inst_36291);

(statearr_36299_37689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (1))){
var state_36295__$1 = state_36295;
var statearr_36302_37693 = state_36295__$1;
(statearr_36302_37693[(2)] = null);

(statearr_36302_37693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (4))){
var inst_36277 = (state_36295[(7)]);
var inst_36277__$1 = (state_36295[(2)]);
var inst_36278 = (inst_36277__$1 == null);
var state_36295__$1 = (function (){var statearr_36306 = state_36295;
(statearr_36306[(7)] = inst_36277__$1);

return statearr_36306;
})();
if(cljs.core.truth_(inst_36278)){
var statearr_36309_37697 = state_36295__$1;
(statearr_36309_37697[(1)] = (5));

} else {
var statearr_36310_37698 = state_36295__$1;
(statearr_36310_37698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (6))){
var inst_36277 = (state_36295[(7)]);
var inst_36282 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36277) : p.call(null,inst_36277));
var state_36295__$1 = state_36295;
if(cljs.core.truth_(inst_36282)){
var statearr_36312_37699 = state_36295__$1;
(statearr_36312_37699[(1)] = (8));

} else {
var statearr_36313_37702 = state_36295__$1;
(statearr_36313_37702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (3))){
var inst_36293 = (state_36295[(2)]);
var state_36295__$1 = state_36295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36295__$1,inst_36293);
} else {
if((state_val_36296 === (2))){
var state_36295__$1 = state_36295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36295__$1,(4),ch);
} else {
if((state_val_36296 === (11))){
var inst_36285 = (state_36295[(2)]);
var state_36295__$1 = state_36295;
var statearr_36319_37712 = state_36295__$1;
(statearr_36319_37712[(2)] = inst_36285);

(statearr_36319_37712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (9))){
var state_36295__$1 = state_36295;
var statearr_36326_37714 = state_36295__$1;
(statearr_36326_37714[(2)] = null);

(statearr_36326_37714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (5))){
var inst_36280 = cljs.core.async.close_BANG_(out);
var state_36295__$1 = state_36295;
var statearr_36327_37716 = state_36295__$1;
(statearr_36327_37716[(2)] = inst_36280);

(statearr_36327_37716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (10))){
var inst_36288 = (state_36295[(2)]);
var state_36295__$1 = (function (){var statearr_36328 = state_36295;
(statearr_36328[(8)] = inst_36288);

return statearr_36328;
})();
var statearr_36329_37721 = state_36295__$1;
(statearr_36329_37721[(2)] = null);

(statearr_36329_37721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36296 === (8))){
var inst_36277 = (state_36295[(7)]);
var state_36295__$1 = state_36295;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36295__$1,(11),out,inst_36277);
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
var statearr_36330 = [null,null,null,null,null,null,null,null,null];
(statearr_36330[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36330[(1)] = (1));

return statearr_36330;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36295){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36295);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36331){if((e36331 instanceof Object)){
var ex__34210__auto__ = e36331;
var statearr_36332_37727 = state_36295;
(statearr_36332_37727[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37730 = state_36295;
state_36295 = G__37730;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36334 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36334[(6)] = c__34274__auto___37685);

return statearr_36334;
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
var G__36338 = arguments.length;
switch (G__36338) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36404){
var state_val_36405 = (state_36404[(1)]);
if((state_val_36405 === (7))){
var inst_36400 = (state_36404[(2)]);
var state_36404__$1 = state_36404;
var statearr_36406_37751 = state_36404__$1;
(statearr_36406_37751[(2)] = inst_36400);

(statearr_36406_37751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (20))){
var inst_36370 = (state_36404[(7)]);
var inst_36381 = (state_36404[(2)]);
var inst_36382 = cljs.core.next(inst_36370);
var inst_36356 = inst_36382;
var inst_36357 = null;
var inst_36358 = (0);
var inst_36359 = (0);
var state_36404__$1 = (function (){var statearr_36409 = state_36404;
(statearr_36409[(8)] = inst_36357);

(statearr_36409[(9)] = inst_36356);

(statearr_36409[(10)] = inst_36358);

(statearr_36409[(11)] = inst_36359);

(statearr_36409[(12)] = inst_36381);

return statearr_36409;
})();
var statearr_36410_37753 = state_36404__$1;
(statearr_36410_37753[(2)] = null);

(statearr_36410_37753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (1))){
var state_36404__$1 = state_36404;
var statearr_36411_37759 = state_36404__$1;
(statearr_36411_37759[(2)] = null);

(statearr_36411_37759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (4))){
var inst_36345 = (state_36404[(13)]);
var inst_36345__$1 = (state_36404[(2)]);
var inst_36346 = (inst_36345__$1 == null);
var state_36404__$1 = (function (){var statearr_36414 = state_36404;
(statearr_36414[(13)] = inst_36345__$1);

return statearr_36414;
})();
if(cljs.core.truth_(inst_36346)){
var statearr_36416_37766 = state_36404__$1;
(statearr_36416_37766[(1)] = (5));

} else {
var statearr_36417_37767 = state_36404__$1;
(statearr_36417_37767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (15))){
var state_36404__$1 = state_36404;
var statearr_36422_37769 = state_36404__$1;
(statearr_36422_37769[(2)] = null);

(statearr_36422_37769[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (21))){
var state_36404__$1 = state_36404;
var statearr_36423_37771 = state_36404__$1;
(statearr_36423_37771[(2)] = null);

(statearr_36423_37771[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (13))){
var inst_36357 = (state_36404[(8)]);
var inst_36356 = (state_36404[(9)]);
var inst_36358 = (state_36404[(10)]);
var inst_36359 = (state_36404[(11)]);
var inst_36366 = (state_36404[(2)]);
var inst_36367 = (inst_36359 + (1));
var tmp36419 = inst_36357;
var tmp36420 = inst_36356;
var tmp36421 = inst_36358;
var inst_36356__$1 = tmp36420;
var inst_36357__$1 = tmp36419;
var inst_36358__$1 = tmp36421;
var inst_36359__$1 = inst_36367;
var state_36404__$1 = (function (){var statearr_36432 = state_36404;
(statearr_36432[(8)] = inst_36357__$1);

(statearr_36432[(9)] = inst_36356__$1);

(statearr_36432[(14)] = inst_36366);

(statearr_36432[(10)] = inst_36358__$1);

(statearr_36432[(11)] = inst_36359__$1);

return statearr_36432;
})();
var statearr_36433_37780 = state_36404__$1;
(statearr_36433_37780[(2)] = null);

(statearr_36433_37780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (22))){
var state_36404__$1 = state_36404;
var statearr_36434_37782 = state_36404__$1;
(statearr_36434_37782[(2)] = null);

(statearr_36434_37782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (6))){
var inst_36345 = (state_36404[(13)]);
var inst_36354 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36345) : f.call(null,inst_36345));
var inst_36355 = cljs.core.seq(inst_36354);
var inst_36356 = inst_36355;
var inst_36357 = null;
var inst_36358 = (0);
var inst_36359 = (0);
var state_36404__$1 = (function (){var statearr_36436 = state_36404;
(statearr_36436[(8)] = inst_36357);

(statearr_36436[(9)] = inst_36356);

(statearr_36436[(10)] = inst_36358);

(statearr_36436[(11)] = inst_36359);

return statearr_36436;
})();
var statearr_36438_37792 = state_36404__$1;
(statearr_36438_37792[(2)] = null);

(statearr_36438_37792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (17))){
var inst_36370 = (state_36404[(7)]);
var inst_36374 = cljs.core.chunk_first(inst_36370);
var inst_36375 = cljs.core.chunk_rest(inst_36370);
var inst_36376 = cljs.core.count(inst_36374);
var inst_36356 = inst_36375;
var inst_36357 = inst_36374;
var inst_36358 = inst_36376;
var inst_36359 = (0);
var state_36404__$1 = (function (){var statearr_36440 = state_36404;
(statearr_36440[(8)] = inst_36357);

(statearr_36440[(9)] = inst_36356);

(statearr_36440[(10)] = inst_36358);

(statearr_36440[(11)] = inst_36359);

return statearr_36440;
})();
var statearr_36442_37797 = state_36404__$1;
(statearr_36442_37797[(2)] = null);

(statearr_36442_37797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (3))){
var inst_36402 = (state_36404[(2)]);
var state_36404__$1 = state_36404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36404__$1,inst_36402);
} else {
if((state_val_36405 === (12))){
var inst_36390 = (state_36404[(2)]);
var state_36404__$1 = state_36404;
var statearr_36444_37805 = state_36404__$1;
(statearr_36444_37805[(2)] = inst_36390);

(statearr_36444_37805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (2))){
var state_36404__$1 = state_36404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36404__$1,(4),in$);
} else {
if((state_val_36405 === (23))){
var inst_36398 = (state_36404[(2)]);
var state_36404__$1 = state_36404;
var statearr_36447_37808 = state_36404__$1;
(statearr_36447_37808[(2)] = inst_36398);

(statearr_36447_37808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (19))){
var inst_36385 = (state_36404[(2)]);
var state_36404__$1 = state_36404;
var statearr_36448_37809 = state_36404__$1;
(statearr_36448_37809[(2)] = inst_36385);

(statearr_36448_37809[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (11))){
var inst_36356 = (state_36404[(9)]);
var inst_36370 = (state_36404[(7)]);
var inst_36370__$1 = cljs.core.seq(inst_36356);
var state_36404__$1 = (function (){var statearr_36449 = state_36404;
(statearr_36449[(7)] = inst_36370__$1);

return statearr_36449;
})();
if(inst_36370__$1){
var statearr_36450_37816 = state_36404__$1;
(statearr_36450_37816[(1)] = (14));

} else {
var statearr_36451_37817 = state_36404__$1;
(statearr_36451_37817[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (9))){
var inst_36392 = (state_36404[(2)]);
var inst_36393 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36404__$1 = (function (){var statearr_36454 = state_36404;
(statearr_36454[(15)] = inst_36392);

return statearr_36454;
})();
if(cljs.core.truth_(inst_36393)){
var statearr_36455_37819 = state_36404__$1;
(statearr_36455_37819[(1)] = (21));

} else {
var statearr_36456_37821 = state_36404__$1;
(statearr_36456_37821[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (5))){
var inst_36348 = cljs.core.async.close_BANG_(out);
var state_36404__$1 = state_36404;
var statearr_36457_37822 = state_36404__$1;
(statearr_36457_37822[(2)] = inst_36348);

(statearr_36457_37822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (14))){
var inst_36370 = (state_36404[(7)]);
var inst_36372 = cljs.core.chunked_seq_QMARK_(inst_36370);
var state_36404__$1 = state_36404;
if(inst_36372){
var statearr_36458_37826 = state_36404__$1;
(statearr_36458_37826[(1)] = (17));

} else {
var statearr_36460_37827 = state_36404__$1;
(statearr_36460_37827[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (16))){
var inst_36388 = (state_36404[(2)]);
var state_36404__$1 = state_36404;
var statearr_36463_37828 = state_36404__$1;
(statearr_36463_37828[(2)] = inst_36388);

(statearr_36463_37828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36405 === (10))){
var inst_36357 = (state_36404[(8)]);
var inst_36359 = (state_36404[(11)]);
var inst_36364 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36357,inst_36359);
var state_36404__$1 = state_36404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36404__$1,(13),out,inst_36364);
} else {
if((state_val_36405 === (18))){
var inst_36370 = (state_36404[(7)]);
var inst_36379 = cljs.core.first(inst_36370);
var state_36404__$1 = state_36404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36404__$1,(20),out,inst_36379);
} else {
if((state_val_36405 === (8))){
var inst_36358 = (state_36404[(10)]);
var inst_36359 = (state_36404[(11)]);
var inst_36361 = (inst_36359 < inst_36358);
var inst_36362 = inst_36361;
var state_36404__$1 = state_36404;
if(cljs.core.truth_(inst_36362)){
var statearr_36465_37831 = state_36404__$1;
(statearr_36465_37831[(1)] = (10));

} else {
var statearr_36467_37832 = state_36404__$1;
(statearr_36467_37832[(1)] = (11));

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
var statearr_36475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36475[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36475[(1)] = (1));

return statearr_36475;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36404){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36404);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36476){if((e36476 instanceof Object)){
var ex__34210__auto__ = e36476;
var statearr_36477_37835 = state_36404;
(statearr_36477_37835[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36476;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37836 = state_36404;
state_36404 = G__37836;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36404){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36479 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36479[(6)] = c__34274__auto__);

return statearr_36479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36484 = arguments.length;
switch (G__36484) {
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
var G__36489 = arguments.length;
switch (G__36489) {
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
var G__36495 = arguments.length;
switch (G__36495) {
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
var c__34274__auto___37849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36527){
var state_val_36528 = (state_36527[(1)]);
if((state_val_36528 === (7))){
var inst_36522 = (state_36527[(2)]);
var state_36527__$1 = state_36527;
var statearr_36531_37850 = state_36527__$1;
(statearr_36531_37850[(2)] = inst_36522);

(statearr_36531_37850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36528 === (1))){
var inst_36503 = null;
var state_36527__$1 = (function (){var statearr_36533 = state_36527;
(statearr_36533[(7)] = inst_36503);

return statearr_36533;
})();
var statearr_36535_37851 = state_36527__$1;
(statearr_36535_37851[(2)] = null);

(statearr_36535_37851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36528 === (4))){
var inst_36506 = (state_36527[(8)]);
var inst_36506__$1 = (state_36527[(2)]);
var inst_36507 = (inst_36506__$1 == null);
var inst_36508 = cljs.core.not(inst_36507);
var state_36527__$1 = (function (){var statearr_36536 = state_36527;
(statearr_36536[(8)] = inst_36506__$1);

return statearr_36536;
})();
if(inst_36508){
var statearr_36537_37856 = state_36527__$1;
(statearr_36537_37856[(1)] = (5));

} else {
var statearr_36538_37857 = state_36527__$1;
(statearr_36538_37857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36528 === (6))){
var state_36527__$1 = state_36527;
var statearr_36539_37863 = state_36527__$1;
(statearr_36539_37863[(2)] = null);

(statearr_36539_37863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36528 === (3))){
var inst_36524 = (state_36527[(2)]);
var inst_36525 = cljs.core.async.close_BANG_(out);
var state_36527__$1 = (function (){var statearr_36541 = state_36527;
(statearr_36541[(9)] = inst_36524);

return statearr_36541;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36527__$1,inst_36525);
} else {
if((state_val_36528 === (2))){
var state_36527__$1 = state_36527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36527__$1,(4),ch);
} else {
if((state_val_36528 === (11))){
var inst_36506 = (state_36527[(8)]);
var inst_36515 = (state_36527[(2)]);
var inst_36503 = inst_36506;
var state_36527__$1 = (function (){var statearr_36543 = state_36527;
(statearr_36543[(10)] = inst_36515);

(statearr_36543[(7)] = inst_36503);

return statearr_36543;
})();
var statearr_36544_37869 = state_36527__$1;
(statearr_36544_37869[(2)] = null);

(statearr_36544_37869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36528 === (9))){
var inst_36506 = (state_36527[(8)]);
var state_36527__$1 = state_36527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36527__$1,(11),out,inst_36506);
} else {
if((state_val_36528 === (5))){
var inst_36503 = (state_36527[(7)]);
var inst_36506 = (state_36527[(8)]);
var inst_36510 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36506,inst_36503);
var state_36527__$1 = state_36527;
if(inst_36510){
var statearr_36547_37873 = state_36527__$1;
(statearr_36547_37873[(1)] = (8));

} else {
var statearr_36548_37874 = state_36527__$1;
(statearr_36548_37874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36528 === (10))){
var inst_36519 = (state_36527[(2)]);
var state_36527__$1 = state_36527;
var statearr_36549_37876 = state_36527__$1;
(statearr_36549_37876[(2)] = inst_36519);

(statearr_36549_37876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36528 === (8))){
var inst_36503 = (state_36527[(7)]);
var tmp36546 = inst_36503;
var inst_36503__$1 = tmp36546;
var state_36527__$1 = (function (){var statearr_36553 = state_36527;
(statearr_36553[(7)] = inst_36503__$1);

return statearr_36553;
})();
var statearr_36554_37879 = state_36527__$1;
(statearr_36554_37879[(2)] = null);

(statearr_36554_37879[(1)] = (2));


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
var statearr_36556 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36556[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36556[(1)] = (1));

return statearr_36556;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36527){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36527);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36558){if((e36558 instanceof Object)){
var ex__34210__auto__ = e36558;
var statearr_36559_37888 = state_36527;
(statearr_36559_37888[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36558;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37890 = state_36527;
state_36527 = G__37890;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36560 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36560[(6)] = c__34274__auto___37849);

return statearr_36560;
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
var G__36571 = arguments.length;
switch (G__36571) {
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
var c__34274__auto___37900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36614){
var state_val_36615 = (state_36614[(1)]);
if((state_val_36615 === (7))){
var inst_36609 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
var statearr_36617_37907 = state_36614__$1;
(statearr_36617_37907[(2)] = inst_36609);

(statearr_36617_37907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (1))){
var inst_36574 = (new Array(n));
var inst_36575 = inst_36574;
var inst_36576 = (0);
var state_36614__$1 = (function (){var statearr_36618 = state_36614;
(statearr_36618[(7)] = inst_36576);

(statearr_36618[(8)] = inst_36575);

return statearr_36618;
})();
var statearr_36619_37910 = state_36614__$1;
(statearr_36619_37910[(2)] = null);

(statearr_36619_37910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (4))){
var inst_36579 = (state_36614[(9)]);
var inst_36579__$1 = (state_36614[(2)]);
var inst_36580 = (inst_36579__$1 == null);
var inst_36581 = cljs.core.not(inst_36580);
var state_36614__$1 = (function (){var statearr_36621 = state_36614;
(statearr_36621[(9)] = inst_36579__$1);

return statearr_36621;
})();
if(inst_36581){
var statearr_36623_37916 = state_36614__$1;
(statearr_36623_37916[(1)] = (5));

} else {
var statearr_36624_37917 = state_36614__$1;
(statearr_36624_37917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (15))){
var inst_36603 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
var statearr_36625_37921 = state_36614__$1;
(statearr_36625_37921[(2)] = inst_36603);

(statearr_36625_37921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (13))){
var state_36614__$1 = state_36614;
var statearr_36626_37923 = state_36614__$1;
(statearr_36626_37923[(2)] = null);

(statearr_36626_37923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (6))){
var inst_36576 = (state_36614[(7)]);
var inst_36598 = (inst_36576 > (0));
var state_36614__$1 = state_36614;
if(cljs.core.truth_(inst_36598)){
var statearr_36629_37925 = state_36614__$1;
(statearr_36629_37925[(1)] = (12));

} else {
var statearr_36633_37926 = state_36614__$1;
(statearr_36633_37926[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (3))){
var inst_36611 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36614__$1,inst_36611);
} else {
if((state_val_36615 === (12))){
var inst_36575 = (state_36614[(8)]);
var inst_36601 = cljs.core.vec(inst_36575);
var state_36614__$1 = state_36614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36614__$1,(15),out,inst_36601);
} else {
if((state_val_36615 === (2))){
var state_36614__$1 = state_36614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36614__$1,(4),ch);
} else {
if((state_val_36615 === (11))){
var inst_36591 = (state_36614[(2)]);
var inst_36592 = (new Array(n));
var inst_36575 = inst_36592;
var inst_36576 = (0);
var state_36614__$1 = (function (){var statearr_36641 = state_36614;
(statearr_36641[(7)] = inst_36576);

(statearr_36641[(10)] = inst_36591);

(statearr_36641[(8)] = inst_36575);

return statearr_36641;
})();
var statearr_36642_37936 = state_36614__$1;
(statearr_36642_37936[(2)] = null);

(statearr_36642_37936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (9))){
var inst_36575 = (state_36614[(8)]);
var inst_36589 = cljs.core.vec(inst_36575);
var state_36614__$1 = state_36614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36614__$1,(11),out,inst_36589);
} else {
if((state_val_36615 === (5))){
var inst_36576 = (state_36614[(7)]);
var inst_36579 = (state_36614[(9)]);
var inst_36584 = (state_36614[(11)]);
var inst_36575 = (state_36614[(8)]);
var inst_36583 = (inst_36575[inst_36576] = inst_36579);
var inst_36584__$1 = (inst_36576 + (1));
var inst_36585 = (inst_36584__$1 < n);
var state_36614__$1 = (function (){var statearr_36644 = state_36614;
(statearr_36644[(12)] = inst_36583);

(statearr_36644[(11)] = inst_36584__$1);

return statearr_36644;
})();
if(cljs.core.truth_(inst_36585)){
var statearr_36649_37939 = state_36614__$1;
(statearr_36649_37939[(1)] = (8));

} else {
var statearr_36650_37941 = state_36614__$1;
(statearr_36650_37941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (14))){
var inst_36606 = (state_36614[(2)]);
var inst_36607 = cljs.core.async.close_BANG_(out);
var state_36614__$1 = (function (){var statearr_36652 = state_36614;
(statearr_36652[(13)] = inst_36606);

return statearr_36652;
})();
var statearr_36653_37943 = state_36614__$1;
(statearr_36653_37943[(2)] = inst_36607);

(statearr_36653_37943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (10))){
var inst_36595 = (state_36614[(2)]);
var state_36614__$1 = state_36614;
var statearr_36660_37950 = state_36614__$1;
(statearr_36660_37950[(2)] = inst_36595);

(statearr_36660_37950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36615 === (8))){
var inst_36584 = (state_36614[(11)]);
var inst_36575 = (state_36614[(8)]);
var tmp36651 = inst_36575;
var inst_36575__$1 = tmp36651;
var inst_36576 = inst_36584;
var state_36614__$1 = (function (){var statearr_36661 = state_36614;
(statearr_36661[(7)] = inst_36576);

(statearr_36661[(8)] = inst_36575__$1);

return statearr_36661;
})();
var statearr_36662_37952 = state_36614__$1;
(statearr_36662_37952[(2)] = null);

(statearr_36662_37952[(1)] = (2));


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
var statearr_36666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36666[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36666[(1)] = (1));

return statearr_36666;
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
}catch (e36671){if((e36671 instanceof Object)){
var ex__34210__auto__ = e36671;
var statearr_36672_37962 = state_36614;
(statearr_36672_37962[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37963 = state_36614;
state_36614 = G__37963;
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
var state__34276__auto__ = (function (){var statearr_36673 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36673[(6)] = c__34274__auto___37900);

return statearr_36673;
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
var G__36675 = arguments.length;
switch (G__36675) {
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
var c__34274__auto___37970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36720){
var state_val_36721 = (state_36720[(1)]);
if((state_val_36721 === (7))){
var inst_36716 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
var statearr_36723_37973 = state_36720__$1;
(statearr_36723_37973[(2)] = inst_36716);

(statearr_36723_37973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (1))){
var inst_36676 = [];
var inst_36677 = inst_36676;
var inst_36678 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36720__$1 = (function (){var statearr_36725 = state_36720;
(statearr_36725[(7)] = inst_36677);

(statearr_36725[(8)] = inst_36678);

return statearr_36725;
})();
var statearr_36726_37975 = state_36720__$1;
(statearr_36726_37975[(2)] = null);

(statearr_36726_37975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (4))){
var inst_36682 = (state_36720[(9)]);
var inst_36682__$1 = (state_36720[(2)]);
var inst_36683 = (inst_36682__$1 == null);
var inst_36684 = cljs.core.not(inst_36683);
var state_36720__$1 = (function (){var statearr_36727 = state_36720;
(statearr_36727[(9)] = inst_36682__$1);

return statearr_36727;
})();
if(inst_36684){
var statearr_36730_37980 = state_36720__$1;
(statearr_36730_37980[(1)] = (5));

} else {
var statearr_36731_37982 = state_36720__$1;
(statearr_36731_37982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (15))){
var inst_36710 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
var statearr_36733_37984 = state_36720__$1;
(statearr_36733_37984[(2)] = inst_36710);

(statearr_36733_37984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (13))){
var state_36720__$1 = state_36720;
var statearr_36735_37988 = state_36720__$1;
(statearr_36735_37988[(2)] = null);

(statearr_36735_37988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (6))){
var inst_36677 = (state_36720[(7)]);
var inst_36705 = inst_36677.length;
var inst_36706 = (inst_36705 > (0));
var state_36720__$1 = state_36720;
if(cljs.core.truth_(inst_36706)){
var statearr_36737_37989 = state_36720__$1;
(statearr_36737_37989[(1)] = (12));

} else {
var statearr_36738_37990 = state_36720__$1;
(statearr_36738_37990[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (3))){
var inst_36718 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36720__$1,inst_36718);
} else {
if((state_val_36721 === (12))){
var inst_36677 = (state_36720[(7)]);
var inst_36708 = cljs.core.vec(inst_36677);
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36720__$1,(15),out,inst_36708);
} else {
if((state_val_36721 === (2))){
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36720__$1,(4),ch);
} else {
if((state_val_36721 === (11))){
var inst_36687 = (state_36720[(10)]);
var inst_36682 = (state_36720[(9)]);
var inst_36698 = (state_36720[(2)]);
var inst_36699 = [];
var inst_36700 = inst_36699.push(inst_36682);
var inst_36677 = inst_36699;
var inst_36678 = inst_36687;
var state_36720__$1 = (function (){var statearr_36743 = state_36720;
(statearr_36743[(11)] = inst_36698);

(statearr_36743[(12)] = inst_36700);

(statearr_36743[(7)] = inst_36677);

(statearr_36743[(8)] = inst_36678);

return statearr_36743;
})();
var statearr_36744_38001 = state_36720__$1;
(statearr_36744_38001[(2)] = null);

(statearr_36744_38001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (9))){
var inst_36677 = (state_36720[(7)]);
var inst_36696 = cljs.core.vec(inst_36677);
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36720__$1,(11),out,inst_36696);
} else {
if((state_val_36721 === (5))){
var inst_36687 = (state_36720[(10)]);
var inst_36682 = (state_36720[(9)]);
var inst_36678 = (state_36720[(8)]);
var inst_36687__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36682) : f.call(null,inst_36682));
var inst_36688 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36687__$1,inst_36678);
var inst_36689 = cljs.core.keyword_identical_QMARK_(inst_36678,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36690 = ((inst_36688) || (inst_36689));
var state_36720__$1 = (function (){var statearr_36746 = state_36720;
(statearr_36746[(10)] = inst_36687__$1);

return statearr_36746;
})();
if(cljs.core.truth_(inst_36690)){
var statearr_36747_38008 = state_36720__$1;
(statearr_36747_38008[(1)] = (8));

} else {
var statearr_36748_38010 = state_36720__$1;
(statearr_36748_38010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (14))){
var inst_36713 = (state_36720[(2)]);
var inst_36714 = cljs.core.async.close_BANG_(out);
var state_36720__$1 = (function (){var statearr_36751 = state_36720;
(statearr_36751[(13)] = inst_36713);

return statearr_36751;
})();
var statearr_36752_38013 = state_36720__$1;
(statearr_36752_38013[(2)] = inst_36714);

(statearr_36752_38013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (10))){
var inst_36703 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
var statearr_36753_38017 = state_36720__$1;
(statearr_36753_38017[(2)] = inst_36703);

(statearr_36753_38017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (8))){
var inst_36687 = (state_36720[(10)]);
var inst_36682 = (state_36720[(9)]);
var inst_36677 = (state_36720[(7)]);
var inst_36692 = inst_36677.push(inst_36682);
var tmp36749 = inst_36677;
var inst_36677__$1 = tmp36749;
var inst_36678 = inst_36687;
var state_36720__$1 = (function (){var statearr_36758 = state_36720;
(statearr_36758[(14)] = inst_36692);

(statearr_36758[(7)] = inst_36677__$1);

(statearr_36758[(8)] = inst_36678);

return statearr_36758;
})();
var statearr_36759_38023 = state_36720__$1;
(statearr_36759_38023[(2)] = null);

(statearr_36759_38023[(1)] = (2));


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
var statearr_36761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36761[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36761[(1)] = (1));

return statearr_36761;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36720){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36720);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36762){if((e36762 instanceof Object)){
var ex__34210__auto__ = e36762;
var statearr_36763_38028 = state_36720;
(statearr_36763_38028[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38032 = state_36720;
state_36720 = G__38032;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36765 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36765[(6)] = c__34274__auto___37970);

return statearr_36765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
