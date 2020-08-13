goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55044 = arguments.length;
var i__4737__auto___55045 = (0);
while(true){
if((i__4737__auto___55045 < len__4736__auto___55044)){
args__4742__auto__.push((arguments[i__4737__auto___55045]));

var G__55046 = (i__4737__auto___55045 + (1));
i__4737__auto___55045 = G__55046;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq55040){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55040));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55047 = arguments.length;
var i__4737__auto___55048 = (0);
while(true){
if((i__4737__auto___55048 < len__4736__auto___55047)){
args__4742__auto__.push((arguments[i__4737__auto___55048]));

var G__55049 = (i__4737__auto___55048 + (1));
i__4737__auto___55048 = G__55049;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq55041){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55041));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__55042 = "";
var G__55042__$1 = (cljs.core.truth_(re.ignoreCase)?[G__55042,"i"].join(''):G__55042);
var G__55042__$2 = (cljs.core.truth_(re.multiline)?[G__55042__$1,"m"].join(''):G__55042__$1);
if(cljs.core.truth_(re.unicode)){
return [G__55042__$2,"u"].join('');
} else {
return G__55042__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
