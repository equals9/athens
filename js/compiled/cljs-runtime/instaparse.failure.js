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
var G__63470 = (line + (1));
var G__63471 = (1);
var G__63472 = (counter + (1));
line = G__63470;
col = G__63471;
counter = G__63472;
continue;
} else {
var G__63473 = line;
var G__63474 = (col + (1));
var G__63475 = (counter + (1));
line = G__63473;
col = G__63474;
counter = G__63475;
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
var G__63476 = cljs.core.next(chars);
var G__63477 = (n__$1 - (1));
chars = G__63476;
n__$1 = G__63477;
continue;
} else {
var G__63478 = cljs.core.next(chars);
var G__63479 = n__$1;
chars = G__63478;
n__$1 = G__63479;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63456){
var map__63457 = p__63456;
var map__63457__$1 = (((((!((map__63457 == null))))?(((((map__63457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63457):map__63457);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63457__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63457__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63457__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63457__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63459_63480 = cljs.core.seq(full_reasons);
var chunk__63460_63481 = null;
var count__63461_63482 = (0);
var i__63462_63483 = (0);
while(true){
if((i__63462_63483 < count__63461_63482)){
var r_63484 = chunk__63460_63481.cljs$core$IIndexed$_nth$arity$2(null,i__63462_63483);
instaparse.failure.print_reason(r_63484);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63485 = seq__63459_63480;
var G__63486 = chunk__63460_63481;
var G__63487 = count__63461_63482;
var G__63488 = (i__63462_63483 + (1));
seq__63459_63480 = G__63485;
chunk__63460_63481 = G__63486;
count__63461_63482 = G__63487;
i__63462_63483 = G__63488;
continue;
} else {
var temp__5735__auto___63489 = cljs.core.seq(seq__63459_63480);
if(temp__5735__auto___63489){
var seq__63459_63490__$1 = temp__5735__auto___63489;
if(cljs.core.chunked_seq_QMARK_(seq__63459_63490__$1)){
var c__4609__auto___63491 = cljs.core.chunk_first(seq__63459_63490__$1);
var G__63492 = cljs.core.chunk_rest(seq__63459_63490__$1);
var G__63493 = c__4609__auto___63491;
var G__63494 = cljs.core.count(c__4609__auto___63491);
var G__63495 = (0);
seq__63459_63480 = G__63492;
chunk__63460_63481 = G__63493;
count__63461_63482 = G__63494;
i__63462_63483 = G__63495;
continue;
} else {
var r_63496 = cljs.core.first(seq__63459_63490__$1);
instaparse.failure.print_reason(r_63496);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63497 = cljs.core.next(seq__63459_63490__$1);
var G__63498 = null;
var G__63499 = (0);
var G__63500 = (0);
seq__63459_63480 = G__63497;
chunk__63460_63481 = G__63498;
count__63461_63482 = G__63499;
i__63462_63483 = G__63500;
continue;
}
} else {
}
}
break;
}

var seq__63463 = cljs.core.seq(partial_reasons);
var chunk__63464 = null;
var count__63465 = (0);
var i__63466 = (0);
while(true){
if((i__63466 < count__63465)){
var r = chunk__63464.cljs$core$IIndexed$_nth$arity$2(null,i__63466);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63501 = seq__63463;
var G__63502 = chunk__63464;
var G__63503 = count__63465;
var G__63504 = (i__63466 + (1));
seq__63463 = G__63501;
chunk__63464 = G__63502;
count__63465 = G__63503;
i__63466 = G__63504;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63463);
if(temp__5735__auto__){
var seq__63463__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63463__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63463__$1);
var G__63505 = cljs.core.chunk_rest(seq__63463__$1);
var G__63506 = c__4609__auto__;
var G__63507 = cljs.core.count(c__4609__auto__);
var G__63508 = (0);
seq__63463 = G__63505;
chunk__63464 = G__63506;
count__63465 = G__63507;
i__63466 = G__63508;
continue;
} else {
var r = cljs.core.first(seq__63463__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63509 = cljs.core.next(seq__63463__$1);
var G__63510 = null;
var G__63511 = (0);
var G__63512 = (0);
seq__63463 = G__63509;
chunk__63464 = G__63510;
count__63465 = G__63511;
i__63466 = G__63512;
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
