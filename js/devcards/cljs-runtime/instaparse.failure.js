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
var G__55019 = (line + (1));
var G__55020 = (1);
var G__55021 = (counter + (1));
line = G__55019;
col = G__55020;
counter = G__55021;
continue;
} else {
var G__55022 = line;
var G__55023 = (col + (1));
var G__55024 = (counter + (1));
line = G__55022;
col = G__55023;
counter = G__55024;
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
var G__55025 = cljs.core.next(chars);
var G__55026 = (n__$1 - (1));
chars = G__55025;
n__$1 = G__55026;
continue;
} else {
var G__55027 = cljs.core.next(chars);
var G__55028 = n__$1;
chars = G__55027;
n__$1 = G__55028;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55008){
var map__55009 = p__55008;
var map__55009__$1 = (((((!((map__55009 == null))))?(((((map__55009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55009):map__55009);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55009__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55009__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55009__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55009__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__55011_55030 = cljs.core.seq(full_reasons);
var chunk__55012_55031 = null;
var count__55013_55032 = (0);
var i__55014_55033 = (0);
while(true){
if((i__55014_55033 < count__55013_55032)){
var r_55035 = chunk__55012_55031.cljs$core$IIndexed$_nth$arity$2(null,i__55014_55033);
instaparse.failure.print_reason(r_55035);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55036 = seq__55011_55030;
var G__55037 = chunk__55012_55031;
var G__55038 = count__55013_55032;
var G__55039 = (i__55014_55033 + (1));
seq__55011_55030 = G__55036;
chunk__55012_55031 = G__55037;
count__55013_55032 = G__55038;
i__55014_55033 = G__55039;
continue;
} else {
var temp__5735__auto___55040 = cljs.core.seq(seq__55011_55030);
if(temp__5735__auto___55040){
var seq__55011_55041__$1 = temp__5735__auto___55040;
if(cljs.core.chunked_seq_QMARK_(seq__55011_55041__$1)){
var c__4556__auto___55042 = cljs.core.chunk_first(seq__55011_55041__$1);
var G__55043 = cljs.core.chunk_rest(seq__55011_55041__$1);
var G__55044 = c__4556__auto___55042;
var G__55045 = cljs.core.count(c__4556__auto___55042);
var G__55046 = (0);
seq__55011_55030 = G__55043;
chunk__55012_55031 = G__55044;
count__55013_55032 = G__55045;
i__55014_55033 = G__55046;
continue;
} else {
var r_55047 = cljs.core.first(seq__55011_55041__$1);
instaparse.failure.print_reason(r_55047);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55048 = cljs.core.next(seq__55011_55041__$1);
var G__55049 = null;
var G__55050 = (0);
var G__55051 = (0);
seq__55011_55030 = G__55048;
chunk__55012_55031 = G__55049;
count__55013_55032 = G__55050;
i__55014_55033 = G__55051;
continue;
}
} else {
}
}
break;
}

var seq__55015 = cljs.core.seq(partial_reasons);
var chunk__55016 = null;
var count__55017 = (0);
var i__55018 = (0);
while(true){
if((i__55018 < count__55017)){
var r = chunk__55016.cljs$core$IIndexed$_nth$arity$2(null,i__55018);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55052 = seq__55015;
var G__55053 = chunk__55016;
var G__55054 = count__55017;
var G__55055 = (i__55018 + (1));
seq__55015 = G__55052;
chunk__55016 = G__55053;
count__55017 = G__55054;
i__55018 = G__55055;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55015);
if(temp__5735__auto__){
var seq__55015__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55015__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55015__$1);
var G__55057 = cljs.core.chunk_rest(seq__55015__$1);
var G__55058 = c__4556__auto__;
var G__55059 = cljs.core.count(c__4556__auto__);
var G__55060 = (0);
seq__55015 = G__55057;
chunk__55016 = G__55058;
count__55017 = G__55059;
i__55018 = G__55060;
continue;
} else {
var r = cljs.core.first(seq__55015__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55061 = cljs.core.next(seq__55015__$1);
var G__55062 = null;
var G__55063 = (0);
var G__55064 = (0);
seq__55015 = G__55061;
chunk__55016 = G__55062;
count__55017 = G__55063;
i__55018 = G__55064;
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
