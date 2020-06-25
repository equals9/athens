goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45101){
var map__45102 = p__45101;
var map__45102__$1 = (((((!((map__45102 == null))))?(((((map__45102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45102):map__45102);
var m = map__45102__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45102__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45102__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45121_45310 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45122_45311 = null;
var count__45123_45312 = (0);
var i__45124_45313 = (0);
while(true){
if((i__45124_45313 < count__45123_45312)){
var f_45314 = chunk__45122_45311.cljs$core$IIndexed$_nth$arity$2(null,i__45124_45313);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45314], 0));


var G__45315 = seq__45121_45310;
var G__45316 = chunk__45122_45311;
var G__45317 = count__45123_45312;
var G__45318 = (i__45124_45313 + (1));
seq__45121_45310 = G__45315;
chunk__45122_45311 = G__45316;
count__45123_45312 = G__45317;
i__45124_45313 = G__45318;
continue;
} else {
var temp__5735__auto___45319 = cljs.core.seq(seq__45121_45310);
if(temp__5735__auto___45319){
var seq__45121_45320__$1 = temp__5735__auto___45319;
if(cljs.core.chunked_seq_QMARK_(seq__45121_45320__$1)){
var c__4609__auto___45321 = cljs.core.chunk_first(seq__45121_45320__$1);
var G__45322 = cljs.core.chunk_rest(seq__45121_45320__$1);
var G__45323 = c__4609__auto___45321;
var G__45324 = cljs.core.count(c__4609__auto___45321);
var G__45325 = (0);
seq__45121_45310 = G__45322;
chunk__45122_45311 = G__45323;
count__45123_45312 = G__45324;
i__45124_45313 = G__45325;
continue;
} else {
var f_45326 = cljs.core.first(seq__45121_45320__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45326], 0));


var G__45327 = cljs.core.next(seq__45121_45320__$1);
var G__45328 = null;
var G__45329 = (0);
var G__45330 = (0);
seq__45121_45310 = G__45327;
chunk__45122_45311 = G__45328;
count__45123_45312 = G__45329;
i__45124_45313 = G__45330;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45333 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45333], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45333)))?cljs.core.second(arglists_45333):arglists_45333)], 0));
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
var seq__45136_45336 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45137_45337 = null;
var count__45138_45338 = (0);
var i__45139_45339 = (0);
while(true){
if((i__45139_45339 < count__45138_45338)){
var vec__45184_45340 = chunk__45137_45337.cljs$core$IIndexed$_nth$arity$2(null,i__45139_45339);
var name_45341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45184_45340,(0),null);
var map__45187_45342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45184_45340,(1),null);
var map__45187_45343__$1 = (((((!((map__45187_45342 == null))))?(((((map__45187_45342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45187_45342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45187_45342):map__45187_45342);
var doc_45344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45187_45343__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45187_45343__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45341], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45345], 0));

if(cljs.core.truth_(doc_45344)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45344], 0));
} else {
}


var G__45346 = seq__45136_45336;
var G__45347 = chunk__45137_45337;
var G__45348 = count__45138_45338;
var G__45349 = (i__45139_45339 + (1));
seq__45136_45336 = G__45346;
chunk__45137_45337 = G__45347;
count__45138_45338 = G__45348;
i__45139_45339 = G__45349;
continue;
} else {
var temp__5735__auto___45350 = cljs.core.seq(seq__45136_45336);
if(temp__5735__auto___45350){
var seq__45136_45351__$1 = temp__5735__auto___45350;
if(cljs.core.chunked_seq_QMARK_(seq__45136_45351__$1)){
var c__4609__auto___45352 = cljs.core.chunk_first(seq__45136_45351__$1);
var G__45353 = cljs.core.chunk_rest(seq__45136_45351__$1);
var G__45354 = c__4609__auto___45352;
var G__45355 = cljs.core.count(c__4609__auto___45352);
var G__45356 = (0);
seq__45136_45336 = G__45353;
chunk__45137_45337 = G__45354;
count__45138_45338 = G__45355;
i__45139_45339 = G__45356;
continue;
} else {
var vec__45189_45357 = cljs.core.first(seq__45136_45351__$1);
var name_45358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45189_45357,(0),null);
var map__45192_45359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45189_45357,(1),null);
var map__45192_45360__$1 = (((((!((map__45192_45359 == null))))?(((((map__45192_45359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45192_45359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45192_45359):map__45192_45359);
var doc_45361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45192_45360__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45192_45360__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45358], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45362], 0));

if(cljs.core.truth_(doc_45361)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45361], 0));
} else {
}


var G__45363 = cljs.core.next(seq__45136_45351__$1);
var G__45364 = null;
var G__45365 = (0);
var G__45366 = (0);
seq__45136_45336 = G__45363;
chunk__45137_45337 = G__45364;
count__45138_45338 = G__45365;
i__45139_45339 = G__45366;
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

var seq__45201 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45202 = null;
var count__45203 = (0);
var i__45204 = (0);
while(true){
if((i__45204 < count__45203)){
var role = chunk__45202.cljs$core$IIndexed$_nth$arity$2(null,i__45204);
var temp__5735__auto___45367__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45367__$1)){
var spec_45368 = temp__5735__auto___45367__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45368)], 0));
} else {
}


