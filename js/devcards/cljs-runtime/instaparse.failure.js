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
var G__55859 = (line + (1));
var G__55860 = (1);
var G__55861 = (counter + (1));
line = G__55859;
col = G__55860;
counter = G__55861;
continue;
} else {
var G__55862 = line;
var G__55863 = (col + (1));
var G__55864 = (counter + (1));
line = G__55862;
col = G__55863;
counter = G__55864;
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
var G__55865 = cljs.core.next(chars);
var G__55866 = (n__$1 - (1));
chars = G__55865;
n__$1 = G__55866;
continue;
} else {
var G__55867 = cljs.core.next(chars);
var G__55868 = n__$1;
chars = G__55867;
n__$1 = G__55868;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55848){
var map__55849 = p__55848;
var map__55849__$1 = (((((!((map__55849 == null))))?(((((map__55849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55849):map__55849);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55849__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55849__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55849__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55849__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__55851_55869 = cljs.core.seq(full_reasons);
var chunk__55852_55870 = null;
var count__55853_55871 = (0);
var i__55854_55872 = (0);
while(true){
if((i__55854_55872 < count__55853_55871)){
var r_55873 = chunk__55852_55870.cljs$core$IIndexed$_nth$arity$2(null,i__55854_55872);
instaparse.failure.print_reason(r_55873);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55874 = seq__55851_55869;
var G__55875 = chunk__55852_55870;
var G__55876 = count__55853_55871;
var G__55877 = (i__55854_55872 + (1));
seq__55851_55869 = G__55874;
chunk__55852_55870 = G__55875;
count__55853_55871 = G__55876;
i__55854_55872 = G__55877;
continue;
} else {
var temp__5735__auto___55878 = cljs.core.seq(seq__55851_55869);
if(temp__5735__auto___55878){
var seq__55851_55879__$1 = temp__5735__auto___55878;
if(cljs.core.chunked_seq_QMARK_(seq__55851_55879__$1)){
var c__4609__auto___55880 = cljs.core.chunk_first(seq__55851_55879__$1);
var G__55881 = cljs.core.chunk_rest(seq__55851_55879__$1);
var G__55882 = c__4609__auto___55880;
var G__55883 = cljs.core.count(c__4609__auto___55880);
var G__55884 = (0);
seq__55851_55869 = G__55881;
chunk__55852_55870 = G__55882;
count__55853_55871 = G__55883;
i__55854_55872 = G__55884;
continue;
} else {
var r_55885 = cljs.core.first(seq__55851_55879__$1);
instaparse.failure.print_reason(r_55885);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55886 = cljs.core.next(seq__55851_55879__$1);
var G__55887 = null;
var G__55888 = (0);
var G__55889 = (0);
seq__55851_55869 = G__55886;
chunk__55852_55870 = G__55887;
count__55853_55871 = G__55888;
i__55854_55872 = G__55889;
continue;
}
} else {
}
}
break;
}

var seq__55855 = cljs.core.seq(partial_reasons);
var chunk__55856 = null;
var count__55857 = (0);
var i__55858 = (0);
while(true){
if((i__55858 < count__55857)){
var r = chunk__55856.cljs$core$IIndexed$_nth$arity$2(null,i__55858);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55890 = seq__55855;
var G__55891 = chunk__55856;
var G__55892 = count__55857;
var G__55893 = (i__55858 + (1));
seq__55855 = G__55890;
chunk__55856 = G__55891;
count__55857 = G__55892;
i__55858 = G__55893;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55855);
if(temp__5735__auto__){
var seq__55855__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55855__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__55855__$1);
var G__55894 = cljs.core.chunk_rest(seq__55855__$1);
var G__55895 = c__4609__auto__;
var G__55896 = cljs.core.count(c__4609__auto__);
var G__55897 = (0);
seq__55855 = G__55894;
chunk__55856 = G__55895;
count__55857 = G__55896;
i__55858 = G__55897;
continue;
} else {
var r = cljs.core.first(seq__55855__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55898 = cljs.core.next(seq__55855__$1);
var G__55899 = null;
var G__55900 = (0);
var G__55901 = (0);
seq__55855 = G__55898;
chunk__55856 = G__55899;
count__55857 = G__55900;
i__55858 = G__55901;
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
