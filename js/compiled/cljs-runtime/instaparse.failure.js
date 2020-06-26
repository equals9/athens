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
var G__63493 = (line + (1));
var G__63494 = (1);
var G__63495 = (counter + (1));
line = G__63493;
col = G__63494;
counter = G__63495;
continue;
} else {
var G__63496 = line;
var G__63497 = (col + (1));
var G__63498 = (counter + (1));
line = G__63496;
col = G__63497;
counter = G__63498;
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
var G__63499 = cljs.core.next(chars);
var G__63500 = (n__$1 - (1));
chars = G__63499;
n__$1 = G__63500;
continue;
} else {
var G__63501 = cljs.core.next(chars);
var G__63502 = n__$1;
chars = G__63501;
n__$1 = G__63502;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63482){
var map__63483 = p__63482;
var map__63483__$1 = (((((!((map__63483 == null))))?(((((map__63483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63483):map__63483);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63483__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63483__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63483__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63483__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63485_63505 = cljs.core.seq(full_reasons);
var chunk__63486_63506 = null;
var count__63487_63507 = (0);
var i__63488_63508 = (0);
while(true){
if((i__63488_63508 < count__63487_63507)){
var r_63509 = chunk__63486_63506.cljs$core$IIndexed$_nth$arity$2(null,i__63488_63508);
instaparse.failure.print_reason(r_63509);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63510 = seq__63485_63505;
var G__63511 = chunk__63486_63506;
var G__63512 = count__63487_63507;
var G__63513 = (i__63488_63508 + (1));
seq__63485_63505 = G__63510;
chunk__63486_63506 = G__63511;
count__63487_63507 = G__63512;
i__63488_63508 = G__63513;
continue;
} else {
var temp__5735__auto___63515 = cljs.core.seq(seq__63485_63505);
if(temp__5735__auto___63515){
var seq__63485_63516__$1 = temp__5735__auto___63515;
if(cljs.core.chunked_seq_QMARK_(seq__63485_63516__$1)){
var c__4609__auto___63517 = cljs.core.chunk_first(seq__63485_63516__$1);
var G__63518 = cljs.core.chunk_rest(seq__63485_63516__$1);
var G__63519 = c__4609__auto___63517;
var G__63520 = cljs.core.count(c__4609__auto___63517);
var G__63521 = (0);
seq__63485_63505 = G__63518;
chunk__63486_63506 = G__63519;
count__63487_63507 = G__63520;
i__63488_63508 = G__63521;
continue;
} else {
var r_63522 = cljs.core.first(seq__63485_63516__$1);
instaparse.failure.print_reason(r_63522);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63523 = cljs.core.next(seq__63485_63516__$1);
var G__63524 = null;
var G__63525 = (0);
var G__63526 = (0);
seq__63485_63505 = G__63523;
chunk__63486_63506 = G__63524;
count__63487_63507 = G__63525;
i__63488_63508 = G__63526;
continue;
}
} else {
}
}
break;
}

var seq__63489 = cljs.core.seq(partial_reasons);
var chunk__63490 = null;
var count__63491 = (0);
var i__63492 = (0);
while(true){
if((i__63492 < count__63491)){
var r = chunk__63490.cljs$core$IIndexed$_nth$arity$2(null,i__63492);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63527 = seq__63489;
var G__63528 = chunk__63490;
var G__63529 = count__63491;
var G__63530 = (i__63492 + (1));
seq__63489 = G__63527;
chunk__63490 = G__63528;
count__63491 = G__63529;
i__63492 = G__63530;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63489);
if(temp__5735__auto__){
var seq__63489__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63489__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63489__$1);
var G__63531 = cljs.core.chunk_rest(seq__63489__$1);
var G__63532 = c__4609__auto__;
var G__63533 = cljs.core.count(c__4609__auto__);
var G__63534 = (0);
seq__63489 = G__63531;
chunk__63490 = G__63532;
count__63491 = G__63533;
i__63492 = G__63534;
continue;
} else {
var r = cljs.core.first(seq__63489__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63535 = cljs.core.next(seq__63489__$1);
var G__63536 = null;
var G__63537 = (0);
var G__63538 = (0);
seq__63489 = G__63535;
chunk__63490 = G__63536;
count__63491 = G__63537;
i__63492 = G__63538;
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
