goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55976 = arguments.length;
var i__4790__auto___55977 = (0);
while(true){
if((i__4790__auto___55977 < len__4789__auto___55976)){
args__4795__auto__.push((arguments[i__4790__auto___55977]));

var G__55978 = (i__4790__auto___55977 + (1));
i__4790__auto___55977 = G__55978;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq55973){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55973));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55979 = arguments.length;
var i__4790__auto___55980 = (0);
while(true){
if((i__4790__auto___55980 < len__4789__auto___55979)){
args__4795__auto__.push((arguments[i__4790__auto___55980]));

var G__55981 = (i__4790__auto___55980 + (1));
i__4790__auto___55980 = G__55981;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq55974){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55974));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__55975 = "";
var G__55975__$1 = (cljs.core.truth_(re.ignoreCase)?[G__55975,"i"].join(''):G__55975);
var G__55975__$2 = (cljs.core.truth_(re.multiline)?[G__55975__$1,"m"].join(''):G__55975__$1);
if(cljs.core.truth_(re.unicode)){
return [G__55975__$2,"u"].join('');
} else {
return G__55975__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
