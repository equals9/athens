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
var G__63488 = (line + (1));
var G__63489 = (1);
var G__63490 = (counter + (1));
line = G__63488;
col = G__63489;
counter = G__63490;
continue;
} else {
var G__63491 = line;
var G__63492 = (col + (1));
var G__63493 = (counter + (1));
line = G__63491;
col = G__63492;
counter = G__63493;
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
var G__63494 = cljs.core.next(chars);
var G__63495 = (n__$1 - (1));
chars = G__63494;
n__$1 = G__63495;
continue;
} else {
var G__63496 = cljs.core.next(chars);
var G__63497 = n__$1;
chars = G__63496;
n__$1 = G__63497;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63477){
var map__63478 = p__63477;
var map__63478__$1 = (((((!((map__63478 == null))))?(((((map__63478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63478):map__63478);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63478__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63478__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63478__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63478__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63480_63498 = cljs.core.seq(full_reasons);
var chunk__63481_63499 = null;
var count__63482_63500 = (0);
var i__63483_63501 = (0);
while(true){
if((i__63483_63501 < count__63482_63500)){
var r_63502 = chunk__63481_63499.cljs$core$IIndexed$_nth$arity$2(null,i__63483_63501);
instaparse.failure.print_reason(r_63502);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63503 = seq__63480_63498;
var G__63504 = chunk__63481_63499;
var G__63505 = count__63482_63500;
var G__63506 = (i__63483_63501 + (1));
seq__63480_63498 = G__63503;
chunk__63481_63499 = G__63504;
count__63482_63500 = G__63505;
i__63483_63501 = G__63506;
continue;
} else {
var temp__5735__auto___63507 = cljs.core.seq(seq__63480_63498);
if(temp__5735__auto___63507){
var seq__63480_63508__$1 = temp__5735__auto___63507;
if(cljs.core.chunked_seq_QMARK_(seq__63480_63508__$1)){
var c__4609__auto___63509 = cljs.core.chunk_first(seq__63480_63508__$1);
var G__63510 = cljs.core.chunk_rest(seq__63480_63508__$1);
var G__63511 = c__4609__auto___63509;
var G__63512 = cljs.core.count(c__4609__auto___63509);
var G__63513 = (0);
seq__63480_63498 = G__63510;
chunk__63481_63499 = G__63511;
count__63482_63500 = G__63512;
i__63483_63501 = G__63513;
continue;
} else {
var r_63514 = cljs.core.first(seq__63480_63508__$1);
instaparse.failure.print_reason(r_63514);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63515 = cljs.core.next(seq__63480_63508__$1);
var G__63516 = null;
var G__63517 = (0);
var G__63518 = (0);
seq__63480_63498 = G__63515;
chunk__63481_63499 = G__63516;
count__63482_63500 = G__63517;
i__63483_63501 = G__63518;
continue;
}
} else {
}
}
break;
}

var seq__63484 = cljs.core.seq(partial_reasons);
var chunk__63485 = null;
var count__63486 = (0);
var i__63487 = (0);
while(true){
if((i__63487 < count__63486)){
var r = chunk__63485.cljs$core$IIndexed$_nth$arity$2(null,i__63487);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63519 = seq__63484;
var G__63520 = chunk__63485;
var G__63521 = count__63486;
var G__63522 = (i__63487 + (1));
seq__63484 = G__63519;
chunk__63485 = G__63520;
count__63486 = G__63521;
i__63487 = G__63522;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63484);
if(temp__5735__auto__){
var seq__63484__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63484__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63484__$1);
var G__63524 = cljs.core.chunk_rest(seq__63484__$1);
var G__63525 = c__4609__auto__;
var G__63526 = cljs.core.count(c__4609__auto__);
var G__63527 = (0);
seq__63484 = G__63524;
chunk__63485 = G__63525;
count__63486 = G__63526;
i__63487 = G__63527;
continue;
} else {
var r = cljs.core.first(seq__63484__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63528 = cljs.core.next(seq__63484__$1);
var G__63529 = null;
var G__63530 = (0);
var G__63531 = (0);
seq__63484 = G__63528;
chunk__63485 = G__63529;
count__63486 = G__63530;
i__63487 = G__63531;
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
