goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53507){
var map__53508 = p__53507;
var map__53508__$1 = (((((!((map__53508 == null))))?(((((map__53508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53508):map__53508);
var m = map__53508__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__53510_53619 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53511_53620 = null;
var count__53512_53621 = (0);
var i__53513_53622 = (0);
while(true){
if((i__53513_53622 < count__53512_53621)){
var f_53623 = chunk__53511_53620.cljs$core$IIndexed$_nth$arity$2(null,i__53513_53622);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53623], 0));


var G__53624 = seq__53510_53619;
var G__53625 = chunk__53511_53620;
var G__53626 = count__53512_53621;
var G__53627 = (i__53513_53622 + (1));
seq__53510_53619 = G__53624;
chunk__53511_53620 = G__53625;
count__53512_53621 = G__53626;
i__53513_53622 = G__53627;
continue;
} else {
var temp__5735__auto___53628 = cljs.core.seq(seq__53510_53619);
if(temp__5735__auto___53628){
var seq__53510_53629__$1 = temp__5735__auto___53628;
if(cljs.core.chunked_seq_QMARK_(seq__53510_53629__$1)){
var c__4609__auto___53630 = cljs.core.chunk_first(seq__53510_53629__$1);
var G__53631 = cljs.core.chunk_rest(seq__53510_53629__$1);
var G__53632 = c__4609__auto___53630;
var G__53633 = cljs.core.count(c__4609__auto___53630);
var G__53634 = (0);
seq__53510_53619 = G__53631;
chunk__53511_53620 = G__53632;
count__53512_53621 = G__53633;
i__53513_53622 = G__53634;
continue;
} else {
var f_53635 = cljs.core.first(seq__53510_53629__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53635], 0));


var G__53636 = cljs.core.next(seq__53510_53629__$1);
var G__53637 = null;
var G__53638 = (0);
var G__53639 = (0);
seq__53510_53619 = G__53636;
chunk__53511_53620 = G__53637;
count__53512_53621 = G__53638;
i__53513_53622 = G__53639;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53640 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53640], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53640)))?cljs.core.second(arglists_53640):arglists_53640)], 0));
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
var seq__53514_53641 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53515_53642 = null;
var count__53516_53643 = (0);
var i__53517_53644 = (0);
while(true){
if((i__53517_53644 < count__53516_53643)){
var vec__53528_53645 = chunk__53515_53642.cljs$core$IIndexed$_nth$arity$2(null,i__53517_53644);
var name_53646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53528_53645,(0),null);
var map__53531_53647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53528_53645,(1),null);
var map__53531_53648__$1 = (((((!((map__53531_53647 == null))))?(((((map__53531_53647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53531_53647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53531_53647):map__53531_53647);
var doc_53649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53531_53648__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53531_53648__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53646], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53650], 0));

if(cljs.core.truth_(doc_53649)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53649], 0));
} else {
}


var G__53651 = seq__53514_53641;
var G__53652 = chunk__53515_53642;
var G__53653 = count__53516_53643;
var G__53654 = (i__53517_53644 + (1));
seq__53514_53641 = G__53651;
chunk__53515_53642 = G__53652;
count__53516_53643 = G__53653;
i__53517_53644 = G__53654;
continue;
} else {
var temp__5735__auto___53655 = cljs.core.seq(seq__53514_53641);
if(temp__5735__auto___53655){
var seq__53514_53656__$1 = temp__5735__auto___53655;
if(cljs.core.chunked_seq_QMARK_(seq__53514_53656__$1)){
var c__4609__auto___53657 = cljs.core.chunk_first(seq__53514_53656__$1);
var G__53658 = cljs.core.chunk_rest(seq__53514_53656__$1);
var G__53659 = c__4609__auto___53657;
var G__53660 = cljs.core.count(c__4609__auto___53657);
var G__53661 = (0);
seq__53514_53641 = G__53658;
chunk__53515_53642 = G__53659;
count__53516_53643 = G__53660;
i__53517_53644 = G__53661;
continue;
} else {
var vec__53533_53662 = cljs.core.first(seq__53514_53656__$1);
var name_53663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53533_53662,(0),null);
var map__53536_53664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53533_53662,(1),null);
var map__53536_53665__$1 = (((((!((map__53536_53664 == null))))?(((((map__53536_53664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53536_53664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53536_53664):map__53536_53664);
var doc_53666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53536_53665__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53536_53665__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53663], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53667], 0));

if(cljs.core.truth_(doc_53666)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53666], 0));
} else {
}


var G__53668 = cljs.core.next(seq__53514_53656__$1);
var G__53669 = null;
var G__53670 = (0);
var G__53671 = (0);
seq__53514_53641 = G__53668;
chunk__53515_53642 = G__53669;
count__53516_53643 = G__53670;
i__53517_53644 = G__53671;
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

var seq__53538 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53539 = null;
var count__53540 = (0);
var i__53541 = (0);
while(true){
if((i__53541 < count__53540)){
var role = chunk__53539.cljs$core$IIndexed$_nth$arity$2(null,i__53541);
var temp__5735__auto___53672__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53672__$1)){
var spec_53673 = temp__5735__auto___53672__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53673)], 0));
} else {
}


