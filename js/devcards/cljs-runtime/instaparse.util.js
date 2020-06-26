goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55848 = arguments.length;
var i__4790__auto___55849 = (0);
while(true){
if((i__4790__auto___55849 < len__4789__auto___55848)){
args__4795__auto__.push((arguments[i__4790__auto___55849]));

var G__55850 = (i__4790__auto___55849 + (1));
i__4790__auto___55849 = G__55850;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq55812){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55812));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55851 = arguments.length;
var i__4790__auto___55852 = (0);
while(true){
if((i__4790__auto___55852 < len__4789__auto___55851)){
args__4795__auto__.push((arguments[i__4790__auto___55852]));

var G__55853 = (i__4790__auto___55852 + (1));
i__4790__auto___55852 = G__55853;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq55823){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55823));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__55843 = "";
var G__55843__$1 = (cljs.core.truth_(re.ignoreCase)?[G__55843,"i"].join(''):G__55843);
var G__55843__$2 = (cljs.core.truth_(re.multiline)?[G__55843__$1,"m"].join(''):G__55843__$1);
if(cljs.core.truth_(re.unicode)){
return [G__55843__$2,"u"].join('');
} else {
return G__55843__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
