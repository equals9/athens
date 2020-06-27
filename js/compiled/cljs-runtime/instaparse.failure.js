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
var G__63521 = (line + (1));
var G__63522 = (1);
var G__63523 = (counter + (1));
line = G__63521;
col = G__63522;
counter = G__63523;
continue;
} else {
var G__63524 = line;
var G__63525 = (col + (1));
var G__63526 = (counter + (1));
line = G__63524;
col = G__63525;
counter = G__63526;
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
var G__63527 = cljs.core.next(chars);
var G__63528 = (n__$1 - (1));
chars = G__63527;
n__$1 = G__63528;
continue;
} else {
var G__63529 = cljs.core.next(chars);
var G__63530 = n__$1;
chars = G__63529;
n__$1 = G__63530;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63507){
var map__63508 = p__63507;
var map__63508__$1 = (((((!((map__63508 == null))))?(((((map__63508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63508):map__63508);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63508__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63508__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63508__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63508__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63510_63531 = cljs.core.seq(full_reasons);
var chunk__63511_63532 = null;
var count__63512_63533 = (0);
var i__63513_63534 = (0);
while(true){
if((i__63513_63534 < count__63512_63533)){
var r_63535 = chunk__63511_63532.cljs$core$IIndexed$_nth$arity$2(null,i__63513_63534);
instaparse.failure.print_reason(r_63535);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63536 = seq__63510_63531;
var G__63537 = chunk__63511_63532;
var G__63538 = count__63512_63533;
var G__63539 = (i__63513_63534 + (1));
seq__63510_63531 = G__63536;
chunk__63511_63532 = G__63537;
count__63512_63533 = G__63538;
i__63513_63534 = G__63539;
continue;
} else {
var temp__5735__auto___63540 = cljs.core.seq(seq__63510_63531);
if(temp__5735__auto___63540){
var seq__63510_63541__$1 = temp__5735__auto___63540;
if(cljs.core.chunked_seq_QMARK_(seq__63510_63541__$1)){
var c__4609__auto___63542 = cljs.core.chunk_first(seq__63510_63541__$1);
var G__63543 = cljs.core.chunk_rest(seq__63510_63541__$1);
var G__63544 = c__4609__auto___63542;
var G__63545 = cljs.core.count(c__4609__auto___63542);
var G__63546 = (0);
seq__63510_63531 = G__63543;
chunk__63511_63532 = G__63544;
count__63512_63533 = G__63545;
i__63513_63534 = G__63546;
continue;
} else {
var r_63547 = cljs.core.first(seq__63510_63541__$1);
instaparse.failure.print_reason(r_63547);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63548 = cljs.core.next(seq__63510_63541__$1);
var G__63549 = null;
var G__63550 = (0);
var G__63551 = (0);
seq__63510_63531 = G__63548;
chunk__63511_63532 = G__63549;
count__63512_63533 = G__63550;
i__63513_63534 = G__63551;
continue;
}
} else {
}
}
break;
}

var seq__63516 = cljs.core.seq(partial_reasons);
var chunk__63517 = null;
var count__63518 = (0);
var i__63519 = (0);
while(true){
if((i__63519 < count__63518)){
var r = chunk__63517.cljs$core$IIndexed$_nth$arity$2(null,i__63519);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63552 = seq__63516;
var G__63553 = chunk__63517;
var G__63554 = count__63518;
var G__63555 = (i__63519 + (1));
seq__63516 = G__63552;
chunk__63517 = G__63553;
count__63518 = G__63554;
i__63519 = G__63555;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63516);
if(temp__5735__auto__){
var seq__63516__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63516__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63516__$1);
var G__63557 = cljs.core.chunk_rest(seq__63516__$1);
var G__63558 = c__4609__auto__;
var G__63559 = cljs.core.count(c__4609__auto__);
var G__63560 = (0);
seq__63516 = G__63557;
chunk__63517 = G__63558;
count__63518 = G__63559;
i__63519 = G__63560;
continue;
} else {
var r = cljs.core.first(seq__63516__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63561 = cljs.core.next(seq__63516__$1);
var G__63562 = null;
var G__63563 = (0);
var G__63564 = (0);
seq__63516 = G__63561;
chunk__63517 = G__63562;
count__63518 = G__63563;
i__63519 = G__63564;
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