var G__53674 = seq__53538;
var G__53675 = chunk__53539;
var G__53676 = count__53540;
var G__53677 = (i__53541 + (1));
seq__53538 = G__53674;
chunk__53539 = G__53675;
count__53540 = G__53676;
i__53541 = G__53677;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__53538);
if(temp__5735__auto____$1){
var seq__53538__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53538__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53538__$1);
var G__53678 = cljs.core.chunk_rest(seq__53538__$1);
var G__53679 = c__4609__auto__;
var G__53680 = cljs.core.count(c__4609__auto__);
var G__53681 = (0);
seq__53538 = G__53678;
chunk__53539 = G__53679;
count__53540 = G__53680;
i__53541 = G__53681;
continue;
} else {
var role = cljs.core.first(seq__53538__$1);
var temp__5735__auto___53682__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___53682__$2)){
var spec_53683 = temp__5735__auto___53682__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53683)], 0));
} else {
}


var G__53684 = cljs.core.next(seq__53538__$1);
var G__53685 = null;
var G__53686 = (0);
var G__53687 = (0);
seq__53538 = G__53684;
chunk__53539 = G__53685;
count__53540 = G__53686;
i__53541 = G__53687;
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
var G__53689 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53690 = cljs.core.ex_cause(t);
via = G__53689;
t = G__53690;
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
var map__53544 = datafied_throwable;
var map__53544__$1 = (((((!((map__53544 == null))))?(((((map__53544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53544):map__53544);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53544__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53544__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53544__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53545 = cljs.core.last(via);
var map__53545__$1 = (((((!((map__53545 == null))))?(((((map__53545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53545):map__53545);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53545__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53545__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53545__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53546 = data;
var map__53546__$1 = (((((!((map__53546 == null))))?(((((map__53546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53546):map__53546);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53546__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53546__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53546__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53547 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53547__$1 = (((((!((map__53547 == null))))?(((((map__53547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53547):map__53547);
var top_data = map__53547__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53547__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53552 = phase;
var G__53552__$1 = (((G__53552 instanceof cljs.core.Keyword))?G__53552.fqn:null);
switch (G__53552__$1) {
case "read-source":
var map__53553 = data;
var map__53553__$1 = (((((!((map__53553 == null))))?(((((map__53553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53553):map__53553);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53553__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53553__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53555 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53555__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53555,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53555);
var G__53555__$2 = (cljs.core.truth_((function (){var fexpr__53556 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53556.cljs$core$IFn$_invoke$arity$1 ? fexpr__53556.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53556.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53555__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53555__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53555__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53555__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53557 = top_data;
var G__53557__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53557,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53557);
var G__53557__$2 = (cljs.core.truth_((function (){var fexpr__53558 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53558.cljs$core$IFn$_invoke$arity$1 ? fexpr__53558.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53558.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53557__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53557__$1);
var G__53557__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53557__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53557__$2);
var G__53557__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53557__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53557__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53557__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53557__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53559 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53559,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53559,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53559,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53559,(3),null);
var G__53562 = top_data;
var G__53562__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53562,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53562);
var G__53562__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53562__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53562__$1);
var G__53562__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53562__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53562__$2);
var G__53562__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53562__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53562__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53562__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53562__$4;
}

break;
case "execution":
var vec__53563 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53563,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53563,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53563,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53563,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53543_SHARP_){
var or__4185__auto__ = (p1__53543_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__53567 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53567.cljs$core$IFn$_invoke$arity$1 ? fexpr__53567.cljs$core$IFn$_invoke$arity$1(p1__53543_SHARP_) : fexpr__53567.call(null,p1__53543_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__53568 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53568__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53568,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53568);
var G__53568__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53568__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53568__$1);
var G__53568__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53568__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53568__$2);
var G__53568__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53568__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53568__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53568__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53568__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53552__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53571){
var map__53572 = p__53571;
var map__53572__$1 = (((((!((map__53572 == null))))?(((((map__53572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53572):map__53572);
var triage_data = map__53572__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__53576 = phase;
var G__53576__$1 = (((G__53576 instanceof cljs.core.Keyword))?G__53576.fqn:null);
switch (G__53576__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53577 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53578 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53579 = loc;
var G__53580 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53583_53700 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53584_53701 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53585_53702 = true;
var _STAR_print_fn_STAR__temp_val__53586_53703 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53585_53702);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53586_53703);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53569_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53569_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53584_53701);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53583_53700);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53577,G__53578,G__53579,G__53580) : format.call(null,G__53577,G__53578,G__53579,G__53580));

break;
case "macroexpansion":
var G__53590 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53591 = cause_type;
var G__53592 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53593 = loc;
var G__53594 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53590,G__53591,G__53592,G__53593,G__53594) : format.call(null,G__53590,G__53591,G__53592,G__53593,G__53594));

break;
case "compile-syntax-check":
var G__53596 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53597 = cause_type;
var G__53598 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53599 = loc;
var G__53600 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53596,G__53597,G__53598,G__53599,G__53600) : format.call(null,G__53596,G__53597,G__53598,G__53599,G__53600));

break;
case "compilation":
var G__53601 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53602 = cause_type;
var G__53603 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53604 = loc;
var G__53605 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53601,G__53602,G__53603,G__53604,G__53605) : format.call(null,G__53601,G__53602,G__53603,G__53604,G__53605));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53606 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53607 = symbol;
var G__53608 = loc;
var G__53609 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53610_53704 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53611_53705 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53612_53706 = true;
var _STAR_print_fn_STAR__temp_val__53613_53707 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53612_53706);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53613_53707);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53570_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53570_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53611_53705);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53610_53704);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53606,G__53607,G__53608,G__53609) : format.call(null,G__53606,G__53607,G__53608,G__53609));
} else {
var G__53614 = "Execution error%s at %s(%s).\n%s\n";
var G__53615 = cause_type;
var G__53616 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53617 = loc;
var G__53618 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53614,G__53615,G__53616,G__53617,G__53618) : format.call(null,G__53614,G__53615,G__53616,G__53617,G__53618));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53576__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
