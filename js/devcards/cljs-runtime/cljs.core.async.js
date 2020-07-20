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
var G__37326 = arguments.length;
switch (G__37326) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37327 = (function (f,blockable,meta37328){
this.f = f;
this.blockable = blockable;
this.meta37328 = meta37328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37329,meta37328__$1){
var self__ = this;
var _37329__$1 = this;
return (new cljs.core.async.t_cljs$core$async37327(self__.f,self__.blockable,meta37328__$1));
}));

(cljs.core.async.t_cljs$core$async37327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37329){
var self__ = this;
var _37329__$1 = this;
return self__.meta37328;
}));

(cljs.core.async.t_cljs$core$async37327.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37327.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37328","meta37328",1964187362,null)], null);
}));

(cljs.core.async.t_cljs$core$async37327.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37327");

(cljs.core.async.t_cljs$core$async37327.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37327");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37327.
 */
cljs.core.async.__GT_t_cljs$core$async37327 = (function cljs$core$async$__GT_t_cljs$core$async37327(f__$1,blockable__$1,meta37328){
return (new cljs.core.async.t_cljs$core$async37327(f__$1,blockable__$1,meta37328));
});

}

return (new cljs.core.async.t_cljs$core$async37327(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37334 = arguments.length;
switch (G__37334) {
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
var G__37336 = arguments.length;
switch (G__37336) {
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
var G__37338 = arguments.length;
switch (G__37338) {
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
var val_38795 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38795) : fn1.call(null,val_38795));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_38795) : fn1.call(null,val_38795));
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
var G__37340 = arguments.length;
switch (G__37340) {
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
var n__4666__auto___38801 = n;
var x_38802 = (0);
while(true){
if((x_38802 < n__4666__auto___38801)){
(a[x_38802] = x_38802);

var G__38803 = (x_38802 + (1));
x_38802 = G__38803;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37341 = (function (flag,meta37342){
this.flag = flag;
this.meta37342 = meta37342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37343,meta37342__$1){
var self__ = this;
var _37343__$1 = this;
return (new cljs.core.async.t_cljs$core$async37341(self__.flag,meta37342__$1));
}));

(cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37343){
var self__ = this;
var _37343__$1 = this;
return self__.meta37342;
}));

(cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37342","meta37342",-661119865,null)], null);
}));

(cljs.core.async.t_cljs$core$async37341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37341");

(cljs.core.async.t_cljs$core$async37341.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37341.
 */
cljs.core.async.__GT_t_cljs$core$async37341 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37341(flag__$1,meta37342){
return (new cljs.core.async.t_cljs$core$async37341(flag__$1,meta37342));
});

}

return (new cljs.core.async.t_cljs$core$async37341(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37344 = (function (flag,cb,meta37345){
this.flag = flag;
this.cb = cb;
this.meta37345 = meta37345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37346,meta37345__$1){
var self__ = this;
var _37346__$1 = this;
return (new cljs.core.async.t_cljs$core$async37344(self__.flag,self__.cb,meta37345__$1));
}));

(cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37346){
var self__ = this;
var _37346__$1 = this;
return self__.meta37345;
}));

(cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37345","meta37345",2136605288,null)], null);
}));

(cljs.core.async.t_cljs$core$async37344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37344");

(cljs.core.async.t_cljs$core$async37344.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37344.
 */
cljs.core.async.__GT_t_cljs$core$async37344 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37344(flag__$1,cb__$1,meta37345){
return (new cljs.core.async.t_cljs$core$async37344(flag__$1,cb__$1,meta37345));
});

}

