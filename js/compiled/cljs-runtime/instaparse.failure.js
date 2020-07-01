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
var G__63600 = (line + (1));
var G__63601 = (1);
var G__63602 = (counter + (1));
line = G__63600;
col = G__63601;
counter = G__63602;
continue;
} else {
var G__63603 = line;
var G__63604 = (col + (1));
var G__63605 = (counter + (1));
line = G__63603;
col = G__63604;
counter = G__63605;
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
var G__63606 = cljs.core.next(chars);
var G__63607 = (n__$1 - (1));
chars = G__63606;
n__$1 = G__63607;
continue;
} else {
var G__63608 = cljs.core.next(chars);
var G__63609 = n__$1;
chars = G__63608;
n__$1 = G__63609;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63588){
var map__63589 = p__63588;
var map__63589__$1 = (((((!((map__63589 == null))))?(((((map__63589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63589):map__63589);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63589__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63589__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63589__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63589__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63592_63610 = cljs.core.seq(full_reasons);
var chunk__63593_63611 = null;
var count__63594_63612 = (0);
var i__63595_63613 = (0);
while(true){
if((i__63595_63613 < count__63594_63612)){
var r_63614 = chunk__63593_63611.cljs$core$IIndexed$_nth$arity$2(null,i__63595_63613);
instaparse.failure.print_reason(r_63614);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63615 = seq__63592_63610;
var G__63616 = chunk__63593_63611;
var G__63617 = count__63594_63612;
var G__63618 = (i__63595_63613 + (1));
seq__63592_63610 = G__63615;
chunk__63593_63611 = G__63616;
count__63594_63612 = G__63617;
i__63595_63613 = G__63618;
continue;
} else {
var temp__5735__auto___63620 = cljs.core.seq(seq__63592_63610);
if(temp__5735__auto___63620){
var seq__63592_63621__$1 = temp__5735__auto___63620;
if(cljs.core.chunked_seq_QMARK_(seq__63592_63621__$1)){
var c__4609__auto___63622 = cljs.core.chunk_first(seq__63592_63621__$1);
var G__63623 = cljs.core.chunk_rest(seq__63592_63621__$1);
var G__63624 = c__4609__auto___63622;
var G__63625 = cljs.core.count(c__4609__auto___63622);
var G__63626 = (0);
seq__63592_63610 = G__63623;
chunk__63593_63611 = G__63624;
count__63594_63612 = G__63625;
i__63595_63613 = G__63626;
continue;
} else {
var r_63627 = cljs.core.first(seq__63592_63621__$1);
instaparse.failure.print_reason(r_63627);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63628 = cljs.core.next(seq__63592_63621__$1);
var G__63629 = null;
var G__63630 = (0);
var G__63631 = (0);
seq__63592_63610 = G__63628;
chunk__63593_63611 = G__63629;
count__63594_63612 = G__63630;
i__63595_63613 = G__63631;
continue;
}
} else {
}
}
break;
}

var seq__63596 = cljs.core.seq(partial_reasons);
var chunk__63597 = null;
var count__63598 = (0);
var i__63599 = (0);
while(true){
if((i__63599 < count__63598)){
var r = chunk__63597.cljs$core$IIndexed$_nth$arity$2(null,i__63599);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63632 = seq__63596;
var G__63633 = chunk__63597;
var G__63634 = count__63598;
var G__63635 = (i__63599 + (1));
seq__63596 = G__63632;
chunk__63597 = G__63633;
count__63598 = G__63634;
i__63599 = G__63635;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63596);
if(temp__5735__auto__){
var seq__63596__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63596__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63596__$1);
var G__63637 = cljs.core.chunk_rest(seq__63596__$1);
var G__63638 = c__4609__auto__;
var G__63639 = cljs.core.count(c__4609__auto__);
var G__63640 = (0);
seq__63596 = G__63637;
chunk__63597 = G__63638;
count__63598 = G__63639;
i__63599 = G__63640;
continue;
} else {
var r = cljs.core.first(seq__63596__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63641 = cljs.core.next(seq__63596__$1);
var G__63642 = null;
var G__63643 = (0);
var G__63644 = (0);
seq__63596 = G__63641;
chunk__63597 = G__63642;
count__63598 = G__63643;
i__63599 = G__63644;
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
