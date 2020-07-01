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
var G__55846 = (line + (1));
var G__55847 = (1);
var G__55848 = (counter + (1));
line = G__55846;
col = G__55847;
counter = G__55848;
continue;
} else {
var G__55849 = line;
var G__55850 = (col + (1));
var G__55851 = (counter + (1));
line = G__55849;
col = G__55850;
counter = G__55851;
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
var G__55852 = cljs.core.next(chars);
var G__55853 = (n__$1 - (1));
chars = G__55852;
n__$1 = G__55853;
continue;
} else {
var G__55854 = cljs.core.next(chars);
var G__55855 = n__$1;
chars = G__55854;
n__$1 = G__55855;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__55835){
var map__55836 = p__55835;
var map__55836__$1 = (((((!((map__55836 == null))))?(((((map__55836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55836):map__55836);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55836__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55836__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55836__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55836__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__55838_55856 = cljs.core.seq(full_reasons);
var chunk__55839_55857 = null;
var count__55840_55858 = (0);
var i__55841_55859 = (0);
while(true){
if((i__55841_55859 < count__55840_55858)){
var r_55860 = chunk__55839_55857.cljs$core$IIndexed$_nth$arity$2(null,i__55841_55859);
instaparse.failure.print_reason(r_55860);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55861 = seq__55838_55856;
var G__55862 = chunk__55839_55857;
var G__55863 = count__55840_55858;
var G__55864 = (i__55841_55859 + (1));
seq__55838_55856 = G__55861;
chunk__55839_55857 = G__55862;
count__55840_55858 = G__55863;
i__55841_55859 = G__55864;
continue;
} else {
var temp__5735__auto___55865 = cljs.core.seq(seq__55838_55856);
if(temp__5735__auto___55865){
var seq__55838_55866__$1 = temp__5735__auto___55865;
if(cljs.core.chunked_seq_QMARK_(seq__55838_55866__$1)){
var c__4609__auto___55867 = cljs.core.chunk_first(seq__55838_55866__$1);
var G__55868 = cljs.core.chunk_rest(seq__55838_55866__$1);
var G__55869 = c__4609__auto___55867;
var G__55870 = cljs.core.count(c__4609__auto___55867);
var G__55871 = (0);
seq__55838_55856 = G__55868;
chunk__55839_55857 = G__55869;
count__55840_55858 = G__55870;
i__55841_55859 = G__55871;
continue;
} else {
var r_55872 = cljs.core.first(seq__55838_55866__$1);
instaparse.failure.print_reason(r_55872);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55873 = cljs.core.next(seq__55838_55866__$1);
var G__55874 = null;
var G__55875 = (0);
var G__55876 = (0);
seq__55838_55856 = G__55873;
chunk__55839_55857 = G__55874;
count__55840_55858 = G__55875;
i__55841_55859 = G__55876;
continue;
}
} else {
}
}
break;
}

var seq__55842 = cljs.core.seq(partial_reasons);
var chunk__55843 = null;
var count__55844 = (0);
var i__55845 = (0);
while(true){
if((i__55845 < count__55844)){
var r = chunk__55843.cljs$core$IIndexed$_nth$arity$2(null,i__55845);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55877 = seq__55842;
var G__55878 = chunk__55843;
var G__55879 = count__55844;
var G__55880 = (i__55845 + (1));
seq__55842 = G__55877;
chunk__55843 = G__55878;
count__55844 = G__55879;
i__55845 = G__55880;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55842);
if(temp__5735__auto__){
var seq__55842__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55842__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__55842__$1);
var G__55881 = cljs.core.chunk_rest(seq__55842__$1);
var G__55882 = c__4609__auto__;
var G__55883 = cljs.core.count(c__4609__auto__);
var G__55884 = (0);
seq__55842 = G__55881;
chunk__55843 = G__55882;
count__55844 = G__55883;
i__55845 = G__55884;
continue;
} else {
var r = cljs.core.first(seq__55842__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55885 = cljs.core.next(seq__55842__$1);
var G__55886 = null;
var G__55887 = (0);
var G__55888 = (0);
seq__55842 = G__55885;
chunk__55843 = G__55886;
count__55844 = G__55887;
i__55845 = G__55888;
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
