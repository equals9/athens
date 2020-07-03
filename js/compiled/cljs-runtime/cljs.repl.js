goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__58614){
var map__58615 = p__58614;
var map__58615__$1 = (((((!((map__58615 == null))))?(((((map__58615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58615):map__58615);
var m = map__58615__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58615__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__58618_58742 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58619_58743 = null;
var count__58620_58744 = (0);
var i__58621_58745 = (0);
while(true){
if((i__58621_58745 < count__58620_58744)){
var f_58746 = chunk__58619_58743.cljs$core$IIndexed$_nth$arity$2(null,i__58621_58745);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_58746], 0));


var G__58747 = seq__58618_58742;
var G__58748 = chunk__58619_58743;
var G__58749 = count__58620_58744;
var G__58750 = (i__58621_58745 + (1));
seq__58618_58742 = G__58747;
chunk__58619_58743 = G__58748;
count__58620_58744 = G__58749;
i__58621_58745 = G__58750;
continue;
} else {
var temp__5735__auto___58751 = cljs.core.seq(seq__58618_58742);
if(temp__5735__auto___58751){
var seq__58618_58752__$1 = temp__5735__auto___58751;
if(cljs.core.chunked_seq_QMARK_(seq__58618_58752__$1)){
var c__4609__auto___58753 = cljs.core.chunk_first(seq__58618_58752__$1);
var G__58754 = cljs.core.chunk_rest(seq__58618_58752__$1);
var G__58755 = c__4609__auto___58753;
var G__58756 = cljs.core.count(c__4609__auto___58753);
var G__58757 = (0);
seq__58618_58742 = G__58754;
chunk__58619_58743 = G__58755;
count__58620_58744 = G__58756;
i__58621_58745 = G__58757;
continue;
} else {
var f_58758 = cljs.core.first(seq__58618_58752__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_58758], 0));


var G__58759 = cljs.core.next(seq__58618_58752__$1);
var G__58760 = null;
var G__58761 = (0);
var G__58762 = (0);
seq__58618_58742 = G__58759;
chunk__58619_58743 = G__58760;
count__58620_58744 = G__58761;
i__58621_58745 = G__58762;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_58763 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_58763], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_58763)))?cljs.core.second(arglists_58763):arglists_58763)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__58623_58765 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58624_58766 = null;
var count__58625_58767 = (0);
var i__58626_58768 = (0);
while(true){
if((i__58626_58768 < count__58625_58767)){
var vec__58637_58769 = chunk__58624_58766.cljs$core$IIndexed$_nth$arity$2(null,i__58626_58768);
var name_58770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58637_58769,(0),null);
var map__58640_58771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58637_58769,(1),null);
var map__58640_58772__$1 = (((((!((map__58640_58771 == null))))?(((((map__58640_58771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58640_58771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58640_58771):map__58640_58771);
var doc_58773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640_58772__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640_58772__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_58770], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_58774], 0));

if(cljs.core.truth_(doc_58773)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_58773], 0));
} else {
}


var G__58775 = seq__58623_58765;
var G__58776 = chunk__58624_58766;
var G__58777 = count__58625_58767;
var G__58778 = (i__58626_58768 + (1));
seq__58623_58765 = G__58775;
chunk__58624_58766 = G__58776;
count__58625_58767 = G__58777;
i__58626_58768 = G__58778;
continue;
} else {
var temp__5735__auto___58779 = cljs.core.seq(seq__58623_58765);
if(temp__5735__auto___58779){
var seq__58623_58783__$1 = temp__5735__auto___58779;
if(cljs.core.chunked_seq_QMARK_(seq__58623_58783__$1)){
var c__4609__auto___58784 = cljs.core.chunk_first(seq__58623_58783__$1);
var G__58785 = cljs.core.chunk_rest(seq__58623_58783__$1);
var G__58786 = c__4609__auto___58784;
var G__58787 = cljs.core.count(c__4609__auto___58784);
var G__58788 = (0);
seq__58623_58765 = G__58785;
chunk__58624_58766 = G__58786;
count__58625_58767 = G__58787;
i__58626_58768 = G__58788;
continue;
} else {
var vec__58642_58790 = cljs.core.first(seq__58623_58783__$1);
var name_58791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58642_58790,(0),null);
var map__58645_58792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58642_58790,(1),null);
var map__58645_58793__$1 = (((((!((map__58645_58792 == null))))?(((((map__58645_58792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58645_58792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58645_58792):map__58645_58792);
var doc_58794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645_58793__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645_58793__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_58791], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_58795], 0));

if(cljs.core.truth_(doc_58794)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_58794], 0));
} else {
}


