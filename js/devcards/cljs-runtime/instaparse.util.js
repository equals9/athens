goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55952 = arguments.length;
var i__4790__auto___55953 = (0);
while(true){
if((i__4790__auto___55953 < len__4789__auto___55952)){
args__4795__auto__.push((arguments[i__4790__auto___55953]));

var G__55954 = (i__4790__auto___55953 + (1));
i__4790__auto___55953 = G__55954;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq55949){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55949));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55955 = arguments.length;
var i__4790__auto___55956 = (0);
while(true){
if((i__4790__auto___55956 < len__4789__auto___55955)){
args__4795__auto__.push((arguments[i__4790__auto___55956]));

var G__55957 = (i__4790__auto___55956 + (1));
i__4790__auto___55956 = G__55957;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq55950){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55950));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__55951 = "";
var G__55951__$1 = (cljs.core.truth_(re.ignoreCase)?[G__55951,"i"].join(''):G__55951);
var G__55951__$2 = (cljs.core.truth_(re.multiline)?[G__55951__$1,"m"].join(''):G__55951__$1);
if(cljs.core.truth_(re.unicode)){
return [G__55951__$2,"u"].join('');
} else {
return G__55951__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
