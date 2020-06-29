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
var val_36847 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36847) : fn1.call(null,val_36847));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36847) : fn1.call(null,val_36847));
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
var n__4666__auto___36853 = n;
var x_36854 = (0);
while(true){
if((x_36854 < n__4666__auto___36853)){
(a[x_36854] = x_36854);

var G__36855 = (x_36854 + (1));
x_36854 = G__36855;
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
var G__34373 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34362_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34373) : fret.call(null,G__34373));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34366_SHARP_){
var G__34374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34366_SHARP_,port], null);
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
var G__36863 = (i + (1));
i = G__36863;
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
var len__4789__auto___36866 = arguments.length;
var i__4790__auto___36867 = (0);
while(true){
if((i__4790__auto___36867 < len__4789__auto___36866)){
args__4795__auto__.push((arguments[i__4790__auto___36867]));

var G__36868 = (i__4790__auto___36867 + (1));
i__4790__auto___36867 = G__36868;
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
var c__34274__auto___36873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36874 = state_34423__$1;
(statearr_34425_36874[(2)] = inst_34419);

(statearr_34425_36874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36876 = state_34423__$1;
(statearr_34426_36876[(2)] = null);

(statearr_34426_36876[(1)] = (2));


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
var statearr_34428_36877 = state_34423__$1;
(statearr_34428_36877[(1)] = (5));

} else {
var statearr_34429_36879 = state_34423__$1;
(statearr_34429_36879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36880 = state_34423__$1;
(statearr_34430_36880[(2)] = null);

(statearr_34430_36880[(1)] = (14));


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
var statearr_34431_36882 = state_34423__$1;
(statearr_34431_36882[(2)] = null);

(statearr_34431_36882[(1)] = (2));


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
var statearr_34432_36883 = state_34423__$1;
(statearr_34432_36883[(1)] = (12));

} else {
var statearr_34433_36884 = state_34423__$1;
(statearr_34433_36884[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34435_36886 = state_34423__$1;
(statearr_34435_36886[(2)] = null);

(statearr_34435_36886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34439_36887 = state_34423__$1;
(statearr_34439_36887[(1)] = (8));

} else {
var statearr_34440_36888 = state_34423__$1;
(statearr_34440_36888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34417 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34441_36890 = state_34423__$1;
(statearr_34441_36890[(2)] = inst_34417);

(statearr_34441_36890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34409 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34442_36891 = state_34423__$1;
(statearr_34442_36891[(2)] = inst_34409);

(statearr_34442_36891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34406 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34443_36892 = state_34423__$1;
(statearr_34443_36892[(2)] = inst_34406);

(statearr_34443_36892[(1)] = (10));


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
var statearr_34447_36894 = state_34423;
(statearr_34447_36894[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34446;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36896 = state_34423;
state_34423 = G__36896;
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
(statearr_34448[(6)] = c__34274__auto___36873);

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
var process = (function (p__34451){
var vec__34452 = p__34451;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34452,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34452,(1),null);
var job = vec__34452;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34274__auto___36899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34459){
var state_val_34460 = (state_34459[(1)]);
if((state_val_34460 === (1))){
var state_34459__$1 = state_34459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34459__$1,(2),res,v);
} else {
if((state_val_34460 === (2))){
var inst_34456 = (state_34459[(2)]);
var inst_34457 = cljs.core.async.close_BANG_(res);
var state_34459__$1 = (function (){var statearr_34462 = state_34459;
(statearr_34462[(7)] = inst_34456);

return statearr_34462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34459__$1,inst_34457);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34463 = [null,null,null,null,null,null,null,null];
(statearr_34463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34463[(1)] = (1));

return statearr_34463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34459){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34459);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34466){if((e34466 instanceof Object)){
var ex__34210__auto__ = e34466;
var statearr_34467_36901 = state_34459;
(statearr_34467_36901[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34466;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36903 = state_34459;
state_34459 = G__36903;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34459){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34471 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34471[(6)] = c__34274__auto___36899);

return statearr_34471;
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
var n__4666__auto___36905 = n;
var __36906 = (0);
while(true){
if((__36906 < n__4666__auto___36905)){
var G__34479_36907 = type;
var G__34479_36908__$1 = (((G__34479_36907 instanceof cljs.core.Keyword))?G__34479_36907.fqn:null);
switch (G__34479_36908__$1) {
case "compute":
var c__34274__auto___36911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36906,c__34274__auto___36911,G__34479_36907,G__34479_36908__$1,n__4666__auto___36905,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36906,c__34274__auto___36911,G__34479_36907,G__34479_36908__$1,n__4666__auto___36905,jobs,results,process,async){
return (function (state_34492){
var state_val_34493 = (state_34492[(1)]);
if((state_val_34493 === (1))){
var state_34492__$1 = state_34492;
var statearr_34494_36912 = state_34492__$1;
(statearr_34494_36912[(2)] = null);

(statearr_34494_36912[(1)] = (2));


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
var statearr_34499_36914 = state_34492__$1;
(statearr_34499_36914[(1)] = (5));

} else {
var statearr_34500_36915 = state_34492__$1;
(statearr_34500_36915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (5))){
var state_34492__$1 = state_34492;
var statearr_34504_36917 = state_34492__$1;
(statearr_34504_36917[(2)] = null);

(statearr_34504_36917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (6))){
var state_34492__$1 = state_34492;
var statearr_34505_36918 = state_34492__$1;
(statearr_34505_36918[(2)] = null);

(statearr_34505_36918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (7))){
var inst_34488 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
var statearr_34506_36919 = state_34492__$1;
(statearr_34506_36919[(2)] = inst_34488);

(statearr_34506_36919[(1)] = (3));


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
});})(__36906,c__34274__auto___36911,G__34479_36907,G__34479_36908__$1,n__4666__auto___36905,jobs,results,process,async))
;
return ((function (__36906,switch__34206__auto__,c__34274__auto___36911,G__34479_36907,G__34479_36908__$1,n__4666__auto___36905,jobs,results,process,async){
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
var statearr_34509_36922 = state_34492;
(statearr_34509_36922[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36923 = state_34492;
state_34492 = G__36923;
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
;})(__36906,switch__34206__auto__,c__34274__auto___36911,G__34479_36907,G__34479_36908__$1,n__4666__auto___36905,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34510 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34510[(6)] = c__34274__auto___36911);

return statearr_34510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36906,c__34274__auto___36911,G__34479_36907,G__34479_36908__$1,n__4666__auto___36905,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36906,c__34274__auto___36925,G__34479_36907,G__34479_36908__$1,n__4666__auto___36905,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36906,c__34274__auto___36925,G__34479_36907,G__34479_36908__$1,n__4666__auto___36905,jobs,results,process,async){
return (function (state_34523){
var state_val_34524 = (state_34523[(1)]);
if((state_val_34524 === (1))){
var state_34523__$1 = state_34523;
var statearr_34528_36926 = state_34523__$1;
(statearr_34528_36926[(2)] = null);

(statearr_34528_36926[(1)] = (2));


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
var statearr_34529_36928 = state_34523__$1;
(statearr_34529_36928[(1)] = (5));

} else {
var statearr_34530_36930 = state_34523__$1;
(statearr_34530_36930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (5))){
var state_34523__$1 = state_34523;
var statearr_34531_36931 = state_34523__$1;
(statearr_34531_36931[(2)] = null);

(statearr_34531_36931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (6))){
var state_34523__$1 = state_34523;
var statearr_34532_36932 = state_34523__$1;
(statearr_34532_36932[(2)] = null);

(statearr_34532_36932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (7))){
var inst_34519 = (state_34523[(2)]);
var state_34523__$1 = state_34523;
var statearr_34533_36934 = state_34523__$1;
(statearr_34533_36934[(2)] = inst_34519);

(statearr_34533_36934[(1)] = (3));


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
});})(__36906,c__34274__auto___36925,G__34479_36907,G__34479_36908__$1,n__4666__auto___36905,jobs,results,process,async))
;
return ((function (__36906,switch__34206__auto__,c__34274__auto___36925,G__34479_36907,G__34479_36908__$1,n__4666__auto___36905,jobs,results,process,async){
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
var statearr_34536_36936 = state_34523;
(statearr_34536_36936[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36937 = state_34523;
state_34523 = G__36937;
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
;})(__36906,switch__34206__auto__,c__34274__auto___36925,G__34479_36907,G__34479_36908__$1,n__4666__auto___36905,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34537 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34537[(6)] = c__34274__auto___36925);

return statearr_34537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36906,c__34274__auto___36925,G__34479_36907,G__34479_36908__$1,n__4666__auto___36905,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34479_36908__$1)].join('')));

}

var G__36939 = (__36906 + (1));
__36906 = G__36939;
continue;
} else {
}
break;
}

var c__34274__auto___36940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34555 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34561_36942 = state_34559__$1;
(statearr_34561_36942[(2)] = inst_34555);

(statearr_34561_36942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (1))){
var state_34559__$1 = state_34559;
var statearr_34562_36943 = state_34559__$1;
(statearr_34562_36943[(2)] = null);

(statearr_34562_36943[(1)] = (2));


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
var statearr_34564_36945 = state_34559__$1;
(statearr_34564_36945[(1)] = (5));

} else {
var statearr_34565_36946 = state_34559__$1;
(statearr_34565_36946[(1)] = (6));

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
var statearr_34568_36948 = state_34559__$1;
(statearr_34568_36948[(2)] = null);

(statearr_34568_36948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34543 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_36950 = state_34559__$1;
(statearr_34569_36950[(2)] = inst_34543);

(statearr_34569_36950[(1)] = (7));


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
var statearr_34573_36952 = state_34559;
(statearr_34573_36952[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36954 = state_34559;
state_34559 = G__36954;
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
(statearr_34574[(6)] = c__34274__auto___36940);

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
var statearr_34614_36956 = state_34612__$1;
(statearr_34614_36956[(2)] = inst_34608);

(statearr_34614_36956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36957 = state_34612__$1;
(statearr_34615_36957[(2)] = null);

(statearr_34615_36957[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36959 = state_34612__$1;
(statearr_34616_36959[(2)] = null);

(statearr_34616_36959[(1)] = (2));


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
var statearr_34618_36960 = state_34612__$1;
(statearr_34618_36960[(1)] = (5));

} else {
var statearr_34619_36961 = state_34612__$1;
(statearr_34619_36961[(1)] = (6));

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
var statearr_34620_36963 = state_34612__$1;
(statearr_34620_36963[(2)] = inst_34603);

(statearr_34620_36963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36964 = state_34612__$1;
(statearr_34622_36964[(2)] = null);

(statearr_34622_36964[(1)] = (2));


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
var statearr_34623_36966 = state_34612__$1;
(statearr_34623_36966[(1)] = (19));

} else {
var statearr_34624_36967 = state_34612__$1;
(statearr_34624_36967[(1)] = (20));

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
var statearr_34625_36969 = state_34612__$1;
(statearr_34625_36969[(2)] = null);

(statearr_34625_36969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36971 = state_34612__$1;
(statearr_34627_36971[(2)] = null);

(statearr_34627_36971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36972 = state_34612__$1;
(statearr_34628_36972[(2)] = null);

(statearr_34628_36972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36973 = state_34612__$1;
(statearr_34629_36973[(1)] = (8));

} else {
var statearr_34630_36974 = state_34612__$1;
(statearr_34630_36974[(1)] = (9));

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
var statearr_34632_36975 = state_34612__$1;
(statearr_34632_36975[(1)] = (15));

} else {
var statearr_34633_36976 = state_34612__$1;
(statearr_34633_36976[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34637_36978 = state_34612__$1;
(statearr_34637_36978[(2)] = false);

(statearr_34637_36978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34638_36985 = state_34612__$1;
(statearr_34638_36985[(2)] = inst_34584);

(statearr_34638_36985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34639_36986 = state_34612__$1;
(statearr_34639_36986[(2)] = inst_34595);

(statearr_34639_36986[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34640_36987 = state_34612__$1;
(statearr_34640_36987[(2)] = inst_34581);

(statearr_34640_36987[(1)] = (10));


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
var statearr_34644 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34644[(1)] = (1));

return statearr_34644;
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
}catch (e34645){if((e34645 instanceof Object)){
var ex__34210__auto__ = e34645;
var statearr_34646_36989 = state_34612;
(statearr_34646_36989[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34645;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36990 = state_34612;
state_34612 = G__36990;
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
var state__34276__auto__ = (function (){var statearr_34649 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34649[(6)] = c__34274__auto__);

return statearr_34649;
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
var G__34652 = arguments.length;
switch (G__34652) {
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
var G__34656 = arguments.length;
switch (G__34656) {
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
var G__34660 = arguments.length;
switch (G__34660) {
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
var c__34274__auto___37005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34691){
var state_val_34692 = (state_34691[(1)]);
if((state_val_34692 === (7))){
var inst_34687 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
var statearr_34693_37006 = state_34691__$1;
(statearr_34693_37006[(2)] = inst_34687);

(statearr_34693_37006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (1))){
var state_34691__$1 = state_34691;
var statearr_34694_37007 = state_34691__$1;
(statearr_34694_37007[(2)] = null);

(statearr_34694_37007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (4))){
var inst_34665 = (state_34691[(7)]);
var inst_34665__$1 = (state_34691[(2)]);
var inst_34666 = (inst_34665__$1 == null);
var state_34691__$1 = (function (){var statearr_34695 = state_34691;
(statearr_34695[(7)] = inst_34665__$1);

return statearr_34695;
})();
if(cljs.core.truth_(inst_34666)){
var statearr_34697_37008 = state_34691__$1;
(statearr_34697_37008[(1)] = (5));

} else {
var statearr_34698_37011 = state_34691__$1;
(statearr_34698_37011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (13))){
var state_34691__$1 = state_34691;
var statearr_34699_37012 = state_34691__$1;
(statearr_34699_37012[(2)] = null);

(statearr_34699_37012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (6))){
var inst_34665 = (state_34691[(7)]);
var inst_34674 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34665) : p.call(null,inst_34665));
var state_34691__$1 = state_34691;
if(cljs.core.truth_(inst_34674)){
var statearr_34700_37016 = state_34691__$1;
(statearr_34700_37016[(1)] = (9));

} else {
var statearr_34701_37018 = state_34691__$1;
(statearr_34701_37018[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (3))){
var inst_34689 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34691__$1,inst_34689);
} else {
if((state_val_34692 === (12))){
var state_34691__$1 = state_34691;
var statearr_34702_37019 = state_34691__$1;
(statearr_34702_37019[(2)] = null);

(statearr_34702_37019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (2))){
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34691__$1,(4),ch);
} else {
if((state_val_34692 === (11))){
var inst_34665 = (state_34691[(7)]);
var inst_34678 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34691__$1,(8),inst_34678,inst_34665);
} else {
if((state_val_34692 === (9))){
var state_34691__$1 = state_34691;
var statearr_34703_37020 = state_34691__$1;
(statearr_34703_37020[(2)] = tc);

(statearr_34703_37020[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (5))){
var inst_34669 = cljs.core.async.close_BANG_(tc);
var inst_34672 = cljs.core.async.close_BANG_(fc);
var state_34691__$1 = (function (){var statearr_34707 = state_34691;
(statearr_34707[(8)] = inst_34669);

return statearr_34707;
})();
var statearr_34708_37024 = state_34691__$1;
(statearr_34708_37024[(2)] = inst_34672);

(statearr_34708_37024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (14))){
var inst_34685 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
var statearr_34709_37026 = state_34691__$1;
(statearr_34709_37026[(2)] = inst_34685);

(statearr_34709_37026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (10))){
var state_34691__$1 = state_34691;
var statearr_34710_37027 = state_34691__$1;
(statearr_34710_37027[(2)] = fc);

(statearr_34710_37027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (8))){
var inst_34680 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
if(cljs.core.truth_(inst_34680)){
var statearr_34711_37033 = state_34691__$1;
(statearr_34711_37033[(1)] = (12));

} else {
var statearr_34715_37034 = state_34691__$1;
(statearr_34715_37034[(1)] = (13));

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
var statearr_34716 = [null,null,null,null,null,null,null,null,null];
(statearr_34716[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34716[(1)] = (1));

return statearr_34716;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34691){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34691);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34717){if((e34717 instanceof Object)){
var ex__34210__auto__ = e34717;
var statearr_34718_37039 = state_34691;
(statearr_34718_37039[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34717;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37040 = state_34691;
state_34691 = G__37040;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34719 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34719[(6)] = c__34274__auto___37005);

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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34743){
var state_val_34744 = (state_34743[(1)]);
if((state_val_34744 === (7))){
var inst_34739 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34745_37053 = state_34743__$1;
(statearr_34745_37053[(2)] = inst_34739);

(statearr_34745_37053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (1))){
var inst_34723 = init;
var state_34743__$1 = (function (){var statearr_34746 = state_34743;
(statearr_34746[(7)] = inst_34723);

return statearr_34746;
})();
var statearr_34747_37055 = state_34743__$1;
(statearr_34747_37055[(2)] = null);

(statearr_34747_37055[(1)] = (2));


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
var statearr_34749_37058 = state_34743__$1;
(statearr_34749_37058[(1)] = (5));

} else {
var statearr_34750_37059 = state_34743__$1;
(statearr_34750_37059[(1)] = (6));

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
var statearr_34752_37069 = state_34743__$1;
(statearr_34752_37069[(1)] = (8));

} else {
var statearr_34753_37070 = state_34743__$1;
(statearr_34753_37070[(1)] = (9));

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
var state_34743__$1 = (function (){var statearr_34754 = state_34743;
(statearr_34754[(7)] = inst_34723);

return statearr_34754;
})();
var statearr_34755_37086 = state_34743__$1;
(statearr_34755_37086[(2)] = null);

(statearr_34755_37086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (5))){
var inst_34723 = (state_34743[(7)]);
var state_34743__$1 = state_34743;
var statearr_34756_37089 = state_34743__$1;
(statearr_34756_37089[(2)] = inst_34723);

(statearr_34756_37089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (10))){
var inst_34737 = (state_34743[(2)]);
var state_34743__$1 = state_34743;
var statearr_34757_37092 = state_34743__$1;
(statearr_34757_37092[(2)] = inst_34737);

(statearr_34757_37092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34744 === (8))){
var inst_34730 = (state_34743[(9)]);
var inst_34733 = cljs.core.deref(inst_34730);
var state_34743__$1 = state_34743;
var statearr_34758_37093 = state_34743__$1;
(statearr_34758_37093[(2)] = inst_34733);

(statearr_34758_37093[(1)] = (10));


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
}catch (e34760){if((e34760 instanceof Object)){
var ex__34210__auto__ = e34760;
var statearr_34761_37103 = state_34743;
(statearr_34761_37103[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37104 = state_34743;
state_34743 = G__37104;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34774){
var state_val_34775 = (state_34774[(1)]);
if((state_val_34775 === (1))){
var inst_34766 = cljs.core.async.reduce(f__$1,init,ch);
var state_34774__$1 = state_34774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34774__$1,(2),inst_34766);
} else {
if((state_val_34775 === (2))){
var inst_34768 = (state_34774[(2)]);
var inst_34772 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34768) : f__$1.call(null,inst_34768));
var state_34774__$1 = state_34774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34774__$1,inst_34772);
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
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34774){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34774);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34778){if((e34778 instanceof Object)){
var ex__34210__auto__ = e34778;
var statearr_34779_37134 = state_34774;
(statearr_34779_37134[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34778;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37138 = state_34774;
state_34774 = G__37138;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34774){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34774);
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
var G__34785 = arguments.length;
switch (G__34785) {
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
var statearr_34818_37147 = state_34813__$1;
(statearr_34818_37147[(2)] = inst_34795);

(statearr_34818_37147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (1))){
var inst_34789 = cljs.core.seq(coll);
var inst_34790 = inst_34789;
var state_34813__$1 = (function (){var statearr_34819 = state_34813;
(statearr_34819[(7)] = inst_34790);

return statearr_34819;
})();
var statearr_34820_37149 = state_34813__$1;
(statearr_34820_37149[(2)] = null);

(statearr_34820_37149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (4))){
var inst_34790 = (state_34813[(7)]);
var inst_34793 = cljs.core.first(inst_34790);
var state_34813__$1 = state_34813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34813__$1,(7),ch,inst_34793);
} else {
if((state_val_34814 === (13))){
var inst_34807 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
var statearr_34824_37151 = state_34813__$1;
(statearr_34824_37151[(2)] = inst_34807);

(statearr_34824_37151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (6))){
var inst_34798 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
if(cljs.core.truth_(inst_34798)){
var statearr_34825_37159 = state_34813__$1;
(statearr_34825_37159[(1)] = (8));

} else {
var statearr_34826_37162 = state_34813__$1;
(statearr_34826_37162[(1)] = (9));

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
var statearr_34827_37164 = state_34813__$1;
(statearr_34827_37164[(2)] = null);

(statearr_34827_37164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (2))){
var inst_34790 = (state_34813[(7)]);
var state_34813__$1 = state_34813;
if(cljs.core.truth_(inst_34790)){
var statearr_34828_37165 = state_34813__$1;
(statearr_34828_37165[(1)] = (4));

} else {
var statearr_34829_37166 = state_34813__$1;
(statearr_34829_37166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (11))){
var inst_34804 = cljs.core.async.close_BANG_(ch);
var state_34813__$1 = state_34813;
var statearr_34830_37167 = state_34813__$1;
(statearr_34830_37167[(2)] = inst_34804);

(statearr_34830_37167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (9))){
var state_34813__$1 = state_34813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34831_37168 = state_34813__$1;
(statearr_34831_37168[(1)] = (11));

} else {
var statearr_34832_37169 = state_34813__$1;
(statearr_34832_37169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (5))){
var inst_34790 = (state_34813[(7)]);
var state_34813__$1 = state_34813;
var statearr_34833_37176 = state_34813__$1;
(statearr_34833_37176[(2)] = inst_34790);

(statearr_34833_37176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (10))){
var inst_34809 = (state_34813[(2)]);
var state_34813__$1 = state_34813;
var statearr_34834_37177 = state_34813__$1;
(statearr_34834_37177[(2)] = inst_34809);

(statearr_34834_37177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34814 === (8))){
var inst_34790 = (state_34813[(7)]);
var inst_34800 = cljs.core.next(inst_34790);
var inst_34790__$1 = inst_34800;
var state_34813__$1 = (function (){var statearr_34835 = state_34813;
(statearr_34835[(7)] = inst_34790__$1);

return statearr_34835;
})();
var statearr_34836_37196 = state_34813__$1;
(statearr_34836_37196[(2)] = null);

(statearr_34836_37196[(1)] = (2));


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
var statearr_34839_37204 = state_34813;
(statearr_34839_37204[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37207 = state_34813;
state_34813 = G__37207;
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
var c__34274__auto___37246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34984){
var state_val_34985 = (state_34984[(1)]);
if((state_val_34985 === (7))){
var inst_34980 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_34986_37250 = state_34984__$1;
(statearr_34986_37250[(2)] = inst_34980);

(statearr_34986_37250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (20))){
var inst_34880 = (state_34984[(7)]);
var inst_34893 = cljs.core.first(inst_34880);
var inst_34894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34893,(0),null);
var inst_34895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34893,(1),null);
var state_34984__$1 = (function (){var statearr_34987 = state_34984;
(statearr_34987[(8)] = inst_34894);

return statearr_34987;
})();
if(cljs.core.truth_(inst_34895)){
var statearr_34988_37255 = state_34984__$1;
(statearr_34988_37255[(1)] = (22));

} else {
var statearr_34989_37257 = state_34984__$1;
(statearr_34989_37257[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (27))){
var inst_34927 = (state_34984[(9)]);
var inst_34846 = (state_34984[(10)]);
var inst_34925 = (state_34984[(11)]);
var inst_34932 = (state_34984[(12)]);
var inst_34932__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34925,inst_34927);
var inst_34933 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34932__$1,inst_34846,done);
var state_34984__$1 = (function (){var statearr_34992 = state_34984;
(statearr_34992[(12)] = inst_34932__$1);

return statearr_34992;
})();
if(cljs.core.truth_(inst_34933)){
var statearr_34993_37262 = state_34984__$1;
(statearr_34993_37262[(1)] = (30));

} else {
var statearr_34994_37263 = state_34984__$1;
(statearr_34994_37263[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (1))){
var state_34984__$1 = state_34984;
var statearr_34997_37265 = state_34984__$1;
(statearr_34997_37265[(2)] = null);

(statearr_34997_37265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (24))){
var inst_34880 = (state_34984[(7)]);
var inst_34901 = (state_34984[(2)]);
var inst_34902 = cljs.core.next(inst_34880);
var inst_34855 = inst_34902;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35000 = state_34984;
(statearr_35000[(13)] = inst_34857);

(statearr_35000[(14)] = inst_34856);

(statearr_35000[(15)] = inst_34901);

(statearr_35000[(16)] = inst_34858);

(statearr_35000[(17)] = inst_34855);

return statearr_35000;
})();
var statearr_35001_37273 = state_34984__$1;
(statearr_35001_37273[(2)] = null);

(statearr_35001_37273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (39))){
var state_34984__$1 = state_34984;
var statearr_35005_37274 = state_34984__$1;
(statearr_35005_37274[(2)] = null);

(statearr_35005_37274[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (4))){
var inst_34846 = (state_34984[(10)]);
var inst_34846__$1 = (state_34984[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34984__$1 = (function (){var statearr_35006 = state_34984;
(statearr_35006[(10)] = inst_34846__$1);

return statearr_35006;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_35007_37279 = state_34984__$1;
(statearr_35007_37279[(1)] = (5));

} else {
var statearr_35008_37281 = state_34984__$1;
(statearr_35008_37281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (15))){
var inst_34857 = (state_34984[(13)]);
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(16)]);
var inst_34855 = (state_34984[(17)]);
var inst_34875 = (state_34984[(2)]);
var inst_34876 = (inst_34858 + (1));
var tmp35002 = inst_34857;
var tmp35003 = inst_34856;
var tmp35004 = inst_34855;
var inst_34855__$1 = tmp35004;
var inst_34856__$1 = tmp35003;
var inst_34857__$1 = tmp35002;
var inst_34858__$1 = inst_34876;
var state_34984__$1 = (function (){var statearr_35010 = state_34984;
(statearr_35010[(13)] = inst_34857__$1);

(statearr_35010[(14)] = inst_34856__$1);

(statearr_35010[(16)] = inst_34858__$1);

(statearr_35010[(18)] = inst_34875);

(statearr_35010[(17)] = inst_34855__$1);

return statearr_35010;
})();
var statearr_35012_37289 = state_34984__$1;
(statearr_35012_37289[(2)] = null);

(statearr_35012_37289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (21))){
var inst_34905 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35018_37290 = state_34984__$1;
(statearr_35018_37290[(2)] = inst_34905);

(statearr_35018_37290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (31))){
var inst_34932 = (state_34984[(12)]);
var inst_34936 = done(null);
var inst_34937 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34932);
var state_34984__$1 = (function (){var statearr_35021 = state_34984;
(statearr_35021[(19)] = inst_34936);

return statearr_35021;
})();
var statearr_35022_37291 = state_34984__$1;
(statearr_35022_37291[(2)] = inst_34937);

(statearr_35022_37291[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (32))){
var inst_34927 = (state_34984[(9)]);
var inst_34925 = (state_34984[(11)]);
var inst_34924 = (state_34984[(20)]);
var inst_34926 = (state_34984[(21)]);
var inst_34939 = (state_34984[(2)]);
var inst_34940 = (inst_34927 + (1));
var tmp35014 = inst_34925;
var tmp35015 = inst_34924;
var tmp35016 = inst_34926;
var inst_34924__$1 = tmp35015;
var inst_34925__$1 = tmp35014;
var inst_34926__$1 = tmp35016;
var inst_34927__$1 = inst_34940;
var state_34984__$1 = (function (){var statearr_35023 = state_34984;
(statearr_35023[(9)] = inst_34927__$1);

(statearr_35023[(11)] = inst_34925__$1);

(statearr_35023[(20)] = inst_34924__$1);

(statearr_35023[(21)] = inst_34926__$1);

(statearr_35023[(22)] = inst_34939);

return statearr_35023;
})();
var statearr_35024_37296 = state_34984__$1;
(statearr_35024_37296[(2)] = null);

(statearr_35024_37296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (40))){
var inst_34952 = (state_34984[(23)]);
var inst_34956 = done(null);
var inst_34957 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34952);
var state_34984__$1 = (function (){var statearr_35025 = state_34984;
(statearr_35025[(24)] = inst_34956);

return statearr_35025;
})();
var statearr_35026_37299 = state_34984__$1;
(statearr_35026_37299[(2)] = inst_34957);

(statearr_35026_37299[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (33))){
var inst_34943 = (state_34984[(25)]);
var inst_34945 = cljs.core.chunked_seq_QMARK_(inst_34943);
var state_34984__$1 = state_34984;
if(inst_34945){
var statearr_35027_37300 = state_34984__$1;
(statearr_35027_37300[(1)] = (36));

} else {
var statearr_35030_37301 = state_34984__$1;
(statearr_35030_37301[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (13))){
var inst_34869 = (state_34984[(26)]);
var inst_34872 = cljs.core.async.close_BANG_(inst_34869);
var state_34984__$1 = state_34984;
var statearr_35033_37302 = state_34984__$1;
(statearr_35033_37302[(2)] = inst_34872);

(statearr_35033_37302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (22))){
var inst_34894 = (state_34984[(8)]);
var inst_34898 = cljs.core.async.close_BANG_(inst_34894);
var state_34984__$1 = state_34984;
var statearr_35036_37306 = state_34984__$1;
(statearr_35036_37306[(2)] = inst_34898);

(statearr_35036_37306[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (36))){
var inst_34943 = (state_34984[(25)]);
var inst_34947 = cljs.core.chunk_first(inst_34943);
var inst_34948 = cljs.core.chunk_rest(inst_34943);
var inst_34949 = cljs.core.count(inst_34947);
var inst_34924 = inst_34948;
var inst_34925 = inst_34947;
var inst_34926 = inst_34949;
var inst_34927 = (0);
var state_34984__$1 = (function (){var statearr_35037 = state_34984;
(statearr_35037[(9)] = inst_34927);

(statearr_35037[(11)] = inst_34925);

(statearr_35037[(20)] = inst_34924);

(statearr_35037[(21)] = inst_34926);

return statearr_35037;
})();
var statearr_35038_37313 = state_34984__$1;
(statearr_35038_37313[(2)] = null);

(statearr_35038_37313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (41))){
var inst_34943 = (state_34984[(25)]);
var inst_34959 = (state_34984[(2)]);
var inst_34960 = cljs.core.next(inst_34943);
var inst_34924 = inst_34960;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34984__$1 = (function (){var statearr_35042 = state_34984;
(statearr_35042[(9)] = inst_34927);

(statearr_35042[(27)] = inst_34959);

(statearr_35042[(11)] = inst_34925);

(statearr_35042[(20)] = inst_34924);

(statearr_35042[(21)] = inst_34926);

return statearr_35042;
})();
var statearr_35044_37318 = state_34984__$1;
(statearr_35044_37318[(2)] = null);

(statearr_35044_37318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (43))){
var state_34984__$1 = state_34984;
var statearr_35045_37319 = state_34984__$1;
(statearr_35045_37319[(2)] = null);

(statearr_35045_37319[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (29))){
var inst_34968 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35061_37321 = state_34984__$1;
(statearr_35061_37321[(2)] = inst_34968);

(statearr_35061_37321[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (44))){
var inst_34977 = (state_34984[(2)]);
var state_34984__$1 = (function (){var statearr_35062 = state_34984;
(statearr_35062[(28)] = inst_34977);

return statearr_35062;
})();
var statearr_35063_37327 = state_34984__$1;
(statearr_35063_37327[(2)] = null);

(statearr_35063_37327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (6))){
var inst_34915 = (state_34984[(29)]);
var inst_34914 = cljs.core.deref(cs);
var inst_34915__$1 = cljs.core.keys(inst_34914);
var inst_34917 = cljs.core.count(inst_34915__$1);
var inst_34918 = cljs.core.reset_BANG_(dctr,inst_34917);
var inst_34923 = cljs.core.seq(inst_34915__$1);
var inst_34924 = inst_34923;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34984__$1 = (function (){var statearr_35068 = state_34984;
(statearr_35068[(9)] = inst_34927);

(statearr_35068[(30)] = inst_34918);

(statearr_35068[(11)] = inst_34925);

(statearr_35068[(20)] = inst_34924);

(statearr_35068[(21)] = inst_34926);

(statearr_35068[(29)] = inst_34915__$1);

return statearr_35068;
})();
var statearr_35069_37335 = state_34984__$1;
(statearr_35069_37335[(2)] = null);

(statearr_35069_37335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (28))){
var inst_34924 = (state_34984[(20)]);
var inst_34943 = (state_34984[(25)]);
var inst_34943__$1 = cljs.core.seq(inst_34924);
var state_34984__$1 = (function (){var statearr_35071 = state_34984;
(statearr_35071[(25)] = inst_34943__$1);

return statearr_35071;
})();
if(inst_34943__$1){
var statearr_35075_37340 = state_34984__$1;
(statearr_35075_37340[(1)] = (33));

} else {
var statearr_35077_37341 = state_34984__$1;
(statearr_35077_37341[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (25))){
var inst_34927 = (state_34984[(9)]);
var inst_34926 = (state_34984[(21)]);
var inst_34929 = (inst_34927 < inst_34926);
var inst_34930 = inst_34929;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34930)){
var statearr_35082_37347 = state_34984__$1;
(statearr_35082_37347[(1)] = (27));

} else {
var statearr_35084_37348 = state_34984__$1;
(statearr_35084_37348[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (34))){
var state_34984__$1 = state_34984;
var statearr_35087_37350 = state_34984__$1;
(statearr_35087_37350[(2)] = null);

(statearr_35087_37350[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (17))){
var state_34984__$1 = state_34984;
var statearr_35088_37352 = state_34984__$1;
(statearr_35088_37352[(2)] = null);

(statearr_35088_37352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (3))){
var inst_34982 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34984__$1,inst_34982);
} else {
if((state_val_34985 === (12))){
var inst_34910 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35094_37356 = state_34984__$1;
(statearr_35094_37356[(2)] = inst_34910);

(statearr_35094_37356[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (2))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(4),ch);
} else {
if((state_val_34985 === (23))){
var state_34984__$1 = state_34984;
var statearr_35101_37361 = state_34984__$1;
(statearr_35101_37361[(2)] = null);

(statearr_35101_37361[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (35))){
var inst_34966 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35106_37364 = state_34984__$1;
(statearr_35106_37364[(2)] = inst_34966);

(statearr_35106_37364[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (19))){
var inst_34880 = (state_34984[(7)]);
var inst_34885 = cljs.core.chunk_first(inst_34880);
var inst_34886 = cljs.core.chunk_rest(inst_34880);
var inst_34887 = cljs.core.count(inst_34885);
var inst_34855 = inst_34886;
var inst_34856 = inst_34885;
var inst_34857 = inst_34887;
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35113 = state_34984;
(statearr_35113[(13)] = inst_34857);

(statearr_35113[(14)] = inst_34856);

(statearr_35113[(16)] = inst_34858);

(statearr_35113[(17)] = inst_34855);

return statearr_35113;
})();
var statearr_35118_37371 = state_34984__$1;
(statearr_35118_37371[(2)] = null);

(statearr_35118_37371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (11))){
var inst_34855 = (state_34984[(17)]);
var inst_34880 = (state_34984[(7)]);
var inst_34880__$1 = cljs.core.seq(inst_34855);
var state_34984__$1 = (function (){var statearr_35124 = state_34984;
(statearr_35124[(7)] = inst_34880__$1);

return statearr_35124;
})();
if(inst_34880__$1){
var statearr_35128_37374 = state_34984__$1;
(statearr_35128_37374[(1)] = (16));

} else {
var statearr_35130_37377 = state_34984__$1;
(statearr_35130_37377[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (9))){
var inst_34912 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35134_37378 = state_34984__$1;
(statearr_35134_37378[(2)] = inst_34912);

(statearr_35134_37378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34984__$1 = (function (){var statearr_35141 = state_34984;
(statearr_35141[(13)] = inst_34857);

(statearr_35141[(14)] = inst_34856);

(statearr_35141[(16)] = inst_34858);

(statearr_35141[(17)] = inst_34855);

return statearr_35141;
})();
var statearr_35145_37381 = state_34984__$1;
(statearr_35145_37381[(2)] = null);

(statearr_35145_37381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (14))){
var state_34984__$1 = state_34984;
var statearr_35150_37387 = state_34984__$1;
(statearr_35150_37387[(2)] = null);

(statearr_35150_37387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (45))){
var inst_34974 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35156_37388 = state_34984__$1;
(statearr_35156_37388[(2)] = inst_34974);

(statearr_35156_37388[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (26))){
var inst_34915 = (state_34984[(29)]);
var inst_34970 = (state_34984[(2)]);
var inst_34971 = cljs.core.seq(inst_34915);
var state_34984__$1 = (function (){var statearr_35162 = state_34984;
(statearr_35162[(31)] = inst_34970);

return statearr_35162;
})();
if(inst_34971){
var statearr_35166_37390 = state_34984__$1;
(statearr_35166_37390[(1)] = (42));

} else {
var statearr_35168_37392 = state_34984__$1;
(statearr_35168_37392[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (16))){
var inst_34880 = (state_34984[(7)]);
var inst_34883 = cljs.core.chunked_seq_QMARK_(inst_34880);
var state_34984__$1 = state_34984;
if(inst_34883){
var statearr_35171_37393 = state_34984__$1;
(statearr_35171_37393[(1)] = (19));

} else {
var statearr_35172_37397 = state_34984__$1;
(statearr_35172_37397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (38))){
var inst_34963 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35173_37401 = state_34984__$1;
(statearr_35173_37401[(2)] = inst_34963);

(statearr_35173_37401[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (30))){
var state_34984__$1 = state_34984;
var statearr_35174_37402 = state_34984__$1;
(statearr_35174_37402[(2)] = null);

(statearr_35174_37402[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (10))){
var inst_34856 = (state_34984[(14)]);
var inst_34858 = (state_34984[(16)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34984__$1 = (function (){var statearr_35175 = state_34984;
(statearr_35175[(26)] = inst_34869);

return statearr_35175;
})();
if(cljs.core.truth_(inst_34870)){
var statearr_35176_37406 = state_34984__$1;
(statearr_35176_37406[(1)] = (13));

} else {
var statearr_35179_37407 = state_34984__$1;
(statearr_35179_37407[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (18))){
var inst_34908 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
var statearr_35180_37409 = state_34984__$1;
(statearr_35180_37409[(2)] = inst_34908);

(statearr_35180_37409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (42))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34984__$1,(45),dchan);
} else {
if((state_val_34985 === (37))){
var inst_34952 = (state_34984[(23)]);
var inst_34846 = (state_34984[(10)]);
var inst_34943 = (state_34984[(25)]);
var inst_34952__$1 = cljs.core.first(inst_34943);
var inst_34953 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34952__$1,inst_34846,done);
var state_34984__$1 = (function (){var statearr_35183 = state_34984;
(statearr_35183[(23)] = inst_34952__$1);

return statearr_35183;
})();
if(cljs.core.truth_(inst_34953)){
var statearr_35184_37414 = state_34984__$1;
(statearr_35184_37414[(1)] = (39));

} else {
var statearr_35193_37415 = state_34984__$1;
(statearr_35193_37415[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (8))){
var inst_34857 = (state_34984[(13)]);
var inst_34858 = (state_34984[(16)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34984__$1 = state_34984;
if(cljs.core.truth_(inst_34861)){
var statearr_35209_37416 = state_34984__$1;
(statearr_35209_37416[(1)] = (10));

} else {
var statearr_35210_37419 = state_34984__$1;
(statearr_35210_37419[(1)] = (11));

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
var statearr_35214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35214[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35214[(1)] = (1));

return statearr_35214;
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
}catch (e35216){if((e35216 instanceof Object)){
var ex__34210__auto__ = e35216;
var statearr_35217_37426 = state_34984;
(statearr_35217_37426[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35216;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37427 = state_34984;
state_34984 = G__37427;
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
var state__34276__auto__ = (function (){var statearr_35219 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35219[(6)] = c__34274__auto___37246);

return statearr_35219;
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
var G__35234 = arguments.length;
switch (G__35234) {
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
var len__4789__auto___37452 = arguments.length;
var i__4790__auto___37453 = (0);
while(true){
if((i__4790__auto___37453 < len__4789__auto___37452)){
args__4795__auto__.push((arguments[i__4790__auto___37453]));

var G__37459 = (i__4790__auto___37453 + (1));
i__4790__auto___37453 = G__37459;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35363){
var map__35364 = p__35363;
var map__35364__$1 = (((((!((map__35364 == null))))?(((((map__35364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35364):map__35364);
var opts = map__35364__$1;
var statearr_35366_37467 = state;
(statearr_35366_37467[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35367_37469 = state;
(statearr_35367_37469[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35368_37471 = state;
(statearr_35368_37471[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35347){
var G__35349 = cljs.core.first(seq35347);
var seq35347__$1 = cljs.core.next(seq35347);
var G__35350 = cljs.core.first(seq35347__$1);
var seq35347__$2 = cljs.core.next(seq35347__$1);
var G__35351 = cljs.core.first(seq35347__$2);
var seq35347__$3 = cljs.core.next(seq35347__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35349,G__35350,G__35351,seq35347__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35382 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35382 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35383){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35383 = meta35383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35384,meta35383__$1){
var self__ = this;
var _35384__$1 = this;
return (new cljs.core.async.t_cljs$core$async35382(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35383__$1));
}));

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35384){
var self__ = this;
var _35384__$1 = this;
return self__.meta35383;
}));

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35382.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35383","meta35383",992040680,null)], null);
}));

(cljs.core.async.t_cljs$core$async35382.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35382");

(cljs.core.async.t_cljs$core$async35382.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35382");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35382.
 */
cljs.core.async.__GT_t_cljs$core$async35382 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35382(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35383){
return (new cljs.core.async.t_cljs$core$async35382(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35383));
});

}

return (new cljs.core.async.t_cljs$core$async35382(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35554){
var state_val_35557 = (state_35554[(1)]);
if((state_val_35557 === (7))){
var inst_35444 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35560_37525 = state_35554__$1;
(statearr_35560_37525[(2)] = inst_35444);

(statearr_35560_37525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (20))){
var inst_35456 = (state_35554[(7)]);
var state_35554__$1 = state_35554;
var statearr_35562_37526 = state_35554__$1;
(statearr_35562_37526[(2)] = inst_35456);

(statearr_35562_37526[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (27))){
var state_35554__$1 = state_35554;
var statearr_35567_37529 = state_35554__$1;
(statearr_35567_37529[(2)] = null);

(statearr_35567_37529[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (1))){
var inst_35425 = (state_35554[(8)]);
var inst_35425__$1 = calc_state();
var inst_35430 = (inst_35425__$1 == null);
var inst_35431 = cljs.core.not(inst_35430);
var state_35554__$1 = (function (){var statearr_35573 = state_35554;
(statearr_35573[(8)] = inst_35425__$1);

return statearr_35573;
})();
if(inst_35431){
var statearr_35576_37535 = state_35554__$1;
(statearr_35576_37535[(1)] = (2));

} else {
var statearr_35577_37536 = state_35554__$1;
(statearr_35577_37536[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (24))){
var inst_35525 = (state_35554[(9)]);
var inst_35493 = (state_35554[(10)]);
var inst_35482 = (state_35554[(11)]);
var inst_35525__$1 = (inst_35482.cljs$core$IFn$_invoke$arity$1 ? inst_35482.cljs$core$IFn$_invoke$arity$1(inst_35493) : inst_35482.call(null,inst_35493));
var state_35554__$1 = (function (){var statearr_35584 = state_35554;
(statearr_35584[(9)] = inst_35525__$1);

return statearr_35584;
})();
if(cljs.core.truth_(inst_35525__$1)){
var statearr_35588_37540 = state_35554__$1;
(statearr_35588_37540[(1)] = (29));

} else {
var statearr_35590_37544 = state_35554__$1;
(statearr_35590_37544[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (4))){
var inst_35447 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35447)){
var statearr_35600_37546 = state_35554__$1;
(statearr_35600_37546[(1)] = (8));

} else {
var statearr_35603_37548 = state_35554__$1;
(statearr_35603_37548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (15))){
var inst_35476 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35476)){
var statearr_35608_37550 = state_35554__$1;
(statearr_35608_37550[(1)] = (19));

} else {
var statearr_35612_37551 = state_35554__$1;
(statearr_35612_37551[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (21))){
var inst_35481 = (state_35554[(12)]);
var inst_35481__$1 = (state_35554[(2)]);
var inst_35482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35481__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35481__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35481__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35554__$1 = (function (){var statearr_35618 = state_35554;
(statearr_35618[(12)] = inst_35481__$1);

(statearr_35618[(11)] = inst_35482);

(statearr_35618[(13)] = inst_35483);

return statearr_35618;
})();
return cljs.core.async.ioc_alts_BANG_(state_35554__$1,(22),inst_35484);
} else {
if((state_val_35557 === (31))){
var inst_35536 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35536)){
var statearr_35625_37563 = state_35554__$1;
(statearr_35625_37563[(1)] = (32));

} else {
var statearr_35628_37564 = state_35554__$1;
(statearr_35628_37564[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (32))){
var inst_35492 = (state_35554[(14)]);
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35554__$1,(35),out,inst_35492);
} else {
if((state_val_35557 === (33))){
var inst_35481 = (state_35554[(12)]);
var inst_35456 = inst_35481;
var state_35554__$1 = (function (){var statearr_35634 = state_35554;
(statearr_35634[(7)] = inst_35456);

return statearr_35634;
})();
var statearr_35636_37567 = state_35554__$1;
(statearr_35636_37567[(2)] = null);

(statearr_35636_37567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (13))){
var inst_35456 = (state_35554[(7)]);
var inst_35465 = inst_35456.cljs$lang$protocol_mask$partition0$;
var inst_35466 = (inst_35465 & (64));
var inst_35467 = inst_35456.cljs$core$ISeq$;
var inst_35468 = (cljs.core.PROTOCOL_SENTINEL === inst_35467);
var inst_35469 = ((inst_35466) || (inst_35468));
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35469)){
var statearr_35644_37575 = state_35554__$1;
(statearr_35644_37575[(1)] = (16));

} else {
var statearr_35647_37577 = state_35554__$1;
(statearr_35647_37577[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (22))){
var inst_35492 = (state_35554[(14)]);
var inst_35493 = (state_35554[(10)]);
var inst_35491 = (state_35554[(2)]);
var inst_35492__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35491,(0),null);
var inst_35493__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35491,(1),null);
var inst_35494 = (inst_35492__$1 == null);
var inst_35495 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35493__$1,change);
var inst_35496 = ((inst_35494) || (inst_35495));
var state_35554__$1 = (function (){var statearr_35662 = state_35554;
(statearr_35662[(14)] = inst_35492__$1);

(statearr_35662[(10)] = inst_35493__$1);

return statearr_35662;
})();
if(cljs.core.truth_(inst_35496)){
var statearr_35664_37584 = state_35554__$1;
(statearr_35664_37584[(1)] = (23));

} else {
var statearr_35668_37585 = state_35554__$1;
(statearr_35668_37585[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (36))){
var inst_35481 = (state_35554[(12)]);
var inst_35456 = inst_35481;
var state_35554__$1 = (function (){var statearr_35671 = state_35554;
(statearr_35671[(7)] = inst_35456);

return statearr_35671;
})();
var statearr_35673_37592 = state_35554__$1;
(statearr_35673_37592[(2)] = null);

(statearr_35673_37592[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (29))){
var inst_35525 = (state_35554[(9)]);
var state_35554__$1 = state_35554;
var statearr_35682_37594 = state_35554__$1;
(statearr_35682_37594[(2)] = inst_35525);

(statearr_35682_37594[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (6))){
var state_35554__$1 = state_35554;
var statearr_35687_37596 = state_35554__$1;
(statearr_35687_37596[(2)] = false);

(statearr_35687_37596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (28))){
var inst_35521 = (state_35554[(2)]);
var inst_35522 = calc_state();
var inst_35456 = inst_35522;
var state_35554__$1 = (function (){var statearr_35691 = state_35554;
(statearr_35691[(7)] = inst_35456);

(statearr_35691[(15)] = inst_35521);

return statearr_35691;
})();
var statearr_35703_37602 = state_35554__$1;
(statearr_35703_37602[(2)] = null);

(statearr_35703_37602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (25))){
var inst_35550 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35704_37606 = state_35554__$1;
(statearr_35704_37606[(2)] = inst_35550);

(statearr_35704_37606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (34))){
var inst_35548 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35705_37608 = state_35554__$1;
(statearr_35705_37608[(2)] = inst_35548);

(statearr_35705_37608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (17))){
var state_35554__$1 = state_35554;
var statearr_35706_37609 = state_35554__$1;
(statearr_35706_37609[(2)] = false);

(statearr_35706_37609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (3))){
var state_35554__$1 = state_35554;
var statearr_35707_37612 = state_35554__$1;
(statearr_35707_37612[(2)] = false);

(statearr_35707_37612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (12))){
var inst_35552 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35554__$1,inst_35552);
} else {
if((state_val_35557 === (2))){
var inst_35425 = (state_35554[(8)]);
var inst_35436 = inst_35425.cljs$lang$protocol_mask$partition0$;
var inst_35437 = (inst_35436 & (64));
var inst_35438 = inst_35425.cljs$core$ISeq$;
var inst_35439 = (cljs.core.PROTOCOL_SENTINEL === inst_35438);
var inst_35440 = ((inst_35437) || (inst_35439));
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35440)){
var statearr_35710_37622 = state_35554__$1;
(statearr_35710_37622[(1)] = (5));

} else {
var statearr_35711_37624 = state_35554__$1;
(statearr_35711_37624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (23))){
var inst_35492 = (state_35554[(14)]);
var inst_35506 = (inst_35492 == null);
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35506)){
var statearr_35712_37626 = state_35554__$1;
(statearr_35712_37626[(1)] = (26));

} else {
var statearr_35713_37627 = state_35554__$1;
(statearr_35713_37627[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (35))){
var inst_35539 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
if(cljs.core.truth_(inst_35539)){
var statearr_35716_37633 = state_35554__$1;
(statearr_35716_37633[(1)] = (36));

} else {
var statearr_35717_37635 = state_35554__$1;
(statearr_35717_37635[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (19))){
var inst_35456 = (state_35554[(7)]);
var inst_35478 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35456);
var state_35554__$1 = state_35554;
var statearr_35718_37638 = state_35554__$1;
(statearr_35718_37638[(2)] = inst_35478);

(statearr_35718_37638[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (11))){
var inst_35456 = (state_35554[(7)]);
var inst_35460 = (inst_35456 == null);
var inst_35461 = cljs.core.not(inst_35460);
var state_35554__$1 = state_35554;
if(inst_35461){
var statearr_35719_37640 = state_35554__$1;
(statearr_35719_37640[(1)] = (13));

} else {
var statearr_35720_37641 = state_35554__$1;
(statearr_35720_37641[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (9))){
var inst_35425 = (state_35554[(8)]);
var state_35554__$1 = state_35554;
var statearr_35721_37647 = state_35554__$1;
(statearr_35721_37647[(2)] = inst_35425);

(statearr_35721_37647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (5))){
var state_35554__$1 = state_35554;
var statearr_35724_37652 = state_35554__$1;
(statearr_35724_37652[(2)] = true);

(statearr_35724_37652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (14))){
var state_35554__$1 = state_35554;
var statearr_35725_37655 = state_35554__$1;
(statearr_35725_37655[(2)] = false);

(statearr_35725_37655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (26))){
var inst_35493 = (state_35554[(10)]);
var inst_35518 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35493);
var state_35554__$1 = state_35554;
var statearr_35728_37657 = state_35554__$1;
(statearr_35728_37657[(2)] = inst_35518);

(statearr_35728_37657[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (16))){
var state_35554__$1 = state_35554;
var statearr_35731_37659 = state_35554__$1;
(statearr_35731_37659[(2)] = true);

(statearr_35731_37659[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (38))){
var inst_35544 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35734_37665 = state_35554__$1;
(statearr_35734_37665[(2)] = inst_35544);

(statearr_35734_37665[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (30))){
var inst_35493 = (state_35554[(10)]);
var inst_35482 = (state_35554[(11)]);
var inst_35483 = (state_35554[(13)]);
var inst_35531 = cljs.core.empty_QMARK_(inst_35482);
var inst_35532 = (inst_35483.cljs$core$IFn$_invoke$arity$1 ? inst_35483.cljs$core$IFn$_invoke$arity$1(inst_35493) : inst_35483.call(null,inst_35493));
var inst_35533 = cljs.core.not(inst_35532);
var inst_35534 = ((inst_35531) && (inst_35533));
var state_35554__$1 = state_35554;
var statearr_35735_37670 = state_35554__$1;
(statearr_35735_37670[(2)] = inst_35534);

(statearr_35735_37670[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (10))){
var inst_35425 = (state_35554[(8)]);
var inst_35452 = (state_35554[(2)]);
var inst_35453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35452,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35452,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35452,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35456 = inst_35425;
var state_35554__$1 = (function (){var statearr_35739 = state_35554;
(statearr_35739[(7)] = inst_35456);

(statearr_35739[(16)] = inst_35454);

(statearr_35739[(17)] = inst_35455);

(statearr_35739[(18)] = inst_35453);

return statearr_35739;
})();
var statearr_35741_37682 = state_35554__$1;
(statearr_35741_37682[(2)] = null);

(statearr_35741_37682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (18))){
var inst_35473 = (state_35554[(2)]);
var state_35554__$1 = state_35554;
var statearr_35742_37683 = state_35554__$1;
(statearr_35742_37683[(2)] = inst_35473);

(statearr_35742_37683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (37))){
var state_35554__$1 = state_35554;
var statearr_35745_37685 = state_35554__$1;
(statearr_35745_37685[(2)] = null);

(statearr_35745_37685[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35557 === (8))){
var inst_35425 = (state_35554[(8)]);
var inst_35449 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35425);
var state_35554__$1 = state_35554;
var statearr_35748_37688 = state_35554__$1;
(statearr_35748_37688[(2)] = inst_35449);

(statearr_35748_37688[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35554){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35554);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35752){if((e35752 instanceof Object)){
var ex__34210__auto__ = e35752;
var statearr_35753_37697 = state_35554;
(statearr_35753_37697[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35752;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37700 = state_35554;
state_35554 = G__37700;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35554){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35755 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35755[(6)] = c__34274__auto___37522);

return statearr_35755;
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
var G__35788 = arguments.length;
switch (G__35788) {
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
var c__34274__auto___37739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35921){
var state_val_35922 = (state_35921[(1)]);
if((state_val_35922 === (7))){
var inst_35913 = (state_35921[(2)]);
var state_35921__$1 = state_35921;
var statearr_35926_37743 = state_35921__$1;
(statearr_35926_37743[(2)] = inst_35913);

(statearr_35926_37743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (20))){
var state_35921__$1 = state_35921;
var statearr_35927_37744 = state_35921__$1;
(statearr_35927_37744[(2)] = null);

(statearr_35927_37744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (1))){
var state_35921__$1 = state_35921;
var statearr_35930_37746 = state_35921__$1;
(statearr_35930_37746[(2)] = null);

(statearr_35930_37746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (24))){
var inst_35893 = (state_35921[(7)]);
var inst_35904 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35893);
var state_35921__$1 = state_35921;
var statearr_35933_37749 = state_35921__$1;
(statearr_35933_37749[(2)] = inst_35904);

(statearr_35933_37749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (4))){
var inst_35839 = (state_35921[(8)]);
var inst_35839__$1 = (state_35921[(2)]);
var inst_35840 = (inst_35839__$1 == null);
var state_35921__$1 = (function (){var statearr_35937 = state_35921;
(statearr_35937[(8)] = inst_35839__$1);

return statearr_35937;
})();
if(cljs.core.truth_(inst_35840)){
var statearr_35938_37757 = state_35921__$1;
(statearr_35938_37757[(1)] = (5));

} else {
var statearr_35939_37758 = state_35921__$1;
(statearr_35939_37758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (15))){
var inst_35887 = (state_35921[(2)]);
var state_35921__$1 = state_35921;
var statearr_35940_37760 = state_35921__$1;
(statearr_35940_37760[(2)] = inst_35887);

(statearr_35940_37760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (21))){
var inst_35909 = (state_35921[(2)]);
var state_35921__$1 = (function (){var statearr_35943 = state_35921;
(statearr_35943[(9)] = inst_35909);

return statearr_35943;
})();
var statearr_35945_37762 = state_35921__$1;
(statearr_35945_37762[(2)] = null);

(statearr_35945_37762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (13))){
var inst_35867 = (state_35921[(10)]);
var inst_35871 = cljs.core.chunked_seq_QMARK_(inst_35867);
var state_35921__$1 = state_35921;
if(inst_35871){
var statearr_35948_37769 = state_35921__$1;
(statearr_35948_37769[(1)] = (16));

} else {
var statearr_35950_37770 = state_35921__$1;
(statearr_35950_37770[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (22))){
var inst_35899 = (state_35921[(2)]);
var state_35921__$1 = state_35921;
if(cljs.core.truth_(inst_35899)){
var statearr_35952_37772 = state_35921__$1;
(statearr_35952_37772[(1)] = (23));

} else {
var statearr_35953_37773 = state_35921__$1;
(statearr_35953_37773[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (6))){
var inst_35895 = (state_35921[(11)]);
var inst_35839 = (state_35921[(8)]);
var inst_35893 = (state_35921[(7)]);
var inst_35893__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35839) : topic_fn.call(null,inst_35839));
var inst_35894 = cljs.core.deref(mults);
var inst_35895__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35894,inst_35893__$1);
var state_35921__$1 = (function (){var statearr_35956 = state_35921;
(statearr_35956[(11)] = inst_35895__$1);

(statearr_35956[(7)] = inst_35893__$1);

return statearr_35956;
})();
if(cljs.core.truth_(inst_35895__$1)){
var statearr_35958_37781 = state_35921__$1;
(statearr_35958_37781[(1)] = (19));

} else {
var statearr_35959_37783 = state_35921__$1;
(statearr_35959_37783[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (25))){
var inst_35906 = (state_35921[(2)]);
var state_35921__$1 = state_35921;
var statearr_35961_37784 = state_35921__$1;
(statearr_35961_37784[(2)] = inst_35906);

(statearr_35961_37784[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (17))){
var inst_35867 = (state_35921[(10)]);
var inst_35878 = cljs.core.first(inst_35867);
var inst_35879 = cljs.core.async.muxch_STAR_(inst_35878);
var inst_35880 = cljs.core.async.close_BANG_(inst_35879);
var inst_35881 = cljs.core.next(inst_35867);
var inst_35851 = inst_35881;
var inst_35852 = null;
var inst_35853 = (0);
var inst_35854 = (0);
var state_35921__$1 = (function (){var statearr_35965 = state_35921;
(statearr_35965[(12)] = inst_35851);

(statearr_35965[(13)] = inst_35852);

(statearr_35965[(14)] = inst_35880);

(statearr_35965[(15)] = inst_35853);

(statearr_35965[(16)] = inst_35854);

return statearr_35965;
})();
var statearr_35966_37794 = state_35921__$1;
(statearr_35966_37794[(2)] = null);

(statearr_35966_37794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (3))){
var inst_35915 = (state_35921[(2)]);
var state_35921__$1 = state_35921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35921__$1,inst_35915);
} else {
if((state_val_35922 === (12))){
var inst_35889 = (state_35921[(2)]);
var state_35921__$1 = state_35921;
var statearr_35969_37796 = state_35921__$1;
(statearr_35969_37796[(2)] = inst_35889);

(statearr_35969_37796[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (2))){
var state_35921__$1 = state_35921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35921__$1,(4),ch);
} else {
if((state_val_35922 === (23))){
var state_35921__$1 = state_35921;
var statearr_35972_37798 = state_35921__$1;
(statearr_35972_37798[(2)] = null);

(statearr_35972_37798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (19))){
var inst_35895 = (state_35921[(11)]);
var inst_35839 = (state_35921[(8)]);
var inst_35897 = cljs.core.async.muxch_STAR_(inst_35895);
var state_35921__$1 = state_35921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35921__$1,(22),inst_35897,inst_35839);
} else {
if((state_val_35922 === (11))){
var inst_35867 = (state_35921[(10)]);
var inst_35851 = (state_35921[(12)]);
var inst_35867__$1 = cljs.core.seq(inst_35851);
var state_35921__$1 = (function (){var statearr_35976 = state_35921;
(statearr_35976[(10)] = inst_35867__$1);

return statearr_35976;
})();
if(inst_35867__$1){
var statearr_35977_37805 = state_35921__$1;
(statearr_35977_37805[(1)] = (13));

} else {
var statearr_35979_37809 = state_35921__$1;
(statearr_35979_37809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (9))){
var inst_35891 = (state_35921[(2)]);
var state_35921__$1 = state_35921;
var statearr_35980_37810 = state_35921__$1;
(statearr_35980_37810[(2)] = inst_35891);

(statearr_35980_37810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (5))){
var inst_35848 = cljs.core.deref(mults);
var inst_35849 = cljs.core.vals(inst_35848);
var inst_35850 = cljs.core.seq(inst_35849);
var inst_35851 = inst_35850;
var inst_35852 = null;
var inst_35853 = (0);
var inst_35854 = (0);
var state_35921__$1 = (function (){var statearr_35985 = state_35921;
(statearr_35985[(12)] = inst_35851);

(statearr_35985[(13)] = inst_35852);

(statearr_35985[(15)] = inst_35853);

(statearr_35985[(16)] = inst_35854);

return statearr_35985;
})();
var statearr_35987_37813 = state_35921__$1;
(statearr_35987_37813[(2)] = null);

(statearr_35987_37813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (14))){
var state_35921__$1 = state_35921;
var statearr_35991_37815 = state_35921__$1;
(statearr_35991_37815[(2)] = null);

(statearr_35991_37815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (16))){
var inst_35867 = (state_35921[(10)]);
var inst_35873 = cljs.core.chunk_first(inst_35867);
var inst_35874 = cljs.core.chunk_rest(inst_35867);
var inst_35875 = cljs.core.count(inst_35873);
var inst_35851 = inst_35874;
var inst_35852 = inst_35873;
var inst_35853 = inst_35875;
var inst_35854 = (0);
var state_35921__$1 = (function (){var statearr_35995 = state_35921;
(statearr_35995[(12)] = inst_35851);

(statearr_35995[(13)] = inst_35852);

(statearr_35995[(15)] = inst_35853);

(statearr_35995[(16)] = inst_35854);

return statearr_35995;
})();
var statearr_35996_37823 = state_35921__$1;
(statearr_35996_37823[(2)] = null);

(statearr_35996_37823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (10))){
var inst_35851 = (state_35921[(12)]);
var inst_35852 = (state_35921[(13)]);
var inst_35853 = (state_35921[(15)]);
var inst_35854 = (state_35921[(16)]);
var inst_35859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35852,inst_35854);
var inst_35860 = cljs.core.async.muxch_STAR_(inst_35859);
var inst_35861 = cljs.core.async.close_BANG_(inst_35860);
var inst_35863 = (inst_35854 + (1));
var tmp35988 = inst_35851;
var tmp35989 = inst_35852;
var tmp35990 = inst_35853;
var inst_35851__$1 = tmp35988;
var inst_35852__$1 = tmp35989;
var inst_35853__$1 = tmp35990;
var inst_35854__$1 = inst_35863;
var state_35921__$1 = (function (){var statearr_35997 = state_35921;
(statearr_35997[(17)] = inst_35861);

(statearr_35997[(12)] = inst_35851__$1);

(statearr_35997[(13)] = inst_35852__$1);

(statearr_35997[(15)] = inst_35853__$1);

(statearr_35997[(16)] = inst_35854__$1);

return statearr_35997;
})();
var statearr_35999_37833 = state_35921__$1;
(statearr_35999_37833[(2)] = null);

(statearr_35999_37833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (18))){
var inst_35884 = (state_35921[(2)]);
var state_35921__$1 = state_35921;
var statearr_36001_37835 = state_35921__$1;
(statearr_36001_37835[(2)] = inst_35884);

(statearr_36001_37835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35922 === (8))){
var inst_35853 = (state_35921[(15)]);
var inst_35854 = (state_35921[(16)]);
var inst_35856 = (inst_35854 < inst_35853);
var inst_35857 = inst_35856;
var state_35921__$1 = state_35921;
if(cljs.core.truth_(inst_35857)){
var statearr_36003_37836 = state_35921__$1;
(statearr_36003_37836[(1)] = (10));

} else {
var statearr_36004_37838 = state_35921__$1;
(statearr_36004_37838[(1)] = (11));

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
var statearr_36007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36007[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36007[(1)] = (1));

return statearr_36007;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35921){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35921);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36009){if((e36009 instanceof Object)){
var ex__34210__auto__ = e36009;
var statearr_36010_37843 = state_35921;
(statearr_36010_37843[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36009;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37845 = state_35921;
state_35921 = G__37845;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36012 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36012[(6)] = c__34274__auto___37739);

return statearr_36012;
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
var G__36032 = arguments.length;
switch (G__36032) {
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
var c__34274__auto___37873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36092){
var state_val_36093 = (state_36092[(1)]);
if((state_val_36093 === (7))){
var state_36092__$1 = state_36092;
var statearr_36094_37876 = state_36092__$1;
(statearr_36094_37876[(2)] = null);

(statearr_36094_37876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (1))){
var state_36092__$1 = state_36092;
var statearr_36095_37878 = state_36092__$1;
(statearr_36095_37878[(2)] = null);

(statearr_36095_37878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (4))){
var inst_36052 = (state_36092[(7)]);
var inst_36054 = (inst_36052 < cnt);
var state_36092__$1 = state_36092;
if(cljs.core.truth_(inst_36054)){
var statearr_36096_37882 = state_36092__$1;
(statearr_36096_37882[(1)] = (6));

} else {
var statearr_36097_37883 = state_36092__$1;
(statearr_36097_37883[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (15))){
var inst_36088 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
var statearr_36098_37887 = state_36092__$1;
(statearr_36098_37887[(2)] = inst_36088);

(statearr_36098_37887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (13))){
var inst_36081 = cljs.core.async.close_BANG_(out);
var state_36092__$1 = state_36092;
var statearr_36099_37889 = state_36092__$1;
(statearr_36099_37889[(2)] = inst_36081);

(statearr_36099_37889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (6))){
var state_36092__$1 = state_36092;
var statearr_36101_37893 = state_36092__$1;
(statearr_36101_37893[(2)] = null);

(statearr_36101_37893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (3))){
var inst_36090 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36092__$1,inst_36090);
} else {
if((state_val_36093 === (12))){
var inst_36078 = (state_36092[(8)]);
var inst_36078__$1 = (state_36092[(2)]);
var inst_36079 = cljs.core.some(cljs.core.nil_QMARK_,inst_36078__$1);
var state_36092__$1 = (function (){var statearr_36110 = state_36092;
(statearr_36110[(8)] = inst_36078__$1);

return statearr_36110;
})();
if(cljs.core.truth_(inst_36079)){
var statearr_36111_37899 = state_36092__$1;
(statearr_36111_37899[(1)] = (13));

} else {
var statearr_36112_37900 = state_36092__$1;
(statearr_36112_37900[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (2))){
var inst_36051 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36052 = (0);
var state_36092__$1 = (function (){var statearr_36114 = state_36092;
(statearr_36114[(9)] = inst_36051);

(statearr_36114[(7)] = inst_36052);

return statearr_36114;
})();
var statearr_36115_37904 = state_36092__$1;
(statearr_36115_37904[(2)] = null);

(statearr_36115_37904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (11))){
var inst_36052 = (state_36092[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36092,(10),Object,null,(9));
var inst_36065 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36052) : chs__$1.call(null,inst_36052));
var inst_36066 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36052) : done.call(null,inst_36052));
var inst_36067 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36065,inst_36066);
var state_36092__$1 = state_36092;
var statearr_36116_37906 = state_36092__$1;
(statearr_36116_37906[(2)] = inst_36067);


cljs.core.async.impl.ioc_helpers.process_exception(state_36092__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (9))){
var inst_36052 = (state_36092[(7)]);
var inst_36069 = (state_36092[(2)]);
var inst_36070 = (inst_36052 + (1));
var inst_36052__$1 = inst_36070;
var state_36092__$1 = (function (){var statearr_36118 = state_36092;
(statearr_36118[(10)] = inst_36069);

(statearr_36118[(7)] = inst_36052__$1);

return statearr_36118;
})();
var statearr_36119_37908 = state_36092__$1;
(statearr_36119_37908[(2)] = null);

(statearr_36119_37908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (5))){
var inst_36076 = (state_36092[(2)]);
var state_36092__$1 = (function (){var statearr_36122 = state_36092;
(statearr_36122[(11)] = inst_36076);

return statearr_36122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36092__$1,(12),dchan);
} else {
if((state_val_36093 === (14))){
var inst_36078 = (state_36092[(8)]);
var inst_36083 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36078);
var state_36092__$1 = state_36092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36092__$1,(16),out,inst_36083);
} else {
if((state_val_36093 === (16))){
var inst_36085 = (state_36092[(2)]);
var state_36092__$1 = (function (){var statearr_36127 = state_36092;
(statearr_36127[(12)] = inst_36085);

return statearr_36127;
})();
var statearr_36128_37914 = state_36092__$1;
(statearr_36128_37914[(2)] = null);

(statearr_36128_37914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (10))){
var inst_36057 = (state_36092[(2)]);
var inst_36059 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36092__$1 = (function (){var statearr_36130 = state_36092;
(statearr_36130[(13)] = inst_36057);

return statearr_36130;
})();
var statearr_36131_37916 = state_36092__$1;
(statearr_36131_37916[(2)] = inst_36059);


cljs.core.async.impl.ioc_helpers.process_exception(state_36092__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (8))){
var inst_36074 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
var statearr_36132_37921 = state_36092__$1;
(statearr_36132_37921[(2)] = inst_36074);

(statearr_36132_37921[(1)] = (5));


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
var statearr_36134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36134[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36134[(1)] = (1));

return statearr_36134;
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
}catch (e36137){if((e36137 instanceof Object)){
var ex__34210__auto__ = e36137;
var statearr_36140_37923 = state_36092;
(statearr_36140_37923[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37928 = state_36092;
state_36092 = G__37928;
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
var state__34276__auto__ = (function (){var statearr_36141 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36141[(6)] = c__34274__auto___37873);

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
var c__34274__auto___37933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36190){
var state_val_36191 = (state_36190[(1)]);
if((state_val_36191 === (7))){
var inst_36169 = (state_36190[(7)]);
var inst_36170 = (state_36190[(8)]);
var inst_36169__$1 = (state_36190[(2)]);
var inst_36170__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36169__$1,(0),null);
var inst_36171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36169__$1,(1),null);
var inst_36172 = (inst_36170__$1 == null);
var state_36190__$1 = (function (){var statearr_36194 = state_36190;
(statearr_36194[(7)] = inst_36169__$1);

(statearr_36194[(9)] = inst_36171);

(statearr_36194[(8)] = inst_36170__$1);

return statearr_36194;
})();
if(cljs.core.truth_(inst_36172)){
var statearr_36195_37943 = state_36190__$1;
(statearr_36195_37943[(1)] = (8));

} else {
var statearr_36196_37944 = state_36190__$1;
(statearr_36196_37944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (1))){
var inst_36154 = cljs.core.vec(chs);
var inst_36155 = inst_36154;
var state_36190__$1 = (function (){var statearr_36197 = state_36190;
(statearr_36197[(10)] = inst_36155);

return statearr_36197;
})();
var statearr_36198_37950 = state_36190__$1;
(statearr_36198_37950[(2)] = null);

(statearr_36198_37950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (4))){
var inst_36155 = (state_36190[(10)]);
var state_36190__$1 = state_36190;
return cljs.core.async.ioc_alts_BANG_(state_36190__$1,(7),inst_36155);
} else {
if((state_val_36191 === (6))){
var inst_36186 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
var statearr_36201_37953 = state_36190__$1;
(statearr_36201_37953[(2)] = inst_36186);

(statearr_36201_37953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (3))){
var inst_36188 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36190__$1,inst_36188);
} else {
if((state_val_36191 === (2))){
var inst_36155 = (state_36190[(10)]);
var inst_36158 = cljs.core.count(inst_36155);
var inst_36159 = (inst_36158 > (0));
var state_36190__$1 = state_36190;
if(cljs.core.truth_(inst_36159)){
var statearr_36208_37958 = state_36190__$1;
(statearr_36208_37958[(1)] = (4));

} else {
var statearr_36211_37959 = state_36190__$1;
(statearr_36211_37959[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (11))){
var inst_36155 = (state_36190[(10)]);
var inst_36179 = (state_36190[(2)]);
var tmp36203 = inst_36155;
var inst_36155__$1 = tmp36203;
var state_36190__$1 = (function (){var statearr_36213 = state_36190;
(statearr_36213[(10)] = inst_36155__$1);

(statearr_36213[(11)] = inst_36179);

return statearr_36213;
})();
var statearr_36214_37961 = state_36190__$1;
(statearr_36214_37961[(2)] = null);

(statearr_36214_37961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (9))){
var inst_36170 = (state_36190[(8)]);
var state_36190__$1 = state_36190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36190__$1,(11),out,inst_36170);
} else {
if((state_val_36191 === (5))){
var inst_36184 = cljs.core.async.close_BANG_(out);
var state_36190__$1 = state_36190;
var statearr_36226_37966 = state_36190__$1;
(statearr_36226_37966[(2)] = inst_36184);

(statearr_36226_37966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (10))){
var inst_36182 = (state_36190[(2)]);
var state_36190__$1 = state_36190;
var statearr_36227_37967 = state_36190__$1;
(statearr_36227_37967[(2)] = inst_36182);

(statearr_36227_37967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36191 === (8))){
var inst_36155 = (state_36190[(10)]);
var inst_36169 = (state_36190[(7)]);
var inst_36171 = (state_36190[(9)]);
var inst_36170 = (state_36190[(8)]);
var inst_36174 = (function (){var cs = inst_36155;
var vec__36161 = inst_36169;
var v = inst_36170;
var c = inst_36171;
return (function (p1__36142_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36142_SHARP_);
});
})();
var inst_36175 = cljs.core.filterv(inst_36174,inst_36155);
var inst_36155__$1 = inst_36175;
var state_36190__$1 = (function (){var statearr_36229 = state_36190;
(statearr_36229[(10)] = inst_36155__$1);

return statearr_36229;
})();
var statearr_36230_37971 = state_36190__$1;
(statearr_36230_37971[(2)] = null);

(statearr_36230_37971[(1)] = (2));


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
var statearr_36233 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36233[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36233[(1)] = (1));

return statearr_36233;
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
}catch (e36235){if((e36235 instanceof Object)){
var ex__34210__auto__ = e36235;
var statearr_36236_37975 = state_36190;
(statearr_36236_37975[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36235;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37976 = state_36190;
state_36190 = G__37976;
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
var state__34276__auto__ = (function (){var statearr_36238 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36238[(6)] = c__34274__auto___37933);

return statearr_36238;
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
var G__36244 = arguments.length;
switch (G__36244) {
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
var c__34274__auto___37985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36275){
var state_val_36278 = (state_36275[(1)]);
if((state_val_36278 === (7))){
var inst_36253 = (state_36275[(7)]);
var inst_36253__$1 = (state_36275[(2)]);
var inst_36254 = (inst_36253__$1 == null);
var inst_36255 = cljs.core.not(inst_36254);
var state_36275__$1 = (function (){var statearr_36282 = state_36275;
(statearr_36282[(7)] = inst_36253__$1);

return statearr_36282;
})();
if(inst_36255){
var statearr_36284_37987 = state_36275__$1;
(statearr_36284_37987[(1)] = (8));

} else {
var statearr_36285_37988 = state_36275__$1;
(statearr_36285_37988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36278 === (1))){
var inst_36246 = (0);
var state_36275__$1 = (function (){var statearr_36287 = state_36275;
(statearr_36287[(8)] = inst_36246);

return statearr_36287;
})();
var statearr_36288_37991 = state_36275__$1;
(statearr_36288_37991[(2)] = null);

(statearr_36288_37991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36278 === (4))){
var state_36275__$1 = state_36275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36275__$1,(7),ch);
} else {
if((state_val_36278 === (6))){
var inst_36267 = (state_36275[(2)]);
var state_36275__$1 = state_36275;
var statearr_36290_37994 = state_36275__$1;
(statearr_36290_37994[(2)] = inst_36267);

(statearr_36290_37994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36278 === (3))){
var inst_36270 = (state_36275[(2)]);
var inst_36271 = cljs.core.async.close_BANG_(out);
var state_36275__$1 = (function (){var statearr_36292 = state_36275;
(statearr_36292[(9)] = inst_36270);

return statearr_36292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36275__$1,inst_36271);
} else {
if((state_val_36278 === (2))){
var inst_36246 = (state_36275[(8)]);
var inst_36249 = (inst_36246 < n);
var state_36275__$1 = state_36275;
if(cljs.core.truth_(inst_36249)){
var statearr_36294_37995 = state_36275__$1;
(statearr_36294_37995[(1)] = (4));

} else {
var statearr_36295_37996 = state_36275__$1;
(statearr_36295_37996[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36278 === (11))){
var inst_36246 = (state_36275[(8)]);
var inst_36258 = (state_36275[(2)]);
var inst_36260 = (inst_36246 + (1));
var inst_36246__$1 = inst_36260;
var state_36275__$1 = (function (){var statearr_36297 = state_36275;
(statearr_36297[(8)] = inst_36246__$1);

(statearr_36297[(10)] = inst_36258);

return statearr_36297;
})();
var statearr_36299_38000 = state_36275__$1;
(statearr_36299_38000[(2)] = null);

(statearr_36299_38000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36278 === (9))){
var state_36275__$1 = state_36275;
var statearr_36300_38001 = state_36275__$1;
(statearr_36300_38001[(2)] = null);

(statearr_36300_38001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36278 === (5))){
var state_36275__$1 = state_36275;
var statearr_36301_38002 = state_36275__$1;
(statearr_36301_38002[(2)] = null);

(statearr_36301_38002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36278 === (10))){
var inst_36264 = (state_36275[(2)]);
var state_36275__$1 = state_36275;
var statearr_36302_38003 = state_36275__$1;
(statearr_36302_38003[(2)] = inst_36264);

(statearr_36302_38003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36278 === (8))){
var inst_36253 = (state_36275[(7)]);
var state_36275__$1 = state_36275;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36275__$1,(11),out,inst_36253);
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
var statearr_36305 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36305[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36305[(1)] = (1));

return statearr_36305;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36275){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36275);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36306){if((e36306 instanceof Object)){
var ex__34210__auto__ = e36306;
var statearr_36307_38008 = state_36275;
(statearr_36307_38008[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36306;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38009 = state_36275;
state_36275 = G__38009;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36311 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36311[(6)] = c__34274__auto___37985);

return statearr_36311;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36315 = (function (f,ch,meta36316){
this.f = f;
this.ch = ch;
this.meta36316 = meta36316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36317,meta36316__$1){
var self__ = this;
var _36317__$1 = this;
return (new cljs.core.async.t_cljs$core$async36315(self__.f,self__.ch,meta36316__$1));
}));

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36317){
var self__ = this;
var _36317__$1 = this;
return self__.meta36316;
}));

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36327 = (function (f,ch,meta36316,_,fn1,meta36328){
this.f = f;
this.ch = ch;
this.meta36316 = meta36316;
this._ = _;
this.fn1 = fn1;
this.meta36328 = meta36328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36329,meta36328__$1){
var self__ = this;
var _36329__$1 = this;
return (new cljs.core.async.t_cljs$core$async36327(self__.f,self__.ch,self__.meta36316,self__._,self__.fn1,meta36328__$1));
}));

(cljs.core.async.t_cljs$core$async36327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36329){
var self__ = this;
var _36329__$1 = this;
return self__.meta36328;
}));

(cljs.core.async.t_cljs$core$async36327.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36327.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36313_SHARP_){
var G__36335 = (((p1__36313_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36313_SHARP_) : self__.f.call(null,p1__36313_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36335) : f1.call(null,G__36335));
});
}));

(cljs.core.async.t_cljs$core$async36327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36316","meta36316",1525607063,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36315","cljs.core.async/t_cljs$core$async36315",-320335495,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36328","meta36328",-598098695,null)], null);
}));

(cljs.core.async.t_cljs$core$async36327.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36327");

(cljs.core.async.t_cljs$core$async36327.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36327");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36327.
 */
cljs.core.async.__GT_t_cljs$core$async36327 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36327(f__$1,ch__$1,meta36316__$1,___$2,fn1__$1,meta36328){
return (new cljs.core.async.t_cljs$core$async36327(f__$1,ch__$1,meta36316__$1,___$2,fn1__$1,meta36328));
});

}

return (new cljs.core.async.t_cljs$core$async36327(self__.f,self__.ch,self__.meta36316,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36340 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36340) : self__.f.call(null,G__36340));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36315.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36316","meta36316",1525607063,null)], null);
}));

(cljs.core.async.t_cljs$core$async36315.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36315");

(cljs.core.async.t_cljs$core$async36315.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36315");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36315.
 */
cljs.core.async.__GT_t_cljs$core$async36315 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36315(f__$1,ch__$1,meta36316){
return (new cljs.core.async.t_cljs$core$async36315(f__$1,ch__$1,meta36316));
});

}

return (new cljs.core.async.t_cljs$core$async36315(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36350 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36350 = (function (f,ch,meta36351){
this.f = f;
this.ch = ch;
this.meta36351 = meta36351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36352,meta36351__$1){
var self__ = this;
var _36352__$1 = this;
return (new cljs.core.async.t_cljs$core$async36350(self__.f,self__.ch,meta36351__$1));
}));

(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36352){
var self__ = this;
var _36352__$1 = this;
return self__.meta36351;
}));

(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36351","meta36351",-30894265,null)], null);
}));

(cljs.core.async.t_cljs$core$async36350.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36350");

(cljs.core.async.t_cljs$core$async36350.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36350");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36350.
 */
cljs.core.async.__GT_t_cljs$core$async36350 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36350(f__$1,ch__$1,meta36351){
return (new cljs.core.async.t_cljs$core$async36350(f__$1,ch__$1,meta36351));
});

}

return (new cljs.core.async.t_cljs$core$async36350(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36360 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36360 = (function (p,ch,meta36361){
this.p = p;
this.ch = ch;
this.meta36361 = meta36361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36362,meta36361__$1){
var self__ = this;
var _36362__$1 = this;
return (new cljs.core.async.t_cljs$core$async36360(self__.p,self__.ch,meta36361__$1));
}));

(cljs.core.async.t_cljs$core$async36360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36362){
var self__ = this;
var _36362__$1 = this;
return self__.meta36361;
}));

(cljs.core.async.t_cljs$core$async36360.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36360.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36360.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36360.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36361","meta36361",1982242444,null)], null);
}));

(cljs.core.async.t_cljs$core$async36360.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36360");

(cljs.core.async.t_cljs$core$async36360.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36360");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36360.
 */
cljs.core.async.__GT_t_cljs$core$async36360 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36360(p__$1,ch__$1,meta36361){
return (new cljs.core.async.t_cljs$core$async36360(p__$1,ch__$1,meta36361));
});

}

return (new cljs.core.async.t_cljs$core$async36360(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36382 = arguments.length;
switch (G__36382) {
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
var c__34274__auto___38036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36419){
var state_val_36420 = (state_36419[(1)]);
if((state_val_36420 === (7))){
var inst_36415 = (state_36419[(2)]);
var state_36419__$1 = state_36419;
var statearr_36431_38041 = state_36419__$1;
(statearr_36431_38041[(2)] = inst_36415);

(statearr_36431_38041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (1))){
var state_36419__$1 = state_36419;
var statearr_36432_38042 = state_36419__$1;
(statearr_36432_38042[(2)] = null);

(statearr_36432_38042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (4))){
var inst_36387 = (state_36419[(7)]);
var inst_36387__$1 = (state_36419[(2)]);
var inst_36388 = (inst_36387__$1 == null);
var state_36419__$1 = (function (){var statearr_36433 = state_36419;
(statearr_36433[(7)] = inst_36387__$1);

return statearr_36433;
})();
if(cljs.core.truth_(inst_36388)){
var statearr_36434_38043 = state_36419__$1;
(statearr_36434_38043[(1)] = (5));

} else {
var statearr_36435_38044 = state_36419__$1;
(statearr_36435_38044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (6))){
var inst_36387 = (state_36419[(7)]);
var inst_36393 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36387) : p.call(null,inst_36387));
var state_36419__$1 = state_36419;
if(cljs.core.truth_(inst_36393)){
var statearr_36442_38045 = state_36419__$1;
(statearr_36442_38045[(1)] = (8));

} else {
var statearr_36443_38046 = state_36419__$1;
(statearr_36443_38046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (3))){
var inst_36417 = (state_36419[(2)]);
var state_36419__$1 = state_36419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36419__$1,inst_36417);
} else {
if((state_val_36420 === (2))){
var state_36419__$1 = state_36419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36419__$1,(4),ch);
} else {
if((state_val_36420 === (11))){
var inst_36408 = (state_36419[(2)]);
var state_36419__$1 = state_36419;
var statearr_36448_38050 = state_36419__$1;
(statearr_36448_38050[(2)] = inst_36408);

(statearr_36448_38050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (9))){
var state_36419__$1 = state_36419;
var statearr_36449_38051 = state_36419__$1;
(statearr_36449_38051[(2)] = null);

(statearr_36449_38051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (5))){
var inst_36391 = cljs.core.async.close_BANG_(out);
var state_36419__$1 = state_36419;
var statearr_36457_38052 = state_36419__$1;
(statearr_36457_38052[(2)] = inst_36391);

(statearr_36457_38052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (10))){
var inst_36411 = (state_36419[(2)]);
var state_36419__$1 = (function (){var statearr_36458 = state_36419;
(statearr_36458[(8)] = inst_36411);

return statearr_36458;
})();
var statearr_36459_38055 = state_36419__$1;
(statearr_36459_38055[(2)] = null);

(statearr_36459_38055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36420 === (8))){
var inst_36387 = (state_36419[(7)]);
var state_36419__$1 = state_36419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36419__$1,(11),out,inst_36387);
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
var statearr_36464 = [null,null,null,null,null,null,null,null,null];
(statearr_36464[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36464[(1)] = (1));

return statearr_36464;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36419){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36419);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36465){if((e36465 instanceof Object)){
var ex__34210__auto__ = e36465;
var statearr_36466_38058 = state_36419;
(statearr_36466_38058[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36465;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38059 = state_36419;
state_36419 = G__38059;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36468 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36468[(6)] = c__34274__auto___38036);

return statearr_36468;
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
var G__36470 = arguments.length;
switch (G__36470) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36541){
var state_val_36542 = (state_36541[(1)]);
if((state_val_36542 === (7))){
var inst_36536 = (state_36541[(2)]);
var state_36541__$1 = state_36541;
var statearr_36545_38063 = state_36541__$1;
(statearr_36545_38063[(2)] = inst_36536);

(statearr_36545_38063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (20))){
var inst_36505 = (state_36541[(7)]);
var inst_36516 = (state_36541[(2)]);
var inst_36517 = cljs.core.next(inst_36505);
var inst_36490 = inst_36517;
var inst_36491 = null;
var inst_36492 = (0);
var inst_36493 = (0);
var state_36541__$1 = (function (){var statearr_36546 = state_36541;
(statearr_36546[(8)] = inst_36516);

(statearr_36546[(9)] = inst_36492);

(statearr_36546[(10)] = inst_36491);

(statearr_36546[(11)] = inst_36490);

(statearr_36546[(12)] = inst_36493);

return statearr_36546;
})();
var statearr_36548_38066 = state_36541__$1;
(statearr_36548_38066[(2)] = null);

(statearr_36548_38066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (1))){
var state_36541__$1 = state_36541;
var statearr_36549_38068 = state_36541__$1;
(statearr_36549_38068[(2)] = null);

(statearr_36549_38068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (4))){
var inst_36479 = (state_36541[(13)]);
var inst_36479__$1 = (state_36541[(2)]);
var inst_36480 = (inst_36479__$1 == null);
var state_36541__$1 = (function (){var statearr_36551 = state_36541;
(statearr_36551[(13)] = inst_36479__$1);

return statearr_36551;
})();
if(cljs.core.truth_(inst_36480)){
var statearr_36552_38069 = state_36541__$1;
(statearr_36552_38069[(1)] = (5));

} else {
var statearr_36553_38070 = state_36541__$1;
(statearr_36553_38070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (15))){
var state_36541__$1 = state_36541;
var statearr_36557_38071 = state_36541__$1;
(statearr_36557_38071[(2)] = null);

(statearr_36557_38071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (21))){
var state_36541__$1 = state_36541;
var statearr_36559_38073 = state_36541__$1;
(statearr_36559_38073[(2)] = null);

(statearr_36559_38073[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (13))){
var inst_36492 = (state_36541[(9)]);
var inst_36491 = (state_36541[(10)]);
var inst_36490 = (state_36541[(11)]);
var inst_36493 = (state_36541[(12)]);
var inst_36501 = (state_36541[(2)]);
var inst_36502 = (inst_36493 + (1));
var tmp36554 = inst_36492;
var tmp36555 = inst_36491;
var tmp36556 = inst_36490;
var inst_36490__$1 = tmp36556;
var inst_36491__$1 = tmp36555;
var inst_36492__$1 = tmp36554;
var inst_36493__$1 = inst_36502;
var state_36541__$1 = (function (){var statearr_36560 = state_36541;
(statearr_36560[(9)] = inst_36492__$1);

(statearr_36560[(14)] = inst_36501);

(statearr_36560[(10)] = inst_36491__$1);

(statearr_36560[(11)] = inst_36490__$1);

(statearr_36560[(12)] = inst_36493__$1);

return statearr_36560;
})();
var statearr_36562_38076 = state_36541__$1;
(statearr_36562_38076[(2)] = null);

(statearr_36562_38076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (22))){
var state_36541__$1 = state_36541;
var statearr_36563_38078 = state_36541__$1;
(statearr_36563_38078[(2)] = null);

(statearr_36563_38078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (6))){
var inst_36479 = (state_36541[(13)]);
var inst_36488 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36479) : f.call(null,inst_36479));
var inst_36489 = cljs.core.seq(inst_36488);
var inst_36490 = inst_36489;
var inst_36491 = null;
var inst_36492 = (0);
var inst_36493 = (0);
var state_36541__$1 = (function (){var statearr_36565 = state_36541;
(statearr_36565[(9)] = inst_36492);

(statearr_36565[(10)] = inst_36491);

(statearr_36565[(11)] = inst_36490);

(statearr_36565[(12)] = inst_36493);

return statearr_36565;
})();
var statearr_36566_38081 = state_36541__$1;
(statearr_36566_38081[(2)] = null);

(statearr_36566_38081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (17))){
var inst_36505 = (state_36541[(7)]);
var inst_36509 = cljs.core.chunk_first(inst_36505);
var inst_36510 = cljs.core.chunk_rest(inst_36505);
var inst_36511 = cljs.core.count(inst_36509);
var inst_36490 = inst_36510;
var inst_36491 = inst_36509;
var inst_36492 = inst_36511;
var inst_36493 = (0);
var state_36541__$1 = (function (){var statearr_36568 = state_36541;
(statearr_36568[(9)] = inst_36492);

(statearr_36568[(10)] = inst_36491);

(statearr_36568[(11)] = inst_36490);

(statearr_36568[(12)] = inst_36493);

return statearr_36568;
})();
var statearr_36569_38083 = state_36541__$1;
(statearr_36569_38083[(2)] = null);

(statearr_36569_38083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (3))){
var inst_36538 = (state_36541[(2)]);
var state_36541__$1 = state_36541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36541__$1,inst_36538);
} else {
if((state_val_36542 === (12))){
var inst_36526 = (state_36541[(2)]);
var state_36541__$1 = state_36541;
var statearr_36571_38086 = state_36541__$1;
(statearr_36571_38086[(2)] = inst_36526);

(statearr_36571_38086[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (2))){
var state_36541__$1 = state_36541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36541__$1,(4),in$);
} else {
if((state_val_36542 === (23))){
var inst_36534 = (state_36541[(2)]);
var state_36541__$1 = state_36541;
var statearr_36572_38087 = state_36541__$1;
(statearr_36572_38087[(2)] = inst_36534);

(statearr_36572_38087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (19))){
var inst_36521 = (state_36541[(2)]);
var state_36541__$1 = state_36541;
var statearr_36574_38088 = state_36541__$1;
(statearr_36574_38088[(2)] = inst_36521);

(statearr_36574_38088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (11))){
var inst_36505 = (state_36541[(7)]);
var inst_36490 = (state_36541[(11)]);
var inst_36505__$1 = cljs.core.seq(inst_36490);
var state_36541__$1 = (function (){var statearr_36575 = state_36541;
(statearr_36575[(7)] = inst_36505__$1);

return statearr_36575;
})();
if(inst_36505__$1){
var statearr_36576_38092 = state_36541__$1;
(statearr_36576_38092[(1)] = (14));

} else {
var statearr_36577_38093 = state_36541__$1;
(statearr_36577_38093[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (9))){
var inst_36528 = (state_36541[(2)]);
var inst_36529 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36541__$1 = (function (){var statearr_36579 = state_36541;
(statearr_36579[(15)] = inst_36528);

return statearr_36579;
})();
if(cljs.core.truth_(inst_36529)){
var statearr_36580_38094 = state_36541__$1;
(statearr_36580_38094[(1)] = (21));

} else {
var statearr_36581_38095 = state_36541__$1;
(statearr_36581_38095[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (5))){
var inst_36482 = cljs.core.async.close_BANG_(out);
var state_36541__$1 = state_36541;
var statearr_36583_38096 = state_36541__$1;
(statearr_36583_38096[(2)] = inst_36482);

(statearr_36583_38096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (14))){
var inst_36505 = (state_36541[(7)]);
var inst_36507 = cljs.core.chunked_seq_QMARK_(inst_36505);
var state_36541__$1 = state_36541;
if(inst_36507){
var statearr_36584_38099 = state_36541__$1;
(statearr_36584_38099[(1)] = (17));

} else {
var statearr_36585_38100 = state_36541__$1;
(statearr_36585_38100[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (16))){
var inst_36524 = (state_36541[(2)]);
var state_36541__$1 = state_36541;
var statearr_36587_38102 = state_36541__$1;
(statearr_36587_38102[(2)] = inst_36524);

(statearr_36587_38102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36542 === (10))){
var inst_36491 = (state_36541[(10)]);
var inst_36493 = (state_36541[(12)]);
var inst_36499 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36491,inst_36493);
var state_36541__$1 = state_36541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36541__$1,(13),out,inst_36499);
} else {
if((state_val_36542 === (18))){
var inst_36505 = (state_36541[(7)]);
var inst_36514 = cljs.core.first(inst_36505);
var state_36541__$1 = state_36541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36541__$1,(20),out,inst_36514);
} else {
if((state_val_36542 === (8))){
var inst_36492 = (state_36541[(9)]);
var inst_36493 = (state_36541[(12)]);
var inst_36496 = (inst_36493 < inst_36492);
var inst_36497 = inst_36496;
var state_36541__$1 = state_36541;
if(cljs.core.truth_(inst_36497)){
var statearr_36589_38105 = state_36541__$1;
(statearr_36589_38105[(1)] = (10));

} else {
var statearr_36590_38106 = state_36541__$1;
(statearr_36590_38106[(1)] = (11));

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
var statearr_36592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36592[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36592[(1)] = (1));

return statearr_36592;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36541){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36541);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36593){if((e36593 instanceof Object)){
var ex__34210__auto__ = e36593;
var statearr_36594_38108 = state_36541;
(statearr_36594_38108[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38110 = state_36541;
state_36541 = G__38110;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36541){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36596 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36596[(6)] = c__34274__auto__);

return statearr_36596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36599 = arguments.length;
switch (G__36599) {
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
var G__36603 = arguments.length;
switch (G__36603) {
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
var c__34274__auto___38120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36633){
var state_val_36634 = (state_36633[(1)]);
if((state_val_36634 === (7))){
var inst_36628 = (state_36633[(2)]);
var state_36633__$1 = state_36633;
var statearr_36636_38123 = state_36633__$1;
(statearr_36636_38123[(2)] = inst_36628);

(statearr_36636_38123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (1))){
var inst_36610 = null;
var state_36633__$1 = (function (){var statearr_36638 = state_36633;
(statearr_36638[(7)] = inst_36610);

return statearr_36638;
})();
var statearr_36639_38124 = state_36633__$1;
(statearr_36639_38124[(2)] = null);

(statearr_36639_38124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (4))){
var inst_36613 = (state_36633[(8)]);
var inst_36613__$1 = (state_36633[(2)]);
var inst_36614 = (inst_36613__$1 == null);
var inst_36615 = cljs.core.not(inst_36614);
var state_36633__$1 = (function (){var statearr_36640 = state_36633;
(statearr_36640[(8)] = inst_36613__$1);

return statearr_36640;
})();
if(inst_36615){
var statearr_36642_38126 = state_36633__$1;
(statearr_36642_38126[(1)] = (5));

} else {
var statearr_36643_38127 = state_36633__$1;
(statearr_36643_38127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (6))){
var state_36633__$1 = state_36633;
var statearr_36644_38129 = state_36633__$1;
(statearr_36644_38129[(2)] = null);

(statearr_36644_38129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (3))){
var inst_36630 = (state_36633[(2)]);
var inst_36631 = cljs.core.async.close_BANG_(out);
var state_36633__$1 = (function (){var statearr_36646 = state_36633;
(statearr_36646[(9)] = inst_36630);

return statearr_36646;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36633__$1,inst_36631);
} else {
if((state_val_36634 === (2))){
var state_36633__$1 = state_36633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36633__$1,(4),ch);
} else {
if((state_val_36634 === (11))){
var inst_36613 = (state_36633[(8)]);
var inst_36622 = (state_36633[(2)]);
var inst_36610 = inst_36613;
var state_36633__$1 = (function (){var statearr_36647 = state_36633;
(statearr_36647[(7)] = inst_36610);

(statearr_36647[(10)] = inst_36622);

return statearr_36647;
})();
var statearr_36648_38131 = state_36633__$1;
(statearr_36648_38131[(2)] = null);

(statearr_36648_38131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (9))){
var inst_36613 = (state_36633[(8)]);
var state_36633__$1 = state_36633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36633__$1,(11),out,inst_36613);
} else {
if((state_val_36634 === (5))){
var inst_36610 = (state_36633[(7)]);
var inst_36613 = (state_36633[(8)]);
var inst_36617 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36613,inst_36610);
var state_36633__$1 = state_36633;
if(inst_36617){
var statearr_36651_38135 = state_36633__$1;
(statearr_36651_38135[(1)] = (8));

} else {
var statearr_36652_38136 = state_36633__$1;
(statearr_36652_38136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (10))){
var inst_36625 = (state_36633[(2)]);
var state_36633__$1 = state_36633;
var statearr_36653_38137 = state_36633__$1;
(statearr_36653_38137[(2)] = inst_36625);

(statearr_36653_38137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (8))){
var inst_36610 = (state_36633[(7)]);
var tmp36650 = inst_36610;
var inst_36610__$1 = tmp36650;
var state_36633__$1 = (function (){var statearr_36655 = state_36633;
(statearr_36655[(7)] = inst_36610__$1);

return statearr_36655;
})();
var statearr_36656_38139 = state_36633__$1;
(statearr_36656_38139[(2)] = null);

(statearr_36656_38139[(1)] = (2));


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
}catch (e36659){if((e36659 instanceof Object)){
var ex__34210__auto__ = e36659;
var statearr_36660_38142 = state_36633;
(statearr_36660_38142[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36659;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38143 = state_36633;
state_36633 = G__38143;
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
(statearr_36661[(6)] = c__34274__auto___38120);

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
var G__36665 = arguments.length;
switch (G__36665) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36706){
var state_val_36707 = (state_36706[(1)]);
if((state_val_36707 === (7))){
var inst_36701 = (state_36706[(2)]);
var state_36706__$1 = state_36706;
var statearr_36709_38149 = state_36706__$1;
(statearr_36709_38149[(2)] = inst_36701);

(statearr_36709_38149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (1))){
var inst_36668 = (new Array(n));
var inst_36669 = inst_36668;
var inst_36670 = (0);
var state_36706__$1 = (function (){var statearr_36710 = state_36706;
(statearr_36710[(7)] = inst_36669);

(statearr_36710[(8)] = inst_36670);

return statearr_36710;
})();
var statearr_36711_38152 = state_36706__$1;
(statearr_36711_38152[(2)] = null);

(statearr_36711_38152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (4))){
var inst_36673 = (state_36706[(9)]);
var inst_36673__$1 = (state_36706[(2)]);
var inst_36674 = (inst_36673__$1 == null);
var inst_36675 = cljs.core.not(inst_36674);
var state_36706__$1 = (function (){var statearr_36713 = state_36706;
(statearr_36713[(9)] = inst_36673__$1);

return statearr_36713;
})();
if(inst_36675){
var statearr_36714_38154 = state_36706__$1;
(statearr_36714_38154[(1)] = (5));

} else {
var statearr_36715_38155 = state_36706__$1;
(statearr_36715_38155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (15))){
var inst_36695 = (state_36706[(2)]);
var state_36706__$1 = state_36706;
var statearr_36716_38156 = state_36706__$1;
(statearr_36716_38156[(2)] = inst_36695);

(statearr_36716_38156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (13))){
var state_36706__$1 = state_36706;
var statearr_36718_38158 = state_36706__$1;
(statearr_36718_38158[(2)] = null);

(statearr_36718_38158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (6))){
var inst_36670 = (state_36706[(8)]);
var inst_36691 = (inst_36670 > (0));
var state_36706__$1 = state_36706;
if(cljs.core.truth_(inst_36691)){
var statearr_36719_38161 = state_36706__$1;
(statearr_36719_38161[(1)] = (12));

} else {
var statearr_36720_38162 = state_36706__$1;
(statearr_36720_38162[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (3))){
var inst_36703 = (state_36706[(2)]);
var state_36706__$1 = state_36706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36706__$1,inst_36703);
} else {
if((state_val_36707 === (12))){
var inst_36669 = (state_36706[(7)]);
var inst_36693 = cljs.core.vec(inst_36669);
var state_36706__$1 = state_36706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36706__$1,(15),out,inst_36693);
} else {
if((state_val_36707 === (2))){
var state_36706__$1 = state_36706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36706__$1,(4),ch);
} else {
if((state_val_36707 === (11))){
var inst_36685 = (state_36706[(2)]);
var inst_36686 = (new Array(n));
var inst_36669 = inst_36686;
var inst_36670 = (0);
var state_36706__$1 = (function (){var statearr_36723 = state_36706;
(statearr_36723[(7)] = inst_36669);

(statearr_36723[(10)] = inst_36685);

(statearr_36723[(8)] = inst_36670);

return statearr_36723;
})();
var statearr_36724_38165 = state_36706__$1;
(statearr_36724_38165[(2)] = null);

(statearr_36724_38165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (9))){
var inst_36669 = (state_36706[(7)]);
var inst_36683 = cljs.core.vec(inst_36669);
var state_36706__$1 = state_36706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36706__$1,(11),out,inst_36683);
} else {
if((state_val_36707 === (5))){
var inst_36669 = (state_36706[(7)]);
var inst_36673 = (state_36706[(9)]);
var inst_36670 = (state_36706[(8)]);
var inst_36678 = (state_36706[(11)]);
var inst_36677 = (inst_36669[inst_36670] = inst_36673);
var inst_36678__$1 = (inst_36670 + (1));
var inst_36679 = (inst_36678__$1 < n);
var state_36706__$1 = (function (){var statearr_36726 = state_36706;
(statearr_36726[(12)] = inst_36677);

(statearr_36726[(11)] = inst_36678__$1);

return statearr_36726;
})();
if(cljs.core.truth_(inst_36679)){
var statearr_36727_38167 = state_36706__$1;
(statearr_36727_38167[(1)] = (8));

} else {
var statearr_36728_38168 = state_36706__$1;
(statearr_36728_38168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (14))){
var inst_36698 = (state_36706[(2)]);
var inst_36699 = cljs.core.async.close_BANG_(out);
var state_36706__$1 = (function (){var statearr_36731 = state_36706;
(statearr_36731[(13)] = inst_36698);

return statearr_36731;
})();
var statearr_36732_38170 = state_36706__$1;
(statearr_36732_38170[(2)] = inst_36699);

(statearr_36732_38170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (10))){
var inst_36689 = (state_36706[(2)]);
var state_36706__$1 = state_36706;
var statearr_36733_38172 = state_36706__$1;
(statearr_36733_38172[(2)] = inst_36689);

(statearr_36733_38172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (8))){
var inst_36669 = (state_36706[(7)]);
var inst_36678 = (state_36706[(11)]);
var tmp36729 = inst_36669;
var inst_36669__$1 = tmp36729;
var inst_36670 = inst_36678;
var state_36706__$1 = (function (){var statearr_36734 = state_36706;
(statearr_36734[(7)] = inst_36669__$1);

(statearr_36734[(8)] = inst_36670);

return statearr_36734;
})();
var statearr_36736_38174 = state_36706__$1;
(statearr_36736_38174[(2)] = null);

(statearr_36736_38174[(1)] = (2));


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
var statearr_36739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36739[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36739[(1)] = (1));

return statearr_36739;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36706){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36706);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36744){if((e36744 instanceof Object)){
var ex__34210__auto__ = e36744;
var statearr_36746_38175 = state_36706;
(statearr_36746_38175[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36744;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38177 = state_36706;
state_36706 = G__38177;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36748 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36748[(6)] = c__34274__auto___38148);

return statearr_36748;
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
var c__34274__auto___38181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36796){
var state_val_36797 = (state_36796[(1)]);
if((state_val_36797 === (7))){
var inst_36792 = (state_36796[(2)]);
var state_36796__$1 = state_36796;
var statearr_36799_38182 = state_36796__$1;
(statearr_36799_38182[(2)] = inst_36792);

(statearr_36799_38182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36797 === (1))){
var inst_36754 = [];
var inst_36755 = inst_36754;
var inst_36756 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36796__$1 = (function (){var statearr_36800 = state_36796;
(statearr_36800[(7)] = inst_36756);

(statearr_36800[(8)] = inst_36755);

return statearr_36800;
})();
var statearr_36801_38183 = state_36796__$1;
(statearr_36801_38183[(2)] = null);

(statearr_36801_38183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36797 === (4))){
var inst_36759 = (state_36796[(9)]);
var inst_36759__$1 = (state_36796[(2)]);
var inst_36760 = (inst_36759__$1 == null);
var inst_36761 = cljs.core.not(inst_36760);
var state_36796__$1 = (function (){var statearr_36803 = state_36796;
(statearr_36803[(9)] = inst_36759__$1);

return statearr_36803;
})();
if(inst_36761){
var statearr_36804_38185 = state_36796__$1;
(statearr_36804_38185[(1)] = (5));

} else {
var statearr_36805_38186 = state_36796__$1;
(statearr_36805_38186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36797 === (15))){
var inst_36786 = (state_36796[(2)]);
var state_36796__$1 = state_36796;
var statearr_36807_38188 = state_36796__$1;
(statearr_36807_38188[(2)] = inst_36786);

(statearr_36807_38188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36797 === (13))){
var state_36796__$1 = state_36796;
var statearr_36808_38193 = state_36796__$1;
(statearr_36808_38193[(2)] = null);

(statearr_36808_38193[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36797 === (6))){
var inst_36755 = (state_36796[(8)]);
var inst_36781 = inst_36755.length;
var inst_36782 = (inst_36781 > (0));
var state_36796__$1 = state_36796;
if(cljs.core.truth_(inst_36782)){
var statearr_36809_38194 = state_36796__$1;
(statearr_36809_38194[(1)] = (12));

} else {
var statearr_36811_38195 = state_36796__$1;
(statearr_36811_38195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36797 === (3))){
var inst_36794 = (state_36796[(2)]);
var state_36796__$1 = state_36796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36796__$1,inst_36794);
} else {
if((state_val_36797 === (12))){
var inst_36755 = (state_36796[(8)]);
var inst_36784 = cljs.core.vec(inst_36755);
var state_36796__$1 = state_36796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36796__$1,(15),out,inst_36784);
} else {
if((state_val_36797 === (2))){
var state_36796__$1 = state_36796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36796__$1,(4),ch);
} else {
if((state_val_36797 === (11))){
var inst_36759 = (state_36796[(9)]);
var inst_36763 = (state_36796[(10)]);
var inst_36773 = (state_36796[(2)]);
var inst_36774 = [];
var inst_36775 = inst_36774.push(inst_36759);
var inst_36755 = inst_36774;
var inst_36756 = inst_36763;
var state_36796__$1 = (function (){var statearr_36813 = state_36796;
(statearr_36813[(11)] = inst_36773);

(statearr_36813[(7)] = inst_36756);

(statearr_36813[(8)] = inst_36755);

(statearr_36813[(12)] = inst_36775);

return statearr_36813;
})();
var statearr_36814_38199 = state_36796__$1;
(statearr_36814_38199[(2)] = null);

(statearr_36814_38199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36797 === (9))){
var inst_36755 = (state_36796[(8)]);
var inst_36771 = cljs.core.vec(inst_36755);
var state_36796__$1 = state_36796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36796__$1,(11),out,inst_36771);
} else {
if((state_val_36797 === (5))){
var inst_36759 = (state_36796[(9)]);
var inst_36763 = (state_36796[(10)]);
var inst_36756 = (state_36796[(7)]);
var inst_36763__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36759) : f.call(null,inst_36759));
var inst_36764 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36763__$1,inst_36756);
var inst_36765 = cljs.core.keyword_identical_QMARK_(inst_36756,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36766 = ((inst_36764) || (inst_36765));
var state_36796__$1 = (function (){var statearr_36817 = state_36796;
(statearr_36817[(10)] = inst_36763__$1);

return statearr_36817;
})();
if(cljs.core.truth_(inst_36766)){
var statearr_36818_38204 = state_36796__$1;
(statearr_36818_38204[(1)] = (8));

} else {
var statearr_36819_38206 = state_36796__$1;
(statearr_36819_38206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36797 === (14))){
var inst_36789 = (state_36796[(2)]);
var inst_36790 = cljs.core.async.close_BANG_(out);
var state_36796__$1 = (function (){var statearr_36822 = state_36796;
(statearr_36822[(13)] = inst_36789);

return statearr_36822;
})();
var statearr_36823_38208 = state_36796__$1;
(statearr_36823_38208[(2)] = inst_36790);

(statearr_36823_38208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36797 === (10))){
var inst_36779 = (state_36796[(2)]);
var state_36796__$1 = state_36796;
var statearr_36824_38209 = state_36796__$1;
(statearr_36824_38209[(2)] = inst_36779);

(statearr_36824_38209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36797 === (8))){
var inst_36759 = (state_36796[(9)]);
var inst_36763 = (state_36796[(10)]);
var inst_36755 = (state_36796[(8)]);
var inst_36768 = inst_36755.push(inst_36759);
var tmp36820 = inst_36755;
var inst_36755__$1 = tmp36820;
var inst_36756 = inst_36763;
var state_36796__$1 = (function (){var statearr_36826 = state_36796;
(statearr_36826[(7)] = inst_36756);

(statearr_36826[(8)] = inst_36755__$1);

(statearr_36826[(14)] = inst_36768);

return statearr_36826;
})();
var statearr_36827_38210 = state_36796__$1;
(statearr_36827_38210[(2)] = null);

(statearr_36827_38210[(1)] = (2));


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
var statearr_36829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36829[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36829[(1)] = (1));

return statearr_36829;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36796){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36796);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36830){if((e36830 instanceof Object)){
var ex__34210__auto__ = e36830;
var statearr_36831_38214 = state_36796;
(statearr_36831_38214[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36830;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38215 = state_36796;
state_36796 = G__38215;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36833 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36833[(6)] = c__34274__auto___38181);

return statearr_36833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
