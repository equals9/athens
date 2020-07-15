goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45379){
var map__45380 = p__45379;
var map__45380__$1 = (((((!((map__45380 == null))))?(((((map__45380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45380):map__45380);
var m = map__45380__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45380__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45380__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45382_45589 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45383_45590 = null;
var count__45384_45591 = (0);
var i__45385_45592 = (0);
while(true){
if((i__45385_45592 < count__45384_45591)){
var f_45593 = chunk__45383_45590.cljs$core$IIndexed$_nth$arity$2(null,i__45385_45592);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45593], 0));


var G__45594 = seq__45382_45589;
var G__45595 = chunk__45383_45590;
var G__45596 = count__45384_45591;
var G__45597 = (i__45385_45592 + (1));
seq__45382_45589 = G__45594;
chunk__45383_45590 = G__45595;
count__45384_45591 = G__45596;
i__45385_45592 = G__45597;
continue;
} else {
var temp__5735__auto___45598 = cljs.core.seq(seq__45382_45589);
if(temp__5735__auto___45598){
var seq__45382_45599__$1 = temp__5735__auto___45598;
if(cljs.core.chunked_seq_QMARK_(seq__45382_45599__$1)){
var c__4609__auto___45600 = cljs.core.chunk_first(seq__45382_45599__$1);
var G__45601 = cljs.core.chunk_rest(seq__45382_45599__$1);
var G__45602 = c__4609__auto___45600;
var G__45603 = cljs.core.count(c__4609__auto___45600);
var G__45604 = (0);
seq__45382_45589 = G__45601;
chunk__45383_45590 = G__45602;
count__45384_45591 = G__45603;
i__45385_45592 = G__45604;
continue;
} else {
var f_45605 = cljs.core.first(seq__45382_45599__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45605], 0));


var G__45606 = cljs.core.next(seq__45382_45599__$1);
var G__45607 = null;
var G__45608 = (0);
var G__45609 = (0);
seq__45382_45589 = G__45606;
chunk__45383_45590 = G__45607;
count__45384_45591 = G__45608;
i__45385_45592 = G__45609;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45610 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45610], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45610)))?cljs.core.second(arglists_45610):arglists_45610)], 0));
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
var seq__45391_45611 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45392_45612 = null;
var count__45393_45613 = (0);
var i__45394_45614 = (0);
while(true){
if((i__45394_45614 < count__45393_45613)){
var vec__45405_45615 = chunk__45392_45612.cljs$core$IIndexed$_nth$arity$2(null,i__45394_45614);
var name_45616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45405_45615,(0),null);
var map__45408_45617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45405_45615,(1),null);
var map__45408_45618__$1 = (((((!((map__45408_45617 == null))))?(((((map__45408_45617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45408_45617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45408_45617):map__45408_45617);
var doc_45619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45408_45618__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45408_45618__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45616], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45620], 0));

if(cljs.core.truth_(doc_45619)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45619], 0));
} else {
}


var G__45621 = seq__45391_45611;
var G__45622 = chunk__45392_45612;
var G__45623 = count__45393_45613;
var G__45624 = (i__45394_45614 + (1));
seq__45391_45611 = G__45621;
chunk__45392_45612 = G__45622;
count__45393_45613 = G__45623;
i__45394_45614 = G__45624;
continue;
} else {
var temp__5735__auto___45627 = cljs.core.seq(seq__45391_45611);
if(temp__5735__auto___45627){
var seq__45391_45630__$1 = temp__5735__auto___45627;
if(cljs.core.chunked_seq_QMARK_(seq__45391_45630__$1)){
var c__4609__auto___45631 = cljs.core.chunk_first(seq__45391_45630__$1);
var G__45632 = cljs.core.chunk_rest(seq__45391_45630__$1);
var G__45633 = c__4609__auto___45631;
var G__45634 = cljs.core.count(c__4609__auto___45631);
var G__45635 = (0);
seq__45391_45611 = G__45632;
chunk__45392_45612 = G__45633;
count__45393_45613 = G__45634;
i__45394_45614 = G__45635;
continue;
} else {
var vec__45410_45636 = cljs.core.first(seq__45391_45630__$1);
var name_45637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45410_45636,(0),null);
var map__45413_45638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45410_45636,(1),null);
var map__45413_45639__$1 = (((((!((map__45413_45638 == null))))?(((((map__45413_45638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45413_45638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45413_45638):map__45413_45638);
var doc_45640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45413_45639__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45413_45639__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45637], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45641], 0));

if(cljs.core.truth_(doc_45640)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45640], 0));
} else {
}


var G__45646 = cljs.core.next(seq__45391_45630__$1);
var G__45647 = null;
var G__45648 = (0);
var G__45649 = (0);
seq__45391_45611 = G__45646;
chunk__45392_45612 = G__45647;
count__45393_45613 = G__45648;
i__45394_45614 = G__45649;
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

var seq__45432 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45433 = null;
var count__45434 = (0);
var i__45435 = (0);
while(true){
if((i__45435 < count__45434)){
var role = chunk__45433.cljs$core$IIndexed$_nth$arity$2(null,i__45435);
var temp__5735__auto___45650__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45650__$1)){
var spec_45651 = temp__5735__auto___45650__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45651)], 0));
} else {
}


