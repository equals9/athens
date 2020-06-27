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
var val_36797 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36797) : fn1.call(null,val_36797));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36797) : fn1.call(null,val_36797));
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
var n__4666__auto___36802 = n;
var x_36803 = (0);
while(true){
if((x_36803 < n__4666__auto___36802)){
(a[x_36803] = x_36803);

var G__36804 = (x_36803 + (1));
x_36803 = G__36804;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34356 = (function (flag,meta34357){
this.flag = flag;
this.meta34357 = meta34357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34358,meta34357__$1){
var self__ = this;
var _34358__$1 = this;
return (new cljs.core.async.t_cljs$core$async34356(self__.flag,meta34357__$1));
}));

(cljs.core.async.t_cljs$core$async34356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34358){
var self__ = this;
var _34358__$1 = this;
return self__.meta34357;
}));

(cljs.core.async.t_cljs$core$async34356.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34356.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34357","meta34357",2132260916,null)], null);
}));

(cljs.core.async.t_cljs$core$async34356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34356");

(cljs.core.async.t_cljs$core$async34356.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34356.
 */
cljs.core.async.__GT_t_cljs$core$async34356 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34356(flag__$1,meta34357){
return (new cljs.core.async.t_cljs$core$async34356(flag__$1,meta34357));
});

}