var G__45369 = seq__45201;
var G__45370 = chunk__45202;
var G__45371 = count__45203;
var G__45372 = (i__45204 + (1));
seq__45201 = G__45369;
chunk__45202 = G__45370;
count__45203 = G__45371;
i__45204 = G__45372;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45201);
if(temp__5735__auto____$1){
var seq__45201__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45201__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45201__$1);
var G__45373 = cljs.core.chunk_rest(seq__45201__$1);
var G__45374 = c__4609__auto__;
var G__45375 = cljs.core.count(c__4609__auto__);
var G__45376 = (0);
seq__45201 = G__45373;
chunk__45202 = G__45374;
count__45203 = G__45375;
i__45204 = G__45376;
continue;
} else {
var role = cljs.core.first(seq__45201__$1);
var temp__5735__auto___45377__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45377__$2)){
var spec_45378 = temp__5735__auto___45377__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45378)], 0));
} else {
}


var G__45379 = cljs.core.next(seq__45201__$1);
var G__45380 = null;
var G__45381 = (0);
var G__45382 = (0);
seq__45201 = G__45379;
chunk__45202 = G__45380;
count__45203 = G__45381;
i__45204 = G__45382;
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
var G__45383 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45384 = cljs.core.ex_cause(t);
via = G__45383;
t = G__45384;
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
var map__45235 = datafied_throwable;
var map__45235__$1 = (((((!((map__45235 == null))))?(((((map__45235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45235):map__45235);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45235__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45235__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45235__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45236 = cljs.core.last(via);
var map__45236__$1 = (((((!((map__45236 == null))))?(((((map__45236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45236):map__45236);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45236__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45236__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45236__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45237 = data;
var map__45237__$1 = (((((!((map__45237 == null))))?(((((map__45237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45237):map__45237);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45237__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45237__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45237__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45238 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45238__$1 = (((((!((map__45238 == null))))?(((((map__45238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45238):map__45238);
var top_data = map__45238__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45238__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45243 = phase;
var G__45243__$1 = (((G__45243 instanceof cljs.core.Keyword))?G__45243.fqn:null);
switch (G__45243__$1) {
case "read-source":
var map__45244 = data;
var map__45244__$1 = (((((!((map__45244 == null))))?(((((map__45244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45244):map__45244);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45244__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45244__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45246 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45246__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45246,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45246);
var G__45246__$2 = (cljs.core.truth_((function (){var fexpr__45248 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45248.cljs$core$IFn$_invoke$arity$1 ? fexpr__45248.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45248.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45246__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45246__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45246__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45246__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45249 = top_data;
var G__45249__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45249,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45249);
var G__45249__$2 = (cljs.core.truth_((function (){var fexpr__45250 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45250.cljs$core$IFn$_invoke$arity$1 ? fexpr__45250.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45250.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45249__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45249__$1);
var G__45249__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45249__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45249__$2);
var G__45249__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45249__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45249__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45249__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45249__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45251 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45251,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45251,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45251,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45251,(3),null);
var G__45254 = top_data;
var G__45254__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45254,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45254);
var G__45254__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45254__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45254__$1);
var G__45254__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45254__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45254__$2);
var G__45254__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45254__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45254__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45254__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45254__$4;
}

break;
case "execution":
var vec__45256 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45256,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45256,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45256,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45256,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45234_SHARP_){
var or__4185__auto__ = (p1__45234_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45261 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45261.cljs$core$IFn$_invoke$arity$1 ? fexpr__45261.cljs$core$IFn$_invoke$arity$1(p1__45234_SHARP_) : fexpr__45261.call(null,p1__45234_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45262 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45262__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45262,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45262);
var G__45262__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45262__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45262__$1);
var G__45262__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45262__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45262__$2);
var G__45262__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45262__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45262__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45262__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45262__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45243__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45265){
var map__45266 = p__45265;
var map__45266__$1 = (((((!((map__45266 == null))))?(((((map__45266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45266):map__45266);
var triage_data = map__45266__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45266__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45266__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45266__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45266__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45266__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45266__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45266__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45266__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45269 = phase;
var G__45269__$1 = (((G__45269 instanceof cljs.core.Keyword))?G__45269.fqn:null);
switch (G__45269__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45270 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45271 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45272 = loc;
var G__45273 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45274_45389 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45275_45390 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45276_45391 = true;
var _STAR_print_fn_STAR__temp_val__45277_45392 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45276_45391);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45277_45392);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45263_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45263_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45275_45390);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45274_45389);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45270,G__45271,G__45272,G__45273) : format.call(null,G__45270,G__45271,G__45272,G__45273));

break;
case "macroexpansion":
var G__45278 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45279 = cause_type;
var G__45280 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45281 = loc;
var G__45282 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45278,G__45279,G__45280,G__45281,G__45282) : format.call(null,G__45278,G__45279,G__45280,G__45281,G__45282));

break;
case "compile-syntax-check":
var G__45283 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45284 = cause_type;
var G__45285 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45286 = loc;
var G__45287 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45283,G__45284,G__45285,G__45286,G__45287) : format.call(null,G__45283,G__45284,G__45285,G__45286,G__45287));

break;
case "compilation":
var G__45288 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45289 = cause_type;
var G__45290 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45291 = loc;
var G__45292 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45288,G__45289,G__45290,G__45291,G__45292) : format.call(null,G__45288,G__45289,G__45290,G__45291,G__45292));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45293 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45294 = symbol;
var G__45295 = loc;
var G__45296 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45297_45396 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45298_45397 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45299_45398 = true;
var _STAR_print_fn_STAR__temp_val__45300_45399 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45299_45398);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45300_45399);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45264_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45264_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45298_45397);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45297_45396);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45293,G__45294,G__45295,G__45296) : format.call(null,G__45293,G__45294,G__45295,G__45296));
} else {
var G__45301 = "Execution error%s at %s(%s).\n%s\n";
var G__45302 = cause_type;
var G__45303 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45304 = loc;
var G__45305 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45301,G__45302,G__45303,G__45304,G__45305) : format.call(null,G__45301,G__45302,G__45303,G__45304,G__45305));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45269__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
