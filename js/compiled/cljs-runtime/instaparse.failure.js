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
var G__63436 = (line + (1));
var G__63437 = (1);
var G__63438 = (counter + (1));
line = G__63436;
col = G__63437;
counter = G__63438;
continue;
} else {
var G__63439 = line;
var G__63440 = (col + (1));
var G__63441 = (counter + (1));
line = G__63439;
col = G__63440;
counter = G__63441;
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
var G__63442 = cljs.core.next(chars);
var G__63443 = (n__$1 - (1));
chars = G__63442;
n__$1 = G__63443;
continue;
} else {
var G__63444 = cljs.core.next(chars);
var G__63445 = n__$1;
chars = G__63444;
n__$1 = G__63445;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63424){
var map__63425 = p__63424;
var map__63425__$1 = (((((!((map__63425 == null))))?(((((map__63425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63425):map__63425);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63425__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63425__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63425__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63425__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63428_63446 = cljs.core.seq(full_reasons);
var chunk__63429_63447 = null;
var count__63430_63448 = (0);
var i__63431_63449 = (0);
while(true){
if((i__63431_63449 < count__63430_63448)){
var r_63450 = chunk__63429_63447.cljs$core$IIndexed$_nth$arity$2(null,i__63431_63449);
instaparse.failure.print_reason(r_63450);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63451 = seq__63428_63446;
var G__63452 = chunk__63429_63447;
var G__63453 = count__63430_63448;
var G__63454 = (i__63431_63449 + (1));
seq__63428_63446 = G__63451;
chunk__63429_63447 = G__63452;
count__63430_63448 = G__63453;
i__63431_63449 = G__63454;
continue;
} else {
var temp__5735__auto___63455 = cljs.core.seq(seq__63428_63446);
if(temp__5735__auto___63455){
var seq__63428_63456__$1 = temp__5735__auto___63455;
if(cljs.core.chunked_seq_QMARK_(seq__63428_63456__$1)){
var c__4609__auto___63457 = cljs.core.chunk_first(seq__63428_63456__$1);
var G__63458 = cljs.core.chunk_rest(seq__63428_63456__$1);
var G__63459 = c__4609__auto___63457;
var G__63460 = cljs.core.count(c__4609__auto___63457);
var G__63461 = (0);
seq__63428_63446 = G__63458;
chunk__63429_63447 = G__63459;
count__63430_63448 = G__63460;
i__63431_63449 = G__63461;
continue;
} else {
var r_63462 = cljs.core.first(seq__63428_63456__$1);
instaparse.failure.print_reason(r_63462);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63463 = cljs.core.next(seq__63428_63456__$1);
var G__63464 = null;
var G__63465 = (0);
var G__63466 = (0);
seq__63428_63446 = G__63463;
chunk__63429_63447 = G__63464;
count__63430_63448 = G__63465;
i__63431_63449 = G__63466;
continue;
}
} else {
}
}
break;
}

var seq__63432 = cljs.core.seq(partial_reasons);
var chunk__63433 = null;
var count__63434 = (0);
var i__63435 = (0);
while(true){
if((i__63435 < count__63434)){
var r = chunk__63433.cljs$core$IIndexed$_nth$arity$2(null,i__63435);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63468 = seq__63432;
var G__63469 = chunk__63433;
var G__63470 = count__63434;
var G__63471 = (i__63435 + (1));
seq__63432 = G__63468;
chunk__63433 = G__63469;
count__63434 = G__63470;
i__63435 = G__63471;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63432);
if(temp__5735__auto__){
var seq__63432__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63432__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63432__$1);
var G__63472 = cljs.core.chunk_rest(seq__63432__$1);
var G__63473 = c__4609__auto__;
var G__63474 = cljs.core.count(c__4609__auto__);
var G__63475 = (0);
seq__63432 = G__63472;
chunk__63433 = G__63473;
count__63434 = G__63474;
i__63435 = G__63475;
continue;
} else {
var r = cljs.core.first(seq__63432__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63476 = cljs.core.next(seq__63432__$1);
var G__63477 = null;
var G__63478 = (0);
var G__63479 = (0);
seq__63432 = G__63476;
chunk__63433 = G__63477;
count__63434 = G__63478;
i__63435 = G__63479;
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
