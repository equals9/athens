goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45480){
var map__45481 = p__45480;
var map__45481__$1 = (((((!((map__45481 == null))))?(((((map__45481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45481):map__45481);
var m = map__45481__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45481__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45481__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45484_45599 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45485_45600 = null;
var count__45486_45601 = (0);
var i__45487_45602 = (0);
while(true){
if((i__45487_45602 < count__45486_45601)){
var f_45603 = chunk__45485_45600.cljs$core$IIndexed$_nth$arity$2(null,i__45487_45602);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45603], 0));


var G__45604 = seq__45484_45599;
var G__45605 = chunk__45485_45600;
var G__45606 = count__45486_45601;
var G__45607 = (i__45487_45602 + (1));
seq__45484_45599 = G__45604;
chunk__45485_45600 = G__45605;
count__45486_45601 = G__45606;
i__45487_45602 = G__45607;
continue;
} else {
var temp__5735__auto___45608 = cljs.core.seq(seq__45484_45599);
if(temp__5735__auto___45608){
var seq__45484_45609__$1 = temp__5735__auto___45608;
if(cljs.core.chunked_seq_QMARK_(seq__45484_45609__$1)){
var c__4609__auto___45610 = cljs.core.chunk_first(seq__45484_45609__$1);
var G__45611 = cljs.core.chunk_rest(seq__45484_45609__$1);
var G__45612 = c__4609__auto___45610;
var G__45613 = cljs.core.count(c__4609__auto___45610);
var G__45614 = (0);
seq__45484_45599 = G__45611;
chunk__45485_45600 = G__45612;
count__45486_45601 = G__45613;
i__45487_45602 = G__45614;
continue;
} else {
var f_45615 = cljs.core.first(seq__45484_45609__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45615], 0));


var G__45616 = cljs.core.next(seq__45484_45609__$1);
var G__45617 = null;
var G__45618 = (0);
var G__45619 = (0);
seq__45484_45599 = G__45616;
chunk__45485_45600 = G__45617;
count__45486_45601 = G__45618;
i__45487_45602 = G__45619;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45620 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45620], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45620)))?cljs.core.second(arglists_45620):arglists_45620)], 0));
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
var seq__45490_45621 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45491_45622 = null;
var count__45492_45623 = (0);
var i__45493_45624 = (0);
while(true){
if((i__45493_45624 < count__45492_45623)){
var vec__45506_45625 = chunk__45491_45622.cljs$core$IIndexed$_nth$arity$2(null,i__45493_45624);
var name_45626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45506_45625,(0),null);
var map__45509_45627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45506_45625,(1),null);
var map__45509_45628__$1 = (((((!((map__45509_45627 == null))))?(((((map__45509_45627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45509_45627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45509_45627):map__45509_45627);
var doc_45629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45509_45628__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45509_45628__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45626], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45630], 0));

if(cljs.core.truth_(doc_45629)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45629], 0));
} else {
}


var G__45631 = seq__45490_45621;
var G__45632 = chunk__45491_45622;
var G__45633 = count__45492_45623;
var G__45634 = (i__45493_45624 + (1));
seq__45490_45621 = G__45631;
chunk__45491_45622 = G__45632;
count__45492_45623 = G__45633;
i__45493_45624 = G__45634;
continue;
} else {
var temp__5735__auto___45635 = cljs.core.seq(seq__45490_45621);
if(temp__5735__auto___45635){
var seq__45490_45637__$1 = temp__5735__auto___45635;
if(cljs.core.chunked_seq_QMARK_(seq__45490_45637__$1)){
var c__4609__auto___45638 = cljs.core.chunk_first(seq__45490_45637__$1);
var G__45639 = cljs.core.chunk_rest(seq__45490_45637__$1);
var G__45640 = c__4609__auto___45638;
var G__45641 = cljs.core.count(c__4609__auto___45638);
var G__45642 = (0);
seq__45490_45621 = G__45639;
chunk__45491_45622 = G__45640;
count__45492_45623 = G__45641;
i__45493_45624 = G__45642;
continue;
} else {
var vec__45511_45643 = cljs.core.first(seq__45490_45637__$1);
var name_45644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45511_45643,(0),null);
var map__45514_45645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45511_45643,(1),null);
var map__45514_45646__$1 = (((((!((map__45514_45645 == null))))?(((((map__45514_45645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45514_45645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45514_45645):map__45514_45645);
var doc_45647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45514_45646__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45514_45646__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45644], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45648], 0));

if(cljs.core.truth_(doc_45647)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45647], 0));
} else {
}


var G__45649 = cljs.core.next(seq__45490_45637__$1);
var G__45650 = null;
var G__45651 = (0);
var G__45652 = (0);
seq__45490_45621 = G__45649;
chunk__45491_45622 = G__45650;
count__45492_45623 = G__45651;
i__45493_45624 = G__45652;
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

var seq__45516 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45517 = null;
var count__45518 = (0);
var i__45519 = (0);
while(true){
if((i__45519 < count__45518)){
var role = chunk__45517.cljs$core$IIndexed$_nth$arity$2(null,i__45519);
var temp__5735__auto___45653__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45653__$1)){
var spec_45654 = temp__5735__auto___45653__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45654)], 0));
} else {
}