return (new cljs.core.async.t_cljs$core$async37344(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37351_SHARP_){
var G__37355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37351_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37355) : fret.call(null,G__37355));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37352_SHARP_){
var G__37356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37352_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37356) : fret.call(null,G__37356));
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
var G__38809 = (i + (1));
i = G__38809;
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
var len__4789__auto___38814 = arguments.length;
var i__4790__auto___38815 = (0);
while(true){
if((i__4790__auto___38815 < len__4789__auto___38814)){
args__4795__auto__.push((arguments[i__4790__auto___38815]));

var G__38816 = (i__4790__auto___38815 + (1));
i__4790__auto___38815 = G__38816;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37361){
var map__37362 = p__37361;
var map__37362__$1 = (((((!((map__37362 == null))))?(((((map__37362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37362):map__37362);
var opts = map__37362__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37359){
var G__37360 = cljs.core.first(seq37359);
var seq37359__$1 = cljs.core.next(seq37359);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37360,seq37359__$1);
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
var G__37368 = arguments.length;
switch (G__37368) {
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
var c__37268__auto___38825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_37393){
var state_val_37394 = (state_37393[(1)]);
if((state_val_37394 === (7))){
var inst_37389 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37395_38826 = state_37393__$1;
(statearr_37395_38826[(2)] = inst_37389);

(statearr_37395_38826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (1))){
var state_37393__$1 = state_37393;
var statearr_37396_38827 = state_37393__$1;
(statearr_37396_38827[(2)] = null);

(statearr_37396_38827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (4))){
var inst_37372 = (state_37393[(7)]);
var inst_37372__$1 = (state_37393[(2)]);
var inst_37373 = (inst_37372__$1 == null);
var state_37393__$1 = (function (){var statearr_37397 = state_37393;
(statearr_37397[(7)] = inst_37372__$1);

return statearr_37397;
})();
if(cljs.core.truth_(inst_37373)){
var statearr_37398_38829 = state_37393__$1;
(statearr_37398_38829[(1)] = (5));

} else {
var statearr_37399_38830 = state_37393__$1;
(statearr_37399_38830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (13))){
var state_37393__$1 = state_37393;
var statearr_37400_38831 = state_37393__$1;
(statearr_37400_38831[(2)] = null);

(statearr_37400_38831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (6))){
var inst_37372 = (state_37393[(7)]);
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37393__$1,(11),to,inst_37372);
} else {
if((state_val_37394 === (3))){
var inst_37391 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37393__$1,inst_37391);
} else {
if((state_val_37394 === (12))){
var state_37393__$1 = state_37393;
var statearr_37401_38832 = state_37393__$1;
(statearr_37401_38832[(2)] = null);

(statearr_37401_38832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (2))){
var state_37393__$1 = state_37393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37393__$1,(4),from);
} else {
if((state_val_37394 === (11))){
var inst_37382 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
if(cljs.core.truth_(inst_37382)){
var statearr_37402_38836 = state_37393__$1;
(statearr_37402_38836[(1)] = (12));

} else {
var statearr_37403_38837 = state_37393__$1;
(statearr_37403_38837[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (9))){
var state_37393__$1 = state_37393;
var statearr_37404_38838 = state_37393__$1;
(statearr_37404_38838[(2)] = null);

(statearr_37404_38838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (5))){
var state_37393__$1 = state_37393;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37405_38839 = state_37393__$1;
(statearr_37405_38839[(1)] = (8));

} else {
var statearr_37406_38840 = state_37393__$1;
(statearr_37406_38840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (14))){
var inst_37387 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37407_38841 = state_37393__$1;
(statearr_37407_38841[(2)] = inst_37387);

(statearr_37407_38841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (10))){
var inst_37379 = (state_37393[(2)]);
var state_37393__$1 = state_37393;
var statearr_37408_38842 = state_37393__$1;
(statearr_37408_38842[(2)] = inst_37379);

(statearr_37408_38842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37394 === (8))){
var inst_37376 = cljs.core.async.close_BANG_(to);
var state_37393__$1 = state_37393;
var statearr_37409_38843 = state_37393__$1;
(statearr_37409_38843[(2)] = inst_37376);

(statearr_37409_38843[(1)] = (10));


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
var cljs$core$async$state_machine__37201__auto__ = null;
var cljs$core$async$state_machine__37201__auto____0 = (function (){
var statearr_37410 = [null,null,null,null,null,null,null,null];
(statearr_37410[(0)] = cljs$core$async$state_machine__37201__auto__);

(statearr_37410[(1)] = (1));

return statearr_37410;
});
var cljs$core$async$state_machine__37201__auto____1 = (function (state_37393){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_37393);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e37411){if((e37411 instanceof Object)){
var ex__37204__auto__ = e37411;
var statearr_37412_38844 = state_37393;
(statearr_37412_38844[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37411;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38845 = state_37393;
state_37393 = G__38845;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$state_machine__37201__auto__ = function(state_37393){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37201__auto____1.call(this,state_37393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37201__auto____0;
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37201__auto____1;
return cljs$core$async$state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_37413 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_37413[(6)] = c__37268__auto___38825);

return statearr_37413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
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
var process = (function (p__37414){
var vec__37415 = p__37414;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37415,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37415,(1),null);
var job = vec__37415;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37268__auto___38846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_37422){
var state_val_37423 = (state_37422[(1)]);
if((state_val_37423 === (1))){
var state_37422__$1 = state_37422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37422__$1,(2),res,v);
} else {
if((state_val_37423 === (2))){
var inst_37419 = (state_37422[(2)]);
var inst_37420 = cljs.core.async.close_BANG_(res);
var state_37422__$1 = (function (){var statearr_37424 = state_37422;
(statearr_37424[(7)] = inst_37419);

return statearr_37424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37422__$1,inst_37420);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____0 = (function (){
var statearr_37425 = [null,null,null,null,null,null,null,null];
(statearr_37425[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__);

(statearr_37425[(1)] = (1));

return statearr_37425;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____1 = (function (state_37422){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_37422);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e37426){if((e37426 instanceof Object)){
var ex__37204__auto__ = e37426;
var statearr_37427_38847 = state_37422;
(statearr_37427_38847[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37426;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38848 = state_37422;
state_37422 = G__38848;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__ = function(state_37422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____1.call(this,state_37422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_37428 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_37428[(6)] = c__37268__auto___38846);

return statearr_37428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37429){
var vec__37430 = p__37429;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37430,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37430,(1),null);
var job = vec__37430;
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
var n__4666__auto___38861 = n;
var __38862 = (0);
while(true){
if((__38862 < n__4666__auto___38861)){
var G__37433_38863 = type;
var G__37433_38864__$1 = (((G__37433_38863 instanceof cljs.core.Keyword))?G__37433_38863.fqn:null);
switch (G__37433_38864__$1) {
case "compute":
var c__37268__auto___38866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38862,c__37268__auto___38866,G__37433_38863,G__37433_38864__$1,n__4666__auto___38861,jobs,results,process,async){
return (function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = ((function (__38862,c__37268__auto___38866,G__37433_38863,G__37433_38864__$1,n__4666__auto___38861,jobs,results,process,async){
return (function (state_37446){
var state_val_37447 = (state_37446[(1)]);
if((state_val_37447 === (1))){
var state_37446__$1 = state_37446;
var statearr_37448_38867 = state_37446__$1;
(statearr_37448_38867[(2)] = null);

(statearr_37448_38867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (2))){
var state_37446__$1 = state_37446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37446__$1,(4),jobs);
} else {
if((state_val_37447 === (3))){
var inst_37444 = (state_37446[(2)]);
var state_37446__$1 = state_37446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37446__$1,inst_37444);
} else {
if((state_val_37447 === (4))){
var inst_37436 = (state_37446[(2)]);
var inst_37437 = process(inst_37436);
var state_37446__$1 = state_37446;
if(cljs.core.truth_(inst_37437)){
var statearr_37449_38869 = state_37446__$1;
(statearr_37449_38869[(1)] = (5));

} else {
var statearr_37450_38870 = state_37446__$1;
(statearr_37450_38870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (5))){
var state_37446__$1 = state_37446;
var statearr_37451_38871 = state_37446__$1;
(statearr_37451_38871[(2)] = null);

(statearr_37451_38871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (6))){
var state_37446__$1 = state_37446;
var statearr_37452_38873 = state_37446__$1;
(statearr_37452_38873[(2)] = null);

(statearr_37452_38873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (7))){
var inst_37442 = (state_37446[(2)]);
var state_37446__$1 = state_37446;
var statearr_37453_38874 = state_37446__$1;
(statearr_37453_38874[(2)] = inst_37442);

(statearr_37453_38874[(1)] = (3));


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
});})(__38862,c__37268__auto___38866,G__37433_38863,G__37433_38864__$1,n__4666__auto___38861,jobs,results,process,async))
;
return ((function (__38862,switch__37200__auto__,c__37268__auto___38866,G__37433_38863,G__37433_38864__$1,n__4666__auto___38861,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____0 = (function (){
var statearr_37454 = [null,null,null,null,null,null,null];
(statearr_37454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__);

(statearr_37454[(1)] = (1));

return statearr_37454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____1 = (function (state_37446){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_37446);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e37455){if((e37455 instanceof Object)){
var ex__37204__auto__ = e37455;
var statearr_37456_38876 = state_37446;
(statearr_37456_38876[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37455;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38878 = state_37446;
state_37446 = G__38878;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__ = function(state_37446){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____1.call(this,state_37446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__;
})()
;})(__38862,switch__37200__auto__,c__37268__auto___38866,G__37433_38863,G__37433_38864__$1,n__4666__auto___38861,jobs,results,process,async))
})();
var state__37270__auto__ = (function (){var statearr_37457 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_37457[(6)] = c__37268__auto___38866);

return statearr_37457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
});})(__38862,c__37268__auto___38866,G__37433_38863,G__37433_38864__$1,n__4666__auto___38861,jobs,results,process,async))
);


break;
case "async":
var c__37268__auto___38879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__38862,c__37268__auto___38879,G__37433_38863,G__37433_38864__$1,n__4666__auto___38861,jobs,results,process,async){
return (function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = ((function (__38862,c__37268__auto___38879,G__37433_38863,G__37433_38864__$1,n__4666__auto___38861,jobs,results,process,async){
return (function (state_37470){
var state_val_37471 = (state_37470[(1)]);
if((state_val_37471 === (1))){
var state_37470__$1 = state_37470;
var statearr_37472_38880 = state_37470__$1;
(statearr_37472_38880[(2)] = null);

(statearr_37472_38880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (2))){
var state_37470__$1 = state_37470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37470__$1,(4),jobs);
} else {
if((state_val_37471 === (3))){
var inst_37468 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37470__$1,inst_37468);
} else {
if((state_val_37471 === (4))){
var inst_37460 = (state_37470[(2)]);
var inst_37461 = async(inst_37460);
var state_37470__$1 = state_37470;
if(cljs.core.truth_(inst_37461)){
var statearr_37473_38881 = state_37470__$1;
(statearr_37473_38881[(1)] = (5));

} else {
var statearr_37474_38882 = state_37470__$1;
(statearr_37474_38882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (5))){
var state_37470__$1 = state_37470;
var statearr_37475_38883 = state_37470__$1;
(statearr_37475_38883[(2)] = null);

(statearr_37475_38883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (6))){
var state_37470__$1 = state_37470;
var statearr_37476_38884 = state_37470__$1;
(statearr_37476_38884[(2)] = null);

(statearr_37476_38884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (7))){
var inst_37466 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
var statearr_37477_38885 = state_37470__$1;
(statearr_37477_38885[(2)] = inst_37466);

(statearr_37477_38885[(1)] = (3));


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
});})(__38862,c__37268__auto___38879,G__37433_38863,G__37433_38864__$1,n__4666__auto___38861,jobs,results,process,async))
;
return ((function (__38862,switch__37200__auto__,c__37268__auto___38879,G__37433_38863,G__37433_38864__$1,n__4666__auto___38861,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____0 = (function (){
var statearr_37478 = [null,null,null,null,null,null,null];
(statearr_37478[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__);

(statearr_37478[(1)] = (1));

return statearr_37478;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____1 = (function (state_37470){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_37470);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e37479){if((e37479 instanceof Object)){
var ex__37204__auto__ = e37479;
var statearr_37480_38886 = state_37470;
(statearr_37480_38886[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37479;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38887 = state_37470;
state_37470 = G__38887;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__ = function(state_37470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____1.call(this,state_37470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__;
})()
;})(__38862,switch__37200__auto__,c__37268__auto___38879,G__37433_38863,G__37433_38864__$1,n__4666__auto___38861,jobs,results,process,async))
})();
var state__37270__auto__ = (function (){var statearr_37481 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_37481[(6)] = c__37268__auto___38879);

return statearr_37481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
});})(__38862,c__37268__auto___38879,G__37433_38863,G__37433_38864__$1,n__4666__auto___38861,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37433_38864__$1)].join('')));

}

var G__38888 = (__38862 + (1));
__38862 = G__38888;
continue;
} else {
}
break;
}

var c__37268__auto___38889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_37503){
var state_val_37504 = (state_37503[(1)]);
if((state_val_37504 === (7))){
var inst_37499 = (state_37503[(2)]);
var state_37503__$1 = state_37503;
var statearr_37505_38890 = state_37503__$1;
(statearr_37505_38890[(2)] = inst_37499);

(statearr_37505_38890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37504 === (1))){
var state_37503__$1 = state_37503;
var statearr_37506_38891 = state_37503__$1;
(statearr_37506_38891[(2)] = null);

(statearr_37506_38891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37504 === (4))){
var inst_37484 = (state_37503[(7)]);
var inst_37484__$1 = (state_37503[(2)]);
var inst_37485 = (inst_37484__$1 == null);
var state_37503__$1 = (function (){var statearr_37507 = state_37503;
(statearr_37507[(7)] = inst_37484__$1);

return statearr_37507;
})();
if(cljs.core.truth_(inst_37485)){
var statearr_37508_38892 = state_37503__$1;
(statearr_37508_38892[(1)] = (5));

} else {
var statearr_37509_38893 = state_37503__$1;
(statearr_37509_38893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37504 === (6))){
var inst_37489 = (state_37503[(8)]);
var inst_37484 = (state_37503[(7)]);
var inst_37489__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37490 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37491 = [inst_37484,inst_37489__$1];
var inst_37492 = (new cljs.core.PersistentVector(null,2,(5),inst_37490,inst_37491,null));
var state_37503__$1 = (function (){var statearr_37510 = state_37503;
(statearr_37510[(8)] = inst_37489__$1);

return statearr_37510;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37503__$1,(8),jobs,inst_37492);
} else {
if((state_val_37504 === (3))){
var inst_37501 = (state_37503[(2)]);
var state_37503__$1 = state_37503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37503__$1,inst_37501);
} else {
if((state_val_37504 === (2))){
var state_37503__$1 = state_37503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37503__$1,(4),from);
} else {
if((state_val_37504 === (9))){
var inst_37496 = (state_37503[(2)]);
var state_37503__$1 = (function (){var statearr_37511 = state_37503;
(statearr_37511[(9)] = inst_37496);

return statearr_37511;
})();
var statearr_37512_38894 = state_37503__$1;
(statearr_37512_38894[(2)] = null);

(statearr_37512_38894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37504 === (5))){
var inst_37487 = cljs.core.async.close_BANG_(jobs);
var state_37503__$1 = state_37503;
var statearr_37513_38895 = state_37503__$1;
(statearr_37513_38895[(2)] = inst_37487);

(statearr_37513_38895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37504 === (8))){
var inst_37489 = (state_37503[(8)]);
var inst_37494 = (state_37503[(2)]);
var state_37503__$1 = (function (){var statearr_37514 = state_37503;
(statearr_37514[(10)] = inst_37494);

return statearr_37514;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37503__$1,(9),results,inst_37489);
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
var cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____0 = (function (){
var statearr_37515 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37515[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__);

(statearr_37515[(1)] = (1));

return statearr_37515;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____1 = (function (state_37503){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_37503);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e37516){if((e37516 instanceof Object)){
var ex__37204__auto__ = e37516;
var statearr_37517_38896 = state_37503;
(statearr_37517_38896[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38897 = state_37503;
state_37503 = G__38897;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__ = function(state_37503){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____1.call(this,state_37503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_37518 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_37518[(6)] = c__37268__auto___38889);

return statearr_37518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
}));


var c__37268__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_37556){
var state_val_37557 = (state_37556[(1)]);
if((state_val_37557 === (7))){
var inst_37552 = (state_37556[(2)]);
var state_37556__$1 = state_37556;
var statearr_37558_38898 = state_37556__$1;
(statearr_37558_38898[(2)] = inst_37552);

(statearr_37558_38898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (20))){
var state_37556__$1 = state_37556;
var statearr_37559_38899 = state_37556__$1;
(statearr_37559_38899[(2)] = null);

(statearr_37559_38899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (1))){
var state_37556__$1 = state_37556;
var statearr_37560_38900 = state_37556__$1;
(statearr_37560_38900[(2)] = null);

(statearr_37560_38900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (4))){
var inst_37521 = (state_37556[(7)]);
var inst_37521__$1 = (state_37556[(2)]);
var inst_37522 = (inst_37521__$1 == null);
var state_37556__$1 = (function (){var statearr_37561 = state_37556;
(statearr_37561[(7)] = inst_37521__$1);

return statearr_37561;
})();
if(cljs.core.truth_(inst_37522)){
var statearr_37562_38901 = state_37556__$1;
(statearr_37562_38901[(1)] = (5));

} else {
var statearr_37563_38902 = state_37556__$1;
(statearr_37563_38902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (15))){
var inst_37534 = (state_37556[(8)]);
var state_37556__$1 = state_37556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37556__$1,(18),to,inst_37534);
} else {
if((state_val_37557 === (21))){
var inst_37547 = (state_37556[(2)]);
var state_37556__$1 = state_37556;
var statearr_37564_38903 = state_37556__$1;
(statearr_37564_38903[(2)] = inst_37547);

(statearr_37564_38903[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (13))){
var inst_37549 = (state_37556[(2)]);
var state_37556__$1 = (function (){var statearr_37565 = state_37556;
(statearr_37565[(9)] = inst_37549);

return statearr_37565;
})();
var statearr_37566_38904 = state_37556__$1;
(statearr_37566_38904[(2)] = null);

(statearr_37566_38904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (6))){
var inst_37521 = (state_37556[(7)]);
var state_37556__$1 = state_37556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37556__$1,(11),inst_37521);
} else {
if((state_val_37557 === (17))){
var inst_37542 = (state_37556[(2)]);
var state_37556__$1 = state_37556;
if(cljs.core.truth_(inst_37542)){
var statearr_37567_38905 = state_37556__$1;
(statearr_37567_38905[(1)] = (19));

} else {
var statearr_37568_38906 = state_37556__$1;
(statearr_37568_38906[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (3))){
var inst_37554 = (state_37556[(2)]);
var state_37556__$1 = state_37556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37556__$1,inst_37554);
} else {
if((state_val_37557 === (12))){
var inst_37531 = (state_37556[(10)]);
var state_37556__$1 = state_37556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37556__$1,(14),inst_37531);
} else {
if((state_val_37557 === (2))){
var state_37556__$1 = state_37556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37556__$1,(4),results);
} else {
if((state_val_37557 === (19))){
var state_37556__$1 = state_37556;
var statearr_37569_38907 = state_37556__$1;
(statearr_37569_38907[(2)] = null);

(statearr_37569_38907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (11))){
var inst_37531 = (state_37556[(2)]);
var state_37556__$1 = (function (){var statearr_37570 = state_37556;
(statearr_37570[(10)] = inst_37531);

return statearr_37570;
})();
var statearr_37571_38908 = state_37556__$1;
(statearr_37571_38908[(2)] = null);

(statearr_37571_38908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (9))){
var state_37556__$1 = state_37556;
var statearr_37572_38909 = state_37556__$1;
(statearr_37572_38909[(2)] = null);

(statearr_37572_38909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (5))){
var state_37556__$1 = state_37556;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37573_38910 = state_37556__$1;
(statearr_37573_38910[(1)] = (8));

} else {
var statearr_37574_38911 = state_37556__$1;
(statearr_37574_38911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (14))){
var inst_37534 = (state_37556[(8)]);
var inst_37534__$1 = (state_37556[(2)]);
var inst_37535 = (inst_37534__$1 == null);
var inst_37536 = cljs.core.not(inst_37535);
var state_37556__$1 = (function (){var statearr_37575 = state_37556;
(statearr_37575[(8)] = inst_37534__$1);

return statearr_37575;
})();
if(inst_37536){
var statearr_37576_38912 = state_37556__$1;
(statearr_37576_38912[(1)] = (15));

} else {
var statearr_37577_38913 = state_37556__$1;
(statearr_37577_38913[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (16))){
var state_37556__$1 = state_37556;
var statearr_37578_38914 = state_37556__$1;
(statearr_37578_38914[(2)] = false);

(statearr_37578_38914[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (10))){
var inst_37528 = (state_37556[(2)]);
var state_37556__$1 = state_37556;
var statearr_37579_38915 = state_37556__$1;
(statearr_37579_38915[(2)] = inst_37528);

(statearr_37579_38915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (18))){
var inst_37539 = (state_37556[(2)]);
var state_37556__$1 = state_37556;
var statearr_37580_38916 = state_37556__$1;
(statearr_37580_38916[(2)] = inst_37539);

(statearr_37580_38916[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37557 === (8))){
var inst_37525 = cljs.core.async.close_BANG_(to);
var state_37556__$1 = state_37556;
var statearr_37581_38917 = state_37556__$1;
(statearr_37581_38917[(2)] = inst_37525);

(statearr_37581_38917[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____0 = (function (){
var statearr_37582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37582[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__);

(statearr_37582[(1)] = (1));

return statearr_37582;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____1 = (function (state_37556){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_37556);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e37583){if((e37583 instanceof Object)){
var ex__37204__auto__ = e37583;
var statearr_37584_38918 = state_37556;
(statearr_37584_38918[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37583;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38919 = state_37556;
state_37556 = G__38919;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__ = function(state_37556){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____1.call(this,state_37556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37201__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_37585 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_37585[(6)] = c__37268__auto__);

return statearr_37585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
}));

return c__37268__auto__;
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
var G__37587 = arguments.length;
switch (G__37587) {
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
var G__37589 = arguments.length;
switch (G__37589) {
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
var G__37591 = arguments.length;
switch (G__37591) {
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
var c__37268__auto___38923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_37617){
var state_val_37618 = (state_37617[(1)]);
if((state_val_37618 === (7))){
var inst_37613 = (state_37617[(2)]);
var state_37617__$1 = state_37617;
var statearr_37619_38924 = state_37617__$1;
(statearr_37619_38924[(2)] = inst_37613);

(statearr_37619_38924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (1))){
var state_37617__$1 = state_37617;
var statearr_37620_38925 = state_37617__$1;
(statearr_37620_38925[(2)] = null);

(statearr_37620_38925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (4))){
var inst_37594 = (state_37617[(7)]);
var inst_37594__$1 = (state_37617[(2)]);
var inst_37595 = (inst_37594__$1 == null);
var state_37617__$1 = (function (){var statearr_37621 = state_37617;
(statearr_37621[(7)] = inst_37594__$1);

return statearr_37621;
})();
if(cljs.core.truth_(inst_37595)){
var statearr_37622_38926 = state_37617__$1;
(statearr_37622_38926[(1)] = (5));

} else {
var statearr_37623_38927 = state_37617__$1;
(statearr_37623_38927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (13))){
var state_37617__$1 = state_37617;
var statearr_37624_38928 = state_37617__$1;
(statearr_37624_38928[(2)] = null);

(statearr_37624_38928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (6))){
var inst_37594 = (state_37617[(7)]);
var inst_37600 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37594) : p.call(null,inst_37594));
var state_37617__$1 = state_37617;
if(cljs.core.truth_(inst_37600)){
var statearr_37625_38929 = state_37617__$1;
(statearr_37625_38929[(1)] = (9));

} else {
var statearr_37626_38930 = state_37617__$1;
(statearr_37626_38930[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (3))){
var inst_37615 = (state_37617[(2)]);
var state_37617__$1 = state_37617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37617__$1,inst_37615);
} else {
if((state_val_37618 === (12))){
var state_37617__$1 = state_37617;
var statearr_37627_38931 = state_37617__$1;
(statearr_37627_38931[(2)] = null);

(statearr_37627_38931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (2))){
var state_37617__$1 = state_37617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37617__$1,(4),ch);
} else {
if((state_val_37618 === (11))){
var inst_37594 = (state_37617[(7)]);
var inst_37604 = (state_37617[(2)]);
var state_37617__$1 = state_37617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37617__$1,(8),inst_37604,inst_37594);
} else {
if((state_val_37618 === (9))){
var state_37617__$1 = state_37617;
var statearr_37628_38932 = state_37617__$1;
(statearr_37628_38932[(2)] = tc);

(statearr_37628_38932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (5))){
var inst_37597 = cljs.core.async.close_BANG_(tc);
var inst_37598 = cljs.core.async.close_BANG_(fc);
var state_37617__$1 = (function (){var statearr_37629 = state_37617;
(statearr_37629[(8)] = inst_37597);

return statearr_37629;
})();
var statearr_37630_38933 = state_37617__$1;
(statearr_37630_38933[(2)] = inst_37598);

(statearr_37630_38933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (14))){
var inst_37611 = (state_37617[(2)]);
var state_37617__$1 = state_37617;
var statearr_37631_38934 = state_37617__$1;
(statearr_37631_38934[(2)] = inst_37611);

(statearr_37631_38934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (10))){
var state_37617__$1 = state_37617;
var statearr_37632_38935 = state_37617__$1;
(statearr_37632_38935[(2)] = fc);

(statearr_37632_38935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (8))){
var inst_37606 = (state_37617[(2)]);
var state_37617__$1 = state_37617;
if(cljs.core.truth_(inst_37606)){
var statearr_37633_38936 = state_37617__$1;
(statearr_37633_38936[(1)] = (12));

} else {
var statearr_37634_38937 = state_37617__$1;
(statearr_37634_38937[(1)] = (13));

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
var cljs$core$async$state_machine__37201__auto__ = null;
var cljs$core$async$state_machine__37201__auto____0 = (function (){
var statearr_37635 = [null,null,null,null,null,null,null,null,null];
(statearr_37635[(0)] = cljs$core$async$state_machine__37201__auto__);

(statearr_37635[(1)] = (1));

return statearr_37635;
});
var cljs$core$async$state_machine__37201__auto____1 = (function (state_37617){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_37617);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e37636){if((e37636 instanceof Object)){
var ex__37204__auto__ = e37636;
var statearr_37637_38938 = state_37617;
(statearr_37637_38938[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37636;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38939 = state_37617;
state_37617 = G__38939;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$state_machine__37201__auto__ = function(state_37617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37201__auto____1.call(this,state_37617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37201__auto____0;
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37201__auto____1;
return cljs$core$async$state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_37638 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_37638[(6)] = c__37268__auto___38923);

return statearr_37638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
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
var c__37268__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_37659){
var state_val_37660 = (state_37659[(1)]);
if((state_val_37660 === (7))){
var inst_37655 = (state_37659[(2)]);
var state_37659__$1 = state_37659;
var statearr_37661_38940 = state_37659__$1;
(statearr_37661_38940[(2)] = inst_37655);

(statearr_37661_38940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (1))){
var inst_37639 = init;
var state_37659__$1 = (function (){var statearr_37662 = state_37659;
(statearr_37662[(7)] = inst_37639);

return statearr_37662;
})();
var statearr_37663_38941 = state_37659__$1;
(statearr_37663_38941[(2)] = null);

(statearr_37663_38941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (4))){
var inst_37642 = (state_37659[(8)]);
var inst_37642__$1 = (state_37659[(2)]);
var inst_37643 = (inst_37642__$1 == null);
var state_37659__$1 = (function (){var statearr_37664 = state_37659;
(statearr_37664[(8)] = inst_37642__$1);

return statearr_37664;
})();
if(cljs.core.truth_(inst_37643)){
var statearr_37665_38942 = state_37659__$1;
(statearr_37665_38942[(1)] = (5));

} else {
var statearr_37666_38943 = state_37659__$1;
(statearr_37666_38943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (6))){
var inst_37646 = (state_37659[(9)]);
var inst_37642 = (state_37659[(8)]);
var inst_37639 = (state_37659[(7)]);
var inst_37646__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37639,inst_37642) : f.call(null,inst_37639,inst_37642));
var inst_37647 = cljs.core.reduced_QMARK_(inst_37646__$1);
var state_37659__$1 = (function (){var statearr_37667 = state_37659;
(statearr_37667[(9)] = inst_37646__$1);

return statearr_37667;
})();
if(inst_37647){
var statearr_37668_38944 = state_37659__$1;
(statearr_37668_38944[(1)] = (8));

} else {
var statearr_37669_38945 = state_37659__$1;
(statearr_37669_38945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (3))){
var inst_37657 = (state_37659[(2)]);
var state_37659__$1 = state_37659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37659__$1,inst_37657);
} else {
if((state_val_37660 === (2))){
var state_37659__$1 = state_37659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37659__$1,(4),ch);
} else {
if((state_val_37660 === (9))){
var inst_37646 = (state_37659[(9)]);
var inst_37639 = inst_37646;
var state_37659__$1 = (function (){var statearr_37670 = state_37659;
(statearr_37670[(7)] = inst_37639);

return statearr_37670;
})();
var statearr_37671_38946 = state_37659__$1;
(statearr_37671_38946[(2)] = null);

(statearr_37671_38946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (5))){
var inst_37639 = (state_37659[(7)]);
var state_37659__$1 = state_37659;
var statearr_37672_38947 = state_37659__$1;
(statearr_37672_38947[(2)] = inst_37639);

(statearr_37672_38947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (10))){
var inst_37653 = (state_37659[(2)]);
var state_37659__$1 = state_37659;
var statearr_37673_38948 = state_37659__$1;
(statearr_37673_38948[(2)] = inst_37653);

(statearr_37673_38948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37660 === (8))){
var inst_37646 = (state_37659[(9)]);
var inst_37649 = cljs.core.deref(inst_37646);
var state_37659__$1 = state_37659;
var statearr_37674_38949 = state_37659__$1;
(statearr_37674_38949[(2)] = inst_37649);

(statearr_37674_38949[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__37201__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37201__auto____0 = (function (){
var statearr_37675 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37675[(0)] = cljs$core$async$reduce_$_state_machine__37201__auto__);

(statearr_37675[(1)] = (1));

return statearr_37675;
});
var cljs$core$async$reduce_$_state_machine__37201__auto____1 = (function (state_37659){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_37659);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e37676){if((e37676 instanceof Object)){
var ex__37204__auto__ = e37676;
var statearr_37677_38950 = state_37659;
(statearr_37677_38950[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37676;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38951 = state_37659;
state_37659 = G__38951;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37201__auto__ = function(state_37659){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37201__auto____1.call(this,state_37659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37201__auto____0;
cljs$core$async$reduce_$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37201__auto____1;
return cljs$core$async$reduce_$_state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_37678 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_37678[(6)] = c__37268__auto__);

return statearr_37678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
}));

return c__37268__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37268__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_37684){
var state_val_37685 = (state_37684[(1)]);
if((state_val_37685 === (1))){
var inst_37679 = cljs.core.async.reduce(f__$1,init,ch);
var state_37684__$1 = state_37684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37684__$1,(2),inst_37679);
} else {
if((state_val_37685 === (2))){
var inst_37681 = (state_37684[(2)]);
var inst_37682 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37681) : f__$1.call(null,inst_37681));
var state_37684__$1 = state_37684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37684__$1,inst_37682);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37201__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37201__auto____0 = (function (){
var statearr_37686 = [null,null,null,null,null,null,null];
(statearr_37686[(0)] = cljs$core$async$transduce_$_state_machine__37201__auto__);

(statearr_37686[(1)] = (1));

return statearr_37686;
});
var cljs$core$async$transduce_$_state_machine__37201__auto____1 = (function (state_37684){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_37684);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e37687){if((e37687 instanceof Object)){
var ex__37204__auto__ = e37687;
var statearr_37688_38952 = state_37684;
(statearr_37688_38952[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37687;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38953 = state_37684;
state_37684 = G__38953;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37201__auto__ = function(state_37684){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37201__auto____1.call(this,state_37684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37201__auto____0;
cljs$core$async$transduce_$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37201__auto____1;
return cljs$core$async$transduce_$_state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_37689 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_37689[(6)] = c__37268__auto__);

return statearr_37689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
}));

return c__37268__auto__;
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
var G__37691 = arguments.length;
switch (G__37691) {
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
var c__37268__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_37716){
var state_val_37717 = (state_37716[(1)]);
if((state_val_37717 === (7))){
var inst_37698 = (state_37716[(2)]);
var state_37716__$1 = state_37716;
var statearr_37718_38955 = state_37716__$1;
(statearr_37718_38955[(2)] = inst_37698);

(statearr_37718_38955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37717 === (1))){
var inst_37692 = cljs.core.seq(coll);
var inst_37693 = inst_37692;
var state_37716__$1 = (function (){var statearr_37719 = state_37716;
(statearr_37719[(7)] = inst_37693);

return statearr_37719;
})();
var statearr_37720_38956 = state_37716__$1;
(statearr_37720_38956[(2)] = null);

(statearr_37720_38956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37717 === (4))){
var inst_37693 = (state_37716[(7)]);
var inst_37696 = cljs.core.first(inst_37693);
var state_37716__$1 = state_37716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37716__$1,(7),ch,inst_37696);
} else {
if((state_val_37717 === (13))){
var inst_37710 = (state_37716[(2)]);
var state_37716__$1 = state_37716;
var statearr_37721_38957 = state_37716__$1;
(statearr_37721_38957[(2)] = inst_37710);

(statearr_37721_38957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37717 === (6))){
var inst_37701 = (state_37716[(2)]);
var state_37716__$1 = state_37716;
if(cljs.core.truth_(inst_37701)){
var statearr_37722_38958 = state_37716__$1;
(statearr_37722_38958[(1)] = (8));

} else {
var statearr_37723_38959 = state_37716__$1;
(statearr_37723_38959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37717 === (3))){
var inst_37714 = (state_37716[(2)]);
var state_37716__$1 = state_37716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37716__$1,inst_37714);
} else {
if((state_val_37717 === (12))){
var state_37716__$1 = state_37716;
var statearr_37724_38960 = state_37716__$1;
(statearr_37724_38960[(2)] = null);

(statearr_37724_38960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37717 === (2))){
var inst_37693 = (state_37716[(7)]);
var state_37716__$1 = state_37716;
if(cljs.core.truth_(inst_37693)){
var statearr_37725_38961 = state_37716__$1;
(statearr_37725_38961[(1)] = (4));

} else {
var statearr_37726_38962 = state_37716__$1;
(statearr_37726_38962[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37717 === (11))){
var inst_37707 = cljs.core.async.close_BANG_(ch);
var state_37716__$1 = state_37716;
var statearr_37727_38963 = state_37716__$1;
(statearr_37727_38963[(2)] = inst_37707);

(statearr_37727_38963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37717 === (9))){
var state_37716__$1 = state_37716;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37728_38964 = state_37716__$1;
(statearr_37728_38964[(1)] = (11));

} else {
var statearr_37729_38965 = state_37716__$1;
(statearr_37729_38965[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37717 === (5))){
var inst_37693 = (state_37716[(7)]);
var state_37716__$1 = state_37716;
var statearr_37730_38966 = state_37716__$1;
(statearr_37730_38966[(2)] = inst_37693);

(statearr_37730_38966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37717 === (10))){
var inst_37712 = (state_37716[(2)]);
var state_37716__$1 = state_37716;
var statearr_37731_38967 = state_37716__$1;
(statearr_37731_38967[(2)] = inst_37712);

(statearr_37731_38967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37717 === (8))){
var inst_37693 = (state_37716[(7)]);
var inst_37703 = cljs.core.next(inst_37693);
var inst_37693__$1 = inst_37703;
var state_37716__$1 = (function (){var statearr_37732 = state_37716;
(statearr_37732[(7)] = inst_37693__$1);

return statearr_37732;
})();
var statearr_37733_38968 = state_37716__$1;
(statearr_37733_38968[(2)] = null);

(statearr_37733_38968[(1)] = (2));


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
var cljs$core$async$state_machine__37201__auto__ = null;
var cljs$core$async$state_machine__37201__auto____0 = (function (){
var statearr_37734 = [null,null,null,null,null,null,null,null];
(statearr_37734[(0)] = cljs$core$async$state_machine__37201__auto__);

(statearr_37734[(1)] = (1));

return statearr_37734;
});
var cljs$core$async$state_machine__37201__auto____1 = (function (state_37716){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_37716);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e37735){if((e37735 instanceof Object)){
var ex__37204__auto__ = e37735;
var statearr_37736_38969 = state_37716;
(statearr_37736_38969[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37735;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38970 = state_37716;
state_37716 = G__38970;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$state_machine__37201__auto__ = function(state_37716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37201__auto____1.call(this,state_37716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37201__auto____0;
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37201__auto____1;
return cljs$core$async$state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_37737 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_37737[(6)] = c__37268__auto__);

return statearr_37737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
}));

return c__37268__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37738 = (function (ch,cs,meta37739){
this.ch = ch;
this.cs = cs;
this.meta37739 = meta37739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37740,meta37739__$1){
var self__ = this;
var _37740__$1 = this;
return (new cljs.core.async.t_cljs$core$async37738(self__.ch,self__.cs,meta37739__$1));
}));

(cljs.core.async.t_cljs$core$async37738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37740){
var self__ = this;
var _37740__$1 = this;
return self__.meta37739;
}));

(cljs.core.async.t_cljs$core$async37738.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37738.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37738.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37738.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37738.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37738.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37739","meta37739",-164172087,null)], null);
}));

(cljs.core.async.t_cljs$core$async37738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37738");

(cljs.core.async.t_cljs$core$async37738.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37738.
 */
cljs.core.async.__GT_t_cljs$core$async37738 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37738(ch__$1,cs__$1,meta37739){
return (new cljs.core.async.t_cljs$core$async37738(ch__$1,cs__$1,meta37739));
});

}

return (new cljs.core.async.t_cljs$core$async37738(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37268__auto___38988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_37875){
var state_val_37876 = (state_37875[(1)]);
if((state_val_37876 === (7))){
var inst_37871 = (state_37875[(2)]);
var state_37875__$1 = state_37875;
var statearr_37877_38989 = state_37875__$1;
(statearr_37877_38989[(2)] = inst_37871);

(statearr_37877_38989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (20))){
var inst_37774 = (state_37875[(7)]);
var inst_37786 = cljs.core.first(inst_37774);
var inst_37787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37786,(0),null);
var inst_37788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37786,(1),null);
var state_37875__$1 = (function (){var statearr_37878 = state_37875;
(statearr_37878[(8)] = inst_37787);

return statearr_37878;
})();
if(cljs.core.truth_(inst_37788)){
var statearr_37879_38990 = state_37875__$1;
(statearr_37879_38990[(1)] = (22));

} else {
var statearr_37880_38991 = state_37875__$1;
(statearr_37880_38991[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (27))){
var inst_37816 = (state_37875[(9)]);
var inst_37818 = (state_37875[(10)]);
var inst_37743 = (state_37875[(11)]);
var inst_37823 = (state_37875[(12)]);
var inst_37823__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37816,inst_37818);
var inst_37824 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37823__$1,inst_37743,done);
var state_37875__$1 = (function (){var statearr_37881 = state_37875;
(statearr_37881[(12)] = inst_37823__$1);

return statearr_37881;
})();
if(cljs.core.truth_(inst_37824)){
var statearr_37882_38992 = state_37875__$1;
(statearr_37882_38992[(1)] = (30));

} else {
var statearr_37883_38993 = state_37875__$1;
(statearr_37883_38993[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (1))){
var state_37875__$1 = state_37875;
var statearr_37884_38994 = state_37875__$1;
(statearr_37884_38994[(2)] = null);

(statearr_37884_38994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (24))){
var inst_37774 = (state_37875[(7)]);
var inst_37793 = (state_37875[(2)]);
var inst_37794 = cljs.core.next(inst_37774);
var inst_37752 = inst_37794;
var inst_37753 = null;
var inst_37754 = (0);
var inst_37755 = (0);
var state_37875__$1 = (function (){var statearr_37885 = state_37875;
(statearr_37885[(13)] = inst_37752);

(statearr_37885[(14)] = inst_37755);

(statearr_37885[(15)] = inst_37753);

(statearr_37885[(16)] = inst_37793);

(statearr_37885[(17)] = inst_37754);

return statearr_37885;
})();
var statearr_37886_38995 = state_37875__$1;
(statearr_37886_38995[(2)] = null);

(statearr_37886_38995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (39))){
var state_37875__$1 = state_37875;
var statearr_37890_38996 = state_37875__$1;
(statearr_37890_38996[(2)] = null);

(statearr_37890_38996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (4))){
var inst_37743 = (state_37875[(11)]);
var inst_37743__$1 = (state_37875[(2)]);
var inst_37744 = (inst_37743__$1 == null);
var state_37875__$1 = (function (){var statearr_37891 = state_37875;
(statearr_37891[(11)] = inst_37743__$1);

return statearr_37891;
})();
if(cljs.core.truth_(inst_37744)){
var statearr_37892_38997 = state_37875__$1;
(statearr_37892_38997[(1)] = (5));

} else {
var statearr_37893_38998 = state_37875__$1;
(statearr_37893_38998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (15))){
var inst_37752 = (state_37875[(13)]);
var inst_37755 = (state_37875[(14)]);
var inst_37753 = (state_37875[(15)]);
var inst_37754 = (state_37875[(17)]);
var inst_37770 = (state_37875[(2)]);
var inst_37771 = (inst_37755 + (1));
var tmp37887 = inst_37752;
var tmp37888 = inst_37753;
var tmp37889 = inst_37754;
var inst_37752__$1 = tmp37887;
var inst_37753__$1 = tmp37888;
var inst_37754__$1 = tmp37889;
var inst_37755__$1 = inst_37771;
var state_37875__$1 = (function (){var statearr_37894 = state_37875;
(statearr_37894[(13)] = inst_37752__$1);

(statearr_37894[(14)] = inst_37755__$1);

(statearr_37894[(18)] = inst_37770);

(statearr_37894[(15)] = inst_37753__$1);

(statearr_37894[(17)] = inst_37754__$1);

return statearr_37894;
})();
var statearr_37895_38999 = state_37875__$1;
(statearr_37895_38999[(2)] = null);

(statearr_37895_38999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (21))){
var inst_37797 = (state_37875[(2)]);
var state_37875__$1 = state_37875;
var statearr_37899_39000 = state_37875__$1;
(statearr_37899_39000[(2)] = inst_37797);

(statearr_37899_39000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (31))){
var inst_37823 = (state_37875[(12)]);
var inst_37827 = done(null);
var inst_37828 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37823);
var state_37875__$1 = (function (){var statearr_37900 = state_37875;
(statearr_37900[(19)] = inst_37827);

return statearr_37900;
})();
var statearr_37901_39001 = state_37875__$1;
(statearr_37901_39001[(2)] = inst_37828);

(statearr_37901_39001[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (32))){
var inst_37817 = (state_37875[(20)]);
var inst_37816 = (state_37875[(9)]);
var inst_37815 = (state_37875[(21)]);
var inst_37818 = (state_37875[(10)]);
var inst_37830 = (state_37875[(2)]);
var inst_37831 = (inst_37818 + (1));
var tmp37896 = inst_37817;
var tmp37897 = inst_37816;
var tmp37898 = inst_37815;
var inst_37815__$1 = tmp37898;
var inst_37816__$1 = tmp37897;
var inst_37817__$1 = tmp37896;
var inst_37818__$1 = inst_37831;
var state_37875__$1 = (function (){var statearr_37902 = state_37875;
(statearr_37902[(20)] = inst_37817__$1);

(statearr_37902[(9)] = inst_37816__$1);

(statearr_37902[(22)] = inst_37830);

(statearr_37902[(21)] = inst_37815__$1);

(statearr_37902[(10)] = inst_37818__$1);

return statearr_37902;
})();
var statearr_37903_39002 = state_37875__$1;
(statearr_37903_39002[(2)] = null);

(statearr_37903_39002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (40))){
var inst_37843 = (state_37875[(23)]);
var inst_37847 = done(null);
var inst_37848 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37843);
var state_37875__$1 = (function (){var statearr_37904 = state_37875;
(statearr_37904[(24)] = inst_37847);

return statearr_37904;
})();
var statearr_37905_39006 = state_37875__$1;
(statearr_37905_39006[(2)] = inst_37848);

(statearr_37905_39006[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (33))){
var inst_37834 = (state_37875[(25)]);
var inst_37836 = cljs.core.chunked_seq_QMARK_(inst_37834);
var state_37875__$1 = state_37875;
if(inst_37836){
var statearr_37906_39008 = state_37875__$1;
(statearr_37906_39008[(1)] = (36));

} else {
var statearr_37907_39009 = state_37875__$1;
(statearr_37907_39009[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (13))){
var inst_37764 = (state_37875[(26)]);
var inst_37767 = cljs.core.async.close_BANG_(inst_37764);
var state_37875__$1 = state_37875;
var statearr_37908_39010 = state_37875__$1;
(statearr_37908_39010[(2)] = inst_37767);

(statearr_37908_39010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (22))){
var inst_37787 = (state_37875[(8)]);
var inst_37790 = cljs.core.async.close_BANG_(inst_37787);
var state_37875__$1 = state_37875;
var statearr_37909_39011 = state_37875__$1;
(statearr_37909_39011[(2)] = inst_37790);

(statearr_37909_39011[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (36))){
var inst_37834 = (state_37875[(25)]);
var inst_37838 = cljs.core.chunk_first(inst_37834);
var inst_37839 = cljs.core.chunk_rest(inst_37834);
var inst_37840 = cljs.core.count(inst_37838);
var inst_37815 = inst_37839;
var inst_37816 = inst_37838;
var inst_37817 = inst_37840;
var inst_37818 = (0);
var state_37875__$1 = (function (){var statearr_37910 = state_37875;
(statearr_37910[(20)] = inst_37817);

(statearr_37910[(9)] = inst_37816);

(statearr_37910[(21)] = inst_37815);

(statearr_37910[(10)] = inst_37818);

return statearr_37910;
})();
var statearr_37911_39012 = state_37875__$1;
(statearr_37911_39012[(2)] = null);

(statearr_37911_39012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (41))){
var inst_37834 = (state_37875[(25)]);
var inst_37850 = (state_37875[(2)]);
var inst_37851 = cljs.core.next(inst_37834);
var inst_37815 = inst_37851;
var inst_37816 = null;
var inst_37817 = (0);
var inst_37818 = (0);
var state_37875__$1 = (function (){var statearr_37912 = state_37875;
(statearr_37912[(20)] = inst_37817);

(statearr_37912[(9)] = inst_37816);

(statearr_37912[(21)] = inst_37815);

(statearr_37912[(10)] = inst_37818);

(statearr_37912[(27)] = inst_37850);

return statearr_37912;
})();
var statearr_37913_39015 = state_37875__$1;
(statearr_37913_39015[(2)] = null);

(statearr_37913_39015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (43))){
var state_37875__$1 = state_37875;
var statearr_37914_39018 = state_37875__$1;
(statearr_37914_39018[(2)] = null);

(statearr_37914_39018[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (29))){
var inst_37859 = (state_37875[(2)]);
var state_37875__$1 = state_37875;
var statearr_37915_39020 = state_37875__$1;
(statearr_37915_39020[(2)] = inst_37859);

(statearr_37915_39020[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (44))){
var inst_37868 = (state_37875[(2)]);
var state_37875__$1 = (function (){var statearr_37916 = state_37875;
(statearr_37916[(28)] = inst_37868);

return statearr_37916;
})();
var statearr_37917_39025 = state_37875__$1;
(statearr_37917_39025[(2)] = null);

(statearr_37917_39025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (6))){
var inst_37807 = (state_37875[(29)]);
var inst_37806 = cljs.core.deref(cs);
var inst_37807__$1 = cljs.core.keys(inst_37806);
var inst_37808 = cljs.core.count(inst_37807__$1);
var inst_37809 = cljs.core.reset_BANG_(dctr,inst_37808);
var inst_37814 = cljs.core.seq(inst_37807__$1);
var inst_37815 = inst_37814;
var inst_37816 = null;
var inst_37817 = (0);
var inst_37818 = (0);
var state_37875__$1 = (function (){var statearr_37918 = state_37875;
(statearr_37918[(30)] = inst_37809);

(statearr_37918[(20)] = inst_37817);

(statearr_37918[(9)] = inst_37816);

(statearr_37918[(21)] = inst_37815);

(statearr_37918[(29)] = inst_37807__$1);

(statearr_37918[(10)] = inst_37818);

return statearr_37918;
})();
var statearr_37919_39026 = state_37875__$1;
(statearr_37919_39026[(2)] = null);

(statearr_37919_39026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (28))){
var inst_37815 = (state_37875[(21)]);
var inst_37834 = (state_37875[(25)]);
var inst_37834__$1 = cljs.core.seq(inst_37815);
var state_37875__$1 = (function (){var statearr_37920 = state_37875;
(statearr_37920[(25)] = inst_37834__$1);

return statearr_37920;
})();
if(inst_37834__$1){
var statearr_37921_39027 = state_37875__$1;
(statearr_37921_39027[(1)] = (33));

} else {
var statearr_37922_39028 = state_37875__$1;
(statearr_37922_39028[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (25))){
var inst_37817 = (state_37875[(20)]);
var inst_37818 = (state_37875[(10)]);
var inst_37820 = (inst_37818 < inst_37817);
var inst_37821 = inst_37820;
var state_37875__$1 = state_37875;
if(cljs.core.truth_(inst_37821)){
var statearr_37923_39029 = state_37875__$1;
(statearr_37923_39029[(1)] = (27));

} else {
var statearr_37924_39030 = state_37875__$1;
(statearr_37924_39030[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (34))){
var state_37875__$1 = state_37875;
var statearr_37925_39031 = state_37875__$1;
(statearr_37925_39031[(2)] = null);

(statearr_37925_39031[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (17))){
var state_37875__$1 = state_37875;
var statearr_37926_39032 = state_37875__$1;
(statearr_37926_39032[(2)] = null);

(statearr_37926_39032[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (3))){
var inst_37873 = (state_37875[(2)]);
var state_37875__$1 = state_37875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37875__$1,inst_37873);
} else {
if((state_val_37876 === (12))){
var inst_37802 = (state_37875[(2)]);
var state_37875__$1 = state_37875;
var statearr_37927_39033 = state_37875__$1;
(statearr_37927_39033[(2)] = inst_37802);

(statearr_37927_39033[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (2))){
var state_37875__$1 = state_37875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37875__$1,(4),ch);
} else {
if((state_val_37876 === (23))){
var state_37875__$1 = state_37875;
var statearr_37928_39034 = state_37875__$1;
(statearr_37928_39034[(2)] = null);

(statearr_37928_39034[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (35))){
var inst_37857 = (state_37875[(2)]);
var state_37875__$1 = state_37875;
var statearr_37929_39035 = state_37875__$1;
(statearr_37929_39035[(2)] = inst_37857);

(statearr_37929_39035[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (19))){
var inst_37774 = (state_37875[(7)]);
var inst_37778 = cljs.core.chunk_first(inst_37774);
var inst_37779 = cljs.core.chunk_rest(inst_37774);
var inst_37780 = cljs.core.count(inst_37778);
var inst_37752 = inst_37779;
var inst_37753 = inst_37778;
var inst_37754 = inst_37780;
var inst_37755 = (0);
var state_37875__$1 = (function (){var statearr_37930 = state_37875;
(statearr_37930[(13)] = inst_37752);

(statearr_37930[(14)] = inst_37755);

(statearr_37930[(15)] = inst_37753);

(statearr_37930[(17)] = inst_37754);

return statearr_37930;
})();
var statearr_37931_39036 = state_37875__$1;
(statearr_37931_39036[(2)] = null);

(statearr_37931_39036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (11))){
var inst_37752 = (state_37875[(13)]);
var inst_37774 = (state_37875[(7)]);
var inst_37774__$1 = cljs.core.seq(inst_37752);
var state_37875__$1 = (function (){var statearr_37932 = state_37875;
(statearr_37932[(7)] = inst_37774__$1);

return statearr_37932;
})();
if(inst_37774__$1){
var statearr_37933_39038 = state_37875__$1;
(statearr_37933_39038[(1)] = (16));

} else {
var statearr_37934_39039 = state_37875__$1;
(statearr_37934_39039[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (9))){
var inst_37804 = (state_37875[(2)]);
var state_37875__$1 = state_37875;
var statearr_37935_39042 = state_37875__$1;
(statearr_37935_39042[(2)] = inst_37804);

(statearr_37935_39042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (5))){
var inst_37750 = cljs.core.deref(cs);
var inst_37751 = cljs.core.seq(inst_37750);
var inst_37752 = inst_37751;
var inst_37753 = null;
var inst_37754 = (0);
var inst_37755 = (0);
var state_37875__$1 = (function (){var statearr_37936 = state_37875;
(statearr_37936[(13)] = inst_37752);

(statearr_37936[(14)] = inst_37755);

(statearr_37936[(15)] = inst_37753);

(statearr_37936[(17)] = inst_37754);

return statearr_37936;
})();
var statearr_37937_39051 = state_37875__$1;
(statearr_37937_39051[(2)] = null);

(statearr_37937_39051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (14))){
var state_37875__$1 = state_37875;
var statearr_37938_39054 = state_37875__$1;
(statearr_37938_39054[(2)] = null);

(statearr_37938_39054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (45))){
var inst_37865 = (state_37875[(2)]);
var state_37875__$1 = state_37875;
var statearr_37939_39059 = state_37875__$1;
(statearr_37939_39059[(2)] = inst_37865);

(statearr_37939_39059[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (26))){
var inst_37807 = (state_37875[(29)]);
var inst_37861 = (state_37875[(2)]);
var inst_37862 = cljs.core.seq(inst_37807);
var state_37875__$1 = (function (){var statearr_37940 = state_37875;
(statearr_37940[(31)] = inst_37861);

return statearr_37940;
})();
if(inst_37862){
var statearr_37941_39060 = state_37875__$1;
(statearr_37941_39060[(1)] = (42));

} else {
var statearr_37942_39061 = state_37875__$1;
(statearr_37942_39061[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (16))){
var inst_37774 = (state_37875[(7)]);
var inst_37776 = cljs.core.chunked_seq_QMARK_(inst_37774);
var state_37875__$1 = state_37875;
if(inst_37776){
var statearr_37943_39062 = state_37875__$1;
(statearr_37943_39062[(1)] = (19));

} else {
var statearr_37944_39063 = state_37875__$1;
(statearr_37944_39063[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (38))){
var inst_37854 = (state_37875[(2)]);
var state_37875__$1 = state_37875;
var statearr_37945_39064 = state_37875__$1;
(statearr_37945_39064[(2)] = inst_37854);

(statearr_37945_39064[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (30))){
var state_37875__$1 = state_37875;
var statearr_37946_39065 = state_37875__$1;
(statearr_37946_39065[(2)] = null);

(statearr_37946_39065[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (10))){
var inst_37755 = (state_37875[(14)]);
var inst_37753 = (state_37875[(15)]);
var inst_37763 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37753,inst_37755);
var inst_37764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37763,(0),null);
var inst_37765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37763,(1),null);
var state_37875__$1 = (function (){var statearr_37947 = state_37875;
(statearr_37947[(26)] = inst_37764);

return statearr_37947;
})();
if(cljs.core.truth_(inst_37765)){
var statearr_37948_39066 = state_37875__$1;
(statearr_37948_39066[(1)] = (13));

} else {
var statearr_37949_39067 = state_37875__$1;
(statearr_37949_39067[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (18))){
var inst_37800 = (state_37875[(2)]);
var state_37875__$1 = state_37875;
var statearr_37950_39068 = state_37875__$1;
(statearr_37950_39068[(2)] = inst_37800);

(statearr_37950_39068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (42))){
var state_37875__$1 = state_37875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37875__$1,(45),dchan);
} else {
if((state_val_37876 === (37))){
var inst_37834 = (state_37875[(25)]);
var inst_37743 = (state_37875[(11)]);
var inst_37843 = (state_37875[(23)]);
var inst_37843__$1 = cljs.core.first(inst_37834);
var inst_37844 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37843__$1,inst_37743,done);
var state_37875__$1 = (function (){var statearr_37951 = state_37875;
(statearr_37951[(23)] = inst_37843__$1);

return statearr_37951;
})();
if(cljs.core.truth_(inst_37844)){
var statearr_37952_39069 = state_37875__$1;
(statearr_37952_39069[(1)] = (39));

} else {
var statearr_37953_39070 = state_37875__$1;
(statearr_37953_39070[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37876 === (8))){
var inst_37755 = (state_37875[(14)]);
var inst_37754 = (state_37875[(17)]);
var inst_37757 = (inst_37755 < inst_37754);
var inst_37758 = inst_37757;
var state_37875__$1 = state_37875;
if(cljs.core.truth_(inst_37758)){
var statearr_37954_39071 = state_37875__$1;
(statearr_37954_39071[(1)] = (10));

} else {
var statearr_37955_39072 = state_37875__$1;
(statearr_37955_39072[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__37201__auto__ = null;
var cljs$core$async$mult_$_state_machine__37201__auto____0 = (function (){
var statearr_37956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37956[(0)] = cljs$core$async$mult_$_state_machine__37201__auto__);

(statearr_37956[(1)] = (1));

return statearr_37956;
});
var cljs$core$async$mult_$_state_machine__37201__auto____1 = (function (state_37875){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_37875);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e37957){if((e37957 instanceof Object)){
var ex__37204__auto__ = e37957;
var statearr_37958_39073 = state_37875;
(statearr_37958_39073[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37957;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39074 = state_37875;
state_37875 = G__39074;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37201__auto__ = function(state_37875){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37201__auto____1.call(this,state_37875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37201__auto____0;
cljs$core$async$mult_$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37201__auto____1;
return cljs$core$async$mult_$_state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_37959 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_37959[(6)] = c__37268__auto___38988);

return statearr_37959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
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
var G__37961 = arguments.length;
switch (G__37961) {
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
var len__4789__auto___39106 = arguments.length;
var i__4790__auto___39107 = (0);
while(true){
if((i__4790__auto___39107 < len__4789__auto___39106)){
args__4795__auto__.push((arguments[i__4790__auto___39107]));

var G__39108 = (i__4790__auto___39107 + (1));
i__4790__auto___39107 = G__39108;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37966){
var map__37967 = p__37966;
var map__37967__$1 = (((((!((map__37967 == null))))?(((((map__37967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37967):map__37967);
var opts = map__37967__$1;
var statearr_37969_39109 = state;
(statearr_37969_39109[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37970_39110 = state;
(statearr_37970_39110[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_37971_39111 = state;
(statearr_37971_39111[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37962){
var G__37963 = cljs.core.first(seq37962);
var seq37962__$1 = cljs.core.next(seq37962);
var G__37964 = cljs.core.first(seq37962__$1);
var seq37962__$2 = cljs.core.next(seq37962__$1);
var G__37965 = cljs.core.first(seq37962__$2);
var seq37962__$3 = cljs.core.next(seq37962__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37963,G__37964,G__37965,seq37962__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37972 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37972 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37973){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37973 = meta37973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37974,meta37973__$1){
var self__ = this;
var _37974__$1 = this;
return (new cljs.core.async.t_cljs$core$async37972(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37973__$1));
}));

(cljs.core.async.t_cljs$core$async37972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37974){
var self__ = this;
var _37974__$1 = this;
return self__.meta37973;
}));

(cljs.core.async.t_cljs$core$async37972.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37972.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37972.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37972.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37972.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37972.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37972.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37972.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37973","meta37973",1755641295,null)], null);
}));

(cljs.core.async.t_cljs$core$async37972.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37972");

(cljs.core.async.t_cljs$core$async37972.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37972");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37972.
 */
cljs.core.async.__GT_t_cljs$core$async37972 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37972(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37973){
return (new cljs.core.async.t_cljs$core$async37972(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37973));
});

}

return (new cljs.core.async.t_cljs$core$async37972(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37268__auto___39112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_38076){
var state_val_38077 = (state_38076[(1)]);
if((state_val_38077 === (7))){
var inst_37991 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38078_39113 = state_38076__$1;
(statearr_38078_39113[(2)] = inst_37991);

(statearr_38078_39113[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (20))){
var inst_38003 = (state_38076[(7)]);
var state_38076__$1 = state_38076;
var statearr_38079_39114 = state_38076__$1;
(statearr_38079_39114[(2)] = inst_38003);

(statearr_38079_39114[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (27))){
var state_38076__$1 = state_38076;
var statearr_38080_39115 = state_38076__$1;
(statearr_38080_39115[(2)] = null);

(statearr_38080_39115[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (1))){
var inst_37978 = (state_38076[(8)]);
var inst_37978__$1 = calc_state();
var inst_37980 = (inst_37978__$1 == null);
var inst_37981 = cljs.core.not(inst_37980);
var state_38076__$1 = (function (){var statearr_38081 = state_38076;
(statearr_38081[(8)] = inst_37978__$1);

return statearr_38081;
})();
if(inst_37981){
var statearr_38082_39116 = state_38076__$1;
(statearr_38082_39116[(1)] = (2));

} else {
var statearr_38083_39117 = state_38076__$1;
(statearr_38083_39117[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (24))){
var inst_38036 = (state_38076[(9)]);
var inst_38027 = (state_38076[(10)]);
var inst_38050 = (state_38076[(11)]);
var inst_38050__$1 = (inst_38027.cljs$core$IFn$_invoke$arity$1 ? inst_38027.cljs$core$IFn$_invoke$arity$1(inst_38036) : inst_38027.call(null,inst_38036));
var state_38076__$1 = (function (){var statearr_38084 = state_38076;
(statearr_38084[(11)] = inst_38050__$1);

return statearr_38084;
})();
if(cljs.core.truth_(inst_38050__$1)){
var statearr_38085_39118 = state_38076__$1;
(statearr_38085_39118[(1)] = (29));

} else {
var statearr_38086_39119 = state_38076__$1;
(statearr_38086_39119[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (4))){
var inst_37994 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_37994)){
var statearr_38087_39120 = state_38076__$1;
(statearr_38087_39120[(1)] = (8));

} else {
var statearr_38088_39121 = state_38076__$1;
(statearr_38088_39121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (15))){
var inst_38021 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_38021)){
var statearr_38089_39122 = state_38076__$1;
(statearr_38089_39122[(1)] = (19));

} else {
var statearr_38090_39123 = state_38076__$1;
(statearr_38090_39123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (21))){
var inst_38026 = (state_38076[(12)]);
var inst_38026__$1 = (state_38076[(2)]);
var inst_38027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38026__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38026__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38026__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38076__$1 = (function (){var statearr_38091 = state_38076;
(statearr_38091[(12)] = inst_38026__$1);

(statearr_38091[(10)] = inst_38027);

(statearr_38091[(13)] = inst_38028);

return statearr_38091;
})();
return cljs.core.async.ioc_alts_BANG_(state_38076__$1,(22),inst_38029);
} else {
if((state_val_38077 === (31))){
var inst_38058 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_38058)){
var statearr_38092_39124 = state_38076__$1;
(statearr_38092_39124[(1)] = (32));

} else {
var statearr_38093_39125 = state_38076__$1;
(statearr_38093_39125[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (32))){
var inst_38035 = (state_38076[(14)]);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38076__$1,(35),out,inst_38035);
} else {
if((state_val_38077 === (33))){
var inst_38026 = (state_38076[(12)]);
var inst_38003 = inst_38026;
var state_38076__$1 = (function (){var statearr_38094 = state_38076;
(statearr_38094[(7)] = inst_38003);

return statearr_38094;
})();
var statearr_38095_39126 = state_38076__$1;
(statearr_38095_39126[(2)] = null);

(statearr_38095_39126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (13))){
var inst_38003 = (state_38076[(7)]);
var inst_38010 = inst_38003.cljs$lang$protocol_mask$partition0$;
var inst_38011 = (inst_38010 & (64));
var inst_38012 = inst_38003.cljs$core$ISeq$;
var inst_38013 = (cljs.core.PROTOCOL_SENTINEL === inst_38012);
var inst_38014 = ((inst_38011) || (inst_38013));
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_38014)){
var statearr_38096_39127 = state_38076__$1;
(statearr_38096_39127[(1)] = (16));

} else {
var statearr_38097_39128 = state_38076__$1;
(statearr_38097_39128[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (22))){
var inst_38036 = (state_38076[(9)]);
var inst_38035 = (state_38076[(14)]);
var inst_38034 = (state_38076[(2)]);
var inst_38035__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38034,(0),null);
var inst_38036__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38034,(1),null);
var inst_38037 = (inst_38035__$1 == null);
var inst_38038 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38036__$1,change);
var inst_38039 = ((inst_38037) || (inst_38038));
var state_38076__$1 = (function (){var statearr_38098 = state_38076;
(statearr_38098[(9)] = inst_38036__$1);

(statearr_38098[(14)] = inst_38035__$1);

return statearr_38098;
})();
if(cljs.core.truth_(inst_38039)){
var statearr_38099_39129 = state_38076__$1;
(statearr_38099_39129[(1)] = (23));

} else {
var statearr_38100_39130 = state_38076__$1;
(statearr_38100_39130[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (36))){
var inst_38026 = (state_38076[(12)]);
var inst_38003 = inst_38026;
var state_38076__$1 = (function (){var statearr_38101 = state_38076;
(statearr_38101[(7)] = inst_38003);

return statearr_38101;
})();
var statearr_38102_39131 = state_38076__$1;
(statearr_38102_39131[(2)] = null);

(statearr_38102_39131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (29))){
var inst_38050 = (state_38076[(11)]);
var state_38076__$1 = state_38076;
var statearr_38103_39132 = state_38076__$1;
(statearr_38103_39132[(2)] = inst_38050);

(statearr_38103_39132[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (6))){
var state_38076__$1 = state_38076;
var statearr_38104_39133 = state_38076__$1;
(statearr_38104_39133[(2)] = false);

(statearr_38104_39133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (28))){
var inst_38046 = (state_38076[(2)]);
var inst_38047 = calc_state();
var inst_38003 = inst_38047;
var state_38076__$1 = (function (){var statearr_38105 = state_38076;
(statearr_38105[(15)] = inst_38046);

(statearr_38105[(7)] = inst_38003);

return statearr_38105;
})();
var statearr_38106_39134 = state_38076__$1;
(statearr_38106_39134[(2)] = null);

(statearr_38106_39134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (25))){
var inst_38072 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38107_39135 = state_38076__$1;
(statearr_38107_39135[(2)] = inst_38072);

(statearr_38107_39135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (34))){
var inst_38070 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38108_39136 = state_38076__$1;
(statearr_38108_39136[(2)] = inst_38070);

(statearr_38108_39136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (17))){
var state_38076__$1 = state_38076;
var statearr_38109_39137 = state_38076__$1;
(statearr_38109_39137[(2)] = false);

(statearr_38109_39137[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (3))){
var state_38076__$1 = state_38076;
var statearr_38110_39138 = state_38076__$1;
(statearr_38110_39138[(2)] = false);

(statearr_38110_39138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (12))){
var inst_38074 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38076__$1,inst_38074);
} else {
if((state_val_38077 === (2))){
var inst_37978 = (state_38076[(8)]);
var inst_37983 = inst_37978.cljs$lang$protocol_mask$partition0$;
var inst_37984 = (inst_37983 & (64));
var inst_37985 = inst_37978.cljs$core$ISeq$;
var inst_37986 = (cljs.core.PROTOCOL_SENTINEL === inst_37985);
var inst_37987 = ((inst_37984) || (inst_37986));
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_37987)){
var statearr_38111_39139 = state_38076__$1;
(statearr_38111_39139[(1)] = (5));

} else {
var statearr_38112_39140 = state_38076__$1;
(statearr_38112_39140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (23))){
var inst_38035 = (state_38076[(14)]);
var inst_38041 = (inst_38035 == null);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_38041)){
var statearr_38113_39141 = state_38076__$1;
(statearr_38113_39141[(1)] = (26));

} else {
var statearr_38114_39142 = state_38076__$1;
(statearr_38114_39142[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (35))){
var inst_38061 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_38061)){
var statearr_38115_39143 = state_38076__$1;
(statearr_38115_39143[(1)] = (36));

} else {
var statearr_38116_39144 = state_38076__$1;
(statearr_38116_39144[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (19))){
var inst_38003 = (state_38076[(7)]);
var inst_38023 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38003);
var state_38076__$1 = state_38076;
var statearr_38117_39145 = state_38076__$1;
(statearr_38117_39145[(2)] = inst_38023);

(statearr_38117_39145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (11))){
var inst_38003 = (state_38076[(7)]);
var inst_38007 = (inst_38003 == null);
var inst_38008 = cljs.core.not(inst_38007);
var state_38076__$1 = state_38076;
if(inst_38008){
var statearr_38118_39146 = state_38076__$1;
(statearr_38118_39146[(1)] = (13));

} else {
var statearr_38119_39147 = state_38076__$1;
(statearr_38119_39147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (9))){
var inst_37978 = (state_38076[(8)]);
var state_38076__$1 = state_38076;
var statearr_38120_39150 = state_38076__$1;
(statearr_38120_39150[(2)] = inst_37978);

(statearr_38120_39150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (5))){
var state_38076__$1 = state_38076;
var statearr_38121_39151 = state_38076__$1;
(statearr_38121_39151[(2)] = true);

(statearr_38121_39151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (14))){
var state_38076__$1 = state_38076;
var statearr_38122_39152 = state_38076__$1;
(statearr_38122_39152[(2)] = false);

(statearr_38122_39152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (26))){
var inst_38036 = (state_38076[(9)]);
var inst_38043 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38036);
var state_38076__$1 = state_38076;
var statearr_38123_39153 = state_38076__$1;
(statearr_38123_39153[(2)] = inst_38043);

(statearr_38123_39153[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (16))){
var state_38076__$1 = state_38076;
var statearr_38124_39154 = state_38076__$1;
(statearr_38124_39154[(2)] = true);

(statearr_38124_39154[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (38))){
var inst_38066 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38125_39155 = state_38076__$1;
(statearr_38125_39155[(2)] = inst_38066);

(statearr_38125_39155[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (30))){
var inst_38036 = (state_38076[(9)]);
var inst_38027 = (state_38076[(10)]);
var inst_38028 = (state_38076[(13)]);
var inst_38053 = cljs.core.empty_QMARK_(inst_38027);
var inst_38054 = (inst_38028.cljs$core$IFn$_invoke$arity$1 ? inst_38028.cljs$core$IFn$_invoke$arity$1(inst_38036) : inst_38028.call(null,inst_38036));
var inst_38055 = cljs.core.not(inst_38054);
var inst_38056 = ((inst_38053) && (inst_38055));
var state_38076__$1 = state_38076;
var statearr_38126_39157 = state_38076__$1;
(statearr_38126_39157[(2)] = inst_38056);

(statearr_38126_39157[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (10))){
var inst_37978 = (state_38076[(8)]);
var inst_37999 = (state_38076[(2)]);
var inst_38000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37999,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37999,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37999,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38003 = inst_37978;
var state_38076__$1 = (function (){var statearr_38127 = state_38076;
(statearr_38127[(16)] = inst_38000);

(statearr_38127[(17)] = inst_38002);

(statearr_38127[(7)] = inst_38003);

(statearr_38127[(18)] = inst_38001);

return statearr_38127;
})();
var statearr_38128_39159 = state_38076__$1;
(statearr_38128_39159[(2)] = null);

(statearr_38128_39159[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (18))){
var inst_38018 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38129_39160 = state_38076__$1;
(statearr_38129_39160[(2)] = inst_38018);

(statearr_38129_39160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (37))){
var state_38076__$1 = state_38076;
var statearr_38130_39161 = state_38076__$1;
(statearr_38130_39161[(2)] = null);

(statearr_38130_39161[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (8))){
var inst_37978 = (state_38076[(8)]);
var inst_37996 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_37978);
var state_38076__$1 = state_38076;
var statearr_38131_39162 = state_38076__$1;
(statearr_38131_39162[(2)] = inst_37996);

(statearr_38131_39162[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__37201__auto__ = null;
var cljs$core$async$mix_$_state_machine__37201__auto____0 = (function (){
var statearr_38132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38132[(0)] = cljs$core$async$mix_$_state_machine__37201__auto__);

(statearr_38132[(1)] = (1));

return statearr_38132;
});
var cljs$core$async$mix_$_state_machine__37201__auto____1 = (function (state_38076){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_38076);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e38133){if((e38133 instanceof Object)){
var ex__37204__auto__ = e38133;
var statearr_38134_39165 = state_38076;
(statearr_38134_39165[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38133;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39166 = state_38076;
state_38076 = G__39166;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37201__auto__ = function(state_38076){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37201__auto____1.call(this,state_38076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37201__auto____0;
cljs$core$async$mix_$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37201__auto____1;
return cljs$core$async$mix_$_state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_38135 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_38135[(6)] = c__37268__auto___39112);

return statearr_38135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
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
var G__38137 = arguments.length;
switch (G__38137) {
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
var G__38140 = arguments.length;
switch (G__38140) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__38138_SHARP_){
if(cljs.core.truth_((p1__38138_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38138_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38138_SHARP_.call(null,topic)))){
return p1__38138_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38138_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38141 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38142){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38142 = meta38142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38143,meta38142__$1){
var self__ = this;
var _38143__$1 = this;
return (new cljs.core.async.t_cljs$core$async38141(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38142__$1));
}));

(cljs.core.async.t_cljs$core$async38141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38143){
var self__ = this;
var _38143__$1 = this;
return self__.meta38142;
}));

(cljs.core.async.t_cljs$core$async38141.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38141.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38141.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38141.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async38141.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async38141.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async38141.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async38141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38142","meta38142",-633200840,null)], null);
}));

(cljs.core.async.t_cljs$core$async38141.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38141");

(cljs.core.async.t_cljs$core$async38141.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38141");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38141.
 */
cljs.core.async.__GT_t_cljs$core$async38141 = (function cljs$core$async$__GT_t_cljs$core$async38141(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38142){
return (new cljs.core.async.t_cljs$core$async38141(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38142));
});

}

return (new cljs.core.async.t_cljs$core$async38141(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37268__auto___39173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_38215){
var state_val_38216 = (state_38215[(1)]);
if((state_val_38216 === (7))){
var inst_38211 = (state_38215[(2)]);
var state_38215__$1 = state_38215;
var statearr_38217_39174 = state_38215__$1;
(statearr_38217_39174[(2)] = inst_38211);

(statearr_38217_39174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (20))){
var state_38215__$1 = state_38215;
var statearr_38218_39175 = state_38215__$1;
(statearr_38218_39175[(2)] = null);

(statearr_38218_39175[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (1))){
var state_38215__$1 = state_38215;
var statearr_38219_39176 = state_38215__$1;
(statearr_38219_39176[(2)] = null);

(statearr_38219_39176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (24))){
var inst_38194 = (state_38215[(7)]);
var inst_38203 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38194);
var state_38215__$1 = state_38215;
var statearr_38220_39177 = state_38215__$1;
(statearr_38220_39177[(2)] = inst_38203);

(statearr_38220_39177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (4))){
var inst_38146 = (state_38215[(8)]);
var inst_38146__$1 = (state_38215[(2)]);
var inst_38147 = (inst_38146__$1 == null);
var state_38215__$1 = (function (){var statearr_38221 = state_38215;
(statearr_38221[(8)] = inst_38146__$1);

return statearr_38221;
})();
if(cljs.core.truth_(inst_38147)){
var statearr_38222_39178 = state_38215__$1;
(statearr_38222_39178[(1)] = (5));

} else {
var statearr_38223_39179 = state_38215__$1;
(statearr_38223_39179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (15))){
var inst_38188 = (state_38215[(2)]);
var state_38215__$1 = state_38215;
var statearr_38224_39180 = state_38215__$1;
(statearr_38224_39180[(2)] = inst_38188);

(statearr_38224_39180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (21))){
var inst_38208 = (state_38215[(2)]);
var state_38215__$1 = (function (){var statearr_38225 = state_38215;
(statearr_38225[(9)] = inst_38208);

return statearr_38225;
})();
var statearr_38226_39182 = state_38215__$1;
(statearr_38226_39182[(2)] = null);

(statearr_38226_39182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (13))){
var inst_38170 = (state_38215[(10)]);
var inst_38172 = cljs.core.chunked_seq_QMARK_(inst_38170);
var state_38215__$1 = state_38215;
if(inst_38172){
var statearr_38227_39183 = state_38215__$1;
(statearr_38227_39183[(1)] = (16));

} else {
var statearr_38228_39184 = state_38215__$1;
(statearr_38228_39184[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (22))){
var inst_38200 = (state_38215[(2)]);
var state_38215__$1 = state_38215;
if(cljs.core.truth_(inst_38200)){
var statearr_38229_39185 = state_38215__$1;
(statearr_38229_39185[(1)] = (23));

} else {
var statearr_38230_39186 = state_38215__$1;
(statearr_38230_39186[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (6))){
var inst_38196 = (state_38215[(11)]);
var inst_38194 = (state_38215[(7)]);
var inst_38146 = (state_38215[(8)]);
var inst_38194__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38146) : topic_fn.call(null,inst_38146));
var inst_38195 = cljs.core.deref(mults);
var inst_38196__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38195,inst_38194__$1);
var state_38215__$1 = (function (){var statearr_38231 = state_38215;
(statearr_38231[(11)] = inst_38196__$1);

(statearr_38231[(7)] = inst_38194__$1);

return statearr_38231;
})();
if(cljs.core.truth_(inst_38196__$1)){
var statearr_38232_39188 = state_38215__$1;
(statearr_38232_39188[(1)] = (19));

} else {
var statearr_38233_39189 = state_38215__$1;
(statearr_38233_39189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (25))){
var inst_38205 = (state_38215[(2)]);
var state_38215__$1 = state_38215;
var statearr_38234_39190 = state_38215__$1;
(statearr_38234_39190[(2)] = inst_38205);

(statearr_38234_39190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (17))){
var inst_38170 = (state_38215[(10)]);
var inst_38179 = cljs.core.first(inst_38170);
var inst_38180 = cljs.core.async.muxch_STAR_(inst_38179);
var inst_38181 = cljs.core.async.close_BANG_(inst_38180);
var inst_38182 = cljs.core.next(inst_38170);
var inst_38156 = inst_38182;
var inst_38157 = null;
var inst_38158 = (0);
var inst_38159 = (0);
var state_38215__$1 = (function (){var statearr_38235 = state_38215;
(statearr_38235[(12)] = inst_38181);

(statearr_38235[(13)] = inst_38159);

(statearr_38235[(14)] = inst_38158);

(statearr_38235[(15)] = inst_38157);

(statearr_38235[(16)] = inst_38156);

return statearr_38235;
})();
var statearr_38236_39194 = state_38215__$1;
(statearr_38236_39194[(2)] = null);

(statearr_38236_39194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (3))){
var inst_38213 = (state_38215[(2)]);
var state_38215__$1 = state_38215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38215__$1,inst_38213);
} else {
if((state_val_38216 === (12))){
var inst_38190 = (state_38215[(2)]);
var state_38215__$1 = state_38215;
var statearr_38237_39195 = state_38215__$1;
(statearr_38237_39195[(2)] = inst_38190);

(statearr_38237_39195[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (2))){
var state_38215__$1 = state_38215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38215__$1,(4),ch);
} else {
if((state_val_38216 === (23))){
var state_38215__$1 = state_38215;
var statearr_38238_39197 = state_38215__$1;
(statearr_38238_39197[(2)] = null);

(statearr_38238_39197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (19))){
var inst_38196 = (state_38215[(11)]);
var inst_38146 = (state_38215[(8)]);
var inst_38198 = cljs.core.async.muxch_STAR_(inst_38196);
var state_38215__$1 = state_38215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38215__$1,(22),inst_38198,inst_38146);
} else {
if((state_val_38216 === (11))){
var inst_38156 = (state_38215[(16)]);
var inst_38170 = (state_38215[(10)]);
var inst_38170__$1 = cljs.core.seq(inst_38156);
var state_38215__$1 = (function (){var statearr_38239 = state_38215;
(statearr_38239[(10)] = inst_38170__$1);

return statearr_38239;
})();
if(inst_38170__$1){
var statearr_38240_39198 = state_38215__$1;
(statearr_38240_39198[(1)] = (13));

} else {
var statearr_38241_39200 = state_38215__$1;
(statearr_38241_39200[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (9))){
var inst_38192 = (state_38215[(2)]);
var state_38215__$1 = state_38215;
var statearr_38242_39203 = state_38215__$1;
(statearr_38242_39203[(2)] = inst_38192);

(statearr_38242_39203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (5))){
var inst_38153 = cljs.core.deref(mults);
var inst_38154 = cljs.core.vals(inst_38153);
var inst_38155 = cljs.core.seq(inst_38154);
var inst_38156 = inst_38155;
var inst_38157 = null;
var inst_38158 = (0);
var inst_38159 = (0);
var state_38215__$1 = (function (){var statearr_38243 = state_38215;
(statearr_38243[(13)] = inst_38159);

(statearr_38243[(14)] = inst_38158);

(statearr_38243[(15)] = inst_38157);

(statearr_38243[(16)] = inst_38156);

return statearr_38243;
})();
var statearr_38244_39204 = state_38215__$1;
(statearr_38244_39204[(2)] = null);

(statearr_38244_39204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (14))){
var state_38215__$1 = state_38215;
var statearr_38248_39205 = state_38215__$1;
(statearr_38248_39205[(2)] = null);

(statearr_38248_39205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (16))){
var inst_38170 = (state_38215[(10)]);
var inst_38174 = cljs.core.chunk_first(inst_38170);
var inst_38175 = cljs.core.chunk_rest(inst_38170);
var inst_38176 = cljs.core.count(inst_38174);
var inst_38156 = inst_38175;
var inst_38157 = inst_38174;
var inst_38158 = inst_38176;
var inst_38159 = (0);
var state_38215__$1 = (function (){var statearr_38249 = state_38215;
(statearr_38249[(13)] = inst_38159);

(statearr_38249[(14)] = inst_38158);

(statearr_38249[(15)] = inst_38157);

(statearr_38249[(16)] = inst_38156);

return statearr_38249;
})();
var statearr_38250_39206 = state_38215__$1;
(statearr_38250_39206[(2)] = null);

(statearr_38250_39206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (10))){
var inst_38159 = (state_38215[(13)]);
var inst_38158 = (state_38215[(14)]);
var inst_38157 = (state_38215[(15)]);
var inst_38156 = (state_38215[(16)]);
var inst_38164 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38157,inst_38159);
var inst_38165 = cljs.core.async.muxch_STAR_(inst_38164);
var inst_38166 = cljs.core.async.close_BANG_(inst_38165);
var inst_38167 = (inst_38159 + (1));
var tmp38245 = inst_38158;
var tmp38246 = inst_38157;
var tmp38247 = inst_38156;
var inst_38156__$1 = tmp38247;
var inst_38157__$1 = tmp38246;
var inst_38158__$1 = tmp38245;
var inst_38159__$1 = inst_38167;
var state_38215__$1 = (function (){var statearr_38251 = state_38215;
(statearr_38251[(13)] = inst_38159__$1);

(statearr_38251[(14)] = inst_38158__$1);

(statearr_38251[(15)] = inst_38157__$1);

(statearr_38251[(16)] = inst_38156__$1);

(statearr_38251[(17)] = inst_38166);

return statearr_38251;
})();
var statearr_38252_39207 = state_38215__$1;
(statearr_38252_39207[(2)] = null);

(statearr_38252_39207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (18))){
var inst_38185 = (state_38215[(2)]);
var state_38215__$1 = state_38215;
var statearr_38253_39208 = state_38215__$1;
(statearr_38253_39208[(2)] = inst_38185);

(statearr_38253_39208[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38216 === (8))){
var inst_38159 = (state_38215[(13)]);
var inst_38158 = (state_38215[(14)]);
var inst_38161 = (inst_38159 < inst_38158);
var inst_38162 = inst_38161;
var state_38215__$1 = state_38215;
if(cljs.core.truth_(inst_38162)){
var statearr_38254_39209 = state_38215__$1;
(statearr_38254_39209[(1)] = (10));

} else {
var statearr_38255_39210 = state_38215__$1;
(statearr_38255_39210[(1)] = (11));

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
var cljs$core$async$state_machine__37201__auto__ = null;
var cljs$core$async$state_machine__37201__auto____0 = (function (){
var statearr_38256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38256[(0)] = cljs$core$async$state_machine__37201__auto__);

(statearr_38256[(1)] = (1));

return statearr_38256;
});
var cljs$core$async$state_machine__37201__auto____1 = (function (state_38215){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_38215);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e38257){if((e38257 instanceof Object)){
var ex__37204__auto__ = e38257;
var statearr_38258_39211 = state_38215;
(statearr_38258_39211[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38257;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39212 = state_38215;
state_38215 = G__39212;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$state_machine__37201__auto__ = function(state_38215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37201__auto____1.call(this,state_38215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37201__auto____0;
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37201__auto____1;
return cljs$core$async$state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_38259 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_38259[(6)] = c__37268__auto___39173);

return statearr_38259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
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
var G__38261 = arguments.length;
switch (G__38261) {
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
var G__38263 = arguments.length;
switch (G__38263) {
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
var G__38265 = arguments.length;
switch (G__38265) {
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
var c__37268__auto___39216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_38304){
var state_val_38305 = (state_38304[(1)]);
if((state_val_38305 === (7))){
var state_38304__$1 = state_38304;
var statearr_38306_39217 = state_38304__$1;
(statearr_38306_39217[(2)] = null);

(statearr_38306_39217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (1))){
var state_38304__$1 = state_38304;
var statearr_38307_39218 = state_38304__$1;
(statearr_38307_39218[(2)] = null);

(statearr_38307_39218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (4))){
var inst_38268 = (state_38304[(7)]);
var inst_38270 = (inst_38268 < cnt);
var state_38304__$1 = state_38304;
if(cljs.core.truth_(inst_38270)){
var statearr_38308_39219 = state_38304__$1;
(statearr_38308_39219[(1)] = (6));

} else {
var statearr_38309_39220 = state_38304__$1;
(statearr_38309_39220[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (15))){
var inst_38300 = (state_38304[(2)]);
var state_38304__$1 = state_38304;
var statearr_38310_39221 = state_38304__$1;
(statearr_38310_39221[(2)] = inst_38300);

(statearr_38310_39221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (13))){
var inst_38293 = cljs.core.async.close_BANG_(out);
var state_38304__$1 = state_38304;
var statearr_38311_39222 = state_38304__$1;
(statearr_38311_39222[(2)] = inst_38293);

(statearr_38311_39222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (6))){
var state_38304__$1 = state_38304;
var statearr_38312_39223 = state_38304__$1;
(statearr_38312_39223[(2)] = null);

(statearr_38312_39223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (3))){
var inst_38302 = (state_38304[(2)]);
var state_38304__$1 = state_38304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38304__$1,inst_38302);
} else {
if((state_val_38305 === (12))){
var inst_38290 = (state_38304[(8)]);
var inst_38290__$1 = (state_38304[(2)]);
var inst_38291 = cljs.core.some(cljs.core.nil_QMARK_,inst_38290__$1);
var state_38304__$1 = (function (){var statearr_38313 = state_38304;
(statearr_38313[(8)] = inst_38290__$1);

return statearr_38313;
})();
if(cljs.core.truth_(inst_38291)){
var statearr_38314_39224 = state_38304__$1;
(statearr_38314_39224[(1)] = (13));

} else {
var statearr_38315_39225 = state_38304__$1;
(statearr_38315_39225[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (2))){
var inst_38267 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38268 = (0);
var state_38304__$1 = (function (){var statearr_38316 = state_38304;
(statearr_38316[(9)] = inst_38267);

(statearr_38316[(7)] = inst_38268);

return statearr_38316;
})();
var statearr_38317_39226 = state_38304__$1;
(statearr_38317_39226[(2)] = null);

(statearr_38317_39226[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (11))){
var inst_38268 = (state_38304[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38304,(10),Object,null,(9));
var inst_38277 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38268) : chs__$1.call(null,inst_38268));
var inst_38278 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38268) : done.call(null,inst_38268));
var inst_38279 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38277,inst_38278);
var state_38304__$1 = state_38304;
var statearr_38318_39227 = state_38304__$1;
(statearr_38318_39227[(2)] = inst_38279);


cljs.core.async.impl.ioc_helpers.process_exception(state_38304__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (9))){
var inst_38268 = (state_38304[(7)]);
var inst_38281 = (state_38304[(2)]);
var inst_38282 = (inst_38268 + (1));
var inst_38268__$1 = inst_38282;
var state_38304__$1 = (function (){var statearr_38319 = state_38304;
(statearr_38319[(10)] = inst_38281);

(statearr_38319[(7)] = inst_38268__$1);

return statearr_38319;
})();
var statearr_38320_39228 = state_38304__$1;
(statearr_38320_39228[(2)] = null);

(statearr_38320_39228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (5))){
var inst_38288 = (state_38304[(2)]);
var state_38304__$1 = (function (){var statearr_38321 = state_38304;
(statearr_38321[(11)] = inst_38288);

return statearr_38321;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38304__$1,(12),dchan);
} else {
if((state_val_38305 === (14))){
var inst_38290 = (state_38304[(8)]);
var inst_38295 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38290);
var state_38304__$1 = state_38304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38304__$1,(16),out,inst_38295);
} else {
if((state_val_38305 === (16))){
var inst_38297 = (state_38304[(2)]);
var state_38304__$1 = (function (){var statearr_38322 = state_38304;
(statearr_38322[(12)] = inst_38297);

return statearr_38322;
})();
var statearr_38323_39229 = state_38304__$1;
(statearr_38323_39229[(2)] = null);

(statearr_38323_39229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (10))){
var inst_38272 = (state_38304[(2)]);
var inst_38273 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38304__$1 = (function (){var statearr_38324 = state_38304;
(statearr_38324[(13)] = inst_38272);

return statearr_38324;
})();
var statearr_38325_39230 = state_38304__$1;
(statearr_38325_39230[(2)] = inst_38273);


cljs.core.async.impl.ioc_helpers.process_exception(state_38304__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38305 === (8))){
var inst_38286 = (state_38304[(2)]);
var state_38304__$1 = state_38304;
var statearr_38326_39231 = state_38304__$1;
(statearr_38326_39231[(2)] = inst_38286);

(statearr_38326_39231[(1)] = (5));


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
var cljs$core$async$state_machine__37201__auto__ = null;
var cljs$core$async$state_machine__37201__auto____0 = (function (){
var statearr_38327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38327[(0)] = cljs$core$async$state_machine__37201__auto__);

(statearr_38327[(1)] = (1));

return statearr_38327;
});
var cljs$core$async$state_machine__37201__auto____1 = (function (state_38304){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_38304);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e38328){if((e38328 instanceof Object)){
var ex__37204__auto__ = e38328;
var statearr_38329_39232 = state_38304;
(statearr_38329_39232[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39233 = state_38304;
state_38304 = G__39233;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$state_machine__37201__auto__ = function(state_38304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37201__auto____1.call(this,state_38304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37201__auto____0;
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37201__auto____1;
return cljs$core$async$state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_38330 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_38330[(6)] = c__37268__auto___39216);

return statearr_38330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
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
var G__38333 = arguments.length;
switch (G__38333) {
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
var c__37268__auto___39235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_38365){
var state_val_38366 = (state_38365[(1)]);
if((state_val_38366 === (7))){
var inst_38344 = (state_38365[(7)]);
var inst_38345 = (state_38365[(8)]);
var inst_38344__$1 = (state_38365[(2)]);
var inst_38345__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38344__$1,(0),null);
var inst_38346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38344__$1,(1),null);
var inst_38347 = (inst_38345__$1 == null);
var state_38365__$1 = (function (){var statearr_38367 = state_38365;
(statearr_38367[(9)] = inst_38346);

(statearr_38367[(7)] = inst_38344__$1);

(statearr_38367[(8)] = inst_38345__$1);

return statearr_38367;
})();
if(cljs.core.truth_(inst_38347)){
var statearr_38368_39236 = state_38365__$1;
(statearr_38368_39236[(1)] = (8));

} else {
var statearr_38369_39237 = state_38365__$1;
(statearr_38369_39237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (1))){
var inst_38334 = cljs.core.vec(chs);
var inst_38335 = inst_38334;
var state_38365__$1 = (function (){var statearr_38370 = state_38365;
(statearr_38370[(10)] = inst_38335);

return statearr_38370;
})();
var statearr_38371_39238 = state_38365__$1;
(statearr_38371_39238[(2)] = null);

(statearr_38371_39238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (4))){
var inst_38335 = (state_38365[(10)]);
var state_38365__$1 = state_38365;
return cljs.core.async.ioc_alts_BANG_(state_38365__$1,(7),inst_38335);
} else {
if((state_val_38366 === (6))){
var inst_38361 = (state_38365[(2)]);
var state_38365__$1 = state_38365;
var statearr_38372_39239 = state_38365__$1;
(statearr_38372_39239[(2)] = inst_38361);

(statearr_38372_39239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (3))){
var inst_38363 = (state_38365[(2)]);
var state_38365__$1 = state_38365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38365__$1,inst_38363);
} else {
if((state_val_38366 === (2))){
var inst_38335 = (state_38365[(10)]);
var inst_38337 = cljs.core.count(inst_38335);
var inst_38338 = (inst_38337 > (0));
var state_38365__$1 = state_38365;
if(cljs.core.truth_(inst_38338)){
var statearr_38374_39240 = state_38365__$1;
(statearr_38374_39240[(1)] = (4));

} else {
var statearr_38375_39241 = state_38365__$1;
(statearr_38375_39241[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (11))){
var inst_38335 = (state_38365[(10)]);
var inst_38354 = (state_38365[(2)]);
var tmp38373 = inst_38335;
var inst_38335__$1 = tmp38373;
var state_38365__$1 = (function (){var statearr_38376 = state_38365;
(statearr_38376[(10)] = inst_38335__$1);

(statearr_38376[(11)] = inst_38354);

return statearr_38376;
})();
var statearr_38377_39242 = state_38365__$1;
(statearr_38377_39242[(2)] = null);

(statearr_38377_39242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (9))){
var inst_38345 = (state_38365[(8)]);
var state_38365__$1 = state_38365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38365__$1,(11),out,inst_38345);
} else {
if((state_val_38366 === (5))){
var inst_38359 = cljs.core.async.close_BANG_(out);
var state_38365__$1 = state_38365;
var statearr_38378_39243 = state_38365__$1;
(statearr_38378_39243[(2)] = inst_38359);

(statearr_38378_39243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (10))){
var inst_38357 = (state_38365[(2)]);
var state_38365__$1 = state_38365;
var statearr_38379_39244 = state_38365__$1;
(statearr_38379_39244[(2)] = inst_38357);

(statearr_38379_39244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38366 === (8))){
var inst_38335 = (state_38365[(10)]);
var inst_38346 = (state_38365[(9)]);
var inst_38344 = (state_38365[(7)]);
var inst_38345 = (state_38365[(8)]);
var inst_38349 = (function (){var cs = inst_38335;
var vec__38340 = inst_38344;
var v = inst_38345;
var c = inst_38346;
return (function (p1__38331_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38331_SHARP_);
});
})();
var inst_38350 = cljs.core.filterv(inst_38349,inst_38335);
var inst_38335__$1 = inst_38350;
var state_38365__$1 = (function (){var statearr_38380 = state_38365;
(statearr_38380[(10)] = inst_38335__$1);

return statearr_38380;
})();
var statearr_38381_39245 = state_38365__$1;
(statearr_38381_39245[(2)] = null);

(statearr_38381_39245[(1)] = (2));


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
var cljs$core$async$state_machine__37201__auto__ = null;
var cljs$core$async$state_machine__37201__auto____0 = (function (){
var statearr_38382 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38382[(0)] = cljs$core$async$state_machine__37201__auto__);

(statearr_38382[(1)] = (1));

return statearr_38382;
});
var cljs$core$async$state_machine__37201__auto____1 = (function (state_38365){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_38365);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e38383){if((e38383 instanceof Object)){
var ex__37204__auto__ = e38383;
var statearr_38384_39246 = state_38365;
(statearr_38384_39246[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38383;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39250 = state_38365;
state_38365 = G__39250;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$state_machine__37201__auto__ = function(state_38365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37201__auto____1.call(this,state_38365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37201__auto____0;
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37201__auto____1;
return cljs$core$async$state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_38385 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_38385[(6)] = c__37268__auto___39235);

return statearr_38385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
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
var G__38387 = arguments.length;
switch (G__38387) {
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
var c__37268__auto___39252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_38411){
var state_val_38412 = (state_38411[(1)]);
if((state_val_38412 === (7))){
var inst_38393 = (state_38411[(7)]);
var inst_38393__$1 = (state_38411[(2)]);
var inst_38394 = (inst_38393__$1 == null);
var inst_38395 = cljs.core.not(inst_38394);
var state_38411__$1 = (function (){var statearr_38413 = state_38411;
(statearr_38413[(7)] = inst_38393__$1);

return statearr_38413;
})();
if(inst_38395){
var statearr_38414_39255 = state_38411__$1;
(statearr_38414_39255[(1)] = (8));

} else {
var statearr_38415_39256 = state_38411__$1;
(statearr_38415_39256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (1))){
var inst_38388 = (0);
var state_38411__$1 = (function (){var statearr_38416 = state_38411;
(statearr_38416[(8)] = inst_38388);

return statearr_38416;
})();
var statearr_38417_39257 = state_38411__$1;
(statearr_38417_39257[(2)] = null);

(statearr_38417_39257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (4))){
var state_38411__$1 = state_38411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38411__$1,(7),ch);
} else {
if((state_val_38412 === (6))){
var inst_38406 = (state_38411[(2)]);
var state_38411__$1 = state_38411;
var statearr_38418_39258 = state_38411__$1;
(statearr_38418_39258[(2)] = inst_38406);

(statearr_38418_39258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (3))){
var inst_38408 = (state_38411[(2)]);
var inst_38409 = cljs.core.async.close_BANG_(out);
var state_38411__$1 = (function (){var statearr_38419 = state_38411;
(statearr_38419[(9)] = inst_38408);

return statearr_38419;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38411__$1,inst_38409);
} else {
if((state_val_38412 === (2))){
var inst_38388 = (state_38411[(8)]);
var inst_38390 = (inst_38388 < n);
var state_38411__$1 = state_38411;
if(cljs.core.truth_(inst_38390)){
var statearr_38420_39259 = state_38411__$1;
(statearr_38420_39259[(1)] = (4));

} else {
var statearr_38421_39260 = state_38411__$1;
(statearr_38421_39260[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (11))){
var inst_38388 = (state_38411[(8)]);
var inst_38398 = (state_38411[(2)]);
var inst_38399 = (inst_38388 + (1));
var inst_38388__$1 = inst_38399;
var state_38411__$1 = (function (){var statearr_38422 = state_38411;
(statearr_38422[(8)] = inst_38388__$1);

(statearr_38422[(10)] = inst_38398);

return statearr_38422;
})();
var statearr_38423_39261 = state_38411__$1;
(statearr_38423_39261[(2)] = null);

(statearr_38423_39261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (9))){
var state_38411__$1 = state_38411;
var statearr_38424_39262 = state_38411__$1;
(statearr_38424_39262[(2)] = null);

(statearr_38424_39262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (5))){
var state_38411__$1 = state_38411;
var statearr_38425_39263 = state_38411__$1;
(statearr_38425_39263[(2)] = null);

(statearr_38425_39263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (10))){
var inst_38403 = (state_38411[(2)]);
var state_38411__$1 = state_38411;
var statearr_38426_39264 = state_38411__$1;
(statearr_38426_39264[(2)] = inst_38403);

(statearr_38426_39264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38412 === (8))){
var inst_38393 = (state_38411[(7)]);
var state_38411__$1 = state_38411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38411__$1,(11),out,inst_38393);
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
var cljs$core$async$state_machine__37201__auto__ = null;
var cljs$core$async$state_machine__37201__auto____0 = (function (){
var statearr_38427 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38427[(0)] = cljs$core$async$state_machine__37201__auto__);

(statearr_38427[(1)] = (1));

return statearr_38427;
});
var cljs$core$async$state_machine__37201__auto____1 = (function (state_38411){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_38411);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e38428){if((e38428 instanceof Object)){
var ex__37204__auto__ = e38428;
var statearr_38429_39265 = state_38411;
(statearr_38429_39265[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38428;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39266 = state_38411;
state_38411 = G__39266;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$state_machine__37201__auto__ = function(state_38411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37201__auto____1.call(this,state_38411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37201__auto____0;
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37201__auto____1;
return cljs$core$async$state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_38430 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_38430[(6)] = c__37268__auto___39252);

return statearr_38430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38432 = (function (f,ch,meta38433){
this.f = f;
this.ch = ch;
this.meta38433 = meta38433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38434,meta38433__$1){
var self__ = this;
var _38434__$1 = this;
return (new cljs.core.async.t_cljs$core$async38432(self__.f,self__.ch,meta38433__$1));
}));

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38434){
var self__ = this;
var _38434__$1 = this;
return self__.meta38433;
}));

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38435 = (function (f,ch,meta38433,_,fn1,meta38436){
this.f = f;
this.ch = ch;
this.meta38433 = meta38433;
this._ = _;
this.fn1 = fn1;
this.meta38436 = meta38436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38437,meta38436__$1){
var self__ = this;
var _38437__$1 = this;
return (new cljs.core.async.t_cljs$core$async38435(self__.f,self__.ch,self__.meta38433,self__._,self__.fn1,meta38436__$1));
}));

(cljs.core.async.t_cljs$core$async38435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38437){
var self__ = this;
var _38437__$1 = this;
return self__.meta38436;
}));

(cljs.core.async.t_cljs$core$async38435.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38435.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38431_SHARP_){
var G__38438 = (((p1__38431_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38431_SHARP_) : self__.f.call(null,p1__38431_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38438) : f1.call(null,G__38438));
});
}));

(cljs.core.async.t_cljs$core$async38435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38433","meta38433",1756670527,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38432","cljs.core.async/t_cljs$core$async38432",-322048513,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38436","meta38436",-1635397699,null)], null);
}));

(cljs.core.async.t_cljs$core$async38435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38435");

(cljs.core.async.t_cljs$core$async38435.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38435.
 */
cljs.core.async.__GT_t_cljs$core$async38435 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38435(f__$1,ch__$1,meta38433__$1,___$2,fn1__$1,meta38436){
return (new cljs.core.async.t_cljs$core$async38435(f__$1,ch__$1,meta38433__$1,___$2,fn1__$1,meta38436));
});

}

return (new cljs.core.async.t_cljs$core$async38435(self__.f,self__.ch,self__.meta38433,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38439 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38439) : self__.f.call(null,G__38439));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38432.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38433","meta38433",1756670527,null)], null);
}));

(cljs.core.async.t_cljs$core$async38432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38432");

(cljs.core.async.t_cljs$core$async38432.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38432.
 */
cljs.core.async.__GT_t_cljs$core$async38432 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38432(f__$1,ch__$1,meta38433){
return (new cljs.core.async.t_cljs$core$async38432(f__$1,ch__$1,meta38433));
});

}

return (new cljs.core.async.t_cljs$core$async38432(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38440 = (function (f,ch,meta38441){
this.f = f;
this.ch = ch;
this.meta38441 = meta38441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38442,meta38441__$1){
var self__ = this;
var _38442__$1 = this;
return (new cljs.core.async.t_cljs$core$async38440(self__.f,self__.ch,meta38441__$1));
}));

(cljs.core.async.t_cljs$core$async38440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38442){
var self__ = this;
var _38442__$1 = this;
return self__.meta38441;
}));

(cljs.core.async.t_cljs$core$async38440.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38440.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38440.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38440.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38440.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38440.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38441","meta38441",-1864735203,null)], null);
}));

(cljs.core.async.t_cljs$core$async38440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38440");

(cljs.core.async.t_cljs$core$async38440.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38440.
 */
cljs.core.async.__GT_t_cljs$core$async38440 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38440(f__$1,ch__$1,meta38441){
return (new cljs.core.async.t_cljs$core$async38440(f__$1,ch__$1,meta38441));
});

}

return (new cljs.core.async.t_cljs$core$async38440(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38443 = (function (p,ch,meta38444){
this.p = p;
this.ch = ch;
this.meta38444 = meta38444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38445,meta38444__$1){
var self__ = this;
var _38445__$1 = this;
return (new cljs.core.async.t_cljs$core$async38443(self__.p,self__.ch,meta38444__$1));
}));

(cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38445){
var self__ = this;
var _38445__$1 = this;
return self__.meta38444;
}));

(cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38444","meta38444",-715284945,null)], null);
}));

(cljs.core.async.t_cljs$core$async38443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38443");

(cljs.core.async.t_cljs$core$async38443.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38443.
 */
cljs.core.async.__GT_t_cljs$core$async38443 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38443(p__$1,ch__$1,meta38444){
return (new cljs.core.async.t_cljs$core$async38443(p__$1,ch__$1,meta38444));
});

}

return (new cljs.core.async.t_cljs$core$async38443(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38447 = arguments.length;
switch (G__38447) {
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
var c__37268__auto___39269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_38468){
var state_val_38469 = (state_38468[(1)]);
if((state_val_38469 === (7))){
var inst_38464 = (state_38468[(2)]);
var state_38468__$1 = state_38468;
var statearr_38470_39270 = state_38468__$1;
(statearr_38470_39270[(2)] = inst_38464);

(statearr_38470_39270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38469 === (1))){
var state_38468__$1 = state_38468;
var statearr_38471_39271 = state_38468__$1;
(statearr_38471_39271[(2)] = null);

(statearr_38471_39271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38469 === (4))){
var inst_38450 = (state_38468[(7)]);
var inst_38450__$1 = (state_38468[(2)]);
var inst_38451 = (inst_38450__$1 == null);
var state_38468__$1 = (function (){var statearr_38472 = state_38468;
(statearr_38472[(7)] = inst_38450__$1);

return statearr_38472;
})();
if(cljs.core.truth_(inst_38451)){
var statearr_38473_39272 = state_38468__$1;
(statearr_38473_39272[(1)] = (5));

} else {
var statearr_38474_39273 = state_38468__$1;
(statearr_38474_39273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38469 === (6))){
var inst_38450 = (state_38468[(7)]);
var inst_38455 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38450) : p.call(null,inst_38450));
var state_38468__$1 = state_38468;
if(cljs.core.truth_(inst_38455)){
var statearr_38475_39274 = state_38468__$1;
(statearr_38475_39274[(1)] = (8));

} else {
var statearr_38476_39275 = state_38468__$1;
(statearr_38476_39275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38469 === (3))){
var inst_38466 = (state_38468[(2)]);
var state_38468__$1 = state_38468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38468__$1,inst_38466);
} else {
if((state_val_38469 === (2))){
var state_38468__$1 = state_38468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38468__$1,(4),ch);
} else {
if((state_val_38469 === (11))){
var inst_38458 = (state_38468[(2)]);
var state_38468__$1 = state_38468;
var statearr_38477_39276 = state_38468__$1;
(statearr_38477_39276[(2)] = inst_38458);

(statearr_38477_39276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38469 === (9))){
var state_38468__$1 = state_38468;
var statearr_38478_39277 = state_38468__$1;
(statearr_38478_39277[(2)] = null);

(statearr_38478_39277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38469 === (5))){
var inst_38453 = cljs.core.async.close_BANG_(out);
var state_38468__$1 = state_38468;
var statearr_38479_39278 = state_38468__$1;
(statearr_38479_39278[(2)] = inst_38453);

(statearr_38479_39278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38469 === (10))){
var inst_38461 = (state_38468[(2)]);
var state_38468__$1 = (function (){var statearr_38480 = state_38468;
(statearr_38480[(8)] = inst_38461);

return statearr_38480;
})();
var statearr_38481_39279 = state_38468__$1;
(statearr_38481_39279[(2)] = null);

(statearr_38481_39279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38469 === (8))){
var inst_38450 = (state_38468[(7)]);
var state_38468__$1 = state_38468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38468__$1,(11),out,inst_38450);
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
var cljs$core$async$state_machine__37201__auto__ = null;
var cljs$core$async$state_machine__37201__auto____0 = (function (){
var statearr_38482 = [null,null,null,null,null,null,null,null,null];
(statearr_38482[(0)] = cljs$core$async$state_machine__37201__auto__);

(statearr_38482[(1)] = (1));

return statearr_38482;
});
var cljs$core$async$state_machine__37201__auto____1 = (function (state_38468){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_38468);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e38483){if((e38483 instanceof Object)){
var ex__37204__auto__ = e38483;
var statearr_38484_39280 = state_38468;
(statearr_38484_39280[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38483;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39281 = state_38468;
state_38468 = G__39281;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$state_machine__37201__auto__ = function(state_38468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37201__auto____1.call(this,state_38468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37201__auto____0;
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37201__auto____1;
return cljs$core$async$state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_38485 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_38485[(6)] = c__37268__auto___39269);

return statearr_38485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38487 = arguments.length;
switch (G__38487) {
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
var c__37268__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_38549){
var state_val_38550 = (state_38549[(1)]);
if((state_val_38550 === (7))){
var inst_38545 = (state_38549[(2)]);
var state_38549__$1 = state_38549;
var statearr_38551_39283 = state_38549__$1;
(statearr_38551_39283[(2)] = inst_38545);

(statearr_38551_39283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (20))){
var inst_38515 = (state_38549[(7)]);
var inst_38526 = (state_38549[(2)]);
var inst_38527 = cljs.core.next(inst_38515);
var inst_38501 = inst_38527;
var inst_38502 = null;
var inst_38503 = (0);
var inst_38504 = (0);
var state_38549__$1 = (function (){var statearr_38552 = state_38549;
(statearr_38552[(8)] = inst_38501);

(statearr_38552[(9)] = inst_38502);

(statearr_38552[(10)] = inst_38503);

(statearr_38552[(11)] = inst_38504);

(statearr_38552[(12)] = inst_38526);

return statearr_38552;
})();
var statearr_38553_39284 = state_38549__$1;
(statearr_38553_39284[(2)] = null);

(statearr_38553_39284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (1))){
var state_38549__$1 = state_38549;
var statearr_38554_39285 = state_38549__$1;
(statearr_38554_39285[(2)] = null);

(statearr_38554_39285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (4))){
var inst_38490 = (state_38549[(13)]);
var inst_38490__$1 = (state_38549[(2)]);
var inst_38491 = (inst_38490__$1 == null);
var state_38549__$1 = (function (){var statearr_38555 = state_38549;
(statearr_38555[(13)] = inst_38490__$1);

return statearr_38555;
})();
if(cljs.core.truth_(inst_38491)){
var statearr_38556_39286 = state_38549__$1;
(statearr_38556_39286[(1)] = (5));

} else {
var statearr_38557_39287 = state_38549__$1;
(statearr_38557_39287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (15))){
var state_38549__$1 = state_38549;
var statearr_38561_39288 = state_38549__$1;
(statearr_38561_39288[(2)] = null);

(statearr_38561_39288[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (21))){
var state_38549__$1 = state_38549;
var statearr_38562_39289 = state_38549__$1;
(statearr_38562_39289[(2)] = null);

(statearr_38562_39289[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (13))){
var inst_38501 = (state_38549[(8)]);
var inst_38502 = (state_38549[(9)]);
var inst_38503 = (state_38549[(10)]);
var inst_38504 = (state_38549[(11)]);
var inst_38511 = (state_38549[(2)]);
var inst_38512 = (inst_38504 + (1));
var tmp38558 = inst_38501;
var tmp38559 = inst_38502;
var tmp38560 = inst_38503;
var inst_38501__$1 = tmp38558;
var inst_38502__$1 = tmp38559;
var inst_38503__$1 = tmp38560;
var inst_38504__$1 = inst_38512;
var state_38549__$1 = (function (){var statearr_38563 = state_38549;
(statearr_38563[(8)] = inst_38501__$1);

(statearr_38563[(9)] = inst_38502__$1);

(statearr_38563[(10)] = inst_38503__$1);

(statearr_38563[(11)] = inst_38504__$1);

(statearr_38563[(14)] = inst_38511);

return statearr_38563;
})();
var statearr_38564_39290 = state_38549__$1;
(statearr_38564_39290[(2)] = null);

(statearr_38564_39290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (22))){
var state_38549__$1 = state_38549;
var statearr_38565_39291 = state_38549__$1;
(statearr_38565_39291[(2)] = null);

(statearr_38565_39291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (6))){
var inst_38490 = (state_38549[(13)]);
var inst_38499 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38490) : f.call(null,inst_38490));
var inst_38500 = cljs.core.seq(inst_38499);
var inst_38501 = inst_38500;
var inst_38502 = null;
var inst_38503 = (0);
var inst_38504 = (0);
var state_38549__$1 = (function (){var statearr_38566 = state_38549;
(statearr_38566[(8)] = inst_38501);

(statearr_38566[(9)] = inst_38502);

(statearr_38566[(10)] = inst_38503);

(statearr_38566[(11)] = inst_38504);

return statearr_38566;
})();
var statearr_38567_39292 = state_38549__$1;
(statearr_38567_39292[(2)] = null);

(statearr_38567_39292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (17))){
var inst_38515 = (state_38549[(7)]);
var inst_38519 = cljs.core.chunk_first(inst_38515);
var inst_38520 = cljs.core.chunk_rest(inst_38515);
var inst_38521 = cljs.core.count(inst_38519);
var inst_38501 = inst_38520;
var inst_38502 = inst_38519;
var inst_38503 = inst_38521;
var inst_38504 = (0);
var state_38549__$1 = (function (){var statearr_38568 = state_38549;
(statearr_38568[(8)] = inst_38501);

(statearr_38568[(9)] = inst_38502);

(statearr_38568[(10)] = inst_38503);

(statearr_38568[(11)] = inst_38504);

return statearr_38568;
})();
var statearr_38569_39293 = state_38549__$1;
(statearr_38569_39293[(2)] = null);

(statearr_38569_39293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (3))){
var inst_38547 = (state_38549[(2)]);
var state_38549__$1 = state_38549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38549__$1,inst_38547);
} else {
if((state_val_38550 === (12))){
var inst_38535 = (state_38549[(2)]);
var state_38549__$1 = state_38549;
var statearr_38570_39294 = state_38549__$1;
(statearr_38570_39294[(2)] = inst_38535);

(statearr_38570_39294[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (2))){
var state_38549__$1 = state_38549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38549__$1,(4),in$);
} else {
if((state_val_38550 === (23))){
var inst_38543 = (state_38549[(2)]);
var state_38549__$1 = state_38549;
var statearr_38571_39295 = state_38549__$1;
(statearr_38571_39295[(2)] = inst_38543);

(statearr_38571_39295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (19))){
var inst_38530 = (state_38549[(2)]);
var state_38549__$1 = state_38549;
var statearr_38572_39296 = state_38549__$1;
(statearr_38572_39296[(2)] = inst_38530);

(statearr_38572_39296[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (11))){
var inst_38501 = (state_38549[(8)]);
var inst_38515 = (state_38549[(7)]);
var inst_38515__$1 = cljs.core.seq(inst_38501);
var state_38549__$1 = (function (){var statearr_38573 = state_38549;
(statearr_38573[(7)] = inst_38515__$1);

return statearr_38573;
})();
if(inst_38515__$1){
var statearr_38574_39297 = state_38549__$1;
(statearr_38574_39297[(1)] = (14));

} else {
var statearr_38575_39298 = state_38549__$1;
(statearr_38575_39298[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (9))){
var inst_38537 = (state_38549[(2)]);
var inst_38538 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38549__$1 = (function (){var statearr_38576 = state_38549;
(statearr_38576[(15)] = inst_38537);

return statearr_38576;
})();
if(cljs.core.truth_(inst_38538)){
var statearr_38577_39299 = state_38549__$1;
(statearr_38577_39299[(1)] = (21));

} else {
var statearr_38578_39300 = state_38549__$1;
(statearr_38578_39300[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (5))){
var inst_38493 = cljs.core.async.close_BANG_(out);
var state_38549__$1 = state_38549;
var statearr_38579_39301 = state_38549__$1;
(statearr_38579_39301[(2)] = inst_38493);

(statearr_38579_39301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (14))){
var inst_38515 = (state_38549[(7)]);
var inst_38517 = cljs.core.chunked_seq_QMARK_(inst_38515);
var state_38549__$1 = state_38549;
if(inst_38517){
var statearr_38580_39302 = state_38549__$1;
(statearr_38580_39302[(1)] = (17));

} else {
var statearr_38581_39303 = state_38549__$1;
(statearr_38581_39303[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (16))){
var inst_38533 = (state_38549[(2)]);
var state_38549__$1 = state_38549;
var statearr_38582_39304 = state_38549__$1;
(statearr_38582_39304[(2)] = inst_38533);

(statearr_38582_39304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (10))){
var inst_38502 = (state_38549[(9)]);
var inst_38504 = (state_38549[(11)]);
var inst_38509 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38502,inst_38504);
var state_38549__$1 = state_38549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38549__$1,(13),out,inst_38509);
} else {
if((state_val_38550 === (18))){
var inst_38515 = (state_38549[(7)]);
var inst_38524 = cljs.core.first(inst_38515);
var state_38549__$1 = state_38549;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38549__$1,(20),out,inst_38524);
} else {
if((state_val_38550 === (8))){
var inst_38503 = (state_38549[(10)]);
var inst_38504 = (state_38549[(11)]);
var inst_38506 = (inst_38504 < inst_38503);
var inst_38507 = inst_38506;
var state_38549__$1 = state_38549;
if(cljs.core.truth_(inst_38507)){
var statearr_38583_39305 = state_38549__$1;
(statearr_38583_39305[(1)] = (10));

} else {
var statearr_38584_39306 = state_38549__$1;
(statearr_38584_39306[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__37201__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37201__auto____0 = (function (){
var statearr_38585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38585[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37201__auto__);

(statearr_38585[(1)] = (1));

return statearr_38585;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37201__auto____1 = (function (state_38549){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_38549);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e38586){if((e38586 instanceof Object)){
var ex__37204__auto__ = e38586;
var statearr_38587_39307 = state_38549;
(statearr_38587_39307[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38586;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39308 = state_38549;
state_38549 = G__39308;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37201__auto__ = function(state_38549){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37201__auto____1.call(this,state_38549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37201__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37201__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_38588 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_38588[(6)] = c__37268__auto__);

return statearr_38588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
}));

return c__37268__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38590 = arguments.length;
switch (G__38590) {
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
var G__38592 = arguments.length;
switch (G__38592) {
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
var G__38594 = arguments.length;
switch (G__38594) {
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
var c__37268__auto___39312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_38618){
var state_val_38619 = (state_38618[(1)]);
if((state_val_38619 === (7))){
var inst_38613 = (state_38618[(2)]);
var state_38618__$1 = state_38618;
var statearr_38620_39313 = state_38618__$1;
(statearr_38620_39313[(2)] = inst_38613);

(statearr_38620_39313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (1))){
var inst_38595 = null;
var state_38618__$1 = (function (){var statearr_38621 = state_38618;
(statearr_38621[(7)] = inst_38595);

return statearr_38621;
})();
var statearr_38622_39314 = state_38618__$1;
(statearr_38622_39314[(2)] = null);

(statearr_38622_39314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (4))){
var inst_38598 = (state_38618[(8)]);
var inst_38598__$1 = (state_38618[(2)]);
var inst_38599 = (inst_38598__$1 == null);
var inst_38600 = cljs.core.not(inst_38599);
var state_38618__$1 = (function (){var statearr_38623 = state_38618;
(statearr_38623[(8)] = inst_38598__$1);

return statearr_38623;
})();
if(inst_38600){
var statearr_38624_39315 = state_38618__$1;
(statearr_38624_39315[(1)] = (5));

} else {
var statearr_38625_39316 = state_38618__$1;
(statearr_38625_39316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (6))){
var state_38618__$1 = state_38618;
var statearr_38626_39317 = state_38618__$1;
(statearr_38626_39317[(2)] = null);

(statearr_38626_39317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (3))){
var inst_38615 = (state_38618[(2)]);
var inst_38616 = cljs.core.async.close_BANG_(out);
var state_38618__$1 = (function (){var statearr_38627 = state_38618;
(statearr_38627[(9)] = inst_38615);

return statearr_38627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38618__$1,inst_38616);
} else {
if((state_val_38619 === (2))){
var state_38618__$1 = state_38618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38618__$1,(4),ch);
} else {
if((state_val_38619 === (11))){
var inst_38598 = (state_38618[(8)]);
var inst_38607 = (state_38618[(2)]);
var inst_38595 = inst_38598;
var state_38618__$1 = (function (){var statearr_38628 = state_38618;
(statearr_38628[(10)] = inst_38607);

(statearr_38628[(7)] = inst_38595);

return statearr_38628;
})();
var statearr_38629_39318 = state_38618__$1;
(statearr_38629_39318[(2)] = null);

(statearr_38629_39318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (9))){
var inst_38598 = (state_38618[(8)]);
var state_38618__$1 = state_38618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38618__$1,(11),out,inst_38598);
} else {
if((state_val_38619 === (5))){
var inst_38598 = (state_38618[(8)]);
var inst_38595 = (state_38618[(7)]);
var inst_38602 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38598,inst_38595);
var state_38618__$1 = state_38618;
if(inst_38602){
var statearr_38631_39319 = state_38618__$1;
(statearr_38631_39319[(1)] = (8));

} else {
var statearr_38632_39320 = state_38618__$1;
(statearr_38632_39320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (10))){
var inst_38610 = (state_38618[(2)]);
var state_38618__$1 = state_38618;
var statearr_38633_39321 = state_38618__$1;
(statearr_38633_39321[(2)] = inst_38610);

(statearr_38633_39321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (8))){
var inst_38595 = (state_38618[(7)]);
var tmp38630 = inst_38595;
var inst_38595__$1 = tmp38630;
var state_38618__$1 = (function (){var statearr_38634 = state_38618;
(statearr_38634[(7)] = inst_38595__$1);

return statearr_38634;
})();
var statearr_38635_39324 = state_38618__$1;
(statearr_38635_39324[(2)] = null);

(statearr_38635_39324[(1)] = (2));


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
var cljs$core$async$state_machine__37201__auto__ = null;
var cljs$core$async$state_machine__37201__auto____0 = (function (){
var statearr_38636 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38636[(0)] = cljs$core$async$state_machine__37201__auto__);

(statearr_38636[(1)] = (1));

return statearr_38636;
});
var cljs$core$async$state_machine__37201__auto____1 = (function (state_38618){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_38618);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e38637){if((e38637 instanceof Object)){
var ex__37204__auto__ = e38637;
var statearr_38638_39331 = state_38618;
(statearr_38638_39331[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39332 = state_38618;
state_38618 = G__39332;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$state_machine__37201__auto__ = function(state_38618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37201__auto____1.call(this,state_38618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37201__auto____0;
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37201__auto____1;
return cljs$core$async$state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_38639 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_38639[(6)] = c__37268__auto___39312);

return statearr_38639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38641 = arguments.length;
switch (G__38641) {
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
var c__37268__auto___39342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_38679){
var state_val_38680 = (state_38679[(1)]);
if((state_val_38680 === (7))){
var inst_38675 = (state_38679[(2)]);
var state_38679__$1 = state_38679;
var statearr_38681_39346 = state_38679__$1;
(statearr_38681_39346[(2)] = inst_38675);

(statearr_38681_39346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (1))){
var inst_38642 = (new Array(n));
var inst_38643 = inst_38642;
var inst_38644 = (0);
var state_38679__$1 = (function (){var statearr_38682 = state_38679;
(statearr_38682[(7)] = inst_38644);

(statearr_38682[(8)] = inst_38643);

return statearr_38682;
})();
var statearr_38683_39347 = state_38679__$1;
(statearr_38683_39347[(2)] = null);

(statearr_38683_39347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (4))){
var inst_38647 = (state_38679[(9)]);
var inst_38647__$1 = (state_38679[(2)]);
var inst_38648 = (inst_38647__$1 == null);
var inst_38649 = cljs.core.not(inst_38648);
var state_38679__$1 = (function (){var statearr_38684 = state_38679;
(statearr_38684[(9)] = inst_38647__$1);

return statearr_38684;
})();
if(inst_38649){
var statearr_38685_39351 = state_38679__$1;
(statearr_38685_39351[(1)] = (5));

} else {
var statearr_38686_39352 = state_38679__$1;
(statearr_38686_39352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (15))){
var inst_38669 = (state_38679[(2)]);
var state_38679__$1 = state_38679;
var statearr_38687_39353 = state_38679__$1;
(statearr_38687_39353[(2)] = inst_38669);

(statearr_38687_39353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (13))){
var state_38679__$1 = state_38679;
var statearr_38688_39354 = state_38679__$1;
(statearr_38688_39354[(2)] = null);

(statearr_38688_39354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (6))){
var inst_38644 = (state_38679[(7)]);
var inst_38665 = (inst_38644 > (0));
var state_38679__$1 = state_38679;
if(cljs.core.truth_(inst_38665)){
var statearr_38689_39355 = state_38679__$1;
(statearr_38689_39355[(1)] = (12));

} else {
var statearr_38690_39356 = state_38679__$1;
(statearr_38690_39356[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (3))){
var inst_38677 = (state_38679[(2)]);
var state_38679__$1 = state_38679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38679__$1,inst_38677);
} else {
if((state_val_38680 === (12))){
var inst_38643 = (state_38679[(8)]);
var inst_38667 = cljs.core.vec(inst_38643);
var state_38679__$1 = state_38679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38679__$1,(15),out,inst_38667);
} else {
if((state_val_38680 === (2))){
var state_38679__$1 = state_38679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38679__$1,(4),ch);
} else {
if((state_val_38680 === (11))){
var inst_38659 = (state_38679[(2)]);
var inst_38660 = (new Array(n));
var inst_38643 = inst_38660;
var inst_38644 = (0);
var state_38679__$1 = (function (){var statearr_38691 = state_38679;
(statearr_38691[(10)] = inst_38659);

(statearr_38691[(7)] = inst_38644);

(statearr_38691[(8)] = inst_38643);

return statearr_38691;
})();
var statearr_38692_39357 = state_38679__$1;
(statearr_38692_39357[(2)] = null);

(statearr_38692_39357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (9))){
var inst_38643 = (state_38679[(8)]);
var inst_38657 = cljs.core.vec(inst_38643);
var state_38679__$1 = state_38679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38679__$1,(11),out,inst_38657);
} else {
if((state_val_38680 === (5))){
var inst_38652 = (state_38679[(11)]);
var inst_38644 = (state_38679[(7)]);
var inst_38647 = (state_38679[(9)]);
var inst_38643 = (state_38679[(8)]);
var inst_38651 = (inst_38643[inst_38644] = inst_38647);
var inst_38652__$1 = (inst_38644 + (1));
var inst_38653 = (inst_38652__$1 < n);
var state_38679__$1 = (function (){var statearr_38693 = state_38679;
(statearr_38693[(11)] = inst_38652__$1);

(statearr_38693[(12)] = inst_38651);

return statearr_38693;
})();
if(cljs.core.truth_(inst_38653)){
var statearr_38694_39358 = state_38679__$1;
(statearr_38694_39358[(1)] = (8));

} else {
var statearr_38695_39359 = state_38679__$1;
(statearr_38695_39359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (14))){
var inst_38672 = (state_38679[(2)]);
var inst_38673 = cljs.core.async.close_BANG_(out);
var state_38679__$1 = (function (){var statearr_38697 = state_38679;
(statearr_38697[(13)] = inst_38672);

return statearr_38697;
})();
var statearr_38698_39360 = state_38679__$1;
(statearr_38698_39360[(2)] = inst_38673);

(statearr_38698_39360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (10))){
var inst_38663 = (state_38679[(2)]);
var state_38679__$1 = state_38679;
var statearr_38699_39361 = state_38679__$1;
(statearr_38699_39361[(2)] = inst_38663);

(statearr_38699_39361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38680 === (8))){
var inst_38652 = (state_38679[(11)]);
var inst_38643 = (state_38679[(8)]);
var tmp38696 = inst_38643;
var inst_38643__$1 = tmp38696;
var inst_38644 = inst_38652;
var state_38679__$1 = (function (){var statearr_38700 = state_38679;
(statearr_38700[(7)] = inst_38644);

(statearr_38700[(8)] = inst_38643__$1);

return statearr_38700;
})();
var statearr_38701_39362 = state_38679__$1;
(statearr_38701_39362[(2)] = null);

(statearr_38701_39362[(1)] = (2));


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
var cljs$core$async$state_machine__37201__auto__ = null;
var cljs$core$async$state_machine__37201__auto____0 = (function (){
var statearr_38702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38702[(0)] = cljs$core$async$state_machine__37201__auto__);

(statearr_38702[(1)] = (1));

return statearr_38702;
});
var cljs$core$async$state_machine__37201__auto____1 = (function (state_38679){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_38679);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e38703){if((e38703 instanceof Object)){
var ex__37204__auto__ = e38703;
var statearr_38704_39363 = state_38679;
(statearr_38704_39363[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39364 = state_38679;
state_38679 = G__39364;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$state_machine__37201__auto__ = function(state_38679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37201__auto____1.call(this,state_38679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37201__auto____0;
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37201__auto____1;
return cljs$core$async$state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_38705 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_38705[(6)] = c__37268__auto___39342);

return statearr_38705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38707 = arguments.length;
switch (G__38707) {
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
var c__37268__auto___39366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37269__auto__ = (function (){var switch__37200__auto__ = (function (state_38749){
var state_val_38750 = (state_38749[(1)]);
if((state_val_38750 === (7))){
var inst_38745 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
var statearr_38751_39367 = state_38749__$1;
(statearr_38751_39367[(2)] = inst_38745);

(statearr_38751_39367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (1))){
var inst_38708 = [];
var inst_38709 = inst_38708;
var inst_38710 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38749__$1 = (function (){var statearr_38752 = state_38749;
(statearr_38752[(7)] = inst_38710);

(statearr_38752[(8)] = inst_38709);

return statearr_38752;
})();
var statearr_38753_39368 = state_38749__$1;
(statearr_38753_39368[(2)] = null);

(statearr_38753_39368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (4))){
var inst_38713 = (state_38749[(9)]);
var inst_38713__$1 = (state_38749[(2)]);
var inst_38714 = (inst_38713__$1 == null);
var inst_38715 = cljs.core.not(inst_38714);
var state_38749__$1 = (function (){var statearr_38754 = state_38749;
(statearr_38754[(9)] = inst_38713__$1);

return statearr_38754;
})();
if(inst_38715){
var statearr_38755_39369 = state_38749__$1;
(statearr_38755_39369[(1)] = (5));

} else {
var statearr_38756_39370 = state_38749__$1;
(statearr_38756_39370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (15))){
var inst_38739 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
var statearr_38757_39371 = state_38749__$1;
(statearr_38757_39371[(2)] = inst_38739);

(statearr_38757_39371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (13))){
var state_38749__$1 = state_38749;
var statearr_38758_39372 = state_38749__$1;
(statearr_38758_39372[(2)] = null);

(statearr_38758_39372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (6))){
var inst_38709 = (state_38749[(8)]);
var inst_38734 = inst_38709.length;
var inst_38735 = (inst_38734 > (0));
var state_38749__$1 = state_38749;
if(cljs.core.truth_(inst_38735)){
var statearr_38759_39373 = state_38749__$1;
(statearr_38759_39373[(1)] = (12));

} else {
var statearr_38760_39374 = state_38749__$1;
(statearr_38760_39374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (3))){
var inst_38747 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38749__$1,inst_38747);
} else {
if((state_val_38750 === (12))){
var inst_38709 = (state_38749[(8)]);
var inst_38737 = cljs.core.vec(inst_38709);
var state_38749__$1 = state_38749;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38749__$1,(15),out,inst_38737);
} else {
if((state_val_38750 === (2))){
var state_38749__$1 = state_38749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38749__$1,(4),ch);
} else {
if((state_val_38750 === (11))){
var inst_38713 = (state_38749[(9)]);
var inst_38717 = (state_38749[(10)]);
var inst_38727 = (state_38749[(2)]);
var inst_38728 = [];
var inst_38729 = inst_38728.push(inst_38713);
var inst_38709 = inst_38728;
var inst_38710 = inst_38717;
var state_38749__$1 = (function (){var statearr_38761 = state_38749;
(statearr_38761[(7)] = inst_38710);

(statearr_38761[(8)] = inst_38709);

(statearr_38761[(11)] = inst_38727);

(statearr_38761[(12)] = inst_38729);

return statearr_38761;
})();
var statearr_38762_39375 = state_38749__$1;
(statearr_38762_39375[(2)] = null);

(statearr_38762_39375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (9))){
var inst_38709 = (state_38749[(8)]);
var inst_38725 = cljs.core.vec(inst_38709);
var state_38749__$1 = state_38749;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38749__$1,(11),out,inst_38725);
} else {
if((state_val_38750 === (5))){
var inst_38710 = (state_38749[(7)]);
var inst_38713 = (state_38749[(9)]);
var inst_38717 = (state_38749[(10)]);
var inst_38717__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38713) : f.call(null,inst_38713));
var inst_38718 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38717__$1,inst_38710);
var inst_38719 = cljs.core.keyword_identical_QMARK_(inst_38710,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38720 = ((inst_38718) || (inst_38719));
var state_38749__$1 = (function (){var statearr_38763 = state_38749;
(statearr_38763[(10)] = inst_38717__$1);

return statearr_38763;
})();
if(cljs.core.truth_(inst_38720)){
var statearr_38764_39376 = state_38749__$1;
(statearr_38764_39376[(1)] = (8));

} else {
var statearr_38765_39377 = state_38749__$1;
(statearr_38765_39377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (14))){
var inst_38742 = (state_38749[(2)]);
var inst_38743 = cljs.core.async.close_BANG_(out);
var state_38749__$1 = (function (){var statearr_38767 = state_38749;
(statearr_38767[(13)] = inst_38742);

return statearr_38767;
})();
var statearr_38768_39378 = state_38749__$1;
(statearr_38768_39378[(2)] = inst_38743);

(statearr_38768_39378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (10))){
var inst_38732 = (state_38749[(2)]);
var state_38749__$1 = state_38749;
var statearr_38769_39379 = state_38749__$1;
(statearr_38769_39379[(2)] = inst_38732);

(statearr_38769_39379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38750 === (8))){
var inst_38709 = (state_38749[(8)]);
var inst_38713 = (state_38749[(9)]);
var inst_38717 = (state_38749[(10)]);
var inst_38722 = inst_38709.push(inst_38713);
var tmp38766 = inst_38709;
var inst_38709__$1 = tmp38766;
var inst_38710 = inst_38717;
var state_38749__$1 = (function (){var statearr_38770 = state_38749;
(statearr_38770[(7)] = inst_38710);

(statearr_38770[(8)] = inst_38709__$1);

(statearr_38770[(14)] = inst_38722);

return statearr_38770;
})();
var statearr_38771_39380 = state_38749__$1;
(statearr_38771_39380[(2)] = null);

(statearr_38771_39380[(1)] = (2));


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
var cljs$core$async$state_machine__37201__auto__ = null;
var cljs$core$async$state_machine__37201__auto____0 = (function (){
var statearr_38772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38772[(0)] = cljs$core$async$state_machine__37201__auto__);

(statearr_38772[(1)] = (1));

return statearr_38772;
});
var cljs$core$async$state_machine__37201__auto____1 = (function (state_38749){
while(true){
var ret_value__37202__auto__ = (function (){try{while(true){
var result__37203__auto__ = switch__37200__auto__(state_38749);
if(cljs.core.keyword_identical_QMARK_(result__37203__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37203__auto__;
}
break;
}
}catch (e38773){if((e38773 instanceof Object)){
var ex__37204__auto__ = e38773;
var statearr_38774_39381 = state_38749;
(statearr_38774_39381[(5)] = ex__37204__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39382 = state_38749;
state_38749 = G__39382;
continue;
} else {
return ret_value__37202__auto__;
}
break;
}
});
cljs$core$async$state_machine__37201__auto__ = function(state_38749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37201__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37201__auto____1.call(this,state_38749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37201__auto____0;
cljs$core$async$state_machine__37201__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37201__auto____1;
return cljs$core$async$state_machine__37201__auto__;
})()
})();
var state__37270__auto__ = (function (){var statearr_38775 = (f__37269__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37269__auto__.cljs$core$IFn$_invoke$arity$0() : f__37269__auto__.call(null));
(statearr_38775[(6)] = c__37268__auto___39366);

return statearr_38775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37270__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
