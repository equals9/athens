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
var G__63638 = (line + (1));
var G__63639 = (1);
var G__63640 = (counter + (1));
line = G__63638;
col = G__63639;
counter = G__63640;
continue;
} else {
var G__63641 = line;
var G__63642 = (col + (1));
var G__63643 = (counter + (1));
line = G__63641;
col = G__63642;
counter = G__63643;
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
var G__63644 = cljs.core.next(chars);
var G__63645 = (n__$1 - (1));
chars = G__63644;
n__$1 = G__63645;
continue;
} else {
var G__63646 = cljs.core.next(chars);
var G__63647 = n__$1;
chars = G__63646;
n__$1 = G__63647;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63624){
var map__63625 = p__63624;
var map__63625__$1 = (((((!((map__63625 == null))))?(((((map__63625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63625):map__63625);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63625__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63625__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63625__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63625__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63627_63648 = cljs.core.seq(full_reasons);
var chunk__63628_63649 = null;
var count__63629_63650 = (0);
var i__63630_63651 = (0);
while(true){
if((i__63630_63651 < count__63629_63650)){
var r_63652 = chunk__63628_63649.cljs$core$IIndexed$_nth$arity$2(null,i__63630_63651);
instaparse.failure.print_reason(r_63652);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63653 = seq__63627_63648;
var G__63654 = chunk__63628_63649;
var G__63655 = count__63629_63650;
var G__63656 = (i__63630_63651 + (1));
seq__63627_63648 = G__63653;
chunk__63628_63649 = G__63654;
count__63629_63650 = G__63655;
i__63630_63651 = G__63656;
continue;
} else {
var temp__5735__auto___63657 = cljs.core.seq(seq__63627_63648);
if(temp__5735__auto___63657){
var seq__63627_63658__$1 = temp__5735__auto___63657;
if(cljs.core.chunked_seq_QMARK_(seq__63627_63658__$1)){
var c__4609__auto___63659 = cljs.core.chunk_first(seq__63627_63658__$1);
var G__63660 = cljs.core.chunk_rest(seq__63627_63658__$1);
var G__63661 = c__4609__auto___63659;
var G__63662 = cljs.core.count(c__4609__auto___63659);
var G__63663 = (0);
seq__63627_63648 = G__63660;
chunk__63628_63649 = G__63661;
count__63629_63650 = G__63662;
i__63630_63651 = G__63663;
continue;
} else {
var r_63664 = cljs.core.first(seq__63627_63658__$1);
instaparse.failure.print_reason(r_63664);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63665 = cljs.core.next(seq__63627_63658__$1);
var G__63666 = null;
var G__63667 = (0);
var G__63668 = (0);
seq__63627_63648 = G__63665;
chunk__63628_63649 = G__63666;
count__63629_63650 = G__63667;
i__63630_63651 = G__63668;
continue;
}
} else {
}
}
break;
}

var seq__63633 = cljs.core.seq(partial_reasons);
var chunk__63634 = null;
var count__63635 = (0);
var i__63636 = (0);
while(true){
if((i__63636 < count__63635)){
var r = chunk__63634.cljs$core$IIndexed$_nth$arity$2(null,i__63636);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63669 = seq__63633;
var G__63670 = chunk__63634;
var G__63671 = count__63635;
var G__63672 = (i__63636 + (1));
seq__63633 = G__63669;
chunk__63634 = G__63670;
count__63635 = G__63671;
i__63636 = G__63672;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63633);
if(temp__5735__auto__){
var seq__63633__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63633__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63633__$1);
var G__63673 = cljs.core.chunk_rest(seq__63633__$1);
var G__63674 = c__4609__auto__;
var G__63675 = cljs.core.count(c__4609__auto__);
var G__63676 = (0);
seq__63633 = G__63673;
chunk__63634 = G__63674;
count__63635 = G__63675;
i__63636 = G__63676;
continue;
} else {
var r = cljs.core.first(seq__63633__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63677 = cljs.core.next(seq__63633__$1);
var G__63678 = null;
var G__63679 = (0);
var G__63680 = (0);
seq__63633 = G__63677;
chunk__63634 = G__63678;
count__63635 = G__63679;
i__63636 = G__63680;
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
