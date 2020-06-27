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
var G__34345 = arguments.length;
switch (G__34345) {
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
var val_36834 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36834) : fn1.call(null,val_36834));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36834) : fn1.call(null,val_36834));
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
var G__34355 = arguments.length;
switch (G__34355) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34368 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34368 = (function (flag,cb,meta34369){
this.flag = flag;
this.cb = cb;
this.meta34369 = meta34369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34370,meta34369__$1){
var self__ = this;
var _34370__$1 = this;
return (new cljs.core.async.t_cljs$core$async34368(self__.flag,self__.cb,meta34369__$1));
}));

(cljs.core.async.t_cljs$core$async34368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34370){
var self__ = this;
var _34370__$1 = this;
return self__.meta34369;
}));

(cljs.core.async.t_cljs$core$async34368.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34368.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34368.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34368.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34369","meta34369",941915958,null)], null);
}));

(cljs.core.async.t_cljs$core$async34368.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34368");

(cljs.core.async.t_cljs$core$async34368.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34368");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34368.
 */
cljs.core.async.__GT_t_cljs$core$async34368 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34368(flag__$1,cb__$1,meta34369){
return (new cljs.core.async.t_cljs$core$async34368(flag__$1,cb__$1,meta34369));
});

}

return (new cljs.core.async.t_cljs$core$async34368(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34377_SHARP_){
var G__34379 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34377_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34379) : fret.call(null,G__34379));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34378_SHARP_){
var G__34380 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34378_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34380) : fret.call(null,G__34380));
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
var len__4789__auto___36855 = arguments.length;
var i__4790__auto___36856 = (0);
while(true){
if((i__4790__auto___36856 < len__4789__auto___36855)){
args__4795__auto__.push((arguments[i__4790__auto___36856]));

var G__36857 = (i__4790__auto___36856 + (1));
i__4790__auto___36856 = G__36857;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34395){
var map__34396 = p__34395;
var map__34396__$1 = (((((!((map__34396 == null))))?(((((map__34396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34396):map__34396);
var opts = map__34396__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34390){
var G__34391 = cljs.core.first(seq34390);
var seq34390__$1 = cljs.core.next(seq34390);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34391,seq34390__$1);
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
var G__34399 = arguments.length;
switch (G__34399) {
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
var c__34276__auto___36864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_34427){
var state_val_34428 = (state_34427[(1)]);
if((state_val_34428 === (7))){
var inst_34419 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
var statearr_34430_36865 = state_34427__$1;
(statearr_34430_36865[(2)] = inst_34419);

(statearr_34430_36865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (1))){
var state_34427__$1 = state_34427;
var statearr_34431_36867 = state_34427__$1;
(statearr_34431_36867[(2)] = null);

(statearr_34431_36867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (4))){
var inst_34402 = (state_34427[(7)]);
var inst_34402__$1 = (state_34427[(2)]);
var inst_34403 = (inst_34402__$1 == null);
var state_34427__$1 = (function (){var statearr_34433 = state_34427;
(statearr_34433[(7)] = inst_34402__$1);

return statearr_34433;
})();
if(cljs.core.truth_(inst_34403)){
var statearr_34434_36869 = state_34427__$1;
(statearr_34434_36869[(1)] = (5));

} else {
var statearr_34435_36870 = state_34427__$1;
(statearr_34435_36870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (13))){
var state_34427__$1 = state_34427;
var statearr_34437_36871 = state_34427__$1;
(statearr_34437_36871[(2)] = null);

(statearr_34437_36871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (6))){
var inst_34402 = (state_34427[(7)]);
var state_34427__$1 = state_34427;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34427__$1,(11),to,inst_34402);
} else {
if((state_val_34428 === (3))){
var inst_34421 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34427__$1,inst_34421);
} else {
if((state_val_34428 === (12))){
var state_34427__$1 = state_34427;
var statearr_34439_36874 = state_34427__$1;
(statearr_34439_36874[(2)] = null);

(statearr_34439_36874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (2))){
var state_34427__$1 = state_34427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34427__$1,(4),from);
} else {
if((state_val_34428 === (11))){
var inst_34412 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
if(cljs.core.truth_(inst_34412)){
var statearr_34440_36876 = state_34427__$1;
(statearr_34440_36876[(1)] = (12));

} else {
var statearr_34442_36877 = state_34427__$1;
(statearr_34442_36877[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (9))){
var state_34427__$1 = state_34427;
var statearr_34444_36878 = state_34427__$1;
(statearr_34444_36878[(2)] = null);

(statearr_34444_36878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (5))){
var state_34427__$1 = state_34427;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34448_36880 = state_34427__$1;
(statearr_34448_36880[(1)] = (8));

} else {
var statearr_34449_36881 = state_34427__$1;
(statearr_34449_36881[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (14))){
var inst_34417 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
var statearr_34452_36882 = state_34427__$1;
(statearr_34452_36882[(2)] = inst_34417);

(statearr_34452_36882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (10))){
var inst_34409 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
var statearr_34453_36884 = state_34427__$1;
(statearr_34453_36884[(2)] = inst_34409);

(statearr_34453_36884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (8))){
var inst_34406 = cljs.core.async.close_BANG_(to);
var state_34427__$1 = state_34427;
var statearr_34454_36885 = state_34427__$1;
(statearr_34454_36885[(2)] = inst_34406);

(statearr_34454_36885[(1)] = (10));


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
var statearr_34455 = [null,null,null,null,null,null,null,null];
(statearr_34455[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34455[(1)] = (1));

return statearr_34455;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34427){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34427);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34456){if((e34456 instanceof Object)){
var ex__34210__auto__ = e34456;
var statearr_34457_36888 = state_34427;
(statearr_34457_36888[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36889 = state_34427;
state_34427 = G__36889;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_34458 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_34458[(6)] = c__34276__auto___36864);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
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
var process = (function (p__34464){
var vec__34465 = p__34464;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34465,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34465,(1),null);
var job = vec__34465;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34276__auto___36892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_34475){
var state_val_34476 = (state_34475[(1)]);
if((state_val_34476 === (1))){
var state_34475__$1 = state_34475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34475__$1,(2),res,v);
} else {
if((state_val_34476 === (2))){
var inst_34472 = (state_34475[(2)]);
var inst_34473 = cljs.core.async.close_BANG_(res);
var state_34475__$1 = (function (){var statearr_34477 = state_34475;
(statearr_34477[(7)] = inst_34472);

return statearr_34477;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34475__$1,inst_34473);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34478 = [null,null,null,null,null,null,null,null];
(statearr_34478[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34478[(1)] = (1));

return statearr_34478;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34475){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34475);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34479){if((e34479 instanceof Object)){
var ex__34210__auto__ = e34479;
var statearr_34480_36896 = state_34475;
(statearr_34480_36896[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34479;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36897 = state_34475;
state_34475 = G__36897;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34475){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_34481 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_34481[(6)] = c__34276__auto___36892);

return statearr_34481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34482){
var vec__34483 = p__34482;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34483,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34483,(1),null);
var job = vec__34483;
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
var n__4666__auto___36900 = n;
var __36902 = (0);
while(true){
if((__36902 < n__4666__auto___36900)){
var G__34489_36903 = type;
var G__34489_36904__$1 = (((G__34489_36903 instanceof cljs.core.Keyword))?G__34489_36903.fqn:null);
switch (G__34489_36904__$1) {
case "compute":
var c__34276__auto___36906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36902,c__34276__auto___36906,G__34489_36903,G__34489_36904__$1,n__4666__auto___36900,jobs,results,process,async){
return (function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = ((function (__36902,c__34276__auto___36906,G__34489_36903,G__34489_36904__$1,n__4666__auto___36900,jobs,results,process,async){
return (function (state_34502){
var state_val_34503 = (state_34502[(1)]);
if((state_val_34503 === (1))){
var state_34502__$1 = state_34502;
var statearr_34504_36908 = state_34502__$1;
(statearr_34504_36908[(2)] = null);

(statearr_34504_36908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (2))){
var state_34502__$1 = state_34502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34502__$1,(4),jobs);
} else {
if((state_val_34503 === (3))){
var inst_34500 = (state_34502[(2)]);
var state_34502__$1 = state_34502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34502__$1,inst_34500);
} else {
if((state_val_34503 === (4))){
var inst_34492 = (state_34502[(2)]);
var inst_34493 = process(inst_34492);
var state_34502__$1 = state_34502;
if(cljs.core.truth_(inst_34493)){
var statearr_34505_36910 = state_34502__$1;
(statearr_34505_36910[(1)] = (5));

} else {
var statearr_34506_36912 = state_34502__$1;
(statearr_34506_36912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (5))){
var state_34502__$1 = state_34502;
var statearr_34507_36913 = state_34502__$1;
(statearr_34507_36913[(2)] = null);

(statearr_34507_36913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (6))){
var state_34502__$1 = state_34502;
var statearr_34508_36914 = state_34502__$1;
(statearr_34508_36914[(2)] = null);

(statearr_34508_36914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34503 === (7))){
var inst_34498 = (state_34502[(2)]);
var state_34502__$1 = state_34502;
var statearr_34509_36916 = state_34502__$1;
(statearr_34509_36916[(2)] = inst_34498);

(statearr_34509_36916[(1)] = (3));


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
});})(__36902,c__34276__auto___36906,G__34489_36903,G__34489_36904__$1,n__4666__auto___36900,jobs,results,process,async))
;
return ((function (__36902,switch__34206__auto__,c__34276__auto___36906,G__34489_36903,G__34489_36904__$1,n__4666__auto___36900,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34510 = [null,null,null,null,null,null,null];
(statearr_34510[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34510[(1)] = (1));

return statearr_34510;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34502){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34502);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34511){if((e34511 instanceof Object)){
var ex__34210__auto__ = e34511;
var statearr_34512_36919 = state_34502;
(statearr_34512_36919[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34511;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36920 = state_34502;
state_34502 = G__36920;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34502){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36902,switch__34206__auto__,c__34276__auto___36906,G__34489_36903,G__34489_36904__$1,n__4666__auto___36900,jobs,results,process,async))
})();
var state__34278__auto__ = (function (){var statearr_34513 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_34513[(6)] = c__34276__auto___36906);

return statearr_34513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
});})(__36902,c__34276__auto___36906,G__34489_36903,G__34489_36904__$1,n__4666__auto___36900,jobs,results,process,async))
);


break;
case "async":
var c__34276__auto___36922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36902,c__34276__auto___36922,G__34489_36903,G__34489_36904__$1,n__4666__auto___36900,jobs,results,process,async){
return (function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = ((function (__36902,c__34276__auto___36922,G__34489_36903,G__34489_36904__$1,n__4666__auto___36900,jobs,results,process,async){
return (function (state_34526){
var state_val_34527 = (state_34526[(1)]);
if((state_val_34527 === (1))){
var state_34526__$1 = state_34526;
var statearr_34528_36924 = state_34526__$1;
(statearr_34528_36924[(2)] = null);

(statearr_34528_36924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (2))){
var state_34526__$1 = state_34526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34526__$1,(4),jobs);
} else {
if((state_val_34527 === (3))){
var inst_34524 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34526__$1,inst_34524);
} else {
if((state_val_34527 === (4))){
var inst_34516 = (state_34526[(2)]);
var inst_34517 = async(inst_34516);
var state_34526__$1 = state_34526;
if(cljs.core.truth_(inst_34517)){
var statearr_34529_36927 = state_34526__$1;
(statearr_34529_36927[(1)] = (5));

} else {
var statearr_34530_36928 = state_34526__$1;
(statearr_34530_36928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (5))){
var state_34526__$1 = state_34526;
var statearr_34531_36929 = state_34526__$1;
(statearr_34531_36929[(2)] = null);

(statearr_34531_36929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (6))){
var state_34526__$1 = state_34526;
var statearr_34532_36931 = state_34526__$1;
(statearr_34532_36931[(2)] = null);

(statearr_34532_36931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34527 === (7))){
var inst_34522 = (state_34526[(2)]);
var state_34526__$1 = state_34526;
var statearr_34533_36932 = state_34526__$1;
(statearr_34533_36932[(2)] = inst_34522);

(statearr_34533_36932[(1)] = (3));


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
});})(__36902,c__34276__auto___36922,G__34489_36903,G__34489_36904__$1,n__4666__auto___36900,jobs,results,process,async))
;
return ((function (__36902,switch__34206__auto__,c__34276__auto___36922,G__34489_36903,G__34489_36904__$1,n__4666__auto___36900,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34534 = [null,null,null,null,null,null,null];
(statearr_34534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34534[(1)] = (1));

return statearr_34534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34526){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34526);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34535){if((e34535 instanceof Object)){
var ex__34210__auto__ = e34535;
var statearr_34536_36935 = state_34526;
(statearr_34536_36935[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36936 = state_34526;
state_34526 = G__36936;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36902,switch__34206__auto__,c__34276__auto___36922,G__34489_36903,G__34489_36904__$1,n__4666__auto___36900,jobs,results,process,async))
})();
var state__34278__auto__ = (function (){var statearr_34537 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_34537[(6)] = c__34276__auto___36922);

return statearr_34537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
});})(__36902,c__34276__auto___36922,G__34489_36903,G__34489_36904__$1,n__4666__auto___36900,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34489_36904__$1)].join('')));

}

var G__36938 = (__36902 + (1));
__36902 = G__36938;
continue;
} else {
}
break;
}

var c__34276__auto___36940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_34559){
var state_val_34560 = (state_34559[(1)]);
if((state_val_34560 === (7))){
var inst_34555 = (state_34559[(2)]);
var state_34559__$1 = state_34559;
var statearr_34561_36941 = state_34559__$1;
(statearr_34561_36941[(2)] = inst_34555);

(statearr_34561_36941[(1)] = (3));


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
var statearr_34568_36949 = state_34559__$1;
(statearr_34568_36949[(2)] = null);

(statearr_34568_36949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34560 === (5))){
var inst_34543 = cljs.core.async.close_BANG_(jobs);
var state_34559__$1 = state_34559;
var statearr_34569_36951 = state_34559__$1;
(statearr_34569_36951[(2)] = inst_34543);

(statearr_34569_36951[(1)] = (7));


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
var statearr_34573_36954 = state_34559;
(statearr_34573_36954[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36956 = state_34559;
state_34559 = G__36956;
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
var state__34278__auto__ = (function (){var statearr_34574 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_34574[(6)] = c__34276__auto___36940);

return statearr_34574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
}));


var c__34276__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_34615){
var state_val_34616 = (state_34615[(1)]);
if((state_val_34616 === (7))){
var inst_34611 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
var statearr_34620_36958 = state_34615__$1;
(statearr_34620_36958[(2)] = inst_34611);

(statearr_34620_36958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (20))){
var state_34615__$1 = state_34615;
var statearr_34621_36960 = state_34615__$1;
(statearr_34621_36960[(2)] = null);

(statearr_34621_36960[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (1))){
var state_34615__$1 = state_34615;
var statearr_34624_36961 = state_34615__$1;
(statearr_34624_36961[(2)] = null);

(statearr_34624_36961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (4))){
var inst_34577 = (state_34615[(7)]);
var inst_34577__$1 = (state_34615[(2)]);
var inst_34578 = (inst_34577__$1 == null);
var state_34615__$1 = (function (){var statearr_34625 = state_34615;
(statearr_34625[(7)] = inst_34577__$1);

return statearr_34625;
})();
if(cljs.core.truth_(inst_34578)){
var statearr_34626_36963 = state_34615__$1;
(statearr_34626_36963[(1)] = (5));

} else {
var statearr_34627_36964 = state_34615__$1;
(statearr_34627_36964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (15))){
var inst_34593 = (state_34615[(8)]);
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34615__$1,(18),to,inst_34593);
} else {
if((state_val_34616 === (21))){
var inst_34606 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
var statearr_34629_36966 = state_34615__$1;
(statearr_34629_36966[(2)] = inst_34606);

(statearr_34629_36966[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (13))){
var inst_34608 = (state_34615[(2)]);
var state_34615__$1 = (function (){var statearr_34630 = state_34615;
(statearr_34630[(9)] = inst_34608);

return statearr_34630;
})();
var statearr_34631_36967 = state_34615__$1;
(statearr_34631_36967[(2)] = null);

(statearr_34631_36967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (6))){
var inst_34577 = (state_34615[(7)]);
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34615__$1,(11),inst_34577);
} else {
if((state_val_34616 === (17))){
var inst_34601 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
if(cljs.core.truth_(inst_34601)){
var statearr_34634_36968 = state_34615__$1;
(statearr_34634_36968[(1)] = (19));

} else {
var statearr_34635_36969 = state_34615__$1;
(statearr_34635_36969[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (3))){
var inst_34613 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34615__$1,inst_34613);
} else {
if((state_val_34616 === (12))){
var inst_34587 = (state_34615[(10)]);
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34615__$1,(14),inst_34587);
} else {
if((state_val_34616 === (2))){
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34615__$1,(4),results);
} else {
if((state_val_34616 === (19))){
var state_34615__$1 = state_34615;
var statearr_34636_36977 = state_34615__$1;
(statearr_34636_36977[(2)] = null);

(statearr_34636_36977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (11))){
var inst_34587 = (state_34615[(2)]);
var state_34615__$1 = (function (){var statearr_34637 = state_34615;
(statearr_34637[(10)] = inst_34587);

return statearr_34637;
})();
var statearr_34638_36978 = state_34615__$1;
(statearr_34638_36978[(2)] = null);

(statearr_34638_36978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (9))){
var state_34615__$1 = state_34615;
var statearr_34639_36980 = state_34615__$1;
(statearr_34639_36980[(2)] = null);

(statearr_34639_36980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (5))){
var state_34615__$1 = state_34615;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34641_36981 = state_34615__$1;
(statearr_34641_36981[(1)] = (8));

} else {
var statearr_34642_36982 = state_34615__$1;
(statearr_34642_36982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (14))){
var inst_34593 = (state_34615[(8)]);
var inst_34593__$1 = (state_34615[(2)]);
var inst_34594 = (inst_34593__$1 == null);
var inst_34595 = cljs.core.not(inst_34594);
var state_34615__$1 = (function (){var statearr_34643 = state_34615;
(statearr_34643[(8)] = inst_34593__$1);

return statearr_34643;
})();
if(inst_34595){
var statearr_34645_36987 = state_34615__$1;
(statearr_34645_36987[(1)] = (15));

} else {
var statearr_34646_36988 = state_34615__$1;
(statearr_34646_36988[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (16))){
var state_34615__$1 = state_34615;
var statearr_34647_36989 = state_34615__$1;
(statearr_34647_36989[(2)] = false);

(statearr_34647_36989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (10))){
var inst_34584 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
var statearr_34648_36990 = state_34615__$1;
(statearr_34648_36990[(2)] = inst_34584);

(statearr_34648_36990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (18))){
var inst_34598 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
var statearr_34649_36992 = state_34615__$1;
(statearr_34649_36992[(2)] = inst_34598);

(statearr_34649_36992[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (8))){
var inst_34581 = cljs.core.async.close_BANG_(to);
var state_34615__$1 = state_34615;
var statearr_34652_36993 = state_34615__$1;
(statearr_34652_36993[(2)] = inst_34581);

(statearr_34652_36993[(1)] = (10));


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
var statearr_34653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34653[(1)] = (1));

return statearr_34653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34615){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34615);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34657){if((e34657 instanceof Object)){
var ex__34210__auto__ = e34657;
var statearr_34658_36994 = state_34615;
(statearr_34658_36994[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34657;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36995 = state_34615;
state_34615 = G__36995;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_34659 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_34659[(6)] = c__34276__auto__);

return statearr_34659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
}));

return c__34276__auto__;
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
var G__34661 = arguments.length;
switch (G__34661) {
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
var G__34664 = arguments.length;
switch (G__34664) {
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
var G__34672 = arguments.length;
switch (G__34672) {
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
var c__34276__auto___37005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_34701){
var state_val_34702 = (state_34701[(1)]);
if((state_val_34702 === (7))){
var inst_34697 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
var statearr_34703_37009 = state_34701__$1;
(statearr_34703_37009[(2)] = inst_34697);

(statearr_34703_37009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (1))){
var state_34701__$1 = state_34701;
var statearr_34704_37012 = state_34701__$1;
(statearr_34704_37012[(2)] = null);

(statearr_34704_37012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (4))){
var inst_34678 = (state_34701[(7)]);
var inst_34678__$1 = (state_34701[(2)]);
var inst_34679 = (inst_34678__$1 == null);
var state_34701__$1 = (function (){var statearr_34705 = state_34701;
(statearr_34705[(7)] = inst_34678__$1);

return statearr_34705;
})();
if(cljs.core.truth_(inst_34679)){
var statearr_34706_37014 = state_34701__$1;
(statearr_34706_37014[(1)] = (5));

} else {
var statearr_34707_37015 = state_34701__$1;
(statearr_34707_37015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (13))){
var state_34701__$1 = state_34701;
var statearr_34708_37016 = state_34701__$1;
(statearr_34708_37016[(2)] = null);

(statearr_34708_37016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (6))){
var inst_34678 = (state_34701[(7)]);
var inst_34684 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34678) : p.call(null,inst_34678));
var state_34701__$1 = state_34701;
if(cljs.core.truth_(inst_34684)){
var statearr_34709_37021 = state_34701__$1;
(statearr_34709_37021[(1)] = (9));

} else {
var statearr_34710_37022 = state_34701__$1;
(statearr_34710_37022[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (3))){
var inst_34699 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34701__$1,inst_34699);
} else {
if((state_val_34702 === (12))){
var state_34701__$1 = state_34701;
var statearr_34711_37025 = state_34701__$1;
(statearr_34711_37025[(2)] = null);

(statearr_34711_37025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (2))){
var state_34701__$1 = state_34701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34701__$1,(4),ch);
} else {
if((state_val_34702 === (11))){
var inst_34678 = (state_34701[(7)]);
var inst_34688 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34701__$1,(8),inst_34688,inst_34678);
} else {
if((state_val_34702 === (9))){
var state_34701__$1 = state_34701;
var statearr_34712_37031 = state_34701__$1;
(statearr_34712_37031[(2)] = tc);

(statearr_34712_37031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (5))){
var inst_34681 = cljs.core.async.close_BANG_(tc);
var inst_34682 = cljs.core.async.close_BANG_(fc);
var state_34701__$1 = (function (){var statearr_34713 = state_34701;
(statearr_34713[(8)] = inst_34681);

return statearr_34713;
})();
var statearr_34714_37035 = state_34701__$1;
(statearr_34714_37035[(2)] = inst_34682);

(statearr_34714_37035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (14))){
var inst_34695 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
var statearr_34715_37040 = state_34701__$1;
(statearr_34715_37040[(2)] = inst_34695);

(statearr_34715_37040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (10))){
var state_34701__$1 = state_34701;
var statearr_34716_37044 = state_34701__$1;
(statearr_34716_37044[(2)] = fc);

(statearr_34716_37044[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34702 === (8))){
var inst_34690 = (state_34701[(2)]);
var state_34701__$1 = state_34701;
if(cljs.core.truth_(inst_34690)){
var statearr_34717_37050 = state_34701__$1;
(statearr_34717_37050[(1)] = (12));

} else {
var statearr_34718_37051 = state_34701__$1;
(statearr_34718_37051[(1)] = (13));

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
var statearr_34719 = [null,null,null,null,null,null,null,null,null];
(statearr_34719[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34719[(1)] = (1));

return statearr_34719;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34701){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34701);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34720){if((e34720 instanceof Object)){
var ex__34210__auto__ = e34720;
var statearr_34721_37056 = state_34701;
(statearr_34721_37056[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37062 = state_34701;
state_34701 = G__37062;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_34725 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_34725[(6)] = c__34276__auto___37005);

return statearr_34725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
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
var c__34276__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_34750){
var state_val_34751 = (state_34750[(1)]);
if((state_val_34751 === (7))){
var inst_34746 = (state_34750[(2)]);
var state_34750__$1 = state_34750;
var statearr_34753_37069 = state_34750__$1;
(statearr_34753_37069[(2)] = inst_34746);

(statearr_34753_37069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34751 === (1))){
var inst_34730 = init;
var state_34750__$1 = (function (){var statearr_34755 = state_34750;
(statearr_34755[(7)] = inst_34730);

return statearr_34755;
})();
var statearr_34757_37076 = state_34750__$1;
(statearr_34757_37076[(2)] = null);

(statearr_34757_37076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34751 === (4))){
var inst_34733 = (state_34750[(8)]);
var inst_34733__$1 = (state_34750[(2)]);
var inst_34734 = (inst_34733__$1 == null);
var state_34750__$1 = (function (){var statearr_34760 = state_34750;
(statearr_34760[(8)] = inst_34733__$1);

return statearr_34760;
})();
if(cljs.core.truth_(inst_34734)){
var statearr_34762_37082 = state_34750__$1;
(statearr_34762_37082[(1)] = (5));

} else {
var statearr_34763_37083 = state_34750__$1;
(statearr_34763_37083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34751 === (6))){
var inst_34730 = (state_34750[(7)]);
var inst_34737 = (state_34750[(9)]);
var inst_34733 = (state_34750[(8)]);
var inst_34737__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34730,inst_34733) : f.call(null,inst_34730,inst_34733));
var inst_34738 = cljs.core.reduced_QMARK_(inst_34737__$1);
var state_34750__$1 = (function (){var statearr_34764 = state_34750;
(statearr_34764[(9)] = inst_34737__$1);

return statearr_34764;
})();
if(inst_34738){
var statearr_34765_37088 = state_34750__$1;
(statearr_34765_37088[(1)] = (8));

} else {
var statearr_34766_37089 = state_34750__$1;
(statearr_34766_37089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34751 === (3))){
var inst_34748 = (state_34750[(2)]);
var state_34750__$1 = state_34750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34750__$1,inst_34748);
} else {
if((state_val_34751 === (2))){
var state_34750__$1 = state_34750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34750__$1,(4),ch);
} else {
if((state_val_34751 === (9))){
var inst_34737 = (state_34750[(9)]);
var inst_34730 = inst_34737;
var state_34750__$1 = (function (){var statearr_34767 = state_34750;
(statearr_34767[(7)] = inst_34730);

return statearr_34767;
})();
var statearr_34768_37094 = state_34750__$1;
(statearr_34768_37094[(2)] = null);

(statearr_34768_37094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34751 === (5))){
var inst_34730 = (state_34750[(7)]);
var state_34750__$1 = state_34750;
var statearr_34769_37100 = state_34750__$1;
(statearr_34769_37100[(2)] = inst_34730);

(statearr_34769_37100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34751 === (10))){
var inst_34744 = (state_34750[(2)]);
var state_34750__$1 = state_34750;
var statearr_34770_37101 = state_34750__$1;
(statearr_34770_37101[(2)] = inst_34744);

(statearr_34770_37101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34751 === (8))){
var inst_34737 = (state_34750[(9)]);
var inst_34740 = cljs.core.deref(inst_34737);
var state_34750__$1 = state_34750;
var statearr_34771_37104 = state_34750__$1;
(statearr_34771_37104[(2)] = inst_34740);

(statearr_34771_37104[(1)] = (10));


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
var statearr_34775 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34775[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34775[(1)] = (1));

return statearr_34775;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34750){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34750);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34776){if((e34776 instanceof Object)){
var ex__34210__auto__ = e34776;
var statearr_34777_37112 = state_34750;
(statearr_34777_37112[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34776;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37114 = state_34750;
state_34750 = G__37114;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34750){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_34781 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_34781[(6)] = c__34276__auto__);

return statearr_34781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
}));

return c__34276__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34276__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_34787){
var state_val_34788 = (state_34787[(1)]);
if((state_val_34788 === (1))){
var inst_34782 = cljs.core.async.reduce(f__$1,init,ch);
var state_34787__$1 = state_34787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34787__$1,(2),inst_34782);
} else {
if((state_val_34788 === (2))){
var inst_34784 = (state_34787[(2)]);
var inst_34785 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34784) : f__$1.call(null,inst_34784));
var state_34787__$1 = state_34787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34787__$1,inst_34785);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34789 = [null,null,null,null,null,null,null];
(statearr_34789[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34789[(1)] = (1));

return statearr_34789;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34787){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34787);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34790){if((e34790 instanceof Object)){
var ex__34210__auto__ = e34790;
var statearr_34791_37128 = state_34787;
(statearr_34791_37128[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34790;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37131 = state_34787;
state_34787 = G__37131;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34787){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_34792 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_34792[(6)] = c__34276__auto__);

return statearr_34792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
}));

return c__34276__auto__;
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
var G__34794 = arguments.length;
switch (G__34794) {
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
var c__34276__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_34819){
var state_val_34820 = (state_34819[(1)]);
if((state_val_34820 === (7))){
var inst_34801 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34821_37140 = state_34819__$1;
(statearr_34821_37140[(2)] = inst_34801);

(statearr_34821_37140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (1))){
var inst_34795 = cljs.core.seq(coll);
var inst_34796 = inst_34795;
var state_34819__$1 = (function (){var statearr_34822 = state_34819;
(statearr_34822[(7)] = inst_34796);

return statearr_34822;
})();
var statearr_34823_37145 = state_34819__$1;
(statearr_34823_37145[(2)] = null);

(statearr_34823_37145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (4))){
var inst_34796 = (state_34819[(7)]);
var inst_34799 = cljs.core.first(inst_34796);
var state_34819__$1 = state_34819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34819__$1,(7),ch,inst_34799);
} else {
if((state_val_34820 === (13))){
var inst_34813 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34824_37148 = state_34819__$1;
(statearr_34824_37148[(2)] = inst_34813);

(statearr_34824_37148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (6))){
var inst_34804 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
if(cljs.core.truth_(inst_34804)){
var statearr_34825_37151 = state_34819__$1;
(statearr_34825_37151[(1)] = (8));

} else {
var statearr_34826_37152 = state_34819__$1;
(statearr_34826_37152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (3))){
var inst_34817 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34819__$1,inst_34817);
} else {
if((state_val_34820 === (12))){
var state_34819__$1 = state_34819;
var statearr_34827_37154 = state_34819__$1;
(statearr_34827_37154[(2)] = null);

(statearr_34827_37154[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (2))){
var inst_34796 = (state_34819[(7)]);
var state_34819__$1 = state_34819;
if(cljs.core.truth_(inst_34796)){
var statearr_34828_37157 = state_34819__$1;
(statearr_34828_37157[(1)] = (4));

} else {
var statearr_34829_37158 = state_34819__$1;
(statearr_34829_37158[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (11))){
var inst_34810 = cljs.core.async.close_BANG_(ch);
var state_34819__$1 = state_34819;
var statearr_34830_37164 = state_34819__$1;
(statearr_34830_37164[(2)] = inst_34810);

(statearr_34830_37164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (9))){
var state_34819__$1 = state_34819;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34831_37168 = state_34819__$1;
(statearr_34831_37168[(1)] = (11));

} else {
var statearr_34832_37169 = state_34819__$1;
(statearr_34832_37169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (5))){
var inst_34796 = (state_34819[(7)]);
var state_34819__$1 = state_34819;
var statearr_34833_37170 = state_34819__$1;
(statearr_34833_37170[(2)] = inst_34796);

(statearr_34833_37170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (10))){
var inst_34815 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34834_37171 = state_34819__$1;
(statearr_34834_37171[(2)] = inst_34815);

(statearr_34834_37171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (8))){
var inst_34796 = (state_34819[(7)]);
var inst_34806 = cljs.core.next(inst_34796);
var inst_34796__$1 = inst_34806;
var state_34819__$1 = (function (){var statearr_34835 = state_34819;
(statearr_34835[(7)] = inst_34796__$1);

return statearr_34835;
})();
var statearr_34836_37173 = state_34819__$1;
(statearr_34836_37173[(2)] = null);

(statearr_34836_37173[(1)] = (2));


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
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34819){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34819);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__34210__auto__ = e34838;
var statearr_34839_37180 = state_34819;
(statearr_34839_37180[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37184 = state_34819;
state_34819 = G__37184;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_34840 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_34840[(6)] = c__34276__auto__);

return statearr_34840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
}));

return c__34276__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34857 = (function (ch,cs,meta34858){
this.ch = ch;
this.cs = cs;
this.meta34858 = meta34858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34859,meta34858__$1){
var self__ = this;
var _34859__$1 = this;
return (new cljs.core.async.t_cljs$core$async34857(self__.ch,self__.cs,meta34858__$1));
}));

(cljs.core.async.t_cljs$core$async34857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34859){
var self__ = this;
var _34859__$1 = this;
return self__.meta34858;
}));

(cljs.core.async.t_cljs$core$async34857.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34857.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34857.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34857.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34857.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34857.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34858","meta34858",1131857569,null)], null);
}));

(cljs.core.async.t_cljs$core$async34857.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34857");

(cljs.core.async.t_cljs$core$async34857.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34857");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34857.
 */
cljs.core.async.__GT_t_cljs$core$async34857 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34857(ch__$1,cs__$1,meta34858){
return (new cljs.core.async.t_cljs$core$async34857(ch__$1,cs__$1,meta34858));
});

}

return (new cljs.core.async.t_cljs$core$async34857(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34276__auto___37232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_35026){
var state_val_35027 = (state_35026[(1)]);
if((state_val_35027 === (7))){
var inst_35021 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
var statearr_35035_37234 = state_35026__$1;
(statearr_35035_37234[(2)] = inst_35021);

(statearr_35035_37234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (20))){
var inst_34905 = (state_35026[(7)]);
var inst_34917 = cljs.core.first(inst_34905);
var inst_34918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34917,(0),null);
var inst_34921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34917,(1),null);
var state_35026__$1 = (function (){var statearr_35040 = state_35026;
(statearr_35040[(8)] = inst_34918);

return statearr_35040;
})();
if(cljs.core.truth_(inst_34921)){
var statearr_35043_37239 = state_35026__$1;
(statearr_35043_37239[(1)] = (22));

} else {
var statearr_35045_37240 = state_35026__$1;
(statearr_35045_37240[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (27))){
var inst_34962 = (state_35026[(9)]);
var inst_34969 = (state_35026[(10)]);
var inst_34870 = (state_35026[(11)]);
var inst_34964 = (state_35026[(12)]);
var inst_34969__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34962,inst_34964);
var inst_34970 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34969__$1,inst_34870,done);
var state_35026__$1 = (function (){var statearr_35056 = state_35026;
(statearr_35056[(10)] = inst_34969__$1);

return statearr_35056;
})();
if(cljs.core.truth_(inst_34970)){
var statearr_35059_37245 = state_35026__$1;
(statearr_35059_37245[(1)] = (30));

} else {
var statearr_35060_37247 = state_35026__$1;
(statearr_35060_37247[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (1))){
var state_35026__$1 = state_35026;
var statearr_35065_37248 = state_35026__$1;
(statearr_35065_37248[(2)] = null);

(statearr_35065_37248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (24))){
var inst_34905 = (state_35026[(7)]);
var inst_34936 = (state_35026[(2)]);
var inst_34937 = cljs.core.next(inst_34905);
var inst_34880 = inst_34937;
var inst_34881 = null;
var inst_34882 = (0);
var inst_34883 = (0);
var state_35026__$1 = (function (){var statearr_35073 = state_35026;
(statearr_35073[(13)] = inst_34883);

(statearr_35073[(14)] = inst_34881);

(statearr_35073[(15)] = inst_34882);

(statearr_35073[(16)] = inst_34936);

(statearr_35073[(17)] = inst_34880);

return statearr_35073;
})();
var statearr_35077_37256 = state_35026__$1;
(statearr_35077_37256[(2)] = null);

(statearr_35077_37256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (39))){
var state_35026__$1 = state_35026;
var statearr_35092_37258 = state_35026__$1;
(statearr_35092_37258[(2)] = null);

(statearr_35092_37258[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (4))){
var inst_34870 = (state_35026[(11)]);
var inst_34870__$1 = (state_35026[(2)]);
var inst_34871 = (inst_34870__$1 == null);
var state_35026__$1 = (function (){var statearr_35101 = state_35026;
(statearr_35101[(11)] = inst_34870__$1);

return statearr_35101;
})();
if(cljs.core.truth_(inst_34871)){
var statearr_35104_37263 = state_35026__$1;
(statearr_35104_37263[(1)] = (5));

} else {
var statearr_35107_37264 = state_35026__$1;
(statearr_35107_37264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (15))){
var inst_34883 = (state_35026[(13)]);
var inst_34881 = (state_35026[(14)]);
var inst_34882 = (state_35026[(15)]);
var inst_34880 = (state_35026[(17)]);
var inst_34901 = (state_35026[(2)]);
var inst_34902 = (inst_34883 + (1));
var tmp35083 = inst_34881;
var tmp35084 = inst_34882;
var tmp35085 = inst_34880;
var inst_34880__$1 = tmp35085;
var inst_34881__$1 = tmp35083;
var inst_34882__$1 = tmp35084;
var inst_34883__$1 = inst_34902;
var state_35026__$1 = (function (){var statearr_35115 = state_35026;
(statearr_35115[(18)] = inst_34901);

(statearr_35115[(13)] = inst_34883__$1);

(statearr_35115[(14)] = inst_34881__$1);

(statearr_35115[(15)] = inst_34882__$1);

(statearr_35115[(17)] = inst_34880__$1);

return statearr_35115;
})();
var statearr_35120_37273 = state_35026__$1;
(statearr_35120_37273[(2)] = null);

(statearr_35120_37273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (21))){
var inst_34940 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
var statearr_35127_37277 = state_35026__$1;
(statearr_35127_37277[(2)] = inst_34940);

(statearr_35127_37277[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (31))){
var inst_34969 = (state_35026[(10)]);
var inst_34973 = done(null);
var inst_34974 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34969);
var state_35026__$1 = (function (){var statearr_35128 = state_35026;
(statearr_35128[(19)] = inst_34973);

return statearr_35128;
})();
var statearr_35129_37282 = state_35026__$1;
(statearr_35129_37282[(2)] = inst_34974);

(statearr_35129_37282[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (32))){
var inst_34962 = (state_35026[(9)]);
var inst_34964 = (state_35026[(12)]);
var inst_34961 = (state_35026[(20)]);
var inst_34963 = (state_35026[(21)]);
var inst_34976 = (state_35026[(2)]);
var inst_34977 = (inst_34964 + (1));
var tmp35124 = inst_34962;
var tmp35125 = inst_34961;
var tmp35126 = inst_34963;
var inst_34961__$1 = tmp35125;
var inst_34962__$1 = tmp35124;
var inst_34963__$1 = tmp35126;
var inst_34964__$1 = inst_34977;
var state_35026__$1 = (function (){var statearr_35130 = state_35026;
(statearr_35130[(9)] = inst_34962__$1);

(statearr_35130[(12)] = inst_34964__$1);

(statearr_35130[(22)] = inst_34976);

(statearr_35130[(20)] = inst_34961__$1);

(statearr_35130[(21)] = inst_34963__$1);

return statearr_35130;
})();
var statearr_35131_37289 = state_35026__$1;
(statearr_35131_37289[(2)] = null);

(statearr_35131_37289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (40))){
var inst_34993 = (state_35026[(23)]);
var inst_34997 = done(null);
var inst_34998 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34993);
var state_35026__$1 = (function (){var statearr_35134 = state_35026;
(statearr_35134[(24)] = inst_34997);

return statearr_35134;
})();
var statearr_35135_37292 = state_35026__$1;
(statearr_35135_37292[(2)] = inst_34998);

(statearr_35135_37292[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (33))){
var inst_34980 = (state_35026[(25)]);
var inst_34984 = cljs.core.chunked_seq_QMARK_(inst_34980);
var state_35026__$1 = state_35026;
if(inst_34984){
var statearr_35136_37294 = state_35026__$1;
(statearr_35136_37294[(1)] = (36));

} else {
var statearr_35139_37295 = state_35026__$1;
(statearr_35139_37295[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (13))){
var inst_34895 = (state_35026[(26)]);
var inst_34898 = cljs.core.async.close_BANG_(inst_34895);
var state_35026__$1 = state_35026;
var statearr_35140_37296 = state_35026__$1;
(statearr_35140_37296[(2)] = inst_34898);

(statearr_35140_37296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (22))){
var inst_34918 = (state_35026[(8)]);
var inst_34933 = cljs.core.async.close_BANG_(inst_34918);
var state_35026__$1 = state_35026;
var statearr_35141_37297 = state_35026__$1;
(statearr_35141_37297[(2)] = inst_34933);

(statearr_35141_37297[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (36))){
var inst_34980 = (state_35026[(25)]);
var inst_34986 = cljs.core.chunk_first(inst_34980);
var inst_34988 = cljs.core.chunk_rest(inst_34980);
var inst_34990 = cljs.core.count(inst_34986);
var inst_34961 = inst_34988;
var inst_34962 = inst_34986;
var inst_34963 = inst_34990;
var inst_34964 = (0);
var state_35026__$1 = (function (){var statearr_35163 = state_35026;
(statearr_35163[(9)] = inst_34962);

(statearr_35163[(12)] = inst_34964);

(statearr_35163[(20)] = inst_34961);

(statearr_35163[(21)] = inst_34963);

return statearr_35163;
})();
var statearr_35166_37303 = state_35026__$1;
(statearr_35166_37303[(2)] = null);

(statearr_35166_37303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (41))){
var inst_34980 = (state_35026[(25)]);
var inst_35000 = (state_35026[(2)]);
var inst_35001 = cljs.core.next(inst_34980);
var inst_34961 = inst_35001;
var inst_34962 = null;
var inst_34963 = (0);
var inst_34964 = (0);
var state_35026__$1 = (function (){var statearr_35168 = state_35026;
(statearr_35168[(9)] = inst_34962);

(statearr_35168[(12)] = inst_34964);

(statearr_35168[(27)] = inst_35000);

(statearr_35168[(20)] = inst_34961);

(statearr_35168[(21)] = inst_34963);

return statearr_35168;
})();
var statearr_35170_37305 = state_35026__$1;
(statearr_35170_37305[(2)] = null);

(statearr_35170_37305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (43))){
var state_35026__$1 = state_35026;
var statearr_35173_37306 = state_35026__$1;
(statearr_35173_37306[(2)] = null);

(statearr_35173_37306[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (29))){
var inst_35009 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
var statearr_35174_37307 = state_35026__$1;
(statearr_35174_37307[(2)] = inst_35009);

(statearr_35174_37307[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (44))){
var inst_35018 = (state_35026[(2)]);
var state_35026__$1 = (function (){var statearr_35176 = state_35026;
(statearr_35176[(28)] = inst_35018);

return statearr_35176;
})();
var statearr_35180_37311 = state_35026__$1;
(statearr_35180_37311[(2)] = null);

(statearr_35180_37311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (6))){
var inst_34951 = (state_35026[(29)]);
var inst_34950 = cljs.core.deref(cs);
var inst_34951__$1 = cljs.core.keys(inst_34950);
var inst_34953 = cljs.core.count(inst_34951__$1);
var inst_34954 = cljs.core.reset_BANG_(dctr,inst_34953);
var inst_34960 = cljs.core.seq(inst_34951__$1);
var inst_34961 = inst_34960;
var inst_34962 = null;
var inst_34963 = (0);
var inst_34964 = (0);
var state_35026__$1 = (function (){var statearr_35187 = state_35026;
(statearr_35187[(29)] = inst_34951__$1);

(statearr_35187[(9)] = inst_34962);

(statearr_35187[(12)] = inst_34964);

(statearr_35187[(30)] = inst_34954);

(statearr_35187[(20)] = inst_34961);

(statearr_35187[(21)] = inst_34963);

return statearr_35187;
})();
var statearr_35191_37318 = state_35026__$1;
(statearr_35191_37318[(2)] = null);

(statearr_35191_37318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (28))){
var inst_34980 = (state_35026[(25)]);
var inst_34961 = (state_35026[(20)]);
var inst_34980__$1 = cljs.core.seq(inst_34961);
var state_35026__$1 = (function (){var statearr_35199 = state_35026;
(statearr_35199[(25)] = inst_34980__$1);

return statearr_35199;
})();
if(inst_34980__$1){
var statearr_35202_37323 = state_35026__$1;
(statearr_35202_37323[(1)] = (33));

} else {
var statearr_35208_37324 = state_35026__$1;
(statearr_35208_37324[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (25))){
var inst_34964 = (state_35026[(12)]);
var inst_34963 = (state_35026[(21)]);
var inst_34966 = (inst_34964 < inst_34963);
var inst_34967 = inst_34966;
var state_35026__$1 = state_35026;
if(cljs.core.truth_(inst_34967)){
var statearr_35210_37328 = state_35026__$1;
(statearr_35210_37328[(1)] = (27));

} else {
var statearr_35216_37331 = state_35026__$1;
(statearr_35216_37331[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (34))){
var state_35026__$1 = state_35026;
var statearr_35219_37334 = state_35026__$1;
(statearr_35219_37334[(2)] = null);

(statearr_35219_37334[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (17))){
var state_35026__$1 = state_35026;
var statearr_35220_37339 = state_35026__$1;
(statearr_35220_37339[(2)] = null);

(statearr_35220_37339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (3))){
var inst_35023 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35026__$1,inst_35023);
} else {
if((state_val_35027 === (12))){
var inst_34945 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
var statearr_35226_37342 = state_35026__$1;
(statearr_35226_37342[(2)] = inst_34945);

(statearr_35226_37342[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (2))){
var state_35026__$1 = state_35026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35026__$1,(4),ch);
} else {
if((state_val_35027 === (23))){
var state_35026__$1 = state_35026;
var statearr_35233_37345 = state_35026__$1;
(statearr_35233_37345[(2)] = null);

(statearr_35233_37345[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (35))){
var inst_35007 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
var statearr_35239_37348 = state_35026__$1;
(statearr_35239_37348[(2)] = inst_35007);

(statearr_35239_37348[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (19))){
var inst_34905 = (state_35026[(7)]);
var inst_34909 = cljs.core.chunk_first(inst_34905);
var inst_34910 = cljs.core.chunk_rest(inst_34905);
var inst_34911 = cljs.core.count(inst_34909);
var inst_34880 = inst_34910;
var inst_34881 = inst_34909;
var inst_34882 = inst_34911;
var inst_34883 = (0);
var state_35026__$1 = (function (){var statearr_35246 = state_35026;
(statearr_35246[(13)] = inst_34883);

(statearr_35246[(14)] = inst_34881);

(statearr_35246[(15)] = inst_34882);

(statearr_35246[(17)] = inst_34880);

return statearr_35246;
})();
var statearr_35252_37356 = state_35026__$1;
(statearr_35252_37356[(2)] = null);

(statearr_35252_37356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (11))){
var inst_34905 = (state_35026[(7)]);
var inst_34880 = (state_35026[(17)]);
var inst_34905__$1 = cljs.core.seq(inst_34880);
var state_35026__$1 = (function (){var statearr_35259 = state_35026;
(statearr_35259[(7)] = inst_34905__$1);

return statearr_35259;
})();
if(inst_34905__$1){
var statearr_35262_37359 = state_35026__$1;
(statearr_35262_37359[(1)] = (16));

} else {
var statearr_35263_37361 = state_35026__$1;
(statearr_35263_37361[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (9))){
var inst_34947 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
var statearr_35269_37365 = state_35026__$1;
(statearr_35269_37365[(2)] = inst_34947);

(statearr_35269_37365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (5))){
var inst_34878 = cljs.core.deref(cs);
var inst_34879 = cljs.core.seq(inst_34878);
var inst_34880 = inst_34879;
var inst_34881 = null;
var inst_34882 = (0);
var inst_34883 = (0);
var state_35026__$1 = (function (){var statearr_35276 = state_35026;
(statearr_35276[(13)] = inst_34883);

(statearr_35276[(14)] = inst_34881);

(statearr_35276[(15)] = inst_34882);

(statearr_35276[(17)] = inst_34880);

return statearr_35276;
})();
var statearr_35279_37375 = state_35026__$1;
(statearr_35279_37375[(2)] = null);

(statearr_35279_37375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (14))){
var state_35026__$1 = state_35026;
var statearr_35284_37376 = state_35026__$1;
(statearr_35284_37376[(2)] = null);

(statearr_35284_37376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (45))){
var inst_35015 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
var statearr_35290_37379 = state_35026__$1;
(statearr_35290_37379[(2)] = inst_35015);

(statearr_35290_37379[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (26))){
var inst_34951 = (state_35026[(29)]);
var inst_35011 = (state_35026[(2)]);
var inst_35012 = cljs.core.seq(inst_34951);
var state_35026__$1 = (function (){var statearr_35297 = state_35026;
(statearr_35297[(31)] = inst_35011);

return statearr_35297;
})();
if(inst_35012){
var statearr_35299_37382 = state_35026__$1;
(statearr_35299_37382[(1)] = (42));

} else {
var statearr_35302_37383 = state_35026__$1;
(statearr_35302_37383[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (16))){
var inst_34905 = (state_35026[(7)]);
var inst_34907 = cljs.core.chunked_seq_QMARK_(inst_34905);
var state_35026__$1 = state_35026;
if(inst_34907){
var statearr_35309_37385 = state_35026__$1;
(statearr_35309_37385[(1)] = (19));

} else {
var statearr_35311_37387 = state_35026__$1;
(statearr_35311_37387[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (38))){
var inst_35004 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
var statearr_35317_37390 = state_35026__$1;
(statearr_35317_37390[(2)] = inst_35004);

(statearr_35317_37390[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (30))){
var state_35026__$1 = state_35026;
var statearr_35323_37394 = state_35026__$1;
(statearr_35323_37394[(2)] = null);

(statearr_35323_37394[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (10))){
var inst_34883 = (state_35026[(13)]);
var inst_34881 = (state_35026[(14)]);
var inst_34893 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34881,inst_34883);
var inst_34895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34893,(0),null);
var inst_34896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34893,(1),null);
var state_35026__$1 = (function (){var statearr_35331 = state_35026;
(statearr_35331[(26)] = inst_34895);

return statearr_35331;
})();
if(cljs.core.truth_(inst_34896)){
var statearr_35334_37401 = state_35026__$1;
(statearr_35334_37401[(1)] = (13));

} else {
var statearr_35339_37403 = state_35026__$1;
(statearr_35339_37403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (18))){
var inst_34943 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
var statearr_35344_37405 = state_35026__$1;
(statearr_35344_37405[(2)] = inst_34943);

(statearr_35344_37405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (42))){
var state_35026__$1 = state_35026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35026__$1,(45),dchan);
} else {
if((state_val_35027 === (37))){
var inst_34870 = (state_35026[(11)]);
var inst_34980 = (state_35026[(25)]);
var inst_34993 = (state_35026[(23)]);
var inst_34993__$1 = cljs.core.first(inst_34980);
var inst_34994 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34993__$1,inst_34870,done);
var state_35026__$1 = (function (){var statearr_35348 = state_35026;
(statearr_35348[(23)] = inst_34993__$1);

return statearr_35348;
})();
if(cljs.core.truth_(inst_34994)){
var statearr_35349_37409 = state_35026__$1;
(statearr_35349_37409[(1)] = (39));

} else {
var statearr_35350_37411 = state_35026__$1;
(statearr_35350_37411[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (8))){
var inst_34883 = (state_35026[(13)]);
var inst_34882 = (state_35026[(15)]);
var inst_34885 = (inst_34883 < inst_34882);
var inst_34886 = inst_34885;
var state_35026__$1 = state_35026;
if(cljs.core.truth_(inst_34886)){
var statearr_35351_37413 = state_35026__$1;
(statearr_35351_37413[(1)] = (10));

} else {
var statearr_35352_37414 = state_35026__$1;
(statearr_35352_37414[(1)] = (11));

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
var statearr_35353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35353[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35353[(1)] = (1));

return statearr_35353;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_35026){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35026);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35356){if((e35356 instanceof Object)){
var ex__34210__auto__ = e35356;
var statearr_35357_37423 = state_35026;
(statearr_35357_37423[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35356;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37426 = state_35026;
state_35026 = G__37426;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_35026){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_35026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_35358 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_35358[(6)] = c__34276__auto___37232);

return statearr_35358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
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
var G__35362 = arguments.length;
switch (G__35362) {
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35454){
var map__35456 = p__35454;
var map__35456__$1 = (((((!((map__35456 == null))))?(((((map__35456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35456):map__35456);
var opts = map__35456__$1;
var statearr_35463_37468 = state;
(statearr_35463_37468[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35473_37469 = state;
(statearr_35473_37469[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35478_37471 = state;
(statearr_35478_37471[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35444){
var G__35445 = cljs.core.first(seq35444);
var seq35444__$1 = cljs.core.next(seq35444);
var G__35446 = cljs.core.first(seq35444__$1);
var seq35444__$2 = cljs.core.next(seq35444__$1);
var G__35447 = cljs.core.first(seq35444__$2);
var seq35444__$3 = cljs.core.next(seq35444__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35445,G__35446,G__35447,seq35444__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35524 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35525){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35525 = meta35525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35526,meta35525__$1){
var self__ = this;
var _35526__$1 = this;
return (new cljs.core.async.t_cljs$core$async35524(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35525__$1));
}));

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35526){
var self__ = this;
var _35526__$1 = this;
return self__.meta35525;
}));

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35524.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35525","meta35525",-639712638,null)], null);
}));

(cljs.core.async.t_cljs$core$async35524.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35524");

(cljs.core.async.t_cljs$core$async35524.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35524");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35524.
 */
cljs.core.async.__GT_t_cljs$core$async35524 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35524(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35525){
return (new cljs.core.async.t_cljs$core$async35524(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35525));
});

}

return (new cljs.core.async.t_cljs$core$async35524(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34276__auto___37510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_35677){
var state_val_35678 = (state_35677[(1)]);
if((state_val_35678 === (7))){
var inst_35588 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35681_37514 = state_35677__$1;
(statearr_35681_37514[(2)] = inst_35588);

(statearr_35681_37514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (20))){
var inst_35602 = (state_35677[(7)]);
var state_35677__$1 = state_35677;
var statearr_35684_37517 = state_35677__$1;
(statearr_35684_37517[(2)] = inst_35602);

(statearr_35684_37517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (27))){
var state_35677__$1 = state_35677;
var statearr_35685_37518 = state_35677__$1;
(statearr_35685_37518[(2)] = null);

(statearr_35685_37518[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (1))){
var inst_35575 = (state_35677[(8)]);
var inst_35575__$1 = calc_state();
var inst_35577 = (inst_35575__$1 == null);
var inst_35578 = cljs.core.not(inst_35577);
var state_35677__$1 = (function (){var statearr_35688 = state_35677;
(statearr_35688[(8)] = inst_35575__$1);

return statearr_35688;
})();
if(inst_35578){
var statearr_35690_37522 = state_35677__$1;
(statearr_35690_37522[(1)] = (2));

} else {
var statearr_35691_37523 = state_35677__$1;
(statearr_35691_37523[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (24))){
var inst_35635 = (state_35677[(9)]);
var inst_35626 = (state_35677[(10)]);
var inst_35651 = (state_35677[(11)]);
var inst_35651__$1 = (inst_35626.cljs$core$IFn$_invoke$arity$1 ? inst_35626.cljs$core$IFn$_invoke$arity$1(inst_35635) : inst_35626.call(null,inst_35635));
var state_35677__$1 = (function (){var statearr_35693 = state_35677;
(statearr_35693[(11)] = inst_35651__$1);

return statearr_35693;
})();
if(cljs.core.truth_(inst_35651__$1)){
var statearr_35694_37529 = state_35677__$1;
(statearr_35694_37529[(1)] = (29));

} else {
var statearr_35695_37531 = state_35677__$1;
(statearr_35695_37531[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (4))){
var inst_35591 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35591)){
var statearr_35696_37532 = state_35677__$1;
(statearr_35696_37532[(1)] = (8));

} else {
var statearr_35697_37533 = state_35677__$1;
(statearr_35697_37533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (15))){
var inst_35620 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35620)){
var statearr_35699_37539 = state_35677__$1;
(statearr_35699_37539[(1)] = (19));

} else {
var statearr_35700_37541 = state_35677__$1;
(statearr_35700_37541[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (21))){
var inst_35625 = (state_35677[(12)]);
var inst_35625__$1 = (state_35677[(2)]);
var inst_35626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35625__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35625__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35625__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35677__$1 = (function (){var statearr_35704 = state_35677;
(statearr_35704[(13)] = inst_35627);

(statearr_35704[(12)] = inst_35625__$1);

(statearr_35704[(10)] = inst_35626);

return statearr_35704;
})();
return cljs.core.async.ioc_alts_BANG_(state_35677__$1,(22),inst_35628);
} else {
if((state_val_35678 === (31))){
var inst_35659 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35659)){
var statearr_35707_37549 = state_35677__$1;
(statearr_35707_37549[(1)] = (32));

} else {
var statearr_35708_37551 = state_35677__$1;
(statearr_35708_37551[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (32))){
var inst_35634 = (state_35677[(14)]);
var state_35677__$1 = state_35677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35677__$1,(35),out,inst_35634);
} else {
if((state_val_35678 === (33))){
var inst_35625 = (state_35677[(12)]);
var inst_35602 = inst_35625;
var state_35677__$1 = (function (){var statearr_35712 = state_35677;
(statearr_35712[(7)] = inst_35602);

return statearr_35712;
})();
var statearr_35714_37554 = state_35677__$1;
(statearr_35714_37554[(2)] = null);

(statearr_35714_37554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (13))){
var inst_35602 = (state_35677[(7)]);
var inst_35609 = inst_35602.cljs$lang$protocol_mask$partition0$;
var inst_35610 = (inst_35609 & (64));
var inst_35611 = inst_35602.cljs$core$ISeq$;
var inst_35612 = (cljs.core.PROTOCOL_SENTINEL === inst_35611);
var inst_35613 = ((inst_35610) || (inst_35612));
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35613)){
var statearr_35715_37564 = state_35677__$1;
(statearr_35715_37564[(1)] = (16));

} else {
var statearr_35717_37566 = state_35677__$1;
(statearr_35717_37566[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (22))){
var inst_35635 = (state_35677[(9)]);
var inst_35634 = (state_35677[(14)]);
var inst_35633 = (state_35677[(2)]);
var inst_35634__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35633,(0),null);
var inst_35635__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35633,(1),null);
var inst_35638 = (inst_35634__$1 == null);
var inst_35639 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35635__$1,change);
var inst_35640 = ((inst_35638) || (inst_35639));
var state_35677__$1 = (function (){var statearr_35718 = state_35677;
(statearr_35718[(9)] = inst_35635__$1);

(statearr_35718[(14)] = inst_35634__$1);

return statearr_35718;
})();
if(cljs.core.truth_(inst_35640)){
var statearr_35720_37570 = state_35677__$1;
(statearr_35720_37570[(1)] = (23));

} else {
var statearr_35721_37572 = state_35677__$1;
(statearr_35721_37572[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (36))){
var inst_35625 = (state_35677[(12)]);
var inst_35602 = inst_35625;
var state_35677__$1 = (function (){var statearr_35722 = state_35677;
(statearr_35722[(7)] = inst_35602);

return statearr_35722;
})();
var statearr_35724_37580 = state_35677__$1;
(statearr_35724_37580[(2)] = null);

(statearr_35724_37580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (29))){
var inst_35651 = (state_35677[(11)]);
var state_35677__$1 = state_35677;
var statearr_35725_37581 = state_35677__$1;
(statearr_35725_37581[(2)] = inst_35651);

(statearr_35725_37581[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (6))){
var state_35677__$1 = state_35677;
var statearr_35727_37583 = state_35677__$1;
(statearr_35727_37583[(2)] = false);

(statearr_35727_37583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (28))){
var inst_35647 = (state_35677[(2)]);
var inst_35648 = calc_state();
var inst_35602 = inst_35648;
var state_35677__$1 = (function (){var statearr_35728 = state_35677;
(statearr_35728[(7)] = inst_35602);

(statearr_35728[(15)] = inst_35647);

return statearr_35728;
})();
var statearr_35729_37593 = state_35677__$1;
(statearr_35729_37593[(2)] = null);

(statearr_35729_37593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (25))){
var inst_35673 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35730_37596 = state_35677__$1;
(statearr_35730_37596[(2)] = inst_35673);

(statearr_35730_37596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (34))){
var inst_35671 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35731_37598 = state_35677__$1;
(statearr_35731_37598[(2)] = inst_35671);

(statearr_35731_37598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (17))){
var state_35677__$1 = state_35677;
var statearr_35732_37600 = state_35677__$1;
(statearr_35732_37600[(2)] = false);

(statearr_35732_37600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (3))){
var state_35677__$1 = state_35677;
var statearr_35733_37605 = state_35677__$1;
(statearr_35733_37605[(2)] = false);

(statearr_35733_37605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (12))){
var inst_35675 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35677__$1,inst_35675);
} else {
if((state_val_35678 === (2))){
var inst_35575 = (state_35677[(8)]);
var inst_35580 = inst_35575.cljs$lang$protocol_mask$partition0$;
var inst_35581 = (inst_35580 & (64));
var inst_35582 = inst_35575.cljs$core$ISeq$;
var inst_35583 = (cljs.core.PROTOCOL_SENTINEL === inst_35582);
var inst_35584 = ((inst_35581) || (inst_35583));
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35584)){
var statearr_35734_37611 = state_35677__$1;
(statearr_35734_37611[(1)] = (5));

} else {
var statearr_35735_37612 = state_35677__$1;
(statearr_35735_37612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (23))){
var inst_35634 = (state_35677[(14)]);
var inst_35642 = (inst_35634 == null);
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35642)){
var statearr_35736_37615 = state_35677__$1;
(statearr_35736_37615[(1)] = (26));

} else {
var statearr_35738_37619 = state_35677__$1;
(statearr_35738_37619[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (35))){
var inst_35662 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
if(cljs.core.truth_(inst_35662)){
var statearr_35742_37626 = state_35677__$1;
(statearr_35742_37626[(1)] = (36));

} else {
var statearr_35745_37627 = state_35677__$1;
(statearr_35745_37627[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (19))){
var inst_35602 = (state_35677[(7)]);
var inst_35622 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35602);
var state_35677__$1 = state_35677;
var statearr_35746_37629 = state_35677__$1;
(statearr_35746_37629[(2)] = inst_35622);

(statearr_35746_37629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (11))){
var inst_35602 = (state_35677[(7)]);
var inst_35606 = (inst_35602 == null);
var inst_35607 = cljs.core.not(inst_35606);
var state_35677__$1 = state_35677;
if(inst_35607){
var statearr_35749_37632 = state_35677__$1;
(statearr_35749_37632[(1)] = (13));

} else {
var statearr_35752_37636 = state_35677__$1;
(statearr_35752_37636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (9))){
var inst_35575 = (state_35677[(8)]);
var state_35677__$1 = state_35677;
var statearr_35753_37640 = state_35677__$1;
(statearr_35753_37640[(2)] = inst_35575);

(statearr_35753_37640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (5))){
var state_35677__$1 = state_35677;
var statearr_35755_37642 = state_35677__$1;
(statearr_35755_37642[(2)] = true);

(statearr_35755_37642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (14))){
var state_35677__$1 = state_35677;
var statearr_35761_37644 = state_35677__$1;
(statearr_35761_37644[(2)] = false);

(statearr_35761_37644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (26))){
var inst_35635 = (state_35677[(9)]);
var inst_35644 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35635);
var state_35677__$1 = state_35677;
var statearr_35769_37647 = state_35677__$1;
(statearr_35769_37647[(2)] = inst_35644);

(statearr_35769_37647[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (16))){
var state_35677__$1 = state_35677;
var statearr_35773_37655 = state_35677__$1;
(statearr_35773_37655[(2)] = true);

(statearr_35773_37655[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (38))){
var inst_35667 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35777_37658 = state_35677__$1;
(statearr_35777_37658[(2)] = inst_35667);

(statearr_35777_37658[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (30))){
var inst_35627 = (state_35677[(13)]);
var inst_35635 = (state_35677[(9)]);
var inst_35626 = (state_35677[(10)]);
var inst_35654 = cljs.core.empty_QMARK_(inst_35626);
var inst_35655 = (inst_35627.cljs$core$IFn$_invoke$arity$1 ? inst_35627.cljs$core$IFn$_invoke$arity$1(inst_35635) : inst_35627.call(null,inst_35635));
var inst_35656 = cljs.core.not(inst_35655);
var inst_35657 = ((inst_35654) && (inst_35656));
var state_35677__$1 = state_35677;
var statearr_35778_37661 = state_35677__$1;
(statearr_35778_37661[(2)] = inst_35657);

(statearr_35778_37661[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (10))){
var inst_35575 = (state_35677[(8)]);
var inst_35596 = (state_35677[(2)]);
var inst_35598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35596,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35596,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35596,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35602 = inst_35575;
var state_35677__$1 = (function (){var statearr_35781 = state_35677;
(statearr_35781[(16)] = inst_35598);

(statearr_35781[(17)] = inst_35600);

(statearr_35781[(7)] = inst_35602);

(statearr_35781[(18)] = inst_35601);

return statearr_35781;
})();
var statearr_35782_37670 = state_35677__$1;
(statearr_35782_37670[(2)] = null);

(statearr_35782_37670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (18))){
var inst_35617 = (state_35677[(2)]);
var state_35677__$1 = state_35677;
var statearr_35785_37672 = state_35677__$1;
(statearr_35785_37672[(2)] = inst_35617);

(statearr_35785_37672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (37))){
var state_35677__$1 = state_35677;
var statearr_35786_37675 = state_35677__$1;
(statearr_35786_37675[(2)] = null);

(statearr_35786_37675[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35678 === (8))){
var inst_35575 = (state_35677[(8)]);
var inst_35593 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35575);
var state_35677__$1 = state_35677;
var statearr_35788_37684 = state_35677__$1;
(statearr_35788_37684[(2)] = inst_35593);

(statearr_35788_37684[(1)] = (10));


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
var statearr_35789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35789[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35789[(1)] = (1));

return statearr_35789;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35677){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35677);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35792){if((e35792 instanceof Object)){
var ex__34210__auto__ = e35792;
var statearr_35794_37693 = state_35677;
(statearr_35794_37693[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35792;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37697 = state_35677;
state_35677 = G__37697;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35677){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_35795 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_35795[(6)] = c__34276__auto___37510);

return statearr_35795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
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
var G__35820 = arguments.length;
switch (G__35820) {
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
var G__35839 = arguments.length;
switch (G__35839) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35833_SHARP_){
if(cljs.core.truth_((p1__35833_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35833_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35833_SHARP_.call(null,topic)))){
return p1__35833_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35833_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35847 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35848){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35848 = meta35848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35849,meta35848__$1){
var self__ = this;
var _35849__$1 = this;
return (new cljs.core.async.t_cljs$core$async35847(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35848__$1));
}));

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35849){
var self__ = this;
var _35849__$1 = this;
return self__.meta35848;
}));

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35847.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35848","meta35848",211969587,null)], null);
}));

(cljs.core.async.t_cljs$core$async35847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35847");

(cljs.core.async.t_cljs$core$async35847.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35847.
 */
cljs.core.async.__GT_t_cljs$core$async35847 = (function cljs$core$async$__GT_t_cljs$core$async35847(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35848){
return (new cljs.core.async.t_cljs$core$async35847(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35848));
});

}

return (new cljs.core.async.t_cljs$core$async35847(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34276__auto___37742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_35947){
var state_val_35948 = (state_35947[(1)]);
if((state_val_35948 === (7))){
var inst_35943 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
var statearr_35951_37744 = state_35947__$1;
(statearr_35951_37744[(2)] = inst_35943);

(statearr_35951_37744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (20))){
var state_35947__$1 = state_35947;
var statearr_35953_37750 = state_35947__$1;
(statearr_35953_37750[(2)] = null);

(statearr_35953_37750[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (1))){
var state_35947__$1 = state_35947;
var statearr_35956_37755 = state_35947__$1;
(statearr_35956_37755[(2)] = null);

(statearr_35956_37755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (24))){
var inst_35924 = (state_35947[(7)]);
var inst_35935 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35924);
var state_35947__$1 = state_35947;
var statearr_35958_37757 = state_35947__$1;
(statearr_35958_37757[(2)] = inst_35935);

(statearr_35958_37757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (4))){
var inst_35872 = (state_35947[(8)]);
var inst_35872__$1 = (state_35947[(2)]);
var inst_35873 = (inst_35872__$1 == null);
var state_35947__$1 = (function (){var statearr_35960 = state_35947;
(statearr_35960[(8)] = inst_35872__$1);

return statearr_35960;
})();
if(cljs.core.truth_(inst_35873)){
var statearr_35963_37761 = state_35947__$1;
(statearr_35963_37761[(1)] = (5));

} else {
var statearr_35965_37765 = state_35947__$1;
(statearr_35965_37765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (15))){
var inst_35918 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
var statearr_35967_37768 = state_35947__$1;
(statearr_35967_37768[(2)] = inst_35918);

(statearr_35967_37768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (21))){
var inst_35940 = (state_35947[(2)]);
var state_35947__$1 = (function (){var statearr_35969 = state_35947;
(statearr_35969[(9)] = inst_35940);

return statearr_35969;
})();
var statearr_35971_37770 = state_35947__$1;
(statearr_35971_37770[(2)] = null);

(statearr_35971_37770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (13))){
var inst_35899 = (state_35947[(10)]);
var inst_35902 = cljs.core.chunked_seq_QMARK_(inst_35899);
var state_35947__$1 = state_35947;
if(inst_35902){
var statearr_35973_37777 = state_35947__$1;
(statearr_35973_37777[(1)] = (16));

} else {
var statearr_35974_37779 = state_35947__$1;
(statearr_35974_37779[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (22))){
var inst_35932 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
if(cljs.core.truth_(inst_35932)){
var statearr_35975_37780 = state_35947__$1;
(statearr_35975_37780[(1)] = (23));

} else {
var statearr_35976_37782 = state_35947__$1;
(statearr_35976_37782[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (6))){
var inst_35926 = (state_35947[(11)]);
var inst_35872 = (state_35947[(8)]);
var inst_35924 = (state_35947[(7)]);
var inst_35924__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35872) : topic_fn.call(null,inst_35872));
var inst_35925 = cljs.core.deref(mults);
var inst_35926__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35925,inst_35924__$1);
var state_35947__$1 = (function (){var statearr_35979 = state_35947;
(statearr_35979[(11)] = inst_35926__$1);

(statearr_35979[(7)] = inst_35924__$1);

return statearr_35979;
})();
if(cljs.core.truth_(inst_35926__$1)){
var statearr_35980_37791 = state_35947__$1;
(statearr_35980_37791[(1)] = (19));

} else {
var statearr_35982_37793 = state_35947__$1;
(statearr_35982_37793[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (25))){
var inst_35937 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
var statearr_35983_37795 = state_35947__$1;
(statearr_35983_37795[(2)] = inst_35937);

(statearr_35983_37795[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (17))){
var inst_35899 = (state_35947[(10)]);
var inst_35909 = cljs.core.first(inst_35899);
var inst_35910 = cljs.core.async.muxch_STAR_(inst_35909);
var inst_35911 = cljs.core.async.close_BANG_(inst_35910);
var inst_35912 = cljs.core.next(inst_35899);
var inst_35882 = inst_35912;
var inst_35883 = null;
var inst_35884 = (0);
var inst_35885 = (0);
var state_35947__$1 = (function (){var statearr_35986 = state_35947;
(statearr_35986[(12)] = inst_35883);

(statearr_35986[(13)] = inst_35882);

(statearr_35986[(14)] = inst_35885);

(statearr_35986[(15)] = inst_35884);

(statearr_35986[(16)] = inst_35911);

return statearr_35986;
})();
var statearr_35987_37802 = state_35947__$1;
(statearr_35987_37802[(2)] = null);

(statearr_35987_37802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (3))){
var inst_35945 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35947__$1,inst_35945);
} else {
if((state_val_35948 === (12))){
var inst_35920 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
var statearr_35989_37806 = state_35947__$1;
(statearr_35989_37806[(2)] = inst_35920);

(statearr_35989_37806[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (2))){
var state_35947__$1 = state_35947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35947__$1,(4),ch);
} else {
if((state_val_35948 === (23))){
var state_35947__$1 = state_35947;
var statearr_35993_37809 = state_35947__$1;
(statearr_35993_37809[(2)] = null);

(statearr_35993_37809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (19))){
var inst_35926 = (state_35947[(11)]);
var inst_35872 = (state_35947[(8)]);
var inst_35930 = cljs.core.async.muxch_STAR_(inst_35926);
var state_35947__$1 = state_35947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35947__$1,(22),inst_35930,inst_35872);
} else {
if((state_val_35948 === (11))){
var inst_35882 = (state_35947[(13)]);
var inst_35899 = (state_35947[(10)]);
var inst_35899__$1 = cljs.core.seq(inst_35882);
var state_35947__$1 = (function (){var statearr_35994 = state_35947;
(statearr_35994[(10)] = inst_35899__$1);

return statearr_35994;
})();
if(inst_35899__$1){
var statearr_35997_37812 = state_35947__$1;
(statearr_35997_37812[(1)] = (13));

} else {
var statearr_35999_37817 = state_35947__$1;
(statearr_35999_37817[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (9))){
var inst_35922 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
var statearr_36003_37820 = state_35947__$1;
(statearr_36003_37820[(2)] = inst_35922);

(statearr_36003_37820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (5))){
var inst_35879 = cljs.core.deref(mults);
var inst_35880 = cljs.core.vals(inst_35879);
var inst_35881 = cljs.core.seq(inst_35880);
var inst_35882 = inst_35881;
var inst_35883 = null;
var inst_35884 = (0);
var inst_35885 = (0);
var state_35947__$1 = (function (){var statearr_36005 = state_35947;
(statearr_36005[(12)] = inst_35883);

(statearr_36005[(13)] = inst_35882);

(statearr_36005[(14)] = inst_35885);

(statearr_36005[(15)] = inst_35884);

return statearr_36005;
})();
var statearr_36008_37824 = state_35947__$1;
(statearr_36008_37824[(2)] = null);

(statearr_36008_37824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (14))){
var state_35947__$1 = state_35947;
var statearr_36015_37829 = state_35947__$1;
(statearr_36015_37829[(2)] = null);

(statearr_36015_37829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (16))){
var inst_35899 = (state_35947[(10)]);
var inst_35904 = cljs.core.chunk_first(inst_35899);
var inst_35905 = cljs.core.chunk_rest(inst_35899);
var inst_35906 = cljs.core.count(inst_35904);
var inst_35882 = inst_35905;
var inst_35883 = inst_35904;
var inst_35884 = inst_35906;
var inst_35885 = (0);
var state_35947__$1 = (function (){var statearr_36019 = state_35947;
(statearr_36019[(12)] = inst_35883);

(statearr_36019[(13)] = inst_35882);

(statearr_36019[(14)] = inst_35885);

(statearr_36019[(15)] = inst_35884);

return statearr_36019;
})();
var statearr_36021_37833 = state_35947__$1;
(statearr_36021_37833[(2)] = null);

(statearr_36021_37833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (10))){
var inst_35883 = (state_35947[(12)]);
var inst_35882 = (state_35947[(13)]);
var inst_35885 = (state_35947[(14)]);
var inst_35884 = (state_35947[(15)]);
var inst_35891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35883,inst_35885);
var inst_35892 = cljs.core.async.muxch_STAR_(inst_35891);
var inst_35893 = cljs.core.async.close_BANG_(inst_35892);
var inst_35895 = (inst_35885 + (1));
var tmp36011 = inst_35883;
var tmp36012 = inst_35882;
var tmp36013 = inst_35884;
var inst_35882__$1 = tmp36012;
var inst_35883__$1 = tmp36011;
var inst_35884__$1 = tmp36013;
var inst_35885__$1 = inst_35895;
var state_35947__$1 = (function (){var statearr_36026 = state_35947;
(statearr_36026[(12)] = inst_35883__$1);

(statearr_36026[(13)] = inst_35882__$1);

(statearr_36026[(17)] = inst_35893);

(statearr_36026[(14)] = inst_35885__$1);

(statearr_36026[(15)] = inst_35884__$1);

return statearr_36026;
})();
var statearr_36029_37840 = state_35947__$1;
(statearr_36029_37840[(2)] = null);

(statearr_36029_37840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (18))){
var inst_35915 = (state_35947[(2)]);
var state_35947__$1 = state_35947;
var statearr_36031_37844 = state_35947__$1;
(statearr_36031_37844[(2)] = inst_35915);

(statearr_36031_37844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35948 === (8))){
var inst_35885 = (state_35947[(14)]);
var inst_35884 = (state_35947[(15)]);
var inst_35888 = (inst_35885 < inst_35884);
var inst_35889 = inst_35888;
var state_35947__$1 = state_35947;
if(cljs.core.truth_(inst_35889)){
var statearr_36032_37849 = state_35947__$1;
(statearr_36032_37849[(1)] = (10));

} else {
var statearr_36033_37850 = state_35947__$1;
(statearr_36033_37850[(1)] = (11));

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
var statearr_36036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36036[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36036[(1)] = (1));

return statearr_36036;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35947){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35947);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36038){if((e36038 instanceof Object)){
var ex__34210__auto__ = e36038;
var statearr_36040_37855 = state_35947;
(statearr_36040_37855[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36038;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37858 = state_35947;
state_35947 = G__37858;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_36043 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_36043[(6)] = c__34276__auto___37742);

return statearr_36043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
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
var c__34276__auto___37902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_36094){
var state_val_36095 = (state_36094[(1)]);
if((state_val_36095 === (7))){
var state_36094__$1 = state_36094;
var statearr_36096_37905 = state_36094__$1;
(statearr_36096_37905[(2)] = null);

(statearr_36096_37905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (1))){
var state_36094__$1 = state_36094;
var statearr_36097_37908 = state_36094__$1;
(statearr_36097_37908[(2)] = null);

(statearr_36097_37908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (4))){
var inst_36056 = (state_36094[(7)]);
var inst_36058 = (inst_36056 < cnt);
var state_36094__$1 = state_36094;
if(cljs.core.truth_(inst_36058)){
var statearr_36099_37910 = state_36094__$1;
(statearr_36099_37910[(1)] = (6));

} else {
var statearr_36102_37911 = state_36094__$1;
(statearr_36102_37911[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (15))){
var inst_36089 = (state_36094[(2)]);
var state_36094__$1 = state_36094;
var statearr_36104_37915 = state_36094__$1;
(statearr_36104_37915[(2)] = inst_36089);

(statearr_36104_37915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (13))){
var inst_36082 = cljs.core.async.close_BANG_(out);
var state_36094__$1 = state_36094;
var statearr_36105_37917 = state_36094__$1;
(statearr_36105_37917[(2)] = inst_36082);

(statearr_36105_37917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (6))){
var state_36094__$1 = state_36094;
var statearr_36109_37918 = state_36094__$1;
(statearr_36109_37918[(2)] = null);

(statearr_36109_37918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (3))){
var inst_36091 = (state_36094[(2)]);
var state_36094__$1 = state_36094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36094__$1,inst_36091);
} else {
if((state_val_36095 === (12))){
var inst_36079 = (state_36094[(8)]);
var inst_36079__$1 = (state_36094[(2)]);
var inst_36080 = cljs.core.some(cljs.core.nil_QMARK_,inst_36079__$1);
var state_36094__$1 = (function (){var statearr_36119 = state_36094;
(statearr_36119[(8)] = inst_36079__$1);

return statearr_36119;
})();
if(cljs.core.truth_(inst_36080)){
var statearr_36121_37925 = state_36094__$1;
(statearr_36121_37925[(1)] = (13));

} else {
var statearr_36122_37926 = state_36094__$1;
(statearr_36122_37926[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (2))){
var inst_36055 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36056 = (0);
var state_36094__$1 = (function (){var statearr_36125 = state_36094;
(statearr_36125[(9)] = inst_36055);

(statearr_36125[(7)] = inst_36056);

return statearr_36125;
})();
var statearr_36128_37933 = state_36094__$1;
(statearr_36128_37933[(2)] = null);

(statearr_36128_37933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (11))){
var inst_36056 = (state_36094[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_36094,(10),Object,null,(9));
var inst_36066 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36056) : chs__$1.call(null,inst_36056));
var inst_36067 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36056) : done.call(null,inst_36056));
var inst_36068 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36066,inst_36067);
var state_36094__$1 = state_36094;
var statearr_36129_37941 = state_36094__$1;
(statearr_36129_37941[(2)] = inst_36068);


cljs.core.async.impl.ioc_helpers.process_exception(state_36094__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (9))){
var inst_36056 = (state_36094[(7)]);
var inst_36070 = (state_36094[(2)]);
var inst_36071 = (inst_36056 + (1));
var inst_36056__$1 = inst_36071;
var state_36094__$1 = (function (){var statearr_36130 = state_36094;
(statearr_36130[(10)] = inst_36070);

(statearr_36130[(7)] = inst_36056__$1);

return statearr_36130;
})();
var statearr_36131_37946 = state_36094__$1;
(statearr_36131_37946[(2)] = null);

(statearr_36131_37946[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (5))){
var inst_36077 = (state_36094[(2)]);
var state_36094__$1 = (function (){var statearr_36132 = state_36094;
(statearr_36132[(11)] = inst_36077);

return statearr_36132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36094__$1,(12),dchan);
} else {
if((state_val_36095 === (14))){
var inst_36079 = (state_36094[(8)]);
var inst_36084 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36079);
var state_36094__$1 = state_36094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36094__$1,(16),out,inst_36084);
} else {
if((state_val_36095 === (16))){
var inst_36086 = (state_36094[(2)]);
var state_36094__$1 = (function (){var statearr_36133 = state_36094;
(statearr_36133[(12)] = inst_36086);

return statearr_36133;
})();
var statearr_36134_37952 = state_36094__$1;
(statearr_36134_37952[(2)] = null);

(statearr_36134_37952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (10))){
var inst_36061 = (state_36094[(2)]);
var inst_36062 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36094__$1 = (function (){var statearr_36135 = state_36094;
(statearr_36135[(13)] = inst_36061);

return statearr_36135;
})();
var statearr_36136_37953 = state_36094__$1;
(statearr_36136_37953[(2)] = inst_36062);


cljs.core.async.impl.ioc_helpers.process_exception(state_36094__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36095 === (8))){
var inst_36075 = (state_36094[(2)]);
var state_36094__$1 = state_36094;
var statearr_36137_37955 = state_36094__$1;
(statearr_36137_37955[(2)] = inst_36075);

(statearr_36137_37955[(1)] = (5));


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
var statearr_36138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36138[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36138[(1)] = (1));

return statearr_36138;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36094){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36094);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36139){if((e36139 instanceof Object)){
var ex__34210__auto__ = e36139;
var statearr_36140_37960 = state_36094;
(statearr_36140_37960[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36139;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37962 = state_36094;
state_36094 = G__37962;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_36141 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_36141[(6)] = c__34276__auto___37902);

return statearr_36141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
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
var G__36148 = arguments.length;
switch (G__36148) {
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
var c__34276__auto___37971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_36180){
var state_val_36181 = (state_36180[(1)]);
if((state_val_36181 === (7))){
var inst_36160 = (state_36180[(7)]);
var inst_36159 = (state_36180[(8)]);
var inst_36159__$1 = (state_36180[(2)]);
var inst_36160__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36159__$1,(0),null);
var inst_36161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36159__$1,(1),null);
var inst_36162 = (inst_36160__$1 == null);
var state_36180__$1 = (function (){var statearr_36182 = state_36180;
(statearr_36182[(7)] = inst_36160__$1);

(statearr_36182[(9)] = inst_36161);

(statearr_36182[(8)] = inst_36159__$1);

return statearr_36182;
})();
if(cljs.core.truth_(inst_36162)){
var statearr_36183_37973 = state_36180__$1;
(statearr_36183_37973[(1)] = (8));

} else {
var statearr_36184_37976 = state_36180__$1;
(statearr_36184_37976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (1))){
var inst_36149 = cljs.core.vec(chs);
var inst_36150 = inst_36149;
var state_36180__$1 = (function (){var statearr_36185 = state_36180;
(statearr_36185[(10)] = inst_36150);

return statearr_36185;
})();
var statearr_36186_37979 = state_36180__$1;
(statearr_36186_37979[(2)] = null);

(statearr_36186_37979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (4))){
var inst_36150 = (state_36180[(10)]);
var state_36180__$1 = state_36180;
return cljs.core.async.ioc_alts_BANG_(state_36180__$1,(7),inst_36150);
} else {
if((state_val_36181 === (6))){
var inst_36176 = (state_36180[(2)]);
var state_36180__$1 = state_36180;
var statearr_36187_37980 = state_36180__$1;
(statearr_36187_37980[(2)] = inst_36176);

(statearr_36187_37980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (3))){
var inst_36178 = (state_36180[(2)]);
var state_36180__$1 = state_36180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36180__$1,inst_36178);
} else {
if((state_val_36181 === (2))){
var inst_36150 = (state_36180[(10)]);
var inst_36152 = cljs.core.count(inst_36150);
var inst_36153 = (inst_36152 > (0));
var state_36180__$1 = state_36180;
if(cljs.core.truth_(inst_36153)){
var statearr_36189_37984 = state_36180__$1;
(statearr_36189_37984[(1)] = (4));

} else {
var statearr_36190_37985 = state_36180__$1;
(statearr_36190_37985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (11))){
var inst_36150 = (state_36180[(10)]);
var inst_36169 = (state_36180[(2)]);
var tmp36188 = inst_36150;
var inst_36150__$1 = tmp36188;
var state_36180__$1 = (function (){var statearr_36194 = state_36180;
(statearr_36194[(10)] = inst_36150__$1);

(statearr_36194[(11)] = inst_36169);

return statearr_36194;
})();
var statearr_36195_37986 = state_36180__$1;
(statearr_36195_37986[(2)] = null);

(statearr_36195_37986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (9))){
var inst_36160 = (state_36180[(7)]);
var state_36180__$1 = state_36180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36180__$1,(11),out,inst_36160);
} else {
if((state_val_36181 === (5))){
var inst_36174 = cljs.core.async.close_BANG_(out);
var state_36180__$1 = state_36180;
var statearr_36198_37991 = state_36180__$1;
(statearr_36198_37991[(2)] = inst_36174);

(statearr_36198_37991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (10))){
var inst_36172 = (state_36180[(2)]);
var state_36180__$1 = state_36180;
var statearr_36201_37992 = state_36180__$1;
(statearr_36201_37992[(2)] = inst_36172);

(statearr_36201_37992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36181 === (8))){
var inst_36150 = (state_36180[(10)]);
var inst_36160 = (state_36180[(7)]);
var inst_36161 = (state_36180[(9)]);
var inst_36159 = (state_36180[(8)]);
var inst_36164 = (function (){var cs = inst_36150;
var vec__36155 = inst_36159;
var v = inst_36160;
var c = inst_36161;
return (function (p1__36142_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36142_SHARP_);
});
})();
var inst_36165 = cljs.core.filterv(inst_36164,inst_36150);
var inst_36150__$1 = inst_36165;
var state_36180__$1 = (function (){var statearr_36203 = state_36180;
(statearr_36203[(10)] = inst_36150__$1);

return statearr_36203;
})();
var statearr_36204_37994 = state_36180__$1;
(statearr_36204_37994[(2)] = null);

(statearr_36204_37994[(1)] = (2));


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
var statearr_36205 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36205[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36205[(1)] = (1));

return statearr_36205;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36180){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36180);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36206){if((e36206 instanceof Object)){
var ex__34210__auto__ = e36206;
var statearr_36207_37999 = state_36180;
(statearr_36207_37999[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36206;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38000 = state_36180;
state_36180 = G__38000;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_36210 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_36210[(6)] = c__34276__auto___37971);

return statearr_36210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
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
var G__36214 = arguments.length;
switch (G__36214) {
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
var c__34276__auto___38002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_36242){
var state_val_36243 = (state_36242[(1)]);
if((state_val_36243 === (7))){
var inst_36223 = (state_36242[(7)]);
var inst_36223__$1 = (state_36242[(2)]);
var inst_36224 = (inst_36223__$1 == null);
var inst_36225 = cljs.core.not(inst_36224);
var state_36242__$1 = (function (){var statearr_36247 = state_36242;
(statearr_36247[(7)] = inst_36223__$1);

return statearr_36247;
})();
if(inst_36225){
var statearr_36250_38007 = state_36242__$1;
(statearr_36250_38007[(1)] = (8));

} else {
var statearr_36251_38008 = state_36242__$1;
(statearr_36251_38008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (1))){
var inst_36216 = (0);
var state_36242__$1 = (function (){var statearr_36253 = state_36242;
(statearr_36253[(8)] = inst_36216);

return statearr_36253;
})();
var statearr_36254_38010 = state_36242__$1;
(statearr_36254_38010[(2)] = null);

(statearr_36254_38010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (4))){
var state_36242__$1 = state_36242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36242__$1,(7),ch);
} else {
if((state_val_36243 === (6))){
var inst_36237 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
var statearr_36256_38013 = state_36242__$1;
(statearr_36256_38013[(2)] = inst_36237);

(statearr_36256_38013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (3))){
var inst_36239 = (state_36242[(2)]);
var inst_36240 = cljs.core.async.close_BANG_(out);
var state_36242__$1 = (function (){var statearr_36267 = state_36242;
(statearr_36267[(9)] = inst_36239);

return statearr_36267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36242__$1,inst_36240);
} else {
if((state_val_36243 === (2))){
var inst_36216 = (state_36242[(8)]);
var inst_36219 = (inst_36216 < n);
var state_36242__$1 = state_36242;
if(cljs.core.truth_(inst_36219)){
var statearr_36268_38014 = state_36242__$1;
(statearr_36268_38014[(1)] = (4));

} else {
var statearr_36269_38015 = state_36242__$1;
(statearr_36269_38015[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (11))){
var inst_36216 = (state_36242[(8)]);
var inst_36228 = (state_36242[(2)]);
var inst_36230 = (inst_36216 + (1));
var inst_36216__$1 = inst_36230;
var state_36242__$1 = (function (){var statearr_36270 = state_36242;
(statearr_36270[(8)] = inst_36216__$1);

(statearr_36270[(10)] = inst_36228);

return statearr_36270;
})();
var statearr_36272_38017 = state_36242__$1;
(statearr_36272_38017[(2)] = null);

(statearr_36272_38017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (9))){
var state_36242__$1 = state_36242;
var statearr_36274_38020 = state_36242__$1;
(statearr_36274_38020[(2)] = null);

(statearr_36274_38020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (5))){
var state_36242__$1 = state_36242;
var statearr_36275_38021 = state_36242__$1;
(statearr_36275_38021[(2)] = null);

(statearr_36275_38021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (10))){
var inst_36234 = (state_36242[(2)]);
var state_36242__$1 = state_36242;
var statearr_36277_38022 = state_36242__$1;
(statearr_36277_38022[(2)] = inst_36234);

(statearr_36277_38022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36243 === (8))){
var inst_36223 = (state_36242[(7)]);
var state_36242__$1 = state_36242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36242__$1,(11),out,inst_36223);
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
var statearr_36280 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36280[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36280[(1)] = (1));

return statearr_36280;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36242){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36242);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36281){if((e36281 instanceof Object)){
var ex__34210__auto__ = e36281;
var statearr_36282_38023 = state_36242;
(statearr_36282_38023[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36281;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38024 = state_36242;
state_36242 = G__38024;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_36285 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_36285[(6)] = c__34276__auto___38002);

return statearr_36285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36287 = (function (f,ch,meta36288){
this.f = f;
this.ch = ch;
this.meta36288 = meta36288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36289,meta36288__$1){
var self__ = this;
var _36289__$1 = this;
return (new cljs.core.async.t_cljs$core$async36287(self__.f,self__.ch,meta36288__$1));
}));

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36289){
var self__ = this;
var _36289__$1 = this;
return self__.meta36288;
}));

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36296 = (function (f,ch,meta36288,_,fn1,meta36297){
this.f = f;
this.ch = ch;
this.meta36288 = meta36288;
this._ = _;
this.fn1 = fn1;
this.meta36297 = meta36297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36298,meta36297__$1){
var self__ = this;
var _36298__$1 = this;
return (new cljs.core.async.t_cljs$core$async36296(self__.f,self__.ch,self__.meta36288,self__._,self__.fn1,meta36297__$1));
}));

(cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36298){
var self__ = this;
var _36298__$1 = this;
return self__.meta36297;
}));

(cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36286_SHARP_){
var G__36309 = (((p1__36286_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36286_SHARP_) : self__.f.call(null,p1__36286_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36309) : f1.call(null,G__36309));
});
}));

(cljs.core.async.t_cljs$core$async36296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36288","meta36288",-1138058549,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36287","cljs.core.async/t_cljs$core$async36287",613903261,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36297","meta36297",1351225937,null)], null);
}));

(cljs.core.async.t_cljs$core$async36296.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36296");

(cljs.core.async.t_cljs$core$async36296.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36296");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36296.
 */
cljs.core.async.__GT_t_cljs$core$async36296 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36296(f__$1,ch__$1,meta36288__$1,___$2,fn1__$1,meta36297){
return (new cljs.core.async.t_cljs$core$async36296(f__$1,ch__$1,meta36288__$1,___$2,fn1__$1,meta36297));
});

}

return (new cljs.core.async.t_cljs$core$async36296(self__.f,self__.ch,self__.meta36288,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36314 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36314) : self__.f.call(null,G__36314));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36287.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36288","meta36288",-1138058549,null)], null);
}));

(cljs.core.async.t_cljs$core$async36287.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36287");

(cljs.core.async.t_cljs$core$async36287.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36287");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36287.
 */
cljs.core.async.__GT_t_cljs$core$async36287 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36287(f__$1,ch__$1,meta36288){
return (new cljs.core.async.t_cljs$core$async36287(f__$1,ch__$1,meta36288));
});

}

return (new cljs.core.async.t_cljs$core$async36287(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36318 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36318 = (function (f,ch,meta36319){
this.f = f;
this.ch = ch;
this.meta36319 = meta36319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36320,meta36319__$1){
var self__ = this;
var _36320__$1 = this;
return (new cljs.core.async.t_cljs$core$async36318(self__.f,self__.ch,meta36319__$1));
}));

(cljs.core.async.t_cljs$core$async36318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36320){
var self__ = this;
var _36320__$1 = this;
return self__.meta36319;
}));

(cljs.core.async.t_cljs$core$async36318.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36318.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36318.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36318.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36318.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36318.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36319","meta36319",-1268216450,null)], null);
}));

(cljs.core.async.t_cljs$core$async36318.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36318");

(cljs.core.async.t_cljs$core$async36318.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36318");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36318.
 */
cljs.core.async.__GT_t_cljs$core$async36318 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36318(f__$1,ch__$1,meta36319){
return (new cljs.core.async.t_cljs$core$async36318(f__$1,ch__$1,meta36319));
});

}

return (new cljs.core.async.t_cljs$core$async36318(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36335 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36335 = (function (p,ch,meta36336){
this.p = p;
this.ch = ch;
this.meta36336 = meta36336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36337,meta36336__$1){
var self__ = this;
var _36337__$1 = this;
return (new cljs.core.async.t_cljs$core$async36335(self__.p,self__.ch,meta36336__$1));
}));

(cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36337){
var self__ = this;
var _36337__$1 = this;
return self__.meta36336;
}));

(cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36336","meta36336",-525227016,null)], null);
}));

(cljs.core.async.t_cljs$core$async36335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36335");

(cljs.core.async.t_cljs$core$async36335.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36335.
 */
cljs.core.async.__GT_t_cljs$core$async36335 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36335(p__$1,ch__$1,meta36336){
return (new cljs.core.async.t_cljs$core$async36335(p__$1,ch__$1,meta36336));
});

}

return (new cljs.core.async.t_cljs$core$async36335(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36355 = arguments.length;
switch (G__36355) {
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
var c__34276__auto___38043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_36381){
var state_val_36382 = (state_36381[(1)]);
if((state_val_36382 === (7))){
var inst_36377 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36383_38046 = state_36381__$1;
(statearr_36383_38046[(2)] = inst_36377);

(statearr_36383_38046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (1))){
var state_36381__$1 = state_36381;
var statearr_36385_38047 = state_36381__$1;
(statearr_36385_38047[(2)] = null);

(statearr_36385_38047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (4))){
var inst_36361 = (state_36381[(7)]);
var inst_36361__$1 = (state_36381[(2)]);
var inst_36363 = (inst_36361__$1 == null);
var state_36381__$1 = (function (){var statearr_36387 = state_36381;
(statearr_36387[(7)] = inst_36361__$1);

return statearr_36387;
})();
if(cljs.core.truth_(inst_36363)){
var statearr_36388_38050 = state_36381__$1;
(statearr_36388_38050[(1)] = (5));

} else {
var statearr_36389_38051 = state_36381__$1;
(statearr_36389_38051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (6))){
var inst_36361 = (state_36381[(7)]);
var inst_36367 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36361) : p.call(null,inst_36361));
var state_36381__$1 = state_36381;
if(cljs.core.truth_(inst_36367)){
var statearr_36391_38052 = state_36381__$1;
(statearr_36391_38052[(1)] = (8));

} else {
var statearr_36392_38053 = state_36381__$1;
(statearr_36392_38053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (3))){
var inst_36379 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36381__$1,inst_36379);
} else {
if((state_val_36382 === (2))){
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36381__$1,(4),ch);
} else {
if((state_val_36382 === (11))){
var inst_36371 = (state_36381[(2)]);
var state_36381__$1 = state_36381;
var statearr_36396_38056 = state_36381__$1;
(statearr_36396_38056[(2)] = inst_36371);

(statearr_36396_38056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (9))){
var state_36381__$1 = state_36381;
var statearr_36398_38057 = state_36381__$1;
(statearr_36398_38057[(2)] = null);

(statearr_36398_38057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (5))){
var inst_36365 = cljs.core.async.close_BANG_(out);
var state_36381__$1 = state_36381;
var statearr_36400_38058 = state_36381__$1;
(statearr_36400_38058[(2)] = inst_36365);

(statearr_36400_38058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (10))){
var inst_36374 = (state_36381[(2)]);
var state_36381__$1 = (function (){var statearr_36401 = state_36381;
(statearr_36401[(8)] = inst_36374);

return statearr_36401;
})();
var statearr_36402_38059 = state_36381__$1;
(statearr_36402_38059[(2)] = null);

(statearr_36402_38059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36382 === (8))){
var inst_36361 = (state_36381[(7)]);
var state_36381__$1 = state_36381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36381__$1,(11),out,inst_36361);
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
var statearr_36403 = [null,null,null,null,null,null,null,null,null];
(statearr_36403[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36403[(1)] = (1));

return statearr_36403;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36381){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36381);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36404){if((e36404 instanceof Object)){
var ex__34210__auto__ = e36404;
var statearr_36405_38063 = state_36381;
(statearr_36405_38063[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38064 = state_36381;
state_36381 = G__38064;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_36407 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_36407[(6)] = c__34276__auto___38043);

return statearr_36407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36417 = arguments.length;
switch (G__36417) {
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
var c__34276__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_36485){
var state_val_36486 = (state_36485[(1)]);
if((state_val_36486 === (7))){
var inst_36481 = (state_36485[(2)]);
var state_36485__$1 = state_36485;
var statearr_36501_38072 = state_36485__$1;
(statearr_36501_38072[(2)] = inst_36481);

(statearr_36501_38072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (20))){
var inst_36451 = (state_36485[(7)]);
var inst_36462 = (state_36485[(2)]);
var inst_36463 = cljs.core.next(inst_36451);
var inst_36437 = inst_36463;
var inst_36438 = null;
var inst_36439 = (0);
var inst_36440 = (0);
var state_36485__$1 = (function (){var statearr_36503 = state_36485;
(statearr_36503[(8)] = inst_36440);

(statearr_36503[(9)] = inst_36438);

(statearr_36503[(10)] = inst_36439);

(statearr_36503[(11)] = inst_36437);

(statearr_36503[(12)] = inst_36462);

return statearr_36503;
})();
var statearr_36505_38073 = state_36485__$1;
(statearr_36505_38073[(2)] = null);

(statearr_36505_38073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (1))){
var state_36485__$1 = state_36485;
var statearr_36509_38075 = state_36485__$1;
(statearr_36509_38075[(2)] = null);

(statearr_36509_38075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (4))){
var inst_36425 = (state_36485[(13)]);
var inst_36425__$1 = (state_36485[(2)]);
var inst_36426 = (inst_36425__$1 == null);
var state_36485__$1 = (function (){var statearr_36516 = state_36485;
(statearr_36516[(13)] = inst_36425__$1);

return statearr_36516;
})();
if(cljs.core.truth_(inst_36426)){
var statearr_36517_38078 = state_36485__$1;
(statearr_36517_38078[(1)] = (5));

} else {
var statearr_36518_38079 = state_36485__$1;
(statearr_36518_38079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (15))){
var state_36485__$1 = state_36485;
var statearr_36522_38080 = state_36485__$1;
(statearr_36522_38080[(2)] = null);

(statearr_36522_38080[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (21))){
var state_36485__$1 = state_36485;
var statearr_36526_38081 = state_36485__$1;
(statearr_36526_38081[(2)] = null);

(statearr_36526_38081[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (13))){
var inst_36440 = (state_36485[(8)]);
var inst_36438 = (state_36485[(9)]);
var inst_36439 = (state_36485[(10)]);
var inst_36437 = (state_36485[(11)]);
var inst_36447 = (state_36485[(2)]);
var inst_36448 = (inst_36440 + (1));
var tmp36519 = inst_36438;
var tmp36520 = inst_36439;
var tmp36521 = inst_36437;
var inst_36437__$1 = tmp36521;
var inst_36438__$1 = tmp36519;
var inst_36439__$1 = tmp36520;
var inst_36440__$1 = inst_36448;
var state_36485__$1 = (function (){var statearr_36533 = state_36485;
(statearr_36533[(8)] = inst_36440__$1);

(statearr_36533[(14)] = inst_36447);

(statearr_36533[(9)] = inst_36438__$1);

(statearr_36533[(10)] = inst_36439__$1);

(statearr_36533[(11)] = inst_36437__$1);

return statearr_36533;
})();
var statearr_36535_38085 = state_36485__$1;
(statearr_36535_38085[(2)] = null);

(statearr_36535_38085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (22))){
var state_36485__$1 = state_36485;
var statearr_36536_38086 = state_36485__$1;
(statearr_36536_38086[(2)] = null);

(statearr_36536_38086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (6))){
var inst_36425 = (state_36485[(13)]);
var inst_36435 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36425) : f.call(null,inst_36425));
var inst_36436 = cljs.core.seq(inst_36435);
var inst_36437 = inst_36436;
var inst_36438 = null;
var inst_36439 = (0);
var inst_36440 = (0);
var state_36485__$1 = (function (){var statearr_36539 = state_36485;
(statearr_36539[(8)] = inst_36440);

(statearr_36539[(9)] = inst_36438);

(statearr_36539[(10)] = inst_36439);

(statearr_36539[(11)] = inst_36437);

return statearr_36539;
})();
var statearr_36540_38088 = state_36485__$1;
(statearr_36540_38088[(2)] = null);

(statearr_36540_38088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (17))){
var inst_36451 = (state_36485[(7)]);
var inst_36455 = cljs.core.chunk_first(inst_36451);
var inst_36456 = cljs.core.chunk_rest(inst_36451);
var inst_36457 = cljs.core.count(inst_36455);
var inst_36437 = inst_36456;
var inst_36438 = inst_36455;
var inst_36439 = inst_36457;
var inst_36440 = (0);
var state_36485__$1 = (function (){var statearr_36543 = state_36485;
(statearr_36543[(8)] = inst_36440);

(statearr_36543[(9)] = inst_36438);

(statearr_36543[(10)] = inst_36439);

(statearr_36543[(11)] = inst_36437);

return statearr_36543;
})();
var statearr_36545_38091 = state_36485__$1;
(statearr_36545_38091[(2)] = null);

(statearr_36545_38091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (3))){
var inst_36483 = (state_36485[(2)]);
var state_36485__$1 = state_36485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36485__$1,inst_36483);
} else {
if((state_val_36486 === (12))){
var inst_36471 = (state_36485[(2)]);
var state_36485__$1 = state_36485;
var statearr_36548_38092 = state_36485__$1;
(statearr_36548_38092[(2)] = inst_36471);

(statearr_36548_38092[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (2))){
var state_36485__$1 = state_36485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36485__$1,(4),in$);
} else {
if((state_val_36486 === (23))){
var inst_36479 = (state_36485[(2)]);
var state_36485__$1 = state_36485;
var statearr_36551_38093 = state_36485__$1;
(statearr_36551_38093[(2)] = inst_36479);

(statearr_36551_38093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (19))){
var inst_36466 = (state_36485[(2)]);
var state_36485__$1 = state_36485;
var statearr_36554_38095 = state_36485__$1;
(statearr_36554_38095[(2)] = inst_36466);

(statearr_36554_38095[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (11))){
var inst_36451 = (state_36485[(7)]);
var inst_36437 = (state_36485[(11)]);
var inst_36451__$1 = cljs.core.seq(inst_36437);
var state_36485__$1 = (function (){var statearr_36555 = state_36485;
(statearr_36555[(7)] = inst_36451__$1);

return statearr_36555;
})();
if(inst_36451__$1){
var statearr_36556_38098 = state_36485__$1;
(statearr_36556_38098[(1)] = (14));

} else {
var statearr_36557_38099 = state_36485__$1;
(statearr_36557_38099[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (9))){
var inst_36473 = (state_36485[(2)]);
var inst_36474 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36485__$1 = (function (){var statearr_36559 = state_36485;
(statearr_36559[(15)] = inst_36473);

return statearr_36559;
})();
if(cljs.core.truth_(inst_36474)){
var statearr_36560_38100 = state_36485__$1;
(statearr_36560_38100[(1)] = (21));

} else {
var statearr_36561_38101 = state_36485__$1;
(statearr_36561_38101[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (5))){
var inst_36428 = cljs.core.async.close_BANG_(out);
var state_36485__$1 = state_36485;
var statearr_36563_38103 = state_36485__$1;
(statearr_36563_38103[(2)] = inst_36428);

(statearr_36563_38103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (14))){
var inst_36451 = (state_36485[(7)]);
var inst_36453 = cljs.core.chunked_seq_QMARK_(inst_36451);
var state_36485__$1 = state_36485;
if(inst_36453){
var statearr_36564_38106 = state_36485__$1;
(statearr_36564_38106[(1)] = (17));

} else {
var statearr_36567_38107 = state_36485__$1;
(statearr_36567_38107[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (16))){
var inst_36469 = (state_36485[(2)]);
var state_36485__$1 = state_36485;
var statearr_36570_38108 = state_36485__$1;
(statearr_36570_38108[(2)] = inst_36469);

(statearr_36570_38108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36486 === (10))){
var inst_36440 = (state_36485[(8)]);
var inst_36438 = (state_36485[(9)]);
var inst_36445 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36438,inst_36440);
var state_36485__$1 = state_36485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36485__$1,(13),out,inst_36445);
} else {
if((state_val_36486 === (18))){
var inst_36451 = (state_36485[(7)]);
var inst_36460 = cljs.core.first(inst_36451);
var state_36485__$1 = state_36485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36485__$1,(20),out,inst_36460);
} else {
if((state_val_36486 === (8))){
var inst_36440 = (state_36485[(8)]);
var inst_36439 = (state_36485[(10)]);
var inst_36442 = (inst_36440 < inst_36439);
var inst_36443 = inst_36442;
var state_36485__$1 = state_36485;
if(cljs.core.truth_(inst_36443)){
var statearr_36572_38112 = state_36485__$1;
(statearr_36572_38112[(1)] = (10));

} else {
var statearr_36573_38113 = state_36485__$1;
(statearr_36573_38113[(1)] = (11));

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
var statearr_36575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36575[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36575[(1)] = (1));

return statearr_36575;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36485){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36485);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36577){if((e36577 instanceof Object)){
var ex__34210__auto__ = e36577;
var statearr_36578_38116 = state_36485;
(statearr_36578_38116[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36577;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38118 = state_36485;
state_36485 = G__38118;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36485){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_36580 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_36580[(6)] = c__34276__auto__);

return statearr_36580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
}));

return c__34276__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36583 = arguments.length;
switch (G__36583) {
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
var G__36588 = arguments.length;
switch (G__36588) {
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
var G__36592 = arguments.length;
switch (G__36592) {
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
var c__34276__auto___38128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_36620){
var state_val_36621 = (state_36620[(1)]);
if((state_val_36621 === (7))){
var inst_36614 = (state_36620[(2)]);
var state_36620__$1 = state_36620;
var statearr_36623_38130 = state_36620__$1;
(statearr_36623_38130[(2)] = inst_36614);

(statearr_36623_38130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (1))){
var inst_36595 = null;
var state_36620__$1 = (function (){var statearr_36624 = state_36620;
(statearr_36624[(7)] = inst_36595);

return statearr_36624;
})();
var statearr_36626_38133 = state_36620__$1;
(statearr_36626_38133[(2)] = null);

(statearr_36626_38133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (4))){
var inst_36599 = (state_36620[(8)]);
var inst_36599__$1 = (state_36620[(2)]);
var inst_36600 = (inst_36599__$1 == null);
var inst_36601 = cljs.core.not(inst_36600);
var state_36620__$1 = (function (){var statearr_36627 = state_36620;
(statearr_36627[(8)] = inst_36599__$1);

return statearr_36627;
})();
if(inst_36601){
var statearr_36629_38134 = state_36620__$1;
(statearr_36629_38134[(1)] = (5));

} else {
var statearr_36630_38135 = state_36620__$1;
(statearr_36630_38135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (6))){
var state_36620__$1 = state_36620;
var statearr_36631_38136 = state_36620__$1;
(statearr_36631_38136[(2)] = null);

(statearr_36631_38136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (3))){
var inst_36616 = (state_36620[(2)]);
var inst_36617 = cljs.core.async.close_BANG_(out);
var state_36620__$1 = (function (){var statearr_36633 = state_36620;
(statearr_36633[(9)] = inst_36616);

return statearr_36633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36620__$1,inst_36617);
} else {
if((state_val_36621 === (2))){
var state_36620__$1 = state_36620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36620__$1,(4),ch);
} else {
if((state_val_36621 === (11))){
var inst_36599 = (state_36620[(8)]);
var inst_36608 = (state_36620[(2)]);
var inst_36595 = inst_36599;
var state_36620__$1 = (function (){var statearr_36635 = state_36620;
(statearr_36635[(7)] = inst_36595);

(statearr_36635[(10)] = inst_36608);

return statearr_36635;
})();
var statearr_36636_38140 = state_36620__$1;
(statearr_36636_38140[(2)] = null);

(statearr_36636_38140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (9))){
var inst_36599 = (state_36620[(8)]);
var state_36620__$1 = state_36620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36620__$1,(11),out,inst_36599);
} else {
if((state_val_36621 === (5))){
var inst_36599 = (state_36620[(8)]);
var inst_36595 = (state_36620[(7)]);
var inst_36603 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36599,inst_36595);
var state_36620__$1 = state_36620;
if(inst_36603){
var statearr_36639_38144 = state_36620__$1;
(statearr_36639_38144[(1)] = (8));

} else {
var statearr_36640_38145 = state_36620__$1;
(statearr_36640_38145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (10))){
var inst_36611 = (state_36620[(2)]);
var state_36620__$1 = state_36620;
var statearr_36641_38146 = state_36620__$1;
(statearr_36641_38146[(2)] = inst_36611);

(statearr_36641_38146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36621 === (8))){
var inst_36595 = (state_36620[(7)]);
var tmp36637 = inst_36595;
var inst_36595__$1 = tmp36637;
var state_36620__$1 = (function (){var statearr_36643 = state_36620;
(statearr_36643[(7)] = inst_36595__$1);

return statearr_36643;
})();
var statearr_36644_38147 = state_36620__$1;
(statearr_36644_38147[(2)] = null);

(statearr_36644_38147[(1)] = (2));


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
var statearr_36646 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36646[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36646[(1)] = (1));

return statearr_36646;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36620){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36620);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36647){if((e36647 instanceof Object)){
var ex__34210__auto__ = e36647;
var statearr_36649_38151 = state_36620;
(statearr_36649_38151[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36647;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38152 = state_36620;
state_36620 = G__38152;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_36650 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_36650[(6)] = c__34276__auto___38128);

return statearr_36650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36654 = arguments.length;
switch (G__36654) {
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
var c__34276__auto___38157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_36695){
var state_val_36696 = (state_36695[(1)]);
if((state_val_36696 === (7))){
var inst_36690 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36698_38158 = state_36695__$1;
(statearr_36698_38158[(2)] = inst_36690);

(statearr_36698_38158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (1))){
var inst_36657 = (new Array(n));
var inst_36658 = inst_36657;
var inst_36659 = (0);
var state_36695__$1 = (function (){var statearr_36699 = state_36695;
(statearr_36699[(7)] = inst_36659);

(statearr_36699[(8)] = inst_36658);

return statearr_36699;
})();
var statearr_36701_38161 = state_36695__$1;
(statearr_36701_38161[(2)] = null);

(statearr_36701_38161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (4))){
var inst_36662 = (state_36695[(9)]);
var inst_36662__$1 = (state_36695[(2)]);
var inst_36663 = (inst_36662__$1 == null);
var inst_36664 = cljs.core.not(inst_36663);
var state_36695__$1 = (function (){var statearr_36702 = state_36695;
(statearr_36702[(9)] = inst_36662__$1);

return statearr_36702;
})();
if(inst_36664){
var statearr_36703_38163 = state_36695__$1;
(statearr_36703_38163[(1)] = (5));

} else {
var statearr_36705_38164 = state_36695__$1;
(statearr_36705_38164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (15))){
var inst_36684 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36706_38165 = state_36695__$1;
(statearr_36706_38165[(2)] = inst_36684);

(statearr_36706_38165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (13))){
var state_36695__$1 = state_36695;
var statearr_36707_38166 = state_36695__$1;
(statearr_36707_38166[(2)] = null);

(statearr_36707_38166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (6))){
var inst_36659 = (state_36695[(7)]);
var inst_36680 = (inst_36659 > (0));
var state_36695__$1 = state_36695;
if(cljs.core.truth_(inst_36680)){
var statearr_36709_38167 = state_36695__$1;
(statearr_36709_38167[(1)] = (12));

} else {
var statearr_36710_38169 = state_36695__$1;
(statearr_36710_38169[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (3))){
var inst_36692 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36695__$1,inst_36692);
} else {
if((state_val_36696 === (12))){
var inst_36658 = (state_36695[(8)]);
var inst_36682 = cljs.core.vec(inst_36658);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36695__$1,(15),out,inst_36682);
} else {
if((state_val_36696 === (2))){
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36695__$1,(4),ch);
} else {
if((state_val_36696 === (11))){
var inst_36674 = (state_36695[(2)]);
var inst_36675 = (new Array(n));
var inst_36658 = inst_36675;
var inst_36659 = (0);
var state_36695__$1 = (function (){var statearr_36713 = state_36695;
(statearr_36713[(10)] = inst_36674);

(statearr_36713[(7)] = inst_36659);

(statearr_36713[(8)] = inst_36658);

return statearr_36713;
})();
var statearr_36714_38172 = state_36695__$1;
(statearr_36714_38172[(2)] = null);

(statearr_36714_38172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (9))){
var inst_36658 = (state_36695[(8)]);
var inst_36672 = cljs.core.vec(inst_36658);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36695__$1,(11),out,inst_36672);
} else {
if((state_val_36696 === (5))){
var inst_36662 = (state_36695[(9)]);
var inst_36659 = (state_36695[(7)]);
var inst_36658 = (state_36695[(8)]);
var inst_36667 = (state_36695[(11)]);
var inst_36666 = (inst_36658[inst_36659] = inst_36662);
var inst_36667__$1 = (inst_36659 + (1));
var inst_36668 = (inst_36667__$1 < n);
var state_36695__$1 = (function (){var statearr_36716 = state_36695;
(statearr_36716[(12)] = inst_36666);

(statearr_36716[(11)] = inst_36667__$1);

return statearr_36716;
})();
if(cljs.core.truth_(inst_36668)){
var statearr_36718_38173 = state_36695__$1;
(statearr_36718_38173[(1)] = (8));

} else {
var statearr_36719_38175 = state_36695__$1;
(statearr_36719_38175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (14))){
var inst_36687 = (state_36695[(2)]);
var inst_36688 = cljs.core.async.close_BANG_(out);
var state_36695__$1 = (function (){var statearr_36721 = state_36695;
(statearr_36721[(13)] = inst_36687);

return statearr_36721;
})();
var statearr_36723_38177 = state_36695__$1;
(statearr_36723_38177[(2)] = inst_36688);

(statearr_36723_38177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (10))){
var inst_36678 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36724_38182 = state_36695__$1;
(statearr_36724_38182[(2)] = inst_36678);

(statearr_36724_38182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (8))){
var inst_36658 = (state_36695[(8)]);
var inst_36667 = (state_36695[(11)]);
var tmp36720 = inst_36658;
var inst_36658__$1 = tmp36720;
var inst_36659 = inst_36667;
var state_36695__$1 = (function (){var statearr_36726 = state_36695;
(statearr_36726[(7)] = inst_36659);

(statearr_36726[(8)] = inst_36658__$1);

return statearr_36726;
})();
var statearr_36727_38183 = state_36695__$1;
(statearr_36727_38183[(2)] = null);

(statearr_36727_38183[(1)] = (2));


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
var statearr_36729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36729[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36729[(1)] = (1));

return statearr_36729;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36695){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36695);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36730){if((e36730 instanceof Object)){
var ex__34210__auto__ = e36730;
var statearr_36731_38187 = state_36695;
(statearr_36731_38187[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36730;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38188 = state_36695;
state_36695 = G__38188;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_36732 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_36732[(6)] = c__34276__auto___38157);

return statearr_36732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36734 = arguments.length;
switch (G__36734) {
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
var c__34276__auto___38196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34277__auto__ = (function (){var switch__34206__auto__ = (function (state_36778){
var state_val_36779 = (state_36778[(1)]);
if((state_val_36779 === (7))){
var inst_36773 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
var statearr_36781_38197 = state_36778__$1;
(statearr_36781_38197[(2)] = inst_36773);

(statearr_36781_38197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (1))){
var inst_36735 = [];
var inst_36736 = inst_36735;
var inst_36737 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36778__$1 = (function (){var statearr_36782 = state_36778;
(statearr_36782[(7)] = inst_36737);

(statearr_36782[(8)] = inst_36736);

return statearr_36782;
})();
var statearr_36783_38198 = state_36778__$1;
(statearr_36783_38198[(2)] = null);

(statearr_36783_38198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (4))){
var inst_36741 = (state_36778[(9)]);
var inst_36741__$1 = (state_36778[(2)]);
var inst_36742 = (inst_36741__$1 == null);
var inst_36743 = cljs.core.not(inst_36742);
var state_36778__$1 = (function (){var statearr_36785 = state_36778;
(statearr_36785[(9)] = inst_36741__$1);

return statearr_36785;
})();
if(inst_36743){
var statearr_36786_38202 = state_36778__$1;
(statearr_36786_38202[(1)] = (5));

} else {
var statearr_36787_38203 = state_36778__$1;
(statearr_36787_38203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (15))){
var inst_36767 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
var statearr_36789_38204 = state_36778__$1;
(statearr_36789_38204[(2)] = inst_36767);

(statearr_36789_38204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (13))){
var state_36778__$1 = state_36778;
var statearr_36790_38205 = state_36778__$1;
(statearr_36790_38205[(2)] = null);

(statearr_36790_38205[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (6))){
var inst_36736 = (state_36778[(8)]);
var inst_36762 = inst_36736.length;
var inst_36763 = (inst_36762 > (0));
var state_36778__$1 = state_36778;
if(cljs.core.truth_(inst_36763)){
var statearr_36792_38206 = state_36778__$1;
(statearr_36792_38206[(1)] = (12));

} else {
var statearr_36793_38207 = state_36778__$1;
(statearr_36793_38207[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (3))){
var inst_36775 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36778__$1,inst_36775);
} else {
if((state_val_36779 === (12))){
var inst_36736 = (state_36778[(8)]);
var inst_36765 = cljs.core.vec(inst_36736);
var state_36778__$1 = state_36778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36778__$1,(15),out,inst_36765);
} else {
if((state_val_36779 === (2))){
var state_36778__$1 = state_36778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36778__$1,(4),ch);
} else {
if((state_val_36779 === (11))){
var inst_36745 = (state_36778[(10)]);
var inst_36741 = (state_36778[(9)]);
var inst_36755 = (state_36778[(2)]);
var inst_36756 = [];
var inst_36757 = inst_36756.push(inst_36741);
var inst_36736 = inst_36756;
var inst_36737 = inst_36745;
var state_36778__$1 = (function (){var statearr_36796 = state_36778;
(statearr_36796[(11)] = inst_36757);

(statearr_36796[(7)] = inst_36737);

(statearr_36796[(8)] = inst_36736);

(statearr_36796[(12)] = inst_36755);

return statearr_36796;
})();
var statearr_36797_38211 = state_36778__$1;
(statearr_36797_38211[(2)] = null);

(statearr_36797_38211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (9))){
var inst_36736 = (state_36778[(8)]);
var inst_36753 = cljs.core.vec(inst_36736);
var state_36778__$1 = state_36778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36778__$1,(11),out,inst_36753);
} else {
if((state_val_36779 === (5))){
var inst_36745 = (state_36778[(10)]);
var inst_36737 = (state_36778[(7)]);
var inst_36741 = (state_36778[(9)]);
var inst_36745__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36741) : f.call(null,inst_36741));
var inst_36746 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36745__$1,inst_36737);
var inst_36747 = cljs.core.keyword_identical_QMARK_(inst_36737,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36748 = ((inst_36746) || (inst_36747));
var state_36778__$1 = (function (){var statearr_36799 = state_36778;
(statearr_36799[(10)] = inst_36745__$1);

return statearr_36799;
})();
if(cljs.core.truth_(inst_36748)){
var statearr_36800_38215 = state_36778__$1;
(statearr_36800_38215[(1)] = (8));

} else {
var statearr_36802_38216 = state_36778__$1;
(statearr_36802_38216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (14))){
var inst_36770 = (state_36778[(2)]);
var inst_36771 = cljs.core.async.close_BANG_(out);
var state_36778__$1 = (function (){var statearr_36804 = state_36778;
(statearr_36804[(13)] = inst_36770);

return statearr_36804;
})();
var statearr_36805_38217 = state_36778__$1;
(statearr_36805_38217[(2)] = inst_36771);

(statearr_36805_38217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (10))){
var inst_36760 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
var statearr_36807_38218 = state_36778__$1;
(statearr_36807_38218[(2)] = inst_36760);

(statearr_36807_38218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (8))){
var inst_36745 = (state_36778[(10)]);
var inst_36736 = (state_36778[(8)]);
var inst_36741 = (state_36778[(9)]);
var inst_36750 = inst_36736.push(inst_36741);
var tmp36803 = inst_36736;
var inst_36736__$1 = tmp36803;
var inst_36737 = inst_36745;
var state_36778__$1 = (function (){var statearr_36808 = state_36778;
(statearr_36808[(7)] = inst_36737);

(statearr_36808[(8)] = inst_36736__$1);

(statearr_36808[(14)] = inst_36750);

return statearr_36808;
})();
var statearr_36810_38226 = state_36778__$1;
(statearr_36810_38226[(2)] = null);

(statearr_36810_38226[(1)] = (2));


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
var statearr_36812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36812[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36812[(1)] = (1));

return statearr_36812;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36778){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36778);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36813){if((e36813 instanceof Object)){
var ex__34210__auto__ = e36813;
var statearr_36814_38227 = state_36778;
(statearr_36814_38227[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38229 = state_36778;
state_36778 = G__38229;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34278__auto__ = (function (){var statearr_36816 = (f__34277__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34277__auto__.cljs$core$IFn$_invoke$arity$0() : f__34277__auto__.call(null));
(statearr_36816[(6)] = c__34276__auto___38196);

return statearr_36816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34278__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
