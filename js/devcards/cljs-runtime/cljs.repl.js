goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45094){
var map__45095 = p__45094;
var map__45095__$1 = (((((!((map__45095 == null))))?(((((map__45095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45095):map__45095);
var m = map__45095__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45095__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45095__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45097_45301 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45098_45302 = null;
var count__45099_45303 = (0);
var i__45100_45304 = (0);
while(true){
if((i__45100_45304 < count__45099_45303)){
var f_45306 = chunk__45098_45302.cljs$core$IIndexed$_nth$arity$2(null,i__45100_45304);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45306], 0));


var G__45307 = seq__45097_45301;
var G__45308 = chunk__45098_45302;
var G__45309 = count__45099_45303;
var G__45310 = (i__45100_45304 + (1));
seq__45097_45301 = G__45307;
chunk__45098_45302 = G__45308;
count__45099_45303 = G__45309;
i__45100_45304 = G__45310;
continue;
} else {
var temp__5735__auto___45311 = cljs.core.seq(seq__45097_45301);
if(temp__5735__auto___45311){
var seq__45097_45312__$1 = temp__5735__auto___45311;
if(cljs.core.chunked_seq_QMARK_(seq__45097_45312__$1)){
var c__4609__auto___45313 = cljs.core.chunk_first(seq__45097_45312__$1);
var G__45314 = cljs.core.chunk_rest(seq__45097_45312__$1);
var G__45315 = c__4609__auto___45313;
var G__45316 = cljs.core.count(c__4609__auto___45313);
var G__45317 = (0);
seq__45097_45301 = G__45314;
chunk__45098_45302 = G__45315;
count__45099_45303 = G__45316;
i__45100_45304 = G__45317;
continue;
} else {
var f_45318 = cljs.core.first(seq__45097_45312__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45318], 0));


var G__45319 = cljs.core.next(seq__45097_45312__$1);
var G__45320 = null;
var G__45321 = (0);
var G__45322 = (0);
seq__45097_45301 = G__45319;
chunk__45098_45302 = G__45320;
count__45099_45303 = G__45321;
i__45100_45304 = G__45322;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45323 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45323], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45323)))?cljs.core.second(arglists_45323):arglists_45323)], 0));
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
var seq__45102_45325 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45103_45326 = null;
var count__45104_45327 = (0);
var i__45105_45328 = (0);
while(true){
if((i__45105_45328 < count__45104_45327)){
var vec__45117_45329 = chunk__45103_45326.cljs$core$IIndexed$_nth$arity$2(null,i__45105_45328);
var name_45330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45117_45329,(0),null);
var map__45120_45331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45117_45329,(1),null);
var map__45120_45332__$1 = (((((!((map__45120_45331 == null))))?(((((map__45120_45331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45120_45331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45120_45331):map__45120_45331);
var doc_45333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45120_45332__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45120_45332__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45330], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45334], 0));

if(cljs.core.truth_(doc_45333)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45333], 0));
} else {
}


var G__45335 = seq__45102_45325;
var G__45336 = chunk__45103_45326;
var G__45337 = count__45104_45327;
var G__45338 = (i__45105_45328 + (1));
seq__45102_45325 = G__45335;
chunk__45103_45326 = G__45336;
count__45104_45327 = G__45337;
i__45105_45328 = G__45338;
continue;
} else {
var temp__5735__auto___45339 = cljs.core.seq(seq__45102_45325);
if(temp__5735__auto___45339){
var seq__45102_45341__$1 = temp__5735__auto___45339;
if(cljs.core.chunked_seq_QMARK_(seq__45102_45341__$1)){
var c__4609__auto___45342 = cljs.core.chunk_first(seq__45102_45341__$1);
var G__45343 = cljs.core.chunk_rest(seq__45102_45341__$1);
var G__45344 = c__4609__auto___45342;
var G__45345 = cljs.core.count(c__4609__auto___45342);
var G__45346 = (0);
seq__45102_45325 = G__45343;
chunk__45103_45326 = G__45344;
count__45104_45327 = G__45345;
i__45105_45328 = G__45346;
continue;
} else {
var vec__45122_45347 = cljs.core.first(seq__45102_45341__$1);
var name_45348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45122_45347,(0),null);
var map__45125_45349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45122_45347,(1),null);
var map__45125_45350__$1 = (((((!((map__45125_45349 == null))))?(((((map__45125_45349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45125_45349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45125_45349):map__45125_45349);
var doc_45351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45125_45350__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45125_45350__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45348], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45352], 0));

if(cljs.core.truth_(doc_45351)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45351], 0));
} else {
}


var G__45354 = cljs.core.next(seq__45102_45341__$1);
var G__45355 = null;
var G__45356 = (0);
var G__45357 = (0);
seq__45102_45325 = G__45354;
chunk__45103_45326 = G__45355;
count__45104_45327 = G__45356;
i__45105_45328 = G__45357;
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

var seq__45127 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45128 = null;
var count__45129 = (0);
var i__45130 = (0);
while(true){
if((i__45130 < count__45129)){
var role = chunk__45128.cljs$core$IIndexed$_nth$arity$2(null,i__45130);
var temp__5735__auto___45358__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45358__$1)){
var spec_45359 = temp__5735__auto___45358__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45359)], 0));
} else {
}


