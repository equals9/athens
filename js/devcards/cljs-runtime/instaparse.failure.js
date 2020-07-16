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
var G__56275 = (line + (1));
var G__56276 = (1);
var G__56277 = (counter + (1));
line = G__56275;
col = G__56276;
counter = G__56277;
continue;
} else {
var G__56278 = line;
var G__56279 = (col + (1));
var G__56280 = (counter + (1));
line = G__56278;
col = G__56279;
counter = G__56280;
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
var G__56282 = cljs.core.next(chars);
var G__56283 = (n__$1 - (1));
chars = G__56282;
n__$1 = G__56283;
continue;
} else {
var G__56284 = cljs.core.next(chars);
var G__56285 = n__$1;
chars = G__56284;
n__$1 = G__56285;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__56264){
var map__56265 = p__56264;
var map__56265__$1 = (((((!((map__56265 == null))))?(((((map__56265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56265):map__56265);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56265__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56265__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56265__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56265__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__56267_56292 = cljs.core.seq(full_reasons);
var chunk__56268_56293 = null;
var count__56269_56294 = (0);
var i__56270_56295 = (0);
while(true){
if((i__56270_56295 < count__56269_56294)){
var r_56296 = chunk__56268_56293.cljs$core$IIndexed$_nth$arity$2(null,i__56270_56295);
instaparse.failure.print_reason(r_56296);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56297 = seq__56267_56292;
var G__56298 = chunk__56268_56293;
var G__56299 = count__56269_56294;
var G__56300 = (i__56270_56295 + (1));
seq__56267_56292 = G__56297;
chunk__56268_56293 = G__56298;
count__56269_56294 = G__56299;
i__56270_56295 = G__56300;
continue;
} else {
var temp__5735__auto___56301 = cljs.core.seq(seq__56267_56292);
if(temp__5735__auto___56301){
var seq__56267_56302__$1 = temp__5735__auto___56301;
if(cljs.core.chunked_seq_QMARK_(seq__56267_56302__$1)){
var c__4609__auto___56303 = cljs.core.chunk_first(seq__56267_56302__$1);
var G__56304 = cljs.core.chunk_rest(seq__56267_56302__$1);
var G__56305 = c__4609__auto___56303;
var G__56306 = cljs.core.count(c__4609__auto___56303);
var G__56307 = (0);
seq__56267_56292 = G__56304;
chunk__56268_56293 = G__56305;
count__56269_56294 = G__56306;
i__56270_56295 = G__56307;
continue;
} else {
var r_56308 = cljs.core.first(seq__56267_56302__$1);
instaparse.failure.print_reason(r_56308);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56309 = cljs.core.next(seq__56267_56302__$1);
var G__56310 = null;
var G__56311 = (0);
var G__56312 = (0);
seq__56267_56292 = G__56309;
chunk__56268_56293 = G__56310;
count__56269_56294 = G__56311;
i__56270_56295 = G__56312;
continue;
}
} else {
}
}
break;
}

var seq__56271 = cljs.core.seq(partial_reasons);
var chunk__56272 = null;
var count__56273 = (0);
var i__56274 = (0);
while(true){
if((i__56274 < count__56273)){
var r = chunk__56272.cljs$core$IIndexed$_nth$arity$2(null,i__56274);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56313 = seq__56271;
var G__56314 = chunk__56272;
var G__56315 = count__56273;
var G__56316 = (i__56274 + (1));
seq__56271 = G__56313;
chunk__56272 = G__56314;
count__56273 = G__56315;
i__56274 = G__56316;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56271);
if(temp__5735__auto__){
var seq__56271__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56271__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56271__$1);
var G__56317 = cljs.core.chunk_rest(seq__56271__$1);
var G__56318 = c__4609__auto__;
var G__56319 = cljs.core.count(c__4609__auto__);
var G__56320 = (0);
seq__56271 = G__56317;
chunk__56272 = G__56318;
count__56273 = G__56319;
i__56274 = G__56320;
continue;
} else {
var r = cljs.core.first(seq__56271__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56321 = cljs.core.next(seq__56271__$1);
var G__56322 = null;
var G__56323 = (0);
var G__56324 = (0);
seq__56271 = G__56321;
chunk__56272 = G__56322;
count__56273 = G__56323;
i__56274 = G__56324;
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