var G__45652 = seq__45432;
var G__45653 = chunk__45433;
var G__45654 = count__45434;
var G__45655 = (i__45435 + (1));
seq__45432 = G__45652;
chunk__45433 = G__45653;
count__45434 = G__45654;
i__45435 = G__45655;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45432);
if(temp__5735__auto____$1){
var seq__45432__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45432__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45432__$1);
var G__45656 = cljs.core.chunk_rest(seq__45432__$1);
var G__45657 = c__4609__auto__;
var G__45658 = cljs.core.count(c__4609__auto__);
var G__45659 = (0);
seq__45432 = G__45656;
chunk__45433 = G__45657;
count__45434 = G__45658;
i__45435 = G__45659;
continue;
} else {
var role = cljs.core.first(seq__45432__$1);
var temp__5735__auto___45660__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45660__$2)){
var spec_45661 = temp__5735__auto___45660__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45661)], 0));
} else {
}


var G__45662 = cljs.core.next(seq__45432__$1);
var G__45663 = null;
var G__45664 = (0);
var G__45665 = (0);
seq__45432 = G__45662;
chunk__45433 = G__45663;
count__45434 = G__45664;
i__45435 = G__45665;
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
var G__45666 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45667 = cljs.core.ex_cause(t);
via = G__45666;
t = G__45667;
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
var map__45490 = datafied_throwable;
var map__45490__$1 = (((((!((map__45490 == null))))?(((((map__45490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45490):map__45490);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45490__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45490__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45490__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45491 = cljs.core.last(via);
var map__45491__$1 = (((((!((map__45491 == null))))?(((((map__45491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45491):map__45491);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45491__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45491__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45491__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45492 = data;
var map__45492__$1 = (((((!((map__45492 == null))))?(((((map__45492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45492):map__45492);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45492__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45492__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45492__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45493 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45493__$1 = (((((!((map__45493 == null))))?(((((map__45493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45493):map__45493);
var top_data = map__45493__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45493__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45516 = phase;
var G__45516__$1 = (((G__45516 instanceof cljs.core.Keyword))?G__45516.fqn:null);
switch (G__45516__$1) {
case "read-source":
var map__45521 = data;
var map__45521__$1 = (((((!((map__45521 == null))))?(((((map__45521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45521):map__45521);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45521__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45521__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45523 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45523__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45523,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45523);
var G__45523__$2 = (cljs.core.truth_((function (){var fexpr__45528 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45528.cljs$core$IFn$_invoke$arity$1 ? fexpr__45528.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45528.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45523__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45523__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45523__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45523__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45529 = top_data;
var G__45529__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45529,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45529);
var G__45529__$2 = (cljs.core.truth_((function (){var fexpr__45530 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45530.cljs$core$IFn$_invoke$arity$1 ? fexpr__45530.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45530.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45529__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45529__$1);
var G__45529__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45529__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45529__$2);
var G__45529__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45529__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45529__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45529__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45529__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45531 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45531,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45531,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45531,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45531,(3),null);
var G__45534 = top_data;
var G__45534__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45534,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45534);
var G__45534__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45534__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45534__$1);
var G__45534__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45534__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45534__$2);
var G__45534__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45534__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45534__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45534__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45534__$4;
}

break;
case "execution":
var vec__45536 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45536,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45536,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45536,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45536,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45489_SHARP_){
var or__4185__auto__ = (p1__45489_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45540 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45540.cljs$core$IFn$_invoke$arity$1 ? fexpr__45540.cljs$core$IFn$_invoke$arity$1(p1__45489_SHARP_) : fexpr__45540.call(null,p1__45489_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45541 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45541__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45541,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45541);
var G__45541__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45541__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45541__$1);
var G__45541__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45541__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45541__$2);
var G__45541__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45541__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45541__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45541__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45541__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45516__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45545){
var map__45546 = p__45545;
var map__45546__$1 = (((((!((map__45546 == null))))?(((((map__45546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45546):map__45546);
var triage_data = map__45546__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45546__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45549 = phase;
var G__45549__$1 = (((G__45549 instanceof cljs.core.Keyword))?G__45549.fqn:null);
switch (G__45549__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45550 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45551 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45552 = loc;
var G__45553 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45555_45672 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45556_45673 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45557_45674 = true;
var _STAR_print_fn_STAR__temp_val__45558_45675 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45557_45674);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45558_45675);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45543_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45543_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45556_45673);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45555_45672);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45550,G__45551,G__45552,G__45553) : format.call(null,G__45550,G__45551,G__45552,G__45553));

break;
case "macroexpansion":
var G__45559 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45560 = cause_type;
var G__45561 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45562 = loc;
var G__45563 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45559,G__45560,G__45561,G__45562,G__45563) : format.call(null,G__45559,G__45560,G__45561,G__45562,G__45563));

break;
case "compile-syntax-check":
var G__45565 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45566 = cause_type;
var G__45567 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45568 = loc;
var G__45569 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45565,G__45566,G__45567,G__45568,G__45569) : format.call(null,G__45565,G__45566,G__45567,G__45568,G__45569));

break;
case "compilation":
var G__45570 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45571 = cause_type;
var G__45572 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45573 = loc;
var G__45574 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45570,G__45571,G__45572,G__45573,G__45574) : format.call(null,G__45570,G__45571,G__45572,G__45573,G__45574));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45575 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45576 = symbol;
var G__45577 = loc;
var G__45578 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45579_45677 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45580_45678 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45581_45679 = true;
var _STAR_print_fn_STAR__temp_val__45582_45680 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45581_45679);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45582_45680);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45544_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45544_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45580_45678);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45579_45677);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45575,G__45576,G__45577,G__45578) : format.call(null,G__45575,G__45576,G__45577,G__45578));
} else {
var G__45583 = "Execution error%s at %s(%s).\n%s\n";
var G__45584 = cause_type;
var G__45585 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45586 = loc;
var G__45587 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45583,G__45584,G__45585,G__45586,G__45587) : format.call(null,G__45583,G__45584,G__45585,G__45586,G__45587));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45549__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