var G__45360 = seq__45127;
var G__45361 = chunk__45128;
var G__45362 = count__45129;
var G__45363 = (i__45130 + (1));
seq__45127 = G__45360;
chunk__45128 = G__45361;
count__45129 = G__45362;
i__45130 = G__45363;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45127);
if(temp__5735__auto____$1){
var seq__45127__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45127__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45127__$1);
var G__45364 = cljs.core.chunk_rest(seq__45127__$1);
var G__45365 = c__4609__auto__;
var G__45366 = cljs.core.count(c__4609__auto__);
var G__45367 = (0);
seq__45127 = G__45364;
chunk__45128 = G__45365;
count__45129 = G__45366;
i__45130 = G__45367;
continue;
} else {
var role = cljs.core.first(seq__45127__$1);
var temp__5735__auto___45368__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45368__$2)){
var spec_45369 = temp__5735__auto___45368__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45369)], 0));
} else {
}


var G__45370 = cljs.core.next(seq__45127__$1);
var G__45371 = null;
var G__45372 = (0);
var G__45373 = (0);
seq__45127 = G__45370;
chunk__45128 = G__45371;
count__45129 = G__45372;
i__45130 = G__45373;
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
var G__45375 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45376 = cljs.core.ex_cause(t);
via = G__45375;
t = G__45376;
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
var map__45138 = datafied_throwable;
var map__45138__$1 = (((((!((map__45138 == null))))?(((((map__45138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45138):map__45138);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45138__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45138__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45138__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45139 = cljs.core.last(via);
var map__45139__$1 = (((((!((map__45139 == null))))?(((((map__45139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45139):map__45139);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45139__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45139__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45139__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45140 = data;
var map__45140__$1 = (((((!((map__45140 == null))))?(((((map__45140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45140):map__45140);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45140__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45140__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45140__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45141 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45141__$1 = (((((!((map__45141 == null))))?(((((map__45141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45141):map__45141);
var top_data = map__45141__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45141__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45163 = phase;
var G__45163__$1 = (((G__45163 instanceof cljs.core.Keyword))?G__45163.fqn:null);
switch (G__45163__$1) {
case "read-source":
var map__45164 = data;
var map__45164__$1 = (((((!((map__45164 == null))))?(((((map__45164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45164):map__45164);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45164__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45164__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45166 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45166__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45166,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45166);
var G__45166__$2 = (cljs.core.truth_((function (){var fexpr__45167 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45167.cljs$core$IFn$_invoke$arity$1 ? fexpr__45167.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45167.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45166__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45166__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45166__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45166__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45168 = top_data;
var G__45168__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45168,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45168);
var G__45168__$2 = (cljs.core.truth_((function (){var fexpr__45173 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45173.cljs$core$IFn$_invoke$arity$1 ? fexpr__45173.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45173.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45168__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45168__$1);
var G__45168__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45168__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45168__$2);
var G__45168__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45168__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45168__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45168__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45168__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45177 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45177,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45177,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45177,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45177,(3),null);
var G__45180 = top_data;
var G__45180__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45180,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45180);
var G__45180__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45180__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45180__$1);
var G__45180__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45180__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45180__$2);
var G__45180__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45180__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45180__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45180__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45180__$4;
}

break;
case "execution":
var vec__45192 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45192,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45192,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45192,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45192,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45137_SHARP_){
var or__4185__auto__ = (p1__45137_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45199 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45199.cljs$core$IFn$_invoke$arity$1 ? fexpr__45199.cljs$core$IFn$_invoke$arity$1(p1__45137_SHARP_) : fexpr__45199.call(null,p1__45137_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45200 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45200__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45200,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45200);
var G__45200__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45200__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45200__$1);
var G__45200__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45200__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45200__$2);
var G__45200__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45200__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45200__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45200__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45200__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45163__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45227){
var map__45228 = p__45227;
var map__45228__$1 = (((((!((map__45228 == null))))?(((((map__45228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45228):map__45228);
var triage_data = map__45228__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45228__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45237 = phase;
var G__45237__$1 = (((G__45237 instanceof cljs.core.Keyword))?G__45237.fqn:null);
switch (G__45237__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45243 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45244 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45245 = loc;
var G__45246 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45253_45387 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45254_45388 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45255_45389 = true;
var _STAR_print_fn_STAR__temp_val__45256_45390 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45255_45389);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45256_45390);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45225_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45225_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45254_45388);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45253_45387);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45243,G__45244,G__45245,G__45246) : format.call(null,G__45243,G__45244,G__45245,G__45246));

break;
case "macroexpansion":
var G__45264 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45265 = cause_type;
var G__45266 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45267 = loc;
var G__45268 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45264,G__45265,G__45266,G__45267,G__45268) : format.call(null,G__45264,G__45265,G__45266,G__45267,G__45268));

break;
case "compile-syntax-check":
var G__45273 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45274 = cause_type;
var G__45275 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45276 = loc;
var G__45277 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45273,G__45274,G__45275,G__45276,G__45277) : format.call(null,G__45273,G__45274,G__45275,G__45276,G__45277));

break;
case "compilation":
var G__45278 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45279 = cause_type;
var G__45280 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45281 = loc;
var G__45282 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45278,G__45279,G__45280,G__45281,G__45282) : format.call(null,G__45278,G__45279,G__45280,G__45281,G__45282));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45283 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45284 = symbol;
var G__45285 = loc;
var G__45286 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45287_45391 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45288_45392 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45289_45393 = true;
var _STAR_print_fn_STAR__temp_val__45290_45394 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45289_45393);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45290_45394);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45226_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45226_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45288_45392);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45287_45391);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45283,G__45284,G__45285,G__45286) : format.call(null,G__45283,G__45284,G__45285,G__45286));
} else {
var G__45295 = "Execution error%s at %s(%s).\n%s\n";
var G__45296 = cause_type;
var G__45297 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45298 = loc;
var G__45299 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45295,G__45296,G__45297,G__45298,G__45299) : format.call(null,G__45295,G__45296,G__45297,G__45298,G__45299));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45237__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map