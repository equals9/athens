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
var G__63656 = (line + (1));
var G__63657 = (1);
var G__63658 = (counter + (1));
line = G__63656;
col = G__63657;
counter = G__63658;
continue;
} else {
var G__63659 = line;
var G__63660 = (col + (1));
var G__63661 = (counter + (1));
line = G__63659;
col = G__63660;
counter = G__63661;
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
var G__63662 = cljs.core.next(chars);
var G__63663 = (n__$1 - (1));
chars = G__63662;
n__$1 = G__63663;
continue;
} else {
var G__63664 = cljs.core.next(chars);
var G__63665 = n__$1;
chars = G__63664;
n__$1 = G__63665;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63643){
var map__63644 = p__63643;
var map__63644__$1 = (((((!((map__63644 == null))))?(((((map__63644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63644):map__63644);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63644__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63644__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63644__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63644__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63646_63667 = cljs.core.seq(full_reasons);
var chunk__63647_63668 = null;
var count__63648_63669 = (0);
var i__63649_63670 = (0);
while(true){
if((i__63649_63670 < count__63648_63669)){
var r_63671 = chunk__63647_63668.cljs$core$IIndexed$_nth$arity$2(null,i__63649_63670);
instaparse.failure.print_reason(r_63671);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63673 = seq__63646_63667;
var G__63674 = chunk__63647_63668;
var G__63675 = count__63648_63669;
var G__63676 = (i__63649_63670 + (1));
seq__63646_63667 = G__63673;
chunk__63647_63668 = G__63674;
count__63648_63669 = G__63675;
i__63649_63670 = G__63676;
continue;
} else {
var temp__5735__auto___63679 = cljs.core.seq(seq__63646_63667);
if(temp__5735__auto___63679){
var seq__63646_63680__$1 = temp__5735__auto___63679;
if(cljs.core.chunked_seq_QMARK_(seq__63646_63680__$1)){
var c__4609__auto___63681 = cljs.core.chunk_first(seq__63646_63680__$1);
var G__63682 = cljs.core.chunk_rest(seq__63646_63680__$1);
var G__63683 = c__4609__auto___63681;
var G__63684 = cljs.core.count(c__4609__auto___63681);
var G__63685 = (0);
seq__63646_63667 = G__63682;
chunk__63647_63668 = G__63683;
count__63648_63669 = G__63684;
i__63649_63670 = G__63685;
continue;
} else {
var r_63686 = cljs.core.first(seq__63646_63680__$1);
instaparse.failure.print_reason(r_63686);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63687 = cljs.core.next(seq__63646_63680__$1);
var G__63688 = null;
var G__63689 = (0);
var G__63690 = (0);
seq__63646_63667 = G__63687;
chunk__63647_63668 = G__63688;
count__63648_63669 = G__63689;
i__63649_63670 = G__63690;
continue;
}
} else {
}
}
break;
}

var seq__63650 = cljs.core.seq(partial_reasons);
var chunk__63651 = null;
var count__63652 = (0);
var i__63653 = (0);
while(true){
if((i__63653 < count__63652)){
var r = chunk__63651.cljs$core$IIndexed$_nth$arity$2(null,i__63653);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63694 = seq__63650;
var G__63695 = chunk__63651;
var G__63696 = count__63652;
var G__63697 = (i__63653 + (1));
seq__63650 = G__63694;
chunk__63651 = G__63695;
count__63652 = G__63696;
i__63653 = G__63697;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63650);
if(temp__5735__auto__){
var seq__63650__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63650__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63650__$1);
var G__63698 = cljs.core.chunk_rest(seq__63650__$1);
var G__63699 = c__4609__auto__;
var G__63700 = cljs.core.count(c__4609__auto__);
var G__63701 = (0);
seq__63650 = G__63698;
chunk__63651 = G__63699;
count__63652 = G__63700;
i__63653 = G__63701;
continue;
} else {
var r = cljs.core.first(seq__63650__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63702 = cljs.core.next(seq__63650__$1);
var G__63703 = null;
var G__63704 = (0);
var G__63705 = (0);
seq__63650 = G__63702;
chunk__63651 = G__63703;
count__63652 = G__63704;
i__63653 = G__63705;
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
