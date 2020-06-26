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
var val_36843 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36843) : fn1.call(null,val_36843));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36843) : fn1.call(null,val_36843));
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
var c__34274__auto___36869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var statearr_34426_36872 = state_34423__$1;
(statearr_34426_36872[(2)] = null);

(statearr_34426_36872[(1)] = (2));


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
var statearr_34430_36876 = state_34423__$1;
(statearr_34430_36876[(2)] = null);

(statearr_34430_36876[(1)] = (14));


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
var statearr_34432_36879 = state_34423__$1;
(statearr_34432_36879[(1)] = (12));

} else {
var statearr_34433_36881 = state_34423__$1;
(statearr_34433_36881[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34434_36882 = state_34423__$1;
(statearr_34434_36882[(2)] = null);

(statearr_34434_36882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36883 = state_34423__$1;
(statearr_34435_36883[(1)] = (8));

} else {
var statearr_34436_36884 = state_34423__$1;
(statearr_34436_36884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34417 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34437_36885 = state_34423__$1;
(statearr_34437_36885[(2)] = inst_34417);

(statearr_34437_36885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34409 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34438_36887 = state_34423__$1;
(statearr_34438_36887[(2)] = inst_34409);

(statearr_34438_36887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34406 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34439_36888 = state_34423__$1;
(statearr_34439_36888[(2)] = inst_34406);

(statearr_34439_36888[(1)] = (10));


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
var statearr_34446_36890 = state_34423;
(statearr_34446_36890[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34445;

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
var state__34276__auto__ = (function (){var statearr_34447 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34447[(6)] = c__34274__auto___36869);

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
var c__34274__auto___36894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
}catch (e34464){if((e34464 instanceof Object)){
var ex__34210__auto__ = e34464;
var statearr_34465_36897 = state_34457;
(statearr_34465_36897[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36899 = state_34457;
state_34457 = G__36899;
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
(statearr_34466[(6)] = c__34274__auto___36894);

return statearr_34466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34468){
var vec__34470 = p__34468;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34470,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34470,(1),null);
var job = vec__34470;
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
var G__34478_36903 = type;
var G__34478_36904__$1 = (((G__34478_36903 instanceof cljs.core.Keyword))?G__34478_36903.fqn:null);
switch (G__34478_36904__$1) {
case "compute":
var c__34274__auto___36906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36902,c__34274__auto___36906,G__34478_36903,G__34478_36904__$1,n__4666__auto___36901,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36902,c__34274__auto___36906,G__34478_36903,G__34478_36904__$1,n__4666__auto___36901,jobs,results,process,async){
return (function (state_34491){
var state_val_34492 = (state_34491[(1)]);
if((state_val_34492 === (1))){
var state_34491__$1 = state_34491;
var statearr_34493_36908 = state_34491__$1;
(statearr_34493_36908[(2)] = null);

(statearr_34493_36908[(1)] = (2));


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
var statearr_34494_36910 = state_34491__$1;
(statearr_34494_36910[(1)] = (5));

} else {
var statearr_34495_36911 = state_34491__$1;
(statearr_34495_36911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (5))){
var state_34491__$1 = state_34491;
var statearr_34497_36912 = state_34491__$1;
(statearr_34497_36912[(2)] = null);

(statearr_34497_36912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (6))){
var state_34491__$1 = state_34491;
var statearr_34498_36914 = state_34491__$1;
(statearr_34498_36914[(2)] = null);

(statearr_34498_36914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34492 === (7))){
var inst_34487 = (state_34491[(2)]);
var state_34491__$1 = state_34491;
var statearr_34499_36915 = state_34491__$1;
(statearr_34499_36915[(2)] = inst_34487);

(statearr_34499_36915[(1)] = (3));


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
});})(__36902,c__34274__auto___36906,G__34478_36903,G__34478_36904__$1,n__4666__auto___36901,jobs,results,process,async))
;
return ((function (__36902,switch__34206__auto__,c__34274__auto___36906,G__34478_36903,G__34478_36904__$1,n__4666__auto___36901,jobs,results,process,async){
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
var statearr_34502_36917 = state_34491;
(statearr_34502_36917[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36919 = state_34491;
state_34491 = G__36919;
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
;})(__36902,switch__34206__auto__,c__34274__auto___36906,G__34478_36903,G__34478_36904__$1,n__4666__auto___36901,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34507 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34507[(6)] = c__34274__auto___36906);

return statearr_34507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36902,c__34274__auto___36906,G__34478_36903,G__34478_36904__$1,n__4666__auto___36901,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36902,c__34274__auto___36920,G__34478_36903,G__34478_36904__$1,n__4666__auto___36901,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36902,c__34274__auto___36920,G__34478_36903,G__34478_36904__$1,n__4666__auto___36901,jobs,results,process,async){
return (function (state_34523){
var state_val_34524 = (state_34523[(1)]);
if((state_val_34524 === (1))){
var state_34523__$1 = state_34523;
var statearr_34525_36922 = state_34523__$1;
(statearr_34525_36922[(2)] = null);

(statearr_34525_36922[(1)] = (2));


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
var inst_34510 = (state_34523[(2)]);
var inst_34514 = async(inst_34510);
var state_34523__$1 = state_34523;
if(cljs.core.truth_(inst_34514)){
var statearr_34526_36924 = state_34523__$1;
(statearr_34526_36924[(1)] = (5));

} else {
var statearr_34527_36925 = state_34523__$1;
(statearr_34527_36925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (5))){
var state_34523__$1 = state_34523;
var statearr_34528_36926 = state_34523__$1;
(statearr_34528_36926[(2)] = null);

(statearr_34528_36926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (6))){
var state_34523__$1 = state_34523;
var statearr_34529_36928 = state_34523__$1;
(statearr_34529_36928[(2)] = null);

(statearr_34529_36928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (7))){
var inst_34519 = (state_34523[(2)]);
var state_34523__$1 = state_34523;
var statearr_34530_36929 = state_34523__$1;
(statearr_34530_36929[(2)] = inst_34519);

(statearr_34530_36929[(1)] = (3));


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
});})(__36902,c__34274__auto___36920,G__34478_36903,G__34478_36904__$1,n__4666__auto___36901,jobs,results,process,async))
;
return ((function (__36902,switch__34206__auto__,c__34274__auto___36920,G__34478_36903,G__34478_36904__$1,n__4666__auto___36901,jobs,results,process,async){
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
}catch (e34534){if((e34534 instanceof Object)){
var ex__34210__auto__ = e34534;
var statearr_34536_36931 = state_34523;
(statearr_34536_36931[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34534;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36933 = state_34523;
state_34523 = G__36933;
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
;})(__36902,switch__34206__auto__,c__34274__auto___36920,G__34478_36903,G__34478_36904__$1,n__4666__auto___36901,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34537 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34537[(6)] = c__34274__auto___36920);

return statearr_34537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36902,c__34274__auto___36920,G__34478_36903,G__34478_36904__$1,n__4666__auto___36901,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34478_36904__$1)].join('')));

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
var statearr_34561_36937 = state_34559__$1;
(statearr_34561_36937[(2)] = inst_34555);

(statearr_34561_36937[(1)] = (3));


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
var statearr_34564_36940 = state_34559__$1;
(statearr_34564_36940[(1)] = (5));

} else {
var statearr_34565_36941 = state_34559__$1;
(statearr_34565_36941[(1)] = (6));

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
var statearr_34569_36945 = state_34559__$1;
(statearr_34569_36945[(2)] = inst_34543);

(statearr_34569_36945[(1)] = (7));


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
var G__36949 = state_34559;
state_34559 = G__36949;
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
var statearr_34614_36951 = state_34612__$1;
(statearr_34614_36951[(2)] = inst_34608);

(statearr_34614_36951[(1)] = (3));


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
var statearr_34616_36954 = state_34612__$1;
(statearr_34616_36954[(2)] = null);

(statearr_34616_36954[(1)] = (2));


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
var statearr_34619_36957 = state_34612__$1;
(statearr_34619_36957[(1)] = (6));

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
var statearr_34620_36958 = state_34612__$1;
(statearr_34620_36958[(2)] = inst_34603);

(statearr_34620_36958[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36960 = state_34612__$1;
(statearr_34622_36960[(2)] = null);

(statearr_34622_36960[(1)] = (2));


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
var statearr_34627_36966 = state_34612__$1;
(statearr_34627_36966[(2)] = null);

(statearr_34627_36966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36967 = state_34612__$1;
(statearr_34628_36967[(2)] = null);

(statearr_34628_36967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36969 = state_34612__$1;
(statearr_34629_36969[(1)] = (8));

} else {
var statearr_34630_36970 = state_34612__$1;
(statearr_34630_36970[(1)] = (9));

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
var statearr_34634_36974 = state_34612__$1;
(statearr_34634_36974[(2)] = false);

(statearr_34634_36974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36975 = state_34612__$1;
(statearr_34635_36975[(2)] = inst_34584);

(statearr_34635_36975[(1)] = (7));


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
var statearr_34637_36978 = state_34612__$1;
(statearr_34637_36978[(2)] = inst_34581);

(statearr_34637_36978[(1)] = (10));


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
var statearr_34640_36980 = state_34612;
(statearr_34640_36980[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

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
var c__34274__auto___36996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34684){
var state_val_34685 = (state_34684[(1)]);
if((state_val_34685 === (7))){
var inst_34680 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34687_36999 = state_34684__$1;
(statearr_34687_36999[(2)] = inst_34680);

(statearr_34687_36999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (1))){
var state_34684__$1 = state_34684;
var statearr_34688_37000 = state_34684__$1;
(statearr_34688_37000[(2)] = null);

(statearr_34688_37000[(1)] = (2));


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
var statearr_34691_37001 = state_34684__$1;
(statearr_34691_37001[(1)] = (5));

} else {
var statearr_34692_37002 = state_34684__$1;
(statearr_34692_37002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (13))){
var state_34684__$1 = state_34684;
var statearr_34693_37004 = state_34684__$1;
(statearr_34693_37004[(2)] = null);

(statearr_34693_37004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (6))){
var inst_34661 = (state_34684[(7)]);
var inst_34667 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34661) : p.call(null,inst_34661));
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34667)){
var statearr_34694_37005 = state_34684__$1;
(statearr_34694_37005[(1)] = (9));

} else {
var statearr_34695_37008 = state_34684__$1;
(statearr_34695_37008[(1)] = (10));

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
var statearr_34698_37010 = state_34684__$1;
(statearr_34698_37010[(2)] = null);

(statearr_34698_37010[(1)] = (2));


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
var statearr_34702_37014 = state_34684__$1;
(statearr_34702_37014[(2)] = tc);

(statearr_34702_37014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (5))){
var inst_34664 = cljs.core.async.close_BANG_(tc);
var inst_34665 = cljs.core.async.close_BANG_(fc);
var state_34684__$1 = (function (){var statearr_34703 = state_34684;
(statearr_34703[(8)] = inst_34664);

return statearr_34703;
})();
var statearr_34704_37015 = state_34684__$1;
(statearr_34704_37015[(2)] = inst_34665);

(statearr_34704_37015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (14))){
var inst_34678 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34705_37016 = state_34684__$1;
(statearr_34705_37016[(2)] = inst_34678);

(statearr_34705_37016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (10))){
var state_34684__$1 = state_34684;
var statearr_34706_37017 = state_34684__$1;
(statearr_34706_37017[(2)] = fc);

(statearr_34706_37017[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (8))){
var inst_34673 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34673)){
var statearr_34707_37018 = state_34684__$1;
(statearr_34707_37018[(1)] = (12));

} else {
var statearr_34709_37019 = state_34684__$1;
(statearr_34709_37019[(1)] = (13));

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
var statearr_34712_37022 = state_34684;
(statearr_34712_37022[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37025 = state_34684;
state_34684 = G__37025;
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
(statearr_34713[(6)] = c__34274__auto___36996);

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
var statearr_34742_37028 = state_34740__$1;
(statearr_34742_37028[(2)] = inst_34736);

(statearr_34742_37028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (1))){
var inst_34717 = init;
var state_34740__$1 = (function (){var statearr_34743 = state_34740;
(statearr_34743[(7)] = inst_34717);

return statearr_34743;
})();
var statearr_34744_37029 = state_34740__$1;
(statearr_34744_37029[(2)] = null);

(statearr_34744_37029[(1)] = (2));


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
var statearr_34746_37034 = state_34740__$1;
(statearr_34746_37034[(1)] = (5));

} else {
var statearr_34747_37035 = state_34740__$1;
(statearr_34747_37035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (6))){
var inst_34724 = (state_34740[(9)]);
var inst_34717 = (state_34740[(7)]);
var inst_34720 = (state_34740[(8)]);
var inst_34724__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34717,inst_34720) : f.call(null,inst_34717,inst_34720));
var inst_34725 = cljs.core.reduced_QMARK_(inst_34724__$1);
var state_34740__$1 = (function (){var statearr_34751 = state_34740;
(statearr_34751[(9)] = inst_34724__$1);

return statearr_34751;
})();
if(inst_34725){
var statearr_34752_37041 = state_34740__$1;
(statearr_34752_37041[(1)] = (8));

} else {
var statearr_34753_37042 = state_34740__$1;
(statearr_34753_37042[(1)] = (9));

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
var inst_34724 = (state_34740[(9)]);
var inst_34717 = inst_34724;
var state_34740__$1 = (function (){var statearr_34754 = state_34740;
(statearr_34754[(7)] = inst_34717);

return statearr_34754;
})();
var statearr_34755_37047 = state_34740__$1;
(statearr_34755_37047[(2)] = null);

(statearr_34755_37047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (5))){
var inst_34717 = (state_34740[(7)]);
var state_34740__$1 = state_34740;
var statearr_34756_37048 = state_34740__$1;
(statearr_34756_37048[(2)] = inst_34717);

(statearr_34756_37048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (10))){
var inst_34734 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34757_37051 = state_34740__$1;
(statearr_34757_37051[(2)] = inst_34734);

(statearr_34757_37051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (8))){
var inst_34724 = (state_34740[(9)]);
var inst_34727 = cljs.core.deref(inst_34724);
var state_34740__$1 = state_34740;
var statearr_34758_37056 = state_34740__$1;
(statearr_34758_37056[(2)] = inst_34727);

(statearr_34758_37056[(1)] = (10));


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
var statearr_34761_37064 = state_34740;
(statearr_34761_37064[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37065 = state_34740;
state_34740 = G__37065;
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
var statearr_34772_37080 = state_34768;
(statearr_34772_37080[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37081 = state_34768;
state_34768 = G__37081;
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
var statearr_34812_37097 = state_34807__$1;
(statearr_34812_37097[(2)] = inst_34789);

(statearr_34812_37097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (1))){
var inst_34783 = cljs.core.seq(coll);
var inst_34784 = inst_34783;
var state_34807__$1 = (function (){var statearr_34815 = state_34807;
(statearr_34815[(7)] = inst_34784);

return statearr_34815;
})();
var statearr_34817_37100 = state_34807__$1;
(statearr_34817_37100[(2)] = null);

(statearr_34817_37100[(1)] = (2));


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
var statearr_34818_37102 = state_34807__$1;
(statearr_34818_37102[(2)] = inst_34801);

(statearr_34818_37102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (6))){
var inst_34792 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34792)){
var statearr_34819_37103 = state_34807__$1;
(statearr_34819_37103[(1)] = (8));

} else {
var statearr_34820_37104 = state_34807__$1;
(statearr_34820_37104[(1)] = (9));

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
var statearr_34821_37108 = state_34807__$1;
(statearr_34821_37108[(2)] = null);

(statearr_34821_37108[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (2))){
var inst_34784 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
if(cljs.core.truth_(inst_34784)){
var statearr_34822_37114 = state_34807__$1;
(statearr_34822_37114[(1)] = (4));

} else {
var statearr_34823_37115 = state_34807__$1;
(statearr_34823_37115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (11))){
var inst_34798 = cljs.core.async.close_BANG_(ch);
var state_34807__$1 = state_34807;
var statearr_34824_37116 = state_34807__$1;
(statearr_34824_37116[(2)] = inst_34798);

(statearr_34824_37116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (9))){
var state_34807__$1 = state_34807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34825_37117 = state_34807__$1;
(statearr_34825_37117[(1)] = (11));

} else {
var statearr_34829_37120 = state_34807__$1;
(statearr_34829_37120[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (5))){
var inst_34784 = (state_34807[(7)]);
var state_34807__$1 = state_34807;
var statearr_34830_37125 = state_34807__$1;
(statearr_34830_37125[(2)] = inst_34784);

(statearr_34830_37125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (10))){
var inst_34803 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34831_37128 = state_34807__$1;
(statearr_34831_37128[(2)] = inst_34803);

(statearr_34831_37128[(1)] = (3));


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
var statearr_34836_37129 = state_34807__$1;
(statearr_34836_37129[(2)] = null);

(statearr_34836_37129[(1)] = (2));


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
var statearr_34839_37132 = state_34807;
(statearr_34839_37132[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37134 = state_34807;
state_34807 = G__37134;
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
var c__34274__auto___37164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34982){
var state_val_34985 = (state_34982[(1)]);
if((state_val_34985 === (7))){
var inst_34976 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34986_37165 = state_34982__$1;
(statearr_34986_37165[(2)] = inst_34976);

(statearr_34986_37165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (20))){
var inst_34877 = (state_34982[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34982__$1 = (function (){var statearr_34987 = state_34982;
(statearr_34987[(8)] = inst_34890);

return statearr_34987;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34988_37169 = state_34982__$1;
(statearr_34988_37169[(1)] = (22));

} else {
var statearr_34989_37170 = state_34982__$1;
(statearr_34989_37170[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (27))){
var inst_34846 = (state_34982[(9)]);
var inst_34926 = (state_34982[(10)]);
var inst_34919 = (state_34982[(11)]);
var inst_34921 = (state_34982[(12)]);
var inst_34926__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34919,inst_34921);
var inst_34927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34926__$1,inst_34846,done);
var state_34982__$1 = (function (){var statearr_34990 = state_34982;
(statearr_34990[(10)] = inst_34926__$1);

return statearr_34990;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34991_37178 = state_34982__$1;
(statearr_34991_37178[(1)] = (30));

} else {
var statearr_34992_37180 = state_34982__$1;
(statearr_34992_37180[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (1))){
var state_34982__$1 = state_34982;
var statearr_34993_37181 = state_34982__$1;
(statearr_34993_37181[(2)] = null);

(statearr_34993_37181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (24))){
var inst_34877 = (state_34982[(7)]);
var inst_34896 = (state_34982[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34982__$1 = (function (){var statearr_34997 = state_34982;
(statearr_34997[(13)] = inst_34857);

(statearr_34997[(14)] = inst_34856);

(statearr_34997[(15)] = inst_34858);

(statearr_34997[(16)] = inst_34896);

(statearr_34997[(17)] = inst_34855);

return statearr_34997;
})();
var statearr_34999_37182 = state_34982__$1;
(statearr_34999_37182[(2)] = null);

(statearr_34999_37182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (39))){
var state_34982__$1 = state_34982;
var statearr_35005_37183 = state_34982__$1;
(statearr_35005_37183[(2)] = null);

(statearr_35005_37183[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (4))){
var inst_34846 = (state_34982[(9)]);
var inst_34846__$1 = (state_34982[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34982__$1 = (function (){var statearr_35006 = state_34982;
(statearr_35006[(9)] = inst_34846__$1);

return statearr_35006;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35007_37190 = state_34982__$1;
(statearr_35007_37190[(1)] = (5));

} else {
var statearr_35008_37191 = state_34982__$1;
(statearr_35008_37191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (15))){
var inst_34857 = (state_34982[(13)]);
var inst_34856 = (state_34982[(14)]);
var inst_34858 = (state_34982[(15)]);
var inst_34855 = (state_34982[(17)]);
var inst_34873 = (state_34982[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp35002 = inst_34857;
var tmp35003 = inst_34856;
var tmp35004 = inst_34855;
var inst_34855__$1 = tmp35004;
var inst_34856__$1 = tmp35003;
var inst_34857__$1 = tmp35002;
var inst_34858__$1 = inst_34874;
var state_34982__$1 = (function (){var statearr_35009 = state_34982;
(statearr_35009[(18)] = inst_34873);

(statearr_35009[(13)] = inst_34857__$1);

(statearr_35009[(14)] = inst_34856__$1);

(statearr_35009[(15)] = inst_34858__$1);

(statearr_35009[(17)] = inst_34855__$1);

return statearr_35009;
})();
var statearr_35010_37196 = state_34982__$1;
(statearr_35010_37196[(2)] = null);

(statearr_35010_37196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (21))){
var inst_34900 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35014_37197 = state_34982__$1;
(statearr_35014_37197[(2)] = inst_34900);

(statearr_35014_37197[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (31))){
var inst_34926 = (state_34982[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34982__$1 = (function (){var statearr_35015 = state_34982;
(statearr_35015[(19)] = inst_34930);

return statearr_35015;
})();
var statearr_35016_37202 = state_34982__$1;
(statearr_35016_37202[(2)] = inst_34931);

(statearr_35016_37202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (32))){
var inst_34918 = (state_34982[(20)]);
var inst_34919 = (state_34982[(11)]);
var inst_34920 = (state_34982[(21)]);
var inst_34921 = (state_34982[(12)]);
var inst_34933 = (state_34982[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp35011 = inst_34918;
var tmp35012 = inst_34919;
var tmp35013 = inst_34920;
var inst_34918__$1 = tmp35011;
var inst_34919__$1 = tmp35012;
var inst_34920__$1 = tmp35013;
var inst_34921__$1 = inst_34934;
var state_34982__$1 = (function (){var statearr_35017 = state_34982;
(statearr_35017[(20)] = inst_34918__$1);

(statearr_35017[(22)] = inst_34933);

(statearr_35017[(11)] = inst_34919__$1);

(statearr_35017[(21)] = inst_34920__$1);

(statearr_35017[(12)] = inst_34921__$1);

return statearr_35017;
})();
var statearr_35018_37209 = state_34982__$1;
(statearr_35018_37209[(2)] = null);

(statearr_35018_37209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (40))){
var inst_34946 = (state_34982[(23)]);
var inst_34950 = done(null);
var inst_34952 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34946);
var state_34982__$1 = (function (){var statearr_35019 = state_34982;
(statearr_35019[(24)] = inst_34950);

return statearr_35019;
})();
var statearr_35020_37214 = state_34982__$1;
(statearr_35020_37214[(2)] = inst_34952);

(statearr_35020_37214[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (33))){
var inst_34937 = (state_34982[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34982__$1 = state_34982;
if(inst_34939){
var statearr_35023_37217 = state_34982__$1;
(statearr_35023_37217[(1)] = (36));

} else {
var statearr_35024_37220 = state_34982__$1;
(statearr_35024_37220[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (13))){
var inst_34867 = (state_34982[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34982__$1 = state_34982;
var statearr_35027_37222 = state_34982__$1;
(statearr_35027_37222[(2)] = inst_34870);

(statearr_35027_37222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (22))){
var inst_34890 = (state_34982[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34982__$1 = state_34982;
var statearr_35029_37225 = state_34982__$1;
(statearr_35029_37225[(2)] = inst_34893);

(statearr_35029_37225[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (36))){
var inst_34937 = (state_34982[(25)]);
var inst_34941 = cljs.core.chunk_first(inst_34937);
var inst_34942 = cljs.core.chunk_rest(inst_34937);
var inst_34943 = cljs.core.count(inst_34941);
var inst_34918 = inst_34942;
var inst_34919 = inst_34941;
var inst_34920 = inst_34943;
var inst_34921 = (0);
var state_34982__$1 = (function (){var statearr_35031 = state_34982;
(statearr_35031[(20)] = inst_34918);

(statearr_35031[(11)] = inst_34919);

(statearr_35031[(21)] = inst_34920);

(statearr_35031[(12)] = inst_34921);

return statearr_35031;
})();
var statearr_35032_37231 = state_34982__$1;
(statearr_35032_37231[(2)] = null);

(statearr_35032_37231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (41))){
var inst_34937 = (state_34982[(25)]);
var inst_34954 = (state_34982[(2)]);
var inst_34956 = cljs.core.next(inst_34937);
var inst_34918 = inst_34956;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34982__$1 = (function (){var statearr_35033 = state_34982;
(statearr_35033[(20)] = inst_34918);

(statearr_35033[(11)] = inst_34919);

(statearr_35033[(21)] = inst_34920);

(statearr_35033[(12)] = inst_34921);

(statearr_35033[(27)] = inst_34954);

return statearr_35033;
})();
var statearr_35034_37242 = state_34982__$1;
(statearr_35034_37242[(2)] = null);

(statearr_35034_37242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (43))){
var state_34982__$1 = state_34982;
var statearr_35037_37243 = state_34982__$1;
(statearr_35037_37243[(2)] = null);

(statearr_35037_37243[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (29))){
var inst_34964 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35041_37244 = state_34982__$1;
(statearr_35041_37244[(2)] = inst_34964);

(statearr_35041_37244[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (44))){
var inst_34973 = (state_34982[(2)]);
var state_34982__$1 = (function (){var statearr_35043 = state_34982;
(statearr_35043[(28)] = inst_34973);

return statearr_35043;
})();
var statearr_35044_37247 = state_34982__$1;
(statearr_35044_37247[(2)] = null);

(statearr_35044_37247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (6))){
var inst_34910 = (state_34982[(29)]);
var inst_34909 = cljs.core.deref(cs);
var inst_34910__$1 = cljs.core.keys(inst_34909);
var inst_34911 = cljs.core.count(inst_34910__$1);
var inst_34912 = cljs.core.reset_BANG_(dctr,inst_34911);
var inst_34917 = cljs.core.seq(inst_34910__$1);
var inst_34918 = inst_34917;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34982__$1 = (function (){var statearr_35045 = state_34982;
(statearr_35045[(20)] = inst_34918);

(statearr_35045[(29)] = inst_34910__$1);

(statearr_35045[(11)] = inst_34919);

(statearr_35045[(21)] = inst_34920);

(statearr_35045[(12)] = inst_34921);

(statearr_35045[(30)] = inst_34912);

return statearr_35045;
})();
var statearr_35048_37251 = state_34982__$1;
(statearr_35048_37251[(2)] = null);

(statearr_35048_37251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (28))){
var inst_34918 = (state_34982[(20)]);
var inst_34937 = (state_34982[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34982__$1 = (function (){var statearr_35051 = state_34982;
(statearr_35051[(25)] = inst_34937__$1);

return statearr_35051;
})();
if(inst_34937__$1){
var statearr_35052_37253 = state_34982__$1;
(statearr_35052_37253[(1)] = (33));

} else {
var statearr_35053_37254 = state_34982__$1;
(statearr_35053_37254[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (25))){
var inst_34920 = (state_34982[(21)]);
var inst_34921 = (state_34982[(12)]);
var inst_34923 = (inst_34921 < inst_34920);
var inst_34924 = inst_34923;
var state_34982__$1 = state_34982;
if(cljs.core.truth_(inst_34924)){
var statearr_35067_37256 = state_34982__$1;
(statearr_35067_37256[(1)] = (27));

} else {
var statearr_35069_37259 = state_34982__$1;
(statearr_35069_37259[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (34))){
var state_34982__$1 = state_34982;
var statearr_35073_37262 = state_34982__$1;
(statearr_35073_37262[(2)] = null);

(statearr_35073_37262[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (17))){
var state_34982__$1 = state_34982;
var statearr_35076_37263 = state_34982__$1;
(statearr_35076_37263[(2)] = null);

(statearr_35076_37263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (3))){
var inst_34978 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34982__$1,inst_34978);
} else {
if((state_val_34985 === (12))){
var inst_34905 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35078_37265 = state_34982__$1;
(statearr_35078_37265[(2)] = inst_34905);

(statearr_35078_37265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (2))){
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34982__$1,(4),ch);
} else {
if((state_val_34985 === (23))){
var state_34982__$1 = state_34982;
var statearr_35086_37269 = state_34982__$1;
(statearr_35086_37269[(2)] = null);

(statearr_35086_37269[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (35))){
var inst_34962 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35092_37271 = state_34982__$1;
(statearr_35092_37271[(2)] = inst_34962);

(statearr_35092_37271[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (19))){
var inst_34877 = (state_34982[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34982__$1 = (function (){var statearr_35095 = state_34982;
(statearr_35095[(13)] = inst_34857);

(statearr_35095[(14)] = inst_34856);

(statearr_35095[(15)] = inst_34858);

(statearr_35095[(17)] = inst_34855);

return statearr_35095;
})();
var statearr_35100_37273 = state_34982__$1;
(statearr_35100_37273[(2)] = null);

(statearr_35100_37273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (11))){
var inst_34855 = (state_34982[(17)]);
var inst_34877 = (state_34982[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34982__$1 = (function (){var statearr_35107 = state_34982;
(statearr_35107[(7)] = inst_34877__$1);

return statearr_35107;
})();
if(inst_34877__$1){
var statearr_35111_37278 = state_34982__$1;
(statearr_35111_37278[(1)] = (16));

} else {
var statearr_35113_37280 = state_34982__$1;
(statearr_35113_37280[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (9))){
var inst_34907 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35118_37284 = state_34982__$1;
(statearr_35118_37284[(2)] = inst_34907);

(statearr_35118_37284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34982__$1 = (function (){var statearr_35124 = state_34982;
(statearr_35124[(13)] = inst_34857);

(statearr_35124[(14)] = inst_34856);

(statearr_35124[(15)] = inst_34858);

(statearr_35124[(17)] = inst_34855);

return statearr_35124;
})();
var statearr_35126_37289 = state_34982__$1;
(statearr_35126_37289[(2)] = null);

(statearr_35126_37289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (14))){
var state_34982__$1 = state_34982;
var statearr_35133_37290 = state_34982__$1;
(statearr_35133_37290[(2)] = null);

(statearr_35133_37290[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (45))){
var inst_34970 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35138_37295 = state_34982__$1;
(statearr_35138_37295[(2)] = inst_34970);

(statearr_35138_37295[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (26))){
var inst_34910 = (state_34982[(29)]);
var inst_34966 = (state_34982[(2)]);
var inst_34967 = cljs.core.seq(inst_34910);
var state_34982__$1 = (function (){var statearr_35144 = state_34982;
(statearr_35144[(31)] = inst_34966);

return statearr_35144;
})();
if(inst_34967){
var statearr_35147_37299 = state_34982__$1;
(statearr_35147_37299[(1)] = (42));

} else {
var statearr_35150_37301 = state_34982__$1;
(statearr_35150_37301[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (16))){
var inst_34877 = (state_34982[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34982__$1 = state_34982;
if(inst_34879){
var statearr_35155_37302 = state_34982__$1;
(statearr_35155_37302[(1)] = (19));

} else {
var statearr_35158_37304 = state_34982__$1;
(statearr_35158_37304[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (38))){
var inst_34959 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35160_37308 = state_34982__$1;
(statearr_35160_37308[(2)] = inst_34959);

(statearr_35160_37308[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (30))){
var state_34982__$1 = state_34982;
var statearr_35167_37309 = state_34982__$1;
(statearr_35167_37309[(2)] = null);

(statearr_35167_37309[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (10))){
var inst_34856 = (state_34982[(14)]);
var inst_34858 = (state_34982[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34982__$1 = (function (){var statearr_35170 = state_34982;
(statearr_35170[(26)] = inst_34867);

return statearr_35170;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35173_37315 = state_34982__$1;
(statearr_35173_37315[(1)] = (13));

} else {
var statearr_35176_37318 = state_34982__$1;
(statearr_35176_37318[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (18))){
var inst_34903 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35178_37320 = state_34982__$1;
(statearr_35178_37320[(2)] = inst_34903);

(statearr_35178_37320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (42))){
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34982__$1,(45),dchan);
} else {
if((state_val_34985 === (37))){
var inst_34946 = (state_34982[(23)]);
var inst_34846 = (state_34982[(9)]);
var inst_34937 = (state_34982[(25)]);
var inst_34946__$1 = cljs.core.first(inst_34937);
var inst_34947 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34946__$1,inst_34846,done);
var state_34982__$1 = (function (){var statearr_35179 = state_34982;
(statearr_35179[(23)] = inst_34946__$1);

return statearr_35179;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35180_37329 = state_34982__$1;
(statearr_35180_37329[(1)] = (39));

} else {
var statearr_35181_37330 = state_34982__$1;
(statearr_35181_37330[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (8))){
var inst_34857 = (state_34982[(13)]);
var inst_34858 = (state_34982[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34982__$1 = state_34982;
if(cljs.core.truth_(inst_34861)){
var statearr_35182_37331 = state_34982__$1;
(statearr_35182_37331[(1)] = (10));

} else {
var statearr_35183_37332 = state_34982__$1;
(statearr_35183_37332[(1)] = (11));

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
var statearr_35186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35186[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35186[(1)] = (1));

return statearr_35186;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34982){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34982);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35189){if((e35189 instanceof Object)){
var ex__34210__auto__ = e35189;
var statearr_35190_37336 = state_34982;
(statearr_35190_37336[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35189;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37338 = state_34982;
state_34982 = G__37338;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34982){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35213 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35213[(6)] = c__34274__auto___37164);

return statearr_35213;
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
var G__35219 = arguments.length;
switch (G__35219) {
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
var len__4789__auto___37368 = arguments.length;
var i__4790__auto___37369 = (0);
while(true){
if((i__4790__auto___37369 < len__4789__auto___37368)){
args__4795__auto__.push((arguments[i__4790__auto___37369]));

var G__37370 = (i__4790__auto___37369 + (1));
i__4790__auto___37369 = G__37370;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35343){
var map__35346 = p__35343;
var map__35346__$1 = (((((!((map__35346 == null))))?(((((map__35346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35346):map__35346);
var opts = map__35346__$1;
var statearr_35355_37375 = state;
(statearr_35355_37375[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35362_37378 = state;
(statearr_35362_37378[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35368_37382 = state;
(statearr_35368_37382[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35324){
var G__35325 = cljs.core.first(seq35324);
var seq35324__$1 = cljs.core.next(seq35324);
var G__35326 = cljs.core.first(seq35324__$1);
var seq35324__$2 = cljs.core.next(seq35324__$1);
var G__35327 = cljs.core.first(seq35324__$2);
var seq35324__$3 = cljs.core.next(seq35324__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35325,G__35326,G__35327,seq35324__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35373 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35374){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35374 = meta35374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35375,meta35374__$1){
var self__ = this;
var _35375__$1 = this;
return (new cljs.core.async.t_cljs$core$async35373(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35374__$1));
}));

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35375){
var self__ = this;
var _35375__$1 = this;
return self__.meta35374;
}));

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35373.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35374","meta35374",-1424368820,null)], null);
}));

(cljs.core.async.t_cljs$core$async35373.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35373");

(cljs.core.async.t_cljs$core$async35373.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35373");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35373.
 */
cljs.core.async.__GT_t_cljs$core$async35373 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35373(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35374){
return (new cljs.core.async.t_cljs$core$async35373(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35374));
});

}

return (new cljs.core.async.t_cljs$core$async35373(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35552){
var state_val_35554 = (state_35552[(1)]);
if((state_val_35554 === (7))){
var inst_35431 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
var statearr_35559_37424 = state_35552__$1;
(statearr_35559_37424[(2)] = inst_35431);

(statearr_35559_37424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (20))){
var inst_35443 = (state_35552[(7)]);
var state_35552__$1 = state_35552;
var statearr_35561_37426 = state_35552__$1;
(statearr_35561_37426[(2)] = inst_35443);

(statearr_35561_37426[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (27))){
var state_35552__$1 = state_35552;
var statearr_35562_37427 = state_35552__$1;
(statearr_35562_37427[(2)] = null);

(statearr_35562_37427[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (1))){
var inst_35415 = (state_35552[(8)]);
var inst_35415__$1 = calc_state();
var inst_35418 = (inst_35415__$1 == null);
var inst_35419 = cljs.core.not(inst_35418);
var state_35552__$1 = (function (){var statearr_35566 = state_35552;
(statearr_35566[(8)] = inst_35415__$1);

return statearr_35566;
})();
if(inst_35419){
var statearr_35569_37431 = state_35552__$1;
(statearr_35569_37431[(1)] = (2));

} else {
var statearr_35571_37432 = state_35552__$1;
(statearr_35571_37432[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (24))){
var inst_35470 = (state_35552[(9)]);
var inst_35505 = (state_35552[(10)]);
var inst_35482 = (state_35552[(11)]);
var inst_35505__$1 = (inst_35470.cljs$core$IFn$_invoke$arity$1 ? inst_35470.cljs$core$IFn$_invoke$arity$1(inst_35482) : inst_35470.call(null,inst_35482));
var state_35552__$1 = (function (){var statearr_35576 = state_35552;
(statearr_35576[(10)] = inst_35505__$1);

return statearr_35576;
})();
if(cljs.core.truth_(inst_35505__$1)){
var statearr_35579_37435 = state_35552__$1;
(statearr_35579_37435[(1)] = (29));

} else {
var statearr_35580_37439 = state_35552__$1;
(statearr_35580_37439[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (4))){
var inst_35434 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
if(cljs.core.truth_(inst_35434)){
var statearr_35592_37442 = state_35552__$1;
(statearr_35592_37442[(1)] = (8));

} else {
var statearr_35595_37443 = state_35552__$1;
(statearr_35595_37443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (15))){
var inst_35463 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
if(cljs.core.truth_(inst_35463)){
var statearr_35602_37444 = state_35552__$1;
(statearr_35602_37444[(1)] = (19));

} else {
var statearr_35603_37445 = state_35552__$1;
(statearr_35603_37445[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (21))){
var inst_35468 = (state_35552[(12)]);
var inst_35468__$1 = (state_35552[(2)]);
var inst_35470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35468__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35468__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35468__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35552__$1 = (function (){var statearr_35611 = state_35552;
(statearr_35611[(12)] = inst_35468__$1);

(statearr_35611[(9)] = inst_35470);

(statearr_35611[(13)] = inst_35471);

return statearr_35611;
})();
return cljs.core.async.ioc_alts_BANG_(state_35552__$1,(22),inst_35472);
} else {
if((state_val_35554 === (31))){
var inst_35515 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
if(cljs.core.truth_(inst_35515)){
var statearr_35617_37452 = state_35552__$1;
(statearr_35617_37452[(1)] = (32));

} else {
var statearr_35620_37453 = state_35552__$1;
(statearr_35620_37453[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (32))){
var inst_35481 = (state_35552[(14)]);
var state_35552__$1 = state_35552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35552__$1,(35),out,inst_35481);
} else {
if((state_val_35554 === (33))){
var inst_35468 = (state_35552[(12)]);
var inst_35443 = inst_35468;
var state_35552__$1 = (function (){var statearr_35629 = state_35552;
(statearr_35629[(7)] = inst_35443);

return statearr_35629;
})();
var statearr_35630_37457 = state_35552__$1;
(statearr_35630_37457[(2)] = null);

(statearr_35630_37457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (13))){
var inst_35443 = (state_35552[(7)]);
var inst_35451 = inst_35443.cljs$lang$protocol_mask$partition0$;
var inst_35452 = (inst_35451 & (64));
var inst_35453 = inst_35443.cljs$core$ISeq$;
var inst_35454 = (cljs.core.PROTOCOL_SENTINEL === inst_35453);
var inst_35455 = ((inst_35452) || (inst_35454));
var state_35552__$1 = state_35552;
if(cljs.core.truth_(inst_35455)){
var statearr_35637_37459 = state_35552__$1;
(statearr_35637_37459[(1)] = (16));

} else {
var statearr_35639_37460 = state_35552__$1;
(statearr_35639_37460[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (22))){
var inst_35481 = (state_35552[(14)]);
var inst_35482 = (state_35552[(11)]);
var inst_35480 = (state_35552[(2)]);
var inst_35481__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35480,(0),null);
var inst_35482__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35480,(1),null);
var inst_35484 = (inst_35481__$1 == null);
var inst_35485 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35482__$1,change);
var inst_35486 = ((inst_35484) || (inst_35485));
var state_35552__$1 = (function (){var statearr_35648 = state_35552;
(statearr_35648[(14)] = inst_35481__$1);

(statearr_35648[(11)] = inst_35482__$1);

return statearr_35648;
})();
if(cljs.core.truth_(inst_35486)){
var statearr_35651_37465 = state_35552__$1;
(statearr_35651_37465[(1)] = (23));

} else {
var statearr_35652_37466 = state_35552__$1;
(statearr_35652_37466[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (36))){
var inst_35468 = (state_35552[(12)]);
var inst_35443 = inst_35468;
var state_35552__$1 = (function (){var statearr_35663 = state_35552;
(statearr_35663[(7)] = inst_35443);

return statearr_35663;
})();
var statearr_35666_37467 = state_35552__$1;
(statearr_35666_37467[(2)] = null);

(statearr_35666_37467[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (29))){
var inst_35505 = (state_35552[(10)]);
var state_35552__$1 = state_35552;
var statearr_35672_37468 = state_35552__$1;
(statearr_35672_37468[(2)] = inst_35505);

(statearr_35672_37468[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (6))){
var state_35552__$1 = state_35552;
var statearr_35675_37472 = state_35552__$1;
(statearr_35675_37472[(2)] = false);

(statearr_35675_37472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (28))){
var inst_35501 = (state_35552[(2)]);
var inst_35502 = calc_state();
var inst_35443 = inst_35502;
var state_35552__$1 = (function (){var statearr_35684 = state_35552;
(statearr_35684[(15)] = inst_35501);

(statearr_35684[(7)] = inst_35443);

return statearr_35684;
})();
var statearr_35691_37473 = state_35552__$1;
(statearr_35691_37473[(2)] = null);

(statearr_35691_37473[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (25))){
var inst_35529 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
var statearr_35704_37476 = state_35552__$1;
(statearr_35704_37476[(2)] = inst_35529);

(statearr_35704_37476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (34))){
var inst_35527 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
var statearr_35705_37478 = state_35552__$1;
(statearr_35705_37478[(2)] = inst_35527);

(statearr_35705_37478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (17))){
var state_35552__$1 = state_35552;
var statearr_35706_37482 = state_35552__$1;
(statearr_35706_37482[(2)] = false);

(statearr_35706_37482[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (3))){
var state_35552__$1 = state_35552;
var statearr_35707_37483 = state_35552__$1;
(statearr_35707_37483[(2)] = false);

(statearr_35707_37483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (12))){
var inst_35531 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35552__$1,inst_35531);
} else {
if((state_val_35554 === (2))){
var inst_35415 = (state_35552[(8)]);
var inst_35421 = inst_35415.cljs$lang$protocol_mask$partition0$;
var inst_35422 = (inst_35421 & (64));
var inst_35424 = inst_35415.cljs$core$ISeq$;
var inst_35425 = (cljs.core.PROTOCOL_SENTINEL === inst_35424);
var inst_35426 = ((inst_35422) || (inst_35425));
var state_35552__$1 = state_35552;
if(cljs.core.truth_(inst_35426)){
var statearr_35710_37485 = state_35552__$1;
(statearr_35710_37485[(1)] = (5));

} else {
var statearr_35711_37487 = state_35552__$1;
(statearr_35711_37487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (23))){
var inst_35481 = (state_35552[(14)]);
var inst_35491 = (inst_35481 == null);
var state_35552__$1 = state_35552;
if(cljs.core.truth_(inst_35491)){
var statearr_35712_37492 = state_35552__$1;
(statearr_35712_37492[(1)] = (26));

} else {
var statearr_35713_37493 = state_35552__$1;
(statearr_35713_37493[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (35))){
var inst_35518 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
if(cljs.core.truth_(inst_35518)){
var statearr_35714_37499 = state_35552__$1;
(statearr_35714_37499[(1)] = (36));

} else {
var statearr_35715_37501 = state_35552__$1;
(statearr_35715_37501[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (19))){
var inst_35443 = (state_35552[(7)]);
var inst_35465 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35443);
var state_35552__$1 = state_35552;
var statearr_35718_37504 = state_35552__$1;
(statearr_35718_37504[(2)] = inst_35465);

(statearr_35718_37504[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (11))){
var inst_35443 = (state_35552[(7)]);
var inst_35447 = (inst_35443 == null);
var inst_35448 = cljs.core.not(inst_35447);
var state_35552__$1 = state_35552;
if(inst_35448){
var statearr_35719_37506 = state_35552__$1;
(statearr_35719_37506[(1)] = (13));

} else {
var statearr_35720_37507 = state_35552__$1;
(statearr_35720_37507[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (9))){
var inst_35415 = (state_35552[(8)]);
var state_35552__$1 = state_35552;
var statearr_35721_37510 = state_35552__$1;
(statearr_35721_37510[(2)] = inst_35415);

(statearr_35721_37510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (5))){
var state_35552__$1 = state_35552;
var statearr_35724_37514 = state_35552__$1;
(statearr_35724_37514[(2)] = true);

(statearr_35724_37514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (14))){
var state_35552__$1 = state_35552;
var statearr_35725_37520 = state_35552__$1;
(statearr_35725_37520[(2)] = false);

(statearr_35725_37520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (26))){
var inst_35482 = (state_35552[(11)]);
var inst_35497 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35482);
var state_35552__$1 = state_35552;
var statearr_35728_37524 = state_35552__$1;
(statearr_35728_37524[(2)] = inst_35497);

(statearr_35728_37524[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (16))){
var state_35552__$1 = state_35552;
var statearr_35731_37525 = state_35552__$1;
(statearr_35731_37525[(2)] = true);

(statearr_35731_37525[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (38))){
var inst_35523 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
var statearr_35734_37527 = state_35552__$1;
(statearr_35734_37527[(2)] = inst_35523);

(statearr_35734_37527[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (30))){
var inst_35470 = (state_35552[(9)]);
var inst_35471 = (state_35552[(13)]);
var inst_35482 = (state_35552[(11)]);
var inst_35510 = cljs.core.empty_QMARK_(inst_35470);
var inst_35511 = (inst_35471.cljs$core$IFn$_invoke$arity$1 ? inst_35471.cljs$core$IFn$_invoke$arity$1(inst_35482) : inst_35471.call(null,inst_35482));
var inst_35512 = cljs.core.not(inst_35511);
var inst_35513 = ((inst_35510) && (inst_35512));
var state_35552__$1 = state_35552;
var statearr_35735_37533 = state_35552__$1;
(statearr_35735_37533[(2)] = inst_35513);

(statearr_35735_37533[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (10))){
var inst_35415 = (state_35552[(8)]);
var inst_35439 = (state_35552[(2)]);
var inst_35440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35439,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35439,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35439,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35443 = inst_35415;
var state_35552__$1 = (function (){var statearr_35737 = state_35552;
(statearr_35737[(16)] = inst_35442);

(statearr_35737[(17)] = inst_35441);

(statearr_35737[(18)] = inst_35440);

(statearr_35737[(7)] = inst_35443);

return statearr_35737;
})();
var statearr_35740_37542 = state_35552__$1;
(statearr_35740_37542[(2)] = null);

(statearr_35740_37542[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (18))){
var inst_35460 = (state_35552[(2)]);
var state_35552__$1 = state_35552;
var statearr_35742_37544 = state_35552__$1;
(statearr_35742_37544[(2)] = inst_35460);

(statearr_35742_37544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (37))){
var state_35552__$1 = state_35552;
var statearr_35743_37545 = state_35552__$1;
(statearr_35743_37545[(2)] = null);

(statearr_35743_37545[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35554 === (8))){
var inst_35415 = (state_35552[(8)]);
var inst_35436 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35415);
var state_35552__$1 = state_35552;
var statearr_35746_37552 = state_35552__$1;
(statearr_35746_37552[(2)] = inst_35436);

(statearr_35746_37552[(1)] = (10));


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
var statearr_35750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35750[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35750[(1)] = (1));

return statearr_35750;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35552){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35552);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35751){if((e35751 instanceof Object)){
var ex__34210__auto__ = e35751;
var statearr_35753_37555 = state_35552;
(statearr_35753_37555[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35751;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37562 = state_35552;
state_35552 = G__37562;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35552){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35754 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35754[(6)] = c__34274__auto___37420);

return statearr_35754;
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
var G__35786 = arguments.length;
switch (G__35786) {
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
var G__35799 = arguments.length;
switch (G__35799) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35795_SHARP_){
if(cljs.core.truth_((p1__35795_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35795_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35795_SHARP_.call(null,topic)))){
return p1__35795_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35795_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35805 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35806){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35806 = meta35806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35807,meta35806__$1){
var self__ = this;
var _35807__$1 = this;
return (new cljs.core.async.t_cljs$core$async35805(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35806__$1));
}));

(cljs.core.async.t_cljs$core$async35805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35807){
var self__ = this;
var _35807__$1 = this;
return self__.meta35806;
}));

(cljs.core.async.t_cljs$core$async35805.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35805.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35805.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35805.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35805.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35805.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35805.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35806","meta35806",621355554,null)], null);
}));

(cljs.core.async.t_cljs$core$async35805.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35805");

(cljs.core.async.t_cljs$core$async35805.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35805");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35805.
 */
cljs.core.async.__GT_t_cljs$core$async35805 = (function cljs$core$async$__GT_t_cljs$core$async35805(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35806){
return (new cljs.core.async.t_cljs$core$async35805(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35806));
});

}

return (new cljs.core.async.t_cljs$core$async35805(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35919){
var state_val_35921 = (state_35919[(1)]);
if((state_val_35921 === (7))){
var inst_35910 = (state_35919[(2)]);
var state_35919__$1 = state_35919;
var statearr_35924_37638 = state_35919__$1;
(statearr_35924_37638[(2)] = inst_35910);

(statearr_35924_37638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (20))){
var state_35919__$1 = state_35919;
var statearr_35927_37646 = state_35919__$1;
(statearr_35927_37646[(2)] = null);

(statearr_35927_37646[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (1))){
var state_35919__$1 = state_35919;
var statearr_35928_37649 = state_35919__$1;
(statearr_35928_37649[(2)] = null);

(statearr_35928_37649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (24))){
var inst_35892 = (state_35919[(7)]);
var inst_35902 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35892);
var state_35919__$1 = state_35919;
var statearr_35931_37651 = state_35919__$1;
(statearr_35931_37651[(2)] = inst_35902);

(statearr_35931_37651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (4))){
var inst_35836 = (state_35919[(8)]);
var inst_35836__$1 = (state_35919[(2)]);
var inst_35837 = (inst_35836__$1 == null);
var state_35919__$1 = (function (){var statearr_35934 = state_35919;
(statearr_35934[(8)] = inst_35836__$1);

return statearr_35934;
})();
if(cljs.core.truth_(inst_35837)){
var statearr_35936_37657 = state_35919__$1;
(statearr_35936_37657[(1)] = (5));

} else {
var statearr_35938_37658 = state_35919__$1;
(statearr_35938_37658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (15))){
var inst_35885 = (state_35919[(2)]);
var state_35919__$1 = state_35919;
var statearr_35940_37663 = state_35919__$1;
(statearr_35940_37663[(2)] = inst_35885);

(statearr_35940_37663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (21))){
var inst_35907 = (state_35919[(2)]);
var state_35919__$1 = (function (){var statearr_35941 = state_35919;
(statearr_35941[(9)] = inst_35907);

return statearr_35941;
})();
var statearr_35942_37665 = state_35919__$1;
(statearr_35942_37665[(2)] = null);

(statearr_35942_37665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (13))){
var inst_35865 = (state_35919[(10)]);
var inst_35867 = cljs.core.chunked_seq_QMARK_(inst_35865);
var state_35919__$1 = state_35919;
if(inst_35867){
var statearr_35946_37668 = state_35919__$1;
(statearr_35946_37668[(1)] = (16));

} else {
var statearr_35947_37669 = state_35919__$1;
(statearr_35947_37669[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (22))){
var inst_35899 = (state_35919[(2)]);
var state_35919__$1 = state_35919;
if(cljs.core.truth_(inst_35899)){
var statearr_35950_37677 = state_35919__$1;
(statearr_35950_37677[(1)] = (23));

} else {
var statearr_35952_37679 = state_35919__$1;
(statearr_35952_37679[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (6))){
var inst_35895 = (state_35919[(11)]);
var inst_35892 = (state_35919[(7)]);
var inst_35836 = (state_35919[(8)]);
var inst_35892__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35836) : topic_fn.call(null,inst_35836));
var inst_35894 = cljs.core.deref(mults);
var inst_35895__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35894,inst_35892__$1);
var state_35919__$1 = (function (){var statearr_35954 = state_35919;
(statearr_35954[(11)] = inst_35895__$1);

(statearr_35954[(7)] = inst_35892__$1);

return statearr_35954;
})();
if(cljs.core.truth_(inst_35895__$1)){
var statearr_35955_37683 = state_35919__$1;
(statearr_35955_37683[(1)] = (19));

} else {
var statearr_35958_37684 = state_35919__$1;
(statearr_35958_37684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (25))){
var inst_35904 = (state_35919[(2)]);
var state_35919__$1 = state_35919;
var statearr_35960_37689 = state_35919__$1;
(statearr_35960_37689[(2)] = inst_35904);

(statearr_35960_37689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (17))){
var inst_35865 = (state_35919[(10)]);
var inst_35875 = cljs.core.first(inst_35865);
var inst_35876 = cljs.core.async.muxch_STAR_(inst_35875);
var inst_35877 = cljs.core.async.close_BANG_(inst_35876);
var inst_35879 = cljs.core.next(inst_35865);
var inst_35849 = inst_35879;
var inst_35850 = null;
var inst_35851 = (0);
var inst_35852 = (0);
var state_35919__$1 = (function (){var statearr_35963 = state_35919;
(statearr_35963[(12)] = inst_35851);

(statearr_35963[(13)] = inst_35852);

(statearr_35963[(14)] = inst_35877);

(statearr_35963[(15)] = inst_35849);

(statearr_35963[(16)] = inst_35850);

return statearr_35963;
})();
var statearr_35966_37695 = state_35919__$1;
(statearr_35966_37695[(2)] = null);

(statearr_35966_37695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (3))){
var inst_35912 = (state_35919[(2)]);
var state_35919__$1 = state_35919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35919__$1,inst_35912);
} else {
if((state_val_35921 === (12))){
var inst_35887 = (state_35919[(2)]);
var state_35919__$1 = state_35919;
var statearr_35967_37705 = state_35919__$1;
(statearr_35967_37705[(2)] = inst_35887);

(statearr_35967_37705[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (2))){
var state_35919__$1 = state_35919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35919__$1,(4),ch);
} else {
if((state_val_35921 === (23))){
var state_35919__$1 = state_35919;
var statearr_35970_37708 = state_35919__$1;
(statearr_35970_37708[(2)] = null);

(statearr_35970_37708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (19))){
var inst_35895 = (state_35919[(11)]);
var inst_35836 = (state_35919[(8)]);
var inst_35897 = cljs.core.async.muxch_STAR_(inst_35895);
var state_35919__$1 = state_35919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35919__$1,(22),inst_35897,inst_35836);
} else {
if((state_val_35921 === (11))){
var inst_35865 = (state_35919[(10)]);
var inst_35849 = (state_35919[(15)]);
var inst_35865__$1 = cljs.core.seq(inst_35849);
var state_35919__$1 = (function (){var statearr_35974 = state_35919;
(statearr_35974[(10)] = inst_35865__$1);

return statearr_35974;
})();
if(inst_35865__$1){
var statearr_35976_37715 = state_35919__$1;
(statearr_35976_37715[(1)] = (13));

} else {
var statearr_35978_37717 = state_35919__$1;
(statearr_35978_37717[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (9))){
var inst_35889 = (state_35919[(2)]);
var state_35919__$1 = state_35919;
var statearr_35979_37721 = state_35919__$1;
(statearr_35979_37721[(2)] = inst_35889);

(statearr_35979_37721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (5))){
var inst_35846 = cljs.core.deref(mults);
var inst_35847 = cljs.core.vals(inst_35846);
var inst_35848 = cljs.core.seq(inst_35847);
var inst_35849 = inst_35848;
var inst_35850 = null;
var inst_35851 = (0);
var inst_35852 = (0);
var state_35919__$1 = (function (){var statearr_35981 = state_35919;
(statearr_35981[(12)] = inst_35851);

(statearr_35981[(13)] = inst_35852);

(statearr_35981[(15)] = inst_35849);

(statearr_35981[(16)] = inst_35850);

return statearr_35981;
})();
var statearr_35985_37724 = state_35919__$1;
(statearr_35985_37724[(2)] = null);

(statearr_35985_37724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (14))){
var state_35919__$1 = state_35919;
var statearr_35991_37729 = state_35919__$1;
(statearr_35991_37729[(2)] = null);

(statearr_35991_37729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (16))){
var inst_35865 = (state_35919[(10)]);
var inst_35869 = cljs.core.chunk_first(inst_35865);
var inst_35870 = cljs.core.chunk_rest(inst_35865);
var inst_35871 = cljs.core.count(inst_35869);
var inst_35849 = inst_35870;
var inst_35850 = inst_35869;
var inst_35851 = inst_35871;
var inst_35852 = (0);
var state_35919__$1 = (function (){var statearr_35993 = state_35919;
(statearr_35993[(12)] = inst_35851);

(statearr_35993[(13)] = inst_35852);

(statearr_35993[(15)] = inst_35849);

(statearr_35993[(16)] = inst_35850);

return statearr_35993;
})();
var statearr_35995_37733 = state_35919__$1;
(statearr_35995_37733[(2)] = null);

(statearr_35995_37733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (10))){
var inst_35851 = (state_35919[(12)]);
var inst_35852 = (state_35919[(13)]);
var inst_35849 = (state_35919[(15)]);
var inst_35850 = (state_35919[(16)]);
var inst_35858 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35850,inst_35852);
var inst_35859 = cljs.core.async.muxch_STAR_(inst_35858);
var inst_35860 = cljs.core.async.close_BANG_(inst_35859);
var inst_35861 = (inst_35852 + (1));
var tmp35987 = inst_35851;
var tmp35988 = inst_35849;
var tmp35989 = inst_35850;
var inst_35849__$1 = tmp35988;
var inst_35850__$1 = tmp35989;
var inst_35851__$1 = tmp35987;
var inst_35852__$1 = inst_35861;
var state_35919__$1 = (function (){var statearr_35997 = state_35919;
(statearr_35997[(12)] = inst_35851__$1);

(statearr_35997[(17)] = inst_35860);

(statearr_35997[(13)] = inst_35852__$1);

(statearr_35997[(15)] = inst_35849__$1);

(statearr_35997[(16)] = inst_35850__$1);

return statearr_35997;
})();
var statearr_35998_37737 = state_35919__$1;
(statearr_35998_37737[(2)] = null);

(statearr_35998_37737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (18))){
var inst_35882 = (state_35919[(2)]);
var state_35919__$1 = state_35919;
var statearr_35999_37738 = state_35919__$1;
(statearr_35999_37738[(2)] = inst_35882);

(statearr_35999_37738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35921 === (8))){
var inst_35851 = (state_35919[(12)]);
var inst_35852 = (state_35919[(13)]);
var inst_35854 = (inst_35852 < inst_35851);
var inst_35855 = inst_35854;
var state_35919__$1 = state_35919;
if(cljs.core.truth_(inst_35855)){
var statearr_36002_37741 = state_35919__$1;
(statearr_36002_37741[(1)] = (10));

} else {
var statearr_36003_37742 = state_35919__$1;
(statearr_36003_37742[(1)] = (11));

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
var statearr_36005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36005[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36005[(1)] = (1));

return statearr_36005;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35919){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35919);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36008){if((e36008 instanceof Object)){
var ex__34210__auto__ = e36008;
var statearr_36009_37743 = state_35919;
(statearr_36009_37743[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37746 = state_35919;
state_35919 = G__37746;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36011 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36011[(6)] = c__34274__auto___37635);

return statearr_36011;
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
var G__36016 = arguments.length;
switch (G__36016) {
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
var G__36029 = arguments.length;
switch (G__36029) {
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
var G__36043 = arguments.length;
switch (G__36043) {
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
var c__34274__auto___37759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36092){
var state_val_36093 = (state_36092[(1)]);
if((state_val_36093 === (7))){
var state_36092__$1 = state_36092;
var statearr_36094_37760 = state_36092__$1;
(statearr_36094_37760[(2)] = null);

(statearr_36094_37760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (1))){
var state_36092__$1 = state_36092;
var statearr_36095_37761 = state_36092__$1;
(statearr_36095_37761[(2)] = null);

(statearr_36095_37761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (4))){
var inst_36052 = (state_36092[(7)]);
var inst_36054 = (inst_36052 < cnt);
var state_36092__$1 = state_36092;
if(cljs.core.truth_(inst_36054)){
var statearr_36096_37762 = state_36092__$1;
(statearr_36096_37762[(1)] = (6));

} else {
var statearr_36097_37763 = state_36092__$1;
(statearr_36097_37763[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (15))){
var inst_36088 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
var statearr_36098_37768 = state_36092__$1;
(statearr_36098_37768[(2)] = inst_36088);

(statearr_36098_37768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (13))){
var inst_36081 = cljs.core.async.close_BANG_(out);
var state_36092__$1 = state_36092;
var statearr_36099_37769 = state_36092__$1;
(statearr_36099_37769[(2)] = inst_36081);

(statearr_36099_37769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (6))){
var state_36092__$1 = state_36092;
var statearr_36100_37775 = state_36092__$1;
(statearr_36100_37775[(2)] = null);

(statearr_36100_37775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (3))){
var inst_36090 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36092__$1,inst_36090);
} else {
if((state_val_36093 === (12))){
var inst_36077 = (state_36092[(8)]);
var inst_36077__$1 = (state_36092[(2)]);
var inst_36078 = cljs.core.some(cljs.core.nil_QMARK_,inst_36077__$1);
var state_36092__$1 = (function (){var statearr_36102 = state_36092;
(statearr_36102[(8)] = inst_36077__$1);

return statearr_36102;
})();
if(cljs.core.truth_(inst_36078)){
var statearr_36104_37777 = state_36092__$1;
(statearr_36104_37777[(1)] = (13));

} else {
var statearr_36105_37781 = state_36092__$1;
(statearr_36105_37781[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (2))){
var inst_36050 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36052 = (0);
var state_36092__$1 = (function (){var statearr_36113 = state_36092;
(statearr_36113[(9)] = inst_36050);

(statearr_36113[(7)] = inst_36052);

return statearr_36113;
})();
var statearr_36114_37782 = state_36092__$1;
(statearr_36114_37782[(2)] = null);

(statearr_36114_37782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (11))){
var inst_36052 = (state_36092[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36092,(10),Object,null,(9));
var inst_36061 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36052) : chs__$1.call(null,inst_36052));
var inst_36062 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36052) : done.call(null,inst_36052));
var inst_36063 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36061,inst_36062);
var state_36092__$1 = state_36092;
var statearr_36116_37786 = state_36092__$1;
(statearr_36116_37786[(2)] = inst_36063);


cljs.core.async.impl.ioc_helpers.process_exception(state_36092__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (9))){
var inst_36052 = (state_36092[(7)]);
var inst_36065 = (state_36092[(2)]);
var inst_36067 = (inst_36052 + (1));
var inst_36052__$1 = inst_36067;
var state_36092__$1 = (function (){var statearr_36117 = state_36092;
(statearr_36117[(7)] = inst_36052__$1);

(statearr_36117[(10)] = inst_36065);

return statearr_36117;
})();
var statearr_36118_37789 = state_36092__$1;
(statearr_36118_37789[(2)] = null);

(statearr_36118_37789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (5))){
var inst_36073 = (state_36092[(2)]);
var state_36092__$1 = (function (){var statearr_36119 = state_36092;
(statearr_36119[(11)] = inst_36073);

return statearr_36119;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36092__$1,(12),dchan);
} else {
if((state_val_36093 === (14))){
var inst_36077 = (state_36092[(8)]);
var inst_36083 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36077);
var state_36092__$1 = state_36092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36092__$1,(16),out,inst_36083);
} else {
if((state_val_36093 === (16))){
var inst_36085 = (state_36092[(2)]);
var state_36092__$1 = (function (){var statearr_36123 = state_36092;
(statearr_36123[(12)] = inst_36085);

return statearr_36123;
})();
var statearr_36124_37798 = state_36092__$1;
(statearr_36124_37798[(2)] = null);

(statearr_36124_37798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (10))){
var inst_36056 = (state_36092[(2)]);
var inst_36057 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36092__$1 = (function (){var statearr_36129 = state_36092;
(statearr_36129[(13)] = inst_36056);

return statearr_36129;
})();
var statearr_36130_37801 = state_36092__$1;
(statearr_36130_37801[(2)] = inst_36057);


cljs.core.async.impl.ioc_helpers.process_exception(state_36092__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (8))){
var inst_36071 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
var statearr_36131_37803 = state_36092__$1;
(statearr_36131_37803[(2)] = inst_36071);

(statearr_36131_37803[(1)] = (5));


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
var statearr_36133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36133[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36133[(1)] = (1));

return statearr_36133;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36092){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36092);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36134){if((e36134 instanceof Object)){
var ex__34210__auto__ = e36134;
var statearr_36136_37811 = state_36092;
(statearr_36136_37811[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36134;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37812 = state_36092;
state_36092 = G__37812;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36139 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36139[(6)] = c__34274__auto___37759);

return statearr_36139;
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
var G__36151 = arguments.length;
switch (G__36151) {
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
var c__34274__auto___37822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36190){
var state_val_36191 = (state_36190[(1)]);
if((state_val_36191 === (7))){
var inst_36162 = (state_36190[(7)]);
var inst_36163 = (state_36190[(8)]);
var inst_36162__$1 = (state_36190[(2)]);
var inst_36163__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36162__$1,(0),null);
var inst_36164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36162__$1,(1),null);
var inst_36165 = (inst_36163__$1 == null);
var state_36190__$1 = (function (){var statearr_36192 = state_36190;
(statearr_36192[(7)] = inst_36162__$1);

(statearr_36192[(9)] = inst_36164);

(statearr_36192[(8)] = inst_36163__$1);

return statearr_36192;
})();
if(cljs.core.truth_(inst_36165)){
var statearr_36193_37826 = state_36190__$1;
(statearr_36193_37826[(1)] = (8));

} else {
var statearr_36196_37830 = state_36190__$1;
(statearr_36196_37830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (1))){
var inst_36152 = cljs.core.vec(chs);
var inst_36153 = inst_36152;
var state_36190__$1 = (function (){var statearr_36197 = state_36190;
(statearr_36197[(10)] = inst_36153);

return statearr_36197;
})();
var statearr_36198_37834 = state_36190__$1;
(statearr_36198_37834[(2)] = null);

(statearr_36198_37834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (4))){
var inst_36153 = (state_36190[(10)]);
var state_36190__$1 = state_36190;
return cljs.core.async.ioc_alts_BANG_(state_36190__$1,(7),inst_36153);
} else {
if((state_val_36191 === (6))){
var inst_36185 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
var statearr_36199_37837 = state_36190__$1;
(statearr_36199_37837[(2)] = inst_36185);

(statearr_36199_37837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (3))){
var inst_36187 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36190__$1,inst_36187);
} else {
if((state_val_36191 === (2))){
var inst_36153 = (state_36190[(10)]);
var inst_36155 = cljs.core.count(inst_36153);
var inst_36156 = (inst_36155 > (0));
var state_36190__$1 = state_36190;
if(cljs.core.truth_(inst_36156)){
var statearr_36203_37839 = state_36190__$1;
(statearr_36203_37839[(1)] = (4));

} else {
var statearr_36205_37840 = state_36190__$1;
(statearr_36205_37840[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (11))){
var inst_36153 = (state_36190[(10)]);
var inst_36178 = (state_36190[(2)]);
var tmp36200 = inst_36153;
var inst_36153__$1 = tmp36200;
var state_36190__$1 = (function (){var statearr_36206 = state_36190;
(statearr_36206[(10)] = inst_36153__$1);

(statearr_36206[(11)] = inst_36178);

return statearr_36206;
})();
var statearr_36209_37842 = state_36190__$1;
(statearr_36209_37842[(2)] = null);

(statearr_36209_37842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (9))){
var inst_36163 = (state_36190[(8)]);
var state_36190__$1 = state_36190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36190__$1,(11),out,inst_36163);
} else {
if((state_val_36191 === (5))){
var inst_36183 = cljs.core.async.close_BANG_(out);
var state_36190__$1 = state_36190;
var statearr_36215_37843 = state_36190__$1;
(statearr_36215_37843[(2)] = inst_36183);

(statearr_36215_37843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (10))){
var inst_36181 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
var statearr_36217_37844 = state_36190__$1;
(statearr_36217_37844[(2)] = inst_36181);

(statearr_36217_37844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (8))){
var inst_36162 = (state_36190[(7)]);
var inst_36153 = (state_36190[(10)]);
var inst_36164 = (state_36190[(9)]);
var inst_36163 = (state_36190[(8)]);
var inst_36167 = (function (){var cs = inst_36153;
var vec__36158 = inst_36162;
var v = inst_36163;
var c = inst_36164;
return (function (p1__36142_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36142_SHARP_);
});
})();
var inst_36174 = cljs.core.filterv(inst_36167,inst_36153);
var inst_36153__$1 = inst_36174;
var state_36190__$1 = (function (){var statearr_36228 = state_36190;
(statearr_36228[(10)] = inst_36153__$1);

return statearr_36228;
})();
var statearr_36229_37852 = state_36190__$1;
(statearr_36229_37852[(2)] = null);

(statearr_36229_37852[(1)] = (2));


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
var statearr_36230 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36230[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36230[(1)] = (1));

return statearr_36230;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36190){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36190);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36232){if((e36232 instanceof Object)){
var ex__34210__auto__ = e36232;
var statearr_36233_37854 = state_36190;
(statearr_36233_37854[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36232;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37856 = state_36190;
state_36190 = G__37856;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36236 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36236[(6)] = c__34274__auto___37822);

return statearr_36236;
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
var c__34274__auto___37866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36268){
var state_val_36269 = (state_36268[(1)]);
if((state_val_36269 === (7))){
var inst_36250 = (state_36268[(7)]);
var inst_36250__$1 = (state_36268[(2)]);
var inst_36251 = (inst_36250__$1 == null);
var inst_36252 = cljs.core.not(inst_36251);
var state_36268__$1 = (function (){var statearr_36274 = state_36268;
(statearr_36274[(7)] = inst_36250__$1);

return statearr_36274;
})();
if(inst_36252){
var statearr_36275_37869 = state_36268__$1;
(statearr_36275_37869[(1)] = (8));

} else {
var statearr_36276_37870 = state_36268__$1;
(statearr_36276_37870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (1))){
var inst_36245 = (0);
var state_36268__$1 = (function (){var statearr_36278 = state_36268;
(statearr_36278[(8)] = inst_36245);

return statearr_36278;
})();
var statearr_36283_37871 = state_36268__$1;
(statearr_36283_37871[(2)] = null);

(statearr_36283_37871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (4))){
var state_36268__$1 = state_36268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36268__$1,(7),ch);
} else {
if((state_val_36269 === (6))){
var inst_36263 = (state_36268[(2)]);
var state_36268__$1 = state_36268;
var statearr_36287_37873 = state_36268__$1;
(statearr_36287_37873[(2)] = inst_36263);

(statearr_36287_37873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (3))){
var inst_36265 = (state_36268[(2)]);
var inst_36266 = cljs.core.async.close_BANG_(out);
var state_36268__$1 = (function (){var statearr_36288 = state_36268;
(statearr_36288[(9)] = inst_36265);

return statearr_36288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36268__$1,inst_36266);
} else {
if((state_val_36269 === (2))){
var inst_36245 = (state_36268[(8)]);
var inst_36247 = (inst_36245 < n);
var state_36268__$1 = state_36268;
if(cljs.core.truth_(inst_36247)){
var statearr_36290_37881 = state_36268__$1;
(statearr_36290_37881[(1)] = (4));

} else {
var statearr_36292_37882 = state_36268__$1;
(statearr_36292_37882[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (11))){
var inst_36245 = (state_36268[(8)]);
var inst_36255 = (state_36268[(2)]);
var inst_36256 = (inst_36245 + (1));
var inst_36245__$1 = inst_36256;
var state_36268__$1 = (function (){var statearr_36294 = state_36268;
(statearr_36294[(10)] = inst_36255);

(statearr_36294[(8)] = inst_36245__$1);

return statearr_36294;
})();
var statearr_36295_37884 = state_36268__$1;
(statearr_36295_37884[(2)] = null);

(statearr_36295_37884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (9))){
var state_36268__$1 = state_36268;
var statearr_36297_37885 = state_36268__$1;
(statearr_36297_37885[(2)] = null);

(statearr_36297_37885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (5))){
var state_36268__$1 = state_36268;
var statearr_36299_37887 = state_36268__$1;
(statearr_36299_37887[(2)] = null);

(statearr_36299_37887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (10))){
var inst_36260 = (state_36268[(2)]);
var state_36268__$1 = state_36268;
var statearr_36300_37890 = state_36268__$1;
(statearr_36300_37890[(2)] = inst_36260);

(statearr_36300_37890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36269 === (8))){
var inst_36250 = (state_36268[(7)]);
var state_36268__$1 = state_36268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36268__$1,(11),out,inst_36250);
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
var statearr_36303 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36303[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36303[(1)] = (1));

return statearr_36303;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36268){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36268);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36304){if((e36304 instanceof Object)){
var ex__34210__auto__ = e36304;
var statearr_36305_37896 = state_36268;
(statearr_36305_37896[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37898 = state_36268;
state_36268 = G__37898;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36306 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36306[(6)] = c__34274__auto___37866);

return statearr_36306;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36310 = (function (f,ch,meta36311){
this.f = f;
this.ch = ch;
this.meta36311 = meta36311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36312,meta36311__$1){
var self__ = this;
var _36312__$1 = this;
return (new cljs.core.async.t_cljs$core$async36310(self__.f,self__.ch,meta36311__$1));
}));

(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36312){
var self__ = this;
var _36312__$1 = this;
return self__.meta36311;
}));

(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36325 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36325 = (function (f,ch,meta36311,_,fn1,meta36326){
this.f = f;
this.ch = ch;
this.meta36311 = meta36311;
this._ = _;
this.fn1 = fn1;
this.meta36326 = meta36326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36327,meta36326__$1){
var self__ = this;
var _36327__$1 = this;
return (new cljs.core.async.t_cljs$core$async36325(self__.f,self__.ch,self__.meta36311,self__._,self__.fn1,meta36326__$1));
}));

(cljs.core.async.t_cljs$core$async36325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36327){
var self__ = this;
var _36327__$1 = this;
return self__.meta36326;
}));

(cljs.core.async.t_cljs$core$async36325.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36325.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36325.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36325.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36309_SHARP_){
var G__36333 = (((p1__36309_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36309_SHARP_) : self__.f.call(null,p1__36309_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36333) : f1.call(null,G__36333));
});
}));

(cljs.core.async.t_cljs$core$async36325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36311","meta36311",-1802910390,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36310","cljs.core.async/t_cljs$core$async36310",1822235228,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36326","meta36326",7741424,null)], null);
}));

(cljs.core.async.t_cljs$core$async36325.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36325");

(cljs.core.async.t_cljs$core$async36325.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36325");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36325.
 */
cljs.core.async.__GT_t_cljs$core$async36325 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36325(f__$1,ch__$1,meta36311__$1,___$2,fn1__$1,meta36326){
return (new cljs.core.async.t_cljs$core$async36325(f__$1,ch__$1,meta36311__$1,___$2,fn1__$1,meta36326));
});

}

return (new cljs.core.async.t_cljs$core$async36325(self__.f,self__.ch,self__.meta36311,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36336 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36336) : self__.f.call(null,G__36336));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36311","meta36311",-1802910390,null)], null);
}));

(cljs.core.async.t_cljs$core$async36310.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36310");

(cljs.core.async.t_cljs$core$async36310.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36310");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36310.
 */
cljs.core.async.__GT_t_cljs$core$async36310 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36310(f__$1,ch__$1,meta36311){
return (new cljs.core.async.t_cljs$core$async36310(f__$1,ch__$1,meta36311));
});

}

return (new cljs.core.async.t_cljs$core$async36310(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36348 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36348 = (function (f,ch,meta36349){
this.f = f;
this.ch = ch;
this.meta36349 = meta36349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36350,meta36349__$1){
var self__ = this;
var _36350__$1 = this;
return (new cljs.core.async.t_cljs$core$async36348(self__.f,self__.ch,meta36349__$1));
}));

(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36350){
var self__ = this;
var _36350__$1 = this;
return self__.meta36349;
}));

(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36348.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36349","meta36349",252366113,null)], null);
}));

(cljs.core.async.t_cljs$core$async36348.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36348");

(cljs.core.async.t_cljs$core$async36348.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36348");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36348.
 */
cljs.core.async.__GT_t_cljs$core$async36348 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36348(f__$1,ch__$1,meta36349){
return (new cljs.core.async.t_cljs$core$async36348(f__$1,ch__$1,meta36349));
});

}

return (new cljs.core.async.t_cljs$core$async36348(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36359 = (function (p,ch,meta36360){
this.p = p;
this.ch = ch;
this.meta36360 = meta36360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36361,meta36360__$1){
var self__ = this;
var _36361__$1 = this;
return (new cljs.core.async.t_cljs$core$async36359(self__.p,self__.ch,meta36360__$1));
}));

(cljs.core.async.t_cljs$core$async36359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36361){
var self__ = this;
var _36361__$1 = this;
return self__.meta36360;
}));

(cljs.core.async.t_cljs$core$async36359.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36359.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36359.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36359.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36359.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36359.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36359.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36360","meta36360",-572455733,null)], null);
}));

(cljs.core.async.t_cljs$core$async36359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36359");

(cljs.core.async.t_cljs$core$async36359.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36359.
 */
cljs.core.async.__GT_t_cljs$core$async36359 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36359(p__$1,ch__$1,meta36360){
return (new cljs.core.async.t_cljs$core$async36359(p__$1,ch__$1,meta36360));
});

}

return (new cljs.core.async.t_cljs$core$async36359(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36379 = arguments.length;
switch (G__36379) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36418){
var state_val_36419 = (state_36418[(1)]);
if((state_val_36419 === (7))){
var inst_36412 = (state_36418[(2)]);
var state_36418__$1 = state_36418;
var statearr_36421_37954 = state_36418__$1;
(statearr_36421_37954[(2)] = inst_36412);

(statearr_36421_37954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (1))){
var state_36418__$1 = state_36418;
var statearr_36423_37956 = state_36418__$1;
(statearr_36423_37956[(2)] = null);

(statearr_36423_37956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (4))){
var inst_36386 = (state_36418[(7)]);
var inst_36386__$1 = (state_36418[(2)]);
var inst_36387 = (inst_36386__$1 == null);
var state_36418__$1 = (function (){var statearr_36427 = state_36418;
(statearr_36427[(7)] = inst_36386__$1);

return statearr_36427;
})();
if(cljs.core.truth_(inst_36387)){
var statearr_36428_37961 = state_36418__$1;
(statearr_36428_37961[(1)] = (5));

} else {
var statearr_36429_37962 = state_36418__$1;
(statearr_36429_37962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (6))){
var inst_36386 = (state_36418[(7)]);
var inst_36391 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36386) : p.call(null,inst_36386));
var state_36418__$1 = state_36418;
if(cljs.core.truth_(inst_36391)){
var statearr_36436_37963 = state_36418__$1;
(statearr_36436_37963[(1)] = (8));

} else {
var statearr_36437_37964 = state_36418__$1;
(statearr_36437_37964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (3))){
var inst_36414 = (state_36418[(2)]);
var state_36418__$1 = state_36418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36418__$1,inst_36414);
} else {
if((state_val_36419 === (2))){
var state_36418__$1 = state_36418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36418__$1,(4),ch);
} else {
if((state_val_36419 === (11))){
var inst_36401 = (state_36418[(2)]);
var state_36418__$1 = state_36418;
var statearr_36439_37968 = state_36418__$1;
(statearr_36439_37968[(2)] = inst_36401);

(statearr_36439_37968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (9))){
var state_36418__$1 = state_36418;
var statearr_36442_37971 = state_36418__$1;
(statearr_36442_37971[(2)] = null);

(statearr_36442_37971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (5))){
var inst_36389 = cljs.core.async.close_BANG_(out);
var state_36418__$1 = state_36418;
var statearr_36452_37973 = state_36418__$1;
(statearr_36452_37973[(2)] = inst_36389);

(statearr_36452_37973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (10))){
var inst_36404 = (state_36418[(2)]);
var state_36418__$1 = (function (){var statearr_36455 = state_36418;
(statearr_36455[(8)] = inst_36404);

return statearr_36455;
})();
var statearr_36456_37980 = state_36418__$1;
(statearr_36456_37980[(2)] = null);

(statearr_36456_37980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36419 === (8))){
var inst_36386 = (state_36418[(7)]);
var state_36418__$1 = state_36418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36418__$1,(11),out,inst_36386);
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
var statearr_36460 = [null,null,null,null,null,null,null,null,null];
(statearr_36460[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36460[(1)] = (1));

return statearr_36460;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36418){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36418);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36461){if((e36461 instanceof Object)){
var ex__34210__auto__ = e36461;
var statearr_36462_37988 = state_36418;
(statearr_36462_37988[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37991 = state_36418;
state_36418 = G__37991;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36467 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36467[(6)] = c__34274__auto___37953);

return statearr_36467;
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
var G__36469 = arguments.length;
switch (G__36469) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36540){
var state_val_36541 = (state_36540[(1)]);
if((state_val_36541 === (7))){
var inst_36535 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36544_38000 = state_36540__$1;
(statearr_36544_38000[(2)] = inst_36535);

(statearr_36544_38000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (20))){
var inst_36505 = (state_36540[(7)]);
var inst_36516 = (state_36540[(2)]);
var inst_36517 = cljs.core.next(inst_36505);
var inst_36489 = inst_36517;
var inst_36490 = null;
var inst_36491 = (0);
var inst_36492 = (0);
var state_36540__$1 = (function (){var statearr_36546 = state_36540;
(statearr_36546[(8)] = inst_36516);

(statearr_36546[(9)] = inst_36489);

(statearr_36546[(10)] = inst_36492);

(statearr_36546[(11)] = inst_36491);

(statearr_36546[(12)] = inst_36490);

return statearr_36546;
})();
var statearr_36547_38004 = state_36540__$1;
(statearr_36547_38004[(2)] = null);

(statearr_36547_38004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (1))){
var state_36540__$1 = state_36540;
var statearr_36549_38007 = state_36540__$1;
(statearr_36549_38007[(2)] = null);

(statearr_36549_38007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (4))){
var inst_36478 = (state_36540[(13)]);
var inst_36478__$1 = (state_36540[(2)]);
var inst_36479 = (inst_36478__$1 == null);
var state_36540__$1 = (function (){var statearr_36550 = state_36540;
(statearr_36550[(13)] = inst_36478__$1);

return statearr_36550;
})();
if(cljs.core.truth_(inst_36479)){
var statearr_36551_38008 = state_36540__$1;
(statearr_36551_38008[(1)] = (5));

} else {
var statearr_36552_38010 = state_36540__$1;
(statearr_36552_38010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (15))){
var state_36540__$1 = state_36540;
var statearr_36557_38011 = state_36540__$1;
(statearr_36557_38011[(2)] = null);

(statearr_36557_38011[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (21))){
var state_36540__$1 = state_36540;
var statearr_36558_38014 = state_36540__$1;
(statearr_36558_38014[(2)] = null);

(statearr_36558_38014[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (13))){
var inst_36489 = (state_36540[(9)]);
var inst_36492 = (state_36540[(10)]);
var inst_36491 = (state_36540[(11)]);
var inst_36490 = (state_36540[(12)]);
var inst_36500 = (state_36540[(2)]);
var inst_36501 = (inst_36492 + (1));
var tmp36554 = inst_36489;
var tmp36555 = inst_36491;
var tmp36556 = inst_36490;
var inst_36489__$1 = tmp36554;
var inst_36490__$1 = tmp36556;
var inst_36491__$1 = tmp36555;
var inst_36492__$1 = inst_36501;
var state_36540__$1 = (function (){var statearr_36560 = state_36540;
(statearr_36560[(9)] = inst_36489__$1);

(statearr_36560[(10)] = inst_36492__$1);

(statearr_36560[(11)] = inst_36491__$1);

(statearr_36560[(12)] = inst_36490__$1);

(statearr_36560[(14)] = inst_36500);

return statearr_36560;
})();
var statearr_36561_38019 = state_36540__$1;
(statearr_36561_38019[(2)] = null);

(statearr_36561_38019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (22))){
var state_36540__$1 = state_36540;
var statearr_36563_38021 = state_36540__$1;
(statearr_36563_38021[(2)] = null);

(statearr_36563_38021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (6))){
var inst_36478 = (state_36540[(13)]);
var inst_36487 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36478) : f.call(null,inst_36478));
var inst_36488 = cljs.core.seq(inst_36487);
var inst_36489 = inst_36488;
var inst_36490 = null;
var inst_36491 = (0);
var inst_36492 = (0);
var state_36540__$1 = (function (){var statearr_36564 = state_36540;
(statearr_36564[(9)] = inst_36489);

(statearr_36564[(10)] = inst_36492);

(statearr_36564[(11)] = inst_36491);

(statearr_36564[(12)] = inst_36490);

return statearr_36564;
})();
var statearr_36566_38023 = state_36540__$1;
(statearr_36566_38023[(2)] = null);

(statearr_36566_38023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (17))){
var inst_36505 = (state_36540[(7)]);
var inst_36509 = cljs.core.chunk_first(inst_36505);
var inst_36510 = cljs.core.chunk_rest(inst_36505);
var inst_36511 = cljs.core.count(inst_36509);
var inst_36489 = inst_36510;
var inst_36490 = inst_36509;
var inst_36491 = inst_36511;
var inst_36492 = (0);
var state_36540__$1 = (function (){var statearr_36567 = state_36540;
(statearr_36567[(9)] = inst_36489);

(statearr_36567[(10)] = inst_36492);

(statearr_36567[(11)] = inst_36491);

(statearr_36567[(12)] = inst_36490);

return statearr_36567;
})();
var statearr_36569_38028 = state_36540__$1;
(statearr_36569_38028[(2)] = null);

(statearr_36569_38028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (3))){
var inst_36537 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36540__$1,inst_36537);
} else {
if((state_val_36541 === (12))){
var inst_36525 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36570_38029 = state_36540__$1;
(statearr_36570_38029[(2)] = inst_36525);

(statearr_36570_38029[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (2))){
var state_36540__$1 = state_36540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36540__$1,(4),in$);
} else {
if((state_val_36541 === (23))){
var inst_36533 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36572_38030 = state_36540__$1;
(statearr_36572_38030[(2)] = inst_36533);

(statearr_36572_38030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (19))){
var inst_36520 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36573_38034 = state_36540__$1;
(statearr_36573_38034[(2)] = inst_36520);

(statearr_36573_38034[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (11))){
var inst_36489 = (state_36540[(9)]);
var inst_36505 = (state_36540[(7)]);
var inst_36505__$1 = cljs.core.seq(inst_36489);
var state_36540__$1 = (function (){var statearr_36575 = state_36540;
(statearr_36575[(7)] = inst_36505__$1);

return statearr_36575;
})();
if(inst_36505__$1){
var statearr_36576_38035 = state_36540__$1;
(statearr_36576_38035[(1)] = (14));

} else {
var statearr_36577_38036 = state_36540__$1;
(statearr_36577_38036[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (9))){
var inst_36527 = (state_36540[(2)]);
var inst_36528 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36540__$1 = (function (){var statearr_36578 = state_36540;
(statearr_36578[(15)] = inst_36527);

return statearr_36578;
})();
if(cljs.core.truth_(inst_36528)){
var statearr_36580_38041 = state_36540__$1;
(statearr_36580_38041[(1)] = (21));

} else {
var statearr_36581_38042 = state_36540__$1;
(statearr_36581_38042[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (5))){
var inst_36481 = cljs.core.async.close_BANG_(out);
var state_36540__$1 = state_36540;
var statearr_36582_38043 = state_36540__$1;
(statearr_36582_38043[(2)] = inst_36481);

(statearr_36582_38043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (14))){
var inst_36505 = (state_36540[(7)]);
var inst_36507 = cljs.core.chunked_seq_QMARK_(inst_36505);
var state_36540__$1 = state_36540;
if(inst_36507){
var statearr_36584_38044 = state_36540__$1;
(statearr_36584_38044[(1)] = (17));

} else {
var statearr_36585_38045 = state_36540__$1;
(statearr_36585_38045[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (16))){
var inst_36523 = (state_36540[(2)]);
var state_36540__$1 = state_36540;
var statearr_36586_38046 = state_36540__$1;
(statearr_36586_38046[(2)] = inst_36523);

(statearr_36586_38046[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36541 === (10))){
var inst_36492 = (state_36540[(10)]);
var inst_36490 = (state_36540[(12)]);
var inst_36498 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36490,inst_36492);
var state_36540__$1 = state_36540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36540__$1,(13),out,inst_36498);
} else {
if((state_val_36541 === (18))){
var inst_36505 = (state_36540[(7)]);
var inst_36514 = cljs.core.first(inst_36505);
var state_36540__$1 = state_36540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36540__$1,(20),out,inst_36514);
} else {
if((state_val_36541 === (8))){
var inst_36492 = (state_36540[(10)]);
var inst_36491 = (state_36540[(11)]);
var inst_36495 = (inst_36492 < inst_36491);
var inst_36496 = inst_36495;
var state_36540__$1 = state_36540;
if(cljs.core.truth_(inst_36496)){
var statearr_36588_38048 = state_36540__$1;
(statearr_36588_38048[(1)] = (10));

} else {
var statearr_36589_38049 = state_36540__$1;
(statearr_36589_38049[(1)] = (11));

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
var statearr_36591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36591[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36591[(1)] = (1));

return statearr_36591;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36540){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36540);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36592){if((e36592 instanceof Object)){
var ex__34210__auto__ = e36592;
var statearr_36594_38054 = state_36540;
(statearr_36594_38054[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36592;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38055 = state_36540;
state_36540 = G__38055;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36540){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36595 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36595[(6)] = c__34274__auto__);

return statearr_36595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36598 = arguments.length;
switch (G__36598) {
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
var G__36602 = arguments.length;
switch (G__36602) {
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
var G__36607 = arguments.length;
switch (G__36607) {
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
var c__34274__auto___38064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36633){
var state_val_36634 = (state_36633[(1)]);
if((state_val_36634 === (7))){
var inst_36628 = (state_36633[(2)]);
var state_36633__$1 = state_36633;
var statearr_36636_38067 = state_36633__$1;
(statearr_36636_38067[(2)] = inst_36628);

(statearr_36636_38067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (1))){
var inst_36609 = null;
var state_36633__$1 = (function (){var statearr_36637 = state_36633;
(statearr_36637[(7)] = inst_36609);

return statearr_36637;
})();
var statearr_36638_38068 = state_36633__$1;
(statearr_36638_38068[(2)] = null);

(statearr_36638_38068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (4))){
var inst_36612 = (state_36633[(8)]);
var inst_36612__$1 = (state_36633[(2)]);
var inst_36613 = (inst_36612__$1 == null);
var inst_36614 = cljs.core.not(inst_36613);
var state_36633__$1 = (function (){var statearr_36640 = state_36633;
(statearr_36640[(8)] = inst_36612__$1);

return statearr_36640;
})();
if(inst_36614){
var statearr_36641_38069 = state_36633__$1;
(statearr_36641_38069[(1)] = (5));

} else {
var statearr_36642_38070 = state_36633__$1;
(statearr_36642_38070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (6))){
var state_36633__$1 = state_36633;
var statearr_36643_38071 = state_36633__$1;
(statearr_36643_38071[(2)] = null);

(statearr_36643_38071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (3))){
var inst_36630 = (state_36633[(2)]);
var inst_36631 = cljs.core.async.close_BANG_(out);
var state_36633__$1 = (function (){var statearr_36645 = state_36633;
(statearr_36645[(9)] = inst_36630);

return statearr_36645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36633__$1,inst_36631);
} else {
if((state_val_36634 === (2))){
var state_36633__$1 = state_36633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36633__$1,(4),ch);
} else {
if((state_val_36634 === (11))){
var inst_36612 = (state_36633[(8)]);
var inst_36622 = (state_36633[(2)]);
var inst_36609 = inst_36612;
var state_36633__$1 = (function (){var statearr_36646 = state_36633;
(statearr_36646[(7)] = inst_36609);

(statearr_36646[(10)] = inst_36622);

return statearr_36646;
})();
var statearr_36647_38075 = state_36633__$1;
(statearr_36647_38075[(2)] = null);

(statearr_36647_38075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (9))){
var inst_36612 = (state_36633[(8)]);
var state_36633__$1 = state_36633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36633__$1,(11),out,inst_36612);
} else {
if((state_val_36634 === (5))){
var inst_36609 = (state_36633[(7)]);
var inst_36612 = (state_36633[(8)]);
var inst_36616 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36612,inst_36609);
var state_36633__$1 = state_36633;
if(inst_36616){
var statearr_36650_38080 = state_36633__$1;
(statearr_36650_38080[(1)] = (8));

} else {
var statearr_36651_38081 = state_36633__$1;
(statearr_36651_38081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (10))){
var inst_36625 = (state_36633[(2)]);
var state_36633__$1 = state_36633;
var statearr_36652_38082 = state_36633__$1;
(statearr_36652_38082[(2)] = inst_36625);

(statearr_36652_38082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (8))){
var inst_36609 = (state_36633[(7)]);
var tmp36649 = inst_36609;
var inst_36609__$1 = tmp36649;
var state_36633__$1 = (function (){var statearr_36654 = state_36633;
(statearr_36654[(7)] = inst_36609__$1);

return statearr_36654;
})();
var statearr_36655_38084 = state_36633__$1;
(statearr_36655_38084[(2)] = null);

(statearr_36655_38084[(1)] = (2));


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
var statearr_36657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36657[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36657[(1)] = (1));

return statearr_36657;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36633){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36633);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36658){if((e36658 instanceof Object)){
var ex__34210__auto__ = e36658;
var statearr_36659_38089 = state_36633;
(statearr_36659_38089[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38090 = state_36633;
state_36633 = G__38090;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36661 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36661[(6)] = c__34274__auto___38064);

return statearr_36661;
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
var G__36664 = arguments.length;
switch (G__36664) {
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
var c__34274__auto___38097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36705){
var state_val_36706 = (state_36705[(1)]);
if((state_val_36706 === (7))){
var inst_36701 = (state_36705[(2)]);
var state_36705__$1 = state_36705;
var statearr_36708_38098 = state_36705__$1;
(statearr_36708_38098[(2)] = inst_36701);

(statearr_36708_38098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36706 === (1))){
var inst_36667 = (new Array(n));
var inst_36668 = inst_36667;
var inst_36669 = (0);
var state_36705__$1 = (function (){var statearr_36709 = state_36705;
(statearr_36709[(7)] = inst_36669);

(statearr_36709[(8)] = inst_36668);

return statearr_36709;
})();
var statearr_36710_38099 = state_36705__$1;
(statearr_36710_38099[(2)] = null);

(statearr_36710_38099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36706 === (4))){
var inst_36672 = (state_36705[(9)]);
var inst_36672__$1 = (state_36705[(2)]);
var inst_36673 = (inst_36672__$1 == null);
var inst_36674 = cljs.core.not(inst_36673);
var state_36705__$1 = (function (){var statearr_36712 = state_36705;
(statearr_36712[(9)] = inst_36672__$1);

return statearr_36712;
})();
if(inst_36674){
var statearr_36713_38101 = state_36705__$1;
(statearr_36713_38101[(1)] = (5));

} else {
var statearr_36714_38102 = state_36705__$1;
(statearr_36714_38102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36706 === (15))){
var inst_36694 = (state_36705[(2)]);
var state_36705__$1 = state_36705;
var statearr_36716_38104 = state_36705__$1;
(statearr_36716_38104[(2)] = inst_36694);

(statearr_36716_38104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36706 === (13))){
var state_36705__$1 = state_36705;
var statearr_36717_38106 = state_36705__$1;
(statearr_36717_38106[(2)] = null);

(statearr_36717_38106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36706 === (6))){
var inst_36669 = (state_36705[(7)]);
var inst_36690 = (inst_36669 > (0));
var state_36705__$1 = state_36705;
if(cljs.core.truth_(inst_36690)){
var statearr_36718_38107 = state_36705__$1;
(statearr_36718_38107[(1)] = (12));

} else {
var statearr_36719_38108 = state_36705__$1;
(statearr_36719_38108[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36706 === (3))){
var inst_36703 = (state_36705[(2)]);
var state_36705__$1 = state_36705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36705__$1,inst_36703);
} else {
if((state_val_36706 === (12))){
var inst_36668 = (state_36705[(8)]);
var inst_36692 = cljs.core.vec(inst_36668);
var state_36705__$1 = state_36705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36705__$1,(15),out,inst_36692);
} else {
if((state_val_36706 === (2))){
var state_36705__$1 = state_36705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36705__$1,(4),ch);
} else {
if((state_val_36706 === (11))){
var inst_36684 = (state_36705[(2)]);
var inst_36685 = (new Array(n));
var inst_36668 = inst_36685;
var inst_36669 = (0);
var state_36705__$1 = (function (){var statearr_36722 = state_36705;
(statearr_36722[(7)] = inst_36669);

(statearr_36722[(10)] = inst_36684);

(statearr_36722[(8)] = inst_36668);

return statearr_36722;
})();
var statearr_36723_38111 = state_36705__$1;
(statearr_36723_38111[(2)] = null);

(statearr_36723_38111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36706 === (9))){
var inst_36668 = (state_36705[(8)]);
var inst_36682 = cljs.core.vec(inst_36668);
var state_36705__$1 = state_36705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36705__$1,(11),out,inst_36682);
} else {
if((state_val_36706 === (5))){
var inst_36669 = (state_36705[(7)]);
var inst_36668 = (state_36705[(8)]);
var inst_36677 = (state_36705[(11)]);
var inst_36672 = (state_36705[(9)]);
var inst_36676 = (inst_36668[inst_36669] = inst_36672);
var inst_36677__$1 = (inst_36669 + (1));
var inst_36678 = (inst_36677__$1 < n);
var state_36705__$1 = (function (){var statearr_36725 = state_36705;
(statearr_36725[(12)] = inst_36676);

(statearr_36725[(11)] = inst_36677__$1);

return statearr_36725;
})();
if(cljs.core.truth_(inst_36678)){
var statearr_36726_38114 = state_36705__$1;
(statearr_36726_38114[(1)] = (8));

} else {
var statearr_36727_38115 = state_36705__$1;
(statearr_36727_38115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36706 === (14))){
var inst_36698 = (state_36705[(2)]);
var inst_36699 = cljs.core.async.close_BANG_(out);
var state_36705__$1 = (function (){var statearr_36730 = state_36705;
(statearr_36730[(13)] = inst_36698);

return statearr_36730;
})();
var statearr_36731_38117 = state_36705__$1;
(statearr_36731_38117[(2)] = inst_36699);

(statearr_36731_38117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36706 === (10))){
var inst_36688 = (state_36705[(2)]);
var state_36705__$1 = state_36705;
var statearr_36732_38119 = state_36705__$1;
(statearr_36732_38119[(2)] = inst_36688);

(statearr_36732_38119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36706 === (8))){
var inst_36668 = (state_36705[(8)]);
var inst_36677 = (state_36705[(11)]);
var tmp36729 = inst_36668;
var inst_36668__$1 = tmp36729;
var inst_36669 = inst_36677;
var state_36705__$1 = (function (){var statearr_36734 = state_36705;
(statearr_36734[(7)] = inst_36669);

(statearr_36734[(8)] = inst_36668__$1);

return statearr_36734;
})();
var statearr_36735_38120 = state_36705__$1;
(statearr_36735_38120[(2)] = null);

(statearr_36735_38120[(1)] = (2));


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
var statearr_36737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36737[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36737[(1)] = (1));

return statearr_36737;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36705){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36705);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36742){if((e36742 instanceof Object)){
var ex__34210__auto__ = e36742;
var statearr_36743_38122 = state_36705;
(statearr_36743_38122[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38124 = state_36705;
state_36705 = G__38124;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36744 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36744[(6)] = c__34274__auto___38097);

return statearr_36744;
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
var G__36748 = arguments.length;
switch (G__36748) {
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
var c__34274__auto___38128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36793){
var state_val_36794 = (state_36793[(1)]);
if((state_val_36794 === (7))){
var inst_36789 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
var statearr_36796_38131 = state_36793__$1;
(statearr_36796_38131[(2)] = inst_36789);

(statearr_36796_38131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (1))){
var inst_36750 = [];
var inst_36751 = inst_36750;
var inst_36752 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36793__$1 = (function (){var statearr_36797 = state_36793;
(statearr_36797[(7)] = inst_36751);

(statearr_36797[(8)] = inst_36752);

return statearr_36797;
})();
var statearr_36798_38132 = state_36793__$1;
(statearr_36798_38132[(2)] = null);

(statearr_36798_38132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (4))){
var inst_36755 = (state_36793[(9)]);
var inst_36755__$1 = (state_36793[(2)]);
var inst_36757 = (inst_36755__$1 == null);
var inst_36758 = cljs.core.not(inst_36757);
var state_36793__$1 = (function (){var statearr_36800 = state_36793;
(statearr_36800[(9)] = inst_36755__$1);

return statearr_36800;
})();
if(inst_36758){
var statearr_36801_38135 = state_36793__$1;
(statearr_36801_38135[(1)] = (5));

} else {
var statearr_36802_38136 = state_36793__$1;
(statearr_36802_38136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (15))){
var inst_36783 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
var statearr_36804_38138 = state_36793__$1;
(statearr_36804_38138[(2)] = inst_36783);

(statearr_36804_38138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (13))){
var state_36793__$1 = state_36793;
var statearr_36805_38139 = state_36793__$1;
(statearr_36805_38139[(2)] = null);

(statearr_36805_38139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (6))){
var inst_36751 = (state_36793[(7)]);
var inst_36777 = inst_36751.length;
var inst_36778 = (inst_36777 > (0));
var state_36793__$1 = state_36793;
if(cljs.core.truth_(inst_36778)){
var statearr_36807_38140 = state_36793__$1;
(statearr_36807_38140[(1)] = (12));

} else {
var statearr_36808_38141 = state_36793__$1;
(statearr_36808_38141[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (3))){
var inst_36791 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36793__$1,inst_36791);
} else {
if((state_val_36794 === (12))){
var inst_36751 = (state_36793[(7)]);
var inst_36781 = cljs.core.vec(inst_36751);
var state_36793__$1 = state_36793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36793__$1,(15),out,inst_36781);
} else {
if((state_val_36794 === (2))){
var state_36793__$1 = state_36793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36793__$1,(4),ch);
} else {
if((state_val_36794 === (11))){
var inst_36755 = (state_36793[(9)]);
var inst_36760 = (state_36793[(10)]);
var inst_36770 = (state_36793[(2)]);
var inst_36771 = [];
var inst_36772 = inst_36771.push(inst_36755);
var inst_36751 = inst_36771;
var inst_36752 = inst_36760;
var state_36793__$1 = (function (){var statearr_36810 = state_36793;
(statearr_36810[(11)] = inst_36772);

(statearr_36810[(7)] = inst_36751);

(statearr_36810[(12)] = inst_36770);

(statearr_36810[(8)] = inst_36752);

return statearr_36810;
})();
var statearr_36811_38145 = state_36793__$1;
(statearr_36811_38145[(2)] = null);

(statearr_36811_38145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (9))){
var inst_36751 = (state_36793[(7)]);
var inst_36768 = cljs.core.vec(inst_36751);
var state_36793__$1 = state_36793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36793__$1,(11),out,inst_36768);
} else {
if((state_val_36794 === (5))){
var inst_36755 = (state_36793[(9)]);
var inst_36760 = (state_36793[(10)]);
var inst_36752 = (state_36793[(8)]);
var inst_36760__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36755) : f.call(null,inst_36755));
var inst_36761 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36760__$1,inst_36752);
var inst_36762 = cljs.core.keyword_identical_QMARK_(inst_36752,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36763 = ((inst_36761) || (inst_36762));
var state_36793__$1 = (function (){var statearr_36813 = state_36793;
(statearr_36813[(10)] = inst_36760__$1);

return statearr_36813;
})();
if(cljs.core.truth_(inst_36763)){
var statearr_36815_38149 = state_36793__$1;
(statearr_36815_38149[(1)] = (8));

} else {
var statearr_36816_38150 = state_36793__$1;
(statearr_36816_38150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (14))){
var inst_36786 = (state_36793[(2)]);
var inst_36787 = cljs.core.async.close_BANG_(out);
var state_36793__$1 = (function (){var statearr_36818 = state_36793;
(statearr_36818[(13)] = inst_36786);

return statearr_36818;
})();
var statearr_36819_38151 = state_36793__$1;
(statearr_36819_38151[(2)] = inst_36787);

(statearr_36819_38151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (10))){
var inst_36775 = (state_36793[(2)]);
var state_36793__$1 = state_36793;
var statearr_36820_38154 = state_36793__$1;
(statearr_36820_38154[(2)] = inst_36775);

(statearr_36820_38154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36794 === (8))){
var inst_36751 = (state_36793[(7)]);
var inst_36755 = (state_36793[(9)]);
var inst_36760 = (state_36793[(10)]);
var inst_36765 = inst_36751.push(inst_36755);
var tmp36817 = inst_36751;
var inst_36751__$1 = tmp36817;
var inst_36752 = inst_36760;
var state_36793__$1 = (function (){var statearr_36822 = state_36793;
(statearr_36822[(14)] = inst_36765);

(statearr_36822[(7)] = inst_36751__$1);

(statearr_36822[(8)] = inst_36752);

return statearr_36822;
})();
var statearr_36823_38156 = state_36793__$1;
(statearr_36823_38156[(2)] = null);

(statearr_36823_38156[(1)] = (2));


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
var statearr_36825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36825[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36825[(1)] = (1));

return statearr_36825;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36793){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36793);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36826){if((e36826 instanceof Object)){
var ex__34210__auto__ = e36826;
var statearr_36827_38159 = state_36793;
(statearr_36827_38159[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38161 = state_36793;
state_36793 = G__38161;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36829 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36829[(6)] = c__34274__auto___38128);

return statearr_36829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
