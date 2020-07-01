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
var G__63556 = (line + (1));
var G__63557 = (1);
var G__63558 = (counter + (1));
line = G__63556;
col = G__63557;
counter = G__63558;
continue;
} else {
var G__63559 = line;
var G__63560 = (col + (1));
var G__63561 = (counter + (1));
line = G__63559;
col = G__63560;
counter = G__63561;
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
var G__63562 = cljs.core.next(chars);
var G__63563 = (n__$1 - (1));
chars = G__63562;
n__$1 = G__63563;
continue;
} else {
var G__63564 = cljs.core.next(chars);
var G__63565 = n__$1;
chars = G__63564;
n__$1 = G__63565;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63542){
var map__63543 = p__63542;
var map__63543__$1 = (((((!((map__63543 == null))))?(((((map__63543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63543):map__63543);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63543__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63543__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63543__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63543__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63545_63566 = cljs.core.seq(full_reasons);
var chunk__63546_63567 = null;
var count__63547_63568 = (0);
var i__63548_63569 = (0);
while(true){
if((i__63548_63569 < count__63547_63568)){
var r_63570 = chunk__63546_63567.cljs$core$IIndexed$_nth$arity$2(null,i__63548_63569);
instaparse.failure.print_reason(r_63570);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63571 = seq__63545_63566;
var G__63572 = chunk__63546_63567;
var G__63573 = count__63547_63568;
var G__63574 = (i__63548_63569 + (1));
seq__63545_63566 = G__63571;
chunk__63546_63567 = G__63572;
count__63547_63568 = G__63573;
i__63548_63569 = G__63574;
continue;
} else {
var temp__5735__auto___63575 = cljs.core.seq(seq__63545_63566);
if(temp__5735__auto___63575){
var seq__63545_63576__$1 = temp__5735__auto___63575;
if(cljs.core.chunked_seq_QMARK_(seq__63545_63576__$1)){
var c__4609__auto___63577 = cljs.core.chunk_first(seq__63545_63576__$1);
var G__63578 = cljs.core.chunk_rest(seq__63545_63576__$1);
var G__63579 = c__4609__auto___63577;
var G__63580 = cljs.core.count(c__4609__auto___63577);
var G__63581 = (0);
seq__63545_63566 = G__63578;
chunk__63546_63567 = G__63579;
count__63547_63568 = G__63580;
i__63548_63569 = G__63581;
continue;
} else {
var r_63582 = cljs.core.first(seq__63545_63576__$1);
instaparse.failure.print_reason(r_63582);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63584 = cljs.core.next(seq__63545_63576__$1);
var G__63585 = null;
var G__63586 = (0);
var G__63587 = (0);
seq__63545_63566 = G__63584;
chunk__63546_63567 = G__63585;
count__63547_63568 = G__63586;
i__63548_63569 = G__63587;
continue;
}
} else {
}
}
break;
}

var seq__63551 = cljs.core.seq(partial_reasons);
var chunk__63552 = null;
var count__63553 = (0);
var i__63554 = (0);
while(true){
if((i__63554 < count__63553)){
var r = chunk__63552.cljs$core$IIndexed$_nth$arity$2(null,i__63554);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63588 = seq__63551;
var G__63589 = chunk__63552;
var G__63590 = count__63553;
var G__63591 = (i__63554 + (1));
seq__63551 = G__63588;
chunk__63552 = G__63589;
count__63553 = G__63590;
i__63554 = G__63591;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63551);
if(temp__5735__auto__){
var seq__63551__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63551__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63551__$1);
var G__63592 = cljs.core.chunk_rest(seq__63551__$1);
var G__63593 = c__4609__auto__;
var G__63594 = cljs.core.count(c__4609__auto__);
var G__63595 = (0);
seq__63551 = G__63592;
chunk__63552 = G__63593;
count__63553 = G__63594;
i__63554 = G__63595;
continue;
} else {
var r = cljs.core.first(seq__63551__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63596 = cljs.core.next(seq__63551__$1);
var G__63597 = null;
var G__63598 = (0);
var G__63599 = (0);
seq__63551 = G__63596;
chunk__63552 = G__63597;
count__63553 = G__63598;
i__63554 = G__63599;
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
