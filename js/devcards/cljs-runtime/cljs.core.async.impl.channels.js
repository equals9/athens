goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34874 = (function (val,meta34875){
this.val = val;
this.meta34875 = meta34875;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34876,meta34875__$1){
var self__ = this;
var _34876__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34874(self__.val,meta34875__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34876){
var self__ = this;
var _34876__$1 = this;
return self__.meta34875;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34874.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta34875","meta34875",-707667394,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34874.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34874.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels34874");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34874.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels34874");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels34874.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels34874 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels34874(val__$1,meta34875){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34874(val__$1,meta34875));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels34874(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_35037 = self__.puts.pop();
if((putter_35037 == null)){
} else {
var put_handler_35038 = putter_35037.handler;
var val_35039 = putter_35037.val;
if(put_handler_35038.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_35043 = put_handler_35038.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_35043,put_handler_35038,val_35039,putter_35037,this$__$1){
return (function (){
return (put_cb_35043.cljs$core$IFn$_invoke$arity$1 ? put_cb_35043.cljs$core$IFn$_invoke$arity$1(true) : put_cb_35043.call(null,true));
});})(put_cb_35043,put_handler_35038,val_35039,putter_35037,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || ((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))))){
return cljs.core.async.impl.channels.box((!(closed__$1)));
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = self__.buf;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__4174__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0))))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__35050 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__35050;
continue;
} else {
var G__35051 = takers;
takers = G__35051;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__34930_35052 = cljs.core.seq(take_cbs);
var chunk__34931_35053 = null;
var count__34932_35054 = (0);
var i__34933_35055 = (0);
while(true){
if((i__34933_35055 < count__34932_35054)){
var f_35056 = chunk__34931_35053.cljs$core$IIndexed$_nth$arity$2(null,i__34933_35055);
cljs.core.async.impl.dispatch.run(f_35056);


var G__35057 = seq__34930_35052;
var G__35058 = chunk__34931_35053;
var G__35059 = count__34932_35054;
var G__35060 = (i__34933_35055 + (1));
seq__34930_35052 = G__35057;
chunk__34931_35053 = G__35058;
count__34932_35054 = G__35059;
i__34933_35055 = G__35060;
continue;
} else {
var temp__5735__auto___35064 = cljs.core.seq(seq__34930_35052);
if(temp__5735__auto___35064){
var seq__34930_35065__$1 = temp__5735__auto___35064;
if(cljs.core.chunked_seq_QMARK_(seq__34930_35065__$1)){
var c__4609__auto___35066 = cljs.core.chunk_first(seq__34930_35065__$1);
var G__35067 = cljs.core.chunk_rest(seq__34930_35065__$1);
var G__35068 = c__4609__auto___35066;
var G__35069 = cljs.core.count(c__4609__auto___35066);
var G__35070 = (0);
seq__34930_35052 = G__35067;
chunk__34931_35053 = G__35068;
count__34932_35054 = G__35069;
i__34933_35055 = G__35070;
continue;
} else {
var f_35071 = cljs.core.first(seq__34930_35065__$1);
cljs.core.async.impl.dispatch.run(f_35071);


var G__35072 = cljs.core.next(seq__34930_35065__$1);
var G__35073 = null;
var G__35074 = (0);
var G__35075 = (0);
seq__34930_35052 = G__35072;
chunk__34931_35053 = G__35073;
count__34932_35054 = G__35074;
i__34933_35055 = G__35075;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
}));

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count(self__.buf) > (0))))){
var temp__5733__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5733__auto__)){
var take_cb = temp__5733__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__34952 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = ((put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))?put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null):false);
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if(((cljs.core.not(done_QMARK_)) && (cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0))))){
var G__35088 = cbs__$1;
cbs = G__35088;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34952,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34952,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__34962_35089 = cljs.core.seq(cbs);
var chunk__34963_35090 = null;
var count__34964_35091 = (0);
var i__34965_35092 = (0);
while(true){
if((i__34965_35092 < count__34964_35091)){
var cb_35093 = chunk__34963_35090.cljs$core$IIndexed$_nth$arity$2(null,i__34965_35092);
cljs.core.async.impl.dispatch.run(((function (seq__34962_35089,chunk__34963_35090,count__34964_35091,i__34965_35092,cb_35093,val,vec__34952,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return (cb_35093.cljs$core$IFn$_invoke$arity$1 ? cb_35093.cljs$core$IFn$_invoke$arity$1(true) : cb_35093.call(null,true));
});})(seq__34962_35089,chunk__34963_35090,count__34964_35091,i__34965_35092,cb_35093,val,vec__34952,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__35097 = seq__34962_35089;
var G__35098 = chunk__34963_35090;
var G__35099 = count__34964_35091;
var G__35100 = (i__34965_35092 + (1));
seq__34962_35089 = G__35097;
chunk__34963_35090 = G__35098;
count__34964_35091 = G__35099;
i__34965_35092 = G__35100;
continue;
} else {
var temp__5735__auto___35101 = cljs.core.seq(seq__34962_35089);
if(temp__5735__auto___35101){
var seq__34962_35102__$1 = temp__5735__auto___35101;
if(cljs.core.chunked_seq_QMARK_(seq__34962_35102__$1)){
var c__4609__auto___35103 = cljs.core.chunk_first(seq__34962_35102__$1);
var G__35104 = cljs.core.chunk_rest(seq__34962_35102__$1);
var G__35105 = c__4609__auto___35103;
var G__35106 = cljs.core.count(c__4609__auto___35103);
var G__35107 = (0);
seq__34962_35089 = G__35104;
chunk__34963_35090 = G__35105;
count__34964_35091 = G__35106;
i__34965_35092 = G__35107;
continue;
} else {
var cb_35108 = cljs.core.first(seq__34962_35102__$1);
cljs.core.async.impl.dispatch.run(((function (seq__34962_35089,chunk__34963_35090,count__34964_35091,i__34965_35092,cb_35108,seq__34962_35102__$1,temp__5735__auto___35101,val,vec__34952,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return (cb_35108.cljs$core$IFn$_invoke$arity$1 ? cb_35108.cljs$core$IFn$_invoke$arity$1(true) : cb_35108.call(null,true));
});})(seq__34962_35089,chunk__34963_35090,count__34964_35091,i__34965_35092,cb_35108,seq__34962_35102__$1,temp__5735__auto___35101,val,vec__34952,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__35112 = cljs.core.next(seq__34962_35102__$1);
var G__35113 = null;
var G__35114 = (0);
var G__35115 = (0);
seq__34962_35089 = G__35112;
chunk__34963_35090 = G__35113;
count__34964_35091 = G__35114;
i__34965_35092 = G__35115;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
}));

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__4174__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})())){
var has_val = (function (){var and__4174__auto__ = self__.buf;
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4174__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__4174__auto__ = self__.buf;
if(cljs.core.truth_(and__4174__auto__)){
return (self__.puts.length === (0));
} else {
return and__4174__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_35125 = self__.takes.pop();
if((taker_35125 == null)){
} else {
if(taker_35125.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_35126 = taker_35125.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_35127 = (cljs.core.truth_((function (){var and__4174__auto__ = self__.buf;
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4174__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_35126,val_35127,taker_35125,this$__$1){
return (function (){
return (take_cb_35126.cljs$core$IFn$_invoke$arity$1 ? take_cb_35126.cljs$core$IFn$_invoke$arity$1(val_35127) : take_cb_35126.call(null,val_35127));
});})(take_cb_35126,val_35127,taker_35125,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__34994 = (function (){var or__4185__auto__ = exh;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__34994.cljs$core$IFn$_invoke$arity$1 ? fexpr__34994.cljs$core$IFn$_invoke$arity$1(t) : fexpr__34994.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__35001 = arguments.length;
switch (G__35001) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__35138 = null;
var G__35138__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e35004){var t = e35004;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__35138__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e35005){var t = e35005;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__35138 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__35138__1.call(this,buf__$1);
case 2:
return G__35138__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35138.cljs$core$IFn$_invoke$arity$1 = G__35138__1;
G__35138.cljs$core$IFn$_invoke$arity$2 = G__35138__2;
return G__35138;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.impl.channels.js.map
