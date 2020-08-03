goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49458){
var map__49459 = p__49458;
var map__49459__$1 = (((((!((map__49459 == null))))?(((((map__49459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49459):map__49459);
var m = map__49459__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49459__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49459__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var seq__49461_49578 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49462_49579 = null;
var count__49463_49580 = (0);
var i__49464_49581 = (0);
while(true){
if((i__49464_49581 < count__49463_49580)){
var f_49582 = chunk__49462_49579.cljs$core$IIndexed$_nth$arity$2(null,i__49464_49581);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49582], 0));


var G__49583 = seq__49461_49578;
var G__49584 = chunk__49462_49579;
var G__49585 = count__49463_49580;
var G__49586 = (i__49464_49581 + (1));
seq__49461_49578 = G__49583;
chunk__49462_49579 = G__49584;
count__49463_49580 = G__49585;
i__49464_49581 = G__49586;
continue;
} else {
var temp__5735__auto___49587 = cljs.core.seq(seq__49461_49578);
if(temp__5735__auto___49587){
var seq__49461_49588__$1 = temp__5735__auto___49587;
if(cljs.core.chunked_seq_QMARK_(seq__49461_49588__$1)){
var c__4556__auto___49592 = cljs.core.chunk_first(seq__49461_49588__$1);
var G__49593 = cljs.core.chunk_rest(seq__49461_49588__$1);
var G__49594 = c__4556__auto___49592;
var G__49595 = cljs.core.count(c__4556__auto___49592);
var G__49596 = (0);
seq__49461_49578 = G__49593;
chunk__49462_49579 = G__49594;
count__49463_49580 = G__49595;
i__49464_49581 = G__49596;
continue;
} else {
var f_49597 = cljs.core.first(seq__49461_49588__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49597], 0));


var G__49598 = cljs.core.next(seq__49461_49588__$1);
var G__49599 = null;
var G__49600 = (0);
var G__49601 = (0);
seq__49461_49578 = G__49598;
chunk__49462_49579 = G__49599;
count__49463_49580 = G__49600;
i__49464_49581 = G__49601;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49602 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49602], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49602)))?cljs.core.second(arglists_49602):arglists_49602)], 0));
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
var seq__49466_49603 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49467_49604 = null;
var count__49468_49605 = (0);
var i__49469_49606 = (0);
while(true){
if((i__49469_49606 < count__49468_49605)){
var vec__49482_49607 = chunk__49467_49604.cljs$core$IIndexed$_nth$arity$2(null,i__49469_49606);
var name_49608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49482_49607,(0),null);
var map__49485_49609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49482_49607,(1),null);
var map__49485_49610__$1 = (((((!((map__49485_49609 == null))))?(((((map__49485_49609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49485_49609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49485_49609):map__49485_49609);
var doc_49611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49485_49610__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49485_49610__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49608], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49612], 0));

if(cljs.core.truth_(doc_49611)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49611], 0));
} else {
}


var G__49613 = seq__49466_49603;
var G__49614 = chunk__49467_49604;
var G__49615 = count__49468_49605;
var G__49616 = (i__49469_49606 + (1));
seq__49466_49603 = G__49613;
chunk__49467_49604 = G__49614;
count__49468_49605 = G__49615;
i__49469_49606 = G__49616;
continue;
} else {
var temp__5735__auto___49621 = cljs.core.seq(seq__49466_49603);
if(temp__5735__auto___49621){
var seq__49466_49622__$1 = temp__5735__auto___49621;
if(cljs.core.chunked_seq_QMARK_(seq__49466_49622__$1)){
var c__4556__auto___49623 = cljs.core.chunk_first(seq__49466_49622__$1);
var G__49624 = cljs.core.chunk_rest(seq__49466_49622__$1);
var G__49625 = c__4556__auto___49623;
var G__49626 = cljs.core.count(c__4556__auto___49623);
var G__49627 = (0);
seq__49466_49603 = G__49624;
chunk__49467_49604 = G__49625;
count__49468_49605 = G__49626;
i__49469_49606 = G__49627;
continue;
} else {
var vec__49487_49628 = cljs.core.first(seq__49466_49622__$1);
var name_49629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49487_49628,(0),null);
var map__49490_49630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49487_49628,(1),null);
var map__49490_49631__$1 = (((((!((map__49490_49630 == null))))?(((((map__49490_49630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49490_49630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49490_49630):map__49490_49630);
var doc_49632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49490_49631__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49490_49631__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49629], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49633], 0));

if(cljs.core.truth_(doc_49632)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49632], 0));
} else {
}


var G__49637 = cljs.core.next(seq__49466_49622__$1);
var G__49638 = null;
var G__49639 = (0);
var G__49640 = (0);
seq__49466_49603 = G__49637;
chunk__49467_49604 = G__49638;
count__49468_49605 = G__49639;
i__49469_49606 = G__49640;
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

var seq__49492 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49493 = null;
var count__49494 = (0);
var i__49495 = (0);
while(true){
if((i__49495 < count__49494)){
var role = chunk__49493.cljs$core$IIndexed$_nth$arity$2(null,i__49495);
var temp__5735__auto___49641__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49641__$1)){
var spec_49642 = temp__5735__auto___49641__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49642)], 0));
} else {
}


