goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45189){
var map__45190 = p__45189;
var map__45190__$1 = (((((!((map__45190 == null))))?(((((map__45190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45190):map__45190);
var m = map__45190__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45190__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45190__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__45193_45307 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45194_45308 = null;
var count__45195_45309 = (0);
var i__45196_45310 = (0);
while(true){
if((i__45196_45310 < count__45195_45309)){
var f_45311 = chunk__45194_45308.cljs$core$IIndexed$_nth$arity$2(null,i__45196_45310);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45311], 0));


var G__45312 = seq__45193_45307;
var G__45313 = chunk__45194_45308;
var G__45314 = count__45195_45309;
var G__45315 = (i__45196_45310 + (1));
seq__45193_45307 = G__45312;
chunk__45194_45308 = G__45313;
count__45195_45309 = G__45314;
i__45196_45310 = G__45315;
continue;
} else {
var temp__5735__auto___45317 = cljs.core.seq(seq__45193_45307);
if(temp__5735__auto___45317){
var seq__45193_45318__$1 = temp__5735__auto___45317;
if(cljs.core.chunked_seq_QMARK_(seq__45193_45318__$1)){
var c__4609__auto___45319 = cljs.core.chunk_first(seq__45193_45318__$1);
var G__45320 = cljs.core.chunk_rest(seq__45193_45318__$1);
var G__45321 = c__4609__auto___45319;
var G__45322 = cljs.core.count(c__4609__auto___45319);
var G__45323 = (0);
seq__45193_45307 = G__45320;
chunk__45194_45308 = G__45321;
count__45195_45309 = G__45322;
i__45196_45310 = G__45323;
continue;
} else {
var f_45324 = cljs.core.first(seq__45193_45318__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45324], 0));


var G__45325 = cljs.core.next(seq__45193_45318__$1);
var G__45326 = null;
var G__45327 = (0);
var G__45328 = (0);
seq__45193_45307 = G__45325;
chunk__45194_45308 = G__45326;
count__45195_45309 = G__45327;
i__45196_45310 = G__45328;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45329 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45329], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45329)))?cljs.core.second(arglists_45329):arglists_45329)], 0));
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
var seq__45198_45330 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45199_45331 = null;
var count__45200_45332 = (0);
var i__45201_45333 = (0);
while(true){
if((i__45201_45333 < count__45200_45332)){
var vec__45213_45334 = chunk__45199_45331.cljs$core$IIndexed$_nth$arity$2(null,i__45201_45333);
var name_45335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45213_45334,(0),null);
var map__45216_45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45213_45334,(1),null);
var map__45216_45337__$1 = (((((!((map__45216_45336 == null))))?(((((map__45216_45336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45216_45336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45216_45336):map__45216_45336);
var doc_45338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45216_45337__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45216_45337__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45335], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45339], 0));

if(cljs.core.truth_(doc_45338)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45338], 0));
} else {
}


var G__45340 = seq__45198_45330;
var G__45341 = chunk__45199_45331;
var G__45342 = count__45200_45332;
var G__45343 = (i__45201_45333 + (1));
seq__45198_45330 = G__45340;
chunk__45199_45331 = G__45341;
count__45200_45332 = G__45342;
i__45201_45333 = G__45343;
continue;
} else {
var temp__5735__auto___45344 = cljs.core.seq(seq__45198_45330);
if(temp__5735__auto___45344){
var seq__45198_45345__$1 = temp__5735__auto___45344;
if(cljs.core.chunked_seq_QMARK_(seq__45198_45345__$1)){
var c__4609__auto___45346 = cljs.core.chunk_first(seq__45198_45345__$1);
var G__45347 = cljs.core.chunk_rest(seq__45198_45345__$1);
var G__45348 = c__4609__auto___45346;
var G__45349 = cljs.core.count(c__4609__auto___45346);
var G__45350 = (0);
seq__45198_45330 = G__45347;
chunk__45199_45331 = G__45348;
count__45200_45332 = G__45349;
i__45201_45333 = G__45350;
continue;
} else {
var vec__45219_45351 = cljs.core.first(seq__45198_45345__$1);
var name_45352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45219_45351,(0),null);
var map__45222_45353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45219_45351,(1),null);
var map__45222_45354__$1 = (((((!((map__45222_45353 == null))))?(((((map__45222_45353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45222_45353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45222_45353):map__45222_45353);
var doc_45355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45222_45354__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45222_45354__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45352], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45356], 0));

if(cljs.core.truth_(doc_45355)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45355], 0));
} else {
}


var G__45357 = cljs.core.next(seq__45198_45345__$1);
var G__45358 = null;
var G__45359 = (0);
var G__45360 = (0);
seq__45198_45330 = G__45357;
chunk__45199_45331 = G__45358;
count__45200_45332 = G__45359;
i__45201_45333 = G__45360;
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

var seq__45225 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45226 = null;
var count__45227 = (0);
var i__45228 = (0);
while(true){
if((i__45228 < count__45227)){
var role = chunk__45226.cljs$core$IIndexed$_nth$arity$2(null,i__45228);
var temp__5735__auto___45362__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45362__$1)){
var spec_45363 = temp__5735__auto___45362__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45363)], 0));
} else {
}


