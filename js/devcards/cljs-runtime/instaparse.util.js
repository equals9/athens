goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55889 = arguments.length;
var i__4790__auto___55890 = (0);
while(true){
if((i__4790__auto___55890 < len__4789__auto___55889)){
args__4795__auto__.push((arguments[i__4790__auto___55890]));

var G__55891 = (i__4790__auto___55890 + (1));
i__4790__auto___55890 = G__55891;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq55859){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55859));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55900 = arguments.length;
var i__4790__auto___55901 = (0);
while(true){
if((i__4790__auto___55901 < len__4789__auto___55900)){
args__4795__auto__.push((arguments[i__4790__auto___55901]));

var G__55902 = (i__4790__auto___55901 + (1));
i__4790__auto___55901 = G__55902;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq55862){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55862));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__55863 = "";
var G__55863__$1 = (cljs.core.truth_(re.ignoreCase)?[G__55863,"i"].join(''):G__55863);
var G__55863__$2 = (cljs.core.truth_(re.multiline)?[G__55863__$1,"m"].join(''):G__55863__$1);
if(cljs.core.truth_(re.unicode)){
return [G__55863__$2,"u"].join('');
} else {
return G__55863__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
