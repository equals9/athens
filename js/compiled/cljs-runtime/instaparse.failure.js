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
var G__63609 = (line + (1));
var G__63610 = (1);
var G__63611 = (counter + (1));
line = G__63609;
col = G__63610;
counter = G__63611;
continue;
} else {
var G__63612 = line;
var G__63613 = (col + (1));
var G__63614 = (counter + (1));
line = G__63612;
col = G__63613;
counter = G__63614;
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
var G__63615 = cljs.core.next(chars);
var G__63616 = (n__$1 - (1));
chars = G__63615;
n__$1 = G__63616;
continue;
} else {
var G__63617 = cljs.core.next(chars);
var G__63618 = n__$1;
chars = G__63617;
n__$1 = G__63618;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63591){
var map__63592 = p__63591;
var map__63592__$1 = (((((!((map__63592 == null))))?(((((map__63592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63592):map__63592);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63592__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63592__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63592__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63592__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63595_63619 = cljs.core.seq(full_reasons);
var chunk__63596_63620 = null;
var count__63597_63621 = (0);
var i__63598_63622 = (0);
while(true){
if((i__63598_63622 < count__63597_63621)){
var r_63623 = chunk__63596_63620.cljs$core$IIndexed$_nth$arity$2(null,i__63598_63622);
instaparse.failure.print_reason(r_63623);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63624 = seq__63595_63619;
var G__63625 = chunk__63596_63620;
var G__63626 = count__63597_63621;
var G__63627 = (i__63598_63622 + (1));
seq__63595_63619 = G__63624;
chunk__63596_63620 = G__63625;
count__63597_63621 = G__63626;
i__63598_63622 = G__63627;
continue;
} else {
var temp__5735__auto___63628 = cljs.core.seq(seq__63595_63619);
if(temp__5735__auto___63628){
var seq__63595_63629__$1 = temp__5735__auto___63628;
if(cljs.core.chunked_seq_QMARK_(seq__63595_63629__$1)){
var c__4609__auto___63630 = cljs.core.chunk_first(seq__63595_63629__$1);
var G__63631 = cljs.core.chunk_rest(seq__63595_63629__$1);
var G__63632 = c__4609__auto___63630;
var G__63633 = cljs.core.count(c__4609__auto___63630);
var G__63634 = (0);
seq__63595_63619 = G__63631;
chunk__63596_63620 = G__63632;
count__63597_63621 = G__63633;
i__63598_63622 = G__63634;
continue;
} else {
var r_63635 = cljs.core.first(seq__63595_63629__$1);
instaparse.failure.print_reason(r_63635);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63636 = cljs.core.next(seq__63595_63629__$1);
var G__63637 = null;
var G__63638 = (0);
var G__63639 = (0);
seq__63595_63619 = G__63636;
chunk__63596_63620 = G__63637;
count__63597_63621 = G__63638;
i__63598_63622 = G__63639;
continue;
}
} else {
}
}
break;
}

var seq__63602 = cljs.core.seq(partial_reasons);
var chunk__63603 = null;
var count__63604 = (0);
var i__63605 = (0);
while(true){
if((i__63605 < count__63604)){
var r = chunk__63603.cljs$core$IIndexed$_nth$arity$2(null,i__63605);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63640 = seq__63602;
var G__63641 = chunk__63603;
var G__63642 = count__63604;
var G__63643 = (i__63605 + (1));
seq__63602 = G__63640;
chunk__63603 = G__63641;
count__63604 = G__63642;
i__63605 = G__63643;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63602);
if(temp__5735__auto__){
var seq__63602__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63602__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63602__$1);
var G__63644 = cljs.core.chunk_rest(seq__63602__$1);
var G__63645 = c__4609__auto__;
var G__63646 = cljs.core.count(c__4609__auto__);
var G__63647 = (0);
seq__63602 = G__63644;
chunk__63603 = G__63645;
count__63604 = G__63646;
i__63605 = G__63647;
continue;
} else {
var r = cljs.core.first(seq__63602__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63648 = cljs.core.next(seq__63602__$1);
var G__63649 = null;
var G__63650 = (0);
var G__63651 = (0);
seq__63602 = G__63648;
chunk__63603 = G__63649;
count__63604 = G__63650;
i__63605 = G__63651;
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