var G__45364 = seq__45225;
var G__45365 = chunk__45226;
var G__45366 = count__45227;
var G__45367 = (i__45228 + (1));
seq__45225 = G__45364;
chunk__45226 = G__45365;
count__45227 = G__45366;
i__45228 = G__45367;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45225);
if(temp__5735__auto____$1){
var seq__45225__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45225__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45225__$1);
var G__45368 = cljs.core.chunk_rest(seq__45225__$1);
var G__45369 = c__4609__auto__;
var G__45370 = cljs.core.count(c__4609__auto__);
var G__45371 = (0);
seq__45225 = G__45368;
chunk__45226 = G__45369;
count__45227 = G__45370;
i__45228 = G__45371;
continue;
} else {
var role = cljs.core.first(seq__45225__$1);
var temp__5735__auto___45372__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45372__$2)){
var spec_45373 = temp__5735__auto___45372__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45373)], 0));
} else {
}


var G__45374 = cljs.core.next(seq__45225__$1);
var G__45375 = null;
var G__45376 = (0);
var G__45377 = (0);
seq__45225 = G__45374;
chunk__45226 = G__45375;
count__45227 = G__45376;
i__45228 = G__45377;
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
var G__45378 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45379 = cljs.core.ex_cause(t);
via = G__45378;
t = G__45379;
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
var map__45232 = datafied_throwable;
var map__45232__$1 = (((((!((map__45232 == null))))?(((((map__45232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45232):map__45232);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45232__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45232__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45232__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45233 = cljs.core.last(via);
var map__45233__$1 = (((((!((map__45233 == null))))?(((((map__45233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45233):map__45233);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45233__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45233__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45233__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45234 = data;
var map__45234__$1 = (((((!((map__45234 == null))))?(((((map__45234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45234):map__45234);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45234__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45234__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45234__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45235 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45235__$1 = (((((!((map__45235 == null))))?(((((map__45235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45235):map__45235);
var top_data = map__45235__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45235__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45240 = phase;
var G__45240__$1 = (((G__45240 instanceof cljs.core.Keyword))?G__45240.fqn:null);
switch (G__45240__$1) {
case "read-source":
var map__45241 = data;
var map__45241__$1 = (((((!((map__45241 == null))))?(((((map__45241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45241):map__45241);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45241__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45241__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45243 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45243__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45243,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45243);
var G__45243__$2 = (cljs.core.truth_((function (){var fexpr__45244 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45244.cljs$core$IFn$_invoke$arity$1 ? fexpr__45244.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45244.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45243__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45243__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45243__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45243__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45245 = top_data;
var G__45245__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45245,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45245);
var G__45245__$2 = (cljs.core.truth_((function (){var fexpr__45246 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45246.cljs$core$IFn$_invoke$arity$1 ? fexpr__45246.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45246.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45245__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45245__$1);
var G__45245__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45245__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45245__$2);
var G__45245__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45245__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45245__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45245__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45245__$4;
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
var vec__45255 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45255,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45255,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45255,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45255,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45231_SHARP_){
var or__4185__auto__ = (p1__45231_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45259 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45259.cljs$core$IFn$_invoke$arity$1 ? fexpr__45259.cljs$core$IFn$_invoke$arity$1(p1__45231_SHARP_) : fexpr__45259.call(null,p1__45231_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45264 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45264__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45264,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45264);
var G__45264__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45264__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45264__$1);
var G__45264__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45264__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45264__$2);
var G__45264__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45264__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45264__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45264__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45264__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45240__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45267){
var map__45268 = p__45267;
var map__45268__$1 = (((((!((map__45268 == null))))?(((((map__45268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45268):map__45268);
var triage_data = map__45268__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45268__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45268__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45268__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45268__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45268__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45268__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45268__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45268__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__45270 = phase;
var G__45270__$1 = (((G__45270 instanceof cljs.core.Keyword))?G__45270.fqn:null);
switch (G__45270__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45271 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45272 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45273 = loc;
var G__45274 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45275_45387 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45276_45388 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45277_45389 = true;
var _STAR_print_fn_STAR__temp_val__45278_45390 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45277_45389);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45278_45390);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45265_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45265_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45276_45388);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45275_45387);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45271,G__45272,G__45273,G__45274) : format.call(null,G__45271,G__45272,G__45273,G__45274));

break;
case "macroexpansion":
var G__45279 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45280 = cause_type;
var G__45281 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45282 = loc;
var G__45283 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45279,G__45280,G__45281,G__45282,G__45283) : format.call(null,G__45279,G__45280,G__45281,G__45282,G__45283));

break;
case "compile-syntax-check":
var G__45284 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45285 = cause_type;
var G__45286 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45287 = loc;
var G__45288 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45284,G__45285,G__45286,G__45287,G__45288) : format.call(null,G__45284,G__45285,G__45286,G__45287,G__45288));

break;
case "compilation":
var G__45289 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45290 = cause_type;
var G__45291 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45292 = loc;
var G__45293 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45289,G__45290,G__45291,G__45292,G__45293) : format.call(null,G__45289,G__45290,G__45291,G__45292,G__45293));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45294 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45295 = symbol;
var G__45296 = loc;
var G__45297 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45298_45392 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45299_45393 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45300_45394 = true;
var _STAR_print_fn_STAR__temp_val__45301_45395 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45300_45394);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45301_45395);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45266_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45266_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45299_45393);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45298_45392);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45294,G__45295,G__45296,G__45297) : format.call(null,G__45294,G__45295,G__45296,G__45297));
} else {
var G__45302 = "Execution error%s at %s(%s).\n%s\n";
var G__45303 = cause_type;
var G__45304 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45305 = loc;
var G__45306 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45302,G__45303,G__45304,G__45305,G__45306) : format.call(null,G__45302,G__45303,G__45304,G__45305,G__45306));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45270__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
