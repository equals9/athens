goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__55938 = (line + (1));
var G__55939 = (1);
var G__55940 = (counter + (1));
line = G__55938;
col = G__55939;
counter = G__55940;
continue;
} else {
var G__55941 = line;
var G__55942 = (col + (1));
var G__55943 = (counter + (1));
line = G__55941;
col = G__55942;
counter = G__55943;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__55944 = cljs.core.next(chars);
var G__55945 = (n__$1 - (1));
chars = G__55944;
n__$1 = G__55945;
continue;
} else {
var G__55946 = cljs.core.next(chars);
var G__55947 = n__$1;
chars = G__55946;
n__$1 = G__55947;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55924){
var map__55925 = p__55924;
var map__55925__$1 = (((((!((map__55925 == null))))?(((((map__55925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55925):map__55925);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55925__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55925__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55925__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55925__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__55927_55948 = cljs.core.seq(full_reasons);
var chunk__55928_55949 = null;
var count__55929_55950 = (0);
var i__55930_55951 = (0);
while(true){
if((i__55930_55951 < count__55929_55950)){
var r_55952 = chunk__55928_55949.cljs$core$IIndexed$_nth$arity$2(null,i__55930_55951);
instaparse.failure.print_reason(r_55952);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55953 = seq__55927_55948;
var G__55954 = chunk__55928_55949;
var G__55955 = count__55929_55950;
var G__55956 = (i__55930_55951 + (1));
seq__55927_55948 = G__55953;
chunk__55928_55949 = G__55954;
count__55929_55950 = G__55955;
i__55930_55951 = G__55956;
continue;
} else {
var temp__5735__auto___55957 = cljs.core.seq(seq__55927_55948);
if(temp__5735__auto___55957){
var seq__55927_55958__$1 = temp__5735__auto___55957;
if(cljs.core.chunked_seq_QMARK_(seq__55927_55958__$1)){
var c__4609__auto___55959 = cljs.core.chunk_first(seq__55927_55958__$1);
var G__55960 = cljs.core.chunk_rest(seq__55927_55958__$1);
var G__55961 = c__4609__auto___55959;
var G__55962 = cljs.core.count(c__4609__auto___55959);
var G__55963 = (0);
seq__55927_55948 = G__55960;
chunk__55928_55949 = G__55961;
count__55929_55950 = G__55962;
i__55930_55951 = G__55963;
continue;
} else {
var r_55964 = cljs.core.first(seq__55927_55958__$1);
instaparse.failure.print_reason(r_55964);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55965 = cljs.core.next(seq__55927_55958__$1);
var G__55966 = null;
var G__55967 = (0);
var G__55968 = (0);
seq__55927_55948 = G__55965;
chunk__55928_55949 = G__55966;
count__55929_55950 = G__55967;
i__55930_55951 = G__55968;
continue;
}
} else {
}
}
break;
}

var seq__55933 = cljs.core.seq(partial_reasons);
var chunk__55934 = null;
var count__55935 = (0);
var i__55936 = (0);
while(true){
if((i__55936 < count__55935)){
var r = chunk__55934.cljs$core$IIndexed$_nth$arity$2(null,i__55936);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55969 = seq__55933;
var G__55970 = chunk__55934;
var G__55971 = count__55935;
var G__55972 = (i__55936 + (1));
seq__55933 = G__55969;
chunk__55934 = G__55970;
count__55935 = G__55971;
i__55936 = G__55972;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55933);
if(temp__5735__auto__){
var seq__55933__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55933__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__55933__$1);
var G__55973 = cljs.core.chunk_rest(seq__55933__$1);
var G__55974 = c__4609__auto__;
var G__55975 = cljs.core.count(c__4609__auto__);
var G__55976 = (0);
seq__55933 = G__55973;
chunk__55934 = G__55974;
count__55935 = G__55975;
i__55936 = G__55976;
continue;
} else {
var r = cljs.core.first(seq__55933__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55977 = cljs.core.next(seq__55933__$1);
var G__55978 = null;
var G__55979 = (0);
var G__55980 = (0);
seq__55933 = G__55977;
chunk__55934 = G__55978;
count__55935 = G__55979;
i__55936 = G__55980;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
