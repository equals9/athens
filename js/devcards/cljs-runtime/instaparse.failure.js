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
var G__55007 = (line + (1));
var G__55008 = (1);
var G__55009 = (counter + (1));
line = G__55007;
col = G__55008;
counter = G__55009;
continue;
} else {
var G__55010 = line;
var G__55011 = (col + (1));
var G__55012 = (counter + (1));
line = G__55010;
col = G__55011;
counter = G__55012;
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
var G__55015 = cljs.core.next(chars);
var G__55016 = (n__$1 - (1));
chars = G__55015;
n__$1 = G__55016;
continue;
} else {
var G__55017 = cljs.core.next(chars);
var G__55018 = n__$1;
chars = G__55017;
n__$1 = G__55018;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__54986){
var map__54987 = p__54986;
var map__54987__$1 = (((((!((map__54987 == null))))?(((((map__54987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54987):map__54987);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54987__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54987__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54987__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54987__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__54989_55020 = cljs.core.seq(full_reasons);
var chunk__54990_55021 = null;
var count__54991_55022 = (0);
var i__54992_55023 = (0);
while(true){
if((i__54992_55023 < count__54991_55022)){
var r_55024 = chunk__54990_55021.cljs$core$IIndexed$_nth$arity$2(null,i__54992_55023);
instaparse.failure.print_reason(r_55024);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55025 = seq__54989_55020;
var G__55026 = chunk__54990_55021;
var G__55027 = count__54991_55022;
var G__55028 = (i__54992_55023 + (1));
seq__54989_55020 = G__55025;
chunk__54990_55021 = G__55026;
count__54991_55022 = G__55027;
i__54992_55023 = G__55028;
continue;
} else {
var temp__5735__auto___55029 = cljs.core.seq(seq__54989_55020);
if(temp__5735__auto___55029){
var seq__54989_55030__$1 = temp__5735__auto___55029;
if(cljs.core.chunked_seq_QMARK_(seq__54989_55030__$1)){
var c__4556__auto___55031 = cljs.core.chunk_first(seq__54989_55030__$1);
var G__55032 = cljs.core.chunk_rest(seq__54989_55030__$1);
var G__55033 = c__4556__auto___55031;
var G__55034 = cljs.core.count(c__4556__auto___55031);
var G__55035 = (0);
seq__54989_55020 = G__55032;
chunk__54990_55021 = G__55033;
count__54991_55022 = G__55034;
i__54992_55023 = G__55035;
continue;
} else {
var r_55036 = cljs.core.first(seq__54989_55030__$1);
instaparse.failure.print_reason(r_55036);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55037 = cljs.core.next(seq__54989_55030__$1);
var G__55038 = null;
var G__55039 = (0);
var G__55040 = (0);
seq__54989_55020 = G__55037;
chunk__54990_55021 = G__55038;
count__54991_55022 = G__55039;
i__54992_55023 = G__55040;
continue;
}
} else {
}
}
break;
}

var seq__54994 = cljs.core.seq(partial_reasons);
var chunk__54995 = null;
var count__54996 = (0);
var i__54997 = (0);
while(true){
if((i__54997 < count__54996)){
var r = chunk__54995.cljs$core$IIndexed$_nth$arity$2(null,i__54997);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55041 = seq__54994;
var G__55042 = chunk__54995;
var G__55043 = count__54996;
var G__55044 = (i__54997 + (1));
seq__54994 = G__55041;
chunk__54995 = G__55042;
count__54996 = G__55043;
i__54997 = G__55044;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54994);
if(temp__5735__auto__){
var seq__54994__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54994__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54994__$1);
var G__55045 = cljs.core.chunk_rest(seq__54994__$1);
var G__55046 = c__4556__auto__;
var G__55047 = cljs.core.count(c__4556__auto__);
var G__55048 = (0);
seq__54994 = G__55045;
chunk__54995 = G__55046;
count__54996 = G__55047;
i__54997 = G__55048;
continue;
} else {
var r = cljs.core.first(seq__54994__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55049 = cljs.core.next(seq__54994__$1);
var G__55050 = null;
var G__55051 = (0);
var G__55052 = (0);
seq__54994 = G__55049;
chunk__54995 = G__55050;
count__54996 = G__55051;
i__54997 = G__55052;
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
