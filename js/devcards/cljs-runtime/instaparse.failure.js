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
var G__55801 = (line + (1));
var G__55802 = (1);
var G__55803 = (counter + (1));
line = G__55801;
col = G__55802;
counter = G__55803;
continue;
} else {
var G__55804 = line;
var G__55805 = (col + (1));
var G__55806 = (counter + (1));
line = G__55804;
col = G__55805;
counter = G__55806;
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
var G__55808 = cljs.core.next(chars);
var G__55809 = (n__$1 - (1));
chars = G__55808;
n__$1 = G__55809;
continue;
} else {
var G__55810 = cljs.core.next(chars);
var G__55811 = n__$1;
chars = G__55810;
n__$1 = G__55811;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55780){
var map__55781 = p__55780;
var map__55781__$1 = (((((!((map__55781 == null))))?(((((map__55781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55781):map__55781);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55781__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55781__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55781__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55781__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__55787_55812 = cljs.core.seq(full_reasons);
var chunk__55788_55813 = null;
var count__55789_55814 = (0);
var i__55790_55815 = (0);
while(true){
if((i__55790_55815 < count__55789_55814)){
var r_55816 = chunk__55788_55813.cljs$core$IIndexed$_nth$arity$2(null,i__55790_55815);
instaparse.failure.print_reason(r_55816);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55817 = seq__55787_55812;
var G__55818 = chunk__55788_55813;
var G__55819 = count__55789_55814;
var G__55820 = (i__55790_55815 + (1));
seq__55787_55812 = G__55817;
chunk__55788_55813 = G__55818;
count__55789_55814 = G__55819;
i__55790_55815 = G__55820;
continue;
} else {
var temp__5735__auto___55821 = cljs.core.seq(seq__55787_55812);
if(temp__5735__auto___55821){
var seq__55787_55822__$1 = temp__5735__auto___55821;
if(cljs.core.chunked_seq_QMARK_(seq__55787_55822__$1)){
var c__4609__auto___55823 = cljs.core.chunk_first(seq__55787_55822__$1);
var G__55824 = cljs.core.chunk_rest(seq__55787_55822__$1);
var G__55825 = c__4609__auto___55823;
var G__55826 = cljs.core.count(c__4609__auto___55823);
var G__55827 = (0);
seq__55787_55812 = G__55824;
chunk__55788_55813 = G__55825;
count__55789_55814 = G__55826;
i__55790_55815 = G__55827;
continue;
} else {
var r_55828 = cljs.core.first(seq__55787_55822__$1);
instaparse.failure.print_reason(r_55828);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55829 = cljs.core.next(seq__55787_55822__$1);
var G__55830 = null;
var G__55831 = (0);
var G__55832 = (0);
seq__55787_55812 = G__55829;
chunk__55788_55813 = G__55830;
count__55789_55814 = G__55831;
i__55790_55815 = G__55832;
continue;
}
} else {
}
}
break;
}

var seq__55795 = cljs.core.seq(partial_reasons);
var chunk__55796 = null;
var count__55797 = (0);
var i__55798 = (0);
while(true){
if((i__55798 < count__55797)){
var r = chunk__55796.cljs$core$IIndexed$_nth$arity$2(null,i__55798);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55833 = seq__55795;
var G__55834 = chunk__55796;
var G__55835 = count__55797;
var G__55836 = (i__55798 + (1));
seq__55795 = G__55833;
chunk__55796 = G__55834;
count__55797 = G__55835;
i__55798 = G__55836;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55795);
if(temp__5735__auto__){
var seq__55795__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55795__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__55795__$1);
var G__55837 = cljs.core.chunk_rest(seq__55795__$1);
var G__55838 = c__4609__auto__;
var G__55839 = cljs.core.count(c__4609__auto__);
var G__55840 = (0);
seq__55795 = G__55837;
chunk__55796 = G__55838;
count__55797 = G__55839;
i__55798 = G__55840;
continue;
} else {
var r = cljs.core.first(seq__55795__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55841 = cljs.core.next(seq__55795__$1);
var G__55842 = null;
var G__55843 = (0);
var G__55844 = (0);
seq__55795 = G__55841;
chunk__55796 = G__55842;
count__55797 = G__55843;
i__55798 = G__55844;
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
