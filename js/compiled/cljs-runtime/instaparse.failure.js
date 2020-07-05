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
var G__63652 = (line + (1));
var G__63653 = (1);
var G__63654 = (counter + (1));
line = G__63652;
col = G__63653;
counter = G__63654;
continue;
} else {
var G__63655 = line;
var G__63656 = (col + (1));
var G__63657 = (counter + (1));
line = G__63655;
col = G__63656;
counter = G__63657;
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
var G__63658 = cljs.core.next(chars);
var G__63659 = (n__$1 - (1));
chars = G__63658;
n__$1 = G__63659;
continue;
} else {
var G__63660 = cljs.core.next(chars);
var G__63661 = n__$1;
chars = G__63660;
n__$1 = G__63661;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63640){
var map__63641 = p__63640;
var map__63641__$1 = (((((!((map__63641 == null))))?(((((map__63641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63641):map__63641);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63641__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63641__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63641__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63641__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63644_63662 = cljs.core.seq(full_reasons);
var chunk__63645_63663 = null;
var count__63646_63664 = (0);
var i__63647_63665 = (0);
while(true){
if((i__63647_63665 < count__63646_63664)){
var r_63666 = chunk__63645_63663.cljs$core$IIndexed$_nth$arity$2(null,i__63647_63665);
instaparse.failure.print_reason(r_63666);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63667 = seq__63644_63662;
var G__63668 = chunk__63645_63663;
var G__63669 = count__63646_63664;
var G__63670 = (i__63647_63665 + (1));
seq__63644_63662 = G__63667;
chunk__63645_63663 = G__63668;
count__63646_63664 = G__63669;
i__63647_63665 = G__63670;
continue;
} else {
var temp__5735__auto___63671 = cljs.core.seq(seq__63644_63662);
if(temp__5735__auto___63671){
var seq__63644_63672__$1 = temp__5735__auto___63671;
if(cljs.core.chunked_seq_QMARK_(seq__63644_63672__$1)){
var c__4609__auto___63673 = cljs.core.chunk_first(seq__63644_63672__$1);
var G__63674 = cljs.core.chunk_rest(seq__63644_63672__$1);
var G__63675 = c__4609__auto___63673;
var G__63676 = cljs.core.count(c__4609__auto___63673);
var G__63677 = (0);
seq__63644_63662 = G__63674;
chunk__63645_63663 = G__63675;
count__63646_63664 = G__63676;
i__63647_63665 = G__63677;
continue;
} else {
var r_63678 = cljs.core.first(seq__63644_63672__$1);
instaparse.failure.print_reason(r_63678);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63679 = cljs.core.next(seq__63644_63672__$1);
var G__63680 = null;
var G__63681 = (0);
var G__63682 = (0);
seq__63644_63662 = G__63679;
chunk__63645_63663 = G__63680;
count__63646_63664 = G__63681;
i__63647_63665 = G__63682;
continue;
}
} else {
}
}
break;
}

var seq__63648 = cljs.core.seq(partial_reasons);
var chunk__63649 = null;
var count__63650 = (0);
var i__63651 = (0);
while(true){
if((i__63651 < count__63650)){
var r = chunk__63649.cljs$core$IIndexed$_nth$arity$2(null,i__63651);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63683 = seq__63648;
var G__63684 = chunk__63649;
var G__63685 = count__63650;
var G__63686 = (i__63651 + (1));
seq__63648 = G__63683;
chunk__63649 = G__63684;
count__63650 = G__63685;
i__63651 = G__63686;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63648);
if(temp__5735__auto__){
var seq__63648__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63648__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63648__$1);
var G__63687 = cljs.core.chunk_rest(seq__63648__$1);
var G__63688 = c__4609__auto__;
var G__63689 = cljs.core.count(c__4609__auto__);
var G__63690 = (0);
seq__63648 = G__63687;
chunk__63649 = G__63688;
count__63650 = G__63689;
i__63651 = G__63690;
continue;
} else {
var r = cljs.core.first(seq__63648__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63691 = cljs.core.next(seq__63648__$1);
var G__63692 = null;
var G__63693 = (0);
var G__63694 = (0);
seq__63648 = G__63691;
chunk__63649 = G__63692;
count__63650 = G__63693;
i__63651 = G__63694;
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