var G__58796 = cljs.core.next(seq__58623_58783__$1);
var G__58797 = null;
var G__58798 = (0);
var G__58799 = (0);
seq__58623_58765 = G__58796;
chunk__58624_58766 = G__58797;
count__58625_58767 = G__58798;
i__58626_58768 = G__58799;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__58648 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__58649 = null;
var count__58650 = (0);
var i__58651 = (0);
while(true){
if((i__58651 < count__58650)){
var role = chunk__58649.cljs$core$IIndexed$_nth$arity$2(null,i__58651);
var temp__5735__auto___58801__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___58801__$1)){
var spec_58802 = temp__5735__auto___58801__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_58802)], 0));
} else {
}


var G__58803 = seq__58648;
var G__58804 = chunk__58649;
var G__58805 = count__58650;
var G__58806 = (i__58651 + (1));
seq__58648 = G__58803;
chunk__58649 = G__58804;
count__58650 = G__58805;
i__58651 = G__58806;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__58648);
if(temp__5735__auto____$1){
var seq__58648__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__58648__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58648__$1);
var G__58807 = cljs.core.chunk_rest(seq__58648__$1);
var G__58808 = c__4609__auto__;
var G__58809 = cljs.core.count(c__4609__auto__);
var G__58810 = (0);
seq__58648 = G__58807;
chunk__58649 = G__58808;
count__58650 = G__58809;
i__58651 = G__58810;
continue;
} else {
var role = cljs.core.first(seq__58648__$1);
var temp__5735__auto___58811__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___58811__$2)){
var spec_58812 = temp__5735__auto___58811__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_58812)], 0));
} else {
}


