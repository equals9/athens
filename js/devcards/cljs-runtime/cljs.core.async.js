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
var val_36844 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36844) : fn1.call(null,val_36844));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36844) : fn1.call(null,val_36844));
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
var n__4666__auto___36849 = n;
var x_36850 = (0);
while(true){
if((x_36850 < n__4666__auto___36849)){
(a[x_36850] = x_36850);

var G__36851 = (x_36850 + (1));
x_36850 = G__36851;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34351 = (function (flag,meta34352){
this.flag = flag;
this.meta34352 = meta34352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34353,meta34352__$1){
var self__ = this;
var _34353__$1 = this;
return (new cljs.core.async.t_cljs$core$async34351(self__.flag,meta34352__$1));
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
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34352","meta34352",58586617,null)], null);
}));

(cljs.core.async.t_cljs$core$async34351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34351");

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34351.
 */
cljs.core.async.__GT_t_cljs$core$async34351 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34351(flag__$1,meta34352){
return (new cljs.core.async.t_cljs$core$async34351(flag__$1,meta34352));
});

}

return (new cljs.core.async.t_cljs$core$async34351(flag,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34370 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34362_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34370) : fret.call(null,G__34370));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34363_SHARP_){
var G__34374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34363_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34374) : fret.call(null,G__34374));
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
var G__36860 = (i + (1));
i = G__36860;
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
var len__4789__auto___36862 = arguments.length;
var i__4790__auto___36863 = (0);
while(true){
if((i__4790__auto___36863 < len__4789__auto___36862)){
args__4795__auto__.push((arguments[i__4790__auto___36863]));

var G__36864 = (i__4790__auto___36863 + (1));
i__4790__auto___36863 = G__36864;
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
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34378){
var G__34379 = cljs.core.first(seq34378);
var seq34378__$1 = cljs.core.next(seq34378);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34379,seq34378__$1);
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
var c__34274__auto___36870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36871 = state_34423__$1;
(statearr_34425_36871[(2)] = inst_34419);

(statearr_34425_36871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36873 = state_34423__$1;
(statearr_34426_36873[(2)] = null);

(statearr_34426_36873[(1)] = (2));


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
var statearr_34428_36874 = state_34423__$1;
(statearr_34428_36874[(1)] = (5));

} else {
var statearr_34429_36875 = state_34423__$1;
(statearr_34429_36875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36877 = state_34423__$1;
(statearr_34430_36877[(2)] = null);

(statearr_34430_36877[(1)] = (14));


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
var statearr_34431_36878 = state_34423__$1;
(statearr_34431_36878[(2)] = null);

(statearr_34431_36878[(1)] = (2));


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
var statearr_34436_36880 = state_34423__$1;
(statearr_34436_36880[(1)] = (12));

} else {
var statearr_34437_36881 = state_34423__$1;
(statearr_34437_36881[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34438_36882 = state_34423__$1;
(statearr_34438_36882[(2)] = null);

(statearr_34438_36882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34439_36883 = state_34423__$1;
(statearr_34439_36883[(1)] = (8));

} else {
var statearr_34440_36884 = state_34423__$1;
(statearr_34440_36884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34417 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34442_36886 = state_34423__$1;
(statearr_34442_36886[(2)] = inst_34417);

(statearr_34442_36886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34409 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34443_36887 = state_34423__$1;
(statearr_34443_36887[(2)] = inst_34409);

(statearr_34443_36887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34406 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34444_36888 = state_34423__$1;
(statearr_34444_36888[(2)] = inst_34406);

(statearr_34444_36888[(1)] = (10));


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
var statearr_34445 = [null,null,null,null,null,null,null,null];
(statearr_34445[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34445[(1)] = (1));

return statearr_34445;
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
}catch (e34446){if((e34446 instanceof Object)){
var ex__34210__auto__ = e34446;
var statearr_34447_36890 = state_34423;
(statearr_34447_36890[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34446;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36892 = state_34423;
state_34423 = G__36892;
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
var state__34276__auto__ = (function (){var statearr_34448 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34448[(6)] = c__34274__auto___36870);

return statearr_34448;
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
var process = (function (p__34452){
var vec__34453 = p__34452;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34453,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34453,(1),null);
var job = vec__34453;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34274__auto___36895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34460){
var state_val_34461 = (state_34460[(1)]);
if((state_val_34461 === (1))){
var state_34460__$1 = state_34460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34460__$1,(2),res,v);
} else {
if((state_val_34461 === (2))){
var inst_34457 = (state_34460[(2)]);
var inst_34458 = cljs.core.async.close_BANG_(res);
var state_34460__$1 = (function (){var statearr_34467 = state_34460;
(statearr_34467[(7)] = inst_34457);

return statearr_34467;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34460__$1,inst_34458);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34470 = [null,null,null,null,null,null,null,null];
(statearr_34470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34470[(1)] = (1));

return statearr_34470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34460){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34460);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34471){if((e34471 instanceof Object)){
var ex__34210__auto__ = e34471;
var statearr_34472_36897 = state_34460;
(statearr_34472_36897[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34471;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36899 = state_34460;
state_34460 = G__36899;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34473 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34473[(6)] = c__34274__auto___36895);

return statearr_34473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34474){
var vec__34475 = p__34474;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34475,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34475,(1),null);
var job = vec__34475;
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
var n__4666__auto___36901 = n;
var __36902 = (0);
while(true){
if((__36902 < n__4666__auto___36901)){
var G__34479_36904 = type;
var G__34479_36905__$1 = (((G__34479_36904 instanceof cljs.core.Keyword))?G__34479_36904.fqn:null);
switch (G__34479_36905__$1) {
case "compute":
var c__34274__auto___36907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36902,c__34274__auto___36907,G__34479_36904,G__34479_36905__$1,n__4666__auto___36901,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36902,c__34274__auto___36907,G__34479_36904,G__34479_36905__$1,n__4666__auto___36901,jobs,results,process,async){
return (function (state_34492){
var state_val_34493 = (state_34492[(1)]);
if((state_val_34493 === (1))){
var state_34492__$1 = state_34492;
var statearr_34494_36909 = state_34492__$1;
(statearr_34494_36909[(2)] = null);

(statearr_34494_36909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (2))){
var state_34492__$1 = state_34492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34492__$1,(4),jobs);
} else {
if((state_val_34493 === (3))){
var inst_34490 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34492__$1,inst_34490);
} else {
if((state_val_34493 === (4))){
var inst_34482 = (state_34492[(2)]);
var inst_34483 = process(inst_34482);
var state_34492__$1 = state_34492;
if(cljs.core.truth_(inst_34483)){
var statearr_34499_36911 = state_34492__$1;
(statearr_34499_36911[(1)] = (5));

} else {
var statearr_34500_36912 = state_34492__$1;
(statearr_34500_36912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (5))){
var state_34492__$1 = state_34492;
var statearr_34504_36913 = state_34492__$1;
(statearr_34504_36913[(2)] = null);

(statearr_34504_36913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (6))){
var state_34492__$1 = state_34492;
var statearr_34505_36914 = state_34492__$1;
(statearr_34505_36914[(2)] = null);

(statearr_34505_36914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (7))){
var inst_34488 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
var statearr_34506_36916 = state_34492__$1;
(statearr_34506_36916[(2)] = inst_34488);

(statearr_34506_36916[(1)] = (3));


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
});})(__36902,c__34274__auto___36907,G__34479_36904,G__34479_36905__$1,n__4666__auto___36901,jobs,results,process,async))
;
return ((function (__36902,switch__34206__auto__,c__34274__auto___36907,G__34479_36904,G__34479_36905__$1,n__4666__auto___36901,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34507 = [null,null,null,null,null,null,null];
(statearr_34507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34507[(1)] = (1));

return statearr_34507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34492){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34492);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34508){if((e34508 instanceof Object)){
var ex__34210__auto__ = e34508;
var statearr_34509_36918 = state_34492;
(statearr_34509_36918[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36919 = state_34492;
state_34492 = G__36919;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36902,switch__34206__auto__,c__34274__auto___36907,G__34479_36904,G__34479_36905__$1,n__4666__auto___36901,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34510 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34510[(6)] = c__34274__auto___36907);

return statearr_34510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36902,c__34274__auto___36907,G__34479_36904,G__34479_36905__$1,n__4666__auto___36901,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36902,c__34274__auto___36921,G__34479_36904,G__34479_36905__$1,n__4666__auto___36901,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36902,c__34274__auto___36921,G__34479_36904,G__34479_36905__$1,n__4666__auto___36901,jobs,results,process,async){
return (function (state_34523){
var state_val_34524 = (state_34523[(1)]);
if((state_val_34524 === (1))){
var state_34523__$1 = state_34523;
var statearr_34526_36923 = state_34523__$1;
(statearr_34526_36923[(2)] = null);

(statearr_34526_36923[(1)] = (2));


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
var statearr_34529_36925 = state_34523__$1;
(statearr_34529_36925[(1)] = (5));

} else {
var statearr_34530_36926 = state_34523__$1;
(statearr_34530_36926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (5))){
var state_34523__$1 = state_34523;
var statearr_34531_36927 = state_34523__$1;
(statearr_34531_36927[(2)] = null);

(statearr_34531_36927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (6))){
var state_34523__$1 = state_34523;
var statearr_34532_36928 = state_34523__$1;
(statearr_34532_36928[(2)] = null);

(statearr_34532_36928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (7))){
var inst_34519 = (state_34523[(2)]);
var state_34523__$1 = state_34523;
var statearr_34533_36930 = state_34523__$1;
(statearr_34533_36930[(2)] = inst_34519);

(statearr_34533_36930[(1)] = (3));


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
});})(__36902,c__34274__auto___36921,G__34479_36904,G__34479_36905__$1,n__4666__auto___36901,jobs,results,process,async))
;
return ((function (__36902,switch__34206__auto__,c__34274__auto___36921,G__34479_36904,G__34479_36905__$1,n__4666__auto___36901,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34534 = [null,null,null,null,null,null,null];
(statearr_34534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34534[(1)] = (1));

return statearr_34534;
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
var statearr_34536_36932 = state_34523;
(statearr_34536_36932[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36934 = state_34523;
state_34523 = G__36934;
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
;})(__36902,switch__34206__auto__,c__34274__auto___36921,G__34479_36904,G__34479_36905__$1,n__4666__auto___36901,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34537 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34537[(6)] = c__34274__auto___36921);

return statearr_34537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36902,c__34274__auto___36921,G__34479_36904,G__34479_36905__$1,n__4666__auto___36901,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34479_36905__$1)].join('')));

}

var G__36935 = (__36902 + (1));
__36902 = G__36935;
continue;
} else {
}
break;
}

var c__34274__auto___36936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34555 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34561_36938 = state_34559__$1;
(statearr_34561_36938[(2)] = inst_34555);

(statearr_34561_36938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (1))){
var state_34559__$1 = state_34559;
var statearr_34562_36939 = state_34559__$1;
(statearr_34562_36939[(2)] = null);

(statearr_34562_36939[(1)] = (2));


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
var statearr_34564_36941 = state_34559__$1;
(statearr_34564_36941[(1)] = (5));

} else {
var statearr_34565_36942 = state_34559__$1;
(statearr_34565_36942[(1)] = (6));

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
var statearr_34568_36944 = state_34559__$1;
(statearr_34568_36944[(2)] = null);

(statearr_34568_36944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34543 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_36946 = state_34559__$1;
(statearr_34569_36946[(2)] = inst_34543);

(statearr_34569_36946[(1)] = (7));


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
var statearr_34573_36948 = state_34559;
(statearr_34573_36948[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36950 = state_34559;
state_34559 = G__36950;
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
(statearr_34574[(6)] = c__34274__auto___36936);

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
var statearr_34614_36952 = state_34612__$1;
(statearr_34614_36952[(2)] = inst_34608);

(statearr_34614_36952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36953 = state_34612__$1;
(statearr_34615_36953[(2)] = null);

(statearr_34615_36953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36955 = state_34612__$1;
(statearr_34616_36955[(2)] = null);

(statearr_34616_36955[(1)] = (2));


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
var statearr_34618_36956 = state_34612__$1;
(statearr_34618_36956[(1)] = (5));

} else {
var statearr_34619_36958 = state_34612__$1;
(statearr_34619_36958[(1)] = (6));

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
var statearr_34620_36959 = state_34612__$1;
(statearr_34620_36959[(2)] = inst_34603);

(statearr_34620_36959[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36961 = state_34612__$1;
(statearr_34622_36961[(2)] = null);

(statearr_34622_36961[(1)] = (2));


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
var statearr_34623_36962 = state_34612__$1;
(statearr_34623_36962[(1)] = (19));

} else {
var statearr_34624_36963 = state_34612__$1;
(statearr_34624_36963[(1)] = (20));

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
var statearr_34625_36965 = state_34612__$1;
(statearr_34625_36965[(2)] = null);

(statearr_34625_36965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36967 = state_34612__$1;
(statearr_34627_36967[(2)] = null);

(statearr_34627_36967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36968 = state_34612__$1;
(statearr_34628_36968[(2)] = null);

(statearr_34628_36968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36970 = state_34612__$1;
(statearr_34629_36970[(1)] = (8));

} else {
var statearr_34630_36971 = state_34612__$1;
(statearr_34630_36971[(1)] = (9));

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
var statearr_34632_36972 = state_34612__$1;
(statearr_34632_36972[(1)] = (15));

} else {
var statearr_34633_36973 = state_34612__$1;
(statearr_34633_36973[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36975 = state_34612__$1;
(statearr_34634_36975[(2)] = false);

(statearr_34634_36975[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36976 = state_34612__$1;
(statearr_34635_36976[(2)] = inst_34584);

(statearr_34635_36976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36977 = state_34612__$1;
(statearr_34636_36977[(2)] = inst_34595);

(statearr_34636_36977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36979 = state_34612__$1;
(statearr_34637_36979[(2)] = inst_34581);

(statearr_34637_36979[(1)] = (10));


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
}catch (e34642){if((e34642 instanceof Object)){
var ex__34210__auto__ = e34642;
var statearr_34643_36981 = state_34612;
(statearr_34643_36981[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36982 = state_34612;
state_34612 = G__36982;
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
var state__34276__auto__ = (function (){var statearr_34644 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34644[(6)] = c__34274__auto__);

return statearr_34644;
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
var G__34649 = arguments.length;
switch (G__34649) {
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
var G__34654 = arguments.length;
switch (G__34654) {
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
var c__34274__auto___36998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34686){
var state_val_34687 = (state_34686[(1)]);
if((state_val_34687 === (7))){
var inst_34682 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
var statearr_34690_36999 = state_34686__$1;
(statearr_34690_36999[(2)] = inst_34682);

(statearr_34690_36999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (1))){
var state_34686__$1 = state_34686;
var statearr_34691_37000 = state_34686__$1;
(statearr_34691_37000[(2)] = null);

(statearr_34691_37000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (4))){
var inst_34663 = (state_34686[(7)]);
var inst_34663__$1 = (state_34686[(2)]);
var inst_34664 = (inst_34663__$1 == null);
var state_34686__$1 = (function (){var statearr_34695 = state_34686;
(statearr_34695[(7)] = inst_34663__$1);

return statearr_34695;
})();
if(cljs.core.truth_(inst_34664)){
var statearr_34696_37002 = state_34686__$1;
(statearr_34696_37002[(1)] = (5));

} else {
var statearr_34697_37003 = state_34686__$1;
(statearr_34697_37003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (13))){
var state_34686__$1 = state_34686;
var statearr_34698_37004 = state_34686__$1;
(statearr_34698_37004[(2)] = null);

(statearr_34698_37004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (6))){
var inst_34663 = (state_34686[(7)]);
var inst_34669 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34663) : p.call(null,inst_34663));
var state_34686__$1 = state_34686;
if(cljs.core.truth_(inst_34669)){
var statearr_34699_37005 = state_34686__$1;
(statearr_34699_37005[(1)] = (9));

} else {
var statearr_34700_37006 = state_34686__$1;
(statearr_34700_37006[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (3))){
var inst_34684 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34686__$1,inst_34684);
} else {
if((state_val_34687 === (12))){
var state_34686__$1 = state_34686;
var statearr_34701_37007 = state_34686__$1;
(statearr_34701_37007[(2)] = null);

(statearr_34701_37007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (2))){
var state_34686__$1 = state_34686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34686__$1,(4),ch);
} else {
if((state_val_34687 === (11))){
var inst_34663 = (state_34686[(7)]);
var inst_34673 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34686__$1,(8),inst_34673,inst_34663);
} else {
if((state_val_34687 === (9))){
var state_34686__$1 = state_34686;
var statearr_34703_37008 = state_34686__$1;
(statearr_34703_37008[(2)] = tc);

(statearr_34703_37008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (5))){
var inst_34666 = cljs.core.async.close_BANG_(tc);
var inst_34667 = cljs.core.async.close_BANG_(fc);
var state_34686__$1 = (function (){var statearr_34704 = state_34686;
(statearr_34704[(8)] = inst_34666);

return statearr_34704;
})();
var statearr_34705_37009 = state_34686__$1;
(statearr_34705_37009[(2)] = inst_34667);

(statearr_34705_37009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (14))){
var inst_34680 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
var statearr_34706_37010 = state_34686__$1;
(statearr_34706_37010[(2)] = inst_34680);

(statearr_34706_37010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (10))){
var state_34686__$1 = state_34686;
var statearr_34707_37011 = state_34686__$1;
(statearr_34707_37011[(2)] = fc);

(statearr_34707_37011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34687 === (8))){
var inst_34675 = (state_34686[(2)]);
var state_34686__$1 = state_34686;
if(cljs.core.truth_(inst_34675)){
var statearr_34708_37012 = state_34686__$1;
(statearr_34708_37012[(1)] = (12));

} else {
var statearr_34709_37013 = state_34686__$1;
(statearr_34709_37013[(1)] = (13));

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
var statearr_34713 = [null,null,null,null,null,null,null,null,null];
(statearr_34713[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34713[(1)] = (1));

return statearr_34713;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34686){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34686);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34714){if((e34714 instanceof Object)){
var ex__34210__auto__ = e34714;
var statearr_34715_37017 = state_34686;
(statearr_34715_37017[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34714;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37020 = state_34686;
state_34686 = G__37020;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34719 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34719[(6)] = c__34274__auto___36998);

return statearr_34719;
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
var statearr_34745_37022 = state_34740__$1;
(statearr_34745_37022[(2)] = inst_34736);

(statearr_34745_37022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (1))){
var inst_34720 = init;
var state_34740__$1 = (function (){var statearr_34746 = state_34740;
(statearr_34746[(7)] = inst_34720);

return statearr_34746;
})();
var statearr_34747_37023 = state_34740__$1;
(statearr_34747_37023[(2)] = null);

(statearr_34747_37023[(1)] = (2));


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
var statearr_34749_37024 = state_34740__$1;
(statearr_34749_37024[(1)] = (5));

} else {
var statearr_34750_37025 = state_34740__$1;
(statearr_34750_37025[(1)] = (6));

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
var statearr_34752_37028 = state_34740__$1;
(statearr_34752_37028[(1)] = (8));

} else {
var statearr_34753_37030 = state_34740__$1;
(statearr_34753_37030[(1)] = (9));

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
var statearr_34755_37034 = state_34740__$1;
(statearr_34755_37034[(2)] = null);

(statearr_34755_37034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (5))){
var inst_34720 = (state_34740[(7)]);
var state_34740__$1 = state_34740;
var statearr_34756_37035 = state_34740__$1;
(statearr_34756_37035[(2)] = inst_34720);

(statearr_34756_37035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (10))){
var inst_34734 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34757_37036 = state_34740__$1;
(statearr_34757_37036[(2)] = inst_34734);

(statearr_34757_37036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (8))){
var inst_34727 = (state_34740[(9)]);
var inst_34730 = cljs.core.deref(inst_34727);
var state_34740__$1 = state_34740;
var statearr_34758_37038 = state_34740__$1;
(statearr_34758_37038[(2)] = inst_34730);

(statearr_34758_37038[(1)] = (10));


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
var statearr_34761_37042 = state_34740;
(statearr_34761_37042[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37048 = state_34740;
state_34740 = G__37048;
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
var statearr_34773 = [null,null,null,null,null,null,null];
(statearr_34773[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34773[(1)] = (1));

return statearr_34773;
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
}catch (e34777){if((e34777 instanceof Object)){
var ex__34210__auto__ = e34777;
var statearr_34778_37061 = state_34768;
(statearr_34778_37061[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34777;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37067 = state_34768;
state_34768 = G__37067;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34813){
var state_val_34814 = (state_34813[(1)]);
if((state_val_34814 === (7))){
var inst_34795 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
var statearr_34815_37078 = state_34813__$1;
(statearr_34815_37078[(2)] = inst_34795);

(statearr_34815_37078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (1))){
var inst_34784 = cljs.core.seq(coll);
var inst_34785 = inst_34784;
var state_34813__$1 = (function (){var statearr_34816 = state_34813;
(statearr_34816[(7)] = inst_34785);

return statearr_34816;
})();
var statearr_34817_37081 = state_34813__$1;
(statearr_34817_37081[(2)] = null);

(statearr_34817_37081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (4))){
var inst_34785 = (state_34813[(7)]);
var inst_34793 = cljs.core.first(inst_34785);
var state_34813__$1 = state_34813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34813__$1,(7),ch,inst_34793);
} else {
if((state_val_34814 === (13))){
var inst_34807 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
var statearr_34818_37084 = state_34813__$1;
(statearr_34818_37084[(2)] = inst_34807);

(statearr_34818_37084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (6))){
var inst_34798 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
if(cljs.core.truth_(inst_34798)){
var statearr_34822_37087 = state_34813__$1;
(statearr_34822_37087[(1)] = (8));

} else {
var statearr_34823_37089 = state_34813__$1;
(statearr_34823_37089[(1)] = (9));

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
var statearr_34824_37094 = state_34813__$1;
(statearr_34824_37094[(2)] = null);

(statearr_34824_37094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (2))){
var inst_34785 = (state_34813[(7)]);
var state_34813__$1 = state_34813;
if(cljs.core.truth_(inst_34785)){
var statearr_34828_37101 = state_34813__$1;
(statearr_34828_37101[(1)] = (4));

} else {
var statearr_34829_37102 = state_34813__$1;
(statearr_34829_37102[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (11))){
var inst_34804 = cljs.core.async.close_BANG_(ch);
var state_34813__$1 = state_34813;
var statearr_34830_37103 = state_34813__$1;
(statearr_34830_37103[(2)] = inst_34804);

(statearr_34830_37103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (9))){
var state_34813__$1 = state_34813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34831_37104 = state_34813__$1;
(statearr_34831_37104[(1)] = (11));

} else {
var statearr_34832_37106 = state_34813__$1;
(statearr_34832_37106[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (5))){
var inst_34785 = (state_34813[(7)]);
var state_34813__$1 = state_34813;
var statearr_34833_37108 = state_34813__$1;
(statearr_34833_37108[(2)] = inst_34785);

(statearr_34833_37108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (10))){
var inst_34809 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
var statearr_34834_37111 = state_34813__$1;
(statearr_34834_37111[(2)] = inst_34809);

(statearr_34834_37111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (8))){
var inst_34785 = (state_34813[(7)]);
var inst_34800 = cljs.core.next(inst_34785);
var inst_34785__$1 = inst_34800;
var state_34813__$1 = (function (){var statearr_34835 = state_34813;
(statearr_34835[(7)] = inst_34785__$1);

return statearr_34835;
})();
var statearr_34836_37113 = state_34813__$1;
(statearr_34836_37113[(2)] = null);

(statearr_34836_37113[(1)] = (2));


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
var statearr_34839_37117 = state_34813;
(statearr_34839_37117[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37123 = state_34813;
state_34813 = G__37123;
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
var c__34274__auto___37156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34990){
var state_val_34994 = (state_34990[(1)]);
if((state_val_34994 === (7))){
var inst_34986 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_34998_37161 = state_34990__$1;
(statearr_34998_37161[(2)] = inst_34986);

(statearr_34998_37161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (20))){
var inst_34879 = (state_34990[(7)]);
var inst_34895 = cljs.core.first(inst_34879);
var inst_34896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34895,(0),null);
var inst_34897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34895,(1),null);
var state_34990__$1 = (function (){var statearr_34999 = state_34990;
(statearr_34999[(8)] = inst_34896);

return statearr_34999;
})();
if(cljs.core.truth_(inst_34897)){
var statearr_35000_37164 = state_34990__$1;
(statearr_35000_37164[(1)] = (22));

} else {
var statearr_35001_37165 = state_34990__$1;
(statearr_35001_37165[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (27))){
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
var statearr_35003_37168 = state_34990__$1;
(statearr_35003_37168[(1)] = (30));

} else {
var statearr_35004_37169 = state_34990__$1;
(statearr_35004_37169[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (1))){
var state_34990__$1 = state_34990;
var statearr_35007_37170 = state_34990__$1;
(statearr_35007_37170[(2)] = null);

(statearr_35007_37170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (24))){
var inst_34879 = (state_34990[(7)]);
var inst_34902 = (state_34990[(2)]);
var inst_34903 = cljs.core.next(inst_34879);
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
var statearr_35013_37174 = state_34990__$1;
(statearr_35013_37174[(2)] = null);

(statearr_35013_37174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (39))){
var state_34990__$1 = state_34990;
var statearr_35017_37178 = state_34990__$1;
(statearr_35017_37178[(2)] = null);

(statearr_35017_37178[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (4))){
var inst_34846 = (state_34990[(10)]);
var inst_34846__$1 = (state_34990[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34990__$1 = (function (){var statearr_35021 = state_34990;
(statearr_35021[(10)] = inst_34846__$1);

return statearr_35021;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35023_37184 = state_34990__$1;
(statearr_35023_37184[(1)] = (5));

} else {
var statearr_35024_37185 = state_34990__$1;
(statearr_35024_37185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (15))){
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
var statearr_35041_37186 = state_34990__$1;
(statearr_35041_37186[(2)] = null);

(statearr_35041_37186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (21))){
var inst_34906 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35047_37187 = state_34990__$1;
(statearr_35047_37187[(2)] = inst_34906);

(statearr_35047_37187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (31))){
var inst_34932 = (state_34990[(12)]);
var inst_34936 = done(null);
var inst_34937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34932);
var state_34990__$1 = (function (){var statearr_35050 = state_34990;
(statearr_35050[(19)] = inst_34936);

return statearr_35050;
})();
var statearr_35051_37194 = state_34990__$1;
(statearr_35051_37194[(2)] = inst_34937);

(statearr_35051_37194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (32))){
var inst_34927 = (state_34990[(9)]);
var inst_34925 = (state_34990[(11)]);
var inst_34924 = (state_34990[(20)]);
var inst_34926 = (state_34990[(21)]);
var inst_34941 = (state_34990[(2)]);
var inst_34942 = (inst_34927 + (1));
var tmp35042 = inst_34925;
var tmp35043 = inst_34924;
var tmp35044 = inst_34926;
var inst_34924__$1 = tmp35043;
var inst_34925__$1 = tmp35042;
var inst_34926__$1 = tmp35044;
var inst_34927__$1 = inst_34942;
var state_34990__$1 = (function (){var statearr_35061 = state_34990;
(statearr_35061[(9)] = inst_34927__$1);

(statearr_35061[(22)] = inst_34941);

(statearr_35061[(11)] = inst_34925__$1);

(statearr_35061[(20)] = inst_34924__$1);

(statearr_35061[(21)] = inst_34926__$1);

return statearr_35061;
})();
var statearr_35065_37199 = state_34990__$1;
(statearr_35065_37199[(2)] = null);

(statearr_35065_37199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (40))){
var inst_34957 = (state_34990[(23)]);
var inst_34962 = done(null);
var inst_34963 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34957);
var state_34990__$1 = (function (){var statearr_35071 = state_34990;
(statearr_35071[(24)] = inst_34962);

return statearr_35071;
})();
var statearr_35074_37206 = state_34990__$1;
(statearr_35074_37206[(2)] = inst_34963);

(statearr_35074_37206[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (33))){
var inst_34945 = (state_34990[(25)]);
var inst_34949 = cljs.core.chunked_seq_QMARK_(inst_34945);
var state_34990__$1 = state_34990;
if(inst_34949){
var statearr_35081_37211 = state_34990__$1;
(statearr_35081_37211[(1)] = (36));

} else {
var statearr_35082_37212 = state_34990__$1;
(statearr_35082_37212[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (13))){
var inst_34867 = (state_34990[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34990__$1 = state_34990;
var statearr_35087_37214 = state_34990__$1;
(statearr_35087_37214[(2)] = inst_34870);

(statearr_35087_37214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (22))){
var inst_34896 = (state_34990[(8)]);
var inst_34899 = cljs.core.async.close_BANG_(inst_34896);
var state_34990__$1 = state_34990;
var statearr_35093_37218 = state_34990__$1;
(statearr_35093_37218[(2)] = inst_34899);

(statearr_35093_37218[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (36))){
var inst_34945 = (state_34990[(25)]);
var inst_34951 = cljs.core.chunk_first(inst_34945);
var inst_34952 = cljs.core.chunk_rest(inst_34945);
var inst_34954 = cljs.core.count(inst_34951);
var inst_34924 = inst_34952;
var inst_34925 = inst_34951;
var inst_34926 = inst_34954;
var inst_34927 = (0);
var state_34990__$1 = (function (){var statearr_35101 = state_34990;
(statearr_35101[(9)] = inst_34927);

(statearr_35101[(11)] = inst_34925);

(statearr_35101[(20)] = inst_34924);

(statearr_35101[(21)] = inst_34926);

return statearr_35101;
})();
var statearr_35106_37224 = state_34990__$1;
(statearr_35106_37224[(2)] = null);

(statearr_35106_37224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (41))){
var inst_34945 = (state_34990[(25)]);
var inst_34965 = (state_34990[(2)]);
var inst_34966 = cljs.core.next(inst_34945);
var inst_34924 = inst_34966;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34990__$1 = (function (){var statearr_35113 = state_34990;
(statearr_35113[(9)] = inst_34927);

(statearr_35113[(11)] = inst_34925);

(statearr_35113[(20)] = inst_34924);

(statearr_35113[(21)] = inst_34926);

(statearr_35113[(27)] = inst_34965);

return statearr_35113;
})();
var statearr_35117_37229 = state_34990__$1;
(statearr_35117_37229[(2)] = null);

(statearr_35117_37229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (43))){
var state_34990__$1 = state_34990;
var statearr_35123_37231 = state_34990__$1;
(statearr_35123_37231[(2)] = null);

(statearr_35123_37231[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (29))){
var inst_34974 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35129_37236 = state_34990__$1;
(statearr_35129_37236[(2)] = inst_34974);

(statearr_35129_37236[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (44))){
var inst_34983 = (state_34990[(2)]);
var state_34990__$1 = (function (){var statearr_35133 = state_34990;
(statearr_35133[(28)] = inst_34983);

return statearr_35133;
})();
var statearr_35136_37240 = state_34990__$1;
(statearr_35136_37240[(2)] = null);

(statearr_35136_37240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (6))){
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
var statearr_35147_37248 = state_34990__$1;
(statearr_35147_37248[(2)] = null);

(statearr_35147_37248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (28))){
var inst_34924 = (state_34990[(20)]);
var inst_34945 = (state_34990[(25)]);
var inst_34945__$1 = cljs.core.seq(inst_34924);
var state_34990__$1 = (function (){var statearr_35148 = state_34990;
(statearr_35148[(25)] = inst_34945__$1);

return statearr_35148;
})();
if(inst_34945__$1){
var statearr_35149_37251 = state_34990__$1;
(statearr_35149_37251[(1)] = (33));

} else {
var statearr_35150_37252 = state_34990__$1;
(statearr_35150_37252[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (25))){
var inst_34927 = (state_34990[(9)]);
var inst_34926 = (state_34990[(21)]);
var inst_34929 = (inst_34927 < inst_34926);
var inst_34930 = inst_34929;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34930)){
var statearr_35151_37253 = state_34990__$1;
(statearr_35151_37253[(1)] = (27));

} else {
var statearr_35152_37255 = state_34990__$1;
(statearr_35152_37255[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (34))){
var state_34990__$1 = state_34990;
var statearr_35157_37256 = state_34990__$1;
(statearr_35157_37256[(2)] = null);

(statearr_35157_37256[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (17))){
var state_34990__$1 = state_34990;
var statearr_35164_37257 = state_34990__$1;
(statearr_35164_37257[(2)] = null);

(statearr_35164_37257[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (3))){
var inst_34988 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34990__$1,inst_34988);
} else {
if((state_val_34994 === (12))){
var inst_34911 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35182_37260 = state_34990__$1;
(statearr_35182_37260[(2)] = inst_34911);

(statearr_35182_37260[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (2))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(4),ch);
} else {
if((state_val_34994 === (23))){
var state_34990__$1 = state_34990;
var statearr_35187_37264 = state_34990__$1;
(statearr_35187_37264[(2)] = null);

(statearr_35187_37264[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (35))){
var inst_34972 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35188_37266 = state_34990__$1;
(statearr_35188_37266[(2)] = inst_34972);

(statearr_35188_37266[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (19))){
var inst_34879 = (state_34990[(7)]);
var inst_34886 = cljs.core.chunk_first(inst_34879);
var inst_34887 = cljs.core.chunk_rest(inst_34879);
var inst_34888 = cljs.core.count(inst_34886);
var inst_34855 = inst_34887;
var inst_34856 = inst_34886;
var inst_34857 = inst_34888;
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35190 = state_34990;
(statearr_35190[(13)] = inst_34857);

(statearr_35190[(14)] = inst_34856);

(statearr_35190[(15)] = inst_34858);

(statearr_35190[(16)] = inst_34855);

return statearr_35190;
})();
var statearr_35194_37268 = state_34990__$1;
(statearr_35194_37268[(2)] = null);

(statearr_35194_37268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (11))){
var inst_34879 = (state_34990[(7)]);
var inst_34855 = (state_34990[(16)]);
var inst_34879__$1 = cljs.core.seq(inst_34855);
var state_34990__$1 = (function (){var statearr_35200 = state_34990;
(statearr_35200[(7)] = inst_34879__$1);

return statearr_35200;
})();
if(inst_34879__$1){
var statearr_35202_37273 = state_34990__$1;
(statearr_35202_37273[(1)] = (16));

} else {
var statearr_35205_37274 = state_34990__$1;
(statearr_35205_37274[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (9))){
var inst_34913 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35208_37275 = state_34990__$1;
(statearr_35208_37275[(2)] = inst_34913);

(statearr_35208_37275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34990__$1 = (function (){var statearr_35222 = state_34990;
(statearr_35222[(13)] = inst_34857);

(statearr_35222[(14)] = inst_34856);

(statearr_35222[(15)] = inst_34858);

(statearr_35222[(16)] = inst_34855);

return statearr_35222;
})();
var statearr_35224_37278 = state_34990__$1;
(statearr_35224_37278[(2)] = null);

(statearr_35224_37278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (14))){
var state_34990__$1 = state_34990;
var statearr_35230_37282 = state_34990__$1;
(statearr_35230_37282[(2)] = null);

(statearr_35230_37282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (45))){
var inst_34980 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35234_37284 = state_34990__$1;
(statearr_35234_37284[(2)] = inst_34980);

(statearr_35234_37284[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (26))){
var inst_34916 = (state_34990[(29)]);
var inst_34976 = (state_34990[(2)]);
var inst_34977 = cljs.core.seq(inst_34916);
var state_34990__$1 = (function (){var statearr_35240 = state_34990;
(statearr_35240[(31)] = inst_34976);

return statearr_35240;
})();
if(inst_34977){
var statearr_35242_37288 = state_34990__$1;
(statearr_35242_37288[(1)] = (42));

} else {
var statearr_35245_37290 = state_34990__$1;
(statearr_35245_37290[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (16))){
var inst_34879 = (state_34990[(7)]);
var inst_34881 = cljs.core.chunked_seq_QMARK_(inst_34879);
var state_34990__$1 = state_34990;
if(inst_34881){
var statearr_35252_37294 = state_34990__$1;
(statearr_35252_37294[(1)] = (19));

} else {
var statearr_35255_37295 = state_34990__$1;
(statearr_35255_37295[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (38))){
var inst_34969 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35261_37297 = state_34990__$1;
(statearr_35261_37297[(2)] = inst_34969);

(statearr_35261_37297[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (30))){
var state_34990__$1 = state_34990;
var statearr_35267_37301 = state_34990__$1;
(statearr_35267_37301[(2)] = null);

(statearr_35267_37301[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (10))){
var inst_34856 = (state_34990[(14)]);
var inst_34858 = (state_34990[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34990__$1 = (function (){var statearr_35276 = state_34990;
(statearr_35276[(26)] = inst_34867);

return statearr_35276;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35279_37306 = state_34990__$1;
(statearr_35279_37306[(1)] = (13));

} else {
var statearr_35283_37307 = state_34990__$1;
(statearr_35283_37307[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (18))){
var inst_34909 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35290_37311 = state_34990__$1;
(statearr_35290_37311[(2)] = inst_34909);

(statearr_35290_37311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (42))){
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(45),dchan);
} else {
if((state_val_34994 === (37))){
var inst_34846 = (state_34990[(10)]);
var inst_34957 = (state_34990[(23)]);
var inst_34945 = (state_34990[(25)]);
var inst_34957__$1 = cljs.core.first(inst_34945);
var inst_34958 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34957__$1,inst_34846,done);
var state_34990__$1 = (function (){var statearr_35302 = state_34990;
(statearr_35302[(23)] = inst_34957__$1);

return statearr_35302;
})();
if(cljs.core.truth_(inst_34958)){
var statearr_35303_37317 = state_34990__$1;
(statearr_35303_37317[(1)] = (39));

} else {
var statearr_35308_37318 = state_34990__$1;
(statearr_35308_37318[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (8))){
var inst_34857 = (state_34990[(13)]);
var inst_34858 = (state_34990[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34861)){
var statearr_35316_37320 = state_34990__$1;
(statearr_35316_37320[(1)] = (10));

} else {
var statearr_35318_37323 = state_34990__$1;
(statearr_35318_37323[(1)] = (11));

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
var statearr_35335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35335[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35335[(1)] = (1));

return statearr_35335;
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
}catch (e35343){if((e35343 instanceof Object)){
var ex__34210__auto__ = e35343;
var statearr_35349_37329 = state_34990;
(statearr_35349_37329[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35343;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37333 = state_34990;
state_34990 = G__37333;
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
var state__34276__auto__ = (function (){var statearr_35356 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35356[(6)] = c__34274__auto___37156);

return statearr_35356;
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
var len__4789__auto___37355 = arguments.length;
var i__4790__auto___37356 = (0);
while(true){
if((i__4790__auto___37356 < len__4789__auto___37355)){
args__4795__auto__.push((arguments[i__4790__auto___37356]));

var G__37357 = (i__4790__auto___37356 + (1));
i__4790__auto___37356 = G__37357;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35469){
var map__35470 = p__35469;
var map__35470__$1 = (((((!((map__35470 == null))))?(((((map__35470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35470):map__35470);
var opts = map__35470__$1;
var statearr_35478_37365 = state;
(statearr_35478_37365[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35485_37367 = state;
(statearr_35485_37367[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35490_37372 = state;
(statearr_35490_37372[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35442){
var G__35443 = cljs.core.first(seq35442);
var seq35442__$1 = cljs.core.next(seq35442);
var G__35444 = cljs.core.first(seq35442__$1);
var seq35442__$2 = cljs.core.next(seq35442__$1);
var G__35445 = cljs.core.first(seq35442__$2);
var seq35442__$3 = cljs.core.next(seq35442__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35443,G__35444,G__35445,seq35442__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35546 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35546 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35547){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35547 = meta35547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35548,meta35547__$1){
var self__ = this;
var _35548__$1 = this;
return (new cljs.core.async.t_cljs$core$async35546(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35547__$1));
}));

(cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35548){
var self__ = this;
var _35548__$1 = this;
return self__.meta35547;
}));

(cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35546.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35547","meta35547",-1484049124,null)], null);
}));

(cljs.core.async.t_cljs$core$async35546.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35546");

(cljs.core.async.t_cljs$core$async35546.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35546");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35546.
 */
cljs.core.async.__GT_t_cljs$core$async35546 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35546(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35547){
return (new cljs.core.async.t_cljs$core$async35546(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35547));
});

}

return (new cljs.core.async.t_cljs$core$async35546(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35688){
var state_val_35690 = (state_35688[(1)]);
if((state_val_35690 === (7))){
var inst_35592 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35695_37413 = state_35688__$1;
(statearr_35695_37413[(2)] = inst_35592);

(statearr_35695_37413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (20))){
var inst_35606 = (state_35688[(7)]);
var state_35688__$1 = state_35688;
var statearr_35696_37415 = state_35688__$1;
(statearr_35696_37415[(2)] = inst_35606);

(statearr_35696_37415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (27))){
var state_35688__$1 = state_35688;
var statearr_35698_37416 = state_35688__$1;
(statearr_35698_37416[(2)] = null);

(statearr_35698_37416[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (1))){
var inst_35579 = (state_35688[(8)]);
var inst_35579__$1 = calc_state();
var inst_35581 = (inst_35579__$1 == null);
var inst_35582 = cljs.core.not(inst_35581);
var state_35688__$1 = (function (){var statearr_35700 = state_35688;
(statearr_35700[(8)] = inst_35579__$1);

return statearr_35700;
})();
if(inst_35582){
var statearr_35701_37423 = state_35688__$1;
(statearr_35701_37423[(1)] = (2));

} else {
var statearr_35702_37424 = state_35688__$1;
(statearr_35702_37424[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (24))){
var inst_35659 = (state_35688[(9)]);
var inst_35632 = (state_35688[(10)]);
var inst_35643 = (state_35688[(11)]);
var inst_35659__$1 = (inst_35632.cljs$core$IFn$_invoke$arity$1 ? inst_35632.cljs$core$IFn$_invoke$arity$1(inst_35643) : inst_35632.call(null,inst_35643));
var state_35688__$1 = (function (){var statearr_35703 = state_35688;
(statearr_35703[(9)] = inst_35659__$1);

return statearr_35703;
})();
if(cljs.core.truth_(inst_35659__$1)){
var statearr_35705_37427 = state_35688__$1;
(statearr_35705_37427[(1)] = (29));

} else {
var statearr_35706_37429 = state_35688__$1;
(statearr_35706_37429[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (4))){
var inst_35595 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35595)){
var statearr_35708_37431 = state_35688__$1;
(statearr_35708_37431[(1)] = (8));

} else {
var statearr_35709_37432 = state_35688__$1;
(statearr_35709_37432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (15))){
var inst_35626 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35626)){
var statearr_35710_37434 = state_35688__$1;
(statearr_35710_37434[(1)] = (19));

} else {
var statearr_35712_37435 = state_35688__$1;
(statearr_35712_37435[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (21))){
var inst_35631 = (state_35688[(12)]);
var inst_35631__$1 = (state_35688[(2)]);
var inst_35632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35631__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35631__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35631__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35688__$1 = (function (){var statearr_35714 = state_35688;
(statearr_35714[(12)] = inst_35631__$1);

(statearr_35714[(13)] = inst_35633);

(statearr_35714[(10)] = inst_35632);

return statearr_35714;
})();
return cljs.core.async.ioc_alts_BANG_(state_35688__$1,(22),inst_35634);
} else {
if((state_val_35690 === (31))){
var inst_35667 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35667)){
var statearr_35715_37439 = state_35688__$1;
(statearr_35715_37439[(1)] = (32));

} else {
var statearr_35716_37440 = state_35688__$1;
(statearr_35716_37440[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (32))){
var inst_35641 = (state_35688[(14)]);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35688__$1,(35),out,inst_35641);
} else {
if((state_val_35690 === (33))){
var inst_35631 = (state_35688[(12)]);
var inst_35606 = inst_35631;
var state_35688__$1 = (function (){var statearr_35718 = state_35688;
(statearr_35718[(7)] = inst_35606);

return statearr_35718;
})();
var statearr_35721_37448 = state_35688__$1;
(statearr_35721_37448[(2)] = null);

(statearr_35721_37448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (13))){
var inst_35606 = (state_35688[(7)]);
var inst_35615 = inst_35606.cljs$lang$protocol_mask$partition0$;
var inst_35616 = (inst_35615 & (64));
var inst_35617 = inst_35606.cljs$core$ISeq$;
var inst_35618 = (cljs.core.PROTOCOL_SENTINEL === inst_35617);
var inst_35619 = ((inst_35616) || (inst_35618));
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35619)){
var statearr_35725_37449 = state_35688__$1;
(statearr_35725_37449[(1)] = (16));

} else {
var statearr_35727_37450 = state_35688__$1;
(statearr_35727_37450[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (22))){
var inst_35641 = (state_35688[(14)]);
var inst_35643 = (state_35688[(11)]);
var inst_35640 = (state_35688[(2)]);
var inst_35641__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35640,(0),null);
var inst_35643__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35640,(1),null);
var inst_35644 = (inst_35641__$1 == null);
var inst_35645 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35643__$1,change);
var inst_35646 = ((inst_35644) || (inst_35645));
var state_35688__$1 = (function (){var statearr_35731 = state_35688;
(statearr_35731[(14)] = inst_35641__$1);

(statearr_35731[(11)] = inst_35643__$1);

return statearr_35731;
})();
if(cljs.core.truth_(inst_35646)){
var statearr_35732_37454 = state_35688__$1;
(statearr_35732_37454[(1)] = (23));

} else {
var statearr_35734_37458 = state_35688__$1;
(statearr_35734_37458[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (36))){
var inst_35631 = (state_35688[(12)]);
var inst_35606 = inst_35631;
var state_35688__$1 = (function (){var statearr_35740 = state_35688;
(statearr_35740[(7)] = inst_35606);

return statearr_35740;
})();
var statearr_35741_37459 = state_35688__$1;
(statearr_35741_37459[(2)] = null);

(statearr_35741_37459[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (29))){
var inst_35659 = (state_35688[(9)]);
var state_35688__$1 = state_35688;
var statearr_35748_37463 = state_35688__$1;
(statearr_35748_37463[(2)] = inst_35659);

(statearr_35748_37463[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (6))){
var state_35688__$1 = state_35688;
var statearr_35753_37464 = state_35688__$1;
(statearr_35753_37464[(2)] = false);

(statearr_35753_37464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (28))){
var inst_35655 = (state_35688[(2)]);
var inst_35656 = calc_state();
var inst_35606 = inst_35656;
var state_35688__$1 = (function (){var statearr_35757 = state_35688;
(statearr_35757[(15)] = inst_35655);

(statearr_35757[(7)] = inst_35606);

return statearr_35757;
})();
var statearr_35758_37466 = state_35688__$1;
(statearr_35758_37466[(2)] = null);

(statearr_35758_37466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (25))){
var inst_35682 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35763_37467 = state_35688__$1;
(statearr_35763_37467[(2)] = inst_35682);

(statearr_35763_37467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (34))){
var inst_35680 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35764_37468 = state_35688__$1;
(statearr_35764_37468[(2)] = inst_35680);

(statearr_35764_37468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (17))){
var state_35688__$1 = state_35688;
var statearr_35765_37473 = state_35688__$1;
(statearr_35765_37473[(2)] = false);

(statearr_35765_37473[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (3))){
var state_35688__$1 = state_35688;
var statearr_35767_37474 = state_35688__$1;
(statearr_35767_37474[(2)] = false);

(statearr_35767_37474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (12))){
var inst_35684 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35688__$1,inst_35684);
} else {
if((state_val_35690 === (2))){
var inst_35579 = (state_35688[(8)]);
var inst_35584 = inst_35579.cljs$lang$protocol_mask$partition0$;
var inst_35585 = (inst_35584 & (64));
var inst_35586 = inst_35579.cljs$core$ISeq$;
var inst_35587 = (cljs.core.PROTOCOL_SENTINEL === inst_35586);
var inst_35588 = ((inst_35585) || (inst_35587));
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35588)){
var statearr_35769_37478 = state_35688__$1;
(statearr_35769_37478[(1)] = (5));

} else {
var statearr_35771_37479 = state_35688__$1;
(statearr_35771_37479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (23))){
var inst_35641 = (state_35688[(14)]);
var inst_35649 = (inst_35641 == null);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35649)){
var statearr_35773_37480 = state_35688__$1;
(statearr_35773_37480[(1)] = (26));

} else {
var statearr_35774_37481 = state_35688__$1;
(statearr_35774_37481[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (35))){
var inst_35670 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35670)){
var statearr_35776_37484 = state_35688__$1;
(statearr_35776_37484[(1)] = (36));

} else {
var statearr_35777_37485 = state_35688__$1;
(statearr_35777_37485[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (19))){
var inst_35606 = (state_35688[(7)]);
var inst_35628 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35606);
var state_35688__$1 = state_35688;
var statearr_35780_37487 = state_35688__$1;
(statearr_35780_37487[(2)] = inst_35628);

(statearr_35780_37487[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (11))){
var inst_35606 = (state_35688[(7)]);
var inst_35610 = (inst_35606 == null);
var inst_35611 = cljs.core.not(inst_35610);
var state_35688__$1 = state_35688;
if(inst_35611){
var statearr_35782_37491 = state_35688__$1;
(statearr_35782_37491[(1)] = (13));

} else {
var statearr_35783_37492 = state_35688__$1;
(statearr_35783_37492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (9))){
var inst_35579 = (state_35688[(8)]);
var state_35688__$1 = state_35688;
var statearr_35784_37494 = state_35688__$1;
(statearr_35784_37494[(2)] = inst_35579);

(statearr_35784_37494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (5))){
var state_35688__$1 = state_35688;
var statearr_35785_37495 = state_35688__$1;
(statearr_35785_37495[(2)] = true);

(statearr_35785_37495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (14))){
var state_35688__$1 = state_35688;
var statearr_35787_37501 = state_35688__$1;
(statearr_35787_37501[(2)] = false);

(statearr_35787_37501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (26))){
var inst_35643 = (state_35688[(11)]);
var inst_35652 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35643);
var state_35688__$1 = state_35688;
var statearr_35788_37507 = state_35688__$1;
(statearr_35788_37507[(2)] = inst_35652);

(statearr_35788_37507[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (16))){
var state_35688__$1 = state_35688;
var statearr_35789_37509 = state_35688__$1;
(statearr_35789_37509[(2)] = true);

(statearr_35789_37509[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (38))){
var inst_35676 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35795_37512 = state_35688__$1;
(statearr_35795_37512[(2)] = inst_35676);

(statearr_35795_37512[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (30))){
var inst_35633 = (state_35688[(13)]);
var inst_35632 = (state_35688[(10)]);
var inst_35643 = (state_35688[(11)]);
var inst_35662 = cljs.core.empty_QMARK_(inst_35632);
var inst_35663 = (inst_35633.cljs$core$IFn$_invoke$arity$1 ? inst_35633.cljs$core$IFn$_invoke$arity$1(inst_35643) : inst_35633.call(null,inst_35643));
var inst_35664 = cljs.core.not(inst_35663);
var inst_35665 = ((inst_35662) && (inst_35664));
var state_35688__$1 = state_35688;
var statearr_35797_37514 = state_35688__$1;
(statearr_35797_37514[(2)] = inst_35665);

(statearr_35797_37514[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (10))){
var inst_35579 = (state_35688[(8)]);
var inst_35600 = (state_35688[(2)]);
var inst_35602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35600,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35606 = inst_35579;
var state_35688__$1 = (function (){var statearr_35801 = state_35688;
(statearr_35801[(16)] = inst_35605);

(statearr_35801[(17)] = inst_35602);

(statearr_35801[(7)] = inst_35606);

(statearr_35801[(18)] = inst_35604);

return statearr_35801;
})();
var statearr_35802_37527 = state_35688__$1;
(statearr_35802_37527[(2)] = null);

(statearr_35802_37527[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (18))){
var inst_35623 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35803_37529 = state_35688__$1;
(statearr_35803_37529[(2)] = inst_35623);

(statearr_35803_37529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (37))){
var state_35688__$1 = state_35688;
var statearr_35808_37531 = state_35688__$1;
(statearr_35808_37531[(2)] = null);

(statearr_35808_37531[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35690 === (8))){
var inst_35579 = (state_35688[(8)]);
var inst_35597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35579);
var state_35688__$1 = state_35688;
var statearr_35812_37532 = state_35688__$1;
(statearr_35812_37532[(2)] = inst_35597);

(statearr_35812_37532[(1)] = (10));


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
var statearr_35815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35815[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35815[(1)] = (1));

return statearr_35815;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35688){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35688);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35816){if((e35816 instanceof Object)){
var ex__34210__auto__ = e35816;
var statearr_35819_37545 = state_35688;
(statearr_35819_37545[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35816;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37547 = state_35688;
state_35688 = G__37547;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35688){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35821 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35821[(6)] = c__34274__auto___37411);

return statearr_35821;
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
var G__35843 = arguments.length;
switch (G__35843) {
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
var G__35859 = arguments.length;
switch (G__35859) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35854_SHARP_){
if(cljs.core.truth_((p1__35854_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35854_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35854_SHARP_.call(null,topic)))){
return p1__35854_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35854_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35868 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35869){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35869 = meta35869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35870,meta35869__$1){
var self__ = this;
var _35870__$1 = this;
return (new cljs.core.async.t_cljs$core$async35868(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35869__$1));
}));

(cljs.core.async.t_cljs$core$async35868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35870){
var self__ = this;
var _35870__$1 = this;
return self__.meta35869;
}));

(cljs.core.async.t_cljs$core$async35868.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35868.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35868.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35868.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35869","meta35869",1924504665,null)], null);
}));

(cljs.core.async.t_cljs$core$async35868.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35868");

(cljs.core.async.t_cljs$core$async35868.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35868");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35868.
 */
cljs.core.async.__GT_t_cljs$core$async35868 = (function cljs$core$async$__GT_t_cljs$core$async35868(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35869){
return (new cljs.core.async.t_cljs$core$async35868(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35869));
});

}

return (new cljs.core.async.t_cljs$core$async35868(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35980){
var state_val_35981 = (state_35980[(1)]);
if((state_val_35981 === (7))){
var inst_35972 = (state_35980[(2)]);
var state_35980__$1 = state_35980;
var statearr_35987_37614 = state_35980__$1;
(statearr_35987_37614[(2)] = inst_35972);

(statearr_35987_37614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (20))){
var state_35980__$1 = state_35980;
var statearr_35989_37620 = state_35980__$1;
(statearr_35989_37620[(2)] = null);

(statearr_35989_37620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (1))){
var state_35980__$1 = state_35980;
var statearr_35992_37625 = state_35980__$1;
(statearr_35992_37625[(2)] = null);

(statearr_35992_37625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (24))){
var inst_35949 = (state_35980[(7)]);
var inst_35963 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35949);
var state_35980__$1 = state_35980;
var statearr_35995_37628 = state_35980__$1;
(statearr_35995_37628[(2)] = inst_35963);

(statearr_35995_37628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (4))){
var inst_35898 = (state_35980[(8)]);
var inst_35898__$1 = (state_35980[(2)]);
var inst_35899 = (inst_35898__$1 == null);
var state_35980__$1 = (function (){var statearr_35998 = state_35980;
(statearr_35998[(8)] = inst_35898__$1);

return statearr_35998;
})();
if(cljs.core.truth_(inst_35899)){
var statearr_36000_37631 = state_35980__$1;
(statearr_36000_37631[(1)] = (5));

} else {
var statearr_36001_37633 = state_35980__$1;
(statearr_36001_37633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (15))){
var inst_35943 = (state_35980[(2)]);
var state_35980__$1 = state_35980;
var statearr_36002_37639 = state_35980__$1;
(statearr_36002_37639[(2)] = inst_35943);

(statearr_36002_37639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (21))){
var inst_35969 = (state_35980[(2)]);
var state_35980__$1 = (function (){var statearr_36003 = state_35980;
(statearr_36003[(9)] = inst_35969);

return statearr_36003;
})();
var statearr_36004_37642 = state_35980__$1;
(statearr_36004_37642[(2)] = null);

(statearr_36004_37642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (13))){
var inst_35925 = (state_35980[(10)]);
var inst_35927 = cljs.core.chunked_seq_QMARK_(inst_35925);
var state_35980__$1 = state_35980;
if(inst_35927){
var statearr_36005_37644 = state_35980__$1;
(statearr_36005_37644[(1)] = (16));

} else {
var statearr_36006_37645 = state_35980__$1;
(statearr_36006_37645[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (22))){
var inst_35957 = (state_35980[(2)]);
var state_35980__$1 = state_35980;
if(cljs.core.truth_(inst_35957)){
var statearr_36007_37651 = state_35980__$1;
(statearr_36007_37651[(1)] = (23));

} else {
var statearr_36010_37656 = state_35980__$1;
(statearr_36010_37656[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (6))){
var inst_35898 = (state_35980[(8)]);
var inst_35949 = (state_35980[(7)]);
var inst_35951 = (state_35980[(11)]);
var inst_35949__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35898) : topic_fn.call(null,inst_35898));
var inst_35950 = cljs.core.deref(mults);
var inst_35951__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35950,inst_35949__$1);
var state_35980__$1 = (function (){var statearr_36012 = state_35980;
(statearr_36012[(7)] = inst_35949__$1);

(statearr_36012[(11)] = inst_35951__$1);

return statearr_36012;
})();
if(cljs.core.truth_(inst_35951__$1)){
var statearr_36013_37661 = state_35980__$1;
(statearr_36013_37661[(1)] = (19));

} else {
var statearr_36015_37662 = state_35980__$1;
(statearr_36015_37662[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (25))){
var inst_35965 = (state_35980[(2)]);
var state_35980__$1 = state_35980;
var statearr_36017_37666 = state_35980__$1;
(statearr_36017_37666[(2)] = inst_35965);

(statearr_36017_37666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (17))){
var inst_35925 = (state_35980[(10)]);
var inst_35934 = cljs.core.first(inst_35925);
var inst_35935 = cljs.core.async.muxch_STAR_(inst_35934);
var inst_35936 = cljs.core.async.close_BANG_(inst_35935);
var inst_35937 = cljs.core.next(inst_35925);
var inst_35910 = inst_35937;
var inst_35911 = null;
var inst_35912 = (0);
var inst_35913 = (0);
var state_35980__$1 = (function (){var statearr_36019 = state_35980;
(statearr_36019[(12)] = inst_35912);

(statearr_36019[(13)] = inst_35936);

(statearr_36019[(14)] = inst_35913);

(statearr_36019[(15)] = inst_35910);

(statearr_36019[(16)] = inst_35911);

return statearr_36019;
})();
var statearr_36020_37673 = state_35980__$1;
(statearr_36020_37673[(2)] = null);

(statearr_36020_37673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (3))){
var inst_35974 = (state_35980[(2)]);
var state_35980__$1 = state_35980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35980__$1,inst_35974);
} else {
if((state_val_35981 === (12))){
var inst_35945 = (state_35980[(2)]);
var state_35980__$1 = state_35980;
var statearr_36021_37679 = state_35980__$1;
(statearr_36021_37679[(2)] = inst_35945);

(statearr_36021_37679[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (2))){
var state_35980__$1 = state_35980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35980__$1,(4),ch);
} else {
if((state_val_35981 === (23))){
var state_35980__$1 = state_35980;
var statearr_36022_37686 = state_35980__$1;
(statearr_36022_37686[(2)] = null);

(statearr_36022_37686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (19))){
var inst_35898 = (state_35980[(8)]);
var inst_35951 = (state_35980[(11)]);
var inst_35954 = cljs.core.async.muxch_STAR_(inst_35951);
var state_35980__$1 = state_35980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35980__$1,(22),inst_35954,inst_35898);
} else {
if((state_val_35981 === (11))){
var inst_35925 = (state_35980[(10)]);
var inst_35910 = (state_35980[(15)]);
var inst_35925__$1 = cljs.core.seq(inst_35910);
var state_35980__$1 = (function (){var statearr_36024 = state_35980;
(statearr_36024[(10)] = inst_35925__$1);

return statearr_36024;
})();
if(inst_35925__$1){
var statearr_36027_37693 = state_35980__$1;
(statearr_36027_37693[(1)] = (13));

} else {
var statearr_36028_37695 = state_35980__$1;
(statearr_36028_37695[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (9))){
var inst_35947 = (state_35980[(2)]);
var state_35980__$1 = state_35980;
var statearr_36030_37699 = state_35980__$1;
(statearr_36030_37699[(2)] = inst_35947);

(statearr_36030_37699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (5))){
var inst_35907 = cljs.core.deref(mults);
var inst_35908 = cljs.core.vals(inst_35907);
var inst_35909 = cljs.core.seq(inst_35908);
var inst_35910 = inst_35909;
var inst_35911 = null;
var inst_35912 = (0);
var inst_35913 = (0);
var state_35980__$1 = (function (){var statearr_36031 = state_35980;
(statearr_36031[(12)] = inst_35912);

(statearr_36031[(14)] = inst_35913);

(statearr_36031[(15)] = inst_35910);

(statearr_36031[(16)] = inst_35911);

return statearr_36031;
})();
var statearr_36032_37701 = state_35980__$1;
(statearr_36032_37701[(2)] = null);

(statearr_36032_37701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (14))){
var state_35980__$1 = state_35980;
var statearr_36036_37707 = state_35980__$1;
(statearr_36036_37707[(2)] = null);

(statearr_36036_37707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (16))){
var inst_35925 = (state_35980[(10)]);
var inst_35929 = cljs.core.chunk_first(inst_35925);
var inst_35930 = cljs.core.chunk_rest(inst_35925);
var inst_35931 = cljs.core.count(inst_35929);
var inst_35910 = inst_35930;
var inst_35911 = inst_35929;
var inst_35912 = inst_35931;
var inst_35913 = (0);
var state_35980__$1 = (function (){var statearr_36037 = state_35980;
(statearr_36037[(12)] = inst_35912);

(statearr_36037[(14)] = inst_35913);

(statearr_36037[(15)] = inst_35910);

(statearr_36037[(16)] = inst_35911);

return statearr_36037;
})();
var statearr_36038_37715 = state_35980__$1;
(statearr_36038_37715[(2)] = null);

(statearr_36038_37715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (10))){
var inst_35912 = (state_35980[(12)]);
var inst_35913 = (state_35980[(14)]);
var inst_35910 = (state_35980[(15)]);
var inst_35911 = (state_35980[(16)]);
var inst_35919 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35911,inst_35913);
var inst_35920 = cljs.core.async.muxch_STAR_(inst_35919);
var inst_35921 = cljs.core.async.close_BANG_(inst_35920);
var inst_35922 = (inst_35913 + (1));
var tmp36033 = inst_35912;
var tmp36034 = inst_35910;
var tmp36035 = inst_35911;
var inst_35910__$1 = tmp36034;
var inst_35911__$1 = tmp36035;
var inst_35912__$1 = tmp36033;
var inst_35913__$1 = inst_35922;
var state_35980__$1 = (function (){var statearr_36039 = state_35980;
(statearr_36039[(17)] = inst_35921);

(statearr_36039[(12)] = inst_35912__$1);

(statearr_36039[(14)] = inst_35913__$1);

(statearr_36039[(15)] = inst_35910__$1);

(statearr_36039[(16)] = inst_35911__$1);

return statearr_36039;
})();
var statearr_36040_37726 = state_35980__$1;
(statearr_36040_37726[(2)] = null);

(statearr_36040_37726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (18))){
var inst_35940 = (state_35980[(2)]);
var state_35980__$1 = state_35980;
var statearr_36041_37727 = state_35980__$1;
(statearr_36041_37727[(2)] = inst_35940);

(statearr_36041_37727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35981 === (8))){
var inst_35912 = (state_35980[(12)]);
var inst_35913 = (state_35980[(14)]);
var inst_35916 = (inst_35913 < inst_35912);
var inst_35917 = inst_35916;
var state_35980__$1 = state_35980;
if(cljs.core.truth_(inst_35917)){
var statearr_36042_37734 = state_35980__$1;
(statearr_36042_37734[(1)] = (10));

} else {
var statearr_36043_37735 = state_35980__$1;
(statearr_36043_37735[(1)] = (11));

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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35980){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35980);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36046){if((e36046 instanceof Object)){
var ex__34210__auto__ = e36046;
var statearr_36047_37740 = state_35980;
(statearr_36047_37740[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36046;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37742 = state_35980;
state_35980 = G__37742;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36048 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36048[(6)] = c__34274__auto___37613);

return statearr_36048;
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
var G__36058 = arguments.length;
switch (G__36058) {
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
var G__36064 = arguments.length;
switch (G__36064) {
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
var G__36074 = arguments.length;
switch (G__36074) {
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
var c__34274__auto___37757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36122){
var state_val_36123 = (state_36122[(1)]);
if((state_val_36123 === (7))){
var state_36122__$1 = state_36122;
var statearr_36124_37758 = state_36122__$1;
(statearr_36124_37758[(2)] = null);

(statearr_36124_37758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (1))){
var state_36122__$1 = state_36122;
var statearr_36126_37760 = state_36122__$1;
(statearr_36126_37760[(2)] = null);

(statearr_36126_37760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (4))){
var inst_36079 = (state_36122[(7)]);
var inst_36081 = (inst_36079 < cnt);
var state_36122__$1 = state_36122;
if(cljs.core.truth_(inst_36081)){
var statearr_36129_37761 = state_36122__$1;
(statearr_36129_37761[(1)] = (6));

} else {
var statearr_36131_37762 = state_36122__$1;
(statearr_36131_37762[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (15))){
var inst_36115 = (state_36122[(2)]);
var state_36122__$1 = state_36122;
var statearr_36133_37764 = state_36122__$1;
(statearr_36133_37764[(2)] = inst_36115);

(statearr_36133_37764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (13))){
var inst_36108 = cljs.core.async.close_BANG_(out);
var state_36122__$1 = state_36122;
var statearr_36134_37765 = state_36122__$1;
(statearr_36134_37765[(2)] = inst_36108);

(statearr_36134_37765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (6))){
var state_36122__$1 = state_36122;
var statearr_36136_37766 = state_36122__$1;
(statearr_36136_37766[(2)] = null);

(statearr_36136_37766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (3))){
var inst_36117 = (state_36122[(2)]);
var state_36122__$1 = state_36122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36122__$1,inst_36117);
} else {
if((state_val_36123 === (12))){
var inst_36101 = (state_36122[(8)]);
var inst_36101__$1 = (state_36122[(2)]);
var inst_36102 = cljs.core.some(cljs.core.nil_QMARK_,inst_36101__$1);
var state_36122__$1 = (function (){var statearr_36140 = state_36122;
(statearr_36140[(8)] = inst_36101__$1);

return statearr_36140;
})();
if(cljs.core.truth_(inst_36102)){
var statearr_36141_37771 = state_36122__$1;
(statearr_36141_37771[(1)] = (13));

} else {
var statearr_36142_37772 = state_36122__$1;
(statearr_36142_37772[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (2))){
var inst_36078 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36079 = (0);
var state_36122__$1 = (function (){var statearr_36143 = state_36122;
(statearr_36143[(9)] = inst_36078);

(statearr_36143[(7)] = inst_36079);

return statearr_36143;
})();
var statearr_36144_37778 = state_36122__$1;
(statearr_36144_37778[(2)] = null);

(statearr_36144_37778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (11))){
var inst_36079 = (state_36122[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36122,(10),Object,null,(9));
var inst_36088 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36079) : chs__$1.call(null,inst_36079));
var inst_36089 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36079) : done.call(null,inst_36079));
var inst_36090 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36088,inst_36089);
var state_36122__$1 = state_36122;
var statearr_36146_37783 = state_36122__$1;
(statearr_36146_37783[(2)] = inst_36090);


cljs.core.async.impl.ioc_helpers.process_exception(state_36122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (9))){
var inst_36079 = (state_36122[(7)]);
var inst_36092 = (state_36122[(2)]);
var inst_36093 = (inst_36079 + (1));
var inst_36079__$1 = inst_36093;
var state_36122__$1 = (function (){var statearr_36151 = state_36122;
(statearr_36151[(10)] = inst_36092);

(statearr_36151[(7)] = inst_36079__$1);

return statearr_36151;
})();
var statearr_36154_37785 = state_36122__$1;
(statearr_36154_37785[(2)] = null);

(statearr_36154_37785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (5))){
var inst_36099 = (state_36122[(2)]);
var state_36122__$1 = (function (){var statearr_36157 = state_36122;
(statearr_36157[(11)] = inst_36099);

return statearr_36157;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36122__$1,(12),dchan);
} else {
if((state_val_36123 === (14))){
var inst_36101 = (state_36122[(8)]);
var inst_36110 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36101);
var state_36122__$1 = state_36122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36122__$1,(16),out,inst_36110);
} else {
if((state_val_36123 === (16))){
var inst_36112 = (state_36122[(2)]);
var state_36122__$1 = (function (){var statearr_36159 = state_36122;
(statearr_36159[(12)] = inst_36112);

return statearr_36159;
})();
var statearr_36160_37790 = state_36122__$1;
(statearr_36160_37790[(2)] = null);

(statearr_36160_37790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (10))){
var inst_36083 = (state_36122[(2)]);
var inst_36084 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36122__$1 = (function (){var statearr_36166 = state_36122;
(statearr_36166[(13)] = inst_36083);

return statearr_36166;
})();
var statearr_36172_37796 = state_36122__$1;
(statearr_36172_37796[(2)] = inst_36084);


cljs.core.async.impl.ioc_helpers.process_exception(state_36122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36123 === (8))){
var inst_36097 = (state_36122[(2)]);
var state_36122__$1 = state_36122;
var statearr_36174_37801 = state_36122__$1;
(statearr_36174_37801[(2)] = inst_36097);

(statearr_36174_37801[(1)] = (5));


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
var statearr_36175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36175[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36175[(1)] = (1));

return statearr_36175;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36122){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36122);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36177){if((e36177 instanceof Object)){
var ex__34210__auto__ = e36177;
var statearr_36178_37804 = state_36122;
(statearr_36178_37804[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36177;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37811 = state_36122;
state_36122 = G__37811;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36180 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36180[(6)] = c__34274__auto___37757);

return statearr_36180;
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
var G__36186 = arguments.length;
switch (G__36186) {
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
var c__34274__auto___37821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36233){
var state_val_36235 = (state_36233[(1)]);
if((state_val_36235 === (7))){
var inst_36206 = (state_36233[(7)]);
var inst_36205 = (state_36233[(8)]);
var inst_36205__$1 = (state_36233[(2)]);
var inst_36206__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36205__$1,(0),null);
var inst_36207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36205__$1,(1),null);
var inst_36208 = (inst_36206__$1 == null);
var state_36233__$1 = (function (){var statearr_36236 = state_36233;
(statearr_36236[(7)] = inst_36206__$1);

(statearr_36236[(9)] = inst_36207);

(statearr_36236[(8)] = inst_36205__$1);

return statearr_36236;
})();
if(cljs.core.truth_(inst_36208)){
var statearr_36237_37826 = state_36233__$1;
(statearr_36237_37826[(1)] = (8));

} else {
var statearr_36238_37827 = state_36233__$1;
(statearr_36238_37827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (1))){
var inst_36195 = cljs.core.vec(chs);
var inst_36196 = inst_36195;
var state_36233__$1 = (function (){var statearr_36239 = state_36233;
(statearr_36239[(10)] = inst_36196);

return statearr_36239;
})();
var statearr_36240_37834 = state_36233__$1;
(statearr_36240_37834[(2)] = null);

(statearr_36240_37834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (4))){
var inst_36196 = (state_36233[(10)]);
var state_36233__$1 = state_36233;
return cljs.core.async.ioc_alts_BANG_(state_36233__$1,(7),inst_36196);
} else {
if((state_val_36235 === (6))){
var inst_36227 = (state_36233[(2)]);
var state_36233__$1 = state_36233;
var statearr_36243_37837 = state_36233__$1;
(statearr_36243_37837[(2)] = inst_36227);

(statearr_36243_37837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (3))){
var inst_36229 = (state_36233[(2)]);
var state_36233__$1 = state_36233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36233__$1,inst_36229);
} else {
if((state_val_36235 === (2))){
var inst_36196 = (state_36233[(10)]);
var inst_36198 = cljs.core.count(inst_36196);
var inst_36199 = (inst_36198 > (0));
var state_36233__$1 = state_36233;
if(cljs.core.truth_(inst_36199)){
var statearr_36247_37841 = state_36233__$1;
(statearr_36247_37841[(1)] = (4));

} else {
var statearr_36248_37842 = state_36233__$1;
(statearr_36248_37842[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (11))){
var inst_36196 = (state_36233[(10)]);
var inst_36216 = (state_36233[(2)]);
var tmp36244 = inst_36196;
var inst_36196__$1 = tmp36244;
var state_36233__$1 = (function (){var statearr_36249 = state_36233;
(statearr_36249[(11)] = inst_36216);

(statearr_36249[(10)] = inst_36196__$1);

return statearr_36249;
})();
var statearr_36250_37849 = state_36233__$1;
(statearr_36250_37849[(2)] = null);

(statearr_36250_37849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (9))){
var inst_36206 = (state_36233[(7)]);
var state_36233__$1 = state_36233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36233__$1,(11),out,inst_36206);
} else {
if((state_val_36235 === (5))){
var inst_36223 = cljs.core.async.close_BANG_(out);
var state_36233__$1 = state_36233;
var statearr_36254_37852 = state_36233__$1;
(statearr_36254_37852[(2)] = inst_36223);

(statearr_36254_37852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (10))){
var inst_36219 = (state_36233[(2)]);
var state_36233__$1 = state_36233;
var statearr_36255_37853 = state_36233__$1;
(statearr_36255_37853[(2)] = inst_36219);

(statearr_36255_37853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36235 === (8))){
var inst_36196 = (state_36233[(10)]);
var inst_36206 = (state_36233[(7)]);
var inst_36207 = (state_36233[(9)]);
var inst_36205 = (state_36233[(8)]);
var inst_36210 = (function (){var cs = inst_36196;
var vec__36201 = inst_36205;
var v = inst_36206;
var c = inst_36207;
return (function (p1__36183_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36183_SHARP_);
});
})();
var inst_36212 = cljs.core.filterv(inst_36210,inst_36196);
var inst_36196__$1 = inst_36212;
var state_36233__$1 = (function (){var statearr_36258 = state_36233;
(statearr_36258[(10)] = inst_36196__$1);

return statearr_36258;
})();
var statearr_36259_37862 = state_36233__$1;
(statearr_36259_37862[(2)] = null);

(statearr_36259_37862[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36233){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36233);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36261){if((e36261 instanceof Object)){
var ex__34210__auto__ = e36261;
var statearr_36262_37870 = state_36233;
(statearr_36262_37870[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37874 = state_36233;
state_36233 = G__37874;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36263 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36263[(6)] = c__34274__auto___37821);

return statearr_36263;
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
var G__36265 = arguments.length;
switch (G__36265) {
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
var c__34274__auto___37881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36300){
var state_val_36302 = (state_36300[(1)]);
if((state_val_36302 === (7))){
var inst_36276 = (state_36300[(7)]);
var inst_36276__$1 = (state_36300[(2)]);
var inst_36277 = (inst_36276__$1 == null);
var inst_36278 = cljs.core.not(inst_36277);
var state_36300__$1 = (function (){var statearr_36303 = state_36300;
(statearr_36303[(7)] = inst_36276__$1);

return statearr_36303;
})();
if(inst_36278){
var statearr_36305_37886 = state_36300__$1;
(statearr_36305_37886[(1)] = (8));

} else {
var statearr_36306_37887 = state_36300__$1;
(statearr_36306_37887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (1))){
var inst_36270 = (0);
var state_36300__$1 = (function (){var statearr_36308 = state_36300;
(statearr_36308[(8)] = inst_36270);

return statearr_36308;
})();
var statearr_36309_37892 = state_36300__$1;
(statearr_36309_37892[(2)] = null);

(statearr_36309_37892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (4))){
var state_36300__$1 = state_36300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36300__$1,(7),ch);
} else {
if((state_val_36302 === (6))){
var inst_36293 = (state_36300[(2)]);
var state_36300__$1 = state_36300;
var statearr_36312_37896 = state_36300__$1;
(statearr_36312_37896[(2)] = inst_36293);

(statearr_36312_37896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (3))){
var inst_36295 = (state_36300[(2)]);
var inst_36296 = cljs.core.async.close_BANG_(out);
var state_36300__$1 = (function (){var statearr_36314 = state_36300;
(statearr_36314[(9)] = inst_36295);

return statearr_36314;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36300__$1,inst_36296);
} else {
if((state_val_36302 === (2))){
var inst_36270 = (state_36300[(8)]);
var inst_36272 = (inst_36270 < n);
var state_36300__$1 = state_36300;
if(cljs.core.truth_(inst_36272)){
var statearr_36315_37898 = state_36300__$1;
(statearr_36315_37898[(1)] = (4));

} else {
var statearr_36316_37899 = state_36300__$1;
(statearr_36316_37899[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (11))){
var inst_36270 = (state_36300[(8)]);
var inst_36283 = (state_36300[(2)]);
var inst_36286 = (inst_36270 + (1));
var inst_36270__$1 = inst_36286;
var state_36300__$1 = (function (){var statearr_36319 = state_36300;
(statearr_36319[(8)] = inst_36270__$1);

(statearr_36319[(10)] = inst_36283);

return statearr_36319;
})();
var statearr_36320_37906 = state_36300__$1;
(statearr_36320_37906[(2)] = null);

(statearr_36320_37906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (9))){
var state_36300__$1 = state_36300;
var statearr_36321_37908 = state_36300__$1;
(statearr_36321_37908[(2)] = null);

(statearr_36321_37908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (5))){
var state_36300__$1 = state_36300;
var statearr_36322_37910 = state_36300__$1;
(statearr_36322_37910[(2)] = null);

(statearr_36322_37910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (10))){
var inst_36290 = (state_36300[(2)]);
var state_36300__$1 = state_36300;
var statearr_36323_37914 = state_36300__$1;
(statearr_36323_37914[(2)] = inst_36290);

(statearr_36323_37914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36302 === (8))){
var inst_36276 = (state_36300[(7)]);
var state_36300__$1 = state_36300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36300__$1,(11),out,inst_36276);
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
var statearr_36326 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36326[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36326[(1)] = (1));

return statearr_36326;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36300){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36300);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36327){if((e36327 instanceof Object)){
var ex__34210__auto__ = e36327;
var statearr_36328_37922 = state_36300;
(statearr_36328_37922[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37924 = state_36300;
state_36300 = G__37924;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36331 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36331[(6)] = c__34274__auto___37881);

return statearr_36331;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36340 = (function (f,ch,meta36341){
this.f = f;
this.ch = ch;
this.meta36341 = meta36341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36342,meta36341__$1){
var self__ = this;
var _36342__$1 = this;
return (new cljs.core.async.t_cljs$core$async36340(self__.f,self__.ch,meta36341__$1));
}));

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36342){
var self__ = this;
var _36342__$1 = this;
return self__.meta36341;
}));

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
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
cljs.core.async.t_cljs$core$async36346 = (function (f,ch,meta36341,_,fn1,meta36347){
this.f = f;
this.ch = ch;
this.meta36341 = meta36341;
this._ = _;
this.fn1 = fn1;
this.meta36347 = meta36347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36348,meta36347__$1){
var self__ = this;
var _36348__$1 = this;
return (new cljs.core.async.t_cljs$core$async36346(self__.f,self__.ch,self__.meta36341,self__._,self__.fn1,meta36347__$1));
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
return (function (p1__36332_SHARP_){
var G__36352 = (((p1__36332_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36332_SHARP_) : self__.f.call(null,p1__36332_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36352) : f1.call(null,G__36352));
});
}));

(cljs.core.async.t_cljs$core$async36346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36341","meta36341",-1745304593,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36340","cljs.core.async/t_cljs$core$async36340",149439839,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36347","meta36347",800743982,null)], null);
}));

(cljs.core.async.t_cljs$core$async36346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36346");

(cljs.core.async.t_cljs$core$async36346.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36346.
 */
cljs.core.async.__GT_t_cljs$core$async36346 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36346(f__$1,ch__$1,meta36341__$1,___$2,fn1__$1,meta36347){
return (new cljs.core.async.t_cljs$core$async36346(f__$1,ch__$1,meta36341__$1,___$2,fn1__$1,meta36347));
});

}

return (new cljs.core.async.t_cljs$core$async36346(self__.f,self__.ch,self__.meta36341,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36340.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36341","meta36341",-1745304593,null)], null);
}));

(cljs.core.async.t_cljs$core$async36340.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36340");

(cljs.core.async.t_cljs$core$async36340.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36340");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36340.
 */
cljs.core.async.__GT_t_cljs$core$async36340 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36340(f__$1,ch__$1,meta36341){
return (new cljs.core.async.t_cljs$core$async36340(f__$1,ch__$1,meta36341));
});

}

return (new cljs.core.async.t_cljs$core$async36340(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36364 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36364 = (function (f,ch,meta36365){
this.f = f;
this.ch = ch;
this.meta36365 = meta36365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36366,meta36365__$1){
var self__ = this;
var _36366__$1 = this;
return (new cljs.core.async.t_cljs$core$async36364(self__.f,self__.ch,meta36365__$1));
}));

(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36366){
var self__ = this;
var _36366__$1 = this;
return self__.meta36365;
}));

(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36364.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36365","meta36365",-994124455,null)], null);
}));

(cljs.core.async.t_cljs$core$async36364.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36364");

(cljs.core.async.t_cljs$core$async36364.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36364");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36364.
 */
cljs.core.async.__GT_t_cljs$core$async36364 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36364(f__$1,ch__$1,meta36365){
return (new cljs.core.async.t_cljs$core$async36364(f__$1,ch__$1,meta36365));
});

}

return (new cljs.core.async.t_cljs$core$async36364(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34274__auto___37986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36446){
var state_val_36447 = (state_36446[(1)]);
if((state_val_36447 === (7))){
var inst_36441 = (state_36446[(2)]);
var state_36446__$1 = state_36446;
var statearr_36452_37987 = state_36446__$1;
(statearr_36452_37987[(2)] = inst_36441);

(statearr_36452_37987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (1))){
var state_36446__$1 = state_36446;
var statearr_36453_37988 = state_36446__$1;
(statearr_36453_37988[(2)] = null);

(statearr_36453_37988[(1)] = (2));


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
var statearr_36455_37992 = state_36446__$1;
(statearr_36455_37992[(1)] = (5));

} else {
var statearr_36457_37993 = state_36446__$1;
(statearr_36457_37993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (6))){
var inst_36421 = (state_36446[(7)]);
var inst_36426 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36421) : p.call(null,inst_36421));
var state_36446__$1 = state_36446;
if(cljs.core.truth_(inst_36426)){
var statearr_36458_37996 = state_36446__$1;
(statearr_36458_37996[(1)] = (8));

} else {
var statearr_36459_37997 = state_36446__$1;
(statearr_36459_37997[(1)] = (9));

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
var statearr_36461_37999 = state_36446__$1;
(statearr_36461_37999[(2)] = inst_36434);

(statearr_36461_37999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (9))){
var state_36446__$1 = state_36446;
var statearr_36463_38004 = state_36446__$1;
(statearr_36463_38004[(2)] = null);

(statearr_36463_38004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (5))){
var inst_36424 = cljs.core.async.close_BANG_(out);
var state_36446__$1 = state_36446;
var statearr_36468_38007 = state_36446__$1;
(statearr_36468_38007[(2)] = inst_36424);

(statearr_36468_38007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36447 === (10))){
var inst_36437 = (state_36446[(2)]);
var state_36446__$1 = (function (){var statearr_36470 = state_36446;
(statearr_36470[(8)] = inst_36437);

return statearr_36470;
})();
var statearr_36471_38008 = state_36446__$1;
(statearr_36471_38008[(2)] = null);

(statearr_36471_38008[(1)] = (2));


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
var statearr_36473 = [null,null,null,null,null,null,null,null,null];
(statearr_36473[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36473[(1)] = (1));

return statearr_36473;
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
var statearr_36475_38010 = state_36446;
(statearr_36475_38010[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36474;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38012 = state_36446;
state_36446 = G__38012;
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
(statearr_36477[(6)] = c__34274__auto___37986);

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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36547){
var state_val_36548 = (state_36547[(1)]);
if((state_val_36548 === (7))){
var inst_36542 = (state_36547[(2)]);
var state_36547__$1 = state_36547;
var statearr_36551_38021 = state_36547__$1;
(statearr_36551_38021[(2)] = inst_36542);

(statearr_36551_38021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (20))){
var inst_36511 = (state_36547[(7)]);
var inst_36523 = (state_36547[(2)]);
var inst_36524 = cljs.core.next(inst_36511);
var inst_36497 = inst_36524;
var inst_36498 = null;
var inst_36499 = (0);
var inst_36500 = (0);
var state_36547__$1 = (function (){var statearr_36553 = state_36547;
(statearr_36553[(8)] = inst_36499);

(statearr_36553[(9)] = inst_36523);

(statearr_36553[(10)] = inst_36500);

(statearr_36553[(11)] = inst_36497);

(statearr_36553[(12)] = inst_36498);

return statearr_36553;
})();
var statearr_36554_38022 = state_36547__$1;
(statearr_36554_38022[(2)] = null);

(statearr_36554_38022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (1))){
var state_36547__$1 = state_36547;
var statearr_36555_38027 = state_36547__$1;
(statearr_36555_38027[(2)] = null);

(statearr_36555_38027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (4))){
var inst_36485 = (state_36547[(13)]);
var inst_36485__$1 = (state_36547[(2)]);
var inst_36487 = (inst_36485__$1 == null);
var state_36547__$1 = (function (){var statearr_36557 = state_36547;
(statearr_36557[(13)] = inst_36485__$1);

return statearr_36557;
})();
if(cljs.core.truth_(inst_36487)){
var statearr_36558_38028 = state_36547__$1;
(statearr_36558_38028[(1)] = (5));

} else {
var statearr_36559_38029 = state_36547__$1;
(statearr_36559_38029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (15))){
var state_36547__$1 = state_36547;
var statearr_36563_38030 = state_36547__$1;
(statearr_36563_38030[(2)] = null);

(statearr_36563_38030[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (21))){
var state_36547__$1 = state_36547;
var statearr_36565_38031 = state_36547__$1;
(statearr_36565_38031[(2)] = null);

(statearr_36565_38031[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (13))){
var inst_36499 = (state_36547[(8)]);
var inst_36500 = (state_36547[(10)]);
var inst_36497 = (state_36547[(11)]);
var inst_36498 = (state_36547[(12)]);
var inst_36507 = (state_36547[(2)]);
var inst_36508 = (inst_36500 + (1));
var tmp36560 = inst_36499;
var tmp36561 = inst_36497;
var tmp36562 = inst_36498;
var inst_36497__$1 = tmp36561;
var inst_36498__$1 = tmp36562;
var inst_36499__$1 = tmp36560;
var inst_36500__$1 = inst_36508;
var state_36547__$1 = (function (){var statearr_36567 = state_36547;
(statearr_36567[(8)] = inst_36499__$1);

(statearr_36567[(14)] = inst_36507);

(statearr_36567[(10)] = inst_36500__$1);

(statearr_36567[(11)] = inst_36497__$1);

(statearr_36567[(12)] = inst_36498__$1);

return statearr_36567;
})();
var statearr_36568_38033 = state_36547__$1;
(statearr_36568_38033[(2)] = null);

(statearr_36568_38033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (22))){
var state_36547__$1 = state_36547;
var statearr_36570_38034 = state_36547__$1;
(statearr_36570_38034[(2)] = null);

(statearr_36570_38034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (6))){
var inst_36485 = (state_36547[(13)]);
var inst_36495 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36485) : f.call(null,inst_36485));
var inst_36496 = cljs.core.seq(inst_36495);
var inst_36497 = inst_36496;
var inst_36498 = null;
var inst_36499 = (0);
var inst_36500 = (0);
var state_36547__$1 = (function (){var statearr_36571 = state_36547;
(statearr_36571[(8)] = inst_36499);

(statearr_36571[(10)] = inst_36500);

(statearr_36571[(11)] = inst_36497);

(statearr_36571[(12)] = inst_36498);

return statearr_36571;
})();
var statearr_36573_38039 = state_36547__$1;
(statearr_36573_38039[(2)] = null);

(statearr_36573_38039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (17))){
var inst_36511 = (state_36547[(7)]);
var inst_36516 = cljs.core.chunk_first(inst_36511);
var inst_36517 = cljs.core.chunk_rest(inst_36511);
var inst_36518 = cljs.core.count(inst_36516);
var inst_36497 = inst_36517;
var inst_36498 = inst_36516;
var inst_36499 = inst_36518;
var inst_36500 = (0);
var state_36547__$1 = (function (){var statearr_36574 = state_36547;
(statearr_36574[(8)] = inst_36499);

(statearr_36574[(10)] = inst_36500);

(statearr_36574[(11)] = inst_36497);

(statearr_36574[(12)] = inst_36498);

return statearr_36574;
})();
var statearr_36576_38040 = state_36547__$1;
(statearr_36576_38040[(2)] = null);

(statearr_36576_38040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (3))){
var inst_36544 = (state_36547[(2)]);
var state_36547__$1 = state_36547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36547__$1,inst_36544);
} else {
if((state_val_36548 === (12))){
var inst_36532 = (state_36547[(2)]);
var state_36547__$1 = state_36547;
var statearr_36577_38041 = state_36547__$1;
(statearr_36577_38041[(2)] = inst_36532);

(statearr_36577_38041[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (2))){
var state_36547__$1 = state_36547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36547__$1,(4),in$);
} else {
if((state_val_36548 === (23))){
var inst_36540 = (state_36547[(2)]);
var state_36547__$1 = state_36547;
var statearr_36579_38042 = state_36547__$1;
(statearr_36579_38042[(2)] = inst_36540);

(statearr_36579_38042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (19))){
var inst_36527 = (state_36547[(2)]);
var state_36547__$1 = state_36547;
var statearr_36581_38043 = state_36547__$1;
(statearr_36581_38043[(2)] = inst_36527);

(statearr_36581_38043[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (11))){
var inst_36511 = (state_36547[(7)]);
var inst_36497 = (state_36547[(11)]);
var inst_36511__$1 = cljs.core.seq(inst_36497);
var state_36547__$1 = (function (){var statearr_36582 = state_36547;
(statearr_36582[(7)] = inst_36511__$1);

return statearr_36582;
})();
if(inst_36511__$1){
var statearr_36584_38048 = state_36547__$1;
(statearr_36584_38048[(1)] = (14));

} else {
var statearr_36585_38049 = state_36547__$1;
(statearr_36585_38049[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (9))){
var inst_36534 = (state_36547[(2)]);
var inst_36535 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36547__$1 = (function (){var statearr_36586 = state_36547;
(statearr_36586[(15)] = inst_36534);

return statearr_36586;
})();
if(cljs.core.truth_(inst_36535)){
var statearr_36587_38051 = state_36547__$1;
(statearr_36587_38051[(1)] = (21));

} else {
var statearr_36589_38052 = state_36547__$1;
(statearr_36589_38052[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (5))){
var inst_36489 = cljs.core.async.close_BANG_(out);
var state_36547__$1 = state_36547;
var statearr_36590_38055 = state_36547__$1;
(statearr_36590_38055[(2)] = inst_36489);

(statearr_36590_38055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (14))){
var inst_36511 = (state_36547[(7)]);
var inst_36514 = cljs.core.chunked_seq_QMARK_(inst_36511);
var state_36547__$1 = state_36547;
if(inst_36514){
var statearr_36592_38056 = state_36547__$1;
(statearr_36592_38056[(1)] = (17));

} else {
var statearr_36593_38057 = state_36547__$1;
(statearr_36593_38057[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (16))){
var inst_36530 = (state_36547[(2)]);
var state_36547__$1 = state_36547;
var statearr_36594_38058 = state_36547__$1;
(statearr_36594_38058[(2)] = inst_36530);

(statearr_36594_38058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36548 === (10))){
var inst_36500 = (state_36547[(10)]);
var inst_36498 = (state_36547[(12)]);
var inst_36505 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36498,inst_36500);
var state_36547__$1 = state_36547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36547__$1,(13),out,inst_36505);
} else {
if((state_val_36548 === (18))){
var inst_36511 = (state_36547[(7)]);
var inst_36521 = cljs.core.first(inst_36511);
var state_36547__$1 = state_36547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36547__$1,(20),out,inst_36521);
} else {
if((state_val_36548 === (8))){
var inst_36499 = (state_36547[(8)]);
var inst_36500 = (state_36547[(10)]);
var inst_36502 = (inst_36500 < inst_36499);
var inst_36503 = inst_36502;
var state_36547__$1 = state_36547;
if(cljs.core.truth_(inst_36503)){
var statearr_36596_38060 = state_36547__$1;
(statearr_36596_38060[(1)] = (10));

} else {
var statearr_36598_38061 = state_36547__$1;
(statearr_36598_38061[(1)] = (11));

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
var statearr_36599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36599[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36599[(1)] = (1));

return statearr_36599;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36547){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36547);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36601){if((e36601 instanceof Object)){
var ex__34210__auto__ = e36601;
var statearr_36602_38064 = state_36547;
(statearr_36602_38064[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38069 = state_36547;
state_36547 = G__38069;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36547){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36547);
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
var c__34274__auto___38079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36642){
var state_val_36643 = (state_36642[(1)]);
if((state_val_36643 === (7))){
var inst_36636 = (state_36642[(2)]);
var state_36642__$1 = state_36642;
var statearr_36644_38084 = state_36642__$1;
(statearr_36644_38084[(2)] = inst_36636);

(statearr_36644_38084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36643 === (1))){
var inst_36618 = null;
var state_36642__$1 = (function (){var statearr_36645 = state_36642;
(statearr_36645[(7)] = inst_36618);

return statearr_36645;
})();
var statearr_36647_38085 = state_36642__$1;
(statearr_36647_38085[(2)] = null);

(statearr_36647_38085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36643 === (4))){
var inst_36621 = (state_36642[(8)]);
var inst_36621__$1 = (state_36642[(2)]);
var inst_36622 = (inst_36621__$1 == null);
var inst_36623 = cljs.core.not(inst_36622);
var state_36642__$1 = (function (){var statearr_36648 = state_36642;
(statearr_36648[(8)] = inst_36621__$1);

return statearr_36648;
})();
if(inst_36623){
var statearr_36649_38086 = state_36642__$1;
(statearr_36649_38086[(1)] = (5));

} else {
var statearr_36650_38087 = state_36642__$1;
(statearr_36650_38087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36643 === (6))){
var state_36642__$1 = state_36642;
var statearr_36652_38088 = state_36642__$1;
(statearr_36652_38088[(2)] = null);

(statearr_36652_38088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36643 === (3))){
var inst_36638 = (state_36642[(2)]);
var inst_36639 = cljs.core.async.close_BANG_(out);
var state_36642__$1 = (function (){var statearr_36653 = state_36642;
(statearr_36653[(9)] = inst_36638);

return statearr_36653;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36642__$1,inst_36639);
} else {
if((state_val_36643 === (2))){
var state_36642__$1 = state_36642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36642__$1,(4),ch);
} else {
if((state_val_36643 === (11))){
var inst_36621 = (state_36642[(8)]);
var inst_36630 = (state_36642[(2)]);
var inst_36618 = inst_36621;
var state_36642__$1 = (function (){var statearr_36655 = state_36642;
(statearr_36655[(10)] = inst_36630);

(statearr_36655[(7)] = inst_36618);

return statearr_36655;
})();
var statearr_36656_38092 = state_36642__$1;
(statearr_36656_38092[(2)] = null);

(statearr_36656_38092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36643 === (9))){
var inst_36621 = (state_36642[(8)]);
var state_36642__$1 = state_36642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36642__$1,(11),out,inst_36621);
} else {
if((state_val_36643 === (5))){
var inst_36621 = (state_36642[(8)]);
var inst_36618 = (state_36642[(7)]);
var inst_36625 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36621,inst_36618);
var state_36642__$1 = state_36642;
if(inst_36625){
var statearr_36659_38093 = state_36642__$1;
(statearr_36659_38093[(1)] = (8));

} else {
var statearr_36660_38094 = state_36642__$1;
(statearr_36660_38094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36643 === (10))){
var inst_36633 = (state_36642[(2)]);
var state_36642__$1 = state_36642;
var statearr_36661_38095 = state_36642__$1;
(statearr_36661_38095[(2)] = inst_36633);

(statearr_36661_38095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36643 === (8))){
var inst_36618 = (state_36642[(7)]);
var tmp36658 = inst_36618;
var inst_36618__$1 = tmp36658;
var state_36642__$1 = (function (){var statearr_36663 = state_36642;
(statearr_36663[(7)] = inst_36618__$1);

return statearr_36663;
})();
var statearr_36664_38098 = state_36642__$1;
(statearr_36664_38098[(2)] = null);

(statearr_36664_38098[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36642){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36642);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36667){if((e36667 instanceof Object)){
var ex__34210__auto__ = e36667;
var statearr_36668_38101 = state_36642;
(statearr_36668_38101[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38102 = state_36642;
state_36642 = G__38102;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36670 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36670[(6)] = c__34274__auto___38079);

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
var c__34274__auto___38106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36713){
var state_val_36714 = (state_36713[(1)]);
if((state_val_36714 === (7))){
var inst_36709 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36716_38107 = state_36713__$1;
(statearr_36716_38107[(2)] = inst_36709);

(statearr_36716_38107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (1))){
var inst_36676 = (new Array(n));
var inst_36677 = inst_36676;
var inst_36678 = (0);
var state_36713__$1 = (function (){var statearr_36718 = state_36713;
(statearr_36718[(7)] = inst_36677);

(statearr_36718[(8)] = inst_36678);

return statearr_36718;
})();
var statearr_36719_38108 = state_36713__$1;
(statearr_36719_38108[(2)] = null);

(statearr_36719_38108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (4))){
var inst_36681 = (state_36713[(9)]);
var inst_36681__$1 = (state_36713[(2)]);
var inst_36682 = (inst_36681__$1 == null);
var inst_36683 = cljs.core.not(inst_36682);
var state_36713__$1 = (function (){var statearr_36720 = state_36713;
(statearr_36720[(9)] = inst_36681__$1);

return statearr_36720;
})();
if(inst_36683){
var statearr_36722_38112 = state_36713__$1;
(statearr_36722_38112[(1)] = (5));

} else {
var statearr_36723_38113 = state_36713__$1;
(statearr_36723_38113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (15))){
var inst_36703 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36724_38114 = state_36713__$1;
(statearr_36724_38114[(2)] = inst_36703);

(statearr_36724_38114[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (13))){
var state_36713__$1 = state_36713;
var statearr_36726_38115 = state_36713__$1;
(statearr_36726_38115[(2)] = null);

(statearr_36726_38115[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (6))){
var inst_36678 = (state_36713[(8)]);
var inst_36699 = (inst_36678 > (0));
var state_36713__$1 = state_36713;
if(cljs.core.truth_(inst_36699)){
var statearr_36727_38116 = state_36713__$1;
(statearr_36727_38116[(1)] = (12));

} else {
var statearr_36728_38118 = state_36713__$1;
(statearr_36728_38118[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (3))){
var inst_36711 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36713__$1,inst_36711);
} else {
if((state_val_36714 === (12))){
var inst_36677 = (state_36713[(7)]);
var inst_36701 = cljs.core.vec(inst_36677);
var state_36713__$1 = state_36713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36713__$1,(15),out,inst_36701);
} else {
if((state_val_36714 === (2))){
var state_36713__$1 = state_36713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36713__$1,(4),ch);
} else {
if((state_val_36714 === (11))){
var inst_36693 = (state_36713[(2)]);
var inst_36694 = (new Array(n));
var inst_36677 = inst_36694;
var inst_36678 = (0);
var state_36713__$1 = (function (){var statearr_36730 = state_36713;
(statearr_36730[(10)] = inst_36693);

(statearr_36730[(7)] = inst_36677);

(statearr_36730[(8)] = inst_36678);

return statearr_36730;
})();
var statearr_36732_38121 = state_36713__$1;
(statearr_36732_38121[(2)] = null);

(statearr_36732_38121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (9))){
var inst_36677 = (state_36713[(7)]);
var inst_36691 = cljs.core.vec(inst_36677);
var state_36713__$1 = state_36713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36713__$1,(11),out,inst_36691);
} else {
if((state_val_36714 === (5))){
var inst_36686 = (state_36713[(11)]);
var inst_36681 = (state_36713[(9)]);
var inst_36677 = (state_36713[(7)]);
var inst_36678 = (state_36713[(8)]);
var inst_36685 = (inst_36677[inst_36678] = inst_36681);
var inst_36686__$1 = (inst_36678 + (1));
var inst_36687 = (inst_36686__$1 < n);
var state_36713__$1 = (function (){var statearr_36734 = state_36713;
(statearr_36734[(11)] = inst_36686__$1);

(statearr_36734[(12)] = inst_36685);

return statearr_36734;
})();
if(cljs.core.truth_(inst_36687)){
var statearr_36735_38124 = state_36713__$1;
(statearr_36735_38124[(1)] = (8));

} else {
var statearr_36736_38125 = state_36713__$1;
(statearr_36736_38125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (14))){
var inst_36706 = (state_36713[(2)]);
var inst_36707 = cljs.core.async.close_BANG_(out);
var state_36713__$1 = (function (){var statearr_36738 = state_36713;
(statearr_36738[(13)] = inst_36706);

return statearr_36738;
})();
var statearr_36740_38126 = state_36713__$1;
(statearr_36740_38126[(2)] = inst_36707);

(statearr_36740_38126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (10))){
var inst_36697 = (state_36713[(2)]);
var state_36713__$1 = state_36713;
var statearr_36741_38127 = state_36713__$1;
(statearr_36741_38127[(2)] = inst_36697);

(statearr_36741_38127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36714 === (8))){
var inst_36686 = (state_36713[(11)]);
var inst_36677 = (state_36713[(7)]);
var tmp36737 = inst_36677;
var inst_36677__$1 = tmp36737;
var inst_36678 = inst_36686;
var state_36713__$1 = (function (){var statearr_36742 = state_36713;
(statearr_36742[(7)] = inst_36677__$1);

(statearr_36742[(8)] = inst_36678);

return statearr_36742;
})();
var statearr_36744_38128 = state_36713__$1;
(statearr_36744_38128[(2)] = null);

(statearr_36744_38128[(1)] = (2));


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
var statearr_36745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36745[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36745[(1)] = (1));

return statearr_36745;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36713){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36713);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36747){if((e36747 instanceof Object)){
var ex__34210__auto__ = e36747;
var statearr_36748_38129 = state_36713;
(statearr_36748_38129[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36747;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38131 = state_36713;
state_36713 = G__38131;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36749 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36749[(6)] = c__34274__auto___38106);

return statearr_36749;
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
var G__36751 = arguments.length;
switch (G__36751) {
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
var c__34274__auto___38136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36794){
var state_val_36795 = (state_36794[(1)]);
if((state_val_36795 === (7))){
var inst_36790 = (state_36794[(2)]);
var state_36794__$1 = state_36794;
var statearr_36797_38137 = state_36794__$1;
(statearr_36797_38137[(2)] = inst_36790);

(statearr_36797_38137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (1))){
var inst_36752 = [];
var inst_36753 = inst_36752;
var inst_36754 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36794__$1 = (function (){var statearr_36798 = state_36794;
(statearr_36798[(7)] = inst_36754);

(statearr_36798[(8)] = inst_36753);

return statearr_36798;
})();
var statearr_36799_38139 = state_36794__$1;
(statearr_36799_38139[(2)] = null);

(statearr_36799_38139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (4))){
var inst_36757 = (state_36794[(9)]);
var inst_36757__$1 = (state_36794[(2)]);
var inst_36758 = (inst_36757__$1 == null);
var inst_36759 = cljs.core.not(inst_36758);
var state_36794__$1 = (function (){var statearr_36801 = state_36794;
(statearr_36801[(9)] = inst_36757__$1);

return statearr_36801;
})();
if(inst_36759){
var statearr_36802_38142 = state_36794__$1;
(statearr_36802_38142[(1)] = (5));

} else {
var statearr_36803_38143 = state_36794__$1;
(statearr_36803_38143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (15))){
var inst_36784 = (state_36794[(2)]);
var state_36794__$1 = state_36794;
var statearr_36805_38144 = state_36794__$1;
(statearr_36805_38144[(2)] = inst_36784);

(statearr_36805_38144[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (13))){
var state_36794__$1 = state_36794;
var statearr_36806_38145 = state_36794__$1;
(statearr_36806_38145[(2)] = null);

(statearr_36806_38145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (6))){
var inst_36753 = (state_36794[(8)]);
var inst_36779 = inst_36753.length;
var inst_36780 = (inst_36779 > (0));
var state_36794__$1 = state_36794;
if(cljs.core.truth_(inst_36780)){
var statearr_36808_38147 = state_36794__$1;
(statearr_36808_38147[(1)] = (12));

} else {
var statearr_36809_38149 = state_36794__$1;
(statearr_36809_38149[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (3))){
var inst_36792 = (state_36794[(2)]);
var state_36794__$1 = state_36794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36794__$1,inst_36792);
} else {
if((state_val_36795 === (12))){
var inst_36753 = (state_36794[(8)]);
var inst_36782 = cljs.core.vec(inst_36753);
var state_36794__$1 = state_36794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36794__$1,(15),out,inst_36782);
} else {
if((state_val_36795 === (2))){
var state_36794__$1 = state_36794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36794__$1,(4),ch);
} else {
if((state_val_36795 === (11))){
var inst_36757 = (state_36794[(9)]);
var inst_36761 = (state_36794[(10)]);
var inst_36771 = (state_36794[(2)]);
var inst_36772 = [];
var inst_36773 = inst_36772.push(inst_36757);
var inst_36753 = inst_36772;
var inst_36754 = inst_36761;
var state_36794__$1 = (function (){var statearr_36811 = state_36794;
(statearr_36811[(7)] = inst_36754);

(statearr_36811[(11)] = inst_36773);

(statearr_36811[(12)] = inst_36771);

(statearr_36811[(8)] = inst_36753);

return statearr_36811;
})();
var statearr_36812_38152 = state_36794__$1;
(statearr_36812_38152[(2)] = null);

(statearr_36812_38152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (9))){
var inst_36753 = (state_36794[(8)]);
var inst_36769 = cljs.core.vec(inst_36753);
var state_36794__$1 = state_36794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36794__$1,(11),out,inst_36769);
} else {
if((state_val_36795 === (5))){
var inst_36757 = (state_36794[(9)]);
var inst_36754 = (state_36794[(7)]);
var inst_36761 = (state_36794[(10)]);
var inst_36761__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36757) : f.call(null,inst_36757));
var inst_36762 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36761__$1,inst_36754);
var inst_36763 = cljs.core.keyword_identical_QMARK_(inst_36754,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36764 = ((inst_36762) || (inst_36763));
var state_36794__$1 = (function (){var statearr_36814 = state_36794;
(statearr_36814[(10)] = inst_36761__$1);

return statearr_36814;
})();
if(cljs.core.truth_(inst_36764)){
var statearr_36815_38155 = state_36794__$1;
(statearr_36815_38155[(1)] = (8));

} else {
var statearr_36817_38156 = state_36794__$1;
(statearr_36817_38156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (14))){
var inst_36787 = (state_36794[(2)]);
var inst_36788 = cljs.core.async.close_BANG_(out);
var state_36794__$1 = (function (){var statearr_36819 = state_36794;
(statearr_36819[(13)] = inst_36787);

return statearr_36819;
})();
var statearr_36820_38159 = state_36794__$1;
(statearr_36820_38159[(2)] = inst_36788);

(statearr_36820_38159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (10))){
var inst_36777 = (state_36794[(2)]);
var state_36794__$1 = state_36794;
var statearr_36821_38161 = state_36794__$1;
(statearr_36821_38161[(2)] = inst_36777);

(statearr_36821_38161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36795 === (8))){
var inst_36757 = (state_36794[(9)]);
var inst_36753 = (state_36794[(8)]);
var inst_36761 = (state_36794[(10)]);
var inst_36766 = inst_36753.push(inst_36757);
var tmp36818 = inst_36753;
var inst_36753__$1 = tmp36818;
var inst_36754 = inst_36761;
var state_36794__$1 = (function (){var statearr_36823 = state_36794;
(statearr_36823[(7)] = inst_36754);

(statearr_36823[(8)] = inst_36753__$1);

(statearr_36823[(14)] = inst_36766);

return statearr_36823;
})();
var statearr_36824_38162 = state_36794__$1;
(statearr_36824_38162[(2)] = null);

(statearr_36824_38162[(1)] = (2));


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
var statearr_36826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36826[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36826[(1)] = (1));

return statearr_36826;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36794){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36794);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36827){if((e36827 instanceof Object)){
var ex__34210__auto__ = e36827;
var statearr_36828_38166 = state_36794;
(statearr_36828_38166[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38167 = state_36794;
state_36794 = G__38167;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36830 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36830[(6)] = c__34274__auto___38136);

return statearr_36830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
