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
var G__63534 = (line + (1));
var G__63535 = (1);
var G__63536 = (counter + (1));
line = G__63534;
col = G__63535;
counter = G__63536;
continue;
} else {
var G__63537 = line;
var G__63538 = (col + (1));
var G__63539 = (counter + (1));
line = G__63537;
col = G__63538;
counter = G__63539;
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
var G__63541 = cljs.core.next(chars);
var G__63542 = (n__$1 - (1));
chars = G__63541;
n__$1 = G__63542;
continue;
} else {
var G__63543 = cljs.core.next(chars);
var G__63544 = n__$1;
chars = G__63543;
n__$1 = G__63544;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63522){
var map__63523 = p__63522;
var map__63523__$1 = (((((!((map__63523 == null))))?(((((map__63523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63523):map__63523);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63523__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63523__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63523__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63523__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63525_63546 = cljs.core.seq(full_reasons);
var chunk__63526_63547 = null;
var count__63527_63548 = (0);
var i__63528_63549 = (0);
while(true){
if((i__63528_63549 < count__63527_63548)){
var r_63550 = chunk__63526_63547.cljs$core$IIndexed$_nth$arity$2(null,i__63528_63549);
instaparse.failure.print_reason(r_63550);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63551 = seq__63525_63546;
var G__63552 = chunk__63526_63547;
var G__63553 = count__63527_63548;
var G__63554 = (i__63528_63549 + (1));
seq__63525_63546 = G__63551;
chunk__63526_63547 = G__63552;
count__63527_63548 = G__63553;
i__63528_63549 = G__63554;
continue;
} else {
var temp__5735__auto___63555 = cljs.core.seq(seq__63525_63546);
if(temp__5735__auto___63555){
var seq__63525_63556__$1 = temp__5735__auto___63555;
if(cljs.core.chunked_seq_QMARK_(seq__63525_63556__$1)){
var c__4609__auto___63557 = cljs.core.chunk_first(seq__63525_63556__$1);
var G__63558 = cljs.core.chunk_rest(seq__63525_63556__$1);
var G__63559 = c__4609__auto___63557;
var G__63560 = cljs.core.count(c__4609__auto___63557);
var G__63561 = (0);
seq__63525_63546 = G__63558;
chunk__63526_63547 = G__63559;
count__63527_63548 = G__63560;
i__63528_63549 = G__63561;
continue;
} else {
var r_63562 = cljs.core.first(seq__63525_63556__$1);
instaparse.failure.print_reason(r_63562);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63565 = cljs.core.next(seq__63525_63556__$1);
var G__63566 = null;
var G__63567 = (0);
var G__63568 = (0);
seq__63525_63546 = G__63565;
chunk__63526_63547 = G__63566;
count__63527_63548 = G__63567;
i__63528_63549 = G__63568;
continue;
}
} else {
}
}
break;
}

var seq__63529 = cljs.core.seq(partial_reasons);
var chunk__63530 = null;
var count__63531 = (0);
var i__63532 = (0);
while(true){
if((i__63532 < count__63531)){
var r = chunk__63530.cljs$core$IIndexed$_nth$arity$2(null,i__63532);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63570 = seq__63529;
var G__63571 = chunk__63530;
var G__63572 = count__63531;
var G__63573 = (i__63532 + (1));
seq__63529 = G__63570;
chunk__63530 = G__63571;
count__63531 = G__63572;
i__63532 = G__63573;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63529);
if(temp__5735__auto__){
var seq__63529__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63529__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63529__$1);
var G__63574 = cljs.core.chunk_rest(seq__63529__$1);
var G__63575 = c__4609__auto__;
var G__63576 = cljs.core.count(c__4609__auto__);
var G__63577 = (0);
seq__63529 = G__63574;
chunk__63530 = G__63575;
count__63531 = G__63576;
i__63532 = G__63577;
continue;
} else {
var r = cljs.core.first(seq__63529__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63581 = cljs.core.next(seq__63529__$1);
var G__63582 = null;
var G__63583 = (0);
var G__63584 = (0);
seq__63529 = G__63581;
chunk__63530 = G__63582;
count__63531 = G__63583;
i__63532 = G__63584;
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