var G__45655 = seq__45516;
var G__45656 = chunk__45517;
var G__45657 = count__45518;
var G__45658 = (i__45519 + (1));
seq__45516 = G__45655;
chunk__45517 = G__45656;
count__45518 = G__45657;
i__45519 = G__45658;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45516);
if(temp__5735__auto____$1){
var seq__45516__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45516__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45516__$1);
var G__45659 = cljs.core.chunk_rest(seq__45516__$1);
var G__45660 = c__4609__auto__;
var G__45661 = cljs.core.count(c__4609__auto__);
var G__45662 = (0);
seq__45516 = G__45659;
chunk__45517 = G__45660;
count__45518 = G__45661;
i__45519 = G__45662;
continue;
} else {
var role = cljs.core.first(seq__45516__$1);
var temp__5735__auto___45665__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45665__$2)){
var spec_45666 = temp__5735__auto___45665__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45666)], 0));
} else {
}


var G__45667 = cljs.core.next(seq__45516__$1);
var G__45668 = null;
var G__45669 = (0);
var G__45670 = (0);
seq__45516 = G__45667;
chunk__45517 = G__45668;
count__45518 = G__45669;
i__45519 = G__45670;
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
var G__45673 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45674 = cljs.core.ex_cause(t);
via = G__45673;
t = G__45674;
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
var map__45530 = datafied_throwable;
var map__45530__$1 = (((((!((map__45530 == null))))?(((((map__45530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45530):map__45530);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45530__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45530__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45530__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45531 = cljs.core.last(via);
var map__45531__$1 = (((((!((map__45531 == null))))?(((((map__45531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45531):map__45531);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45531__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45531__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45531__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45532 = data;
var map__45532__$1 = (((((!((map__45532 == null))))?(((((map__45532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45532):map__45532);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45532__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45532__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45532__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45533 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45533__$1 = (((((!((map__45533 == null))))?(((((map__45533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45533):map__45533);
var top_data = map__45533__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45533__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45538 = phase;
var G__45538__$1 = (((G__45538 instanceof cljs.core.Keyword))?G__45538.fqn:null);
switch (G__45538__$1) {
case "read-source":
var map__45539 = data;
var map__45539__$1 = (((((!((map__45539 == null))))?(((((map__45539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45539):map__45539);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45539__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45541 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45541__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45541,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45541);
var G__45541__$2 = (cljs.core.truth_((function (){var fexpr__45542 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45542.cljs$core$IFn$_invoke$arity$1 ? fexpr__45542.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45542.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45541__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45541__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45541__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45541__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45543 = top_data;
var G__45543__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45543,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45543);
var G__45543__$2 = (cljs.core.truth_((function (){var fexpr__45544 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45544.cljs$core$IFn$_invoke$arity$1 ? fexpr__45544.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45544.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45543__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45543__$1);
var G__45543__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45543__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45543__$2);
var G__45543__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45543__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45543__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45543__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45543__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45545 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45545,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45545,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45545,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45545,(3),null);
var G__45548 = top_data;
var G__45548__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45548,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45548);
var G__45548__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45548__$1);
var G__45548__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45548__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45548__$2);
var G__45548__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45548__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45548__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45548__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45548__$4;
}

break;
case "execution":
var vec__45550 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45550,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45550,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45550,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45550,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45529_SHARP_){
var or__4185__auto__ = (p1__45529_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45554 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45554.cljs$core$IFn$_invoke$arity$1 ? fexpr__45554.cljs$core$IFn$_invoke$arity$1(p1__45529_SHARP_) : fexpr__45554.call(null,p1__45529_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45555 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45555__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45555,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45555);
var G__45555__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45555__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45555__$1);
var G__45555__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45555__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45555__$2);
var G__45555__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45555__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45555__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45555__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45555__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45538__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45558){
var map__45559 = p__45558;
var map__45559__$1 = (((((!((map__45559 == null))))?(((((map__45559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45559):map__45559);
var triage_data = map__45559__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45559__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45559__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45559__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45559__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45559__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45559__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45559__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45559__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45561 = phase;
var G__45561__$1 = (((G__45561 instanceof cljs.core.Keyword))?G__45561.fqn:null);
switch (G__45561__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45562 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45563 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45564 = loc;
var G__45565 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45566_45679 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45567_45680 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45568_45681 = true;
var _STAR_print_fn_STAR__temp_val__45569_45682 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45568_45681);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45569_45682);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45556_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45556_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45567_45680);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45566_45679);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45562,G__45563,G__45564,G__45565) : format.call(null,G__45562,G__45563,G__45564,G__45565));

break;
case "macroexpansion":
var G__45571 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45572 = cause_type;
var G__45573 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45574 = loc;
var G__45575 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45571,G__45572,G__45573,G__45574,G__45575) : format.call(null,G__45571,G__45572,G__45573,G__45574,G__45575));

break;
case "compile-syntax-check":
var G__45576 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45577 = cause_type;
var G__45578 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45579 = loc;
var G__45580 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45576,G__45577,G__45578,G__45579,G__45580) : format.call(null,G__45576,G__45577,G__45578,G__45579,G__45580));

break;
case "compilation":
var G__45581 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45582 = cause_type;
var G__45583 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45584 = loc;
var G__45585 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45581,G__45582,G__45583,G__45584,G__45585) : format.call(null,G__45581,G__45582,G__45583,G__45584,G__45585));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45586 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45587 = symbol;
var G__45588 = loc;
var G__45589 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45590_45690 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45591_45691 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45592_45692 = true;
var _STAR_print_fn_STAR__temp_val__45593_45693 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45592_45692);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45593_45693);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45557_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45557_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45591_45691);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45590_45690);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45586,G__45587,G__45588,G__45589) : format.call(null,G__45586,G__45587,G__45588,G__45589));
} else {
var G__45594 = "Execution error%s at %s(%s).\n%s\n";
var G__45595 = cause_type;
var G__45596 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45597 = loc;
var G__45598 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45594,G__45595,G__45596,G__45597,G__45598) : format.call(null,G__45594,G__45595,G__45596,G__45597,G__45598));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45561__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
