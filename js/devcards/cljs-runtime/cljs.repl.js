goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45088){
var map__45089 = p__45088;
var map__45089__$1 = (((((!((map__45089 == null))))?(((((map__45089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45089):map__45089);
var m = map__45089__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45089__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45089__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45091_45298 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45092_45299 = null;
var count__45093_45300 = (0);
var i__45094_45301 = (0);
while(true){
if((i__45094_45301 < count__45093_45300)){
var f_45302 = chunk__45092_45299.cljs$core$IIndexed$_nth$arity$2(null,i__45094_45301);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45302], 0));


var G__45303 = seq__45091_45298;
var G__45304 = chunk__45092_45299;
var G__45305 = count__45093_45300;
var G__45306 = (i__45094_45301 + (1));
seq__45091_45298 = G__45303;
chunk__45092_45299 = G__45304;
count__45093_45300 = G__45305;
i__45094_45301 = G__45306;
continue;
} else {
var temp__5735__auto___45307 = cljs.core.seq(seq__45091_45298);
if(temp__5735__auto___45307){
var seq__45091_45308__$1 = temp__5735__auto___45307;
if(cljs.core.chunked_seq_QMARK_(seq__45091_45308__$1)){
var c__4609__auto___45309 = cljs.core.chunk_first(seq__45091_45308__$1);
var G__45310 = cljs.core.chunk_rest(seq__45091_45308__$1);
var G__45311 = c__4609__auto___45309;
var G__45312 = cljs.core.count(c__4609__auto___45309);
var G__45313 = (0);
seq__45091_45298 = G__45310;
chunk__45092_45299 = G__45311;
count__45093_45300 = G__45312;
i__45094_45301 = G__45313;
continue;
} else {
var f_45314 = cljs.core.first(seq__45091_45308__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45314], 0));


var G__45315 = cljs.core.next(seq__45091_45308__$1);
var G__45316 = null;
var G__45317 = (0);
var G__45318 = (0);
seq__45091_45298 = G__45315;
chunk__45092_45299 = G__45316;
count__45093_45300 = G__45317;
i__45094_45301 = G__45318;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45319 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45319], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45319)))?cljs.core.second(arglists_45319):arglists_45319)], 0));
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
var seq__45096_45321 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45097_45322 = null;
var count__45098_45323 = (0);
var i__45099_45324 = (0);
while(true){
if((i__45099_45324 < count__45098_45323)){
var vec__45115_45325 = chunk__45097_45322.cljs$core$IIndexed$_nth$arity$2(null,i__45099_45324);
var name_45326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45115_45325,(0),null);
var map__45118_45327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45115_45325,(1),null);
var map__45118_45328__$1 = (((((!((map__45118_45327 == null))))?(((((map__45118_45327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45118_45327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45118_45327):map__45118_45327);
var doc_45329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45118_45328__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45118_45328__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45326], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45330], 0));

if(cljs.core.truth_(doc_45329)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45329], 0));
} else {
}


var G__45331 = seq__45096_45321;
var G__45332 = chunk__45097_45322;
var G__45333 = count__45098_45323;
var G__45334 = (i__45099_45324 + (1));
seq__45096_45321 = G__45331;
chunk__45097_45322 = G__45332;
count__45098_45323 = G__45333;
i__45099_45324 = G__45334;
continue;
} else {
var temp__5735__auto___45335 = cljs.core.seq(seq__45096_45321);
if(temp__5735__auto___45335){
var seq__45096_45336__$1 = temp__5735__auto___45335;
if(cljs.core.chunked_seq_QMARK_(seq__45096_45336__$1)){
var c__4609__auto___45337 = cljs.core.chunk_first(seq__45096_45336__$1);
var G__45338 = cljs.core.chunk_rest(seq__45096_45336__$1);
var G__45339 = c__4609__auto___45337;
var G__45340 = cljs.core.count(c__4609__auto___45337);
var G__45341 = (0);
seq__45096_45321 = G__45338;
chunk__45097_45322 = G__45339;
count__45098_45323 = G__45340;
i__45099_45324 = G__45341;
continue;
} else {
var vec__45120_45342 = cljs.core.first(seq__45096_45336__$1);
var name_45343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45120_45342,(0),null);
var map__45123_45344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45120_45342,(1),null);
var map__45123_45345__$1 = (((((!((map__45123_45344 == null))))?(((((map__45123_45344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45123_45344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45123_45344):map__45123_45344);
var doc_45346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45123_45345__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45123_45345__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45343], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45347], 0));

if(cljs.core.truth_(doc_45346)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45346], 0));
} else {
}


var G__45348 = cljs.core.next(seq__45096_45336__$1);
var G__45349 = null;
var G__45350 = (0);
var G__45351 = (0);
seq__45096_45321 = G__45348;
chunk__45097_45322 = G__45349;
count__45098_45323 = G__45350;
i__45099_45324 = G__45351;
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

var seq__45125 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45126 = null;
var count__45127 = (0);
var i__45128 = (0);
while(true){
if((i__45128 < count__45127)){
var role = chunk__45126.cljs$core$IIndexed$_nth$arity$2(null,i__45128);
var temp__5735__auto___45352__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45352__$1)){
var spec_45353 = temp__5735__auto___45352__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45353)], 0));
} else {
}


