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
var G__55893 = (line + (1));
var G__55894 = (1);
var G__55895 = (counter + (1));
line = G__55893;
col = G__55894;
counter = G__55895;
continue;
} else {
var G__55897 = line;
var G__55898 = (col + (1));
var G__55899 = (counter + (1));
line = G__55897;
col = G__55898;
counter = G__55899;
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
var G__55902 = cljs.core.next(chars);
var G__55903 = (n__$1 - (1));
chars = G__55902;
n__$1 = G__55903;
continue;
} else {
var G__55905 = cljs.core.next(chars);
var G__55906 = n__$1;
chars = G__55905;
n__$1 = G__55906;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55878){
var map__55879 = p__55878;
var map__55879__$1 = (((((!((map__55879 == null))))?(((((map__55879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55879):map__55879);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55879__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55879__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55879__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55879__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__55882_55907 = cljs.core.seq(full_reasons);
var chunk__55883_55908 = null;
var count__55884_55909 = (0);
var i__55885_55910 = (0);
while(true){
if((i__55885_55910 < count__55884_55909)){
var r_55911 = chunk__55883_55908.cljs$core$IIndexed$_nth$arity$2(null,i__55885_55910);
instaparse.failure.print_reason(r_55911);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55912 = seq__55882_55907;
var G__55913 = chunk__55883_55908;
var G__55914 = count__55884_55909;
var G__55915 = (i__55885_55910 + (1));
seq__55882_55907 = G__55912;
chunk__55883_55908 = G__55913;
count__55884_55909 = G__55914;
i__55885_55910 = G__55915;
continue;
} else {
var temp__5735__auto___55916 = cljs.core.seq(seq__55882_55907);
if(temp__5735__auto___55916){
var seq__55882_55917__$1 = temp__5735__auto___55916;
if(cljs.core.chunked_seq_QMARK_(seq__55882_55917__$1)){
var c__4609__auto___55918 = cljs.core.chunk_first(seq__55882_55917__$1);
var G__55919 = cljs.core.chunk_rest(seq__55882_55917__$1);
var G__55920 = c__4609__auto___55918;
var G__55921 = cljs.core.count(c__4609__auto___55918);
var G__55922 = (0);
seq__55882_55907 = G__55919;
chunk__55883_55908 = G__55920;
count__55884_55909 = G__55921;
i__55885_55910 = G__55922;
continue;
} else {
var r_55923 = cljs.core.first(seq__55882_55917__$1);
instaparse.failure.print_reason(r_55923);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55924 = cljs.core.next(seq__55882_55917__$1);
var G__55925 = null;
var G__55926 = (0);
var G__55927 = (0);
seq__55882_55907 = G__55924;
chunk__55883_55908 = G__55925;
count__55884_55909 = G__55926;
i__55885_55910 = G__55927;
continue;
}
} else {
}
}
break;
}

var seq__55887 = cljs.core.seq(partial_reasons);
var chunk__55888 = null;
var count__55889 = (0);
var i__55890 = (0);
while(true){
if((i__55890 < count__55889)){
var r = chunk__55888.cljs$core$IIndexed$_nth$arity$2(null,i__55890);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55928 = seq__55887;
var G__55929 = chunk__55888;
var G__55930 = count__55889;
var G__55931 = (i__55890 + (1));
seq__55887 = G__55928;
chunk__55888 = G__55929;
count__55889 = G__55930;
i__55890 = G__55931;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55887);
if(temp__5735__auto__){
var seq__55887__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55887__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__55887__$1);
var G__55932 = cljs.core.chunk_rest(seq__55887__$1);
var G__55933 = c__4609__auto__;
var G__55934 = cljs.core.count(c__4609__auto__);
var G__55935 = (0);
seq__55887 = G__55932;
chunk__55888 = G__55933;
count__55889 = G__55934;
i__55890 = G__55935;
continue;
} else {
var r = cljs.core.first(seq__55887__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55936 = cljs.core.next(seq__55887__$1);
var G__55937 = null;
var G__55938 = (0);
var G__55939 = (0);
seq__55887 = G__55936;
chunk__55888 = G__55937;
count__55889 = G__55938;
i__55890 = G__55939;
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
