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
var G__63591 = (line + (1));
var G__63592 = (1);
var G__63593 = (counter + (1));
line = G__63591;
col = G__63592;
counter = G__63593;
continue;
} else {
var G__63594 = line;
var G__63595 = (col + (1));
var G__63596 = (counter + (1));
line = G__63594;
col = G__63595;
counter = G__63596;
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
var G__63597 = cljs.core.next(chars);
var G__63598 = (n__$1 - (1));
chars = G__63597;
n__$1 = G__63598;
continue;
} else {
var G__63599 = cljs.core.next(chars);
var G__63600 = n__$1;
chars = G__63599;
n__$1 = G__63600;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63569){
var map__63570 = p__63569;
var map__63570__$1 = (((((!((map__63570 == null))))?(((((map__63570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63570):map__63570);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63570__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63570__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63570__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63570__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63576_63601 = cljs.core.seq(full_reasons);
var chunk__63577_63602 = null;
var count__63578_63603 = (0);
var i__63579_63604 = (0);
while(true){
if((i__63579_63604 < count__63578_63603)){
var r_63605 = chunk__63577_63602.cljs$core$IIndexed$_nth$arity$2(null,i__63579_63604);
instaparse.failure.print_reason(r_63605);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63606 = seq__63576_63601;
var G__63607 = chunk__63577_63602;
var G__63608 = count__63578_63603;
var G__63609 = (i__63579_63604 + (1));
seq__63576_63601 = G__63606;
chunk__63577_63602 = G__63607;
count__63578_63603 = G__63608;
i__63579_63604 = G__63609;
continue;
} else {
var temp__5735__auto___63610 = cljs.core.seq(seq__63576_63601);
if(temp__5735__auto___63610){
var seq__63576_63611__$1 = temp__5735__auto___63610;
if(cljs.core.chunked_seq_QMARK_(seq__63576_63611__$1)){
var c__4609__auto___63612 = cljs.core.chunk_first(seq__63576_63611__$1);
var G__63613 = cljs.core.chunk_rest(seq__63576_63611__$1);
var G__63614 = c__4609__auto___63612;
var G__63615 = cljs.core.count(c__4609__auto___63612);
var G__63616 = (0);
seq__63576_63601 = G__63613;
chunk__63577_63602 = G__63614;
count__63578_63603 = G__63615;
i__63579_63604 = G__63616;
continue;
} else {
var r_63617 = cljs.core.first(seq__63576_63611__$1);
instaparse.failure.print_reason(r_63617);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63618 = cljs.core.next(seq__63576_63611__$1);
var G__63619 = null;
var G__63620 = (0);
var G__63621 = (0);
seq__63576_63601 = G__63618;
chunk__63577_63602 = G__63619;
count__63578_63603 = G__63620;
i__63579_63604 = G__63621;
continue;
}
} else {
}
}
break;
}

var seq__63584 = cljs.core.seq(partial_reasons);
var chunk__63585 = null;
var count__63586 = (0);
var i__63587 = (0);
while(true){
if((i__63587 < count__63586)){
var r = chunk__63585.cljs$core$IIndexed$_nth$arity$2(null,i__63587);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63622 = seq__63584;
var G__63623 = chunk__63585;
var G__63624 = count__63586;
var G__63625 = (i__63587 + (1));
seq__63584 = G__63622;
chunk__63585 = G__63623;
count__63586 = G__63624;
i__63587 = G__63625;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63584);
if(temp__5735__auto__){
var seq__63584__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63584__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63584__$1);
var G__63626 = cljs.core.chunk_rest(seq__63584__$1);
var G__63627 = c__4609__auto__;
var G__63628 = cljs.core.count(c__4609__auto__);
var G__63629 = (0);
seq__63584 = G__63626;
chunk__63585 = G__63627;
count__63586 = G__63628;
i__63587 = G__63629;
continue;
} else {
var r = cljs.core.first(seq__63584__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63630 = cljs.core.next(seq__63584__$1);
var G__63631 = null;
var G__63632 = (0);
var G__63633 = (0);
seq__63584 = G__63630;
chunk__63585 = G__63631;
count__63586 = G__63632;
i__63587 = G__63633;
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