var G__45356 = seq__45125;
var G__45357 = chunk__45126;
var G__45358 = count__45127;
var G__45359 = (i__45128 + (1));
seq__45125 = G__45356;
chunk__45126 = G__45357;
count__45127 = G__45358;
i__45128 = G__45359;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45125);
if(temp__5735__auto____$1){
var seq__45125__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45125__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45125__$1);
var G__45362 = cljs.core.chunk_rest(seq__45125__$1);
var G__45363 = c__4609__auto__;
var G__45364 = cljs.core.count(c__4609__auto__);
var G__45365 = (0);
seq__45125 = G__45362;
chunk__45126 = G__45363;
count__45127 = G__45364;
i__45128 = G__45365;
continue;
} else {
var role = cljs.core.first(seq__45125__$1);
var temp__5735__auto___45366__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45366__$2)){
var spec_45367 = temp__5735__auto___45366__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45367)], 0));
} else {
}


var G__45368 = cljs.core.next(seq__45125__$1);
var G__45369 = null;
var G__45370 = (0);
var G__45371 = (0);
seq__45125 = G__45368;
chunk__45126 = G__45369;
count__45127 = G__45370;
i__45128 = G__45371;
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
var G__45376 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45377 = cljs.core.ex_cause(t);
via = G__45376;
t = G__45377;
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
var map__45177 = datafied_throwable;
var map__45177__$1 = (((((!((map__45177 == null))))?(((((map__45177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45177):map__45177);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45177__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45177__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45177__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45179 = cljs.core.last(via);
var map__45179__$1 = (((((!((map__45179 == null))))?(((((map__45179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45179):map__45179);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45179__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45179__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45179__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45180 = data;
var map__45180__$1 = (((((!((map__45180 == null))))?(((((map__45180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45180):map__45180);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45180__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45180__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45180__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45181 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45181__$1 = (((((!((map__45181 == null))))?(((((map__45181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45181):map__45181);
var top_data = map__45181__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45181__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45201 = phase;
var G__45201__$1 = (((G__45201 instanceof cljs.core.Keyword))?G__45201.fqn:null);
switch (G__45201__$1) {
case "read-source":
var map__45202 = data;
var map__45202__$1 = (((((!((map__45202 == null))))?(((((map__45202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45202):map__45202);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45202__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45202__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45208 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45208__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45208,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45208);
var G__45208__$2 = (cljs.core.truth_((function (){var fexpr__45212 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45212.cljs$core$IFn$_invoke$arity$1 ? fexpr__45212.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45212.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45208__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45208__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45208__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45208__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45213 = top_data;
var G__45213__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45213,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45213);
var G__45213__$2 = (cljs.core.truth_((function (){var fexpr__45214 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45214.cljs$core$IFn$_invoke$arity$1 ? fexpr__45214.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45214.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45213__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45213__$1);
var G__45213__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45213__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45213__$2);
var G__45213__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45213__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45213__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45213__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45213__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45219 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45219,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45219,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45219,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45219,(3),null);
var G__45223 = top_data;
var G__45223__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45223,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45223);
var G__45223__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45223__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45223__$1);
var G__45223__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45223__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45223__$2);
var G__45223__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45223__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45223__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45223__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45223__$4;
}

break;
case "execution":
var vec__45233 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45233,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45233,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45233,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45233,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45168_SHARP_){
var or__4185__auto__ = (p1__45168_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45241 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45241.cljs$core$IFn$_invoke$arity$1 ? fexpr__45241.cljs$core$IFn$_invoke$arity$1(p1__45168_SHARP_) : fexpr__45241.call(null,p1__45168_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45246 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45246__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45246,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45246);
var G__45246__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45246__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45246__$1);
var G__45246__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45246__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45246__$2);
var G__45246__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45246__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45246__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45246__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45246__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45201__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45253){
var map__45254 = p__45253;
var map__45254__$1 = (((((!((map__45254 == null))))?(((((map__45254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45254):map__45254);
var triage_data = map__45254__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45254__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45254__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45254__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45254__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45254__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45254__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45254__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45254__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45258 = phase;
var G__45258__$1 = (((G__45258 instanceof cljs.core.Keyword))?G__45258.fqn:null);
switch (G__45258__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45259 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45260 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45261 = loc;
var G__45262 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45263_45382 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45264_45383 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45265_45384 = true;
var _STAR_print_fn_STAR__temp_val__45266_45385 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45265_45384);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45266_45385);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45251_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45251_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45264_45383);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45263_45382);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45259,G__45260,G__45261,G__45262) : format.call(null,G__45259,G__45260,G__45261,G__45262));

break;
case "macroexpansion":
var G__45267 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45268 = cause_type;
var G__45269 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45270 = loc;
var G__45271 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45267,G__45268,G__45269,G__45270,G__45271) : format.call(null,G__45267,G__45268,G__45269,G__45270,G__45271));

break;
case "compile-syntax-check":
var G__45272 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45273 = cause_type;
var G__45274 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45275 = loc;
var G__45276 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45272,G__45273,G__45274,G__45275,G__45276) : format.call(null,G__45272,G__45273,G__45274,G__45275,G__45276));

break;
case "compilation":
var G__45277 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45278 = cause_type;
var G__45279 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45280 = loc;
var G__45281 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45277,G__45278,G__45279,G__45280,G__45281) : format.call(null,G__45277,G__45278,G__45279,G__45280,G__45281));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45282 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45283 = symbol;
var G__45284 = loc;
var G__45285 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45286_45386 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45287_45387 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45288_45388 = true;
var _STAR_print_fn_STAR__temp_val__45289_45389 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45288_45388);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45289_45389);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45252_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45252_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45287_45387);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45286_45386);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45282,G__45283,G__45284,G__45285) : format.call(null,G__45282,G__45283,G__45284,G__45285));
} else {
var G__45291 = "Execution error%s at %s(%s).\n%s\n";
var G__45292 = cause_type;
var G__45293 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45294 = loc;
var G__45295 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45291,G__45292,G__45293,G__45294,G__45295) : format.call(null,G__45291,G__45292,G__45293,G__45294,G__45295));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45258__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