var G__58813 = cljs.core.next(seq__58648__$1);
var G__58814 = null;
var G__58815 = (0);
var G__58816 = (0);
seq__58648 = G__58813;
chunk__58649 = G__58814;
count__58650 = G__58815;
i__58651 = G__58816;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__58817 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__58818 = cljs.core.ex_cause(t);
via = G__58817;
t = G__58818;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__58668 = datafied_throwable;
var map__58668__$1 = (((((!((map__58668 == null))))?(((((map__58668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58668):map__58668);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58668__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58668__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__58669 = cljs.core.last(via);
var map__58669__$1 = (((((!((map__58669 == null))))?(((((map__58669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58669):map__58669);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__58670 = data;
var map__58670__$1 = (((((!((map__58670 == null))))?(((((map__58670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58670):map__58670);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58670__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58670__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58670__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__58671 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__58671__$1 = (((((!((map__58671 == null))))?(((((map__58671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58671):map__58671);
var top_data = map__58671__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58671__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__58676 = phase;
var G__58676__$1 = (((G__58676 instanceof cljs.core.Keyword))?G__58676.fqn:null);
switch (G__58676__$1) {
case "read-source":
var map__58677 = data;
var map__58677__$1 = (((((!((map__58677 == null))))?(((((map__58677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58677):map__58677);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__58679 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__58679__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58679,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__58679);
var G__58679__$2 = (cljs.core.truth_((function (){var fexpr__58680 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__58680.cljs$core$IFn$_invoke$arity$1 ? fexpr__58680.cljs$core$IFn$_invoke$arity$1(source) : fexpr__58680.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__58679__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__58679__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58679__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__58679__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__58681 = top_data;
var G__58681__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58681,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__58681);
var G__58681__$2 = (cljs.core.truth_((function (){var fexpr__58682 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__58682.cljs$core$IFn$_invoke$arity$1 ? fexpr__58682.cljs$core$IFn$_invoke$arity$1(source) : fexpr__58682.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__58681__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__58681__$1);
var G__58681__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58681__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__58681__$2);
var G__58681__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58681__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__58681__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58681__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__58681__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__58684 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58684,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58684,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58684,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58684,(3),null);
var G__58687 = top_data;
var G__58687__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58687,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__58687);
var G__58687__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58687__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__58687__$1);
var G__58687__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58687__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__58687__$2);
var G__58687__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58687__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__58687__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58687__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__58687__$4;
}

break;
case "execution":
var vec__58688 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58688,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58688,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58688,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58688,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58667_SHARP_){
var or__4185__auto__ = (p1__58667_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__58692 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__58692.cljs$core$IFn$_invoke$arity$1 ? fexpr__58692.cljs$core$IFn$_invoke$arity$1(p1__58667_SHARP_) : fexpr__58692.call(null,p1__58667_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__58693 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__58693__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58693,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__58693);
var G__58693__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58693__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__58693__$1);
var G__58693__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58693__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__58693__$2);
var G__58693__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58693__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__58693__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58693__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__58693__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58676__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__58698){
var map__58699 = p__58698;
var map__58699__$1 = (((((!((map__58699 == null))))?(((((map__58699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58699):map__58699);
var triage_data = map__58699__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__58701 = phase;
var G__58701__$1 = (((G__58701 instanceof cljs.core.Keyword))?G__58701.fqn:null);
switch (G__58701__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__58702 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__58703 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58704 = loc;
var G__58705 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__58706_58823 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__58707_58824 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__58708_58825 = true;
var _STAR_print_fn_STAR__temp_val__58709_58826 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__58708_58825);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__58709_58826);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58695_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__58695_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__58707_58824);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__58706_58823);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__58702,G__58703,G__58704,G__58705) : format.call(null,G__58702,G__58703,G__58704,G__58705));

break;
case "macroexpansion":
var G__58710 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__58711 = cause_type;
var G__58712 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58713 = loc;
var G__58714 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58710,G__58711,G__58712,G__58713,G__58714) : format.call(null,G__58710,G__58711,G__58712,G__58713,G__58714));

break;
case "compile-syntax-check":
var G__58715 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__58716 = cause_type;
var G__58717 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58718 = loc;
var G__58719 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58715,G__58716,G__58717,G__58718,G__58719) : format.call(null,G__58715,G__58716,G__58717,G__58718,G__58719));

break;
case "compilation":
var G__58720 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__58721 = cause_type;
var G__58722 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58723 = loc;
var G__58724 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58720,G__58721,G__58722,G__58723,G__58724) : format.call(null,G__58720,G__58721,G__58722,G__58723,G__58724));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__58725 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__58726 = symbol;
var G__58727 = loc;
var G__58728 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__58729_58827 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__58730_58828 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__58731_58829 = true;
var _STAR_print_fn_STAR__temp_val__58732_58830 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__58731_58829);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__58732_58830);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58697_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__58697_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__58730_58828);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__58729_58827);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__58725,G__58726,G__58727,G__58728) : format.call(null,G__58725,G__58726,G__58727,G__58728));
} else {
var G__58733 = "Execution error%s at %s(%s).\n%s\n";
var G__58734 = cause_type;
var G__58735 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58736 = loc;
var G__58737 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58733,G__58734,G__58735,G__58736,G__58737) : format.call(null,G__58733,G__58734,G__58735,G__58736,G__58737));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58701__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
