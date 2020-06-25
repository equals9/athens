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
var G__63412 = (line + (1));
var G__63413 = (1);
var G__63414 = (counter + (1));
line = G__63412;
col = G__63413;
counter = G__63414;
continue;
} else {
var G__63415 = line;
var G__63416 = (col + (1));
var G__63417 = (counter + (1));
line = G__63415;
col = G__63416;
counter = G__63417;
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
var G__63418 = cljs.core.next(chars);
var G__63419 = (n__$1 - (1));
chars = G__63418;
n__$1 = G__63419;
continue;
} else {
var G__63420 = cljs.core.next(chars);
var G__63421 = n__$1;
chars = G__63420;
n__$1 = G__63421;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63401){
var map__63402 = p__63401;
var map__63402__$1 = (((((!((map__63402 == null))))?(((((map__63402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63402):map__63402);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63402__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63402__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63402__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63402__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63404_63425 = cljs.core.seq(full_reasons);
var chunk__63405_63426 = null;
var count__63406_63427 = (0);
var i__63407_63428 = (0);
while(true){
if((i__63407_63428 < count__63406_63427)){
var r_63429 = chunk__63405_63426.cljs$core$IIndexed$_nth$arity$2(null,i__63407_63428);
instaparse.failure.print_reason(r_63429);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63430 = seq__63404_63425;
var G__63431 = chunk__63405_63426;
var G__63432 = count__63406_63427;
var G__63433 = (i__63407_63428 + (1));
seq__63404_63425 = G__63430;
chunk__63405_63426 = G__63431;
count__63406_63427 = G__63432;
i__63407_63428 = G__63433;
continue;
} else {
var temp__5735__auto___63434 = cljs.core.seq(seq__63404_63425);
if(temp__5735__auto___63434){
var seq__63404_63435__$1 = temp__5735__auto___63434;
if(cljs.core.chunked_seq_QMARK_(seq__63404_63435__$1)){
var c__4609__auto___63436 = cljs.core.chunk_first(seq__63404_63435__$1);
var G__63437 = cljs.core.chunk_rest(seq__63404_63435__$1);
var G__63438 = c__4609__auto___63436;
var G__63439 = cljs.core.count(c__4609__auto___63436);
var G__63440 = (0);
seq__63404_63425 = G__63437;
chunk__63405_63426 = G__63438;
count__63406_63427 = G__63439;
i__63407_63428 = G__63440;
continue;
} else {
var r_63441 = cljs.core.first(seq__63404_63435__$1);
instaparse.failure.print_reason(r_63441);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63442 = cljs.core.next(seq__63404_63435__$1);
var G__63443 = null;
var G__63444 = (0);
var G__63445 = (0);
seq__63404_63425 = G__63442;
chunk__63405_63426 = G__63443;
count__63406_63427 = G__63444;
i__63407_63428 = G__63445;
continue;
}
} else {
}
}
break;
}

var seq__63408 = cljs.core.seq(partial_reasons);
var chunk__63409 = null;
var count__63410 = (0);
var i__63411 = (0);
while(true){
if((i__63411 < count__63410)){
var r = chunk__63409.cljs$core$IIndexed$_nth$arity$2(null,i__63411);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63446 = seq__63408;
var G__63447 = chunk__63409;
var G__63448 = count__63410;
var G__63449 = (i__63411 + (1));
seq__63408 = G__63446;
chunk__63409 = G__63447;
count__63410 = G__63448;
i__63411 = G__63449;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63408);
if(temp__5735__auto__){
var seq__63408__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63408__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63408__$1);
var G__63450 = cljs.core.chunk_rest(seq__63408__$1);
var G__63451 = c__4609__auto__;
var G__63452 = cljs.core.count(c__4609__auto__);
var G__63453 = (0);
seq__63408 = G__63450;
chunk__63409 = G__63451;
count__63410 = G__63452;
i__63411 = G__63453;
continue;
} else {
var r = cljs.core.first(seq__63408__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63454 = cljs.core.next(seq__63408__$1);
var G__63455 = null;
var G__63456 = (0);
var G__63457 = (0);
seq__63408 = G__63454;
chunk__63409 = G__63455;
count__63410 = G__63456;
i__63411 = G__63457;
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