var G__49643 = seq__49492;
var G__49644 = chunk__49493;
var G__49645 = count__49494;
var G__49646 = (i__49495 + (1));
seq__49492 = G__49643;
chunk__49493 = G__49644;
count__49494 = G__49645;
i__49495 = G__49646;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__49492);
if(temp__5735__auto____$1){
var seq__49492__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49492__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49492__$1);
var G__49647 = cljs.core.chunk_rest(seq__49492__$1);
var G__49648 = c__4556__auto__;
var G__49649 = cljs.core.count(c__4556__auto__);
var G__49650 = (0);
seq__49492 = G__49647;
chunk__49493 = G__49648;
count__49494 = G__49649;
i__49495 = G__49650;
continue;
} else {
var role = cljs.core.first(seq__49492__$1);
var temp__5735__auto___49653__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___49653__$2)){
var spec_49654 = temp__5735__auto___49653__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49654)], 0));
} else {
}


var G__49655 = cljs.core.next(seq__49492__$1);
var G__49656 = null;
var G__49657 = (0);
var G__49658 = (0);
seq__49492 = G__49655;
chunk__49493 = G__49656;
count__49494 = G__49657;
i__49495 = G__49658;
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
var G__49667 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49668 = cljs.core.ex_cause(t);
via = G__49667;
t = G__49668;
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
var map__49508 = datafied_throwable;
var map__49508__$1 = (((((!((map__49508 == null))))?(((((map__49508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49508):map__49508);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49508__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49508__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49508__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49509 = cljs.core.last(via);
var map__49509__$1 = (((((!((map__49509 == null))))?(((((map__49509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49509):map__49509);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49509__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49509__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49509__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49510 = data;
var map__49510__$1 = (((((!((map__49510 == null))))?(((((map__49510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49510):map__49510);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49510__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49510__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49510__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49511 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49511__$1 = (((((!((map__49511 == null))))?(((((map__49511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49511):map__49511);
var top_data = map__49511__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49511__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49516 = phase;
var G__49516__$1 = (((G__49516 instanceof cljs.core.Keyword))?G__49516.fqn:null);
switch (G__49516__$1) {
case "read-source":
var map__49517 = data;
var map__49517__$1 = (((((!((map__49517 == null))))?(((((map__49517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49517):map__49517);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49517__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49517__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49519 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49519__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49519,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49519);
var G__49519__$2 = (cljs.core.truth_((function (){var fexpr__49520 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49520.cljs$core$IFn$_invoke$arity$1 ? fexpr__49520.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49520.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49519__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49519__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49519__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49519__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49521 = top_data;
var G__49521__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49521,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49521);
var G__49521__$2 = (cljs.core.truth_((function (){var fexpr__49522 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49522.cljs$core$IFn$_invoke$arity$1 ? fexpr__49522.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49522.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49521__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49521__$1);
var G__49521__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49521__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49521__$2);
var G__49521__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49521__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49521__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49521__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49521__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49523 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49523,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49523,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49523,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49523,(3),null);
var G__49526 = top_data;
var G__49526__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49526,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49526);
var G__49526__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49526__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49526__$1);
var G__49526__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49526__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49526__$2);
var G__49526__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49526__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49526__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49526__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49526__$4;
}

break;
case "execution":
var vec__49527 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49527,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49527,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49527,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49527,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49506_SHARP_){
var or__4126__auto__ = (p1__49506_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__49531 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49531.cljs$core$IFn$_invoke$arity$1 ? fexpr__49531.cljs$core$IFn$_invoke$arity$1(p1__49506_SHARP_) : fexpr__49531.call(null,p1__49506_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__49533 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49533__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49533,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49533);
var G__49533__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49533__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49533__$1);
var G__49533__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49533__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49533__$2);
var G__49533__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49533__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49533__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49533__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49533__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49516__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49536){
var map__49537 = p__49536;
var map__49537__$1 = (((((!((map__49537 == null))))?(((((map__49537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49537):map__49537);
var triage_data = map__49537__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49537__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49537__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49537__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49537__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49537__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49537__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49537__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49537__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__49539 = phase;
var G__49539__$1 = (((G__49539 instanceof cljs.core.Keyword))?G__49539.fqn:null);
switch (G__49539__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49540 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49541 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49542 = loc;
var G__49543 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49544_49678 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49545_49679 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49546_49680 = true;
var _STAR_print_fn_STAR__temp_val__49547_49681 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49546_49680);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49547_49681);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49534_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49534_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49545_49679);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49544_49678);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49540,G__49541,G__49542,G__49543) : format.call(null,G__49540,G__49541,G__49542,G__49543));

break;
case "macroexpansion":
var G__49549 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49550 = cause_type;
var G__49551 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49552 = loc;
var G__49553 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49549,G__49550,G__49551,G__49552,G__49553) : format.call(null,G__49549,G__49550,G__49551,G__49552,G__49553));

break;
case "compile-syntax-check":
var G__49554 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49555 = cause_type;
var G__49556 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49557 = loc;
var G__49558 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49554,G__49555,G__49556,G__49557,G__49558) : format.call(null,G__49554,G__49555,G__49556,G__49557,G__49558));

break;
case "compilation":
var G__49559 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49560 = cause_type;
var G__49561 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49562 = loc;
var G__49563 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49559,G__49560,G__49561,G__49562,G__49563) : format.call(null,G__49559,G__49560,G__49561,G__49562,G__49563));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49564 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49565 = symbol;
var G__49566 = loc;
var G__49567 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49569_49682 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49570_49683 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49571_49684 = true;
var _STAR_print_fn_STAR__temp_val__49572_49685 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49571_49684);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49572_49685);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49535_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49535_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49570_49683);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49569_49682);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49564,G__49565,G__49566,G__49567) : format.call(null,G__49564,G__49565,G__49566,G__49567));
} else {
var G__49573 = "Execution error%s at %s(%s).\n%s\n";
var G__49574 = cause_type;
var G__49575 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49576 = loc;
var G__49577 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49573,G__49574,G__49575,G__49576,G__49577) : format.call(null,G__49573,G__49574,G__49575,G__49576,G__49577));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49539__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