return (new cljs.core.async.t_cljs$core$async34356(flag,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36812 = (i + (1));
i = G__36812;
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
var len__4789__auto___36814 = arguments.length;
var i__4790__auto___36816 = (0);
while(true){
if((i__4790__auto___36816 < len__4789__auto___36814)){
args__4795__auto__.push((arguments[i__4790__auto___36816]));

var G__36817 = (i__4790__auto___36816 + (1));
i__4790__auto___36816 = G__36817;
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
var c__34274__auto___36822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34423){
var state_val_34424 = (state_34423[(1)]);
if((state_val_34424 === (7))){
var inst_34419 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34425_36823 = state_34423__$1;
(statearr_34425_36823[(2)] = inst_34419);

(statearr_34425_36823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (1))){
var state_34423__$1 = state_34423;
var statearr_34426_36825 = state_34423__$1;
(statearr_34426_36825[(2)] = null);

(statearr_34426_36825[(1)] = (2));


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
var statearr_34428_36826 = state_34423__$1;
(statearr_34428_36826[(1)] = (5));

} else {
var statearr_34429_36827 = state_34423__$1;
(statearr_34429_36827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (13))){
var state_34423__$1 = state_34423;
var statearr_34430_36829 = state_34423__$1;
(statearr_34430_36829[(2)] = null);

(statearr_34430_36829[(1)] = (14));


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
var statearr_34431_36830 = state_34423__$1;
(statearr_34431_36830[(2)] = null);

(statearr_34431_36830[(1)] = (2));


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
var statearr_34432_36832 = state_34423__$1;
(statearr_34432_36832[(1)] = (12));

} else {
var statearr_34433_36833 = state_34423__$1;
(statearr_34433_36833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (9))){
var state_34423__$1 = state_34423;
var statearr_34435_36834 = state_34423__$1;
(statearr_34435_36834[(2)] = null);

(statearr_34435_36834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (5))){
var state_34423__$1 = state_34423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34439_36836 = state_34423__$1;
(statearr_34439_36836[(1)] = (8));

} else {
var statearr_34440_36837 = state_34423__$1;
(statearr_34440_36837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (14))){
var inst_34417 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34441_36838 = state_34423__$1;
(statearr_34441_36838[(2)] = inst_34417);

(statearr_34441_36838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (10))){
var inst_34409 = (state_34423[(2)]);
var state_34423__$1 = state_34423;
var statearr_34442_36840 = state_34423__$1;
(statearr_34442_36840[(2)] = inst_34409);

(statearr_34442_36840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34424 === (8))){
var inst_34406 = cljs.core.async.close_BANG_(to);
var state_34423__$1 = state_34423;
var statearr_34443_36841 = state_34423__$1;
(statearr_34443_36841[(2)] = inst_34406);

(statearr_34443_36841[(1)] = (10));


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
var statearr_34447_36843 = state_34423;
(statearr_34447_36843[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34446;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36844 = state_34423;
state_34423 = G__36844;
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
(statearr_34448[(6)] = c__34274__auto___36822);

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
var c__34274__auto___36847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
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
var state_34460__$1 = (function (){var statearr_34462 = state_34460;
(statearr_34462[(7)] = inst_34457);

return statearr_34462;
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
var statearr_34465 = [null,null,null,null,null,null,null,null];
(statearr_34465[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34465[(1)] = (1));

return statearr_34465;
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
}catch (e34466){if((e34466 instanceof Object)){
var ex__34210__auto__ = e34466;
var statearr_34470_36850 = state_34460;
(statearr_34470_36850[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34466;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36851 = state_34460;
state_34460 = G__36851;
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
(statearr_34473[(6)] = c__34274__auto___36847);

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
var n__4666__auto___36854 = n;
var __36855 = (0);
while(true){
if((__36855 < n__4666__auto___36854)){
var G__34479_36856 = type;
var G__34479_36857__$1 = (((G__34479_36856 instanceof cljs.core.Keyword))?G__34479_36856.fqn:null);
switch (G__34479_36857__$1) {
case "compute":
var c__34274__auto___36859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36855,c__34274__auto___36859,G__34479_36856,G__34479_36857__$1,n__4666__auto___36854,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36855,c__34274__auto___36859,G__34479_36856,G__34479_36857__$1,n__4666__auto___36854,jobs,results,process,async){
return (function (state_34492){
var state_val_34493 = (state_34492[(1)]);
if((state_val_34493 === (1))){
var state_34492__$1 = state_34492;
var statearr_34494_36861 = state_34492__$1;
(statearr_34494_36861[(2)] = null);

(statearr_34494_36861[(1)] = (2));


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
var statearr_34499_36863 = state_34492__$1;
(statearr_34499_36863[(1)] = (5));

} else {
var statearr_34500_36864 = state_34492__$1;
(statearr_34500_36864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (5))){
var state_34492__$1 = state_34492;
var statearr_34501_36865 = state_34492__$1;
(statearr_34501_36865[(2)] = null);

(statearr_34501_36865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (6))){
var state_34492__$1 = state_34492;
var statearr_34505_36866 = state_34492__$1;
(statearr_34505_36866[(2)] = null);

(statearr_34505_36866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (7))){
var inst_34488 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
var statearr_34506_36867 = state_34492__$1;
(statearr_34506_36867[(2)] = inst_34488);

(statearr_34506_36867[(1)] = (3));


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
});})(__36855,c__34274__auto___36859,G__34479_36856,G__34479_36857__$1,n__4666__auto___36854,jobs,results,process,async))
;
return ((function (__36855,switch__34206__auto__,c__34274__auto___36859,G__34479_36856,G__34479_36857__$1,n__4666__auto___36854,jobs,results,process,async){
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
var statearr_34509_36870 = state_34492;
(statearr_34509_36870[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36871 = state_34492;
state_34492 = G__36871;
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
;})(__36855,switch__34206__auto__,c__34274__auto___36859,G__34479_36856,G__34479_36857__$1,n__4666__auto___36854,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34510 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34510[(6)] = c__34274__auto___36859);

return statearr_34510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36855,c__34274__auto___36859,G__34479_36856,G__34479_36857__$1,n__4666__auto___36854,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36855,c__34274__auto___36873,G__34479_36856,G__34479_36857__$1,n__4666__auto___36854,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36855,c__34274__auto___36873,G__34479_36856,G__34479_36857__$1,n__4666__auto___36854,jobs,results,process,async){
return (function (state_34523){
var state_val_34524 = (state_34523[(1)]);
if((state_val_34524 === (1))){
var state_34523__$1 = state_34523;
var statearr_34527_36874 = state_34523__$1;
(statearr_34527_36874[(2)] = null);

(statearr_34527_36874[(1)] = (2));


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
var statearr_34529_36876 = state_34523__$1;
(statearr_34529_36876[(1)] = (5));

} else {
var statearr_34530_36878 = state_34523__$1;
(statearr_34530_36878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (5))){
var state_34523__$1 = state_34523;
var statearr_34531_36879 = state_34523__$1;
(statearr_34531_36879[(2)] = null);

(statearr_34531_36879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (6))){
var state_34523__$1 = state_34523;
var statearr_34532_36880 = state_34523__$1;
(statearr_34532_36880[(2)] = null);

(statearr_34532_36880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34524 === (7))){
var inst_34519 = (state_34523[(2)]);
var state_34523__$1 = state_34523;
var statearr_34533_36881 = state_34523__$1;
(statearr_34533_36881[(2)] = inst_34519);

(statearr_34533_36881[(1)] = (3));


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
});})(__36855,c__34274__auto___36873,G__34479_36856,G__34479_36857__$1,n__4666__auto___36854,jobs,results,process,async))
;
return ((function (__36855,switch__34206__auto__,c__34274__auto___36873,G__34479_36856,G__34479_36857__$1,n__4666__auto___36854,jobs,results,process,async){
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
var statearr_34536_36884 = state_34523;
(statearr_34536_36884[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36885 = state_34523;
state_34523 = G__36885;
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
;})(__36855,switch__34206__auto__,c__34274__auto___36873,G__34479_36856,G__34479_36857__$1,n__4666__auto___36854,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34537 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34537[(6)] = c__34274__auto___36873);

return statearr_34537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36855,c__34274__auto___36873,G__34479_36856,G__34479_36857__$1,n__4666__auto___36854,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34479_36857__$1)].join('')));

}

var G__36887 = (__36855 + (1));
__36855 = G__36887;
continue;
} else {
}
break;
}

var c__34274__auto___36888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34555 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34561_36889 = state_34559__$1;
(statearr_34561_36889[(2)] = inst_34555);

(statearr_34561_36889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (1))){
var state_34559__$1 = state_34559;
var statearr_34562_36891 = state_34559__$1;
(statearr_34562_36891[(2)] = null);

(statearr_34562_36891[(1)] = (2));


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
var statearr_34564_36892 = state_34559__$1;
(statearr_34564_36892[(1)] = (5));

} else {
var statearr_34565_36894 = state_34559__$1;
(statearr_34565_36894[(1)] = (6));

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
var statearr_34568_36897 = state_34559__$1;
(statearr_34568_36897[(2)] = null);

(statearr_34568_36897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34543 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_36898 = state_34559__$1;
(statearr_34569_36898[(2)] = inst_34543);

(statearr_34569_36898[(1)] = (7));


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
var statearr_34573_36901 = state_34559;
(statearr_34573_36901[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36902 = state_34559;
state_34559 = G__36902;
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
(statearr_34574[(6)] = c__34274__auto___36888);

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
var statearr_34614_36904 = state_34612__$1;
(statearr_34614_36904[(2)] = inst_34608);

(statearr_34614_36904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36905 = state_34612__$1;
(statearr_34615_36905[(2)] = null);

(statearr_34615_36905[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36907 = state_34612__$1;
(statearr_34616_36907[(2)] = null);

(statearr_34616_36907[(1)] = (2));


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
var statearr_34618_36908 = state_34612__$1;
(statearr_34618_36908[(1)] = (5));

} else {
var statearr_34619_36910 = state_34612__$1;
(statearr_34619_36910[(1)] = (6));

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
var statearr_34620_36911 = state_34612__$1;
(statearr_34620_36911[(2)] = inst_34603);

(statearr_34620_36911[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36913 = state_34612__$1;
(statearr_34622_36913[(2)] = null);

(statearr_34622_36913[(1)] = (2));


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
var statearr_34623_36914 = state_34612__$1;
(statearr_34623_36914[(1)] = (19));

} else {
var statearr_34624_36915 = state_34612__$1;
(statearr_34624_36915[(1)] = (20));

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
var statearr_34625_36917 = state_34612__$1;
(statearr_34625_36917[(2)] = null);

(statearr_34625_36917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34587 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34587);

return statearr_34626;
})();
var statearr_34627_36919 = state_34612__$1;
(statearr_34627_36919[(2)] = null);

(statearr_34627_36919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36920 = state_34612__$1;
(statearr_34628_36920[(2)] = null);

(statearr_34628_36920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36922 = state_34612__$1;
(statearr_34629_36922[(1)] = (8));

} else {
var statearr_34630_36923 = state_34612__$1;
(statearr_34630_36923[(1)] = (9));

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
var statearr_34632_36924 = state_34612__$1;
(statearr_34632_36924[(1)] = (15));

} else {
var statearr_34633_36926 = state_34612__$1;
(statearr_34633_36926[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36927 = state_34612__$1;
(statearr_34634_36927[(2)] = false);

(statearr_34634_36927[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36928 = state_34612__$1;
(statearr_34635_36928[(2)] = inst_34584);

(statearr_34635_36928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36930 = state_34612__$1;
(statearr_34636_36930[(2)] = inst_34595);

(statearr_34636_36930[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36931 = state_34612__$1;
(statearr_34637_36931[(2)] = inst_34581);

(statearr_34637_36931[(1)] = (10));


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
var statearr_34640_36933 = state_34612;
(statearr_34640_36933[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36935 = state_34612;
state_34612 = G__36935;
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
var G__34646 = arguments.length;
switch (G__34646) {
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
var G__34653 = arguments.length;
switch (G__34653) {
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
var c__34274__auto___36944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34684){
var state_val_34685 = (state_34684[(1)]);
if((state_val_34685 === (7))){
var inst_34680 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34686_36946 = state_34684__$1;
(statearr_34686_36946[(2)] = inst_34680);

(statearr_34686_36946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (1))){
var state_34684__$1 = state_34684;
var statearr_34687_36947 = state_34684__$1;
(statearr_34687_36947[(2)] = null);

(statearr_34687_36947[(1)] = (2));


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
var statearr_34690_36949 = state_34684__$1;
(statearr_34690_36949[(1)] = (5));

} else {
var statearr_34691_36950 = state_34684__$1;
(statearr_34691_36950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (13))){
var state_34684__$1 = state_34684;
var statearr_34692_36951 = state_34684__$1;
(statearr_34692_36951[(2)] = null);

(statearr_34692_36951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (6))){
var inst_34661 = (state_34684[(7)]);
var inst_34667 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34661) : p.call(null,inst_34661));
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34667)){
var statearr_34694_36953 = state_34684__$1;
(statearr_34694_36953[(1)] = (9));

} else {
var statearr_34695_36954 = state_34684__$1;
(statearr_34695_36954[(1)] = (10));

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
var statearr_34696_36956 = state_34684__$1;
(statearr_34696_36956[(2)] = null);

(statearr_34696_36956[(1)] = (2));


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
var statearr_34699_36958 = state_34684__$1;
(statearr_34699_36958[(2)] = tc);

(statearr_34699_36958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (5))){
var inst_34664 = cljs.core.async.close_BANG_(tc);
var inst_34665 = cljs.core.async.close_BANG_(fc);
var state_34684__$1 = (function (){var statearr_34700 = state_34684;
(statearr_34700[(8)] = inst_34664);

return statearr_34700;
})();
var statearr_34701_36959 = state_34684__$1;
(statearr_34701_36959[(2)] = inst_34665);

(statearr_34701_36959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (14))){
var inst_34678 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
var statearr_34705_36961 = state_34684__$1;
(statearr_34705_36961[(2)] = inst_34678);

(statearr_34705_36961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (10))){
var state_34684__$1 = state_34684;
var statearr_34706_36962 = state_34684__$1;
(statearr_34706_36962[(2)] = fc);

(statearr_34706_36962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34685 === (8))){
var inst_34673 = (state_34684[(2)]);
var state_34684__$1 = state_34684;
if(cljs.core.truth_(inst_34673)){
var statearr_34707_36963 = state_34684__$1;
(statearr_34707_36963[(1)] = (12));

} else {
var statearr_34708_36964 = state_34684__$1;
(statearr_34708_36964[(1)] = (13));

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
var statearr_34711_36966 = state_34684;
(statearr_34711_36966[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36968 = state_34684;
state_34684 = G__36968;
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
var state__34276__auto__ = (function (){var statearr_34712 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34712[(6)] = c__34274__auto___36944);

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
var statearr_34739_36970 = state_34734__$1;
(statearr_34739_36970[(2)] = inst_34730);

(statearr_34739_36970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (1))){
var inst_34714 = init;
var state_34734__$1 = (function (){var statearr_34740 = state_34734;
(statearr_34740[(7)] = inst_34714);

return statearr_34740;
})();
var statearr_34741_36972 = state_34734__$1;
(statearr_34741_36972[(2)] = null);

(statearr_34741_36972[(1)] = (2));


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
var statearr_34743_36973 = state_34734__$1;
(statearr_34743_36973[(1)] = (5));

} else {
var statearr_34744_36974 = state_34734__$1;
(statearr_34744_36974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (6))){
var inst_34721 = (state_34734[(9)]);
var inst_34717 = (state_34734[(8)]);
var inst_34714 = (state_34734[(7)]);
var inst_34721__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34714,inst_34717) : f.call(null,inst_34714,inst_34717));
var inst_34722 = cljs.core.reduced_QMARK_(inst_34721__$1);
var state_34734__$1 = (function (){var statearr_34745 = state_34734;
(statearr_34745[(9)] = inst_34721__$1);

return statearr_34745;
})();
if(inst_34722){
var statearr_34746_36976 = state_34734__$1;
(statearr_34746_36976[(1)] = (8));

} else {
var statearr_34747_36977 = state_34734__$1;
(statearr_34747_36977[(1)] = (9));

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
var statearr_34752_36979 = state_34734__$1;
(statearr_34752_36979[(2)] = null);

(statearr_34752_36979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (5))){
var inst_34714 = (state_34734[(7)]);
var state_34734__$1 = state_34734;
var statearr_34753_36980 = state_34734__$1;
(statearr_34753_36980[(2)] = inst_34714);

(statearr_34753_36980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (10))){
var inst_34728 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34754_36982 = state_34734__$1;
(statearr_34754_36982[(2)] = inst_34728);

(statearr_34754_36982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (8))){
var inst_34721 = (state_34734[(9)]);
var inst_34724 = cljs.core.deref(inst_34721);
var state_34734__$1 = state_34734;
var statearr_34755_36983 = state_34734__$1;
(statearr_34755_36983[(2)] = inst_34724);

(statearr_34755_36983[(1)] = (10));


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
var statearr_34756 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34756[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34756[(1)] = (1));

return statearr_34756;
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
}catch (e34757){if((e34757 instanceof Object)){
var ex__34210__auto__ = e34757;
var statearr_34758_36985 = state_34734;
(statearr_34758_36985[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36987 = state_34734;
state_34734 = G__36987;
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
var statearr_34772_36991 = state_34768;
(statearr_34772_36991[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36992 = state_34768;
state_34768 = G__36992;
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34800){
var state_val_34801 = (state_34800[(1)]);
if((state_val_34801 === (7))){
var inst_34782 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34802_36996 = state_34800__$1;
(statearr_34802_36996[(2)] = inst_34782);

(statearr_34802_36996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (1))){
var inst_34776 = cljs.core.seq(coll);
var inst_34777 = inst_34776;
var state_34800__$1 = (function (){var statearr_34803 = state_34800;
(statearr_34803[(7)] = inst_34777);

return statearr_34803;
})();
var statearr_34804_36998 = state_34800__$1;
(statearr_34804_36998[(2)] = null);

(statearr_34804_36998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (4))){
var inst_34777 = (state_34800[(7)]);
var inst_34780 = cljs.core.first(inst_34777);
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34800__$1,(7),ch,inst_34780);
} else {
if((state_val_34801 === (13))){
var inst_34794 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34805_36999 = state_34800__$1;
(statearr_34805_36999[(2)] = inst_34794);

(statearr_34805_36999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (6))){
var inst_34785 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34785)){
var statearr_34806_37001 = state_34800__$1;
(statearr_34806_37001[(1)] = (8));

} else {
var statearr_34807_37002 = state_34800__$1;
(statearr_34807_37002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (3))){
var inst_34798 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34800__$1,inst_34798);
} else {
if((state_val_34801 === (12))){
var state_34800__$1 = state_34800;
var statearr_34811_37003 = state_34800__$1;
(statearr_34811_37003[(2)] = null);

(statearr_34811_37003[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (2))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
if(cljs.core.truth_(inst_34777)){
var statearr_34815_37005 = state_34800__$1;
(statearr_34815_37005[(1)] = (4));

} else {
var statearr_34816_37006 = state_34800__$1;
(statearr_34816_37006[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (11))){
var inst_34791 = cljs.core.async.close_BANG_(ch);
var state_34800__$1 = state_34800;
var statearr_34818_37007 = state_34800__$1;
(statearr_34818_37007[(2)] = inst_34791);

(statearr_34818_37007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (9))){
var state_34800__$1 = state_34800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34819_37009 = state_34800__$1;
(statearr_34819_37009[(1)] = (11));

} else {
var statearr_34820_37010 = state_34800__$1;
(statearr_34820_37010[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (5))){
var inst_34777 = (state_34800[(7)]);
var state_34800__$1 = state_34800;
var statearr_34821_37011 = state_34800__$1;
(statearr_34821_37011[(2)] = inst_34777);

(statearr_34821_37011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (10))){
var inst_34796 = (state_34800[(2)]);
var state_34800__$1 = state_34800;
var statearr_34822_37013 = state_34800__$1;
(statearr_34822_37013[(2)] = inst_34796);

(statearr_34822_37013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34801 === (8))){
var inst_34777 = (state_34800[(7)]);
var inst_34787 = cljs.core.next(inst_34777);
var inst_34777__$1 = inst_34787;
var state_34800__$1 = (function (){var statearr_34823 = state_34800;
(statearr_34823[(7)] = inst_34777__$1);

return statearr_34823;
})();
var statearr_34824_37014 = state_34800__$1;
(statearr_34824_37014[(2)] = null);

(statearr_34824_37014[(1)] = (2));


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
var statearr_34826 = [null,null,null,null,null,null,null,null];
(statearr_34826[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34826[(1)] = (1));

return statearr_34826;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34800){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34800);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34827){if((e34827 instanceof Object)){
var ex__34210__auto__ = e34827;
var statearr_34829_37016 = state_34800;
(statearr_34829_37016[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37018 = state_34800;
state_34800 = G__37018;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34833 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34833[(6)] = c__34274__auto__);

return statearr_34833;
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
var c__34274__auto___37028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34978){
var state_val_34979 = (state_34978[(1)]);
if((state_val_34979 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34980_37029 = state_34978__$1;
(statearr_34980_37029[(2)] = inst_34974);

(statearr_34980_37029[(1)] = (3));


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
var statearr_34982_37031 = state_34978__$1;
(statearr_34982_37031[(1)] = (22));

} else {
var statearr_34983_37034 = state_34978__$1;
(statearr_34983_37034[(1)] = (23));

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
var state_34978__$1 = (function (){var statearr_34984 = state_34978;
(statearr_34984[(10)] = inst_34926__$1);

return statearr_34984;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34985_37036 = state_34978__$1;
(statearr_34985_37036[(1)] = (30));

} else {
var statearr_34986_37037 = state_34978__$1;
(statearr_34986_37037[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (1))){
var state_34978__$1 = state_34978;
var statearr_34987_37039 = state_34978__$1;
(statearr_34987_37039[(2)] = null);

(statearr_34987_37039[(1)] = (2));


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
var state_34978__$1 = (function (){var statearr_34988 = state_34978;
(statearr_34988[(13)] = inst_34857);

(statearr_34988[(14)] = inst_34856);

(statearr_34988[(15)] = inst_34858);

(statearr_34988[(16)] = inst_34896);

(statearr_34988[(17)] = inst_34855);

return statearr_34988;
})();
var statearr_34989_37041 = state_34978__$1;
(statearr_34989_37041[(2)] = null);

(statearr_34989_37041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (39))){
var state_34978__$1 = state_34978;
var statearr_34993_37042 = state_34978__$1;
(statearr_34993_37042[(2)] = null);

(statearr_34993_37042[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (4))){
var inst_34846 = (state_34978[(9)]);
var inst_34846__$1 = (state_34978[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34978__$1 = (function (){var statearr_34994 = state_34978;
(statearr_34994[(9)] = inst_34846__$1);

return statearr_34994;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_34995_37043 = state_34978__$1;
(statearr_34995_37043[(1)] = (5));

} else {
var statearr_34996_37044 = state_34978__$1;
(statearr_34996_37044[(1)] = (6));

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
var tmp34990 = inst_34857;
var tmp34991 = inst_34856;
var tmp34992 = inst_34855;
var inst_34855__$1 = tmp34992;
var inst_34856__$1 = tmp34991;
var inst_34857__$1 = tmp34990;
var inst_34858__$1 = inst_34874;
var state_34978__$1 = (function (){var statearr_34997 = state_34978;
(statearr_34997[(18)] = inst_34873);

(statearr_34997[(13)] = inst_34857__$1);

(statearr_34997[(14)] = inst_34856__$1);

(statearr_34997[(15)] = inst_34858__$1);

(statearr_34997[(17)] = inst_34855__$1);

return statearr_34997;
})();
var statearr_34998_37052 = state_34978__$1;
(statearr_34998_37052[(2)] = null);

(statearr_34998_37052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (21))){
var inst_34900 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35002_37053 = state_34978__$1;
(statearr_35002_37053[(2)] = inst_34900);

(statearr_35002_37053[(1)] = (18));


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
var statearr_35004_37054 = state_34978__$1;
(statearr_35004_37054[(2)] = inst_34931);

(statearr_35004_37054[(1)] = (32));


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
var statearr_35006_37057 = state_34978__$1;
(statearr_35006_37057[(2)] = null);

(statearr_35006_37057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (40))){
var inst_34946 = (state_34978[(23)]);
var inst_34950 = done(null);
var inst_34951 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34946);
var state_34978__$1 = (function (){var statearr_35007 = state_34978;
(statearr_35007[(24)] = inst_34950);

return statearr_35007;
})();
var statearr_35010_37061 = state_34978__$1;
(statearr_35010_37061[(2)] = inst_34951);

(statearr_35010_37061[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (33))){
var inst_34937 = (state_34978[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34978__$1 = state_34978;
if(inst_34939){
var statearr_35012_37062 = state_34978__$1;
(statearr_35012_37062[(1)] = (36));

} else {
var statearr_35014_37063 = state_34978__$1;
(statearr_35014_37063[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (13))){
var inst_34867 = (state_34978[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34978__$1 = state_34978;
var statearr_35017_37064 = state_34978__$1;
(statearr_35017_37064[(2)] = inst_34870);

(statearr_35017_37064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (22))){
var inst_34890 = (state_34978[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34978__$1 = state_34978;
var statearr_35018_37066 = state_34978__$1;
(statearr_35018_37066[(2)] = inst_34893);

(statearr_35018_37066[(1)] = (24));


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
var statearr_35020_37067 = state_34978__$1;
(statearr_35020_37067[(2)] = null);

(statearr_35020_37067[(1)] = (25));


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
var statearr_35022_37068 = state_34978__$1;
(statearr_35022_37068[(2)] = null);

(statearr_35022_37068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (43))){
var state_34978__$1 = state_34978;
var statearr_35023_37069 = state_34978__$1;
(statearr_35023_37069[(2)] = null);

(statearr_35023_37069[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (29))){
var inst_34962 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35026_37070 = state_34978__$1;
(statearr_35026_37070[(2)] = inst_34962);

(statearr_35026_37070[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (44))){
var inst_34971 = (state_34978[(2)]);
var state_34978__$1 = (function (){var statearr_35028 = state_34978;
(statearr_35028[(28)] = inst_34971);

return statearr_35028;
})();
var statearr_35030_37071 = state_34978__$1;
(statearr_35030_37071[(2)] = null);

(statearr_35030_37071[(1)] = (2));


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
var statearr_35034_37072 = state_34978__$1;
(statearr_35034_37072[(2)] = null);

(statearr_35034_37072[(1)] = (25));


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
var statearr_35036_37073 = state_34978__$1;
(statearr_35036_37073[(1)] = (33));

} else {
var statearr_35037_37076 = state_34978__$1;
(statearr_35037_37076[(1)] = (34));

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
var statearr_35038_37078 = state_34978__$1;
(statearr_35038_37078[(1)] = (27));

} else {
var statearr_35039_37080 = state_34978__$1;
(statearr_35039_37080[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (34))){
var state_34978__$1 = state_34978;
var statearr_35040_37082 = state_34978__$1;
(statearr_35040_37082[(2)] = null);

(statearr_35040_37082[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (17))){
var state_34978__$1 = state_34978;
var statearr_35041_37084 = state_34978__$1;
(statearr_35041_37084[(2)] = null);

(statearr_35041_37084[(1)] = (18));


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
var statearr_35042_37085 = state_34978__$1;
(statearr_35042_37085[(2)] = inst_34905);

(statearr_35042_37085[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(4),ch);
} else {
if((state_val_34979 === (23))){
var state_34978__$1 = state_34978;
var statearr_35046_37086 = state_34978__$1;
(statearr_35046_37086[(2)] = null);

(statearr_35046_37086[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (35))){
var inst_34960 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35049_37087 = state_34978__$1;
(statearr_35049_37087[(2)] = inst_34960);

(statearr_35049_37087[(1)] = (29));


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
var state_34978__$1 = (function (){var statearr_35051 = state_34978;
(statearr_35051[(13)] = inst_34857);

(statearr_35051[(14)] = inst_34856);

(statearr_35051[(15)] = inst_34858);

(statearr_35051[(17)] = inst_34855);

return statearr_35051;
})();
var statearr_35052_37089 = state_34978__$1;
(statearr_35052_37089[(2)] = null);

(statearr_35052_37089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (11))){
var inst_34855 = (state_34978[(17)]);
var inst_34877 = (state_34978[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34978__$1 = (function (){var statearr_35053 = state_34978;
(statearr_35053[(7)] = inst_34877__$1);

return statearr_35053;
})();
if(inst_34877__$1){
var statearr_35054_37093 = state_34978__$1;
(statearr_35054_37093[(1)] = (16));

} else {
var statearr_35055_37095 = state_34978__$1;
(statearr_35055_37095[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (9))){
var inst_34907 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35056_37097 = state_34978__$1;
(statearr_35056_37097[(2)] = inst_34907);

(statearr_35056_37097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35059 = state_34978;
(statearr_35059[(13)] = inst_34857);

(statearr_35059[(14)] = inst_34856);

(statearr_35059[(15)] = inst_34858);

(statearr_35059[(17)] = inst_34855);

return statearr_35059;
})();
var statearr_35061_37098 = state_34978__$1;
(statearr_35061_37098[(2)] = null);

(statearr_35061_37098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (14))){
var state_34978__$1 = state_34978;
var statearr_35064_37099 = state_34978__$1;
(statearr_35064_37099[(2)] = null);

(statearr_35064_37099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (45))){
var inst_34968 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35066_37101 = state_34978__$1;
(statearr_35066_37101[(2)] = inst_34968);

(statearr_35066_37101[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (26))){
var inst_34910 = (state_34978[(29)]);
var inst_34964 = (state_34978[(2)]);
var inst_34965 = cljs.core.seq(inst_34910);
var state_34978__$1 = (function (){var statearr_35067 = state_34978;
(statearr_35067[(31)] = inst_34964);

return statearr_35067;
})();
if(inst_34965){
var statearr_35068_37105 = state_34978__$1;
(statearr_35068_37105[(1)] = (42));

} else {
var statearr_35069_37106 = state_34978__$1;
(statearr_35069_37106[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (16))){
var inst_34877 = (state_34978[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34978__$1 = state_34978;
if(inst_34879){
var statearr_35072_37110 = state_34978__$1;
(statearr_35072_37110[(1)] = (19));

} else {
var statearr_35074_37113 = state_34978__$1;
(statearr_35074_37113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (38))){
var inst_34957 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35076_37114 = state_34978__$1;
(statearr_35076_37114[(2)] = inst_34957);

(statearr_35076_37114[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (30))){
var state_34978__$1 = state_34978;
var statearr_35085_37117 = state_34978__$1;
(statearr_35085_37117[(2)] = null);

(statearr_35085_37117[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (10))){
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34978__$1 = (function (){var statearr_35093 = state_34978;
(statearr_35093[(26)] = inst_34867);

return statearr_35093;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35094_37120 = state_34978__$1;
(statearr_35094_37120[(1)] = (13));

} else {
var statearr_35095_37122 = state_34978__$1;
(statearr_35095_37122[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (18))){
var inst_34903 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35098_37125 = state_34978__$1;
(statearr_35098_37125[(2)] = inst_34903);

(statearr_35098_37125[(1)] = (12));


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
var state_34978__$1 = (function (){var statearr_35101 = state_34978;
(statearr_35101[(23)] = inst_34946__$1);

return statearr_35101;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35103_37136 = state_34978__$1;
(statearr_35103_37136[(1)] = (39));

} else {
var statearr_35104_37137 = state_34978__$1;
(statearr_35104_37137[(1)] = (40));

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
var statearr_35110_37138 = state_34978__$1;
(statearr_35110_37138[(1)] = (10));

} else {
var statearr_35113_37139 = state_34978__$1;
(statearr_35113_37139[(1)] = (11));

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
var statearr_35123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35123[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35123[(1)] = (1));

return statearr_35123;
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
}catch (e35128){if((e35128 instanceof Object)){
var ex__34210__auto__ = e35128;
var statearr_35130_37149 = state_34978;
(statearr_35130_37149[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35128;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37151 = state_34978;
state_34978 = G__37151;
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
var state__34276__auto__ = (function (){var statearr_35137 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35137[(6)] = c__34274__auto___37028);

return statearr_35137;
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
var G__35150 = arguments.length;
switch (G__35150) {
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
var len__4789__auto___37189 = arguments.length;
var i__4790__auto___37191 = (0);
while(true){
if((i__4790__auto___37191 < len__4789__auto___37189)){
args__4795__auto__.push((arguments[i__4790__auto___37191]));

var G__37192 = (i__4790__auto___37191 + (1));
i__4790__auto___37191 = G__37192;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35263){
var map__35266 = p__35263;
var map__35266__$1 = (((((!((map__35266 == null))))?(((((map__35266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35266):map__35266);
var opts = map__35266__$1;
var statearr_35273_37195 = state;
(statearr_35273_37195[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35279_37196 = state;
(statearr_35279_37196[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35283_37198 = state;
(statearr_35283_37198[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35234){
var G__35236 = cljs.core.first(seq35234);
var seq35234__$1 = cljs.core.next(seq35234);
var G__35237 = cljs.core.first(seq35234__$1);
var seq35234__$2 = cljs.core.next(seq35234__$1);
var G__35238 = cljs.core.first(seq35234__$2);
var seq35234__$3 = cljs.core.next(seq35234__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35236,G__35237,G__35238,seq35234__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35330 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35331){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35331 = meta35331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35332,meta35331__$1){
var self__ = this;
var _35332__$1 = this;
return (new cljs.core.async.t_cljs$core$async35330(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35331__$1));
}));

(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35332){
var self__ = this;
var _35332__$1 = this;
return self__.meta35331;
}));

(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35330.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35331","meta35331",-790184703,null)], null);
}));

(cljs.core.async.t_cljs$core$async35330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35330");

(cljs.core.async.t_cljs$core$async35330.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35330.
 */
cljs.core.async.__GT_t_cljs$core$async35330 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35330(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35331){
return (new cljs.core.async.t_cljs$core$async35330(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35331));
});

}

return (new cljs.core.async.t_cljs$core$async35330(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35486){
var state_val_35487 = (state_35486[(1)]);
if((state_val_35487 === (7))){
var inst_35390 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35489_37229 = state_35486__$1;
(statearr_35489_37229[(2)] = inst_35390);

(statearr_35489_37229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (20))){
var inst_35402 = (state_35486[(7)]);
var state_35486__$1 = state_35486;
var statearr_35491_37231 = state_35486__$1;
(statearr_35491_37231[(2)] = inst_35402);

(statearr_35491_37231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (27))){
var state_35486__$1 = state_35486;
var statearr_35500_37234 = state_35486__$1;
(statearr_35500_37234[(2)] = null);

(statearr_35500_37234[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (1))){
var inst_35377 = (state_35486[(8)]);
var inst_35377__$1 = calc_state();
var inst_35379 = (inst_35377__$1 == null);
var inst_35380 = cljs.core.not(inst_35379);
var state_35486__$1 = (function (){var statearr_35505 = state_35486;
(statearr_35505[(8)] = inst_35377__$1);

return statearr_35505;
})();
if(inst_35380){
var statearr_35509_37242 = state_35486__$1;
(statearr_35509_37242[(1)] = (2));

} else {
var statearr_35510_37244 = state_35486__$1;
(statearr_35510_37244[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (24))){
var inst_35428 = (state_35486[(9)]);
var inst_35456 = (state_35486[(10)]);
var inst_35442 = (state_35486[(11)]);
var inst_35456__$1 = (inst_35428.cljs$core$IFn$_invoke$arity$1 ? inst_35428.cljs$core$IFn$_invoke$arity$1(inst_35442) : inst_35428.call(null,inst_35442));
var state_35486__$1 = (function (){var statearr_35511 = state_35486;
(statearr_35511[(10)] = inst_35456__$1);

return statearr_35511;
})();
if(cljs.core.truth_(inst_35456__$1)){
var statearr_35512_37245 = state_35486__$1;
(statearr_35512_37245[(1)] = (29));

} else {
var statearr_35513_37246 = state_35486__$1;
(statearr_35513_37246[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (4))){
var inst_35393 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35393)){
var statearr_35516_37247 = state_35486__$1;
(statearr_35516_37247[(1)] = (8));

} else {
var statearr_35517_37248 = state_35486__$1;
(statearr_35517_37248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (15))){
var inst_35422 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35422)){
var statearr_35518_37249 = state_35486__$1;
(statearr_35518_37249[(1)] = (19));

} else {
var statearr_35521_37252 = state_35486__$1;
(statearr_35521_37252[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (21))){
var inst_35427 = (state_35486[(12)]);
var inst_35427__$1 = (state_35486[(2)]);
var inst_35428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35427__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35427__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35427__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35486__$1 = (function (){var statearr_35525 = state_35486;
(statearr_35525[(9)] = inst_35428);

(statearr_35525[(12)] = inst_35427__$1);

(statearr_35525[(13)] = inst_35429);

return statearr_35525;
})();
return cljs.core.async.ioc_alts_BANG_(state_35486__$1,(22),inst_35430);
} else {
if((state_val_35487 === (31))){
var inst_35466 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35466)){
var statearr_35528_37261 = state_35486__$1;
(statearr_35528_37261[(1)] = (32));

} else {
var statearr_35529_37262 = state_35486__$1;
(statearr_35529_37262[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (32))){
var inst_35441 = (state_35486[(14)]);
var state_35486__$1 = state_35486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35486__$1,(35),out,inst_35441);
} else {
if((state_val_35487 === (33))){
var inst_35427 = (state_35486[(12)]);
var inst_35402 = inst_35427;
var state_35486__$1 = (function (){var statearr_35534 = state_35486;
(statearr_35534[(7)] = inst_35402);

return statearr_35534;
})();
var statearr_35535_37264 = state_35486__$1;
(statearr_35535_37264[(2)] = null);

(statearr_35535_37264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (13))){
var inst_35402 = (state_35486[(7)]);
var inst_35411 = inst_35402.cljs$lang$protocol_mask$partition0$;
var inst_35412 = (inst_35411 & (64));
var inst_35413 = inst_35402.cljs$core$ISeq$;
var inst_35414 = (cljs.core.PROTOCOL_SENTINEL === inst_35413);
var inst_35415 = ((inst_35412) || (inst_35414));
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35415)){
var statearr_35539_37271 = state_35486__$1;
(statearr_35539_37271[(1)] = (16));

} else {
var statearr_35542_37275 = state_35486__$1;
(statearr_35542_37275[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (22))){
var inst_35442 = (state_35486[(11)]);
var inst_35441 = (state_35486[(14)]);
var inst_35439 = (state_35486[(2)]);
var inst_35441__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35439,(0),null);
var inst_35442__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35439,(1),null);
var inst_35443 = (inst_35441__$1 == null);
var inst_35444 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35442__$1,change);
var inst_35445 = ((inst_35443) || (inst_35444));
var state_35486__$1 = (function (){var statearr_35551 = state_35486;
(statearr_35551[(11)] = inst_35442__$1);

(statearr_35551[(14)] = inst_35441__$1);

return statearr_35551;
})();
if(cljs.core.truth_(inst_35445)){
var statearr_35552_37280 = state_35486__$1;
(statearr_35552_37280[(1)] = (23));

} else {
var statearr_35553_37281 = state_35486__$1;
(statearr_35553_37281[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (36))){
var inst_35427 = (state_35486[(12)]);
var inst_35402 = inst_35427;
var state_35486__$1 = (function (){var statearr_35554 = state_35486;
(statearr_35554[(7)] = inst_35402);

return statearr_35554;
})();
var statearr_35555_37287 = state_35486__$1;
(statearr_35555_37287[(2)] = null);

(statearr_35555_37287[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (29))){
var inst_35456 = (state_35486[(10)]);
var state_35486__$1 = state_35486;
var statearr_35558_37290 = state_35486__$1;
(statearr_35558_37290[(2)] = inst_35456);

(statearr_35558_37290[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (6))){
var state_35486__$1 = state_35486;
var statearr_35561_37293 = state_35486__$1;
(statearr_35561_37293[(2)] = false);

(statearr_35561_37293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (28))){
var inst_35452 = (state_35486[(2)]);
var inst_35453 = calc_state();
var inst_35402 = inst_35453;
var state_35486__$1 = (function (){var statearr_35581 = state_35486;
(statearr_35581[(15)] = inst_35452);

(statearr_35581[(7)] = inst_35402);

return statearr_35581;
})();
var statearr_35584_37295 = state_35486__$1;
(statearr_35584_37295[(2)] = null);

(statearr_35584_37295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (25))){
var inst_35482 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35585_37300 = state_35486__$1;
(statearr_35585_37300[(2)] = inst_35482);

(statearr_35585_37300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (34))){
var inst_35480 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35586_37304 = state_35486__$1;
(statearr_35586_37304[(2)] = inst_35480);

(statearr_35586_37304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (17))){
var state_35486__$1 = state_35486;
var statearr_35587_37310 = state_35486__$1;
(statearr_35587_37310[(2)] = false);

(statearr_35587_37310[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (3))){
var state_35486__$1 = state_35486;
var statearr_35590_37311 = state_35486__$1;
(statearr_35590_37311[(2)] = false);

(statearr_35590_37311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (12))){
var inst_35484 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35486__$1,inst_35484);
} else {
if((state_val_35487 === (2))){
var inst_35377 = (state_35486[(8)]);
var inst_35382 = inst_35377.cljs$lang$protocol_mask$partition0$;
var inst_35383 = (inst_35382 & (64));
var inst_35384 = inst_35377.cljs$core$ISeq$;
var inst_35385 = (cljs.core.PROTOCOL_SENTINEL === inst_35384);
var inst_35386 = ((inst_35383) || (inst_35385));
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35386)){
var statearr_35593_37314 = state_35486__$1;
(statearr_35593_37314[(1)] = (5));

} else {
var statearr_35595_37317 = state_35486__$1;
(statearr_35595_37317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (23))){
var inst_35441 = (state_35486[(14)]);
var inst_35447 = (inst_35441 == null);
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35447)){
var statearr_35598_37318 = state_35486__$1;
(statearr_35598_37318[(1)] = (26));

} else {
var statearr_35601_37319 = state_35486__$1;
(statearr_35601_37319[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (35))){
var inst_35469 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
if(cljs.core.truth_(inst_35469)){
var statearr_35604_37320 = state_35486__$1;
(statearr_35604_37320[(1)] = (36));

} else {
var statearr_35608_37321 = state_35486__$1;
(statearr_35608_37321[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (19))){
var inst_35402 = (state_35486[(7)]);
var inst_35424 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35402);
var state_35486__$1 = state_35486;
var statearr_35615_37323 = state_35486__$1;
(statearr_35615_37323[(2)] = inst_35424);

(statearr_35615_37323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (11))){
var inst_35402 = (state_35486[(7)]);
var inst_35406 = (inst_35402 == null);
var inst_35407 = cljs.core.not(inst_35406);
var state_35486__$1 = state_35486;
if(inst_35407){
var statearr_35622_37324 = state_35486__$1;
(statearr_35622_37324[(1)] = (13));

} else {
var statearr_35624_37326 = state_35486__$1;
(statearr_35624_37326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (9))){
var inst_35377 = (state_35486[(8)]);
var state_35486__$1 = state_35486;
var statearr_35629_37328 = state_35486__$1;
(statearr_35629_37328[(2)] = inst_35377);

(statearr_35629_37328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (5))){
var state_35486__$1 = state_35486;
var statearr_35635_37329 = state_35486__$1;
(statearr_35635_37329[(2)] = true);

(statearr_35635_37329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (14))){
var state_35486__$1 = state_35486;
var statearr_35640_37333 = state_35486__$1;
(statearr_35640_37333[(2)] = false);

(statearr_35640_37333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (26))){
var inst_35442 = (state_35486[(11)]);
var inst_35449 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35442);
var state_35486__$1 = state_35486;
var statearr_35647_37335 = state_35486__$1;
(statearr_35647_37335[(2)] = inst_35449);

(statearr_35647_37335[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (16))){
var state_35486__$1 = state_35486;
var statearr_35650_37336 = state_35486__$1;
(statearr_35650_37336[(2)] = true);

(statearr_35650_37336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (38))){
var inst_35476 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35654_37338 = state_35486__$1;
(statearr_35654_37338[(2)] = inst_35476);

(statearr_35654_37338[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (30))){
var inst_35428 = (state_35486[(9)]);
var inst_35442 = (state_35486[(11)]);
var inst_35429 = (state_35486[(13)]);
var inst_35461 = cljs.core.empty_QMARK_(inst_35428);
var inst_35462 = (inst_35429.cljs$core$IFn$_invoke$arity$1 ? inst_35429.cljs$core$IFn$_invoke$arity$1(inst_35442) : inst_35429.call(null,inst_35442));
var inst_35463 = cljs.core.not(inst_35462);
var inst_35464 = ((inst_35461) && (inst_35463));
var state_35486__$1 = state_35486;
var statearr_35661_37343 = state_35486__$1;
(statearr_35661_37343[(2)] = inst_35464);

(statearr_35661_37343[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (10))){
var inst_35377 = (state_35486[(8)]);
var inst_35398 = (state_35486[(2)]);
var inst_35399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35398,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35398,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35398,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35402 = inst_35377;
var state_35486__$1 = (function (){var statearr_35668 = state_35486;
(statearr_35668[(16)] = inst_35401);

(statearr_35668[(17)] = inst_35399);

(statearr_35668[(7)] = inst_35402);

(statearr_35668[(18)] = inst_35400);

return statearr_35668;
})();
var statearr_35672_37345 = state_35486__$1;
(statearr_35672_37345[(2)] = null);

(statearr_35672_37345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (18))){
var inst_35419 = (state_35486[(2)]);
var state_35486__$1 = state_35486;
var statearr_35676_37349 = state_35486__$1;
(statearr_35676_37349[(2)] = inst_35419);

(statearr_35676_37349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (37))){
var state_35486__$1 = state_35486;
var statearr_35681_37351 = state_35486__$1;
(statearr_35681_37351[(2)] = null);

(statearr_35681_37351[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35487 === (8))){
var inst_35377 = (state_35486[(8)]);
var inst_35395 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35377);
var state_35486__$1 = state_35486;
var statearr_35686_37355 = state_35486__$1;
(statearr_35686_37355[(2)] = inst_35395);

(statearr_35686_37355[(1)] = (10));


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
var statearr_35689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35689[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35689[(1)] = (1));

return statearr_35689;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35486){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35486);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35695){if((e35695 instanceof Object)){
var ex__34210__auto__ = e35695;
var statearr_35698_37361 = state_35486;
(statearr_35698_37361[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35695;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37366 = state_35486;
state_35486 = G__37366;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35486){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35705 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35705[(6)] = c__34274__auto___37228);

return statearr_35705;
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
var G__35740 = arguments.length;
switch (G__35740) {
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
var G__35753 = arguments.length;
switch (G__35753) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35747_SHARP_){
if(cljs.core.truth_((p1__35747_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35747_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35747_SHARP_.call(null,topic)))){
return p1__35747_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35747_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35760 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35760 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35761){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35761 = meta35761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35762,meta35761__$1){
var self__ = this;
var _35762__$1 = this;
return (new cljs.core.async.t_cljs$core$async35760(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35761__$1));
}));

(cljs.core.async.t_cljs$core$async35760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35762){
var self__ = this;
var _35762__$1 = this;
return self__.meta35761;
}));

(cljs.core.async.t_cljs$core$async35760.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35760.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35760.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35760.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35760.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35760.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35760.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35761","meta35761",85603841,null)], null);
}));

(cljs.core.async.t_cljs$core$async35760.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35760");

(cljs.core.async.t_cljs$core$async35760.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35760");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35760.
 */
cljs.core.async.__GT_t_cljs$core$async35760 = (function cljs$core$async$__GT_t_cljs$core$async35760(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35761){
return (new cljs.core.async.t_cljs$core$async35760(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35761));
});

}

return (new cljs.core.async.t_cljs$core$async35760(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35848){
var state_val_35849 = (state_35848[(1)]);
if((state_val_35849 === (7))){
var inst_35844 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35851_37416 = state_35848__$1;
(statearr_35851_37416[(2)] = inst_35844);

(statearr_35851_37416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (20))){
var state_35848__$1 = state_35848;
var statearr_35859_37420 = state_35848__$1;
(statearr_35859_37420[(2)] = null);

(statearr_35859_37420[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (1))){
var state_35848__$1 = state_35848;
var statearr_35865_37425 = state_35848__$1;
(statearr_35865_37425[(2)] = null);

(statearr_35865_37425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (24))){
var inst_35825 = (state_35848[(7)]);
var inst_35836 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35825);
var state_35848__$1 = state_35848;
var statearr_35867_37429 = state_35848__$1;
(statearr_35867_37429[(2)] = inst_35836);

(statearr_35867_37429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (4))){
var inst_35777 = (state_35848[(8)]);
var inst_35777__$1 = (state_35848[(2)]);
var inst_35778 = (inst_35777__$1 == null);
var state_35848__$1 = (function (){var statearr_35873 = state_35848;
(statearr_35873[(8)] = inst_35777__$1);

return statearr_35873;
})();
if(cljs.core.truth_(inst_35778)){
var statearr_35874_37432 = state_35848__$1;
(statearr_35874_37432[(1)] = (5));

} else {
var statearr_35875_37433 = state_35848__$1;
(statearr_35875_37433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (15))){
var inst_35819 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35876_37436 = state_35848__$1;
(statearr_35876_37436[(2)] = inst_35819);

(statearr_35876_37436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (21))){
var inst_35841 = (state_35848[(2)]);
var state_35848__$1 = (function (){var statearr_35877 = state_35848;
(statearr_35877[(9)] = inst_35841);

return statearr_35877;
})();
var statearr_35878_37442 = state_35848__$1;
(statearr_35878_37442[(2)] = null);

(statearr_35878_37442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (13))){
var inst_35801 = (state_35848[(10)]);
var inst_35803 = cljs.core.chunked_seq_QMARK_(inst_35801);
var state_35848__$1 = state_35848;
if(inst_35803){
var statearr_35881_37443 = state_35848__$1;
(statearr_35881_37443[(1)] = (16));

} else {
var statearr_35882_37446 = state_35848__$1;
(statearr_35882_37446[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (22))){
var inst_35833 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
if(cljs.core.truth_(inst_35833)){
var statearr_35885_37449 = state_35848__$1;
(statearr_35885_37449[(1)] = (23));

} else {
var statearr_35886_37450 = state_35848__$1;
(statearr_35886_37450[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (6))){
var inst_35777 = (state_35848[(8)]);
var inst_35828 = (state_35848[(11)]);
var inst_35825 = (state_35848[(7)]);
var inst_35825__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35777) : topic_fn.call(null,inst_35777));
var inst_35827 = cljs.core.deref(mults);
var inst_35828__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35827,inst_35825__$1);
var state_35848__$1 = (function (){var statearr_35887 = state_35848;
(statearr_35887[(11)] = inst_35828__$1);

(statearr_35887[(7)] = inst_35825__$1);

return statearr_35887;
})();
if(cljs.core.truth_(inst_35828__$1)){
var statearr_35888_37456 = state_35848__$1;
(statearr_35888_37456[(1)] = (19));

} else {
var statearr_35890_37458 = state_35848__$1;
(statearr_35890_37458[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (25))){
var inst_35838 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35891_37463 = state_35848__$1;
(statearr_35891_37463[(2)] = inst_35838);

(statearr_35891_37463[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (17))){
var inst_35801 = (state_35848[(10)]);
var inst_35810 = cljs.core.first(inst_35801);
var inst_35811 = cljs.core.async.muxch_STAR_(inst_35810);
var inst_35812 = cljs.core.async.close_BANG_(inst_35811);
var inst_35813 = cljs.core.next(inst_35801);
var inst_35787 = inst_35813;
var inst_35788 = null;
var inst_35789 = (0);
var inst_35790 = (0);
var state_35848__$1 = (function (){var statearr_35893 = state_35848;
(statearr_35893[(12)] = inst_35790);

(statearr_35893[(13)] = inst_35787);

(statearr_35893[(14)] = inst_35788);

(statearr_35893[(15)] = inst_35812);

(statearr_35893[(16)] = inst_35789);

return statearr_35893;
})();
var statearr_35896_37469 = state_35848__$1;
(statearr_35896_37469[(2)] = null);

(statearr_35896_37469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (3))){
var inst_35846 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35848__$1,inst_35846);
} else {
if((state_val_35849 === (12))){
var inst_35821 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35897_37472 = state_35848__$1;
(statearr_35897_37472[(2)] = inst_35821);

(statearr_35897_37472[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (2))){
var state_35848__$1 = state_35848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35848__$1,(4),ch);
} else {
if((state_val_35849 === (23))){
var state_35848__$1 = state_35848;
var statearr_35900_37474 = state_35848__$1;
(statearr_35900_37474[(2)] = null);

(statearr_35900_37474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (19))){
var inst_35777 = (state_35848[(8)]);
var inst_35828 = (state_35848[(11)]);
var inst_35831 = cljs.core.async.muxch_STAR_(inst_35828);
var state_35848__$1 = state_35848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35848__$1,(22),inst_35831,inst_35777);
} else {
if((state_val_35849 === (11))){
var inst_35801 = (state_35848[(10)]);
var inst_35787 = (state_35848[(13)]);
var inst_35801__$1 = cljs.core.seq(inst_35787);
var state_35848__$1 = (function (){var statearr_35903 = state_35848;
(statearr_35903[(10)] = inst_35801__$1);

return statearr_35903;
})();
if(inst_35801__$1){
var statearr_35904_37481 = state_35848__$1;
(statearr_35904_37481[(1)] = (13));

} else {
var statearr_35905_37482 = state_35848__$1;
(statearr_35905_37482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (9))){
var inst_35823 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35907_37484 = state_35848__$1;
(statearr_35907_37484[(2)] = inst_35823);

(statearr_35907_37484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (5))){
var inst_35784 = cljs.core.deref(mults);
var inst_35785 = cljs.core.vals(inst_35784);
var inst_35786 = cljs.core.seq(inst_35785);
var inst_35787 = inst_35786;
var inst_35788 = null;
var inst_35789 = (0);
var inst_35790 = (0);
var state_35848__$1 = (function (){var statearr_35908 = state_35848;
(statearr_35908[(12)] = inst_35790);

(statearr_35908[(13)] = inst_35787);

(statearr_35908[(14)] = inst_35788);

(statearr_35908[(16)] = inst_35789);

return statearr_35908;
})();
var statearr_35909_37487 = state_35848__$1;
(statearr_35909_37487[(2)] = null);

(statearr_35909_37487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (14))){
var state_35848__$1 = state_35848;
var statearr_35914_37493 = state_35848__$1;
(statearr_35914_37493[(2)] = null);

(statearr_35914_37493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (16))){
var inst_35801 = (state_35848[(10)]);
var inst_35805 = cljs.core.chunk_first(inst_35801);
var inst_35806 = cljs.core.chunk_rest(inst_35801);
var inst_35807 = cljs.core.count(inst_35805);
var inst_35787 = inst_35806;
var inst_35788 = inst_35805;
var inst_35789 = inst_35807;
var inst_35790 = (0);
var state_35848__$1 = (function (){var statearr_35920 = state_35848;
(statearr_35920[(12)] = inst_35790);

(statearr_35920[(13)] = inst_35787);

(statearr_35920[(14)] = inst_35788);

(statearr_35920[(16)] = inst_35789);

return statearr_35920;
})();
var statearr_35921_37496 = state_35848__$1;
(statearr_35921_37496[(2)] = null);

(statearr_35921_37496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (10))){
var inst_35790 = (state_35848[(12)]);
var inst_35787 = (state_35848[(13)]);
var inst_35788 = (state_35848[(14)]);
var inst_35789 = (state_35848[(16)]);
var inst_35795 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35788,inst_35790);
var inst_35796 = cljs.core.async.muxch_STAR_(inst_35795);
var inst_35797 = cljs.core.async.close_BANG_(inst_35796);
var inst_35798 = (inst_35790 + (1));
var tmp35911 = inst_35787;
var tmp35912 = inst_35788;
var tmp35913 = inst_35789;
var inst_35787__$1 = tmp35911;
var inst_35788__$1 = tmp35912;
var inst_35789__$1 = tmp35913;
var inst_35790__$1 = inst_35798;
var state_35848__$1 = (function (){var statearr_35925 = state_35848;
(statearr_35925[(17)] = inst_35797);

(statearr_35925[(12)] = inst_35790__$1);

(statearr_35925[(13)] = inst_35787__$1);

(statearr_35925[(14)] = inst_35788__$1);

(statearr_35925[(16)] = inst_35789__$1);

return statearr_35925;
})();
var statearr_35926_37503 = state_35848__$1;
(statearr_35926_37503[(2)] = null);

(statearr_35926_37503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (18))){
var inst_35816 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35927_37504 = state_35848__$1;
(statearr_35927_37504[(2)] = inst_35816);

(statearr_35927_37504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (8))){
var inst_35790 = (state_35848[(12)]);
var inst_35789 = (state_35848[(16)]);
var inst_35792 = (inst_35790 < inst_35789);
var inst_35793 = inst_35792;
var state_35848__$1 = state_35848;
if(cljs.core.truth_(inst_35793)){
var statearr_35933_37507 = state_35848__$1;
(statearr_35933_37507[(1)] = (10));

} else {
var statearr_35934_37511 = state_35848__$1;
(statearr_35934_37511[(1)] = (11));

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
var statearr_35939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35939[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35939[(1)] = (1));

return statearr_35939;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35848){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35848);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35940){if((e35940 instanceof Object)){
var ex__34210__auto__ = e35940;
var statearr_35941_37514 = state_35848;
(statearr_35941_37514[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35940;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37516 = state_35848;
state_35848 = G__37516;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35945 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35945[(6)] = c__34274__auto___37412);

return statearr_35945;
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
var G__35951 = arguments.length;
switch (G__35951) {
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
var G__35962 = arguments.length;
switch (G__35962) {
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
var G__35971 = arguments.length;
switch (G__35971) {
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
var c__34274__auto___37536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36022){
var state_val_36023 = (state_36022[(1)]);
if((state_val_36023 === (7))){
var state_36022__$1 = state_36022;
var statearr_36025_37537 = state_36022__$1;
(statearr_36025_37537[(2)] = null);

(statearr_36025_37537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (1))){
var state_36022__$1 = state_36022;
var statearr_36028_37538 = state_36022__$1;
(statearr_36028_37538[(2)] = null);

(statearr_36028_37538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (4))){
var inst_35981 = (state_36022[(7)]);
var inst_35983 = (inst_35981 < cnt);
var state_36022__$1 = state_36022;
if(cljs.core.truth_(inst_35983)){
var statearr_36031_37542 = state_36022__$1;
(statearr_36031_37542[(1)] = (6));

} else {
var statearr_36032_37543 = state_36022__$1;
(statearr_36032_37543[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (15))){
var inst_36016 = (state_36022[(2)]);
var state_36022__$1 = state_36022;
var statearr_36033_37547 = state_36022__$1;
(statearr_36033_37547[(2)] = inst_36016);

(statearr_36033_37547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (13))){
var inst_36009 = cljs.core.async.close_BANG_(out);
var state_36022__$1 = state_36022;
var statearr_36036_37548 = state_36022__$1;
(statearr_36036_37548[(2)] = inst_36009);

(statearr_36036_37548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (6))){
var state_36022__$1 = state_36022;
var statearr_36038_37550 = state_36022__$1;
(statearr_36038_37550[(2)] = null);

(statearr_36038_37550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (3))){
var inst_36018 = (state_36022[(2)]);
var state_36022__$1 = state_36022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36022__$1,inst_36018);
} else {
if((state_val_36023 === (12))){
var inst_36006 = (state_36022[(8)]);
var inst_36006__$1 = (state_36022[(2)]);
var inst_36007 = cljs.core.some(cljs.core.nil_QMARK_,inst_36006__$1);
var state_36022__$1 = (function (){var statearr_36046 = state_36022;
(statearr_36046[(8)] = inst_36006__$1);

return statearr_36046;
})();
if(cljs.core.truth_(inst_36007)){
var statearr_36047_37556 = state_36022__$1;
(statearr_36047_37556[(1)] = (13));

} else {
var statearr_36048_37559 = state_36022__$1;
(statearr_36048_37559[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (2))){
var inst_35979 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35981 = (0);
var state_36022__$1 = (function (){var statearr_36051 = state_36022;
(statearr_36051[(9)] = inst_35979);

(statearr_36051[(7)] = inst_35981);

return statearr_36051;
})();
var statearr_36054_37566 = state_36022__$1;
(statearr_36054_37566[(2)] = null);

(statearr_36054_37566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (11))){
var inst_35981 = (state_36022[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36022,(10),Object,null,(9));
var inst_35993 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35981) : chs__$1.call(null,inst_35981));
var inst_35994 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35981) : done.call(null,inst_35981));
var inst_35995 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35993,inst_35994);
var state_36022__$1 = state_36022;
var statearr_36056_37568 = state_36022__$1;
(statearr_36056_37568[(2)] = inst_35995);


cljs.core.async.impl.ioc_helpers.process_exception(state_36022__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (9))){
var inst_35981 = (state_36022[(7)]);
var inst_35997 = (state_36022[(2)]);
var inst_35998 = (inst_35981 + (1));
var inst_35981__$1 = inst_35998;
var state_36022__$1 = (function (){var statearr_36058 = state_36022;
(statearr_36058[(10)] = inst_35997);

(statearr_36058[(7)] = inst_35981__$1);

return statearr_36058;
})();
var statearr_36061_37576 = state_36022__$1;
(statearr_36061_37576[(2)] = null);

(statearr_36061_37576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (5))){
var inst_36004 = (state_36022[(2)]);
var state_36022__$1 = (function (){var statearr_36064 = state_36022;
(statearr_36064[(11)] = inst_36004);

return statearr_36064;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36022__$1,(12),dchan);
} else {
if((state_val_36023 === (14))){
var inst_36006 = (state_36022[(8)]);
var inst_36011 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36006);
var state_36022__$1 = state_36022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36022__$1,(16),out,inst_36011);
} else {
if((state_val_36023 === (16))){
var inst_36013 = (state_36022[(2)]);
var state_36022__$1 = (function (){var statearr_36066 = state_36022;
(statearr_36066[(12)] = inst_36013);

return statearr_36066;
})();
var statearr_36068_37584 = state_36022__$1;
(statearr_36068_37584[(2)] = null);

(statearr_36068_37584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (10))){
var inst_35988 = (state_36022[(2)]);
var inst_35989 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36022__$1 = (function (){var statearr_36070 = state_36022;
(statearr_36070[(13)] = inst_35988);

return statearr_36070;
})();
var statearr_36071_37587 = state_36022__$1;
(statearr_36071_37587[(2)] = inst_35989);


cljs.core.async.impl.ioc_helpers.process_exception(state_36022__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36023 === (8))){
var inst_36002 = (state_36022[(2)]);
var state_36022__$1 = state_36022;
var statearr_36072_37591 = state_36022__$1;
(statearr_36072_37591[(2)] = inst_36002);

(statearr_36072_37591[(1)] = (5));


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
var statearr_36073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36073[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36073[(1)] = (1));

return statearr_36073;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36022){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36022);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36076){if((e36076 instanceof Object)){
var ex__34210__auto__ = e36076;
var statearr_36077_37600 = state_36022;
(statearr_36077_37600[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36076;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37602 = state_36022;
state_36022 = G__37602;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36079 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36079[(6)] = c__34274__auto___37536);

return statearr_36079;
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
var G__36085 = arguments.length;
switch (G__36085) {
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
var c__34274__auto___37612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36117){
var state_val_36118 = (state_36117[(1)]);
if((state_val_36118 === (7))){
var inst_36097 = (state_36117[(7)]);
var inst_36096 = (state_36117[(8)]);
var inst_36096__$1 = (state_36117[(2)]);
var inst_36097__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36096__$1,(0),null);
var inst_36098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36096__$1,(1),null);
var inst_36099 = (inst_36097__$1 == null);
var state_36117__$1 = (function (){var statearr_36119 = state_36117;
(statearr_36119[(7)] = inst_36097__$1);

(statearr_36119[(8)] = inst_36096__$1);

(statearr_36119[(9)] = inst_36098);

return statearr_36119;
})();
if(cljs.core.truth_(inst_36099)){
var statearr_36120_37620 = state_36117__$1;
(statearr_36120_37620[(1)] = (8));

} else {
var statearr_36121_37621 = state_36117__$1;
(statearr_36121_37621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36118 === (1))){
var inst_36086 = cljs.core.vec(chs);
var inst_36087 = inst_36086;
var state_36117__$1 = (function (){var statearr_36122 = state_36117;
(statearr_36122[(10)] = inst_36087);

return statearr_36122;
})();
var statearr_36123_37623 = state_36117__$1;
(statearr_36123_37623[(2)] = null);

(statearr_36123_37623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36118 === (4))){
var inst_36087 = (state_36117[(10)]);
var state_36117__$1 = state_36117;
return cljs.core.async.ioc_alts_BANG_(state_36117__$1,(7),inst_36087);
} else {
if((state_val_36118 === (6))){
var inst_36113 = (state_36117[(2)]);
var state_36117__$1 = state_36117;
var statearr_36127_37630 = state_36117__$1;
(statearr_36127_37630[(2)] = inst_36113);

(statearr_36127_37630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36118 === (3))){
var inst_36115 = (state_36117[(2)]);
var state_36117__$1 = state_36117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36117__$1,inst_36115);
} else {
if((state_val_36118 === (2))){
var inst_36087 = (state_36117[(10)]);
var inst_36089 = cljs.core.count(inst_36087);
var inst_36090 = (inst_36089 > (0));
var state_36117__$1 = state_36117;
if(cljs.core.truth_(inst_36090)){
var statearr_36129_37633 = state_36117__$1;
(statearr_36129_37633[(1)] = (4));

} else {
var statearr_36130_37634 = state_36117__$1;
(statearr_36130_37634[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36118 === (11))){
var inst_36087 = (state_36117[(10)]);
var inst_36106 = (state_36117[(2)]);
var tmp36128 = inst_36087;
var inst_36087__$1 = tmp36128;
var state_36117__$1 = (function (){var statearr_36135 = state_36117;
(statearr_36135[(10)] = inst_36087__$1);

(statearr_36135[(11)] = inst_36106);

return statearr_36135;
})();
var statearr_36138_37640 = state_36117__$1;
(statearr_36138_37640[(2)] = null);

(statearr_36138_37640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36118 === (9))){
var inst_36097 = (state_36117[(7)]);
var state_36117__$1 = state_36117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36117__$1,(11),out,inst_36097);
} else {
if((state_val_36118 === (5))){
var inst_36111 = cljs.core.async.close_BANG_(out);
var state_36117__$1 = state_36117;
var statearr_36144_37643 = state_36117__$1;
(statearr_36144_37643[(2)] = inst_36111);

(statearr_36144_37643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36118 === (10))){
var inst_36109 = (state_36117[(2)]);
var state_36117__$1 = state_36117;
var statearr_36146_37645 = state_36117__$1;
(statearr_36146_37645[(2)] = inst_36109);

(statearr_36146_37645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36118 === (8))){
var inst_36097 = (state_36117[(7)]);
var inst_36087 = (state_36117[(10)]);
var inst_36096 = (state_36117[(8)]);
var inst_36098 = (state_36117[(9)]);
var inst_36101 = (function (){var cs = inst_36087;
var vec__36092 = inst_36096;
var v = inst_36097;
var c = inst_36098;
return (function (p1__36082_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36082_SHARP_);
});
})();
var inst_36102 = cljs.core.filterv(inst_36101,inst_36087);
var inst_36087__$1 = inst_36102;
var state_36117__$1 = (function (){var statearr_36151 = state_36117;
(statearr_36151[(10)] = inst_36087__$1);

return statearr_36151;
})();
var statearr_36152_37653 = state_36117__$1;
(statearr_36152_37653[(2)] = null);

(statearr_36152_37653[(1)] = (2));


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
var statearr_36153 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36153[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36153[(1)] = (1));

return statearr_36153;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36117){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36117);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36154){if((e36154 instanceof Object)){
var ex__34210__auto__ = e36154;
var statearr_36155_37660 = state_36117;
(statearr_36155_37660[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37667 = state_36117;
state_36117 = G__37667;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36156 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36156[(6)] = c__34274__auto___37612);

return statearr_36156;
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
var G__36165 = arguments.length;
switch (G__36165) {
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
var c__34274__auto___37679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36192){
var state_val_36193 = (state_36192[(1)]);
if((state_val_36193 === (7))){
var inst_36173 = (state_36192[(7)]);
var inst_36173__$1 = (state_36192[(2)]);
var inst_36175 = (inst_36173__$1 == null);
var inst_36176 = cljs.core.not(inst_36175);
var state_36192__$1 = (function (){var statearr_36197 = state_36192;
(statearr_36197[(7)] = inst_36173__$1);

return statearr_36197;
})();
if(inst_36176){
var statearr_36198_37683 = state_36192__$1;
(statearr_36198_37683[(1)] = (8));

} else {
var statearr_36199_37687 = state_36192__$1;
(statearr_36199_37687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (1))){
var inst_36168 = (0);
var state_36192__$1 = (function (){var statearr_36200 = state_36192;
(statearr_36200[(8)] = inst_36168);

return statearr_36200;
})();
var statearr_36201_37693 = state_36192__$1;
(statearr_36201_37693[(2)] = null);

(statearr_36201_37693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (4))){
var state_36192__$1 = state_36192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36192__$1,(7),ch);
} else {
if((state_val_36193 === (6))){
var inst_36187 = (state_36192[(2)]);
var state_36192__$1 = state_36192;
var statearr_36203_37696 = state_36192__$1;
(statearr_36203_37696[(2)] = inst_36187);

(statearr_36203_37696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (3))){
var inst_36189 = (state_36192[(2)]);
var inst_36190 = cljs.core.async.close_BANG_(out);
var state_36192__$1 = (function (){var statearr_36207 = state_36192;
(statearr_36207[(9)] = inst_36189);

return statearr_36207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36192__$1,inst_36190);
} else {
if((state_val_36193 === (2))){
var inst_36168 = (state_36192[(8)]);
var inst_36170 = (inst_36168 < n);
var state_36192__$1 = state_36192;
if(cljs.core.truth_(inst_36170)){
var statearr_36208_37702 = state_36192__$1;
(statearr_36208_37702[(1)] = (4));

} else {
var statearr_36209_37703 = state_36192__$1;
(statearr_36209_37703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (11))){
var inst_36168 = (state_36192[(8)]);
var inst_36179 = (state_36192[(2)]);
var inst_36180 = (inst_36168 + (1));
var inst_36168__$1 = inst_36180;
var state_36192__$1 = (function (){var statearr_36210 = state_36192;
(statearr_36210[(8)] = inst_36168__$1);

(statearr_36210[(10)] = inst_36179);

return statearr_36210;
})();
var statearr_36211_37708 = state_36192__$1;
(statearr_36211_37708[(2)] = null);

(statearr_36211_37708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (9))){
var state_36192__$1 = state_36192;
var statearr_36212_37709 = state_36192__$1;
(statearr_36212_37709[(2)] = null);

(statearr_36212_37709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (5))){
var state_36192__$1 = state_36192;
var statearr_36213_37711 = state_36192__$1;
(statearr_36213_37711[(2)] = null);

(statearr_36213_37711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (10))){
var inst_36184 = (state_36192[(2)]);
var state_36192__$1 = state_36192;
var statearr_36214_37712 = state_36192__$1;
(statearr_36214_37712[(2)] = inst_36184);

(statearr_36214_37712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36193 === (8))){
var inst_36173 = (state_36192[(7)]);
var state_36192__$1 = state_36192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36192__$1,(11),out,inst_36173);
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
var statearr_36215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36215[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36215[(1)] = (1));

return statearr_36215;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36192){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36192);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36216){if((e36216 instanceof Object)){
var ex__34210__auto__ = e36216;
var statearr_36217_37724 = state_36192;
(statearr_36217_37724[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36216;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37727 = state_36192;
state_36192 = G__37727;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36218 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36218[(6)] = c__34274__auto___37679);

return statearr_36218;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36220 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36220 = (function (f,ch,meta36221){
this.f = f;
this.ch = ch;
this.meta36221 = meta36221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36222,meta36221__$1){
var self__ = this;
var _36222__$1 = this;
return (new cljs.core.async.t_cljs$core$async36220(self__.f,self__.ch,meta36221__$1));
}));

(cljs.core.async.t_cljs$core$async36220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36222){
var self__ = this;
var _36222__$1 = this;
return self__.meta36221;
}));

(cljs.core.async.t_cljs$core$async36220.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36220.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36220.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36220.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36220.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36226 = (function (f,ch,meta36221,_,fn1,meta36227){
this.f = f;
this.ch = ch;
this.meta36221 = meta36221;
this._ = _;
this.fn1 = fn1;
this.meta36227 = meta36227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36228,meta36227__$1){
var self__ = this;
var _36228__$1 = this;
return (new cljs.core.async.t_cljs$core$async36226(self__.f,self__.ch,self__.meta36221,self__._,self__.fn1,meta36227__$1));
}));

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36228){
var self__ = this;
var _36228__$1 = this;
return self__.meta36227;
}));

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36219_SHARP_){
var G__36236 = (((p1__36219_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36219_SHARP_) : self__.f.call(null,p1__36219_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36236) : f1.call(null,G__36236));
});
}));

(cljs.core.async.t_cljs$core$async36226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36221","meta36221",577833496,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36220","cljs.core.async/t_cljs$core$async36220",-60496768,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36227","meta36227",-798583611,null)], null);
}));

(cljs.core.async.t_cljs$core$async36226.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36226");

(cljs.core.async.t_cljs$core$async36226.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36226");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36226.
 */
cljs.core.async.__GT_t_cljs$core$async36226 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36226(f__$1,ch__$1,meta36221__$1,___$2,fn1__$1,meta36227){
return (new cljs.core.async.t_cljs$core$async36226(f__$1,ch__$1,meta36221__$1,___$2,fn1__$1,meta36227));
});

}

return (new cljs.core.async.t_cljs$core$async36226(self__.f,self__.ch,self__.meta36221,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36244 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36244) : self__.f.call(null,G__36244));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36220.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36220.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36221","meta36221",577833496,null)], null);
}));

(cljs.core.async.t_cljs$core$async36220.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36220");

(cljs.core.async.t_cljs$core$async36220.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36220");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36220.
 */
cljs.core.async.__GT_t_cljs$core$async36220 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36220(f__$1,ch__$1,meta36221){
return (new cljs.core.async.t_cljs$core$async36220(f__$1,ch__$1,meta36221));
});

}

return (new cljs.core.async.t_cljs$core$async36220(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36254 = (function (p,ch,meta36255){
this.p = p;
this.ch = ch;
this.meta36255 = meta36255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36256,meta36255__$1){
var self__ = this;
var _36256__$1 = this;
return (new cljs.core.async.t_cljs$core$async36254(self__.p,self__.ch,meta36255__$1));
}));

(cljs.core.async.t_cljs$core$async36254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36256){
var self__ = this;
var _36256__$1 = this;
return self__.meta36255;
}));

(cljs.core.async.t_cljs$core$async36254.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36254.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36254.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36254.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36255","meta36255",1866715481,null)], null);
}));

(cljs.core.async.t_cljs$core$async36254.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36254");

(cljs.core.async.t_cljs$core$async36254.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36254");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36254.
 */
cljs.core.async.__GT_t_cljs$core$async36254 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36254(p__$1,ch__$1,meta36255){
return (new cljs.core.async.t_cljs$core$async36254(p__$1,ch__$1,meta36255));
});

}

return (new cljs.core.async.t_cljs$core$async36254(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36270 = arguments.length;
switch (G__36270) {
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
var c__34274__auto___37806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36293){
var state_val_36294 = (state_36293[(1)]);
if((state_val_36294 === (7))){
var inst_36289 = (state_36293[(2)]);
var state_36293__$1 = state_36293;
var statearr_36297_37811 = state_36293__$1;
(statearr_36297_37811[(2)] = inst_36289);

(statearr_36297_37811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (1))){
var state_36293__$1 = state_36293;
var statearr_36298_37812 = state_36293__$1;
(statearr_36298_37812[(2)] = null);

(statearr_36298_37812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (4))){
var inst_36275 = (state_36293[(7)]);
var inst_36275__$1 = (state_36293[(2)]);
var inst_36276 = (inst_36275__$1 == null);
var state_36293__$1 = (function (){var statearr_36299 = state_36293;
(statearr_36299[(7)] = inst_36275__$1);

return statearr_36299;
})();
if(cljs.core.truth_(inst_36276)){
var statearr_36300_37818 = state_36293__$1;
(statearr_36300_37818[(1)] = (5));

} else {
var statearr_36301_37819 = state_36293__$1;
(statearr_36301_37819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (6))){
var inst_36275 = (state_36293[(7)]);
var inst_36280 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36275) : p.call(null,inst_36275));
var state_36293__$1 = state_36293;
if(cljs.core.truth_(inst_36280)){
var statearr_36303_37824 = state_36293__$1;
(statearr_36303_37824[(1)] = (8));

} else {
var statearr_36304_37825 = state_36293__$1;
(statearr_36304_37825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (3))){
var inst_36291 = (state_36293[(2)]);
var state_36293__$1 = state_36293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36293__$1,inst_36291);
} else {
if((state_val_36294 === (2))){
var state_36293__$1 = state_36293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36293__$1,(4),ch);
} else {
if((state_val_36294 === (11))){
var inst_36283 = (state_36293[(2)]);
var state_36293__$1 = state_36293;
var statearr_36310_37827 = state_36293__$1;
(statearr_36310_37827[(2)] = inst_36283);

(statearr_36310_37827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (9))){
var state_36293__$1 = state_36293;
var statearr_36314_37831 = state_36293__$1;
(statearr_36314_37831[(2)] = null);

(statearr_36314_37831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (5))){
var inst_36278 = cljs.core.async.close_BANG_(out);
var state_36293__$1 = state_36293;
var statearr_36316_37833 = state_36293__$1;
(statearr_36316_37833[(2)] = inst_36278);

(statearr_36316_37833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (10))){
var inst_36286 = (state_36293[(2)]);
var state_36293__$1 = (function (){var statearr_36317 = state_36293;
(statearr_36317[(8)] = inst_36286);

return statearr_36317;
})();
var statearr_36318_37834 = state_36293__$1;
(statearr_36318_37834[(2)] = null);

(statearr_36318_37834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36294 === (8))){
var inst_36275 = (state_36293[(7)]);
var state_36293__$1 = state_36293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36293__$1,(11),out,inst_36275);
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
var statearr_36319 = [null,null,null,null,null,null,null,null,null];
(statearr_36319[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36319[(1)] = (1));

return statearr_36319;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36293){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36293);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36320){if((e36320 instanceof Object)){
var ex__34210__auto__ = e36320;
var statearr_36321_37845 = state_36293;
(statearr_36321_37845[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36320;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37847 = state_36293;
state_36293 = G__37847;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36323 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36323[(6)] = c__34274__auto___37806);

return statearr_36323;
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
var G__36335 = arguments.length;
switch (G__36335) {
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
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36408){
var state_val_36409 = (state_36408[(1)]);
if((state_val_36409 === (7))){
var inst_36402 = (state_36408[(2)]);
var state_36408__$1 = state_36408;
var statearr_36420_37864 = state_36408__$1;
(statearr_36420_37864[(2)] = inst_36402);

(statearr_36420_37864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (20))){
var inst_36372 = (state_36408[(7)]);
var inst_36383 = (state_36408[(2)]);
var inst_36384 = cljs.core.next(inst_36372);
var inst_36354 = inst_36384;
var inst_36355 = null;
var inst_36356 = (0);
var inst_36357 = (0);
var state_36408__$1 = (function (){var statearr_36422 = state_36408;
(statearr_36422[(8)] = inst_36357);

(statearr_36422[(9)] = inst_36356);

(statearr_36422[(10)] = inst_36355);

(statearr_36422[(11)] = inst_36354);

(statearr_36422[(12)] = inst_36383);

return statearr_36422;
})();
var statearr_36424_37871 = state_36408__$1;
(statearr_36424_37871[(2)] = null);

(statearr_36424_37871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (1))){
var state_36408__$1 = state_36408;
var statearr_36426_37875 = state_36408__$1;
(statearr_36426_37875[(2)] = null);

(statearr_36426_37875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (4))){
var inst_36343 = (state_36408[(13)]);
var inst_36343__$1 = (state_36408[(2)]);
var inst_36344 = (inst_36343__$1 == null);
var state_36408__$1 = (function (){var statearr_36428 = state_36408;
(statearr_36428[(13)] = inst_36343__$1);

return statearr_36428;
})();
if(cljs.core.truth_(inst_36344)){
var statearr_36429_37878 = state_36408__$1;
(statearr_36429_37878[(1)] = (5));

} else {
var statearr_36430_37879 = state_36408__$1;
(statearr_36430_37879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (15))){
var state_36408__$1 = state_36408;
var statearr_36435_37880 = state_36408__$1;
(statearr_36435_37880[(2)] = null);

(statearr_36435_37880[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (21))){
var state_36408__$1 = state_36408;
var statearr_36436_37882 = state_36408__$1;
(statearr_36436_37882[(2)] = null);

(statearr_36436_37882[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (13))){
var inst_36357 = (state_36408[(8)]);
var inst_36356 = (state_36408[(9)]);
var inst_36355 = (state_36408[(10)]);
var inst_36354 = (state_36408[(11)]);
var inst_36366 = (state_36408[(2)]);
var inst_36369 = (inst_36357 + (1));
var tmp36432 = inst_36356;
var tmp36433 = inst_36355;
var tmp36434 = inst_36354;
var inst_36354__$1 = tmp36434;
var inst_36355__$1 = tmp36433;
var inst_36356__$1 = tmp36432;
var inst_36357__$1 = inst_36369;
var state_36408__$1 = (function (){var statearr_36439 = state_36408;
(statearr_36439[(8)] = inst_36357__$1);

(statearr_36439[(9)] = inst_36356__$1);

(statearr_36439[(14)] = inst_36366);

(statearr_36439[(10)] = inst_36355__$1);

(statearr_36439[(11)] = inst_36354__$1);

return statearr_36439;
})();
var statearr_36440_37891 = state_36408__$1;
(statearr_36440_37891[(2)] = null);

(statearr_36440_37891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (22))){
var state_36408__$1 = state_36408;
var statearr_36441_37893 = state_36408__$1;
(statearr_36441_37893[(2)] = null);

(statearr_36441_37893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (6))){
var inst_36343 = (state_36408[(13)]);
var inst_36352 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36343) : f.call(null,inst_36343));
var inst_36353 = cljs.core.seq(inst_36352);
var inst_36354 = inst_36353;
var inst_36355 = null;
var inst_36356 = (0);
var inst_36357 = (0);
var state_36408__$1 = (function (){var statearr_36444 = state_36408;
(statearr_36444[(8)] = inst_36357);

(statearr_36444[(9)] = inst_36356);

(statearr_36444[(10)] = inst_36355);

(statearr_36444[(11)] = inst_36354);

return statearr_36444;
})();
var statearr_36445_37896 = state_36408__$1;
(statearr_36445_37896[(2)] = null);

(statearr_36445_37896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (17))){
var inst_36372 = (state_36408[(7)]);
var inst_36376 = cljs.core.chunk_first(inst_36372);
var inst_36377 = cljs.core.chunk_rest(inst_36372);
var inst_36378 = cljs.core.count(inst_36376);
var inst_36354 = inst_36377;
var inst_36355 = inst_36376;
var inst_36356 = inst_36378;
var inst_36357 = (0);
var state_36408__$1 = (function (){var statearr_36446 = state_36408;
(statearr_36446[(8)] = inst_36357);

(statearr_36446[(9)] = inst_36356);

(statearr_36446[(10)] = inst_36355);

(statearr_36446[(11)] = inst_36354);

return statearr_36446;
})();
var statearr_36449_37904 = state_36408__$1;
(statearr_36449_37904[(2)] = null);

(statearr_36449_37904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (3))){
var inst_36404 = (state_36408[(2)]);
var state_36408__$1 = state_36408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36408__$1,inst_36404);
} else {
if((state_val_36409 === (12))){
var inst_36392 = (state_36408[(2)]);
var state_36408__$1 = state_36408;
var statearr_36452_37907 = state_36408__$1;
(statearr_36452_37907[(2)] = inst_36392);

(statearr_36452_37907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (2))){
var state_36408__$1 = state_36408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36408__$1,(4),in$);
} else {
if((state_val_36409 === (23))){
var inst_36400 = (state_36408[(2)]);
var state_36408__$1 = state_36408;
var statearr_36454_37912 = state_36408__$1;
(statearr_36454_37912[(2)] = inst_36400);

(statearr_36454_37912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (19))){
var inst_36387 = (state_36408[(2)]);
var state_36408__$1 = state_36408;
var statearr_36462_37917 = state_36408__$1;
(statearr_36462_37917[(2)] = inst_36387);

(statearr_36462_37917[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (11))){
var inst_36372 = (state_36408[(7)]);
var inst_36354 = (state_36408[(11)]);
var inst_36372__$1 = cljs.core.seq(inst_36354);
var state_36408__$1 = (function (){var statearr_36463 = state_36408;
(statearr_36463[(7)] = inst_36372__$1);

return statearr_36463;
})();
if(inst_36372__$1){
var statearr_36464_37918 = state_36408__$1;
(statearr_36464_37918[(1)] = (14));

} else {
var statearr_36465_37919 = state_36408__$1;
(statearr_36465_37919[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (9))){
var inst_36394 = (state_36408[(2)]);
var inst_36395 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36408__$1 = (function (){var statearr_36467 = state_36408;
(statearr_36467[(15)] = inst_36394);

return statearr_36467;
})();
if(cljs.core.truth_(inst_36395)){
var statearr_36468_37921 = state_36408__$1;
(statearr_36468_37921[(1)] = (21));

} else {
var statearr_36470_37923 = state_36408__$1;
(statearr_36470_37923[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (5))){
var inst_36346 = cljs.core.async.close_BANG_(out);
var state_36408__$1 = state_36408;
var statearr_36472_37926 = state_36408__$1;
(statearr_36472_37926[(2)] = inst_36346);

(statearr_36472_37926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (14))){
var inst_36372 = (state_36408[(7)]);
var inst_36374 = cljs.core.chunked_seq_QMARK_(inst_36372);
var state_36408__$1 = state_36408;
if(inst_36374){
var statearr_36474_37928 = state_36408__$1;
(statearr_36474_37928[(1)] = (17));

} else {
var statearr_36475_37930 = state_36408__$1;
(statearr_36475_37930[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (16))){
var inst_36390 = (state_36408[(2)]);
var state_36408__$1 = state_36408;
var statearr_36477_37933 = state_36408__$1;
(statearr_36477_37933[(2)] = inst_36390);

(statearr_36477_37933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36409 === (10))){
var inst_36357 = (state_36408[(8)]);
var inst_36355 = (state_36408[(10)]);
var inst_36364 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36355,inst_36357);
var state_36408__$1 = state_36408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36408__$1,(13),out,inst_36364);
} else {
if((state_val_36409 === (18))){
var inst_36372 = (state_36408[(7)]);
var inst_36381 = cljs.core.first(inst_36372);
var state_36408__$1 = state_36408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36408__$1,(20),out,inst_36381);
} else {
if((state_val_36409 === (8))){
var inst_36357 = (state_36408[(8)]);
var inst_36356 = (state_36408[(9)]);
var inst_36359 = (inst_36357 < inst_36356);
var inst_36360 = inst_36359;
var state_36408__$1 = state_36408;
if(cljs.core.truth_(inst_36360)){
var statearr_36480_37940 = state_36408__$1;
(statearr_36480_37940[(1)] = (10));

} else {
var statearr_36481_37943 = state_36408__$1;
(statearr_36481_37943[(1)] = (11));

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
var statearr_36482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36482[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36482[(1)] = (1));

return statearr_36482;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36408){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36408);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36485){if((e36485 instanceof Object)){
var ex__34210__auto__ = e36485;
var statearr_36486_37945 = state_36408;
(statearr_36486_37945[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36485;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37951 = state_36408;
state_36408 = G__37951;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36408){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36487 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36487[(6)] = c__34274__auto__);

return statearr_36487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36492 = arguments.length;
switch (G__36492) {
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
var G__36503 = arguments.length;
switch (G__36503) {
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
var G__36509 = arguments.length;
switch (G__36509) {
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
var c__34274__auto___37973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36537){
var state_val_36538 = (state_36537[(1)]);
if((state_val_36538 === (7))){
var inst_36532 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36541_37977 = state_36537__$1;
(statearr_36541_37977[(2)] = inst_36532);

(statearr_36541_37977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (1))){
var inst_36511 = null;
var state_36537__$1 = (function (){var statearr_36542 = state_36537;
(statearr_36542[(7)] = inst_36511);

return statearr_36542;
})();
var statearr_36543_37980 = state_36537__$1;
(statearr_36543_37980[(2)] = null);

(statearr_36543_37980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (4))){
var inst_36517 = (state_36537[(8)]);
var inst_36517__$1 = (state_36537[(2)]);
var inst_36518 = (inst_36517__$1 == null);
var inst_36519 = cljs.core.not(inst_36518);
var state_36537__$1 = (function (){var statearr_36545 = state_36537;
(statearr_36545[(8)] = inst_36517__$1);

return statearr_36545;
})();
if(inst_36519){
var statearr_36546_37984 = state_36537__$1;
(statearr_36546_37984[(1)] = (5));

} else {
var statearr_36548_37986 = state_36537__$1;
(statearr_36548_37986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (6))){
var state_36537__$1 = state_36537;
var statearr_36550_37989 = state_36537__$1;
(statearr_36550_37989[(2)] = null);

(statearr_36550_37989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (3))){
var inst_36534 = (state_36537[(2)]);
var inst_36535 = cljs.core.async.close_BANG_(out);
var state_36537__$1 = (function (){var statearr_36557 = state_36537;
(statearr_36557[(9)] = inst_36534);

return statearr_36557;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36537__$1,inst_36535);
} else {
if((state_val_36538 === (2))){
var state_36537__$1 = state_36537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36537__$1,(4),ch);
} else {
if((state_val_36538 === (11))){
var inst_36517 = (state_36537[(8)]);
var inst_36526 = (state_36537[(2)]);
var inst_36511 = inst_36517;
var state_36537__$1 = (function (){var statearr_36560 = state_36537;
(statearr_36560[(10)] = inst_36526);

(statearr_36560[(7)] = inst_36511);

return statearr_36560;
})();
var statearr_36561_37992 = state_36537__$1;
(statearr_36561_37992[(2)] = null);

(statearr_36561_37992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (9))){
var inst_36517 = (state_36537[(8)]);
var state_36537__$1 = state_36537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36537__$1,(11),out,inst_36517);
} else {
if((state_val_36538 === (5))){
var inst_36511 = (state_36537[(7)]);
var inst_36517 = (state_36537[(8)]);
var inst_36521 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36517,inst_36511);
var state_36537__$1 = state_36537;
if(inst_36521){
var statearr_36564_37994 = state_36537__$1;
(statearr_36564_37994[(1)] = (8));

} else {
var statearr_36566_37997 = state_36537__$1;
(statearr_36566_37997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (10))){
var inst_36529 = (state_36537[(2)]);
var state_36537__$1 = state_36537;
var statearr_36568_38000 = state_36537__$1;
(statearr_36568_38000[(2)] = inst_36529);

(statearr_36568_38000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36538 === (8))){
var inst_36511 = (state_36537[(7)]);
var tmp36562 = inst_36511;
var inst_36511__$1 = tmp36562;
var state_36537__$1 = (function (){var statearr_36569 = state_36537;
(statearr_36569[(7)] = inst_36511__$1);

return statearr_36569;
})();
var statearr_36570_38002 = state_36537__$1;
(statearr_36570_38002[(2)] = null);

(statearr_36570_38002[(1)] = (2));


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
var statearr_36572 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36572[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36572[(1)] = (1));

return statearr_36572;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36537){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36537);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36573){if((e36573 instanceof Object)){
var ex__34210__auto__ = e36573;
var statearr_36574_38007 = state_36537;
(statearr_36574_38007[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36573;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38009 = state_36537;
state_36537 = G__38009;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36577 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36577[(6)] = c__34274__auto___37973);

return statearr_36577;
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
var G__36584 = arguments.length;
switch (G__36584) {
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
var c__34274__auto___38016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36634){
var state_val_36635 = (state_36634[(1)]);
if((state_val_36635 === (7))){
var inst_36627 = (state_36634[(2)]);
var state_36634__$1 = state_36634;
var statearr_36642_38019 = state_36634__$1;
(statearr_36642_38019[(2)] = inst_36627);

(statearr_36642_38019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (1))){
var inst_36593 = (new Array(n));
var inst_36594 = inst_36593;
var inst_36595 = (0);
var state_36634__$1 = (function (){var statearr_36643 = state_36634;
(statearr_36643[(7)] = inst_36595);

(statearr_36643[(8)] = inst_36594);

return statearr_36643;
})();
var statearr_36644_38023 = state_36634__$1;
(statearr_36644_38023[(2)] = null);

(statearr_36644_38023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (4))){
var inst_36598 = (state_36634[(9)]);
var inst_36598__$1 = (state_36634[(2)]);
var inst_36599 = (inst_36598__$1 == null);
var inst_36600 = cljs.core.not(inst_36599);
var state_36634__$1 = (function (){var statearr_36646 = state_36634;
(statearr_36646[(9)] = inst_36598__$1);

return statearr_36646;
})();
if(inst_36600){
var statearr_36649_38030 = state_36634__$1;
(statearr_36649_38030[(1)] = (5));

} else {
var statearr_36653_38031 = state_36634__$1;
(statearr_36653_38031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (15))){
var inst_36620 = (state_36634[(2)]);
var state_36634__$1 = state_36634;
var statearr_36656_38034 = state_36634__$1;
(statearr_36656_38034[(2)] = inst_36620);

(statearr_36656_38034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (13))){
var state_36634__$1 = state_36634;
var statearr_36658_38039 = state_36634__$1;
(statearr_36658_38039[(2)] = null);

(statearr_36658_38039[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (6))){
var inst_36595 = (state_36634[(7)]);
var inst_36616 = (inst_36595 > (0));
var state_36634__$1 = state_36634;
if(cljs.core.truth_(inst_36616)){
var statearr_36660_38041 = state_36634__$1;
(statearr_36660_38041[(1)] = (12));

} else {
var statearr_36661_38042 = state_36634__$1;
(statearr_36661_38042[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (3))){
var inst_36629 = (state_36634[(2)]);
var state_36634__$1 = state_36634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36634__$1,inst_36629);
} else {
if((state_val_36635 === (12))){
var inst_36594 = (state_36634[(8)]);
var inst_36618 = cljs.core.vec(inst_36594);
var state_36634__$1 = state_36634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36634__$1,(15),out,inst_36618);
} else {
if((state_val_36635 === (2))){
var state_36634__$1 = state_36634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36634__$1,(4),ch);
} else {
if((state_val_36635 === (11))){
var inst_36610 = (state_36634[(2)]);
var inst_36611 = (new Array(n));
var inst_36594 = inst_36611;
var inst_36595 = (0);
var state_36634__$1 = (function (){var statearr_36664 = state_36634;
(statearr_36664[(10)] = inst_36610);

(statearr_36664[(7)] = inst_36595);

(statearr_36664[(8)] = inst_36594);

return statearr_36664;
})();
var statearr_36665_38048 = state_36634__$1;
(statearr_36665_38048[(2)] = null);

(statearr_36665_38048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (9))){
var inst_36594 = (state_36634[(8)]);
var inst_36608 = cljs.core.vec(inst_36594);
var state_36634__$1 = state_36634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36634__$1,(11),out,inst_36608);
} else {
if((state_val_36635 === (5))){
var inst_36598 = (state_36634[(9)]);
var inst_36603 = (state_36634[(11)]);
var inst_36595 = (state_36634[(7)]);
var inst_36594 = (state_36634[(8)]);
var inst_36602 = (inst_36594[inst_36595] = inst_36598);
var inst_36603__$1 = (inst_36595 + (1));
var inst_36604 = (inst_36603__$1 < n);
var state_36634__$1 = (function (){var statearr_36669 = state_36634;
(statearr_36669[(11)] = inst_36603__$1);

(statearr_36669[(12)] = inst_36602);

return statearr_36669;
})();
if(cljs.core.truth_(inst_36604)){
var statearr_36670_38053 = state_36634__$1;
(statearr_36670_38053[(1)] = (8));

} else {
var statearr_36672_38054 = state_36634__$1;
(statearr_36672_38054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (14))){
var inst_36623 = (state_36634[(2)]);
var inst_36625 = cljs.core.async.close_BANG_(out);
var state_36634__$1 = (function (){var statearr_36675 = state_36634;
(statearr_36675[(13)] = inst_36623);

return statearr_36675;
})();
var statearr_36676_38056 = state_36634__$1;
(statearr_36676_38056[(2)] = inst_36625);

(statearr_36676_38056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (10))){
var inst_36614 = (state_36634[(2)]);
var state_36634__$1 = state_36634;
var statearr_36677_38061 = state_36634__$1;
(statearr_36677_38061[(2)] = inst_36614);

(statearr_36677_38061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36635 === (8))){
var inst_36603 = (state_36634[(11)]);
var inst_36594 = (state_36634[(8)]);
var tmp36674 = inst_36594;
var inst_36594__$1 = tmp36674;
var inst_36595 = inst_36603;
var state_36634__$1 = (function (){var statearr_36681 = state_36634;
(statearr_36681[(7)] = inst_36595);

(statearr_36681[(8)] = inst_36594__$1);

return statearr_36681;
})();
var statearr_36683_38065 = state_36634__$1;
(statearr_36683_38065[(2)] = null);

(statearr_36683_38065[(1)] = (2));


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
var statearr_36684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36684[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36684[(1)] = (1));

return statearr_36684;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36634){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36634);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36694){if((e36694 instanceof Object)){
var ex__34210__auto__ = e36694;
var statearr_36695_38070 = state_36634;
(statearr_36695_38070[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36694;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38072 = state_36634;
state_36634 = G__38072;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36696 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36696[(6)] = c__34274__auto___38016);

return statearr_36696;
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
var G__36700 = arguments.length;
switch (G__36700) {
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
var c__34274__auto___38079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36745){
var state_val_36746 = (state_36745[(1)]);
if((state_val_36746 === (7))){
var inst_36740 = (state_36745[(2)]);
var state_36745__$1 = state_36745;
var statearr_36748_38080 = state_36745__$1;
(statearr_36748_38080[(2)] = inst_36740);

(statearr_36748_38080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (1))){
var inst_36702 = [];
var inst_36703 = inst_36702;
var inst_36704 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36745__$1 = (function (){var statearr_36750 = state_36745;
(statearr_36750[(7)] = inst_36703);

(statearr_36750[(8)] = inst_36704);

return statearr_36750;
})();
var statearr_36751_38081 = state_36745__$1;
(statearr_36751_38081[(2)] = null);

(statearr_36751_38081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (4))){
var inst_36707 = (state_36745[(9)]);
var inst_36707__$1 = (state_36745[(2)]);
var inst_36709 = (inst_36707__$1 == null);
var inst_36710 = cljs.core.not(inst_36709);
var state_36745__$1 = (function (){var statearr_36752 = state_36745;
(statearr_36752[(9)] = inst_36707__$1);

return statearr_36752;
})();
if(inst_36710){
var statearr_36754_38085 = state_36745__$1;
(statearr_36754_38085[(1)] = (5));

} else {
var statearr_36755_38086 = state_36745__$1;
(statearr_36755_38086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (15))){
var inst_36734 = (state_36745[(2)]);
var state_36745__$1 = state_36745;
var statearr_36756_38087 = state_36745__$1;
(statearr_36756_38087[(2)] = inst_36734);

(statearr_36756_38087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (13))){
var state_36745__$1 = state_36745;
var statearr_36757_38088 = state_36745__$1;
(statearr_36757_38088[(2)] = null);

(statearr_36757_38088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (6))){
var inst_36703 = (state_36745[(7)]);
var inst_36729 = inst_36703.length;
var inst_36730 = (inst_36729 > (0));
var state_36745__$1 = state_36745;
if(cljs.core.truth_(inst_36730)){
var statearr_36759_38093 = state_36745__$1;
(statearr_36759_38093[(1)] = (12));

} else {
var statearr_36760_38094 = state_36745__$1;
(statearr_36760_38094[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (3))){
var inst_36742 = (state_36745[(2)]);
var state_36745__$1 = state_36745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36745__$1,inst_36742);
} else {
if((state_val_36746 === (12))){
var inst_36703 = (state_36745[(7)]);
var inst_36732 = cljs.core.vec(inst_36703);
var state_36745__$1 = state_36745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36745__$1,(15),out,inst_36732);
} else {
if((state_val_36746 === (2))){
var state_36745__$1 = state_36745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36745__$1,(4),ch);
} else {
if((state_val_36746 === (11))){
var inst_36707 = (state_36745[(9)]);
var inst_36712 = (state_36745[(10)]);
var inst_36722 = (state_36745[(2)]);
var inst_36723 = [];
var inst_36724 = inst_36723.push(inst_36707);
var inst_36703 = inst_36723;
var inst_36704 = inst_36712;
var state_36745__$1 = (function (){var statearr_36763 = state_36745;
(statearr_36763[(7)] = inst_36703);

(statearr_36763[(11)] = inst_36722);

(statearr_36763[(8)] = inst_36704);

(statearr_36763[(12)] = inst_36724);

return statearr_36763;
})();
var statearr_36764_38095 = state_36745__$1;
(statearr_36764_38095[(2)] = null);

(statearr_36764_38095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (9))){
var inst_36703 = (state_36745[(7)]);
var inst_36720 = cljs.core.vec(inst_36703);
var state_36745__$1 = state_36745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36745__$1,(11),out,inst_36720);
} else {
if((state_val_36746 === (5))){
var inst_36704 = (state_36745[(8)]);
var inst_36707 = (state_36745[(9)]);
var inst_36712 = (state_36745[(10)]);
var inst_36712__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36707) : f.call(null,inst_36707));
var inst_36713 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36712__$1,inst_36704);
var inst_36714 = cljs.core.keyword_identical_QMARK_(inst_36704,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36715 = ((inst_36713) || (inst_36714));
var state_36745__$1 = (function (){var statearr_36766 = state_36745;
(statearr_36766[(10)] = inst_36712__$1);

return statearr_36766;
})();
if(cljs.core.truth_(inst_36715)){
var statearr_36767_38097 = state_36745__$1;
(statearr_36767_38097[(1)] = (8));

} else {
var statearr_36768_38098 = state_36745__$1;
(statearr_36768_38098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (14))){
var inst_36737 = (state_36745[(2)]);
var inst_36738 = cljs.core.async.close_BANG_(out);
var state_36745__$1 = (function (){var statearr_36771 = state_36745;
(statearr_36771[(13)] = inst_36737);

return statearr_36771;
})();
var statearr_36772_38103 = state_36745__$1;
(statearr_36772_38103[(2)] = inst_36738);

(statearr_36772_38103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (10))){
var inst_36727 = (state_36745[(2)]);
var state_36745__$1 = state_36745;
var statearr_36773_38104 = state_36745__$1;
(statearr_36773_38104[(2)] = inst_36727);

(statearr_36773_38104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36746 === (8))){
var inst_36703 = (state_36745[(7)]);
var inst_36707 = (state_36745[(9)]);
var inst_36712 = (state_36745[(10)]);
var inst_36717 = inst_36703.push(inst_36707);
var tmp36769 = inst_36703;
var inst_36703__$1 = tmp36769;
var inst_36704 = inst_36712;
var state_36745__$1 = (function (){var statearr_36775 = state_36745;
(statearr_36775[(7)] = inst_36703__$1);

(statearr_36775[(8)] = inst_36704);

(statearr_36775[(14)] = inst_36717);

return statearr_36775;
})();
var statearr_36776_38105 = state_36745__$1;
(statearr_36776_38105[(2)] = null);

(statearr_36776_38105[(1)] = (2));


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
var statearr_36778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36778[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36778[(1)] = (1));

return statearr_36778;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36745){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36745);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36779){if((e36779 instanceof Object)){
var ex__34210__auto__ = e36779;
var statearr_36780_38106 = state_36745;
(statearr_36780_38106[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38107 = state_36745;
state_36745 = G__38107;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36782 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36782[(6)] = c__34274__auto___38079);

return statearr_36782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
