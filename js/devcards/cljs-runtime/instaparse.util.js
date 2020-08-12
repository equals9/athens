goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55057 = arguments.length;
var i__4737__auto___55058 = (0);
while(true){
if((i__4737__auto___55058 < len__4736__auto___55057)){
args__4742__auto__.push((arguments[i__4737__auto___55058]));

var G__55059 = (i__4737__auto___55058 + (1));
i__4737__auto___55058 = G__55059;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq55054){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55054));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55060 = arguments.length;
var i__4737__auto___55061 = (0);
while(true){
if((i__4737__auto___55061 < len__4736__auto___55060)){
args__4742__auto__.push((arguments[i__4737__auto___55061]));

var G__55062 = (i__4737__auto___55061 + (1));
i__4737__auto___55061 = G__55062;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq55055){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55055));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__55056 = "";
var G__55056__$1 = (cljs.core.truth_(re.ignoreCase)?[G__55056,"i"].join(''):G__55056);
var G__55056__$2 = (cljs.core.truth_(re.multiline)?[G__55056__$1,"m"].join(''):G__55056__$1);
if(cljs.core.truth_(re.unicode)){
return [G__55056__$2,"u"].join('');
} else {
return G__55056__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
