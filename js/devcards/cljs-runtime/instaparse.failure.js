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
var G__55006 = (line + (1));
var G__55007 = (1);
var G__55008 = (counter + (1));
line = G__55006;
col = G__55007;
counter = G__55008;
continue;
} else {
var G__55009 = line;
var G__55010 = (col + (1));
var G__55011 = (counter + (1));
line = G__55009;
col = G__55010;
counter = G__55011;
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
var G__55012 = cljs.core.next(chars);
var G__55013 = (n__$1 - (1));
chars = G__55012;
n__$1 = G__55013;
continue;
} else {
var G__55014 = cljs.core.next(chars);
var G__55015 = n__$1;
chars = G__55014;
n__$1 = G__55015;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__54984){
var map__54985 = p__54984;
var map__54985__$1 = (((((!((map__54985 == null))))?(((((map__54985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54985):map__54985);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54985__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54985__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54985__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54985__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__54995_55019 = cljs.core.seq(full_reasons);
var chunk__54996_55020 = null;
var count__54997_55021 = (0);
var i__54998_55022 = (0);
while(true){
if((i__54998_55022 < count__54997_55021)){
var r_55023 = chunk__54996_55020.cljs$core$IIndexed$_nth$arity$2(null,i__54998_55022);
instaparse.failure.print_reason(r_55023);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55024 = seq__54995_55019;
var G__55025 = chunk__54996_55020;
var G__55026 = count__54997_55021;
var G__55027 = (i__54998_55022 + (1));
seq__54995_55019 = G__55024;
chunk__54996_55020 = G__55025;
count__54997_55021 = G__55026;
i__54998_55022 = G__55027;
continue;
} else {
var temp__5735__auto___55028 = cljs.core.seq(seq__54995_55019);
if(temp__5735__auto___55028){
var seq__54995_55029__$1 = temp__5735__auto___55028;
if(cljs.core.chunked_seq_QMARK_(seq__54995_55029__$1)){
var c__4556__auto___55030 = cljs.core.chunk_first(seq__54995_55029__$1);
var G__55031 = cljs.core.chunk_rest(seq__54995_55029__$1);
var G__55032 = c__4556__auto___55030;
var G__55033 = cljs.core.count(c__4556__auto___55030);
var G__55034 = (0);
seq__54995_55019 = G__55031;
chunk__54996_55020 = G__55032;
count__54997_55021 = G__55033;
i__54998_55022 = G__55034;
continue;
} else {
var r_55035 = cljs.core.first(seq__54995_55029__$1);
instaparse.failure.print_reason(r_55035);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55036 = cljs.core.next(seq__54995_55029__$1);
var G__55037 = null;
var G__55038 = (0);
var G__55039 = (0);
seq__54995_55019 = G__55036;
chunk__54996_55020 = G__55037;
count__54997_55021 = G__55038;
i__54998_55022 = G__55039;
continue;
}
} else {
}
}
break;
}

var seq__55002 = cljs.core.seq(partial_reasons);
var chunk__55003 = null;
var count__55004 = (0);
var i__55005 = (0);
while(true){
if((i__55005 < count__55004)){
var r = chunk__55003.cljs$core$IIndexed$_nth$arity$2(null,i__55005);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55044 = seq__55002;
var G__55045 = chunk__55003;
var G__55046 = count__55004;
var G__55047 = (i__55005 + (1));
seq__55002 = G__55044;
chunk__55003 = G__55045;
count__55004 = G__55046;
i__55005 = G__55047;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55002);
if(temp__5735__auto__){
var seq__55002__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55002__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55002__$1);
var G__55049 = cljs.core.chunk_rest(seq__55002__$1);
var G__55050 = c__4556__auto__;
var G__55051 = cljs.core.count(c__4556__auto__);
var G__55052 = (0);
seq__55002 = G__55049;
chunk__55003 = G__55050;
count__55004 = G__55051;
i__55005 = G__55052;
continue;
} else {
var r = cljs.core.first(seq__55002__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55053 = cljs.core.next(seq__55002__$1);
var G__55054 = null;
var G__55055 = (0);
var G__55056 = (0);
seq__55002 = G__55053;
chunk__55003 = G__55054;
count__55004 = G__55055;
i__55005 = G__55056;
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
